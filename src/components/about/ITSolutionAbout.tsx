import aboutShape1 from '../../../public/assets/img/home-11/about/about-shape-1.png';
import aboutShape2 from '../../../public/assets/img/home-11/about/about-shape-2.png';
import aboutMockup from '../../../public/assets/img/home-11/project/project-1.png';
import ProtectedDownloadLink from '@/components/download/ProtectedDownloadLink';
import { ArrowNine } from '@/svg/ArrowIcons';
import Image from 'next/image';
import Link from 'next/link';

const ITSolutionAbout = () => {
    return (
        <div className="it-about-area it-about-ptb pt-140 pb-90 p-relative">
            <div className="it-about-shape-wrap d-none d-xl-block">
                <Image data-speed="1.1" className="it-about-shape-1 d-none d-xxl-block" src={aboutShape1} alt="" aria-hidden="true" />
                <Image data-speed=".9" className="it-about-shape-2" src={aboutShape2} alt="" aria-hidden="true" />
            </div>
            <div className="container container-1230">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="it-about-title-box z-index-2">
                            <span className="tp-section-subtitle-platform platform-text-black mb-20 tp-split-text tp-split-right">Hakkımızda</span>
                            <h4 className="tp-section-title-platform platform-text-black fs-84 mb-30 tp-split-text tp-split-right">DijitalERP ile Offline ERP Başarısı</h4>
                            <div className="tp_text_anim">
                                <p>
                                    Windows tabanlı ücretsiz ERP ile stok, cari yönetim, fatura yazılımı ve kasa işlemlerinizi internete bağlı olmadan güvenle yönetin
                                </p>
                            </div>
                            <div className="tp_fade_anim" data-fade-from="top" data-ease="bounce">
                                <ProtectedDownloadLink className="tp-btn-black-radius btn-blue-bg  d-inline-flex align-items-center justify-content-between mr-15">
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
                                </ProtectedDownloadLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 d-none d-xl-block">
                        <div className="it-about-single p-relative">
                            <Image
                                className="it-about-single-shot"
                                src={aboutMockup}
                                alt="DijitalERP offline ERP kontrol paneli"
                                priority
                            />
                            <div className="it-about-info-wrap">
                                <div className="it-about-info-item d-inline-flex align-items-center">
                                    <i><span>15</span>+</i>
                                    <p>Yıllık <br /> Tecrübe</p>
                                </div>
                                <div className="it-about-info-item d-inline-flex align-items-center" style={{ backgroundColor: "#DACBFF" }}>
                                    <i><span>61</span>+</i>
                                    <p>Mutlu <br /> İşletme</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionAbout;
