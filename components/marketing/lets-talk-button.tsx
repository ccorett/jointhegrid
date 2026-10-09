"use client";

import { Button } from "@/components/ui/button";
import { WHATSAPP_LETS_TALK_URL } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
type LetsTalkButtonProps = {
  location: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
};

export function LetsTalkButton({
  location,
  className,
  size = "md",
  onClick,
}: LetsTalkButtonProps) {
  return (
    <Button
      href={WHATSAPP_LETS_TALK_URL}
      size={size}
      className={cn(className)}
      onClick={() => {
        trackEvent("whatsapp_click", { location });
        onClick?.();
      }}
    >
      Let&apos;s Talk
    </Button>
  );
}
