/**
 * Analytics bridge: forwards events when gtag or dataLayer is present.
 * No events are emitted when no analytics runtime is installed.
 */

export type AnalyticsEventName =
  | "whatsapp_click"
  | "enquiry_start"
  | "enquiry_submit"
  | "partner_profile_click"
  | "solution_view"
  | "service_view";

export type AnalyticsEventPayload = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

const CURRENT_PAGE_KEY = "grid:current-page";
const PREVIOUS_PAGE_KEY = "grid:previous-page";

function pageSlug(pathname: string): string {
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  return slug === "" ? "homepage" : slug;
}

export function recordPageVisit(pathname: string): void {
  try {
    const current = sessionStorage.getItem(CURRENT_PAGE_KEY);
    if (current === pathname) return;
    if (current !== null) sessionStorage.setItem(PREVIOUS_PAGE_KEY, current);
    sessionStorage.setItem(CURRENT_PAGE_KEY, pathname);
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
  }
}

/** Slug of the same-site page visited before the current one, e.g. "digital-workspace". */
export function previousPageSlug(): string | undefined {
  try {
    const previous = sessionStorage.getItem(PREVIOUS_PAGE_KEY);
    if (previous) return pageSlug(previous);
  } catch {
    // Fall through to the document referrer.
  }
  if (!document.referrer) return undefined;
  try {
    const url = new URL(document.referrer);
    if (url.origin !== window.location.origin) return undefined;
    return pageSlug(url.pathname);
  } catch {
    return undefined;
  }
}

export function trackEvent(
  name: AnalyticsEventName,
  properties?: AnalyticsEventPayload
): void {
  if (typeof window === "undefined") return;

  const payload = { ...properties };

  if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);
    return;
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...payload });
  }
}
