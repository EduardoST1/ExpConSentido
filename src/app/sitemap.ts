import type { MetadataRoute } from "next";
import { events, experiences, routes, stories } from "@/data/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  const staticRoutes = ["", "/cholula", "/cholula/explora", "/cholula/rutas", "/cholula/historias", "/cholula/agenda", "/cholula/planea", "/cholula/transparente", "/reconocimiento", "/reconocimiento/criterios", "/postula"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date("2026-09-21"), changeFrequency: "weekly" as const })),
    ...experiences.map(({ slug }) => ({ url: `${base}/cholula/experiencias/${slug}`, lastModified: new Date("2026-09-21"), changeFrequency: "weekly" as const })),
    ...routes.map(({ slug }) => ({ url: `${base}/cholula/rutas/${slug}`, lastModified: new Date("2026-09-21"), changeFrequency: "monthly" as const })),
    ...stories.map(({ slug }) => ({ url: `${base}/cholula/historias/${slug}`, lastModified: new Date("2026-09-21"), changeFrequency: "monthly" as const })),
    ...events.map(({ slug }) => ({ url: `${base}/cholula/agenda/${slug}`, lastModified: new Date("2026-09-21"), changeFrequency: "weekly" as const })),
  ];
}
