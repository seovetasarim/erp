'use client';

import { Menu, X, PhoneCall, ChevronDown, ChevronRight, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
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
  const [accordionOpen, setAccordionOpen] = useState<'urun' | 'moduller' | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setAccordionOpen(null);
  };

  const toggleAccordion = (key: 'urun' | 'moduller') => {
    setAccordionOpen((prev) => (prev === key ? null : key));
  };

  const isActive = (href: string) => {
    const base = href.split('#')[0];
    if (base === '/') return pathname === '/';
    return pathname === base || pathname.startsWith(base + '/');
  };

  return (
    <header className="site-header header-white" role="banner">
      <div className="site-header-top">
        <div className="site-header-top-inner">
          <a href="tel:+905321667697" className="site-header-top-link">
            0532 166 76 97
          </a>
          <a href="mailto:info@dijitalerp.com.tr" className="site-header-top-link">
            info@dijitalerp.com.tr
          </a>
        </div>
      </div>

      <div className="site-header-main">
        <div className="site-header-inner">
          <div className="site-header-row">
            <a
              href="/"
              className="site-logo"
              onClick={closeMenu}
              aria-label="DijitalERP - Ana Sayfaya git"
            >
              <img src="/logo.png" alt="DijitalERP" className="site-logo-img" />
            </a>

            <nav className="site-nav" aria-label="Ana navigasyon">
              <ul className="site-nav-list">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      title={item.title}
                      onClick={closeMenu}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className={isActive(item.href) ? 'site-nav-link site-nav-link-active' : 'site-nav-link'}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="site-header-actions">
              <div className="header-cta-group">
                <a
                  href="tel:+905321667697"
                  title="DijitalERP iletişim: 0532 166 76 97"
                  className="header-phone-cta"
                >
                  <PhoneCall size={16} strokeWidth={2} aria-hidden />
                  <span>0532 166 76 97</span>
                </a>
                <a
                  href={DESKTOP_ARCHIVE_HREF}
                  className="header-download-cta"
                  title="DijitalERP paketini ücretsiz indir (ZIP — çıkarıp içindeki kurulumu çalıştırın)"
                  download={DESKTOP_ARCHIVE_FILENAME}
                >
                  Ücretsiz İndir
                </a>
              </div>
              <button
                type="button"
                className="site-nav-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
              </button>
            </div>
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
              <ul className="site-nav-mobile-main">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      title={item.title}
                      onClick={closeMenu}
                      className={isActive(item.href) ? 'site-nav-mobile-link site-nav-mobile-link-active' : 'site-nav-mobile-link'}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="site-nav-mobile-divider" />
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
