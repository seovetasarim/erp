import { getDb } from "@/lib/db";
import type { DbExecutor } from "@/lib/db/mysql";
import { mysqlAll, mysqlGet, mysqlRun, nowSql, useMysql } from "@/lib/db/mysql";
import type { OrderRow, UserRow } from "@/lib/db/schema";
import {
  buildLicenseEmailHtml,
  buildRenewalReminderHtml,
  sendMail,
} from "@/lib/email/mailer";
import { computeExpiryFromDays } from "@/lib/license/duration";
import {
  computeLicenseExpiry,
  extendExpiryFromBase,
  generateLicenseKey,
} from "@/lib/license/generate";
import type { CheckoutPlan } from "@/lib/commerce/plans";

export type FulfillResult = {
  licenseKeys: string[];
  expiresAt: string | null;
  isRenewal: boolean;
};

function formatTrDate(iso: string | null) {
  if (!iso) return "Süresiz";
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(iso));
}

export async function logEmail(input: {
  userId?: number;
  orderId?: number;
  type: string;
  recipient: string;
  status: "sent" | "failed" | "skipped";
  detail?: string;
}) {
  const params = [
    input.userId ?? null,
    input.orderId ?? null,
    input.type,
    input.recipient,
    input.status,
    input.detail ?? null,
  ];
  const sql = `INSERT INTO email_logs (user_id, order_id, type, recipient, status, detail)
     VALUES (?, ?, ?, ?, ?, ?)`;

  if (useMysql()) {
    await mysqlRun(sql, params);
    return;
  }
  getDb().prepare(sql).run(...params);
}

export async function upsertSubscription(input: {
  userId: number;
  planId: string;
  billingMode: string;
  expiresAt: string | null;
  autoRenew?: boolean;
  paytrUtoken?: string | null;
  paytrCtoken?: string | null;
}) {
  if (input.billingMode !== "monthly" || !input.expiresAt) return;

  if (useMysql()) {
    const existing = await mysqlAll<{
      id: number;
      paytr_utoken: string | null;
      paytr_ctoken: string | null;
    }>(
      "SELECT id, paytr_utoken, paytr_ctoken FROM subscriptions WHERE user_id = ? AND plan_id = ? AND billing_mode = ?",
      [input.userId, input.planId, input.billingMode],
    );
    const row = existing[0];
    const utoken = input.paytrUtoken ?? row?.paytr_utoken ?? null;
    const ctoken = input.paytrCtoken ?? row?.paytr_ctoken ?? null;

    if (row) {
      await mysqlRun(
        `UPDATE subscriptions
         SET status = 'active', next_renewal_at = ?, reminder_sent_at = NULL,
             auto_renew = ?, paytr_utoken = COALESCE(?, paytr_utoken),
             paytr_ctoken = COALESCE(?, paytr_ctoken), updated_at = ${nowSql()}
         WHERE id = ?`,
        [input.expiresAt, input.autoRenew ? 1 : 0, utoken, ctoken, row.id],
      );
      return;
    }

    await mysqlRun(
      `INSERT INTO subscriptions (user_id, plan_id, billing_mode, status, auto_renew, next_renewal_at, paytr_utoken, paytr_ctoken)
       VALUES (?, ?, ?, 'active', ?, ?, ?, ?)`,
      [
        input.userId,
        input.planId,
        input.billingMode,
        input.autoRenew ? 1 : 0,
        input.expiresAt,
        utoken,
        ctoken,
      ],
    );
    return;
  }

  const db = getDb();
  const existing = db
    .prepare(
      "SELECT id, paytr_utoken, paytr_ctoken FROM subscriptions WHERE user_id = ? AND plan_id = ? AND billing_mode = ?",
    )
    .get(input.userId, input.planId, input.billingMode) as
    | { id: number; paytr_utoken: string | null; paytr_ctoken: string | null }
    | undefined;

  const utoken = input.paytrUtoken ?? existing?.paytr_utoken ?? null;
  const ctoken = input.paytrCtoken ?? existing?.paytr_ctoken ?? null;

  if (existing) {
    db.prepare(
      `UPDATE subscriptions
       SET status = 'active', next_renewal_at = ?, reminder_sent_at = NULL,
           auto_renew = ?, paytr_utoken = COALESCE(?, paytr_utoken),
           paytr_ctoken = COALESCE(?, paytr_ctoken), updated_at = datetime('now')
       WHERE id = ?`,
    ).run(input.expiresAt, input.autoRenew ? 1 : 0, utoken, ctoken, existing.id);
    return;
  }

  db.prepare(
    `INSERT INTO subscriptions (user_id, plan_id, billing_mode, status, auto_renew, next_renewal_at, paytr_utoken, paytr_ctoken)
     VALUES (?, ?, ?, 'active', ?, ?, ?, ?)`,
  ).run(
    input.userId,
    input.planId,
    input.billingMode,
    input.autoRenew ? 1 : 0,
    input.expiresAt,
    utoken,
    ctoken,
  );
}

