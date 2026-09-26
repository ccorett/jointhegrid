import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { ServiceLinks } from "@/components/marketing/service-links";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Digital Workspace",
  description:
    "Communication, collaboration, files, meetings and everyday work in one managed digital workplace. Deployment, administration and adoption across the Caribbean.",
  path: "/digital-workspace",
  keywords: [
    "digital workplace Caribbean",
    "digital workplace Trinidad and Tobago",
    "collaboration platform deployment",
    "workplace administration",
  ],
});

const capabilities = [
  "Email",
  "Calendar",
  "Documents",
  "Files",
  "Meetings",
  "Messaging",
  "Collaboration",
  "Identity",
  "Access",
  "Administration",
  "Security",
];

export default function DigitalWorkspacePage() {
  return (
    <>
      <PageHero
        light
        eyebrow="Solutions"
        visual="hero-grid"
        title="Your workplace."
        titleAccent="Connected."
        description="Communication, collaboration, information and everyday work brought into one connected environment."
        primaryCta={{ label: "Discuss Digital Workspace", href: "/contact" }}
      />

      <section className="border-b border-border bg-white section-y-compact">
        <div className="content-container">
          <SectionHeading
            title="The everyday layer of work"
            description="Most of the organization already lives here: email, calendars, documents, meetings and shared files. The question is whether that environment is set up, managed and used properly."
            className="mb-8"
          />
          <CapabilityGrid items={capabilities} columns={3} />
        </div>
      </section>

      <section className="border-b border-border bg-light-bg section-y-compact">
        <div className="content-container grid gap-8 lg:grid-cols-2 lg:items-center">
          <p className="text-lg leading-relaxed text-body-text md:text-[19px]">
            Move into a connected workplace with users, email, files and access
            planned from the start. Keep the environment under control after
            go-live. Make sure people actually use what they have been given.
          </p>
          <div className="panel-border bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-infrastructure-blue">
              Delivered through
            </p>
            <p className="mt-3 font-display text-2xl font-bold text-primary-navy">
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
