'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Factory, Package, Users, FileText } from 'lucide-react';

const rawFeatures = [
  { icon: Factory, title: 'Üretim Yönetimi', items: ['Hammadde stok – Giriş/çıkış', 'Ürün stok – Mamul takip', 'Stok sayım – Depo sayımı', 'Düşük stok uyarısı'] },
  { icon: Package, title: 'Stok & Envanter', items: ['Ürün kartları – Barkod, kategori', 'Çoklu firma – Şube/fabrika', 'Stok hareketleri – Detaylı', 'Excel export – Raporlar'] },
  { icon: Users, title: 'Cari & Tedarikçi', items: ['Tedarikçi kartları – Hammadde', 'Müşteri kartları – Mamul satış', 'Cari bakiye – Alacak/borç', 'Fatura geçmişi'] },
  { icon: FileText, title: 'Fatura & E-Fatura', items: ['Alış faturası – Hammadde', 'Satış faturası – Mamul', 'E-Fatura – GİB entegrasyonu', 'Kargo etiketi'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function UretimContent() {
  return (
    <SolutionFeatures
      title="Üretim ERP"
      subtitle="DijitalERP üretim çözümü: Üreticiler için stok, cari, fatura. Hammadde ve mamul takip. Offline üretim yazılımı."
      categories={categories}
    />
  );
}
