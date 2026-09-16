import { formatCredits } from "@/lib/utils";
import { cn } from "@/lib/utils";

type CreditBalanceProps = {
  balance: number;
  label?: string;
  size?: "sm" | "lg";
  className?: string;
};

export function CreditBalance({
  balance,
  label = "Available AI Credits",
  size = "lg",
  className,
}: CreditBalanceProps) {
  return (
    <div className={cn("", className)}>
      <p className="text-xs font-medium uppercase tracking-wider text-secondary-text">
        {label}
      </p>
      <p
        className={cn(
          "mt-1 font-light tabular-nums text-primary-navy",
          size === "lg" ? "text-4xl md:text-5xl" : "text-2xl"
        )}
      >
        {formatCredits(balance)}
      </p>
    </div>
  );
}
