import { verifyAdminCredentials } from "@/lib/admin/session";
import { getBroadcast, saveBroadcast } from "@/lib/broadcast/repository";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const row = await getBroadcast();
  return NextResponse.json({ broadcast: row });
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    username?: string;
    password?: string;
    title?: string;
    body?: string;
    updateVersion?: string;
    updateRequired?: boolean;
    updateNotes?: string;
  };

  if (!(await verifyAdminCredentials(String(body.username || ""), String(body.password || "")))) {
    return NextResponse.json({ error: "Geçersiz yönetici bilgileri." }, { status: 401 });
  }

  const saved = await saveBroadcast({
    title: String(body.title || ""),
    body: String(body.body || ""),
    updateVersion: String(body.updateVersion || ""),
    updateRequired: Boolean(body.updateRequired),
    updateNotes: String(body.updateNotes || ""),
  });

  return NextResponse.json({ ok: true, broadcast: saved });
}
