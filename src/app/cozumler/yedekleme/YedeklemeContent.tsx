'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Database, Shield, FolderOpen } from 'lucide-react';

const rawFeatures = [
  { icon: Database, title: 'Veritabanı Yedekleme', items: ['Tek tıkla yedekleme – Kolay kullanım', 'SQLite veritabanı – Tüm veriler', 'Yedek dosyası – Taşınabilir', 'Tarih damgalı – Versiyon takibi'] },
  { icon: FolderOpen, title: 'Yedek Yönetimi', items: ['Yedek konumu seç – İstediğiniz klasör', 'USB / harici disk – Taşınabilir yedek', 'Ağ sürücüsü – Merkezi depolama', 'Otomatik yedek – Düzenli aralıklarla (manuel)'] },
  { icon: Shield, title: 'Güvenlik & Geri Yükleme', items: ['Veri güvenliği – Yerel depolama', 'Geri yükleme – Yedekten geri al', 'Felaket kurtarma – Veri kaybı önleme', 'Offline yedek – İnternet gerektirmez'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function YedeklemeContent() {
  return (
    <SolutionFeatures
      title="Veritabanı Yedekleme"
      subtitle="DijitalERP ile veritabanınızı yedekleyin. Tek tıkla yedekleme, geri yükleme. Stok, cari, fatura verileriniz güvende."
      categories={categories}
    />
  );
}
