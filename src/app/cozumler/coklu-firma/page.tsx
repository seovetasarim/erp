import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import CokluFirmaContent from './CokluFirmaContent';

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

const hero = {
  eyebrow: 'DijitalERP — Çoklu Firma Yönetimi Modülü',
  title: 'Çoklu Firma Yönetimi',
  description: 'Birden fazla firmayı tek DijitalERP yazılımıyla yönetin. Her firmaya özel stok, cari, fatura ve raporlar. Çoklu firma desteği, offline çalışır.',
  linkText: 'Çoklu Firma Yönetimi modüllerini inceleyin',
};

export default function CokluFirmaPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <CokluFirmaContent />
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
