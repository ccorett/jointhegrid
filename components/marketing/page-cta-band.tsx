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
    <section className={cn("bg-primary-navy py-16 md:py-24", className)}>
      <div className="content-container text-center">
        <h2 className="heading-section text-2xl text-white md:text-3xl lg:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-white/70">
            {description}
          </p>
        )}
        <div className="mt-8">
          <Button href={ctaHref} size="lg">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
