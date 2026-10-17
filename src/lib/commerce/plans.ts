import type { BillingMode } from "@/constants/pricing";

export type CheckoutPlanId = "starter" | "pro" | "team";

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
    amountKurus: 499_000,
    label: "1 Bilgisayar — Yıllık Lisans",
    maxPcs: 1,
    licenseCount: 1,
  },
  "starter-lifetime": {
    id: "starter",
    name: "Başlangıç",
    billingMode: "lifetime",
    amountKurus: 1_290_000,
    label: "1 Bilgisayar — Süresiz Lisans",
    maxPcs: 1,
    licenseCount: 1,
  },
  "pro-monthly": {
    id: "pro",
    name: "Profesyonel",
    billingMode: "monthly",
    amountKurus: 999_000,
    label: "3 Bilgisayar — Yıllık Lisans",
    maxPcs: 3,
    licenseCount: 3,
  },
  "pro-lifetime": {
    id: "pro",
    name: "Profesyonel",
    billingMode: "lifetime",
    amountKurus: 2_490_000,
    label: "3 Bilgisayar — Süresiz Lisans",
    maxPcs: 3,
    licenseCount: 3,
  },
  "team-monthly": {
    id: "team",
    name: "5 Bilgisayar",
    billingMode: "monthly",
    amountKurus: 1_499_000,
    label: "5 Bilgisayar — Yıllık Lisans",
    maxPcs: 5,
    licenseCount: 5,
  },
  "team-lifetime": {
    id: "team",
    name: "5 Bilgisayar",
    billingMode: "lifetime",
    amountKurus: 3_490_000,
    label: "5 Bilgisayar — Süresiz Lisans",
    maxPcs: 5,
    licenseCount: 5,
  },
};

export function resolveCheckoutPlan(planId: string, billingMode: string) {
  const normalizedPlan =
    planId === "baslangic"
      ? "starter"
      : planId === "profesyonel"
        ? "pro"
        : planId === "bes" || planId === "5"
          ? "team"
          : planId;
  const normalizedBilling =
    billingMode === "aylik" || billingMode === "yillik" || billingMode === "monthly"
      ? "monthly"
      : "lifetime";
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
