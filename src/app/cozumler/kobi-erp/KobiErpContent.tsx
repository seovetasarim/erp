import { Briefcase, Package, FileText, BarChart3, LayoutDashboard, Shield, Check } from 'lucide-react';

const kobiFeatures = [
  { icon: Briefcase, title: 'Firma & Cari', items: ['Firma yönetimi – Birden fazla firma desteği', 'Cariler – Müşteri ve tedarikçi tanımlama', 'Cari kartları – Detaylı bilgiler', 'Bakiye takibi – Alacak/borç'] },
  { icon: Package, title: 'Stok Yönetimi', items: ['Ürün yönetimi – Barkod, kategori, birim', 'Stok hareketleri – Giriş/çıkış', 'Stok sayım – Sayım ve fark uygulama', 'Düşük stok uyarısı'] },
  { icon: FileText, title: 'Fatura & E-Fatura', items: ['Fatura oluşturma – Müşteri, kalemler, KDV', 'E-Fatura – Paraşüt, İşbaşı, özel API', 'Kargo etiketi – Termal etiket yazdırma', 'Fatura arşivi'] },
  { icon: BarChart3, title: 'Raporlar & Dashboard', items: ['Aylık hareket – Stok raporları', 'Kategori dağılımı – Analiz', 'Excel export – Dışa aktarma', 'Dashboard – Özet istatistikler'] },
  { icon: LayoutDashboard, title: 'Kasa & Araçlar', items: ['Kasa giriş/çıkış – Nakit hareketleri', 'Barkod modal – Hızlı ürün arama', 'Kullanıcı yönetimi – Yetki bazlı erişim'] },
  { icon: Shield, title: 'Offline & Güvenlik', items: ['Tamamen offline – İnternet gerektirmez', 'Yerel veritabanı – Veriler sizde', 'Veritabanı yedekleme', 'Tek seferlik ödeme – Abonelik yok'] },
];

export default function KobiErpContent() {
  return (
    <section id="kobi-erp" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>KOBİ ERP</h2>
          <p>Küçük ve orta ölçekli işletmeler için tek yazılımda stok, cari, fatura, E-Fatura ve raporlama. Tamamen offline, kurumsal destek.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {kobiFeatures.map((cat) => (
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
