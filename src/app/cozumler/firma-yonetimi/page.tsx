import type { Metadata } from 'next';
import AnimateSection from '../../AnimateSection';
import PricingSection from '../../PricingSection';
import VideoFaqSection from '../../VideoFaqSection';
import Footer from '../../Footer';
import SolutionHero from '../_shared/SolutionHero';
import FirmaYonetimiContent from './FirmaYonetimiContent';

export const metadata: Metadata = {
  title: 'Firma Yönetimi Yazılımı | DijitalERP — Çoklu Firma Yönetim Sistemi',
  description: 'DijitalERP firma yönetimi: Birden fazla firmayı tek yazılımla yönetin. Vergi no, IBAN, cari limit, risk limiti. KOBİ\'ler için offline firma yönetim yazılımı.',
  keywords: ['firma yönetimi', 'çoklu firma yazılımı', 'firma yönetim programı', 'işletme profil yönetimi'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/firma-yonetimi' },
  openGraph: {
    title: 'Firma Yönetimi Yazılımı | DijitalERP — Çoklu Firma Yönetim Sistemi',
    description: 'DijitalERP firma yönetimi: Birden fazla firmayı tek yazılımla yönetin. Vergi no, IBAN, cari limit, risk limiti. KOBİ\'ler için offline firma yönetim yazılımı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/firma-yonetimi',
  },
};

const hero = {
  eyebrow: 'DijitalERP — Firma Yönetimi Modülü',
  title: 'Firma Yönetimi Yazılımı',
  description: 'DijitalERP firma yönetimi: Birden fazla firmayı tek yazılımla yönetin. Vergi no, IBAN, cari limit, risk limiti. KOBİ\'ler için offline firma yönetim yazılımı.',
  linkText: 'Firma Yönetimi modüllerini inceleyin',
};

export default function FirmaYonetimiPage() {
  return (
    <div className="site-wrap">
      <SolutionHero {...hero} />
      <AnimateSection sectionType="features">
        <FirmaYonetimiContent />
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
