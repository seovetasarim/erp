import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import FaturaYazilimiContent from '../fatura-yazilimi/FaturaYazilimiContent';
import SeoContentSection from '../fatura-yazilimi/SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Fatura Yönetimi | DijitalERP — Satış ve E-Fatura Yönetimi',
  description: 'DijitalERP fatura yönetimi: Satış faturası oluştur, listele, yazdır, E-Fatura gönder. Çoklu kalem, KDV, vade tarihi desteği. Offline fatura yönetim modülü.',
  keywords: ['fatura yönetimi', 'fatura listesi', 'satış faturası yönetimi', 'E-Fatura yönetimi', 'fatura modülü'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/faturalar' },
  openGraph: {
    title: 'Fatura Yönetimi | DijitalERP — Satış ve E-Fatura Yönetimi',
    description: 'DijitalERP fatura yönetimi: Satış faturası oluştur, listele, yazdır, E-Fatura gönder. Çoklu kalem, KDV, vade tarihi desteği. Offline fatura yönetim modülü.',
    url: 'https://www.dijitalerp.com.tr/cozumler/faturalar',
  },
};

export default function FaturalarPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <FaturaYazilimiContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
