import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { ServiceLinks } from "@/components/marketing/service-links";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Google Workspace",
  description:
    "Google Workspace deployment, administration and adoption for organizations in Trinidad & Tobago and the Caribbean.",
  path: "/google-workspace",
  keywords: [
    "Google Workspace Trinidad and Tobago",
    "Google Workspace Caribbean",
    "Google Workspace deployment",
    "Google Workspace administration",
    "Google Workspace adoption",
    "digital workplace Trinidad and Tobago",
  ],
});

const apps = [
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
        description="Google Workspace is the foundation of your organization's digital workplace—where communication, collaboration and information come together under one secure, manageable environment."
        primaryCta={{ label: "Discuss Google Workspace", href: "/contact" }}
      />

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="Where your organization works every day."
            description="Workspace is not a list of apps—it is the connected layer your people use to communicate, create and coordinate. #jointhegrid helps you deploy, administer and adopt that environment so it works for your organization."
            className="mb-12 max-w-3xl"
          />
          <CapabilityGrid items={apps} columns={3} />
        </div>
      </section>

      <section className="border-y border-border bg-light-bg py-16 md:py-24">
        <div className="content-container max-w-3xl">
          <h2 className="heading-section text-2xl text-primary-navy md:text-3xl">
            Outcomes, not a product catalogue
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-secondary-text">
            We focus on how Gmail, Drive, Meet and the rest of Workspace support
            organizational productivity—backed by the administration and security
            controls you need. Migration from legacy systems (including Microsoft
            environments), identity integration and rollout planning are part of
            how we help you build a workplace that stays connected as you grow.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="Deploy. Administer. Adopt."
            description="Google Workspace is most valuable when it is implemented well, managed consistently and used effectively."
            className="mb-10 max-w-2xl"
          />
          <ServiceLinks />
        </div>
      </section>

      <PageCtaBand
        title="Discuss Google Workspace for your organization"
        ctaLabel="Discuss Google Workspace"
      />
    </>
  );
}
