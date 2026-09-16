"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NODES = [
  { id: "people", label: "PEOPLE", x: 15, y: 20, color: "#2563EB" },
  { id: "apps", label: "APPS", x: 75, y: 15, color: "#60A5FA" },
  { id: "info", label: "INFO", x: 80, y: 55, color: "#60A5FA" },
  { id: "together", label: "TOGETHER", x: 45, y: 75, color: "#2563EB" },
  { id: "workspace", label: "WORKSPACE", x: 25, y: 55, color: "#2563EB" },
  { id: "gemini", label: "GEMINI", x: 55, y: 35, color: "#2563EB" },
];

const CONNECTIONS = [
  ["people", "workspace"],
  ["people", "gemini"],
  ["workspace", "gemini"],
  ["gemini", "apps"],
  ["gemini", "info"],
  ["info", "together"],
  ["workspace", "together"],
  ["apps", "info"],
];

export function GridHeroVisual({ className }: { className?: string }) {
  const [activeConnections, setActiveConnections] = useState<number[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setActiveConnections(CONNECTIONS.map((_, i) => i));
      return;
    }
    let index = 0;
    const interval = setInterval(() => {
      setActiveConnections((prev) => {
        const next = [...prev, index % CONNECTIONS.length];
        return next.slice(-CONNECTIONS.length);
      });
      index++;
    }, 1200);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const getNode = (id: string) => NODES.find((n) => n.id === id)!;

  return (
    <div
      className={cn(
        "relative aspect-square w-full max-w-lg",
        className
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid structure lines */}
        <line x1="0" y1="33" x2="100" y2="33" stroke="#E2E8F0" strokeWidth="0.3" />
        <line x1="0" y1="66" x2="100" y2="66" stroke="#E2E8F0" strokeWidth="0.3" />
        <line x1="33" y1="0" x2="33" y2="100" stroke="#E2E8F0" strokeWidth="0.3" />
        <line x1="66" y1="0" x2="66" y2="100" stroke="#E2E8F0" strokeWidth="0.3" />

        {/* Animated connections */}
        {CONNECTIONS.map(([from, to], i) => {
          const a = getNode(from);
          const b = getNode(to);
          const isActive = activeConnections.includes(i);
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#2563EB"
              strokeWidth={isActive ? 0.8 : 0.3}
              strokeOpacity={isActive ? 0.8 : 0.2}
              className="transition-all duration-700"
            />
          );
        })}

        {/* Nodes as grid squares */}
        {NODES.map((node) => (
          <g key={node.id}>
            <rect
              x={node.x - 6}
              y={node.y - 6}
              width="12"
              height="12"
              rx="1.5"
              fill={node.color}
              opacity="0.9"
            />
            <text
              x={node.x}
              y={node.y + 14}
              textAnchor="middle"
              fill="#64748B"
              fontSize="3.5"
              fontWeight="300"
              letterSpacing="0.05em"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Central GRID symbol accent */}
        <rect x="42" y="42" width="16" height="16" rx="2" fill="#0B1220" opacity="0.05" />
        <rect x="44" y="44" width="5" height="5" rx="1" fill="#2563EB" />
        <rect x="51" y="44" width="5" height="5" rx="1" fill="#2563EB" />
        <rect x="44" y="51" width="5" height="5" rx="1" fill="#2563EB" />
        <rect x="51" y="51" width="5" height="5" rx="1" fill="#60A5FA" />
      </svg>
    </div>
  );
}
