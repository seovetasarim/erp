import { FileText, Truck, Settings, CheckCircle, Check } from 'lucide-react';

const efaturaFeatures = [
  { icon: FileText, title: 'E-Fatura Oluşturma', items: ['Fatura oluşturma – Müşteri seçimi, kalemler, KDV', 'E-Fatura gönder – GİB portalına otomatik gönderim', 'Fatura detay – Yazdır, E-Fatura gönder butonu', 'Test faturası – Kurulum sonrası deneme faturası'] },
  { icon: Settings, title: 'E-Fatura Kurulum', items: ['Kurulum sihirbazı – Paraşüt, İşbaşı, özel API', 'API test – Bağlantı testi, firma doğrulama', 'Firma doğrulama – GİB entegrasyonu', 'Kolay yapılandırma – Adım adım kurulum'] },
  { icon: Truck, title: 'Kargo Etiketi', items: ['Kargo etiketi – 100×150 mm termal etiket', 'CODE128 barkod – Standart barkod formatı', 'Fatura ile entegre – Fatura bilgileriyle etiket', 'Yazdırma – Termal yazıcı desteği'] },
  { icon: CheckCircle, title: 'Uyumluluk & Güvenlik', items: ['GİB uyumlu – Resmi E-Fatura formatı', 'Offline çalışma – Veriler yerelde', 'API güvenliği – Şifreli bağlantı', 'Yedekleme – Fatura arşivi'] },
];

export default function EFaturaContent() {
  return (
    <section id="e-fatura" className="section section-features">
      <div className="section-inner">
        <div className="section-header features-section-header">
          <h2>E-Fatura Yazılımı</h2>
          <p>DijitalERP ile E-Fatura oluşturun ve GİB portalına gönderin. Paraşüt, İşbaşı ve özel API desteği. Kargo etiketi dahil.</p>
        </div>
        <div className="features-grid features-grid-categories">
          {efaturaFeatures.map((cat) => (
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
