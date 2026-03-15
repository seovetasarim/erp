import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import UretimContent from './UretimContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Üretim ERP Yazılımı | DijitalERP — Üretim Takip Programı',
  description: 'Üretim işletmeleri için ERP yazılımı: Hammadde ve ürün stok takibi, cari yönetim, fatura ve raporlar. Offline çalışan üretim takip programı.',
  keywords: ['üretim ERP', 'üretim yazılımı', 'üretim takip programı', 'üretim stok yönetimi', 'hammadde takip programı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/uretim' },
  openGraph: {
    title: 'Üretim ERP Yazılımı | DijitalERP — Üretim Takip Programı',
    description: 'Üretim işletmeleri için ERP yazılımı: Hammadde ve ürün stok takibi, cari yönetim, fatura ve raporlar. Offline çalışan üretim takip programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/uretim',
  },
};

export default function UretimPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <UretimContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
