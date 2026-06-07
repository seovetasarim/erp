'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Shirt, Package, Barcode, FileText } from 'lucide-react';

const rawFeatures = [
  { icon: Shirt, title: 'Tekstil Yönetimi', items: ['Ürün kartları – Beden, renk, kategori', 'Stok takip – Giriş/çıkış', 'Kategori – Kumaş, ürün tipi', 'Düşük stok uyarısı'] },
  { icon: Package, title: 'Stok & Envanter', items: ['Stok sayım – Periyodik', 'Çoklu firma – Şube/depo', 'Stok hareketleri – Detaylı', 'Excel export – Raporlar'] },
  { icon: Barcode, title: 'Barkod & Satış', items: ['Barkod okuyucu – Hızlı işlem', 'Barkod modal – Ürün arama', 'Fatura – Barkod ile', 'Kargo etiketi'] },
  { icon: FileText, title: 'Fatura & E-Fatura', items: ['E-Fatura – GİB entegrasyonu', 'Cari yönetimi – Müşteri/tedarikçi', 'Dashboard – Özet', 'Raporlar – Excel export'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function TekstilContent() {
  return (
    <SolutionFeatures
      title="Tekstil Sektörü ERP"
      subtitle="DijitalERP tekstil çözümü: Tekstil firmaları için stok takip, barkod, kategori, fatura. Offline tekstil yazılımı."
      categories={categories}
    />
  );
}
