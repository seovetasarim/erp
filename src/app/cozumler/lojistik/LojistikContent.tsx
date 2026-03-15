import { Truck, Package, FileText, Barcode, Check } from 'lucide-react';

const features = [
  { icon: Truck, title: 'Lojistik Yönetimi', items: ['Depo giriş/çıkış – Stok hareketi', 'Kargo etiketi – 100×150 mm termal', 'CODE128 barkod – Kargo uyumlu', 'Fatura ile entegre'] },
  { icon: Package, title: 'Depo & Stok', items: ['Stok takip – Ürün bazlı', 'Stok sayım – Depo sayımı', 'Düşük stok uyarısı', 'Çoklu firma'] },
  { icon: Barcode, title: 'Barkod', items: ['Barkod okuyucu – Hızlı işlem', 'Barkod modal – Ürün arama', 'Stok giriş/çıkış – Barkod ile', 'Kargo barkod – CODE128'] },
  { icon: FileText, title: 'Fatura & Raporlar', items: ['E-Fatura – GİB entegrasyonu', 'Excel export – Raporlar', 'Dashboard – Özet', 'Cari yönetimi'] },
];

export default function LojistikContent() {
  return (
    <section id="lojistik" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Lojistik ERP</h2>
          <p>DijitalERP lojistik çözümü: Depo takip, kargo etiketi, stok ve fatura. Lojistik firmaları için ERP yazılımı.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {features.map((cat) => (
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
