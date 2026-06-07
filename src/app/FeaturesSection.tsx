'use client';

import { useState } from 'react';
import {
  Landmark,
  Users,
  Package,
  ClipboardList,
  ScanBarcode,
  FileText,
  Wallet,
  BarChart3,
  LayoutDashboard,
  Shield,
  Cpu,
} from 'lucide-react';
import { DESKTOP_ARCHIVE_FILENAME, DESKTOP_ARCHIVE_HREF } from '../download';

const categories = [
  {
    icon: Landmark,
    label: 'Firma Yönetimi',
    title: 'Firma & Şirket Yönetimi',
    desc: 'Birden fazla firmayı tek ekranda yönetin. Tüm kurumsal bilgiler ve ticari kayıtlar.',
    items: [
      'Firma profili — Ad, vergi no, vergi dairesi, adres, telefon, logo',
      'Yetkili kişi, mersis no, ticaret sicil bilgileri',
      'IBAN ve banka bilgileri',
      'Cari limit, risk limiti, ödeme vadesi',
    ],
  },
  {
    icon: Users,
    label: 'Cari Yönetimi',
    title: 'Cari Yönetimi (Müşteri & Tedarikçi)',
    desc: 'Müşteri ve tedarikçi kartlarını kolayca oluşturun, borç ve alacakları takip edin.',
    items: [
      'Müşteri kartı — Vergi no, telefon, adres, borç takibi',
      'Tedarikçi kartı — Tüm ticari bilgiler',
      'Otomatik Cari Kodu (CAR-0001, CAR-0002...)',
      'Cari arama ve tür filtresi (Müşteri / Tedarikçi)',
      'Kargo etiketi yazdırma (100×150mm, barkodlu)',
      'Başlangıç borç girişi',
    ],
  },
  {
    icon: Package,
    label: 'Ürün & Envanter',
    title: 'Ürün & Envanter',
    desc: 'Tüm ürün bilgilerini, fiyatlarını ve stok göstergelerini tek yerde yönetin.',
    items: [
      'Ürün kartı — Ad, barkod, kategori, marka, birim',
      'Otomatik Ürün Kodu (PRD-001, PRD-002...)',
      'Alış / satış fiyatı, KDV oranı, canlı marj hesabı',
      'Minimum / maksimum stok tanımlama',
      'Ürün görseli yükleme',
      'Kategori yönetimi — Ana kategori + alt kategori sistemi',
      'Stok durumu: yeşil/sarı/kırmızı renk göstergesi',
    ],
  },
  {
    icon: ClipboardList,
    label: 'Stok Hareketleri',
    title: 'Stok Özeti & Hareketler',
    desc: 'Anlık stok durumunu görün, giriş/çıkış işlemlerini kaydedin ve geçmişi izleyin.',
    items: [
      'Firma bazlı anlık stok görünümü',
      'Stok giriş / çıkış işlemleri (tedarikçi/müşteri seçimli)',
      'Hareket geçmişi — Tarih, ürün, tip, miktar',
      'Tarih aralığı ve ürün bazlı filtreleme',
      'Düşük stok uyarısı (sarı/kırmızı)',
      'Stok hareketi fişi yazdırma',
    ],
  },
  {
    icon: ScanBarcode,
    label: 'Stok Sayım',
    title: 'Stok Sayım Modülü',
    desc: 'Periyodik sayım yapın, sistem ile gerçek stoku karşılaştırın ve farkları kapatın.',
    items: [
      'Yeni sayım oturumu oluşturma',
      'Ürün bazlı sayılan miktar girişi',
      'Sistem stoku vs sayılan karşılaştırma (fark raporu)',
      'Sayımı onayla → stoklar otomatik güncellenir',
    ],
  },
  {
    icon: FileText,
    label: 'Fatura Yönetimi',
    title: 'Fatura Yönetimi',
    desc: 'Satış faturalarını saniyeler içinde oluşturun, yazdırın ve e-fatura gönderin.',
    items: [
      'Satış faturası oluşturma — Müşteri, kalemler, KDV',
      'Birden fazla ürün kalemi',
      'Nakit / Borç (vadeli) ödeme seçimi',
      'Vade tarihi',
      'Ürün seçince fiyat/KDV otomatik dolar',
      'Yeni Müşteri Ekle — Fatura formunda anında müşteri tanımlama',
      'Fatura yazdırma → Otomatik print dialog açılır',
      'Profesyonel fatura şablonu (Satıcı/Alıcı, KDV, Genel Toplam)',
      'E-Fatura gönderimi (Paraşüt, İşbaşı, API desteği)',
    ],
  },
  {
    icon: Wallet,
    label: 'Kasa',
    title: 'Kasa Yönetimi',
    desc: 'Nakit hareketlerinizi takip edin, anlık bakiyenizi her zaman görün.',
    items: [
      'Nakit giriş / çıkış kayıtları',
      'Anlık kasa bakiyesi (büyük gösterge)',
      'Yetersiz bakiye kontrolü (çıkışta uyarı)',
      'Tarih aralığı filtreleme',
      'Kullanıcı bazlı hareket kaydı',
    ],
  },
  {
    icon: BarChart3,
    label: 'Raporlar',
    title: 'Raporlar & Analizler',
    desc: 'Grafikler ve KPI kartlarıyla işletmenizi analiz edin, verileri Excel\'e aktarın.',
    items: [
      'Aylık stok hareket grafiği (12 ay, çizgi grafik)',
      'Günlük hareket trendi (son 14 gün)',
      'Kategori dağılımı (pasta grafik, stok değeri)',
      'En çok hareket gören ürünler (bar grafik)',
      'KPI: Dönem giriş/çıkış, stok değeri (alış+satış), düşük stok',
      'Excel export — Tüm veriler Excel\'e aktarılır',
    ],
  },
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    title: 'Dashboard',
    desc: 'Tüm işletmenizi tek ekranda görün. Anlık KPI\'lar, grafikler ve son işlemler.',
    items: [
      'Anlık KPI kartları: Stok değeri, ürün sayısı, düşük stok, hareket',
      '12 aylık trend grafiği',
      'Son işlemler tablosu',
      'Düşük stoklu ürünler listesi',
      'Öne çıkan kategoriler',
      'Yeni kullanıcı için başlangıç rehberi (4 adımlı)',
    ],
  },
  {
    icon: Shield,
    label: 'Güvenlik',
    title: 'Sistem & Güvenlik',
    desc: 'Verileriniz tamamen sizde. İnternet gerektirmez, yerel veritabanı ile tam güvenlik.',
    items: [
      '%100 Offline — İnternet bağlantısı gerekmez',
      'SQLite yerel veritabanı — Veriler bilgisayarınızda',
      'Şifreli giriş — Kullanıcı adı + şifre',
      'Yetki sistemi — Admin / Kullanıcı rolleri',
      'Veritabanı yedekleme — Tek tıkla .db dosyası',
      'Barkod okuyucu desteği',
    ],
  },
  {
    icon: Cpu,
    label: 'Teknik',
    title: 'Teknik Altyapı',
    desc: 'Windows masaüstü uygulaması olarak çalışır. Kurulum sonrası güncelleme gerekmez.',
    items: [
      'Electron (Windows masaüstü uygulaması)',
      'Tek seferlik kurulum, güncelleme zorunluluğu yok',
      'Koyu tema, modern arayüz',
      'Animasyonlu açılış ekranı',
      'Yazdır → Otomatik print dialog',
    ],
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section id="ozellikler" className="ft-section">
      <div className="ft-inner">
        <div className="ft-header">
          <p className="ft-eyebrow">Modüller</p>
          <h2 className="ft-title">DijitalERP Özellikler</h2>
          <p className="ft-subtitle">
            Önce{' '}
            <a href={DESKTOP_ARCHIVE_HREF} download={DESKTOP_ARCHIVE_FILENAME} className="ft-subtitle-link">
              ücretsiz Windows sürümünü indirin
            </a>
            ; sonra stok takip ve cariyi tamamen offline yönetin. KOBİ&apos;ler için kurumsal lisans seçenekleri mevcuttur.
          </p>
        </div>

        <div className="ft-layout">
          <nav className="ft-tabs" aria-label="Özellik kategorileri">
            {categories.map((c, i) => (
              <button
                key={c.label}
                type="button"
                onClick={() => setActive(i)}
                className={`ft-tab${active === i ? ' ft-tab-active' : ''}`}
                aria-pressed={active === i}
              >
                <span className="ft-tab-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="ft-tab-label">{c.label}</span>
              </button>
            ))}
          </nav>

          <div className="ft-panel" key={active}>
            <div className="ft-panel-head">
              <div className="ft-panel-head-main">
                <p className="ft-panel-eyebrow">{cat.label}</p>
                <h3 className="ft-panel-title">{cat.title}</h3>
                <p className="ft-panel-desc">{cat.desc}</p>
              </div>
              <div className="ft-panel-head-icon" aria-hidden="true">
                <cat.icon size={22} strokeWidth={1.75} />
              </div>
            </div>

            <div className="ft-panel-body">
              <p className="ft-panel-list-title">Modül kapsamı</p>
              <ul className="ft-panel-list">
                {cat.items.map((item) => (
                  <li key={item} className="ft-panel-item">
                    <span className="ft-item-marker" aria-hidden="true" />
                    <span className="ft-item-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
