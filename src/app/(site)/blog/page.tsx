import ITSolutionBlogMain from '@/pages/homes/it-solution/ITSolutionBlogMain';
import JsonLd from '@/components/seo/JsonLd';
import { BLOG_POSTS } from '@/data/blog';
import { breadcrumbJsonLd, buildPageMetadata, SITE } from '@/constants/seo';

export const metadata = buildPageMetadata({
  title: 'Blog: Offline ERP, Stok Takibi ve E-Fatura Rehberleri',
  description:
    'DijitalERP blog: KOBİ\'ler için offline stok takip, Windows ERP kurulumu, e-fatura entegrasyonu ve lisans güvenliği hakkında kapsamlı Türkçe rehberler.',
  path: '/blog',
  keywords: [
    'ERP blog',
    'stok takip rehberi',
    'offline ERP',
    'e-fatura ERP',
    'Windows ERP kurulum',
    'DijitalERP',
  ],
});

export default function BlogPage() {
  const blogListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'DijitalERP Blog',
    url: `${SITE.url}/blog`,
    description:
      'Offline Windows ERP, stok yönetimi, e-fatura ve lisans güvenliği rehberleri.',
    blogPost: BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${SITE.url}/blog/${post.slug}`,
      datePublished: '2026-07-17',
      image: `${SITE.url}${post.image}`,
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          blogListJsonLd,
          breadcrumbJsonLd([
            { name: 'Ana Sayfa', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
        ]}
      />
      <ITSolutionBlogMain />
    </>
  );
}
