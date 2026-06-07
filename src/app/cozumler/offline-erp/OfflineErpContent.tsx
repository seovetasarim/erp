'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { Shield, Database, WifiOff, Lock } from 'lucide-react';

const rawFeatures = [
  { icon: WifiOff, title: 'Tamamen Offline', items: ['İnternet gerektirmez – Tüm işlemler yerelde', 'Bulut bağımlılığı yok – Veriler sizde', 'Kesintisiz çalışma – Bağlantı kopması yok', 'Hızlı erişim – Yerel veritabanı hızı'] },
  { icon: Database, title: 'Yerel Veritabanı', items: ['SQLite (better-sqlite3) – Hafif ve güvenilir', 'Veriler bilgisayarınızda – Bulutta değil', 'Veritabanı yedekleme – Yedek alma', 'Taşınabilir – Veritabanı dosyası taşınabilir'] },
  { icon: Lock, title: 'Güvenlik & Gizlilik', items: ['Veriler sizde – Üçüncü tarafla paylaşım yok', 'Şifreleme – Veritabanı güvenliği', 'Yedekleme – Düzenli yedek alın', 'Kullanıcı yetkileri – Erişim kontrolü'] },
  { icon: Shield, title: 'Avantajlar', items: ['Abonelik yok – Tek seferlik ödeme', 'Süresiz kullanım – Lisans süresi yok', 'Kurumsal destek – Teknik destek', 'E-Fatura hariç offline – Sadece gönderimde internet'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function OfflineErpContent() {
  return (
    <SolutionFeatures
      title="Offline ERP"
      subtitle="DijitalERP tamamen offline çalışır. Verileriniz bilgisayarınızda, internet gerektirmez. Bulut bağımlılığı yok."
      categories={categories}
    />
  );
}
