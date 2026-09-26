import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { InteroperabilityGraphic } from "@/components/brand/interoperability-graphic";
import { ServiceLinks } from "@/components/marketing/service-links";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Interoperability",
  description:
    "Connect your digital workplace with identity, applications, information, security and workflows already in place — part of the GRID concept.",
  path: "/interoperability",
  keywords: [
    "digital workplace interoperability",
    "identity integration Caribbean",
    "connected workplace ecosystem",
  ],
});

export default function InteroperabilityPage() {
  return (
    <>
      <PageHero
        light
        eyebrow="Solutions"
        title="Nothing works in"
        titleAccent="isolation."
        description="A digital workplace still has to connect with the systems around it. Identity, applications, information, security and workflows all form part of the environment."
        primaryCta={{ label: "Discuss Interoperability", href: "/contact" }}
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="content-container grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="max-w-xl">
            <SectionHeading
              title="THE GRID connects what you already have"
              description="The workplace is not a closed box. It has to work with people, apps, information, identity, security and workflows across the organization."
            />
          </div>
          <InteroperabilityGraphic />
        </div>
      </section>

      <section className="bg-light-bg py-16 md:py-24">
        <div className="content-container max-w-3xl space-y-6 text-[17px] leading-relaxed text-secondary-text">
          <p>
            Interoperability is built into how #jointhegrid thinks about digital
            workplace delivery — not bolted on after deployment.
          </p>
          <p>
            Whether you are connecting identity, bridging applications or aligning
            information flows, the goal is one coherent environment your teams can
            rely on.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="content-container">
          <SectionHeading title="Deploy. Administer. Adopt." className="mb-10 max-w-xl" />
          <ServiceLinks />
        </div>
      </section>

      <PageCtaBand title="Discuss interoperability" ctaLabel="Let's Talk" />
    </>
  );
}
