'use client';

import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { DESKTOP_ARCHIVE_FILENAME, DESKTOP_ARCHIVE_HREF } from '../../../download';

export type SolutionCategory = {
  icon: LucideIcon;
  label: string;
  title: string;
  desc: string;
  items: string[];
};

export type SolutionFeaturesProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  categories: SolutionCategory[];
  tabsAriaLabel?: string;
};

export default function SolutionFeatures({
  eyebrow = 'Modüller',
  title,
  subtitle,
  categories,
  tabsAriaLabel = 'Modül kategorileri',
}: SolutionFeaturesProps) {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section id="ozellikler" className="ft-section">
      <div className="ft-inner">
        <div className="ft-header">
          <p className="ft-eyebrow">{eyebrow}</p>
          <h2 className="ft-title">{title}</h2>
          <p className="ft-subtitle">
            Önce{' '}
            <a href={DESKTOP_ARCHIVE_HREF} download={DESKTOP_ARCHIVE_FILENAME} className="ft-subtitle-link">
              ücretsiz Windows sürümünü indirin
            </a>
            ; {subtitle}
          </p>
        </div>

        <div className="ft-layout">
          <nav className="ft-tabs" aria-label={tabsAriaLabel}>
            {categories.map((c, i) => (
              <button
                key={c.label}
                type="button"
                onClick={() => setActive(i)}
                className={`ft-tab${active === i ? ' ft-tab-active' : ''}`}
                aria-pressed={active === i}
              >
                <span className="ft-tab-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="ft-tab-label">{c.label}</span>
              </button>
            ))}
          </nav>

          <div className="ft-panel" key={active}>
            <div className="ft-panel-head">
              <div className="ft-panel-head-main">
                <p className="ft-panel-eyebrow">{cat.label}</p>
                <h3 className="ft-panel-title">{cat.title}</h3>
                <p className="ft-panel-desc">{cat.desc}</p>
              </div>
              <div className="ft-panel-head-icon" aria-hidden="true">
                <cat.icon size={22} strokeWidth={1.75} />
              </div>
            </div>

            <div className="ft-panel-body">
              <p className="ft-panel-list-title">Modül kapsamı</p>
              <ul className="ft-panel-list">
                {cat.items.map((item) => (
                  <li key={item} className="ft-panel-item">
                    <span className="ft-item-marker" aria-hidden="true" />
                    <span className="ft-item-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
