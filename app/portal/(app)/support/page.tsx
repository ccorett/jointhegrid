"use client";

import { useState } from "react";
import { PortalShell } from "@/components/portal/portal-shell";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  "Contact Support",
  "Billing Question",
  "Credit Question",
  "Technical Issue",
] as const;

export default function PortalSupportPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Contact Support");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PortalShell title="Support">
      <div className="mx-auto max-w-lg">
        {submitted ? (
          <div className="rounded-xl border border-border bg-white p-8 text-center">
            <h2 className="text-xl font-light text-primary-navy">
              Message sent
            </h2>
            <p className="mt-2 text-sm font-light text-secondary-text">
              Your support request has been recorded. This form is a frontend
              placeholder—connect to your support workflow when ready.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                    category === cat
                      ? "bg-infrastructure-blue text-white"
                      : "border border-border bg-white text-secondary-text"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-white p-6 space-y-4"
            >
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-primary-navy">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  defaultValue={category}
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-infrastructure-blue focus:outline-none focus:ring-1 focus:ring-infrastructure-blue"
                />
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
              <Button type="submit">Send Message</Button>
            </form>
          </>
        )}
      </div>
    </PortalShell>
  );
}
