import { ClipboardList, Package, BarChart3, Barcode, Check } from 'lucide-react';

const stokSayimFeatures = [
  { icon: ClipboardList, title: 'Stok Sayım İşlemi', items: ['Sayım başlat – Firma/depo seçimi', 'Sayım girişi – Miktar kaydı', 'Barkod ile sayım – Hızlı giriş', 'Fark uygulama – Sisteme kaydet'] },
  { icon: Package, title: 'Sayım Öncesi/Sonrası', items: ['Mevcut stok – Sayım öncesi görünüm', 'Sayım sonucu – Girilen miktarlar', 'Fark listesi – Eksik/fazla ürünler', 'Stok güncelleme – Farkları uygula'] },
  { icon: Barcode, title: 'Barkod Desteği', items: ['Barkod okuyucu – Hızlı sayım', 'Barkod ile ürün bul – Otomatik', 'Toplu sayım – Barkod + miktar', 'Sayım verimliliği – Zaman tasarrufu'] },
  { icon: BarChart3, title: 'Raporlama', items: ['Sayım raporu – Özet', 'Fark raporu – Detaylı liste', 'Excel export – Dışa aktarma', 'Tarih aralığı – Geçmiş sayımlar'] },
];

export default function StokSayimContent() {
  return (
    <section id="stok-sayim" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Stok Sayım Programı</h2>
          <p>DijitalERP stok sayım özelliği ile envanter sayımı yapın. Barkod ile hızlı sayım, fark uygulama ve raporlama. Offline stok sayım programı.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {stokSayimFeatures.map((cat) => (
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
