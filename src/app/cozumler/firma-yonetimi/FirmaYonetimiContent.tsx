import { Briefcase, Users, FileText, Package, BarChart3, Shield, Check } from 'lucide-react';

const firmaFeatures = [
  { icon: Briefcase, title: 'Çoklu Firma Yönetimi', items: ['Firma tanımlama – Vergi no, adres, telefon', 'Birden fazla firma – Tek programda', 'Firma bazlı stok – Her firma ayrı stok', 'Firma bazlı cari – Ayrı hesaplar'] },
  { icon: Users, title: 'Cari & Müşteri', items: ['Müşteri kartları – Detaylı bilgiler', 'Tedarikçi kartları – Satın alma', 'Cari bakiye – Alacak/borç', 'Cari hareket geçmişi'] },
  { icon: FileText, title: 'Fatura & E-Fatura', items: ['Fatura oluşturma – Firma bazlı', 'E-Fatura – GİB entegrasyonu', 'Kargo etiketi – Termal yazdırma', 'Fatura arşivi'] },
  { icon: Package, title: 'Stok Yönetimi', items: ['Ürün yönetimi – Barkod, kategori', 'Stok hareketleri – Giriş/çıkış', 'Stok sayım – Sayım ve fark', 'Düşük stok uyarısı'] },
  { icon: BarChart3, title: 'Raporlar', items: ['Aylık hareket – Stok raporları', 'Kategori dağılımı – Analiz', 'Excel export – Dışa aktarma', 'Dashboard – Özet istatistikler'] },
  { icon: Shield, title: 'Offline & Güvenlik', items: ['Tamamen offline – İnternet yok', 'Yerel veritabanı – Veriler sizde', 'Veritabanı yedekleme', 'Kullanıcı yetkileri'] },
];

export default function FirmaYonetimiContent() {
  return (
    <section id="firma-yonetimi" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Firma Yönetim Yazılımı</h2>
          <p>DijitalERP ile çoklu firma yönetimi: Stok, cari, fatura ve raporlar firma bazlı. KOBİ&apos;ler için firma yönetim programı.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {firmaFeatures.map((cat) => (
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
