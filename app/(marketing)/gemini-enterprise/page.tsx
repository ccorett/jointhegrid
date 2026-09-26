import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { ServiceLinks } from "@/components/marketing/service-links";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gemini Enterprise",
  description:
    "Gemini Enterprise integration, governance and adoption alongside Google Workspace for Caribbean organizations.",
  path: "/gemini-enterprise",
  keywords: [
    "Gemini Enterprise Caribbean",
    "Gemini Enterprise Trinidad and Tobago",
    "AI integration Caribbean",
  ],
});

const focusAreas = [
  "Organizational integration",
  "Employee use",
  "Administration",
  "Governance",
  "Responsible use",
  "Role-based applications",
  "Adoption programmes",
  "Learning and enablement",
];

export default function GeminiEnterprisePage() {
  return (
    <>
      <PageHero
        light
        eyebrow="Solutions"
        title="AI, integrated into the way"
        titleAccent="your organization works."
        description="Gemini belongs in the same digital workplace as email, files and meetings: deployed with clear access, governed properly and adopted through practical use."
        primaryCta={{ label: "Discuss Gemini Enterprise", href: "/contact" }}
      />

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="Workplace AI, not a side project"
            description="Gemini Enterprise is most useful when it sits inside how the organization already works. That means integration with Workspace, sensible controls and adoption that matches real roles."
            className="mb-12 max-w-3xl"
          />
          <CapabilityGrid items={focusAreas} columns={2} />
        </div>
      </section>

      <section className="border-y border-border bg-primary-navy py-16 text-white md:py-24">
        <div className="content-container max-w-3xl">
          <p className="text-[17px] leading-relaxed text-white/70">
            Put Gemini into everyday work with practical use cases, guided learning
            and clear governance. The same deployment, administration and adoption
            discipline applies here as it does to Workspace.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading title="Deploy. Administer. Adopt." className="mb-10 max-w-xl" />
          <ServiceLinks />
        </div>
      </section>

      <PageCtaBand
        title="Discuss Gemini Enterprise"
        ctaLabel="Discuss Gemini Enterprise"
      />
    </>
  );
}
