'use client';

import { Menu, X, PhoneCall, ChevronDown, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Ana Sayfa', title: 'DijitalERP Ana Sayfa' },
  { href: '/#ozellikler', label: 'Özellikler', title: 'DijitalERP Özellikler' },
  { href: '/fiyatlandirma', label: 'Fiyatlandırma', title: 'DijitalERP Fiyatlandırma' },
  { href: '/sss', label: 'SSS', title: 'Sık Sorulan Sorular' },
  { href: '/iletisim', label: 'İletişim', title: 'DijitalERP İletişim' },
];

const urunLinks = [
  { label: 'Özellikler', href: '/#ozellikler' },
  { label: 'Fiyatlandırma', href: '/fiyatlandirma' },
  { label: 'SSS', href: '/sss' },
  { label: 'Demo İste', href: '/demo-iste' },
];

const modulLinks = [
  { label: 'Stok Takip', href: '/#ozellikler' },
  { label: 'Cari Yönetim', href: '/#ozellikler' },
  { label: 'Faturalar', href: '/#ozellikler' },
  { label: 'Kasa', href: '/#ozellikler' },
  { label: 'E-Fatura', href: '/#ozellikler' },
  { label: 'Raporlar', href: '/#ozellikler' },
];

const policyPaths = ['/gizlilik-politikasi', '/kullanim-sartlari', '/cerez-politikasi', '/kvkk'];

export default function Header() {
  const pathname = usePathname();
  const isPolicyPage = policyPaths.includes(pathname || '');
  const [menuOpen, setMenuOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState<'menu' | 'urun' | 'moduller' | null>(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setAccordionOpen(null);
  };

  const toggleAccordion = (key: 'menu' | 'urun' | 'moduller') => {
    setAccordionOpen((prev) => (prev === key ? null : key));
  };

  const headerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 9999,
    background: isPolicyPage
      ? '#fff'
      : scrolled
        ? 'rgba(15, 20, 25, 0.9)'
        : 'transparent',
    backdropFilter: scrolled && !isPolicyPage ? 'blur(16px) saturate(1.4)' : isPolicyPage ? 'none' : 'none',
    WebkitBackdropFilter: scrolled && !isPolicyPage ? 'blur(16px) saturate(1.4)' : 'none',
    borderBottom: isPolicyPage ? '1px solid #e2e8f0' : scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
    transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
  };

  return (
    <header
      className={`site-header anim-header ${isPolicyPage ? 'header-white' : ''}`}
      role="banner"
      style={headerStyle}
    >
      <div className="site-header-inner">
        <a href="/" className="site-logo" onClick={closeMenu} aria-label="DijitalERP - Ana Sayfaya git">
          <img src="/logo.png" alt="DijitalERP" className="site-logo-img" />
        </a>
        <nav className="site-nav" aria-label="Ana navigasyon">
          <ul className="site-nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} title={item.title} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="tel:+905321667697" className="header-phone-cta" title="DijitalERP iletişim: 0532 166 76 97">
          <span className="header-phone-icon">
            <PhoneCall size={18} strokeWidth={2} />
          </span>
          <span className="header-phone-content">
            <span className="header-phone-label">Hemen Ara</span>
            <span className="header-phone-num">0532 166 76 97</span>
          </span>
        </a>
        <button
          type="button"
          className="site-nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </div>
      <div className={`site-nav-mobile ${menuOpen ? 'open' : ''}`} role="dialog" aria-label="Mobil menü" aria-modal="true" hidden={!menuOpen}>
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
              <ChevronDown className={`site-nav-mobile-accordion-chevron ${accordionOpen === 'menu' ? 'open' : ''}`} size={20} />
            </button>
            {accordionOpen === 'menu' && (
              <ul className="site-nav-mobile-accordion-list">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} title={item.title} onClick={closeMenu}>{item.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="site-nav-mobile-accordion">
            <button type="button" onClick={() => toggleAccordion('urun')} className="site-nav-mobile-accordion-btn">
              <span>Ürün</span>
              <ChevronDown className={`site-nav-mobile-accordion-chevron ${accordionOpen === 'urun' ? 'open' : ''}`} size={20} />
            </button>
            {accordionOpen === 'urun' && (
              <ul className="site-nav-mobile-accordion-list">
                {urunLinks.map((l) => (
                  <li key={l.href}><a href={l.href} onClick={closeMenu}>{l.label}</a></li>
                ))}
              </ul>
            )}
          </div>
          <div className="site-nav-mobile-accordion">
            <button type="button" onClick={() => toggleAccordion('moduller')} className="site-nav-mobile-accordion-btn">
              <span>Modüller</span>
              <ChevronDown className={`site-nav-mobile-accordion-chevron ${accordionOpen === 'moduller' ? 'open' : ''}`} size={20} />
            </button>
            {accordionOpen === 'moduller' && (
              <ul className="site-nav-mobile-accordion-list">
                {modulLinks.map((l) => (
                  <li key={l.href}><a href={l.href} onClick={closeMenu}>{l.label}</a></li>
                ))}
              </ul>
            )}
          </div>
          <div className="site-nav-mobile-app">
            <h4 className="site-nav-mobile-app-title">Mobil Uygulama İndir</h4>
            <div className="site-nav-mobile-app-badges">
              <a href="https://apps.apple.com/tr/search?term=DijitalERP" target="_blank" rel="noopener noreferrer" className="site-nav-mobile-app-link" onClick={closeMenu}>
                <img src="/app-store-badge.svg" alt="App Store" className="site-nav-mobile-app-img" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.dijitalerp" target="_blank" rel="noopener noreferrer" className="site-nav-mobile-app-link" onClick={closeMenu}>
                <img src="/google-play-badge.svg" alt="Google Play" className="site-nav-mobile-app-img" />
              </a>
            </div>
          </div>
          <div className="site-nav-mobile-cta">
            <a href="tel:+905321667697" className="site-nav-mobile-cta-btn" onClick={closeMenu}>
              Ücretsiz Demo İste
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
