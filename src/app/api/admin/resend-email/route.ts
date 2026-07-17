import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/session";
import { CHECKOUT_PLANS } from "@/lib/commerce/plans";
import { sendOrderLicenseEmail } from "@/lib/commerce/fulfillment";
import { getOrderById } from "@/lib/commerce/repository";
import { mysqlAll, mysqlRun, useMysql } from "@/lib/db/mysql";

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  const body = (await request.json()) as { orderId?: number };
  const orderId = Number(body.orderId);
  if (!orderId) {
    return NextResponse.json({ error: "Sipariş ID gerekli." }, { status: 400 });
  }

  const order = await getOrderById(orderId);
  if (!order || order.status !== "paid") {
    return NextResponse.json({ error: "Ödenmiş sipariş bulunamadı." }, { status: 404 });
  }

  const licenses = useMysql()
    ? await mysqlAll<{ license_key: string; expires_at: string | null }>(
        "SELECT license_key, expires_at FROM licenses WHERE order_id = ?",
        [orderId],
      )
    : ((
        await import("@/lib/db")
      )
        .getDb()
        .prepare("SELECT license_key, expires_at FROM licenses WHERE order_id = ?")
        .all(orderId) as { license_key: string; expires_at: string | null }[]);

  if (licenses.length === 0) {
    return NextResponse.json(
      { error: "Bu sipariş için lisans üretilmemiş. Önce lisans üretin." },
      { status: 400 },
    );
  }

  if (useMysql()) {
    await mysqlRun("UPDATE orders SET email_sent_at = NULL WHERE id = ?", [orderId]);
  } else {
    const { getDb } = await import("@/lib/db");
    getDb().prepare("UPDATE orders SET email_sent_at = NULL WHERE id = ?").run(orderId);
  }

  const freshOrder = (await getOrderById(orderId))!;
  const plan = CHECKOUT_PLANS[`${freshOrder.plan_id}-${freshOrder.billing_mode}`];
  if (!plan) {
    return NextResponse.json({ error: "Paket bulunamadı." }, { status: 404 });
  }

  const result = {
    licenseKeys: licenses.map((row) => row.license_key),
    expiresAt: licenses[0]?.expires_at ?? null,
    isRenewal: Boolean(freshOrder.is_renewal),
  };

  await sendOrderLicenseEmail(freshOrder, plan, result);

  return NextResponse.json({ ok: true, licenseCount: result.licenseKeys.length });
}
