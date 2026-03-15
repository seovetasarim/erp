import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import CariHesapContent from '../cari-hesap-yazilimi/CariHesapContent';
import SeoContentSection from '../cari-hesap-yazilimi/SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Cari Yönetim Yazılımı | DijitalERP — Müşteri Tedarikçi Takibi',
  description: 'Cari yönetim yazılımı: Müşteri ve tedarikçi kartları, borç-alacak takibi, otomatik cari kodu. Offline çalışan profesyonel cari yönetim programı.',
  keywords: ['cari yönetim yazılımı', 'müşteri yönetimi', 'tedarikçi yönetimi', 'borç alacak takibi', 'cari hesap programı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/cari-yonetim' },
  openGraph: {
    title: 'Cari Yönetim Yazılımı | DijitalERP — Müşteri Tedarikçi Takibi',
    description: 'Cari yönetim yazılımı: Müşteri ve tedarikçi kartları, borç-alacak takibi, otomatik cari kodu. Offline çalışan profesyonel cari yönetim programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/cari-yonetim',
  },
};

export default function CariYonetimPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <CariHesapContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
