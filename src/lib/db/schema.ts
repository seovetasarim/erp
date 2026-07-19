export const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  customer_code TEXT NOT NULL UNIQUE,
  paytr_utoken TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  merchant_oid TEXT NOT NULL UNIQUE,
  plan_id TEXT NOT NULL,
  billing_mode TEXT NOT NULL,
  amount_kurus INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  paytr_token TEXT,
  email_sent_at TEXT,
  is_renewal INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  paid_at TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS licenses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  order_id INTEGER NOT NULL,
  license_key TEXT NOT NULL UNIQUE,
  plan_id TEXT NOT NULL,
  billing_mode TEXT NOT NULL,
  max_pcs INTEGER NOT NULL DEFAULT 1,
  expires_at TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_oid ON orders(merchant_oid);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created ON orders(created_at);
CREATE INDEX IF NOT EXISTS idx_licenses_user ON licenses(user_id);
CREATE INDEX IF NOT EXISTS idx_licenses_order ON licenses(order_id);
CREATE INDEX IF NOT EXISTS idx_licenses_expires ON licenses(expires_at);
CREATE INDEX IF NOT EXISTS idx_licenses_created ON licenses(created_at);
CREATE INDEX IF NOT EXISTS idx_users_created ON users(created_at);

CREATE TABLE IF NOT EXISTS subscriptions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  plan_id TEXT NOT NULL,
  billing_mode TEXT NOT NULL DEFAULT 'monthly',
  status TEXT NOT NULL DEFAULT 'active',
  auto_renew INTEGER NOT NULL DEFAULT 0,
  next_renewal_at TEXT,
  reminder_sent_at TEXT,
  paytr_utoken TEXT,
  paytr_ctoken TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE(user_id, plan_id, billing_mode)
);

CREATE TABLE IF NOT EXISTS email_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  order_id INTEGER,
  type TEXT NOT NULL,
  recipient TEXT NOT NULL,
  status TEXT NOT NULL,
  detail TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_subscriptions_renewal ON subscriptions(next_renewal_at);
CREATE INDEX IF NOT EXISTS idx_subscriptions_updated ON subscriptions(updated_at);

CREATE TABLE IF NOT EXISTS admins (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL DEFAULT 'Yönetici',
  is_active INTEGER NOT NULL DEFAULT 1,
  last_login_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS support_tickets (
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
);

CREATE INDEX IF NOT EXISTS idx_support_tickets_status ON support_tickets(status);
CREATE INDEX IF NOT EXISTS idx_support_tickets_email ON support_tickets(email);
CREATE INDEX IF NOT EXISTS idx_support_tickets_created ON support_tickets(created_at);

CREATE TABLE IF NOT EXISTS user_addresses (
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
);

CREATE INDEX IF NOT EXISTS idx_user_addresses_user ON user_addresses(user_id);

CREATE TABLE IF NOT EXISTS site_counters (
  counter_key TEXT PRIMARY KEY,
  value INTEGER NOT NULL DEFAULT 0
);
`;

export type UserRow = {
  id: number;
  email: string;
  phone: string;
  password_hash: string;
  name: string;
  customer_code: string;
  created_at: string;
  paytr_utoken?: string | null;
};

export type OrderRow = {
  id: number;
  user_id: number;
  merchant_oid: string;
  plan_id: string;
  billing_mode: string;
  amount_kurus: number;
  status: string;
  paytr_token: string | null;
  created_at: string;
  paid_at: string | null;
  email_sent_at?: string | null;
  is_renewal?: number;
};

export type SubscriptionRow = {
  id: number;
  user_id: number;
  plan_id: string;
  billing_mode: string;
  status: string;
  auto_renew: number;
  next_renewal_at: string | null;
  reminder_sent_at: string | null;
  paytr_utoken: string | null;
  paytr_ctoken: string | null;
  created_at: string;
  updated_at: string;
};

export type AdminRow = {
  id: number;
  username: string;
  password_hash: string;
  name: string;
  is_active: number;
  last_login_at: string | null;
  created_at: string;
};

export type LicenseRow = {
  id: number;
  user_id: number;
  order_id: number;
  license_key: string;
  plan_id: string;
  billing_mode: string;
  max_pcs: number;
  expires_at: string | null;
  status: string;
  created_at: string;
};

export type SupportTicketRow = {
  id: number;
  user_id: number | null;
  ticket_code: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  status: string;
  source: string;
  admin_reply: string | null;
  replied_at: string | null;
  replied_by: string | null;
  created_at: string;
  updated_at: string;
};

export type UserAddressRow = {
  id: number;
  user_id: number;
  label: string;
  line1: string;
  line2: string | null;
  city: string;
  district: string;
  postal_code: string | null;
  is_default: number;
  created_at: string;
};
