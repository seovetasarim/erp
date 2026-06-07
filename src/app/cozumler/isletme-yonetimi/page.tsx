import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import IsletmeYonetimiContent from './IsletmeYonetimiContent';

export const metadata: Metadata = {
  title: 'İşletme Yönetimi Yazılımı | DijitalERP — KOBİ İşletme Yönetim Sistemi',
  description: 'DijitalERP işletme yönetimi yazılımı: Stok, cari, fatura, kasa ve raporlama tek platformda. KOBİ\'ler için offline çalışan profesyonel işletme yönetim sistemi.',
  keywords: ['işletme yönetimi yazılımı', 'işletme yönetim sistemi', 'KOBİ yönetim yazılımı', 'işletme programı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/isletme-yonetimi' },
  openGraph: {
    title: 'İşletme Yönetimi Yazılımı | DijitalERP — KOBİ İşletme Yönetim Sistemi',
    description: 'DijitalERP işletme yönetimi yazılımı: Stok, cari, fatura, kasa ve raporlama tek platformda. KOBİ\'ler için offline çalışan profesyonel işletme yönetim sistemi.',
    url: 'https://www.dijitalerp.com.tr/cozumler/isletme-yonetimi',
  },
};

const hero = {
  eyebrow: 'DijitalERP — İşletme Yönetimi Modülü',
  title: 'İşletme Yönetimi Yazılımı',
  description: 'DijitalERP işletme yönetimi yazılımı: Stok, cari, fatura, kasa ve raporlama tek platformda. KOBİ\'ler için offline çalışan profesyonel işletme yönetim sistemi.',
  linkText: 'İşletme Yönetimi modüllerini inceleyin',
};

export default function IsletmeYonetimiPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <IsletmeYonetimiContent />
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
