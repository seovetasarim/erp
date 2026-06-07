import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import ToptanSatisContent from '../toptan-satis/ToptanSatisContent';

export const metadata: Metadata = {
  title: 'Dağıtım ERP Yazılımı | DijitalERP — Dağıtım Yönetim Programı',
  description: 'Dağıtım firmaları için ERP yazılımı: Stok takip, sipariş yönetimi, kargo etiketi, cari hesap ve raporlar. Offline dağıtım yönetim programı.',
  keywords: ['dağıtım ERP', 'dağıtım yazılımı', 'dağıtım yönetim programı', 'dağıtım stok takibi', 'dağıtım firması ERP'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/dagitim' },
  openGraph: {
    title: 'Dağıtım ERP Yazılımı | DijitalERP — Dağıtım Yönetim Programı',
    description: 'Dağıtım firmaları için ERP yazılımı: Stok takip, sipariş yönetimi, kargo etiketi, cari hesap ve raporlar. Offline dağıtım yönetim programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/dagitim',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Dağıtım ERP Modülü',
  title: 'Dağıtım ERP Yazılımı',
  description: 'Dağıtım firmaları için ERP yazılımı: Stok takip, sipariş yönetimi, kargo etiketi, cari hesap ve raporlar. Offline dağıtım yönetim programı.',
  linkText: 'Dağıtım ERP modüllerini inceleyin',
};

export default function DagitimPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <ToptanSatisContent />
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
