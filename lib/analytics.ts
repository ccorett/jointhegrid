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
