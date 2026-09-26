import Image from "next/image";
import {
  gridSymbolAsset,
  gridSymbolThemeForSection,
  type GridSectionBackground,
  type GridSymbolTheme,
} from "@/lib/brand/grid-symbol-assets";
import { cn } from "@/lib/utils";

type GridSymbolProps = {
  /** Square display size in px */
  size?: number;
  className?: string;
  /** Explicit asset treatment */
  theme?: GridSymbolTheme;
  /** Picks light/dark asset from section background when `theme` is omitted */
  section?: GridSectionBackground;
  priority?: boolean;
  /** @deprecated Use `theme="dark"` */
  variant?: "default" | "favicon";
};

export function GridSymbol({
  size = 40,
  className,
  theme,
  section,
  priority = false,
  variant,
}: GridSymbolProps) {
  const resolvedTheme: GridSymbolTheme =
    theme ??
    (section ? gridSymbolThemeForSection(section) : undefined) ??
    (variant === "favicon" ? "dark" : "light");
  const asset = gridSymbolAsset(resolvedTheme);

  return (
    <Image
      src={asset.src}
      alt=""
      width={asset.width}
      height={asset.height}
      priority={priority}
      unoptimized
      aria-hidden
      className={cn("shrink-0 object-contain", className)}
      style={{ width: size, height: size, maxWidth: size, maxHeight: size }}
    />
  );
}
