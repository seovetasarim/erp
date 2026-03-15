import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import StokTakipContent from '../stok-takip-yazilimi/StokTakipContent';
import SeoContentSection from '../stok-takip-yazilimi/SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Stok Takip | DijitalERP — Anlık Stok Takip Sistemi',
  description: 'DijitalERP ile anlık stok takibi yapın. Ürün giriş-çıkış, düşük stok uyarısı, firma bazlı stok görünümü. KOBİ\'ler için offline stok takip sistemi.',
  keywords: ['stok takip', 'anlık stok takibi', 'stok takip sistemi', 'ürün stok yönetimi', 'KOBİ stok takip'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/stok-takip' },
  openGraph: {
    title: 'Stok Takip | DijitalERP — Anlık Stok Takip Sistemi',
    description: 'DijitalERP ile anlık stok takibi yapın. Ürün giriş-çıkış, düşük stok uyarısı, firma bazlı stok görünümü. KOBİ\'ler için offline stok takip sistemi.',
    url: 'https://www.dijitalerp.com.tr/cozumler/stok-takip',
  },
};

export default function StokTakipPage() {
  return (
    <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <StokTakipContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
    </div>
  );
}
