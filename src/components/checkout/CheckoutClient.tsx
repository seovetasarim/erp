"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { resolveCheckoutPlan, formatTryFromKurus } from "@/lib/commerce/plans";

declare global {
  interface Window {
    iFrameResize?: (
      options: Record<string, unknown>,
      selector: string,
    ) => void;
  }
}

export default function CheckoutClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planId = searchParams?.get("paket") || "";
  const billingMode = searchParams?.get("odeme") || "aylik";
  const isRenewal = searchParams?.get("yenile") === "1";

  const plan = useMemo(
    () => resolveCheckoutPlan(planId, billingMode),
    [planId, billingMode],
  );

  const [storeCard, setStoreCard] = useState(true);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [iframeToken, setIframeToken] = useState("");
  const [orderLabel, setOrderLabel] = useState("");

  useEffect(() => {
    if (!plan) {
      setLoading(false);
      setError("Geçersiz paket. Lütfen fiyatlandırma sayfasından tekrar seçin.");
      return;
    }

    let cancelled = false;

    async function initCheckout() {
      setLoading(true);
      setError("");

      const meRes = await fetch("/api/auth/me");
      const meData = (await meRes.json()) as { user: unknown | null };
      if (!meData.user) {
        router.replace(
          `/giris?next=${encodeURIComponent(`/odeme?paket=${planId}&odeme=${billingMode}`)}`,
        );
        return;
      }

      const res = await fetch("/api/checkout/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: plan.id,
          billingMode: plan.billingMode,
          isRenewal,
          storeCard: plan.billingMode === "monthly" ? storeCard : false,
        }),
      });

      const data = (await res.json()) as {
        token?: string;
        order?: { planLabel: string; amountLabel: string };
        error?: string;
      };

      if (cancelled) return;

      if (!res.ok || !data.token) {
        setError(data.error || "Ödeme başlatılamadı.");
        setLoading(false);
        return;
      }

      setIframeToken(data.token);
      setOrderLabel(`${data.order?.planLabel} — ${data.order?.amountLabel}`);
      setLoading(false);
    }

    initCheckout();

    return () => {
      cancelled = true;
    };
  }, [plan, planId, billingMode, isRenewal, storeCard, router]);

  useEffect(() => {
    if (!iframeToken) return;

    const script = document.createElement("script");
    script.src = "https://www.paytr.com/js/iframeResizer.min.js";
    script.async = true;
    script.onload = () => {
      window.iFrameResize?.({}, "#paytriframe");
    };
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [iframeToken]);

  if (!plan && !loading) {
    return (
      <div className="it-checkout-state">
        <p>{error || "Paket bulunamadı."}</p>
        <Link href="/fiyatlandirma">Paketlere dön</Link>
      </div>
    );
  }

  return (
    <div className="it-checkout-wrap">
      <div className="it-checkout-summary tp_fade_anim" data-delay=".3">
        <span className="tp-section-subtitle-platform platform-text-black mb-10 d-inline-block">
          Güvenli Ödeme
        </span>
        <h1 className="it-checkout-title">
          {isRenewal ? "Lisans yenileme" : "PayTR ile ödeme"}
        </h1>
        {plan && (
          <p className="it-checkout-plan">
            {plan.label} · <strong>{formatTryFromKurus(plan.amountKurus)}</strong>
          </p>
        )}
        {orderLabel && <p className="it-checkout-order">{orderLabel}</p>}
        <p className="it-checkout-note">
          Ödemeniz onaylandıktan sonra lisansınız yönetici tarafından tanımlanır ve{" "}
          <Link href="/hesabim">Hesabım → Lisanslarım</Link> bölümünde görünür
          {isRenewal ? " (mevcut anahtarınızın süresi uzatılır)" : ""}. Süre, lisans
          oluşturulduğu andan itibaren başlar.
        </p>
        {plan?.billingMode === "monthly" && (
          <label className="it-checkout-store-card">
            <input
              type="checkbox"
              checked={storeCard}
              onChange={(e) => setStoreCard(e.target.checked)}
            />
            Kartımı kaydet (gelecekteki yenilemeler için — PayTR onayı gerekir)
          </label>
        )}
      </div>

      {loading && <div className="it-checkout-loading">Ödeme ekranı hazırlanıyor…</div>}
      {error && <div className="it-checkout-error">{error}</div>}

      {iframeToken && (
        <div className="it-checkout-frame tp_fade_anim" data-delay=".4">
          <iframe
            id="paytriframe"
            src={`https://www.paytr.com/odeme/guvenli/${iframeToken}`}
            title="PayTR Ödeme"
            frameBorder="0"
            scrolling="no"
            style={{ width: "100%", minHeight: "620px" }}
          />
        </div>
      )}
    </div>
  );
}
