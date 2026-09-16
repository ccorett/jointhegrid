import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { LifecycleSteps } from "@/components/marketing/lifecycle-steps";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Adoption",
  description:
    "Google Workspace and Gemini Enterprise adoption programmes, training, workshops and reinforcement.",
};

const programmes = [
  "Employee onboarding",
  "Workspace training",
  "Gemini training",
  "Executive programmes",
  "ICT administrator programmes",
  "Department champions",
  "Workshops",
  "Office hours",
  "Learning resources",
  "Usage measurement",
  "Feedback collection",
  "Reinforcement activities",
];

export default function AdoptionPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Turn access into adoption."
        description="Deployment gives your organization access to technology. Adoption ensures people actually use it—turning investment into organizational value."
        primaryCta={{ label: "Build an Adoption Programme", href: "/contact" }}
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="content-container">
          <SectionHeading title="The adoption journey." className="mb-10" />
          <LifecycleSteps
            steps={[
              { label: "Learn" },
              { label: "Apply" },
              { label: "Reinforce" },
              { label: "Adopt" },
            ]}
            className="mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.map((item) => (
              <div
                key={item}
                className="border-l-2 border-infrastructure-blue/30 py-2 pl-4 text-sm font-light text-body-text"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-navy py-16 md:py-24">
        <div className="content-container text-center">
          <h2 className="text-2xl font-extralight text-white md:text-3xl">
            Build an adoption programme for your organization
          </h2>
          <div className="mt-6">
            <Button href="/contact" size="lg">
              Build an Adoption Programme
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
