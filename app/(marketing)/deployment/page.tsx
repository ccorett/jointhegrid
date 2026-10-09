import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { LifecycleSteps } from "@/components/marketing/lifecycle-steps";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Deployment",
  description:
    "Deploy Digital Workspace and Enterprise Intelligence: configuration, migration, security, integration, testing and rollout across the Caribbean.",
  path: "/deployment",
  keywords: [
    "digital workspace deployment",
    "enterprise intelligence deployment",
    "workplace migration Caribbean",
    "workplace rollout",
  ],
});

const lifecycle = [
  "Discover",
  "Configure",
  "Migrate",
  "Pilot",
  "Deploy",
  "Hypercare",
];

const capabilities = [
  "Workspace environment configuration",
  "Enterprise intelligence setup",
  "Platform and workload migration",
  "Identity integration",
  "Security configuration",
  "Information source connection",
  "Integration testing",
  "Data migration",
  "Production rollout",
  "Hypercare support",
];

export default function DeploymentPage() {
  return (
    <>
      <PageHero
        light
        eyebrow="Services"
        visual="symbol-light"
        title="Get the foundation"
        titleAccent="right."
        description="Implement and configure digital workspace and enterprise intelligence solutions, including applicable migrations, security, integration, testing and rollout."
        primaryCta={{ label: "Plan a Deployment", href: "/enquiry" }}
      />

      <section className="border-b border-border bg-white section-y-compact">
        <div className="content-container">
          <SectionHeading
            title="The deployment lifecycle"
            centered
            className="mb-10 md:mb-12"
          />
          <LifecycleSteps
            layout="spread"
            steps={lifecycle.map((label) => ({ label }))}
          />
        </div>
      </section>

      <section className="border-b border-border bg-light-bg section-y-compact">
        <div className="content-container">
          <SectionHeading
            title="What goes into deployment"
            description="Each organization starts from a different place. The work spans both core solutions: configuration, migration paths, identity, supported integrations, information, security and a controlled move into production."
            className="mb-8"
          />
          <CapabilityGrid items={capabilities} columns={2} />
        </div>
      </section>

      <PageCtaBand title="Plan a deployment" ctaLabel="Plan a Deployment" />
    </>
  );
}
