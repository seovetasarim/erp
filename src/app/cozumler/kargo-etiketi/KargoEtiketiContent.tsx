import { Truck, FileText, Barcode, Printer, Check } from 'lucide-react';

const kargoFeatures = [
  { icon: Printer, title: 'Kargo Etiketi Yazdırma', items: ['100×150 mm termal etiket – Standart boyut', 'Termal yazıcı desteği – USB bağlantı', 'Fatura ile entegre – Tek tıkla etiket', 'Önizleme – Yazdırmadan önce kontrol'] },
  { icon: Barcode, title: 'CODE128 Barkod', items: ['CODE128 formatı – Kargo firmaları uyumlu', 'Barkod okuma – Kargo takip sistemleri', 'Fatura no / referans – Barkod içeriği', 'Standart format – Evrensel uyumluluk'] },
  { icon: FileText, title: 'Fatura Entegrasyonu', items: ['Fatura oluştur – Sonra etiket yazdır', 'Müşteri adresi – Etikette otomatik', 'Fatura bilgileri – Alıcı, gönderici', 'Kargo firması – Tüm firmalara uyumlu'] },
  { icon: Truck, title: 'Kullanım', items: ['E-Fatura ile birlikte – Tek akış', 'Toplu etiket – Birden fazla fatura', 'Yazıcı ayarları – Boyut, kenar boşlukları', 'Hızlı kargo süreci – Zaman tasarrufu'] },
];

export default function KargoEtiketiContent() {
  return (
    <section id="kargo-etiketi" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>Kargo Etiketi Yazılımı</h2>
          <p>DijitalERP ile kargo etiketi yazdırın. 100×150 mm termal etiket, CODE128 barkod. Fatura ile entegre, kargo firmalarına uyumlu.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {kargoFeatures.map((cat) => (
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
