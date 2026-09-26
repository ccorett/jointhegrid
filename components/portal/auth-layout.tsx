import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { GridSymbol } from "@/components/brand/grid-symbol";

type AuthLayoutProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 flex-col justify-between bg-primary-navy p-12 lg:flex">
        <div>
          <BrandLogo variant="reversed" href="/" height={44} />
        </div>
        <div>
          <p className="text-2xl font-extralight leading-relaxed text-white/80">
            One account.
            <br />
            Flexible access.
          </p>
          <p className="mt-4 text-sm font-light text-white/50">
            Manage your organization&apos;s AI credits through the GRID platform.
          </p>
        </div>
        <p className="text-xs font-light text-white/30">
          Global Resilient Infrastructure &amp; Digitalisation Ltd.
        </p>
      </div>

      <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <GridSymbol size={36} variant="app" />
            <BrandLogo variant="primary" href="/" height={36} />
          </div>
          <h1 className="text-2xl font-light text-primary-navy">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-sm font-light text-secondary-text">
              {subtitle}
            </p>
          )}
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
