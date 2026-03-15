import type { Metadata } from 'next';
import Hero from '../../Hero';
import AnimateSection from '../../AnimateSection';
import CariProgramContent from './CariProgramContent';
import SeoContentSection from './SeoContentSection';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Cari Program | DijitalERP — Windows Cari Yönetim Programı',
  description: 'Windows için cari program. Müşteri ve tedarikçi kartları, kargo etiketi yazdırma, cari arama ve filtreleme. Offline çalışan cari yönetim programı.',
  keywords: ['cari program', 'cari yönetim programı', 'Windows cari programı', 'müşteri tedarikçi programı'],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cozumler/cari-program' },
  openGraph: {
    title: 'Cari Program | DijitalERP — Windows Cari Yönetim Programı',
    description: 'Windows için cari program. Müşteri ve tedarikçi kartları, kargo etiketi yazdırma, cari arama ve filtreleme. Offline çalışan cari yönetim programı.',
    url: 'https://www.dijitalerp.com.tr/cozumler/cari-program',
  },
};

export default function CariProgramPage() {
  return ( <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <CariProgramContent />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>);
}
