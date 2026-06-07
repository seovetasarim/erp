import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import StokTakipHero from './StokTakipHero';
import StokTakipFeatures from './StokTakipFeatures';

export const metadata: Metadata = {
  title: 'Stok Takip | DijitalERP — Anlık Stok Takip Sistemi',
  description:
    'DijitalERP ile anlık stok takibi yapın. Ürün giriş-çıkış, barkod, stok sayımı, düşük stok uyarısı ve firma bazlı envanter. Offline KOBİ stok takip yazılımı.',
  keywords: [
    'stok takip',
    'anlık stok takibi',
    'stok takip sistemi',
    'ürün stok yönetimi',
    'KOBİ stok takip',
    'offline stok programı',
  ],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/stok-takip' },
  openGraph: {
    title: 'Stok Takip | DijitalERP — Anlık Stok Takip Sistemi',
    description:
      'DijitalERP ile anlık stok takibi yapın. Ürün giriş-çıkış, barkod, stok sayımı, düşük stok uyarısı ve firma bazlı envanter.',
    url: 'https://www.dijitalerp.com.tr/cozumler/stok-takip',
  },
};

export default function StokTakipPage() {
  return (
    <div className="site-wrap">
      <StokTakipHero />
      <AnimateSection sectionType="features">
        <StokTakipFeatures />
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
