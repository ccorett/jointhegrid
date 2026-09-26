"use client";

import { cn } from "@/lib/utils";

type SectorCell = {
  id: string;
  title: string;
  bg: string;
  text: string;
  accent: "government" | "enterprise" | "smes" | "education";
};

const SECTORS: SectorCell[] = [
  {
    id: "government",
    title: "Government & Public Sector",
    bg: "#0B1220",
    text: "#FFFFFF",
    accent: "government",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    bg: "#2563EB",
    text: "#FFFFFF",
    accent: "enterprise",
  },
  {
    id: "smes",
    title: "SMEs",
    bg: "#F8FAFC",
    text: "#0B1220",
    accent: "smes",
  },
  {
    id: "education",
    title: "Education",
    bg: "#60A5FA",
    text: "#0B1220",
    accent: "education",
  },
];

const HOVER_MS = "duration-300";

function SectorAccent({ variant }: { variant: SectorCell["accent"] }) {
  const base =
    "pointer-events-none absolute transition-transform transition-opacity ease-out " +
    HOVER_MS;

  if (variant === "government") {
    return (
      <svg
        viewBox="0 0 88 88"
        aria-hidden
        className={cn(
          base,
          "top-0 right-0 h-[5.5rem] w-[5.5rem] opacity-[0.55] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-80"
        )}
      >
        <rect x="48" y="12" width="14" height="14" fill="#2563EB" />
        <rect x="66" y="12" width="14" height="14" fill="#60A5FA" />
        <rect x="48" y="30" width="14" height="14" fill="#2563EB" />
        <rect x="66" y="30" width="14" height="14" fill="#2563EB" />
        <path
          d="M62 19h4M48 37h14"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="square"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }

  if (variant === "enterprise") {
    return (
      <svg
        viewBox="0 0 96 72"
        aria-hidden
        className={cn(
          base,
          "top-0 right-0 h-16 w-20 opacity-[0.22] group-hover:translate-x-1 group-hover:opacity-35"
        )}
      >
        <rect x="52" y="8" width="12" height="12" fill="#FFFFFF" fillOpacity="0.9" />
        <rect x="68" y="8" width="12" height="12" fill="#60A5FA" />
        <rect x="52" y="24" width="12" height="12" fill="#60A5FA" fillOpacity="0.85" />
        <rect x="68" y="24" width="12" height="12" fill="#FFFFFF" fillOpacity="0.75" />
        <path d="M64 14h4M64 30h4" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.5" />
      </svg>
    );
  }

  if (variant === "smes") {
    return (
      <svg
        viewBox="0 0 72 72"
        aria-hidden
        className={cn(
          base,
          "bottom-0 right-0 h-16 w-16 opacity-70 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:opacity-95"
        )}
      >
        <rect x="28" y="36" width="12" height="12" fill="#2563EB" />
        <rect x="44" y="36" width="12" height="12" fill="#60A5FA" />
        <rect x="28" y="52" width="12" height="12" fill="#2563EB" />
        <path d="M40 42v4M44 48h12" stroke="#2563EB" strokeWidth="2" strokeLinecap="square" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 80 80"
      aria-hidden
      className={cn(
        base,
        "top-0 right-0 h-[4.5rem] w-[4.5rem] opacity-[0.35] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-55"
      )}
    >
      <rect x="44" y="16" width="12" height="12" fill="#0B1220" />
      <rect x="60" y="16" width="12" height="12" fill="#0B1220" fillOpacity="0.75" />
      <rect x="44" y="32" width="12" height="12" fill="#0B1220" fillOpacity="0.85" />
      <path d="M56 22h4M56 38h4" stroke="#0B1220" strokeWidth="1.5" strokeOpacity="0.6" />
    </svg>
  );
}

export function AudienceSectorsGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 border border-border sm:grid-cols-2",
        className
      )}
      role="list"
      aria-label="Organizations we work with"
    >
      {SECTORS.map((sector, index) => {
        const isLeftCol = index % 2 === 0;

        return (
          <article
            key={sector.id}
            role="listitem"
            className={cn(
              "group relative min-h-[148px] overflow-hidden border-border sm:min-h-[200px] lg:min-h-[240px]",
              index < 3 && "border-b border-border",
              (index === 2 || index === 3) && "sm:border-b-0",
              isLeftCol && "sm:border-r sm:border-border"
            )}
            style={{ backgroundColor: sector.bg, color: sector.text }}
          >
            <div
              className={cn(
                "absolute inset-0 opacity-0 transition-opacity ease-out group-hover:opacity-100",
                HOVER_MS,
                sector.id === "government" && "bg-[#111827]",
                sector.id === "enterprise" && "bg-[#1D4ED8]",
                sector.id === "smes" && "bg-[#F1F5F9]",
                sector.id === "education" && "bg-[#3B82F6]"
              )}
              aria-hidden
            />

            <SectorAccent variant={sector.accent} />

            <div className="relative flex h-full min-h-[inherit] flex-col justify-end p-7 md:p-9 lg:p-10">
              <h3
                className={cn(
                  "font-display max-w-[16rem] text-[1.35rem] font-semibold leading-[1.15] tracking-[-0.02em] sm:max-w-[14rem] sm:text-2xl md:max-w-[18rem] md:text-[1.65rem] lg:text-[1.85rem]",
                  sector.id === "government" && "sm:max-w-[20rem] lg:max-w-[22rem]"
                )}
              >
                {sector.title}
              </h3>
            </div>
          </article>
        );
      })}
    </div>
  );
}
