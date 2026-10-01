import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Administration",
  description:
    "Digital workplace administration: users, licences, access, policies, security and day to day management for Caribbean organizations.",
  path: "/administration",
  keywords: [
    "digital workplace administration",
    "workplace licensing Caribbean",
    "identity and access management",
  ],
});

const capabilities = [
  "Workplace administration",
  "Cloud resource management",
  "Monitoring and alerting",
  "AI access administration",
  "User lifecycle management",
  "Access and licensing",
  "Security policies",
  "Backup coordination",
  "Cost management",
  "Ongoing cloud administration",
];

export default function AdministrationPage() {
  return (
    <>
      <PageHero
        light
        eyebrow="Services"
        visual="symbol-light"
        title="Keep it under"
        titleAccent="control."
        description="Users, licences, access, policies, security and the day to day management of the workplace."
        primaryCta={{ label: "Discuss Administration", href: "/contact" }}
      />

      <section className="border-b border-border bg-white section-y-compact">
        <div className="content-container">
          <SectionHeading
            title="Administration that fits your team"
            description="Manage the connected workplace and cloud resources as one operational picture. Some organizations need specialist support alongside internal ICT; others want a dedicated partner for ongoing management."
            className="mb-8"
          />
          <CapabilityGrid items={capabilities} columns={2} />
        </div>
      </section>

      <section className="border-b border-border bg-light-bg section-y-compact">
        <div className="content-container max-w-4xl">
          <p className="text-lg leading-relaxed text-body-text md:text-[19px]">
            Keep users, resources, access, policies and security under control after
            deployment. Monitoring, backup and cost need regular attention alongside
            workplace platforms and integrated AI tools.
          </p>
        </div>
      </section>

      <PageCtaBand title="Discuss administration" ctaLabel="Discuss Administration" />
    </>
  );
}
