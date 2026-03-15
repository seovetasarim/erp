import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import ToptanSatisContent from '../toptan-satis/ToptanSatisContent';
import SeoContentSection from './DagitimSeoContent';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Dağıtım ERP Yazılımı | DijitalERP — Dağıtım Yönetim Programı',
  description: 'Dağıtım firmaları için ERP yazılımı: Stok takip, sipariş yönetimi, kargo etiketi, cari hesap ve raporlar. Offline dağıtım yönetim programı.',
  keywords: ['dağıtım ERP', 'dağıtım yazılımı', 'dağıtım yönetim programı', 'dağıtım stok takibi', 'dağıtım firması ERP'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/dagitim' },
  openGraph: {
    title: 'Dağıtım ERP Yazılımı | DijitalERP — Dağıtım Yönetim Programı',
    description: 'Dağıtım firmaları için ERP yazılımı: Stok takip, sipariş yönetimi, kargo etiketi, cari hesap ve raporlar. Offline dağıtım yönetim programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/dagitim',
  },
};

export default function DagitimPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <ToptanSatisContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
