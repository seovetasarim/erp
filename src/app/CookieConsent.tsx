'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

export const COOKIE_CONSENT_KEY = 'dijitalerp_cookie_consent';
export const COOKIE_CONSENT_RESET_EVENT = 'cookie-consent-reset';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) setVisible(true);
    const handleReset = () => {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      setVisible(true);
    };
    window.addEventListener(COOKIE_CONSENT_RESET_EVENT, handleReset);
    return () => window.removeEventListener(COOKIE_CONSENT_RESET_EVENT, handleReset);
  }, []);

  const handleChoice = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-label="Çerez tercihi" aria-live="polite">
      <div className="cookie-consent-inner">
        <div className="cookie-consent-content">
          <Cookie size={22} className="cookie-consent-icon" aria-hidden />
          <p className="cookie-consent-text">
            Deneyiminizi iyileştirmek için çerezler kullanıyoruz.{' '}
            <Link href="/cerez-politikasi" className="cookie-consent-link">
              Çerez Politikamızı
            </Link>{' '}
            inceleyebilirsiniz.
          </p>
        </div>
        <div className="cookie-consent-actions">
          <button
            type="button"
            onClick={() => handleChoice('rejected')}
            className="cookie-consent-btn cookie-consent-btn-reject"
            aria-label="Çerezleri reddet"
          >
            Reddet
          </button>
          <button
            type="button"
            onClick={() => handleChoice('accepted')}
            className="cookie-consent-btn cookie-consent-btn-accept"
            aria-label="Çerezleri kabul et"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
