"use client";

import { cn } from "@/lib/utils";

const FONT = "Inter, system-ui, sans-serif";

const NODES = [
  { label: "PEOPLE", x: 80, y: 72 },
  { label: "APPS", x: 400, y: 72 },
  { label: "INFORMATION", x: 400, y: 200 },
  { label: "IDENTITY", x: 80, y: 200 },
  { label: "SECURITY", x: 80, y: 328 },
  { label: "WORKFLOWS", x: 400, y: 328 },
] as const;

export function NothingWorksIsolationGraphic({
  className,
}: {
  className?: string;
}) {
  const cx = 240;
  const cy = 200;

  return (
    <figure
      className={cn(
        "relative mx-auto w-full min-w-0 max-w-[520px] lg:mx-0 lg:max-w-none",
        className
      )}
    >
      <svg
        viewBox="0 0 480 400"
        className="h-auto w-full"
        role="img"
        aria-label="People, apps, information, identity, security and workflows connected around THE GRID"
      >
        {NODES.map((node) => (
          <line
            key={node.label}
            x1={cx}
            y1={cy}
            x2={node.x}
            y2={node.y}
            stroke="#2563EB"
            strokeWidth="1.25"
            strokeOpacity="0.35"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {NODES.map((node) => (
          <g key={node.label}>
            <rect
              x={node.x - 56}
              y={node.y - 22}
              width={112}
              height={44}
              rx={6}
              fill="#FFFFFF"
              stroke="#E2E8F0"
              strokeWidth="1.5"
            />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              fill="#334155"
              fontSize="10"
              fontWeight="600"
              fontFamily={FONT}
              letterSpacing="0.12em"
            >
              {node.label}
            </text>
          </g>
        ))}

        <rect
          x={168}
          y={128}
          width={144}
          height={144}
          rx={12}
          fill="#F8FAFC"
          stroke="#2563EB"
          strokeWidth="1.5"
          strokeOpacity="0.45"
        />
        <image
          href="/brand/grid-symbol-light.png"
          x={184}
          y={144}
          width={112}
          height={112}
        />
        <text
          x={240}
          y={292}
          textAnchor="middle"
          fill="#0B1220"
          fontSize="11"
          fontWeight="700"
          fontFamily={FONT}
          letterSpacing="0.18em"
        >
          THE GRID
        </text>
      </svg>
    </figure>
  );
}
