"use client";

import { cn } from "@/lib/utils";

type MarketRegion = {
  id: string;
  title: string[];
  bg: string;
  text: string;
  hint: string;
  /** Desktop grid area */
  area: string;
  titleClass: string;
  scaleOrigin: string;
};

const MARKETS: MarketRegion[] = [
  {
    id: "government",
    title: ["Government", "& Public Sector"],
    bg: "#0B1220",
    text: "#FFFFFF",
    hint: "Digital workplace at organizational scale.",
    area: "government",
    titleClass: "text-[1.75rem] leading-[1.08] sm:text-[1.85rem] md:text-[2.15rem] lg:text-[2.35rem]",
    scaleOrigin: "bottom left",
  },
  {
    id: "enterprise",
    title: ["Enterprise"],
    bg: "#2563EB",
    text: "#FFFFFF",
    hint: "Connected work across teams and operations.",
    area: "enterprise",
    titleClass: "text-[1.5rem] leading-[1.1] md:text-[1.85rem] lg:text-[2rem]",
    scaleOrigin: "bottom left",
  },
  {
    id: "smes",
    title: ["SMEs"],
    bg: "#F8FAFC",
    text: "#0B1220",
    hint: "Modern tools without unnecessary complexity.",
    area: "smes",
    titleClass: "text-[1.35rem] leading-[1.1] md:text-[1.55rem] lg:text-[1.7rem]",
    scaleOrigin: "bottom left",
  },
  {
    id: "education",
    title: ["Education"],
    bg: "#60A5FA",
    text: "#0B1220",
    hint: "Connected learning and administration.",
    area: "education",
    titleClass: "text-[1.2rem] leading-[1.12] md:text-[1.35rem] lg:text-[1.45rem]",
    scaleOrigin: "bottom left",
  },
];

/** Mobile stack heights — relative emphasis 35 : 30 : 22 : 13 */
const MOBILE_MIN_H: Record<string, string> = {
  government: "min-h-[220px] sm:min-h-[240px]",
  enterprise: "min-h-[188px] sm:min-h-[200px]",
  smes: "min-h-[138px] sm:min-h-[148px]",
  education: "min-h-[96px] sm:min-h-[104px]",
};

function MarketMapGeometry() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* Module bridging Government ↔ Enterprise */}
      <rect x="33.2" y="18" width="4.2" height="4.2" fill="#2563EB" />
      <rect x="37.8" y="18" width="4.2" height="4.2" fill="#60A5FA" />
      <rect x="33.2" y="22.8" width="4.2" height="4.2" fill="#2563EB" opacity="0.85" />
      <path
        d="M35.3 20.1h2.5M35.3 24.9v2.2"
        stroke="#60A5FA"
        strokeWidth="0.45"
        vectorEffect="non-scaling-stroke"
      />

      {/* Structure crossing Enterprise ↓ SMEs */}
      <rect x="58" y="44.5" width="3.6" height="3.6" fill="#FFFFFF" opacity="0.35" />
      <rect x="58" y="48.5" width="3.6" height="3.6" fill="#60A5FA" opacity="0.55" />
      <path d="M59.8 46.3v4.2" stroke="#FFFFFF" strokeWidth="0.35" opacity="0.5" />

      {/* SMEs ↔ Education join */}
      <rect x="73.5" y="72" width="3.4" height="3.4" fill="#2563EB" />
      <rect x="77.3" y="72" width="3.4" height="3.4" fill="#0B1220" opacity="0.55" />
      <path d="M75.2 73.7h4.2" stroke="#2563EB" strokeWidth="0.4" />

      {/* Lower-left accent on Government */}
      <rect x="8" y="78" width="3.8" height="3.8" fill="#2563EB" opacity="0.7" />
      <rect x="12.2" y="82.2" width="3.8" height="3.8" fill="#60A5FA" opacity="0.65" />
    </svg>
  );
}

function RegionContent({ market }: { market: MarketRegion }) {
  return (
    <div className="relative flex h-full min-h-[inherit] flex-col items-center justify-center p-6 text-center md:p-8 lg:p-9">
      <h3
        className={cn("font-display font-semibold tracking-[-0.02em]", market.titleClass)}
        style={{ color: market.text }}
      >
        {market.title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h3>
      <p
        className={cn(
          "mt-0 max-h-0 max-w-[18rem] overflow-hidden text-[13px] leading-snug opacity-0",
          "transition-all duration-[350ms] ease-out",
          "md:group-hover:mt-3 md:group-hover:max-h-16 md:group-hover:opacity-75"
        )}
        style={{ color: market.text }}
      >
        {market.hint}
      </p>
    </div>
  );
}

export function AudienceSectorsGrid({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const frame = onDark
    ? "border-white/15 bg-white/10"
    : "border-border bg-border";

  return (
    <div className={className}>
      {/* Desktop / tablet weighted mosaic */}
      <div
        className={cn("relative hidden overflow-hidden border md:block", frame)}
        role="list"
        aria-label="Markets we serve"
      >
        <div
          className={cn(
            "relative grid min-h-[420px] w-full gap-px lg:min-h-[460px]",
            onDark ? "bg-white/10" : "bg-border"
          )}
          style={{
            gridTemplateColumns: "35fr 41fr 24fr",
            gridTemplateRows: "46.2fr 53.8fr",
            gridTemplateAreas: `
              "government enterprise enterprise"
              "government smes education"
            `,
          }}
        >
          <MarketMapGeometry />

          {MARKETS.map((market) => (
            <article
              key={market.id}
              role="listitem"
              className={cn(
                "group relative overflow-hidden transition-transform duration-[350ms] ease-out",
                "md:hover:z-10 md:hover:scale-[1.025] motion-reduce:md:hover:scale-100"
              )}
              style={{
                gridArea: market.area,
                backgroundColor: market.bg,
                color: market.text,
                transformOrigin: market.scaleOrigin,
              }}
            >
              <RegionContent market={market} />
            </article>
          ))}
        </div>
      </div>

      {/* Mobile — vertical emphasis stack */}
      <div
        className={cn("flex flex-col gap-px border md:hidden", frame)}
        role="list"
        aria-label="Markets we serve"
      >
        {MARKETS.map((market) => (
          <article
            key={market.id}
            role="listitem"
            className={cn("relative overflow-hidden", MOBILE_MIN_H[market.id])}
            style={{ backgroundColor: market.bg, color: market.text }}
          >
            <RegionContent market={market} />
          </article>
        ))}
      </div>
    </div>
  );
}
