import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import PerakendeContent from './PerakendeContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Perakende Yazılımı | DijitalERP — Perakende ERP Programı',
  description: 'Perakende mağazalar için ERP yazılımı: Stok takip, satış faturası, kasa yönetimi ve cari hesap. Offline çalışan perakende yazılımı. Demo: 0532 166 76 97',
  keywords: ['perakende yazılımı', 'perakende ERP', 'mağaza yazılımı', 'perakende stok programı', 'perakende kasa programı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/perakende' },
  openGraph: {
    title: 'Perakende Yazılımı | DijitalERP — Perakende ERP Programı',
    description: 'Perakende mağazalar için ERP yazılımı: Stok takip, satış faturası, kasa yönetimi ve cari hesap. Offline çalışan perakende yazılımı. Demo: 0532 166 76 97',
    url: 'https://www.dijitalerp.com.tr/cozumler/perakende',
  },
};

export default function PerakendePage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <PerakendeContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
