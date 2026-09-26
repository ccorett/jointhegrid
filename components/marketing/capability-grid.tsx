import { cn } from "@/lib/utils";

export function CapabilityGrid({
  items,
  columns = 3,
  className,
  dark = false,
}: {
  items: string[];
  columns?: 2 | 3 | 4;
  className?: string;
  dark?: boolean;
}) {
  const colClass =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  const frame = dark ? "border-white/15 bg-white/10" : "border-border bg-border";
  const cell = dark ? "bg-primary-navy text-white/90" : "bg-white text-body-text";

  return (
    <ul className={cn("grid gap-px border", frame, colClass, className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "px-4 py-3.5 text-[16px] font-medium leading-snug md:px-5 md:py-4 md:text-[17px]",
            cell
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
