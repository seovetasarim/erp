import type { Metadata } from 'next';
import Hero from '../Hero';
import AnimateSection from '../AnimateSection';
import FeaturesSection from '../FeaturesSection';
import SeoContentSection from './SeoContentSection';
import Footer from '../Footer';
import { SITE_URL } from '../../site-url';

const canon = `${SITE_URL}/ozellikler`;

export const metadata: Metadata = {
  title: 'Özellikler — Ücretsiz İndirilebilir Offline ERP Modülleri',
  description:
    "DijitalERP modülleri: stok takip, cari, fatura, E-Fatura, kasa, kargo etiketi, raporlar, Excel export. Ücretsiz Windows sürümünü indirerek offline deneyin; KOBİ ERP.",
  keywords: [
    'ücretsiz ERP indir',
    'ERP modülleri',
    'stok takip özellikleri',
    'cari yönetim yazılımı',
    'offline ERP',
    'E-Fatura programı',
    'KOBİ ERP özellikleri',
    'DijitalERP özellikleri',
  ],
  alternates: { canonical: canon },
  openGraph: {
    title: 'DijitalERP Özellikleri — ücretsiz deneyin, tek yazılımda modüller',
    description:
      'Ücretsiz indirerek stok, cari, fatura, E-Fatura, kasa ve raporları bilgisayarınızda, internet zorunluluğu olmadan kullanın.',
    url: canon,
  },
};

export default function OzelliklerPage() {
  return (
    <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <FeaturesSection />
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
