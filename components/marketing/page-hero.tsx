import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
  light?: boolean;
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
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-border py-16 md:py-24 lg:py-28",
        dark ? "bg-primary-navy text-white" : light ? "bg-light-bg" : "bg-white",
        className
      )}
    >
      <div className="content-container max-w-3xl">
        {eyebrow && (
          <p
            className={cn(
              "mb-4 text-[11px] font-semibold uppercase tracking-[0.2em]",
              dark ? "text-secondary-blue" : "text-secondary-text"
            )}
          >
            {eyebrow}
          </p>
        )}
        <h1 className="heading-hero text-4xl md:text-5xl lg:text-6xl">
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
              "mt-6 max-w-2xl text-[17px] leading-relaxed md:text-lg",
              dark ? "text-white/70" : "text-secondary-text"
            )}
          >
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-3">
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
    </section>
  );
}
