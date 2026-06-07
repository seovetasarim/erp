import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import KargoEtiketiContent from './KargoEtiketiContent';

export const metadata: Metadata = {
  title: 'Kargo Etiketi Yazılımı | DijitalERP — 100×150mm Termal Etiket',
  description: 'Kargo etiketi yazılımı: 100×150mm termal etiket, CODE128 barkod, otomatik print dialog. Cari bilgilerinden otomatik etiket oluşturma. Offline kargo etiketi programı.',
  keywords: ['kargo etiketi yazılımı', 'termal etiket programı', '100x150 kargo etiketi', 'kargo barkod etiketi', 'kargo etiketi yazdırma'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/kargo-etiketi' },
  openGraph: {
    title: 'Kargo Etiketi Yazılımı | DijitalERP — 100×150mm Termal Etiket',
    description: 'Kargo etiketi yazılımı: 100×150mm termal etiket, CODE128 barkod, otomatik print dialog. Cari bilgilerinden otomatik etiket oluşturma. Offline kargo etiketi programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/kargo-etiketi',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Kargo Etiketi Modülü',
  title: 'Kargo Etiketi Yazılımı',
  description: 'Kargo etiketi yazılımı: 100×150mm termal etiket, CODE128 barkod, otomatik print dialog. Cari bilgilerinden otomatik etiket oluşturma. Offline kargo etiketi programı.',
  linkText: 'Kargo Etiketi modüllerini inceleyin',
};

export default function KargoEtiketiPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <KargoEtiketiContent />
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
