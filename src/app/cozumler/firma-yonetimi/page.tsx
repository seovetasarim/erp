import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import FirmaYonetimiContent from './FirmaYonetimiContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

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

export default function FirmaYonetimiPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <FirmaYonetimiContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
