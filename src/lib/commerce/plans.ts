import type { BillingMode } from "@/constants/pricing";

export type CheckoutPlanId = "starter" | "pro";

export type CheckoutPlan = {
  id: CheckoutPlanId;
  name: string;
  billingMode: BillingMode;
  amountKurus: number;
  label: string;
  maxPcs: number;
  licenseCount: number;
};

export const CHECKOUT_PLANS: Record<string, CheckoutPlan> = {
  "starter-monthly": {
    id: "starter",
    name: "Başlangıç",
    billingMode: "monthly",
    amountKurus: 199_000,
    label: "Başlangıç — Aylık Kiralama",
    maxPcs: 1,
    licenseCount: 1,
  },
  "starter-lifetime": {
    id: "starter",
    name: "Başlangıç",
    billingMode: "lifetime",
    amountKurus: 4_990_000,
    label: "Başlangıç — Tek Seferlik",
    maxPcs: 1,
    licenseCount: 1,
  },
  "pro-monthly": {
    id: "pro",
    name: "Profesyonel",
    billingMode: "monthly",
    amountKurus: 299_000,
    label: "Profesyonel — Aylık Kiralama",
    maxPcs: 3,
    licenseCount: 3,
  },
  "pro-lifetime": {
    id: "pro",
    name: "Profesyonel",
    billingMode: "lifetime",
    amountKurus: 7_990_000,
    label: "Profesyonel — Tek Seferlik",
    maxPcs: 3,
    licenseCount: 3,
  },
};

export function resolveCheckoutPlan(planId: string, billingMode: string) {
  const normalizedPlan =
    planId === "baslangic"
      ? "starter"
      : planId === "profesyonel"
        ? "pro"
        : planId;
  const normalizedBilling =
    billingMode === "aylik" || billingMode === "monthly" ? "monthly" : "lifetime";
  const key = `${normalizedPlan}-${normalizedBilling}`;
  return CHECKOUT_PLANS[key] ?? null;
}

export function formatTryFromKurus(kurus: number) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(kurus / 100);
}
