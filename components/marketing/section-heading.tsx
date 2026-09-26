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
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-2 text-[13px] font-bold uppercase tracking-[0.18em] md:text-sm",
            dark ? "text-secondary-blue" : "text-infrastructure-blue"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "heading-section text-[2rem] sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem]",
          dark ? "text-white" : "text-primary-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-lg leading-relaxed md:text-[19px]",
            dark ? "text-white/75" : "text-body-text"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
