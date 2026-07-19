import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/session";
import {
  getSupportTicketById,
  updateSupportTicket,
} from "@/lib/support/repository";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  const id = Number((await params).id);
  if (!Number.isFinite(id)) {
    return NextResponse.json({ error: "Geçersiz talep." }, { status: 400 });
  }

  const ticket = await getSupportTicketById(id);
  if (!ticket) {
    return NextResponse.json({ error: "Talep bulunamadı." }, { status: 404 });
  }

  return NextResponse.json({ ticket });
}

export async function PATCH(request: Request, { params }: Params) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  const id = Number((await params).id);
  if (!Number.isFinite(id)) {
    return NextResponse.json({ error: "Geçersiz talep." }, { status: 400 });
  }

  const body = (await request.json()) as {
    status?: string;
    adminReply?: string;
  };

  const ticket = await updateSupportTicket(id, {
    status: body.status,
    adminReply: body.adminReply,
    repliedBy: session.username,
  });

  if (!ticket) {
    return NextResponse.json({ error: "Talep bulunamadı." }, { status: 404 });
  }

  return NextResponse.json({ ticket });
}
