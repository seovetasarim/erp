import { CheckIcon } from '@/svg';
import { ArrowNine } from '@/svg/ArrowIcons';
import Link from 'next/link';

type Cell = boolean | string;

type ComparePlan = {
    name: string;
    price: string;
    popular?: boolean;
    cta: string;
    href: string;
    values: Cell[];
};

const features = [
    'Firma & Cari',
    'Ürün & Stok',
    'Kasa',
    'Faturalar',
    'Raporlar & Dashboard',
    'Kargo & E-Fatura',
    'Kullanıcı sayısı',
    'Güncelleme süresi',
    'E-Fatura kurulum',
    'E-Fatura + API',
    'Destek',
    'Özel eğitim',
    'Offline çalışma',
    'Excel & yedekleme',
];

const plans: ComparePlan[] = [
    {
        name: 'Başlangıç',
        price: '49.900₺',
        cta: 'Satın Al',
        href: '/iletisim',
        values: [true, true, true, true, true, false, '1', '1 yıl', false, false, 'E-posta', false, true, true],
    },
    {
        name: 'Profesyonel',
        price: '79.900₺',
        popular: true,
        cta: 'Satın Al',
        href: '/iletisim',
        values: [true, true, true, true, true, true, '3', '2 yıl', true, false, 'Öncelikli', false, true, true],
    },
    {
        name: 'Kurumsal',
        price: 'Teklif',
        cta: 'Teklif Al',
        href: 'mailto:info@dijitalerp.com.tr',
        values: [true, true, true, true, true, true, 'Sınırsız', 'Süresiz', true, true, '7/24', true, true, true],
    },
];

const renderValue = (value: Cell) => {
    if (typeof value === 'boolean') {
        return value ? (
            <span className="it-pricing-tower-check">
                <CheckIcon color="currentColor" />
            </span>
        ) : (
            <span className="it-pricing-tower-dash">—</span>
        );
    }
    return <span className="it-pricing-tower-value">{value}</span>;
};

const ITSolutionPricingCompare = () => {
    return (
        <div className="it-pricing-compare-area pt-110 pb-110" style={{ backgroundColor: '#FDF7F4' }}>
            <div className="container container-1230">
                <div className="row justify-content-center mb-70">
                    <div className="col-xl-8 text-center">
                        <span className="tp-section-subtitle-platform platform-text-black mb-15 d-inline-block tp_fade_anim" data-delay=".3">
                            Karşılaştırma
                        </span>
                        <h3 className="tp-section-title-platform platform-text-black fs-84 tp-split-text tp-split-right">
                            Hangi pakette ne var?
                        </h3>
                    </div>
                </div>

                <div className="it-pricing-towers tp_fade_anim" data-delay=".4">
                    <div className="row g-4">
                        {plans.map((plan) => (
                            <div key={plan.name} className="col-lg-4">
                                <div className={`it-pricing-tower${plan.popular ? ' is-popular' : ''}`}>
                                    {plan.popular && <span className="it-pricing-tower-badge">Önerilen</span>}
                                    <div className="it-pricing-tower-head">
                                        <span>{plan.name}</span>
                                        <h4>{plan.price}</h4>
                                    </div>
                                    <ul className="it-pricing-tower-list">
                                        {features.map((feature, index) => (
                                            <li key={feature}>
                                                <em>{feature}</em>
                                                {renderValue(plan.values[index])}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        className="tp-btn-black-radius d-inline-flex align-items-center justify-content-between w-100 it-pricing-tower-btn"
                                        href={plan.href}
                                    >
                                        <span>
                                            <span className="text-1">{plan.cta}</span>
                                            <span className="text-2">{plan.cta}</span>
                                        </span>
                                        <i>
                                            <span>
                                                <ArrowNine />
                                                <ArrowNine />
                                            </span>
                                        </i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionPricingCompare;
