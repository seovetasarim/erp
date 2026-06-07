'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Truck, Package, FileText, Barcode } from 'lucide-react';

const rawFeatures = [
  { icon: Truck, title: 'Lojistik Yönetimi', items: ['Depo giriş/çıkış – Stok hareketi', 'Kargo etiketi – 100×150 mm termal', 'CODE128 barkod – Kargo uyumlu', 'Fatura ile entegre'] },
  { icon: Package, title: 'Depo & Stok', items: ['Stok takip – Ürün bazlı', 'Stok sayım – Depo sayımı', 'Düşük stok uyarısı', 'Çoklu firma'] },
  { icon: Barcode, title: 'Barkod', items: ['Barkod okuyucu – Hızlı işlem', 'Barkod modal – Ürün arama', 'Stok giriş/çıkış – Barkod ile', 'Kargo barkod – CODE128'] },
  { icon: FileText, title: 'Fatura & Raporlar', items: ['E-Fatura – GİB entegrasyonu', 'Excel export – Raporlar', 'Dashboard – Özet', 'Cari yönetimi'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function LojistikContent() {
  return (
    <SolutionFeatures
      title="Lojistik ERP"
      subtitle="DijitalERP lojistik çözümü: Depo takip, kargo etiketi, stok ve fatura. Lojistik firmaları için ERP yazılımı."
      categories={categories}
    />
  );
}
