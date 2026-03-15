import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import KargoEtiketiContent from './KargoEtiketiContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Kargo Etiketi Yazılımı | DijitalERP — 100×150mm Termal Etiket',
  description: 'Kargo etiketi yazılımı: 100×150mm termal etiket, CODE128 barkod, otomatik print dialog. Cari bilgilerinden otomatik etiket oluşturma. Offline kargo etiketi programı.',
  keywords: ['kargo etiketi yazılımı', 'termal etiket programı', '100x150 kargo etiketi', 'kargo barkod etiketi', 'kargo etiketi yazdırma'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/kargo-etiketi' },
  openGraph: {
    title: 'Kargo Etiketi Yazılımı | DijitalERP — 100×150mm Termal Etiket',
    description: 'Kargo etiketi yazılımı: 100×150mm termal etiket, CODE128 barkod, otomatik print dialog. Cari bilgilerinden otomatik etiket oluşturma. Offline kargo etiketi programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/kargo-etiketi',
  },
};

export default function KargoEtiketiPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <KargoEtiketiContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
