import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import YedeklemeContent from './YedeklemeContent';

export const metadata: Metadata = {
  title: 'Veritabanı Yedekleme | DijitalERP — Tek Tıkla .db Yedek',
  description: 'DijitalERP veritabanı yedekleme: Tek tıkla .db dosyası olarak yedekleyin. Offline SQLite veritabanı, verileriniz güvende. Kolay yedek alma ve geri yükleme.',
  keywords: ['veritabanı yedekleme', 'ERP yedekleme', 'SQLite yedekleme', 'veri yedekleme programı', 'ERP backup'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/yedekleme' },
  openGraph: {
    title: 'Veritabanı Yedekleme | DijitalERP — Tek Tıkla .db Yedek',
    description: 'DijitalERP veritabanı yedekleme: Tek tıkla .db dosyası olarak yedekleyin. Offline SQLite veritabanı, verileriniz güvende. Kolay yedek alma ve geri yükleme.',
    url: 'https://www.dijitalerp.com.tr/cozumler/yedekleme',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Veritabanı Yedekleme Modülü',
  title: 'Veritabanı Yedekleme',
  description: 'DijitalERP veritabanı yedekleme: Tek tıkla .db dosyası olarak yedekleyin. Offline SQLite veritabanı, verileriniz güvende. Kolay yedek alma ve geri yükleme.',
  linkText: 'Veritabanı Yedekleme modüllerini inceleyin',
};

export default function YedeklemePage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <YedeklemeContent />
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
