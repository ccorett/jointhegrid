import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Administration",
  description:
    "Digital workplace administration — users, licences, access, policies, security and day to day management for Caribbean organizations.",
  path: "/administration",
  keywords: [
    "digital workplace administration",
    "workplace licensing Caribbean",
    "identity and access management",
  ],
});

const capabilities = [
  "Workplace administration",
  "AI access administration",
  "User lifecycle management",
  "Groups and organizational units",
  "Licensing",
  "Security policies",
  "Support and troubleshooting",
  "Reporting",
  "Platform escalation",
  "Optimization and review",
];

export default function AdministrationPage() {
  return (
    <>
      <PageHero
        light
        eyebrow="Services"
        title="Keep it under"
        titleAccent="control."
        description="Users, licences, access, policies, security and the day to day management of the workplace."
        primaryCta={{ label: "Discuss Administration", href: "/contact" }}
      />

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="Administration that fits your team"
            description="Manage the connected workplace as an environment rather than a collection of isolated tools. Some organizations need specialist support alongside internal ICT; others want a dedicated partner for ongoing management."
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
            environment needs consistent management across the workplace and
            integrated AI tools.
          </p>
        </div>
      </section>

      <PageCtaBand title="Discuss administration" ctaLabel="Discuss Administration" />
    </>
  );
}
