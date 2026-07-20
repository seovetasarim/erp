import { post as postStok } from "./post-stok";
import { post as postEfatura } from "./post-efatura";
import { post as postLisans } from "./post-lisans";
import { post as postCari } from "./post-cari";
import { post as postBarkod } from "./post-barkod";
import { post as postKasa } from "./post-kasa";
import { post as postUcretsizErp } from "./post-ucretsiz-erp";
import { post as postWindowsBulut } from "./post-windows-bulut";
import { post as postMuhasebe } from "./post-muhasebe";
import { post as postDepo } from "./post-depo";
import { post as postSatisFatura } from "./post-satis-fatura";
import { post as postNakitAkisi } from "./post-nakit-akisi";

export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type BlogPostContent = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  publishedAt: string;
  updatedAt: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroEyebrow: string;
  heroDescription: string;
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPostContent[] = [
  postUcretsizErp,
  postWindowsBulut,
  postMuhasebe,
  postDepo,
  postSatisFatura,
  postNakitAkisi,
  postStok,
  postEfatura,
  postLisans,
  postCari,
  postBarkod,
  postKasa,
];

export function getBlogPost(slug: string): BlogPostContent | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
