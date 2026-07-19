import { getDb } from "@/lib/db";
import type { AdminRow } from "@/lib/db/schema";
import { mysqlGet, mysqlRun, nowSql, useMysql } from "@/lib/db/mysql";
import { verifyPassword } from "@/lib/auth/password";

export async function findAdminByUsername(username: string) {
  const normalized = username.trim().toLowerCase();
  if (useMysql()) {
    return mysqlGet<AdminRow>(
      "SELECT * FROM admins WHERE username = ? AND is_active = 1",
      [normalized],
    );
  }
  const db = getDb();
  return db
    .prepare("SELECT * FROM admins WHERE username = ? AND is_active = 1")
    .get(normalized) as AdminRow | undefined;
}

export async function verifyAdminLogin(username: string, password: string) {
  const admin = await findAdminByUsername(username);
  if (!admin) return null;
  const ok = await verifyPassword(password, admin.password_hash);
  if (!ok) return null;

  if (useMysql()) {
    await mysqlRun(`UPDATE admins SET last_login_at = ${nowSql()} WHERE id = ?`, [
      admin.id,
    ]);
  } else {
    getDb()
      .prepare("UPDATE admins SET last_login_at = datetime('now') WHERE id = ?")
      .run(admin.id);
  }

  return admin;
}
