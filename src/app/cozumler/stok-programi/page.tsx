import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import StokProgramiContent from './StokProgramiContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Stok Programı | DijitalERP — Windows Stok Yönetim Programı',
  description: 'Windows için stok programı. Ürün kartı, kategori yönetimi, barkod, stok giriş-çıkış. KOBİ\'ler için offline çalışan stok yönetim programı. Demo: 0532 166 76 97',
  keywords: ['stok programı', 'Windows stok programı', 'stok yönetim programı', 'ürün yönetim programı', 'stok takip programı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/stok-programi' },
  openGraph: {
    title: 'Stok Programı | DijitalERP — Windows Stok Yönetim Programı',
    description: 'Windows için stok programı. Ürün kartı, kategori yönetimi, barkod, stok giriş-çıkış. KOBİ\'ler için offline çalışan stok yönetim programı. Demo: 0532 166 76 97',
    url: 'https://www.dijitalerp.com.tr/cozumler/stok-programi',
  },
};

export default function StokProgramiPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <StokProgramiContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
