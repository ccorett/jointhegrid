import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology Administration Services | #jointheGRID",
  description:
    "Ongoing management of users, access, licences, security, policies, resources and support.",
  path: "/administration",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/#services" },
  { name: "Administration", path: "/administration" },
] as const;

const capabilities = [
  "Workspace administration",
  "Enterprise intelligence administration",
  "User lifecycle management",
  "Access and licensing",
  "Security policies and governance",
  "Monitoring and performance",
  "Information access controls",
  "Support and troubleshooting",
  "Reporting",
  "Platform escalation",
];

export default function AdministrationPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[...breadcrumbs]} />
      <PageHero
        light
        eyebrow="Services"
        visual="symbol-light"
        title="Keep it under"
        titleAccent="control."
        description="Manage access, configuration, security, licences, governance, performance and ongoing technical support for both core solutions."
        primaryCta={{ label: "Discuss Administration", href: "/enquiry" }}
      />

      <section className="border-b border-border bg-white section-y-compact">
        <div className="content-container">
          <SectionHeading
            title="Administration that fits your team"
            description="Manage digital workspace and enterprise intelligence as operational environments. Some organizations need specialist support alongside internal ICT; others want a dedicated partner for ongoing management."
            className="mb-8"
          />
          <CapabilityGrid items={capabilities} columns={2} />
        </div>
      </section>

      <section className="border-b border-border bg-light-bg section-y-compact">
        <div className="content-container max-w-4xl">
          <p className="text-lg leading-relaxed text-body-text md:text-[19px]">
            Keep users, access, policies, security and information boundaries under
            control after deployment. Monitoring, backup, cost and governance need
            regular attention as requirements change.
          </p>
        </div>
      </section>

      <PageCtaBand title="Discuss administration" ctaLabel="Discuss Administration" />
    </>
  );
}
