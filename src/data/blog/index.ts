import { post as postStok } from "./post-stok";
import { post as postEfatura } from "./post-efatura";
import { post as postLisans } from "./post-lisans";
import { post as postCari } from "./post-cari";
import { post as postBarkod } from "./post-barkod";
import { post as postKasa } from "./post-kasa";

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
