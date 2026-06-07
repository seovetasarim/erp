'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { FileText, Printer, Send, FileCheck } from 'lucide-react';

const rawFeatures = [
  { icon: FileText, title: 'Fatura Oluşturma', items: ['Müşteri seçimi – Cari kartlardan seçim', 'Ürün kalemleri – Barkod, miktar, birim fiyat', 'KDV hesaplama – Otomatik KDV', 'Fatura listesi – Tüm faturalar tek ekranda', 'Fatura detay – Düzenleme, silme'] },
  { icon: Printer, title: 'Yazdırma', items: ['Fatura yazdırma – A4 veya termal', 'Yazdırma önizleme – Kontrol edin', 'Kargo etiketi – 100×150 mm termal', 'CODE128 barkod – Kargo etiketi için'] },
  { icon: Send, title: 'E-Fatura Entegrasyonu', items: ['E-Fatura gönder – GİB portalına', 'Paraşüt, İşbaşı, özel API', 'Kurulum sihirbazı – Kolay yapılandırma', 'Test faturası – Deneme gönderimi'] },
  { icon: FileCheck, title: 'Cari & Stok Entegrasyonu', items: ['Otomatik cari güncelleme – Bakiye', 'Stok düşümü – Satış faturası ile', 'Fatura arşivi – Geçmiş faturalar', 'Excel export – Fatura listesi'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function FaturaYazilimiContent() {
  return (
    <SolutionFeatures
      title="Fatura Yazılımı"
      subtitle="DijitalERP ile fatura oluşturun, yazdırın ve E-Fatura gönderin. Müşteri seçimi, KDV, cari ve stok entegrasyonu."
      categories={categories}
    />
  );
}
