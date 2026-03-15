import { Briefcase, Package, FileText, BarChart3, LayoutDashboard, Shield, Check } from 'lucide-react';

const erpFeatures = [
  { icon: Briefcase, title: 'Firma & Cari', items: ['Firma yönetimi – Çoklu firma desteği', 'Cariler – Müşteri ve tedarikçi', 'Cari kartları – Detaylı bilgiler', 'Bakiye takibi – Alacak/borç'] },
  { icon: Package, title: 'Stok Yönetimi', items: ['Ürün yönetimi – Barkod, kategori', 'Stok hareketleri – Giriş/çıkış', 'Stok sayım – Sayım ve fark', 'Düşük stok uyarısı'] },
  { icon: FileText, title: 'Fatura & E-Fatura', items: ['Fatura oluşturma – KDV dahil', 'E-Fatura – Paraşüt, İşbaşı', 'Kargo etiketi – Termal yazdırma', 'Fatura arşivi'] },
  { icon: BarChart3, title: 'Raporlar & Analiz', items: ['Aylık hareket – Stok raporları', 'Kategori dağılımı – Analiz', 'Excel export – Dışa aktarma', 'Dashboard – Özet istatistikler'] },
  { icon: LayoutDashboard, title: 'Kasa & Araçlar', items: ['Kasa giriş/çıkış – Nakit', 'Barkod modal – Hızlı arama', 'Kullanıcı yönetimi – Yetkiler'] },
  { icon: Shield, title: 'Offline & Güvenlik', items: ['Tamamen offline – İnternet yok', 'Yerel veritabanı – Veriler sizde', 'Veritabanı yedekleme', 'Tek seferlik ödeme'] },
];

export default function ErpYazilimiContent() {
  return (
    <section id="erp-yazilimi" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>ERP Yazılımı</h2>
          <p>DijitalERP ile kurumsal kaynak planlama: Stok, cari, fatura, E-Fatura ve raporlama tek yazılımda. KOBİ&apos;ler için profesyonel ERP programı.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {erpFeatures.map((cat) => (
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
