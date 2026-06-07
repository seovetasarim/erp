'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Truck, Package, Users, FileText } from 'lucide-react';

const rawFeatures = [
  { icon: Truck, title: 'Toptan Satış', items: ['Bayi yönetimi – Cari kartlar', 'Toplu fatura – Çoklu sipariş', 'Fiyat listeleri – Bayi bazlı', 'Sipariş takibi'] },
  { icon: Package, title: 'Stok Yönetimi', items: ['Büyük stok – Çoklu ürün', 'Stok sayım – Depo sayımı', 'Düşük stok uyarısı', 'Kategori yönetimi'] },
  { icon: Users, title: 'Cari & Bayi', items: ['Bayi kartları – Detaylı bilgi', 'Cari bakiye – Alacak takibi', 'Çoklu firma – Şube yönetimi', 'Fatura geçmişi'] },
  { icon: FileText, title: 'Fatura & Kargo', items: ['E-Fatura – GİB entegrasyonu', 'Kargo etiketi – Toplu etiket', 'Excel export – Raporlar', 'Dashboard – Özet'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function ToptanSatisContent() {
  return (
    <SolutionFeatures
      title="Toptan Satış ERP"
      subtitle="DijitalERP toptan satış çözümü: Toptancılar için stok, cari, fatura ve bayi yönetimi. Offline toptan satış yazılımı."
      categories={categories}
    />
  );
}
