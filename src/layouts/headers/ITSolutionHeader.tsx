"use client"
import ITSolutionOffCanvas from '@/components/offcanvas/ITSolutionOffCanvas';
import DijitalErpLogo from '@/components/brand/DijitalErpLogo';
import useStickyHeader from '@/hooks/useStickyHeader';
import useGlobalContext from '@/hooks/useContext';
import { DIJITAL_ERP_DOWNLOAD_FILENAME, DIJITAL_ERP_DOWNLOAD_HREF } from '@/constants/download';
import { ArrowTen, SearchIcon } from '@/svg';
import { useState } from 'react';
import Link from 'next/link';

const ITSolutionHeader = () => {
    const [openOffCanvas, setOpenOffCanvas] = useState(false);
    const { toggleSearch } = useGlobalContext();
    const isSticky = useStickyHeader(20);

    return (
        <>
            <header>

                {/* -- header area start -- */}
                <div id="header-sticky" className={`tp-header-10-area tp-header-11-style tp-header-blur 
                    sticky-white-bg header-transparent ${isSticky ? 'header-sticky' : ''}`}>
                    <div className="container container-1630">
                        <div className="tp-header-10-wrapper mt-30">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-4 col-md-6 col-5">
                                    <div className="tp-header-10-logo">
                                        <DijitalErpLogo variant="dark" />
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-8 col-md-6 col-7">
                                    <div className="tp-header-10-box d-flex align-items-center justify-content-end justify-content-xl-between">
                                        <div className={`tp-header-menu tp-header-10-menu tp-header-dropdown dropdown-white-bg d-none d-xl-block`}>
                                            <nav className="tp-mobile-menu-active">
                                                <ul>
                                                    <li><Link href="/">Ana Sayfa</Link></li>
                                                    <li><Link href="/ozellikler">Özellikler</Link></li>
                                                    <li><Link href="/moduller">Modüller</Link></li>
                                                    <li><Link href="/fiyatlandirma">Fiyatlandırma</Link></li>
                                                    <li><Link href="/sss">SSS</Link></li>
                                                    <li><Link href="/iletisim">İletişim</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="tp-header-10-right d-flex align-items-center">
                                            <div className="tp-header-11-search-box d-none d-md-block">
                                                <button onClick={toggleSearch} className="tp-header-11-search tp-search-open-btn">
                                                    <span>
                                                        <SearchIcon strokeColor="#21212D" width='18' height='18' />
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="tp-header-11-btn-box d-none d-md-block ml-20">
                                                <Link className="tp-btn-black-radius d-flex align-items-center justify-content-between" href={DIJITAL_ERP_DOWNLOAD_HREF} download={DIJITAL_ERP_DOWNLOAD_FILENAME}>
                                                    <span>
                                                        <span className="text-1">Ücretsiz İndir</span>
                                                        <span className="text-2">Ücretsiz İndir</span>
                                                    </span>
                                                    <i>
                                                        <span>
                                                            <ArrowTen strokeColor="#21212D" />
                                                            <ArrowTen strokeColor="#21212D" />
                                                        </span>
                                                    </i>
                                                </Link>
                                            </div>
                                            <div className="tp-header-10-offcanvas ml-15">
                                                <div className="tp-header-bar">
                                                    <button onClick={() => setOpenOffCanvas(true)} className="tp-offcanvas-open-btn">
                                                        <i></i>
                                                        <i></i>
                                                        <i></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -- header area end -- */}
            </header>

            {/* off canvas */}
            <ITSolutionOffCanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
            {/* off canvas */}
        </>
    );
};

export default ITSolutionHeader;
