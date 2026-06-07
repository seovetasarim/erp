'use client';

import SolutionFeatures from '../_shared/SolutionFeatures';
import { deriveCategoryDesc } from '../_shared/deriveCategoryDesc';
import { FileText, Truck, Settings, CheckCircle } from 'lucide-react';

const rawFeatures = [
  { icon: FileText, title: 'E-Fatura Oluşturma', items: ['Fatura oluşturma – Müşteri seçimi, kalemler, KDV', 'E-Fatura gönder – GİB portalına otomatik gönderim', 'Fatura detay – Yazdır, E-Fatura gönder butonu', 'Test faturası – Kurulum sonrası deneme faturası'] },
  { icon: Settings, title: 'E-Fatura Kurulum', items: ['Kurulum sihirbazı – Paraşüt, İşbaşı, özel API', 'API test – Bağlantı testi, firma doğrulama', 'Firma doğrulama – GİB entegrasyonu', 'Kolay yapılandırma – Adım adım kurulum'] },
  { icon: Truck, title: 'Kargo Etiketi', items: ['Kargo etiketi – 100×150 mm termal etiket', 'CODE128 barkod – Standart barkod formatı', 'Fatura ile entegre – Fatura bilgileriyle etiket', 'Yazdırma – Termal yazıcı desteği'] },
  { icon: CheckCircle, title: 'Uyumluluk & Güvenlik', items: ['GİB uyumlu – Resmi E-Fatura formatı', 'Offline çalışma – Veriler yerelde', 'API güvenliği – Şifreli bağlantı', 'Yedekleme – Fatura arşivi'] },
];

const categories = rawFeatures.map((cat) => ({
  icon: cat.icon,
  label: cat.title,
  title: cat.title,
  desc: deriveCategoryDesc(cat.title, cat.items),
  items: cat.items,
}));

export default function EFaturaContent() {
  return (
    <SolutionFeatures
      title="E-Fatura Yazılımı"
      subtitle="DijitalERP ile E-Fatura oluşturun ve GİB portalına gönderin. Paraşüt, İşbaşı ve özel API desteği. Kargo etiketi dahil."
      categories={categories}
    />
  );
}
