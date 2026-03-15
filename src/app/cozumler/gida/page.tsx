import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import GidaContent from './GidaContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Gıda Sektörü ERP | DijitalERP — Gıda İşletmesi Stok Yazılımı',
  description: 'Gıda sektörü için ERP yazılımı: Ürün takibi, stok yönetimi, fatura ve cari hesap. Offline çalışan gıda işletmesi yönetim yazılımı. Uygun fiyatlı KOBİ ERP.',
  keywords: ['gıda ERP', 'gıda sektörü yazılımı', 'gıda stok programı', 'gıda işletmesi ERP', 'gıda yönetim yazılımı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/gida' },
  openGraph: {
    title: 'Gıda Sektörü ERP | DijitalERP — Gıda İşletmesi Stok Yazılımı',
    description: 'Gıda sektörü için ERP yazılımı: Ürün takibi, stok yönetimi, fatura ve cari hesap. Offline çalışan gıda işletmesi yönetim yazılımı. Uygun fiyatlı KOBİ ERP.',
    url: 'https://www.dijitalerp.com.tr/cozumler/gida',
  },
};

export default function GidaPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <GidaContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
