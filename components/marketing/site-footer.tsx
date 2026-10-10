import Link from "next/link";
import { GridLogo } from "@/components/brand/grid-logo";
import { PHONE_DISPLAY, SALES_EMAIL, SUPPORT_EMAIL } from "@/lib/contact";
import { WhatsAppPhoneLink } from "@/components/marketing/whatsapp-phone-link";
import { cn } from "@/lib/utils";

const footerLinkClass = cn(
  "inline-flex min-h-11 items-center text-[15px] text-white/80 hover:text-white md:text-base",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-primary-navy"
);

const footerLinks = {
  solutions: [
    { href: "/digital-workspace", label: "Digital Workspace" },
    { href: "/enterprise-intelligence", label: "Enterprise Intelligence" },
  ],
  services: [
    { href: "/deployment", label: "Deployment" },
    { href: "/administration", label: "Administration" },
    { href: "/adoption", label: "Adoption" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/enquiry", label: "Enquiry" },
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
            <p className="mt-4 max-w-sm text-base leading-relaxed text-white/80 md:text-[17px] md:leading-relaxed lg:text-lg">
              Digital Workspace and Enterprise Intelligence, delivered through
              deployment, administration and adoption for organisations across
              the Caribbean.
            </p>
            <p className="mt-3 text-[15px] font-semibold uppercase tracking-[0.12em] text-white/70 md:text-base lg:text-[17px] lg:leading-snug">
              People · Information · Apps · AI
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <div>
              <h3 className="text-[15px] font-bold uppercase tracking-wider text-white/70 md:text-base">
                Solutions
              </h3>
              <ul className="mt-3 space-y-1">
                {footerLinks.solutions.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={footerLinkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[15px] font-bold uppercase tracking-wider text-white/70 md:text-base">
                Services
              </h3>
              <ul className="mt-3 space-y-1">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={footerLinkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[15px] font-bold uppercase tracking-wider text-white/70 md:text-base">
                Company
              </h3>
              <ul className="mt-3 space-y-1">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={footerLinkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[15px] font-bold uppercase tracking-wider text-white/70 md:text-base">
                Contact
              </h3>
              <ul className="mt-3 space-y-1 text-[15px] md:text-base">
                <li>
                  <a href={`mailto:${SALES_EMAIL}`} className={footerLinkClass}>
                    {SALES_EMAIL}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SUPPORT_EMAIL}`} className={footerLinkClass}>
                    {SUPPORT_EMAIL}
                  </a>
                </li>
                <li>
                  <WhatsAppPhoneLink location="footer" className={footerLinkClass}>
                    {PHONE_DISPLAY}
                  </WhatsAppPhoneLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-[15px] text-white/65 md:text-base">
            © {new Date().getFullYear()} GRID Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
