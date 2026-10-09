import Image from "next/image";
import { cn } from "@/lib/utils";

/** Official hero artwork intrinsic dimensions (layout stability). */
export const HERO_ECOSYSTEM_WIDTH = 903;
export const HERO_ECOSYSTEM_HEIGHT = 845;

const HERO_IMAGE = "/brand/hero-connected-ecosystem.webp";

type Phase1HeroGridProps = {
  className?: string;
  /** Set on the homepage LCP candidate only. */
  priority?: boolean;
};

export function Phase1HeroGrid({
  className,
  priority = false,
}: Phase1HeroGridProps) {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full min-h-0 max-w-[620px] shrink-0",
        className
      )}
      style={{
        aspectRatio: `${HERO_ECOSYSTEM_WIDTH} / ${HERO_ECOSYSTEM_HEIGHT}`,
      }}
    >
      <Image
        src={HERO_IMAGE}
        alt="Illustration of a connected digital workplace linking people, applications, workflows, information and security."
        width={HERO_ECOSYSTEM_WIDTH}
        height={HERO_ECOSYSTEM_HEIGHT}
        priority={priority}
        sizes="(max-width: 640px) min(100vw, 620px), (max-width: 1024px) 55vw, 620px"
        className="hero-grid-image h-full w-full select-none object-contain"
      />
    </figure>
  );
}
