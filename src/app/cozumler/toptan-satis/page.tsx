import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import ToptanSatisContent from './ToptanSatisContent';

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

const hero = {
  eyebrow: 'DijitalERP — Toptan Satış Modülü',
  title: 'Toptan Satış Yazılımı',
  description: 'Toptan satış yazılımı: Stok takip, cari yönetim, satış faturası, E-Fatura ve raporlar. Toptancılar için offline çalışan ERP programı. 49.900 TL\'den başlar.',
  linkText: 'Toptan Satış modüllerini inceleyin',
};

export default function ToptanSatisPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <ToptanSatisContent />
      </AnimateSection>
      <AnimateSection sectionType="pricing" delay={80}>
        <PricingSection />
      </AnimateSection>
      <AnimateSection sectionType="faq" delay={80}>
        <VideoFaqSection />
      </AnimateSection>
      <AnimateSection sectionType="footer" delay={100}>
        <Footer />
      </AnimateSection>
    </div>
  );
}
