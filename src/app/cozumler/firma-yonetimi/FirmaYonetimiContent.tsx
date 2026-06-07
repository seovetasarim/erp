'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Briefcase, Users, FileText, Package, BarChart3, Shield } from 'lucide-react';

const rawFeatures = [
  { icon: Briefcase, title: 'Çoklu Firma Yönetimi', items: ['Firma tanımlama – Vergi no, adres, telefon', 'Birden fazla firma – Tek programda', 'Firma bazlı stok – Her firma ayrı stok', 'Firma bazlı cari – Ayrı hesaplar'] },
  { icon: Users, title: 'Cari & Müşteri', items: ['Müşteri kartları – Detaylı bilgiler', 'Tedarikçi kartları – Satın alma', 'Cari bakiye – Alacak/borç', 'Cari hareket geçmişi'] },
  { icon: FileText, title: 'Fatura & E-Fatura', items: ['Fatura oluşturma – Firma bazlı', 'E-Fatura – GİB entegrasyonu', 'Kargo etiketi – Termal yazdırma', 'Fatura arşivi'] },
  { icon: Package, title: 'Stok Yönetimi', items: ['Ürün yönetimi – Barkod, kategori', 'Stok hareketleri – Giriş/çıkış', 'Stok sayım – Sayım ve fark', 'Düşük stok uyarısı'] },
  { icon: BarChart3, title: 'Raporlar', items: ['Aylık hareket – Stok raporları', 'Kategori dağılımı – Analiz', 'Excel export – Dışa aktarma', 'Dashboard – Özet istatistikler'] },
  { icon: Shield, title: 'Offline & Güvenlik', items: ['Tamamen offline – İnternet yok', 'Yerel veritabanı – Veriler sizde', 'Veritabanı yedekleme', 'Kullanıcı yetkileri'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function FirmaYonetimiContent() {
  return (
    <SolutionFeatures
      title="Firma Yönetim Yazılımı"
      subtitle="DijitalERP ile çoklu firma yönetimi: Stok, cari, fatura ve raporlar firma bazlı. KOBİ&apos;ler için firma yönetim programı."
      categories={categories}
    />
  );
}
