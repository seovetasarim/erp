"use client";

import { usePricingBilling } from "@/provider/PricingBillingProvider";
import type { BillingMode } from "@/constants/pricing";

const PricingBillingToggle = () => {
  const { billingMode, setBillingMode } = usePricingBilling();

  const options: { id: BillingMode; label: string; hint?: string }[] = [
    { id: "monthly", label: "Aylık Kiralama", hint: "1.990₺'den başlayan" },
    { id: "lifetime", label: "Tek Seferlik", hint: "Ömür boyu lisans" },
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
          ? "Aylık kiralama taahhütsüzdür — istediğiniz zaman iptal edebilirsiniz."
          : "Tek seferlik ödemede yazılım ömür boyu sizin; güncelleme süresi pakete göre değişir."}
      </p>
    </div>
  );
};

export default PricingBillingToggle;
