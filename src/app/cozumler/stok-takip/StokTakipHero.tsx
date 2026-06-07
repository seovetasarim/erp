import { ShoppingCart, Download, ArrowRight, CheckCircle2, Zap, Shield, ScanBarcode } from 'lucide-react';
import HeroStats from '../../HeroStats';
import { DESKTOP_ARCHIVE_FILENAME, DESKTOP_ARCHIVE_HREF } from '../../../download';

const badges = [
  { icon: CheckCircle2, text: 'Ücretsiz masaüstü sürümü' },
  { icon: ScanBarcode, text: 'Barkod okuyucu desteği' },
  { icon: Zap, text: 'İnternet gerektirmez' },
  { icon: Shield, text: 'Veriler bilgisayarınızda' },
];

export default function StokTakipHero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img src="/hero-banner.jpg" alt="" className="hero-bg-img" />
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow hero-anim hero-anim-1">DijitalERP — Stok Takip Modülü</p>
          <h1 className="hero-title hero-anim hero-anim-1">Stok Takip Yazılımı</h1>

          <p className="hero-desc hero-anim hero-anim-2">
            Ücretsiz Windows sürümünü indirerek envanter, stok giriş-çıkış, sayım ve raporlamayı tek
            yazılımda deneyin. Verileriniz bilgisayarınızda kalır; sunucu için internet gerekmez.
          </p>

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
            <a href="#ozellikler" className="hero-inline-link">
              Stok modüllerini inceleyin
              <ArrowRight size={16} strokeWidth={2.5} aria-hidden />
            </a>
          </p>

          <div className="hero-badges hero-anim hero-anim-3">
            {badges.map((b) => (
              <div key={b.text} className="hero-badge-item">
                <b.icon size={13} strokeWidth={2.5} />
                <span>{b.text}</span>
              </div>
            ))}
          </div>

          <div className="hero-anim hero-anim-4">
            <HeroStats />
          </div>
        </div>
      </div>
    </section>
  );
}
