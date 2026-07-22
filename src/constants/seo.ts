import type { Metadata } from "next";

export const SITE = {
  name: "DijitalERP",
  legalName: "DijitalERP",
  url: "https://www.dijitalerp.com.tr",
  locale: "tr_TR",
  language: "tr",
  email: "info@dijitalerp.com.tr",
  /** Sabit hat — arama */
  phone: "+902166061746",
  phoneDisplay: "0216 606 17 46",
  /** WhatsApp — cep hattı */
  whatsapp: "905321667697",
  whatsappDisplay: "0532 166 76 97",
  downloadPath: "/api/download",
  ogImage: "/og-image.png",
  twitterHandle: "@dijitalerp",
  tagline: "Offline Windows ERP — stok, cari, fatura ve kasa tek panelde",
  address: {
    street:
      "Mandıra Cad. Dumlıpınar Mah. Çeşme Sok. No: 3, Emlak Konut Evleri 14/A, Kat: 17, Daire: 91",
    district: "Fikirtepe, Kadıköy",
    city: "İstanbul",
    country: "TR",
    /** Tek satır — footer / iletişim */
    full: "Mandıra Cad. Dumlıpınar Mah. Çeşme Sok. No: 3, Emlak Konut Evleri 14/A, Kat: 17, Daire: 91, Fikirtepe, Kadıköy / İstanbul",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mandira+Cad.+Dumlipinar+Mah.+Cesme+Sok.+No+3+Emlak+Konut+Evleri+14A+Fikirtepe+Kadikoy+Istanbul",
  },
} as const;

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Anahtar kelimeler — ERP ürününden ve arama niyetinden */
export const SITE_KEYWORDS = [
  "DijitalERP",
  "ücretsiz ERP",
  "offline ERP",
  "Windows ERP",
  "stok takip programı",
  "stok takip yazılımı",
  "cari yönetim programı",
  "cari hesap programı",
  "fatura yazılımı",
  "kasa programı",
  "KOBİ ERP",
  "masaüstü ERP",
  "ERP programı indir",
  "barkod stok takip",
  "envanter yönetimi",
  "e-fatura",
  "ücretsiz stok programı",
  "offline stok takip",
] as const;

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  /** true ise title template uygulanmaz (özellikle anasayfa) */
  absoluteTitle?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  absoluteTitle = false,
}: PageSeoInput): Metadata {
  const url = path === "/" ? SITE.url : `${SITE.url}${path}`;
  const ogTitle = absoluteTitle ? title : `${title} | ${SITE.name}`;
  const allKeywords = [...new Set([...SITE_KEYWORDS, ...keywords])];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: url,
      languages: {
        "tr-TR": url,
      },
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: ogTitle,
      description,
      images: [
        {
          url: SITE.ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${SITE.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [SITE.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/icon.png`,
  email: SITE.email,
  telephone: SITE.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: "Kadıköy",
    addressRegion: "İstanbul",
    addressCountry: SITE.address.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer support",
      areaServed: "TR",
      availableLanguage: ["Turkish"],
    },
  ],
  sameAs: [SITE.url],
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE.url : `${SITE.url}${item.path}`,
    })),
  };
}

export const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE.name,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "ERP",
  operatingSystem: "Windows",
  inLanguage: "tr-TR",
  description:
    "Windows üzerinde çalışan ücretsiz offline ERP. Stok takip, cari yönetim, fatura, kasa, barkod ve raporlama tek masaüstü programda.",
  url: SITE.url,
  downloadUrl: `${SITE.url}${SITE.downloadPath}`,
  softwareVersion: "1.0.0",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
    availability: "https://schema.org/InStock",
    category: "Freeware",
  },
  featureList: [
    "Offline stok takip",
    "Cari hesap yönetimi",
    "Fatura yazılımı",
    "Kasa ve nakit takibi",
    "Barkod okuma",
    "Düşük stok uyarısı",
    "Raporlama ve dashboard",
    "Yerel veri saklama",
  ],
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
};
