import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import FaturaYazilimiContent from './FaturaYazilimiContent';

export const metadata: Metadata = {
  title: 'Fatura Yazılımı | DijitalERP — Satış Faturası Programı',
  description: 'Profesyonel fatura yazılımı. Satış faturası oluştur, çoklu ürün kalemi, KDV hesaplama, nakit/vadeli ödeme. E-Fatura desteği. Offline çalışan fatura programı.',
  keywords: ['fatura yazılımı', 'fatura programı', 'satış faturası yazılımı', 'KDV fatura programı', 'E-Fatura yazılımı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/fatura-yazilimi' },
  openGraph: {
    title: 'Fatura Yazılımı | DijitalERP — Satış Faturası Programı',
    description: 'Profesyonel fatura yazılımı. Satış faturası oluştur, çoklu ürün kalemi, KDV hesaplama, nakit/vadeli ödeme. E-Fatura desteği. Offline çalışan fatura programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/fatura-yazilimi',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Fatura Modülü',
  title: 'Fatura Yazılımı',
  description: 'Profesyonel fatura yazılımı. Satış faturası oluştur, çoklu ürün kalemi, KDV hesaplama, nakit/vadeli ödeme. E-Fatura desteği. Offline çalışan fatura programı.',
  linkText: 'Fatura modüllerini inceleyin',
};

export default function FaturaYazilimiPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <FaturaYazilimiContent />
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
