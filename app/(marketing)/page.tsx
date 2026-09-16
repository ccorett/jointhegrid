import type { Metadata } from "next";
import Link from "next/link";
import { GridHeroVisual } from "@/components/brand/grid-hero-visual";
import { InteroperabilityVisual } from "@/components/brand/interoperability-visual";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ServicePillar } from "@/components/marketing/service-pillar";
import { LifecycleSteps } from "@/components/marketing/lifecycle-steps";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Digital Workplace Solutions — Google Workspace & Gemini Enterprise",
  description:
    "#jointhegrid helps organizations deploy, administer, and adopt Google Workspace and Gemini Enterprise—bringing people, applications and information together in a connected digital workplace.",
  keywords: [
    "Google Workspace Trinidad and Tobago",
    "Google Workspace Caribbean",
    "Gemini Enterprise Caribbean",
    "digital workplace solutions",
    "Google Workspace deployment",
    "Google Workspace adoption",
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="content-container grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="mb-4 text-xs font-light uppercase tracking-[0.2em] text-secondary-text">
              Digital Workplace Solutions
            </p>
            <h1 className="text-4xl font-extralight leading-[1.1] tracking-tight text-primary-navy md:text-5xl lg:text-6xl">
              A connected workplace
              <br />
              <span className="font-normal">for a brighter tomorrow.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-secondary-text md:text-lg">
              #jointhegrid helps organizations deploy, administer, and adopt
              Google Workspace and Gemini Enterprise—bringing people,
              applications and information together in a connected digital
              workplace.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Request a Consultation
              </Button>
              <Button href="/google-workspace" variant="secondary" size="lg">
                Explore the GRID
              </Button>
            </div>
          </div>
          <GridHeroVisual className="mx-auto lg:mx-0 lg:ml-auto" />
        </div>
      </section>

      {/* Brand Statement */}
      <section className="border-b border-border py-20 md:py-28 lg:py-32">
        <div className="content-container text-center">
          <p className="text-2xl font-extralight uppercase tracking-[0.15em] text-primary-navy md:text-3xl lg:text-4xl">
            People | Apps | Information | Together
          </p>
          <div className="mx-auto mt-12 max-w-lg">
            <div className="structural-line-h mb-8" />
            <p className="text-xl font-extralight leading-relaxed text-primary-navy md:text-2xl">
              Technology creates the workplace.
            </p>
            <p className="mt-2 text-xl font-light leading-relaxed text-secondary-text md:text-2xl">
              Connection makes it work.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="content-container">
          <SectionHeading title="The technology behind the GRID." className="mb-16" />
          <div className="grid md:grid-cols-2">
            <div className="border-b border-border py-10 md:border-b-0 md:border-r md:py-0 md:pr-12">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-navy">
                Google Workspace
              </h3>
              <p className="mb-6 font-light leading-relaxed text-secondary-text">
                A connected environment for communication, collaboration and
                organizational productivity.
              </p>
              <Link
                href="/google-workspace"
                className="text-sm font-medium text-infrastructure-blue hover:underline"
              >
                Explore Google Workspace →
              </Link>
            </div>
            <div className="py-10 md:py-0 md:pl-12">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-navy">
                Gemini Enterprise
              </h3>
              <p className="mb-6 font-light leading-relaxed text-secondary-text">
                Bring Gemini into organizational work with the deployment,
                administration, controls and adoption required for enterprise
                use.
              </p>
              <Link
                href="/gemini-enterprise"
                className="text-sm font-medium text-infrastructure-blue hover:underline"
              >
                Explore Gemini Enterprise →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deploy. Administer. Adopt. */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="content-container">
          <h2 className="mb-16 text-4xl font-extralight tracking-tight text-primary-navy md:text-5xl lg:text-6xl">
            Deploy.
            <br />
            Administer.
            <br />
            Adopt.
          </h2>
          <div className="grid gap-0 md:grid-cols-3">
            <ServicePillar
              number="01"
              title="Deploy"
              description="Structured implementation, migration, configuration and rollout of Google Workspace and Gemini Enterprise."
              className="border-b border-border md:border-b-0 md:border-r md:pr-8"
            />
            <ServicePillar
              number="02"
              title="Administer"
              description="Ongoing management, security, user lifecycle, licensing, support and optimization."
              className="border-b border-border md:border-b-0 md:border-r md:px-8"
            />
            <ServicePillar
              number="03"
              title="Adopt"
              description="Onboarding, learning, workshops, champions programmes and reinforcement that help people use the technology effectively."
              className="md:pl-8"
            />
          </div>
        </div>
      </section>

      {/* Interoperability */}
      <section className="bg-primary-navy py-20 md:py-28">
        <div className="content-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title="Everything works better when it works together."
              description="Organizations depend on multiple technologies. #jointhegrid helps Google Workspace and Gemini Enterprise operate effectively within the systems, applications and workflows your organization already uses."
              dark
            />
          </div>
          <InteroperabilityVisual />
        </div>
      </section>

      {/* AI Credits Platform */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="content-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-light uppercase tracking-[0.2em] text-secondary-text">
              The GRID Platform
            </p>
            <h2 className="text-3xl font-extralight tracking-tight text-primary-navy md:text-4xl">
              AI Credits.
              <br />
              <span className="font-normal">One account. Flexible access.</span>
            </h2>
            <p className="mt-4 font-light leading-relaxed text-secondary-text">
              Purchase and manage AI credit allocations through the #jointhegrid
              client platform. One account for your organization to monitor
              usage, purchase credits, and track transactions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/ai-credits">Explore AI Credits</Button>
              <Button href="/portal/sign-in" variant="secondary">
                Sign In
              </Button>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-light-bg p-6">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
              <span className="text-xs font-medium uppercase tracking-wider text-secondary-text">
                Account Overview
              </span>
              <span className="rounded-md bg-infrastructure-blue/10 px-2 py-0.5 text-xs font-medium text-infrastructure-blue">
                Demo
              </span>
            </div>
            <p className="text-xs font-light uppercase tracking-wider text-secondary-text">
              Available AI Credits
            </p>
            <p className="mt-1 text-3xl font-light text-primary-navy">—</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-white p-3">
                <p className="text-xs text-secondary-text">Current allocation</p>
                <p className="mt-1 text-sm font-medium text-primary-navy">—</p>
              </div>
              <div className="rounded-lg border border-border bg-white p-3">
                <p className="text-xs text-secondary-text">Credits used</p>
                <p className="mt-1 text-sm font-medium text-primary-navy">—</p>
              </div>
            </div>
            <div className="mt-4 structural-line-h" />
            <p className="mt-4 text-xs font-light text-secondary-text">
              Sign in to view your organization&apos;s credit balance and usage.
            </p>
          </div>
        </div>
      </section>

      {/* Adoption */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="content-container">
          <SectionHeading
            title="Deployment is only the beginning."
            description="Successful workplace technology depends on people actually using it. Adoption connects deployment to real organizational value."
            className="mb-12"
          />
          <LifecycleSteps
            steps={[
              { label: "Learn" },
              { label: "Apply" },
              { label: "Reinforce" },
              { label: "Adopt" },
            ]}
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Employee onboarding",
              "Workspace learning",
              "Gemini learning",
              "Executive sessions",
              "Administrator learning",
              "Champions programmes",
              "Workshops",
              "Usage measurement",
            ].map((item) => (
              <div
                key={item}
                className="border-l-2 border-infrastructure-blue/30 py-2 pl-4 text-sm font-light text-body-text"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/adoption" variant="secondary">
              Explore Adoption
            </Button>
          </div>
        </div>
      </section>

      {/* Regional */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="content-container max-w-3xl">
          <SectionHeading
            title="Built in the Caribbean. Connected beyond it."
            description="#jointhegrid is building specialist digital workplace capability from Trinidad & Tobago for organizations across the Caribbean."
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-navy py-20 md:py-28">
        <div className="content-container text-center">
          <h2 className="text-3xl font-extralight tracking-tight text-white md:text-4xl lg:text-5xl">
            Ready to join the{" "}
            <span className="font-extrabold">GRID</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-light text-white/70">
            Let&apos;s talk about how your organization can deploy, administer
            and adopt a more connected digital workplace.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
