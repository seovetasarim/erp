"use client";

import Link from "next/link";
import { ArrowSvg } from "@/svg/ArrowIcons";
import { useDownloadHref } from "@/hooks/useDownloadHref";
import { DIJITAL_ERP_DOWNLOAD_HREF } from "@/constants/download";
import { PRICING_PLANS, getPlanBilling } from "@/constants/pricing";
import { usePricingBilling } from "@/provider/PricingBillingProvider";

type CardTone = "default" | "soft" | "violet" | "teal" | "ink";

const PLAN_TONE: Record<string, CardTone> = {
  free: "default",
  starter: "soft",
  pro: "violet",
  enterprise: "ink",
};

const splitPrice = (price: string, period: string) => {
  if (/teklif/i.test(price)) {
    return { label: "Teklif", suffix: undefined as string | undefined };
  }

  const label = price.replace(/[₺\s]/g, "").replace(/\/ay/i, "");
  const suffix = /ay/i.test(period) ? "₺/ay" : "₺";
  return { label, suffix };
};

const ITSolutionPricingCompare = () => {
  const { billingMode } = usePricingBilling();
  const downloadHref = useDownloadHref();

  return (
    <section className="it-compare-sec">
      <div className="container container-1460">
        <div className="it-compare-head">
          <div className="row align-items-end mb-0">
            <div className="col-xl-8 col-lg-9">
              <span className="tp-section-subtitle-platform platform-text-black mb-15 d-inline-block">
                Karşılaştırma
              </span>
              <h3 className="tp-section-title-platform platform-text-black it-compare-title">
                Hangi pakette ne var?
              </h3>
            </div>
            <div className="col-xl-4 col-lg-3">
              <div className="it-compare-head-btn">
                <Link href="#paketler" className="it-compare-nav-btn">
                  <span>Paketlere bak</span>
                  <ArrowSvg />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="it-compare-grid">
          {PRICING_PLANS.map((plan) => {
            const billing = getPlanBilling(plan, billingMode);
            if (!billing) return null;

            const tone = PLAN_TONE[plan.id] ?? "default";
            const { label, suffix } = splitPrice(billing.price, billing.period);
            const isDownload = billing.href === DIJITAL_ERP_DOWNLOAD_HREF;
            const href = isDownload ? downloadHref : billing.href;
            const btnClass =
              tone === "soft" || tone === "violet"
                ? "it-compare-btn it-compare-btn--dark"
                : "it-compare-btn it-compare-btn--outline";

            const cta = (
              <>
                <span>{billing.cta}</span>
                <ArrowSvg />
              </>
            );

            return (
              <article
                key={plan.id}
                className={`it-compare-card it-compare-card--${tone}`}
              >
                {plan.popular ? (
                  <span className="it-compare-card__badge">Popüler</span>
                ) : null}
                <div className="it-compare-card__head">
                  <h4 className="it-compare-card__title">{plan.name}</h4>
                  <p className="it-compare-card__subtitle">
                    {billing.description}
                  </p>
                </div>
                <ul className="it-compare-card__features">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="it-compare-card__footer">
                  <p className="it-compare-card__price">
                    {label}
                    {suffix ? <span>{suffix}</span> : null}
                  </p>
                  {isDownload ? (
                    <a className={btnClass} href={href}>
                      {cta}
                    </a>
                  ) : (
                    <Link className={btnClass} href={href}>
                      {cta}
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ITSolutionPricingCompare;
