import { EnquiryForm } from "@/components/marketing/enquiry-form";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
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
      <div className="content-container grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <div>
          <SectionEyebrow index="09" label="Contact" tone="dark" />
          <h1 className="heading-hero mt-3 text-3xl md:text-4xl lg:text-[2.75rem]">
            Let&apos;s talk about your workplace.
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
            Planning a deployment, ongoing administration or adoption support?
            Send an enquiry or reach the team directly.
          </p>
          <div className="mt-8 space-y-5 border-t border-white/10 pt-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/45">
                Email
              </p>
              <a
                href={`mailto:${SALES_EMAIL}`}
                className="mt-1 block text-base font-semibold text-secondary-blue hover:text-white"
              >
                {SALES_EMAIL}
              </a>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/45">
                WhatsApp
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-base font-semibold text-white/90 hover:text-white"
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
