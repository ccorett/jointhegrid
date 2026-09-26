import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { ServiceLinks } from "@/components/marketing/service-links";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Integration",
  description:
    "Workplace AI with access controls, governance and adoption — integrated with the people, information and workflows already in your organization.",
  path: "/ai-integration",
  keywords: [
    "workplace AI Caribbean",
    "AI integration digital workplace",
    "organizational AI adoption",
    "AI governance workplace",
  ],
});

const focusAreas = [
  "Workplace AI",
  "Information access",
  "Organizational use",
  "Access controls",
  "Governance",
  "Administration",
  "Practical use cases",
  "Adoption",
];

export default function AiIntegrationPage() {
  return (
    <>
      <PageHero
        light
        eyebrow="Solutions"
        title="AI that fits"
        titleAccent="the workplace."
        description="Put intelligent tools closer to the information, workflows and people already doing the work."
        primaryCta={{ label: "Discuss AI Integration", href: "/contact" }}
      />

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="Workplace AI, not a side project"
            description="Intelligent tools are most useful when they sit inside how the organization already works — with sensible controls, clear access and adoption that matches real roles."
            className="mb-12 max-w-3xl"
          />
          <CapabilityGrid items={focusAreas} columns={2} />
        </div>
      </section>

      <section className="border-y border-border bg-primary-navy py-16 text-white md:py-24">
        <div className="content-container max-w-3xl">
          <p className="text-[17px] leading-relaxed text-white/70">
            Bring AI into everyday work with practical use cases, guided learning
            and clear governance. The same deployment, administration and adoption
            discipline applies here as it does to the rest of the workplace.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading title="Deploy. Administer. Adopt." className="mb-10 max-w-xl" />
          <ServiceLinks />
        </div>
      </section>

      <PageCtaBand title="Discuss AI integration" ctaLabel="Let's Talk" />
    </>
  );
}
