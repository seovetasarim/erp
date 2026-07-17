import { NextResponse } from "next/server";
import { listAdminLicenses } from "@/lib/admin/data";
import { getAdminSession } from "@/lib/admin/session";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  return NextResponse.json({ licenses: await listAdminLicenses() });
}
