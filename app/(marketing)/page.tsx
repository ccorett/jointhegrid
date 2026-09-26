import type { Metadata } from "next";
import Link from "next/link";
import { Phase1HeroGrid } from "@/components/brand/phase1-hero-grid";
import { BrandConnectionLines } from "@/components/brand/brand-connection-lines";
import { InteroperabilityGraphic } from "@/components/brand/interoperability-graphic";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Digital Workplace + AI Integration",
  description:
    "Google Workspace and Gemini Enterprise for Caribbean organizations. Deployment, administration and adoption from Trinidad & Tobago across the region.",
  keywords: [
    "Google Workspace Trinidad and Tobago",
    "Google Workspace Caribbean",
    "Gemini Enterprise Caribbean",
    "digital workplace solutions",
    "Google Workspace deployment",
    "Google Workspace adoption",
  ],
};

const adoptionItems = [
  "Employee onboarding",
  "Workspace learning",
  "Gemini enablement",
  "Executive sessions",
  "Administrator learning",
  "Champions programmes",
  "Workshops",
  "Usage measurement",
];

const sectors = [
  { title: "Government & Public Sector", span: "lg:col-span-7" },
  { title: "Enterprise", span: "lg:col-span-5" },
  { title: "SMEs", span: "lg:col-span-5" },
  { title: "Education", span: "lg:col-span-7" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative border-b border-border bg-light-bg">
        <div className="content-container relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:py-24 xl:py-28">
          <div className="max-w-xl lg:max-w-none lg:py-4">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary-text">
              Digital Workspace + AI Integration
            </p>
            <h1 className="heading-hero text-[2.5rem] text-primary-navy sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem]">
              Bring your workplace
              <br />
              together.
            </h1>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-body-text md:text-lg">
              Google Workspace and Gemini Enterprise connected around the way your
              organization actually works.
            </p>
            <p className="font-display mt-4 text-lg font-semibold text-primary-navy md:text-xl">
              Deployment. Administration. Adoption.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Let&apos;s Talk
              </Button>
              <Button href="#solutions" variant="secondary" size="lg">
                Explore Solutions
              </Button>
            </div>
          </div>
          <Phase1HeroGrid className="lg:translate-x-4" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary-navy py-20 md:py-28 lg:py-32">
        <BrandConnectionLines />
        <div className="content-container relative">
          <div className="max-w-4xl">
            <h2 className="heading-section text-4xl text-white sm:text-5xl md:text-[3.25rem] lg:text-[3.75rem]">
              People.
              <br />
              Apps.
              <br />
              Information.
              <br />
              AI.
            </h2>
            <p className="font-display mt-8 text-2xl font-semibold text-secondary-blue md:text-3xl">
              Together on the GRID.
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-[19px]">
              The modern workplace is connected. Communication, information,
              applications and intelligent tools need to work as one environment,
              not as separate pieces.
            </p>
          </div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-24 border-b border-border py-20 md:py-28">
        <div className="content-container">
          <h2 className="heading-section max-w-3xl text-4xl text-primary-navy md:text-5xl lg:text-[3.25rem]">
            The workplace.
            <br />
            Now with intelligence built in.
          </h2>

          <div className="relative mt-16 grid gap-0 lg:grid-cols-2">
            <div className="relative border-b border-border py-12 lg:border-b-0 lg:border-r lg:py-16 lg:pr-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-infrastructure-blue">
                Digital Workplace
              </p>
              <h3 className="heading-section mt-3 text-3xl text-primary-navy md:text-4xl">
                Where work happens.
              </h3>
              <p className="mt-5 text-[17px] leading-relaxed text-secondary-text">
                Email. Meetings. Documents. Files. Communication. Collaboration.
                One environment for the work that happens every day.
              </p>
              <Link
                href="/google-workspace"
                className="mt-8 inline-flex text-sm font-semibold text-infrastructure-blue hover:underline"
              >
                Explore Google Workspace →
              </Link>
            </div>

            <div className="hidden w-px bg-gradient-to-b from-transparent via-infrastructure-blue/40 to-transparent lg:absolute lg:left-1/2 lg:top-12 lg:block lg:h-[calc(100%-6rem)] lg:-translate-x-1/2" />

            <div className="py-12 lg:py-16 lg:pl-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-infrastructure-blue">
                AI Integration
              </p>
              <h3 className="heading-section mt-3 text-3xl text-primary-navy md:text-4xl">
                Intelligence where work happens.
              </h3>
              <p className="mt-5 text-[17px] leading-relaxed text-secondary-text">
                Bring AI into the same environment your people already use, with
                the access, controls and adoption needed for organizational use.
              </p>
              <Link
                href="/gemini-enterprise"
                className="mt-8 inline-flex text-sm font-semibold text-infrastructure-blue hover:underline"
              >
                Explore Gemini Enterprise →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-[#EFF6FF] via-light-bg to-white py-20 md:py-28">
        <div className="content-container max-w-3xl">
          <h2 className="heading-section text-3xl text-primary-navy md:text-4xl lg:text-[2.75rem]">
            Your information already has value.
            <span className="mt-2 block text-infrastructure-blue">
              Make more of it.
            </span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-secondary-text md:text-lg">
            Workspace brings the organization&apos;s information and collaboration
            together. Gemini adds another way to work with that information, find
            what matters and move work forward.
          </p>
        </div>
      </section>

      <section className="bg-primary-navy py-20 text-white md:py-28 lg:py-32">
        <div className="content-container">
          <h2 className="heading-section max-w-3xl text-3xl md:text-4xl lg:text-[2.85rem]">
            Three things have to go right.
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-white/65">
            The technology has to be deployed properly, managed consistently and
            used confidently.
          </p>

          <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-3 lg:gap-0">
            {[
              {
                num: "01",
                title: "Deploy",
                headline: "Get the foundation right.",
                body: "Configuration, migration, identity, security, rollout and the move into production.",
                href: "/deployment",
                cta: "Plan a Deployment",
              },
              {
                num: "02",
                title: "Administer",
                headline: "Keep it under control.",
                body: "Users, licences, access, policies, security, support and the day to day management of the environment.",
                href: "/administration",
                cta: "Explore Administration",
              },
              {
                num: "03",
                title: "Adopt",
                headline: "Make it part of the work.",
                body: "Onboarding, practical learning, Gemini use cases, champions and continued reinforcement across the organization.",
                href: "/adoption",
                cta: "Explore Adoption",
              },
            ].map((pillar, i) => (
              <div
                key={pillar.num}
                className={cn(
                  "border-t border-white/10 py-12 lg:border-t-0 lg:px-8 lg:py-0",
                  i === 0 && "lg:pl-0",
                  i === 1 && "lg:border-x lg:border-white/10",
                  i === 2 && "lg:pr-0"
                )}
              >
                <p className="font-display text-6xl font-bold text-white/10 md:text-7xl">
                  {pillar.num}
                </p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary-blue">
                  {pillar.title}
                </p>
                <h3 className="heading-section mt-2 text-2xl md:text-3xl">
                  {pillar.headline}
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-white/65">
                  {pillar.body}
                </p>
                <Link
                  href={pillar.href}
                  className="mt-6 inline-flex text-sm font-semibold text-white hover:text-secondary-blue"
                >
                  {pillar.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-28">
        <div className="content-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-infrastructure-blue">
              Interoperability
            </p>
            <h2 className="heading-section mt-3 text-3xl text-primary-navy md:text-4xl lg:text-[2.65rem]">
              Everything works better when it works together.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-secondary-text md:text-lg">
              Organizations depend on multiple technologies. Google Workspace and
              Gemini Enterprise need to operate alongside identity, security,
              applications, information and the workflows already in place.
            </p>
          </div>
          <InteroperabilityGraphic />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="content-container">
          <h2 className="heading-section max-w-3xl text-3xl text-primary-navy md:text-4xl lg:text-[2.65rem]">
            Access isn&apos;t adoption.
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-secondary-text">
            Giving someone a licence does not mean the technology becomes part of
            their work. Adoption takes practical learning, relevant use cases and
            reinforcement after launch.
          </p>
          <p className="font-display mt-8 flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-wider text-infrastructure-blue sm:text-base">
            <span>Learn</span>
            <span className="text-border">→</span>
            <span>Apply</span>
            <span className="text-border">→</span>
            <span>Reinforce</span>
            <span className="text-border">→</span>
            <span>Adopt</span>
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {adoptionItems.map((item) => (
              <li
                key={item}
                className="border-l-2 border-infrastructure-blue/40 py-1 pl-4 text-[15px] text-body-text"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/adoption" variant="secondary" size="lg">
              Explore Adoption
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-light-bg py-20 md:py-24">
        <div className="content-container">
          <h2 className="heading-section text-3xl text-primary-navy md:text-4xl">
            Built for organizations ready to work differently.
          </h2>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-12">
            {sectors.map((sector) => (
              <div
                key={sector.title}
                className={cn(
                  "flex min-h-[120px] items-end bg-white p-8 lg:min-h-[160px]",
                  sector.span
                )}
              >
                <p className="font-display text-xl font-semibold text-primary-navy md:text-2xl">
                  {sector.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="content-container max-w-3xl">
          <h2 className="heading-section text-3xl text-primary-navy md:text-4xl lg:text-[2.65rem]">
            Built for the way the Caribbean works.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-secondary-text md:text-lg">
            Based in Trinidad &amp; Tobago. Built to work across the Caribbean.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-secondary-text md:text-lg">
            Digital workplace delivery does not need to stop at a border. The GRID
            is structured for organizations and teams working across offices,
            islands and markets.
          </p>
        </div>
      </section>

      <section className="bg-primary-navy py-20 md:py-28">
        <div className="content-container text-center">
          <h2 className="heading-section text-3xl text-white md:text-4xl lg:text-[2.75rem]">
            Ready to talk about your workplace?
          </h2>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" size="lg">
              Let&apos;s Talk
            </Button>
            <WhatsAppButton variant="primary" />
          </div>
        </div>
      </section>
    </>
  );
}
