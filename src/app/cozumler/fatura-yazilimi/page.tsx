import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import FaturaYazilimiContent from './FaturaYazilimiContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Fatura Yazılımı | DijitalERP — Satış Faturası Programı',
  description: 'Profesyonel fatura yazılımı. Satış faturası oluştur, çoklu ürün kalemi, KDV hesaplama, nakit/vadeli ödeme. E-Fatura desteği. Offline çalışan fatura programı.',
  keywords: ['fatura yazılımı', 'fatura programı', 'satış faturası yazılımı', 'KDV fatura programı', 'E-Fatura yazılımı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/fatura-yazilimi' },
  openGraph: {
    title: 'Fatura Yazılımı | DijitalERP — Satış Faturası Programı',
    description: 'Profesyonel fatura yazılımı. Satış faturası oluştur, çoklu ürün kalemi, KDV hesaplama, nakit/vadeli ödeme. E-Fatura desteği. Offline çalışan fatura programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/fatura-yazilimi',
  },
};

export default function FaturaYazilimiPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <FaturaYazilimiContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
