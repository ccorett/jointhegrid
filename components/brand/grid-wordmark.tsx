import { BrandLogo } from "@/components/brand/brand-logo";
import { cn } from "@/lib/utils";

type GridWordmarkProps = {
  className?: string;
  reversed?: boolean;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
};

/** @deprecated Use `BrandLogo` with official horizontal artwork — HTML wordmarks are not brand-accurate. */
export function GridWordmark({
  className,
  reversed = false,
  size = "md",
}: GridWordmarkProps) {
  const height = size === "sm" ? 32 : size === "lg" ? 52 : 44;
  return (
    <BrandLogo
      variant={reversed ? "reversed" : "primary"}
      href="/"
      height={height}
      className={cn(className)}
    />
  );
}
