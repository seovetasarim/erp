"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { BlogPostContent } from '@/data/blog';
import { BLOG_POSTS } from '@/data/blog';
import { BlogRichText } from '@/components/blog/BlogRichText';

type ITSolutionBlogPostContentProps = {
  post: BlogPostContent;
};

const ITSolutionBlogPostContent = ({ post }: ITSolutionBlogPostContentProps) => {
  const [activeId, setActiveId] = useState(post.sections[0]?.id ?? '');
  const otherPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug);

  useEffect(() => {
    const sections = post.sections
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
  }, [post.sections]);

  return (
    <div className="it-legal-page-area pb-140" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container container-1230">
        <div className="row">
          <div className="col-lg-8">
            <div className="it-legal-content it-blog-content tp_fade_anim" data-delay=".3">
              <div className="it-blog-featured-image mb-40">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={960}
                  height={540}
                  style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
                  priority
                />
              </div>

              <div className="it-legal-content-head">
                <p className="it-legal-updated">
                  Yayın: {post.publishedAt} · Güncelleme: {post.updatedAt}
                </p>
                <p>
                  <BlogRichText text={post.excerpt} />
                </p>
              </div>

              {post.sections.map((section) => (
                <section className="it-legal-section" id={section.id} key={section.id}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>
                      <BlogRichText text={paragraph} />
                    </p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>
                          <BlogRichText text={item} />
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <div className="it-blog-cta-box">
                <h3>DijitalERP&apos;yi denemeye hazır mısınız?</h3>
                <p>
                  Ücretsiz sürümü indirmek için{' '}
                  <Link href="/kayit">hesap oluşturun</Link>, paketleri{' '}
                  <Link href="/fiyatlandirma">fiyatlandırma</Link> sayfasından inceleyin veya{' '}
                  <Link href="/iletisim">destek ekibimize</Link> yazın.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <aside className="it-sss-sidebar it-legal-sidebar tp_fade_anim" data-delay=".4">
              <span className="it-sss-sidebar-label">İçindekiler</span>
              <nav className="it-sss-sidebar-nav" aria-label="Makale içindekiler">
                {post.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`it-sss-sidebar-btn it-legal-sidebar-link${activeId === section.id ? ' is-active' : ''}`}
                    onClick={() => setActiveId(section.id)}
                  >
                    <span className="it-sss-sidebar-btn-text">
                      <strong>{section.title}</strong>
                    </span>
                  </a>
                ))}
              </nav>

              <div className="it-sss-sidebar-note">
                <p>Diğer rehberler</p>
                <ul className="it-legal-sidebar-links">
                  {otherPosts.map((item) => (
                    <li key={item.slug}>
                      <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/moduller">Modüller</Link>
                  </li>
                  <li>
                    <Link href="/sss">SSS</Link>
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

export default ITSolutionBlogPostContent;
