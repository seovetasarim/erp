import { getDb } from "@/lib/db";
import { hashPassword } from "@/lib/auth/password";
import { useMysql } from "@/lib/db/mysql";

let ensured = false;

export async function ensureDefaultAdminUser() {
  if (useMysql() || ensured) return;
  ensured = true;

  const db = getDb();
  const count = db.prepare("SELECT COUNT(*) as c FROM admins").get() as { c: number };
  if (count.c > 0) return;

  const username = (process.env.ADMIN_SEED_USERNAME || "admin").toLowerCase();
  const password = process.env.ADMIN_SEED_PASSWORD || process.env.ADMIN_PASSWORD || "Ciko5744**";
  const passwordHash = await hashPassword(password);

  db.prepare(
    "INSERT INTO admins (username, password_hash, name, is_active) VALUES (?, ?, 'Yönetici', 1)",
  ).run(username, passwordHash);
}
