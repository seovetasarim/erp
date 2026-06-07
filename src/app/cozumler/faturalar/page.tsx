import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import FaturaYazilimiContent from '../fatura-yazilimi/FaturaYazilimiContent';

export const metadata: Metadata = {
  title: 'Fatura Yönetimi | DijitalERP — Satış ve E-Fatura Yönetimi',
  description: 'DijitalERP fatura yönetimi: Satış faturası oluştur, listele, yazdır, E-Fatura gönder. Çoklu kalem, KDV, vade tarihi desteği. Offline fatura yönetim modülü.',
  keywords: ['fatura yönetimi', 'fatura listesi', 'satış faturası yönetimi', 'E-Fatura yönetimi', 'fatura modülü'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/faturalar' },
  openGraph: {
    title: 'Fatura Yönetimi | DijitalERP — Satış ve E-Fatura Yönetimi',
    description: 'DijitalERP fatura yönetimi: Satış faturası oluştur, listele, yazdır, E-Fatura gönder. Çoklu kalem, KDV, vade tarihi desteği. Offline fatura yönetim modülü.',
    url: 'https://www.dijitalerp.com.tr/cozumler/faturalar',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Fatura Yönetimi Modülü',
  title: 'Fatura Yönetimi',
  description: 'DijitalERP fatura yönetimi: Satış faturası oluştur, listele, yazdır, E-Fatura gönder. Çoklu kalem, KDV, vade tarihi desteği. Offline fatura yönetim modülü.',
  linkText: 'Fatura Yönetimi modüllerini inceleyin',
};

export default function FaturalarPage() {
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
