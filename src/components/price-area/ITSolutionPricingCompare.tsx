"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@/svg";
import {
  COMPARE_FEATURES,
  COMPARE_PLANS,
  getComparePlanDisplay,
  type CompareCell,
} from "@/constants/pricing";
import { usePricingBilling } from "@/provider/PricingBillingProvider";
import { ArrowNine } from "@/svg/ArrowIcons";

const PLAN_VISUAL: Record<
  string,
  {
    variant: "default" | "featured" | "accent";
    gradient: string;
    gradientW: number;
    gradientH: number;
  }
> = {
  starter: {
    variant: "default",
    gradient: "/assets/img/layers/gradi.png",
    gradientW: 70,
    gradientH: 564,
  },
  pro: {
    variant: "featured",
    gradient: "/assets/img/layers/gradi2.png",
    gradientW: 75,
    gradientH: 564,
  },
  enterprise: {
    variant: "accent",
    gradient: "/assets/img/layers/gradi3.png",
    gradientW: 75,
    gradientH: 564,
  },
};

const renderValue = (value: CompareCell, dark: boolean) => {
  if (typeof value === "boolean") {
    return value ? (
      <span className={`it-compare-check${dark ? " is-on-dark" : ""}`}>
        <CheckIcon color="currentColor" />
      </span>
    ) : (
      <span className={`it-compare-dash${dark ? " is-on-dark" : ""}`}>—</span>
    );
  }
  return (
    <span className={`it-compare-value${dark ? " is-on-dark" : ""}`}>
      {value}
    </span>
  );
};

const ITSolutionPricingCompare = () => {
  const { billingMode } = usePricingBilling();

  return (
    <div className="it-compare-sec pt-120 pb-110">
      <div className="container container-1230">
        <div className="row justify-content-center mb-60">
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

        <div className="row it-compare-cards tp_fade_anim" data-delay=".4">
          {COMPARE_PLANS.map((plan) => {
            const display = getComparePlanDisplay(plan, billingMode);
            const visual = PLAN_VISUAL[plan.id] ?? PLAN_VISUAL.starter;
            const isDark =
              visual.variant === "featured" || visual.variant === "accent";
            const cardClass = [
              "it-compare-card",
              visual.variant === "featured" ? "is-featured" : "",
              visual.variant === "accent" ? "is-accent" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <div key={plan.id} className="col-xl-4 col-lg-6 d-flex">
                <div className="it-compare-content">
                  <div className={cardClass}>
                    {plan.popular ? (
                      <span className="it-compare-badge">Önerilen</span>
                    ) : null}

                    <div className="it-compare-head">
                      <span className="it-compare-name">{plan.name}</span>
                      <h4 className="it-compare-price">{display.price}</h4>
                      {billingMode === "monthly" && plan.id !== "enterprise" ? (
                        <em className="it-compare-period">/ ay kiralama</em>
                      ) : null}
                    </div>

                    <ul className="it-compare-list">
                      {COMPARE_FEATURES.map((feature, index) => (
                        <li key={feature}>
                          <em>{feature}</em>
                          {renderValue(display.values[index], isDark)}
                        </li>
                      ))}
                    </ul>

                    <Link
                      className="tp-btn-black-radius d-inline-flex align-items-center justify-content-between w-100"
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

                  <div className="it-compare-rail" aria-hidden>
                    <Image
                      src={visual.gradient}
                      alt=""
                      width={visual.gradientW}
                      height={visual.gradientH}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ITSolutionPricingCompare;
