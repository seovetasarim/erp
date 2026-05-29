import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DijitalERP — Ücretsiz Offline ERP, Stok Takip ve Cari Yönetim',
    short_name: 'DijitalERP',
    description:
      'Ücretsiz Windows ERP: stok takip, cari yönetim, fatura, kasa ve raporlar — %100 offline, aboneliksiz tek seferlik lisans.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    lang: 'tr',
    categories: ['business', 'productivity', 'finance'],
    icons: [
      { src: '/sembol.png', sizes: 'any', type: 'image/png', purpose: 'any' },
      { src: '/sembol.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
