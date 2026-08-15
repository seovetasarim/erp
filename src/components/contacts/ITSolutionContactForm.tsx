"use client";

import { useState } from "react";
import Link from "next/link";
import { getWhatsAppUrl, SITE } from "@/constants/seo";

const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.address.full)}&hl=tr&z=16&output=embed`;

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
    <path d="M12 21s-7-7.2-7-12a7 7 0 1 1 14 0c0 4.8-7 12-7 12z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
    <path d="M4 6h16v12H4z" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
    <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 7 7L16 14.5l4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
  </svg>
);
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2a10 10 0 0 0-8.66 15.06L2 22l5.12-1.34A10 10 0 1 0 12 2zm0 18.2a8.18 8.18 0 0 1-4.17-1.15l-.3-.18-3.1.74.76-3.02-.2-.31A8.2 8.2 0 1 1 12 20.2z" />
    <path d="M16.4 14.2c-.25-.12-1.46-.72-1.69-.8s-.39-.12-.56.12-.64.8-.79.97-.29.19-.54.06a6.6 6.6 0 0 1-1.95-1.2 7.3 7.3 0 0 1-1.35-1.68c-.14-.25 0-.38.11-.5.11-.11.25-.29.37-.43s.16-.25.25-.42.04-.31-.02-.43-.56-1.35-.77-1.85-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31s-.87.85-.87 2.07.89 2.4 1.01 2.56 1.75 2.67 4.24 3.74c.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18s.21-1.08.15-1.18-.23-.16-.48-.28z" />
  </svg>
);

const cards = [
  {
    title: "Adres",
    body: SITE.address.full,
    href: SITE.address.mapsUrl,
    external: true,
    icon: <IconPin />,
  },
  {
    title: "E-posta Adresi",
    body: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: <IconMail />,
  },
  {
    title: "Sabit Telefon",
    body: SITE.phoneDisplay,
    href: `tel:${SITE.phone}`,
    icon: <IconPhone />,
  },
  {
    title: "WhatsApp",
    body: SITE.whatsappDisplay,
    href: getWhatsAppUrl("Merhaba, DijitalERP hakkında bilgi almak istiyorum."),
    external: true,
    icon: <IconWhatsApp />,
  },
];

const ITSolutionContactForm = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const subject = String(data.get("subject") || "").trim() || "İletişim";
    const message = String(data.get("message") || "").trim();

    try {
      const res = await fetch("/api/support/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });
      const json = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Mesaj gönderilemedi.");
      setSent(true);
      form.reset();
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Mesaj gönderilemedi.");
    }
  };

  return (
    <section className="erp-contact-section">
      <div className="container container-1230">
        <div className="erp-section-heading">
          <h2>
            Bize <span>Ulaşın</span>
          </h2>
        </div>

        <div className="row g-3 g-xl-4 justify-content-center">
          {cards.map((card) => (
            <div key={card.title} className="col-lg-6 col-xl-3 col-sm-6">
              <div className="erp-contact-card">
                <div className="erp-contact-card__icon">{card.icon}</div>
                <div className="erp-contact-card__body">
                  <h3>{card.title}</h3>
                  <p>
                    <Link
                      href={card.href}
                      {...(card.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {card.body}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 flex-lg-row-reverse mt-2 mt-lg-4">
          <div className="col-lg-6">
            <div className="erp-contact-form">
              {sent ? (
                <p className="erp-contact-form__success">
                  Mesajın alındı. En kısa sürede dönüş yapacağız.
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <label className="erp-contact-form__label" htmlFor="contact-name">
                    Ad Soyad
                  </label>
                  <input id="contact-name" name="name" type="text" required />

                  <label className="erp-contact-form__label" htmlFor="contact-email">
                    E-posta
                  </label>
                  <input id="contact-email" name="email" type="email" required />

                  <label className="erp-contact-form__label" htmlFor="contact-phone">
                    Telefon
                  </label>
                  <input id="contact-phone" name="phone" type="tel" placeholder="05xx xxx xx xx" />

                  <label className="erp-contact-form__label" htmlFor="contact-subject">
                    Konu
                  </label>
                  <input id="contact-subject" name="subject" type="text" required />

                  <label className="erp-contact-form__label" htmlFor="contact-message">
                    Mesaj
                  </label>
                  <textarea id="contact-message" name="message" rows={5} required />

                  <button className="erp-contact-form__submit" type="submit">
                    Gönder
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="erp-contact-map">
              <iframe
                title="DijitalERP ofis konumu"
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITSolutionContactForm;
