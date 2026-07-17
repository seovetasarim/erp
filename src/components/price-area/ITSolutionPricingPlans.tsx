"use client";

import { CheckIconTwo } from "@/svg";
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
import Link from "next/link";

const ITSolutionPricingPlans = () => {
  const { billingMode, isMonthly } = usePricingBilling();
  const downloadHref = useDownloadHref();

  return (
    <div
      className="it-pricing-plans-area pt-110 pb-90"
      id="paketler"
      style={{ backgroundColor: "#FFEEE6" }}
    >
      <div className="container container-1230">
        <div className="row mb-50">
          <div className="col-xl-6">
            <span
              className="tp-section-subtitle-platform platform-text-black mb-15 d-inline-block tp_fade_anim"
              data-delay=".3"
            >
              Paketler
            </span>
            <h3 className="tp-section-title-platform platform-text-black fs-84 tp-split-text tp-split-right">
              İşinize göre lisans
            </h3>
          </div>
          <div className="col-xl-5 offset-xl-1 d-flex align-items-end">
            <p className="it-pricing-plans-intro tp_fade_anim" data-delay=".5">
              Ücretsiz sürümle başlayın. Tek seferlik lisans veya aylık kiralama
              — bütçenize uygun ödeme modelini seçin.
            </p>
          </div>
        </div>

        <PricingBillingToggle />

        <div className="it-pricing-rows">
          {PRICING_PLANS.map((plan, index) => {
            const billing = getPlanBilling(plan, billingMode);
            if (!billing) return null;

            const isDownload = billing.href === DIJITAL_ERP_DOWNLOAD_HREF;

            return (
              <div
                key={plan.id}
                className={`it-pricing-row tp_fade_anim${plan.popular ? " is-popular" : ""}`}
                data-delay={`.${3 + index}`}
              >
                {plan.popular && (
                  <span className="it-pricing-row-badge">Önerilen</span>
                )}
                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <div className="it-pricing-row-meta">
                      <span className="it-pricing-row-num">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="it-pricing-row-name">{plan.name}</h4>
                        <p>{billing.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <ul className="it-pricing-row-features">
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <span>
                            <CheckIconTwo />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-5">
                    <div className="it-pricing-row-action d-flex align-items-center justify-content-lg-end flex-wrap">
                      <div className="it-pricing-row-price">
                        <strong>{billing.price}</strong>
                        <em>{billing.period}</em>
                        {billing.altPriceNote && (
                          <small className="it-pricing-row-alt">
                            {billing.altPriceNote}
                          </small>
                        )}
                      </div>
                      <Link
                        className="tp-btn-black-radius d-inline-flex align-items-center justify-content-between"
                        href={isDownload ? downloadHref : billing.href}
                      >
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
                      </Link>
                    </div>
                  </div>
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
  );
};

export default ITSolutionPricingPlans;
