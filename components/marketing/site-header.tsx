"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { GridLogo } from "@/components/brand/grid-logo";
import { LetsTalkButton } from "@/components/marketing/lets-talk-button";
import {
  servicesNavLinks,
  solutionsNavLinks,
} from "@/lib/marketing-nav";
import { cn } from "@/lib/utils";

/** Shared height so links, dropdowns, and CTA align on one baseline row */
const desktopNavRowHeight = "min-h-11";

const focusRingClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-infrastructure-blue focus-visible:ring-offset-2";

/** Desktop primary navigation */
const desktopNavLinkClass = cn(
  desktopNavRowHeight,
  "inline-flex items-center rounded-sm px-3.5 text-[17px] font-medium leading-none text-body-text transition-colors hover:text-primary-navy",
  focusRingClass,
  "lg:px-4 lg:text-[18px]"
);

const desktopDropdownItemClass = cn(
  "block px-4 py-3.5 text-base leading-snug text-body-text transition-colors hover:bg-light-bg hover:text-primary-navy",
  focusRingClass,
  "lg:px-5 lg:py-3.5 lg:text-[17px]"
);

/** Mobile drawer navigation */
const mobileNavLinkClass = cn(
  "flex min-h-[3rem] items-center border-b border-border/60 py-3 text-base font-medium leading-snug text-body-text",
  focusRingClass
);

const mobileAccordionButtonClass = cn(
  "flex min-h-[3rem] w-full items-center justify-between border-b border-border/60 py-3 text-left text-base font-medium leading-snug text-body-text",
  focusRingClass
);

const mobileSubLinkClass = cn(
  "flex min-h-[3rem] items-center py-2.5 pl-3 text-base leading-snug text-body-text",
  focusRingClass
);

type OpenMenu = "solutions" | "services" | null;

type NavDropdownProps = {
  menuId: "solutions" | "services";
  label: string;
  links: readonly { href: string; label: string }[];
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
    <div className="relative flex items-center">
      <button
        type="button"
        id={`${menuId}-menu-button`}
        className={cn(desktopNavLinkClass, "gap-1.5 whitespace-nowrap")}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" && !isOpen) {
            e.preventDefault();
            setOpenMenu(menuId);
          }
          if (e.key === "Escape" && isOpen) {
            e.preventDefault();
            setOpenMenu(null);
          }
        }}
      >
        {label}
        <ChevronDown
          className={cn(
            "size-4 shrink-0 opacity-60 transition-transform lg:size-[18px]",
            isOpen && "rotate-180"
          )}
          aria-hidden
        />
      </button>
      {isOpen && (
        <div
          id={panelId}
          className="absolute left-0 top-full z-[100] min-w-[260px] pt-1.5"
        >
          <ul className="border border-border bg-white py-2 shadow-lg shadow-primary-navy/5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={desktopDropdownItemClass}
                  onClick={() => setOpenMenu(null)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
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
  links: readonly { href: string; label: string }[];
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const panelId = useId();

  return (
    <div>
      <button
        type="button"
        className={mobileAccordionButtonClass}
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Escape" && expanded) {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        {label}
        <ChevronDown
          className={cn(
            "size-5 shrink-0 opacity-60 transition-transform",
            expanded && "rotate-180"
          )}
          aria-hidden
        />
      </button>
      <ul
        id={panelId}
        hidden={!expanded}
        className="border-b border-border/60 pb-3 pl-1"
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={mobileSubLinkClass}
              onClick={onNavigate}
              tabIndex={expanded ? undefined : -1}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteHeader() {
  const mobileNavId = useId();
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
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const openSolutions = () => {
    setMobileSolutionsOpen((v) => !v);
    setMobileServicesOpen(false);
  };

  const openServices = () => {
    setMobileServicesOpen((v) => !v);
    setMobileSolutionsOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm"
    >
      <div className="content-container flex min-h-[4rem] items-center justify-between gap-2 py-2 sm:min-h-[4.25rem] lg:min-h-[4.75rem] lg:gap-3 lg:py-2.5">
        <GridLogo
          symbolSize={40}
          symbolOnlyBelowSm={false}
          className="min-w-0 max-w-[calc(100%-3.25rem)] shrink py-0 lg:hidden sm:max-w-[calc(100%-3.5rem)] sm:[&_span]:text-lg [&_span]:text-base"
        />
        <GridLogo
          symbolSize={44}
          symbolOnlyBelowSm={false}
          className="hidden shrink-0 py-0 lg:inline-flex sm:[&_span]:text-lg lg:[&_span]:text-xl"
        />

        <div className="hidden items-center gap-2 lg:flex xl:gap-3">
          <nav
            className="relative z-20 flex items-center gap-0.5 xl:gap-1"
            aria-label="Main navigation"
          >
            <NavDropdown
              menuId="solutions"
              label="Solutions"
              links={solutionsNavLinks}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
            <NavDropdown
              menuId="services"
              label="Services"
              links={servicesNavLinks}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
            <Link href="/about" className={desktopNavLinkClass} onClick={() => setOpenMenu(null)}>
              About
            </Link>
            <Link href="/enquiry" className={desktopNavLinkClass} onClick={() => setOpenMenu(null)}>
              Enquiry
            </Link>
          </nav>

          <LetsTalkButton
            location="header_desktop"
            size="md"
            className={cn(desktopNavRowHeight, "shrink-0 text-[16px] lg:text-[17px]")}
          />
        </div>

        <button
          type="button"
          className={cn(
            "relative z-20 ms-auto inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg pe-0.5 ps-2.5 text-primary-navy lg:hidden",
            focusRingClass
          )}
          onClick={() => {
            if (mobileOpen) {
              closeMobile();
            } else {
              setMobileOpen(true);
            }
          }}
          aria-expanded={mobileOpen}
          aria-controls={mobileNavId}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id={mobileNavId}
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-border bg-white lg:hidden sm:max-h-[calc(100dvh-4.25rem)]"
        >
          <nav
            className="content-container flex flex-col py-3 pb-8"
            aria-label="Mobile navigation"
          >
            <Link href="/" className={mobileNavLinkClass} onClick={closeMobile}>
              Home
            </Link>
            <MobileAccordion
              label="Solutions"
              links={solutionsNavLinks}
              expanded={mobileSolutionsOpen}
              onToggle={openSolutions}
              onNavigate={closeMobile}
            />
            <MobileAccordion
              label="Services"
              links={servicesNavLinks}
              expanded={mobileServicesOpen}
              onToggle={openServices}
              onNavigate={closeMobile}
            />
            <Link href="/about" className={mobileNavLinkClass} onClick={closeMobile}>
              About
            </Link>
            <Link href="/enquiry" className={mobileNavLinkClass} onClick={closeMobile}>
              Enquiry
            </Link>
            <div className="mt-6">
              <LetsTalkButton
                location="header_mobile"
                size="lg"
                className="w-full text-base"
                onClick={closeMobile}
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
