import { FileText, Printer, Send, FileCheck, Check } from 'lucide-react';

const faturaFeatures = [
  { icon: FileText, title: 'Fatura Oluşturma', items: ['Müşteri seçimi – Cari kartlardan seçim', 'Ürün kalemleri – Barkod, miktar, birim fiyat', 'KDV hesaplama – Otomatik KDV', 'Fatura listesi – Tüm faturalar tek ekranda', 'Fatura detay – Düzenleme, silme'] },
  { icon: Printer, title: 'Yazdırma', items: ['Fatura yazdırma – A4 veya termal', 'Yazdırma önizleme – Kontrol edin', 'Kargo etiketi – 100×150 mm termal', 'CODE128 barkod – Kargo etiketi için'] },
  { icon: Send, title: 'E-Fatura Entegrasyonu', items: ['E-Fatura gönder – GİB portalına', 'Paraşüt, İşbaşı, özel API', 'Kurulum sihirbazı – Kolay yapılandırma', 'Test faturası – Deneme gönderimi'] },
  { icon: FileCheck, title: 'Cari & Stok Entegrasyonu', items: ['Otomatik cari güncelleme – Bakiye', 'Stok düşümü – Satış faturası ile', 'Fatura arşivi – Geçmiş faturalar', 'Excel export – Fatura listesi'] },
];

export default function FaturaYazilimiContent() {
  return (
    <section id="fatura-yazilimi" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Fatura Yazılımı</h2>
          <p>DijitalERP ile fatura oluşturun, yazdırın ve E-Fatura gönderin. Müşteri seçimi, KDV, cari ve stok entegrasyonu.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {faturaFeatures.map((cat) => (
            <div key={cat.title} className="feature-card feature-card-category">
              <div className="feature-card-header">
                <cat.icon size={22} className="feature-cat-icon" />
                <h3>{cat.title}</h3>
              </div>
              <ul className="feature-list">
                {cat.items.map((item) => (
                  <li key={item}>
                    <Check size={16} className="feature-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
