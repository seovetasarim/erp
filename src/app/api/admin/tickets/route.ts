import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/session";
import { listSupportTickets } from "@/lib/support/repository";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  return NextResponse.json({ tickets: await listSupportTickets() });
}
