"use client";

import { PARTNER_PROFILE_URL } from "@/lib/structured-data";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type PartnerProfileLinkProps = {
  className?: string;
};

export function PartnerProfileLink({ className }: PartnerProfileLinkProps) {
  return (
    <a
      href={PARTNER_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-sm border border-border bg-white px-5 py-2.5 text-base font-semibold text-primary-navy transition-colors hover:bg-light-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-infrastructure-blue focus-visible:ring-offset-2",
        className
      )}
      onClick={() => trackEvent("partner_profile_click", { location: "about" })}
    >
      View Partner Profile
    </a>
  );
}
