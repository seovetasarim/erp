'use client';

import { Menu, X, PhoneCall, ChevronDown, ChevronRight, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DESKTOP_ARCHIVE_FILENAME, DESKTOP_ARCHIVE_HREF } from '../download';

const navItems = [
  { href: '/', label: 'Ana Sayfa', title: 'DijitalERP Ana Sayfa' },
  { href: '/#ozellikler', label: 'Özellikler', title: 'DijitalERP Özellikler' },
  { href: '/fiyatlandirma', label: 'Fiyatlandırma', title: 'DijitalERP Fiyatlandırma' },
  { href: '/sss', label: 'SSS', title: 'Sık Sorulan Sorular' },
  { href: '/iletisim', label: 'İletişim', title: 'DijitalERP İletişim' },
];

const urunLinks = [
  { label: 'Ücretsiz İndir (Windows)', href: DESKTOP_ARCHIVE_HREF },
  { label: 'Özellikler', href: '/#ozellikler' },
  { label: 'Fiyatlandırma', href: '/fiyatlandirma' },
  { label: 'SSS', href: '/sss' },
  { label: 'Satın Al', href: '/fiyatlandirma' },
];

const modulLinks = [
  { label: 'Stok Takip', href: '/#ozellikler' },
  { label: 'Cari Yönetim', href: '/#ozellikler' },
  { label: 'Faturalar', href: '/#ozellikler' },
  { label: 'Kasa', href: '/#ozellikler' },
  { label: 'E-Fatura', href: '/#ozellikler' },
  { label: 'Raporlar', href: '/#ozellikler' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState<'menu' | 'urun' | 'moduller' | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setAccordionOpen(null);
  };

  const toggleAccordion = (key: 'menu' | 'urun' | 'moduller') => {
    setAccordionOpen((prev) => (prev === key ? null : key));
  };

  const navLinkClass =
    'text-sm font-extrabold tracking-wide text-slate-600 underline decoration-2 underline-offset-8 decoration-transparent transition-colors hover:text-slate-900 hover:decoration-blue-600';

  return (
    <header
      className="site-header anim-header header-white pointer-events-none fixed left-0 right-0 top-0 z-[9999] px-4 pt-3 sm:px-6 sm:pt-4"
      role="banner"
      style={{ background: 'transparent', borderBottom: 'none', backdropFilter: 'none' }}
    >
      <div className="pointer-events-auto mx-auto max-w-7xl">
        {/* Menü POS tarzı yüzen kart — renkler DijitalERP (mavi vurgu, koyu slate) */}
        <div className="flex items-center justify-between gap-2 rounded-2xl border border-slate-200/90 bg-[#f7f7f4]/[0.97] px-4 py-3 text-slate-900 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:gap-3 sm:px-6 sm:py-3.5">
          <a
            href="/"
            className="flex min-w-0 shrink-0 items-center gap-2"
            onClick={closeMenu}
            aria-label="DijitalERP - Ana Sayfaya git"
          >
            <img src="/logo.png" alt="DijitalERP" className="h-7 w-auto object-contain md:h-8 lg:h-9" />
          </a>

          <nav className="hidden flex-1 justify-center lg:flex" aria-label="Ana navigasyon">
            <ul className="flex list-none flex-wrap items-center justify-center gap-6 xl:gap-9">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} title={item.title} onClick={closeMenu} className={navLinkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="tel:+905321667697"
              title="DijitalERP iletişim: 0532 166 76 97"
              className="hidden items-center gap-2 rounded-[10px] border border-slate-200 bg-white px-3 py-2 text-sm font-extrabold text-slate-800 transition-colors hover:border-slate-300 hover:bg-slate-50 lg:inline-flex"
            >
              <PhoneCall size={17} strokeWidth={2} aria-hidden />
              <span className="hidden xl:inline">0532 166 76 97</span>
              <span className="xl:hidden">Ara</span>
            </a>
            <a
              href={DESKTOP_ARCHIVE_HREF}
              className="hidden items-center gap-2 rounded-[10px] bg-gradient-to-br from-blue-600 to-blue-700 px-3 py-2.5 text-sm font-black text-white shadow-[0_4px_14px_rgba(37,99,235,0.38)] transition-all hover:shadow-[0_6px_20px_rgba(37,99,235,0.48)] sm:px-4 md:inline-flex"
              title="DijitalERP paketini ücretsiz indir (ZIP — çıkarıp içindeki kurulumu çalıştırın)"
              download={DESKTOP_ARCHIVE_FILENAME}
            >
              <Download size={17} strokeWidth={2.5} aria-hidden />
              <span className="max-sm:hidden">Ücretsiz İndir</span>
              <span className="sm:hidden">İndir</span>
            </a>
            <button
              type="button"
              className="flex rounded-[10px] p-2 text-slate-700 hover:bg-slate-100 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
            </button>
          </div>
        </div>
      </div>

      {mounted &&
        createPortal(
          <div
            className={`site-nav-mobile ${menuOpen ? 'open' : ''}`}
            role="dialog"
            aria-label="Mobil menü"
            aria-modal="true"
            aria-hidden={!menuOpen}
          >
            <div className="site-nav-mobile-header">
              <a href="/" className="site-logo" onClick={closeMenu}>
                <img src="/logo.png" alt="DijitalERP" className="site-logo-img" />
              </a>
              <button type="button" className="site-nav-mobile-close" onClick={closeMenu} aria-label="Menüyü kapat">
                <X size={22} />
              </button>
            </div>
            <div className="site-nav-mobile-inner">
              <div className="site-nav-mobile-accordion">
                <button type="button" onClick={() => toggleAccordion('menu')} className="site-nav-mobile-accordion-btn">
                  <span>Menü</span>
                  <ChevronDown
                    className={`site-nav-mobile-accordion-chevron ${accordionOpen === 'menu' ? 'open' : ''}`}
                    size={20}
                  />
                </button>
                {accordionOpen === 'menu' && (
                  <ul className="site-nav-mobile-accordion-list">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <a href={item.href} title={item.title} onClick={closeMenu}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="site-nav-mobile-accordion">
                <button type="button" onClick={() => toggleAccordion('urun')} className="site-nav-mobile-accordion-btn">
                  <span>Ürün</span>
                  <ChevronDown
                    className={`site-nav-mobile-accordion-chevron ${accordionOpen === 'urun' ? 'open' : ''}`}
                    size={20}
                  />
                </button>
                {accordionOpen === 'urun' && (
                  <ul className="site-nav-mobile-accordion-list">
                    {urunLinks.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} onClick={closeMenu}>
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="site-nav-mobile-accordion">
                <button
                  type="button"
                  onClick={() => toggleAccordion('moduller')}
                  className="site-nav-mobile-accordion-btn"
                >
                  <span>Modüller</span>
                  <ChevronDown
                    className={`site-nav-mobile-accordion-chevron ${accordionOpen === 'moduller' ? 'open' : ''}`}
                    size={20}
                  />
                </button>
                {accordionOpen === 'moduller' && (
                  <ul className="site-nav-mobile-accordion-list">
                    {modulLinks.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} onClick={closeMenu}>
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="site-nav-mobile-app">
                <h4 className="site-nav-mobile-app-title">Mobil Uygulama İndir</h4>
                <div className="site-nav-mobile-app-badges">
                  <a
                    href="https://apps.apple.com/tr/search?term=DijitalERP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-nav-mobile-app-link"
                    onClick={closeMenu}
                  >
                    <img src="/app-store-badge.svg" alt="App Store" className="site-nav-mobile-app-img" />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.dijitalerp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-nav-mobile-app-link"
                    onClick={closeMenu}
                  >
                    <img src="/google-play-badge.svg" alt="Google Play" className="site-nav-mobile-app-img" />
                  </a>
                </div>
              </div>
              <div className="site-nav-mobile-cta">
                <a href="/fiyatlandirma" className="site-nav-mobile-cta-btn" onClick={closeMenu}>
                  Satın Al
                  <ChevronRight size={18} />
                </a>
                <a
                  href={DESKTOP_ARCHIVE_HREF}
                  className="site-nav-mobile-download-btn"
                  download={DESKTOP_ARCHIVE_FILENAME}
                  onClick={closeMenu}
                >
                  <Download size={18} strokeWidth={2} aria-hidden />
                  Ücretsiz İndir (Windows)
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
