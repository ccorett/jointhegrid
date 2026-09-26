import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: string;
  className?: string;
  tone?: "light" | "dark";
};

/** Small uppercase section label — no decorative numbering. */
export function SectionLabel({
  children,
  className,
  tone = "light",
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-sm font-bold uppercase tracking-[0.16em] md:text-[15px]",
        tone === "dark" ? "text-secondary-blue" : "text-infrastructure-blue",
        className
      )}
    >
      {children}
    </p>
  );
}
