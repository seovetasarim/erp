import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import RaporlarContent from './RaporlarContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'ERP Raporlama | DijitalERP — Stok ve Satış Raporları',
  description: 'DijitalERP raporları: 12 aylık stok grafik, günlük trend, kategori dağılımı, en çok hareket eden ürünler. KPI kartları ve Excel export. Offline raporlama.',
  keywords: ['ERP raporlama', 'stok raporları', 'satış raporları', 'KPI raporlama', 'Excel stok raporu', 'grafik raporlama'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/raporlar' },
  openGraph: {
    title: 'ERP Raporlama | DijitalERP — Stok ve Satış Raporları',
    description: 'DijitalERP raporları: 12 aylık stok grafik, günlük trend, kategori dağılımı, en çok hareket eden ürünler. KPI kartları ve Excel export. Offline raporlama.',
    url: 'https://www.dijitalerp.com.tr/cozumler/raporlar',
  },
};

export default function RaporlarPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <RaporlarContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
