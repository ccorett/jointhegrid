import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { SALES_EMAIL } from "@/lib/contact";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms | #jointheGRID",
  description:
    "Terms governing use of the #jointheGRID website and related services from Global Resilient Infrastructure & Digitalisation Ltd.",
  path: "/terms",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Terms", path: "/terms" },
] as const;

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[...breadcrumbs]} />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Terms governing use of the #jointhegrid website and related services."
      />
      <section className="section-y-compact">
        <div className="content-container prose-width space-y-6 text-[17px] leading-relaxed text-body-text md:text-lg">
          <p>
            These terms apply to your use of the #jointhegrid website operated by
            Global Resilient Infrastructure &amp; Digitalisation Ltd. Formal
            terms for specific client engagements are set out in separate
            agreements with your organization.
          </p>
          <h2 className="font-display text-xl font-bold text-primary-navy md:text-2xl">
            Website use
          </h2>
          <p>
            Content on this site is provided for general information about our
            services. You agree to use the website lawfully and not to attempt
            to disrupt its operation.
          </p>
          <h2 className="font-display text-xl font-bold text-primary-navy md:text-2xl">
            Enquiries
          </h2>
          <p>
            Submitting an enquiry does not create a binding contract. We will
            respond in good faith and discuss scope directly with your
            organization where appropriate.
          </p>
          <h2 className="font-display text-xl font-bold text-primary-navy md:text-2xl">
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
            <Link href="/enquiry" className="font-medium text-infrastructure-blue hover:underline">
              enquiry page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
