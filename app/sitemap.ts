import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site-url";

const PUBLIC_PATHS = [
  "",
  "/digital-workspace",
  "/enterprise-intelligence",
  "/deployment",
  "/administration",
  "/adoption",
  "/about",
  "/enquiry",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PUBLIC_PATHS.map((path) => ({
    url: path === "" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
