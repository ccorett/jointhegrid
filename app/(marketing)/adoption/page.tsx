import Link from "next/link";
import { PageViewBeacon } from "@/components/analytics/page-view-beacon";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { LifecycleSteps } from "@/components/marketing/lifecycle-steps";
import { CapabilityGrid } from "@/components/marketing/capability-grid";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology Adoption Services | #jointheGRID",
  description:
    "Turn technology access into everyday use through practical learning, relevant use cases and continued reinforcement.",
  path: "/adoption",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/#services" },
  { name: "Adoption", path: "/adoption" },
] as const;

const programmes = [
  "Employee onboarding",
  "Workplace learning",
  "AI use cases",
  "Executive sessions",
  "Manager programmes",
  "Administrator learning",
  "Department champions",
  "Workshops",
  "Office hours",
  "Learning resources",
  "Usage measurement",
  "Reinforcement activities",
];

export default function AdoptionPage() {
  return (
    <>
      <PageViewBeacon event="service_view" name="adoption" />
      <BreadcrumbJsonLd items={[...breadcrumbs]} />
      <PageHero
        light
        eyebrow="Services"
        visual="symbol-light"
        title="Make it part"
        titleAccent="of the work."
        description="Help employees and organisations use digital workspace and enterprise intelligence successfully through onboarding, practical training, guidance, workshops and continuous improvement."
        primaryCta={{ label: "Build an Adoption Programme", href: "/enquiry" }}
      />

      <section className="border-b border-border bg-dark-band section-y-compact text-white">
        <div className="content-container">
          <SectionHeading
            dark
            centered
            title="Learn → Apply → Reinforce → Adopt"
            description="Adoption is a continuous cycle. It is not a one-time training event."
            className="mb-10 max-w-4xl md:mb-12"
          />
          <div className="panel-border-dark bg-white/5 p-6 md:p-8 lg:p-10">
            <LifecycleSteps
              dark
              layout="spread"
              steps={[
                { label: "Learn" },
                { label: "Apply" },
                { label: "Reinforce" },
                { label: "Adopt" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section-y-compact">
        <div className="content-container">
          <SectionHeading
            title="Training sits inside adoption"
            description="Workshops, champions, executive sessions and practical AI enablement are part of one adoption programme, not a separate catalogue of courses."
            className="mb-8"
          />
          <p className="mb-8 max-w-3xl text-lg text-body-text md:text-[19px]">
            Adoption programmes support teams using{" "}
            <Link href="/digital-workspace" className="font-semibold text-infrastructure-blue hover:underline">
              Digital Workspace
            </Link>{" "}
            and{" "}
            <Link href="/enterprise-intelligence" className="font-semibold text-infrastructure-blue hover:underline">
              Enterprise Intelligence
            </Link>
            .
          </p>
          <CapabilityGrid items={programmes} columns={3} />
        </div>
      </section>

      <PageCtaBand
        title="Build an adoption programme"
        ctaLabel="Build an Adoption Programme"
      />
    </>
  );
}
