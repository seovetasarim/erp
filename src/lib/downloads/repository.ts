import { getDb } from "@/lib/db";
import { mysqlGet, mysqlRun, useMysql } from "@/lib/db/mysql";

const COUNTER_KEY = "erp_kurulum_downloads";

export async function getSiteDownloadCount(): Promise<number> {
  if (useMysql()) {
    const row = await mysqlGet<{ value: number }>(
      "SELECT value FROM site_counters WHERE counter_key = ?",
      [COUNTER_KEY],
    );
    return Number(row?.value || 0);
  }

  const db = getDb();
  const row = db
    .prepare("SELECT value FROM site_counters WHERE counter_key = ?")
    .get(COUNTER_KEY) as { value: number } | undefined;
  return Number(row?.value || 0);
}

export async function incrementSiteDownloadCount(): Promise<number> {
  if (useMysql()) {
    await mysqlRun(
      `INSERT INTO site_counters (counter_key, value) VALUES (?, 1)
       ON DUPLICATE KEY UPDATE value = value + 1`,
      [COUNTER_KEY],
    );
    return getSiteDownloadCount();
  }

  const db = getDb();
  db.prepare(
    "INSERT OR IGNORE INTO site_counters (counter_key, value) VALUES (?, 0)",
  ).run(COUNTER_KEY);
  db.prepare(
    "UPDATE site_counters SET value = value + 1 WHERE counter_key = ?",
  ).run(COUNTER_KEY);
  return getSiteDownloadCount();
}
