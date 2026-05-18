import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import ErpYazilimiContent from './ErpYazilimiContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'ERP Yazılımı | DijitalERP — Offline KOBİ ERP Programı',
  description: 'DijitalERP ERP yazılımı: Stok, cari, fatura, E-Fatura, kasa, raporlar tek yazılımda. KOBİ\'ler için offline ERP programı. 49.900 TL\'den başlayan fiyatlar.',
  keywords: ['ERP yazılımı', 'KOBİ ERP', 'offline ERP', 'ERP programı', 'kurumsal kaynak planlama', 'stok cari fatura'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/erp-yazilimi' },
  openGraph: {
    title: 'ERP Yazılımı | DijitalERP — Offline KOBİ ERP Programı',
    description: 'DijitalERP ERP yazılımı: Stok, cari, fatura, E-Fatura, kasa, raporlar tek yazılımda. KOBİ\'ler için offline ERP programı. 49.900 TL\'den başlayan fiyatlar.',
    url: 'https://www.dijitalerp.com.tr/cozumler/erp-yazilimi',
  },
};

export default function ErpYazilimiPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <ErpYazilimiContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
