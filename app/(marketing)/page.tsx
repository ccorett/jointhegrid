import type { Metadata } from "next";
import Link from "next/link";
import { Phase1HeroGrid } from "@/components/brand/phase1-hero-grid";
import { BrandConnectionLines } from "@/components/brand/brand-connection-lines";
import { InteroperabilityGraphic } from "@/components/brand/interoperability-graphic";
import { AudienceSectorsGrid } from "@/components/brand/audience-sectors-grid";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/marketing/enquiry-form";
import { SectionLabel } from "@/components/marketing/section-label";
import { PHONE_DISPLAY, SALES_EMAIL, WHATSAPP_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Digital Workplace + AI Integration",
  description:
    "Digital workplace and AI integration for Caribbean organizations. Deployment, administration and adoption from Trinidad & Tobago across the region.",
  keywords: [
    "digital workplace Caribbean",
    "digital workplace Trinidad and Tobago",
    "AI integration workplace",
    "workplace deployment Caribbean",
    "workplace adoption",
  ],
};

const solutions = [
  {
    label: "Digital Workspace",
    title: "Where everyday work comes together.",
    body: "Communication, collaboration, information and everyday work brought into one connected environment.",
    capabilities: [
      "Email & calendar",
      "Documents & files",
      "Meetings & messaging",
      "Collaboration",
      "Identity & access",
      "Administration & security",
    ],
    href: "/digital-workspace",
    cta: "Explore Digital Workspace",
  },
  {
    label: "AI Integration",
    title: "Intelligence inside the workplace.",
    body: "Intelligent tools introduced into the workplace with the access, information and controls required for organizational use.",
    capabilities: [
      "Workplace AI",
      "Information access",
      "Organizational use",
      "Access controls",
      "Governance",
      "Practical adoption",
    ],
    href: "/ai-integration",
    cta: "Explore AI Integration",
  },
];

const services = [
  {
    name: "Deployment",
    headline: "Get the foundation right.",
    body: "Configuration, migration, identity, security, rollout and the move into production.",
    capabilities: [
      "Discover & configure",
      "Identity & existing systems",
      "Migration & rollout",
      "Hypercare",
    ],
    href: "/deployment",
    cta: "Plan a Deployment",
  },
  {
    name: "Administration",
    headline: "Keep it under control.",
    body: "Users, licences, access, policies, security and day to day management of the connected workplace.",
    capabilities: [
      "User lifecycle",
      "Licences & access",
      "Security policies",
      "Reporting & support",
    ],
    href: "/administration",
    cta: "Explore Administration",
  },
  {
    name: "Adoption",
    headline: "Make it part of the work.",
    body: "Onboarding, practical learning, AI use cases, champions and continued reinforcement.",
    capabilities: [
      "Onboarding",
      "Workshops & champions",
      "AI use cases",
      "Usage reinforcement",
    ],
    href: "/adoption",
    cta: "Explore Adoption",
  },
];

const ecosystemModules = [
  "People",
  "Identity",
  "Applications",
  "Information",
  "Security",
  "Workflows",
];

