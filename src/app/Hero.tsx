import { ShoppingCart, Download, ArrowRight, CheckCircle2, Zap, Shield, BarChart3 } from 'lucide-react';
import HeroStats from './HeroStats';
import { DESKTOP_ARCHIVE_FILENAME, DESKTOP_ARCHIVE_HREF } from '../download';

const badges = [
  { icon: CheckCircle2, text: 'Ücretsiz masaüstü sürümü' },
  { icon: Zap, text: 'İnternet gerektirmez' },
  { icon: Shield, text: 'Veriler bilgisayarınızda' },
  { icon: BarChart3, text: 'Anlık raporlar' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img src="/hero-banner.jpg" alt="" className="hero-bg-img" />
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-inner">
        {/* Sol: İçerik */}
        <div className="hero-content">

          <p className="hero-eyebrow hero-anim hero-anim-1">DijitalERP — Offline ERP Yazılımı</p>
          <h1 className="hero-title hero-anim hero-anim-1">
            İşletmenizi Dijitalleştirin
          </h1>

          {/* Açıklama */}
          <p className="hero-desc hero-anim hero-anim-2">
            Ücretsiz Windows sürümünü indirerek stok takibi, cari yönetimi, fatura ve raporlamayı tek
            yazılımda deneyin. Verileriniz bilgisayarınızda kalır; sunucu için internet gerekmez.
          </p>

          {/* CTA butonları */}
          <div className="hero-btns hero-anim hero-anim-3">
            <a href={DESKTOP_ARCHIVE_HREF} className="btn-primary" download={DESKTOP_ARCHIVE_FILENAME}>
              <Download size={18} strokeWidth={2.5} />
              <span className="sm:hidden">Ücretsiz İndir</span>
              <span className="hidden sm:inline">Ücretsiz İndir (Windows)</span>
            </a>
            <a href="/fiyatlandirma" className="btn-secondary">
              <ShoppingCart size={18} strokeWidth={2.5} />
              Satın Al
            </a>
          </div>
          <p className="hero-anim hero-anim-3 hero-sub-cta">
            <a href="/#ozellikler" className="hero-inline-link">
              Modülleri ve özellikleri inceleyin
              <ArrowRight size={16} strokeWidth={2.5} aria-hidden />
            </a>
          </p>

          {/* Özellik rozetleri */}
          <div className="hero-badges hero-anim hero-anim-3">
            {badges.map((b) => (
              <div key={b.text} className="hero-badge-item">
                <b.icon size={13} strokeWidth={2.5} />
                <span>{b.text}</span>
              </div>
            ))}
          </div>

          {/* İstatistikler */}
          <div className="hero-anim hero-anim-4">
            <HeroStats />
          </div>
        </div>
      </div>

    </section>
  );
}
