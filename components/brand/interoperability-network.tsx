"use client";

import { cn } from "@/lib/utils";

const NODES = [
  { id: "people", label: "PEOPLE", angle: -90 },
  { id: "identity", label: "IDENTITY", angle: -35 },
  { id: "apps", label: "APPLICATIONS", angle: 15 },
  { id: "info", label: "INFORMATION", angle: 65 },
  { id: "security", label: "SECURITY", angle: 120 },
  { id: "workflows", label: "WORKFLOWS", angle: 165 },
];

const R = 38;

function polar(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: 50 + R * Math.cos(rad), y: 50 + R * Math.sin(rad) };
}

export function InteroperabilityNetwork({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-lg", className)} aria-hidden>
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {NODES.map((node) => {
          const p = polar(node.angle);
          return (
            <g key={node.id}>
              <line
                x1="50"
                y1="50"
                x2={p.x}
                y2={p.y}
                stroke="#2563EB"
                strokeWidth="0.35"
                strokeOpacity="0.45"
              />
              <rect
                x={p.x - (node.label.length > 10 ? 11 : 7)}
                y={p.y - 3.5}
                width={node.label.length > 10 ? 22 : 14}
                height="7"
                rx="1"
                fill="#0B1220"
                stroke="#2563EB"
                strokeWidth="0.35"
                strokeOpacity="0.6"
              />
              <text
                x={p.x}
                y={p.y + 1.2}
                textAnchor="middle"
                fill="#E5E7EB"
                fontSize="2.5"
                fontWeight="500"
                letterSpacing="0.05em"
              >
                {node.label}
              </text>
            </g>
          );
        })}
        <rect x="32" y="42" width="36" height="16" rx="2" fill="#2563EB" fillOpacity="0.2" stroke="#60A5FA" strokeWidth="0.4" />
        <text x="50" y="51.5" textAnchor="middle" fill="#FFFFFF" fontSize="2.8" fontWeight="600" letterSpacing="0.04em">
          GOOGLE WORKSPACE
        </text>
        <text x="50" y="55.5" textAnchor="middle" fill="#60A5FA" fontSize="2.5" fontWeight="600" letterSpacing="0.04em">
          + GEMINI ENTERPRISE
        </text>
        <circle cx="50" cy="50" r="2" fill="#60A5FA" />
      </svg>
    </div>
  );
}
