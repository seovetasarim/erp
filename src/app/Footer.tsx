'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import CookieConsentLink from './CookieConsentLink';
import { SITE_HOST, SITE_URL } from '../site-url';
import { DESKTOP_ARCHIVE_FILENAME, DESKTOP_ARCHIVE_HREF } from '../download';

const quickLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Özellikler', href: '/ozellikler' },
  { label: 'Fiyatlandırma', href: '/fiyatlandirma' },
  { label: 'SSS', href: '/sss' },
  { label: 'İletişim', href: '/iletisim' },
];

const urunLinks = [
  { label: 'Ücretsiz İndir (Windows)', href: DESKTOP_ARCHIVE_HREF },
  { label: 'Özellikler', href: '/ozellikler' },
  { label: 'Fiyatlandırma', href: '/fiyatlandirma' },
  { label: 'SSS', href: '/sss' },
  { label: 'Satın Al', href: '/fiyatlandirma' },
];

const modulLinks = [
  { label: 'Stok Takip', href: '/cozumler/stok-takip' },
  { label: 'Cari Yönetim', href: '/cozumler/cari-yonetim' },
  { label: 'Faturalar', href: '/cozumler/faturalar' },
  { label: 'Kasa', href: '/cozumler/kasa' },
  { label: 'E-Fatura', href: '/cozumler/e-fatura' },
  { label: 'Kargo', href: '/cozumler/kargo' },
  { label: 'Raporlar', href: '/cozumler/raporlar' },
  { label: 'Barkod', href: '/cozumler/barkod' },
  { label: 'Dashboard', href: '/cozumler/dashboard' },
];

