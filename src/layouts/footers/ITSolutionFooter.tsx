import footerShape from '../../../public/assets/img/home-11/footer/footer-shape-1.png';
import DijitalErpLogo from '@/components/brand/DijitalErpLogo';
import ProtectedDownloadLink from '@/components/download/ProtectedDownloadLink';
import { FooterSocialIcons } from './subComponents/FooterSocialIcons';
import { getCurrentYear } from '@/utils/getCurrentYear';
import { ArrowSeven } from '@/svg/ArrowIcons';
import Image from 'next/image';
import Link from 'next/link';

const ITSolutionFooter = () => {
    return (
        <footer>
            {/* -- footer area start -- */}
            <div className="crp-footer-area it-footer-style crp-footer-bg p-relative pt-120 z-index-1">
                <div className="it-footer-shape">
                    <Image data-speed="1.1" src={footerShape} alt="footer-shape" />
                </div>
                <div className="container container-1350">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                            <div className="crp-footer-widget crp-footer-col-1 mb-90 tp_fade_anim" data-delay=".3">
                                <div className="crp-footer-logo mb-25">
                                    <DijitalErpLogo variant="light" />
                                </div>
                                <p>Offline Windows ERP: stok, cari, <br /> fatura ve kasa tek programda.</p>
                                {/* footer social icons */}
                                <FooterSocialIcons className="crp-footer-social" />
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3">
                            <div className="crp-footer-widget crp-footer-col-2 mb-90 tp_fade_anim" data-delay=".5">
                                <h4 className="crp-footer-widget-title">Şirket</h4>
                                <div className="crp-footer-widget-menu">
                                    <ul>
                                        <li><Link className="tp-line-white cream-2" href="/">Ana Sayfa</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/ozellikler">Özellikler</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/moduller">Modüller</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/fiyatlandirma">Fiyatlandırma</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/blog">Blog</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/iletisim">İletişim</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3">
                            <div className="crp-footer-widget crp-footer-col-legal mb-90 tp_fade_anim" data-delay=".55">
                                <h4 className="crp-footer-widget-title">Yasal</h4>
                                <div className="crp-footer-widget-menu">
                                    <ul>
                                        <li><Link className="tp-line-white cream-2" href="/hizmet-sartlari">Hizmet Şartları</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/gizlilik-politikasi">Gizlilik Politikası</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/sss">SSS</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3">
                            <div className="crp-footer-widget crp-footer-col-3 mb-90 tp_fade_anim" data-delay=".5">
                                <h4 className="crp-footer-widget-title">ERP Modülleri</h4>
                                <div className="crp-footer-widget-menu">
                                    <ul>
                                        <li><Link className="tp-line-white cream-2" href="/moduller">Offline Stok Takip</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/moduller">Cari Yönetim</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/moduller">Fatura Yazılımı</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/moduller">Kasa Modülü</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/moduller">Raporlama</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3">
                            <div className="crp-footer-widget crp-footer-col-4 mb-90 tp_fade_anim" data-delay=".7">
                                <div className="crp-footer-widget-info mb-40">
                                    <h4 className="crp-footer-widget-title">Demo</h4>
                                    <ProtectedDownloadLink className="tp-line-white cream-2">
                                        Ücretsiz ERP indirme ve
                                        demo için bizi arayın
                                    </ProtectedDownloadLink>
                                </div>
                                <div className="crp-footer-widget-info">
                                    <h4 className="crp-footer-widget-title">Bizi Arayın</h4>
                                    <div className="crp-footer-widget-contact">
                                        <Link className="tp-line-white cream-2" href="mailto:info@dijitalerp.com.tr">info@dijitalerp.com.tr</Link>
                                    </div>
                                    <div className="crp-footer-widget-contact">
                                        <Link className="tel tp-line-white cream-2 d-inline-block" href="tel:+902166061746">0216 606 17 46</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="colx-l-12">
                            <div className="crp-footer-big-text-wrap tp_fade_anim" data-delay=".3">
                                <ProtectedDownloadLink
                                    className="crp-footer-big-text it-footer-cta text-center"
                                >
                                    <span>
                                        <span className="text-1">ÜCRETSİZ İNDİR</span>
                                        <span className="text-2">ÜCRETSİZ İNDİR</span>
                                    </span>
                                    <i>
                                        <ArrowSeven color="currentcolor" />
                                        <ArrowSeven color="currentcolor" />
                                    </i>
                                </ProtectedDownloadLink>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="crp-copyright-text text-start pt-40 pb-50">
                                <p>© {getCurrentYear()} | Tüm hakları saklıdır — <Link href="/"><span>DijitalERP</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -- footer area end -- */}

        </footer>
    );
};

export default ITSolutionFooter;
