import crypto from "crypto";
import { getDb } from "@/lib/db";
import type { LicenseRow, OrderRow, UserRow } from "@/lib/db/schema";
import {
  mysqlAll,
  mysqlGet,
  mysqlRun,
  nowSql,
  useMysql,
  withMysqlTransaction,
  type DbExecutor,
} from "@/lib/db/mysql";
import type { CheckoutPlan } from "@/lib/commerce/plans";
import { createCustomerCode } from "@/lib/auth/session";
import { fulfillOrderLicenses } from "@/lib/commerce/fulfillment";
import { countOpenSupportTickets } from "@/lib/support/repository";

export async function findUserByEmail(email: string) {
  const normalized = email.trim().toLowerCase();
  if (useMysql()) {
    return mysqlGet<UserRow>("SELECT * FROM users WHERE email = ?", [normalized]);
  }
  const db = getDb();
  return db.prepare("SELECT * FROM users WHERE email = ?").get(normalized) as
    | UserRow
    | undefined;
}

export async function findUserById(id: number) {
  if (useMysql()) {
    return mysqlGet<UserRow>("SELECT * FROM users WHERE id = ?", [id]);
  }
  const db = getDb();
  return db.prepare("SELECT * FROM users WHERE id = ?").get(id) as UserRow | undefined;
}

export async function createUser(input: {
  email: string;
  phone: string;
  passwordHash: string;
  name: string;
}) {
  const email = input.email.trim().toLowerCase();
  const phone = input.phone.trim();
  const name = input.name.trim();

  if (useMysql()) {
    return withMysqlTransaction(async (exec) => {
      const result = await exec.run(
        `INSERT INTO users (email, phone, password_hash, name, customer_code)
         VALUES (?, ?, ?, ?, 'TEMP')`,
        [email, phone, input.passwordHash, name],
      );
      const userId = result.insertId;
      const customerCode = createCustomerCode(userId);
      await exec.run("UPDATE users SET customer_code = ? WHERE id = ?", [
        customerCode,
        userId,
      ]);
      return (await exec.get<UserRow>("SELECT * FROM users WHERE id = ?", [userId]))!;
    });
  }

  const db = getDb();
  const insert = db.prepare(`
    INSERT INTO users (email, phone, password_hash, name, customer_code)
    VALUES (@email, @phone, @passwordHash, @name, @customerCode)
  `);

  const tx = db.transaction(() => {
    const result = insert.run({
      email,
      phone,
      passwordHash: input.passwordHash,
      name,
      customerCode: "TEMP",
    });
    const userId = Number(result.lastInsertRowid);
    const customerCode = createCustomerCode(userId);
    db.prepare("UPDATE users SET customer_code = ? WHERE id = ?").run(
      customerCode,
      userId,
    );
    return db.prepare("SELECT * FROM users WHERE id = ?").get(userId) as UserRow;
  });

  return tx();
}

export async function createPendingOrder(input: {
  userId: number;
  plan: CheckoutPlan;
  isRenewal?: boolean;
}) {
  const merchantOid = `DE${Date.now()}${crypto.randomBytes(3).toString("hex")}`.slice(
    0,
    64,
  );

  if (useMysql()) {
    const result = await mysqlRun(
      `INSERT INTO orders (user_id, merchant_oid, plan_id, billing_mode, amount_kurus, status, is_renewal)
       VALUES (?, ?, ?, ?, ?, 'pending', ?)`,
      [
        input.userId,
        merchantOid,
        input.plan.id,
        input.plan.billingMode,
        input.plan.amountKurus,
        input.isRenewal ? 1 : 0,
      ],
    );
    return (await mysqlGet<OrderRow>("SELECT * FROM orders WHERE id = ?", [
      result.insertId,
    ]))!;
  }

  const db = getDb();
  const result = db
    .prepare(
      `INSERT INTO orders (user_id, merchant_oid, plan_id, billing_mode, amount_kurus, status, is_renewal)
       VALUES (?, ?, ?, ?, ?, 'pending', ?)`,
    )
    .run(
      input.userId,
      merchantOid,
      input.plan.id,
      input.plan.billingMode,
      input.plan.amountKurus,
      input.isRenewal ? 1 : 0,
    );

  return db
    .prepare("SELECT * FROM orders WHERE id = ?")
    .get(Number(result.lastInsertRowid)) as OrderRow;
}

