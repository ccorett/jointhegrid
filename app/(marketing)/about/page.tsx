import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "About #jointhegrid — specialist digital workplace solutions from Trinidad & Tobago for the Caribbean.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Specialist digital workplace capability."
        description="#jointhegrid is Global Resilient Infrastructure & Digitalisation Ltd.—a specialist digital workplace solutions company focused on Google Workspace and Gemini Enterprise."
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="content-container max-w-3xl">
          <SectionHeading
            title="What we do."
            description="We help organizations deploy, administer, and adopt Google Workspace and Gemini Enterprise. Our three service pillars—Deploy, Administer, Adopt—cover the full lifecycle of workplace technology."
            className="mb-12"
          />
          <div className="space-y-6 font-light leading-relaxed text-secondary-text">
            <p>
              The GRID represents the connected digital environment where people,
              applications and information work together. We build and maintain
              that environment for organizations across the Caribbean.
            </p>
            <p>
              Beyond our core services, we operate the AI Credits platform—a
              client-facing product that allows organizations to purchase and
              manage AI credit allocations through one account.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="content-container max-w-3xl">
          <SectionHeading
            title="Built in the Caribbean. Connected beyond it."
            description="#jointhegrid is building specialist digital workplace capability from Trinidad & Tobago for organizations across the Caribbean."
          />
        </div>
      </section>

      <section className="bg-primary-navy py-16 md:py-24">
        <div className="content-container text-center">
          <h2 className="text-2xl font-extralight text-white md:text-3xl">
            Ready to connect with us?
          </h2>
          <div className="mt-6">
            <Button href="/contact" size="lg">
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
