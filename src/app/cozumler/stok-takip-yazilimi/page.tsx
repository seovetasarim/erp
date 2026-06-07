import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import StokTakipContent from './StokTakipContent';

export const metadata: Metadata = {
  title: 'Stok Takip Yazılımı | DijitalERP — Profesyonel Stok Programı',
  description: 'Profesyonel stok takip yazılımı. Barkod okuyucu, stok sayım, minimum stok uyarısı, Excel export. Offline çalışan stok takip programı. 49.900 TL\'den başlar.',
  keywords: ['stok takip yazılımı', 'stok programı', 'profesyonel stok yazılımı', 'barkodlu stok takip', 'stok envanter yazılımı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/stok-takip-yazilimi' },
  openGraph: {
    title: 'Stok Takip Yazılımı | DijitalERP — Profesyonel Stok Programı',
    description: 'Profesyonel stok takip yazılımı. Barkod okuyucu, stok sayım, minimum stok uyarısı, Excel export. Offline çalışan stok takip programı. 49.900 TL\'den başlar.',
    url: 'https://www.dijitalerp.com.tr/cozumler/stok-takip-yazilimi',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Stok Takip Modülü',
  title: 'Stok Takip Yazılımı',
  description: 'Profesyonel stok takip yazılımı. Barkod okuyucu, stok sayım, minimum stok uyarısı, Excel export. Offline çalışan stok takip programı. 49.900 TL\'den başlar.',
  linkText: 'Stok Takip modüllerini inceleyin',
};

export default function StokTakipYazilimiPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <StokTakipContent />
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
