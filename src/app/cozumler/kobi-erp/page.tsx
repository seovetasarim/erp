import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import KobiErpContent from './KobiErpContent';

export const metadata: Metadata = {
  title: 'KOBİ ERP Yazılımı | DijitalERP — Küçük İşletme ERP',
  description: 'KOBİ\'ler için ERP yazılımı. Stok takip, cari yönetim, fatura ve E-Fatura tek çatı altında. Uygun fiyatlı, offline çalışan KOBİ ERP programı.',
  keywords: ['KOBİ ERP', 'küçük işletme ERP', 'KOBİ yazılımı', 'KOBİ stok programı', 'uygun ERP yazılımı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/kobi-erp' },
  openGraph: {
    title: 'KOBİ ERP Yazılımı | DijitalERP — Küçük İşletme ERP',
    description: 'KOBİ\'ler için ERP yazılımı. Stok takip, cari yönetim, fatura ve E-Fatura tek çatı altında. Uygun fiyatlı, offline çalışan KOBİ ERP programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/kobi-erp',
  },
};

const hero = {
  eyebrow: 'DijitalERP — KOBİ ERP Modülü',
  title: 'KOBİ ERP Yazılımı',
  description: 'KOBİ\'ler için ERP yazılımı. Stok takip, cari yönetim, fatura ve E-Fatura tek çatı altında. Uygun fiyatlı, offline çalışan KOBİ ERP programı.',
  linkText: 'KOBİ ERP modüllerini inceleyin',
};

export default function KobiErpPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <KobiErpContent />
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