export async function getOrderByMerchantOid(merchantOid: string) {
  if (useMysql()) {
    return mysqlGet<OrderRow>("SELECT * FROM orders WHERE merchant_oid = ?", [merchantOid]);
  }
  const db = getDb();
  return db
    .prepare("SELECT * FROM orders WHERE merchant_oid = ?")
    .get(merchantOid) as OrderRow | undefined;
}

export async function markOrderPaid(merchantOid: string) {
  const sql = `UPDATE orders SET status = 'paid', paid_at = ${nowSql()} WHERE merchant_oid = ? AND status != 'paid'`;
  if (useMysql()) {
    await mysqlRun(sql, [merchantOid]);
    return;
  }
  getDb().prepare(sql).run(merchantOid);
}

export async function fulfillOrder(order: OrderRow, plan: CheckoutPlan) {
  if (useMysql()) {
    return withMysqlTransaction(async (exec) => {
      await exec.run(
        `UPDATE orders SET status = 'paid', paid_at = ${nowSql()} WHERE merchant_oid = ? AND status != 'paid'`,
        [order.merchant_oid],
      );
      return fulfillOrderLicenses(order, plan, exec);
    });
  }

  getDb()
    .prepare(
      "UPDATE orders SET status = 'paid', paid_at = datetime('now') WHERE merchant_oid = ? AND status != 'paid'",
    )
    .run(order.merchant_oid);
  return fulfillOrderLicenses(order, plan);
}

export async function getOrderById(orderId: number) {
  if (useMysql()) {
    return mysqlGet<OrderRow>("SELECT * FROM orders WHERE id = ?", [orderId]);
  }
  const db = getDb();
  return db.prepare("SELECT * FROM orders WHERE id = ?").get(orderId) as OrderRow | undefined;
}

export async function listAdminOverview() {
  if (useMysql()) {
    const stats = {
      users: Number((await mysqlGet<{ c: number }>("SELECT COUNT(*) as c FROM users"))?.c || 0),
      orders: Number(
        (await mysqlGet<{ c: number }>(
          "SELECT COUNT(*) as c FROM orders WHERE status = 'paid'",
        ))?.c || 0,
      ),
      licenses: Number(
        (await mysqlGet<{ c: number }>("SELECT COUNT(*) as c FROM licenses"))?.c || 0,
      ),
      pendingLicense: Number(
        (
          await mysqlGet<{ c: number }>(
            `SELECT COUNT(*) as c FROM orders o
             WHERE o.status = 'paid'
               AND NOT EXISTS (SELECT 1 FROM licenses l WHERE l.order_id = o.id)`,
          )
        )?.c || 0,
      ),
      openTickets: await countOpenSupportTickets(),
    };

    const recentOrders = await mysqlAll<
      OrderRow & { email: string; name: string; customer_code: string }
    >(
      `SELECT o.*, u.email, u.name, u.customer_code
       FROM orders o
       JOIN users u ON u.id = o.user_id
       ORDER BY o.created_at DESC
       LIMIT 50`,
    );

    const recentLicenses = await mysqlAll<
      LicenseRow & { email: string; customer_code: string }
    >(
      `SELECT l.*, u.email, u.customer_code
       FROM licenses l
       JOIN users u ON u.id = l.user_id
       ORDER BY l.created_at DESC
       LIMIT 50`,
    );

    return { stats, recentOrders, recentLicenses };
  }

  const db = getDb();
  const stats = {
    users: (db.prepare("SELECT COUNT(*) as c FROM users").get() as { c: number }).c,
    orders: (db.prepare("SELECT COUNT(*) as c FROM orders WHERE status = 'paid'").get() as { c: number }).c,
    licenses: (db.prepare("SELECT COUNT(*) as c FROM licenses").get() as { c: number }).c,
    pendingLicense: (
      db
        .prepare(
          `SELECT COUNT(*) as c FROM orders o
           WHERE o.status = 'paid'
             AND NOT EXISTS (SELECT 1 FROM licenses l WHERE l.order_id = o.id)`,
        )
        .get() as { c: number }
    ).c,
    openTickets: await countOpenSupportTickets(),
  };

  const recentOrders = db
    .prepare(
      `SELECT o.*, u.email, u.name, u.customer_code
       FROM orders o
       JOIN users u ON u.id = o.user_id
       ORDER BY datetime(o.created_at) DESC
       LIMIT 50`,
    )
    .all() as Array<OrderRow & { email: string; name: string; customer_code: string }>;

  const recentLicenses = db
    .prepare(
      `SELECT l.*, u.email, u.customer_code
       FROM licenses l
       JOIN users u ON u.id = l.user_id
       ORDER BY datetime(l.created_at) DESC
       LIMIT 50`,
    )
    .all() as Array<LicenseRow & { email: string; customer_code: string }>;

  return { stats, recentOrders, recentLicenses };
}

