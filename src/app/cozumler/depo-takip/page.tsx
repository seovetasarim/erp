import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import DepoTakipContent from './DepoTakipContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Depo Takip Yazılımı | DijitalERP — Anlık Depo Takip Sistemi',
  description: 'Anlık depo takip yazılımı. Stok hareketleri, tarih aralığı filtreleme, hareket fişi yazdırma. Offline çalışan profesyonel depo takip sistemi.',
  keywords: ['depo takip yazılımı', 'anlık depo takip', 'depo hareket takibi', 'ambar takip programı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/depo-takip' },
  openGraph: {
    title: 'Depo Takip Yazılımı | DijitalERP — Anlık Depo Takip Sistemi',
    description: 'Anlık depo takip yazılımı. Stok hareketleri, tarih aralığı filtreleme, hareket fişi yazdırma. Offline çalışan profesyonel depo takip sistemi.',
    url: 'https://www.dijitalerp.com.tr/cozumler/depo-takip',
  },
};

export default function DepoTakipPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <DepoTakipContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
