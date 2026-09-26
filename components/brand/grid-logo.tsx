import Link from "next/link";
import { GridSymbol } from "@/components/brand/grid-symbol";
import { GridWordmark } from "@/components/brand/grid-wordmark";
import { cn } from "@/lib/utils";

type GridLogoProps = {
  className?: string;
  href?: string;
  reversed?: boolean;
  /** On narrow viewports, show only the GRID symbol (light header default). */
  symbolOnlyBelowSm?: boolean;
  /** Symbol size in px — navigation lockup uses 32–40. */
  symbolSize?: number;
};

export function GridLogo({
  className,
  href = "/",
  reversed = false,
  symbolOnlyBelowSm = true,
  symbolSize = 36,
}: GridLogoProps) {
  const section = reversed ? "dark" : "light";

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center gap-2.5 overflow-visible py-1 sm:gap-3",
        className
      )}
    >
      <GridSymbol
        section={section}
        size={symbolSize}
        priority
        className="shrink-0"
      />
      <GridWordmark
        reversed={reversed}
        size="sm"
        className={cn(
          "min-w-0 leading-tight sm:text-lg",
          symbolOnlyBelowSm && "hidden sm:inline-flex"
        )}
      />
    </Link>
  );
}
