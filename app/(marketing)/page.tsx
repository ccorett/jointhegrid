import type { Metadata } from "next";
import Link from "next/link";
import { Phase1HeroGrid } from "@/components/brand/phase1-hero-grid";
import { BrandConnectionLines } from "@/components/brand/brand-connection-lines";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/marketing/enquiry-form";
import { SectionLabel } from "@/components/marketing/section-label";
import {
  PHONE_DISPLAY,
  SALES_EMAIL,
  WHATSAPP_LETS_TALK_URL,
  WHATSAPP_URL,
} from "@/lib/contact";

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
    title: "Where everyday work is connected.",
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
  {
    label: "Cloud Infrastructure",
    title: "Cloud built for the systems behind the work.",
    body: "Secure environments for applications, data and digital workloads.",
    capabilities: [
      "Environment setup",
      "Compute & storage",
      "Workload migration",
      "Identity & security",
      "Monitoring",
      "Ongoing administration",
    ],
    href: "/cloud-infrastructure",
    cta: "Explore Cloud Infrastructure",
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

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-white section-y-compact">
        <div className="content-container grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <SectionLabel>Digital Workplace + AI Integration</SectionLabel>
            <h1 className="heading-hero mt-3 text-[2.5rem] text-primary-navy sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
              Connect your workplace.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-snug text-body-text md:text-[19px] md:leading-relaxed">
              One connected environment for the people, applications, information
              and intelligent tools your organization depends on.
            </p>
            <p className="font-display mt-4 max-w-xl text-lg font-bold uppercase tracking-wide text-primary-navy md:text-xl lg:text-[1.35rem] lg:leading-snug">
              People · Information · Apps · AI
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={WHATSAPP_LETS_TALK_URL} size="lg">
                Let&apos;s Talk
              </Button>
              <Button href="#solutions" variant="secondary" size="lg">
                Explore Solutions
              </Button>
            </div>
          </div>
          <Phase1HeroGrid className="w-full max-h-[min(520px,58vh)] lg:justify-self-end" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary-navy section-y text-white">
        <BrandConnectionLines />
        <div className="content-container relative max-w-4xl">
          <SectionLabel tone="dark">Connected workplace</SectionLabel>
          <h2 className="heading-section mt-3 text-[2rem] sm:text-4xl md:text-[2.75rem] lg:text-[3.5rem]">
            People.
            <br />
            Information.
            <br />
            Apps.
            <br />
            AI.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-[19px]">
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
            Digital Workspace, AI Integration and Cloud Infrastructure.
          </h2>
          <div className="mt-8 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <article key={item.label} className="bg-white p-7 md:p-9 lg:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-infrastructure-blue">
                  {item.label}
                </p>
                <h3 className="heading-section mt-3 text-xl md:text-2xl lg:text-[1.75rem]">
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

      <section id="services" className="scroll-mt-20 bg-primary-navy section-y text-white">
        <div className="content-container">
          <SectionLabel tone="dark">Services</SectionLabel>
          <h2 className="heading-section mt-2 text-[2rem] md:text-[2.75rem] lg:text-[3.25rem]">
            Deployment. Administration. Adoption.
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-white/70 md:text-[19px]">
            The environment has to be deployed properly, managed consistently and
            used confidently.
          </p>
          <div className="mt-8 grid gap-px border border-white/15 bg-white/10 lg:grid-cols-3">
            {services.map((item) => (
              <article key={item.name} className="bg-primary-navy p-7 md:p-8 lg:p-9">
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
        <div className="content-container grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          <div>
            <SectionLabel>Regional</SectionLabel>
            <h2 className="heading-region mt-2 text-primary-navy">
              Based in Trinidad &amp; Tobago. Built to work across the Caribbean.
            </h2>
            <p className="text-lead mt-4 text-body-text">
              GRID supports organizations with digital workplace and AI
              integration, with deployment, administration and adoption delivered
              for the way the region works.
            </p>
          </div>
          <div className="panel-border bg-light-bg p-7 md:p-8">
            <ul className="text-fact space-y-4">
              <li className="flex justify-between gap-4 border-b border-border pb-4">
                <span className="font-bold text-primary-navy">Headquarters</span>
                <span className="text-body-text">Trinidad &amp; Tobago</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-bold text-primary-navy">Outlook</span>
                <span className="text-right text-body-text">
                  Caribbean organizations &amp; regional capability
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-t border-white/10 bg-primary-navy section-y text-white">
        <div className="content-container grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionLabel tone="dark">Contact</SectionLabel>
            <h2 className="heading-contact mt-2">
              Ready to talk about your workplace?
            </h2>
            <p className="text-lead mt-4 max-w-lg text-white/80">
              Send an enquiry or reach the team directly.
            </p>
            <div className="mt-8 space-y-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-form-label font-semibold text-white/70">
                  Email
                </p>
                <a
                  href={`mailto:${SALES_EMAIL}`}
                  className="text-contact-channel mt-1 block font-semibold text-secondary-blue hover:text-white"
                >
                  {SALES_EMAIL}
                </a>
              </div>
              <div>
                <p className="text-form-label font-semibold text-white/70">
                  WhatsApp
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-contact-channel mt-1 block font-semibold text-white/90 hover:text-white"
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
