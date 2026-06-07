'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Package, BarChart3, LayoutDashboard, Shield } from 'lucide-react';

const rawFeatures = [
  { icon: Package, title: 'Ürün & Stok Yönetimi', items: ['Ürün kartları – Barkod, kategori, birim, min/max stok', 'Stok özeti – Firma bazlı anlık stok görünümü', 'Stok hareketleri – Giriş/çıkış, transfer işlemleri', 'Stok sayım – Sayım yapma ve fark uygulama', 'Düşük stok uyarısı – Minimum seviye altı bildirimi'] },
  { icon: BarChart3, title: 'Stok Raporları', items: ['Aylık hareket raporu – Stok giriş/çıkış özeti', 'Kategori dağılımı – Ürün kategorilerine göre analiz', 'Günlük hareket – Gün bazlı hareket listesi', 'En çok hareket – En aktif ürünler', 'Excel export – Raporları Excel\'e aktarma'] },
  { icon: LayoutDashboard, title: 'Dashboard & Takip', items: ['Özet istatistikler – Tek ekrandan stok durumu', 'Grafikler – Görsel stok analizi', 'Barkod modal – Barkod ile hızlı ürün arama'] },
  { icon: Shield, title: 'Güvenlik & Offline', items: ['Tamamen offline – İnternet gerektirmez', 'Yerel veritabanı – Veriler bilgisayarınızda', 'Veritabanı yedekleme – Yedek alma'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function StokTakipContent() {
  return (
    <SolutionFeatures
      title="Stok Takip Yazılımı"
      subtitle="DijitalERP ile envanterinizi tek ekrandan yönetin. Barkod, stok sayımı, raporlama ve düşük stok uyarısı."
      categories={categories}
    />
  );
}
