import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import YedeklemeContent from './YedeklemeContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

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

export default function YedeklemePage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <YedeklemeContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
