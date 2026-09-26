import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Administration",
  description:
    "Google Workspace and Gemini Enterprise administration, licensing, security and ongoing management for Caribbean organizations.",
  path: "/administration",
  keywords: [
    "Google Workspace administration",
    "Google Workspace Caribbean",
    "Gemini Enterprise administration",
  ],
});

const capabilities = [
  "Workspace administration",
  "Gemini administration",
  "User lifecycle management",
  "Groups and organizational units",
  "Licensing",
  "Security policies",
  "Support and troubleshooting",
  "Reporting",
  "Vendor escalation",
  "Optimization and review",
];

export default function AdministrationPage() {
  return (
    <>
      <PageHero
        light
        eyebrow="Services"
        title="Keep your workplace working."
        description="Ongoing administration keeps Google Workspace and Gemini Enterprise secure, licensed and optimized—so your digital workplace continues to support the organization."
        primaryCta={{ label: "Discuss Administration", href: "/contact" }}
      />

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="Specialist administration alongside your team"
            description="#jointhegrid can complement your internal ICT team with Google-focused administration, or provide ongoing specialist management where you need dedicated capability."
            className="mb-10 max-w-3xl"
          />
          <CapabilityGrid items={capabilities} columns={2} />
        </div>
      </section>

      <section className="border-t border-border bg-light-bg py-16 md:py-24">
        <div className="content-container max-w-3xl">
          <h2 className="heading-section text-2xl text-primary-navy md:text-3xl">
            Consistency after go-live
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-secondary-text">
            Deployment establishes the environment. Administration keeps users,
            policies and integrations aligned as people join, roles change and
            requirements evolve—across both Workspace and Gemini.
          </p>
        </div>
      </section>

      <PageCtaBand
        title="Discuss administration for your organization"
        ctaLabel="Discuss Administration"
      />
    </>
  );
}
