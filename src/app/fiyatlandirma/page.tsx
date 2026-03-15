import type { Metadata } from 'next';
import Hero from '../Hero';
import AnimateSection from '../AnimateSection';
import PricingSection from '../PricingSection';
import SeoContentSection from './SeoContentSection';
import Footer from '../Footer';

export const metadata: Metadata = {
  title: 'Fiyatlandırma | DijitalERP ERP Yazılımı — Tek Seferlik Lisans',
  description:
    "DijitalERP fiyatları: Başlangıç 25.000 TL, Profesyonel 35.000 TL. Tek seferlik ödeme, aylık abonelik yok. KOBİ'ler için süresiz ERP lisansı ve özellik karşılaştırması.",
  keywords: [
    'ERP yazılımı fiyatı', 'stok programı fiyatı', 'KOBİ ERP lisans',
    'tek seferlik ERP', 'DijitalERP fiyat', 'ERP yazılımı satın al',
  ],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/fiyatlandirma' },
  openGraph: {
    title: 'DijitalERP Fiyatlandırma — 25.000 TL\'den Başlayan ERP Lisansı',
    description: 'Tek seferlik ödeme. Abonelik yok. Başlangıç 25.000 TL, Profesyonel 35.000 TL.',
    url: 'https://www.dijitalerp.com.tr/fiyatlandirma',
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
