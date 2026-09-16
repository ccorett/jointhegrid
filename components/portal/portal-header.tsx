"use client";

import { Menu } from "lucide-react";

type PortalHeaderProps = {
  title: string;
  onMenuClick?: () => void;
};

export function PortalHeader({ title, onMenuClick }: PortalHeaderProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-white px-5 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-1.5 text-primary-navy lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-medium text-primary-navy">{title}</h1>
      </div>
      <span className="rounded-md bg-warning/10 px-2 py-0.5 text-xs font-medium text-warning">
        Demo Data
      </span>
    </header>
  );
}
