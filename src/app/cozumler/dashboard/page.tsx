import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import DashboardContent from './DashboardContent';

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

const hero = {
  eyebrow: 'DijitalERP — ERP Dashboard Modülü',
  title: 'ERP Dashboard',
  description: 'DijitalERP dashboard: KPI kartları, 12 aylık trend grafiği, son işlemler, düşük stok uyarıları. İşletmenizi anlık takip edin. Offline çalışan ERP paneli.',
  linkText: 'ERP Dashboard modüllerini inceleyin',
};

export default function DashboardPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <DashboardContent />
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
