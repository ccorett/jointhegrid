import Image from "next/image";
import Link from "next/link";
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

  return (
    <Link href={href} className={cn("inline-block shrink-0", className)}>
      <Image
        src={src}
        alt="#jointheGRID — Digital Workplace Solutions"
        width={220}
        height={48}
        priority
        className="h-10 w-auto md:h-11"
      />
    </Link>
  );
}
