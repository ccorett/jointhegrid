/** Canonical marketing site origin (non-www). */
export const SITE_ORIGIN = "https://jointhegrid.net";

export function absoluteUrl(path: string): string {
  if (path === "" || path === "/") {
    return `${SITE_ORIGIN}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}
