import Link from "next/link";
import { GridLogo } from "@/components/brand/grid-logo";
import { PHONE_DISPLAY, SALES_EMAIL, WHATSAPP_URL } from "@/lib/contact";

const footerLinks = {
  solutions: [
    { href: "/digital-workspace", label: "Digital Workspace" },
    { href: "/ai-integration", label: "AI Integration" },
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
      <div className="content-container py-10 md:py-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <GridLogo reversed symbolOnlyBelowSm={false} symbolSize={36} />
            <p className="mt-4 max-w-sm text-base leading-relaxed text-white/70 md:text-[17px] md:leading-relaxed lg:text-lg">
              Digital workplace and AI integration, with deployment, administration
              and adoption for organizations across the Caribbean.
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/55 md:text-base lg:text-[17px] lg:leading-snug">
              People · Information · Apps · AI
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
                Solutions
              </h3>
              <ul className="mt-3 space-y-2.5">
                {footerLinks.solutions.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-white/75 hover:text-white md:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
                Services
              </h3>
              <ul className="mt-3 space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-white/75 hover:text-white md:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
                Company
              </h3>
              <ul className="mt-3 space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-white/75 hover:text-white md:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
                Contact
              </h3>
              <ul className="mt-3 space-y-2.5 text-[15px] md:text-base">
                <li>
                  <a
                    href={`mailto:${SALES_EMAIL}`}
                    className="text-secondary-blue hover:text-white"
                  >
                    {SALES_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-[13px] text-white/45 md:text-sm">
            © {new Date().getFullYear()} #jointhegrid
          </p>
        </div>
      </div>
    </footer>
  );
}
