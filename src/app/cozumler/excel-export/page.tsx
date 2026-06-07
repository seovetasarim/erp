import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import ExcelExportContent from './ExcelExportContent';

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

const hero = {
  eyebrow: 'DijitalERP — excel-export Modülü',
  title: 'excel-export',
  description: 'DijitalERP Excel export: Stok, cari, hareket ve tüm raporları Excel dosyasına aktar. Muhasebe entegrasyonu için Excel dışa aktarma. Offline çalışır.',
  linkText: 'excel-export modüllerini inceleyin',
};

export default function ExcelExportPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <ExcelExportContent />
      </AnimateSection>
      <AnimateSection sectionType="pricing" delay={80}>
        <PricingSection />
      </AnimateSection>
      <AnimateSection sectionType="faq" delay={80}>
        <VideoFaqSection />
      </AnimateSection>
      <AnimateSection sectionType="footer" delay={100}>
        <Footer />
      </AnimateSection>
    </div>
  );
}
