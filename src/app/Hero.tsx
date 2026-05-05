import { Phone, Download, ArrowRight, CheckCircle2, Zap, Shield, BarChart3 } from 'lucide-react';
import HeroStats from './HeroStats';

const DESKTOP_ARCHIVE_HREF = '/dijitalerp.rar';

const badges = [
  { icon: CheckCircle2, text: 'Ücretsiz masaüstü sürümü' },
  { icon: Zap, text: 'İnternet gerektirmez' },
  { icon: Shield, text: 'Veriler bilgisayarınızda' },
  { icon: BarChart3, text: 'Anlık raporlar' },
];

export default function Hero() {
  return (
    <section className="hero">
      {/* Arka plan - giriş ekranı ile aynı koyu kurumsal ton */}
      <div className="hero-bg" />

      <div className="hero-inner">
        {/* Sol: İçerik */}
        <div className="hero-content">

          {/* Başlık */}
          <h1 className="hero-anim hero-anim-1">
            <span className="hero-line">İşletmenizi </span><span className="hero-accent">Dijitalleştirin</span>
          </h1>

          {/* Açıklama */}
          <p className="hero-desc hero-anim hero-anim-2">
            <strong>Ücretsiz Windows sürümünü indirerek</strong> stok takibi, cari yönetimi, fatura ve
            raporlamayı tek yazılımda deneyin.
            Verileriniz <strong>bilgisayarınızda</strong> kalır; sunucu için internet gerekmez.
          </p>

          {/* CTA butonları */}
          <div className="hero-btns hero-anim hero-anim-3">
            <a href={DESKTOP_ARCHIVE_HREF} className="btn-primary" download="dijitalerp.rar">
              <Download size={18} strokeWidth={2.5} />
              <span className="sm:hidden">Ücretsiz İndir</span>
              <span className="hidden sm:inline">Ücretsiz İndir (Windows)</span>
            </a>
            <a href="tel:+905321667697" className="btn-secondary">
              <Phone size={18} strokeWidth={2.5} />
              Demo İste
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

      {/* Alt dalga */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40 C180 0 360 80 540 40 C720 0 900 80 1080 40 C1260 0 1380 40 1440 40 L1440 80 L0 80 Z" fill="#f7f7f4"/>
        </svg>
      </div>
    </section>
  );
}
