import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import BarkodContent from './BarkodContent';

export const metadata: Metadata = {
  title: 'Barkod Yazılımı | DijitalERP — Barkodlu Stok Takip Programı',
  description: 'Barkodlu stok takip programı. Barkod okuyucu desteği, kargo etiketi yazdırma (100×150mm), CODE128 barkod. Offline çalışan barkod yazılımı.',
  keywords: ['barkod yazılımı', 'barkodlu stok takip', 'barkod programı', 'kargo barkod', 'barkod okuyucu ERP'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/barkod' },
  openGraph: {
    title: 'Barkod Yazılımı | DijitalERP — Barkodlu Stok Takip Programı',
    description: 'Barkodlu stok takip programı. Barkod okuyucu desteği, kargo etiketi yazdırma (100×150mm), CODE128 barkod. Offline çalışan barkod yazılımı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/barkod',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Barkod Modülü',
  title: 'Barkod Yazılımı',
  description: 'Barkodlu stok takip programı. Barkod okuyucu desteği, kargo etiketi yazdırma (100×150mm), CODE128 barkod. Offline çalışan barkod yazılımı.',
  linkText: 'Barkod modüllerini inceleyin',
};

export default function BarkodPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <BarkodContent />
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
