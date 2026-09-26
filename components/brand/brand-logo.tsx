import Image from "next/image";
import Link from "next/link";
import { BRAND_ASSETS, type BrandLogoVariant } from "@/lib/brand/assets";
import { cn } from "@/lib/utils";

const LOGO_BY_VARIANT = {
  primary: BRAND_ASSETS.primaryHorizontal,
  reversed: BRAND_ASSETS.reversedHorizontal,
  monochrome: BRAND_ASSETS.monochrome,
} as const;

type BrandLogoProps = {
  variant?: BrandLogoVariant;
  className?: string;
  href?: string;
  /** Display height in px (width follows aspect ratio) */
  height?: number;
  priority?: boolean;
};

export function BrandLogo({
  variant = "primary",
  className,
  href = "/",
  height = 48,
  priority = false,
}: BrandLogoProps) {
  const asset = LOGO_BY_VARIANT[variant];
  const width = Math.round((asset.width / asset.height) * height);

  const image = (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      unoptimized
      priority={priority}
      sizes={`${width}px`}
      className={cn("h-auto w-auto max-w-none object-contain", className)}
      style={{ height, width: "auto", maxHeight: height }}
    />
  );

  if (!href) {
    return <span className="inline-flex shrink-0 items-center py-0.5">{image}</span>;
  }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center overflow-visible py-1 pr-1",
        className
      )}
    >
      {image}
    </Link>
  );
}
