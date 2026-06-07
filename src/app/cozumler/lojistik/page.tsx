import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import LojistikContent from './LojistikContent';

export const metadata: Metadata = {
  title: 'Lojistik ERP Yazılımı | DijitalERP — Lojistik Yönetim Programı',
  description: 'Lojistik firmaları için ERP yazılımı: Stok ve depo takibi, kargo etiketi (100×150mm), cari yönetim, raporlar. Offline lojistik yönetim programı.',
  keywords: ['lojistik ERP', 'lojistik yazılımı', 'lojistik yönetim programı', 'lojistik stok takibi', 'kargo lojistik ERP'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/lojistik' },
  openGraph: {
    title: 'Lojistik ERP Yazılımı | DijitalERP — Lojistik Yönetim Programı',
    description: 'Lojistik firmaları için ERP yazılımı: Stok ve depo takibi, kargo etiketi (100×150mm), cari yönetim, raporlar. Offline lojistik yönetim programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/lojistik',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Lojistik ERP Modülü',
  title: 'Lojistik ERP Yazılımı',
  description: 'Lojistik firmaları için ERP yazılımı: Stok ve depo takibi, kargo etiketi (100×150mm), cari yönetim, raporlar. Offline lojistik yönetim programı.',
  linkText: 'Lojistik ERP modüllerini inceleyin',
};

export default function LojistikPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <LojistikContent />
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
