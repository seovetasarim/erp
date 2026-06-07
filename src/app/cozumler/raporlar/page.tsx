import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import RaporlarContent from './RaporlarContent';

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

const hero = {
  eyebrow: 'DijitalERP — ERP Raporlama Modülü',
  title: 'ERP Raporlama',
  description: 'DijitalERP raporları: 12 aylık stok grafik, günlük trend, kategori dağılımı, en çok hareket eden ürünler. KPI kartları ve Excel export. Offline raporlama.',
  linkText: 'ERP Raporlama modüllerini inceleyin',
};

export default function RaporlarPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <RaporlarContent />
      </AnimateSection>
      <AnimateSection sectionType="pricing" delay={80}>
        <PricingSection />
      </AnimateSection>
      <AnimateSection sectionType="faq" delay={80}>
        <VideoFaqSection />
      </AnimateSection>
      <AnimateSection sectionType="footer" delay={100}>
        <Footer />
      </AnimateSection>
    </div>
  );
}
