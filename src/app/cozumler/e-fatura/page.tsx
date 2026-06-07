import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import EFaturaContent from '../e-fatura-yazilimi/EFaturaContent';

export const metadata: Metadata = {
  title: 'E-Fatura | DijitalERP — E-Fatura Entegrasyonu ve Gönderimi',
  description: 'DijitalERP E-Fatura entegrasyonu: Paraşüt, İşbaşı ve özel API desteği. Kolay kurulum sihirbazı, test faturası. ERP içinden E-Fatura gönderimi.',
  keywords: ['E-Fatura', 'E-Fatura entegrasyonu', 'E-Fatura yazılımı', 'Paraşüt ERP', 'İşbaşı ERP', 'E-Fatura API'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/e-fatura' },
  openGraph: {
    title: 'E-Fatura | DijitalERP — E-Fatura Entegrasyonu ve Gönderimi',
    description: 'DijitalERP E-Fatura entegrasyonu: Paraşüt, İşbaşı ve özel API desteği. Kolay kurulum sihirbazı, test faturası. ERP içinden E-Fatura gönderimi.',
    url: 'https://www.dijitalerp.com.tr/cozumler/e-fatura',
  },
};

const hero = {
  eyebrow: 'DijitalERP — E-Fatura Modülü',
  title: 'E-Fatura',
  description: 'DijitalERP E-Fatura entegrasyonu: Paraşüt, İşbaşı ve özel API desteği. Kolay kurulum sihirbazı, test faturası. ERP içinden E-Fatura gönderimi.',
  linkText: 'E-Fatura modüllerini inceleyin',
};

export default function EFaturaPage() {
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
