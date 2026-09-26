"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const FONT = "Inter, system-ui, sans-serif";

type ModuleDef = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  stroke?: string;
  label?: string;
  labelFill?: string;
  order: number;
  /** Pre-alignment offset for integration animation */
  dx?: number;
  dy?: number;
};

const DESKTOP_MODULES: ModuleDef[] = [
  { id: "people", x: 28, y: 32, w: 108, h: 54, fill: "#FFFFFF", stroke: "#E2E8F0", label: "PEOPLE", labelFill: "#334155", order: 0, dx: -6 },
  { id: "workspace", x: 136, y: 32, w: 172, h: 54, fill: "#2563EB", label: "WORKSPACE", labelFill: "#FFFFFF", order: 1, dx: 0 },
  { id: "accent-tr", x: 308, y: 32, w: 54, h: 54, fill: "#60A5FA", order: 2, dx: 6 },
  { id: "apps", x: 28, y: 86, w: 108, h: 54, fill: "#60A5FA", label: "APPS", labelFill: "#0B1220", order: 3, dy: -5 },
  { id: "core", x: 136, y: 86, w: 172, h: 172, fill: "#0B1220", order: 4 },
  { id: "gemini", x: 308, y: 86, w: 108, h: 54, fill: "#2563EB", label: "GEMINI", labelFill: "#FFFFFF", order: 5, dx: 5 },
  { id: "accent-bl", x: 28, y: 140, w: 54, h: 54, fill: "#FFFFFF", stroke: "#CBD5E1", order: 6 },
  { id: "accent-br", x: 362, y: 140, w: 54, h: 54, fill: "#2563EB", order: 7, dx: 4 },
  { id: "bridge", x: 82, y: 258, w: 54, h: 12, fill: "#2563EB", order: 8, dy: 4 },
  { id: "information", x: 72, y: 278, w: 300, h: 54, fill: "#FFFFFF", stroke: "#E2E8F0", label: "INFORMATION", labelFill: "#334155", order: 9, dy: 6 },
];

