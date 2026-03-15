import { Database, Shield, FolderOpen, Check } from 'lucide-react';

const yedeklemeFeatures = [
  { icon: Database, title: 'Veritabanı Yedekleme', items: ['Tek tıkla yedekleme – Kolay kullanım', 'SQLite veritabanı – Tüm veriler', 'Yedek dosyası – Taşınabilir', 'Tarih damgalı – Versiyon takibi'] },
  { icon: FolderOpen, title: 'Yedek Yönetimi', items: ['Yedek konumu seç – İstediğiniz klasör', 'USB / harici disk – Taşınabilir yedek', 'Ağ sürücüsü – Merkezi depolama', 'Otomatik yedek – Düzenli aralıklarla (manuel)'] },
  { icon: Shield, title: 'Güvenlik & Geri Yükleme', items: ['Veri güvenliği – Yerel depolama', 'Geri yükleme – Yedekten geri al', 'Felaket kurtarma – Veri kaybı önleme', 'Offline yedek – İnternet gerektirmez'] },
];

export default function YedeklemeContent() {
  return (
    <section id="yedekleme" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Veritabanı Yedekleme</h2>
          <p>DijitalERP ile veritabanınızı yedekleyin. Tek tıkla yedekleme, geri yükleme. Stok, cari, fatura verileriniz güvende.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {yedeklemeFeatures.map((cat) => (
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