export async function adminExtendLicense(licenseId: number, months: number) {
  const row = useMysql()
    ? await mysqlGet<LicenseRow>("SELECT * FROM licenses WHERE id = ?", [licenseId])
    : (getDb().prepare("SELECT * FROM licenses WHERE id = ?").get(licenseId) as
        | LicenseRow
        | undefined);

  if (!row) return null;

  const base = row.expires_at ? new Date(row.expires_at) : new Date();
  const now = new Date();
  const start = base > now ? base : now;
  const expires = new Date(start);
  expires.setMonth(expires.getMonth() + months);
  const expiresIso = expires.toISOString();

  if (useMysql()) {
    await mysqlRun("UPDATE licenses SET expires_at = ?, status = 'active' WHERE id = ?", [
      expiresIso,
      licenseId,
    ]);
    if (row.billing_mode === "monthly") {
      await mysqlRun(
        `UPDATE subscriptions SET next_renewal_at = ?, status = 'active', updated_at = ${nowSql()}
         WHERE user_id = ? AND plan_id = ? AND billing_mode = 'monthly'`,
        [expiresIso, row.user_id, row.plan_id],
      );
    }
    return mysqlGet<LicenseRow>("SELECT * FROM licenses WHERE id = ?", [licenseId]);
  }

  const db = getDb();
  db.prepare("UPDATE licenses SET expires_at = ?, status = 'active' WHERE id = ?").run(
    expiresIso,
    licenseId,
  );
  if (row.billing_mode === "monthly") {
    db.prepare(
      `UPDATE subscriptions SET next_renewal_at = ?, status = 'active', updated_at = datetime('now')
       WHERE user_id = ? AND plan_id = ? AND billing_mode = 'monthly'`,
    ).run(expiresIso, row.user_id, row.plan_id);
  }
  return db.prepare("SELECT * FROM licenses WHERE id = ?").get(licenseId) as LicenseRow;
}

export async function getUserLicenses(userId: number) {
  if (useMysql()) {
    return mysqlAll<LicenseRow>(
      "SELECT * FROM licenses WHERE user_id = ? ORDER BY created_at DESC",
      [userId],
    );
  }
  const db = getDb();
  return db
    .prepare(
      "SELECT * FROM licenses WHERE user_id = ? ORDER BY datetime(created_at) DESC",
    )
    .all(userId) as LicenseRow[];
}

export async function buildRemoteLicensePayload() {
  const now = new Date().toISOString();
  const expiredSql = `SELECT DISTINCT u.customer_code
       FROM licenses l
       JOIN users u ON u.id = l.user_id
       WHERE l.status = 'active'
         AND l.expires_at IS NOT NULL
         AND l.expires_at <= ?
         AND NOT EXISTS (
           SELECT 1 FROM licenses l2
           WHERE l2.user_id = l.user_id
             AND l2.status = 'active'
             AND (l2.expires_at IS NULL OR l2.expires_at > ?)
         )`;

  const activeSql = `SELECT DISTINCT u.customer_code, l.plan_id
       FROM licenses l
       JOIN users u ON u.id = l.user_id
       WHERE l.status = 'active'
         AND (l.expires_at IS NULL OR l.expires_at > ?)`;

  const expiredUsers = useMysql()
    ? await mysqlAll<{ customer_code: string }>(expiredSql, [now, now])
    : (getDb()
        .prepare(
          `SELECT DISTINCT u.customer_code
       FROM licenses l
       JOIN users u ON u.id = l.user_id
       WHERE l.status = 'active'
         AND l.expires_at IS NOT NULL
         AND datetime(l.expires_at) <= datetime(?)
         AND NOT EXISTS (
           SELECT 1 FROM licenses l2
           WHERE l2.user_id = l.user_id
             AND l2.status = 'active'
             AND (l2.expires_at IS NULL OR datetime(l2.expires_at) > datetime(?))
         )`,
        )
        .all(now, now) as { customer_code: string }[]);

  const activeProUsers = useMysql()
    ? await mysqlAll<{ customer_code: string; plan_id: string }>(activeSql, [now])
    : (getDb()
        .prepare(
          `SELECT DISTINCT u.customer_code, l.plan_id
       FROM licenses l
       JOIN users u ON u.id = l.user_id
       WHERE l.status = 'active'
         AND (l.expires_at IS NULL OR datetime(l.expires_at) > datetime(?))`,
        )
        .all(now) as { customer_code: string; plan_id: string }[]);

  const blockedCustomers = expiredUsers.map((r) => r.customer_code);
  const proCustomers = activeProUsers.map((r) => r.customer_code);
  const customerPlans = Object.fromEntries(
    activeProUsers.map((r) => [r.customer_code, r.plan_id === "pro" ? "pro" : "pro"]),
  );
  const reasons = Object.fromEntries(
    blockedCustomers.map((code) => [
      code,
      "Aylık lisans süresi doldu. Yenilemek için dijitalerp.com.tr",
    ]),
  );

  return {
    blockedCustomers,
    allowedCustomers: [] as string[],
    proCustomers,
    customerPlans,
    reasons,
    updatedAt: now,
  };
}

