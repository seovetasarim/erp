import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";
import Database from "better-sqlite3";
import mysql from "mysql2/promise";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const EXPECTED_TABLES = [
  "users",
  "orders",
  "licenses",
  "subscriptions",
  "email_logs",
  "admins",
  "support_tickets",
  "user_addresses",
];

function loadEnvFile(name) {
  try {
    const envPath = path.join(root, name);
    const content = fs.readFileSync(envPath, "utf8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const idx = trimmed.indexOf("=");
      if (idx === -1) continue;
      const key = trimmed.slice(0, idx).trim();
      const value = trimmed.slice(idx + 1).trim().replace(/^"|"$/g, "");
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    /* optional */
  }
}

function extractSchemaSql() {
  const src = fs.readFileSync(path.join(root, "src/lib/db/schema.ts"), "utf8");
  const match = src.match(/export const SCHEMA_SQL = `([\s\S]*?)`;/);
  if (!match) throw new Error("SCHEMA_SQL bulunamadı (schema.ts).");
  return match[1];
}

function extractMigrations() {
  const src = fs.readFileSync(path.join(root, "src/lib/db/index.ts"), "utf8");
  const match = src.match(/const migrations = \[([\s\S]*?)\];/);
  if (!match) return [];

  const items = [];
  const re = /"((?:\\.|[^"\\])*)"|`([\s\S]*?)`/g;
  let m;
  while ((m = re.exec(match[1]))) {
    items.push(m[1] ?? m[2]);
  }
  return items;
}

function ensureSqlite() {
  const dataDir = path.join(root, "data");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  const dbPath = process.env.DATABASE_PATH || path.join(dataDir, "dijitalerp.db");
  const db = new Database(dbPath);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");

  db.exec(extractSchemaSql());
  for (const sql of extractMigrations()) {
    try {
      db.exec(sql);
    } catch {
      /* column/table may already exist */
    }
  }

  const tables = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name")
    .all()
    .map((row) => row.name);

  const missing = EXPECTED_TABLES.filter((name) => !tables.includes(name));
  if (missing.length > 0) {
    throw new Error(`SQLite eksik tablolar: ${missing.join(", ")}`);
  }

  const adminCount = db.prepare("SELECT COUNT(*) as c FROM admins").get().c;
  if (adminCount === 0) {
    const username = (process.env.ADMIN_SEED_USERNAME || process.env.ADMIN_USERNAME || "admin").toLowerCase();
    const password =
      process.env.ADMIN_SEED_PASSWORD || process.env.ADMIN_PASSWORD || "Ciko5744**";
    const passwordHash = bcrypt.hashSync(password, 12);
    db.prepare(
      "INSERT INTO admins (username, password_hash, name, is_active) VALUES (?, ?, 'Yönetici', 1)",
    ).run(username, passwordHash);
    console.log(`Admin oluşturuldu: ${username}`);
  }

  db.close();
  console.log("SQLite tabloları hazır:", tables.join(", "));
  console.log(`Veritabanı: ${dbPath}`);
}

async function ensureMysql() {
  const config = {
    host: process.env.MYSQL_HOST || "localhost",
    port: Number(process.env.MYSQL_PORT || 3306),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    multipleStatements: true,
  };

  if (!config.user || !config.password || !config.database) {
    throw new Error("MySQL için MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE gerekli.");
  }

  const schemaPath = path.join(root, "deploy/mysql-schema.sql");
  const schema = fs.readFileSync(schemaPath, "utf8");

  const conn = await mysql.createConnection(config);
  try {
    await conn.query(schema);

    const [rows] = await conn.query("SHOW TABLES");
    const tables = rows.map((row) => Object.values(row)[0]);

    const missing = EXPECTED_TABLES.filter((name) => !tables.includes(name));
    if (missing.length > 0) {
      throw new Error(`MySQL eksik tablolar: ${missing.join(", ")}`);
    }

    const username = (process.env.ADMIN_SEED_USERNAME || process.env.ADMIN_USERNAME || "admin").toLowerCase();
    const password =
      process.env.ADMIN_SEED_PASSWORD || process.env.ADMIN_PASSWORD || "Ciko5744**";
    const passwordHash = await bcrypt.hash(password, 12);

    await conn.query(
      `INSERT INTO admins (username, password_hash, name, is_active)
       VALUES (?, ?, 'Yönetici', 1)
       ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash), is_active = 1`,
      [username, passwordHash],
    );

    console.log("MySQL tabloları hazır:", tables.join(", "));
  } finally {
    await conn.end();
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env.production");
loadEnvFile(".env");

const useMysql =
  process.env.DB_DRIVER === "mysql" ||
  Boolean(process.env.MYSQL_HOST && process.env.MYSQL_USER && process.env.MYSQL_DATABASE);

try {
  if (useMysql) {
    await ensureMysql();
  } else {
    ensureSqlite();
  }
  console.log("Veritabanı kontrolü tamam.");
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
