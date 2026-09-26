import { BrandLogo } from "@/components/brand/brand-logo";

type GridLogoProps = {
  className?: string;
  href?: string;
  reversed?: boolean;
};

/** @deprecated Use `BrandLogo` — kept for existing imports. */
export function GridLogo({ className, href = "/", reversed = false }: GridLogoProps) {
  return (
    <BrandLogo
      variant={reversed ? "reversed" : "primary"}
      className={className}
      href={href}
      height={48}
      priority
    />
  );
}
