import { Briefcase, Package, Users, FileText, BarChart3, Check } from 'lucide-react';

const cokluFirmaFeatures = [
  { icon: Briefcase, title: 'Çoklu Firma Yönetimi', items: ['Firma tanımlama – Sınırsız firma', 'Vergi no, adres, telefon – Her firma ayrı', 'Firma seçimi – Ekran başında değiştir', 'Tek programda tüm firmalar'] },
  { icon: Package, title: 'Firma Bazlı Stok', items: ['Her firma ayrı stok – Karışmaz', 'Stok hareketleri – Firma bazlı', 'Stok sayım – Firma seçerek', 'Düşük stok uyarısı – Firma bazlı'] },
  { icon: Users, title: 'Firma Bazlı Cari', items: ['Cari hesaplar – Firma ayrı', 'Müşteri/tedarikçi – Firma bazlı', 'Bakiye takibi – Her firma ayrı', 'Fatura ile otomatik güncelleme'] },
  { icon: FileText, title: 'Fatura & E-Fatura', items: ['Fatura – Firma bazlı kesim', 'E-Fatura – Firma vergi no ile', 'Kargo etiketi – Firma bilgisiyle', 'Fatura arşivi – Firma filtreleme'] },
  { icon: BarChart3, title: 'Raporlar', items: ['Raporlar – Firma bazlı', 'Excel export – Firma seçerek', 'Dashboard – Firma özeti', 'Kategori dağılımı – Firma bazlı'] },
];

export default function CokluFirmaContent() {
  return (
    <section id="coklu-firma" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Çoklu Firma Yazılımı</h2>
          <p>DijitalERP ile birden fazla firma veya şirketi tek programda yönetin. Her firma için ayrı stok, cari ve fatura. Tek yazılım, çoklu firma.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {cokluFirmaFeatures.map((cat) => (
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
