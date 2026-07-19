import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/session";
import { adminExtendLicense } from "@/lib/commerce/repository";

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  const body = (await request.json()) as { licenseId?: number; months?: number };
  const licenseId = Number(body.licenseId);
  const months = Number(body.months || 1);

  if (!licenseId || months < 1 || months > 24) {
    return NextResponse.json({ error: "Geçersiz parametreler." }, { status: 400 });
  }

  const updated = await adminExtendLicense(licenseId, months);
  if (!updated) {
    return NextResponse.json({ error: "Lisans bulunamadı." }, { status: 404 });
  }

  return NextResponse.json({
    ok: true,
    license: {
      id: updated.id,
      expiresAt: updated.expires_at,
      status: updated.status,
    },
  });
}
