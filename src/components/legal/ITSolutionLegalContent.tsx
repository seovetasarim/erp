"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { LegalPageContent } from '@/data/legalContent';

type ITSolutionLegalContentProps = {
  content: LegalPageContent;
};

const ITSolutionLegalContent = ({ content }: ITSolutionLegalContentProps) => {
  const [activeId, setActiveId] = useState(content.sections[0]?.id ?? '');

  useEffect(() => {
    const sections = content.sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [content.sections]);

  return (
    <div className="it-legal-page-area pb-140" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container container-1230">
        <div className="row">
          <div className="col-lg-8">
            <div className="it-legal-content tp_fade_anim" data-delay=".3">
              <div className="it-legal-content-head">
                <p className="it-legal-updated">Son güncelleme: {content.lastUpdated}</p>
                <p>
                  Bu metin DijitalERP hizmetlerini kullanan ziyaretçi ve müşteriler için
                  hazırlanmıştır. Sorularınız için{' '}
                  <Link href="/iletisim">iletişim</Link> sayfamızı kullanabilirsiniz.
                </p>
              </div>

              {content.sections.map((section) => (
                <section className="it-legal-section" id={section.id} key={section.id}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <aside className="it-sss-sidebar it-legal-sidebar tp_fade_anim" data-delay=".4">
              <span className="it-sss-sidebar-label">İçindekiler</span>
              <nav className="it-sss-sidebar-nav" aria-label="Sayfa içindekiler">
                {content.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`it-sss-sidebar-btn it-legal-sidebar-link${activeId === section.id ? ' is-active' : ''}`}
                    onClick={() => setActiveId(section.id)}
                  >
                    <span className="it-sss-sidebar-btn-text">
                      <strong>{section.title.replace(/^\d+\.\s*/, '')}</strong>
                    </span>
                  </a>
                ))}
              </nav>

              <div className="it-sss-sidebar-note">
                <p>Diğer yasal metinler</p>
                <ul className="it-legal-sidebar-links">
                  {content.slug !== 'hizmet-sartlari' && (
                    <li>
                      <Link href="/hizmet-sartlari">Hizmet Şartları</Link>
                    </li>
                  )}
                  {content.slug !== 'gizlilik-politikasi' && (
                    <li>
                      <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>
                    </li>
                  )}
                  <li>
                    <Link href="/sss">SSS</Link>
                  </li>
                  <li>
                    <Link href="/iletisim">İletişim</Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSolutionLegalContent;
