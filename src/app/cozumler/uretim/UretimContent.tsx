import { Factory, Package, Users, FileText, Check } from 'lucide-react';

const features = [
  { icon: Factory, title: 'Üretim Yönetimi', items: ['Hammadde stok – Giriş/çıkış', 'Ürün stok – Mamul takip', 'Stok sayım – Depo sayımı', 'Düşük stok uyarısı'] },
  { icon: Package, title: 'Stok & Envanter', items: ['Ürün kartları – Barkod, kategori', 'Çoklu firma – Şube/fabrika', 'Stok hareketleri – Detaylı', 'Excel export – Raporlar'] },
  { icon: Users, title: 'Cari & Tedarikçi', items: ['Tedarikçi kartları – Hammadde', 'Müşteri kartları – Mamul satış', 'Cari bakiye – Alacak/borç', 'Fatura geçmişi'] },
  { icon: FileText, title: 'Fatura & E-Fatura', items: ['Alış faturası – Hammadde', 'Satış faturası – Mamul', 'E-Fatura – GİB entegrasyonu', 'Kargo etiketi'] },
];

export default function UretimContent() {
  return (
    <section id="uretim" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Üretim ERP</h2>
          <p>DijitalERP üretim çözümü: Üreticiler için stok, cari, fatura. Hammadde ve mamul takip. Offline üretim yazılımı.</p>
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
