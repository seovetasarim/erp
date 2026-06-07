import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import KasaContent from './KasaContent';

export const metadata: Metadata = {
  title: 'Kasa Yönetimi Yazılımı | DijitalERP — Nakit Kasa Takip Programı',
  description: 'Kasa yönetimi yazılımı: Nakit giriş-çıkış, anlık kasa bakiyesi, yetersiz bakiye uyarısı, tarih aralığı filtreleme. Offline kasa takip programı.',
  keywords: ['kasa yönetimi yazılımı', 'kasa takip programı', 'nakit kasa programı', 'kasa modülü', 'kasa yazılımı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/kasa' },
  openGraph: {
    title: 'Kasa Yönetimi Yazılımı | DijitalERP — Nakit Kasa Takip Programı',
    description: 'Kasa yönetimi yazılımı: Nakit giriş-çıkış, anlık kasa bakiyesi, yetersiz bakiye uyarısı, tarih aralığı filtreleme. Offline kasa takip programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/kasa',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Kasa Yönetimi Modülü',
  title: 'Kasa Yönetimi Yazılımı',
  description: 'Kasa yönetimi yazılımı: Nakit giriş-çıkış, anlık kasa bakiyesi, yetersiz bakiye uyarısı, tarih aralığı filtreleme. Offline kasa takip programı.',
  linkText: 'Kasa Yönetimi modüllerini inceleyin',
};

export default function KasaPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <KasaContent />
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
