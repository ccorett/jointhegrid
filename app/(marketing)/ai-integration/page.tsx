import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { ServiceLinks } from "@/components/marketing/service-links";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Integration",
  description:
    "Workplace AI with access controls, governance and adoption, integrated with the people, information and workflows already in your organization.",
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
        visual="symbol-light"
        title="AI that fits"
        titleAccent="the workplace."
        description="Intelligent tools introduced into the workplace with the access, information and controls required for organizational use."
        primaryCta={{ label: "Discuss AI Integration", href: "/contact" }}
      />

      <section className="border-b border-border bg-white section-y-compact">
        <div className="content-container">
          <SectionHeading
            title="Workplace AI, not a side project"
            description="Intelligent tools are most useful when they sit inside how the organization already works, with sensible controls, clear access and adoption that matches real roles."
            className="mb-8"
          />
          <CapabilityGrid items={focusAreas} columns={2} />
        </div>
      </section>

      <section className="border-b border-border bg-primary-navy section-y-compact text-white">
        <div className="content-container max-w-4xl">
          <p className="text-lg leading-relaxed text-white/75 md:text-[19px]">
            Bring AI into everyday work with practical use cases, guided learning
            and clear governance. The same deployment, administration and adoption
            discipline applies here as it does to the rest of the workplace.
          </p>
        </div>
      </section>

      <section className="section-y-compact">
        <div className="content-container">
          <SectionHeading title="Deploy. Administer. Adopt." className="mb-8" />
          <ServiceLinks />
        </div>
      </section>

      <PageCtaBand title="Discuss AI integration" ctaLabel="Let's Talk" />
    </>
  );
}
