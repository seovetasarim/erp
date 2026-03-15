import type { Metadata } from 'next';
import Hero from '../Hero';
import AnimateSection from '../AnimateSection';
import DemoRequestSection from './DemoRequestSection';
import SeoContentSection from './SeoContentSection';
import Footer from '../Footer';

export const metadata: Metadata = {
  title: 'Ücretsiz Demo İste | DijitalERP — ERP Yazılımı Demo Talebi',
  description:
    "DijitalERP ücretsiz demo talebi. Formu doldurun veya 0532 166 76 97 ile arayın. Stok takip, cari yönetim, fatura, E-Fatura modüllerini canlı deneyin.",
  keywords: [
    'ERP demo', 'ücretsiz ERP demo', 'stok programı dene',
    'DijitalERP demo', 'ERP yazılımı demo talebi',
  ],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/demo-iste' },
  openGraph: {
    title: 'DijitalERP Ücretsiz Demo İste — 0532 166 76 97',
    description: 'Ücretsiz demo talep edin. DijitalERP\'yi canlı görün, sorularınızı sorun.',
    url: 'https://www.dijitalerp.com.tr/demo-iste',
  },
};

export default function DemoIstePage() {
  return (
    <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="demo">
          <DemoRequestSection />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
    </div>
  );
}
