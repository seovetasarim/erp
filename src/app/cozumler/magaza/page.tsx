import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import PerakendeContent from '../perakende/PerakendeContent';
import SeoContentSection from './MagazaSeoContent';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Mağaza Yönetim Yazılımı | DijitalERP — Mağaza ERP Sistemi',
  description: 'Mağazalar için yönetim yazılımı: Stok takip, kasa, fatura, cari hesap. Offline çalışan mağaza yönetim sistemi. KOBİ mağazaları için uygun fiyatlı ERP.',
  keywords: ['mağaza yönetim yazılımı', 'mağaza ERP', 'mağaza stok programı', 'mağaza kasa yazılımı', 'mağaza yönetim sistemi'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/magaza' },
  openGraph: {
    title: 'Mağaza Yönetim Yazılımı | DijitalERP — Mağaza ERP Sistemi',
    description: 'Mağazalar için yönetim yazılımı: Stok takip, kasa, fatura, cari hesap. Offline çalışan mağaza yönetim sistemi. KOBİ mağazaları için uygun fiyatlı ERP.',
    url: 'https://www.dijitalerp.com.tr/cozumler/magaza',
  },
};

export default function MagazaPage() {
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
