import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import KargoEtiketiContent from '../kargo-etiketi/KargoEtiketiContent';

export const metadata: Metadata = {
  title: 'Kargo Yönetimi | DijitalERP — Kargo Takip ve Etiket Yazılımı',
  description: 'Kargo yönetimi yazılımı: Kargo etiketi yazdırma (100×150mm, CODE128 barkod), cari takibi, stok yönetimi. Offline kargo yönetim ve etiket yazılımı.',
  keywords: ['kargo yazılımı', 'kargo yönetimi', 'kargo etiketi yazılımı', 'kargo takip programı', 'kargo ERP'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/kargo' },
  openGraph: {
    title: 'Kargo Yönetimi | DijitalERP — Kargo Takip ve Etiket Yazılımı',
    description: 'Kargo yönetimi yazılımı: Kargo etiketi yazdırma (100×150mm, CODE128 barkod), cari takibi, stok yönetimi. Offline kargo yönetim ve etiket yazılımı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/kargo',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Kargo Yönetimi Modülü',
  title: 'Kargo Yönetimi',
  description: 'Kargo yönetimi yazılımı: Kargo etiketi yazdırma (100×150mm, CODE128 barkod), cari takibi, stok yönetimi. Offline kargo yönetim ve etiket yazılımı.',
  linkText: 'Kargo Yönetimi modüllerini inceleyin',
};

export default function KargoPage() {
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
