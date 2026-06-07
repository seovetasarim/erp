'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Briefcase, Package, FileText, BarChart3, LayoutDashboard, Shield } from 'lucide-react';

const rawFeatures = [
  { icon: Briefcase, title: 'Firma & Cari', items: ['Firma yönetimi – Birden fazla firma desteği', 'Cariler – Müşteri ve tedarikçi tanımlama', 'Cari kartları – Detaylı bilgiler', 'Bakiye takibi – Alacak/borç'] },
  { icon: Package, title: 'Stok Yönetimi', items: ['Ürün yönetimi – Barkod, kategori, birim', 'Stok hareketleri – Giriş/çıkış', 'Stok sayım – Sayım ve fark uygulama', 'Düşük stok uyarısı'] },
  { icon: FileText, title: 'Fatura & E-Fatura', items: ['Fatura oluşturma – Müşteri, kalemler, KDV', 'E-Fatura – Paraşüt, İşbaşı, özel API', 'Kargo etiketi – Termal etiket yazdırma', 'Fatura arşivi'] },
  { icon: BarChart3, title: 'Raporlar & Dashboard', items: ['Aylık hareket – Stok raporları', 'Kategori dağılımı – Analiz', 'Excel export – Dışa aktarma', 'Dashboard – Özet istatistikler'] },
  { icon: LayoutDashboard, title: 'Kasa & Araçlar', items: ['Kasa giriş/çıkış – Nakit hareketleri', 'Barkod modal – Hızlı ürün arama', 'Kullanıcı yönetimi – Yetki bazlı erişim'] },
  { icon: Shield, title: 'Offline & Güvenlik', items: ['Tamamen offline – İnternet gerektirmez', 'Yerel veritabanı – Veriler sizde', 'Veritabanı yedekleme', 'Tek seferlik ödeme – Abonelik yok'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function KobiErpContent() {
  return (
    <SolutionFeatures
      title="KOBİ ERP"
      subtitle="Küçük ve orta ölçekli işletmeler için tek yazılımda stok, cari, fatura, E-Fatura ve raporlama. Tamamen offline, kurumsal destek."
      categories={categories}
    />
  );
}
