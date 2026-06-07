'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Wallet, BarChart3, FileText } from 'lucide-react';

const rawFeatures = [
  { icon: Wallet, title: 'Kasa İşlemleri', items: ['Kasa giriş – Nakit girişi', 'Kasa çıkış – Nakit çıkışı', 'Bakiye takibi – Anlık kasa bakiyesi', 'Tarih aralığı – Filtreleme'] },
  { icon: BarChart3, title: 'Raporlama', items: ['Kasa hareket raporu – Günlük/aylık', 'Excel export – Dışa aktarma', 'Firma bazlı – Çoklu firma desteği', 'Özet istatistikler'] },
  { icon: FileText, title: 'Entegrasyon', items: ['Cari ile bağlantı – Tahsilat/ödeme', 'Fatura ile – Nakit satış', 'Stok ile – Alış/satış takibi', 'Dashboard – Özet görünüm'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function KasaContent() {
  return (
    <SolutionFeatures
      title="Kasa Modülü"
      subtitle="DijitalERP kasa modülü ile nakit giriş-çıkış, bakiye takibi ve kasa raporları. Cari ve fatura ile entegre kasa yönetimi."
      categories={categories}
    />
  );
}
