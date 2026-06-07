import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import PerakendeContent from '../perakende/PerakendeContent';

export const metadata: Metadata = {
  title: 'Mağaza Yönetim Yazılımı | DijitalERP — Mağaza ERP Sistemi',
  description: 'Mağazalar için yönetim yazılımı: Stok takip, kasa, fatura, cari hesap. Offline çalışan mağaza yönetim sistemi. KOBİ mağazaları için uygun fiyatlı ERP.',
  keywords: ['mağaza yönetim yazılımı', 'mağaza ERP', 'mağaza stok programı', 'mağaza kasa yazılımı', 'mağaza yönetim sistemi'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/magaza' },
  openGraph: {
    title: 'Mağaza Yönetim Yazılımı | DijitalERP — Mağaza ERP Sistemi',
    description: 'Mağazalar için yönetim yazılımı: Stok takip, kasa, fatura, cari hesap. Offline çalışan mağaza yönetim sistemi. KOBİ mağazaları için uygun fiyatlı ERP.',
    url: 'https://www.dijitalerp.com.tr/cozumler/magaza',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Mağaza Yönetim Modülü',
  title: 'Mağaza Yönetim Yazılımı',
  description: 'Mağazalar için yönetim yazılımı: Stok takip, kasa, fatura, cari hesap. Offline çalışan mağaza yönetim sistemi. KOBİ mağazaları için uygun fiyatlı ERP.',
  linkText: 'Mağaza Yönetim modüllerini inceleyin',
};

export default function MagazaPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <PerakendeContent />
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
