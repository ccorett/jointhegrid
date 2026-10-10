import { EnquiryForm } from "@/components/marketing/enquiry-form";
import { SectionLabel } from "@/components/marketing/section-label";
import { PHONE_DISPLAY, SALES_EMAIL } from "@/lib/contact";
import { WhatsAppPhoneLink } from "@/components/marketing/whatsapp-phone-link";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Enquiry | #jointheGRID",
  description:
    "Send an enquiry about Digital Workspace, Enterprise Intelligence and related services from #jointheGRID across the Caribbean.",
  path: "/enquiry",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Enquiry", path: "/enquiry" },
] as const;

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[...breadcrumbs]} />
    <section className="bg-dark-band section-y text-white">
      <div className="content-container grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionLabel tone="dark">Enquiry</SectionLabel>
          <h1 className="heading-contact mt-2">
            Let&apos;s talk about your workplace.
          </h1>
          <p className="text-lead mt-4 max-w-lg text-white/80">
            Planning a deployment, ongoing administration or adoption support?
            Send an enquiry or reach the team directly.
          </p>
          <div className="mt-8 space-y-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-form-label font-semibold text-white/70">
                Email
              </p>
              <a
                href={`mailto:${SALES_EMAIL}`}
                className="text-contact-channel mt-1 block font-semibold text-secondary-blue hover:text-white"
              >
                {SALES_EMAIL}
              </a>
            </div>
            <div>
              <p className="text-form-label font-semibold text-white/70">
                WhatsApp
              </p>
              <WhatsAppPhoneLink
                location="enquiry_page"
                className="text-contact-channel mt-1 block font-semibold text-white/90 hover:text-white"
              >
                {PHONE_DISPLAY}
              </WhatsAppPhoneLink>
            </div>
          </div>
        </div>
        <EnquiryForm variant="dark" source="enquiry" />
      </div>
    </section>
    </>
  );
}
