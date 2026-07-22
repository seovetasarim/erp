"use client"
import shape from '../../../public/assets/img/about-us/about-us-4/about-us-4-shape-1.png';
import { ArrowTwenty, ArrowTwentySeven } from '@/svg/ArrowIcons';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { CareerShapeTwo } from '@/svg/HeroShape';
import { SITE } from '@/constants/seo';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

gsap.registerPlugin(ScrollToPlugin);

const ITSolutionContactHero = () => {
    return (
        <div className="tp-contact-us-ptb contact-career-shape p-relative" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="tp-career-shape-1">
                <span><CareerShapeTwo /></span>
            </div>
            <div className="container container-1230">
                <div className="ar-about-us-4-hero-ptb">
                    <div className="it-contact-breadcrumb tp_fade_anim" data-delay=".2">
                        <Link href="/">Ana Sayfa</Link>
                        <span>/</span>
                        <em>İletişim</em>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="tp-contact-us-heading tp_fade_anim" data-delay=".3">
                                <div className="ar-about-us-4-title-box d-flex align-items-center mb-20">
                                    <span className="tp-section-subtitle pre tp_fade_anim">İletişim</span>
                                    <div className="ar-about-us-4-icon">
                                        <ArrowTwenty />
                                    </div>
                                </div>
                                <h3 className="tp-career-title pb-30">
                                    İşletmeni büyütmeye{' '}
                                    <span className="shape-1">
                                        <Image src={shape} alt="" />
                                    </span>
                                    <br />
                                    buradan başla.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-8">
                            <div className="tp-faq-text tp_fade_anim">
                                <p className="m-0">
                                    Demo, lisans, kurulum veya destek için yazın.
                                    <br />
                                    Mesajlarınıza genelde aynı gün dönüş yapıyoruz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-contact-us-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tp-contact-us-text smooth">
                                <Link
                                    href="#iletisim-form"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        gsap.to(window, { duration: 1, scrollTo: '#iletisim-form' });
                                    }}
                                >
                                    <p>
                                        <ArrowTwentySeven /> Formu doldur
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tp-contact-us-text d-none d-md-block text-md-end">
                                <p>{SITE.phoneDisplay} · WhatsApp {SITE.whatsappDisplay} · {SITE.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionContactHero;
