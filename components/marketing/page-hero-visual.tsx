import { Phase1HeroGrid } from "@/components/brand/phase1-hero-grid";
import { InteroperabilityGraphic } from "@/components/brand/interoperability-graphic";
import { GridSymbol } from "@/components/brand/grid-symbol";
import { cn } from "@/lib/utils";

export type PageHeroVisualKind =
  | "hero-grid"
  | "interop"
  | "symbol-light"
  | "symbol-dark";

export function PageHeroVisual({
  kind,
  className,
}: {
  kind: PageHeroVisualKind;
  className?: string;
}) {
  if (kind === "hero-grid") {
    return <Phase1HeroGrid className={cn("max-h-[min(420px,42vh)] w-full", className)} />;
  }
  if (kind === "interop") {
    return (
      <InteroperabilityGraphic
        className={cn("border border-border bg-light-bg p-3 md:p-4", className)}
      />
    );
  }
  if (kind === "symbol-dark") {
    return (
      <div
        className={cn(
          "flex aspect-square max-h-[280px] w-full max-w-[280px] items-center justify-center border border-white/15 bg-white/5",
          className
        )}
      >
        <GridSymbol theme="dark" size={128} />
      </div>
    );
  }
  return (
    <div
      className={cn(
        "flex aspect-square max-h-[280px] w-full max-w-[280px] items-center justify-center border border-border bg-light-bg",
        className
      )}
    >
      <GridSymbol theme="light" size={128} />
    </div>
  );
}
