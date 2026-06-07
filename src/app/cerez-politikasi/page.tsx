import type { Metadata } from 'next';
import AnimateSection from '../AnimateSection';
import Footer from '../Footer';
import PolicyHero from '../PolicyHero';
import CerezPolitikasiContent from './CerezPolitikasiContent';

export const metadata: Metadata = {
  title: 'Çerez Politikası | DijitalERP — KVKK Uyumlu Çerez Kullanımı',
  description:
    'DijitalERP çerez politikası: Web sitemizde kullanılan zorunlu, analitik ve tercih çerezleri, çerez türleri, saklama süreleri ve KVKK kapsamındaki tercih yönetimi.',
  keywords: [
    'DijitalERP çerez politikası',
    'ERP yazılımı çerezler',
    'KVKK çerez aydınlatma',
    'web sitesi çerez yönetimi',
    'zorunlu ve analitik çerezler',
  ],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/cerez-politikasi' },
  openGraph: {
    title: 'Çerez Politikası | DijitalERP — KVKK Uyumlu Çerez Kullanımı',
    description:
      'DijitalERP çerez politikası: Çerez türleri, kullanım amaçları ve tercih yönetimi.',
    url: 'https://www.dijitalerp.com.tr/cerez-politikasi',
  },
};

export default function CerezPolitikasiPage() {
  return (
    <div className="site-wrap policy-page">
      <PolicyHero title="Çerez Politikası" />
      <AnimateSection sectionType="seo" delay={80}>
        <CerezPolitikasiContent />
      </AnimateSection>
      <AnimateSection sectionType="footer" delay={100}>
        <Footer />
      </AnimateSection>
    </div>
  );
}
