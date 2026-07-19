"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { BlogPostContent } from '@/data/blog';

const ITSolutionBlogGrid = ({ posts }: { posts: BlogPostContent[] }) => {
  return (
    <div className="it-blog-grid-area pb-120" style={{ backgroundColor: '#FDF7F4' }}>
      <div className="container container-1230">
        <div className="row">
          {posts.map((post) => (
            <div key={post.slug} className="col-xl-4 col-md-6 mb-30 tp_fade_anim">
              <article className="it-blog-card">
                <div className="it-blog-card-thumb fix">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={640}
                      height={360}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Link>
                </div>
                <div className="it-blog-card-content">
                  <div className="it-blog-card-meta">
                    <span className="it-blog-card-cat">{post.category}</span>
                    <span>{post.readMinutes} dk okuma</span>
                  </div>
                  <h2 className="it-blog-card-title">
                    <Link className="tp-line-black" href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="it-blog-card-excerpt">{post.excerpt}</p>
                  <Link className="it-blog-card-link" href={`/blog/${post.slug}`}>
                    Devamını oku
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ITSolutionBlogGrid;
