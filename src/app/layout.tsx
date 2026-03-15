import type { Metadata } from "next";
import Header from "./Header";
import CookieConsent from "./CookieConsent";
import WhatsAppButton from "./WhatsAppButton";

const BASE_URL = "https://www.dijitalerp.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "DijitalERP | Stok Takip, Cari Yönetim ve ERP Yazılımı",
    template: "%s | DijitalERP",
  },
  description:
    "Türkiye'nin offline ERP yazılımı. Stok takip, cari yönetim, fatura, E-Fatura ve kasa yönetimi tek yazılımda. KOBİ'ler için tek seferlik ödeme. 0532 166 76 97",
  keywords: [
    "ERP yazılımı",
    "stok takip",
    "stok takip yazılımı",
    "stok programı",
    "cari yönetim",
    "cari program",
    "fatura yazılımı",
    "E-Fatura",
    "KOBİ ERP",
    "offline ERP",
    "depo takip",
    "barkod programı",
    "kasa yönetimi",
    "DijitalERP",
  ],
  authors: [{ name: "DijitalERP", url: BASE_URL }],
  creator: "DijitalERP",
  publisher: "DijitalERP",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: BASE_URL,
    siteName: "DijitalERP",
    title: "DijitalERP | Stok Takip, Cari Yönetim ve ERP Yazılımı",
    description:
      "Türkiye'nin offline ERP yazılımı. Stok takip, cari yönetim, fatura, E-Fatura ve kasa yönetimi tek yazılımda. KOBİ'ler için tek seferlik ödeme.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DijitalERP - Stok Takip ve ERP Yazılımı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DijitalERP | Stok Takip, Cari Yönetim ve ERP Yazılımı",
    description:
      "Türkiye'nin offline ERP yazılımı. Stok takip, cari yönetim, fatura, E-Fatura ve kasa yönetimi tek yazılımda.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DijitalERP",
              "url": "https://www.dijitalerp.com.tr",
              "logo": "https://www.dijitalerp.com.tr/logo.png",
              "description": "Türkiye'nin offline ERP yazılımı. Stok takip, cari yönetim, fatura, E-Fatura ve kasa yönetimi tek yazılımda.",
              "telephone": "+905321667697",
              "email": "info@dijitalerp.com.tr",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+905321667697",
                "contactType": "customer service",
                "availableLanguage": "Turkish",
                "areaServed": "TR"
              },
              "sameAs": [
                "https://www.dijitalerp.com.tr"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "DijitalERP",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Windows",
              "url": "https://www.dijitalerp.com.tr",
              "description": "KOBİ'ler için offline çalışan profesyonel ERP yazılımı. Stok takip, cari yönetim, fatura, E-Fatura, kasa ve raporlama.",
              "offers": [
                {
                  "@type": "Offer",
                  "price": "25000",
                  "priceCurrency": "TRY",
                  "name": "Başlangıç Paketi"
                },
                {
                  "@type": "Offer",
                  "price": "35000",
                  "priceCurrency": "TRY",
                  "name": "Profesyonel Paket"
                }
              ],
              "publisher": {
                "@type": "Organization",
                "name": "DijitalERP"
              }
            })
          }}
        />
        <style dangerouslySetInnerHTML={{ __html: `
          *{box-sizing:border-box;margin:0;padding:0}
          html,body{font-family:'Plus Jakarta Sans','Segoe UI',system-ui,sans-serif;color:#1e293b;background:#FFFFFF;min-height:100vh}
          .site-wrap{min-height:100vh;background:#FFFFFF}
          .anim-header{opacity:0;transform:translateY(-100%);animation:headerSlideIn .7s cubic-bezier(.22,1,.36,1) .1s forwards}
          @keyframes headerSlideIn{to{opacity:1;transform:translateY(0)}}
          .site-header{position:fixed!important;top:0!important;left:0!important;right:0!important;width:100%!important;z-index:9999!important;pointer-events:auto}
          .site-header.header-light .site-nav a,.site-header.header-light .site-nav-mobile-list a{color:#cbd5e1}
          .site-header.header-light .site-nav a:hover,.site-header.header-light .site-nav-mobile-list a:hover{color:#fff}
          .site-header.header-light .site-nav-toggle{color:#e2e8f0}
          .site-header.header-light .header-phone-cta{border-color:rgba(255,255,255,.4);color:#fff}
          .site-header.header-white .site-nav a,.site-header.header-white .site-nav-mobile-list a{color:#1e293b}
          .site-header.header-white .site-nav a:hover,.site-header.header-white .site-nav-mobile-list a:hover{color:#2563eb}
          .site-header.header-white .site-nav-toggle{color:#475569}
          .site-header.header-white .site-nav-toggle:hover{color:#0f172a}
          .site-header.header-white .header-phone-cta{border-color:#e2e8f0;color:#1e293b}
          .site-header.header-white .header-phone-cta:hover{border-color:#2563eb;color:#2563eb}
          .site-header-inner{max-width:80rem;margin:0 auto;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between}
          .site-logo{display:flex;align-items:center;gap:.5rem;text-decoration:none;color:inherit}
          .site-logo-img{display:block;object-fit:contain;height:2.25rem;width:auto}
          @media(min-width:768px){.site-logo-img{height:2.75rem}}
          .site-nav{display:none;align-items:center;gap:1.5rem}
          .site-nav-list,.site-nav-mobile-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:1.5rem}
          @media(min-width:768px){.site-nav-list{flex-direction:row;gap:1.5rem}}
          .site-nav a,.site-nav-mobile-list a{color:#cbd5e1;text-decoration:none;font-weight:500;font-size:.95rem;transition:color .2s}
          .site-nav a:hover,.site-nav-mobile-list a:hover{color:#fff}
          @media(min-width:768px){.site-nav{display:flex}}
          .site-nav-toggle{display:flex;align-items:center;justify-content:center;background:transparent;border:none;color:#e2e8f0;cursor:pointer;padding:.5rem;transition:color .2s}
          .site-nav-toggle:hover{color:#fff}
          @media(min-width:768px){.site-nav-toggle{display:none}}
          .site-nav-mobile{position:fixed;inset:0;background:linear-gradient(180deg,#0f172a 0%,#050816 100%);z-index:10000;opacity:0;visibility:hidden;transition:opacity .3s,visibility .3s;overflow-y:auto}
          .site-nav-mobile.open{opacity:1;visibility:visible}
          .site-nav-mobile-overlay{display:none}
          .site-nav-mobile-header{display:flex;align-items:center;justify-content:space-between;padding:1rem 1.5rem;border-bottom:1px solid rgba(255,255,255,.08)}
          .site-nav-mobile-close{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;background:rgba(255,255,255,.08);border:none;border-radius:10px;color:#fff;cursor:pointer;transition:background .2s}
          .site-nav-mobile-close:hover{background:rgba(255,255,255,.15)}
          .site-nav-mobile-inner{display:flex;flex-direction:column;padding:1.5rem}
          .site-nav-mobile-accordion{border-bottom:1px solid rgba(255,255,255,.06)}
          .site-nav-mobile-accordion-btn{width:100%;display:flex;align-items:center;justify-content:space-between;padding:1rem 0;background:none;border:none;color:#fff;font-size:1rem;font-weight:600;cursor:pointer;text-align:left}
          .site-nav-mobile-accordion-btn:hover{color:#60a5fa}
          .site-nav-mobile-accordion-chevron{color:rgba(255,255,255,.5);transition:transform .2s}
          .site-nav-mobile-accordion-chevron.open{transform:rotate(180deg);color:#60a5fa}
          .site-nav-mobile-accordion-list{list-style:none;margin:0;padding:0 0 1rem}
          .site-nav-mobile-accordion-list a{display:block;color:rgba(255,255,255,.7);text-decoration:none;font-size:.95rem;padding:.5rem 0;transition:color .2s}
          .site-nav-mobile-accordion-list a:hover{color:#60a5fa}
          .site-nav-mobile-app{margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.06);text-align:center}
          .site-nav-mobile-app-title{font-size:.75rem;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:.06em;margin-bottom:1rem}
          .site-nav-mobile-app-badges{display:flex;justify-content:center;gap:1rem;flex-wrap:wrap}
          .site-nav-mobile-app-link{display:flex;align-items:center}
          .site-nav-mobile-app-img{height:40px;width:auto;object-fit:contain}
          .site-nav-mobile-cta{margin-top:1.5rem;display:flex;justify-content:center}
          .site-nav-mobile-cta-btn{display:flex;align-items:center;justify-content:center;gap:.5rem;width:100%;max-width:280px;padding:1rem 1.5rem;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;font-size:1rem;font-weight:600;text-decoration:none;border-radius:12px;transition:background .2s}
          .site-nav-mobile-cta-btn:hover{background:linear-gradient(135deg,#3b82f6,#2563eb)}
          @media(min-width:768px){.site-nav-mobile{display:none!important}}
          .header-phone-cta{display:none;align-items:center;gap:.6rem;padding:.5rem 1rem;background:transparent;border:1px solid rgba(255,255,255,.4);border-radius:10px;text-decoration:none;color:#fff;transition:border-color .2s,color .2s}
          @media(min-width:768px){.header-phone-cta{display:flex}}
          .header-phone-cta:hover{border-color:rgba(255,255,255,.7);color:#fff}
          .header-phone-icon{display:flex;align-items:center;justify-content:center;background:transparent}
          .header-phone-content{display:flex;flex-direction:column;gap:.1rem;align-items:flex-start}
          .header-phone-label{font-size:.65rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;opacity:.9}
          .header-phone-num{font-size:.95rem;font-weight:700;letter-spacing:.02em}
          .header-phone-mobile{display:flex!important;align-items:center;gap:.75rem;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff!important;padding:1rem 1.5rem;border-radius:12px;font-weight:600;text-decoration:none;font-size:1rem;box-shadow:0 4px 14px rgba(37,99,235,.35)}
          .header-phone-mobile:hover{background:#3b82f6!important;color:#fff!important}
          .hero{position:relative;min-height:auto;padding-top:6rem;padding-bottom:5rem;color:#fff;overflow:visible;display:flex;align-items:center}
          .hero-bg{position:absolute;inset:0;background:linear-gradient(160deg,#060b16 0%,#0b1425 50%,#08111e 100%);overflow:hidden}
          .hero-bg::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.03) 1px,transparent 1px);background-size:32px 32px}
          .hero-bg::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(180deg,transparent 60%,rgba(6,11,22,.8) 100%)}
          .hero-inner{position:relative;max-width:80rem;margin:0 auto;padding:0 1.5rem;display:grid;grid-template-columns:1fr;gap:2rem;align-items:center;width:100%}
          @media(min-width:1024px){.hero-inner{grid-template-columns:1fr 1fr;gap:2.5rem;text-align:left}}
          .hero-content{order:1}
          .hero-anim{opacity:0}
          .hero-anim-1{clip-path:inset(0 100% 0 0);animation:heroTitleIn 1s cubic-bezier(.22,1,.36,1) .2s forwards}
          @keyframes heroTitleIn{to{opacity:1;clip-path:inset(0 0% 0 0)}}
          .hero-anim-2{transform:translateY(24px);filter:blur(4px);animation:heroDescIn .9s ease-out .5s forwards}
          @keyframes heroDescIn{to{opacity:1;transform:translateY(0);filter:blur(0)}}
          .hero-anim-3{transform:translateY(16px);animation:heroBtnsIn .8s ease-out .7s forwards}
          @keyframes heroBtnsIn{to{opacity:1;transform:translateY(0)}}
          .hero-anim-4{transform:translateY(20px);animation:heroStatsIn .8s ease-out .9s forwards}
          @keyframes heroStatsIn{to{opacity:1;transform:translateY(0)}}
          .hero-anim-5{transform:perspective(900px) rotateY(12deg) translateX(80px);animation:heroVideoIn 1.1s cubic-bezier(.22,1,.36,1) .35s forwards}
          @keyframes heroVideoIn{to{opacity:1;transform:perspective(900px) rotateY(0deg) translateX(0)}}
          .hero-media{order:2;position:relative;padding-bottom:2.5rem}
          /* Kicker */
          .hero-kicker{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem .9rem .4rem .55rem;background:rgba(59,130,246,.18);border:1px solid rgba(59,130,246,.5);border-radius:9999px;font-size:.8rem;font-weight:700;color:#93c5fd;letter-spacing:.04em;margin-bottom:1.25rem;animation:kickerPop .6s cubic-bezier(.34,1.56,.64,1) .05s both}
          @keyframes kickerPop{from{opacity:0;transform:translateY(-8px) scale(.95)}to{opacity:1;transform:none}}
          .hero-kicker-dot{width:7px;height:7px;border-radius:50%;background:#3b82f6;box-shadow:0 0 8px #3b82f6;animation:dotPulse 1.8s ease-in-out infinite}
          @keyframes dotPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(.8)}}
          /* Başlık */
          .hero h1{font-size:clamp(1.5rem,5vw,3.75rem);font-weight:800;margin-bottom:1.25rem;line-height:1.1;letter-spacing:-.04em;white-space:nowrap}
          .hero-line{display:inline;color:#f1f5f9;font-weight:300;letter-spacing:-.02em}
          .hero-accent{display:inline;color:#fff;font-weight:800}
          .hero-desc{font-size:1rem;color:#64748b;max-width:28rem;margin-bottom:1.75rem;line-height:1.75}
          @media(min-width:768px){.hero-desc{font-size:1.0625rem}}
          /* Butonlar */
          .hero-btns{display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;margin-bottom:1rem}
          .hero-btns .btn-primary,.hero-btns .btn-secondary{display:flex;align-items:center;justify-content:center;gap:.5rem;min-width:0;text-align:center;transition:transform .2s,box-shadow .2s}
          .hero-btns .btn-primary:hover,.hero-btns .btn-secondary:hover{transform:translateY(-2px)}
          /* Rozet listesi */
          .hero-badges{display:flex;flex-wrap:wrap;gap:.5rem .75rem;margin-top:.75rem;margin-bottom:1.5rem}
          .hero-badge-item{display:inline-flex;align-items:center;gap:.35rem;font-size:.75rem;font-weight:500;color:#475569;opacity:1}
          .hero-badge-item svg{color:#475569;flex-shrink:0}
          .btn-primary{display:inline-flex;align-items:center;gap:.5rem}
          .hero-stats{display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;gap:.5rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.1)}
          @media(min-width:480px){.hero-stats{grid-template-columns:1fr auto 1fr auto 1fr;gap:1rem}}
          @media(min-width:768px){.hero-stats{gap:1.5rem}}
          .hero-stat{display:flex;flex-direction:column;gap:.25rem;text-align:center;min-width:0}
          .hero-stat-num{font-size:1.35rem;font-weight:700;color:#f1f5f9;letter-spacing:-.03em;line-height:1.1}
          @media(min-width:480px){.hero-stat-num{font-size:1.75rem}}
          @media(min-width:768px){.hero-stat-num{font-size:2.5rem}}
          .hero-stat-label{font-size:.6rem;color:#94a3b8;font-weight:600;text-transform:uppercase;letter-spacing:.06em}
          @media(min-width:480px){.hero-stat-label{font-size:.7rem;letter-spacing:.08em}}
          @media(min-width:768px){.hero-stat-label{font-size:.8rem}}
          .hero-stat-divider{display:none;width:1px;height:2.5rem;background:rgba(255,255,255,.12)}
          @media(min-width:480px){.hero-stat-divider{display:block}}
          @keyframes heroStatsRise{0%{opacity:0;transform:translateY(12px)}100%{opacity:1;transform:translateY(0)}}
          .hero-computer-frame{position:relative;background:transparent;border-radius:12px 12px 0 0;padding:12px 12px 0}
          @media(min-width:768px){.hero-computer-frame{padding:16px 16px 0;border-radius:16px 16px 0 0}}
          .hero-computer-titlebar{display:flex;align-items:center;gap:.75rem;padding:.5rem .75rem;background:transparent;border-radius:8px 8px 0 0;margin-bottom:0;border:1px solid rgba(255,255,255,.12);border-bottom:none}
          .hero-computer-dots{display:flex;gap:6px}
          .hero-computer-dot{width:10px;height:10px;border-radius:50%;background:#334155}
          .hero-computer-dot:nth-child(1){background:#ef4444}
          .hero-computer-dot:nth-child(2){background:#f59e0b}
          .hero-computer-dot:nth-child(3){background:#22c55e}
          .hero-computer-title{font-size:.75rem;font-weight:600;color:#94a3b8;letter-spacing:.02em}
          .hero-video-wrap{position:relative;aspect-ratio:16/9;overflow:hidden;border-radius:0 0 4px 4px;border:1px solid rgba(0,0,0,.4);border-top:none;box-shadow:inset 0 0 0 1px rgba(0,0,0,.2);z-index:1}
          .hero-video{width:100%;height:100%;object-fit:cover;display:block}
          .hero-computer-base{background:transparent;height:24px;border-radius:0 0 8px 8px;margin-top:-1px;display:flex;justify-content:center;align-items:flex-end;padding-bottom:4px;border:1px solid rgba(255,255,255,.12);border-top:none}
          @media(min-width:768px){.hero-computer-base{height:28px;border-radius:0 0 12px 12px}}
          .hero-computer-stand{width:60px;height:8px;background:transparent;border:1px solid rgba(255,255,255,.1);border-radius:0 0 4px 4px}
          @media(min-width:768px){.hero-computer-stand{width:80px;height:10px}}
          .hero-wave{position:absolute;bottom:0;left:0;right:0;width:100%;height:5rem;line-height:0;z-index:10;pointer-events:none;animation:heroWaveIn 1s cubic-bezier(.16,1,.3,1) 1s forwards;opacity:0;transform:translateY(20px)}
          @keyframes heroWaveIn{to{opacity:1;transform:translateY(0)}}
          .hero-wave svg{width:100%;height:100%;display:block;vertical-align:middle}
          .hero-video-caption{margin-top:1.25rem;display:flex;align-items:center;justify-content:center;gap:.5rem;font-size:.78rem;color:#94a3b8;font-weight:500;letter-spacing:.04em}
          .hero-video-dot{width:6px;height:6px;border-radius:50%;background:#22c55e;box-shadow:0 0 6px #22c55e;display:inline-block;animation:dotPulse 1.8s ease-in-out infinite}
          .hero-video-placeholder{width:100%;height:100%;background:linear-gradient(135deg,#1e293b,#334155);display:flex;align-items:center;justify-content:center}
          .hero-video-label{color:#64748b;font-size:.875rem}
          .btn-primary{background:#fff;color:#0f172a;padding:.875rem 1.75rem;border-radius:8px;font-weight:700;font-size:.9375rem;text-decoration:none;border:none;letter-spacing:.01em;transition:background .2s,transform .2s}
          .btn-primary:hover{background:#e2e8f0;transform:translateY(-1px)}
          .btn-secondary{border:1px solid rgba(255,255,255,.2);color:#e2e8f0;background:transparent;padding:.875rem 1.75rem;border-radius:8px;font-weight:500;font-size:.9375rem;text-decoration:none;transition:border-color .2s,color .2s,transform .2s}
          .btn-secondary:hover{border-color:rgba(255,255,255,.5);color:#fff;transform:translateY(-1px)}
          .section{padding:6rem 1.5rem}
          .section-light{background:#FFFFFF;position:relative;margin-top:-1px}
          .section-white{background:#fff}
          .section-inner{max-width:80rem;margin:0 auto}
          .section-header{text-align:left;margin-bottom:4rem}
          .section-header h2{font-size:1.875rem;font-weight:700;color:#0f172a;margin-bottom:1rem}
          @media(min-width:768px){.section-header h2{font-size:2.25rem}}
          .section-header p{color:#475569;max-width:42rem}
          .section-features{background:#FFFFFF!important;margin-top:-1px}
          .section-features .section-inner{background:#FFFFFF}
          .ft-section{background:#fff;margin-top:-1px;padding:5rem 1.5rem 6rem;border-top:1px solid #f1f5f9}
          @media(min-width:768px){.ft-section{padding:6rem 1.5rem 7rem}}
          .ft-inner{max-width:80rem;margin:0 auto}
          .ft-header{text-align:left;margin-bottom:3rem}
          .ft-kicker{display:inline-block;font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#3b82f6;margin-bottom:.75rem}
          .ft-title{font-size:1.875rem;font-weight:800;color:#0f172a;margin:0 0 .75rem;letter-spacing:-.03em}
          @media(min-width:768px){.ft-title{font-size:2.5rem}}
          .ft-subtitle{font-size:1rem;color:#64748b;max-width:38rem;margin:0;line-height:1.65}
          .ft-layout{display:grid;grid-template-columns:1fr;gap:0;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden}
          @media(min-width:1024px){.ft-layout{grid-template-columns:220px 1fr}}
          .ft-tabs{display:flex;flex-direction:row;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;background:transparent;border-bottom:1px solid #e2e8f0}
          .ft-tabs::-webkit-scrollbar{display:none}
          @media(min-width:1024px){.ft-tabs{flex-direction:column;overflow-x:visible;border-bottom:none;border-right:1px solid #e2e8f0;padding-top:.5rem;padding-bottom:.5rem}}
          .ft-tab{position:relative;display:flex;align-items:center;gap:.65rem;padding:.8rem 1.25rem;background:transparent;border:none;cursor:pointer;font-family:inherit;font-size:.8125rem;font-weight:500;color:#64748b;white-space:nowrap;transition:color .18s;flex-shrink:0;text-align:left}
          @media(min-width:1024px){.ft-tab{padding:.8rem 1.5rem;white-space:normal;flex-shrink:unset;border-left:2px solid transparent}}
          .ft-tab:hover{color:#0f172a}
          .ft-tab-active{color:#2563eb!important;font-weight:600}
          @media(min-width:1024px){.ft-tab-active{border-left-color:#2563eb}}
          .ft-tab-underline{display:block;position:absolute;bottom:0;left:0;right:0;height:2px;background:#2563eb;transform:scaleX(0);transition:transform .25s ease}
          @media(min-width:1024px){.ft-tab-underline{display:none}}
          .ft-tab-active .ft-tab-underline{transform:scaleX(1)}
          .ft-tab-icon{flex-shrink:0;opacity:.5;transition:opacity .18s}
          .ft-tab-active .ft-tab-icon,.ft-tab:hover .ft-tab-icon{opacity:1}
          .ft-tab-label{}
          .ft-tab-bar{display:none}
          .ft-panel{padding:2rem 1.5rem;min-height:400px}
          @media(min-width:768px){.ft-panel{padding:2.5rem 3rem}}
          @keyframes ftPanelIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
          .ft-panel{animation:ftPanelIn .3s ease-out forwards}
          .ft-panel-top{display:flex;align-items:flex-start;gap:.875rem;margin-bottom:1.75rem;padding-bottom:1.5rem;border-bottom:1px solid #f1f5f9}
          .ft-panel-icon-wrap{flex-shrink:0;color:#2563eb;margin-top:.15rem}
          .ft-panel-title{font-size:1.2rem;font-weight:700;color:#0f172a;margin:0 0 .3rem;line-height:1.25}
          @media(min-width:768px){.ft-panel-title{font-size:1.35rem}}
          .ft-panel-desc{font-size:.875rem;color:#64748b;margin:0;line-height:1.6}
          .ft-panel-list{list-style:none;margin:0;padding:0;display:grid;gap:0}
          @media(min-width:640px){.ft-panel-list{grid-template-columns:repeat(2,1fr)}}
          @keyframes ftItemIn{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
          .ft-panel-item{display:flex;align-items:flex-start;gap:.6rem;padding:.6rem 0;border-bottom:1px solid #f8fafc;animation:ftItemIn .35s ease-out both}
          .ft-item-check{color:#2563eb;flex-shrink:0;margin-top:.15rem}
          .ft-item-text{font-size:.875rem;color:#374151;line-height:1.55}
          .ft-panel-count{margin-top:2rem;font-size:.75rem;color:#cbd5e1;font-weight:500;letter-spacing:.06em;text-transform:uppercase}
          .features-section-header{text-align:left}
          .features-section-header h2{position:relative;display:inline-block;padding-left:1rem;padding-bottom:.6rem;border-left:4px solid #2563eb}
          .features-grid{display:grid;gap:2rem}
          @media(min-width:768px){.features-grid{grid-template-columns:repeat(2,1fr)}}
          @media(min-width:1024px){.features-grid{grid-template-columns:repeat(3,1fr)}}
          .features-grid-categories{grid-template-columns:1fr}
          @media(min-width:768px){.features-grid-categories{grid-template-columns:repeat(2,1fr)}}
          @media(min-width:1024px){.features-grid-categories{grid-template-columns:repeat(3,1fr)}}
          .feature-card{background:transparent;padding:1.5rem}
          .feature-card-category{display:flex;flex-direction:column}
          .feature-card-header{display:flex;align-items:center;gap:.6rem;padding-bottom:1rem;border-bottom:1px solid rgba(15,23,42,.08);margin-bottom:1rem}
          .feature-cat-icon{color:#2563eb;flex-shrink:0}
          .feature-list{list-style:none;margin:0;padding:0}
          .feature-list li{display:flex;align-items:flex-start;gap:.6rem;font-size:.875rem;color:#475569;padding:.4rem 0;line-height:1.5}
          .feature-check{color:#2563eb;flex-shrink:0;margin-top:.15em}
          .feature-icon{width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;margin-bottom:1rem}
          .feature-card h3{font-weight:600;font-size:1.0625rem;color:#0f172a;margin:0}
          .feature-card p{color:#475569}
          .pr-section{background:#fff;margin-top:-1px;padding:5rem 1.5rem 6rem;border-top:1px solid #f1f5f9}
          @media(min-width:768px){.pr-section{padding:6rem 1.5rem 7rem}}
          .pr-inner{max-width:80rem;margin:0 auto}
          .pr-header{margin-bottom:3rem}
          .pr-kicker{display:inline-block;font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#3b82f6;margin-bottom:.75rem}
          .pr-title{font-size:1.875rem;font-weight:800;color:#0f172a;margin:0 0 .75rem;letter-spacing:-.03em}
          @media(min-width:768px){.pr-title{font-size:2.5rem}}
          .pr-subtitle{font-size:1rem;color:#64748b;max-width:38rem;margin:0;line-height:1.65}
          .pr-cards{display:grid;grid-template-columns:1fr;gap:0;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;margin-bottom:4rem}
          @media(min-width:768px){.pr-cards{grid-template-columns:repeat(3,1fr)}}
          .pr-card{position:relative;padding:2rem 1.75rem;display:flex;flex-direction:column;border-right:1px solid #e2e8f0;background:#fff}
          .pr-card:last-child{border-right:none}
          @media(max-width:767px){.pr-card{border-right:none;border-bottom:1px solid #e2e8f0}}
          @media(max-width:767px){.pr-card:last-child{border-bottom:none}}
          .pr-card-popular{border-top:2px solid #2563eb}
          .pr-card-badge{display:inline-block;margin-bottom:1rem;font-size:.7rem;font-weight:700;color:#2563eb;letter-spacing:.1em;text-transform:uppercase}
          .pr-card-header{margin-bottom:1.5rem}
          .pr-card-name{font-size:1.0625rem;font-weight:700;color:#0f172a;margin:0 0 .35rem}
          .pr-card-desc{font-size:.8125rem;color:#94a3b8;margin:0}
          .pr-card-price{margin-bottom:1.75rem;padding-bottom:1.75rem;border-bottom:1px solid #f1f5f9;display:flex;flex-direction:column;gap:.2rem}
          .pr-amount{font-size:2.25rem;font-weight:800;color:#0f172a;letter-spacing:-.04em;line-height:1}
          @media(min-width:768px){.pr-amount{font-size:2.5rem}}
          .pr-currency{font-size:.9rem;font-weight:600;color:#64748b}
          .pr-note{font-size:.78rem;color:#94a3b8;margin-top:.25rem}
          .pr-amount-custom{font-size:1.5rem;font-weight:700;color:#2563eb}
          .pr-features{list-style:none;margin:0 0 2rem;padding:0;flex:1}
          .pr-feature-item{display:flex;align-items:flex-start;gap:.6rem;padding:.45rem 0;font-size:.875rem;color:#475569}
          .pr-check{color:#2563eb;flex-shrink:0;margin-top:.1rem}
          .pr-btn{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;width:100%;padding:.875rem 1.5rem;border-radius:8px;font-weight:600;font-size:.9rem;text-decoration:none;transition:background .2s,border-color .2s,color .2s}
          .pr-btn-primary{background:#2563eb;color:#fff}
          .pr-btn-primary:hover{background:#1d4ed8}
          .pr-btn-ghost{background:transparent;border:1px solid #e2e8f0;color:#374151}
          .pr-btn-ghost:hover{border-color:#2563eb;color:#2563eb}
          .pr-table-wrap{border:1px solid #e2e8f0;border-radius:12px;overflow:hidden}
          .pr-table-header-row{padding:1.75rem 1.75rem 1.5rem}
          .pr-table-title{font-size:1.875rem;font-weight:800;color:#0f172a;margin:.35rem 0 0;letter-spacing:-.03em}
          @media(min-width:768px){.pr-table-title{font-size:2.5rem}}
          .pr-table{display:grid;border-top:1px solid #e2e8f0}
          .pr-table-head,.pr-table-row{display:grid;grid-template-columns:2fr 1fr 1fr 1fr}
          .pr-table-head{background:transparent;padding:0;border-bottom:1px solid #e2e8f0}
          .pr-table-head .pr-table-cell{font-size:.8rem;font-weight:700;color:#0f172a;text-transform:uppercase;letter-spacing:.06em;padding:.85rem 1rem}
          .pr-table-row{border-top:1px solid #f1f5f9}
          .pr-table-row-alt{background:#fafafa}
          .pr-table-cell{padding:.75rem 1rem;font-size:.875rem;color:#475569;display:flex;align-items:center}
          .pr-table-cell-feature{font-weight:500;color:#1e293b}
          .pr-table-val{font-size:.875rem;color:#374151;font-weight:500}
          .pr-dash{color:#cbd5e1;font-size:1rem}
          .section-pricing{background:#FFFFFF!important;margin-top:-1px}
          .pricing-check{color:#2563eb;flex-shrink:0}
          .pricing-wrap{max-width:42rem;margin:0 auto}
          .contact-card{max-width:42rem;margin:0 auto;background:#fff;border-radius:1rem;padding:2rem;box-shadow:0 20px 50px rgba(0,0,0,.08);border:1px solid #f1f5f9}
          @media(min-width:768px){.contact-card{padding:3rem}}
          .contact-item{margin-bottom:1.5rem}
          .contact-item h3{font-weight:600;color:#1e293b;margin-bottom:.5rem}
          .contact-item a{color:#2563eb;font-size:1.125rem;font-weight:500;text-decoration:none}
          .contact-item a:hover{text-decoration:underline}
          .contact-item p{color:#475569}
          .section-seo{background:#fff!important;margin-top:-1px;padding:5rem 1.5rem;border-bottom:1px solid #e2e8f0}
          .policy-page{min-height:100vh;display:flex;flex-direction:column;background:#fff}
          .policy-hero{position:relative;padding-top:7rem;padding-bottom:3rem;background:#fff;overflow:hidden}
          .policy-hero-bg{position:absolute;inset:0;background-image:radial-gradient(rgba(0,0,0,.08) 1px,transparent 1px);background-size:24px 24px}
          .policy-hero-inner{position:relative;max-width:48rem;margin:0 auto;padding:0 1.5rem;text-align:center}
          .policy-hero h1{font-size:1.75rem;font-weight:700;color:#0f172a;margin:0}
          @media(min-width:768px){.policy-hero h1{font-size:2rem}}
          .policy-content{flex:1;padding:2rem 1.5rem 5rem;max-width:48rem;margin:0 auto;width:100%;text-align:left}
          .policy-content h3{font-size:1.125rem;font-weight:700;color:#0f172a;margin:2rem 0 0.75rem;line-height:1.4}
          .policy-content p{font-size:.9375rem;color:#475569;line-height:1.75;margin-bottom:1rem}
          .policy-content p:last-child{margin-bottom:0}
          .policy-content a{color:#2563eb;text-decoration:none}
          .policy-content a:hover{text-decoration:underline}
          .policy-content strong{color:#0f172a;font-weight:600}
          .seo-main-title{font-size:1.5rem;font-weight:700;color:#0f172a;margin-bottom:2.5rem;padding-left:1rem;border-left:4px solid #2563eb}
          @media(min-width:768px){.seo-main-title{font-size:1.75rem}}
          .seo-columns{display:grid;grid-template-columns:1fr;gap:2.5rem}
          @media(min-width:768px){.seo-columns{grid-template-columns:1fr 1fr;gap:3rem}}
          .seo-col h3{font-size:1.125rem;font-weight:700;color:#0f172a;margin-bottom:1rem;line-height:1.4}
          .seo-col p{font-size:.9375rem;color:#475569;line-height:1.75;margin-bottom:1rem}
          .seo-col p:last-child{margin-bottom:0}
          .seo-col p strong{color:#0f172a;font-weight:600}
          .seo-col a{color:#2563eb;text-decoration:none}
          .seo-col a:hover{text-decoration:underline}
          .seo-col h3:not(:first-child){margin-top:2rem}
          .section-faq{background:#FFFFFF!important;margin-top:-1px}
          .section-faq .section-inner{background:#FFFFFF}
          .faq-section-header{text-align:left}
          .faq2-section{background:#fff;margin-top:-1px;padding:5rem 1.5rem 6rem;border-top:1px solid #f1f5f9}
          @media(min-width:768px){.faq2-section{padding:6rem 1.5rem 7rem}}
          .faq2-inner{max-width:80rem;margin:0 auto}
          .faq2-header{margin-bottom:3rem}
          .faq2-kicker{display:inline-block;font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#3b82f6;margin-bottom:.75rem}
          .faq2-title{font-size:1.875rem;font-weight:800;color:#0f172a;margin:0 0 .75rem;letter-spacing:-.03em}
          @media(min-width:768px){.faq2-title{font-size:2.5rem}}
          .faq2-subtitle{font-size:1rem;color:#64748b;max-width:38rem;margin:0;line-height:1.65}
          .faq2-grid{display:grid;grid-template-columns:1fr;gap:0;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden}
          @media(min-width:768px){.faq2-grid{grid-template-columns:1fr 1fr}}
          .faq2-col{display:flex;flex-direction:column}
          .faq2-col:first-child{border-right:1px solid #e2e8f0}
          @media(max-width:767px){.faq2-col:first-child{border-right:none;border-bottom:1px solid #e2e8f0}}
          .faq2-item{border-bottom:1px solid #f1f5f9}
          .faq2-item:last-child{border-bottom:none}
          .faq2-item-open .faq2-btn{color:#2563eb}
          .faq2-item-open .faq2-icon{transform:rotate(180deg);color:#2563eb}
          .faq2-btn{width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.1rem 1.5rem;background:transparent;border:none;font-family:inherit;font-size:.9375rem;font-weight:500;color:#0f172a;text-align:left;cursor:pointer;transition:color .2s}
          .faq2-btn:hover{color:#2563eb}
          .faq2-q{flex:1;line-height:1.45}
          .faq2-icon{flex-shrink:0;color:#94a3b8;transition:transform .25s,color .2s}
          @keyframes faq2AnswerIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
          .faq2-answer{padding:.25rem 1.5rem 1.25rem;animation:faq2AnswerIn .25s ease-out forwards}
          .faq2-answer p{margin:0;font-size:.875rem;color:#475569;line-height:1.65}
          .cta-section{position:relative;padding:3rem 1.5rem;overflow:visible}
          .cta-inner{position:relative;max-width:80rem;margin:0 auto;display:flex;flex-direction:column;gap:2rem;align-items:center;justify-content:space-between;background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 50%,#0f172a 100%);border-radius:24px 16px 16px 24px;padding:2.5rem 2rem;overflow:hidden}
          @media(min-width:768px){.cta-inner{flex-direction:row;padding:3rem 3.5rem;gap:2rem}}
          .cta-bg-accent{position:absolute;top:-30%;right:-10%;width:20rem;height:20rem;background:rgba(59,130,246,.2);border-radius:50%;filter:blur(70px);pointer-events:none}
          .cta-inner .cta-text,.cta-inner .cta-phone-block{position:relative;z-index:1}
          .cta-text{text-align:center}
          @media(min-width:768px){.cta-text{text-align:left}}
          .cta-line1,.cta-line2{color:#fff;font-size:1.25rem;font-weight:600;margin:0;line-height:1.4}
          @media(min-width:768px){.cta-line1,.cta-line2{font-size:1.5rem}}
          .cta-line2{margin-top:.25rem}
          .cta-phone-block{display:flex;flex-direction:column;align-items:center;gap:.5rem;text-decoration:none;color:#fff;transition:opacity .2s}
          .cta-phone-block:hover{opacity:.9}
          .cta-phone-icon-wrap{width:4rem;height:4rem;border:2px solid #fff;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:.25rem}
          .cta-phone-label{font-size:.7rem;font-weight:700;letter-spacing:.15em;opacity:.9}
          .cta-phone-number{font-size:1.5rem;font-weight:800;letter-spacing:.02em}
          @media(min-width:768px){.cta-phone-number{font-size:1.75rem}}
          .cta-wave{position:absolute;bottom:0;left:0;right:0;width:100%;height:5rem;line-height:0;z-index:10;pointer-events:none}
          .cta-wave svg{width:100%;height:100%;display:block;vertical-align:middle}
          .site-footer{position:relative}
          .footer-mobile{display:block;background:#1a1a1a;color:#fff;border-top:1px solid rgba(255,255,255,.08);overflow-x:hidden}
          @media(min-width:640px){.footer-mobile{display:none}}
          .footer-mobile-inner{padding:1.5rem 1rem}
          .footer-mobile-brand{display:flex;flex-direction:column;align-items:center;margin-bottom:1.25rem}
          .footer-mobile-logo{display:flex;align-items:center;text-decoration:none}
          .footer-mobile-logo-img{display:block;object-fit:contain;height:2.25rem;width:auto;filter:brightness(0) invert(1)}
          .footer-mobile-phone{display:block;font-size:1rem;font-weight:600;color:#2563eb;text-decoration:none;margin-top:.5rem}
          .footer-mobile-hide{display:none!important}
          .footer-mobile-phone:hover{text-decoration:underline}
          .footer-mobile-web{font-size:.875rem;color:rgba(255,255,255,.5);text-decoration:none;margin-top:.25rem}
          .footer-mobile-web:hover{color:#2563eb}
          .footer-mobile-quick{display:flex;flex-wrap:wrap;justify-content:center;gap:.5rem 1rem;margin-bottom:1rem}
          .footer-mobile-quick-link{font-size:.875rem;color:rgba(255,255,255,.45);text-decoration:none}
          .footer-mobile-quick-link:hover{color:#2563eb}
          .footer-mobile-accordion{border-top:1px solid rgba(255,255,255,.06)}
          .footer-mobile-accordion-btn{width:100%;display:flex;align-items:center;justify-content:space-between;padding:.75rem 0;background:none;border:none;color:#fff;font-size:.875rem;font-weight:600;cursor:pointer;text-align:left}
          .footer-mobile-chevron{color:rgba(255,255,255,.4);transition:transform .2s}
          .footer-mobile-chevron.open{transform:rotate(180deg)}
          .footer-mobile-accordion-list{list-style:none;margin:0;padding:0 0 .75rem}
          .footer-mobile-accordion-list li{margin-bottom:.35rem}
          .footer-mobile-accordion-link{font-size:.875rem;color:rgba(255,255,255,.4);text-decoration:none;display:block}
          .footer-mobile-accordion-link:hover{color:#2563eb}
          .footer-mobile-app{border-top:1px solid rgba(255,255,255,.06);padding:.75rem 0;text-align:center}
          .footer-mobile-app-title{font-size:.75rem;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.75rem}
          .footer-mobile-app-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:.75rem}
          .footer-mobile-app-link{display:flex;align-items:center}
          .footer-mobile-app-img{height:40px;width:auto;object-fit:contain}
          .footer-mobile-cta{margin-top:1.25rem;padding-top:1.25rem;border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:center}
          .footer-mobile-cta-btn{display:flex;align-items:center;justify-content:center;gap:.5rem;width:90%;max-width:320px;padding:1rem 1.5rem;background:#2563eb;color:#fff;font-size:1rem;font-weight:600;text-decoration:none;border-radius:12px;transition:background .2s}
          .footer-mobile-cta-btn:hover{background:#1d4ed8}
          .footer-mobile-bottom{margin-top:1.25rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,.06);text-align:left}
          .footer-mobile-copy{font-size:.6875rem;color:rgba(255,255,255,.25);margin:0 0 .75rem 0}
          .footer-mobile-policy{display:flex;flex-wrap:wrap;gap:.5rem .75rem}
          .footer-mobile-policy-link{font-size:.6875rem;color:rgba(255,255,255,.4);text-decoration:none}
          .footer-mobile-policy .footer-mobile-policy-link{display:inline}
          .footer-mobile-policy-link:hover{color:#2563eb}
          .footer-desktop{display:none;position:relative;background:#f8fafc;color:#475569;padding:4rem 0 2.5rem;border-top:none;overflow:visible}
          @media(min-width:640px){.footer-desktop{display:block}}
          .footer-wave{position:absolute;top:0;left:0;right:0;width:100%;height:5rem;margin-top:-5rem;line-height:0;z-index:1;pointer-events:none}
          .footer-wave svg{width:100%;height:100%;display:block;vertical-align:middle}
          .footer-inner{max-width:80rem;margin:0 auto;padding:0 1.5rem}
          .footer-top-row{display:grid;grid-template-columns:1fr;gap:2.5rem 2rem;padding-bottom:3rem;border-bottom:1px solid #e2e8f0}
          @media(min-width:640px){.footer-top-row{grid-template-columns:1fr 1fr}}
          @media(min-width:1024px){.footer-top-row{grid-template-columns:1.5fr 1fr 1fr 1fr;gap:3rem;align-items:start}}
          .footer-mid-row{display:grid;grid-template-columns:1fr;gap:2rem 2rem;padding-top:3rem}
          @media(min-width:640px){.footer-mid-row{grid-template-columns:1fr 1fr}}
          @media(min-width:1024px){.footer-mid-row{grid-template-columns:1.5fr 1fr 1fr 1fr;gap:3rem;align-items:start}}
          .footer-app-badges{display:flex;flex-direction:row;flex-wrap:wrap;gap:1rem;align-items:center}
          .footer-app-link{display:flex;align-items:center;justify-content:center;transition:opacity .2s;flex-shrink:0}
          .footer-app-link:hover{opacity:.85}
          .footer-app-img{display:block;height:48px;width:auto;object-fit:contain;object-position:center}
          .footer-brand{max-width:22rem}
          .footer-logo{display:flex;align-items:center;text-decoration:none}
          .footer-logo-img{display:block;object-fit:contain;height:2.25rem;width:auto}
          @media(min-width:768px){.footer-logo-img{height:2.75rem}}
          .footer-desc{font-size:.9rem;color:#64748b;line-height:1.6;margin:1rem 0 .75rem}
          .footer-social{display:flex;align-items:center;gap:.75rem;margin-top:1rem}
          .footer-social-link{display:flex;align-items:center;justify-content:center;width:2.25rem;height:2.25rem;border-radius:50%;background:#e2e8f0;color:#475569;text-decoration:none;transition:background .2s,color .2s}
          .footer-social-link:hover{background:#2563eb;color:#fff}
          .footer-nav-title{font-size:.8rem;font-weight:700;color:#0f172a;text-transform:uppercase;letter-spacing:.06em;margin-bottom:1rem}
          .footer-nav-list{list-style:none;margin:0;padding:0}
          .footer-nav-list li{margin-bottom:.45rem}
          .footer-nav-list a{color:#475569;text-decoration:none;font-size:.9rem}
          .footer-nav-list a:hover{color:#2563eb}
          .footer-bottom{margin-top:3rem;padding-top:2rem;border-top:1px solid #e2e8f0;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;font-size:.875rem;color:#64748b}
          .footer-bottom-copy{margin:0}
          .footer-bottom-policy{display:flex;flex-wrap:wrap;align-items:center;gap:1rem 1.5rem}
          .footer-bottom-policy a,.footer-bottom-policy button{color:#64748b;text-decoration:none;font-size:inherit}
          .footer-bottom-policy a:hover,.footer-bottom-policy button:hover{color:#2563eb}
          .mobile-app-section{position:relative;padding:5rem 1.5rem;overflow:hidden}
          @media(min-width:768px){.mobile-app-section{padding:6rem 1.5rem}}
          .mobile-app-bg{position:absolute;inset:0;background:linear-gradient(160deg,#0f172a 0%,#1e293b 45%,#0f172a 100%);pointer-events:none}
          .mobile-app-bg::before{content:"";position:absolute;top:-20%;right:-10%;width:40rem;height:40rem;background:radial-gradient(circle,rgba(59,130,246,.15) 0%,transparent 70%);border-radius:50%;pointer-events:none}
          .mobile-app-bg::after{content:"";position:absolute;bottom:-15%;left:-5%;width:30rem;height:30rem;background:radial-gradient(circle,rgba(99,102,241,.08) 0%,transparent 70%);border-radius:50%;pointer-events:none}
          .mobile-app-inner{position:relative;max-width:80rem;margin:0 auto;display:flex;flex-direction:column;gap:3rem;align-items:center;text-align:center}
          @media(min-width:1024px){.mobile-app-inner{flex-direction:row;gap:4rem;align-items:center;text-align:left;justify-content:space-between}}
          .mobile-app-phone-wrap{flex-shrink:0;order:1}
          @media(min-width:1024px){.mobile-app-phone-wrap{order:1;flex:0 0 45%}}
          .mobile-app-phone-frame{position:relative;width:min(280px,85vw);margin:0 auto;padding:12px;background:linear-gradient(145deg,#1e293b,#0f172a);border-radius:40px;box-shadow:0 25px 80px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.05),inset 0 1px 0 rgba(255,255,255,.08)}
          @media(min-width:768px){.mobile-app-phone-frame{width:320px;padding:14px;border-radius:44px}}
          .mobile-app-phone-frame::before{content:"";position:absolute;top:16px;left:50%;transform:translateX(-50%);width:80px;height:24px;background:#0f172a;border-radius:0 0 16px 16px;z-index:2}
          .mobile-app-phone-screen{overflow:hidden;border-radius:32px;background:#000;aspect-ratio:390/844;max-height:560px}
          @media(min-width:768px){.mobile-app-phone-screen{border-radius:36px}}
          .mobile-app-screenshot{width:100%;height:100%;object-fit:cover;display:block}
          .mobile-app-content{order:2;max-width:32rem}
          @media(min-width:1024px){.mobile-app-content{order:2;flex:1;max-width:42rem}}
          .mobile-app-title{font-size:1.875rem;font-weight:800;color:#fff;margin-bottom:1rem;line-height:1.2;letter-spacing:-.02em}
          @media(min-width:768px){.mobile-app-title{font-size:2.25rem}}
          .mobile-app-desc{font-size:1.0625rem;color:#94a3b8;line-height:1.6;margin-bottom:2rem}
          .mobile-app-badges{display:flex;flex-direction:column;gap:1rem;align-items:center}
          @media(min-width:640px){.mobile-app-badges{flex-direction:row;flex-wrap:wrap;gap:1.25rem;align-items:center;justify-content:center}}
          @media(min-width:1024px){.mobile-app-badges{justify-content:flex-start}}
          .mobile-app-btn{display:flex;align-items:center;justify-content:center;padding:.75rem 1.5rem;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.25),0 2px 8px rgba(0,0,0,.15);transition:transform .2s,box-shadow .2s;text-decoration:none}
          .mobile-app-btn:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(0,0,0,.3),0 4px 12px rgba(0,0,0,.2)}
          .mobile-app-btn-img{height:52px;width:auto;max-width:180px;object-fit:contain;display:block}
          .animate-section{opacity:0}
          .animate-section.animate-visible{opacity:1}
          .anim-features{opacity:1}
          .anim-features .ft-header{opacity:0;transform:translateX(-40px);transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1)}
          .anim-features .ft-layout{opacity:0;transform:perspective(1000px) rotateX(6deg) translateY(50px);transition:opacity 1s cubic-bezier(.22,1,.36,1) .2s,transform 1s cubic-bezier(.22,1,.36,1) .2s}
          .anim-features .section-header{opacity:0;transform:translateX(-40px);transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1)}
          .anim-features .feature-card{opacity:0;transform:translateY(50px);transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1)}
          .anim-features.animate-visible .ft-header{opacity:1;transform:translateX(0)}
          .anim-features.animate-visible .section-header{opacity:1;transform:translateX(0)}
          .anim-features.animate-visible .ft-layout{opacity:1;transform:perspective(1000px) rotateX(0deg) translateY(0)}
          .anim-features.animate-visible .feature-card{opacity:1;transform:translateY(0)}
          .anim-pricing{opacity:1}
          .anim-pricing .pr-header{opacity:0;transform:translateY(30px) scale(.97);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1)}
          .anim-pricing .pr-cards{opacity:0;transform:translateY(0) scaleY(.92);transform-origin:top center;transition:opacity .9s cubic-bezier(.22,1,.36,1) .2s,transform .9s cubic-bezier(.22,1,.36,1) .2s}
          .anim-pricing .pr-table-wrap{opacity:0;transform:translateX(50px);transition:opacity .9s cubic-bezier(.22,1,.36,1) .35s,transform .9s cubic-bezier(.22,1,.36,1) .35s}
          .anim-pricing .section-header{opacity:0;transform:translateY(30px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}
          .anim-pricing.animate-visible .pr-header{opacity:1;transform:translateY(0) scale(1)}
          .anim-pricing.animate-visible .pr-cards{opacity:1;transform:translateY(0) scaleY(1)}
          .anim-pricing.animate-visible .pr-table-wrap{opacity:1;transform:translateX(0)}
          .anim-pricing.animate-visible .section-header{opacity:1;transform:translateY(0)}
          .anim-faq{opacity:1}
          .anim-faq .faq2-header{opacity:0;transform:translateY(28px);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1)}
          .anim-faq .faq2-col:first-child{opacity:0;transform:translateX(-60px);transition:opacity .9s cubic-bezier(.22,1,.36,1) .2s,transform .9s cubic-bezier(.22,1,.36,1) .2s}
          .anim-faq .faq2-col:last-child{opacity:0;transform:translateX(60px);transition:opacity .9s cubic-bezier(.22,1,.36,1) .3s,transform .9s cubic-bezier(.22,1,.36,1) .3s}
          .anim-faq .section-header{opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1)}
          .anim-faq.animate-visible .faq2-header{opacity:1;transform:translateY(0)}
          .anim-faq.animate-visible .faq2-col:first-child{opacity:1;transform:translateX(0)}
          .anim-faq.animate-visible .faq2-col:last-child{opacity:1;transform:translateX(0)}
          .anim-faq.animate-visible .section-header{opacity:1;transform:translateY(0)}
          .anim-demo{transition:opacity .6s ease-out}
          .anim-demo .section-header{opacity:0;transform:translateY(40px);transition:opacity .8s cubic-bezier(.34,1.56,.64,1),transform .8s cubic-bezier(.34,1.56,.64,1)}
          .anim-demo.animate-visible .section-header{opacity:1;transform:translateY(0)}
          .anim-demo .demo-form-wrap,.anim-demo .demo-success{opacity:0;transform:translateY(50px);transition:opacity 1s cubic-bezier(.34,1.56,.64,1),transform 1s cubic-bezier(.34,1.56,.64,1)}
          .anim-demo.animate-visible .demo-form-wrap,.anim-demo.animate-visible .demo-success{opacity:1;transform:translateY(0);transition-delay:.2s}
          .section-demo{background:#fff!important;margin-top:-1px;padding:5rem 1.5rem 6rem;border-top:1px solid #f1f5f9}
          @media(min-width:768px){.section-demo{padding:6rem 1.5rem 7rem}}
          .demo-section-header{text-align:left}
          .demo-section-header p{max-width:42rem}
          .demo-form-wrap{display:grid;gap:0;align-items:stretch;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;background:#fff}
          @media(min-width:768px){.demo-form-wrap{grid-template-columns:1fr 1fr;gap:0}}
          .demo-form-wrap .demo-form-col,.demo-form-wrap .demo-contact-col{padding:2rem 1.5rem}
          @media(min-width:768px){.demo-form-wrap .demo-form-col,.demo-form-wrap .demo-contact-col{padding:2.5rem 3rem}}
          .demo-form-wrap .demo-contact-col{border-top:1px solid #e2e8f0;background:#fafafa}
          @media(min-width:768px){.demo-form-wrap .demo-contact-col{border-top:none;border-left:1px solid #e2e8f0;background:#fafafa}}
          .demo-form{display:flex;flex-direction:column;gap:1.25rem}
          .demo-form-row label{display:block;font-size:.875rem;font-weight:600;color:#0f172a;margin-bottom:.35rem}
          .demo-form-row input,.demo-form-row textarea{width:100%;padding:.75rem 1rem;border:1px solid #e2e8f0;border-radius:10px;font-size:1rem;font-family:inherit;transition:border-color .2s}
          .demo-form-row input:focus,.demo-form-row textarea:focus{outline:none;border-color:#2563eb}
          .demo-form-row textarea{resize:vertical;min-height:100px}
          .demo-submit-btn{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:1rem 1.5rem;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;border:none;border-radius:12px;font-weight:600;font-size:1rem;cursor:pointer;transition:background .2s}
          .demo-submit-btn:hover:not(:disabled){background:linear-gradient(135deg,#3b82f6,#2563eb)}
          .demo-submit-btn:disabled{opacity:.7;cursor:not-allowed}
          .demo-contact-col{display:flex;flex-direction:column;gap:1rem}
          .demo-contact-item{display:flex;gap:1rem;align-items:flex-start;padding:1.25rem;border:1px solid #e2e8f0;border-radius:10px;background:#fff}
          .demo-contact-icon{color:#2563eb;flex-shrink:0;margin-top:.15rem}
          .demo-contact-label{display:block;font-size:.75rem;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.25rem}
          .demo-contact-item a,.demo-contact-item span{font-size:1rem;color:#0f172a;font-weight:500}
          .demo-contact-item a{text-decoration:none}
          .demo-contact-item a:hover{color:#2563eb;text-decoration:underline}
          .demo-success{text-align:center;padding:3rem 1.5rem}
          .demo-success-icon{width:4rem;height:4rem;margin:0 auto 1rem;background:#22c55e;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.75rem;font-weight:700}
          .demo-success h2{font-size:1.5rem;font-weight:700;color:#0f172a;margin-bottom:.5rem}
          .demo-success p{color:#475569;margin-bottom:1.5rem}
          .demo-call-btn{display:inline-flex;align-items:center;gap:.5rem}
          .section-demo .demo-call-btn{background:#2563eb!important;color:#fff!important}
          .section-demo .demo-call-btn:hover{background:#1d4ed8!important;color:#fff!important}
          .anim-seo{transition:opacity .6s ease-out}
          .anim-seo .seo-main-title{opacity:0;transform:translateY(40px);transition:opacity .8s cubic-bezier(.34,1.56,.64,1),transform .8s cubic-bezier(.34,1.56,.64,1)}
          .anim-seo.animate-visible .seo-main-title{opacity:1;transform:translateY(0)}
          .anim-seo .seo-col{opacity:0;transform:translateY(50px);transition:opacity .9s cubic-bezier(.34,1.56,.64,1),transform .9s cubic-bezier(.34,1.56,.64,1)}
          .anim-seo .seo-col:first-child{transform:translateY(50px) translateX(-40px)}
          .anim-seo .seo-col:last-child{transform:translateY(50px) translateX(40px)}
          .anim-seo.animate-visible .seo-col{opacity:1;transform:translateY(0) translateX(0)}
          .anim-seo.animate-visible .seo-col:first-child{transition-delay:.2s}
          .anim-seo.animate-visible .seo-col:last-child{transition-delay:.35s}
          .anim-footer{opacity:1}
          .anim-footer .footer-mobile,.anim-footer .footer-desktop{opacity:0;transform:translateY(40px);filter:blur(6px);transition:opacity 1s cubic-bezier(.22,1,.36,1),transform 1s cubic-bezier(.22,1,.36,1),filter .8s ease-out}
          .anim-footer.animate-visible .footer-mobile,.anim-footer.animate-visible .footer-desktop{opacity:1;transform:translateY(0);filter:blur(0)}
          .cookie-consent{position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%);z-index:9998;width:calc(100% - 2rem);max-width:36rem;padding:1rem 1.25rem;background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);border:1px solid rgba(255,255,255,.08);border-radius:12px;box-shadow:0 10px 40px rgba(0,0,0,.3);animation:cookieSlideUp .4s ease-out}
          @media(min-width:640px){.cookie-consent{bottom:2rem;padding:1rem 1.5rem}}
          @keyframes cookieSlideUp{from{transform:translate(-50%,100%);opacity:0}to{transform:translate(-50%,0);opacity:1}}
          .cookie-consent-inner{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem}
          .cookie-consent-content{display:flex;align-items:flex-start;gap:.75rem;flex:1;min-width:0}
          .cookie-consent-icon{color:#2563eb;flex-shrink:0;margin-top:.1rem}
          .cookie-consent-text{font-size:.8125rem;color:#cbd5e1;line-height:1.6;margin:0}
          .cookie-consent-link{color:#60a5fa;text-decoration:none;font-weight:500}
          .cookie-consent-link:hover{color:#93c5fd;text-decoration:underline}
          .cookie-consent-actions{display:flex;gap:.5rem;flex-shrink:0}
          .cookie-consent-btn{padding:.5rem 1rem;font-size:.8125rem;font-weight:600;border-radius:8px;cursor:pointer;transition:background .2s,border-color .2s,color .2s;border:1px solid transparent}
          .cookie-consent-btn-reject{background:transparent;border-color:rgba(255,255,255,.3);color:#e2e8f0}
          .cookie-consent-btn-reject:hover{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.4);color:#fff}
          .cookie-consent-btn-accept{background:linear-gradient(135deg,#2563eb,#1d4ed8);border-color:#2563eb;color:#fff}
          .cookie-consent-btn-accept:hover{background:linear-gradient(135deg,#3b82f6,#2563eb);border-color:#3b82f6}
          .whatsapp-fab{position:fixed;bottom:1.75rem;right:1.75rem;z-index:9990;width:3.25rem;height:3.25rem;background:#25d366;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(37,211,102,.4),0 2px 8px rgba(0,0,0,.15);text-decoration:none;transition:transform .25s cubic-bezier(.34,1.56,.64,1),box-shadow .25s ease;animation:waBounce 2.5s ease-in-out 2s infinite}
          @keyframes waBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
          .whatsapp-fab:hover{transform:scale(1.12) translateY(-2px)!important;box-shadow:0 8px 28px rgba(37,211,102,.5),0 4px 12px rgba(0,0,0,.2);animation:none}
          .whatsapp-fab-tooltip{position:absolute;right:calc(100% + .75rem);top:50%;transform:translateY(-50%);background:#1a1a1a;color:#fff;font-size:.75rem;font-weight:600;white-space:nowrap;padding:.35rem .7rem;border-radius:6px;pointer-events:none;opacity:0;transition:opacity .2s;letter-spacing:.02em}
          .whatsapp-fab-tooltip::after{content:'';position:absolute;left:100%;top:50%;transform:translateY(-50%);border:5px solid transparent;border-left-color:#1a1a1a}
          .whatsapp-fab:hover .whatsapp-fab-tooltip{opacity:1}
        `}} />
      </head>
      <body>
        <Header />
        {children}
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  );
}
