import { getIlBySlug, TURKIYE_ILLERI, type TurkiyeIli } from './turkiye-illeri';

export type CitySeoVariant = {
  suffix: string;
  heroTitle: (il: string, ilde: string) => string;
  metaTitle: (il: string) => string;
  metaDescription: (il: string, ilde: string) => string;
  keywords: (il: string) => string[];
};

/** Uzun sonekler önce — slug çözümlemesi için */
export const CITY_SEO_VARIANTS: CitySeoVariant[] = [
  {
    suffix: 'ucretsiz-crm-yazilimi-indir',
    heroTitle: (_il, ilde) => `${ilde} Ücretsiz CRM Yazılımı İndir`,
    metaTitle: (il) => `${il} Ücretsiz CRM Yazılımı İndir | DijitalERP`,
    metaDescription: (il, ilde) =>
      `${ilde} ücretsiz CRM yazılımı indir. Cari hesap, müşteri takibi, stok ve fatura tek programda. KOBİ'ler için ücretsiz Windows ERP — DijitalERP.`,
    keywords: (il) => [
      `${il} ücretsiz CRM yazılımı indir`,
      `${il} ücretsiz CRM programı`,
      'ücretsiz CRM indir',
      `${il} cari hesap yazılımı`,
      `${il} müşteri takip programı`,
      'ücretsiz muhasebe yazılımı',
    ],
  },
  {
    suffix: 'ucretsiz-muhasebe-yazilimi',
    heroTitle: (_il, ilde) => `${ilde} Ücretsiz Muhasebe Yazılımı`,
    metaTitle: (il) => `${il} Ücretsiz Muhasebe Yazılımı | DijitalERP`,
    metaDescription: (il, ilde) =>
      `${ilde} ücretsiz muhasebe yazılımı indir. Stok, cari, fatura, kasa ve raporlar tek programda — offline, aboneliksiz. KOBİ'ler için DijitalERP.`,
    keywords: (il) => [
      `${il} ücretsiz muhasebe yazılımı`,
      `${il} ücretsiz muhasebe yazılımı indir`,
      'ücretsiz muhasebe yazılımı indir',
      `${il} ücretsiz muhasebe programı`,
      `${il} KOBİ muhasebe yazılımı`,
      'offline muhasebe programı',
    ],
  },
  {
    suffix: 'ucretsiz-muhasebe-programi',
    heroTitle: (_il, ilde) => `${ilde} Ücretsiz Muhasebe Programı`,
    metaTitle: (il) => `${il} Ücretsiz Muhasebe Programı | DijitalERP — Ücretsiz İndir`,
    metaDescription: (il, ilde) =>
      `${ilde} ücretsiz muhasebe programı indir. Ücretsiz ERP, stok takip, CRM ve fatura modülleri. Windows için offline KOBİ yazılımı — DijitalERP.`,
    keywords: (il) => [
      `${il} ücretsiz muhasebe programı`,
      `${il} ücretsiz muhasebe programı indir`,
      'ücretsiz muhasebe programı indir',
      `${il} ücretsiz ERP`,
      'ücretsiz stok programı',
      `${il} KOBİ ERP yazılımı`,
    ],
  },
];

export const PRIMARY_CITY_SEO_SUFFIX = CITY_SEO_VARIANTS[1].suffix;

export function buildCitySeoSlug(ilSlug: string, variantSuffix: string = PRIMARY_CITY_SEO_SUFFIX): string {
  return `${ilSlug}-${variantSuffix}`;
}

export function resolveCitySeoSlug(
  seoSlug: string
): { city: TurkiyeIli; variant: CitySeoVariant } | undefined {
  for (const variant of CITY_SEO_VARIANTS) {
    const marker = `-${variant.suffix}`;
    if (seoSlug.endsWith(marker)) {
      const ilSlug = seoSlug.slice(0, -marker.length);
      const city = getIlBySlug(ilSlug);
      if (city) return { city, variant };
    }
  }
  return undefined;
}

export function getAllCitySeoSlugs(): string[] {
  return TURKIYE_ILLERI.flatMap((il) =>
    CITY_SEO_VARIANTS.map((variant) => buildCitySeoSlug(il.slug, variant.suffix))
  );
}
