import { getDb } from "@/lib/db";
import type { SupportTicketRow } from "@/lib/db/schema";
import { mysqlAll, mysqlGet, mysqlRun, nowSql, useMysql } from "@/lib/db/mysql";

export type CreateTicketInput = {
  userId?: number | null;
  name: string;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
  source?: string;
};

function ticketCodeFromId(id: number) {
  return `DT-${String(id).padStart(6, "0")}`;
}

export async function createSupportTicket(input: CreateTicketInput) {
  if (useMysql()) {
    const result = await mysqlRun(
      `INSERT INTO support_tickets (user_id, ticket_code, name, email, phone, subject, message, source)
       VALUES (?, 'TEMP', ?, ?, ?, ?, ?, ?)`,
      [
        input.userId ?? null,
        input.name,
        input.email,
        input.phone ?? null,
        input.subject,
        input.message,
        input.source ?? "contact",
      ],
    );
    const id = Number(result.insertId);
    const ticketCode = ticketCodeFromId(id);
    await mysqlRun("UPDATE support_tickets SET ticket_code = ? WHERE id = ?", [
      ticketCode,
      id,
    ]);
    return mysqlGet<SupportTicketRow>("SELECT * FROM support_tickets WHERE id = ?", [id]);
  }

  const db = getDb();
  const insert = db
    .prepare(
      `INSERT INTO support_tickets (user_id, ticket_code, name, email, phone, subject, message, source)
       VALUES (?, 'TEMP', ?, ?, ?, ?, ?, ?)`,
    )
    .run(
      input.userId ?? null,
      input.name,
      input.email,
      input.phone ?? null,
      input.subject,
      input.message,
      input.source ?? "contact",
    );
  const id = Number(insert.lastInsertRowid);
  const ticketCode = ticketCodeFromId(id);
  db.prepare("UPDATE support_tickets SET ticket_code = ? WHERE id = ?").run(ticketCode, id);
  return db
    .prepare("SELECT * FROM support_tickets WHERE id = ?")
    .get(id) as SupportTicketRow;
}

export async function listSupportTicketsByUser(userId: number, limit = 50) {
  const sql = `SELECT * FROM support_tickets WHERE user_id = ? ORDER BY created_at DESC LIMIT ?`;

  if (useMysql()) {
    return mysqlAll<SupportTicketRow>(sql, [userId, limit]);
  }

  return getDb().prepare(sql).all(userId, limit) as SupportTicketRow[];
}

export async function countSupportTicketsByUser(userId: number) {
  const sql = `SELECT COUNT(*) as c FROM support_tickets WHERE user_id = ?`;

  if (useMysql()) {
    return Number((await mysqlGet<{ c: number }>(sql, [userId]))?.c || 0);
  }

  return (getDb().prepare(sql).get(userId) as { c: number }).c;
}

export async function listSupportTickets(limit = 100) {
  const sql = `SELECT id, ticket_code, name, email, subject, status, created_at
    FROM support_tickets ORDER BY created_at DESC LIMIT ?`;

  if (useMysql()) {
    return mysqlAll<SupportTicketRow>(sql, [limit]);
  }

  return getDb().prepare(sql).all(limit) as SupportTicketRow[];
}

export async function getSupportTicketById(id: number) {
  if (useMysql()) {
    return mysqlGet<SupportTicketRow>("SELECT * FROM support_tickets WHERE id = ?", [id]);
  }
  return getDb()
    .prepare("SELECT * FROM support_tickets WHERE id = ?")
    .get(id) as SupportTicketRow | undefined;
}

export async function countOpenSupportTickets() {
  const sql = `SELECT COUNT(*) as c FROM support_tickets WHERE status IN ('open', 'in_progress')`;

  try {
    if (useMysql()) {
      return Number((await mysqlGet<{ c: number }>(sql))?.c || 0);
    }

    return (getDb().prepare(sql).get() as { c: number }).c;
  } catch {
    return 0;
  }
}

export async function updateSupportTicket(
  id: number,
  data: {
    status?: string;
    adminReply?: string;
    repliedBy?: string;
  },
) {
  const existing = await getSupportTicketById(id);
  if (!existing) return null;

  const status = data.status ?? existing.status;
  const adminReply = data.adminReply ?? existing.admin_reply;
  const repliedBy = data.repliedBy ?? existing.replied_by;
  const repliedAt =
    data.adminReply && data.adminReply.trim()
      ? new Date().toISOString()
      : existing.replied_at;

  if (useMysql()) {
    await mysqlRun(
      `UPDATE support_tickets
       SET status = ?, admin_reply = ?, replied_by = ?, replied_at = ?, updated_at = ${nowSql()}
       WHERE id = ?`,
      [status, adminReply, repliedBy, repliedAt, id],
    );
    return getSupportTicketById(id);
  }

  getDb()
    .prepare(
      `UPDATE support_tickets
       SET status = ?, admin_reply = ?, replied_by = ?, replied_at = ?, updated_at = datetime('now')
       WHERE id = ?`,
    )
    .run(status, adminReply, repliedBy, repliedAt, id);

  return getSupportTicketById(id);
}
