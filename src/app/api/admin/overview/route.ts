import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/session";
import { listAdminOverview } from "@/lib/commerce/repository";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  try {
    return NextResponse.json(await listAdminOverview());
  } catch (error) {
    console.error("[admin/overview]", error);
    return NextResponse.json(
      { error: "Veri yüklenemedi. Veritabanı migration'ını kontrol edin." },
      { status: 500 },
    );
  }
}
