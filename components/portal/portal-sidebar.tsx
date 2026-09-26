"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Coins,
  ShoppingCart,
  BarChart3,
  Receipt,
  User,
  HelpCircle,
  LogOut,
  X,
} from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/portal", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/portal/credits", label: "Credits", icon: Coins },
  { href: "/portal/purchase", label: "Purchase", icon: ShoppingCart },
  { href: "/portal/usage", label: "Usage", icon: BarChart3 },
  { href: "/portal/transactions", label: "Transactions", icon: Receipt },
  { href: "/portal/account", label: "Account", icon: User },
  { href: "/portal/support", label: "Support", icon: HelpCircle },
];

type PortalSidebarProps = {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
};

export function PortalSidebar({ mobileOpen, onMobileClose }: PortalSidebarProps) {
  const pathname = usePathname();

  const content = (
    <>
      <div className="flex h-16 items-center border-b border-white/10 px-5">
        <BrandLogo variant="reversed" href="/portal" height={34} />
      </div>

      <nav className="flex-1 space-y-0.5 px-3 py-4" aria-label="Portal navigation">
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onMobileClose}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-infrastructure-blue/20 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-3">
        <Link
          href="/portal/sign-in"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Link>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-60 shrink-0 flex-col bg-primary-navy lg:flex">
        {content}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={onMobileClose}
            aria-hidden
          />
          <aside className="absolute inset-y-0 left-0 flex w-72 flex-col bg-primary-navy shadow-xl">
            <button
              type="button"
              onClick={onMobileClose}
              className="absolute right-3 top-4 rounded-lg p-1 text-white/60 hover:text-white"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            {content}
          </aside>
        </div>
      )}
    </>
  );
}
