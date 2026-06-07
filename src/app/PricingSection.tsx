import {
  LIST_PRICE_BASLANGIC_DISPLAY,
  LIST_PRICE_PROFESYONEL_DISPLAY,
} from '../pricing';
import { DESKTOP_ARCHIVE_FILENAME, DESKTOP_ARCHIVE_HREF } from '../download';

const plans = [
  {
    name: 'Ücretsiz',
    amount: '0',
    currency: 'TL',
    note: 'Süresiz kullanım',
    desc: 'Tek bilgisayar, temel modüller',
    features: ['Ana modüller dahil', 'Tamamen offline', 'Veriler bilgisayarınızda', 'Topluluk desteği'],
    featured: false,
    cta: 'Ücretsiz İndir',
    href: DESKTOP_ARCHIVE_HREF,
    variant: 'primary' as const,
    free: true,
  },
  {
    name: 'Başlangıç',
    amount: LIST_PRICE_BASLANGIC_DISPLAY,
    currency: 'TL',
    note: 'Tek seferlik ödeme',
    desc: '1 bilgisayar için lisans',
    features: ['Tüm modüller dahil', '1 yıl güncelleme', 'E-posta destek'],
    featured: false,
    cta: 'Satın Al',
    href: 'tel:+905321667697',
    variant: 'outline' as const,
    free: false,
  },
  {
    name: 'Profesyonel',
    amount: LIST_PRICE_PROFESYONEL_DISPLAY,
    currency: 'TL',
    note: 'Tek seferlik ödeme',
    desc: '3 bilgisayar için lisans',
    features: ['Tüm modüller dahil', '2 yıl güncelleme', 'Öncelikli destek', 'E-Fatura kurulum'],
    featured: true,
    cta: 'Satın Al',
    href: 'tel:+905321667697',
    variant: 'outline' as const,
    free: false,
  },
  {
    name: 'Kurumsal',
    amount: null,
    currency: null,
    note: 'Fiyat için iletişime geçin',
    desc: 'Sınırsız bilgisayar',
    features: ['Tüm modüller dahil', 'Süresiz güncelleme', '7/24 destek', 'E-Fatura + API', 'Özel eğitim'],
    featured: false,
    cta: 'İletişime Geç',
    href: 'tel:+905321667697',
    variant: 'ghost' as const,
    free: false,
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

function renderCell(value: boolean | string) {
  if (typeof value === 'boolean') {
    return value ? <span className="pr-table-yes">Dahil</span> : <span className="pr-dash">—</span>;
  }
  return <span className="pr-table-val">{value}</span>;
}

function PriceAmount({ amount }: { amount: string }) {
  const parts = amount.split('.');
  if (parts.length !== 2) {
    return (
      <span className="pr-amount">
        <span className="pr-amount-part">{amount}</span>
      </span>
    );
  }

  return (
    <span className="pr-amount">
      <span className="pr-amount-part">{parts[0]}</span>
      <span className="pr-amount-sep" aria-hidden="true">
        .
      </span>
      <span className="pr-amount-part">{parts[1]}</span>
    </span>
  );
}

export default function PricingSection() {
  return (
    <section id="fiyatlandirma" className="pr-section">
      <div className="pr-inner">
        <div className="pr-header">
          <p className="pr-eyebrow">Fiyatlandırma</p>
          <h2 className="pr-title">Tek seferlik ödeme, ömür boyu kullanım</h2>
          <p className="pr-subtitle">
            Önce ücretsiz Windows sürümünü indirip deneyin. DijitalERP yerel bilgisayarınızda çalışır; bulut
            aboneliği veya kullanıcı başı ücret yoktur. Lisans tek seferliktir, güncelleme ve destek süresi pakete
            göre belirlenir.
          </p>
        </div>

        <div className="pr-value-note" role="note">
          <p>
            <strong>Şeffaf model:</strong> Fiyat avantajı modül kısıtlamasından değil; sunucusuz ve aboneliksiz
            mimariden gelir. Destek ve güncelleme kapsamı paketle netleştirilir.
          </p>
        </div>

        <div className="pr-cards">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`pr-card${plan.featured ? ' pr-card-featured' : ''}`}
            >
              <div className="pr-card-badge-slot" aria-hidden={!plan.featured}>
                {plan.featured ? (
                  <p className="pr-card-tag">Önerilen paket</p>
                ) : (
                  <span className="pr-card-tag-placeholder" />
                )}
              </div>
              <div className="pr-card-top">
                <h3 className="pr-card-name">{plan.name}</h3>
                <p className="pr-card-desc">{plan.desc}</p>
              </div>

              <div className="pr-card-price">
                {plan.amount ? (
                  <p className="pr-amount-row">
                    <PriceAmount amount={plan.amount} />
                    <span className="pr-currency">{plan.currency}</span>
                  </p>
                ) : (
                  <p className="pr-amount-custom">Teklif alın</p>
                )}
                <p className="pr-note">{plan.note}</p>
              </div>

              <ul className="pr-features">
                {plan.features.map((feature) => (
                  <li key={feature} className="pr-feature-item">
                    <span className="pr-item-marker" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                {...(plan.free ? { download: DESKTOP_ARCHIVE_FILENAME } : {})}
                className={`pr-btn pr-btn-${plan.variant}`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="pr-table-wrap">
          <div className="pr-table-header-row">
            <p className="pr-table-eyebrow">Karşılaştırma</p>
            <h3 className="pr-table-title">Hangi pakette ne var?</h3>
            <p className="pr-table-scroll-hint">
              Mobilde tabloyu parmağınızla sola-sağa kaydırarak tüm paketleri görebilirsiniz.
            </p>
          </div>

          <div className="pr-table-scroll" tabIndex={0} aria-label="Paket karşılaştırma tablosu, yatay kaydırılabilir">
            <div className="pr-table">
              <div className="pr-table-head">
                <div className="pr-table-cell pr-table-cell-feature">Özellik</div>
                <div className="pr-table-cell">Başlangıç</div>
                <div className="pr-table-cell">Profesyonel</div>
                <div className="pr-table-cell">Kurumsal</div>
              </div>
              {comparisonRows.map((row, i) => (
                <div key={row.feature} className={`pr-table-row${i % 2 === 1 ? ' pr-table-row-alt' : ''}`}>
                  <div className="pr-table-cell pr-table-cell-feature">{row.feature}</div>
                  <div className="pr-table-cell">{renderCell(row.start)}</div>
                  <div className="pr-table-cell">{renderCell(row.pro)}</div>
                  <div className="pr-table-cell">{renderCell(row.corp)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
