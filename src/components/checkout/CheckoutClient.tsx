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
      setIframeToken("");

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
          planId: plan!.id,
          billingMode: plan!.billingMode,
          isRenewal,
          storeCard: plan!.billingMode === "monthly" ? storeCard : false,
        }),
      });

      const data = (await res.json()) as {
        token?: string;
        error?: string;
      };

      if (cancelled) return;

      if (!res.ok || !data.token) {
        setError(data.error || "Ödeme başlatılamadı.");
        setLoading(false);
        return;
      }

      setIframeToken(data.token);
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

  const billingLabel =
    plan?.billingMode === "monthly" ? "Aylık kiralama" : "Tek seferlik lisans";

  return (
    <div className="it-checkout-wrap">
      <div className="it-checkout-head">
        <span className="it-checkout-eyebrow">Güvenli ödeme</span>
        <h1 className="it-checkout-title">
          {isRenewal ? "Lisans yenileme" : "Siparişi tamamla"}
        </h1>
        <p className="it-checkout-lead">
          Ödemeniz PayTR altyapısıyla şifreli işlenir. Onaydan sonra lisansınız
          hesabınıza tanımlanır.
        </p>
      </div>

      <div className="it-checkout-grid">
        <aside className="it-checkout-summary">
          <div className="it-checkout-summary-card">
            <div className="it-checkout-summary-top">
              <span className="it-checkout-badge">
                {isRenewal ? "Yenileme" : "Sipariş özeti"}
              </span>
              <Link href="/fiyatlandirma" className="it-checkout-change">
                Paketi değiştir
              </Link>
            </div>

            {plan && (
              <div className="it-checkout-plan-block">
                <div>
                  <h2 className="it-checkout-plan-name">{plan.name}</h2>
                  <p className="it-checkout-plan-meta">
                    {billingLabel}
                    <span>·</span>
                    {plan.licenseCount} lisans / {plan.maxPcs} PC
                  </p>
                </div>
                <div className="it-checkout-plan-price">
                  <strong>{formatTryFromKurus(plan.amountKurus)}</strong>
                  <em>
                    {plan.billingMode === "monthly" ? "/ ay" : "tek sefer"}
                  </em>
                </div>
              </div>
            )}

            <ul className="it-checkout-includes">
              <li>Offline Windows ERP lisansı</li>
              <li>Hesabım panelinden anahtar erişimi</li>
              <li>
                {plan?.billingMode === "monthly"
                  ? "Taahhütsüz aylık kullanım"
                  : "Ömür boyu kullanım hakkı"}
              </li>
            </ul>

            <div className="it-checkout-note">
              <i className="fa-solid fa-shield-halved" aria-hidden />
              <p>
                Ödeme onayından sonra lisans{" "}
                <Link href="/hesabim">Hesabım → Lisanslarım</Link> bölümünde
                görünür
                {isRenewal
                  ? " (mevcut anahtarınızın süresi uzatılır)"
                  : ""}. Süre, lisans oluşturulduğu andan itibaren başlar.
              </p>
            </div>

            {plan?.billingMode === "monthly" && (
              <label className="it-checkout-store-card">
                <input
                  type="checkbox"
                  checked={storeCard}
                  onChange={(e) => setStoreCard(e.target.checked)}
                />
                <span>
                  Kartımı kaydet
                  <small>Gelecek yenilemeler için — PayTR onayı gerekir</small>
                </span>
              </label>
            )}

            <div className="it-checkout-trust">
              <span>
                <i className="fa-solid fa-lock" aria-hidden /> 256-bit SSL
              </span>
              <span>
                <i className="fa-solid fa-credit-card" aria-hidden /> PayTR
              </span>
              <span>
                <i className="fa-solid fa-check" aria-hidden /> 3D Secure
              </span>
            </div>
          </div>
        </aside>

        <div className="it-checkout-pay">
          <div className="it-checkout-pay-card">
            <div className="it-checkout-pay-head">
              <h3>Kart ile öde</h3>
              <p>Kart bilgilerinizi aşağıdaki güvenli formda girin.</p>
            </div>

            {loading && (
              <div className="it-checkout-loading">
                Ödeme ekranı hazırlanıyor…
              </div>
            )}
            {error && <div className="it-checkout-error">{error}</div>}

            {iframeToken && (
              <div className="it-checkout-frame">
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
        </div>
      </div>
    </div>
  );
}
