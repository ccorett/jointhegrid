import { cn } from "@/lib/utils";

type SectionEyebrowProps = {
  index: string;
  label: string;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionEyebrow({
  index,
  label,
  className,
  tone = "light",
}: SectionEyebrowProps) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.2em]",
        tone === "dark" ? "text-secondary-blue" : "text-infrastructure-blue",
        className
      )}
    >
      <span className={tone === "dark" ? "text-white/45" : "text-secondary-text"}>
        {index}
      </span>
      <span className="mx-2 opacity-40">/</span>
      {label}
    </p>
  );
}
