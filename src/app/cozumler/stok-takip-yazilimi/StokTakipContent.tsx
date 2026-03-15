import { Package, BarChart3, LayoutDashboard, Shield, Check } from 'lucide-react';

const stokFeatures = [
  { icon: Package, title: 'Ürün & Stok Yönetimi', items: ['Ürün kartları – Barkod, kategori, birim, min/max stok', 'Stok özeti – Firma bazlı anlık stok görünümü', 'Stok hareketleri – Giriş/çıkış, transfer işlemleri', 'Stok sayım – Sayım yapma ve fark uygulama', 'Düşük stok uyarısı – Minimum seviye altı bildirimi'] },
  { icon: BarChart3, title: 'Stok Raporları', items: ['Aylık hareket raporu – Stok giriş/çıkış özeti', 'Kategori dağılımı – Ürün kategorilerine göre analiz', 'Günlük hareket – Gün bazlı hareket listesi', 'En çok hareket – En aktif ürünler', 'Excel export – Raporları Excel\'e aktarma'] },
  { icon: LayoutDashboard, title: 'Dashboard & Takip', items: ['Özet istatistikler – Tek ekrandan stok durumu', 'Grafikler – Görsel stok analizi', 'Barkod modal – Barkod ile hızlı ürün arama'] },
  { icon: Shield, title: 'Güvenlik & Offline', items: ['Tamamen offline – İnternet gerektirmez', 'Yerel veritabanı – Veriler bilgisayarınızda', 'Veritabanı yedekleme – Yedek alma'] },
];

export default function StokTakipContent() {
  return (
    <section id="stok-takip" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Stok Takip Yazılımı</h2>
          <p>DijitalERP ile envanterinizi tek ekrandan yönetin. Barkod, stok sayımı, raporlama ve düşük stok uyarısı.</p>
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
