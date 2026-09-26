import type { Metadata } from "next";
import Link from "next/link";
import { Phase1HeroGrid } from "@/components/brand/phase1-hero-grid";
import { BrandConnectionLines } from "@/components/brand/brand-connection-lines";
import { InteroperabilityGraphic } from "@/components/brand/interoperability-graphic";
import { AudienceSectorsGrid } from "@/components/brand/audience-sectors-grid";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/marketing/enquiry-form";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
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
    pillar: "Pillar 01",
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
    pillar: "Pillar 02",
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
    num: "01",
    name: "Deployment",
    headline: "Get the foundation right.",
    body: "Configuration, migration, identity, security, rollout and the move into production.",
    capabilities: [
      "Discover & configure",
      "Identity integration",
      "Existing systems & workflows",
      "Migration & rollout",
      "Hypercare",
    ],
    href: "/deployment",
    cta: "Plan a Deployment",
  },
  {
    num: "02",
    name: "Administration",
    headline: "Keep it under control.",
    body: "Users, licences, access, policies, security and day to day management of the connected workplace.",
    capabilities: [
      "User lifecycle",
      "Licences & access",
      "Security policies",
      "Reporting & support",
      "Environment review",
    ],
    href: "/administration",
    cta: "Explore Administration",
  },
  {
    num: "03",
    name: "Adoption",
    headline: "Make it part of the work.",
    body: "Onboarding, practical learning, AI use cases, champions and continued reinforcement.",
    capabilities: [
      "Onboarding",
      "Workshops & champions",
      "AI use cases",
      "Executive sessions",
      "Usage reinforcement",
    ],
    href: "/adoption",
    cta: "Explore Adoption",
  },
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
      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="content-container grid items-center gap-8 py-10 md:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:py-14">
          <div className="max-w-xl lg:max-w-none">
            <SectionEyebrow index="01" label="Digital Workplace + AI Integration" />
            <h1 className="heading-hero mt-4 text-[2.35rem] text-primary-navy sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem]">
              Bring your workplace
              <br />
              together.
            </h1>
            <p className="mt-4 max-w-lg text-[15px] leading-snug text-body-text md:text-base">
              One connected environment for the people, applications, information
              and intelligent tools your organization depends on.
            </p>
            <p className="font-display mt-3 text-sm font-bold uppercase tracking-wide text-primary-navy">
              Deployment · Administration · Adoption
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Button href="/contact" size="md">
                Let&apos;s Talk
              </Button>
              <Button href="#solutions" variant="secondary" size="md">
                Explore Solutions
              </Button>
            </div>
            <div className="mt-8 hidden divide-x divide-border border border-border sm:flex">
              {["Deploy", "Administer", "Adopt"].map((item) => (
                <span
                  key={item}
                  className="flex-1 px-4 py-2.5 text-center text-[11px] font-semibold uppercase tracking-wider text-secondary-text"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Phase1HeroGrid className="lg:max-h-[min(52vh,520px)] lg:justify-self-end" />
        </div>
      </section>

      {/* Principles */}
      <section className="relative overflow-hidden bg-primary-navy section-y">
        <BrandConnectionLines />
        <div className="content-container relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <SectionEyebrow index="02" label="The GRID" tone="dark" />
            <h2 className="heading-section mt-4 text-3xl text-white sm:text-4xl md:text-[2.75rem]">
              People.
              <br />
              Apps.
              <br />
              Information.
              <br />
              AI.
            </h2>
            <p className="font-display mt-5 text-xl font-bold text-secondary-blue md:text-2xl">
              Together on the GRID.
            </p>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-white/70 lg:pb-1">
            The modern workplace is connected. Communication, information,
            applications and intelligent tools need to work as one environment,
            not as separate pieces.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="scroll-mt-20 border-b border-border bg-light-bg section-y">
        <div className="content-container">
          <SectionEyebrow index="03" label="Solutions" />
          <h2 className="heading-section mt-3 max-w-2xl text-3xl text-primary-navy md:text-4xl">
            The connected workplace.
          </h2>

          <div className="mt-8 grid border border-border bg-border lg:grid-cols-2 lg:gap-px">
            {solutions.map((item) => (
              <article key={item.label} className="bg-white p-6 md:p-8 lg:p-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-infrastructure-blue">
                  {item.pillar} · {item.label}
                </p>
                <h3 className="heading-section mt-3 text-xl text-primary-navy md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-snug text-secondary-text">
                  {item.body}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {item.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="border-l-2 border-infrastructure-blue/50 py-0.5 pl-3 text-[13px] font-medium text-body-text"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex text-sm font-semibold text-infrastructure-blue hover:underline"
                >
                  {item.cta} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Information value */}
      <section className="border-b border-border bg-white section-y">
        <div className="content-container max-w-3xl">
          <h2 className="heading-section text-2xl text-primary-navy md:text-3xl">
            Your information already has value.{" "}
            <span className="text-infrastructure-blue">Make more of it.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-secondary-text">
            A connected workplace brings information and collaboration together.
            Intelligent tools add another way to work with that information, find
            what matters and move work forward — with the controls the
            organization requires.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 bg-primary-navy section-y text-white">
        <div className="content-container">
          <SectionEyebrow index="04" label="Services" tone="dark" />
          <h2 className="heading-section mt-3 max-w-2xl text-3xl md:text-4xl">
            Three things have to go right.
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-white/65">
            The environment has to be deployed properly, managed consistently and
            used confidently.
          </p>

          <div className="mt-8 grid border border-white/12 bg-white/10 lg:grid-cols-3 lg:gap-px">
            {services.map((item) => (
              <article key={item.num} className="bg-primary-navy p-6 md:p-7">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/20 text-xs font-bold text-secondary-blue">
                    {item.num}
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-secondary-blue">
                      {item.name}
                    </p>
                    <h3 className="heading-section mt-1 text-lg md:text-xl">
                      {item.headline}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-[14px] leading-snug text-white/65">
                  {item.body}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-4">
                  {item.capabilities.map((cap) => (
                    <li key={cap} className="text-[13px] text-white/75">
                      · {cap}
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex text-sm font-semibold text-white hover:text-secondary-blue"
                >
                  {item.cta} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nothing works in isolation */}
      <section className="border-b border-border bg-white section-y">
        <div className="content-container grid min-w-0 items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div>
            <SectionEyebrow index="05" label="Interoperability" />
            <h2 className="heading-section mt-3 text-2xl text-primary-navy md:text-3xl lg:text-[2.35rem]">
              Nothing works in{" "}
              <span className="text-infrastructure-blue">isolation.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-secondary-text">
              Your digital workplace still has to work with everything around it.
              Identity, applications, information, security and existing workflows
              all form part of the environment.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-secondary-text">
              #jointhegrid helps your workplace connect with the systems,
              applications and workflows your organization already relies on.
            </p>
          </div>
          <InteroperabilityGraphic className="border border-border bg-light-bg p-3 md:p-4" />
        </div>
      </section>

      {/* Adoption */}
      <section className="border-b border-border bg-light-bg section-y">
        <div className="content-container">
          <SectionEyebrow index="06" label="Adoption" />
          <h2 className="heading-section mt-3 max-w-2xl text-2xl text-primary-navy md:text-3xl">
            Access isn&apos;t adoption.
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-secondary-text">
            Giving someone access does not mean the technology becomes part of
            their work. Adoption takes practical learning, relevant use cases and
            reinforcement after launch.
          </p>
          <p className="font-display mt-5 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-infrastructure-blue">
            <span>Learn</span>
            <span className="text-border">→</span>
            <span>Apply</span>
            <span className="text-border">→</span>
            <span>Reinforce</span>
            <span className="text-border">→</span>
            <span>Adopt</span>
          </p>
          <ul className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {adoptionItems.map((item) => (
              <li
                key={item}
                className="bg-white px-4 py-3 text-[13px] font-medium text-body-text"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href="/adoption" variant="secondary" size="md">
              Explore Adoption
            </Button>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="bg-primary-navy section-y text-white">
        <div className="content-container">
          <SectionEyebrow index="07" label="Markets" tone="dark" />
          <h2 className="heading-section mt-3 max-w-2xl text-2xl md:text-3xl">
            Built for organizations ready to work differently.
          </h2>
          <AudienceSectorsGrid className="mt-8" onDark />
        </div>
      </section>

      {/* Regional */}
      <section className="border-b border-border bg-white section-y">
        <div className="content-container grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionEyebrow index="08" label="Regional" />
            <h2 className="heading-section mt-3 text-2xl text-primary-navy md:text-3xl">
              Built for the way the Caribbean works.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-secondary-text">
              Based in Trinidad &amp; Tobago. Built to work across the Caribbean.
              Digital workplace delivery does not need to stop at a border.
            </p>
          </div>
          <div className="panel-border bg-light-bg p-6 md:p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-infrastructure-blue">
              Regional delivery
            </p>
            <ul className="mt-4 space-y-3 text-[14px] text-body-text">
              <li className="flex justify-between gap-4 border-b border-border pb-3">
                <span className="font-semibold text-primary-navy">Headquarters</span>
                <span className="text-secondary-text">Trinidad &amp; Tobago</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-border pb-3">
                <span className="font-semibold text-primary-navy">Coverage</span>
                <span className="text-secondary-text">Caribbean region</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-semibold text-primary-navy">Delivery model</span>
                <span className="text-right text-secondary-text">
                  Cross-island teams, offices &amp; markets
                </span>
              </li>
            </ul>
            <p className="mt-5 text-[14px] leading-relaxed text-secondary-text">
              The GRID is structured for organizations working across offices,
              islands and markets — not limited to a single territory.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-primary-navy section-y text-white">
        <div className="content-container grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <SectionEyebrow index="09" label="Contact" tone="dark" />
            <h2 className="heading-section mt-3 text-2xl md:text-3xl lg:text-[2.25rem]">
              Ready to talk about your workplace?
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
              Planning a deployment, ongoing administration or adoption support?
              Send an enquiry or reach the team directly.
            </p>
            <div className="mt-8 space-y-5 border-t border-white/10 pt-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/45">
                  Email
                </p>
                <a
                  href={`mailto:${SALES_EMAIL}`}
                  className="mt-1 block text-base font-semibold text-secondary-blue hover:text-white"
                >
                  {SALES_EMAIL}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/45">
                  WhatsApp
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-base font-semibold text-white/90 hover:text-white"
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
