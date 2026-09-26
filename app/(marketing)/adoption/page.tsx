import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { LifecycleSteps } from "@/components/marketing/lifecycle-steps";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Adoption",
  description:
    "Google Workspace and Gemini Enterprise adoption, training, champions programmes and reinforcement across the Caribbean.",
  path: "/adoption",
  keywords: [
    "Google Workspace adoption",
    "Google Workspace training Caribbean",
    "Gemini enablement",
    "digital workplace adoption",
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
        description="Access to technology is only the start. Adoption programmes help people use Google Workspace and Gemini effectively—turning deployment into organizational value."
        primaryCta={{ label: "Build an Adoption Programme", href: "/contact" }}
      />

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading title="The adoption journey" className="mb-10" />
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
            title="Training lives inside Adoption"
            description="We do not treat training as a separate service line. Learning, workshops, champions and reinforcement are part of how we help your organization adopt the workplace you have invested in."
            className="mb-10 max-w-2xl"
          />
          <CapabilityGrid items={programmes} columns={3} />
        </div>
      </section>

      <PageCtaBand
        title="Build an adoption programme with #jointhegrid"
        ctaLabel="Build an Adoption Programme"
      />
    </>
  );
}
