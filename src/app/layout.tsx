import type { Metadata, Viewport } from "next";
import {
  Inter,
  Besley,
  Space_Grotesk,
  Playfair_Display,
  Satisfy,
  Teko,
  Phudu,
  Poppins,
  Onest,
} from "next/font/google";
import {
  SITE,
  SITE_KEYWORDS,
} from "@/constants/seo";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const besley = Besley({
  subsets: ["latin"],
  variable: "--font-besley",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const satisfy = Satisfy({
  subsets: ["latin"],
  variable: "--font-satisfy",
  weight: "400",
  display: "swap",
});

const teko = Teko({
  subsets: ["latin", "latin-ext"],
  variable: "--font-teko",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const phudu = Phudu({
  subsets: ["latin"],
  variable: "--font-phudu",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0C4642",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Ücretsiz Offline ERP Programı | Stok Takip ve Cari Yönetim — DijitalERP",
    template: "%s | DijitalERP",
  },
  description:
    "DijitalERP: Windows masaüstü offline ERP. Ücretsiz stok takip, cari yönetim, fatura yazılımı, kasa ve barkod. Veriler bilgisayarınızda — internet zorunlu değil.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "business",
  keywords: [...SITE_KEYWORDS],
  alternates: {
    canonical: SITE.url,
    languages: { "tr-TR": SITE.url },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title:
      "Ücretsiz Offline ERP Programı | Stok Takip ve Cari Yönetim — DijitalERP",
    description:
      "Windows masaüstü offline ERP. Stok, cari, fatura, kasa ve barkod tek programda. Ücretsiz indirin.",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "DijitalERP — Offline Windows ERP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ücretsiz Offline ERP | DijitalERP",
    description:
      "Stok takip, cari yönetim, fatura ve kasa — Windows'ta offline çalışan ücretsiz ERP.",
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "geo.region": "TR",
    "geo.placename": "Türkiye",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${besley.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable} ${satisfy.variable} ${teko.variable} ${phudu.variable} ${poppins.variable} ${onest.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
