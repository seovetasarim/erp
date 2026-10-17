"use client";

import { usePricingBilling } from "@/provider/PricingBillingProvider";
import type { BillingMode } from "@/constants/pricing";

const PricingBillingToggle = () => {
  const { billingMode, setBillingMode } = usePricingBilling();

  const options: { id: BillingMode; label: string; hint?: string }[] = [
    { id: "monthly", label: "Yıllık", hint: "4.990₺'den başlayan" },
    { id: "lifetime", label: "Süresiz", hint: "Tek seferlik lisans" },
  ];

  return (
    <div className="it-pricing-billing-toggle tp_fade_anim" data-delay=".4">
      <div className="it-pricing-billing-toggle-inner">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`it-pricing-billing-option${
              billingMode === option.id ? " is-active" : ""
            }`}
            onClick={() => setBillingMode(option.id)}
            aria-pressed={billingMode === option.id}
          >
            <strong>{option.label}</strong>
            {option.hint && <span>{option.hint}</span>}
          </button>
        ))}
      </div>
      <p className="it-pricing-billing-note">
        {billingMode === "monthly"
          ? "Yıllık lisans 1 yıl geçerlidir. Süre bitince yenileyerek kullanmaya devam edersiniz."
          : "Süresiz lisans tek seferlik ödemedir. Program süre dolmadan kullanıma açık kalır."}
      </p>
    </div>
  );
};

export default PricingBillingToggle;
