import { Phone } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <div className="cta-bg-accent" aria-hidden />
        <div className="cta-text">
          <p className="cta-line1">İşletmenizi Güvende Tutun,</p>
          <p className="cta-line2">Süreçlerinizi Kesintisiz Yönetin!</p>
        </div>
        <a href="tel:+905321667697" className="cta-phone-block">
          <div className="cta-phone-icon-wrap">
            <Phone size={28} strokeWidth={2} aria-hidden />
          </div>
          <span className="cta-phone-label">HEMEN ARAYIN</span>
          <span className="cta-phone-number">0532 166 76 97</span>
        </a>
      </div>
      <div className="cta-wave" aria-hidden>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40 C180 0 360 80 540 40 C720 0 900 80 1080 40 C1260 0 1380 40 1440 40 L1440 80 L0 80 Z" fill="#FFFFFF"/>
        </svg>
      </div>
    </section>
  );
}
