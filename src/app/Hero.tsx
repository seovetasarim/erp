import { Phone, ArrowRight, CheckCircle2, Zap, Shield, BarChart3 } from 'lucide-react';
import HeroStats from './HeroStats';

const badges = [
  { icon: CheckCircle2, text: 'İnternet gerektirmez' },
  { icon: Zap, text: 'Anında kurulum' },
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
            Stok takibi, cari yönetimi, fatura ve raporlama tek çatı altında.
            Verileriniz <strong>bilgisayarınızda</strong> — internet bağlantısı gerektirmez.
          </p>

          {/* CTA butonları */}
          <div className="hero-btns hero-anim hero-anim-3">
            <a href="tel:+905321667697" className="btn-primary">
              <Phone size={18} strokeWidth={2.5} />
              Ücretsiz Demo İste
            </a>
            <a href="/#ozellikler" className="btn-secondary">
              Özellikleri İncele
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>

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

        {/* Sağ: Video - bilgisayar çerçevesi */}
        <div className="hero-media hero-anim hero-anim-5">
          <div className="hero-computer-frame">
            {/* Pencere başlık çubuğu */}
            <div className="hero-computer-titlebar">
              <div className="hero-computer-dots">
                <span className="hero-computer-dot" />
                <span className="hero-computer-dot" />
                <span className="hero-computer-dot" />
              </div>
              <span className="hero-computer-title">DijitalERP</span>
            </div>
            {/* Ekran */}
            <div className="hero-video-wrap">
              <video
                className="hero-video"
                src="/erpvideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
              >
                Tarayıcınız video oynatmayı desteklemiyor.
              </video>
            </div>
            {/* Bilgisayar tabanı */}
            <div className="hero-computer-base">
              <div className="hero-computer-stand" />
            </div>
            <div className="hero-video-caption">
              <span className="hero-video-dot" />
              <span>Canlı Yazılım Görüntüsü</span>
            </div>
          </div>
        </div>
      </div>

      {/* Alt dalga */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40 C180 0 360 80 540 40 C720 0 900 80 1080 40 C1260 0 1380 40 1440 40 L1440 80 L0 80 Z" fill="#FFFFFF"/>
        </svg>
      </div>
    </section>
  );
}
