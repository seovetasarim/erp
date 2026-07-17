import { NextResponse } from "next/server";
import { expireDueLicenses } from "@/lib/commerce/repository";
import { processSubscriptionReminders } from "@/lib/commerce/fulfillment";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const auth = request.headers.get("authorization");

  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  await expireDueLicenses();
  const reminders = await processSubscriptionReminders();

  return NextResponse.json({
    ok: true,
    ...reminders,
    ranAt: new Date().toISOString(),
  });
}
