"use client";

import { useEffect, useState } from "react";

export function BrandConnectionLines() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(() => setOffset((o) => (o + 1) % 100), 50);
    return () => clearInterval(id);
  }, []);

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      aria-hidden
      preserveAspectRatio="none"
    >
      <line
        x1={`${20 + offset * 0.1}%`}
        y1="0%"
        x2={`${35 + offset * 0.1}%`}
        y2="100%"
        stroke="#2563EB"
        strokeWidth="1"
        strokeOpacity="0.35"
      />
      <line
        x1={`${60 - offset * 0.08}%`}
        y1="0%"
        x2={`${45 - offset * 0.08}%`}
        y2="100%"
        stroke="#60A5FA"
        strokeWidth="1"
        strokeOpacity="0.25"
      />
      <line x1="0%" y1="40%" x2="100%" y2="55%" stroke="#2563EB" strokeWidth="0.5" strokeOpacity="0.2" />
    </svg>
  );
}
