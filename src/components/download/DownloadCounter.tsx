'use client';

import { formatDownloadCount } from '@/constants/download';
import { useEffect, useState } from 'react';

type StatsResponse = {
  total: number;
  githubTotal: number;
};

function easeOutCubic(value: number): number {
  return 1 - Math.pow(1 - value, 3);
}

const DownloadCounter = ({ className = '' }: { className?: string }) => {
  const [total, setTotal] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let active = true;

    fetch('/api/downloads/stats')
      .then((response) => response.json())
      .then((data: StatsResponse) => {
        if (active && typeof data.total === 'number') {
          setTotal(data.total);
        }
      })
      .catch(() => {
        if (active) setTotal(null);
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (total === null || total <= 0) return;

    const duration = 1400;
    const start = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayCount(Math.round(total * easeOutCubic(progress)));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setDisplayCount(total);
        setIsAnimating(false);
      }
    };

    setDisplayCount(0);
    setIsAnimating(true);

    const startDelay = window.setTimeout(() => {
      frameId = requestAnimationFrame(tick);
    }, 80);

    return () => {
      window.clearTimeout(startDelay);
      cancelAnimationFrame(frameId);
    };
  }, [total]);

  if (total === null || total <= 0) return null;

  return (
    <div className={`it-hero-download-stat ${className}`.trim()} aria-live="polite">
      <span className="it-hero-download-stat__icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3v12m0 0l4-4m-4 4L8 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <div className="it-hero-download-stat__copy">
        <span
          className={`it-hero-download-stat__count${isAnimating ? ' is-animating' : ''}`}
        >
          {formatDownloadCount(displayCount)}
        </span>
        <span className="it-hero-download-stat__label">
          kişiye <span className="it-hero-download-stat__thanks">teşekkürler</span> — siz de aramıza katılın!
        </span>
      </div>
    </div>
  );
};

export default DownloadCounter;
