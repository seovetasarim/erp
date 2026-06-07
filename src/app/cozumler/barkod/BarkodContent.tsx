'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Barcode, Package, Search } from 'lucide-react';

const rawFeatures = [
  { icon: Barcode, title: 'Barkod Okuyucu Desteği', items: ['USB barkod okuyucu – Uyumlu', 'Barkod ile ürün arama – Hızlı erişim', 'Barkod modal – Tek tıkla ürün bul', 'Klavye girişi – Okuyucu klavye gibi çalışır'] },
  { icon: Package, title: 'Ürün & Stok', items: ['Ürün kartları – Barkod alanı', 'Stok giriş/çıkış – Barkod ile', 'Stok sayım – Barkod okutma', 'Stok özeti – Barkod filtreleme'] },
  { icon: Search, title: 'Hızlı Arama', items: ['Barkod modal – Global kısayol', 'Ürün listesinde barkod arama', 'Fatura oluştururken barkod ile ürün ekleme', 'Kargo etiketi – CODE128 barkod'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function BarkodContent() {
  return (
    <SolutionFeatures
      title="Barkod Okuyucu Yazılımı"
      subtitle="DijitalERP barkod desteği ile ürün giriş-çıkış ve stok sayımını hızlandırın. USB barkod okuyucu uyumlu, barkod modal ile hızlı ürün arama."
      categories={categories}
    />
  );
}
