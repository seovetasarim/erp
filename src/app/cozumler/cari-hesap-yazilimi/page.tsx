import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import CariHesapContent from './CariHesapContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Cari Hesap Yazılımı | DijitalERP — Cari Hesap Takip Programı',
  description: 'Cari hesap yazılımı ile müşteri ve tedarikçi hesaplarını takip edin. Borç, alacak, bakiye görünümü. Offline çalışan cari hesap takip programı.',
  keywords: ['cari hesap yazılımı', 'cari hesap takibi', 'cari hesap programı', 'müşteri hesap takibi', 'tedarikçi hesap takibi'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/cari-hesap-yazilimi' },
  openGraph: {
    title: 'Cari Hesap Yazılımı | DijitalERP — Cari Hesap Takip Programı',
    description: 'Cari hesap yazılımı ile müşteri ve tedarikçi hesaplarını takip edin. Borç, alacak, bakiye görünümü. Offline çalışan cari hesap takip programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/cari-hesap-yazilimi',
  },
};

export default function CariHesapYazilimiPage() {
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
