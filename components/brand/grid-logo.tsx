import Image from "next/image";
import Link from "next/link";
import { GridSymbol } from "@/components/brand/grid-symbol";
import { cn } from "@/lib/utils";

type GridLogoProps = {
  className?: string;
  href?: string;
  reversed?: boolean;
};

export function GridLogo({
  className,
  href = "/",
  reversed = false,
}: GridLogoProps) {
  const src = reversed
    ? "/brand/jointhegrid-reversed.svg"
    : "/brand/jointhegrid-horizontal.svg";

  const symbolTheme = reversed ? "dark" : "light";

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center overflow-visible py-1",
        className
      )}
    >
      <GridSymbol
        theme={symbolTheme}
        size={36}
        priority
        className="sm:hidden"
      />
      <Image
        src={src}
        alt="#jointheGRID"
        width={240}
        height={56}
        priority
        className="hidden h-11 w-auto max-w-[220px] object-contain sm:block md:h-12 md:max-w-[240px]"
        style={{ objectFit: "contain" }}
      />
    </Link>
  );
}
