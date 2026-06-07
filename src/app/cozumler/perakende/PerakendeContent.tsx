'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Store, Package, Barcode, FileText } from 'lucide-react';

const rawFeatures = [
  { icon: Store, title: 'Mağaza Yönetimi', items: ['Stok takip – Ürün giriş/çıkış', 'Barkod okuyucu – Hızlı satış', 'Kasa modülü – Nakit takip', 'Fatura – Satış faturası'] },
  { icon: Package, title: 'Stok & Envanter', items: ['Ürün kartları – Barkod, kategori', 'Stok sayım – Periyodik sayım', 'Düşük stok uyarısı', 'Kategori yönetimi'] },
  { icon: Barcode, title: 'Barkod & Satış', items: ['Barkod modal – Hızlı ürün arama', 'Fatura oluşturma – Barkod ile', 'Kargo etiketi – E-ticaret', 'E-Fatura entegrasyonu'] },
  { icon: FileText, title: 'Raporlar', items: ['Aylık hareket – Stok raporu', 'Excel export – Dışa aktarma', 'Dashboard – Özet ekran', 'Cari bakiye – Müşteri takibi'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function PerakendeContent() {
  return (
    <SolutionFeatures
      title="Perakende ERP"
      subtitle="DijitalERP perakende çözümü: Mağazalar için stok takip, barkod, kasa ve fatura. Offline perakende yazılımı."
      categories={categories}
    />
  );
}
