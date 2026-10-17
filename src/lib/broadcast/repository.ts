import { getDb } from "@/lib/db";
import { mysqlGet, mysqlRun, useMysql } from "@/lib/db/mysql";

const UPDATE_URL = "https://github.com/seovetasarim/erp/releases/latest/download/kurulum.rar";

export type BroadcastRow = {
  id: number;
  title: string;
  body: string;
  update_version: string;
  update_required: number;
  update_notes: string;
  update_url: string;
  sent_at: string;
};

const CREATE_SQL = `CREATE TABLE IF NOT EXISTS app_broadcast (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL DEFAULT '',
  body TEXT NOT NULL DEFAULT '',
  update_version TEXT NOT NULL DEFAULT '',
  update_required INTEGER NOT NULL DEFAULT 0,
  update_notes TEXT NOT NULL DEFAULT '',
  update_url TEXT NOT NULL DEFAULT '',
  sent_at TEXT NOT NULL DEFAULT ''
)`;

let ready: Promise<void> | null = null;

function ensureTable() {
  if (!ready) {
    ready = (async () => {
      if (useMysql()) {
        await mysqlRun(CREATE_SQL);
        return;
      }
      getDb().exec(CREATE_SQL);
    })();
  }
  return ready;
}

export async function getBroadcast(): Promise<BroadcastRow | null> {
  await ensureTable();
  if (useMysql()) {
    return (
      (await mysqlGet<BroadcastRow>("SELECT * FROM app_broadcast WHERE id = 1")) ?? null
    );
  }
  return (
    (getDb().prepare("SELECT * FROM app_broadcast WHERE id = 1").get() as BroadcastRow | undefined) ??
    null
  );
}

export async function saveBroadcast(input: {
  title: string;
  body: string;
  updateVersion: string;
  updateRequired: boolean;
  updateNotes: string;
}) {
  await ensureTable();
  const row = {
    title: input.title.trim().slice(0, 160),
    body: input.body.trim().slice(0, 2000),
    updateVersion: input.updateVersion.trim().slice(0, 32),
    updateRequired: input.updateRequired ? 1 : 0,
    updateNotes: input.updateNotes.trim().slice(0, 500),
    updateUrl: UPDATE_URL,
    sentAt: new Date().toISOString(),
  };

  if (useMysql()) {
    await mysqlRun(
      `INSERT INTO app_broadcast (id, title, body, update_version, update_required, update_notes, update_url, sent_at)
       VALUES (1, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         title = VALUES(title),
         body = VALUES(body),
         update_version = VALUES(update_version),
         update_required = VALUES(update_required),
         update_notes = VALUES(update_notes),
         update_url = VALUES(update_url),
         sent_at = VALUES(sent_at)`,
      [
        row.title,
        row.body,
        row.updateVersion,
        row.updateRequired,
        row.updateNotes,
        row.updateUrl,
        row.sentAt,
      ],
    );
  } else {
    getDb()
      .prepare(
        `INSERT INTO app_broadcast (id, title, body, update_version, update_required, update_notes, update_url, sent_at)
         VALUES (1, @title, @body, @updateVersion, @updateRequired, @updateNotes, @updateUrl, @sentAt)
         ON CONFLICT(id) DO UPDATE SET
           title = excluded.title,
           body = excluded.body,
           update_version = excluded.update_version,
           update_required = excluded.update_required,
           update_notes = excluded.update_notes,
           update_url = excluded.update_url,
           sent_at = excluded.sent_at`,
      )
      .run(row);
  }

  return getBroadcast();
}
