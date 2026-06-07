import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import PerakendeContent from './PerakendeContent';

export const metadata: Metadata = {
  title: 'Perakende Yazılımı | DijitalERP — Perakende ERP Programı',
  description: 'Perakende mağazalar için ERP yazılımı: Stok takip, satış faturası, kasa yönetimi ve cari hesap. Offline çalışan perakende yazılımı. Demo: 0532 166 76 97',
  keywords: ['perakende yazılımı', 'perakende ERP', 'mağaza yazılımı', 'perakende stok programı', 'perakende kasa programı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/perakende' },
  openGraph: {
    title: 'Perakende Yazılımı | DijitalERP — Perakende ERP Programı',
    description: 'Perakende mağazalar için ERP yazılımı: Stok takip, satış faturası, kasa yönetimi ve cari hesap. Offline çalışan perakende yazılımı. Demo: 0532 166 76 97',
    url: 'https://www.dijitalerp.com.tr/cozumler/perakende',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Perakende Modülü',
  title: 'Perakende Yazılımı',
  description: 'Perakende mağazalar için ERP yazılımı: Stok takip, satış faturası, kasa yönetimi ve cari hesap. Offline çalışan perakende yazılımı. Demo: 0532 166 76 97',
  linkText: 'Perakende modüllerini inceleyin',
};

export default function PerakendePage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <PerakendeContent />
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
