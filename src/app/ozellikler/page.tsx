import type { Metadata } from 'next';
import Hero from '../Hero';
import AnimateSection from '../AnimateSection';
import FeaturesSection from '../FeaturesSection';
import SeoContentSection from './SeoContentSection';
import Footer from '../Footer';

export const metadata: Metadata = {
  title: 'Özellikler | DijitalERP Stok Takip ve ERP Yazılımı Modülleri',
  description:
    "DijitalERP'nin tüm modülleri: Stok takip, cari yönetim, fatura, E-Fatura, kasa, kargo etiketi, raporlar ve Excel export. KOBİ'ler için offline çalışan profesyonel ERP yazılımı.",
  keywords: [
    'ERP modülleri', 'stok takip özellikleri', 'cari yönetim yazılımı',
    'E-Fatura programı', 'kasa yönetimi', 'KOBİ ERP özellikleri', 'DijitalERP özellikleri',
  ],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/ozellikler' },
  openGraph: {
    title: 'DijitalERP Özellikleri — 11 Modül, Tek Yazılım',
    description: 'Stok, cari, fatura, E-Fatura, kasa, kargo ve raporlama — hepsi tek offline ERP yazılımında.',
    url: 'https://www.dijitalerp.com.tr/ozellikler',
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
