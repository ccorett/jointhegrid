"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitEnquiryAction } from "@/app/actions/submit-enquiry";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/marketing/whatsapp-button";
import {
  AREAS_OF_INTEREST,
  ORGANIZATION_SIZES,
  type EnquiryFieldErrors,
} from "@/lib/enquiry/schema";
import type { SendEnquiryResult } from "@/lib/enquiry/send-enquiry";
import { SALES_EMAIL } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const initialState: SendEnquiryResult | null = null;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-base text-error md:text-[17px]" role="alert">
      {message}
    </p>
  );
}

const fieldFocusClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-infrastructure-blue focus-visible:ring-offset-2";

function inputClass(hasError: boolean, dark: boolean) {
  return cn(
    "text-form-input min-h-11 w-full rounded-sm border px-3.5 py-3 transition-colors",
    fieldFocusClass,
    dark
      ? cn(
          "border-white/15 bg-primary-navy text-white placeholder:text-white/50 focus-visible:border-secondary-blue focus-visible:ring-secondary-blue/50 focus-visible:ring-offset-dark-band",
          hasError && "border-error"
        )
      : cn(
          "border-border text-body-text focus-visible:border-infrastructure-blue focus-visible:ring-infrastructure-blue/40",
          hasError && "border-error"
        )
  );
}

function labelClass(dark: boolean) {
  return cn(
    "text-form-label mb-2 block font-semibold",
    dark ? "text-white/85" : "text-primary-navy"
  );
}

type EnquiryFormProps = {
  variant?: "light" | "dark";
};

export function EnquiryForm({ variant = "light" }: EnquiryFormProps) {
  const dark = variant === "dark";
  const [state, formAction, pending] = useActionState(
    submitEnquiryAction,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);
  const enquiryStarted = useRef(false);
  const errors: EnquiryFieldErrors =
    state?.status === "validation_error" ? state.errors : {};

  useEffect(() => {
    if (state?.status === "delivered") {
      formRef.current?.reset();
    }
  }, [state]);

  if (state?.status === "delivered") {
    return (
      <div
        className="rounded-xl border border-border bg-white p-8 md:p-10"
        role="status"
        aria-live="polite"
      >
        <h2 className="heading-section text-2xl text-primary-navy md:text-3xl">
          Thanks. Your enquiry is on the GRID.
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-secondary-text">
          We&apos;ll review your message and get back to you.
        </p>
        <div className="mt-8">
          <WhatsAppButton />
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      onFocus={() => {
        if (enquiryStarted.current) return;
        enquiryStarted.current = true;
        trackEvent("enquiry_start", { location: dark ? "enquiry_page" : "home_contact" });
      }}
      onSubmit={() => {
        trackEvent("enquiry_submit", { location: dark ? "enquiry_page" : "home_contact" });
      }}
      className={cn(
        "rounded-sm border p-6 md:p-7",
        dark ? "panel-border-dark bg-primary-navy" : "border-border bg-white"
      )}
      aria-describedby={errors.form ? "form-error" : undefined}
    >
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {state?.status === "validation_error" ? "Please correct the errors below." : null}
        {state?.status === "error" ? "Enquiry could not be sent." : null}
      </div>
      {errors.form && (
        <p id="form-error" className="mb-4 text-base text-error md:text-[17px]" role="alert">
          {errors.form}
        </p>
      )}
      {state?.status === "error" && (
        <p className="mb-4 text-base text-error md:text-[17px]" role="alert">
          We could not send your enquiry. Please email {SALES_EMAIL} or use WhatsApp.
        </p>
      )}

      {/* Honeypot */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="fullName" className={labelClass(dark)}>
            Full Name <span className="text-error">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            aria-required="true"
            autoComplete="name"
            maxLength={120}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={inputClass(!!errors.fullName, dark)}
          />
          <FieldError id="fullName-error" message={errors.fullName} />
        </div>

        <div>
          <label htmlFor="organization" className={labelClass(dark)}>
            Organization <span className="text-error">*</span>
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            aria-required="true"
            autoComplete="organization"
            maxLength={200}
            aria-invalid={!!errors.organization}
            aria-describedby={errors.organization ? "organization-error" : undefined}
            className={inputClass(!!errors.organization, dark)}
          />
          <FieldError id="organization-error" message={errors.organization} />
        </div>

        <div>
          <label htmlFor="workEmail" className={labelClass(dark)}>
            Work Email <span className="text-error">*</span>
          </label>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            required
            aria-required="true"
            autoComplete="email"
            maxLength={254}
            aria-invalid={!!errors.workEmail}
            aria-describedby={errors.workEmail ? "workEmail-error" : undefined}
            className={inputClass(!!errors.workEmail, dark)}
          />
          <FieldError id="workEmail-error" message={errors.workEmail} />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass(dark)}>
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass(!!errors.phone, dark)}
          />
          <FieldError id="phone-error" message={errors.phone} />
        </div>

        <div>
          <label htmlFor="organizationSize" className={labelClass(dark)}>
            Organization Size <span className="text-error">*</span>
          </label>
          <select
            id="organizationSize"
            name="organizationSize"
            required
            aria-required="true"
            defaultValue=""
            aria-invalid={!!errors.organizationSize}
            aria-describedby={errors.organizationSize ? "organizationSize-error" : undefined}
            className={inputClass(!!errors.organizationSize, dark)}
          >
            <option value="" disabled>
              Select size
            </option>
            {ORGANIZATION_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <FieldError id="organizationSize-error" message={errors.organizationSize} />
        </div>

        <div>
          <label htmlFor="areaOfInterest" className={labelClass(dark)}>
            Area of Interest <span className="text-error">*</span>
          </label>
          <select
            id="areaOfInterest"
            name="areaOfInterest"
            required
            aria-required="true"
            defaultValue=""
            aria-invalid={!!errors.areaOfInterest}
            aria-describedby={errors.areaOfInterest ? "areaOfInterest-error" : undefined}
            className={inputClass(!!errors.areaOfInterest, dark)}
          >
            <option value="" disabled>
              Select area
            </option>
            {AREAS_OF_INTEREST.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          <FieldError id="areaOfInterest-error" message={errors.areaOfInterest} />
        </div>

        <div>
          <label htmlFor="message" className={labelClass(dark)}>
            What are you looking to achieve? <span className="text-error">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            aria-required="true"
            maxLength={4000}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={inputClass(!!errors.message, dark)}
          />
          <FieldError id="message-error" message={errors.message} />
        </div>
      </div>

      <div className="mt-8">
        <Button
          type="submit"
          size="lg"
          disabled={pending}
          aria-busy={pending}
          className="w-full text-base sm:w-auto md:text-[17px]"
        >
          {pending ? "Sending..." : "Send Enquiry"}
        </Button>
      </div>
    </form>
  );
}
