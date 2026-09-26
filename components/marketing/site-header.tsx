"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { GridLogo } from "@/components/brand/grid-logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const solutionsLinks = [
  { href: "/digital-workspace", label: "Digital Workspace" },
  { href: "/ai-integration", label: "AI Integration" },
];

const servicesLinks = [
  { href: "/deployment", label: "Deployment" },
  { href: "/administration", label: "Administration" },
  { href: "/adoption", label: "Adoption" },
];

type OpenMenu = "solutions" | "services" | null;

type NavDropdownProps = {
  menuId: "solutions" | "services";
  label: string;
  links: { href: string; label: string }[];
  openMenu: OpenMenu;
  setOpenMenu: (menu: OpenMenu) => void;
};

function NavDropdown({
  menuId,
  label,
  links,
  openMenu,
  setOpenMenu,
}: NavDropdownProps) {
  const panelId = useId();
  const isOpen = openMenu === menuId;

  const toggle = () => {
    setOpenMenu(isOpen ? null : menuId);
  };

  return (
    <div className="relative">
      <button
        type="button"
        id={`${menuId}-menu-button`}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-body-text transition-colors hover:text-primary-navy"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 opacity-60 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div
          id={panelId}
          role="menu"
          aria-labelledby={`${menuId}-menu-button`}
          className="absolute left-0 top-full z-[100] min-w-[220px] pt-1"
        >
          <div className="border border-border bg-white py-1.5 shadow-lg shadow-primary-navy/5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                className="block px-4 py-2.5 text-sm text-body-text transition-colors hover:bg-light-bg hover:text-primary-navy focus-visible:bg-light-bg focus-visible:text-primary-navy focus-visible:outline-none"
                onClick={() => setOpenMenu(null)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileAccordion({
  label,
  links,
  expanded,
  onToggle,
  onNavigate,
}: {
  label: string;
  links: { href: string; label: string }[];
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const panelId = useId();

  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 text-sm font-medium text-body-text"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-4 w-4 opacity-60 transition-transform",
            expanded && "rotate-180"
          )}
        />
      </button>
      {expanded && (
        <div id={panelId} className="pb-2 pl-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2.5 text-sm text-body-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-infrastructure-blue focus-visible:ring-offset-2"
              onClick={onNavigate}
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
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
    setMobileServicesOpen(false);
  }, []);

  useEffect(() => {
    if (openMenu === null) return;

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (headerRef.current && !headerRef.current.contains(target)) {
        setOpenMenu(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    }

    // Defer so the same click that opened the menu does not bubble to document.
    const timer = window.setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenu]);

  useEffect(() => {
    if (!mobileOpen) {
      setMobileSolutionsOpen(false);
      setMobileServicesOpen(false);
    }
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-md"
    >
      <div className="content-container flex min-h-[72px] items-center justify-between py-2 lg:min-h-[80px]">
        <GridLogo symbolSize={40} />

        <nav
          className="relative z-20 hidden items-center gap-0.5 lg:flex"
          aria-label="Main navigation"
        >
          <NavDropdown
            menuId="solutions"
            label="Solutions"
            links={solutionsLinks}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
          <NavDropdown
            menuId="services"
            label="Services"
            links={servicesLinks}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
          <Link
            href="/about"
            className="px-3 py-2 text-sm font-medium text-body-text transition-colors hover:text-primary-navy"
            onClick={() => setOpenMenu(null)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 text-sm font-medium text-body-text transition-colors hover:text-primary-navy"
            onClick={() => setOpenMenu(null)}
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
          className="relative z-20 inline-flex items-center justify-center rounded-lg p-2 text-primary-navy lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="content-container flex flex-col py-2" aria-label="Mobile navigation">
            <MobileAccordion
              label="Solutions"
              links={solutionsLinks}
              expanded={mobileSolutionsOpen}
              onToggle={() => {
                setMobileSolutionsOpen((v) => !v);
                setMobileServicesOpen(false);
              }}
              onNavigate={closeMobile}
            />
            <MobileAccordion
              label="Services"
              links={servicesLinks}
              expanded={mobileServicesOpen}
              onToggle={() => {
                setMobileServicesOpen((v) => !v);
                setMobileSolutionsOpen(false);
              }}
              onNavigate={closeMobile}
            />
            <Link
              href="/about"
              className="border-b border-border/60 py-3 text-sm font-medium text-body-text"
              onClick={closeMobile}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="border-b border-border/60 py-3 text-sm font-medium text-body-text"
              onClick={closeMobile}
            >
              Contact
            </Link>
            <div className="mt-5 pb-4">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full"
                onClick={closeMobile}
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
