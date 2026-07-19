import Database from "better-sqlite3";
import fs from "fs";
import path from "path";
import { assertWritableSqlite } from "./env";
import { SCHEMA_SQL } from "./schema";

export {
  assertWritableSqlite,
  getMissingMysqlEnvKeys,
  getMysqlEnvPresence,
  hasMysqlEnvConfig,
  isServerlessHost,
  useMysqlDriver,
} from "./env";

declare global {
  // eslint-disable-next-line no-var
  var __dijitalerpDb: Database.Database | undefined;
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
    "CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status)",
    "CREATE INDEX IF NOT EXISTS idx_orders_created ON orders(created_at)",
    "CREATE INDEX IF NOT EXISTS idx_licenses_order ON licenses(order_id)",
    "CREATE INDEX IF NOT EXISTS idx_licenses_created ON licenses(created_at)",
    "CREATE INDEX IF NOT EXISTS idx_users_created ON users(created_at)",
    "CREATE INDEX IF NOT EXISTS idx_subscriptions_updated ON subscriptions(updated_at)",
    "CREATE INDEX IF NOT EXISTS idx_support_tickets_created ON support_tickets(created_at)",
    `CREATE TABLE IF NOT EXISTS site_counters (
      counter_key TEXT PRIMARY KEY,
      value INTEGER NOT NULL DEFAULT 0
    )`,
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
