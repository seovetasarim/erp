import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import ToptanSatisContent from './ToptanSatisContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Toptan Satış Yazılımı | DijitalERP — Toptan ERP Programı',
  description: 'Toptan satış yazılımı: Stok takip, cari yönetim, satış faturası, E-Fatura ve raporlar. Toptancılar için offline çalışan ERP programı. 49.900 TL\'den başlar.',
  keywords: ['toptan satış yazılımı', 'toptan ERP', 'toptancı programı', 'toptan stok yönetimi', 'toptan fatura programı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/toptan-satis' },
  openGraph: {
    title: 'Toptan Satış Yazılımı | DijitalERP — Toptan ERP Programı',
    description: 'Toptan satış yazılımı: Stok takip, cari yönetim, satış faturası, E-Fatura ve raporlar. Toptancılar için offline çalışan ERP programı. 49.900 TL\'den başlar.',
    url: 'https://www.dijitalerp.com.tr/cozumler/toptan-satis',
  },
};

export default function ToptanSatisPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <ToptanSatisContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
