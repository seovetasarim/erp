import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import TekstilContent from './TekstilContent';

export const metadata: Metadata = {
  title: 'Tekstil ERP Yazılımı | DijitalERP — Tekstil Stok Yönetim Programı',
  description: 'Tekstil sektörü için ERP yazılımı: Ürün ve stok takibi, beden-renk varyant, cari yönetim, fatura. Offline çalışan tekstil stok yönetim programı.',
  keywords: ['tekstil ERP', 'tekstil stok programı', 'tekstil yazılımı', 'konfeksiyon ERP', 'tekstil yönetim yazılımı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/tekstil' },
  openGraph: {
    title: 'Tekstil ERP Yazılımı | DijitalERP — Tekstil Stok Yönetim Programı',
    description: 'Tekstil sektörü için ERP yazılımı: Ürün ve stok takibi, beden-renk varyant, cari yönetim, fatura. Offline çalışan tekstil stok yönetim programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/tekstil',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Tekstil ERP Modülü',
  title: 'Tekstil ERP Yazılımı',
  description: 'Tekstil sektörü için ERP yazılımı: Ürün ve stok takibi, beden-renk varyant, cari yönetim, fatura. Offline çalışan tekstil stok yönetim programı.',
  linkText: 'Tekstil ERP modüllerini inceleyin',
};

export default function TekstilPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <TekstilContent />
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
