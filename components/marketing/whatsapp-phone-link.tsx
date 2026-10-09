"use client";

import { WHATSAPP_URL } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type WhatsAppPhoneLinkProps = {
  location: string;
  className?: string;
  children: ReactNode;
};

export function WhatsAppPhoneLink({
  location,
  className,
  children,
}: WhatsAppPhoneLinkProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackEvent("whatsapp_click", { location })}
    >
      {children}
    </a>
  );
}
