import mysql from "mysql2/promise";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnvFile() {
  try {
    const envPath = join(__dirname, "..", ".env.production");
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

loadEnvFile();

const config = {
  host: process.env.MYSQL_HOST || "localhost",
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  multipleStatements: true,
};

if (!config.user || !config.password || !config.database) {
  console.error("MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE gerekli.");
  process.exit(1);
}

const schema = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(32) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  customer_code VARCHAR(32) NOT NULL UNIQUE,
  paytr_utoken VARCHAR(255) NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  merchant_oid VARCHAR(64) NOT NULL UNIQUE,
  plan_id VARCHAR(32) NOT NULL,
  billing_mode VARCHAR(32) NOT NULL,
  amount_kurus INT NOT NULL,
  status VARCHAR(32) NOT NULL DEFAULT 'pending',
  paytr_token VARCHAR(255) NULL,
  email_sent_at DATETIME NULL,
  is_renewal TINYINT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  paid_at DATETIME NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS licenses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  order_id INT NOT NULL,
  license_key VARCHAR(64) NOT NULL UNIQUE,
  plan_id VARCHAR(32) NOT NULL,
  billing_mode VARCHAR(32) NOT NULL,
  max_pcs INT NOT NULL DEFAULT 1,
  expires_at DATETIME NULL,
  status VARCHAR(32) NOT NULL DEFAULT 'active',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (order_id) REFERENCES orders(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS subscriptions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  plan_id VARCHAR(32) NOT NULL,
  billing_mode VARCHAR(32) NOT NULL DEFAULT 'monthly',
  status VARCHAR(32) NOT NULL DEFAULT 'active',
  auto_renew TINYINT NOT NULL DEFAULT 0,
  next_renewal_at DATETIME NULL,
  reminder_sent_at DATETIME NULL,
  paytr_utoken VARCHAR(255) NULL,
  paytr_ctoken VARCHAR(255) NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE KEY uniq_user_plan (user_id, plan_id, billing_mode)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS email_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NULL,
  order_id INT NULL,
  type VARCHAR(64) NOT NULL,
  recipient VARCHAR(255) NOT NULL,
  status VARCHAR(32) NOT NULL,
  detail TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(64) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL DEFAULT 'Yönetici',
  is_active TINYINT NOT NULL DEFAULT 1,
  last_login_at DATETIME NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS support_tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NULL,
  ticket_code VARCHAR(32) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(32) NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(32) NOT NULL DEFAULT 'open',
  source VARCHAR(32) NOT NULL DEFAULT 'contact',
  admin_reply TEXT NULL,
  replied_at DATETIME NULL,
  replied_by VARCHAR(64) NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS user_addresses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  label VARCHAR(64) NOT NULL DEFAULT 'Genel',
  line1 VARCHAR(255) NOT NULL,
  line2 VARCHAR(255) NULL,
  city VARCHAR(128) NOT NULL,
  district VARCHAR(128) NOT NULL,
  postal_code VARCHAR(16) NULL,
  is_default TINYINT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`;

const indexes = [
  "CREATE INDEX idx_orders_user ON orders(user_id)",
  "CREATE INDEX idx_orders_oid ON orders(merchant_oid)",
  "CREATE INDEX idx_licenses_user ON licenses(user_id)",
  "CREATE INDEX idx_licenses_expires ON licenses(expires_at)",
  "CREATE INDEX idx_subscriptions_renewal ON subscriptions(next_renewal_at)",
  "CREATE INDEX idx_support_tickets_status ON support_tickets(status)",
  "CREATE INDEX idx_support_tickets_email ON support_tickets(email)",
  "CREATE INDEX idx_user_addresses_user ON user_addresses(user_id)",
];

const conn = await mysql.createConnection(config);
try {
  await conn.query(schema);
  for (const sql of indexes) {
    try {
      await conn.query(sql);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (!message.includes("Duplicate key name")) throw error;
    }
  }
  const [tables] = await conn.query("SHOW TABLES");
  console.log("MySQL tabloları hazır:", tables);
} finally {
  await conn.end();
}
