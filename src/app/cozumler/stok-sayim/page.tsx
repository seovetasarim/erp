import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import StokSayimContent from './StokSayimContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Stok Sayım Modülü | DijitalERP — Envanter Sayım Yazılımı',
  description: 'DijitalERP stok sayım modülü: Sayım oturumu oluştur, ürün bazlı miktar gir, sistem stoku ile karşılaştır, onayla. KOBİ\'ler için offline envanter sayım yazılımı.',
  keywords: ['stok sayım', 'envanter sayım yazılımı', 'stok sayım programı', 'depo sayım modülü', 'stok sayım sistemi'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/stok-sayim' },
  openGraph: {
    title: 'Stok Sayım Modülü | DijitalERP — Envanter Sayım Yazılımı',
    description: 'DijitalERP stok sayım modülü: Sayım oturumu oluştur, ürün bazlı miktar gir, sistem stoku ile karşılaştır, onayla. KOBİ\'ler için offline envanter sayım yazılımı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/stok-sayim',
  },
};

export default function StokSayimPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <StokSayimContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
