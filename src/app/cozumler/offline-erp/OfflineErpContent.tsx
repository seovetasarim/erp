import { Shield, Database, WifiOff, Lock, Check } from 'lucide-react';

const offlineFeatures = [
  { icon: WifiOff, title: 'Tamamen Offline', items: ['İnternet gerektirmez – Tüm işlemler yerelde', 'Bulut bağımlılığı yok – Veriler sizde', 'Kesintisiz çalışma – Bağlantı kopması yok', 'Hızlı erişim – Yerel veritabanı hızı'] },
  { icon: Database, title: 'Yerel Veritabanı', items: ['SQLite (better-sqlite3) – Hafif ve güvenilir', 'Veriler bilgisayarınızda – Bulutta değil', 'Veritabanı yedekleme – Yedek alma', 'Taşınabilir – Veritabanı dosyası taşınabilir'] },
  { icon: Lock, title: 'Güvenlik & Gizlilik', items: ['Veriler sizde – Üçüncü tarafla paylaşım yok', 'Şifreleme – Veritabanı güvenliği', 'Yedekleme – Düzenli yedek alın', 'Kullanıcı yetkileri – Erişim kontrolü'] },
  { icon: Shield, title: 'Avantajlar', items: ['Abonelik yok – Tek seferlik ödeme', 'Süresiz kullanım – Lisans süresi yok', 'Kurumsal destek – Teknik destek', 'E-Fatura hariç offline – Sadece gönderimde internet'] },
];

export default function OfflineErpContent() {
  return (
    <section id="offline-erp" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Offline ERP</h2>
          <p>DijitalERP tamamen offline çalışır. Verileriniz bilgisayarınızda, internet gerektirmez. Bulut bağımlılığı yok.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {offlineFeatures.map((cat) => (
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
