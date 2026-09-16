import Image from "next/image";
import { cn } from "@/lib/utils";

type GridSymbolProps = {
  size?: number;
  className?: string;
  variant?: "default" | "favicon";
};

export function GridSymbol({
  size = 40,
  className,
  variant = "default",
}: GridSymbolProps) {
  const src =
    variant === "favicon"
      ? "/brand/jointhegrid-favicon.svg"
      : "/brand/jointhegrid-symbol.svg";

  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden
    />
  );
}
