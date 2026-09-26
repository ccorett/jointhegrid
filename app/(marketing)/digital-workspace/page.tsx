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
        title="Your workplace."
        titleAccent="Connected."
        description="Bring communication, collaboration, information and everyday work into one managed environment."
        primaryCta={{ label: "Discuss Digital Workspace", href: "/contact" }}
      />

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="The everyday layer of work"
            description="Most of the organization already lives here: email, calendars, documents, meetings and shared files. The question is whether that environment is set up, managed and used properly."
            className="mb-12 max-w-3xl"
          />
          <CapabilityGrid items={capabilities} columns={3} />
        </div>
      </section>

      <section className="border-y border-border bg-light-bg py-16 md:py-24">
        <div className="content-container max-w-3xl">
          <p className="text-[17px] leading-relaxed text-secondary-text">
            Move into a connected workplace with users, email, files and access
            planned from the start. Keep the environment under control after
            go-live. Make sure people actually use what they have been given.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading title="Deploy. Administer. Adopt." className="mb-10 max-w-xl" />
          <ServiceLinks />
        </div>
      </section>

      <PageCtaBand
        title="Discuss digital workspace"
        ctaLabel="Let's Talk"
      />
    </>
  );
}
