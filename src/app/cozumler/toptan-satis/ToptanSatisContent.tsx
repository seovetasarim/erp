import { Truck, Package, Users, FileText, Check } from 'lucide-react';

const features = [
  { icon: Truck, title: 'Toptan Satış', items: ['Bayi yönetimi – Cari kartlar', 'Toplu fatura – Çoklu sipariş', 'Fiyat listeleri – Bayi bazlı', 'Sipariş takibi'] },
  { icon: Package, title: 'Stok Yönetimi', items: ['Büyük stok – Çoklu ürün', 'Stok sayım – Depo sayımı', 'Düşük stok uyarısı', 'Kategori yönetimi'] },
  { icon: Users, title: 'Cari & Bayi', items: ['Bayi kartları – Detaylı bilgi', 'Cari bakiye – Alacak takibi', 'Çoklu firma – Şube yönetimi', 'Fatura geçmişi'] },
  { icon: FileText, title: 'Fatura & Kargo', items: ['E-Fatura – GİB entegrasyonu', 'Kargo etiketi – Toplu etiket', 'Excel export – Raporlar', 'Dashboard – Özet'] },
];

export default function ToptanSatisContent() {
  return (
    <section id="toptan-satis" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Toptan Satış ERP</h2>
          <p>DijitalERP toptan satış çözümü: Toptancılar için stok, cari, fatura ve bayi yönetimi. Offline toptan satış yazılımı.</p>
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
