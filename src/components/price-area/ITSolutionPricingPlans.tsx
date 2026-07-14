import { CheckIconTwo } from '@/svg';
import { DIJITAL_ERP_DOWNLOAD_FILENAME, DIJITAL_ERP_DOWNLOAD_HREF } from '@/constants/download';
import { ArrowNine } from '@/svg/ArrowIcons';
import Link from 'next/link';

type PricingPlan = {
    id: number;
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    href: string;
    popular?: boolean;
};

const plans: PricingPlan[] = [
    {
        id: 1,
        name: 'Ücretsiz',
        price: '0₺',
        period: 'Süresiz kullanım',
        description: 'Tek bilgisayar · Temel modüller',
        features: [
            'Ana modüller dahil',
            'Tamamen offline',
            'Veriler bilgisayarınızda',
            'Topluluk desteği',
        ],
        cta: 'Ücretsiz İndir',
        href: DIJITAL_ERP_DOWNLOAD_HREF,
    },
    {
        id: 2,
        name: 'Başlangıç',
        price: '49.900₺',
        period: 'Tek seferlik ödeme',
        description: '1 bilgisayar için lisans',
        features: [
            'Tüm modüller dahil',
            '1 yıl güncelleme',
            'E-posta destek',
            'Offline Windows ERP',
        ],
        cta: 'Satın Al',
        href: '/iletisim',
    },
    {
        id: 3,
        name: 'Profesyonel',
        price: '79.900₺',
        period: 'Tek seferlik ödeme',
        description: '3 bilgisayar için lisans',
        features: [
            'Tüm modüller dahil',
            '2 yıl güncelleme',
            'Öncelikli destek',
            'E-Fatura kurulum',
        ],
        cta: 'Satın Al',
        href: '/iletisim',
        popular: true,
    },
    {
        id: 4,
        name: 'Kurumsal',
        price: 'Teklif',
        period: 'İletişime geçin',
        description: 'Sınırsız bilgisayar',
        features: [
            'Tüm modüller dahil',
            'Süresiz güncelleme',
            '7/24 destek',
            'E-Fatura + API + eğitim',
        ],
        cta: 'Teklif Al',
        href: 'mailto:info@dijitalerp.com.tr',
    },
];

const ITSolutionPricingPlans = () => {
    return (
        <div className="it-pricing-plans-area pt-110 pb-90" id="paketler" style={{ backgroundColor: '#FFEEE6' }}>
            <div className="container container-1230">
                <div className="row mb-70">
                    <div className="col-xl-6">
                        <span className="tp-section-subtitle-platform platform-text-black mb-15 d-inline-block tp_fade_anim" data-delay=".3">
                            Paketler
                        </span>
                        <h3 className="tp-section-title-platform platform-text-black fs-84 tp-split-text tp-split-right">
                            İşinize göre lisans
                        </h3>
                    </div>
                    <div className="col-xl-5 offset-xl-1 d-flex align-items-end">
                        <p className="it-pricing-plans-intro tp_fade_anim" data-delay=".5">
                            Ücretsiz sürümle başlayın. Büyüdükçe tek seferlik lisansla tüm modüllere
                            ve desteğe geçin — aylık abonelik yok.
                        </p>
                    </div>
                </div>

                <div className="it-pricing-rows">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`it-pricing-row tp_fade_anim${plan.popular ? ' is-popular' : ''}`}
                            data-delay={`.${3 + index}`}
                        >
                            {plan.popular && <span className="it-pricing-row-badge">Önerilen</span>}
                            <div className="row align-items-center">
                                <div className="col-lg-3">
                                    <div className="it-pricing-row-meta">
                                        <span className="it-pricing-row-num">{String(index + 1).padStart(2, '0')}</span>
                                        <div>
                                            <h4 className="it-pricing-row-name">{plan.name}</h4>
                                            <p>{plan.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <ul className="it-pricing-row-features">
                                        {plan.features.map((feature) => (
                                            <li key={feature}>
                                                <span><CheckIconTwo /></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-lg-5">
                                    <div className="it-pricing-row-action d-flex align-items-center justify-content-lg-end flex-wrap">
                                        <div className="it-pricing-row-price">
                                            <strong>{plan.price}</strong>
                                            <em>{plan.period}</em>
                                        </div>
                                        <Link
                                            className="tp-btn-black-radius d-inline-flex align-items-center justify-content-between"
                                            href={plan.href}
                                            {...(plan.href === DIJITAL_ERP_DOWNLOAD_HREF
                                                ? { download: DIJITAL_ERP_DOWNLOAD_FILENAME }
                                                : {})}
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ITSolutionPricingPlans;
