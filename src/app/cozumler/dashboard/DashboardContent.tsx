'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { LayoutDashboard, BarChart3, Package, Barcode } from 'lucide-react';

const rawFeatures = [
  { icon: LayoutDashboard, title: 'Özet Ekran', items: ['Tek ekrandan genel bakış – Tüm veriler', 'Stok özeti – Anlık stok durumu', 'Cari özet – Alacak/borç bakiyesi', 'Kasa bakiyesi – Nakit durumu'] },
  { icon: BarChart3, title: 'Grafikler ve Analiz', items: ['Görsel grafikler – Stok hareketleri', 'Kategori dağılımı – Pasta/çubuk grafik', 'Trend analizi – Zaman bazlı', 'Özet istatistikler – Sayısal veriler'] },
  { icon: Barcode, title: 'Hızlı Erişim', items: ['Barkod modal – Hızlı ürün arama', 'Kısayollar – Sık kullanılan işlemler', 'Firma seçimi – Çoklu firma', 'Anlık güncelleme – Canlı veri'] },
  { icon: Package, title: 'Entegrasyon', items: ['Stok modülü – Stok özeti', 'Cari modülü – Bakiye özeti', 'Fatura modülü – Son faturalar', 'Raporlar – Hızlı rapor erişimi'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function DashboardContent() {
  return (
    <SolutionFeatures
      title="Dashboard Modülü"
      subtitle="DijitalERP dashboard ile işletmenizin özetini tek ekrandan görün. Stok, cari, kasa ve grafikler. Hızlı erişim ve barkod modal."
      categories={categories}
    />
  );
}
