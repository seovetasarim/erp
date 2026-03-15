import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import TekstilContent from './TekstilContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Tekstil ERP Yazılımı | DijitalERP — Tekstil Stok Yönetim Programı',
  description: 'Tekstil sektörü için ERP yazılımı: Ürün ve stok takibi, beden-renk varyant, cari yönetim, fatura. Offline çalışan tekstil stok yönetim programı.',
  keywords: ['tekstil ERP', 'tekstil stok programı', 'tekstil yazılımı', 'konfeksiyon ERP', 'tekstil yönetim yazılımı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/tekstil' },
  openGraph: {
    title: 'Tekstil ERP Yazılımı | DijitalERP — Tekstil Stok Yönetim Programı',
    description: 'Tekstil sektörü için ERP yazılımı: Ürün ve stok takibi, beden-renk varyant, cari yönetim, fatura. Offline çalışan tekstil stok yönetim programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/tekstil',
  },
};

export default function TekstilPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <TekstilContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
