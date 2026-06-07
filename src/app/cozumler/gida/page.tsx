import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import GidaContent from './GidaContent';

export const metadata: Metadata = {
  title: 'Gıda Sektörü ERP | DijitalERP — Gıda İşletmesi Stok Yazılımı',
  description: 'Gıda sektörü için ERP yazılımı: Ürün takibi, stok yönetimi, fatura ve cari hesap. Offline çalışan gıda işletmesi yönetim yazılımı. Uygun fiyatlı KOBİ ERP.',
  keywords: ['gıda ERP', 'gıda sektörü yazılımı', 'gıda stok programı', 'gıda işletmesi ERP', 'gıda yönetim yazılımı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/gida' },
  openGraph: {
    title: 'Gıda Sektörü ERP | DijitalERP — Gıda İşletmesi Stok Yazılımı',
    description: 'Gıda sektörü için ERP yazılımı: Ürün takibi, stok yönetimi, fatura ve cari hesap. Offline çalışan gıda işletmesi yönetim yazılımı. Uygun fiyatlı KOBİ ERP.',
    url: 'https://www.dijitalerp.com.tr/cozumler/gida',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Gıda Sektörü ERP Modülü',
  title: 'Gıda Sektörü ERP',
  description: 'Gıda sektörü için ERP yazılımı: Ürün takibi, stok yönetimi, fatura ve cari hesap. Offline çalışan gıda işletmesi yönetim yazılımı. Uygun fiyatlı KOBİ ERP.',
  linkText: 'Gıda Sektörü ERP modüllerini inceleyin',
};

export default function GidaPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <GidaContent />
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
