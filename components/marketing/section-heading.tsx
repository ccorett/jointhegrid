import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-[11px] font-semibold uppercase tracking-[0.2em]",
            dark ? "text-secondary-blue" : "text-secondary-text"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "heading-section text-3xl md:text-4xl lg:text-[2.65rem]",
          dark ? "text-white" : "text-primary-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-[17px] leading-relaxed md:text-lg",
            dark ? "text-white/70" : "text-secondary-text"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
