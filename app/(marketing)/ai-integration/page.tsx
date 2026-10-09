import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { PageViewBeacon } from "@/components/analytics/page-view-beacon";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { ServiceLinks } from "@/components/marketing/service-links";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Integration for Organizations | #jointheGRID",
  description:
    "Integrate intelligent tools into everyday organizational work with practical controls, administration and adoption.",
  path: "/ai-integration",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/#solutions" },
  { name: "AI Integration", path: "/ai-integration" },
] as const;

const capabilities = [
  "Enterprise search",
  "Intelligent knowledge retrieval",
  "Natural-language queries",
  "Document and records intelligence",
  "Connected information sources",
  "Cross-platform information access",
  "Intelligent enterprise assistance",
  "Knowledge discovery and summarisation",
  "Security and access governance",
  "User onboarding and adoption",
];

export default function EnterpriseIntelligencePage() {
  return (
    <>
      <PageViewBeacon event="solution_view" name="ai-integration" />
      <BreadcrumbJsonLd items={[...breadcrumbs]} />
      <PageHero
        light
        eyebrow="Solutions"
        visual="symbol-light"
        title="Information that works"
        titleAccent="for the organisation."
        description="Make organisational information accessible, searchable and useful through intelligent search, connected knowledge and enterprise assistance."
        primaryCta={{ label: "Discuss Enterprise Intelligence", href: "/enquiry" }}
      />

      <section className="border-b border-border bg-white section-y-compact">
        <div className="content-container">
          <SectionHeading
            title="One enterprise intelligence capability"
            description="THE GRID connects knowledge across supported systems so employees can search, query, understand and retrieve relevant information with appropriate access controls. Scope and integrations are confirmed during discovery."
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
            Organisations already run different applications, identity systems,
            storage platforms and records environments. Where supported, enterprise
            intelligence works with those existing technologies rather than
            requiring everything to be replaced.
          </p>
          <div className="panel-border bg-white p-6 md:p-8">
            <p className="text-[15px] font-bold uppercase tracking-wide text-infrastructure-blue md:text-base">
              Delivered through
            </p>
            <p className="mt-3 font-display text-2xl font-bold text-primary-navy md:text-[1.75rem]">
              <Link href="/deployment" className="hover:text-infrastructure-blue">
                Deployment
              </Link>
              {" · "}
              <Link href="/administration" className="hover:text-infrastructure-blue">
                Administration
              </Link>
              {" · "}
              <Link href="/adoption" className="hover:text-infrastructure-blue">
                Adoption
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-dark-band section-y-compact text-white">
        <div className="content-container max-w-4xl">
          <p className="text-lg leading-relaxed text-white/75 md:text-[19px]">
            Employees spend less time searching and more time using information
            when retrieval, governance and adoption are planned together. Training
            and practical guidance sit inside{" "}
            <Link href="/adoption" className="font-semibold text-white hover:text-secondary-blue">
              Adoption
            </Link>
            , not as a
            separate product category.
          </p>
        </div>
      </section>

      <section className="section-y-compact">
        <div className="content-container">
          <SectionHeading title="Deploy. Administer. Adopt." className="mb-8" />
          <ServiceLinks />
        </div>
      </section>

      <PageCtaBand title="Discuss enterprise intelligence" ctaLabel="Let's Talk" />
    </>
  );
}
