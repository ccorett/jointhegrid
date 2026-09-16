import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for #jointhegrid.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="This page is a placeholder. Insert your organization's terms of service here."
      />
      <section className="py-16 md:py-24">
        <div className="content-container max-w-3xl">
          <div className="space-y-4 font-light leading-relaxed text-secondary-text">
            <p>
              These terms govern your use of #jointhegrid services and the AI
              Credits platform. This placeholder page will be replaced with
              complete terms of service.
            </p>
            <p>
              For questions about these terms, please contact us through the{" "}
              <a href="/contact" className="text-infrastructure-blue hover:underline">
                contact page
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
