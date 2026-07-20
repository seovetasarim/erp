export type BillingMode = "lifetime" | "monthly";

export type PlanBilling = {
  price: string;
  period: string;
  description: string;
  cta: string;
  href: string;
  altPriceNote?: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  features: string[];
  popular?: boolean;
  lifetime: PlanBilling | null;
  monthly: PlanBilling | null;
};

export type ComparePlan = {
  id: string;
  name: string;
  popular?: boolean;
  cta: string;
  href: string;
  lifetimePrice: string;
  monthlyPrice: string;
  values: CompareCell[];
  monthlyValues?: CompareCell[];
};

export type CompareCell = boolean | string;

export const COMPARE_FEATURES = [
  "Firma & Cari",
  "Ürün & Stok",
  "Kasa",
  "Faturalar",
  "Raporlar & Dashboard",
  "Kargo & E-Fatura",
  "Kullanıcı sayısı",
  "Güncelleme",
  "E-Fatura kurulum",
  "E-Fatura + API",
  "Destek",
  "Özel eğitim",
  "Offline çalışma",
  "Excel & yedekleme",
] as const;

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Ücretsiz",
    features: [
      "Ana modüller dahil",
      "Tamamen offline",
      "Veriler bilgisayarınızda",
      "Topluluk desteği",
    ],
    lifetime: {
      price: "0₺",
      period: "Süresiz kullanım",
      description: "Tek bilgisayar · Temel modüller",
      cta: "Ücretsiz İndir",
      href: "/api/download",
    },
    monthly: null,
  },
  {
    id: "starter",
    name: "Başlangıç",
    features: [
      "Tüm modüller dahil",
      "1 bilgisayar lisansı",
      "E-posta destek",
      "Offline Windows ERP",
    ],
    lifetime: {
      price: "49.900₺",
      period: "Tek seferlik ödeme",
      description: "1 bilgisayar · Ömür boyu kullanım",
      cta: "Satın Al",
      href: "/odeme?paket=baslangic&odeme=tek-seferlik",
      altPriceNote: "veya 1.990₺/ay kiralama",
    },
    monthly: {
      price: "1.990₺",
      period: "/ ay · kiralama",
      description: "1 bilgisayar · Taahhütsüz aylık",
      cta: "Kiralamaya Başla",
      href: "/odeme?paket=baslangic&odeme=aylik",
      altPriceNote: "veya 49.900₺ tek seferlik",
    },
  },
  {
    id: "pro",
    name: "Profesyonel",
    popular: true,
    features: [
      "Tüm modüller dahil",
      "3 bilgisayar lisansı",
      "Öncelikli destek",
      "E-Fatura kurulum",
    ],
    lifetime: {
      price: "79.900₺",
      period: "Tek seferlik ödeme",
      description: "3 bilgisayar · Ömür boyu kullanım",
      cta: "Satın Al",
      href: "/odeme?paket=profesyonel&odeme=tek-seferlik",
      altPriceNote: "veya 2.990₺/ay kiralama",
    },
    monthly: {
      price: "2.990₺",
      period: "/ ay · kiralama",
      description: "3 bilgisayar · Taahhütsüz aylık",
      cta: "Kiralamaya Başla",
      href: "/odeme?paket=profesyonel&odeme=aylik",
      altPriceNote: "veya 79.900₺ tek seferlik",
    },
  },
  {
    id: "enterprise",
    name: "Kurumsal",
    features: [
      "Tüm modüller dahil",
      "Sınırsız bilgisayar",
      "7/24 destek",
      "E-Fatura + API + eğitim",
    ],
    lifetime: {
      price: "Teklif",
      period: "Tek seferlik veya aylık",
      description: "Sınırsız bilgisayar · Özel anlaşma",
      cta: "Teklif Al",
      href: "mailto:info@dijitalerp.com.tr?subject=Kurumsal%20Paket%20Teklifi",
    },
    monthly: {
      price: "Teklif",
      period: "Aylık kiralama",
      description: "Sınırsız bilgisayar · Özel anlaşma",
      cta: "Teklif Al",
      href: "mailto:info@dijitalerp.com.tr?subject=Kurumsal%20Ayl%C4%B1k%20Kiralama",
    },
  },
];

export const COMPARE_PLANS: ComparePlan[] = [
  {
    id: "starter",
    name: "Başlangıç",
    lifetimePrice: "49.900₺",
    monthlyPrice: "1.990₺/ay",
    cta: "Satın Al",
    href: "/iletisim?paket=baslangic&odeme=tek-seferlik",
    values: [
      true,
      true,
      true,
      true,
      true,
      false,
      "1",
      "1 yıl",
      false,
      false,
      "E-posta",
      false,
      true,
      true,
    ],
    monthlyValues: [
      true,
      true,
      true,
      true,
      true,
      false,
      "1",
      "Aylık",
      false,
      false,
      "E-posta",
      false,
      true,
      true,
    ],
  },
  {
    id: "pro",
    name: "Profesyonel",
    popular: true,
    lifetimePrice: "79.900₺",
    monthlyPrice: "2.990₺/ay",
    cta: "Satın Al",
    href: "/iletisim?paket=profesyonel&odeme=tek-seferlik",
    values: [
      true,
      true,
      true,
      true,
      true,
      true,
      "3",
      "2 yıl",
      true,
      false,
      "Öncelikli",
      false,
      true,
      true,
    ],
    monthlyValues: [
      true,
      true,
      true,
      true,
      true,
      true,
      "3",
      "Aylık",
      true,
      false,
      "Öncelikli",
      false,
      true,
      true,
    ],
  },
  {
    id: "enterprise",
    name: "Kurumsal",
    lifetimePrice: "Teklif",
    monthlyPrice: "Teklif",
    cta: "Teklif Al",
    href: "mailto:info@dijitalerp.com.tr",
    values: [
      true,
      true,
      true,
      true,
      true,
      true,
      "Sınırsız",
      "Süresiz",
      true,
      true,
      "7/24",
      true,
      true,
      true,
    ],
  },
];

export function getPlanBilling(
  plan: PricingPlan,
  mode: BillingMode,
): PlanBilling | null {
  if (mode === "monthly") return plan.monthly ?? plan.lifetime;
  return plan.lifetime;
}

export function getComparePlanDisplay(
  plan: ComparePlan,
  mode: BillingMode,
): {
  price: string;
  cta: string;
  href: string;
  values: CompareCell[];
} {
  const isMonthly = mode === "monthly";

  return {
    price: isMonthly ? plan.monthlyPrice : plan.lifetimePrice,
    cta:
      plan.id === "enterprise"
        ? "Teklif Al"
        : isMonthly
          ? "Kirala"
          : "Satın Al",
    href:
      plan.id === "starter"
        ? isMonthly
          ? "/odeme?paket=baslangic&odeme=aylik"
          : "/odeme?paket=baslangic&odeme=tek-seferlik"
        : plan.id === "pro"
          ? isMonthly
            ? "/odeme?paket=profesyonel&odeme=aylik"
            : "/odeme?paket=profesyonel&odeme=tek-seferlik"
          : plan.href,
    values:
      isMonthly && plan.monthlyValues ? plan.monthlyValues : plan.values,
  };
}
