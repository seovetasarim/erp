import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import DepoTakipContent from '../depo-takip/DepoTakipContent';

export const metadata: Metadata = {
  title: 'Depo Yönetimi | DijitalERP — Depo Yönetim Yazılımı',
  description: 'DijitalERP depo yönetimi: Depo bazlı stok takibi, giriş-çıkış işlemleri, anlık stok görünümü. KOBİ depoları için offline çalışan depo yönetim yazılımı.',
  keywords: ['depo yönetimi', 'depo yönetim yazılımı', 'depo takip programı', 'ambar yönetimi', 'KOBİ depo yazılımı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/depo' },
  openGraph: {
    title: 'Depo Yönetimi | DijitalERP — Depo Yönetim Yazılımı',
    description: 'DijitalERP depo yönetimi: Depo bazlı stok takibi, giriş-çıkış işlemleri, anlık stok görünümü. KOBİ depoları için offline çalışan depo yönetim yazılımı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/depo',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Depo Yönetimi Modülü',
  title: 'Depo Yönetimi',
  description: 'DijitalERP depo yönetimi: Depo bazlı stok takibi, giriş-çıkış işlemleri, anlık stok görünümü. KOBİ depoları için offline çalışan depo yönetim yazılımı.',
  linkText: 'Depo Yönetimi modüllerini inceleyin',
};

export default function DepoPage() {
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
