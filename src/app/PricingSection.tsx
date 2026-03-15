import { Check, Phone, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Başlangıç',
    amount: '25.000',
    currency: 'TL',
    note: 'Tek seferlik ödeme',
    desc: '1 bilgisayar için lisans',
    features: ['Tüm modüller dahil', '1 yıl güncelleme', 'E-posta destek'],
    popular: false,
    cta: 'Demo İste',
  },
  {
    name: 'Profesyonel',
    amount: '35.000',
    currency: 'TL',
    note: 'Tek seferlik ödeme',
    desc: '3 bilgisayar için lisans',
    features: ['Tüm modüller dahil', '2 yıl güncelleme', 'Öncelikli destek', 'E-Fatura kurulum'],
    popular: true,
    cta: 'Demo İste',
  },
  {
    name: 'Kurumsal',
    amount: null,
    currency: null,
    note: 'Fiyat için iletişime geçin',
    desc: 'Sınırsız bilgisayar',
    features: ['Tüm modüller dahil', 'Süresiz güncelleme', '7/24 destek', 'E-Fatura + API', 'Özel eğitim'],
    popular: false,
    cta: 'İletişime Geç',
  },
];

const comparisonRows = [
  { feature: 'Firma & Cari', start: true, pro: true, corp: true },
  { feature: 'Ürün & Stok', start: true, pro: true, corp: true },
  { feature: 'Kasa', start: true, pro: true, corp: true },
  { feature: 'Faturalar', start: true, pro: true, corp: true },
  { feature: 'Kargo & E-Fatura', start: false, pro: true, corp: true },
  { feature: 'Raporlar & Grafikler', start: true, pro: true, corp: true },
  { feature: 'Dashboard', start: true, pro: true, corp: true },
  { feature: 'Kullanıcı sayısı', start: '1', pro: '3', corp: 'Sınırsız' },
  { feature: 'Güncelleme süresi', start: '1 yıl', pro: '2 yıl', corp: 'Süresiz' },
  { feature: 'E-Fatura kurulum', start: false, pro: true, corp: true },
  { feature: 'E-Fatura + API', start: false, pro: false, corp: true },
  { feature: 'Destek', start: 'E-posta', pro: 'Öncelikli', corp: '7/24' },
  { feature: 'Özel eğitim', start: false, pro: false, corp: true },
  { feature: 'Tamamen offline', start: true, pro: true, corp: true },
  { feature: 'Excel export', start: true, pro: true, corp: true },
  { feature: 'Veritabanı yedekleme', start: true, pro: true, corp: true },
];

export default function PricingSection() {
  return (
    <section id="fiyatlandirma" className="pr-section">
      <div className="pr-inner">

        {/* Başlık */}
        <div className="pr-header">
          <span className="pr-kicker">Fiyatlandırma</span>
          <h2 className="pr-title">Tek seferlik ödeme, ömür boyu kullanım</h2>
          <p className="pr-subtitle">Abonelik yok. Aylık ücret yok. Lisansınız süresiz kullanım hakkı sunar.</p>
        </div>

        {/* Kartlar */}
        <div className="pr-cards">
          {plans.map((plan) => (
            <div key={plan.name} className={`pr-card${plan.popular ? ' pr-card-popular' : ''}`}>
              {plan.popular && <div className="pr-card-badge">Önerilen</div>}
              <div className="pr-card-header">
                <h3 className="pr-card-name">{plan.name}</h3>
                <p className="pr-card-desc">{plan.desc}</p>
              </div>
              <div className="pr-card-price">
                {plan.amount ? (
                  <>
                    <span className="pr-amount">{plan.amount}</span>
                    <span className="pr-currency">{plan.currency}</span>
                  </>
                ) : (
                  <span className="pr-amount-custom">Teklif alın</span>
                )}
                <span className="pr-note">{plan.note}</span>
              </div>
              <ul className="pr-features">
                {plan.features.map((f) => (
                  <li key={f} className="pr-feature-item">
                    <Check size={14} strokeWidth={2.5} className="pr-check" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:+905321667697" className={`pr-btn${plan.popular ? ' pr-btn-primary' : ' pr-btn-ghost'}`}>
                {plan.popular ? <Zap size={16} strokeWidth={2} /> : <Phone size={16} strokeWidth={2} />}
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Karşılaştırma tablosu */}
        <div className="pr-table-wrap">
          <div className="pr-table-header-row">
            <span className="pr-kicker">Karşılaştırma</span>
            <h3 className="pr-table-title">Hangi pakette ne var?</h3>
            <p className="pr-table-scroll-hint" aria-hidden="true">← Kaydırarak tüm sütunları görün →</p>
          </div>
          <div className="pr-table-scroll">
          <div className="pr-table">
            <div className="pr-table-head">
              <div className="pr-table-cell pr-table-cell-feature">Özellik</div>
              <div className="pr-table-cell">Başlangıç</div>
              <div className="pr-table-cell">Profesyonel</div>
              <div className="pr-table-cell">Kurumsal</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={row.feature} className={`pr-table-row${i % 2 === 0 ? ' pr-table-row-alt' : ''}`}>
                <div className="pr-table-cell pr-table-cell-feature">{row.feature}</div>
                <div className="pr-table-cell">
                  {typeof row.start === 'boolean'
                    ? (row.start ? <Check size={16} strokeWidth={2.5} className="pr-check" /> : <span className="pr-dash">—</span>)
                    : <span className="pr-table-val">{row.start}</span>}
                </div>
                <div className="pr-table-cell">
                  {typeof row.pro === 'boolean'
                    ? (row.pro ? <Check size={16} strokeWidth={2.5} className="pr-check" /> : <span className="pr-dash">—</span>)
                    : <span className="pr-table-val">{row.pro}</span>}
                </div>
                <div className="pr-table-cell">
                  {typeof row.corp === 'boolean'
                    ? (row.corp ? <Check size={16} strokeWidth={2.5} className="pr-check" /> : <span className="pr-dash">—</span>)
                    : <span className="pr-table-val">{row.corp}</span>}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

      </div>
    </section>
  );
}
