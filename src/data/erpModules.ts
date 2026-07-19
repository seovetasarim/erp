import type { StaticImageData } from 'next/image';
// DijitalERP monitör mockup görselleri (birebir uygulama ekranları)
import mockDashboard from '../../public/assets/img/home-11/project/project-1.png'; // Dashboard
import mockFirma from '../../public/assets/img/home-11/project/project-2.png'; // Firma / portföy
import mockStok from '../../public/assets/img/home-11/project/project-3.png'; // Stok
import mockHareket from '../../public/assets/img/home-11/project/project-4.png'; // Hareketler
import mockRapor from '../../public/assets/img/home-11/project/project-5.png'; // Raporlar / finans

export type ErpModule = {
    id: number;
    title: string;
    category: string;
    description: string;
    image: StaticImageData;
    link: string;
};

const DL = '/downloads/dijitalerp.rar';

/** Programdaki tüm modüller (birlikte geliştirdiğimiz sürümün tamamı). */
export const erpModules: ErpModule[] = [
    { id: 1, title: 'Dashboard & Analitik', category: 'Analitik', description: 'Stok, kasa ve satışlar tek bakışta; canlı grafikler ve kritik uyarılar.', image: mockDashboard, link: DL },
    { id: 2, title: 'Stok Takip', category: 'Stok', description: 'Depo, kritik stok uyarıları ve anlık stok durumu — internetsiz çalışır.', image: mockStok, link: DL },
    { id: 3, title: 'Ürün Kataloğu', category: 'Stok', description: 'Barkod, kategori, fiyat ve görselle zengin ürün kartları.', image: mockStok, link: DL },
    { id: 4, title: 'Stok Hareketleri', category: 'Stok', description: 'Giriş/çıkış geçmişi, tip dağılımı ve en çok hareket gören ürünler.', image: mockHareket, link: DL },
    { id: 5, title: 'Sayım & Mobil Sayım', category: 'Stok', description: 'Fiziksel stok sayımı ve telefondan barkodlu mobil sayım (PWA).', image: mockHareket, link: DL },
    { id: 6, title: 'Cari Yönetim', category: 'Cari', description: 'Müşteri ve tedarikçi carileri, borç/alacak ve tahsilat takibi.', image: mockFirma, link: DL },
    { id: 7, title: 'Cari Ekstre', category: 'Cari', description: 'Cari bazlı ekstre, bakiye ve hareket dökümü.', image: mockFirma, link: DL },
    { id: 8, title: 'Satış & Alış Faturası', category: 'Fatura', description: 'Fatura oluştur, yazdır; stok ve cari otomatik güncellensin.', image: mockRapor, link: DL },
    { id: 9, title: 'e-Fatura Entegrasyonu', category: 'Fatura', description: 'Paraşüt / İşbaşı gibi sağlayıcılarla e-fatura gönderimi.', image: mockRapor, link: DL },
    { id: 10, title: 'Hızlı Satış (POS)', category: 'Satış', description: 'Barkodla sepet, tek dokunuşla fatura ve kasa girişi.', image: mockDashboard, link: DL },
    { id: 11, title: 'Siparişler (Pazaryeri)', category: 'Satış', description: 'Trendyol / Ticimax siparişlerini içeri al, ürünle eşleştir.', image: mockStok, link: DL },
    { id: 12, title: 'Kasa & Nakit', category: 'Kasa', description: 'Nakit giriş/çıkış, günlük kasa durumu ve çok kasa desteği.', image: mockRapor, link: DL },
    { id: 13, title: 'Personel & Vardiya', category: 'Personel', description: 'Personel kayıtları ve vardiya / mesai takibi.', image: mockFirma, link: DL },
    { id: 14, title: 'Raporlar & Excel', category: 'Rapor', description: 'Satış/stok raporları, kâr-zarar özeti ve Excel dışa aktarım.', image: mockRapor, link: DL },
];

export const erpModuleFilters: { key: string; label: string }[] = [
    { key: 'all', label: 'Tümü' },
    { key: 'Stok', label: 'Stok' },
    { key: 'Cari', label: 'Cari' },
    { key: 'Fatura', label: 'Fatura' },
    { key: 'Satış', label: 'Satış' },
    { key: 'Kasa', label: 'Kasa' },
    { key: 'Rapor', label: 'Rapor' },
    { key: 'Analitik', label: 'Analitik' },
    { key: 'Personel', label: 'Personel' },
];

export default erpModules;
