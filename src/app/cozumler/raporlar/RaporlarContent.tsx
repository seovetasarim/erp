'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { BarChart3, FileSpreadsheet, Package, LayoutDashboard } from 'lucide-react';

const rawFeatures = [
  { icon: BarChart3, title: 'Stok Raporları', items: ['Aylık hareket – Stok giriş/çıkış özeti', 'Kategori dağılımı – Ürün kategorileri', 'Günlük hareket – Gün bazlı liste', 'En çok hareket – En aktif ürünler'] },
  { icon: FileSpreadsheet, title: 'Excel Export', items: ['Tek tıkla Excel – Tüm raporlar', 'XLSX formatı – Excel uyumlu', 'Tarih aralığı – Filtreleme', 'Firma bazlı – Çoklu firma'] },
  { icon: Package, title: 'Cari & Fatura', items: ['Cari bakiye raporu', 'Fatura listesi – Excel export', 'Stok özeti – Dışa aktarma', 'Muhasebe entegrasyonu'] },
  { icon: LayoutDashboard, title: 'Dashboard', items: ['Özet istatistikler – Tek ekran', 'Grafikler – Görsel analiz', 'Anlık veriler – Güncel durum', 'Kategori analizi'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function RaporlarContent() {
  return (
    <SolutionFeatures
      title="Raporlar Modülü"
      subtitle="DijitalERP raporlar modülü ile stok, cari ve fatura raporlarını Excel&apos;e aktarın. Aylık hareket, kategori dağılımı, dashboard."
      categories={categories}
    />
  );
}
