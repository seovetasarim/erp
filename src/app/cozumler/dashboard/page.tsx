import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import DashboardContent from './DashboardContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'ERP Dashboard | DijitalERP — İşletme Analitik Paneli',
  description: 'DijitalERP dashboard: KPI kartları, 12 aylık trend grafiği, son işlemler, düşük stok uyarıları. İşletmenizi anlık takip edin. Offline çalışan ERP paneli.',
  keywords: ['ERP dashboard', 'işletme analitik paneli', 'KPI dashboard', 'stok dashboard', 'ERP raporlama paneli'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/dashboard' },
  openGraph: {
    title: 'ERP Dashboard | DijitalERP — İşletme Analitik Paneli',
    description: 'DijitalERP dashboard: KPI kartları, 12 aylık trend grafiği, son işlemler, düşük stok uyarıları. İşletmenizi anlık takip edin. Offline çalışan ERP paneli.',
    url: 'https://www.dijitalerp.com.tr/cozumler/dashboard',
  },
};

export default function DashboardPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <DashboardContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
