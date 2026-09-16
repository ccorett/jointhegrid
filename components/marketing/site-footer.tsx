import Link from "next/link";
import { GridSymbol } from "@/components/brand/grid-symbol";
import { GridWordmark } from "@/components/brand/grid-wordmark";

const footerLinks = {
  solutions: [
    { href: "/google-workspace", label: "Google Workspace" },
    { href: "/gemini-enterprise", label: "Gemini Enterprise" },
  ],
  services: [
    { href: "/deployment", label: "Deployment" },
    { href: "/administration", label: "Administration" },
    { href: "/adoption", label: "Adoption" },
  ],
  platform: [{ href: "/ai-credits", label: "AI Credits" }],
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary-navy text-white">
      <div className="content-container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <GridSymbol size={36} variant="favicon" />
              <GridWordmark reversed showTagline />
            </div>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-white/70">
              Digital workplace solutions for organizations deploying, administering
              and adopting Google Workspace and Gemini Enterprise.
            </p>
            <p className="mt-4 text-xs font-light uppercase tracking-[0.15em] text-white/50">
              Organisations | Communities | A stronger tomorrow
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-white/50">
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/80 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-white/50">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/80 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-white/50">
              Platform
            </h3>
            <ul className="mb-6 space-y-2.5">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/80 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-white/50">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/80 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs font-light text-white/40">
            © {new Date().getFullYear()} Global Resilient Infrastructure &amp;
            Digitalisation Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
