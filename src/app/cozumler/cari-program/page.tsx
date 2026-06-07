import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import CariProgramContent from './CariProgramContent';

export const metadata: Metadata = {
  title: 'Cari Program | DijitalERP — Windows Cari Yönetim Programı',
  description: 'Windows için cari program. Müşteri ve tedarikçi kartları, kargo etiketi yazdırma, cari arama ve filtreleme. Offline çalışan cari yönetim programı.',
  keywords: ['cari program', 'cari yönetim programı', 'Windows cari programı', 'müşteri tedarikçi programı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/cari-program' },
  openGraph: {
    title: 'Cari Program | DijitalERP — Windows Cari Yönetim Programı',
    description: 'Windows için cari program. Müşteri ve tedarikçi kartları, kargo etiketi yazdırma, cari arama ve filtreleme. Offline çalışan cari yönetim programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/cari-program',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Cari Program Modülü',
  title: 'Cari Program',
  description: 'Windows için cari program. Müşteri ve tedarikçi kartları, kargo etiketi yazdırma, cari arama ve filtreleme. Offline çalışan cari yönetim programı.',
  linkText: 'Cari Program modüllerini inceleyin',
};

export default function CariProgramPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <CariProgramContent />
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
