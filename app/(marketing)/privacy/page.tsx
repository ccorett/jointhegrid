import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { SALES_EMAIL } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for #jointhegrid and Global Resilient Infrastructure & Digitalisation Ltd.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Global Resilient Infrastructure & Digitalisation Ltd. handles information you share with us."
      />
      <section className="section-y-compact">
        <div className="content-container prose-width space-y-6 text-[17px] leading-relaxed text-body-text md:text-lg">
          <p>
            Global Resilient Infrastructure &amp; Digitalisation Ltd.
            (&quot;#jointhegrid&quot;) respects your privacy. This page is a
            working placeholder pending a full legal policy. It describes our
            intended approach in plain language.
          </p>
          <h2 className="font-display text-xl font-bold text-primary-navy md:text-2xl">
            Information we collect
          </h2>
          <p>
            When you submit an enquiry through our website, we collect the
            details you provide (such as name, organization, email and message)
            so we can respond to your request.
          </p>
          <h2 className="font-display text-xl font-bold text-primary-navy md:text-2xl">
            How we use information
          </h2>
          <p>
            We use enquiry information to respond to you, discuss services and
            improve how we support organizations. We do not sell personal
            information.
          </p>
          <h2 className="font-display text-xl font-bold text-primary-navy md:text-2xl">
            Contact
          </h2>
          <p>
            Privacy questions:{" "}
            <a
              href={`mailto:${SALES_EMAIL}`}
              className="font-medium text-infrastructure-blue hover:underline"
            >
              {SALES_EMAIL}
            </a>{" "}
            or our{" "}
            <Link href="/contact" className="font-medium text-infrastructure-blue hover:underline">
              contact page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
