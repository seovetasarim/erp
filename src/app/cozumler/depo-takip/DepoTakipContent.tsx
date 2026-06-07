'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Package, BarChart3, LayoutDashboard, Shield } from 'lucide-react';

const rawFeatures = [
  { icon: Package, title: 'Depo Stok Yönetimi', items: ['Ürün kartları – Barkod, kategori, birim', 'Stok özeti – Firma/depo bazlı görünüm', 'Stok hareketleri – Giriş/çıkış', 'Stok sayım – Sayım ve fark uygulama', 'Düşük stok uyarısı'] },
  { icon: BarChart3, title: 'Depo Raporları', items: ['Aylık hareket – Giriş/çıkış özeti', 'Kategori dağılımı – Analiz', 'Günlük hareket – Gün bazlı', 'En çok hareket – Aktif ürünler', 'Excel export – Dışa aktarma'] },
  { icon: LayoutDashboard, title: 'Dashboard & Takip', items: ['Özet istatistikler – Tek ekran', 'Grafikler – Görsel analiz', 'Barkod modal – Hızlı ürün arama', 'Kargo etiketi – Termal yazdırma'] },
  { icon: Shield, title: 'Offline & Güvenlik', items: ['Tamamen offline – İnternet yok', 'Yerel veritabanı – Veriler sizde', 'Veritabanı yedekleme', 'Çoklu firma desteği'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function DepoTakipContent() {
  return (
    <SolutionFeatures
      title="Depo Takip Programı"
      subtitle="DijitalERP depo takip programı ile depo giriş-çıkış, stok sayımı ve raporlama. Barkod desteği, düşük stok uyarısı. Offline depo yönetim yazılımı."
      categories={categories}
    />
  );
}
