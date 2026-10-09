import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { SALES_EMAIL } from "@/lib/contact";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy | #jointheGRID",
  description:
    "How #jointheGRID collects, uses and protects information you share through the website and enquiry forms.",
  path: "/privacy",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy", path: "/privacy" },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[...breadcrumbs]} />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How GRID handles information you share with us."
      />
      <section className="section-y-compact">
        <div className="content-container prose-width space-y-6 text-[17px] leading-relaxed text-body-text md:text-lg">
          <p>
            Global Resilient Infrastructure &amp; Digitalisation Ltd. (#jointheGRID)
            respects your privacy. This summary describes how we handle information
            collected through this website. A fuller legal policy may be published
            after review by qualified counsel.
          </p>
          <h2 className="font-display text-xl font-bold text-primary-navy md:text-2xl">
            Information we collect
          </h2>
          <p>
            When you submit an enquiry through our website, you may provide:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Name</li>
            <li>Organization</li>
            <li>Email</li>
            <li>Phone (optional)</li>
            <li>Organization size and area of interest</li>
            <li>Enquiry details in your message</li>
          </ul>
          <p>
            We may also receive standard technical information from your browser
            when you visit the site (such as IP address and device type) through
            normal server and hosting logs.
          </p>
          <h2 className="font-display text-xl font-bold text-primary-navy md:text-2xl">
            How we use information
          </h2>
          <p>
            Enquiry information is used to respond to your request, discuss
            services, follow up on business communications and manage our
            relationship with your organization. We do not sell personal
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
