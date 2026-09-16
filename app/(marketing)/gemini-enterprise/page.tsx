import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Gemini Enterprise",
  description:
    "Enterprise Gemini deployment, administration, governance and adoption for Caribbean organizations.",
};

const focusAreas = [
  {
    title: "Deployment",
    description:
      "Configure Gemini for your organization with appropriate access controls, licensing and integration with Google Workspace.",
  },
  {
    title: "Administration",
    description:
      "Manage organizational settings, user access, policies and governance frameworks for responsible AI use.",
  },
  {
    title: "Governance",
    description:
      "Establish guidelines, guardrails and oversight structures for enterprise AI adoption.",
  },
  {
    title: "Organizational Workflows",
    description:
      "Integrate Gemini into the ways your teams already work—meetings, documents, email and collaboration.",
  },
  {
    title: "Employee Adoption",
    description:
      "Training and reinforcement programmes that help people use Gemini effectively and responsibly.",
  },
  {
    title: "Role-Based Use Cases",
    description:
      "Identify and enable practical applications across departments—from operations to leadership.",
  },
];

export default function GeminiEnterprisePage() {
  return (
    <>
      <PageHero
        title="Bring Gemini into"
        titleAccent="the way your organization works."
        description="Gemini Enterprise brings AI capabilities into organizational work—with the deployment, administration, controls and adoption required for enterprise use."
        primaryCta={{ label: "Discuss Gemini Enterprise", href: "/contact" }}
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="content-container">
          <SectionHeading
            title="Enterprise AI, responsibly deployed."
            description="Gemini is most valuable when it is integrated into how your organization already operates—not treated as a standalone experiment. We help you deploy, govern and adopt Gemini as part of your connected digital workplace."
            className="mb-12"
          />
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, i) => (
              <div
                key={area.title}
                className={`border-b border-border py-8 ${i % 3 !== 2 ? "lg:border-r" : ""} ${i % 2 === 0 ? "md:border-r" : ""} md:px-6`}
              >
                <h3 className="mb-3 text-base font-semibold text-primary-navy">
                  {area.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-secondary-text">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-navy py-16 md:py-24">
        <div className="content-container text-center">
          <h2 className="text-2xl font-extralight text-white md:text-3xl">
            Discuss Gemini Enterprise for your organization
          </h2>
          <div className="mt-6">
            <Button href="/contact" size="lg">
              Discuss Gemini Enterprise
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
