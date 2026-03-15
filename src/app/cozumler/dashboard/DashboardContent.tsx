import { LayoutDashboard, BarChart3, Package, Barcode, Check } from 'lucide-react';

const dashboardFeatures = [
  { icon: LayoutDashboard, title: 'Özet Ekran', items: ['Tek ekrandan genel bakış – Tüm veriler', 'Stok özeti – Anlık stok durumu', 'Cari özet – Alacak/borç bakiyesi', 'Kasa bakiyesi – Nakit durumu'] },
  { icon: BarChart3, title: 'Grafikler ve Analiz', items: ['Görsel grafikler – Stok hareketleri', 'Kategori dağılımı – Pasta/çubuk grafik', 'Trend analizi – Zaman bazlı', 'Özet istatistikler – Sayısal veriler'] },
  { icon: Barcode, title: 'Hızlı Erişim', items: ['Barkod modal – Hızlı ürün arama', 'Kısayollar – Sık kullanılan işlemler', 'Firma seçimi – Çoklu firma', 'Anlık güncelleme – Canlı veri'] },
  { icon: Package, title: 'Entegrasyon', items: ['Stok modülü – Stok özeti', 'Cari modülü – Bakiye özeti', 'Fatura modülü – Son faturalar', 'Raporlar – Hızlı rapor erişimi'] },
];

export default function DashboardContent() {
  return (
    <section id="dashboard" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Dashboard Modülü</h2>
          <p>DijitalERP dashboard ile işletmenizin özetini tek ekrandan görün. Stok, cari, kasa ve grafikler. Hızlı erişim ve barkod modal.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {dashboardFeatures.map((cat) => (
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
