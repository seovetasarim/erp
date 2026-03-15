import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import EFaturaContent from './EFaturaContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'E-Fatura Yazılımı | DijitalERP — Kolay E-Fatura Programı',
  description: 'Kolay E-Fatura yazılımı. Paraşüt, İşbaşı entegrasyonu ve özel API desteği. ERP ile entegre E-Fatura gönderimi, kurulum sihirbazı. 0532 166 76 97',
  keywords: ['E-Fatura yazılımı', 'E-Fatura programı', 'E-Fatura ERP entegrasyonu', 'kolay E-Fatura', 'E-Fatura kurulumu'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/e-fatura-yazilimi' },
  openGraph: {
    title: 'E-Fatura Yazılımı | DijitalERP — Kolay E-Fatura Programı',
    description: 'Kolay E-Fatura yazılımı. Paraşüt, İşbaşı entegrasyonu ve özel API desteği. ERP ile entegre E-Fatura gönderimi, kurulum sihirbazı. 0532 166 76 97',
    url: 'https://www.dijitalerp.com.tr/cozumler/e-fatura-yazilimi',
  },
};

export default function EFaturaYazilimiPage() {
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
