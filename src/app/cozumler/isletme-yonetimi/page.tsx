import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import IsletmeYonetimiContent from './IsletmeYonetimiContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

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

export default function IsletmeYonetimiPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <IsletmeYonetimiContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
