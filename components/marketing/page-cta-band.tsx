import { Button } from "@/components/ui/button";
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
  ctaHref = "/contact",
  className,
}: PageCtaBandProps) {
  return (
    <section className={cn("border-t border-white/10 bg-primary-navy section-y-compact", className)}>
      <div className="content-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="heading-section text-2xl text-white md:text-3xl lg:text-[2.25rem]">
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-lg text-white/70 md:text-[19px]">{description}</p>
          )}
        </div>
        <Button href={ctaHref} size="lg" className="shrink-0">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
