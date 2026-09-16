import { cn } from "@/lib/utils";

type ServicePillarProps = {
  number: string;
  title: string;
  description: string;
  className?: string;
};

export function ServicePillar({
  number,
  title,
  description,
  className,
}: ServicePillarProps) {
  return (
    <div className={cn("relative py-8 md:py-0", className)}>
      <div className="mb-4 text-xs font-light uppercase tracking-[0.2em] text-secondary-text">
        {number}
      </div>
      <h3 className="mb-3 text-xl font-semibold uppercase tracking-wide text-primary-navy md:text-2xl">
        {title}
      </h3>
      <p className="text-sm font-light leading-relaxed text-secondary-text md:text-base">
        {description}
      </p>
    </div>
  );
}
