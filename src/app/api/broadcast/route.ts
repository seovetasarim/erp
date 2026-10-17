import { getBroadcast } from "@/lib/broadcast/repository";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const row = await getBroadcast();
  return NextResponse.json(
    {
      id: row?.sent_at || "",
      title: row?.title || "",
      body: row?.body || "",
      sentAt: row?.sent_at || "",
      update: row?.update_version
        ? {
            version: row.update_version,
            required: Boolean(row.update_required),
            url: row.update_url,
            notes: row.update_notes || "",
          }
        : null,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
