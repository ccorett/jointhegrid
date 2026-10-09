import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { ServiceLinks } from "@/components/marketing/service-links";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Digital Workspace",
  description:
    "Connect people, information and applications through secure productivity and collaboration. Deployment, administration and adoption across the Caribbean.",
  path: "/digital-workspace",
  keywords: [
    "digital workspace Caribbean",
    "digital workplace Trinidad and Tobago",
    "collaboration platform deployment",
    "workplace administration",
  ],
});

const capabilities = [
  "Business email and communication",
  "Productivity and collaboration",
  "Document creation and sharing",
  "Cloud-based file access",
  "Meetings and messaging",
  "Workspace migration and deployment",
  "Identity and access management",
  "Security and administration",
  "User onboarding and adoption",
  "Ongoing workspace support",
];

export default function DigitalWorkspacePage() {
  return (
    <>
      <PageHero
        light
        eyebrow="Solutions"
        visual="hero-grid"
        title="Connect your people,"
        titleAccent="information and applications."
        description="Secure, integrated productivity and collaboration that brings communication, file sharing and administration into one connected digital environment."
        primaryCta={{ label: "Discuss Digital Workspace", href: "/enquiry" }}
      />

      <section className="border-b border-border bg-white section-y-compact">
        <div className="content-container">
          <SectionHeading
            title="Productive collaboration in one environment"
            description="THE GRID deploys, administers and drives adoption of digital workspace solutions so organisations communicate, collaborate and operate more effectively."
            className="mb-8"
          />
          <CapabilityGrid
            items={capabilities}
            columns={3}
            className="md:grid-cols-2 lg:grid-cols-3 [&_li]:py-4 md:[&_li]:py-[1.125rem] lg:[&_li]:py-5"
          />
        </div>
      </section>

      <section className="border-b border-border bg-light-bg section-y-compact">
        <div className="content-container grid gap-8 lg:grid-cols-2 lg:items-center">
          <p className="text-lg leading-relaxed text-body-text md:text-[19px]">
            Workspace solutions should work with identity, applications and
            information systems already in use. Where supported, integration and
            migration are planned so the environment fits the organisation, not
            the other way around.
          </p>
          <div className="panel-border bg-white p-6 md:p-8">
            <p className="text-[15px] font-bold uppercase tracking-wide text-infrastructure-blue md:text-base">
              Delivered through
            </p>
            <p className="mt-3 font-display text-2xl font-bold text-primary-navy md:text-[1.75rem]">
              Deployment · Administration · Adoption
            </p>
          </div>
        </div>
      </section>

      <section className="section-y-compact">
        <div className="content-container">
          <SectionHeading title="Deploy. Administer. Adopt." className="mb-8" />
          <ServiceLinks />
        </div>
      </section>

      <PageCtaBand title="Discuss digital workspace" ctaLabel="Let's Talk" />
    </>
  );
}
