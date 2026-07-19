"use client";

import { useEffect, useRef, useState } from "react";

type HighlightItem = {
  id: string;
  value: string;
  suffix?: string;
  label: string;
  desc: string;
  icon: string;
  featured?: boolean;
  animateValue?: number;
};

const highlights: HighlightItem[] = [
  {
    id: "free",
    value: "0",
    suffix: "₺",
    label: "Başlangıç ücreti",
    desc: "Ücretsiz sürümle hemen başlayın",
    icon: "fa-solid fa-gift",
    featured: true,
  },
  {
    id: "monthly",
    value: "1.990",
    suffix: "₺",
    label: "Aylık kiralama",
    desc: "Taahhütsüz · istediğiniz zaman iptal",
    icon: "fa-solid fa-calendar-days",
    animateValue: 1990,
  },
  {
    id: "options",
    value: "2",
    label: "Ödeme seçeneği",
    desc: "Tek seferlik veya aylık kiralama",
    icon: "fa-solid fa-sliders",
  },
  {
    id: "offline",
    value: "Offline",
    label: "Sunucu gerekmez",
    desc: "Veriler bilgisayarınızda kalır",
    icon: "fa-solid fa-wifi-slash",
  },
  {
    id: "flex",
    value: "Esnek",
    label: "Taahhütsüz aylık",
    desc: "Bütçenize göre ödeme modeli seçin",
    icon: "fa-solid fa-arrows-rotate",
  },
];

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, target]);

  return value;
}

function formatPrice(value: number) {
  return new Intl.NumberFormat("tr-TR").format(value);
}

const PricingHeroHighlights = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const monthlyCount = useCountUp(1990, inView);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container container-1230">
      <div ref={sectionRef} className="it-pricing-highlights">
        <div className="it-pricing-highlights-panel">
          {highlights.map((item) => {
            const displayValue =
              item.animateValue !== undefined
                ? formatPrice(monthlyCount)
                : item.value;

            return (
              <article
                key={item.id}
                className={`it-pricing-highlight${item.featured ? " is-featured" : ""}`}
              >
                <span className="it-pricing-highlight-icon" aria-hidden="true">
                  <i className={item.icon} />
                </span>

                <div className="it-pricing-highlight-copy">
                  <div className="it-pricing-highlight-value">
                    <strong>{displayValue}</strong>
                    {item.suffix && <span>{item.suffix}</span>}
                  </div>
                  <h3 className="it-pricing-highlight-label">{item.label}</h3>
                  <p className="it-pricing-highlight-desc">{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingHeroHighlights;
