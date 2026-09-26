import Link from "next/link";
import { GridLogo } from "@/components/brand/grid-logo";
import { PHONE_DISPLAY, SALES_EMAIL, WHATSAPP_URL } from "@/lib/contact";

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
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-primary-navy text-white">
      <div className="content-container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <GridLogo reversed />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/75">
              Digital workplace solutions for organizations deploying,
              administering and adopting Google Workspace and Gemini Enterprise.
            </p>
            <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
              People | Apps | Information | AI | Together
            </p>
            <div className="mt-8 space-y-2 text-sm">
              <a
                href={`mailto:${SALES_EMAIL}`}
                className="block font-medium text-secondary-blue hover:text-white"
              >
                {SALES_EMAIL}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-medium text-white/80 hover:text-white"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:gap-8">
            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-white/45">
                Solutions
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.solutions.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-white/45">
                Services
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-white/45">
                Company
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Global Resilient Infrastructure &amp;
            Digitalisation Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
