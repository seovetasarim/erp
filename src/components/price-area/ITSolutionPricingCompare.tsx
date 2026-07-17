"use client";

import { CheckIcon } from "@/svg";
import {
  COMPARE_FEATURES,
  COMPARE_PLANS,
  getComparePlanDisplay,
  type CompareCell,
} from "@/constants/pricing";
import { usePricingBilling } from "@/provider/PricingBillingProvider";
import { ArrowNine } from "@/svg/ArrowIcons";
import Link from "next/link";

const renderValue = (value: CompareCell) => {
  if (typeof value === "boolean") {
    return value ? (
      <span className="it-pricing-tower-check">
        <CheckIcon color="currentColor" />
      </span>
    ) : (
      <span className="it-pricing-tower-dash">—</span>
    );
  }
  return <span className="it-pricing-tower-value">{value}</span>;
};

const ITSolutionPricingCompare = () => {
  const { billingMode } = usePricingBilling();

  return (
    <div
      className="it-pricing-compare-area pt-110 pb-110"
      style={{ backgroundColor: "#FDF7F4" }}
    >
      <div className="container container-1230">
        <div className="row justify-content-center mb-70">
          <div className="col-xl-8 text-center">
            <span
              className="tp-section-subtitle-platform platform-text-black mb-15 d-inline-block tp_fade_anim"
              data-delay=".3"
            >
              Karşılaştırma
            </span>
            <h3 className="tp-section-title-platform platform-text-black fs-84 tp-split-text tp-split-right">
              Hangi pakette ne var?
            </h3>
          </div>
        </div>

        <div className="it-pricing-towers tp_fade_anim" data-delay=".4">
          <div className="row g-4">
            {COMPARE_PLANS.map((plan) => {
              const display = getComparePlanDisplay(plan, billingMode);

              return (
                <div key={plan.id} className="col-lg-4">
                  <div
                    className={`it-pricing-tower${plan.popular ? " is-popular" : ""}`}
                  >
                    {plan.popular && (
                      <span className="it-pricing-tower-badge">Önerilen</span>
                    )}
                    <div className="it-pricing-tower-head">
                      <span>{plan.name}</span>
                      <h4>{display.price}</h4>
                      {billingMode === "monthly" && plan.id !== "enterprise" && (
                        <em className="it-pricing-tower-period">/ ay kiralama</em>
                      )}
                    </div>
                    <ul className="it-pricing-tower-list">
                      {COMPARE_FEATURES.map((feature, index) => (
                        <li key={feature}>
                          <em>{feature}</em>
                          {renderValue(display.values[index])}
                        </li>
                      ))}
                    </ul>
                    <Link
                      className="tp-btn-black-radius d-inline-flex align-items-center justify-content-between w-100 it-pricing-tower-btn"
                      href={display.href}
                    >
                      <span>
                        <span className="text-1">{display.cta}</span>
                        <span className="text-2">{display.cta}</span>
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSolutionPricingCompare;
