import Link from "next/link";
import { PageViewBeacon } from "@/components/analytics/page-view-beacon";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { LifecycleSteps } from "@/components/marketing/lifecycle-steps";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology Deployment Services | #jointheGRID",
  description:
    "Structured deployment covering configuration, migration, security, rollout and production readiness.",
  path: "/deployment",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/#services" },
  { name: "Deployment", path: "/deployment" },
] as const;

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
  "Production rollout",
  "Hypercare support",
];

export default function DeploymentPage() {
  return (
    <>
      <PageViewBeacon event="service_view" name="deployment" />
      <BreadcrumbJsonLd items={[...breadcrumbs]} />
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
            description="Each organisation starts from a different place. The work spans both core solutions: configuration, migration paths, identity, supported integrations, information, security and a controlled move into production."
            className="mb-8"
          />
          <p className="mb-8 max-w-3xl text-lg text-body-text md:text-[19px]">
            Explore{" "}
            <Link href="/digital-workspace" className="font-semibold text-infrastructure-blue hover:underline">
              Digital Workspace
            </Link>
            {" "}and{" "}
            <Link href="/enterprise-intelligence" className="font-semibold text-infrastructure-blue hover:underline">
              Enterprise Intelligence
            </Link>
            .
          </p>
          <CapabilityGrid
            items={capabilities}
            columns={2}
            className="sm:[&>li:last-child:nth-child(odd)]:col-span-2"
          />
        </div>
      </section>

      <PageCtaBand title="Plan a deployment" ctaLabel="Plan a Deployment" />
    </>
  );
}
