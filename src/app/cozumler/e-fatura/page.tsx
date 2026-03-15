import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import EFaturaContent from '../e-fatura-yazilimi/EFaturaContent';
import SeoContentSection from '../e-fatura-yazilimi/SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'E-Fatura | DijitalERP — E-Fatura Entegrasyonu ve Gönderimi',
  description: 'DijitalERP E-Fatura entegrasyonu: Paraşüt, İşbaşı ve özel API desteği. Kolay kurulum sihirbazı, test faturası. ERP içinden E-Fatura gönderimi.',
  keywords: ['E-Fatura', 'E-Fatura entegrasyonu', 'E-Fatura yazılımı', 'Paraşüt ERP', 'İşbaşı ERP', 'E-Fatura API'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/e-fatura' },
  openGraph: {
    title: 'E-Fatura | DijitalERP — E-Fatura Entegrasyonu ve Gönderimi',
    description: 'DijitalERP E-Fatura entegrasyonu: Paraşüt, İşbaşı ve özel API desteği. Kolay kurulum sihirbazı, test faturası. ERP içinden E-Fatura gönderimi.',
    url: 'https://www.dijitalerp.com.tr/cozumler/e-fatura',
  },
};

export default function EFaturaPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <EFaturaContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
