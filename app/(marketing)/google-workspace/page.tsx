import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { ServiceLinks } from "@/components/marketing/service-links";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Google Workspace",
  description:
    "Google Workspace deployment, administration and adoption for organizations across the Caribbean.",
  path: "/google-workspace",
  keywords: [
    "Google Workspace Trinidad and Tobago",
    "Google Workspace Caribbean",
    "Google Workspace deployment",
    "Google Workspace administration",
    "Google Workspace adoption",
  ],
});

const capabilities = [
  "Gmail",
  "Calendar",
  "Drive",
  "Docs",
  "Sheets",
  "Slides",
  "Meet",
  "Chat",
  "Forms",
  "Administration",
  "Security",
];

export default function GoogleWorkspacePage() {
  return (
    <>
      <PageHero
        light
        eyebrow="Solutions"
        title="Your digital workplace."
        titleAccent="Connected."
        description="Google Workspace is the foundation: communication, files, meetings and collaboration in one place, with the administration and security controls the organization needs."
        primaryCta={{ label: "Discuss Google Workspace", href: "/contact" }}
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
            Move to Google Workspace with users, email, files and access planned
            from the start. Keep the environment under control after go-live. Make
            sure people actually use what they have been given.
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
        title="Discuss Google Workspace"
        ctaLabel="Discuss Google Workspace"
      />
    </>
  );
}
