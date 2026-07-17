"use client"
import DijitalErpLogo from '@/components/brand/DijitalErpLogo';
import ProtectedDownloadLink from '@/components/download/ProtectedDownloadLink';
import { ArrowNine } from '@/svg/ArrowIcons';
import { CrossIcon, CrossIconTwo } from '@/svg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { useAuthUser } from '@/hooks/useAuthUser';

type IProps = {
    openOffcanvas: boolean;
    setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

const baseNavLinks = [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Özellikler', href: '/ozellikler' },
    { title: 'Modüller', href: '/moduller' },
    { title: 'Fiyatlandırma', href: '/fiyatlandirma' },
    { title: 'Blog', href: '/blog' },
    { title: 'SSS', href: '/sss' },
    { title: 'İletişim', href: '/iletisim' },
];

const moduleLinks = [
    { title: 'Stok', href: '/moduller' },
    { title: 'Cari', href: '/moduller' },
    { title: 'Fatura', href: '/moduller' },
    { title: 'Kasa', href: '/moduller' },
];

const ITSolutionOffCanvas: React.FC<IProps> = ({ openOffcanvas, setOpenOffcanvas }) => {
    const pathname = usePathname();
    const { isLoggedIn } = useAuthUser();
    const close = () => setOpenOffcanvas(false);

    const navLinks = useMemo(() => {
        if (isLoggedIn) {
            return [...baseNavLinks, { title: 'Hesabım', href: '/hesabim' }];
        }
        return [
            ...baseNavLinks,
            { title: 'Giriş Yap', href: '/giris' },
            { title: 'Kayıt Ol', href: '/kayit' },
        ];
    }, [isLoggedIn]);

    return (
        <>
            <div className={`it-offcanvas-area p-relative ${openOffcanvas ? 'opened' : ''}`}>
                <div className="it-offcanvas-bg is-left"></div>
                <div className="it-offcanvas-bg is-right d-none d-md-block"></div>

                <div className="it-offcanvas-wrapper">
                    <div className="it-offcanvas-left">
                        <div className="it-offcanvas-left-top d-flex justify-content-between align-items-center">
                            <div className="it-offcanvas-logo">
                                <DijitalErpLogo variant="light" href="/" />
                            </div>
                            <button
                                type="button"
                                onClick={close}
                                className="it-offcanvas-close d-md-none"
                                aria-label="Kapat"
                            >
                                <span>Kapat</span>
                                <CrossIcon />
                            </button>
                        </div>

                        <p className="it-offcanvas-intro">
                            Offline Windows ERP — stok, cari, fatura ve kasa tek programda.
                        </p>

                        <nav className="it-offcanvas-nav" aria-label="Mobil menü">
                            <ul>
                                {navLinks.map((item, index) => {
                                    const active =
                                        item.href === '/'
                                            ? pathname === '/'
                                            : pathname?.startsWith(item.href);
                                    return (
                                        <li key={item.href} className={active ? 'is-active' : ''}>
                                            <Link href={item.href} onClick={close}>
                                                <em>{String(index + 1).padStart(2, '0')}</em>
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        <div className="it-offcanvas-modules">
                            <span className="it-offcanvas-label">Modüller</span>
                            <div className="it-offcanvas-module-tags">
                                {moduleLinks.map((item) => (
                                    <Link key={item.title} href={item.href} onClick={close}>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="it-offcanvas-cta">
                            <ProtectedDownloadLink
                                className="tp-btn-black-radius d-inline-flex align-items-center justify-content-between it-offcanvas-cta-btn"
                                onClick={close}
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
                            </ProtectedDownloadLink>
                        </div>

                        <div className="it-offcanvas-mobile-info d-md-none">
                            <span className="it-offcanvas-label">İletişim</span>
                            <Link href="tel:+902166061746">0216 606 17 46</Link>
                            <Link href="mailto:info@dijitalerp.com.tr">info@dijitalerp.com.tr</Link>
                            <Link href="https://wa.me/902166061746" target="_blank">WhatsApp</Link>
                        </div>
                    </div>

                    <div className="it-offcanvas-right d-none d-md-flex">
                        <button
                            type="button"
                            onClick={close}
                            className="it-offcanvas-close is-desktop"
                            aria-label="Kapat"
                        >
                            <span>Kapat</span>
                            <CrossIconTwo />
                        </button>

                        <div className="it-offcanvas-right-inner">
                            <span className="it-offcanvas-label">İletişim</span>
                            <h3 className="it-offcanvas-right-title">Hemen ulaş.</h3>

                            <div className="it-offcanvas-info">
                                <div className="it-offcanvas-info-item">
                                    <label>Telefon</label>
                                    <Link href="tel:+902166061746">0216 606 17 46</Link>
                                </div>
                                <div className="it-offcanvas-info-item">
                                    <label>E-posta</label>
                                    <Link href="mailto:info@dijitalerp.com.tr">info@dijitalerp.com.tr</Link>
                                </div>
                                <div className="it-offcanvas-info-item">
                                    <label>WhatsApp</label>
                                    <Link href="https://wa.me/902166061746" target="_blank">
                                        Mesaj gönder
                                    </Link>
                                </div>
                                <div className="it-offcanvas-info-item">
                                    <label>Sayfa</label>
                                    <Link href="/iletisim" onClick={close}>
                                        İletişim formu
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                onClick={close}
                className={`body-overlay ${openOffcanvas ? 'opened' : ''}`}
            ></div>
        </>
    );
};

export default ITSolutionOffCanvas;
