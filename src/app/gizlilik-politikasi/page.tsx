import type { Metadata } from 'next';
import AnimateSection from '../AnimateSection';
import Footer from '../Footer';
import PolicyHero from '../PolicyHero';
import GizlilikPolitikasiContent from './GizlilikPolitikasiContent';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | DijitalERP — KVKK Uyumlu ERP Yazılımı',
  description:
    'DijitalERP gizlilik politikası: Kişisel verilerin toplanması, işlenmesi, offline ERP veri saklama modeli, çerezler, veri güvenliği ve KVKK kapsamındaki haklarınız hakkında detaylı bilgi.',
  keywords: [
    'DijitalERP gizlilik politikası',
    'ERP yazılımı gizlilik',
    'KVKK uyumlu ERP',
    'offline ERP veri güvenliği',
    'kişisel veri koruma',
    'KOBİ ERP gizlilik',
  ],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/gizlilik-politikasi' },
  openGraph: {
    title: 'Gizlilik Politikası | DijitalERP — KVKK Uyumlu ERP Yazılımı',
    description:
      'DijitalERP gizlilik politikası: Kişisel verilerin toplanması, offline ERP veri saklama, çerezler ve KVKK haklarınız.',
    url: 'https://www.dijitalerp.com.tr/gizlilik-politikasi',
  },
};

export default function GizlilikPolitikasiPage() {
  return (
    <div className="site-wrap policy-page">
      <PolicyHero title="Gizlilik Politikası" />
      <AnimateSection sectionType="seo" delay={80}>
        <GizlilikPolitikasiContent />
      </AnimateSection>
      <AnimateSection sectionType="footer" delay={100}>
        <Footer />
      </AnimateSection>
    </div>
  );
}
