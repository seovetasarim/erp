import { NextResponse } from "next/server";
import { listAdminCustomers } from "@/lib/admin/data";
import { getAdminSession } from "@/lib/admin/session";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  return NextResponse.json({ customers: await listAdminCustomers() });
}
