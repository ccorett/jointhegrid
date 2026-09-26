import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { ServiceLinks } from "@/components/marketing/service-links";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gemini Enterprise",
  description:
    "Gemini Enterprise deployment, governance and adoption integrated with your Google Workspace digital workplace across the Caribbean.",
  path: "/gemini-enterprise",
  keywords: [
    "Gemini Enterprise Caribbean",
    "Gemini Enterprise Trinidad and Tobago",
    "AI integration Caribbean",
    "Google Workspace AI",
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
        description="Gemini Enterprise brings AI into organizational work alongside Google Workspace—with deployment, administration, governance and adoption designed for enterprise use, not isolated experiments."
        primaryCta={{ label: "Discuss Gemini Enterprise", href: "/contact" }}
      />

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="AI inside the workplace—not beside it."
            description="#jointhegrid is a digital workplace specialist, not a generic AI consultancy. We help you integrate Gemini into the systems, workflows and responsibilities your organization already has."
            className="mb-12 max-w-3xl"
          />
          <CapabilityGrid items={focusAreas} columns={2} />
        </div>
      </section>

      <section className="border-y border-border bg-primary-navy py-16 text-white md:py-24">
        <div className="content-container max-w-3xl">
          <h2 className="heading-section text-2xl md:text-3xl">
            Governance and adoption together
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-white/70">
            Effective Gemini use depends on clear policies, appropriate access,
            administrator capability and programmes that help people apply AI
            responsibly in their roles. We connect Gemini deployment to the same
            Deploy, Administer, Adopt discipline we apply to Workspace.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading title="How we support Gemini Enterprise" className="mb-10" />
          <ServiceLinks />
        </div>
      </section>

      <PageCtaBand
        title="Discuss Gemini Enterprise for your organization"
        ctaLabel="Discuss Gemini Enterprise"
      />
    </>
  );
}
