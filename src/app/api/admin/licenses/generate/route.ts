import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/session";
import { CHECKOUT_PLANS } from "@/lib/commerce/plans";
import { adminGenerateLicensesForOrder } from "@/lib/commerce/fulfillment";
import { expireDueLicenses, getOrderById } from "@/lib/commerce/repository";

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  const body = (await request.json()) as {
    orderId?: number;
    durationDays?: number | null;
    sendEmail?: boolean;
  };

  const orderId = Number(body.orderId);
  if (!orderId) {
    return NextResponse.json({ error: "Sipariş ID gerekli." }, { status: 400 });
  }

  const durationDays =
    body.durationDays === null || body.durationDays === undefined
      ? null
      : Number(body.durationDays);

  if (durationDays !== null && (!Number.isFinite(durationDays) || durationDays <= 0)) {
    return NextResponse.json({ error: "Geçersiz süre seçimi." }, { status: 400 });
  }

  const order = await getOrderById(orderId);
  if (!order || order.status !== "paid") {
    return NextResponse.json({ error: "Ödenmiş sipariş bulunamadı." }, { status: 404 });
  }

  const plan = CHECKOUT_PLANS[`${order.plan_id}-${order.billing_mode}`];
  if (!plan) {
    return NextResponse.json({ error: "Paket bulunamadı." }, { status: 404 });
  }

  try {
    const result = await adminGenerateLicensesForOrder(order, plan, {
      durationDays,
      sendEmail: body.sendEmail !== false,
    });
    await expireDueLicenses();

    return NextResponse.json({
      ok: true,
      licenseCount: result.licenseKeys.length,
      expiresAt: result.expiresAt,
      licenseKeys: result.licenseKeys,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Lisans üretilemedi." },
      { status: 400 },
    );
  }
}
