'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { ClipboardList, Package, BarChart3, Barcode } from 'lucide-react';

const rawFeatures = [
  { icon: ClipboardList, title: 'Stok Sayım İşlemi', items: ['Sayım başlat – Firma/depo seçimi', 'Sayım girişi – Miktar kaydı', 'Barkod ile sayım – Hızlı giriş', 'Fark uygulama – Sisteme kaydet'] },
  { icon: Package, title: 'Sayım Öncesi/Sonrası', items: ['Mevcut stok – Sayım öncesi görünüm', 'Sayım sonucu – Girilen miktarlar', 'Fark listesi – Eksik/fazla ürünler', 'Stok güncelleme – Farkları uygula'] },
  { icon: Barcode, title: 'Barkod Desteği', items: ['Barkod okuyucu – Hızlı sayım', 'Barkod ile ürün bul – Otomatik', 'Toplu sayım – Barkod + miktar', 'Sayım verimliliği – Zaman tasarrufu'] },
  { icon: BarChart3, title: 'Raporlama', items: ['Sayım raporu – Özet', 'Fark raporu – Detaylı liste', 'Excel export – Dışa aktarma', 'Tarih aralığı – Geçmiş sayımlar'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function StokSayimContent() {
  return (
    <SolutionFeatures
      title="Stok Sayım Programı"
      subtitle="DijitalERP stok sayım özelliği ile envanter sayımı yapın. Barkod ile hızlı sayım, fark uygulama ve raporlama. Offline stok sayım programı."
      categories={categories}
    />
  );
}
