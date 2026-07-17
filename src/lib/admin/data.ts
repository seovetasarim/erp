import { getDb } from "@/lib/db";
import type { LicenseRow, OrderRow, SubscriptionRow, UserRow } from "@/lib/db/schema";
import { mysqlAll, mysqlGet, useMysql } from "@/lib/db/mysql";
import { countOpenSupportTickets } from "@/lib/support/repository";

export async function listAdminCustomers(limit = 100) {
  const sql = `SELECT * FROM users ORDER BY created_at DESC LIMIT ?`;

  if (useMysql()) {
    return mysqlAll<UserRow>(sql, [limit]);
  }

  return getDb().prepare(sql).all(limit) as UserRow[];
}

export async function listAdminOrders(limit = 100) {
  const sql = `SELECT o.*, u.email, u.name, u.customer_code,
    (SELECT COUNT(*) FROM licenses l WHERE l.order_id = o.id) as license_count
    FROM orders o
    JOIN users u ON u.id = o.user_id
    ORDER BY o.created_at DESC
    LIMIT ?`;

  if (useMysql()) {
    return mysqlAll<
      OrderRow & { email: string; name: string; customer_code: string; license_count: number }
    >(sql, [limit]);
  }

  return getDb().prepare(sql).all(limit) as Array<
    OrderRow & { email: string; name: string; customer_code: string; license_count: number }
  >;
}

export async function listAdminLicenses(limit = 100) {
  const sql = `SELECT l.*, u.email, u.customer_code
    FROM licenses l
    JOIN users u ON u.id = l.user_id
    ORDER BY l.created_at DESC
    LIMIT ?`;

  if (useMysql()) {
    return mysqlAll<LicenseRow & { email: string; customer_code: string }>(sql, [limit]);
  }

  return getDb().prepare(sql).all(limit) as Array<
    LicenseRow & { email: string; customer_code: string }
  >;
}

export async function listAdminSubscriptions(limit = 100) {
  const sql = `SELECT s.*, u.email, u.name, u.customer_code
    FROM subscriptions s
    JOIN users u ON u.id = s.user_id
    ORDER BY s.updated_at DESC
    LIMIT ?`;

  if (useMysql()) {
    return mysqlAll<
      SubscriptionRow & { email: string; name: string; customer_code: string }
    >(sql, [limit]);
  }

  return getDb().prepare(sql).all(limit) as Array<
    SubscriptionRow & { email: string; name: string; customer_code: string }
  >;
}

export async function getAdminStats() {
  if (useMysql()) {
    const users = Number((await mysqlGet<{ c: number }>("SELECT COUNT(*) as c FROM users"))?.c || 0);
    const orders = Number(
      (await mysqlGet<{ c: number }>("SELECT COUNT(*) as c FROM orders WHERE status = 'paid'"))?.c ||
        0,
    );
    const licenses = Number(
      (await mysqlGet<{ c: number }>("SELECT COUNT(*) as c FROM licenses"))?.c || 0,
    );
    const pendingLicense = Number(
      (
        await mysqlGet<{ c: number }>(
          `SELECT COUNT(*) as c FROM orders o
           WHERE o.status = 'paid'
             AND NOT EXISTS (SELECT 1 FROM licenses l WHERE l.order_id = o.id)`,
        )
      )?.c || 0,
    );
    const openTickets = await countOpenSupportTickets();

    return { users, orders, licenses, pendingLicense, openTickets };
  }

  const db = getDb();
  return {
    users: (db.prepare("SELECT COUNT(*) as c FROM users").get() as { c: number }).c,
    orders: (db.prepare("SELECT COUNT(*) as c FROM orders WHERE status = 'paid'").get() as { c: number })
      .c,
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
}
