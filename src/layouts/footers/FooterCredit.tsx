"use client";

import { useEffect, useState } from "react";

export function FooterCredit() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setShowLogo((prev) => !prev);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <a
      className={`footer-credit${showLogo ? " is-logo" : ""}`}
      href="https://www.dijitalwebsite.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="dijitalwebsite E-Ticaret Sistemleriyle Hazırlanmıştır"
    >
      <span className="footer-credit__slot">
        <span className="footer-credit__text">
          <span className="footer-credit__brand">dijitalwebsite</span> E-Ticaret
          Sistemleriyle Hazırlanmıştır
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="footer-credit__logo"
          src="/dijitalwebsite-logo-transparent.png?v=3"
          alt="dijitalwebsite"
        />
      </span>
    </a>
  );
}
