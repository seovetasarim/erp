"use client";

import { useEffect, useRef, useState } from "react";

type HighlightItem = {
  id: string;
  value: string;
  suffix?: string;
  label: string;
  desc: string;
  icon: string;
  accent?: "lime" | "white" | "mint";
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
    accent: "lime",
  },
  {
    id: "monthly",
    value: "1.990",
    suffix: "₺",
    label: "Aylık kiralama",
    desc: "Taahhütsüz · istediğiniz zaman iptal",
    icon: "fa-solid fa-calendar-days",
    accent: "mint",
    animateValue: 1990,
  },
  {
    id: "options",
    value: "2",
    label: "Ödeme seçeneği",
    desc: "Tek seferlik veya aylık kiralama",
    icon: "fa-solid fa-sliders",
    accent: "white",
  },
  {
    id: "offline",
    value: "Offline",
    label: "Sunucu gerekmez",
    desc: "Veriler bilgisayarınızda kalır",
    icon: "fa-solid fa-wifi-slash",
    accent: "white",
  },
  {
    id: "flex",
    value: "Esnek",
    label: "Taahhütsüz aylık",
    desc: "Bütçenize göre ödeme modeli seçin",
    icon: "fa-solid fa-arrows-rotate",
    accent: "mint",
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
  const [inView, setInView] = useState(false);
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
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container container-1230">
      <div
        ref={sectionRef}
        className={`it-pricing-bento${inView ? " is-visible" : ""}`}
      >
        <div className="it-pricing-bento-glow" aria-hidden="true" />

        {highlights.map((item, index) => {
          const displayValue =
            item.animateValue !== undefined
              ? formatPrice(monthlyCount)
              : item.value;

          return (
            <article
              key={item.id}
              className={`it-pricing-bento-card it-pricing-bento-card--${item.accent ?? "white"}`}
              style={{ "--bento-delay": `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="it-pricing-bento-card-top">
                <span className="it-pricing-bento-icon">
                  <i className={item.icon} aria-hidden="true" />
                </span>
                <span className="it-pricing-bento-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="it-pricing-bento-value">
                <strong>{displayValue}</strong>
                {item.suffix && <em>{item.suffix}</em>}
              </div>

              <p className="it-pricing-bento-label">{item.label}</p>
              <p className="it-pricing-bento-desc">{item.desc}</p>

              <span className="it-pricing-bento-shine" aria-hidden="true" />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default PricingHeroHighlights;