export async function saveUserPaytrToken(userId: number, utoken: string) {
  if (useMysql()) {
    await mysqlRun("UPDATE users SET paytr_utoken = ? WHERE id = ?", [utoken, userId]);
    return;
  }
  getDb().prepare("UPDATE users SET paytr_utoken = ? WHERE id = ?").run(utoken, userId);
}

async function renewMonthlyLicenses(
  order: OrderRow,
  plan: CheckoutPlan,
  exec?: DbExecutor,
): Promise<FulfillResult> {
  const selectSql = `SELECT id, license_key, expires_at FROM licenses
       WHERE user_id = ? AND plan_id = ? AND billing_mode = 'monthly'
       ORDER BY created_at ASC`;

  const rows = exec
    ? await exec.all<{
        id: number;
        license_key: string;
        expires_at: string | null;
      }>(selectSql, [order.user_id, plan.id])
    : (getDb().prepare(selectSql.replace("created_at", "datetime(created_at)")).all(
        order.user_id,
        plan.id,
      ) as {
        id: number;
        license_key: string;
        expires_at: string | null;
      }[]);

  if (rows.length === 0) {
    return createNewLicenses(order, plan, exec);
  }

  let maxExpiry: string | null = null;
  const keys: string[] = [];

  for (const row of rows) {
    const newExpiry = extendExpiryFromBase(row.expires_at);
    if (exec) {
      await exec.run("UPDATE licenses SET expires_at = ?, status = 'active' WHERE id = ?", [
        newExpiry,
        row.id,
      ]);
    } else {
      getDb()
        .prepare("UPDATE licenses SET expires_at = ?, status = 'active' WHERE id = ?")
        .run(newExpiry, row.id);
    }
    keys.push(row.license_key);
    if (!maxExpiry || new Date(newExpiry) > new Date(maxExpiry)) {
      maxExpiry = newExpiry;
    }
  }

  return { licenseKeys: keys, expiresAt: maxExpiry, isRenewal: true };
}

async function createNewLicenses(
  order: OrderRow,
  plan: CheckoutPlan,
  exec?: DbExecutor,
  expiresAtOverride?: string | null,
): Promise<FulfillResult> {
  const expiresAt =
    expiresAtOverride !== undefined
      ? expiresAtOverride
      : plan.billingMode === "monthly"
        ? computeLicenseExpiry("monthly")
        : computeLicenseExpiry("lifetime");
  const keys: string[] = [];

  for (let i = 0; i < plan.licenseCount; i += 1) {
    const key = generateLicenseKey();
    const params = [
      order.user_id,
      order.id,
      key,
      plan.id,
      plan.billingMode,
      plan.maxPcs,
      expiresAt,
    ];
    if (exec) {
      await exec.run(
        `INSERT INTO licenses (user_id, order_id, license_key, plan_id, billing_mode, max_pcs, expires_at, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, 'active')`,
        params,
      );
    } else {
      getDb()
        .prepare(
          `INSERT INTO licenses (user_id, order_id, license_key, plan_id, billing_mode, max_pcs, expires_at, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, 'active')`,
        )
        .run(...params);
    }
    keys.push(key);
  }

  return { licenseKeys: keys, expiresAt, isRenewal: false };
}

