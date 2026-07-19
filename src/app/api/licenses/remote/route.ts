import { NextResponse } from "next/server";
import {
  buildRemoteLicensePayload,
  expireDueLicenses,
} from "@/lib/commerce/repository";

export async function GET() {
  await expireDueLicenses();
  const payload = await buildRemoteLicensePayload();

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=60",
    },
  });
}
