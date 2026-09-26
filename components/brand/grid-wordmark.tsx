import { cn } from "@/lib/utils";

type GridWordmarkProps = {
  className?: string;
  reversed?: boolean;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
};

export function GridWordmark({
  className,
  reversed = false,
  showTagline = false,
  size = "md",
}: GridWordmarkProps) {
  const sizeClasses = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <span className={cn("inline-flex flex-col", className)}>
      <span
        className={cn(
          sizeClasses[size],
          reversed ? "text-white" : "text-primary-navy"
        )}
      >
        <span className="font-extralight">#jointhe</span>
        <span className="font-extrabold tracking-tight">GRID</span>
      </span>
      {showTagline && (
        <span
          className={cn(
            "mt-0.5 text-[10px] font-light uppercase tracking-[0.15em]",
            reversed ? "text-white/80" : "text-secondary-text"
          )}
        >
          People | Apps | Information | Together
        </span>
      )}
    </span>
  );
}
