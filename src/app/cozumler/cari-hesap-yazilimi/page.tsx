import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import CariHesapContent from './CariHesapContent';

export const metadata: Metadata = {
  title: 'Cari Hesap Yazılımı | DijitalERP — Cari Hesap Takip Programı',
  description: 'Cari hesap yazılımı ile müşteri ve tedarikçi hesaplarını takip edin. Borç, alacak, bakiye görünümü. Offline çalışan cari hesap takip programı.',
  keywords: ['cari hesap yazılımı', 'cari hesap takibi', 'cari hesap programı', 'müşteri hesap takibi', 'tedarikçi hesap takibi'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/cari-hesap-yazilimi' },
  openGraph: {
    title: 'Cari Hesap Yazılımı | DijitalERP — Cari Hesap Takip Programı',
    description: 'Cari hesap yazılımı ile müşteri ve tedarikçi hesaplarını takip edin. Borç, alacak, bakiye görünümü. Offline çalışan cari hesap takip programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/cari-hesap-yazilimi',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Cari Hesap Modülü',
  title: 'Cari Hesap Yazılımı',
  description: 'Cari hesap yazılımı ile müşteri ve tedarikçi hesaplarını takip edin. Borç, alacak, bakiye görünümü. Offline çalışan cari hesap takip programı.',
  linkText: 'Cari Hesap modüllerini inceleyin',
};

export default function CariHesapYazilimiPage() {
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
