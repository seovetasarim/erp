'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqItems = [
  { q: 'DijitalERP ücretsiz indirilebilir mi?', a: 'Evet. Windows için ücretsiz masaüstü sürümünü sitedeki kurulum.rar arşiviyle bilgisayarınıza indirip WinRAR ile çıkararak kullanabilirsiniz — veriler cihazınızda kalır, günlük kullanımda sürekli internet zorunluluğu olmadan ana modülleri deneyebilirsiniz. Ticari lisans gerektiren garantiler için Başlangıç, Profesyonel veya Kurumsal paketler sunulur; abonelik modeli kullanılmaz.' },
  { q: 'Ücretsiz sürüm ile lisanslı sürüm farkı nedir?', a: 'Ücretsiz sürüm, yazılımı tanımanız ve offline süreçlerinizi görmeniz içindir. Lisanslı paketler çok kullanıcı, daha uzun güncelleme dönemi, E-Fatura kurulumunda öncelikli destek ve sözleşmeli garantiler içerir. Önce ücretsiz indirin; uygun paket için 0532 166 76 97.' },
  { q: 'ERP Programı Nedir?', a: 'ERP (Kurumsal Kaynak Planlama), işletmelerin stok, cari, fatura, kasa ve raporlama gibi tüm süreçlerini tek yazılımda yönetmesini sağlayan entegre bir yazılım sistemidir.' },
  { q: 'ERP Programı Kimler İçindir?', a: 'KOBİ\'ler, perakende mağazalar, toptancılar, üreticiler ve stok takibi yapan tüm işletmeler için uygundur.' },
  { q: 'ERP Programı Faydaları Nelerdir?', a: 'Stok kontrolü, cari takibi, hızlı fatura kesimi, raporlama, zaman tasarrufu ve veri güvenliği sağlar.' },
  { q: 'Neden ERP Programı Kullanmalısınız?', a: 'İş süreçlerinizi tek platformda toplayarak verimliliği artırır, hataları azaltır ve karar alma süreçlerinizi hızlandırır.' },
  { q: 'ERP Neden Gereklidir?', a: 'Manuel işlemlerin önüne geçer, stok ve cari takibini kolaylaştırır, E-Fatura uyumluluğu sağlar.' },
  { q: 'ERP Yazılımı Seçerken Nelere Dikkat Edilmelidir?', a: 'Offline çalışma, kolay kullanım, E-Fatura desteği, güvenilir destek ve tek seferlik lisans seçenekleri önemlidir.' },
  { q: 'ERP Sistemi Hangi İşletme Tipleri İçin Uygundur?', a: 'Ticaret, üretim, lojistik, perakende ve hizmet sektöründeki KOBİ\'ler için uygundur.' },
  { q: 'ERP Modülleri Nelerdir?', a: 'Firma & Cari, Ürün & Stok, Kasa, Faturalar, Kargo & E-Fatura, Raporlar, Kullanıcılar, Dashboard ve Sistem modülleri bulunur.' },
  { q: 'ERP Sistemleri İş Süreçlerini Nasıl İyileştirir?', a: 'Otomasyon, merkezi veri yönetimi ve anlık raporlama ile süreçleri hızlandırır ve hataları minimize eder.' },
  { q: 'ERP Sistemi Kurulumu Nasıl Gerçekleşir?', a: 'Demo talebi sonrası kurulum desteği verilir. E-Fatura kurulum sihirbazı ile kolay entegrasyon sağlanır.' },
  { q: 'ERP Sistemi Güvenlik Önlemleri Nelerdir?', a: 'Yerel veritabanı (SQLite), tamamen offline çalışma, veritabanı yedekleme ve yetki bazlı kullanıcı erişimi.' },
  { q: 'ERP Sistemi ile İlgili Maliyetler Nelerdir?', a: 'Temel olarak ücretsiz indirilebilir bir masaüstü sürümü vardır. Ticari paketlerde Başlangıç 49.900 TL ve Profesyonel 79.900 TL ile tek seferlik lisans ödemesi uygulanır; aylık abonelik yoktur. Pakette tanımlı güncelleme ve destek süresi sonunda mevcut kurulumunuzu kullanmaya devam edebilirsiniz; yeni sürümler ve genişletilmiş destek için dönem uzatımı veya üst paket seçeneklerini satış hattımızdan (0532 166 76 97) netleştirebilirsiniz. Kurumsal kullanımda özelleştirme ve sınırsız bilgisayar için teklif alınır.' },
  { q: 'Güncelleme süresi bitince yazılım kapanır mı?', a: 'Hayır. Lisansla kazandığınız kullanım süresizdir; abonelik yoktur. Pakette yazan süre, yeni sürüm ve güncelleme dağıtımı ile paket kapsamındaki destek için geçerlidir. Bu dönem sonrası da mevcut yüklü sürümünüzü kullanmaya devam edebilirsiniz; yeni özellikler, yasal uyumluluk veya öncelikli destek için dönem uzatımı hakkında bizimle görüşebilirsiniz.' },
  { q: 'Fiyatlar neden aboneliksiz ve daha erişilebilir?', a: 'DijitalERP yerel bilgisayarda çalışır; veriler sizde kalır ve sürekli bulut sunucu veya kullanıcı başı aylık lisans maliyeti müşteriye yansıtılmaz. Bu model, KOBİ\'ler için tek seferlik şeffaf fiyat sunmamızı sağlar. Destek süresi ve güncelleme kapsamı paketler arasında ayrışır; güven ve hizmet kalitesi düşük fiyattan ödün vermek anlamına gelmez.' },
];

function FaqItem({
  index,
  q,
  a,
  isOpen,
  onToggle,
}: {
  index: number;
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`faq2-item${isOpen ? ' faq2-item-open' : ''}`}>
      <button type="button" className="faq2-btn" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faq2-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="faq2-q">{q}</span>
        <ChevronDown size={18} className="faq2-icon" aria-hidden />
      </button>
      {isOpen && (
        <div className="faq2-answer">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function VideoFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const mid = Math.ceil(faqItems.length / 2);
  const leftItems = faqItems.slice(0, mid);
  const rightItems = faqItems.slice(mid);

  return (
    <section id="sss" className="faq2-section">
      <div className="faq2-inner">
        <div className="faq2-header">
          <p className="faq2-eyebrow">Destek</p>
          <h2 className="faq2-title">Sık Sorulan Sorular</h2>
          <p className="faq2-subtitle">
            Ücretsiz indirin, offline deneyin; DijitalERP ve ERP süreçleri hakkında sık sorulan soruların
            yanıtları.
          </p>
        </div>

        <div className="faq2-grid">
          <div className="faq2-col">
            {leftItems.map((item, i) => (
              <FaqItem
                key={item.q}
                index={i}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <div className="faq2-col">
            {rightItems.map((item, i) => (
              <FaqItem
                key={item.q}
                index={mid + i}
                q={item.q}
                a={item.a}
                isOpen={openIndex === mid + i}
                onToggle={() => setOpenIndex(openIndex === mid + i ? null : mid + i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
