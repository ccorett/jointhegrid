import Link from "next/link";
import { GridSymbol } from "@/components/brand/grid-symbol";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageCtaBand } from "@/components/marketing/page-cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "About #jointhegrid: Digital Workplace + AI Integration from Trinidad & Tobago across the Caribbean.",
  path: "/about",
  keywords: [
    "digital workplace Caribbean",
    "AI integration Caribbean",
    "Trinidad and Tobago digital workplace",
  ],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        light
        eyebrow="About"
        visual="symbol-light"
        title="Focused on better"
        titleAccent="ways of working."
        description="#jointhegrid is operated by Global Resilient Infrastructure & Digitalisation Ltd., based in Trinidad & Tobago."
      />

      <section className="border-b border-border bg-white section-y-compact">
        <div className="content-container grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="max-w-3xl space-y-5 text-lg text-body-text md:text-[19px]">
            <p>
              The focus is the Caribbean: organizations that want a practical way to
              bring digital workplace technology, AI and people into one connected
              environment.
            </p>
            <p>
              Specialization sits in{" "}
              <Link href="/digital-workspace" className="font-semibold text-infrastructure-blue hover:underline">
                digital workplace
              </Link>
              {" "}and{" "}
              <Link href="/ai-integration" className="font-semibold text-infrastructure-blue hover:underline">
                AI integration
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
              The workplace and intelligent tools still have to work with identity,
              security, applications and workflows that are already in place. That
              is part of the work, not an afterthought.
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
            title="People. Apps. Information. AI. Together."
            description="The GRID is the connected layer — not a catalogue of disconnected tools."
          />
          <p className="text-lg leading-relaxed text-white/75 md:text-[19px]">
            #jointhegrid helps organizations deploy, administer and adopt digital
            workplace and AI capability with structure, control and practical
            adoption — across teams, offices and islands.
          </p>
        </div>
      </section>

      <section className="section-y-compact">
        <div className="content-container">
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
