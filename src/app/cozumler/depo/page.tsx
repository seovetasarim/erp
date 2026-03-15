import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import DepoTakipContent from '../depo-takip/DepoTakipContent';
import SeoContentSection from '../depo-takip/SeoContentSection';
import Footer from '../../Footer';

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

export default function DepoPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <DepoTakipContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
