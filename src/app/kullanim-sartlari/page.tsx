import type { Metadata } from 'next';
import AnimateSection from '../AnimateSection';
import Footer from '../Footer';
import PolicyHero from '../PolicyHero';
import KullanimSartlariContent from './KullanimSartlariContent';

export const metadata: Metadata = {
  title: 'Kullanım Şartları | DijitalERP — ERP Yazılımı Hizmet Koşulları',
  description:
    'DijitalERP kullanım şartları: Web sitesi ve offline ERP yazılımı kullanımına ilişkin lisans koşulları, kullanıcı yükümlülükleri, sorumluluk sınırları ve fikri mülkiyet hakları.',
  keywords: [
    'DijitalERP kullanım şartları',
    'ERP yazılımı lisans koşulları',
    'offline ERP kullanım şartları',
    'KOBİ ERP hizmet şartları',
    'yazılım lisans sözleşmesi',
  ],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/kullanim-sartlari' },
  openGraph: {
    title: 'Kullanım Şartları | DijitalERP — ERP Yazılımı Hizmet Koşulları',
    description:
      'DijitalERP kullanım şartları: Lisans koşulları, kullanıcı yükümlülükleri ve sorumluluk sınırları.',
    url: 'https://www.dijitalerp.com.tr/kullanim-sartlari',
  },
};

export default function KullanimSartlariPage() {
  return (
    <div className="site-wrap policy-page">
      <PolicyHero title="Kullanım Şartları" />
      <AnimateSection sectionType="seo" delay={80}>
        <KullanimSartlariContent />
      </AnimateSection>
      <AnimateSection sectionType="footer" delay={100}>
        <Footer />
      </AnimateSection>
    </div>
  );
}
