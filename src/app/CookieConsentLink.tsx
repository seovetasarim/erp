'use client';

import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_RESET_EVENT } from './CookieConsent';

export default function CookieConsentLink({ children, className }: { children: React.ReactNode; className?: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_RESET_EVENT));
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className} style={{ background: 'none', border: 'none', font: 'inherit', cursor: 'pointer', padding: 0 }}>
      {children}
    </button>
  );
}
