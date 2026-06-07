import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import StokSayimContent from './StokSayimContent';

export const metadata: Metadata = {
  title: 'Stok Sayım Modülü | DijitalERP — Envanter Sayım Yazılımı',
  description: 'DijitalERP stok sayım modülü: Sayım oturumu oluştur, ürün bazlı miktar gir, sistem stoku ile karşılaştır, onayla. KOBİ\'ler için offline envanter sayım yazılımı.',
  keywords: ['stok sayım', 'envanter sayım yazılımı', 'stok sayım programı', 'depo sayım modülü', 'stok sayım sistemi'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/stok-sayim' },
  openGraph: {
    title: 'Stok Sayım Modülü | DijitalERP — Envanter Sayım Yazılımı',
    description: 'DijitalERP stok sayım modülü: Sayım oturumu oluştur, ürün bazlı miktar gir, sistem stoku ile karşılaştır, onayla. KOBİ\'ler için offline envanter sayım yazılımı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/stok-sayim',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Stok Sayım Modülü Modülü',
  title: 'Stok Sayım Modülü',
  description: 'DijitalERP stok sayım modülü: Sayım oturumu oluştur, ürün bazlı miktar gir, sistem stoku ile karşılaştır, onayla. KOBİ\'ler için offline envanter sayım yazılımı.',
  linkText: 'Stok Sayım Modülü modüllerini inceleyin',
};

export default function StokSayimPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <StokSayimContent />
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
