import { WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/contact";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  className?: string;
  variant?: "primary" | "outline";
  showLabel?: boolean;
};

export function WhatsAppButton({
  className,
  variant = "outline",
  showLabel = true,
}: WhatsAppButtonProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-infrastructure-blue focus-visible:ring-offset-2",
        variant === "primary"
          ? "border border-white/30 bg-white/10 text-white hover:bg-white/15"
          : "border border-border bg-white text-primary-navy hover:bg-light-bg",
        className
      )}
    >
      {showLabel ? "Chat on WhatsApp" : PHONE_DISPLAY}
    </a>
  );
}
