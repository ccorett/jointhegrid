import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { LifecycleSteps } from "@/components/marketing/lifecycle-steps";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Deployment",
  description:
    "Structured Google Workspace and Gemini Enterprise deployment, migration and rollout services.",
};

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
  "Microsoft migration",
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
        eyebrow="Services"
        title="Move with confidence."
        description="Structured deployment services for Google Workspace and Gemini Enterprise—from discovery through production rollout and hypercare."
        primaryCta={{ label: "Plan Your Deployment", href: "/contact" }}
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="content-container">
          <SectionHeading title="The deployment lifecycle." className="mb-10" />
          <LifecycleSteps
            steps={lifecycle.map((label) => ({ label }))}
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
            Plan your deployment with #jointhegrid
          </h2>
          <div className="mt-6">
            <Button href="/contact" size="lg">
              Plan Your Deployment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
