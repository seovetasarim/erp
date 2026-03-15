import type { Metadata } from 'next';
import Hero from '../Hero';
import AnimateSection from '../AnimateSection';
import VideoFaqSection from '../VideoFaqSection';
import SeoContentSection from './SeoContentSection';
import Footer from '../Footer';

export const metadata: Metadata = {
  title: 'Sık Sorulan Sorular | DijitalERP ERP Yazılımı SSS',
  description:
    "DijitalERP sık sorulan sorular: ERP nedir, kimler için uygun, fiyatları ne kadar, kurulum süreci nasıl, veri güvenliği nasıl sağlanıyor? Tüm cevaplar burada.",
  keywords: [
    'ERP SSS', 'ERP yazılımı soruları', 'stok programı SSS',
    'DijitalERP SSS', 'ERP nedir', 'offline ERP güvenlik',
  ],
  alternates: { canonical: 'https://www.dijitalerp.com.tr/sss' },
  openGraph: {
    title: 'DijitalERP Sık Sorulan Sorular — ERP Yazılımı SSS',
    description: 'ERP nedir? Kimler için uygun? Fiyatları ne kadar? Tüm sorularınızın cevabı.',
    url: 'https://www.dijitalerp.com.tr/sss',
  },
};

export default function SssPage() {
  return (
    <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="faq">
          <VideoFaqSection />
        </AnimateSection>
        <AnimateSection sectionType="seo" delay={80}>
          <SeoContentSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
    </div>
  );
}
