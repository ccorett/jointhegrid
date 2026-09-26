"use client";

import { cn } from "@/lib/utils";

const MODULE = { w: 18, h: 10, rx: 2.5, cell: 14, gap: 4 };

type NodeDef = {
  id: string;
  label: string;
  x: number;
  y: number;
  primary?: boolean;
};

const NODES: NodeDef[] = [
  { id: "identity", label: "IDENTITY", x: 12, y: 18 },
  { id: "applications", label: "APPLICATIONS", x: 88, y: 18 },
  { id: "people", label: "PEOPLE", x: 12, y: 50 },
  { id: "workflows", label: "WORKFLOWS", x: 88, y: 50 },
  { id: "information", label: "INFORMATION", x: 12, y: 82 },
  { id: "security", label: "SECURITY", x: 88, y: 82 },
];

const HUB = { x: 50, y: 50 };

function moduleWidth(label: string) {
  return label.length > 10 ? 28 : 20;
}

export function InteroperabilityNetwork({ className }: { className?: string }) {
  return (
    <div className={cn("w-full max-w-lg mx-auto", className)} aria-hidden>
      <svg viewBox="0 0 100 100" className="w-full" preserveAspectRatio="xMidYMid meet">
        {/* Orthogonal guides */}
        <line x1="50" y1="12" x2="50" y2="88" stroke="#E2E8F0" strokeWidth="0.35" vectorEffect="non-scaling-stroke" />
        <line x1="12" y1="50" x2="88" y2="50" stroke="#E2E8F0" strokeWidth="0.35" vectorEffect="non-scaling-stroke" />

        {NODES.map((node) => (
          <path
            key={node.id}
            d={`M ${HUB.x} ${HUB.y} L ${node.x} ${node.y}`}
            fill="none"
            stroke="#2563EB"
            strokeWidth="0.45"
            strokeOpacity="0.35"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {NODES.map((node) => {
          const w = moduleWidth(node.label);
          return (
            <g key={node.id}>
              <rect
                x={node.x - w / 2}
                y={node.y - MODULE.h / 2}
                width={w}
                height={MODULE.h}
                rx={MODULE.rx}
                fill="#F8FAFC"
                stroke="#2563EB"
                strokeWidth="0.4"
                strokeOpacity="0.55"
                vectorEffect="non-scaling-stroke"
              />
              <text
                x={node.x}
                y={node.y + 1.2}
                textAnchor="middle"
                fill="#334155"
                fontSize="2.6"
                fontWeight="600"
                letterSpacing="0.03em"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Hub: Workspace + Gemini */}
        <rect
          x={HUB.x - 22}
          y={HUB.y - 11}
          width="44"
          height="22"
          rx="3"
          fill="#0B1220"
        />
        <rect x={HUB.x - 18} y={HUB.y - 7} width="5" height="5" rx="1" fill="#2563EB" />
        <rect x={HUB.x - 10} y={HUB.y - 7} width="5" height="5" rx="1" fill="#2563EB" />
        <rect x={HUB.x - 2} y={HUB.y - 7} width="5" height="5" rx="1" fill="#60A5FA" />
        <rect x={HUB.x - 18} y={HUB.y + 1} width="5" height="5" rx="1" fill="#2563EB" />
        <text x={HUB.x} y={HUB.y - 1} textAnchor="middle" fill="#FFFFFF" fontSize="2.5" fontWeight="600">
          WORKSPACE
        </text>
        <text x={HUB.x} y={HUB.y + 3.5} textAnchor="middle" fill="#60A5FA" fontSize="2.3" fontWeight="600">
          + GEMINI
        </text>
      </svg>
    </div>
  );
}
