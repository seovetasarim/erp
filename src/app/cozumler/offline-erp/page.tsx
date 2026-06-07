import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import OfflineErpContent from './OfflineErpContent';

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

const hero = {
  eyebrow: 'DijitalERP — Offline ERP Modülü',
  title: 'Offline ERP Yazılımı',
  description: 'İnternet gerektirmeyen offline ERP yazılımı. Verileriniz bilgisayarınızda, SQLite veritabanı. Kesintisiz çalışan offline ERP programı. 0532 166 76 97',
  linkText: 'Offline ERP modüllerini inceleyin',
};

export default function OfflineErpPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <OfflineErpContent />
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
