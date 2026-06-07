import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import UretimContent from './UretimContent';

export const metadata: Metadata = {
  title: 'Üretim ERP Yazılımı | DijitalERP — Üretim Takip Programı',
  description: 'Üretim işletmeleri için ERP yazılımı: Hammadde ve ürün stok takibi, cari yönetim, fatura ve raporlar. Offline çalışan üretim takip programı.',
  keywords: ['üretim ERP', 'üretim yazılımı', 'üretim takip programı', 'üretim stok yönetimi', 'hammadde takip programı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/uretim' },
  openGraph: {
    title: 'Üretim ERP Yazılımı | DijitalERP — Üretim Takip Programı',
    description: 'Üretim işletmeleri için ERP yazılımı: Hammadde ve ürün stok takibi, cari yönetim, fatura ve raporlar. Offline çalışan üretim takip programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/uretim',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Üretim ERP Modülü',
  title: 'Üretim ERP Yazılımı',
  description: 'Üretim işletmeleri için ERP yazılımı: Hammadde ve ürün stok takibi, cari yönetim, fatura ve raporlar. Offline çalışan üretim takip programı.',
  linkText: 'Üretim ERP modüllerini inceleyin',
};

export default function UretimPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <UretimContent />
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
