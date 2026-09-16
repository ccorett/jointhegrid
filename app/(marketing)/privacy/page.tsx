import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for #jointhegrid.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page is a placeholder. Insert your organization's privacy policy here."
      />
      <section className="py-16 md:py-24">
        <div className="content-container max-w-3xl">
          <div className="space-y-4 font-light leading-relaxed text-secondary-text">
            <p>
              Global Resilient Infrastructure &amp; Digitalisation Ltd.
              (&quot;#jointhegrid&quot;) is committed to protecting your privacy.
              This placeholder page will be replaced with a complete privacy
              policy covering data collection, use, storage and your rights.
            </p>
            <p>
              For privacy enquiries, please contact us through the{" "}
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
