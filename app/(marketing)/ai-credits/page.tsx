import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI Credits",
  description:
    "Purchase, allocate and manage AI credits through the #jointhegrid client platform.",
};

const sections = [
  {
    title: "What AI Credits Are",
    description:
      "AI Credits provide flexible access to AI capabilities through your organization's #jointhegrid account. Purchase credits and allocate them across your organization as needed.",
  },
  {
    title: "How It Works",
    description:
      "Sign in to your client account, purchase credits, and monitor usage across your organization. Credits are consumed as your teams use AI capabilities through the platform.",
  },
  {
    title: "Purchase Credits",
    description:
      "Choose from predefined credit packages or specify a custom amount. Complete your purchase through the client portal with support for multiple currencies.",
  },
  {
    title: "Usage Visibility",
    description:
      "Track consumption over time with clear charts and reports. Understand how credits are being used across your organization.",
  },
  {
    title: "Credit Balance",
    description:
      "Your dashboard shows available credits at a glance—the primary information you need to manage your organization's AI access.",
  },
  {
    title: "Transaction History",
    description:
      "Review purchases, usage and adjustments in a clear transaction log. Filter by date, type and status.",
  },
  {
    title: "Organizational Access",
    description:
      "Manage your organization's account, billing preferences and support requests through one client portal.",
  },
];

export default function AiCreditsPage() {
  return (
    <>
      <PageHero
        eyebrow="The GRID Platform"
        title="AI Credits,"
        titleAccent="managed through the GRID."
        description="Purchase, allocate, monitor and manage your organization's AI credits through one client account."
        primaryCta={{ label: "Get AI Credits", href: "/portal/create-account" }}
        secondaryCta={{ label: "Sign In", href: "/portal/sign-in" }}
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="One platform. Clear visibility."
            description="The AI Credits platform is a product within the #jointhegrid ecosystem—not a consulting service. Manage your organization's AI credit allocations through a dedicated client account."
            className="mb-16"
          />
          <div className="grid gap-0 md:grid-cols-2">
            {sections.map((section, i) => (
              <div
                key={section.title}
                className={`border-b border-border py-8 ${i % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"}`}
              >
                <h3 className="mb-3 text-base font-semibold text-primary-navy">
                  {section.title}
                </h3>
                <p className="font-light leading-relaxed text-secondary-text">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-navy py-16 md:py-24">
        <div className="content-container text-center">
          <h2 className="text-2xl font-extralight text-white md:text-3xl">
            Get started with AI Credits
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-light text-white/70">
            Create an account or sign in to manage your organization&apos;s AI
            credit allocations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/portal/create-account" size="lg">
              Get AI Credits
            </Button>
            <Button href="/portal/sign-in" variant="outline" size="lg">
              Sign In
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
