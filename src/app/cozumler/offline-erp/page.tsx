import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import OfflineErpContent from './OfflineErpContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Offline ERP Yazılımı | DijitalERP — İnternetsiz ERP Programı',
  description: 'İnternet gerektirmeyen offline ERP yazılımı. Verileriniz bilgisayarınızda, SQLite veritabanı. Kesintisiz çalışan offline ERP programı. 0532 166 76 97',
  keywords: ['offline ERP', 'internetsiz ERP', 'internet gerektirmeyen ERP', 'yerel ERP yazılımı', 'SQLite ERP'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/offline-erp' },
  openGraph: {
    title: 'Offline ERP Yazılımı | DijitalERP — İnternetsiz ERP Programı',
    description: 'İnternet gerektirmeyen offline ERP yazılımı. Verileriniz bilgisayarınızda, SQLite veritabanı. Kesintisiz çalışan offline ERP programı. 0532 166 76 97',
    url: 'https://www.dijitalerp.com.tr/cozumler/offline-erp',
  },
};

export default function OfflineErpPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <OfflineErpContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
