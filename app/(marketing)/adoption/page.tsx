import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { LifecycleSteps } from "@/components/marketing/lifecycle-steps";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Adoption",
  description:
    "Google Workspace and Gemini adoption, training and enablement for Caribbean organizations.",
  path: "/adoption",
  keywords: [
    "Google Workspace adoption",
    "Google Workspace training Caribbean",
    "Gemini enablement",
  ],
});

const programmes = [
  "Employee onboarding",
  "Workspace learning",
  "Gemini enablement",
  "Executive sessions",
  "Manager programmes",
  "Administrator learning",
  "Department champions",
  "Workshops",
  "Office hours",
  "Learning resources",
  "Usage measurement",
  "Reinforcement activities",
];

export default function AdoptionPage() {
  return (
    <>
      <PageHero
        light
        eyebrow="Services"
        title="Turn access into adoption."
        description="Licences alone do not change how people work. Adoption is practical learning, relevant use cases and reinforcement after launch."
        primaryCta={{ label: "Build an Adoption Programme", href: "/contact" }}
      />

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading title="Learn → Apply → Reinforce → Adopt" className="mb-10" />
          <LifecycleSteps
            steps={[
              { label: "Learn" },
              { label: "Apply" },
              { label: "Reinforce" },
              { label: "Adopt" },
            ]}
          />
        </div>
      </section>

      <section className="border-t border-border bg-light-bg py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="Training sits inside adoption"
            description="Workshops, champions, executive sessions and Gemini enablement are part of one adoption programme, not a separate catalogue of courses."
            className="mb-10 max-w-2xl"
          />
          <CapabilityGrid items={programmes} columns={3} />
        </div>
      </section>

      <PageCtaBand
        title="Build an adoption programme"
        ctaLabel="Build an Adoption Programme"
      />
    </>
  );
}
