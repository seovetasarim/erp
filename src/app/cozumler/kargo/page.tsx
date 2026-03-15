import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import KargoEtiketiContent from '../kargo-etiketi/KargoEtiketiContent';
import SeoContentSection from '../kargo-etiketi/SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Kargo Yönetimi | DijitalERP — Kargo Takip ve Etiket Yazılımı',
  description: 'Kargo yönetimi yazılımı: Kargo etiketi yazdırma (100×150mm, CODE128 barkod), cari takibi, stok yönetimi. Offline kargo yönetim ve etiket yazılımı.',
  keywords: ['kargo yazılımı', 'kargo yönetimi', 'kargo etiketi yazılımı', 'kargo takip programı', 'kargo ERP'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/kargo' },
  openGraph: {
    title: 'Kargo Yönetimi | DijitalERP — Kargo Takip ve Etiket Yazılımı',
    description: 'Kargo yönetimi yazılımı: Kargo etiketi yazdırma (100×150mm, CODE128 barkod), cari takibi, stok yönetimi. Offline kargo yönetim ve etiket yazılımı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/kargo',
  },
};

export default function KargoPage() {
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
