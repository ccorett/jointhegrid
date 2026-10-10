import Link from "next/link";
import { GridSymbol } from "@/components/brand/grid-symbol";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { PartnerProfileLink } from "@/components/marketing/partner-profile-link";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About #jointheGRID | Caribbean Technology Company",
  description:
    "GRID Ltd. delivers Digital Workspace and Enterprise Intelligence across the Caribbean from Trinidad and Tobago.",
  path: "/about",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
] as const;

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[...breadcrumbs]} />
      <PageHero
        light
        eyebrow="Company"
        visual="symbol-light"
        title="Focused on better"
        titleAccent="ways of working."
        description="THE GRID is based in Trinidad & Tobago."
      />

      <section className="border-b border-border bg-white section-y-compact">
        <div className="content-container grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-x-12 xl:gap-x-16">
          <div className="flex min-w-0 flex-col gap-6 lg:justify-center">
            <p className="text-lg leading-relaxed text-body-text md:text-[19px] md:leading-relaxed">
              THE GRID is a technology company focused on{" "}
              <Link
                href="/digital-workspace"
                className="font-semibold text-infrastructure-blue hover:underline"
              >
                Digital Workspace
              </Link>{" "}
              and{" "}
              <Link
                href="/enterprise-intelligence"
                className="font-semibold text-infrastructure-blue hover:underline"
              >
                Enterprise Intelligence
              </Link>
              . GRID delivers the{" "}
              <Link
                href="/deployment"
                className="font-semibold text-infrastructure-blue hover:underline"
              >
                deployment
              </Link>
              ,{" "}
              <Link
                href="/administration"
                className="font-semibold text-infrastructure-blue hover:underline"
              >
                administration
              </Link>{" "}
              and{" "}
              <Link
                href="/adoption"
                className="font-semibold text-infrastructure-blue hover:underline"
              >
                adoption
              </Link>{" "}
              of connected technology environments spanning workplace collaboration,
              intelligent tools, applications and organisational data. The focus is
              simple: bringing people, information, applications and AI together in
              environments that are structured, manageable and connected.
            </p>
            <PartnerProfileLink className="w-fit" />
          </div>
          <div className="panel-border flex items-center justify-center bg-light-bg p-7 sm:p-8 lg:p-9">
            <GridSymbol theme="light" size={100} />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-dark-band section-y-compact text-white">
        <div className="content-container grid gap-8 lg:grid-cols-2">
          <SectionHeading
            dark
            title="People. Information. Apps. AI."
            description="Everything connects here. #jointheGRID."
          />
          <p className="text-lg leading-relaxed text-white/80 md:text-[19px]">
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
