"use client";

import { useState } from "react";
import { PageHero } from "@/components/marketing/page-hero";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a consultation."
        description="Tell us about your organization and how we can help with Google Workspace, Gemini Enterprise, or AI Credits."
      />

      <section className="py-16 md:py-24">
        <div className="content-container max-w-xl">
          {submitted ? (
            <div className="rounded-xl border border-border bg-light-bg p-8 text-center">
              <h2 className="text-xl font-light text-primary-navy">
                Thank you for your enquiry.
              </h2>
              <p className="mt-2 font-light text-secondary-text">
                We&apos;ll be in touch shortly. This form is a frontend
                placeholder—connect to your CRM or email workflow when ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary-navy">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-infrastructure-blue focus:outline-none focus:ring-1 focus:ring-infrastructure-blue"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary-navy">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-infrastructure-blue focus:outline-none focus:ring-1 focus:ring-infrastructure-blue"
                />
              </div>
              <div>
                <label htmlFor="organization" className="mb-1.5 block text-sm font-medium text-primary-navy">
                  Organization
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-infrastructure-blue focus:outline-none focus:ring-1 focus:ring-infrastructure-blue"
                />
              </div>
              <div>
                <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-primary-navy">
                  Area of Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-infrastructure-blue focus:outline-none focus:ring-1 focus:ring-infrastructure-blue"
                >
                  <option value="workspace">Google Workspace</option>
                  <option value="gemini">Gemini Enterprise</option>
                  <option value="deployment">Deployment</option>
                  <option value="administration">Administration</option>
                  <option value="adoption">Adoption</option>
                  <option value="ai-credits">AI Credits</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary-navy">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-infrastructure-blue focus:outline-none focus:ring-1 focus:ring-infrastructure-blue"
                />
              </div>
              <Button type="submit" size="lg">
                Request a Consultation
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
