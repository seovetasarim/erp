'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { UtensilsCrossed, Package, Barcode, FileText } from 'lucide-react';

const rawFeatures = [
  { icon: UtensilsCrossed, title: 'Gıda Yönetimi', items: ['Ürün kartları – Barkod, kategori', 'Stok takip – Giriş/çıkış', 'Stok sayım – Periyodik', 'Düşük stok uyarısı'] },
  { icon: Package, title: 'Stok & Envanter', items: ['Kategori yönetimi – Gıda kategorileri', 'Çoklu firma – Şube/depo', 'Stok hareketleri – Detaylı', 'Excel export – Raporlar'] },
  { icon: Barcode, title: 'Barkod & Satış', items: ['Barkod okuyucu – Hızlı işlem', 'Barkod modal – Ürün arama', 'Fatura – Barkod ile', 'Kargo etiketi – E-ticaret'] },
  { icon: FileText, title: 'Fatura & E-Fatura', items: ['E-Fatura – GİB entegrasyonu', 'Cari yönetimi – Müşteri/tedarikçi', 'Dashboard – Özet', 'Raporlar – Excel export'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function GidaContent() {
  return (
    <SolutionFeatures
      title="Gıda Sektörü ERP"
      subtitle="DijitalERP gıda çözümü: Gıda firmaları için stok takip, barkod, fatura. Offline gıda yazılımı."
      categories={categories}
    />
  );
}
