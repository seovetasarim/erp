'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Briefcase, Users, FileText, Wallet } from 'lucide-react';

const rawFeatures = [
  { icon: Briefcase, title: 'Firma & Cari Yönetimi', items: ['Firma yönetimi – Birden fazla firma, vergi no, adres, telefon', 'Cariler – Müşteri ve tedarikçi tanımlama', 'Cari kartları – Detaylı bilgiler, düzenleme', 'Çoklu firma – Her firma için ayrı cari hesaplar'] },
  { icon: Users, title: 'Müşteri & Tedarikçi', items: ['Müşteri kartları – İletişim, adres, vergi bilgileri', 'Tedarikçi kartları – Satın alma tarafı yönetimi', 'Cari bakiye – Alacak/borç takibi', 'Cari hareket geçmişi – Tüm işlemler tek ekranda'] },
  { icon: FileText, title: 'Fatura & Cari Entegrasyonu', items: ['Fatura oluşturma – Müşteri seçimi, kalemler, KDV', 'Otomatik cari güncelleme – Fatura ile bakiye güncelleme', 'Fatura listesi – Cari bazlı filtreleme', 'E-Fatura gönder – Cari bilgileriyle entegre'] },
  { icon: Wallet, title: 'Kasa & Tahsilat', items: ['Kasa giriş/çıkış – Nakit hareketleri', 'Bakiye takibi – Kasa bakiyesi', 'Tarih aralığı – Filtreleme', 'Cari ödemeler – Tahsilat ve ödeme kayıtları'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function CariHesapContent() {
  return (
    <SolutionFeatures
      title="Cari Hesap Yazılımı"
      subtitle="DijitalERP ile müşteri ve tedarikçi hesaplarınızı tek ekrandan yönetin. Cari kartlar, bakiye takibi ve fatura entegrasyonu."
      categories={categories}
    />
  );
}
