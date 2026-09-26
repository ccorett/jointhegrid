"use client";

import { cn } from "@/lib/utils";

const FONT = "Inter, system-ui, sans-serif";

/**
 * Connected Stack — layered modular system (not hub-and-spoke).
 */
export function InteroperabilityNetwork({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full min-h-[340px] max-w-[700px] lg:min-h-[480px]",
        className
      )}
    >
      <svg
        viewBox="0 0 560 500"
        className="hidden h-auto w-full md:block"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Layered digital workplace stack with identity, applications, information, workflows and security"
      >
        {/* WORKFLOWS — horizontal layer */}
        <rect x="40" y="28" width="480" height="36" rx="4" fill="#EFF6FF" stroke="#E2E8F0" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <text x="280" y="51" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="500" fontFamily={FONT} letterSpacing="0.14em">
          WORKFLOWS
        </text>

        {/* Zone modules */}
        <rect x="40" y="84" width="156" height="76" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
        <rect x="384" y="84" width="136" height="292" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
        <rect x="40" y="176" width="128" height="200" rx="6" fill="#F8FAFC" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.35" />

        {/* SECURITY — horizontal layer through the stack */}
        <rect x="40" y="248" width="480" height="28" rx="3" fill="#0B1220" fillOpacity="0.06" />
        <line x1="40" y1="262" x2="520" y2="262" stroke="#2563EB" strokeWidth="0.75" strokeOpacity="0.2" vectorEffect="non-scaling-stroke" />

        {/* Central core */}
        <rect x="184" y="168" width="192" height="208" rx="8" fill="#0B1220" />
        <text x="280" y="204" textAnchor="middle" fill="#60A5FA" fontSize="10" fontWeight="500" fontFamily={FONT} letterSpacing="0.16em">
          DIGITAL WORKPLACE
        </text>
        <image href="/brand/jointhegrid-app-icon.png" x="228" y="208" width="104" height="104" />
        <text x="280" y="340" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="600" fontFamily={FONT} letterSpacing="0.04em">
          Workspace
        </text>
        <text x="280" y="360" textAnchor="middle" fill="#60A5FA" fontSize="13" fontWeight="600" fontFamily={FONT}>
          + Gemini
        </text>

        {/* Short joins into core */}
        <rect x="168" y="118" width="16" height="4" fill="#2563EB" opacity="0.4" />
        <rect x="368" y="118" width="16" height="4" fill="#2563EB" opacity="0.4" />
        <rect x="168" y="256" width="16" height="4" fill="#2563EB" opacity="0.35" />
        <rect x="276" y="376" width="8" height="16" fill="#2563EB" opacity="0.35" />

        {/* Information base */}
        <rect x="112" y="392" width="336" height="76" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
        <text x="280" y="436" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="500" fontFamily={FONT} letterSpacing="0.12em">
          INFORMATION
        </text>

        <text x="118" y="128" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="500" fontFamily={FONT} letterSpacing="0.12em">
          PEOPLE
        </text>
        <text x="452" y="128" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="500" fontFamily={FONT} letterSpacing="0.12em">
          APPLICATIONS
        </text>
        <text x="104" y="278" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="500" fontFamily={FONT} letterSpacing="0.12em">
          IDENTITY
        </text>
        <text x="504" y="266" textAnchor="end" fill="#64748B" fontSize="10" fontWeight="500" fontFamily={FONT} letterSpacing="0.14em">
          SECURITY
        </text>
      </svg>

      {/* Mobile */}
      <svg
        viewBox="0 0 320 380"
        className="h-auto w-full md:hidden"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Connected workplace stack on mobile"
      >
        <text x="160" y="22" textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="500" fontFamily={FONT} letterSpacing="0.12em">
          WORKFLOWS
        </text>
        <line x1="32" y1="28" x2="288" y2="28" stroke="#2563EB" strokeWidth="0.5" opacity="0.25" vectorEffect="non-scaling-stroke" />
        <text x="288" y="44" textAnchor="end" fill="#64748B" fontSize="8" fontWeight="500" fontFamily={FONT} letterSpacing="0.1em">
          SECURITY
        </text>

        <rect x="28" y="52" width="80" height="52" rx="5" fill="#FFF" stroke="#E2E8F0" strokeWidth="1.5" />
        <text x="68" y="84" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="500" fontFamily={FONT} letterSpacing="0.1em">
          PEOPLE
        </text>

        <rect x="212" y="52" width="80" height="52" rx="5" fill="#FFF" stroke="#E2E8F0" strokeWidth="1.5" />
        <text x="252" y="84" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="500" fontFamily={FONT} letterSpacing="0.1em">
          APPLICATIONS
        </text>

        <rect x="28" y="116" width="72" height="64" rx="5" fill="#F8FAFC" stroke="#2563EB" strokeOpacity="0.35" strokeWidth="1" />
        <text x="64" y="152" textAnchor="middle" fill="#334155" fontSize="9" fontWeight="500" fontFamily={FONT} letterSpacing="0.1em">
          IDENTITY
        </text>

        <rect x="104" y="108" width="112" height="120" rx="8" fill="#0B1220" />
        <image href="/brand/jointhegrid-app-icon.png" x="116" y="114" width="80" height="80" />
        <text x="160" y="212" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="600" fontFamily={FONT}>
          Workspace + Gemini
        </text>

        <rect x="220" y="116" width="72" height="64" rx="5" fill="#FFF" stroke="#E2E8F0" strokeWidth="1.5" />
        <text x="256" y="152" textAnchor="middle" fill="#334155" fontSize="9" fontWeight="500" fontFamily={FONT} letterSpacing="0.08em">
          INFORMATION
        </text>

        <rect x="156" y="228" width="8" height="12" fill="#2563EB" opacity="0.35" />
      </svg>
    </div>
  );
}
