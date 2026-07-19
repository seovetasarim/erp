import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { findUserById } from "@/lib/commerce/repository";
import {
  createSupportTicket,
  listSupportTicketsByUser,
} from "@/lib/support/repository";

function mapTicket(
  row: Awaited<ReturnType<typeof listSupportTicketsByUser>>[number],
) {
  return {
    id: row.id,
    ticketCode: row.ticket_code,
    subject: row.subject,
    message: row.message,
    status: row.status,
    source: row.source,
    adminReply: row.admin_reply,
    repliedAt: row.replied_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Oturum gerekli." }, { status: 401 });
  }

  const tickets = await listSupportTicketsByUser(session.userId);
  return NextResponse.json({
    tickets: tickets.map(mapTicket),
  });
}

export async function POST(request: Request) {
  const session = await getSession();
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
    source?: string;
  };

  const subject = body.subject?.trim() ?? "İletişim";
  const message = body.message?.trim() ?? "";

  if (!message) {
    return NextResponse.json({ error: "Mesaj zorunludur." }, { status: 400 });
  }

  if (session) {
    const user = await findUserById(session.userId);
    if (!user) {
      return NextResponse.json({ error: "Kullanıcı bulunamadı." }, { status: 404 });
    }

    const ticket = await createSupportTicket({
      userId: session.userId,
      name: user.name,
      email: user.email,
      phone: user.phone,
      subject,
      message,
      source: body.source === "profile" ? "profile" : "contact",
    });

    return NextResponse.json({
      ok: true,
      ticketCode: ticket?.ticket_code,
      ticket: ticket ? mapTicket(ticket) : null,
    });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim().toLowerCase() ?? "";
  const phone = body.phone?.trim() ?? "";

  if (!name || !email) {
    return NextResponse.json(
      { error: "Ad, e-posta ve mesaj zorunludur." },
      { status: 400 },
    );
  }

  const ticket = await createSupportTicket({
    userId: null,
    name,
    email,
    phone: phone || null,
    subject,
    message,
    source: "contact",
  });

  return NextResponse.json({
    ok: true,
    ticketCode: ticket?.ticket_code,
  });
}
