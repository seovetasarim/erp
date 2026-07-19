"use client";

import { ArrowNine } from "@/svg/ArrowIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "dijitalerp_promo_popup_dismissed";
const HIDE_MS = 1000 * 60 * 60 * 24 * 3;
const SHOW_DELAY_MS = 2600;

const EXCLUDED_PREFIXES = [
  "/admin",
  "/giris",
  "/kayit",
  "/hesabim",
  "/odeme",
];

function isExcludedPath(pathname: string) {
  return EXCLUDED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function wasRecentlyDismissed() {
  if (typeof window === "undefined") return true;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return false;
  const dismissedAt = Number(raw);
  if (!Number.isFinite(dismissedAt)) return false;
  return Date.now() - dismissedAt < HIDE_MS;
}

export default function PromoOfferPopup() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const dismiss = useCallback(() => {
    setOpen(false);
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
  }, []);

  useEffect(() => {
    if (isExcludedPath(pathname) || wasRecentlyDismissed()) return;

    const timer = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [dismiss, open]);

  if (!open || isExcludedPath(pathname)) return null;

  return (
    <div className="it-promo-popup" role="presentation">
      <button
        type="button"
        className="it-promo-popup-backdrop"
        aria-label="Kampanya penceresini kapat"
        onClick={dismiss}
      />

      <div
        className="it-promo-popup-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="it-promo-popup-title"
      >
        <button
          type="button"
          className="it-promo-popup-close"
          aria-label="Kapat"
          onClick={dismiss}
        >
          ×
        </button>

        <span className="it-promo-popup-badge">Kurumsal ERP paketleri</span>

        <p className="it-promo-popup-kicker">Aylık kiralama ile hemen başlayın</p>

        <h2 id="it-promo-popup-title" className="it-promo-popup-price">
          <span className="it-promo-popup-price-value">1.990 ₺</span>
          <span className="it-promo-popup-price-suffix">&apos;den başlayan fiyatlar</span>
        </h2>

        <p className="it-promo-popup-lead">
          Stok, cari, fatura ve kasa tek panelde. Offline Windows ERP — veriler bilgisayarınızda
          kalır.
        </p>

        <ul className="it-promo-popup-points">
          <li>Tüm modüller dahil</li>
          <li>Taahhütsüz aylık kiralama</li>
          <li>Ücretsiz sürümle hemen deneyin</li>
        </ul>

        <div className="it-promo-popup-actions">
          <Link
            href="/fiyatlandirma"
            className="tp-btn-black-radius btn-blue-bg d-inline-flex align-items-center justify-content-between it-promo-popup-cta"
            onClick={dismiss}
          >
            <span>
              <span className="text-1">Fiyatları İncele</span>
              <span className="text-2">Fiyatları İncele</span>
            </span>
            <i>
              <span>
                <ArrowNine />
                <ArrowNine />
              </span>
            </i>
          </Link>

          <Link href="/fiyatlandirma?odeme=aylik" className="it-promo-popup-secondary" onClick={dismiss}>
            1.990 ₺/ay Başlangıç paketi
          </Link>
        </div>

        <button type="button" className="it-promo-popup-dismiss" onClick={dismiss}>
          Şimdi değil
        </button>
      </div>
    </div>
  );
}
