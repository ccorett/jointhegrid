import { InteroperabilityGraphic } from "@/components/brand/interoperability-graphic";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
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

const modules = [
  "People",
  "Identity",
  "Applications",
  "Information",
  "Security",
  "Workflows",
];

export default function InteroperabilityPage() {
  return (
    <>
      <PageHero
        light
        eyebrow="The GRID principle"
        visual="interop"
        title="Nothing works in"
        titleAccent="isolation."
        description="A digital workplace still has to connect with the systems around it. Identity, applications, information, security and workflows all form part of the environment."
        primaryCta={{ label: "Let's Talk", href: "/contact" }}
      />

      <section className="border-b border-border bg-white section-y-compact">
        <div className="content-container grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              title="THE GRID connects what you already have"
              description="The workplace is not a closed box. It has to work with people, apps, information, identity, security and workflows across the organization."
            />
            <div className="mt-6 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
              {modules.map((mod) => (
                <div
                  key={mod}
                  className="bg-light-bg px-4 py-3 text-[15px] font-bold uppercase tracking-wide text-primary-navy md:text-base"
                >
                  {mod}
                </div>
              ))}
            </div>
          </div>
          <InteroperabilityGraphic className="border border-border bg-light-bg p-4 md:p-5" />
        </div>
      </section>

      <section className="border-b border-border bg-light-bg section-y-compact">
        <div className="content-container max-w-4xl space-y-5 text-lg text-body-text md:text-[19px]">
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

      <section className="section-y-compact">
        <div className="content-container">
          <SectionHeading title="Deploy. Administer. Adopt." className="mb-8" />
          <ServiceLinks />
        </div>
      </section>

      <PageCtaBand title="Discuss your environment" ctaLabel="Let's Talk" />
    </>
  );
}
