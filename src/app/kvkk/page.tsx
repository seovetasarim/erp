import type { Metadata } from 'next';
import AnimateSection from '../AnimateSection';
import Footer from '../Footer';
import PolicyHero from '../PolicyHero';
import KvkkContent from './KvkkContent';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | DijitalERP — Kişisel Veri Koruma',
  description:
    'DijitalERP KVKK aydınlatma metni: 6698 sayılı Kanun kapsamında kişisel verilerin işlenmesi, veri sorumlusu, aktarım, offline ERP veri modeli ve madde 11 kapsamındaki haklarınız.',
  keywords: [
    'DijitalERP KVKK',
    'KVKK aydınlatma metni',
    'ERP yazılımı kişisel veri',
    'offline ERP KVKK',
    'veri sorumlusu aydınlatma',
  ],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/kvkk' },
  openGraph: {
    title: 'KVKK Aydınlatma Metni | DijitalERP — Kişisel Veri Koruma',
    description:
      'DijitalERP KVKK aydınlatma metni: Kişisel verilerin işlenmesi, veri sorumlusu ve haklarınız.',
    url: 'https://www.dijitalerp.com.tr/kvkk',
  },
};

export default function KvkkPage() {
  return (
    <div className="site-wrap policy-page">
      <PolicyHero title="KVKK Aydınlatma Metni" />
      <AnimateSection sectionType="seo" delay={80}>
        <KvkkContent />
      </AnimateSection>
      <AnimateSection sectionType="footer" delay={100}>
        <Footer />
      </AnimateSection>
    </div>
  );
}
