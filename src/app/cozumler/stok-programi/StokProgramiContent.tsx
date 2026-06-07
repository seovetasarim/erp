'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Package, BarChart3, LayoutDashboard, Shield } from 'lucide-react';

const rawFeatures = [
  { icon: Package, title: 'Ürün & Stok', items: ['Ürün kartları – Barkod, kategori, birim', 'Stok özeti – Firma bazlı görünüm', 'Stok hareketleri – Giriş/çıkış', 'Stok sayım – Sayım ve fark uygulama', 'Düşük stok uyarısı'] },
  { icon: BarChart3, title: 'Stok Raporları', items: ['Aylık hareket – Giriş/çıkış özeti', 'Kategori dağılımı – Analiz', 'Günlük hareket – Gün bazlı', 'En çok hareket – Aktif ürünler', 'Excel export – Dışa aktarma'] },
  { icon: LayoutDashboard, title: 'Dashboard', items: ['Özet istatistikler – Tek ekran', 'Grafikler – Görsel analiz', 'Barkod modal – Hızlı ürün arama'] },
  { icon: Shield, title: 'Offline & Güvenlik', items: ['Tamamen offline – İnternet yok', 'Yerel veritabanı – Veriler sizde', 'Veritabanı yedekleme'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function StokProgramiContent() {
  return (
    <SolutionFeatures
      title="Stok Programı"
      subtitle="DijitalERP stok programı ile envanterinizi yönetin. Barkod, stok sayımı, raporlama ve düşük stok uyarısı. Offline stok takip programı."
      categories={categories}
    />
  );
}
