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
import { cn } from "@/lib/utils";

const initialState: SendEnquiryResult | null = null;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-error" role="alert">
      {message}
    </p>
  );
}

function inputClass(hasError: boolean, dark: boolean) {
  return cn(
    "w-full rounded-sm border px-3.5 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-infrastructure-blue/40",
    dark
      ? cn(
          "border-white/15 bg-[#0f1729] text-white placeholder:text-white/35 focus:border-secondary-blue",
          hasError && "border-error"
        )
      : cn(
          "border-border text-body-text focus:border-infrastructure-blue focus:ring-infrastructure-blue/30",
          hasError && "border-error"
        )
  );
}

function labelClass(dark: boolean) {
  return cn(
    "mb-1.5 block text-xs font-semibold uppercase tracking-wide",
    dark ? "text-white/70" : "text-primary-navy"
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
  const errors: EnquiryFieldErrors =
    state?.status === "validation_error" ? state.errors : {};

  useEffect(() => {
    if (state?.status === "delivered") {
      formRef.current?.reset();
    }
  }, [state]);

  if (state?.status === "delivered") {
    return (
      <div className="rounded-xl border border-border bg-white p-8 md:p-10">
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

  if (state?.status === "pending_integration") {
    return (
      <div className="rounded-xl border border-border bg-light-bg p-8 md:p-10">
        <h2 className="heading-section text-2xl text-primary-navy md:text-3xl">
          Enquiry received
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-secondary-text">
          Your message has been validated and recorded (reference{" "}
          <span className="font-mono text-sm">{state.referenceId.slice(0, 8)}</span>
          ). Email delivery to our team is still being connected. Please use
          WhatsApp if you need a faster response.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <WhatsAppButton />
          <Button href={`mailto:sales@jointhegrid.net`} variant="secondary">
            Email sales@jointhegrid.net
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className={cn(
        "rounded-sm border p-5 md:p-6",
        dark ? "panel-border-dark bg-[#0f1729]" : "border-border bg-white"
      )}
      aria-describedby={errors.form ? "form-error" : undefined}
    >
      {errors.form && (
        <p id="form-error" className="mb-4 text-sm text-error" role="alert">
          {errors.form}
        </p>
      )}
      {state?.status === "error" && (
        <p className="mb-4 text-sm text-error" role="alert">
          {state.message}
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
            maxLength={4000}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={inputClass(!!errors.message, dark)}
          />
          <FieldError id="message-error" message={errors.message} />
        </div>
      </div>

      <div className="mt-8">
        <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
          {pending ? "Sending…" : "Send Enquiry"}
        </Button>
      </div>
    </form>
  );
}
