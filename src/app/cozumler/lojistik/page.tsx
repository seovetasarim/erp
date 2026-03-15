import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import LojistikContent from './LojistikContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Lojistik ERP Yazılımı | DijitalERP — Lojistik Yönetim Programı',
  description: 'Lojistik firmaları için ERP yazılımı: Stok ve depo takibi, kargo etiketi (100×150mm), cari yönetim, raporlar. Offline lojistik yönetim programı.',
  keywords: ['lojistik ERP', 'lojistik yazılımı', 'lojistik yönetim programı', 'lojistik stok takibi', 'kargo lojistik ERP'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/lojistik' },
  openGraph: {
    title: 'Lojistik ERP Yazılımı | DijitalERP — Lojistik Yönetim Programı',
    description: 'Lojistik firmaları için ERP yazılımı: Stok ve depo takibi, kargo etiketi (100×150mm), cari yönetim, raporlar. Offline lojistik yönetim programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/lojistik',
  },
};

export default function LojistikPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <LojistikContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
