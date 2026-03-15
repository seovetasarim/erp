import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import BarkodContent from './BarkodContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Barkod Yazılımı | DijitalERP — Barkodlu Stok Takip Programı',
  description: 'Barkodlu stok takip programı. Barkod okuyucu desteği, kargo etiketi yazdırma (100×150mm), CODE128 barkod. Offline çalışan barkod yazılımı.',
  keywords: ['barkod yazılımı', 'barkodlu stok takip', 'barkod programı', 'kargo barkod', 'barkod okuyucu ERP'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/barkod' },
  openGraph: {
    title: 'Barkod Yazılımı | DijitalERP — Barkodlu Stok Takip Programı',
    description: 'Barkodlu stok takip programı. Barkod okuyucu desteği, kargo etiketi yazdırma (100×150mm), CODE128 barkod. Offline çalışan barkod yazılımı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/barkod',
  },
};

export default function BarkodPage() {
  return (
    <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <BarkodContent />
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