export async function fulfillOrderLicenses(
  order: OrderRow,
  plan: CheckoutPlan,
  exec?: DbExecutor,
): Promise<FulfillResult> {
  const existing = exec
    ? await exec.all<{ license_key: string; expires_at: string | null }>(
        "SELECT license_key, expires_at FROM licenses WHERE order_id = ?",
        [order.id],
      )
    : (getDb()
        .prepare("SELECT license_key, expires_at FROM licenses WHERE order_id = ?")
        .all(order.id) as { license_key: string; expires_at: string | null }[]);

  if (existing.length > 0) {
    return {
      licenseKeys: existing.map((r) => r.license_key),
      expiresAt: existing[0]?.expires_at ?? null,
      isRenewal: Boolean(order.is_renewal),
    };
  }

  if (order.is_renewal && plan.billingMode === "monthly") {
    return renewMonthlyLicenses(order, plan, exec);
  }

  return createNewLicenses(order, plan, exec);
}

export async function adminGenerateLicensesForOrder(
  order: OrderRow,
  plan: CheckoutPlan,
  input: { durationDays: number | null; sendEmail?: boolean },
): Promise<FulfillResult> {
  const existing = useMysql()
    ? await mysqlAll<{ license_key: string; expires_at: string | null }>(
        "SELECT license_key, expires_at FROM licenses WHERE order_id = ?",
        [order.id],
      )
    : (getDb()
        .prepare("SELECT license_key, expires_at FROM licenses WHERE order_id = ?")
        .all(order.id) as { license_key: string; expires_at: string | null }[]);

  if (existing.length > 0) {
    throw new Error("Bu sipariş için lisans zaten üretilmiş.");
  }

  const expiresAt = computeExpiryFromDays(input.durationDays);
  const result = await createNewLicenses(order, plan, undefined, expiresAt);

  if (plan.billingMode === "monthly" && expiresAt) {
    const user = useMysql()
      ? await mysqlGet<UserRow>("SELECT paytr_utoken FROM users WHERE id = ?", [order.user_id])
      : (getDb().prepare("SELECT paytr_utoken FROM users WHERE id = ?").get(order.user_id) as
          | Pick<UserRow, "paytr_utoken">
          | undefined);

    await upsertSubscription({
      userId: order.user_id,
      planId: plan.id,
      billingMode: plan.billingMode,
      expiresAt,
      autoRenew: Boolean(user?.paytr_utoken),
      paytrUtoken: user?.paytr_utoken ?? null,
    });
  }

  if (input.sendEmail) {
    await sendOrderLicenseEmail(order, plan, result);
  }

  return result;
}

export async function sendOrderLicenseEmail(
  order: OrderRow,
  plan: CheckoutPlan,
  result: FulfillResult,
) {
  if (order.email_sent_at) return;

  const user = useMysql()
    ? await mysqlGet<UserRow>("SELECT * FROM users WHERE id = ?", [order.user_id])
    : (getDb().prepare("SELECT * FROM users WHERE id = ?").get(order.user_id) as
        | UserRow
        | undefined);
  if (!user) return;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const remoteUrl = `${siteUrl}/api/licenses/remote`;
  const accountUrl = `${siteUrl}/hesabim`;
  const subject = result.isRenewal
    ? "DijitalERP lisansınız yenilendi"
    : "DijitalERP lisansınız hazır";

  try {
    const mailResult = await sendMail({
      to: user.email,
      subject,
      html: buildLicenseEmailHtml({
        name: user.name,
        planLabel: plan.label,
        customerCode: user.customer_code,
        remoteUrl,
        licenseKeys: result.licenseKeys,
        expiresAt: formatTrDate(result.expiresAt),
        accountUrl,
      }),
    });

    if (useMysql()) {
      await mysqlRun(`UPDATE orders SET email_sent_at = ${nowSql()} WHERE id = ?`, [
        order.id,
      ]);
    } else {
      getDb()
        .prepare("UPDATE orders SET email_sent_at = datetime('now') WHERE id = ?")
        .run(order.id);
    }

    await logEmail({
      userId: user.id,
      orderId: order.id,
      type: result.isRenewal ? "license_renewal" : "license_delivery",
      recipient: user.email,
      status: mailResult.skipped ? "skipped" : "sent",
    });
  } catch (error) {
    await logEmail({
      userId: user.id,
      orderId: order.id,
      type: result.isRenewal ? "license_renewal" : "license_delivery",
      recipient: user.email,
      status: "failed",
      detail: error instanceof Error ? error.message : "unknown",
    });
  }
}

