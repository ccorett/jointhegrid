import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** Full horizontal lockup from approved brand asset (mobile header). */
const HORIZONTAL_LOGO_SRC = "/brand/jointhegrid-horizontal.svg";

type GridHorizontalLogoProps = {
  className?: string;
  href?: string;
  onNavigate?: () => void;
};

export function GridHorizontalLogo({
  className,
  href = "/",
  onNavigate,
}: GridHorizontalLogoProps) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "inline-flex min-w-0 max-w-[calc(100%-3.25rem)] items-center ps-0.5",
        className
      )}
      aria-label="#jointhegrid home"
    >
      <Image
        src={HORIZONTAL_LOGO_SRC}
        alt=""
        width={320}
        height={56}
        priority
        className="h-9 w-auto max-h-10 object-contain object-left sm:h-10 sm:max-h-11"
      />
    </Link>
  );
}
