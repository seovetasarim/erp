import { UtensilsCrossed, Package, Barcode, FileText, Check } from 'lucide-react';

const features = [
  { icon: UtensilsCrossed, title: 'Gıda Yönetimi', items: ['Ürün kartları – Barkod, kategori', 'Stok takip – Giriş/çıkış', 'Stok sayım – Periyodik', 'Düşük stok uyarısı'] },
  { icon: Package, title: 'Stok & Envanter', items: ['Kategori yönetimi – Gıda kategorileri', 'Çoklu firma – Şube/depo', 'Stok hareketleri – Detaylı', 'Excel export – Raporlar'] },
  { icon: Barcode, title: 'Barkod & Satış', items: ['Barkod okuyucu – Hızlı işlem', 'Barkod modal – Ürün arama', 'Fatura – Barkod ile', 'Kargo etiketi – E-ticaret'] },
  { icon: FileText, title: 'Fatura & E-Fatura', items: ['E-Fatura – GİB entegrasyonu', 'Cari yönetimi – Müşteri/tedarikçi', 'Dashboard – Özet', 'Raporlar – Excel export'] },
];

export default function GidaContent() {
  return (
    <section id="gida" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Gıda Sektörü ERP</h2>
          <p>DijitalERP gıda çözümü: Gıda firmaları için stok takip, barkod, fatura. Offline gıda yazılımı.</p>
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