export async function expireDueLicenses() {
  const now = new Date().toISOString();
  const sql = `UPDATE licenses SET status = 'expired'
     WHERE status = 'active'
       AND expires_at IS NOT NULL
       AND expires_at <= ?`;

  if (useMysql()) {
    await mysqlRun(sql, [now]);
    return;
  }

  getDb()
    .prepare(
      `UPDATE licenses SET status = 'expired'
     WHERE status = 'active'
       AND expires_at IS NOT NULL
       AND datetime(expires_at) <= datetime(?)`,
    )
    .run(now);
}

export async function adminMarkOrderPaidById(orderId: number) {
  const order = await getOrderById(orderId);
  if (!order) throw new Error("Sipariş bulunamadı.");
  if (order.status !== "pending") {
    throw new Error("Yalnızca bekleyen sipariş manuel onaylanabilir.");
  }

  const sql = `UPDATE orders SET status = 'paid', paid_at = ${nowSql()} WHERE id = ?`;
  if (useMysql()) {
    await mysqlRun(sql, [orderId]);
  } else {
    getDb()
      .prepare("UPDATE orders SET status = 'paid', paid_at = datetime('now') WHERE id = ?")
      .run(orderId);
  }

  return getOrderById(orderId);
}

export async function adminCancelOrderById(orderId: number) {
  const order = await getOrderById(orderId);
  if (!order) throw new Error("Sipariş bulunamadı.");
  if (order.status !== "pending") {
    throw new Error("Yalnızca bekleyen sipariş iptal edilebilir.");
  }

  const sql = "UPDATE orders SET status = 'cancelled' WHERE id = ?";
  if (useMysql()) {
    await mysqlRun(sql, [orderId]);
  } else {
    getDb().prepare(sql).run(orderId);
  }

  return getOrderById(orderId);
}

async function deleteOrderRecords(orderId: number, exec?: DbExecutor) {
  const run = async (sql: string, params: (string | number | null)[] = []) => {
    if (exec) return exec.run(sql, params);
    if (useMysql()) return mysqlRun(sql, params);
    getDb().prepare(sql).run(...params);
  };

  await run("DELETE FROM email_logs WHERE order_id = ?", [orderId]);
  await run("DELETE FROM licenses WHERE order_id = ?", [orderId]);
  await run("DELETE FROM orders WHERE id = ?", [orderId]);
}

export async function adminDeleteOrderById(orderId: number) {
  const order = await getOrderById(orderId);
  if (!order) throw new Error("Sipariş bulunamadı.");

  if (order.status === "paid") {
    const licenseCount = useMysql()
      ? Number(
          (
            await mysqlGet<{ c: number }>(
              "SELECT COUNT(*) as c FROM licenses WHERE order_id = ?",
              [orderId],
            )
          )?.c || 0,
        )
      : (
          getDb()
            .prepare("SELECT COUNT(*) as c FROM licenses WHERE order_id = ?")
            .get(orderId) as { c: number }
        ).c;

    if (licenseCount > 0) {
      throw new Error(
        "Ödenmiş siparişte lisans var. Önce lisansları silmek için siparişi ve lisans kayıtlarını birlikte silebilirsiniz — onay kutusunu kullanın.",
      );
    }
  }

  if (useMysql()) {
    await withMysqlTransaction(async (exec) => {
      await deleteOrderRecords(orderId, exec);
    });
    return;
  }

  const db = getDb();
  const tx = db.transaction(() => {
    db.prepare("DELETE FROM email_logs WHERE order_id = ?").run(orderId);
    db.prepare("DELETE FROM licenses WHERE order_id = ?").run(orderId);
    db.prepare("DELETE FROM orders WHERE id = ?").run(orderId);
  });
  tx();
}

