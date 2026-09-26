import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  PageHeroVisual,
  type PageHeroVisualKind,
} from "@/components/marketing/page-hero-visual";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
  light?: boolean;
  visual?: PageHeroVisualKind;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  primaryCta,
  secondaryCta,
  dark = false,
  light = false,
  visual,
  className,
}: PageHeroProps) {
  const hasVisual = !!visual;

  return (
    <section
      className={cn(
        "border-b border-border section-y-compact",
        dark ? "bg-primary-navy text-white" : light ? "bg-light-bg" : "bg-white",
        className
      )}
    >
      <div
        className={cn(
          "content-container grid items-center gap-8 lg:gap-12",
          hasVisual && "lg:grid-cols-[1.05fr_0.95fr]"
        )}
      >
        <div className={cn(!hasVisual && "max-w-4xl")}>
          {eyebrow && (
            <p
              className={cn(
                "mb-3 text-[13px] font-bold uppercase tracking-[0.18em] md:text-sm",
                dark ? "text-secondary-blue" : "text-infrastructure-blue"
              )}
            >
              {eyebrow}
            </p>
          )}
          <h1
            className={cn(
              "heading-hero text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.75rem]",
              dark ? "text-white" : "text-primary-navy"
            )}
          >
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-infrastructure-blue">{titleAccent}</span>
              </>
            )}
          </h1>
          {description && (
            <p
              className={cn(
                "mt-4 max-w-2xl text-lg leading-snug md:text-[19px] md:leading-relaxed",
                dark ? "text-white/75" : "text-body-text"
              )}
            >
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary" size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant={dark ? "outline" : "secondary"}
                  size="lg"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
        {hasVisual && (
          <PageHeroVisual kind={visual} className="w-full justify-self-end lg:max-w-none" />
        )}
      </div>
    </section>
  );
}