export async function processSubscriptionReminders() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();
  const inThreeDays = new Date(now);
  inThreeDays.setDate(inThreeDays.getDate() + 3);

  const due = useMysql()
    ? await mysqlAll<{
        id: number;
        user_id: number;
        plan_id: string;
        next_renewal_at: string;
        email: string;
        name: string;
      }>(
        `SELECT s.id, s.user_id, s.plan_id, s.next_renewal_at, u.email, u.name
       FROM subscriptions s
       JOIN users u ON u.id = s.user_id
       WHERE s.status = 'active'
         AND s.billing_mode = 'monthly'
         AND s.next_renewal_at IS NOT NULL
         AND s.next_renewal_at <= ?
         AND (s.reminder_sent_at IS NULL OR s.reminder_sent_at < DATE_SUB(NOW(), INTERVAL 2 DAY))`,
        [inThreeDays.toISOString()],
      )
    : (getDb()
        .prepare(
          `SELECT s.id, s.user_id, s.plan_id, s.next_renewal_at, u.email, u.name
       FROM subscriptions s
       JOIN users u ON u.id = s.user_id
       WHERE s.status = 'active'
         AND s.billing_mode = 'monthly'
         AND s.next_renewal_at IS NOT NULL
         AND datetime(s.next_renewal_at) <= datetime(?)
         AND (s.reminder_sent_at IS NULL OR datetime(s.reminder_sent_at) < datetime('now', '-2 days'))`,
        )
        .all(inThreeDays.toISOString()) as Array<{
        id: number;
        user_id: number;
        plan_id: string;
        next_renewal_at: string;
        email: string;
        name: string;
      }>);

  const planLabels: Record<string, string> = {
    starter: "Başlangıç — Aylık Kiralama",
    pro: "Profesyonel — Aylık Kiralama",
  };

  let sent = 0;
  for (const sub of due) {
    const renewUrl = `${siteUrl}/odeme?paket=${sub.plan_id === "starter" ? "baslangic" : "profesyonel"}&odeme=aylik&yenile=1`;
    try {
      await sendMail({
        to: sub.email,
        subject: "DijitalERP lisans yenileme hatırlatması",
        html: buildRenewalReminderHtml({
          name: sub.name,
          planLabel: planLabels[sub.plan_id] || sub.plan_id,
          expiresAt: formatTrDate(sub.next_renewal_at),
          renewUrl,
        }),
      });

      if (useMysql()) {
        await mysqlRun(
          `UPDATE subscriptions SET reminder_sent_at = ${nowSql()}, updated_at = ${nowSql()} WHERE id = ?`,
          [sub.id],
        );
      } else {
        getDb()
          .prepare(
            "UPDATE subscriptions SET reminder_sent_at = datetime('now'), updated_at = datetime('now') WHERE id = ?",
          )
          .run(sub.id);
      }

      await logEmail({
        userId: sub.user_id,
        type: "renewal_reminder",
        recipient: sub.email,
        status: "sent",
      });
      sent += 1;
    } catch (error) {
      await logEmail({
        userId: sub.user_id,
        type: "renewal_reminder",
        recipient: sub.email,
        status: "failed",
        detail: error instanceof Error ? error.message : "unknown",
      });
    }
  }

  return { remindersSent: sent };
}
