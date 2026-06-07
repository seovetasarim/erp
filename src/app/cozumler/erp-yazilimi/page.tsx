import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import ErpYazilimiContent from './ErpYazilimiContent';

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

const hero = {
  eyebrow: 'DijitalERP — ERP Modülü',
  title: 'ERP Yazılımı',
  description: 'DijitalERP ERP yazılımı: Stok, cari, fatura, E-Fatura, kasa, raporlar tek yazılımda. KOBİ\'ler için offline ERP programı. 49.900 TL\'den başlayan fiyatlar.',
  linkText: 'ERP modüllerini inceleyin',
};

export default function ErpYazilimiPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <ErpYazilimiContent />
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
