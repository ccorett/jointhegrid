import Link from "next/link";
import { GridSymbol } from "@/components/brand/grid-symbol";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Company",
  description:
    "About THE GRID: Digital Workspace and Enterprise Intelligence from Trinidad & Tobago across the Caribbean.",
  path: "/about",
  keywords: [
    "digital workspace Caribbean",
    "enterprise intelligence Caribbean",
    "Trinidad and Tobago digital workplace",
  ],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        light
        eyebrow="Company"
        visual="symbol-light"
        title="Focused on better"
        titleAccent="ways of working."
        description="THE GRID is based in Trinidad & Tobago."
      />

      <section className="border-b border-border bg-white section-y-compact">
        <div className="content-container grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="max-w-3xl space-y-5 text-lg text-body-text md:text-[19px]">
            <p>
              THE GRID connects people, information, applications and intelligent
              technologies through secure, integrated digital environments. The
              focus is productive collaboration and information that is accessible,
              searchable and useful.
            </p>
            <p>
              Specialization sits in{" "}
              <Link href="/digital-workspace" className="font-semibold text-infrastructure-blue hover:underline">
                Digital Workspace
              </Link>
              {" "}and{" "}
              <Link href="/ai-integration" className="font-semibold text-infrastructure-blue hover:underline">
                Enterprise Intelligence
              </Link>
              , delivered through{" "}
              <Link href="/deployment" className="font-semibold text-infrastructure-blue hover:underline">
                deployment
              </Link>
              ,{" "}
              <Link href="/administration" className="font-semibold text-infrastructure-blue hover:underline">
                administration
              </Link>
              {" "}and{" "}
              <Link href="/adoption" className="font-semibold text-infrastructure-blue hover:underline">
                adoption
              </Link>
              .
            </p>
            <p>
              Solutions are designed to work with identity, security, applications
              and information environments already in place. Interoperability is
              part of the approach, not a separate product line.
            </p>
          </div>
          <div className="panel-border flex items-center justify-center bg-light-bg p-8 lg:p-10">
            <GridSymbol theme="light" size={100} />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-primary-navy section-y-compact text-white">
        <div className="content-container grid gap-8 lg:grid-cols-2">
          <SectionHeading
            dark
            title="People. Information. Apps. AI."
            description="Everything connects here. #jointheGRID."
          />
          <p className="text-lg leading-relaxed text-white/75 md:text-[19px]">
            THE GRID deploys, administers and adopts Digital Workspace and
            Enterprise Intelligence with structure, control and practical
            enablement for organizations across the Caribbean.
          </p>
        </div>
      </section>

      <section className="section-y-compact">
        <div className="content-container">
          <SectionHeading
            title="Based in Trinidad & Tobago. Built to work across the Caribbean."
            description="Based in Trinidad & Tobago with a Caribbean outlook. Projects are structured around the requirements of each organization."
          />
        </div>
      </section>

      <PageCtaBand title="Ready to talk?" ctaLabel="Let's Talk" />
    </>
  );
}
