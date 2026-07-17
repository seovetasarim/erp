import Database from "better-sqlite3";
import fs from "fs";
import path from "path";
import { SCHEMA_SQL } from "./schema";

declare global {
  // eslint-disable-next-line no-var
  var __dijitalerpDb: Database.Database | undefined;
}

export function isServerlessHost() {
  return Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
}

export function getMissingMysqlEnvKeys() {
  const required = [
    "MYSQL_HOST",
    "MYSQL_USER",
    "MYSQL_PASSWORD",
    "MYSQL_DATABASE",
  ] as const;
  return required.filter((key) => !process.env[key]?.trim());
}

export function assertWritableSqlite() {
  if (!isServerlessHost()) return;

  const missing = getMissingMysqlEnvKeys();
  if (missing.length === 0) {
    throw new Error(
      "Vercel ortamında SQLite kullanılamaz. DB_DRIVER=mysql olarak ayarlayıp redeploy edin.",
    );
  }

  throw new Error(
    `Vercel ortamında MySQL zorunludur. Production ortam değişkenlerine ekleyin: ${missing.join(", ")}`,
  );
}

function getDbPath() {
  assertWritableSqlite();

  const custom = process.env.DATABASE_PATH;
  if (custom) return custom;
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  return path.join(dataDir, "dijitalerp.db");
}

function runMigrations(db: Database.Database) {
  const migrations = [
    "ALTER TABLE orders ADD COLUMN email_sent_at TEXT",
    "ALTER TABLE orders ADD COLUMN is_renewal INTEGER NOT NULL DEFAULT 0",
    "ALTER TABLE users ADD COLUMN paytr_utoken TEXT",
    `CREATE TABLE IF NOT EXISTS support_tickets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      ticket_code TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'open',
      source TEXT NOT NULL DEFAULT 'contact',
      admin_reply TEXT,
      replied_at TEXT,
      replied_by TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )`,
    "CREATE INDEX IF NOT EXISTS idx_support_tickets_status ON support_tickets(status)",
    "CREATE INDEX IF NOT EXISTS idx_support_tickets_email ON support_tickets(email)",
    `CREATE TABLE IF NOT EXISTS user_addresses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      label TEXT NOT NULL DEFAULT 'Genel',
      line1 TEXT NOT NULL,
      line2 TEXT,
      city TEXT NOT NULL,
      district TEXT NOT NULL,
      postal_code TEXT,
      is_default INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )`,
    "CREATE INDEX IF NOT EXISTS idx_user_addresses_user ON user_addresses(user_id)",
  ];
  for (const sql of migrations) {
    try {
      db.exec(sql);
    } catch {
      /* column/table may already exist */
    }
  }
}

export function getDb() {
  if (!global.__dijitalerpDb) {
    const db = new Database(getDbPath());
    db.pragma("journal_mode = WAL");
    db.pragma("foreign_keys = ON");
    db.exec(SCHEMA_SQL);
    global.__dijitalerpDb = db;
  }

  runMigrations(global.__dijitalerpDb);
  return global.__dijitalerpDb;
}
