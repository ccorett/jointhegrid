import { Button } from "@/components/ui/button";
import { WHATSAPP_LETS_TALK_URL } from "@/lib/contact";
import { cn } from "@/lib/utils";

type PageCtaBandProps = {
  title?: string;
  description?: string;
  ctaLabel: string;
  ctaHref?: string;
  className?: string;
};

export function PageCtaBand({
  title = "Ready to talk?",
  description,
  ctaLabel,
  ctaHref,
  className,
}: PageCtaBandProps) {
  const href =
    ctaHref ??
    (ctaLabel === "Let's Talk" ? WHATSAPP_LETS_TALK_URL : "/contact");

  return (
    <section className={cn("border-t border-white/10 bg-primary-navy section-y-compact", className)}>
      <div className="content-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="heading-section text-[2rem] text-white sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem]">
            {title}
          </h2>
          {description && (
            <p className="text-lead mt-3 text-white/75">{description}</p>
          )}
        </div>
        <Button href={href} size="lg" className="shrink-0">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
