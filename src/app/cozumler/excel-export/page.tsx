import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import ExcelExportContent from './ExcelExportContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: "Excel Export | DijitalERP — Stok ve Cari Verileri Excel'e Aktar",
  description: 'DijitalERP Excel export: Stok, cari, hareket ve tüm raporları Excel dosyasına aktar. Muhasebe entegrasyonu için Excel dışa aktarma. Offline çalışır.',
  keywords: ['Excel export', 'stok Excel export', 'ERP Excel aktarma', 'cari Excel raporu', 'Excel stok programı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/excel-export' },
  openGraph: {
    title: "Excel Export | DijitalERP — Stok ve Cari Verileri Excel'e Aktar",
    description: 'DijitalERP Excel export: Stok, cari, hareket ve tüm raporları Excel dosyasına aktar. Muhasebe entegrasyonu için Excel dışa aktarma. Offline çalışır.',
    url: 'https://www.dijitalerp.com.tr/cozumler/excel-export',
  },
};

export default function ExcelExportPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <ExcelExportContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
