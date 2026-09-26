import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { LifecycleSteps } from "@/components/marketing/lifecycle-steps";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Adoption",
  description:
    "Digital workplace and AI adoption: training, enablement and reinforcement for Caribbean organizations.",
  path: "/adoption",
  keywords: [
    "digital workplace adoption",
    "workplace training Caribbean",
    "AI adoption workplace",
  ],
});

const programmes = [
  "Employee onboarding",
  "Workplace learning",
  "AI use cases",
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
        visual="symbol-light"
        title="Make it part"
        titleAccent="of the work."
        description="Make new technology fit the way people actually work: onboarding, practical learning, AI use cases, champions and continued reinforcement."
        primaryCta={{ label: "Build an Adoption Programme", href: "/contact" }}
      />

      <section className="border-b border-border bg-primary-navy section-y-compact text-white">
        <div className="content-container">
          <SectionHeading
            dark
            title="Learn → Apply → Reinforce → Adopt"
            description="Adoption is a continuous cycle. It is not a one-time training event."
            className="mb-6"
          />
          <div className="panel-border-dark bg-white/5 p-6 md:p-8">
            <LifecycleSteps
              dark
              steps={[
                { label: "Learn" },
                { label: "Apply" },
                { label: "Reinforce" },
                { label: "Adopt" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section-y-compact">
        <div className="content-container">
          <SectionHeading
            title="Training sits inside adoption"
            description="Workshops, champions, executive sessions and practical AI enablement are part of one adoption programme, not a separate catalogue of courses."
            className="mb-8"
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
