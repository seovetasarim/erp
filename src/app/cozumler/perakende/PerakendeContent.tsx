import { Store, Package, Barcode, FileText, Check } from 'lucide-react';

const features = [
  { icon: Store, title: 'Mağaza Yönetimi', items: ['Stok takip – Ürün giriş/çıkış', 'Barkod okuyucu – Hızlı satış', 'Kasa modülü – Nakit takip', 'Fatura – Satış faturası'] },
  { icon: Package, title: 'Stok & Envanter', items: ['Ürün kartları – Barkod, kategori', 'Stok sayım – Periyodik sayım', 'Düşük stok uyarısı', 'Kategori yönetimi'] },
  { icon: Barcode, title: 'Barkod & Satış', items: ['Barkod modal – Hızlı ürün arama', 'Fatura oluşturma – Barkod ile', 'Kargo etiketi – E-ticaret', 'E-Fatura entegrasyonu'] },
  { icon: FileText, title: 'Raporlar', items: ['Aylık hareket – Stok raporu', 'Excel export – Dışa aktarma', 'Dashboard – Özet ekran', 'Cari bakiye – Müşteri takibi'] },
];

export default function PerakendeContent() {
  return (
    <section id="perakende" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Perakende ERP</h2>
          <p>DijitalERP perakende çözümü: Mağazalar için stok takip, barkod, kasa ve fatura. Offline perakende yazılımı.</p>
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
