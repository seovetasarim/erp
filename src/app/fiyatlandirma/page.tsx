import type { Metadata } from 'next';
import Hero from '../Hero';
import AnimateSection from '../AnimateSection';
import PricingSection from '../PricingSection';
import SeoContentSection from './SeoContentSection';
import Footer from '../Footer';
import { SITE_URL } from '../../site-url';

const canon = `${SITE_URL}/fiyatlandirma`;

export const metadata: Metadata = {
  title: 'Fiyatlandırma — Ücretsiz Deneme ve ERP Lisans Paketleri',
  description:
    "Önce DijitalERP'yi ücretsiz indirip deneyin (Windows). Lisans paketleri: Başlangıç 49.900 TL, Profesyonel 79.900 TL — tek seferlik ödeme, abonelik yok. Karşılaştırma ve teklif: 0532 166 76 97.",
  keywords: [
    'ücretsiz ERP indir',
    'ERP yazılımı fiyatı',
    'stok programı fiyatı',
    'KOBİ ERP lisans',
    'tek seferlik ERP',
    'DijitalERP fiyat',
  ],
  alternates: { canonical: canon },
  openGraph: {
    title: 'DijitalERP Fiyatlandırma — Ücretsiz sürüm + lisans paketleri',
    description: 'Ücretsiz indir, offline dene. Başlangıç 49.900 TL, Profesyonel 79.900 TL — abonelik yok.',
    url: canon,
  },
};

export default function FiyatlandirmaPage() {
  return (
    <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="pricing">
          <PricingSection />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
    </div>
  );
}
