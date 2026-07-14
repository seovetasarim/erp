import heroShot1 from '../../../public/assets/img/home-11/project/hero-shot-1.jpg';
import heroShot2 from '../../../public/assets/img/home-11/project/hero-shot-2.jpg';
import heroShot3 from '../../../public/assets/img/home-11/project/hero-shot-3.jpg';
import { DIJITAL_ERP_DOWNLOAD_FILENAME, DIJITAL_ERP_DOWNLOAD_HREF } from '@/constants/download';
import { ArrowNine } from '@/svg/ArrowIcons';
import Image from 'next/image';
import Link from 'next/link';

const floatingTags = ['Stok', 'Cari', 'Fatura', 'Kasa', 'Rapor'];

const shots = [
    { src: heroShot1, alt: 'Stok modülü', label: 'Stok', className: 'it-modules-hero-shot-1' },
    { src: heroShot2, alt: 'Cari modülü', label: 'Cari', className: 'it-modules-hero-shot-2' },
    { src: heroShot3, alt: 'Fatura modülü', label: 'Fatura', className: 'it-modules-hero-shot-3' },
];

const ITSolutionModulesHero = () => {
    return (
        <div className="it-modules-hero-area p-relative">
            <div className="container container-1630">
                <div className="it-modules-hero-panel">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="it-modules-hero-content tp_fade_anim" data-delay=".3">
                                <div className="it-modules-hero-breadcrumb">
                                    <Link href="/">Ana Sayfa</Link>
                                    <span>/</span>
                                    <em>Modüller</em>
                                </div>
                                <span className="it-modules-hero-eyebrow">ERP Katalog</span>
                                <h1 className="it-modules-hero-title">
                                    İşini modül<br />
                                    modül büyüt.
                                </h1>
                                <p className="it-modules-hero-text">
                                    Offline stok, cari, fatura, kasa ve raporlama — her biri kendi başına güçlü,
                                    birlikte tam bir KOBİ ERP.
                                </p>
                                <div className="it-modules-hero-actions d-flex flex-wrap align-items-center">
                                    <Link
                                        className="tp-btn-black-radius it-modules-hero-btn d-inline-flex align-items-center justify-content-between"
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
                                    <Link className="it-modules-hero-link" href="/ozellikler">
                                        Özelliklere bak
                                    </Link>
                                </div>
                                <div className="it-modules-hero-tags">
                                    {floatingTags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="it-modules-hero-visual tp_fade_anim" data-delay=".5">
                                {shots.map((shot) => (
                                    <div key={shot.label} className={`it-modules-hero-shot ${shot.className}`}>
                                        <Image
                                            src={shot.src}
                                            alt={shot.alt}
                                            width={1400}
                                            height={875}
                                            quality={95}
                                            priority
                                            sizes="(max-width: 991px) 90vw, 42vw"
                                        />
                                        <span>{shot.label}</span>
                                    </div>
                                ))}
                                <div className="it-modules-hero-badge">
                                    <strong>6</strong>
                                    <span>Modül</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionModulesHero;
