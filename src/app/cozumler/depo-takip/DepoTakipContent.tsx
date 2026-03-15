import { Package, BarChart3, LayoutDashboard, Shield, Check } from 'lucide-react';

const depoFeatures = [
  { icon: Package, title: 'Depo Stok Yönetimi', items: ['Ürün kartları – Barkod, kategori, birim', 'Stok özeti – Firma/depo bazlı görünüm', 'Stok hareketleri – Giriş/çıkış', 'Stok sayım – Sayım ve fark uygulama', 'Düşük stok uyarısı'] },
  { icon: BarChart3, title: 'Depo Raporları', items: ['Aylık hareket – Giriş/çıkış özeti', 'Kategori dağılımı – Analiz', 'Günlük hareket – Gün bazlı', 'En çok hareket – Aktif ürünler', 'Excel export – Dışa aktarma'] },
  { icon: LayoutDashboard, title: 'Dashboard & Takip', items: ['Özet istatistikler – Tek ekran', 'Grafikler – Görsel analiz', 'Barkod modal – Hızlı ürün arama', 'Kargo etiketi – Termal yazdırma'] },
  { icon: Shield, title: 'Offline & Güvenlik', items: ['Tamamen offline – İnternet yok', 'Yerel veritabanı – Veriler sizde', 'Veritabanı yedekleme', 'Çoklu firma desteği'] },
];

export default function DepoTakipContent() {
  return (
    <section id="depo-takip" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Depo Takip Programı</h2>
          <p>DijitalERP depo takip programı ile depo giriş-çıkış, stok sayımı ve raporlama. Barkod desteği, düşük stok uyarısı. Offline depo yönetim yazılımı.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {depoFeatures.map((cat) => (
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
