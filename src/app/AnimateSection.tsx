'use client';

import { useEffect, useRef, useState } from 'react';

type SectionType = 'features' | 'pricing' | 'faq' | 'footer' | 'seo' | 'demo';

export default function AnimateSection({
  children,
  sectionType,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  sectionType: SectionType;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let showTimeout: ReturnType<typeof setTimeout> | null = null;
    const show = () => {
      showTimeout = setTimeout(() => setVisible(true), delay);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) show();
      },
      { threshold: 0.01, rootMargin: '100px 0px 100px 0px' }
    );

    obs.observe(el);

    // Fallback 1: ekranda veya yakınsa 500ms sonra göster
    const fallback1 = setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 300) setVisible(true);
    }, 500);

    // Fallback 2: 1.5s sonra mutlaka göster (navigasyon/observer hatası için)
    const fallback2 = setTimeout(() => setVisible(true), 1500);

    return () => {
      obs.disconnect();
      if (showTimeout) clearTimeout(showTimeout);
      clearTimeout(fallback1);
      clearTimeout(fallback2);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`animate-section anim-${sectionType} ${visible ? 'animate-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
