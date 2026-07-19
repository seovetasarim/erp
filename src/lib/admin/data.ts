import { getDb } from "@/lib/db";
import type { LicenseRow, OrderRow, SubscriptionRow, UserRow } from "@/lib/db/schema";
import { mysqlAll, mysqlGet, useMysql } from "@/lib/db/mysql";
import { countOpenSupportTickets } from "@/lib/support/repository";

export async function listAdminCustomers(limit = 100) {
  const sql = `SELECT u.id, u.email, u.phone, u.name, u.customer_code, u.created_at,
    COALESCE(lc.license_count, 0) as license_count,
    COALESCE(oc.order_count, 0) as order_count
    FROM users u
    LEFT JOIN (
      SELECT user_id, COUNT(*) as license_count FROM licenses GROUP BY user_id
    ) lc ON lc.user_id = u.id
    LEFT JOIN (
      SELECT user_id, COUNT(*) as order_count FROM orders GROUP BY user_id
    ) oc ON oc.user_id = u.id
    ORDER BY u.created_at DESC
    LIMIT ?`;

  if (useMysql()) {
    return mysqlAll<
      Pick<UserRow, "id" | "email" | "phone" | "name" | "customer_code" | "created_at"> & {
        license_count: number;
        order_count: number;
      }
    >(sql, [limit]);
  }

  return getDb().prepare(sql).all(limit) as Array<
    Pick<UserRow, "id" | "email" | "phone" | "name" | "customer_code" | "created_at"> & {
      license_count: number;
      order_count: number;
    }
  >;
}

export async function listAdminOrders(limit = 100) {
  const sql = `SELECT o.id, o.merchant_oid, o.plan_id, o.billing_mode, o.amount_kurus,
    o.status, o.email_sent_at, o.created_at,
    u.email, u.name, u.customer_code,
    COALESCE(lc.license_count, 0) as license_count
    FROM orders o
    JOIN users u ON u.id = o.user_id
    LEFT JOIN (
      SELECT order_id, COUNT(*) as license_count FROM licenses GROUP BY order_id
    ) lc ON lc.order_id = o.id
    ORDER BY o.created_at DESC
    LIMIT ?`;

  if (useMysql()) {
    return mysqlAll<
      Pick<
        OrderRow,
        | "id"
        | "merchant_oid"
        | "plan_id"
        | "billing_mode"
        | "amount_kurus"
        | "status"
        | "email_sent_at"
        | "created_at"
      > & { email: string; name: string; customer_code: string; license_count: number }
    >(sql, [limit]);
  }

  return getDb().prepare(sql).all(limit) as Array<
    Pick<
      OrderRow,
      | "id"
      | "merchant_oid"
      | "plan_id"
      | "billing_mode"
      | "amount_kurus"
      | "status"
      | "email_sent_at"
      | "created_at"
    > & { email: string; name: string; customer_code: string; license_count: number }
  >;
}

export async function listAdminLicenses(limit = 100) {
  const sql = `SELECT l.id, l.license_key, l.plan_id, l.billing_mode, l.expires_at,
    l.status, l.created_at, u.email, u.customer_code
    FROM licenses l
    JOIN users u ON u.id = l.user_id
    ORDER BY l.created_at DESC
    LIMIT ?`;

  if (useMysql()) {
    return mysqlAll<
      Pick<
        LicenseRow,
        "id" | "license_key" | "plan_id" | "billing_mode" | "expires_at" | "status" | "created_at"
      > & { email: string; customer_code: string }
    >(sql, [limit]);
  }

  return getDb().prepare(sql).all(limit) as Array<
    Pick<
      LicenseRow,
      "id" | "license_key" | "plan_id" | "billing_mode" | "expires_at" | "status" | "created_at"
    > & { email: string; customer_code: string }
  >;
}

export async function listAdminSubscriptions(limit = 100) {
  const sql = `SELECT s.id, s.plan_id, s.billing_mode, s.status, s.auto_renew,
    s.next_renewal_at, s.updated_at, u.email, u.name, u.customer_code
    FROM subscriptions s
    JOIN users u ON u.id = s.user_id
    ORDER BY s.updated_at DESC
    LIMIT ?`;

  if (useMysql()) {
    return mysqlAll<
      Pick<
        SubscriptionRow,
        "id" | "plan_id" | "billing_mode" | "status" | "auto_renew" | "next_renewal_at" | "updated_at"
      > & { email: string; name: string; customer_code: string }
    >(sql, [limit]);
  }

  return getDb().prepare(sql).all(limit) as Array<
    Pick<
      SubscriptionRow,
      "id" | "plan_id" | "billing_mode" | "status" | "auto_renew" | "next_renewal_at" | "updated_at"
    > & { email: string; name: string; customer_code: string }
  >;
}

export async function getAdminStats() {
  if (useMysql()) {
    const [users, orders, licenses, pendingLicense, openTickets] = await Promise.all([
      mysqlGet<{ c: number }>("SELECT COUNT(*) as c FROM users"),
      mysqlGet<{ c: number }>("SELECT COUNT(*) as c FROM orders WHERE status = 'paid'"),
      mysqlGet<{ c: number }>("SELECT COUNT(*) as c FROM licenses WHERE status = 'active'"),
      mysqlGet<{ c: number }>(
        `SELECT COUNT(*) as c FROM orders o
         WHERE o.status = 'paid'
           AND NOT EXISTS (SELECT 1 FROM licenses l WHERE l.order_id = o.id)`,
      ),
      countOpenSupportTickets(),
    ]);

    return {
      users: Number(users?.c || 0),
      orders: Number(orders?.c || 0),
      licenses: Number(licenses?.c || 0),
      pendingLicense: Number(pendingLicense?.c || 0),
      openTickets,
    };
  }

  const db = getDb();
  return {
    users: (db.prepare("SELECT COUNT(*) as c FROM users").get() as { c: number }).c,
    orders: (db.prepare("SELECT COUNT(*) as c FROM orders WHERE status = 'paid'").get() as { c: number })
      .c,
    licenses: (
      db.prepare("SELECT COUNT(*) as c FROM licenses WHERE status = 'active'").get() as {
        c: number;
      }
    ).c,
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
}
