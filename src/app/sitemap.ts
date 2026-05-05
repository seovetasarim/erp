import type { MetadataRoute } from 'next';

import { SITE_URL as BASE } from '../site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const cozumler = [
    'erp-yazilimi', 'kobi-erp', 'offline-erp', 'isletme-yonetimi',
    'firma-yonetimi', 'coklu-firma', 'dashboard',
    'stok-takip', 'stok-takip-yazilimi', 'stok-programi', 'stok-sayim',
    'depo', 'depo-takip', 'barkod',
    'e-fatura', 'e-fatura-yazilimi', 'fatura-yazilimi', 'faturalar',
    'cari-yonetim', 'cari-hesap-yazilimi', 'cari-program',
    'kasa', 'raporlar', 'excel-export', 'yedekleme',
    'toptan-satis', 'perakende', 'magaza', 'gida', 'tekstil',
    'uretim', 'dagitim', 'lojistik', 'kargo', 'kargo-etiketi',
  ];

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/ozellikler`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/fiyatlandirma`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/sss`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/iletisim`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${BASE}/demo-iste`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...cozumler.map((slug) => ({
      url: `${BASE}/cozumler/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${BASE}/gizlilik-politikasi`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE}/kullanim-sartlari`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE}/cerez-politikasi`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE}/kvkk`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
