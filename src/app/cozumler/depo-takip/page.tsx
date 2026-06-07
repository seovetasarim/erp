import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import DepoTakipContent from './DepoTakipContent';

export const metadata: Metadata = {
  title: 'Depo Takip Yazılımı | DijitalERP — Anlık Depo Takip Sistemi',
  description: 'Anlık depo takip yazılımı. Stok hareketleri, tarih aralığı filtreleme, hareket fişi yazdırma. Offline çalışan profesyonel depo takip sistemi.',
  keywords: ['depo takip yazılımı', 'anlık depo takip', 'depo hareket takibi', 'ambar takip programı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/depo-takip' },
  openGraph: {
    title: 'Depo Takip Yazılımı | DijitalERP — Anlık Depo Takip Sistemi',
    description: 'Anlık depo takip yazılımı. Stok hareketleri, tarih aralığı filtreleme, hareket fişi yazdırma. Offline çalışan profesyonel depo takip sistemi.',
    url: 'https://www.dijitalerp.com.tr/cozumler/depo-takip',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Depo Takip Modülü',
  title: 'Depo Takip Yazılımı',
  description: 'Anlık depo takip yazılımı. Stok hareketleri, tarih aralığı filtreleme, hareket fişi yazdırma. Offline çalışan profesyonel depo takip sistemi.',
  linkText: 'Depo Takip modüllerini inceleyin',
};

export default function DepoTakipPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <DepoTakipContent />
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
