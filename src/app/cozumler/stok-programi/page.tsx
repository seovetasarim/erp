import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import StokProgramiContent from './StokProgramiContent';

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

const hero = {
  eyebrow: 'DijitalERP — Stok Modülü',
  title: 'Stok Programı',
  description: 'Windows için stok programı. Ürün kartı, kategori yönetimi, barkod, stok giriş-çıkış. KOBİ\'ler için offline çalışan stok yönetim programı. Demo: 0532 166 76 97',
  linkText: 'Stok modüllerini inceleyin',
};

export default function StokProgramiPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <StokProgramiContent />
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
