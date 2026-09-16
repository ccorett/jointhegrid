import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Administration",
  description:
    "Google Workspace and Gemini Enterprise administration, security, licensing and ongoing management.",
};

const capabilities = [
  "Workspace administration",
  "Gemini administration",
  "User lifecycle management",
  "Groups and organizational units",
  "Licensing management",
  "Security policies",
  "Support and troubleshooting",
  "Reporting and analytics",
  "Vendor escalation",
  "Optimization and review",
];

export default function AdministrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Keep the GRID working."
        description="Ongoing administration services for Google Workspace and Gemini Enterprise—keeping your connected digital workplace secure, optimized and supported."
        primaryCta={{ label: "Discuss Administration", href: "/contact" }}
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="Administration that complements your team."
            description="Whether your organization has an internal ICT team or needs dedicated Google administration, #jointhegrid provides ongoing management, security and support for your digital workplace."
            className="mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item}
                className="border-l-2 border-infrastructure-blue/30 py-2 pl-4 text-sm font-light text-body-text"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-navy py-16 md:py-24">
        <div className="content-container text-center">
          <h2 className="text-2xl font-extralight text-white md:text-3xl">
            Discuss administration for your organization
          </h2>
          <div className="mt-6">
            <Button href="/contact" size="lg">
              Discuss Administration
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
