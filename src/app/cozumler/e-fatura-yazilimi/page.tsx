import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import EFaturaContent from './EFaturaContent';

export const metadata: Metadata = {
  title: 'E-Fatura Yazılımı | DijitalERP — Kolay E-Fatura Programı',
  description: 'Kolay E-Fatura yazılımı. Paraşüt, İşbaşı entegrasyonu ve özel API desteği. ERP ile entegre E-Fatura gönderimi, kurulum sihirbazı. 0532 166 76 97',
  keywords: ['E-Fatura yazılımı', 'E-Fatura programı', 'E-Fatura ERP entegrasyonu', 'kolay E-Fatura', 'E-Fatura kurulumu'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/e-fatura-yazilimi' },
  openGraph: {
    title: 'E-Fatura Yazılımı | DijitalERP — Kolay E-Fatura Programı',
    description: 'Kolay E-Fatura yazılımı. Paraşüt, İşbaşı entegrasyonu ve özel API desteği. ERP ile entegre E-Fatura gönderimi, kurulum sihirbazı. 0532 166 76 97',
    url: 'https://www.dijitalerp.com.tr/cozumler/e-fatura-yazilimi',
  },
};

const hero = {
  eyebrow: 'DijitalERP — E-Fatura Modülü',
  title: 'E-Fatura Yazılımı',
  description: 'Kolay E-Fatura yazılımı. Paraşüt, İşbaşı entegrasyonu ve özel API desteği. ERP ile entegre E-Fatura gönderimi, kurulum sihirbazı. 0532 166 76 97',
  linkText: 'E-Fatura modüllerini inceleyin',
};

export default function EFaturaYazilimiPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <EFaturaContent />
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
