import type { MetadataRoute } from "next";

const BASE = "https://jointhegrid.com";

const routes = [
  "",
  "/google-workspace",
  "/gemini-enterprise",
  "/deployment",
  "/administration",
  "/adoption",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
