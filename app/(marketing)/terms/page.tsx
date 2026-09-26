import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { SALES_EMAIL } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms of service for #jointhegrid website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Terms governing use of the #jointhegrid website and related services."
      />
      <section className="py-16 md:py-24">
        <div className="content-container max-w-3xl space-y-6 text-[17px] leading-relaxed text-secondary-text">
          <p>
            These terms apply to your use of websites and digital services
            operated by Global Resilient Infrastructure &amp; Digitalisation Ltd.
            (&quot;#jointhegrid&quot;). This is a placeholder summary until
            formal terms are published.
          </p>
          <h2 className="font-display text-xl font-semibold text-primary-navy">
            Website use
          </h2>
          <p>
            Content on this site is provided for general information about our
            digital workplace services. Specific engagements are governed by
            separate agreements with your organization.
          </p>
          <h2 className="font-display text-xl font-semibold text-primary-navy">
            Questions
          </h2>
          <p>
            Contact{" "}
            <a
              href={`mailto:${SALES_EMAIL}`}
              className="font-medium text-infrastructure-blue hover:underline"
            >
              {SALES_EMAIL}
            </a>{" "}
            or visit our{" "}
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
