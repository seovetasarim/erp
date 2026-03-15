import { Package, BarChart3, LayoutDashboard, Shield, Check } from 'lucide-react';

const stokFeatures = [
  { icon: Package, title: 'Ürün & Stok', items: ['Ürün kartları – Barkod, kategori, birim', 'Stok özeti – Firma bazlı görünüm', 'Stok hareketleri – Giriş/çıkış', 'Stok sayım – Sayım ve fark uygulama', 'Düşük stok uyarısı'] },
  { icon: BarChart3, title: 'Stok Raporları', items: ['Aylık hareket – Giriş/çıkış özeti', 'Kategori dağılımı – Analiz', 'Günlük hareket – Gün bazlı', 'En çok hareket – Aktif ürünler', 'Excel export – Dışa aktarma'] },
  { icon: LayoutDashboard, title: 'Dashboard', items: ['Özet istatistikler – Tek ekran', 'Grafikler – Görsel analiz', 'Barkod modal – Hızlı ürün arama'] },
  { icon: Shield, title: 'Offline & Güvenlik', items: ['Tamamen offline – İnternet yok', 'Yerel veritabanı – Veriler sizde', 'Veritabanı yedekleme'] },
];

export default function StokProgramiContent() {
  return (
    <section id="stok-programi" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Stok Programı</h2>
          <p>DijitalERP stok programı ile envanterinizi yönetin. Barkod, stok sayımı, raporlama ve düşük stok uyarısı. Offline stok takip programı.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {stokFeatures.map((cat) => (
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
