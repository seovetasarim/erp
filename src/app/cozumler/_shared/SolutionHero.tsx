import { ShoppingCart, Download, ArrowRight } from 'lucide-react';
import HeroStats from '../../HeroStats';
import { DESKTOP_ARCHIVE_FILENAME, DESKTOP_ARCHIVE_HREF } from '../../../download';
import { defaultHeroBadges, type HeroBadge } from './defaultBadges';

export type SolutionHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  badges?: HeroBadge[];
};

export default function SolutionHero({
  eyebrow,
  title,
  description,
  linkText = 'Modülleri inceleyin',
  linkHref = '#ozellikler',
  badges = defaultHeroBadges,
}: SolutionHeroProps) {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img src="/hero-banner.jpg" alt="" className="hero-bg-img" />
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow hero-anim hero-anim-1">{eyebrow}</p>
          <h1 className="hero-title hero-anim hero-anim-1">{title}</h1>

          <p className="hero-desc hero-anim hero-anim-2">{description}</p>

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
            <a href={linkHref} className="hero-inline-link">
              {linkText}
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
