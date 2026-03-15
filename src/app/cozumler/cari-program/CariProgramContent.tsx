import { Briefcase, Users, FileText, Wallet, Check } from 'lucide-react';

const cariFeatures = [
  { icon: Briefcase, title: 'Firma & Cari', items: ['Firma yönetimi – Çoklu firma', 'Cariler – Müşteri ve tedarikçi', 'Cari kartları – Detaylı bilgiler', 'Cari bakiye – Alacak/borç'] },
  { icon: Users, title: 'Müşteri & Tedarikçi', items: ['Müşteri kartları – İletişim, adres', 'Tedarikçi kartları – Satın alma', 'Cari hareket geçmişi – Tüm işlemler', 'Bakiye takibi – Anlık'] },
  { icon: FileText, title: 'Fatura Entegrasyonu', items: ['Fatura ile cari güncelleme', 'Otomatik bakiye hesaplama', 'Fatura listesi – Cari filtreleme', 'E-Fatura gönder'] },
  { icon: Wallet, title: 'Kasa & Tahsilat', items: ['Kasa giriş/çıkış – Nakit', 'Bakiye takibi – Kasa', 'Cari ödemeler – Tahsilat', 'Tarih aralığı filtreleme'] },
];

export default function CariProgramContent() {
  return (
    <section id="cari-program" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Cari Program</h2>
          <p>DijitalERP cari program ile müşteri ve tedarikçi hesaplarınızı yönetin. Cari kartlar, bakiye takibi ve fatura entegrasyonu. Offline cari hesap programı.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {cariFeatures.map((cat) => (
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
