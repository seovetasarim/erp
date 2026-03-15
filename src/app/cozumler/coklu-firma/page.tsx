import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import CokluFirmaContent from './CokluFirmaContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Çoklu Firma Yönetimi | DijitalERP — Birden Fazla Şirket Yönetim',
  description: 'Birden fazla firmayı tek DijitalERP yazılımıyla yönetin. Her firmaya özel stok, cari, fatura ve raporlar. Çoklu firma desteği, offline çalışır.',
  keywords: ['çoklu firma yönetimi', 'birden fazla firma ERP', 'multi firma yazılımı', 'şirket yönetim programı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/coklu-firma' },
  openGraph: {
    title: 'Çoklu Firma Yönetimi | DijitalERP — Birden Fazla Şirket Yönetim',
    description: 'Birden fazla firmayı tek DijitalERP yazılımıyla yönetin. Her firmaya özel stok, cari, fatura ve raporlar. Çoklu firma desteği, offline çalışır.',
    url: 'https://www.dijitalerp.com.tr/cozumler/coklu-firma',
  },
};

export default function CokluFirmaPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <CokluFirmaContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
