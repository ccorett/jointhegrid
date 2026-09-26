import { EnquiryForm } from "@/components/marketing/enquiry-form";
import { SectionLabel } from "@/components/marketing/section-label";
import { PHONE_DISPLAY, SALES_EMAIL, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact #jointhegrid about digital workplace and AI integration across the Caribbean.",
  path: "/contact",
  keywords: [
    "digital workplace Trinidad and Tobago",
    "digital workplace Caribbean",
    "AI integration Caribbean",
  ],
});

export default function ContactPage() {
  return (
    <section className="bg-primary-navy section-y text-white">
      <div className="content-container grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionLabel tone="dark">Contact</SectionLabel>
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
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-contact-channel mt-1 block font-semibold text-white/90 hover:text-white"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
        <EnquiryForm variant="dark" />
      </div>
    </section>
  );
}
