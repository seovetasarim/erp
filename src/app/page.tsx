import type { Metadata } from 'next';
import { SITE_URL } from '../site-url';
import Hero from './Hero';
import AnimateSection from './AnimateSection';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import VideoFaqSection from './VideoFaqSection';
import Footer from './Footer';

export const metadata: Metadata = {
  title: 'Ücretsiz ERP İndir — Offline Stok Takip ve Cari',
  description:
    "Ücretsiz Windows masaüstü ERP: dijitalerp.rar ile indirin — stok takip, cari yönetim, fatura, kasa offline. Veriler bilgisayarınızda. Lisans paketleri tek seferlik fiyatlı. Demo: 0532 166 76 97.",
  keywords: [
    'ücretsiz ERP indir',
    'ücretsiz stok takip yazılımı',
    'offline ERP',
    'Windows ERP ücretsiz',
    'ERP yazılımı',
    'KOBİ ERP',
    'cari program',
    'fatura yazılımı',
    'DijitalERP',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'DijitalERP — Ücretsiz ERP İndir',
    description:
      'Offline stok takip ve cari yönetim: ücretsiz Windows sürümünü indirin; lisanslı paket seçenekleri tek seferlik ödeme.',
    url: SITE_URL,
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DijitalERP',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
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
      name: 'DijitalERP ücretsiz indirilebilir mi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet. Windows için ücretsiz masaüstü sürümümüzü sitedeki dijitalerp.rar arşiviyle indirebilirsiniz; Electron tabanlı uygulamayı kurup ana modülleri offline kullanarak deneyebilirsiniz — veriler sadece bilgisayarınızda kalır. Çok kullanıcı, daha uzun güncelleme ve öncelikli destek gibi gereksinimler için Başlangıç, Profesyonel veya Kurumsal lisans paketleri satın alınır; abonelik modeli kullanılmaz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ücretsiz sürüm ile lisanslı sürüm farkı nedir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ücretsiz dağıtılan sürüm, yazılımı tanımanız ve offline iş süreçlerini denemeniz içindir. Lisanslı paketler; kullanıcı ve bilgisayar sayısı, güncelleme süresi, E-Fatura kurulumunda öncelik ve destek seviyesi gibi ticari garantiler içerir. Önce ücretsiz indirip kullanın; sonra 0532 166 76 97 ile size uygun paketi seçin.',
      },
    },
    {
      '@type': 'Question',
      name: 'DijitalERP lisans fiyatları ne kadar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ücretsiz indirilebilir sürümün yanı sıra ticari lisans paketleri bulunur: Başlangıç 25.000 TL (1 bilgisayar), Profesyonel 35.000 TL (3 bilgisayar); ikisi de tek seferlik ödemedir, abonelik yoktur. Kurumsal paket teklifle belirlenir. Güncelleme süresi ve destek seçenekleri pakete göre değişir.',
      },
    },
    {
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
        text: 'Windows bilgisayarınıza dijitalerp.rar arşivini indirip klasöre çıkarın; içindeki kurulum dosyasını çalıştırarak uygulamayı yükleyin. Ek yardım için 0532 166 76 97 üzerinden destek veya ticari kullanımda paket seçimi için iletişim alabilirsiniz.',
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
