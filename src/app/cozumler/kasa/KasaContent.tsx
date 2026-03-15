import { Wallet, BarChart3, FileText, Check } from 'lucide-react';

const kasaFeatures = [
  { icon: Wallet, title: 'Kasa İşlemleri', items: ['Kasa giriş – Nakit girişi', 'Kasa çıkış – Nakit çıkışı', 'Bakiye takibi – Anlık kasa bakiyesi', 'Tarih aralığı – Filtreleme'] },
  { icon: BarChart3, title: 'Raporlama', items: ['Kasa hareket raporu – Günlük/aylık', 'Excel export – Dışa aktarma', 'Firma bazlı – Çoklu firma desteği', 'Özet istatistikler'] },
  { icon: FileText, title: 'Entegrasyon', items: ['Cari ile bağlantı – Tahsilat/ödeme', 'Fatura ile – Nakit satış', 'Stok ile – Alış/satış takibi', 'Dashboard – Özet görünüm'] },
];

export default function KasaContent() {
  return (
    <section id="kasa" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Kasa Modülü</h2>
          <p>DijitalERP kasa modülü ile nakit giriş-çıkış, bakiye takibi ve kasa raporları. Cari ve fatura ile entegre kasa yönetimi.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {kasaFeatures.map((cat) => (
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
