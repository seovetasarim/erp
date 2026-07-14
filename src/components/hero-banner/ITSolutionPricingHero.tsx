import { CareerShape } from '@/svg/HeroShape';
import { DIJITAL_ERP_DOWNLOAD_FILENAME, DIJITAL_ERP_DOWNLOAD_HREF } from '@/constants/download';
import { ArrowNine } from '@/svg/ArrowIcons';
import Link from 'next/link';

const ITSolutionPricingHero = () => {
    return (
        <div className="it-pricing-hero-area p-relative" style={{ backgroundColor: '#FDF7F4' }}>
            <div className="it-pricing-hero-shape">
                <span><CareerShape /></span>
            </div>
            <div className="container container-1460">
                <div className="it-pricing-hero-ptb">
                    <div className="it-pricing-hero-breadcrumb tp_fade_anim" data-delay=".2">
                        <Link href="/">Ana Sayfa</Link>
                        <span>/</span>
                        <em>Fiyatlandırma</em>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-lg-7">
                            <div className="it-pricing-hero-title-box tp_fade_anim z-index-1" data-delay=".3">
                                <span className="tp-section-subtitle-platform platform-text-black mb-20 d-inline-block">
                                    Fiyatlandırma
                                </span>
                                <h1 className="tp-section-title-platform platform-text-black it-pricing-hero-title">
                                    Tek seferlik ödeme.<br />
                                    Abonelik yok.
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="it-pricing-hero-text tp_fade_anim z-index-1" data-delay=".5">
                                <p>
                                    Önce ücretsiz Windows sürümünü deneyin. Lisans tek seferliktir;
                                    bulut aboneliği veya kullanıcı başı ücret yoktur.
                                </p>
                                <div className="it-pricing-hero-actions d-flex flex-wrap align-items-center">
                                    <Link
                                        className="tp-btn-black-radius btn-blue-bg d-inline-flex align-items-center justify-content-between"
                                        href={DIJITAL_ERP_DOWNLOAD_HREF}
                                        download={DIJITAL_ERP_DOWNLOAD_FILENAME}
                                    >
                                        <span>
                                            <span className="text-1">Ücretsiz İndir</span>
                                            <span className="text-2">Ücretsiz İndir</span>
                                        </span>
                                        <i>
                                            <span>
                                                <ArrowNine />
                                                <ArrowNine />
                                            </span>
                                        </i>
                                    </Link>
                                    <Link className="it-pricing-hero-link" href="#paketler">
                                        Paketlere bak
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container container-1230">
                <div className="it-pricing-hero-strip tp_fade_anim" data-delay=".6">
                    <div className="row gx-0">
                        <div className="col-6 col-md-3">
                            <div className="it-pricing-hero-strip-item">
                                <strong>0₺</strong>
                                <span>Başlangıç ücreti</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="it-pricing-hero-strip-item">
                                <strong>Tek sefer</strong>
                                <span>Ödeme modeli</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="it-pricing-hero-strip-item">
                                <strong>Offline</strong>
                                <span>Sunucu gerekmez</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="it-pricing-hero-strip-item">
                                <strong>Ömür boyu</strong>
                                <span>Kullanım hakkı</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionPricingHero;
