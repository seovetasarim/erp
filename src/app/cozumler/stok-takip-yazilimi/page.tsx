import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import StokTakipContent from './StokTakipContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Stok Takip Yazılımı | DijitalERP — Profesyonel Stok Programı',
  description: 'Profesyonel stok takip yazılımı. Barkod okuyucu, stok sayım, minimum stok uyarısı, Excel export. Offline çalışan stok takip programı. 49.900 TL\'den başlar.',
  keywords: ['stok takip yazılımı', 'stok programı', 'profesyonel stok yazılımı', 'barkodlu stok takip', 'stok envanter yazılımı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/stok-takip-yazilimi' },
  openGraph: {
    title: 'Stok Takip Yazılımı | DijitalERP — Profesyonel Stok Programı',
    description: 'Profesyonel stok takip yazılımı. Barkod okuyucu, stok sayım, minimum stok uyarısı, Excel export. Offline çalışan stok takip programı. 49.900 TL\'den başlar.',
    url: 'https://www.dijitalerp.com.tr/cozumler/stok-takip-yazilimi',
  },
};

export default function StokTakipYazilimiPage() {
  return ( <div className="site-wrap">
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
      </div>);
}
