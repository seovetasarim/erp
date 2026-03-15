import { Shirt, Package, Barcode, FileText, Check } from 'lucide-react';

const features = [
  { icon: Shirt, title: 'Tekstil Yönetimi', items: ['Ürün kartları – Beden, renk, kategori', 'Stok takip – Giriş/çıkış', 'Kategori – Kumaş, ürün tipi', 'Düşük stok uyarısı'] },
  { icon: Package, title: 'Stok & Envanter', items: ['Stok sayım – Periyodik', 'Çoklu firma – Şube/depo', 'Stok hareketleri – Detaylı', 'Excel export – Raporlar'] },
  { icon: Barcode, title: 'Barkod & Satış', items: ['Barkod okuyucu – Hızlı işlem', 'Barkod modal – Ürün arama', 'Fatura – Barkod ile', 'Kargo etiketi'] },
  { icon: FileText, title: 'Fatura & E-Fatura', items: ['E-Fatura – GİB entegrasyonu', 'Cari yönetimi – Müşteri/tedarikçi', 'Dashboard – Özet', 'Raporlar – Excel export'] },
];

export default function TekstilContent() {
  return (
    <section id="tekstil" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Tekstil Sektörü ERP</h2>
          <p>DijitalERP tekstil çözümü: Tekstil firmaları için stok takip, barkod, kategori, fatura. Offline tekstil yazılımı.</p>
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
