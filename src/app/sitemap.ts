import type { MetadataRoute } from "next";
import { SITE } from "@/constants/seo";
import { getAllBlogSlugs } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/ozellikler", priority: 0.9, changeFrequency: "weekly" },
    { path: "/moduller", priority: 0.9, changeFrequency: "weekly" },
    { path: "/fiyatlandirma", priority: 0.85, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/sss", priority: 0.8, changeFrequency: "monthly" },
    { path: "/iletisim", priority: 0.75, changeFrequency: "monthly" },
    { path: "/hizmet-sartlari", priority: 0.35, changeFrequency: "yearly" },
    { path: "/gizlilik-politikasi", priority: 0.35, changeFrequency: "yearly" },
  ];

  return [
    ...routes.map(({ path, priority, changeFrequency }) => ({
      url: path === "/" ? SITE.url : `${SITE.url}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...getAllBlogSlugs().map((slug) => ({
      url: `${SITE.url}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
