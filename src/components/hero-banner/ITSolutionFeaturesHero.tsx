import { CareerShape } from '@/svg/HeroShape';
import { DIJITAL_ERP_DOWNLOAD_FILENAME, DIJITAL_ERP_DOWNLOAD_HREF } from '@/constants/download';
import { ArrowNine } from '@/svg/ArrowIcons';
import Link from 'next/link';

const ITSolutionFeaturesHero = () => {
    return (
        <div className="it-features-hero-area p-relative" style={{ backgroundColor: '#FDF7F4' }}>
            <div className="it-features-hero-shape">
                <span><CareerShape /></span>
            </div>
            <div className="container container-1460">
                <div className="it-features-hero-ptb">
                    <div className="row align-items-end">
                        <div className="col-lg-7">
                            <div className="it-features-hero-title-box tp_fade_anim z-index-1" data-delay=".3">
                                <span className="tp-section-subtitle-platform platform-text-black mb-20 d-inline-block">
                                    Özellikler
                                </span>
                                <h1 className="tp-section-title-platform platform-text-black it-features-hero-title">
                                    Stoktan kasaya,<br />tek programda.
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="it-features-hero-text tp_fade_anim z-index-1" data-delay=".5">
                                <p>
                                    DijitalERP; offline stok takip, cari yönetim, fatura yazılımı,
                                    kasa ve raporlamayı bir araya getiren Windows tabanlı ücretsiz ERP çözümüdür.
                                </p>
                                <Link
                                    className="tp-btn-black-radius btn-blue-bg d-inline-flex align-items-center justify-content-between mt-30"
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionFeaturesHero;
