import type { MetadataRoute } from "next";
import { SITE_URL, SERVICE_MENU } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Root (homepage) — daily crawl, top priority.
  const root: MetadataRoute.Sitemap[number] = {
    url: SITE_URL,
    lastModified: now,
    changeFrequency: "daily",
    priority: 1.0,
  };

  // Key static pages — weekly crawl.
  const staticPages: MetadataRoute.Sitemap = [
    "/about",
    "/patient-care-tips",
    "/location",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Service category pages — weekly, slightly lower priority.
  const categoryPages: MetadataRoute.Sitemap = SERVICE_MENU.map((cat) => ({
    url: `${SITE_URL}${cat.href}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  // Individual treatment pages — monthly (content rarely changes).
  const treatmentPages: MetadataRoute.Sitemap = SERVICE_MENU.flatMap((cat) =>
    cat.items.map((item) => ({
      url: `${SITE_URL}${item.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  );

  return [root, ...staticPages, ...categoryPages, ...treatmentPages];
}
