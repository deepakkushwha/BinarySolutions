import type { MetadataRoute } from "next";
import { blogPosts, services, SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/blog", priority: 0.8 },
    { path: "/careers", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
  ].map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: r.priority,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