export function Phase1HeroGrid({ className }: { className?: string }) {
  const [phase, setPhase] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  useEffect(() => {
    if (reduced) {
      setPhase(6);
      return;
    }
    const delays = [120, 320, 520, 720, 920, 1120];
    const targets = [1, 2, 3, 4, 5, 6];
    const timers = targets.map((p, i) => setTimeout(() => setPhase(p), delays[i]));
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  const showModule = (order: number) => {
    if (order <= 2) return phase >= 1;
    if (order <= 5) return phase >= 3;
    return phase >= 4;
  };

  const aligned = phase >= 2;
  const connectorsVisible = phase >= 5;
  const labelsVisible = phase >= 6;

  const nudge = (mod: ModuleDef) => {
    if (aligned || reduced) return { x: 0, y: 0 };
    return { x: mod.dx ?? 0, y: mod.dy ?? 0 };
  };

  return (
    <div
      className={cn(
        "relative mx-auto w-full min-h-[320px] max-w-[620px] sm:min-h-[420px] lg:min-h-[500px] lg:max-w-[580px]",
        className
      )}
    >
      <svg
        viewBox="0 0 440 360"
        className="hidden h-auto w-full sm:block"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Modular workplace system connecting people, workspace, apps, Gemini and information on the GRID"
      >
        {/* Shared-edge joins (short, orthogonal) */}
        <g opacity={connectorsVisible ? 1 : 0} className="transition-opacity duration-500 ease-out">
          <rect x="136" y="32" width="4" height="54" fill="#2563EB" />
          <rect x="308" y="32" width="4" height="54" fill="#60A5FA" />
          <rect x="136" y="86" width="4" height="54" fill="#2563EB" />
          <rect x="304" y="86" width="4" height="54" fill="#2563EB" />
          <rect x="220" y="258" width="4" height="20" fill="#2563EB" opacity="0.55" />
          <rect x="136" y="254" width="172" height="4" fill="#2563EB" opacity="0.25" />
        </g>

        {DESKTOP_MODULES.map((mod) => {
          const visible = showModule(mod.order);
          const isCore = mod.id === "core";
          const { x: ox, y: oy } = nudge(mod);
          return (
            <g
              key={mod.id}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? `translate(${ox}px, ${oy}px)`
                  : `translate(${ox}px, ${(oy || 0) + 8}px)`,
                transition: "opacity 0.4s ease, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <rect
                x={mod.x}
                y={mod.y}
                width={mod.w}
                height={mod.h}
                rx={isCore ? 8 : 6}
                fill={mod.fill}
                stroke={mod.stroke ?? "transparent"}
                strokeWidth={mod.stroke ? 1.5 : 0}
              />
              {isCore ? (
                <>
                  <image
                    href="/brand/jointhegrid-symbol.svg"
                    x={mod.x + mod.w / 2 - 40}
                    y={mod.y + 36}
                    width="80"
                    height="80"
                  />
                  <text
                    x={mod.x + mod.w / 2}
                    y={mod.y + mod.h - 22}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="600"
                    fontFamily={FONT}
                    letterSpacing="0.14em"
                    opacity={labelsVisible ? 1 : 0}
                    className="transition-opacity duration-500"
                  >
                    THE GRID
                  </text>
                </>
              ) : (
                mod.label && (
                  <text
                    x={mod.x + mod.w / 2}
                    y={mod.y + mod.h / 2 + 4}
                    textAnchor="middle"
                    fill={mod.labelFill ?? "#334155"}
                    fontSize="12"
                    fontWeight="500"
                    fontFamily={FONT}
                    letterSpacing="0.12em"
                    opacity={labelsVisible ? 0.95 : 0}
                    className="transition-opacity duration-500"
                  >
                    {mod.label}
                  </text>
                )
              )}
            </g>
          );
        })}

        {/* Logo-language corner accents */}
        <rect x="28" y="32" width="8" height="8" rx="2" fill="#2563EB" opacity={showModule(0) ? 0.85 : 0} />
        <rect x="408" y="140" width="8" height="8" rx="2" fill="#60A5FA" opacity={showModule(7) ? 0.85 : 0} />
      </svg>

      {/* Mobile: five modules */}
      <svg
        viewBox="0 0 320 340"
        className="h-auto w-full max-w-[360px] sm:hidden"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Connected workplace modules on mobile"
      >
        <rect x="20" y="24" width="92" height="48" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
        <text x="66" y="54" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="500" fontFamily={FONT} letterSpacing="0.1em">
          PEOPLE
        </text>
        <rect x="112" y="24" width="188" height="48" rx="6" fill="#2563EB" />
        <text x="206" y="54" textAnchor="middle" fill="#FFF" fontSize="11" fontWeight="500" fontFamily={FONT} letterSpacing="0.1em">
          WORKSPACE
        </text>
        <rect x="112" y="72" width="4" height="16" fill="#2563EB" opacity="0.5" />

        <rect x="20" y="88" width="92" height="48" rx="6" fill="#2563EB" />
        <text x="66" y="118" textAnchor="middle" fill="#FFF" fontSize="11" fontWeight="500" fontFamily={FONT} letterSpacing="0.1em">
          GEMINI
        </text>
        <rect x="112" y="88" width="188" height="132" rx="8" fill="#0B1220" />
        <image href="/brand/jointhegrid-symbol.svg" x="166" y="104" width="80" height="80" />
        <text x="206" y="200" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="600" fontFamily={FONT} letterSpacing="0.12em">
          THE GRID
        </text>
        <rect x="112" y="88" width="4" height="48" fill="#2563EB" opacity="0.45" />

        <rect x="206" y="220" width="4" height="24" fill="#2563EB" opacity="0.4" />
        <rect x="48" y="244" width="224" height="48" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
        <text x="160" y="274" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="500" fontFamily={FONT} letterSpacing="0.1em">
          INFORMATION
        </text>
      </svg>
    </div>
  );
}
