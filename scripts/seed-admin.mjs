import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import Database from "better-sqlite3";
import fs from "fs";
import path from "path";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnvFile(name) {
  try {
    const envPath = join(__dirname, "..", name);
    const content = readFileSync(envPath, "utf8");
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

loadEnvFile(".env.local");
loadEnvFile(".env.production");
loadEnvFile(".env");

const adminUsername = (process.env.ADMIN_SEED_USERNAME || "admin").toLowerCase();
const adminPassword = process.env.ADMIN_SEED_PASSWORD || "Ciko5744**";

async function seedSqlite() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  const dbPath = process.env.DATABASE_PATH || path.join(dataDir, "dijitalerp.db");
  const db = new Database(dbPath);

  db.exec(`
    CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      name TEXT NOT NULL DEFAULT 'Yönetici',
      is_active INTEGER NOT NULL DEFAULT 1,
      last_login_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);

  const passwordHash = await bcrypt.hash(adminPassword, 12);
  const existing = db.prepare("SELECT id FROM admins WHERE username = ?").get(adminUsername);

  if (existing) {
    db.prepare(
      "UPDATE admins SET password_hash = ?, is_active = 1 WHERE username = ?",
    ).run(passwordHash, adminUsername);
  } else {
    db.prepare(
      "INSERT INTO admins (username, password_hash, name, is_active) VALUES (?, ?, 'Yönetici', 1)",
    ).run(adminUsername, passwordHash);
  }

  const row = db
    .prepare("SELECT id, username, name, is_active, created_at FROM admins WHERE username = ?")
    .get(adminUsername);

  db.close();
  console.log("SQLite admin kullanıcı hazır:", row, `(db: ${dbPath})`);
}

async function seedMysql() {
  const config = {
    host: process.env.MYSQL_HOST || "localhost",
    port: Number(process.env.MYSQL_PORT || 3306),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  };

  if (!config.user || !config.password || !config.database) {
    console.error("MySQL için MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE gerekli.");
    process.exit(1);
  }

  const conn = await mysql.createConnection(config);

  try {
    await conn.query(`
      CREATE TABLE IF NOT EXISTS admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(64) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL DEFAULT 'Yönetici',
        is_active TINYINT NOT NULL DEFAULT 1,
        last_login_at DATETIME NULL,
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    `);

    const passwordHash = await bcrypt.hash(adminPassword, 12);

    await conn.query(
      `INSERT INTO admins (username, password_hash, name, is_active)
       VALUES (?, ?, 'Yönetici', 1)
       ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash), is_active = 1`,
      [adminUsername, passwordHash],
    );

    const [rows] = await conn.query(
      "SELECT id, username, name, is_active, created_at FROM admins WHERE username = ?",
      [adminUsername],
    );

    console.log("MySQL admin kullanıcı hazır:", rows);
  } finally {
    await conn.end();
  }
}

const useMysql =
  process.env.DB_DRIVER === "mysql" ||
  Boolean(process.env.MYSQL_HOST && process.env.MYSQL_USER && process.env.MYSQL_DATABASE);

if (useMysql) {
  await seedMysql();
} else {
  await seedSqlite();
}
