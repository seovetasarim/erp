import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import KasaContent from './KasaContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

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

export default function KasaPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <KasaContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
