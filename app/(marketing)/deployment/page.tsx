import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { LifecycleSteps } from "@/components/marketing/lifecycle-steps";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Deployment",
  description:
    "Google Workspace and Gemini Enterprise deployment, migration and rollout services in Trinidad & Tobago and the Caribbean.",
  path: "/deployment",
  keywords: [
    "Google Workspace deployment",
    "Microsoft 365 to Google Workspace migration",
    "Google Workspace Caribbean",
    "Gemini Enterprise deployment",
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
  "Workspace configuration",
  "Gemini deployment",
  "Microsoft 365 migration",
  "Identity integration",
  "Security configuration",
  "Data migration",
  "Pilot programmes",
  "Production rollout",
  "Validation",
  "Hypercare support",
];

export default function DeploymentPage() {
  return (
    <>
      <PageHero
        light
        eyebrow="Services"
        title="Move with confidence."
        description="Structured deployment for Google Workspace and Gemini Enterprise—from discovery and configuration through migration, pilot, production rollout and hypercare."
        primaryCta={{ label: "Plan Your Deployment", href: "/contact" }}
      />

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading title="The deployment lifecycle" className="mb-10" />
          <LifecycleSteps steps={lifecycle.map((label) => ({ label }))} />
        </div>
      </section>

      <section className="border-t border-border bg-light-bg py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="What deployment includes"
            description="Every organization is different. We align configuration, migration and rollout to your identity systems, security requirements and operational readiness."
            className="mb-10 max-w-2xl"
          />
          <CapabilityGrid items={capabilities} columns={2} />
        </div>
      </section>

      <PageCtaBand
        title="Plan a deployment with #jointhegrid"
        ctaLabel="Plan Your Deployment"
      />
    </>
  );
}
