import { Barcode, Package, Search, Check } from 'lucide-react';

const barkodFeatures = [
  { icon: Barcode, title: 'Barkod Okuyucu Desteği', items: ['USB barkod okuyucu – Uyumlu', 'Barkod ile ürün arama – Hızlı erişim', 'Barkod modal – Tek tıkla ürün bul', 'Klavye girişi – Okuyucu klavye gibi çalışır'] },
  { icon: Package, title: 'Ürün & Stok', items: ['Ürün kartları – Barkod alanı', 'Stok giriş/çıkış – Barkod ile', 'Stok sayım – Barkod okutma', 'Stok özeti – Barkod filtreleme'] },
  { icon: Search, title: 'Hızlı Arama', items: ['Barkod modal – Global kısayol', 'Ürün listesinde barkod arama', 'Fatura oluştururken barkod ile ürün ekleme', 'Kargo etiketi – CODE128 barkod'] },
];

export default function BarkodContent() {
  return (
    <section id="barkod" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Barkod Okuyucu Yazılımı</h2>
          <p>DijitalERP barkod desteği ile ürün giriş-çıkış ve stok sayımını hızlandırın. USB barkod okuyucu uyumlu, barkod modal ile hızlı ürün arama.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {barkodFeatures.map((cat) => (
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
