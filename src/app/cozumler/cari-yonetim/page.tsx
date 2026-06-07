import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import CariHesapContent from '../cari-hesap-yazilimi/CariHesapContent';

export const metadata: Metadata = {
  title: 'Cari Yönetim Yazılımı | DijitalERP — Müşteri Tedarikçi Takibi',
  description: 'Cari yönetim yazılımı: Müşteri ve tedarikçi kartları, borç-alacak takibi, otomatik cari kodu. Offline çalışan profesyonel cari yönetim programı.',
  keywords: ['cari yönetim yazılımı', 'müşteri yönetimi', 'tedarikçi yönetimi', 'borç alacak takibi', 'cari hesap programı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/cari-yonetim' },
  openGraph: {
    title: 'Cari Yönetim Yazılımı | DijitalERP — Müşteri Tedarikçi Takibi',
    description: 'Cari yönetim yazılımı: Müşteri ve tedarikçi kartları, borç-alacak takibi, otomatik cari kodu. Offline çalışan profesyonel cari yönetim programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/cari-yonetim',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Cari Yönetim Modülü',
  title: 'Cari Yönetim Yazılımı',
  description: 'Cari yönetim yazılımı: Müşteri ve tedarikçi kartları, borç-alacak takibi, otomatik cari kodu. Offline çalışan profesyonel cari yönetim programı.',
  linkText: 'Cari Yönetim modüllerini inceleyin',
};

export default function CariYonetimPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <CariHesapContent />
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
