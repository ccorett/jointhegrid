"use client";

import { cn } from "@/lib/utils";

const NODES = [
  { id: "workplace", label: "WORKPLACE", x: 50, y: 50, primary: true },
  { id: "people", label: "PEOPLE", x: 50, y: 12 },
  { id: "workspace", label: "GOOGLE WORKSPACE", x: 15, y: 35 },
  { id: "gemini", label: "GEMINI ENTERPRISE", x: 85, y: 35 },
  { id: "identity", label: "IDENTITY", x: 12, y: 65 },
  { id: "apps", label: "APPLICATIONS", x: 88, y: 65 },
  { id: "info", label: "INFORMATION", x: 35, y: 88 },
  { id: "security", label: "SECURITY", x: 65, y: 88 },
];

export function InteroperabilityVisual({ className }: { className?: string }) {
  const center = NODES.find((n) => n.primary)!;
  const outer = NODES.filter((n) => !n.primary);

  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-md", className)} aria-hidden>
      <svg viewBox="0 0 100 100" className="h-full w-full" fill="none">
        {outer.map((node) => (
          <line
            key={node.id}
            x1={center.x}
            y1={center.y}
            x2={node.x}
            y2={node.y}
            stroke="#2563EB"
            strokeWidth="0.4"
            strokeOpacity="0.4"
          />
        ))}

        {outer.map((node) => (
          <g key={node.id}>
            <rect
              x={node.x - (node.label.length > 10 ? 12 : 8)}
              y={node.y - 4}
              width={node.label.length > 10 ? 24 : 16}
              height="8"
              rx="1"
              fill="#2563EB"
              fillOpacity="0.15"
              stroke="#2563EB"
              strokeWidth="0.3"
              strokeOpacity="0.5"
            />
            <text
              x={node.x}
              y={node.y + 1.5}
              textAnchor="middle"
              fill="#E5E7EB"
              fontSize="2.8"
              fontWeight="300"
              letterSpacing="0.08em"
            >
              {node.label}
            </text>
          </g>
        ))}

        <g>
          <rect x="42" y="42" width="16" height="16" rx="2" fill="#2563EB" />
          <rect x="44" y="44" width="5" height="5" rx="1" fill="#FFFFFF" fillOpacity="0.3" />
          <rect x="51" y="44" width="5" height="5" rx="1" fill="#60A5FA" />
          <rect x="44" y="51" width="5" height="5" rx="1" fill="#FFFFFF" fillOpacity="0.3" />
          <text
            x="50"
            y="64"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="3.5"
            fontWeight="600"
            letterSpacing="0.1em"
          >
            WORKPLACE
          </text>
        </g>
      </svg>
    </div>
  );
}
