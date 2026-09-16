import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Google Workspace",
  description:
    "Google Workspace deployment, administration and adoption for Caribbean organizations. Gmail, Drive, Meet, Chat and more.",
};

const apps = [
  "Gmail",
  "Calendar",
  "Drive",
  "Docs",
  "Sheets",
  "Slides",
  "Meet",
  "Chat",
  "Forms",
];

const capabilities = [
  {
    title: "Deployment",
    description:
      "Structured rollout, migration planning, domain configuration and pilot programmes tailored to your organization.",
  },
  {
    title: "Migration",
    description:
      "Move from legacy email and file systems—including Microsoft environments—with minimal disruption.",
  },
  {
    title: "Administration",
    description:
      "Ongoing management of users, groups, security policies, licensing and organizational settings.",
  },
  {
    title: "Adoption",
    description:
      "Training, workshops and reinforcement programmes that help your people use Workspace effectively.",
  },
];

export default function GoogleWorkspacePage() {
  return (
    <>
      <PageHero
        title="Work together."
        titleAccent="From anywhere."
        description="Google Workspace is the foundation of the connected workplace—bringing communication, collaboration and productivity together for your organization."
        primaryCta={{ label: "Discuss Google Workspace", href: "/contact" }}
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="The connected workplace foundation."
            description="Google Workspace brings together the tools your organization uses every day—unified under one secure, manageable environment."
            className="mb-12"
          />
          <div className="flex flex-wrap gap-3">
            {apps.map((app) => (
              <span
                key={app}
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary-navy"
              >
                {app}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-2xl font-light leading-relaxed text-secondary-text">
            Beyond individual applications, Google Workspace provides the
            organizational infrastructure for secure communication, shared
            documents, video meetings and team collaboration—with administration
            and security controls designed for enterprise use.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="content-container">
          <SectionHeading title="How we help." className="mb-12" />
          <div className="grid gap-0 md:grid-cols-2">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`py-8 ${i % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"} ${i < 2 ? "border-b border-border md:border-b-0" : ""}`}
              >
                <h3 className="mb-3 text-lg font-semibold text-primary-navy">
                  {cap.title}
                </h3>
                <p className="font-light leading-relaxed text-secondary-text">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-navy py-16 md:py-24">
        <div className="content-container text-center">
          <h2 className="text-2xl font-extralight text-white md:text-3xl">
            Ready to build your connected workplace?
          </h2>
          <div className="mt-6">
            <Button href="/contact" size="lg">
              Discuss Google Workspace
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
