'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Briefcase, Users, FileText, Wallet } from 'lucide-react';

const rawFeatures = [
  { icon: Briefcase, title: 'Firma & Cari', items: ['Firma yönetimi – Çoklu firma', 'Cariler – Müşteri ve tedarikçi', 'Cari kartları – Detaylı bilgiler', 'Cari bakiye – Alacak/borç'] },
  { icon: Users, title: 'Müşteri & Tedarikçi', items: ['Müşteri kartları – İletişim, adres', 'Tedarikçi kartları – Satın alma', 'Cari hareket geçmişi – Tüm işlemler', 'Bakiye takibi – Anlık'] },
  { icon: FileText, title: 'Fatura Entegrasyonu', items: ['Fatura ile cari güncelleme', 'Otomatik bakiye hesaplama', 'Fatura listesi – Cari filtreleme', 'E-Fatura gönder'] },
  { icon: Wallet, title: 'Kasa & Tahsilat', items: ['Kasa giriş/çıkış – Nakit', 'Bakiye takibi – Kasa', 'Cari ödemeler – Tahsilat', 'Tarih aralığı filtreleme'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function CariProgramContent() {
  return (
    <SolutionFeatures
      title="Cari Program"
      subtitle="DijitalERP cari program ile müşteri ve tedarikçi hesaplarınızı yönetin. Cari kartlar, bakiye takibi ve fatura entegrasyonu. Offline cari hesap programı."
      categories={categories}
    />
  );
}
