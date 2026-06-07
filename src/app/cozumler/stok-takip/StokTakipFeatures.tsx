'use client';

import { useState } from 'react';
import {
  Landmark,
  Package,
  ClipboardList,
  ScanBarcode,
  FileText,
  BarChart3,
  LayoutDashboard,
  Shield,
} from 'lucide-react';
import { DESKTOP_ARCHIVE_FILENAME, DESKTOP_ARCHIVE_HREF } from '../../../download';

const categories = [
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
    label: 'Fatura & Çıkış',
    title: 'Fatura Yönetimi',
    desc: 'Satış faturaları ile stok çıkışını senkron yönetin, yazdırın ve e-fatura gönderin.',
    items: [
      'Satış faturası oluşturma — Müşteri, kalemler, KDV',
      'Ürün seçince fiyat/KDV otomatik dolar',
      'Fatura yazdırma → Otomatik print dialog açılır',
      'Profesyonel fatura şablonu (Satıcı/Alıcı, KDV, Genel Toplam)',
      'E-Fatura gönderimi (Paraşüt, İşbaşı, API desteği)',
    ],
  },
  {
    icon: BarChart3,
    label: 'Raporlar',
    title: 'Raporlar & Analizler',
    desc: 'Grafikler ve KPI kartlarıyla stok hareketlerinizi analiz edin, verileri Excel\'e aktarın.',
    items: [
      'Aylık stok hareket grafiği (12 ay, çizgi grafik)',
      'Günlük hareket trendi (son 14 gün)',
      'Kategori dağılımı (pasta grafik, stok değeri)',
      'En çok hareket gören ürünler (bar grafik)',
      'KPI: Dönem giriş/çıkış, stok değeri, düşük stok',
      'Excel export — Tüm veriler Excel\'e aktarılır',
    ],
  },
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    title: 'Dashboard',
    desc: 'Stok KPI\'larını, grafikleri ve son hareketleri tek ekranda görün.',
    items: [
      'Anlık KPI kartları: Stok değeri, ürün sayısı, düşük stok, hareket',
      '12 aylık trend grafiği',
      'Son işlemler tablosu',
      'Düşük stoklu ürünler listesi',
      'Öne çıkan kategoriler',
    ],
  },
  {
    icon: Landmark,
    label: 'Çoklu Firma',
    title: 'Firma & Şirket Yönetimi',
    desc: 'Birden fazla firmayı tek ekranda yönetin; her firma için ayrı stok kaydı tutun.',
    items: [
      'Firma profili — Ad, vergi no, vergi dairesi, adres, telefon, logo',
      'Firma bazlı stok görünümü ve hareket kaydı',
      'Firma seçimi ile ekranlar arası geçiş',
      'Cari limit, risk limiti, ödeme vadesi',
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
];

export default function StokTakipFeatures() {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section id="ozellikler" className="ft-section">
      <div className="ft-inner">
        <div className="ft-header">
          <p className="ft-eyebrow">Modüller</p>
          <h2 className="ft-title">DijitalERP Stok Takip Özellikleri</h2>
          <p className="ft-subtitle">
            Önce{' '}
            <a href={DESKTOP_ARCHIVE_HREF} download={DESKTOP_ARCHIVE_FILENAME} className="ft-subtitle-link">
              ücretsiz Windows sürümünü indirin
            </a>
            ; sonra envanter ve stok hareketlerini tamamen offline yönetin. KOBİ&apos;ler için kurumsal lisans
            seçenekleri mevcuttur.
          </p>
        </div>

        <div className="ft-layout">
          <nav className="ft-tabs" aria-label="Stok modül kategorileri">
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
