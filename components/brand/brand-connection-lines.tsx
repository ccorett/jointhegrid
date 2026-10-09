/** Decorative background lines — static SVG (no continuous animation). */
export function BrandConnectionLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      aria-hidden
      preserveAspectRatio="none"
    >
      <line
        x1="22%"
        y1="0%"
        x2="37%"
        y2="100%"
        stroke="#2563EB"
        strokeWidth="1"
        strokeOpacity="0.35"
      />
      <line
        x1="58%"
        y1="0%"
        x2="43%"
        y2="100%"
        stroke="#60A5FA"
        strokeWidth="1"
        strokeOpacity="0.25"
      />
      <line
        x1="0%"
        y1="40%"
        x2="100%"
        y2="55%"
        stroke="#2563EB"
        strokeWidth="0.5"
        strokeOpacity="0.2"
      />
    </svg>
  );
}
