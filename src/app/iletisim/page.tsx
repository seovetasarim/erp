import type { Metadata } from 'next';
import Hero from '../Hero';
import AnimateSection from '../AnimateSection';
import ContactSection from './ContactSection';
import SeoContentSection from './SeoContentSection';
import Footer from '../Footer';

export const metadata: Metadata = {
  title: 'İletişim | DijitalERP — 0532 166 76 97 — ERP Yazılımı Destek',
  description:
    'DijitalERP ile iletişime geçin: 0532 166 76 97, info@dijitalerp.com.tr. ERP yazılımı, stok takip, cari yönetim, E-Fatura ve demo talebi için bizi arayın.',
  keywords: [
    'DijitalERP iletişim', 'ERP yazılımı destek', 'stok programı iletişim',
    '0532 166 76 97', 'ERP demo talebi', 'DijitalERP telefon',
  ],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/iletisim' },
  openGraph: {
    title: 'DijitalERP İletişim — 0532 166 76 97',
    description: 'ERP yazılımı hakkında bilgi almak için bizi arayın veya formu doldurun.',
    url: 'https://www.dijitalerp.com.tr/iletisim',
  },
};

export default function IletisimPage() {
  return (
    <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="demo">
          <ContactSection />
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
