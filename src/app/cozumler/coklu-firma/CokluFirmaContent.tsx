'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Briefcase, Package, Users, FileText, BarChart3 } from 'lucide-react';

const rawFeatures = [
  { icon: Briefcase, title: 'Çoklu Firma Yönetimi', items: ['Firma tanımlama – Sınırsız firma', 'Vergi no, adres, telefon – Her firma ayrı', 'Firma seçimi – Ekran başında değiştir', 'Tek programda tüm firmalar'] },
  { icon: Package, title: 'Firma Bazlı Stok', items: ['Her firma ayrı stok – Karışmaz', 'Stok hareketleri – Firma bazlı', 'Stok sayım – Firma seçerek', 'Düşük stok uyarısı – Firma bazlı'] },
  { icon: Users, title: 'Firma Bazlı Cari', items: ['Cari hesaplar – Firma ayrı', 'Müşteri/tedarikçi – Firma bazlı', 'Bakiye takibi – Her firma ayrı', 'Fatura ile otomatik güncelleme'] },
  { icon: FileText, title: 'Fatura & E-Fatura', items: ['Fatura – Firma bazlı kesim', 'E-Fatura – Firma vergi no ile', 'Kargo etiketi – Firma bilgisiyle', 'Fatura arşivi – Firma filtreleme'] },
  { icon: BarChart3, title: 'Raporlar', items: ['Raporlar – Firma bazlı', 'Excel export – Firma seçerek', 'Dashboard – Firma özeti', 'Kategori dağılımı – Firma bazlı'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function CokluFirmaContent() {
  return (
    <SolutionFeatures
      title="Çoklu Firma Yazılımı"
      subtitle="DijitalERP ile birden fazla firma veya şirketi tek programda yönetin. Her firma için ayrı stok, cari ve fatura. Tek yazılım, çoklu firma."
      categories={categories}
    />
  );
}
