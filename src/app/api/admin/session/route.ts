import { NextResponse } from "next/server";
import {
  createAdminSession,
  destroyAdminSession,
  getAdminSession,
  verifyAdminCredentials,
} from "@/lib/admin/session";

export async function POST(request: Request) {
  const body = (await request.json()) as { username?: string; password?: string };
  const username = String(body.username || "").trim();
  const password = String(body.password || "");

  if (!(await verifyAdminCredentials(username, password))) {
    return NextResponse.json({ error: "Geçersiz yönetici bilgileri." }, { status: 401 });
  }

  await createAdminSession(username);
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  await destroyAdminSession();
  return NextResponse.json({ ok: true });
}

export async function GET() {
  const session = await getAdminSession();
  return NextResponse.json({ admin: session });
}
