import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/session";
import { CHECKOUT_PLANS } from "@/lib/commerce/plans";
import { adminGenerateLicensesForOrder } from "@/lib/commerce/fulfillment";
import {
  createAdminGrantOrder,
  expireDueLicenses,
  findUserById,
} from "@/lib/commerce/repository";

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  const body = (await request.json()) as {
    userId?: number;
    planKey?: string;
    durationDays?: number | null;
    sendEmail?: boolean;
  };

  const userId = Number(body.userId);
  const planKey = String(body.planKey || "").trim();

  if (!userId || !planKey) {
    return NextResponse.json(
      { error: "Kullanıcı ve paket seçimi gerekli." },
      { status: 400 },
    );
  }

  const durationDays =
    body.durationDays === null || body.durationDays === undefined
      ? null
      : Number(body.durationDays);

  if (durationDays !== null && (!Number.isFinite(durationDays) || durationDays <= 0)) {
    return NextResponse.json({ error: "Geçersiz süre seçimi." }, { status: 400 });
  }

  const user = await findUserById(userId);
  if (!user) {
    return NextResponse.json({ error: "Kullanıcı bulunamadı." }, { status: 404 });
  }

  const plan = CHECKOUT_PLANS[planKey];
  if (!plan) {
    return NextResponse.json({ error: "Paket bulunamadı." }, { status: 404 });
  }

  try {
    const order = await createAdminGrantOrder(userId, plan);
    const result = await adminGenerateLicensesForOrder(order, plan, {
      durationDays,
      sendEmail: body.sendEmail !== false,
    });
    await expireDueLicenses();

    return NextResponse.json({
      ok: true,
      orderId: order.id,
      licenseCount: result.licenseKeys.length,
      expiresAt: result.expiresAt,
      licenseKeys: result.licenseKeys,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Lisans tanımlanamadı." },
      { status: 400 },
    );
  }
}
