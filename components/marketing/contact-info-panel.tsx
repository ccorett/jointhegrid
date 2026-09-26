import { PHONE_DISPLAY, SALES_EMAIL, WHATSAPP_URL } from "@/lib/contact";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";

export function ContactInfoPanel() {
  return (
    <div className="lg:sticky lg:top-28">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-secondary-text">
        Contact
      </p>
      <h2 className="heading-section mt-3 text-[2rem] text-primary-navy md:text-[2.75rem]">
        Speak with the team
      </h2>
      <p className="text-lead mt-4 text-secondary-text">
        Planning a deployment, need ongoing administration, or working through
        adoption? Start here.
      </p>

      <div className="mt-10 space-y-8">
        <div>
          <h3 className="text-form-label font-semibold text-primary-navy">
            Email
          </h3>
          <a
            href={`mailto:${SALES_EMAIL}`}
            className="text-contact-channel mt-2 block font-semibold text-infrastructure-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-infrastructure-blue focus-visible:ring-offset-2"
          >
            {SALES_EMAIL}
          </a>
        </div>
        <div>
          <h3 className="text-form-label font-semibold text-primary-navy">
            Call / WhatsApp
          </h3>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-contact-channel mt-2 block font-semibold text-body-text hover:text-infrastructure-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-infrastructure-blue focus-visible:ring-offset-2"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <div className="mt-10">
        <WhatsAppButton className="w-full sm:w-auto" />
      </div>
    </div>
  );
}
