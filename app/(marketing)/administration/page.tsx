import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Administration",
  description:
    "Google Workspace and Gemini Enterprise administration, licensing and security for Caribbean organizations.",
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
        description="After go-live, the environment still needs attention: users, licences, access, policies, security and the day to day work of keeping Workspace and Gemini running properly."
        primaryCta={{ label: "Discuss Administration", href: "/contact" }}
      />

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="Administration that fits your team"
            description="Some organizations need specialist Google administration alongside internal ICT. Others want a dedicated partner for ongoing management. Either way, the focus stays on control, security and continuity."
            className="mb-10 max-w-3xl"
          />
          <CapabilityGrid items={capabilities} columns={2} />
        </div>
      </section>

      <section className="border-t border-border bg-light-bg py-16 md:py-24">
        <div className="content-container max-w-3xl">
          <p className="text-[17px] leading-relaxed text-secondary-text">
            Keep users, licences, access, policies and security under control after
            deployment. As people join, roles change and requirements shift, the
            environment needs consistent management across Workspace and Gemini.
          </p>
        </div>
      </section>

      <PageCtaBand title="Discuss administration" ctaLabel="Discuss Administration" />
    </>
  );
}
