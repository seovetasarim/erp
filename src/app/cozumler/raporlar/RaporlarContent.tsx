import { BarChart3, FileSpreadsheet, Package, LayoutDashboard, Check } from 'lucide-react';

const raporFeatures = [
  { icon: BarChart3, title: 'Stok Raporları', items: ['Aylık hareket – Stok giriş/çıkış özeti', 'Kategori dağılımı – Ürün kategorileri', 'Günlük hareket – Gün bazlı liste', 'En çok hareket – En aktif ürünler'] },
  { icon: FileSpreadsheet, title: 'Excel Export', items: ['Tek tıkla Excel – Tüm raporlar', 'XLSX formatı – Excel uyumlu', 'Tarih aralığı – Filtreleme', 'Firma bazlı – Çoklu firma'] },
  { icon: Package, title: 'Cari & Fatura', items: ['Cari bakiye raporu', 'Fatura listesi – Excel export', 'Stok özeti – Dışa aktarma', 'Muhasebe entegrasyonu'] },
  { icon: LayoutDashboard, title: 'Dashboard', items: ['Özet istatistikler – Tek ekran', 'Grafikler – Görsel analiz', 'Anlık veriler – Güncel durum', 'Kategori analizi'] },
];

export default function RaporlarContent() {
  return (
    <section id="raporlar" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Raporlar Modülü</h2>
          <p>DijitalERP raporlar modülü ile stok, cari ve fatura raporlarını Excel&apos;e aktarın. Aylık hareket, kategori dağılımı, dashboard.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {raporFeatures.map((cat) => (
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
