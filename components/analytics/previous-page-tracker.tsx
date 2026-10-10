"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { recordPageVisit } from "@/lib/analytics";

/** Remembers the previous marketing page so enquiry events can report where the visitor came from. */
export function PreviousPageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    recordPageVisit(pathname);
  }, [pathname]);

  return null;
}
