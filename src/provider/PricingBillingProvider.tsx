"use client";

import React, { createContext, useContext, useState } from "react";
import type { BillingMode } from "@/constants/pricing";

type PricingBillingContextValue = {
  billingMode: BillingMode;
  setBillingMode: (mode: BillingMode) => void;
  isMonthly: boolean;
};

const PricingBillingContext = createContext<PricingBillingContextValue | null>(
  null,
);

export function PricingBillingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [billingMode, setBillingMode] = useState<BillingMode>("monthly");

  return (
    <PricingBillingContext.Provider
      value={{
        billingMode,
        setBillingMode,
        isMonthly: billingMode === "monthly",
      }}
    >
      {children}
    </PricingBillingContext.Provider>
  );
}

export function usePricingBilling() {
  const context = useContext(PricingBillingContext);
  if (!context) {
    throw new Error(
      "usePricingBilling must be used within PricingBillingProvider",
    );
  }
  return context;
}
