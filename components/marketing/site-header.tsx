"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { GridLogo } from "@/components/brand/grid-logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const solutionsLinks = [
  { href: "/google-workspace", label: "Google Workspace" },
  { href: "/gemini-enterprise", label: "Gemini Enterprise" },
];

const servicesLinks = [
  { href: "/deployment", label: "Deployment" },
  { href: "/administration", label: "Administration" },
  { href: "/adoption", label: "Adoption" },
];

function NavDropdown({
  label,
  links,
}: {
  label: string;
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-body-text transition-colors hover:text-primary-navy"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 opacity-60 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 min-w-[220px] border border-border bg-white py-1.5 shadow-lg shadow-primary-navy/5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2.5 text-sm text-body-text transition-colors hover:bg-light-bg hover:text-primary-navy"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-md">
      <div className="content-container flex h-[68px] items-center justify-between lg:h-[76px]">
        <GridLogo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          <NavDropdown label="Solutions" links={solutionsLinks} />
          <NavDropdown label="Services" links={servicesLinks} />
          <Link
            href="/about"
            className="px-3 py-2 text-sm font-medium text-body-text transition-colors hover:text-primary-navy"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 text-sm font-medium text-body-text transition-colors hover:text-primary-navy"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary" size="sm">
            Request a Consultation
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-primary-navy lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="content-container flex flex-col py-4" aria-label="Mobile navigation">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-secondary-text">
              Solutions
            </p>
            {solutionsLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 text-sm font-medium text-body-text"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="my-3 structural-line-h" />
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-secondary-text">
              Services
            </p>
            {servicesLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 text-sm font-medium text-body-text"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="my-3 structural-line-h" />
            <Link
              href="/about"
              className="py-2.5 text-sm font-medium text-body-text"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="py-2.5 text-sm font-medium text-body-text"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-5">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                Request a Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
