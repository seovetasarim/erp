import type { Metadata } from 'next';
import Hero from './Hero';
import AnimateSection from './AnimateSection';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import VideoFaqSection from './VideoFaqSection';
import Footer from './Footer';

export const metadata: Metadata = {
  title: 'DijitalERP | Stok Takip, Cari Yönetim ve ERP Yazılımı',
  description:
    "Türkiye'nin offline ERP yazılımı. Stok takip, cari yönetim, fatura, E-Fatura ve kasa yönetimi tek yazılımda. KOBİ'ler için tek seferlik ödeme. 0532 166 76 97",
  keywords: [
    'ERP yazılımı', 'stok takip yazılımı', 'KOBİ ERP', 'offline ERP',
    'cari yönetim', 'fatura yazılımı', 'stok programı', 'DijitalERP',
  ],
  alternates: { canonical: 'https://www.dijitalerp.com.tr' },
  openGraph: {
    title: 'DijitalERP | Stok Takip, Cari Yönetim ve ERP Yazılımı',
    description: "Türkiye'nin offline ERP yazılımı. KOBİ'ler için tek seferlik ödeme, abonelik yok.",
    url: 'https://www.dijitalerp.com.tr',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DijitalERP',
  url: 'https://www.dijitalerp.com.tr',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.dijitalerp.com.tr/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ERP Programı Nedir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ERP (Kurumsal Kaynak Planlama), işletmelerin stok, cari, fatura, kasa ve raporlama gibi tüm süreçlerini tek yazılımda yönetmesini sağlayan entegre bir yazılım sistemidir.',
      },
    },
    {
      '@type': 'Question',
      name: 'DijitalERP internet bağlantısı gerektiriyor mu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hayır. DijitalERP %100 offline çalışır. Verileriniz yalnızca bilgisayarınızda SQLite veritabanında saklanır, internet bağlantısı gerektirmez.',
      },
    },
    {
      '@type': 'Question',
      name: 'DijitalERP fiyatları ne kadar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Başlangıç paketi 25.000 TL, Profesyonel paket 35.000 TL. Tek seferlik ödeme, abonelik yoktur. Kurumsal paket için iletişime geçin.',
      },
    },
    {
      '@type': 'Question',
      name: 'DijitalERP kimler için uygundur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "KOBİ'ler, perakende mağazalar, toptancılar, üreticiler ve stok takibi yapan tüm işletmeler için uygundur.",
      },
    },
    {
      '@type': 'Question',
      name: 'E-Fatura gönderebiliyor muyum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet. DijitalERP Paraşüt, İşbaşı ve özel API entegrasyonu ile E-Fatura gönderimi destekler.',
      },
    },
    {
      '@type': 'Question',
      name: 'DijitalERP kurulumu nasıl yapılır?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '0532 166 76 97 numarasından demo talep ettikten sonra kurulum desteği sağlanır. Tek seferlik kurulum, güncelleme zorunluluğu yoktur.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="site-wrap">
        <Hero />
        <AnimateSection sectionType="features">
          <FeaturesSection />
        </AnimateSection>
        <AnimateSection sectionType="pricing" delay={80}>
          <PricingSection />
        </AnimateSection>
        <AnimateSection sectionType="faq" delay={80}>
          <VideoFaqSection />
        </AnimateSection>
        <AnimateSection sectionType="footer" delay={100}>
          <Footer />
        </AnimateSection>
      </div>
    </>
  );
}