export async function adminDeleteOrderByIdForce(orderId: number) {
  const order = await getOrderById(orderId);
  if (!order) throw new Error("Sipariş bulunamadı.");

  if (useMysql()) {
    await withMysqlTransaction(async (exec) => {
      await deleteOrderRecords(orderId, exec);
    });
    return;
  }

  const db = getDb();
  const tx = db.transaction(() => {
    db.prepare("DELETE FROM email_logs WHERE order_id = ?").run(orderId);
    db.prepare("DELETE FROM licenses WHERE order_id = ?").run(orderId);
    db.prepare("DELETE FROM orders WHERE id = ?").run(orderId);
  });
  tx();
}

export async function createAdminGrantOrder(userId: number, plan: CheckoutPlan) {
  const user = await findUserById(userId);
  if (!user) throw new Error("Kullanıcı bulunamadı.");

  const merchantOid = `ADM${userId}${Date.now()}`.slice(0, 64);

  if (useMysql()) {
    const result = await mysqlRun(
      `INSERT INTO orders (user_id, merchant_oid, plan_id, billing_mode, amount_kurus, status, is_renewal, paid_at)
       VALUES (?, ?, ?, ?, ?, 'paid', 0, ${nowSql()})`,
      [userId, merchantOid, plan.id, plan.billingMode, 0],
    );
    return (await mysqlGet<OrderRow>("SELECT * FROM orders WHERE id = ?", [
      result.insertId,
    ]))!;
  }

  const db = getDb();
  const result = db
    .prepare(
      `INSERT INTO orders (user_id, merchant_oid, plan_id, billing_mode, amount_kurus, status, is_renewal, paid_at)
       VALUES (?, ?, ?, ?, ?, 'paid', 0, datetime('now'))`,
    )
    .run(userId, merchantOid, plan.id, plan.billingMode, 0);

  return db
    .prepare("SELECT * FROM orders WHERE id = ?")
    .get(Number(result.lastInsertRowid)) as OrderRow;
}

export async function adminDeleteUserById(userId: number) {
  const user = await findUserById(userId);
  if (!user) throw new Error("Kullanıcı bulunamadı.");

  const deleteUserData = async (exec?: DbExecutor) => {
    const run = async (sql: string, params: (string | number | null)[] = []) => {
      if (exec) return exec.run(sql, params);
      if (useMysql()) return mysqlRun(sql, params);
      getDb().prepare(sql).run(...params);
    };

    await run("DELETE FROM licenses WHERE user_id = ?", [userId]);
    await run("DELETE FROM subscriptions WHERE user_id = ?", [userId]);
    await run("DELETE FROM email_logs WHERE user_id = ?", [userId]);
    await run("DELETE FROM support_tickets WHERE user_id = ?", [userId]);
    await run("DELETE FROM user_addresses WHERE user_id = ?", [userId]);
    await run("DELETE FROM orders WHERE user_id = ?", [userId]);
    await run("DELETE FROM users WHERE id = ?", [userId]);
  };

  if (useMysql()) {
    await withMysqlTransaction(async (exec) => {
      await deleteUserData(exec);
    });
    return;
  }

  const db = getDb();
  const tx = db.transaction(() => {
    db.prepare("DELETE FROM licenses WHERE user_id = ?").run(userId);
    db.prepare("DELETE FROM subscriptions WHERE user_id = ?").run(userId);
    db.prepare("DELETE FROM email_logs WHERE user_id = ?").run(userId);
    db.prepare("DELETE FROM support_tickets WHERE user_id = ?").run(userId);
    db.prepare("DELETE FROM user_addresses WHERE user_id = ?").run(userId);
    db.prepare("DELETE FROM orders WHERE user_id = ?").run(userId);
    db.prepare("DELETE FROM users WHERE id = ?").run(userId);
  });
  tx();
}
