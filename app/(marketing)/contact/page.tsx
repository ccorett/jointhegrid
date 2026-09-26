import { ContactInfoPanel } from "@/components/marketing/contact-info-panel";
import { EnquiryForm } from "@/components/marketing/enquiry-form";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact #jointhegrid about Google Workspace and Gemini Enterprise across the Caribbean.",
  path: "/contact",
  keywords: [
    "Google Workspace Trinidad and Tobago",
    "digital workplace Caribbean",
    "Gemini Enterprise Caribbean",
  ],
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-light-bg py-14 md:py-20">
        <div className="content-container max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary-text">
            Contact
          </p>
          <h1 className="heading-hero mt-4 text-4xl text-primary-navy md:text-5xl lg:text-6xl">
            Let&apos;s talk about your workplace.
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="content-container grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <ContactInfoPanel />
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