const adoptionItems = [
  "Employee onboarding",
  "Practical learning",
  "AI use cases",
  "Executive sessions",
  "Administrator learning",
  "Champions programmes",
  "Workshops",
  "Usage measurement",
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-white section-y-compact">
        <div className="content-container grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div>
            <SectionLabel>Digital Workplace + AI Integration</SectionLabel>
            <h1 className="heading-hero mt-3 text-[2.5rem] text-primary-navy sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
              Bring your workplace
              <br />
              together.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-snug text-body-text md:text-[19px] md:leading-relaxed">
              One connected environment for the people, applications, information
              and intelligent tools your organization depends on.
            </p>
            <p className="font-display mt-3 text-base font-bold uppercase tracking-wide text-primary-navy md:text-lg">
              People · Apps · Information · AI · Together
            </p>
            <p className="mt-2 text-[16px] font-semibold text-secondary-text md:text-[17px]">
              Deployment · Administration · Adoption
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Let&apos;s Talk
              </Button>
              <Button href="#solutions" variant="secondary" size="lg">
                Explore Solutions
              </Button>
            </div>
          </div>
          <Phase1HeroGrid className="w-full max-h-[min(480px,52vh)] lg:justify-self-end" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary-navy section-y text-white">
        <BrandConnectionLines />
        <div className="content-container relative grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel tone="dark">The GRID</SectionLabel>
            <h2 className="heading-section mt-3 text-[2rem] sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem]">
              People.
              <br />
              Apps.
              <br />
              Information.
              <br />
              AI.
            </h2>
            <p className="font-display mt-4 text-xl font-bold text-secondary-blue md:text-2xl">
              Together on the GRID.
            </p>
          </div>
          <p className="text-lg leading-relaxed text-white/75 md:text-[19px]">
            The modern workplace is connected. Communication, information,
            applications and intelligent tools need to work as one environment,
            not as separate pieces.
          </p>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-20 border-b border-border bg-light-bg section-y">
        <div className="content-container">
          <SectionLabel>Solutions</SectionLabel>
          <h2 className="heading-section mt-2 text-[2rem] text-primary-navy md:text-[2.75rem] lg:text-[3.25rem]">
            The connected workplace.
          </h2>
          <div className="mt-8 grid gap-px border border-border bg-border lg:grid-cols-2">
            {solutions.map((item) => (
              <article key={item.label} className="bg-white p-7 md:p-9 lg:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-infrastructure-blue">
                  {item.label}
                </p>
                <h3 className="heading-section mt-3 text-xl md:text-2xl lg:text-[1.65rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[17px] leading-snug text-body-text md:text-lg">
                  {item.body}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {item.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="border-l-2 border-infrastructure-blue/50 py-0.5 pl-3 text-[16px] font-medium text-body-text md:text-[17px]"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex text-[15px] font-semibold text-infrastructure-blue hover:underline md:text-base"
                >
                  {item.cta} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white section-y-compact">
        <div className="content-container max-w-4xl">
          <h2 className="heading-section text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem]">
            Your information already has value.{" "}
            <span className="text-infrastructure-blue">Make more of it.</span>
          </h2>
          <p className="mt-4 text-lg text-body-text md:text-[19px]">
            A connected workplace brings information and collaboration together.
            Intelligent tools add another way to work with that information, find
            what matters and move work forward — with the controls the
            organization requires.
          </p>
        </div>
      </section>

      <section id="services" className="scroll-mt-20 bg-primary-navy section-y text-white">
        <div className="content-container">
          <SectionLabel tone="dark">Services</SectionLabel>
          <h2 className="heading-section mt-2 text-[2rem] md:text-[2.75rem] lg:text-[3.25rem]">
            Three things have to go right.
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-white/70 md:text-[19px]">
            The environment has to be deployed properly, managed consistently and
            used confidently.
          </p>
          <div className="mt-8 grid gap-px border border-white/15 bg-white/10 lg:grid-cols-3">
            {services.map((item) => (
              <article key={item.name} className="bg-primary-navy p-7 md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-secondary-blue">
                  {item.name}
                </p>
                <h3 className="heading-section mt-2 text-xl md:text-2xl">
                  {item.headline}
                </h3>
                <p className="mt-3 text-[17px] leading-snug text-white/70 md:text-lg">
                  {item.body}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-4">
                  {item.capabilities.map((cap) => (
                    <li key={cap} className="text-[16px] text-white/80 md:text-[17px]">
                      · {cap}
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex text-[15px] font-semibold text-white hover:text-secondary-blue md:text-base"
                >
                  {item.cta} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white section-y">
        <div className="content-container grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-10">
          <div className="flex flex-col">
            <SectionLabel>Interoperability</SectionLabel>
            <h2 className="heading-section mt-2 text-[2rem] md:text-[2.75rem] lg:text-[3rem]">
              Nothing works in{" "}
              <span className="text-infrastructure-blue">isolation.</span>
            </h2>
            <p className="mt-4 text-lg text-body-text md:text-[19px]">
              Your digital workplace still has to work with everything around it.
              Identity, applications, information, security and existing workflows
              all form part of the environment.
            </p>
            <div className="mt-6 grid flex-1 grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
              {ecosystemModules.map((mod) => (
                <div
                  key={mod}
                  className="bg-light-bg px-4 py-3 text-[15px] font-bold uppercase tracking-wide text-primary-navy md:text-base"
                >
                  {mod}
                </div>
              ))}
            </div>
          </div>
          <InteroperabilityGraphic className="min-h-[280px] border border-border bg-light-bg p-4 md:min-h-[360px] md:p-5" />
        </div>
      </section>

      <section className="border-b border-border bg-light-bg section-y">
        <div className="content-container">
          <SectionLabel>Adoption</SectionLabel>
          <h2 className="heading-section mt-2 max-w-3xl text-[2rem] md:text-[2.75rem]">
            Access isn&apos;t adoption.
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-body-text md:text-[19px]">
            Giving someone access does not mean the technology becomes part of
            their work. Adoption takes practical learning, relevant use cases and
            reinforcement after launch.
          </p>
          <p className="font-display mt-5 flex flex-wrap items-center gap-2 text-sm font-bold uppercase tracking-wider text-infrastructure-blue md:text-base">
            Learn → Apply → Reinforce → Adopt
          </p>
          <ul className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {adoptionItems.map((item) => (
              <li
                key={item}
                className="bg-white px-4 py-3.5 text-[16px] font-medium text-body-text md:text-[17px]"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href="/adoption" variant="secondary" size="lg">
              Explore Adoption
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary-navy section-y text-white">
        <div className="content-container">
          <SectionLabel tone="dark">Markets</SectionLabel>
          <h2 className="heading-section mt-2 max-w-3xl text-[2rem] md:text-[2.75rem] lg:text-[3.25rem]">
            Built for organizations ready to work differently.
          </h2>
          <AudienceSectorsGrid className="mt-8" onDark />
        </div>
      </section>

      <section className="border-b border-border bg-white section-y">
        <div className="content-container grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionLabel>Regional</SectionLabel>
            <h2 className="heading-section mt-2 text-[2rem] md:text-[2.75rem] lg:text-[3.25rem]">
              Built for the way the Caribbean works.
            </h2>
            <p className="mt-4 text-lg text-body-text md:text-[19px]">
              Based in Trinidad &amp; Tobago. Built to work across the Caribbean.
              Digital workplace delivery does not need to stop at a border.
            </p>
          </div>
          <div className="panel-border bg-light-bg p-7 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-infrastructure-blue">
              Regional delivery
            </p>
            <ul className="mt-5 space-y-4 text-[17px]">
              <li className="flex justify-between gap-4 border-b border-border pb-4">
                <span className="font-bold text-primary-navy">Headquarters</span>
                <span className="text-body-text">Trinidad &amp; Tobago</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-border pb-4">
                <span className="font-bold text-primary-navy">Coverage</span>
                <span className="text-body-text">Caribbean region</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-bold text-primary-navy">Delivery model</span>
                <span className="text-right text-body-text">
                  Cross-island teams, offices &amp; markets
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 bg-primary-navy section-y text-white">
        <div className="content-container grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionLabel tone="dark">Contact</SectionLabel>
            <h2 className="heading-section mt-2 text-[2rem] md:text-[2.75rem] lg:text-[3.25rem]">
              Ready to talk about your workplace?
            </h2>
            <p className="mt-4 max-w-lg text-lg text-white/75 md:text-[19px]">
              Planning a deployment, ongoing administration or adoption support?
              Send an enquiry or reach the team directly.
            </p>
            <div className="mt-8 space-y-5 border-t border-white/10 pt-8">
              <div>
                <p className="text-[13px] font-bold uppercase tracking-wider text-white/45 md:text-sm">
                  Email
                </p>
                <a
                  href={`mailto:${SALES_EMAIL}`}
                  className="mt-1 block text-lg font-semibold text-secondary-blue hover:text-white md:text-xl"
                >
                  {SALES_EMAIL}
                </a>
              </div>
              <div>
                <p className="text-[13px] font-bold uppercase tracking-wider text-white/45 md:text-sm">
                  WhatsApp
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-lg font-semibold text-white/90 hover:text-white md:text-xl"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
          <EnquiryForm variant="dark" />
        </div>
      </section>
    </>
  );
}
