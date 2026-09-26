"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Grid-aligned node layout (100×100 coordinate space) */
const NODES = [
  { id: "people", label: "PEOPLE", gx: 1, gy: 1 },
  { id: "workspace", label: "WORKSPACE", gx: 3, gy: 0 },
  { id: "gemini", label: "GEMINI", gx: 5, gy: 1 },
  { id: "apps", label: "APPS", gx: 6, gy: 3 },
  { id: "information", label: "INFORMATION", gx: 5, gy: 5 },
  { id: "ai", label: "AI", gx: 3, gy: 6 },
] as const;

const CELL = 14;
const GAP = 5;
const ORIGIN = { x: 8, y: 6 };

function cellCenter(gx: number, gy: number) {
  return {
    x: ORIGIN.x + gx * (CELL + GAP) + CELL / 2,
    y: ORIGIN.y + gy * (CELL + GAP) + CELL / 2,
  };
}

const CENTER = cellCenter(3, 3);
const CONNECTIONS: [string, string][] = [
  ["center", "people"],
  ["center", "workspace"],
  ["center", "gemini"],
  ["center", "apps"],
  ["center", "information"],
  ["center", "ai"],
];

export function Phase1HeroGrid({ className }: { className?: string }) {
  const [active, setActive] = useState<number[]>([]);
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
      setActive(CONNECTIONS.map((_, i) => i));
      return;
    }
    let i = 0;
    const t = setInterval(() => {
      setActive((prev) => [...prev.slice(-5), i % CONNECTIONS.length]);
      i++;
    }, 1100);
    return () => clearInterval(t);
  }, [reduced]);

  const nodeMap = Object.fromEntries(
    NODES.map((n) => [n.id, cellCenter(n.gx, n.gy)])
  ) as Record<string, { x: number; y: number }>;

  return (
    <div
      className={cn(
        "relative w-full max-w-md lg:max-w-none",
        className
      )}
      aria-hidden
    >
      {/* Desktop / tablet: full composition */}
      <svg
        viewBox="0 0 100 88"
        className="hidden w-full sm:block"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Structural grid lines */}
        {[1, 2, 3, 4, 5].map((i) => (
          <line
            key={`h-${i}`}
            x1={ORIGIN.x - 2}
            y1={ORIGIN.y + i * (CELL + GAP) - GAP / 2}
            x2={ORIGIN.x + 6 * (CELL + GAP)}
            y2={ORIGIN.y + i * (CELL + GAP) - GAP / 2}
            stroke="#E2E8F0"
            strokeWidth="0.35"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {CONNECTIONS.map(([from, to], idx) => {
          const start = from === "center" ? CENTER : nodeMap[from];
          const end = to === "center" ? CENTER : nodeMap[to];
          const on = active.includes(idx);
          return (
            <path
              key={`${from}-${to}`}
              d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
              fill="none"
              stroke="#2563EB"
              strokeWidth={on ? 0.65 : 0.35}
              strokeOpacity={on ? 0.85 : 0.25}
              vectorEffect="non-scaling-stroke"
              className="transition-all duration-700"
            />
          );
        })}

        {NODES.map((node) => {
          const c = cellCenter(node.gx, node.gy);
          const w = node.label.length > 6 ? CELL + 6 : CELL;
          return (
            <g key={node.id}>
              <rect
                x={c.x - w / 2}
                y={c.y - CELL / 2}
                width={w}
                height={CELL}
                rx="2.5"
                fill="#FFFFFF"
                stroke="#E2E8F0"
                strokeWidth="0.4"
                vectorEffect="non-scaling-stroke"
              />
              <rect
                x={c.x - w / 2 + 2}
                y={c.y - CELL / 2 + 2}
                width={4}
                height={4}
                rx="1"
                fill="#60A5FA"
              />
              <text
                x={c.x}
                y={c.y + CELL / 2 + 4}
                textAnchor="middle"
                fill="#64748B"
                fontSize="2.8"
                fontWeight="500"
                letterSpacing="0.04em"
                className="hidden md:inline"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Central GRID module */}
        <g>
          <rect
            x={CENTER.x - 10}
            y={CENTER.y - 10}
            width="20"
            height="20"
            rx="3"
            fill="#0B1220"
          />
          <rect x={CENTER.x - 7} y={CENTER.y - 7} width="5" height="5" rx="1" fill="#2563EB" />
          <rect x={CENTER.x - 1} y={CENTER.y - 7} width="5" height="5" rx="1" fill="#2563EB" />
          <rect x={CENTER.x + 5} y={CENTER.y - 7} width="5" height="5" rx="1" fill="#60A5FA" />
          <rect x={CENTER.x - 7} y={CENTER.y - 1} width="5" height="5" rx="1" fill="#2563EB" />
          <rect x={CENTER.x + 5} y={CENTER.y - 1} width="5" height="5" rx="1" fill="#2563EB" />
          <rect x={CENTER.x - 7} y={CENTER.y + 5} width="5" height="5" rx="1" fill="#2563EB" />
          <rect x={CENTER.x - 1} y={CENTER.y + 5} width="5" height="5" rx="1" fill="#2563EB" />
          <rect x={CENTER.x + 5} y={CENTER.y + 5} width="5" height="5" rx="1" fill="#60A5FA" />
          <text
            x={CENTER.x}
            y={CENTER.y + 14}
            textAnchor="middle"
            fill="#0B1220"
            fontSize="3.2"
            fontWeight="700"
            letterSpacing="0.1em"
          >
            GRID
          </text>
        </g>
      </svg>

      {/* Mobile: symbol + minimal nodes */}
      <svg viewBox="0 0 80 80" className="mx-auto w-[min(100%,280px)] sm:hidden">
        <rect x="28" y="28" width="24" height="24" rx="4" fill="#0B1220" />
        <rect x="31" y="31" width="6" height="6" rx="1.5" fill="#2563EB" />
        <rect x="39" y="31" width="6" height="6" rx="1.5" fill="#2563EB" />
        <rect x="47" y="31" width="6" height="6" rx="1.5" fill="#60A5FA" />
        <rect x="31" y="39" width="6" height="6" rx="1.5" fill="#2563EB" />
        <rect x="47" y="39" width="6" height="6" rx="1.5" fill="#2563EB" />
        <rect x="31" y="47" width="6" height="6" rx="1.5" fill="#2563EB" />
        <rect x="39" y="47" width="6" height="6" rx="1.5" fill="#2563EB" />
        <rect x="47" y="47" width="6" height="6" rx="1.5" fill="#60A5FA" />
        <line x1="40" y1="8" x2="40" y2="26" stroke="#2563EB" strokeWidth="0.5" vectorEffect="non-scaling-stroke" opacity="0.5" />
        <line x1="40" y1="54" x2="40" y2="72" stroke="#2563EB" strokeWidth="0.5" vectorEffect="non-scaling-stroke" opacity="0.5" />
        <line x1="8" y1="40" x2="26" y2="40" stroke="#2563EB" strokeWidth="0.5" vectorEffect="non-scaling-stroke" opacity="0.5" />
        <line x1="54" y1="40" x2="72" y2="40" stroke="#2563EB" strokeWidth="0.5" vectorEffect="non-scaling-stroke" opacity="0.5" />
        <rect x="34" y="4" width="12" height="8" rx="2" fill="#EFF6FF" stroke="#2563EB" strokeWidth="0.35" />
        <rect x="34" y="68" width="12" height="8" rx="2" fill="#EFF6FF" stroke="#2563EB" strokeWidth="0.35" />
        <rect x="4" y="36" width="12" height="8" rx="2" fill="#EFF6FF" stroke="#2563EB" strokeWidth="0.35" />
        <rect x="64" y="36" width="12" height="8" rx="2" fill="#EFF6FF" stroke="#2563EB" strokeWidth="0.35" />
      </svg>
    </div>
  );
}
