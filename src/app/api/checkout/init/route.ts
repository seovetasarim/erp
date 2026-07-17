import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { createPendingOrder, findUserById } from "@/lib/commerce/repository";
import {
  formatTryFromKurus,
  resolveCheckoutPlan,
} from "@/lib/commerce/plans";
import { SITE } from "@/constants/seo";
import {
  buildPaytrToken,
  encodeUserBasket,
  requestPaytrIframeToken,
} from "@/lib/paytr/client";

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "127.0.0.1";
  return "127.0.0.1";
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Ödeme için giriş yapmalısınız." }, { status: 401 });
    }

    const body = (await request.json()) as {
      planId?: string;
      billingMode?: string;
      isRenewal?: boolean;
      storeCard?: boolean;
    };
    const plan = resolveCheckoutPlan(
      String(body.planId || ""),
      String(body.billingMode || ""),
    );

    if (!plan) {
      return NextResponse.json({ error: "Geçersiz paket seçimi." }, { status: 400 });
    }

    const user = await findUserById(session.userId);
    if (!user) {
      return NextResponse.json({ error: "Kullanıcı bulunamadı." }, { status: 404 });
    }

    const isRenewal = Boolean(body.isRenewal) && plan.billingMode === "monthly";
    const order = await createPendingOrder({ userId: user.id, plan, isRenewal });
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE.url;
    const userBasket = encodeUserBasket([
      {
        name: plan.label,
        price: String(plan.amountKurus / 100),
        qty: 1,
      },
    ]);

    const { paytrToken, merchantId, testMode } = buildPaytrToken({
      userIp: getClientIp(request),
      merchantOid: order.merchant_oid,
      email: user.email,
      paymentAmount: plan.amountKurus,
      userBasket,
    });

    const iframeParams: Record<string, string> = {
      merchant_id: merchantId,
      paytr_token: paytrToken,
      user_ip: getClientIp(request),
      merchant_oid: order.merchant_oid,
      email: user.email,
      payment_amount: String(plan.amountKurus),
      user_basket: userBasket,
      debug_on: testMode,
      test_mode: testMode,
      no_installment: "0",
      max_installment: "0",
      user_name: user.name,
      user_address: "Türkiye",
      user_phone: user.phone,
      merchant_ok_url: `${siteUrl}/odeme/basarili?oid=${order.merchant_oid}`,
      merchant_fail_url: `${siteUrl}/odeme/basarisiz?oid=${order.merchant_oid}`,
      timeout_limit: "30",
      currency: "TL",
      lang: "tr",
    };

    if (plan.billingMode === "monthly" && body.storeCard) {
      iframeParams.store_card = "1";
      if (user.paytr_utoken) {
        iframeParams.utoken = user.paytr_utoken;
      }
    }

    const iframeToken = await requestPaytrIframeToken(iframeParams);

    return NextResponse.json({
      ok: true,
      token: iframeToken,
      order: {
        merchantOid: order.merchant_oid,
        amountLabel: formatTryFromKurus(plan.amountKurus),
        planLabel: plan.label,
        isRenewal,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Ödeme başlatılamadı." },
      { status: 500 },
    );
  }
}
