import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-infrastructure-blue text-white hover:bg-[#1d4ed8] border border-infrastructure-blue",
  secondary:
    "bg-white text-primary-navy border border-border hover:bg-light-bg",
  ghost: "bg-transparent text-primary-navy hover:bg-light-bg border border-transparent",
  outline:
    "bg-transparent text-white border border-white/30 hover:bg-white/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-5 py-2.5 text-sm",
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  { variant = "primary", size = "md", className, href, ...props },
  ref
) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-infrastructure-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
});
