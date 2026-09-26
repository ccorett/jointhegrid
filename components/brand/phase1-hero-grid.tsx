"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const MODULES = [
  { id: "people", label: "PEOPLE", x: 12, y: 18 },
  { id: "workspace", label: "WORKSPACE", x: 28, y: 8 },
  { id: "gemini", label: "GEMINI", x: 72, y: 12 },
  { id: "information", label: "INFORMATION", x: 88, y: 38 },
  { id: "apps", label: "APPS", x: 78, y: 72 },
  { id: "identity", label: "IDENTITY", x: 10, y: 55 },
  { id: "collab", label: "COLLABORATION", x: 22, y: 82 },
  { id: "ai", label: "AI", x: 85, y: 88 },
];

const CENTER = { x: 48, y: 48, label: "THE GRID" };

const CONNECTIONS = MODULES.map((m) => ["center", m.id] as const);

export function Phase1HeroGrid({ className }: { className?: string }) {
  const [active, setActive] = useState<number[]>([]);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) {
      setActive(CONNECTIONS.map((_, i) => i));
      return;
    }
    let i = 0;
    const t = setInterval(() => {
      setActive((prev) => [...prev.slice(-CONNECTIONS.length + 1), i % CONNECTIONS.length]);
      i++;
    }, 900);
    return () => clearInterval(t);
  }, [reduced]);

  return (
    <div
      className={cn(
        "relative min-h-[320px] w-full lg:min-h-[480px] lg:-mr-8 xl:-mr-16",
        className
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="grid-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {MODULES.map((mod, idx) => {
          const on = active.includes(idx);
          return (
            <line
              key={mod.id}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={mod.x}
              y2={mod.y}
              stroke="#2563EB"
              strokeWidth={on ? 0.55 : 0.25}
              strokeOpacity={on ? 0.75 : 0.2}
              className="transition-all duration-700"
            />
          );
        })}

        {MODULES.map((mod) => (
          <g key={mod.id}>
            <rect
              x={mod.x - (mod.label.length > 8 ? 9 : 5.5)}
              y={mod.y - 3.5}
              width={mod.label.length > 8 ? 18 : 11}
              height="7"
              rx="1"
              fill="white"
              stroke="#E2E8F0"
              strokeWidth="0.35"
            />
            <rect
              x={mod.x - (mod.label.length > 8 ? 8 : 4.5)}
              y={mod.y - 2.5}
              width="3"
              height="3"
              rx="0.5"
              fill="#2563EB"
            />
            <text
              x={mod.x}
              y={mod.y + 0.8}
              textAnchor="middle"
              fill="#64748B"
              fontSize="2.4"
              fontWeight="500"
              letterSpacing="0.06em"
            >
              {mod.label}
            </text>
          </g>
        ))}

        <g>
          <rect
            x={CENTER.x - 11}
            y={CENTER.y - 11}
            width="22"
            height="22"
            rx="2.5"
            fill="url(#grid-blue)"
            stroke="#2563EB"
            strokeWidth="0.6"
          />
          <rect x={CENTER.x - 8} y={CENTER.y - 8} width="5" height="5" rx="1" fill="#2563EB" />
          <rect x={CENTER.x - 1} y={CENTER.y - 8} width="5" height="5" rx="1" fill="#2563EB" />
          <rect x={CENTER.x + 6} y={CENTER.y - 8} width="5" height="5" rx="1" fill="#60A5FA" />
          <rect x={CENTER.x - 8} y={CENTER.y - 1} width="5" height="5" rx="1" fill="#2563EB" />
          <rect x={CENTER.x + 6} y={CENTER.y - 1} width="5" height="5" rx="1" fill="#2563EB" />
          <rect x={CENTER.x - 8} y={CENTER.y + 6} width="5" height="5" rx="1" fill="#2563EB" />
          <rect x={CENTER.x - 1} y={CENTER.y + 6} width="5" height="5" rx="1" fill="#2563EB" />
          <rect x={CENTER.x + 6} y={CENTER.y + 6} width="5" height="5" rx="1" fill="#60A5FA" />
          <text
            x={CENTER.x}
            y={CENTER.y + 16}
            textAnchor="middle"
            fill="#0B1220"
            fontSize="3.2"
            fontWeight="600"
            letterSpacing="0.12em"
          >
            {CENTER.label}
          </text>
        </g>
      </svg>
    </div>
  );
}
