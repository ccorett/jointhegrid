import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { WHATSAPP_LETS_TALK_URL } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Cloud Infrastructure",
  description:
    "Secure cloud environments for applications, data and digital workloads. Configuration, migration, security and ongoing administration across the Caribbean.",
  path: "/cloud-infrastructure",
  keywords: [
    "cloud infrastructure Caribbean",
    "cloud migration Trinidad and Tobago",
    "cloud administration",
    "workload migration",
  ],
});

const capabilities = [
  {
    title: "Cloud environment setup",
    description: "Foundations for applications and data in production.",
  },
  {
    title: "Compute, storage and databases",
    description: "Core services sized for the workload.",
  },
  {
    title: "Application and workload migration",
    description: "Structured moves with validation and cutover planning.",
  },
  {
    title: "Identity and access",
    description: "Accounts, roles and permissions aligned to the organization.",
  },
  {
    title: "Security configuration",
    description: "Policies, boundaries and controls for cloud resources.",
  },
  {
    title: "Monitoring and resource management",
    description: "Visibility into performance, capacity and health.",
  },
  {
    title: "Backup and recovery",
    description: "Recovery points and restore paths for critical data.",
  },
  {
    title: "Cost and resource optimization",
    description: "Right sizing and spend review against actual use.",
  },
  {
    title: "Ongoing cloud administration",
    description: "Day to day changes, support and platform coordination.",
  },
];

const deploymentFocus = [
  "Environment configuration",
  "Workload migration",
  "Identity",
  "Security",
  "Data",
  "Production readiness",
];

const administrationFocus = [
  "Resources",
  "Access",
  "Security",
  "Monitoring",
  "Backup",
  "Cost",
  "Ongoing administration",
];

function CapabilityMatrix({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <ul className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.title} className="bg-white px-4 py-4 md:px-5 md:py-5">
          <p className="font-display text-base font-bold leading-snug text-primary-navy md:text-lg">
            {item.title}
          </p>
          <p className="mt-1.5 text-[15px] leading-snug text-body-text md:text-[16px]">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

function FocusList({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul
      className={cn(
        "grid gap-px border sm:grid-cols-2",
        dark ? "border-white/15 bg-white/10" : "border-border bg-border"
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "px-4 py-3 text-[15px] font-medium leading-snug md:px-5 md:py-3.5 md:text-[16px]",
            dark ? "bg-primary-navy text-white/90" : "bg-white text-body-text"
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CloudInfrastructurePage() {
  return (
    <>
      <PageHero
        light
        eyebrow="Cloud Infrastructure"
        title="Cloud built for the systems"
        titleAccent="behind the work."
        description="Secure cloud environments for applications, data and digital workloads, from initial configuration through ongoing administration."
        primaryCta={{ label: "Let's Talk", href: WHATSAPP_LETS_TALK_URL }}
      />

      <section className="border-b border-border bg-white section-y-compact">
        <div className="content-container">
          <SectionHeading
            title="Core cloud capability"
            description="Infrastructure for applications and data, configured and operated with the same discipline as the rest of the connected environment."
            className="mb-8"
          />
          <CapabilityMatrix items={capabilities} />
        </div>
      </section>

      <section className="border-b border-border bg-light-bg section-y-compact">
        <div className="content-container grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10">
          <div>
            <SectionHeading title="Built from the foundation up." />
            <p className="text-lead mt-4 max-w-xl text-body-text">
              Cloud Infrastructure connects to{" "}
              <Link
                href="/deployment"
                className="font-semibold text-infrastructure-blue hover:underline"
              >
                Deployment
              </Link>{" "}
              for configuration, migration and production readiness. Technical
              enablement and knowledge transfer sit inside that work, not as a
              separate programme.
            </p>
          </div>
          <FocusList items={deploymentFocus} />
        </div>
      </section>

      <section className="border-b border-border bg-primary-navy section-y-compact text-white">
        <div className="content-container grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10">
          <div>
            <SectionHeading dark title="Managed after launch." />
            <p className="text-lead mt-4 max-w-xl text-white/75">
              After go live, cloud resources need the same attention as workplace
              platforms.{" "}
              <Link
                href="/administration"
                className="font-semibold text-secondary-blue hover:text-white"
              >
                Administration
              </Link>{" "}
              covers monitoring, access, backup, cost and ongoing changes.
            </p>
          </div>
          <FocusList items={administrationFocus} dark />
        </div>
      </section>

      <PageCtaBand title="Discuss cloud infrastructure" ctaLabel="Let's Talk" />
    </>
  );
}
