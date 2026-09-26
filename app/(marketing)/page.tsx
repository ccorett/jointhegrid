import type { Metadata } from "next";
import Link from "next/link";
import { Phase1HeroGrid } from "@/components/brand/phase1-hero-grid";
import { BrandConnectionLines } from "@/components/brand/brand-connection-lines";
import { InteroperabilityNetwork } from "@/components/brand/interoperability-network";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Digital Workspace + AI Integration",
  description:
    "#jointhegrid helps organizations deploy, administer and adopt Google Workspace and Gemini Enterprise—creating a connected digital workplace where people, information and intelligent tools work together.",
  keywords: [
    "Google Workspace Trinidad and Tobago",
    "Google Workspace Caribbean",
    "Gemini Enterprise Caribbean",
    "digital workplace solutions",
    "Google Workspace deployment",
    "Google Workspace adoption",
  ],
};

const workspaceApps = ["Gmail", "Drive", "Meet", "Chat", "Docs", "Sheets", "Calendar"];

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
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-light-bg">
        <div
          className="pointer-events-none absolute inset-0 grid-bg-lines opacity-[0.45]"
          aria-hidden
        />
        <div className="content-container relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:py-24 xl:py-28">
          <div className="max-w-xl lg:max-w-none lg:py-4">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary-text">
              Digital Workspace + AI Integration
            </p>
            <h1 className="heading-hero text-[2.5rem] text-primary-navy sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem]">
              Bring your workplace together.
            </h1>
            <p className="font-display mt-6 text-xl font-semibold leading-snug text-primary-navy sm:text-2xl md:text-[1.65rem]">
              People. Apps.
              <br />
              Information. AI.
            </p>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-body-text md:text-lg">
              #jointhegrid helps organizations deploy, administer and adopt Google
              Workspace and Gemini Enterprise—creating a connected digital
              workplace where people, information and intelligent tools work
              together.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Request a Consultation
              </Button>
              <Button href="#solutions" variant="secondary" size="lg">
                Explore Solutions
              </Button>
            </div>
          </div>
          <Phase1HeroGrid className="lg:translate-x-4" />
        </div>
      </section>

      {/* Brand statement */}
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
              Connected on the GRID.
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-[19px]">
              A modern workplace is more than a collection of tools. #jointhegrid
              connects the technology, administration and people required to make
              digital work effective.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="scroll-mt-24 border-b border-border py-20 md:py-28">
        <div className="content-container">
          <h2 className="heading-section max-w-3xl text-4xl text-primary-navy md:text-5xl lg:text-[3.25rem]">
            One workplace.
            <br />
            Two powerful layers.
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
                Google Workspace brings communication, collaboration, information
                and organizational productivity into one connected environment.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {workspaceApps.map((app) => (
                  <span
                    key={app}
                    className="rounded-md border border-border bg-light-bg px-3 py-1 text-xs font-medium text-body-text"
                  >
                    {app}
                  </span>
                ))}
              </div>
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
                Gemini Enterprise brings AI into organizational work—with the
                deployment, administration, governance and adoption required for
                enterprise use alongside Google Workspace.
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

      {/* Workspace + AI */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-light-bg to-white py-20 md:py-28">
        <div className="content-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="heading-section text-3xl text-primary-navy md:text-4xl lg:text-[2.75rem]">
              Your workplace already has the information.
              <span className="mt-2 block text-infrastructure-blue">
                AI helps your people work with it.
              </span>
            </h2>
          </div>
          <div className="relative border-l-2 border-infrastructure-blue/30 pl-8 md:pl-12">
            {[
              "PEOPLE",
              "GOOGLE WORKSPACE",
              "INFORMATION",
              "GEMINI",
              "BETTER WORK",
            ].map((step, i, arr) => (
              <div key={step} className="relative pb-10 last:pb-0">
                {i < arr.length - 1 && (
                  <span
                    className="absolute -left-[calc(2rem+5px)] top-8 hidden h-[calc(100%-1rem)] w-px bg-infrastructure-blue/25 md:-left-[calc(3rem+5px)] md:block"
                    aria-hidden
                  />
                )}
                <p className="font-display text-lg font-semibold tracking-wide text-primary-navy md:text-xl">
                  {step}
                </p>
                {i < arr.length - 1 && (
                  <span className="mt-2 inline-block text-infrastructure-blue md:hidden" aria-hidden>
                    ↓
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deploy. Administer. Adopt. */}
      <section className="bg-primary-navy py-20 text-white md:py-28 lg:py-32">
        <div className="content-container">
          <h2 className="heading-section max-w-3xl text-3xl md:text-4xl lg:text-[2.85rem]">
            We don&apos;t just give you the tools.
            <span className="mt-2 block text-secondary-blue">
              We make the workplace work.
            </span>
          </h2>

          <div className="mt-16 space-y-0 lg:mt-20 lg:grid lg:grid-cols-3 lg:gap-0 lg:space-y-0">
            {[
              {
                num: "01",
                title: "Deploy",
                headline: "Build the foundation.",
                body: "Migration, configuration, identity, security, rollout and implementation.",
              },
              {
                num: "02",
                title: "Administer",
                headline: "Keep it working.",
                body: "Users, licences, security, policies, support and ongoing management.",
              },
              {
                num: "03",
                title: "Adopt",
                headline: "Make it valuable.",
                body: "Onboarding, learning, Gemini enablement, champions, workshops and reinforcement.",
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
                  href={
                    pillar.title === "Deploy"
                      ? "/deployment"
                      : pillar.title === "Administer"
                        ? "/administration"
                        : "/adoption"
                  }
                  className="mt-6 inline-flex text-sm font-semibold text-white hover:text-secondary-blue"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interoperability */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="content-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="heading-section text-3xl text-primary-navy md:text-4xl lg:text-[2.65rem]">
              Your workplace doesn&apos;t exist in isolation.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-secondary-text md:text-lg">
              #jointhegrid helps Google Workspace and Gemini Enterprise operate
              effectively within the identity systems, applications, security
              environments and workflows your organization already depends on.
            </p>
          </div>
          <InteroperabilityNetwork />
        </div>
      </section>

      {/* Adoption */}
      <section className="py-20 md:py-28">
        <div className="content-container">
          <h2 className="heading-section max-w-3xl text-3xl text-primary-navy md:text-4xl lg:text-[2.65rem]">
            Technology doesn&apos;t transform an organization.
            <span className="mt-2 block">People using it does.</span>
          </h2>
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

      {/* Who we work with */}
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

      {/* Caribbean */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <svg
          className="pointer-events-none absolute right-0 top-1/2 hidden h-[280px] w-[320px] -translate-y-1/2 opacity-[0.12] lg:block"
          viewBox="0 0 200 180"
          aria-hidden
        >
          {[
            [120, 40],
            [140, 55],
            [155, 70],
            [130, 85],
            [100, 95],
            [85, 110],
            [110, 120],
            [145, 100],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="4" fill="#2563EB" />
              {i > 0 && (
                <line
                  x1={120}
                  y1={40}
                  x2={cx}
                  y2={cy}
                  stroke="#2563EB"
                  strokeWidth="0.5"
                />
              )}
            </g>
          ))}
        </svg>
        <div className="content-container relative max-w-3xl">
          <h2 className="heading-section text-3xl text-primary-navy md:text-4xl lg:text-[2.65rem]">
            Built in the Caribbean.
            <span className="mt-2 block text-infrastructure-blue">
              Connected beyond it.
            </span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-secondary-text md:text-lg">
            Based in Trinidad &amp; Tobago, #jointhegrid is building specialist
            digital workplace capability for organizations across the Caribbean.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary-navy py-20 md:py-28">
        <div className="content-container text-center">
          <h2 className="heading-section text-3xl text-white md:text-4xl lg:text-[2.75rem]">
            Ready to build a better way to work?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
            Let&apos;s talk about your digital workplace.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" size="lg">
              Request a Consultation
            </Button>
            <WhatsAppButton variant="primary" />
          </div>
        </div>
      </section>
    </>
  );
}
