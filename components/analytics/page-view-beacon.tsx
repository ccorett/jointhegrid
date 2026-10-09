"use client";

import { useEffect, useRef } from "react";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";

type PageViewBeaconProps = {
  event: Extract<AnalyticsEventName, "solution_view" | "service_view">;
  name: string;
};

/** Fires a single page view event when analytics is available. */
export function PageViewBeacon({ event, name }: PageViewBeaconProps) {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    trackEvent(event, { name });
  }, [event, name]);

  return null;
}
