'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { FileSpreadsheet, BarChart3, Package, FileText } from 'lucide-react';

const rawFeatures = [
  { icon: FileSpreadsheet, title: 'Excel Dışa Aktarma', items: ['Tek tıkla Excel export – Kolay kullanım', 'XLSX formatı – Excel uyumlu', 'Tarih aralığı – Filtreleme', 'Firma bazlı – Çoklu firma desteği'] },
  { icon: BarChart3, title: 'Stok Raporları', items: ['Aylık hareket – Excel\'e aktar', 'Kategori dağılımı – Excel export', 'Günlük hareket – Dışa aktarma', 'En çok hareket – Excel raporu'] },
  { icon: Package, title: 'Cari & Fatura', items: ['Cari bakiye – Excel listesi', 'Fatura listesi – Excel export', 'Stok özeti – Excel\'e aktar', 'Muhasebe entegrasyonu – Excel ile'] },
  { icon: FileText, title: 'Kullanım Alanları', items: ['Muhasebe yazılımına aktarım', 'Excel\'de analiz – Grafik, pivot', 'Yedek rapor – Arşivleme', 'Dış sistemlere veri aktarımı'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function ExcelExportContent() {
  return (
    <SolutionFeatures
      title="Excel Export"
      subtitle="DijitalERP ile stok, cari ve fatura raporlarını Excel&apos;e aktarın. Tek tıkla dışa aktarma, muhasebe entegrasyonu ve veri analizi."
      categories={categories}
    />
  );
}
