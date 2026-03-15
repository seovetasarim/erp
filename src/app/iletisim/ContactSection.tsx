'use client';

import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <section id="iletisim" className="section section-demo">
        <div className="section-inner">
          <div className="demo-success">
            <div className="demo-success-icon">✓</div>
            <h2>Mesajınız Alındı!</h2>
            <p>En kısa sürede sizinle iletişime geçeceğiz.</p>
            <a href="tel:+905321667697" className="btn-primary demo-call-btn">
              <Phone size={18} />
              0532 166 76 97 ile Hemen Ara
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="iletisim" className="section section-demo">
      <div className="section-inner">
        <div className="section-header demo-section-header features-section-header">
          <h2>İletişime Geçin</h2>
          <p>Sorularınız veya talepleriniz için formu doldurun. Size en kısa sürede dönüş yapalım.</p>
        </div>
        <div className="demo-form-wrap">
          <div className="demo-form-col">
            <form className="demo-form" onSubmit={handleSubmit}>
              <div className="demo-form-row">
                <label htmlFor="contact-name">Ad Soyad *</label>
                <input id="contact-name" name="name" type="text" required placeholder="Adınız Soyadınız" />
              </div>
              <div className="demo-form-row">
                <label htmlFor="contact-email">E-posta *</label>
                <input id="contact-email" name="email" type="email" required placeholder="ornek@firma.com" />
              </div>
              <div className="demo-form-row">
                <label htmlFor="contact-phone">Telefon *</label>
                <input id="contact-phone" name="phone" type="tel" required placeholder="0532 000 00 00" />
              </div>
              <div className="demo-form-row">
                <label htmlFor="contact-subject">Konu</label>
                <input id="contact-subject" name="subject" type="text" placeholder="Mesaj konusu" />
              </div>
              <div className="demo-form-row">
                <label htmlFor="contact-message">Mesajınız *</label>
                <textarea id="contact-message" name="message" rows={4} required placeholder="Mesajınızı yazın..." />
              </div>
              <button type="submit" className="demo-submit-btn" disabled={loading}>
                <Send size={18} />
                {loading ? 'Gönderiliyor...' : 'Gönder'}
              </button>
            </form>
          </div>
          <div className="demo-contact-col">
            <div className="demo-contact-item">
              <Phone size={20} className="demo-contact-icon" />
              <div>
                <span className="demo-contact-label">Telefon</span>
                <a href="tel:+905321667697">0532 166 76 97</a>
              </div>
            </div>
            <div className="demo-contact-item">
              <Mail size={20} className="demo-contact-icon" />
              <div>
                <span className="demo-contact-label">E-posta</span>
                <a href="mailto:info@dijitalerp.com.tr">info@dijitalerp.com.tr</a>
              </div>
            </div>
            <div className="demo-contact-item">
              <MapPin size={20} className="demo-contact-icon" />
              <div>
                <span className="demo-contact-label">Adres</span>
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
            <div className="demo-contact-item">
              <Clock size={20} className="demo-contact-icon" />
              <div>
                <span className="demo-contact-label">Çalışma Saatleri</span>
                <span>Pzt - Cuma: 09:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
