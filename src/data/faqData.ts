import { SITE } from "@/constants/seo";

type FaqItem = {
  id: string;
  category: "genel" | "lisans" | "teknik" | "destek";
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "sss-1",
    category: "genel",
    question: "DijitalERP nedir?",
    answer:
      "DijitalERP, Windows üzerinde çalışan ücretsiz ERP yazılımıdır. Offline stok takip, cari yönetim, fatura yazılımı, kasa ve raporlama modüllerini tek pakette sunar.",
  },
  {
    id: "sss-2",
    category: "genel",
    question: "ERP programı kimler içindir?",
    answer:
      "KOBİ’ler, perakende, toptan ve hizmet işletmeleri için uygundur. Stok, cari, fatura ve kasa süreçlerini tek programda yönetmek isteyen herkes kullanabilir.",
  },
  {
    id: "sss-3",
    category: "genel",
    question: "Ücretsiz ERP gerçekten ücretsiz mi?",
    answer:
      "Evet. Temel KOBİ ihtiyaçları için ücretsiz indirebilir, stok takip ve cari yönetim özelliklerini hemen kullanmaya başlayabilirsiniz.",
  },
  {
    id: "sss-4",
    category: "genel",
    question: "Hangi modüller dahil?",
    answer:
      "Stok takip, cari yönetim, fatura yazılımı, kasa ve raporlama modülleri DijitalERP paketinde yer alır. Lisanslı paketlerde kapsam ve destek genişler.",
  },
  {
    id: "sss-5",
    category: "genel",
    question: "Neden ERP kullanmalıyım?",
    answer:
      "Dağınık Excel ve defter takibi yerine stok, cari ve fatura süreçlerini tek akışta toplarsınız. Hata azalır, raporlar netleşir, kararlar hızlanır.",
  },
  {
    id: "sss-6",
    category: "genel",
    question: "Mobil uygulama var mı?",
    answer:
      "DijitalERP masaüstü Windows sürümü olarak çalışır. Offline ve sunucusuz mimari sayesinde bilgisayarınızda tam kontrol sağlar.",
  },
  {
    id: "sss-7",
    category: "lisans",
    question: "Ücretsiz sürüm ile lisanslı sürüm farkı nedir?",
    answer:
      "Demo sürüm örnek verilerle incelenir; lisans girilmeden ekleme, düzenleme ve silme yapılamaz. Lisans anahtarı girilince program tam kullanıma açılır.",
  },
  {
    id: "sss-8",
    category: "lisans",
    question: "Yıllık ve süresiz lisans fiyatları nedir?",
    answer:
      "Yıllık: 1 bilgisayar 4.990 TL, 3 bilgisayar 9.990 TL, 5 bilgisayar 14.990 TL. Süresiz: 1 bilgisayar 12.900 TL, 3 bilgisayar 24.900 TL, 5 bilgisayar 34.900 TL.",
  },
  {
    id: "sss-9",
    category: "lisans",
    question: "Güncelleme süresi bitince yazılım kapanır mı?",
    answer:
      "Hayır. Yazılım çalışmaya devam eder. Güncelleme süresi yeni sürüm ve destek kapsamını belirler; programı kullanamaz hale getirmez.",
  },
  {
    id: "sss-10",
    category: "lisans",
    question: "Tek seferlik mi aylık mı tercih etmeliyim?",
    answer:
      "Kısa süre kullanacaksanız yıllık lisans (4.990 TL’den) daha erişilebilirdir. Uzun vadede süresiz lisans (12.900 TL’den) toplam maliyeti düşürür.",
  },
  {
    id: "sss-11",
    category: "lisans",
    question: "Kurumsal paket için nasıl teklif alırım?",
    answer:
      `info@dijitalerp.com.tr adresine yazın veya ${SITE.phoneDisplay} numarasını arayın. Kullanıcı sayısı, destek ve eğitim kapsamını birlikte netleştiririz.`,
  },
  {
    id: "sss-12",
    category: "teknik",
    question: "İnternet bağlantısı gerekli mi?",
    answer:
      "Hayır. DijitalERP offline çalışır; stok, cari ve fatura işlemlerinizi internet olmadan da sürdürebilirsiniz.",
  },
  {
    id: "sss-13",
    category: "teknik",
    question: "Kurulum nasıl yapılır?",
    answer:
      "Windows kurulum dosyasını indirip çalıştırın. Firma bilgilerinizi girin, depo ve kullanıcı ayarlarını tamamlayın. Dakikalar içinde kullanıma hazırsınız.",
  },
  {
    id: "sss-14",
    category: "teknik",
    question: "Verilerim nerede tutulur?",
    answer:
      "Verileriniz kendi bilgisayarınızda kalır. Buluta zorunlu gönderim yoktur; yedeklemeyi istediğiniz gibi yönetirsiniz.",
  },
  {
    id: "sss-15",
    category: "teknik",
    question: "Güvenlik nasıl sağlanır?",
    answer:
      "Yerel veri saklama, kullanıcı yetkilendirme ve düzenli yedekleme ile işletme verilerinizi kontrol altında tutarsınız.",
  },
  {
    id: "sss-16",
    category: "destek",
    question: "Destek alabilir miyim?",
    answer:
      `Evet. ${SITE.phoneDisplay} numaralı telefondan veya info@dijitalerp.com.tr adresinden destek alabilirsiniz.`,
  },
  {
    id: "sss-17",
    category: "destek",
    question: "Demo veya kurulum yardımı var mı?",
    answer:
      "Evet. Demo talebi ve kurulum desteği için bizimle iletişime geçin; ekibimiz KOBİ ERP kurulumunda yardımcı olur.",
  },
  {
    id: "sss-18",
    category: "destek",
    question: "WhatsApp üzerinden yazabilir miyim?",
    answer:
      `Evet. ${SITE.whatsappDisplay} numarası üzerinden WhatsApp ile hızlıca ulaşabilirsiniz.`,
  },
];

export const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
