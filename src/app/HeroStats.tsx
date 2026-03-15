'use client';

import { useEffect, useState } from 'react';

function useCountUp(end: number, duration: number, decimals = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const startTime = Date.now();
    const step = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const value = end * easeOut;
      setCount(decimals ? Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals) : Math.round(value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, decimals]);
  return count;
}

export default function HeroStats() {
  const count500 = useCountUp(500, 1800, 0);
  const count99 = useCountUp(99.9, 2000, 1);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="hero-stats">
      <div className="hero-stat">
        <span className="hero-stat-num">{mounted ? `${count500}+` : '0+'}</span>
        <span className="hero-stat-label">Aktif Firma</span>
      </div>
      <div className="hero-stat-divider" />
      <div className="hero-stat">
        <span className="hero-stat-num">{mounted ? `%${count99}` : '%0'}</span>
        <span className="hero-stat-label">Uptime</span>
      </div>
      <div className="hero-stat-divider" />
      <div className="hero-stat">
        <span className="hero-stat-num">7/24</span>
        <span className="hero-stat-label">Destek</span>
      </div>
    </div>
  );
}
