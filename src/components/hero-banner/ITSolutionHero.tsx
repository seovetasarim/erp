import heroShapeThree from '../../../public/assets/img/home-11/hero/hero-shape-2.png';
import heroShapeTwo from '../../../public/assets/img/home-11/hero/hero-shape-4.png';
import heroShapeFour from '../../../public/assets/img/home-11/hero/hero-shape-3.png';
import heroShape from '../../../public/assets/img/home-11/hero/hero-shape-1.png';
import heroApp from '../../../public/assets/img/home-11/hero/hero-app.png';
import DownloadCounter from '@/components/download/DownloadCounter';
import { DIJITAL_ERP_DOWNLOAD_FILENAME, DIJITAL_ERP_DOWNLOAD_HREF } from '@/constants/download';
import { EmailIconThree, HeroShape } from '@/svg';
import { ArrowNine } from '@/svg/ArrowIcons';
import Image from 'next/image';
import Link from 'next/link';

const ITSolutionHero = () => {
    return (
        <div className="it-hero-area p-relative fix">
            <div className="it-hero-shape-wrap">
                <span className="it-hero-shape-1">
                    <HeroShape />
                </span>
                <Image style={{ width: "auto", height: "auto" }} priority className="it-hero-shape-2" src={heroShapeTwo} alt="" aria-hidden="true" />
            </div>
            <div className="container container-1630">
                <div className="row align-items-end">
                    <div className="col-xl-6">
                        <div className="it-hero-content it-hero-ptb">
                            <span className="it-hero-subtitle tp_fade_anim" data-delay=".3">Ücretsiz Offline ERP Programı</span>
                            <h1 className="it-hero-title tp_fade_anim" data-delay=".5">
                                Stok &
                                <span>{" "}<Image className="img-1" src={heroShape} alt="" aria-hidden="true" /></span><br />
                                Cari Yönetim <br />
                                <span><Image className="img-2" src={heroShapeThree} alt="" aria-hidden="true" /></span>{" "}
                                Fatura Yazılımı.
                            </h1>
                            <div className="tp_fade_anim" data-delay=".7">
                                <p>Windows masaüstü ERP: offline stok takip, cari, kasa ve barkod tek programda</p>
                            </div>
                            <div className="it-hero-btn-box d-flex align-items-center flex-wrap">
                                <div className="tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                    <Link className="tp-btn-black-radius btn-blue-bg  d-inline-flex align-items-center justify-content-between mr-15" href={DIJITAL_ERP_DOWNLOAD_HREF} download={DIJITAL_ERP_DOWNLOAD_FILENAME}>
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
                                <div className="tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
                                    <Link className="tp-btn-black-radius btn-blue-bg btn-border d-inline-flex align-items-center justify-content-between" href="/fiyatlandirma">
                                        <span>
                                            <span className="text-1">Fiyatlandırma</span>
                                            <span className="text-2">Fiyatlandırma</span>
                                        </span>
                                        <i>
                                            <span>
                                                <EmailIconThree />
                                                <EmailIconThree />
                                            </span>
                                        </i>
                                    </Link>
                                </div>
                            </div>
                            <DownloadCounter />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="it-hero-thumb p-relative mb-35">
                            <div className="tp_fade_anim it-hero-app-wrap" data-delay=".5" data-fade-from="right">
                                <Image
                                    className="it-hero-app-shot"
                                    src={heroApp}
                                    alt="DijitalERP offline ERP kontrol paneli — stok, cari ve kasa ekranı"
                                    width={1440}
                                    height={900}
                                    priority
                                    data-speed=".9"
                                />
                            </div>
                            <div className="inner-img tp_fade_anim" data-delay=".7" data-fade-from="top" data-speed="1.1">
                                <Image style={{ marginLeft: "-37px", marginBottom: "-78px", maxWidth: "inherit" }} src={heroShapeFour} alt="" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionHero;
