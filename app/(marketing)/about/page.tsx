import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "About #jointhegrid — Digital Workspace + AI Integration specialists based in Trinidad & Tobago, serving the Caribbean.",
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
        description="Global Resilient Infrastructure & Digitalisation Ltd. (#jointhegrid) specializes in Digital Workspace + AI Integration for organizations across the Caribbean."
      />

      <section className="py-16 md:py-24">
        <div className="content-container max-w-3xl space-y-8 text-[17px] leading-relaxed text-secondary-text">
          <p>
            <strong className="font-medium text-primary-navy">#jointhegrid</strong>{" "}
            helps organizations deploy, administer and adopt{" "}
            <strong className="font-medium text-primary-navy">Google Workspace</strong>{" "}
            and{" "}
            <strong className="font-medium text-primary-navy">Gemini Enterprise</strong>
            . We bring people, applications, information and AI together within a
            connected digital workplace.
          </p>
          <p>
            Our services follow three pillars—{" "}
            <Link href="/deployment" className="font-medium text-infrastructure-blue hover:underline">
              Deploy
            </Link>
            ,{" "}
            <Link href="/administration" className="font-medium text-infrastructure-blue hover:underline">
              Administer
            </Link>
            ,{" "}
            <Link href="/adoption" className="font-medium text-infrastructure-blue hover:underline">
              Adopt
            </Link>
            —covering implementation through ongoing management and organizational
            adoption.
          </p>
          <p>
            Interoperability is central to how we work. Your workplace does not
            exist in isolation; we help Google technologies operate effectively
            alongside identity systems, security platforms, applications and
            workflows you already depend on.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-light-bg py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="Built in the Caribbean. Connected beyond it."
            description="Based in Trinidad & Tobago, #jointhegrid is building specialist digital workplace capability for organizations across the Caribbean."
            className="max-w-3xl"
          />
        </div>
      </section>

      <PageCtaBand
        title="Ready to talk about your workplace?"
        ctaLabel="Request a Consultation"
      />
    </>
  );
}
