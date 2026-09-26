import Image from "next/image";
import { BRAND_ASSETS, type GridSymbolVariant } from "@/lib/brand/assets";
import { cn } from "@/lib/utils";

type GridSymbolProps = {
  /** Square display size in px */
  size?: number;
  className?: string;
  variant?: GridSymbolVariant;
};

export function GridSymbol({
  size = 36,
  className,
  variant = "app",
}: GridSymbolProps) {
  const asset =
    variant === "app" ? BRAND_ASSETS.appIcon : BRAND_ASSETS.standaloneSymbol;

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      unoptimized
      aria-hidden={!asset.alt}
      className={cn("shrink-0 object-contain", className)}
      style={{ width: size, height: size }}
    />
  );
}
