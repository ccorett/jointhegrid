import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "About #jointhegrid: Digital Workspace + AI Integration from Trinidad & Tobago across the Caribbean.",
  path: "/about",
  keywords: [
    "digital workplace Caribbean",
    "Google Workspace Trinidad and Tobago",
    "Gemini Enterprise Caribbean",
  ],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        light
        eyebrow="About"
        title="Focused on better ways of working."
        description="#jointhegrid is operated by Global Resilient Infrastructure & Digitalisation Ltd., based in Trinidad & Tobago."
      />

      <section className="py-16 md:py-24">
        <div className="content-container max-w-3xl space-y-6 text-[17px] leading-relaxed text-secondary-text">
          <p>
            The focus is the Caribbean: organizations that want a practical way to
            bring digital workplace technology, AI and people into one connected
            environment.
          </p>
          <p>
            Specialization sits in{" "}
            <Link href="/google-workspace" className="font-medium text-infrastructure-blue hover:underline">
              Google Workspace
            </Link>{" "}
            and{" "}
            <Link href="/gemini-enterprise" className="font-medium text-infrastructure-blue hover:underline">
              Gemini Enterprise
            </Link>
            , delivered through{" "}
            <Link href="/deployment" className="font-medium text-infrastructure-blue hover:underline">
              deployment
            </Link>
            ,{" "}
            <Link href="/administration" className="font-medium text-infrastructure-blue hover:underline">
              administration
            </Link>{" "}
            and{" "}
            <Link href="/adoption" className="font-medium text-infrastructure-blue hover:underline">
              adoption
            </Link>
            .
          </p>
          <p>
            Interoperability matters. Workspace and Gemini still have to work with
            identity, security, applications and workflows that are already in
            place. That is part of the work, not an afterthought.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-light-bg py-16 md:py-24">
        <div className="content-container max-w-3xl">
          <SectionHeading
            title="Based in Trinidad & Tobago. Built to work across the Caribbean."
            description="Digital workplace delivery does not need to stop at a border. The GRID is structured for organizations and teams working across offices, islands and markets."
          />
        </div>
      </section>

      <PageCtaBand title="Ready to talk?" ctaLabel="Let's Talk" />
    </>
  );
}
