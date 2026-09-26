import { cn } from "@/lib/utils";

export function CapabilityGrid({
  items,
  columns = 3,
  className,
}: {
  items: string[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const colClass =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <ul className={cn("grid gap-3", colClass, className)}>
      {items.map((item) => (
        <li
          key={item}
          className="border-l-2 border-infrastructure-blue/35 py-1.5 pl-4 text-[15px] leading-snug text-body-text"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
