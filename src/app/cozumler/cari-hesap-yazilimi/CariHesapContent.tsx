import { Briefcase, Users, FileText, Wallet, Check } from 'lucide-react';

const cariFeatures = [
  { icon: Briefcase, title: 'Firma & Cari Yönetimi', items: ['Firma yönetimi – Birden fazla firma, vergi no, adres, telefon', 'Cariler – Müşteri ve tedarikçi tanımlama', 'Cari kartları – Detaylı bilgiler, düzenleme', 'Çoklu firma – Her firma için ayrı cari hesaplar'] },
  { icon: Users, title: 'Müşteri & Tedarikçi', items: ['Müşteri kartları – İletişim, adres, vergi bilgileri', 'Tedarikçi kartları – Satın alma tarafı yönetimi', 'Cari bakiye – Alacak/borç takibi', 'Cari hareket geçmişi – Tüm işlemler tek ekranda'] },
  { icon: FileText, title: 'Fatura & Cari Entegrasyonu', items: ['Fatura oluşturma – Müşteri seçimi, kalemler, KDV', 'Otomatik cari güncelleme – Fatura ile bakiye güncelleme', 'Fatura listesi – Cari bazlı filtreleme', 'E-Fatura gönder – Cari bilgileriyle entegre'] },
  { icon: Wallet, title: 'Kasa & Tahsilat', items: ['Kasa giriş/çıkış – Nakit hareketleri', 'Bakiye takibi – Kasa bakiyesi', 'Tarih aralığı – Filtreleme', 'Cari ödemeler – Tahsilat ve ödeme kayıtları'] },
];

export default function CariHesapContent() {
  return (
    <section id="cari-hesap" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Cari Hesap Yazılımı</h2>
          <p>DijitalERP ile müşteri ve tedarikçi hesaplarınızı tek ekrandan yönetin. Cari kartlar, bakiye takibi ve fatura entegrasyonu.</p>
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
