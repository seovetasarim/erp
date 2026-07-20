"use client";

import Link from "next/link";
import {
  DIJITAL_ERP_DOWNLOAD_HREF,
} from "@/constants/download";
import { useDownloadHref } from "@/hooks/useDownloadHref";
import {
  PRICING_PLANS,
  getPlanBilling,
} from "@/constants/pricing";
import { usePricingBilling } from "@/provider/PricingBillingProvider";
import PricingBillingToggle from "@/components/price-area/PricingBillingToggle";
import { ArrowNine } from "@/svg/ArrowIcons";

const SIDE_BENEFITS = [
  "Tüm ana ERP modülleri",
  "Offline Windows kullanımı",
  "Güncelleme & destek seçenekleri",
];

const ITSolutionPricingPlans = () => {
  const { billingMode, isMonthly } = usePricingBilling();
  const downloadHref = useDownloadHref();

  return (
    <div className="it-pricing-plans-area it-pricing-style4 pt-120 pb-110" id="paketler">
      <div className="container container-1230">
        <div className="row">
          <div className="col-lg-4">
            <div className="it-pricing-style4-content tp_fade_anim" data-delay=".3">
              <span className="tp-section-subtitle-platform mb-15 d-inline-block">
                Paketler
              </span>
              <h3 className="tp-section-title-platform fs-70 mb-25">
                Sadece ihtiyacınız kadar ödeyin
              </h3>
              <p className="it-pricing-plans-intro">
                Ücretsiz sürümle başlayın. Tek seferlik lisans veya aylık kiralama —
                bütçenize uygun modeli seçin.
              </p>
              <PricingBillingToggle />
              <ul className="it-pricing-style4-list">
                {SIDE_BENEFITS.map((item) => (
                  <li key={item}>
                    <i className="fa-solid fa-check" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="it-pricing-style4-stack tp_fade_anim" data-delay=".4">
              {PRICING_PLANS.map((plan) => {
                const billing = getPlanBilling(plan, billingMode);
                if (!billing) return null;

                const isDownload = billing.href === DIJITAL_ERP_DOWNLOAD_HREF;
                const ctaInner = (
                  <>
                    <span>
                      <span className="text-1">{billing.cta}</span>
                      <span className="text-2">{billing.cta}</span>
                    </span>
                    <i>
                      <span>
                        <ArrowNine />
                        <ArrowNine />
                      </span>
                    </i>
                  </>
                );

                return (
                  <div
                    key={plan.id}
                    className={`it-price-card4${plan.popular ? " is-featured" : ""}`}
                  >
                    <div className="it-price-card4-head">
                      <h4 className="it-price-card4-title">{plan.name}</h4>
                      <span className="it-price-card4-subtitle">
                        {billing.description}
                      </span>
                    </div>

                    <ul className="it-price-card4-features">
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>

                    <div className="it-price-card4-action">
                      <h4 className="it-price-card4-price">
                        {billing.price}
                        {billing.period ? <span>{billing.period}</span> : null}
                      </h4>
                      {billing.altPriceNote ? (
                        <small className="it-price-card4-alt">
                          {billing.altPriceNote}
                        </small>
                      ) : null}
                      {isDownload ? (
                        <a
                          className="tp-btn-black-radius d-inline-flex align-items-center justify-content-between"
                          href={downloadHref}
                        >
                          {ctaInner}
                        </a>
                      ) : (
                        <Link
                          className="tp-btn-black-radius d-inline-flex align-items-center justify-content-between"
                          href={billing.href}
                        >
                          {ctaInner}
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {isMonthly && (
              <p className="it-pricing-monthly-footnote tp_fade_anim" data-delay=".5">
                Aylık kiralama aktif kullanım süresince geçerlidir. Ödeme yapılmadığında
                lisans askıya alınır; tek seferlik lisansa geçiş için iletişime geçin.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSolutionPricingPlans;
