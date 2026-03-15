import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import KobiErpContent from './KobiErpContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'KOBİ ERP Yazılımı | DijitalERP — Küçük İşletme ERP',
  description: 'KOBİ\'ler için ERP yazılımı. Stok takip, cari yönetim, fatura ve E-Fatura tek çatı altında. Uygun fiyatlı, offline çalışan KOBİ ERP programı.',
  keywords: ['KOBİ ERP', 'küçük işletme ERP', 'KOBİ yazılımı', 'KOBİ stok programı', 'uygun ERP yazılımı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/kobi-erp' },
  openGraph: {
    title: 'KOBİ ERP Yazılımı | DijitalERP — Küçük İşletme ERP',
    description: 'KOBİ\'ler için ERP yazılımı. Stok takip, cari yönetim, fatura ve E-Fatura tek çatı altında. Uygun fiyatlı, offline çalışan KOBİ ERP programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/kobi-erp',
  },
};

export default function KobiErpPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <KobiErpContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
