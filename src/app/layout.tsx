import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./Header";
import CookieConsent from "./CookieConsent";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_URL } from "../site-url";
import { DESKTOP_ARCHIVE_ABSOLUTE_URL } from "../download";
import {
  LIST_PRICE_BASLANGIC_SCHEMA,
  LIST_PRICE_PROFESYONEL_SCHEMA,
} from "../pricing";

const BASE_URL = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: "DijitalERP",
  title: {
    default: "DijitalERP — Ücretsiz ERP Programı İndir | Offline Stok Takip & Cari Yönetim",
    template: "%s | DijitalERP",
  },
  description:
    "Ücretsiz indir, hemen başla: stok takip, cari yönetim, fatura, kasa ve raporlar tek programda — %100 offline, veriler bilgisayarınızda. Aboneliksiz, tek seferlik lisans. KOBİ'ler için pratik ERP yazılımı. Ücretsiz demo & kurulum desteği: 0532 166 76 97.",
  category: "Business Software",
  formatDetection: { telephone: true, address: true, email: true },
  appleWebApp: { capable: true, title: "DijitalERP", statusBarStyle: "default" },
  keywords: [
    "ücretsiz ERP indir",
    "ücretsiz stok takip programı",
    "ücretsiz ERP yazılımı",
    "offline ERP",
    "Windows ERP ücretsiz",
    "ERP yazılımı",
    "stok takip yazılımı",
    "cari program",
    "fatura yazılımı",
    "E-Fatura",
    "KOBİ ERP",
    "masaüstü ERP indir",
    "barkod programı",
    "kasa programı",
    "stok programı indir",
    "ücretsiz fatura programı",
    "cari takip programı",
    "ön muhasebe programı",
    "barkodlu stok programı",
    "depo takip yazılımı",
    "perakende stok programı",
    "toptan satış programı",
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
    title: "DijitalERP — Ücretsiz Offline ERP, Stok Takip & Cari Yönetim Programı",
    description:
      "Ücretsiz Windows sürümünü indirerek offline ERP'yi deneyin: stok, cari, fatura, kasa, raporlar. Aboneliksiz, tek seferlik lisans. 0532 166 76 97.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DijitalERP — Ücretsiz Offline ERP & Stok Takip Programı",
    description:
      "Ücretsiz Windows masaüstü ERP indir — stok takip ve cari yönetim bilgisayarınızda, internet zorunluluğu yok. Aboneliksiz tek seferlik lisans.",
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
  verification: {
    google: "28ltQ6S1cgEcBiyfmOnZjGhxvVOpPTFKU2QCY-CqtP4",
  },
  icons: {
    icon: "/sembol.png",
    shortcut: "/sembol.png",
    apple: "/sembol.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
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
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;600;700&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DijitalERP",
              "url": SITE_URL,
              "logo": `${SITE_URL}/logo.png`,
              "description": "Windows için offline KOBİ ERP yazılımı. Ücretsiz masaüstü sürüm indirilebilir; stok, cari, fatura, kasa ve raporlama tek uygulamada.",
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
              "sameAs": [SITE_URL],
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
              "url": SITE_URL,
              "description": "Ücretsiz indirilebilir Windows masaüstü ERP sürümü ve lisanslı KOBİ paketleri. Stok takip, cari, fatura, E-Fatura, kasa — tamamen offline.",
              "downloadUrl": DESKTOP_ARCHIVE_ABSOLUTE_URL,
              "offers": [
                {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "TRY",
                  "name": "Ücretsiz Windows masaüstü sürümü — indir",
                  "url": DESKTOP_ARCHIVE_ABSOLUTE_URL
                },
                {
                  "@type": "Offer",
                  "price": LIST_PRICE_BASLANGIC_SCHEMA,
                  "priceCurrency": "TRY",
                  "name": "Başlangıç Paketi — lisans"
                },
                {
                  "@type": "Offer",
                  "price": LIST_PRICE_PROFESYONEL_SCHEMA,
                  "priceCurrency": "TRY",
                  "name": "Profesyonel Paketi — lisans"
                }
              ],
              "publisher": {
                "@type": "Organization",
                "name": "DijitalERP",
                "url": SITE_URL
              }
            })
          }}
        />
        <style dangerouslySetInnerHTML={{ __html: `
          *{box-sizing:border-box;margin:0;padding:0}
          :root{--page-bg:#ffffff}
          html,body{font-family:'Plus Jakarta Sans','Segoe UI',system-ui,sans-serif;color:#1e293b;background:var(--page-bg);min-height:100vh}
          .site-wrap{min-height:100vh;background:var(--page-bg)}
          .site-header{position:relative;width:100%;z-index:100;pointer-events:auto;background:#fff;border-bottom:1px solid #e4e4e7;box-shadow:none}
          .site-header-top{background:#f4f4f5;border-bottom:1px solid #e4e4e7}
          @media(max-width:767px){.site-header-top{display:none}}
          .site-header-top-inner{max-width:80rem;margin:0 auto;padding:.45rem 1.5rem;display:flex;align-items:center;justify-content:flex-end;gap:1.5rem}
          @media(min-width:1024px){.site-header-top-inner{padding:.45rem 2rem}}
          .site-header-top-link{font-size:.75rem;color:#52525b;text-decoration:none;letter-spacing:.01em}
          .site-header-top-link:hover{color:#18181b;text-decoration:underline}
          .site-header-main{background:#fff}
          .site-header.header-light .site-nav a,.site-header.header-light .site-nav-mobile-list a{color:#cbd5e1}
          .site-header.header-light .site-nav a:hover,.site-header.header-light .site-nav-mobile-list a:hover{color:#fff}
          .site-header.header-light .site-nav-toggle{color:#e2e8f0}
          .site-header.header-light .header-phone-cta,.site-header.header-light .header-download-cta{border-color:rgba(255,255,255,.4);color:#fff}
          .site-header.header-white .site-nav-link{color:#3f3f46}
          .site-header.header-white .site-nav-link:hover,.site-header.header-white .site-nav-link:focus-visible{color:#18181b}
          .site-header.header-white .site-nav-link-active{color:#1d4ed8;font-weight:600}
          .site-header.header-white .site-nav-toggle{color:#3f3f46}
          .site-header.header-white .site-nav-toggle:hover{color:#18181b}
          .site-header-inner{max-width:80rem;margin:0 auto;padding:0 1.5rem}
          @media(min-width:1024px){.site-header-inner{padding:0 2rem}}
          .site-header-row{display:flex;align-items:center;justify-content:space-between;gap:2rem;width:100%;min-height:4.25rem}
          @media(min-width:1024px){.site-header-row{min-height:4.75rem}}
          .site-logo{display:flex;align-items:center;text-decoration:none;color:inherit;flex-shrink:0}
          .site-logo-img{display:block;object-fit:contain;height:2rem;width:auto}
          @media(min-width:768px){.site-logo-img{height:2.25rem}}
          @media(min-width:1024px){.site-logo-img{height:2.5rem}}
          .site-nav{display:none;align-items:center;justify-content:flex-start;flex:1;min-width:0;margin-left:1rem}
          @media(min-width:1024px){.site-nav{display:flex}}
          .site-nav-list,.site-nav-mobile-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0}
          @media(min-width:1024px){.site-nav-list{flex-direction:row;flex-wrap:nowrap;align-items:center;gap:0}}
          .site-nav li{display:flex}
          .site-nav-link{display:inline-flex;align-items:center;font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;color:#3f3f46;text-decoration:none;font-weight:400;font-size:.9375rem;letter-spacing:.01em;padding:.5rem 0;margin:0 1.125rem;white-space:nowrap;transition:color .15s ease}
          @media(min-width:1280px){.site-nav-link{font-size:1rem;margin:0 1.35rem}}
          .site-nav-link:hover,.site-nav-link:focus-visible{color:#18181b}
          .site-nav-link-active{color:#1d4ed8;font-weight:600}
          .site-header-actions{display:flex;align-items:center;gap:.75rem;flex-shrink:0}
          .site-nav-toggle{display:flex;align-items:center;justify-content:center;background:transparent;border:none;color:#3f3f46;cursor:pointer;padding:.35rem;transition:color .15s}
          .site-nav-toggle:hover{color:#18181b}
          @media(min-width:1024px){.site-nav-toggle{display:none}}
          .site-nav-mobile{position:fixed;inset:0;top:0;left:0;right:0;bottom:0;background:#fff;z-index:99999;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .2s,visibility .2s;overflow-y:auto}
          .site-nav-mobile.open{opacity:1;visibility:visible;pointer-events:auto}
          .site-nav-mobile-overlay{display:none}
          .site-nav-mobile-header{display:flex;align-items:center;justify-content:space-between;padding:1rem 1.5rem;border-bottom:1px solid #e4e4e7;background:#fff}
          .site-nav-mobile-close{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;background:transparent;border:none;color:#3f3f46;cursor:pointer;transition:color .15s}
          .site-nav-mobile-close:hover{color:#18181b}
          .site-nav-mobile-inner{display:flex;flex-direction:column;padding:0 1.5rem 2rem}
          .site-nav-mobile-main{list-style:none;margin:0;padding:0;display:flex;flex-direction:column}
          .site-nav-mobile-link{display:block;font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;color:#27272a;text-decoration:none;font-size:1rem;font-weight:400;padding:1rem 0;border-bottom:1px solid #f4f4f5;transition:color .15s}
          .site-nav-mobile-link:hover{color:#1d4ed8}
          .site-nav-mobile-link-active{color:#1d4ed8;font-weight:600}
          .site-nav-mobile-divider{display:none}
          .site-nav-mobile-accordion{border-bottom:1px solid #f4f4f5}
          .site-nav-mobile-accordion-btn{width:100%;display:flex;align-items:center;justify-content:space-between;padding:1rem 0;background:none;border:none;color:#27272a;font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:1rem;font-weight:500;cursor:pointer;text-align:left}
          .site-nav-mobile-accordion-btn:hover{color:#1d4ed8}
          .site-nav-mobile-accordion-chevron{color:#71717a;transition:transform .2s}
          .site-nav-mobile-accordion-chevron.open{transform:rotate(180deg)}
          .site-nav-mobile-accordion-list{list-style:none;margin:0;padding:0 0 .75rem 1rem}
          .site-nav-mobile-accordion-list a{display:block;color:#52525b;text-decoration:none;font-size:.9375rem;padding:.5rem 0;transition:color .15s}
          .site-nav-mobile-accordion-list a:hover{color:#1d4ed8}
          .site-nav-mobile-app{margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid #e4e4e7;text-align:center}
          .site-nav-mobile-app-title{font-size:.6875rem;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1rem}
          .site-nav-mobile-app-badges{display:flex;justify-content:center;gap:1rem;flex-wrap:wrap}
          .site-nav-mobile-app-link{display:flex;align-items:center}
          .site-nav-mobile-app-img{height:40px;width:auto;object-fit:contain}
          .site-nav-mobile-cta{margin-top:1.5rem;display:flex;flex-direction:column;align-items:stretch;gap:.75rem}
          .site-nav-mobile-download-btn{display:flex;align-items:center;justify-content:center;gap:.5rem;width:100%;padding:.875rem 1.25rem;background:#fff;border:1px solid #d4d4d8;border-radius:4px;color:#27272a;font-size:.9375rem;font-weight:500;text-decoration:none;transition:background .15s,border-color .15s}
          .site-nav-mobile-download-btn:hover{background:#fafafa;border-color:#a1a1aa}
          .site-nav-mobile-cta-btn{display:flex;align-items:center;justify-content:center;gap:.5rem;width:100%;padding:.875rem 1.25rem;background:#2563eb;color:#fff;font-size:.9375rem;font-weight:600;text-decoration:none;border-radius:4px;transition:background .15s}
          .site-nav-mobile-cta-btn:hover{background:#1d4ed8}
          @media(min-width:1024px){.site-nav-mobile{display:none!important}}
          .header-cta-group{display:none;align-items:center;gap:.625rem;flex-shrink:0}
          @media(min-width:768px){.header-cta-group{display:flex}}
          .header-phone-cta,.header-download-cta{display:flex;align-items:center;gap:.5rem;padding:.625rem 1rem;border-radius:4px;text-decoration:none;font-size:.875rem;font-weight:500;transition:background .15s,border-color .15s,color .15s;flex-shrink:0;white-space:nowrap}
          .header-phone-cta{background:#fff;border:1px solid #d4d4d8;color:#27272a}
          .header-phone-cta:hover{background:#fafafa;border-color:#a1a1aa;color:#18181b}
          .header-download-cta{background:#2563eb;border:1px solid #2563eb;color:#fff;font-weight:600}
          .header-download-cta:hover{background:#1d4ed8;border-color:#1d4ed8;color:#fff}
          @media(max-width:1023px){.header-phone-cta span{display:none}}
          .header-phone-mobile{display:flex!important;align-items:center;gap:.75rem;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff!important;padding:1rem 1.5rem;border-radius:12px;font-weight:600;text-decoration:none;font-size:1rem;box-shadow:0 4px 14px rgba(37,99,235,.35)}
          .header-phone-mobile:hover{background:#3b82f6!important;color:#fff!important}
          .hero{position:relative;width:100%;min-height:clamp(28rem,52vw,38rem);padding:3.5rem 0 4rem;color:#fff;overflow:hidden;display:flex;align-items:center}
          @media(min-width:768px){.hero{padding:4.5rem 0 5rem}}
          .hero-bg{position:absolute;inset:0;z-index:0}
          .hero-bg-img{width:100%;height:100%;object-fit:cover;object-position:68% center;display:block}
          .hero-bg-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(15,23,42,.9) 0%,rgba(15,23,42,.78) 32%,rgba(15,23,42,.45) 58%,rgba(15,23,42,.15) 100%)}
          .hero-inner{position:relative;z-index:2;max-width:80rem;margin:0 auto;padding:0 1.5rem;display:grid;grid-template-columns:1fr;gap:2rem;align-items:center;width:100%}
          @media(min-width:1024px){.hero-inner{grid-template-columns:1fr;gap:2.5rem;text-align:left}}
          .hero-content{order:1}
          .hero-anim{opacity:0}
          .hero-anim-1{animation:heroFadeIn .6s ease-out .15s forwards}
          @keyframes heroFadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
          .hero-anim-2{transform:translateY(12px);filter:none;animation:heroDescIn .9s ease-out .5s forwards}
          @keyframes heroDescIn{to{opacity:1;transform:translateY(0)}}
          .hero-anim-3{transform:translateY(16px);animation:heroBtnsIn .8s ease-out .7s forwards}
          @keyframes heroBtnsIn{to{opacity:1;transform:translateY(0)}}
          .hero-anim-4{transform:translateY(20px);animation:heroStatsIn .8s ease-out .9s forwards}
          @keyframes heroStatsIn{to{opacity:1;transform:translateY(0)}}
          /* Kicker */
          .hero-kicker{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem .9rem .4rem .55rem;background:rgba(37,99,235,.1);border:1px solid rgba(37,99,235,.35);border-radius:9999px;font-size:.8rem;font-weight:700;color:#1d4ed8;letter-spacing:.04em;margin-bottom:1.25rem;animation:kickerPop .6s cubic-bezier(.34,1.56,.64,1) .05s both}
          @keyframes kickerPop{from{opacity:0;transform:translateY(-8px) scale(.95)}to{opacity:1;transform:none}}
          .hero-kicker-dot{width:7px;height:7px;border-radius:50%;background:#3b82f6;box-shadow:0 0 8px #3b82f6;animation:dotPulse 1.8s ease-in-out infinite}
          @keyframes dotPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(.8)}}
          /* Hero tipografi — tek aile / tek renk düzeni (kurumsal) */
          .hero-eyebrow{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:.6875rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.72);margin:0 0 1rem}
          @media(min-width:768px){.hero-eyebrow{font-size:.75rem;margin-bottom:1.125rem}}
          .hero-title,.hero h1{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:clamp(1.875rem,3.8vw,2.75rem);font-weight:700;margin:0 0 1.25rem;line-height:1.18;letter-spacing:-.015em;color:#fff;white-space:normal;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;max-width:14ch;text-wrap:balance}
          @media(min-width:768px){.hero-title,.hero h1{line-height:1.2;max-width:none}}
          .hero-desc{font-size:1rem;color:rgba(255,255,255,.88);max-width:32rem;margin-bottom:1.75rem;line-height:1.72;letter-spacing:-.011em;font-weight:400;font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;-webkit-font-smoothing:antialiased}
          @media(min-width:768px){.hero-desc{font-size:1.0625rem;line-height:1.7}}
          /* Butonlar */
          .hero-btns{display:flex;flex-wrap:wrap;gap:.75rem;align-items:stretch;margin-bottom:1rem}
          .hero-btns .btn-primary,.hero-btns .btn-secondary{display:flex;align-items:center;justify-content:center;gap:.5rem;min-width:0;text-align:center;transition:transform .2s,box-shadow .2s,background .2s,border-color .2s}
          .hero-btns .btn-primary{background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;border:1px solid rgba(29,78,216,.6);box-shadow:0 6px 18px rgba(37,99,235,.32),inset 0 1px 0 rgba(255,255,255,.25)}
          .hero-btns .btn-primary:hover{background:linear-gradient(135deg,#3b82f6,#2563eb);box-shadow:0 10px 26px rgba(37,99,235,.42),inset 0 1px 0 rgba(255,255,255,.3)}
          .hero-btns .btn-secondary{background:transparent;border:1px solid rgba(255,255,255,.55);color:#fff;backdrop-filter:none}
          .hero-btns .btn-secondary:hover{border-color:#fff;color:#fff;background:rgba(255,255,255,.08)}
          .hero-btns .btn-primary:hover,.hero-btns .btn-secondary:hover{transform:translateY(-2px)}
          .hero-sub-cta{margin-top:.35rem;margin-bottom:0;text-align:inherit}
          .hero-inline-link{display:inline-flex;align-items:center;gap:.35rem;font-size:.9rem;font-weight:600;color:rgba(255,255,255,.92);text-decoration:none}
          .hero-inline-link:hover{text-decoration:underline;color:#fff}
          /* Rozet listesi */
          .hero-badges{display:flex;flex-wrap:wrap;gap:.5rem .6rem;margin-top:.75rem;margin-bottom:1.5rem}
          .hero-badge-item{display:inline-flex;align-items:center;gap:.45rem;font-size:.75rem;font-weight:600;color:rgba(255,255,255,.92);background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.22);padding:.42rem .8rem;border-radius:4px;backdrop-filter:blur(4px);transition:border-color .2s,background .2s}
          .hero-badge-item:hover{border-color:rgba(255,255,255,.4);background:rgba(255,255,255,.16)}
          .hero-badge-item svg{color:#93c5fd;flex-shrink:0}
          .btn-primary{display:inline-flex;align-items:center;gap:.5rem}
          .hero-stats{display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;gap:.5rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.18)}
          @media(min-width:480px){.hero-stats{grid-template-columns:1fr auto 1fr auto 1fr;gap:1rem}}
          @media(min-width:768px){.hero-stats{gap:1.5rem}}
          .hero-stat{display:flex;flex-direction:column;gap:.25rem;text-align:center;min-width:0}
          .hero-stat-num{font-size:1.35rem;font-weight:700;color:#fff;letter-spacing:-.03em;line-height:1.1}
          @media(min-width:480px){.hero-stat-num{font-size:1.75rem}}
          @media(min-width:768px){.hero-stat-num{font-size:2.5rem}}
          .hero-stat-label{font-size:.6rem;color:rgba(255,255,255,.65);font-weight:600;text-transform:uppercase;letter-spacing:.06em}
          @media(min-width:480px){.hero-stat-label{font-size:.7rem;letter-spacing:.08em}}
          @media(min-width:768px){.hero-stat-label{font-size:.8rem}}
          .hero-stat-divider{display:none;width:1px;height:2.5rem;background:rgba(255,255,255,.2)}
          @media(min-width:480px){.hero-stat-divider{display:block}}
          @keyframes heroStatsRise{0%{opacity:0;transform:translateY(12px)}100%{opacity:1;transform:translateY(0)}}
          .hero-wave{position:absolute;bottom:0;left:0;right:0;width:100%;height:5rem;line-height:0;z-index:10;pointer-events:none;animation:heroWaveIn 1s cubic-bezier(.16,1,.3,1) 1s forwards;opacity:0;transform:translateY(20px)}
          @keyframes heroWaveIn{to{opacity:1;transform:translateY(0)}}
          .hero-wave svg{width:100%;height:100%;display:block;vertical-align:middle}
          @media(max-width:767px){
            .hero{min-height:26rem;padding:2.5rem 0 3rem}
            .hero-bg-img{object-position:75% center}
            .hero-bg-overlay{background:linear-gradient(180deg,rgba(15,23,42,.88) 0%,rgba(15,23,42,.72) 55%,rgba(15,23,42,.55) 100%)}
            .hero-inner{padding:0 1.5rem;gap:1.25rem;text-align:left}
            .hero-content{display:flex;flex-direction:column;align-items:stretch;width:100%}
            .hero-eyebrow{margin-bottom:.75rem}
            .hero-title,.hero h1{white-space:normal;text-align:left;text-wrap:wrap;font-size:clamp(1.75rem,7vw,2.125rem);margin-bottom:1rem;line-height:1.2;letter-spacing:-.01em;color:#fff;font-weight:700;max-width:none}
            .hero-desc{font-size:.9375rem;color:rgba(255,255,255,.88);margin-bottom:1.125rem;line-height:1.68;max-width:none;width:100%;letter-spacing:-.01em;font-weight:400;text-align:left}
            .hero-btns{width:100%;max-width:none;flex-direction:row;flex-wrap:nowrap;align-items:stretch;gap:.45rem;margin-bottom:.25rem}
            .hero-btns .btn-primary,.hero-btns .btn-secondary{flex:1 1 0;min-width:0;width:auto;padding:.72rem .45rem;font-size:.78rem;line-height:1.2}
            .hero-sub-cta{text-align:left;margin-top:.4rem}
            .hero-inline-link{justify-content:flex-start}
            .hero-badges{display:none}
            .hero-content>.hero-anim-4{display:none}
            .hero-anim-1{animation:heroMobileFade .5s ease-out .1s forwards}
            .hero-anim-2,.hero-anim-3,.hero-anim-4{animation:heroMobileFade .45s ease-out forwards}
            .hero-anim-2{animation-delay:.2s;filter:none}
            .hero-anim-3{animation-delay:.3s}
            .hero-anim-4{animation-delay:.35s}
            @keyframes heroMobileFade{from{opacity:0;transform:translateY(8px);filter:blur(0)}to{opacity:1;transform:none;filter:blur(0)}}
          }
          .btn-primary{background:#fff;color:#0f172a;padding:.875rem 1.75rem;border-radius:8px;font-weight:700;font-size:.9375rem;text-decoration:none;border:none;letter-spacing:.01em;transition:background .2s,transform .2s}
          .btn-primary:hover{background:#e2e8f0;transform:translateY(-1px)}
          .btn-secondary{border:1px solid #cbd5e1;color:#334155;background:transparent;padding:.875rem 1.75rem;border-radius:8px;font-weight:500;font-size:.9375rem;text-decoration:none;transition:border-color .2s,color .2s,transform .2s}
          .btn-secondary:hover{border-color:#64748b;color:#0f172a;transform:translateY(-1px)}
          .section{padding:6rem 1.5rem}
          .section-light{background:var(--page-bg);position:relative;margin-top:-1px}
          .section-white{background:var(--page-bg)}
          .section-inner{max-width:80rem;margin:0 auto}
          .section-header{text-align:left;margin-bottom:4rem}
          .section-header h2{font-size:1.875rem;font-weight:700;color:#0f172a;margin-bottom:1rem}
          @media(min-width:768px){.section-header h2{font-size:2.25rem}}
          .section-header p{color:#475569;max-width:42rem}
          .sol-inner{max-width:80rem;margin:0 auto;padding:0 1.5rem}
          @media(min-width:1024px){.sol-inner{padding:0 2rem}}
          .sol-cap-section{background:#fafafa;border-top:1px solid #e4e4e7;border-bottom:1px solid #e4e4e7;padding:2.5rem 0}
          @media(min-width:768px){.sol-cap-section{padding:3rem 0}}
          .sol-cap-grid{display:grid;grid-template-columns:1fr;gap:0;border:1px solid #e4e4e7;background:#fff}
          @media(min-width:640px){.sol-cap-grid{grid-template-columns:repeat(2,1fr)}}
          @media(min-width:1024px){.sol-cap-grid{grid-template-columns:repeat(4,1fr)}}
          .sol-cap-card{padding:1.35rem 1.25rem;border-bottom:1px solid #e4e4e7}
          @media(min-width:640px){.sol-cap-card:nth-child(odd){border-right:1px solid #e4e4e7}.sol-cap-card:nth-child(-n+2){border-bottom:1px solid #e4e4e7}}
          @media(min-width:1024px){.sol-cap-card{border-bottom:none;border-right:1px solid #e4e4e7}.sol-cap-card:last-child{border-right:none}}
          @media(max-width:639px){.sol-cap-card:last-child{border-bottom:none}}
          .sol-cap-title{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:1rem;font-weight:700;color:#18181b;margin:0 0 .45rem;letter-spacing:-.01em}
          .sol-cap-desc{font-size:.875rem;color:#52525b;margin:0;line-height:1.6}
          .sol-article-section{background:#fff;padding:4.5rem 0 5rem;border-top:1px solid #e4e4e7}
          @media(min-width:768px){.sol-article-section{padding:5.5rem 0 6rem}}
          .sol-article-header{margin-bottom:2.5rem;max-width:42rem}
          .sol-article-eyebrow{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:.6875rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#71717a;margin:0 0 .875rem}
          .sol-article-title{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:clamp(1.5rem,2.8vw,2rem);font-weight:700;color:#18181b;margin:0;line-height:1.25;letter-spacing:-.015em}
          .sol-article-grid{display:grid;grid-template-columns:1fr;gap:2.5rem}
          @media(min-width:768px){.sol-article-grid{grid-template-columns:1fr 1fr;gap:3rem}}
          .sol-article-col h3{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:1.0625rem;font-weight:700;color:#18181b;margin:0 0 .75rem;line-height:1.35}
          .sol-article-col h3:not(:first-child){margin-top:1.75rem}
          .sol-article-col p{font-size:.9375rem;color:#52525b;line-height:1.75;margin:0 0 1rem}
          .sol-article-col p:last-child{margin-bottom:0}
          .sol-article-col strong{color:#18181b;font-weight:600}
          .sol-article-link{color:#1d4ed8;text-decoration:none}
          .sol-article-link:hover{text-decoration:underline}
          .sol-cta-section{background:#fafafa;border-top:1px solid #e4e4e7;padding:3rem 0 4rem}
          @media(min-width:768px){.sol-cta-section{padding:3.5rem 0 4.5rem}}
          .sol-cta-box{display:flex;flex-direction:column;gap:1.5rem;padding:2rem 1.5rem;border:1px solid #e4e4e7;background:#fff}
          @media(min-width:768px){.sol-cta-box{flex-direction:row;align-items:center;justify-content:space-between;padding:2.25rem 2.5rem;gap:2rem}}
          .sol-cta-eyebrow{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:.6875rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#71717a;margin:0 0 .65rem}
          .sol-cta-title{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:clamp(1.25rem,2.5vw,1.625rem);font-weight:700;color:#18181b;margin:0 0 .5rem;line-height:1.25}
          .sol-cta-desc{font-size:.9375rem;color:#52525b;margin:0;line-height:1.65;max-width:32rem}
          .sol-cta-actions{display:flex;flex-wrap:wrap;gap:.75rem;flex-shrink:0}
          .sol-cta-btn{display:inline-flex;align-items:center;justify-content:center;padding:.7rem 1.15rem;border-radius:4px;font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:.875rem;font-weight:600;text-decoration:none;transition:background .15s,border-color .15s,color .15s}
          .sol-cta-btn-primary{background:#2563eb;border:1px solid #2563eb;color:#fff}
          .sol-cta-btn-primary:hover{background:#1d4ed8;border-color:#1d4ed8}
          .sol-cta-btn-outline{background:#fff;border:1px solid #d4d4d8;color:#27272a}
          .sol-cta-btn-outline:hover{background:#fafafa;border-color:#a1a1aa;color:#18181b}
          .section-features{background:var(--page-bg)!important;margin-top:-1px}
          .section-features .section-inner{background:var(--page-bg)}
          .ft-section{position:relative;background:#fff;margin-top:0;padding:4.5rem 1.5rem 5rem;border-top:1px solid #e4e4e7}
          @media(min-width:768px){.ft-section{padding:5.5rem 2rem 6rem}}
          @media(max-width:767px){.ft-section{padding:3rem 1.5rem 4rem}.ft-section .ft-header{margin-bottom:2.25rem}}
          .ft-inner{position:relative;z-index:1;max-width:80rem;margin:0 auto}
          .ft-header{text-align:left;margin-bottom:3.5rem;max-width:42rem}
          .ft-eyebrow{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:.6875rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#71717a;margin:0 0 .875rem}
          @media(min-width:768px){.ft-eyebrow{font-size:.75rem;margin-bottom:1rem}}
          .ft-title{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:clamp(1.75rem,3.2vw,2.375rem);font-weight:700;color:#18181b;margin:0 0 1rem;line-height:1.2;letter-spacing:-.015em}
          .ft-subtitle{font-size:.9375rem;color:#52525b;max-width:40rem;margin:0;line-height:1.7}
          @media(min-width:768px){.ft-subtitle{font-size:1rem}}
          .ft-subtitle-link{color:#1d4ed8;text-decoration:none;font-weight:500}
          .ft-subtitle-link:hover{text-decoration:underline}
          .ft-layout{display:grid;grid-template-columns:1fr;gap:0;border:1px solid #e4e4e7;background:#fff}
          @media(min-width:1024px){.ft-layout{grid-template-columns:17.5rem 1fr}}
          .ft-tabs{display:flex;flex-direction:row;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;background:#f4f4f5;border-bottom:1px solid #e4e4e7}
          .ft-tabs::-webkit-scrollbar{display:none}
          @media(min-width:1024px){.ft-tabs{flex-direction:column;overflow-x:visible;border-bottom:none;border-right:1px solid #e4e4e7;padding:.5rem 0}}
          .ft-tab{display:flex;align-items:center;gap:.75rem;width:100%;padding:.875rem 1.125rem;background:transparent;border:none;border-bottom:1px solid transparent;cursor:pointer;font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:.875rem;font-weight:500;color:#52525b;white-space:nowrap;transition:color .15s,background .15s,border-color .15s;flex-shrink:0;text-align:left}
          @media(min-width:1024px){.ft-tab{padding:.9rem 1.25rem;white-space:normal;flex-shrink:unset;border-bottom:1px solid #ececee;border-left:3px solid transparent}}
          .ft-tab:hover{color:#18181b;background:#fafafa}
          .ft-tab-active{color:#18181b!important;font-weight:600;background:#fff}
          @media(min-width:1024px){.ft-tab-active{border-left-color:#1d4ed8}}
          @media(max-width:1023px){.ft-tab-active{border-bottom-color:#1d4ed8}}
          .ft-tab-index{font-size:.6875rem;font-weight:600;letter-spacing:.08em;color:#a1a1aa;min-width:1.25rem}
          .ft-tab-active .ft-tab-index{color:#1d4ed8}
          .ft-tab-label{line-height:1.35}
          .ft-panel{padding:1.75rem 1.5rem 2rem;background:#fff}
          @media(min-width:768px){.ft-panel{padding:2.25rem 2.5rem 2.5rem}}
          .ft-panel-head{display:flex;align-items:flex-start;justify-content:space-between;gap:1.5rem;padding-bottom:1.75rem;margin-bottom:1.75rem;border-bottom:1px solid #f4f4f5}
          .ft-panel-head-main{min-width:0}
          .ft-panel-eyebrow{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:.6875rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#71717a;margin:0 0 .5rem}
          .ft-panel-title{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:1.25rem;font-weight:700;color:#18181b;margin:0 0 .625rem;line-height:1.3;letter-spacing:-.01em}
          @media(min-width:768px){.ft-panel-title{font-size:1.375rem}}
          .ft-panel-desc{font-size:.9375rem;color:#52525b;margin:0;line-height:1.65;max-width:36rem}
          .ft-panel-head-icon{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:3rem;height:3rem;border:1px solid #e4e4e7;background:#fafafa;color:#3f3f46}
          .ft-panel-body{padding-top:.25rem}
          .ft-panel-list-title{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:.6875rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#71717a;margin:0 0 1.125rem}
          .ft-panel-list{list-style:none;margin:0;padding:0;display:grid;gap:0}
          @media(min-width:768px){.ft-panel-list{grid-template-columns:repeat(2,minmax(0,1fr));column-gap:2rem}}
          .ft-panel-item{display:flex;align-items:flex-start;gap:.75rem;padding:.75rem 0;border-bottom:1px solid #f4f4f5}
          .ft-item-marker{flex-shrink:0;width:.375rem;height:.375rem;margin-top:.55rem;background:#1d4ed8}
          .ft-item-text{font-size:.875rem;color:#3f3f46;line-height:1.6}
          @media(min-width:768px){.ft-item-text{font-size:.9375rem}}
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
          .pr-section{position:relative;background:#fafafa;margin-top:0;padding:4.5rem 1.5rem 5rem;border-top:1px solid #e4e4e7}
          @media(min-width:768px){.pr-section{padding:5.5rem 2rem 6rem}}
          .pr-inner{position:relative;z-index:1;max-width:80rem;margin:0 auto}
          .pr-header{margin-bottom:2.5rem;max-width:42rem}
          .pr-eyebrow{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:.6875rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#71717a;margin:0 0 .875rem}
          @media(min-width:768px){.pr-eyebrow{font-size:.75rem;margin-bottom:1rem}}
          .pr-title{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:clamp(1.75rem,3.2vw,2.375rem);font-weight:700;color:#18181b;margin:0 0 1rem;line-height:1.2;letter-spacing:-.015em}
          .pr-subtitle{font-size:.9375rem;color:#52525b;max-width:40rem;margin:0;line-height:1.7}
          @media(min-width:768px){.pr-subtitle{font-size:1rem}}
          .pr-value-note{margin:0 0 2.5rem;padding:1rem 1.125rem 1rem 1rem;max-width:44rem;background:#f4f4f5;border:1px solid #e4e4e7;border-left:3px solid #1d4ed8}
          .pr-value-note p{margin:0;font-size:.875rem;line-height:1.65;color:#52525b}
          .pr-value-note strong{color:#18181b;font-weight:600}
          .pr-cards{display:grid;grid-template-columns:1fr;gap:0;margin-bottom:3.5rem;border:1px solid #e4e4e7;background:#fff}
          @media(min-width:640px){.pr-cards{grid-template-columns:repeat(2,1fr)}}
          @media(min-width:1024px){.pr-cards{grid-template-columns:repeat(4,1fr)}}
          .pr-card{position:relative;display:flex;flex-direction:column;padding:1.5rem 1.25rem 1.75rem;border-bottom:1px solid #e4e4e7;border-top:3px solid transparent;background:#fff;min-width:0}
          @media(min-width:640px){.pr-card:nth-child(odd){border-right:1px solid #e4e4e7}}
          @media(min-width:1024px){.pr-card{padding:1.5rem 1.125rem 1.75rem;border-bottom:none;border-right:1px solid #e4e4e7}.pr-card:last-child{border-right:none}}
          @media(max-width:639px){.pr-card:last-child{border-bottom:none}}
          .pr-card-featured{background:#fff}
          @media(min-width:1024px){.pr-card-featured{border-top-color:#1d4ed8}}
          .pr-card-badge-slot{min-height:1.125rem;margin-bottom:.875rem;flex-shrink:0}
          .pr-card-tag{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:.6875rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#1d4ed8;margin:0;line-height:1.125rem}
          .pr-card-tag-placeholder{display:block;height:1.125rem}
          .pr-card-top{margin-bottom:1rem;min-height:3.25rem;flex-shrink:0}
          @media(min-width:1024px){.pr-card-top{min-height:3.5rem}}
          .pr-card-name{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:1.0625rem;font-weight:700;color:#18181b;margin:0 0 .35rem;letter-spacing:-.01em;line-height:1.25}
          @media(min-width:768px){.pr-card-name{font-size:1.125rem}}
          .pr-card-desc{font-size:.8125rem;color:#71717a;margin:0;line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
          .pr-card-price{margin-bottom:1.25rem;padding-bottom:1.25rem;border-bottom:1px solid #f4f4f5;min-height:4.75rem;flex-shrink:0;display:flex;flex-direction:column}
          .pr-amount-row{display:flex;align-items:baseline;flex-wrap:nowrap;gap:.45rem;margin:0 0 .35rem;min-height:2.25rem;white-space:nowrap;line-height:1}
          .pr-amount{display:inline-flex;align-items:baseline;flex-shrink:0;gap:.08rem}
          .pr-amount-part{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:clamp(1.25rem,1.9vw,1.625rem);font-weight:700;color:#18181b;letter-spacing:.01em;line-height:1;font-variant-numeric:lining-nums tabular-nums}
          .pr-amount-sep{display:inline-block;padding:0 .14em;font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:clamp(.875rem,1.2vw,1rem);font-weight:600;color:#71717a;line-height:1;transform:translateY(-.22em);flex-shrink:0;user-select:none}
          .pr-currency{font-size:.8125rem;font-weight:600;color:#52525b;white-space:nowrap;flex-shrink:0}
          @media(min-width:768px){.pr-currency{font-size:.875rem}}
          .pr-note{font-size:.75rem;color:#71717a;margin:0;line-height:1.4;min-height:2.1em}
          .pr-amount-custom{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:clamp(1.125rem,1.8vw,1.375rem);font-weight:700;color:#18181b;letter-spacing:-.01em;line-height:1.2;margin:0 0 .35rem;min-height:2.25rem;display:flex;align-items:flex-end;white-space:nowrap}
          .pr-features{list-style:none;margin:0 0 1.5rem;padding:0;flex:1;min-height:0}
          .pr-feature-item{display:flex;align-items:flex-start;gap:.65rem;padding:.45rem 0;font-size:.8125rem;color:#3f3f46;line-height:1.5}
          @media(min-width:768px){.pr-feature-item{font-size:.875rem}}
          .pr-item-marker{flex-shrink:0;width:.3rem;height:.3rem;margin-top:.5rem;background:#1d4ed8}
          .pr-btn{display:inline-flex;align-items:center;justify-content:center;width:100%;margin-top:auto;flex-shrink:0;padding:.7rem 1rem;border-radius:4px;font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-weight:600;font-size:.875rem;text-decoration:none;transition:background .15s,border-color .15s,color .15s}
          .pr-btn-primary{background:#2563eb;border:1px solid #2563eb;color:#fff}
          .pr-btn-primary:hover{background:#1d4ed8;border-color:#1d4ed8;color:#fff}
          .pr-btn-outline{background:#fff;border:1px solid #d4d4d8;color:#27272a}
          .pr-btn-outline:hover{background:#fafafa;border-color:#a1a1aa;color:#18181b}
          .pr-btn-ghost{background:#fff;border:1px solid #d4d4d8;color:#27272a}
          .pr-btn-ghost:hover{background:#fafafa;border-color:#a1a1aa;color:#18181b}
          .pr-table-wrap{border:1px solid #e4e4e7;background:#fff}
          .pr-table-scroll{position:relative;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior-x:contain;scrollbar-width:thin;scrollbar-color:#d4d4d8 transparent}
          .pr-table-scroll::-webkit-scrollbar{height:6px}
          .pr-table-scroll::-webkit-scrollbar-thumb{background:#d4d4d8;border-radius:9999px}
          .pr-table-scroll::-webkit-scrollbar-track{background:transparent}
          @media(max-width:767px){.pr-table-scroll::after{content:'';position:absolute;top:0;right:0;bottom:6px;width:2.5rem;pointer-events:none;background:linear-gradient(90deg,rgba(255,255,255,0),#fff 75%)}}
          .pr-table-header-row{padding:1.75rem 1.75rem 1.25rem;border-bottom:1px solid #f4f4f5}
          @media(max-width:767px){.pr-table-header-row{padding:1.25rem 1rem 1rem}}
          .pr-table-eyebrow{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:.6875rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#71717a;margin:0 0 .5rem}
          .pr-table-scroll-hint{display:none;font-size:.75rem;color:#71717a;margin:.5rem 0 0;line-height:1.5}
          @media(max-width:767px){.pr-table-scroll-hint{display:block}}
          .pr-table-title{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:clamp(1.25rem,2.5vw,1.625rem);font-weight:700;color:#18181b;margin:0;line-height:1.25;letter-spacing:-.01em}
          .pr-table{display:grid;border-top:1px solid #e4e4e7}
          @media(max-width:767px){.pr-table{min-width:42rem}}
          .pr-table-head,.pr-table-row{display:grid;grid-template-columns:2fr 1fr 1fr 1fr}
          .pr-table-head{background:#f4f4f5;border-bottom:1px solid #e4e4e7}
          .pr-table-head .pr-table-cell{font-size:.6875rem;font-weight:600;color:#52525b;text-transform:uppercase;letter-spacing:.1em;padding:.9rem 1rem}
          .pr-table-row{border-top:1px solid #f4f4f5}
          .pr-table-row-alt{background:#fafafa}
          .pr-table-cell{padding:.8rem 1rem;font-size:.875rem;color:#52525b;display:flex;align-items:center}
          @media(max-width:767px){.pr-table-cell{padding:.7rem .75rem;font-size:.8125rem;white-space:nowrap}}
          .pr-table-cell-feature{font-weight:500;color:#27272a}
          .pr-table-val{font-size:.875rem;color:#3f3f46;font-weight:500}
          .pr-table-yes{font-size:.8125rem;font-weight:600;color:#1d4ed8;letter-spacing:.01em}
          .pr-dash{color:#d4d4d8;font-size:.875rem}
          .section-pricing{background:var(--page-bg)!important;margin-top:-1px}
          .pricing-check{color:#2563eb;flex-shrink:0}
          .pricing-wrap{max-width:42rem;margin:0 auto}
          .contact-card{max-width:42rem;margin:0 auto;background:var(--page-bg);border-radius:1rem;padding:2rem;box-shadow:0 12px 40px rgba(15,23,42,.06);border:1px solid #e2e8f0}
          @media(min-width:768px){.contact-card{padding:3rem}}
          .contact-item{margin-bottom:1.5rem}
          .contact-item h3{font-weight:600;color:#1e293b;margin-bottom:.5rem}
          .contact-item a{color:#2563eb;font-size:1.125rem;font-weight:500;text-decoration:none}
          .contact-item a:hover{text-decoration:underline}
          .contact-item p{color:#475569}
          .section-seo{background:var(--page-bg)!important;margin-top:-1px;padding:5rem 1.5rem;border-bottom:1px solid #e2e8f0}
          .policy-page{min-height:100vh;display:flex;flex-direction:column;background:var(--page-bg)}
          .policy-hero{position:relative;padding-top:2.5rem;padding-bottom:3rem;background:var(--page-bg);overflow:hidden}
          .policy-hero-bg{position:absolute;inset:0;background-image:radial-gradient(rgba(0,0,0,.08) 1px,transparent 1px);background-size:24px 24px}
          .policy-hero-inner{position:relative;max-width:80rem;margin:0 auto;padding:0 1.5rem;text-align:left}
          .policy-hero h1{font-size:1.75rem;font-weight:700;color:#0f172a;margin:0;letter-spacing:-.02em}
          @media(min-width:768px){.policy-hero h1{font-size:2rem}}
          .policy-content{flex:1;padding:2rem 1.5rem 5rem;max-width:80rem;margin:0 auto;width:100%;text-align:left}
          .policy-lead{font-size:1rem;color:#334155;line-height:1.8;margin-bottom:1.5rem}
          .policy-content h2{font-size:1.125rem;font-weight:700;color:#0f172a;margin:2.25rem 0 .875rem;line-height:1.4;letter-spacing:-.01em}
          .policy-content h2:first-of-type{margin-top:0}
          .policy-content h3{font-size:1.0625rem;font-weight:700;color:#0f172a;margin:2rem 0 0.75rem;line-height:1.4}
          .policy-content p{font-size:.9375rem;color:#475569;line-height:1.75;margin-bottom:1rem}
          .policy-content ul{margin:0 0 1rem;padding-left:1.25rem}
          .policy-content li{font-size:.9375rem;color:#475569;line-height:1.75;margin-bottom:.5rem}
          .policy-content li strong{color:#0f172a}
          .policy-updated{margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid #e4e4e7;font-size:.875rem;color:#64748b}
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
          .section-faq{background:var(--page-bg)!important;margin-top:-1px}
          .section-faq .section-inner{background:var(--page-bg)}
          .faq-section-header{text-align:left}
          .faq2-section{position:relative;background:#fff;margin-top:0;padding:4.5rem 1.5rem 5rem;border-top:1px solid #e4e4e7}
          @media(min-width:768px){.faq2-section{padding:5.5rem 2rem 6rem}}
          .faq2-inner{position:relative;z-index:1;max-width:80rem;margin:0 auto}
          .faq2-header{margin-bottom:2.5rem;max-width:42rem}
          .faq2-eyebrow{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:.6875rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#71717a;margin:0 0 .875rem}
          @media(min-width:768px){.faq2-eyebrow{font-size:.75rem;margin-bottom:1rem}}
          .faq2-title{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:clamp(1.75rem,3.2vw,2.375rem);font-weight:700;color:#18181b;margin:0 0 1rem;line-height:1.2;letter-spacing:-.015em}
          .faq2-subtitle{font-size:.9375rem;color:#52525b;max-width:40rem;margin:0;line-height:1.7}
          @media(min-width:768px){.faq2-subtitle{font-size:1rem}}
          .faq2-grid{display:grid;grid-template-columns:1fr;gap:0;border:1px solid #e4e4e7;background:#fff}
          @media(min-width:768px){.faq2-grid{grid-template-columns:1fr 1fr}}
          .faq2-col{display:flex;flex-direction:column}
          .faq2-col:first-child{border-right:none;border-bottom:1px solid #e4e4e7}
          @media(min-width:768px){.faq2-col:first-child{border-right:1px solid #e4e4e7;border-bottom:none}}
          .faq2-item{border-bottom:1px solid #f4f4f5}
          .faq2-item:last-child{border-bottom:none}
          .faq2-item-open{background:#fafafa}
          .faq2-item-open .faq2-btn{color:#18181b}
          .faq2-item-open .faq2-index{color:#1d4ed8}
          .faq2-item-open .faq2-icon{transform:rotate(180deg);color:#52525b}
          .faq2-btn{width:100%;display:flex;align-items:flex-start;gap:.875rem;padding:1rem 1.25rem;background:transparent;border:none;border-left:3px solid transparent;font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:.9375rem;font-weight:500;color:#27272a;text-align:left;cursor:pointer;transition:color .15s,background .15s,border-color .15s}
          @media(min-width:768px){.faq2-btn{padding:1.05rem 1.5rem}}
          .faq2-btn:hover{color:#18181b;background:#fafafa}
          .faq2-item-open .faq2-btn{border-left-color:#1d4ed8}
          .faq2-index{flex-shrink:0;min-width:1.5rem;font-size:.6875rem;font-weight:600;letter-spacing:.08em;color:#a1a1aa;padding-top:.15rem}
          .faq2-q{flex:1;line-height:1.5}
          .faq2-icon{flex-shrink:0;color:#a1a1aa;margin-top:.15rem;transition:transform .2s,color .15s}
          .faq2-answer{padding:0 1.25rem 1.15rem 3.4rem}
          @media(min-width:768px){.faq2-answer{padding:0 1.5rem 1.25rem 3.65rem}}
          .faq2-answer p{margin:0;font-size:.875rem;color:#52525b;line-height:1.7}
          @media(min-width:768px){.faq2-answer p{font-size:.9375rem}}
          .cta-section{position:relative;padding:3rem 1.5rem;overflow:visible}
          .cta-inner{position:relative;max-width:80rem;margin:0 auto;display:flex;flex-direction:column;gap:2rem;align-items:center;justify-content:space-between;background:var(--page-bg);border:1px solid #e2e8f0;box-shadow:0 12px 40px rgba(15,23,42,.05);border-radius:24px 16px 16px 24px;padding:2.5rem 2rem;overflow:hidden}
          @media(min-width:768px){.cta-inner{flex-direction:row;padding:3rem 3.5rem;gap:2rem}}
          .cta-bg-accent{display:none}
          .cta-inner .cta-text,.cta-inner .cta-phone-block{position:relative;z-index:1}
          .cta-text{text-align:center}
          @media(min-width:768px){.cta-text{text-align:left}}
          .cta-line1,.cta-line2{color:#0f172a;font-size:1.25rem;font-weight:600;margin:0;line-height:1.4}
          @media(min-width:768px){.cta-line1,.cta-line2{font-size:1.5rem}}
          .cta-line2{margin-top:.25rem}
          .cta-phone-block{display:flex;flex-direction:column;align-items:center;gap:.5rem;text-decoration:none;color:#0f172a;transition:opacity .2s}
          .cta-phone-block:hover{opacity:.85}
          .cta-phone-icon-wrap{width:4rem;height:4rem;border:2px solid #2563eb;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:.25rem;color:#2563eb}
          .cta-phone-label{font-size:.7rem;font-weight:700;letter-spacing:.15em;opacity:.9}
          .cta-phone-number{font-size:1.5rem;font-weight:800;letter-spacing:.02em}
          @media(min-width:768px){.cta-phone-number{font-size:1.75rem}}
          .cta-wave{position:absolute;bottom:0;left:0;right:0;width:100%;height:5rem;line-height:0;z-index:10;pointer-events:none}
          .cta-wave svg{width:100%;height:100%;display:block;vertical-align:middle}
          .site-footer{position:relative}
          .footer-mobile{display:block;background:var(--page-bg);color:#334155;border-top:1px solid rgba(15,23,42,.08);overflow-x:hidden}
          @media(min-width:640px){.footer-mobile{display:none}}
          .footer-mobile-inner{padding:1.5rem 1rem}
          .footer-mobile-brand{display:flex;flex-direction:column;align-items:center;margin-bottom:1.25rem}
          .footer-mobile-logo{display:flex;align-items:center;text-decoration:none}
          .footer-mobile-logo-img{display:block;object-fit:contain;height:2rem;width:auto}
          .footer-mobile-phone{display:block;font-size:1rem;font-weight:600;color:#2563eb;text-decoration:none;margin-top:.5rem}
          .footer-mobile-hide{display:none!important}
          .footer-mobile-phone:hover{text-decoration:underline}
          .footer-mobile-web{font-size:.875rem;color:#64748b;text-decoration:none;margin-top:.25rem}
          .footer-mobile-web:hover{color:#2563eb}
          .footer-mobile-quick{display:flex;flex-wrap:wrap;justify-content:center;gap:.5rem 1rem;margin-bottom:1rem}
          .footer-mobile-quick-link{font-size:.875rem;color:#64748b;text-decoration:none}
          .footer-mobile-quick-link:hover{color:#2563eb}
          .footer-mobile-accordion{border-top:1px solid rgba(15,23,42,.08)}
          .footer-mobile-accordion-btn{width:100%;display:flex;align-items:center;justify-content:space-between;padding:.75rem 0;background:none;border:none;color:#0f172a;font-size:.875rem;font-weight:600;cursor:pointer;text-align:left}
          .footer-mobile-chevron{color:#94a3b8;transition:transform .2s}
          .footer-mobile-chevron.open{transform:rotate(180deg)}
          .footer-mobile-accordion-list{list-style:none;margin:0;padding:0 0 .75rem}
          .footer-mobile-accordion-list li{margin-bottom:.35rem}
          .footer-mobile-accordion-link{font-size:.875rem;color:#475569;text-decoration:none;display:block}
          .footer-mobile-accordion-link:hover{color:#2563eb}
          .footer-mobile-accordion-list button.footer-mobile-accordion-link{width:100%;text-align:left}
          .footer-mobile-app{border-top:1px solid rgba(15,23,42,.08);padding:.75rem 0;text-align:center}
          .footer-mobile-app-title{font-size:.75rem;font-weight:700;color:#0f172a;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.75rem}
          .footer-mobile-app-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:.75rem}
          .footer-mobile-app-link{display:flex;align-items:center}
          .footer-mobile-app-img{height:40px;width:auto;object-fit:contain}
          .footer-mobile-cta{margin-top:1.25rem;padding-top:1.25rem;border-top:1px solid rgba(15,23,42,.08);display:flex;justify-content:center}
          .footer-mobile-cta-btn{display:flex;align-items:center;justify-content:center;gap:.5rem;width:90%;max-width:320px;padding:1rem 1.5rem;background:#2563eb;color:#fff;font-size:1rem;font-weight:600;text-decoration:none;border-radius:12px;transition:background .2s}
          .footer-mobile-cta-btn:hover{background:#1d4ed8}
          .footer-mobile-bottom{margin-top:1.25rem;padding-top:1rem;border-top:1px solid rgba(15,23,42,.08);text-align:left}
          .footer-mobile-copy{font-size:.6875rem;color:#94a3b8;margin:0 0 .75rem 0}
          .footer-mobile-policy{display:flex;flex-wrap:wrap;gap:.5rem .75rem}
          .footer-mobile-policy-link{font-size:.6875rem;color:#64748b;text-decoration:none}
          .footer-mobile-policy .footer-mobile-policy-link{display:inline}
          .footer-mobile-policy-link:hover{color:#2563eb}
          .footer-desktop{display:none;position:relative;background:var(--page-bg);color:#475569;padding:4rem 0 2.5rem;border-top:none;overflow:visible}
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
          .footer-logo-img{display:block;object-fit:contain;height:2rem;width:auto}
          @media(min-width:768px){.footer-logo-img{height:2.5rem}}
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
          .mobile-app-bg{position:absolute;inset:0;background:var(--page-bg);pointer-events:none}
          .mobile-app-bg::before{display:none}
          .mobile-app-bg::after{display:none}
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
          .mobile-app-title{font-size:1.875rem;font-weight:800;color:#0f172a;margin-bottom:1rem;line-height:1.2;letter-spacing:-.02em}
          @media(min-width:768px){.mobile-app-title{font-size:2.25rem}}
          .mobile-app-desc{font-size:1.0625rem;color:#64748b;line-height:1.6;margin-bottom:2rem}
          .mobile-app-badges{display:flex;flex-direction:column;gap:1rem;align-items:center}
          @media(min-width:640px){.mobile-app-badges{flex-direction:row;flex-wrap:wrap;gap:1.25rem;align-items:center;justify-content:center}}
          @media(min-width:1024px){.mobile-app-badges{justify-content:flex-start}}
          .mobile-app-btn{display:flex;align-items:center;justify-content:center;padding:.75rem 1.5rem;background:#fff;border-radius:12px;border:1px solid #e2e8f0;box-shadow:0 4px 20px rgba(15,23,42,.06);transition:transform .2s,box-shadow .2s;text-decoration:none}
          .mobile-app-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(15,23,42,.08)}
          .mobile-app-btn-img{height:52px;width:auto;max-width:180px;object-fit:contain;display:block}
          .animate-section{opacity:0}
          .animate-section.animate-visible{opacity:1}
          .anim-features{opacity:1}
          .anim-features .ft-header,.anim-features .ft-layout,.anim-features .section-header,.anim-features .feature-card{opacity:0;transition:opacity .5s ease}
          .anim-features.animate-visible .ft-header,.anim-features.animate-visible .ft-layout,.anim-features.animate-visible .section-header,.anim-features.animate-visible .feature-card{opacity:1}
          .anim-features .ft-layout{transition-delay:.08s}
          .anim-pricing{opacity:1}
          .anim-pricing .pr-header,.anim-pricing .pr-value-note,.anim-pricing .pr-cards,.anim-pricing .pr-table-wrap,.anim-pricing .section-header{opacity:0;transition:opacity .5s ease}
          .anim-pricing.animate-visible .pr-header,.anim-pricing.animate-visible .pr-value-note,.anim-pricing.animate-visible .pr-cards,.anim-pricing.animate-visible .pr-table-wrap,.anim-pricing.animate-visible .section-header{opacity:1}
          .anim-pricing .pr-value-note{transition-delay:.06s}
          .anim-pricing .pr-cards{transition-delay:.1s}
          .anim-pricing .pr-table-wrap{transition-delay:.14s}
          .anim-faq{opacity:1}
          .anim-faq .faq2-header,.anim-faq .faq2-col,.anim-faq .section-header{opacity:0;transition:opacity .5s ease}
          .anim-faq.animate-visible .faq2-header,.anim-faq.animate-visible .faq2-col,.anim-faq.animate-visible .section-header{opacity:1}
          .anim-faq .faq2-col{transition-delay:.08s}
          .anim-faq .faq2-col:last-child{transition-delay:.12s}
          .anim-demo{transition:opacity .6s ease-out}
          .anim-demo .section-header{opacity:0;transform:translateY(40px);transition:opacity .8s cubic-bezier(.34,1.56,.64,1),transform .8s cubic-bezier(.34,1.56,.64,1)}
          .anim-demo.animate-visible .section-header{opacity:1;transform:translateY(0)}
          .anim-demo .demo-form-wrap,.anim-demo .demo-success{opacity:0;transform:translateY(50px);transition:opacity 1s cubic-bezier(.34,1.56,.64,1),transform 1s cubic-bezier(.34,1.56,.64,1)}
          .anim-demo.animate-visible .demo-form-wrap,.anim-demo.animate-visible .demo-success{opacity:1;transform:translateY(0);transition-delay:.2s}
          .section-demo{background:var(--page-bg)!important;margin-top:-1px;padding:5rem 1.5rem 6rem;border-top:1px solid rgba(15,23,42,.06)}
          @media(min-width:768px){.section-demo{padding:6rem 1.5rem 7rem}}
          .demo-section-header{text-align:left}
          .demo-section-header p{max-width:42rem}
          .demo-form-wrap{display:grid;gap:0;align-items:stretch;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;background:var(--page-bg)}
          @media(min-width:768px){.demo-form-wrap{grid-template-columns:1fr 1fr;gap:0}}
          .demo-form-wrap .demo-form-col,.demo-form-wrap .demo-contact-col{padding:2rem 1.5rem}
          @media(min-width:768px){.demo-form-wrap .demo-form-col,.demo-form-wrap .demo-contact-col{padding:2.5rem 3rem}}
          .demo-form-wrap .demo-contact-col{border-top:1px solid #e2e8f0;background:var(--page-bg)}
          @media(min-width:768px){.demo-form-wrap .demo-contact-col{border-top:none;border-left:1px solid #e2e8f0;background:var(--page-bg)}}
          .demo-form{display:flex;flex-direction:column;gap:1.25rem}
          .demo-form-row label{display:block;font-size:.875rem;font-weight:600;color:#0f172a;margin-bottom:.35rem}
          .demo-form-row input,.demo-form-row textarea{width:100%;padding:.75rem 1rem;border:1px solid #e2e8f0;border-radius:10px;font-size:1rem;font-family:inherit;transition:border-color .2s}
          .demo-form-row input:focus,.demo-form-row textarea:focus{outline:none;border-color:#2563eb}
          .demo-form-row textarea{resize:vertical;min-height:100px}
          .demo-submit-btn{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:1rem 1.5rem;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;border:none;border-radius:12px;font-weight:600;font-size:1rem;cursor:pointer;transition:background .2s}
          .demo-submit-btn:hover:not(:disabled){background:linear-gradient(135deg,#3b82f6,#2563eb)}
          .demo-submit-btn:disabled{opacity:.7;cursor:not-allowed}
          .demo-contact-col{display:flex;flex-direction:column;gap:1rem}
          .demo-contact-item{display:flex;gap:1rem;align-items:flex-start;padding:1.25rem;border:1px solid #e2e8f0;border-radius:10px;background:var(--page-bg)}
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
          .anim-seo .seo-main-title,.anim-seo .sol-article-header,.anim-seo .sol-article-col{opacity:0;transition:opacity .5s ease}
          .anim-seo .seo-col{opacity:0;transition:opacity .5s ease}
          .anim-seo.animate-visible .seo-main-title,.anim-seo.animate-visible .sol-article-header,.anim-seo.animate-visible .sol-article-col,.anim-seo.animate-visible .seo-col{opacity:1}
          .anim-seo .sol-article-col{transition-delay:.08s}
          .anim-seo .sol-article-col:last-child{transition-delay:.14s}
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
          .wa-float{position:fixed;bottom:1.5rem;right:1.5rem;z-index:9990;display:inline-flex;align-items:center;gap:.65rem;padding:.625rem .875rem;background:#fff;border:1px solid #d4d4d8;border-radius:4px;text-decoration:none;box-shadow:0 1px 3px rgba(0,0,0,.06);transition:background .15s,border-color .15s}
          .wa-float:hover{background:#fafafa;border-color:#a1a1aa}
          .wa-float-icon{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;flex-shrink:0;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:4px;color:#16a34a}
          .wa-float-text{display:flex;flex-direction:column;gap:.1rem;min-width:0}
          .wa-float-title{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:.8125rem;font-weight:600;color:#18181b;line-height:1.2;letter-spacing:.01em}
          .wa-float-sub{font-family:'IBM Plex Sans','Inter','Segoe UI',system-ui,sans-serif;font-size:.75rem;font-weight:400;color:#71717a;line-height:1.2;white-space:nowrap}
          @media(max-width:767px){.wa-float{bottom:1.25rem;right:1.25rem;padding:.5rem}.wa-float-text{display:none}}
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