const policyLinks = [
  { label: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
  { label: 'Kullanım Şartları', href: '/kullanim-sartlari' },
  { label: 'Çerez Politikası', href: '/cerez-politikasi' },
  { label: 'KVKK', href: '/kvkk' },
];

export default function Footer() {
  const [mobileOpen, setMobileOpen] = useState<'menu' | 'urun' | 'moduller' | 'yasal' | null>(null);

  return (
    <footer id="iletisim" className="site-footer" role="contentinfo">
      {/* ── MOBİL FOOTER (640px altı) ── */}
      <div className="footer-mobile">
        <div className="footer-mobile-inner">
          {/* Logo (telefon ve web mobilde gizli) */}
          <div className="footer-mobile-brand">
            <a href="/" className="footer-mobile-logo">
              <img src="/logo.png" alt="DijitalERP" className="footer-mobile-logo-img" />
            </a>
            <a href="tel:+905321667697" className="footer-mobile-phone footer-mobile-hide">0532 166 76 97</a>
            <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="footer-mobile-web footer-mobile-hide">{SITE_HOST}</a>
          </div>

          {/* Accordion: Menü (5 link) */}
          <div className="footer-mobile-accordion">
            <button type="button" onClick={() => setMobileOpen(mobileOpen === 'menu' ? null : 'menu')} className="footer-mobile-accordion-btn">
              <span>Menü</span>
              <ChevronDown className={`footer-mobile-chevron ${mobileOpen === 'menu' ? 'open' : ''}`} size={16} />
            </button>
            {mobileOpen === 'menu' && (
              <ul className="footer-mobile-accordion-list">
                {quickLinks.map((l) => (
                  <li key={l.href}><a href={l.href} className="footer-mobile-accordion-link">{l.label}</a></li>
                ))}
              </ul>
            )}
          </div>

          {/* Accordion: Ürün */}
          <div className="footer-mobile-accordion">
            <button type="button" onClick={() => setMobileOpen(mobileOpen === 'urun' ? null : 'urun')} className="footer-mobile-accordion-btn">
              <span>Ürün</span>
              <ChevronDown className={`footer-mobile-chevron ${mobileOpen === 'urun' ? 'open' : ''}`} size={16} />
            </button>
            {mobileOpen === 'urun' && (
              <ul className="footer-mobile-accordion-list">
                {urunLinks.map((l) => (
                  <li key={l.href}><a href={l.href} className="footer-mobile-accordion-link">{l.label}</a></li>
                ))}
              </ul>
            )}
          </div>

          {/* Accordion: Modüller */}
          <div className="footer-mobile-accordion">
            <button type="button" onClick={() => setMobileOpen(mobileOpen === 'moduller' ? null : 'moduller')} className="footer-mobile-accordion-btn">
              <span>Modüller</span>
              <ChevronDown className={`footer-mobile-chevron ${mobileOpen === 'moduller' ? 'open' : ''}`} size={16} />
            </button>
            {mobileOpen === 'moduller' && (
              <ul className="footer-mobile-accordion-list">
                {modulLinks.map((l) => (
                  <li key={l.href}><a href={l.href} className="footer-mobile-accordion-link">{l.label}</a></li>
                ))}
              </ul>
            )}
          </div>

          {/* Accordion: Yasal / Politikalar */}
          <div className="footer-mobile-accordion">
            <button type="button" onClick={() => setMobileOpen(mobileOpen === 'yasal' ? null : 'yasal')} className="footer-mobile-accordion-btn">
              <span>Yasal & Politikalar</span>
              <ChevronDown className={`footer-mobile-chevron ${mobileOpen === 'yasal' ? 'open' : ''}`} size={16} />
            </button>
            {mobileOpen === 'yasal' && (
              <ul className="footer-mobile-accordion-list">
                {policyLinks.map((l) => (
                  <li key={l.href}><a href={l.href} className="footer-mobile-accordion-link">{l.label}</a></li>
                ))}
                <li><CookieConsentLink className="footer-mobile-accordion-link">Çerez Tercihleri</CookieConsentLink></li>
              </ul>
            )}
          </div>

          {/* Mobil Uygulama */}
          <div className="footer-mobile-app">
            <h4 className="footer-mobile-app-title">Mobil Uygulama İndir</h4>
            <div className="footer-mobile-app-badges">
              <a href="https://apps.apple.com/tr/search?term=DijitalERP" target="_blank" rel="noopener noreferrer" className="footer-mobile-app-link">
                <img src="/app-store-badge.svg" alt="App Store" className="footer-mobile-app-img" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.dijitalerp" target="_blank" rel="noopener noreferrer" className="footer-mobile-app-link">
                <img src="/google-play-badge.svg" alt="Google Play" className="footer-mobile-app-img" />
              </a>
            </div>
          </div>

          {/* CTA Butonu */}
          <div className="footer-mobile-cta">
            <a href="/fiyatlandirma" className="footer-mobile-cta-btn">
              Satın Al
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Copyright */}
          <div className="footer-mobile-bottom">
            <p className="footer-mobile-copy">© 2026 DijitalERP. Tüm hakları saklıdır. Stok takip, cari yönetim, E-Fatura, KOBİ ERP, ERP yazılımı.</p>
          </div>
        </div>
      </div>

      {/* ── DESKTOP FOOTER (640px ve üzeri) ── */}
      <div className="footer-desktop">
        <div className="footer-wave" aria-hidden>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40 C180 0 360 80 540 40 C720 0 900 80 1080 40 C1260 0 1380 40 1440 40 L1440 80 L0 80 Z" fill="#f7f7f4"/>
          </svg>
        </div>
        <div className="footer-inner">
          <div className="footer-top-row">
            <div className="footer-brand">
              <a href="/" className="footer-logo">
                <img src="/logo.png" alt="DijitalERP - Stok ve Cari Yönetim Yazılımı" className="footer-logo-img" />
              </a>
              <p className="footer-desc">
                KOBİ&apos;ler için önce <strong>ücretsiz indirilebilir Windows sürümü</strong>, ticari kullanımda lisanslı ERP: stok takibi, cari yönetimi ve E-Fatura; veriler bilgisayarınızda — offline.
              </p>
              <div className="footer-social">
                <a href="https://instagram.com/dijitalerp" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Instagram" aria-label="DijitalERP Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://facebook.com/dijitalerp" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Facebook" aria-label="DijitalERP Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://wa.me/905321667697" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="WhatsApp" aria-label="DijitalERP WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <a href="https://linkedin.com/company/dijitalerp" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="LinkedIn" aria-label="DijitalERP LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
            <nav className="footer-nav" aria-label="Ürün">
              <h4 className="footer-nav-title">Ürün</h4>
              <ul className="footer-nav-list">
                <li><a href={DESKTOP_ARCHIVE_HREF} download={DESKTOP_ARCHIVE_FILENAME} title="DijitalERP — ücretsiz Windows sürümünü indir (kurulum.rar)">Ücretsiz İndir</a></li>
                <li><a href="/ozellikler" title="DijitalERP Özellikler">Özellikler</a></li>
                <li><a href="/fiyatlandirma" title="DijitalERP Fiyatlandırma">Fiyatlandırma</a></li>
                <li><a href="/sss" title="Sık Sorulan Sorular">SSS</a></li>
                <li><a href="/fiyatlandirma" title="DijitalERP Satın Al — Fiyatlandırma">Satın Al</a></li>
                <li><a href="/" title="Ana Sayfa">Ana Sayfa</a></li>
                <li><a href="/iletisim" title="İletişim">İletişim</a></li>
              </ul>
            </nav>
            <nav className="footer-nav" aria-label="Modüller">
              <h4 className="footer-nav-title">Modüller</h4>
              <ul className="footer-nav-list">
                <li><a href="/cozumler/stok-takip" title="Stok Takip Modülü">Stok Takip</a></li>
                <li><a href="/cozumler/cari-yonetim" title="Cari Yönetim Modülü">Cari Yönetim</a></li>
                <li><a href="/cozumler/faturalar" title="Fatura Modülü">Faturalar</a></li>
                <li><a href="/cozumler/kasa" title="Kasa Modülü">Kasa</a></li>
                <li><a href="/cozumler/e-fatura" title="E-Fatura Modülü">E-Fatura</a></li>
                <li><a href="/cozumler/kargo" title="Kargo Modülü">Kargo</a></li>
                <li><a href="/cozumler/raporlar" title="Raporlar Modülü">Raporlar</a></li>
                <li><a href="/cozumler/barkod" title="Barkod Yazılımı">Barkod</a></li>
                <li><a href="/cozumler/dashboard" title="Dashboard">Dashboard</a></li>
              </ul>
            </nav>
            <nav className="footer-nav" aria-label="Sektörler">
              <h4 className="footer-nav-title">Sektörler</h4>
              <ul className="footer-nav-list">
                <li><a href="/cozumler/perakende" title="Perakende Stok Yazılımı">Perakende</a></li>
                <li><a href="/cozumler/toptan-satis" title="Toptan Satış Yazılımı">Toptan Satış</a></li>
                <li><a href="/cozumler/uretim" title="Üretim ERP">Üretim</a></li>
                <li><a href="/cozumler/lojistik" title="Lojistik Yazılımı">Lojistik</a></li>
                <li><a href="/cozumler/depo" title="Depo Yönetim Yazılımı">Depo</a></li>
                <li><a href="/cozumler/magaza" title="Mağaza Stok Takip">Mağaza</a></li>
                <li><a href="/cozumler/dagitim" title="Dağıtım Yazılımı">Dağıtım</a></li>
                <li><a href="/cozumler/gida" title="Gıda Sektörü ERP">Gıda</a></li>
                <li><a href="/cozumler/tekstil" title="Tekstil Stok Takip">Tekstil</a></li>
              </ul>
            </nav>
          </div>
          <div className="footer-mid-row">
            <div className="footer-app">
              <h4 className="footer-nav-title">Mobil Uygulama İndir</h4>
              <div className="footer-app-badges">
                <a href="https://apps.apple.com/tr/search?term=DijitalERP" target="_blank" rel="noopener noreferrer" className="footer-app-link" title="App Store'dan İndir">
                  <img src="/app-store-badge.svg" alt="App Store'dan İndir" className="footer-app-img" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.dijitalerp" target="_blank" rel="noopener noreferrer" className="footer-app-link" title="Google Play'den İndir">
                  <img src="/google-play-badge.svg" alt="Google Play'den İndir" className="footer-app-img" />
                </a>
              </div>
            </div>
            <nav className="footer-nav" aria-label="Çözümler">
              <h4 className="footer-nav-title">Çözümler</h4>
              <ul className="footer-nav-list">
                <li><a href="/cozumler/stok-takip-yazilimi" title="Stok Takip Yazılımı">Stok Takip Yazılımı</a></li>
                <li><a href="/cozumler/cari-hesap-yazilimi" title="Cari Hesap Yazılımı">Cari Hesap Yazılımı</a></li>
                <li><a href="/cozumler/e-fatura-yazilimi" title="E-Fatura Yazılımı">E-Fatura Yazılımı</a></li>
                <li><a href="/cozumler/kobi-erp" title="KOBİ ERP Yazılımı">KOBİ ERP</a></li>
                <li><a href="/cozumler/offline-erp" title="Offline ERP">Offline ERP</a></li>
                <li><a href="/cozumler/fatura-yazilimi" title="Fatura Yazılımı">Fatura Yazılımı</a></li>
              </ul>
            </nav>
            <nav className="footer-nav" aria-label="Yazılım Türleri">
              <h4 className="footer-nav-title">Yazılım Türleri</h4>
              <ul className="footer-nav-list">
                <li><a href="/cozumler/erp-yazilimi" title="ERP Yazılımı">ERP Yazılımı</a></li>
                <li><a href="/cozumler/stok-programi" title="Stok Programı">Stok Programı</a></li>
                <li><a href="/cozumler/cari-program" title="Cari Program">Cari Program</a></li>
                <li><a href="/cozumler/depo-takip" title="Depo Takip Programı">Depo Takip</a></li>
                <li><a href="/cozumler/firma-yonetimi" title="Firma Yönetim Yazılımı">Firma Yönetimi</a></li>
                <li><a href="/cozumler/isletme-yonetimi" title="İşletme Yönetim Sistemi">İşletme Yönetimi</a></li>
              </ul>
            </nav>
            <nav className="footer-nav" aria-label="Özellikler">
              <h4 className="footer-nav-title">Özellikler</h4>
              <ul className="footer-nav-list">
                <li><a href="/cozumler/barkod" title="Barkod Okuyucu">Barkod</a></li>
                <li><a href="/cozumler/coklu-firma" title="Çoklu Firma">Çoklu Firma</a></li>
                <li><a href="/cozumler/excel-export" title="Excel Export">Excel Export</a></li>
                <li><a href="/cozumler/kargo-etiketi" title="Kargo Etiketi">Kargo Etiketi</a></li>
                <li><a href="/cozumler/stok-sayim" title="Stok Sayım">Stok Sayım</a></li>
                <li><a href="/cozumler/yedekleme" title="Yedekleme">Yedekleme</a></li>
              </ul>
            </nav>
          </div>
          <div className="footer-bottom">
            <p className="footer-bottom-copy">© 2026 DijitalERP. Tüm hakları saklıdır. Stok takip, cari yönetim, E-Fatura, KOBİ ERP, ERP yazılımı.</p>
            <nav className="footer-bottom-policy" aria-label="Yasal">
              <a href="/gizlilik-politikasi" title="Gizlilik Politikası">Gizlilik Politikası</a>
              <a href="/kullanim-sartlari" title="Kullanım Şartları">Kullanım Şartları</a>
              <a href="/cerez-politikasi" title="Çerez Politikası">Çerez Politikası</a>
              <a href="/kvkk" title="KVKK Aydınlatma Metni">KVKK</a>
              <CookieConsentLink className="footer-bottom-policy-link">Çerez Tercihleri</CookieConsentLink>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
