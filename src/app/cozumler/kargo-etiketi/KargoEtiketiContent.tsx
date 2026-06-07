'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Truck, FileText, Barcode, Printer } from 'lucide-react';

const rawFeatures = [
  { icon: Printer, title: 'Kargo Etiketi Yazdırma', items: ['100×150 mm termal etiket – Standart boyut', 'Termal yazıcı desteği – USB bağlantı', 'Fatura ile entegre – Tek tıkla etiket', 'Önizleme – Yazdırmadan önce kontrol'] },
  { icon: Barcode, title: 'CODE128 Barkod', items: ['CODE128 formatı – Kargo firmaları uyumlu', 'Barkod okuma – Kargo takip sistemleri', 'Fatura no / referans – Barkod içeriği', 'Standart format – Evrensel uyumluluk'] },
  { icon: FileText, title: 'Fatura Entegrasyonu', items: ['Fatura oluştur – Sonra etiket yazdır', 'Müşteri adresi – Etikette otomatik', 'Fatura bilgileri – Alıcı, gönderici', 'Kargo firması – Tüm firmalara uyumlu'] },
  { icon: Truck, title: 'Kullanım', items: ['E-Fatura ile birlikte – Tek akış', 'Toplu etiket – Birden fazla fatura', 'Yazıcı ayarları – Boyut, kenar boşlukları', 'Hızlı kargo süreci – Zaman tasarrufu'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function KargoEtiketiContent() {
  return (
    <SolutionFeatures
      title="Kargo Etiketi Yazılımı"
      subtitle="DijitalERP ile kargo etiketi yazdırın. 100×150 mm termal etiket, CODE128 barkod. Fatura ile entegre, kargo firmalarına uyumlu."
      categories={categories}
    />
  );
}
