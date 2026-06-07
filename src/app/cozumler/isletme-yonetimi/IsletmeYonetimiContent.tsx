'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Briefcase, Package, FileText, BarChart3, LayoutDashboard, Shield } from 'lucide-react';

const rawFeatures = [
  { icon: Briefcase, title: 'Firma & Cari', items: ['Firma yönetimi – Çoklu firma', 'Cariler – Müşteri ve tedarikçi', 'Cari kartları – Detaylı bilgiler', 'Bakiye takibi – Alacak/borç'] },
  { icon: Package, title: 'Stok Yönetimi', items: ['Ürün yönetimi – Barkod, kategori', 'Stok hareketleri – Giriş/çıkış', 'Stok sayım – Sayım ve fark', 'Düşük stok uyarısı'] },
  { icon: FileText, title: 'Fatura & E-Fatura', items: ['Fatura oluşturma – KDV dahil', 'E-Fatura – Paraşüt, İşbaşı', 'Kargo etiketi – Termal yazdırma', 'Fatura arşivi'] },
  { icon: BarChart3, title: 'Raporlar & Analiz', items: ['Aylık hareket – Stok raporları', 'Kategori dağılımı – Analiz', 'Excel export – Dışa aktarma', 'Dashboard – Özet istatistikler'] },
  { icon: LayoutDashboard, title: 'Kasa & Araçlar', items: ['Kasa giriş/çıkış – Nakit', 'Barkod modal – Hızlı arama', 'Kullanıcı yönetimi – Yetkiler'] },
  { icon: Shield, title: 'Offline & Güvenlik', items: ['Tamamen offline – İnternet yok', 'Yerel veritabanı – Veriler sizde', 'Veritabanı yedekleme', 'Tek seferlik ödeme'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function IsletmeYonetimiContent() {
  return (
    <SolutionFeatures
      title="İşletme Yönetim Sistemi"
      subtitle="DijitalERP ile işletme yönetimi: Stok, cari, fatura, E-Fatura ve raporlama tek yazılımda. KOBİ&apos;ler için işletme yönetim programı."
      categories={categories}
    />
  );
}
