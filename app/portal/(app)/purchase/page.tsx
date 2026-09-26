"use client";

import { useState } from "react";
import { PortalShell } from "@/components/portal/portal-shell";
import { Button } from "@/components/ui/button";
import {
  CREDIT_PACKAGES,
  calculatePurchaseTotal,
} from "@/lib/pricing";
import { formatCredits, formatCurrency, cn } from "@/lib/utils";

export default function PortalPurchasePage() {
  const [step, setStep] = useState(1);
  const [selectedCredits, setSelectedCredits] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState("");
  const [currency, setCurrency] = useState<"USD" | "TTD">("USD");
  const [submitted, setSubmitted] = useState(false);

  const credits =
    selectedCredits === null
      ? parseInt(customAmount, 10) || 0
      : selectedCredits;

  const total = calculatePurchaseTotal(credits, currency);

  function handleContinue() {
    if (step < 3) setStep(step + 1);
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <PortalShell title="Purchase">
        <div className="mx-auto max-w-md rounded-xl border border-border bg-white p-8 text-center">
          <h2 className="text-xl font-light text-primary-navy">
            Purchase request submitted
          </h2>
          <p className="mt-2 text-sm font-light text-secondary-text">
            Your request for {formatCredits(credits)} credits (
            {formatCurrency(total, currency)}) has been submitted. Payment
            processing is not yet connected. This is a development placeholder.
          </p>
          <Button href="/portal" variant="secondary" className="mt-6">
            Return to Overview
          </Button>
        </div>
      </PortalShell>
    );
  }

  return (
    <PortalShell title="Purchase">
      <div className="mb-8 flex gap-2">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
              step >= s
                ? "bg-infrastructure-blue text-white"
                : "bg-border text-secondary-text"
            )}
          >
            {s}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="max-w-lg">
          <h2 className="mb-4 text-lg font-light text-primary-navy">
            Choose credit amount
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {CREDIT_PACKAGES.map((pkg) => (
              <button
                key={pkg.id}
                type="button"
                onClick={() => {
                  setSelectedCredits(pkg.credits);
                  setCustomAmount("");
                }}
                className={cn(
                  "rounded-xl border p-4 text-left transition-colors",
                  selectedCredits === pkg.credits
                    ? "border-infrastructure-blue bg-infrastructure-blue/5"
                    : "border-border bg-white hover:border-infrastructure-blue/50"
                )}
              >
                <p className="font-medium text-primary-navy">{pkg.label}</p>
              </button>
            ))}
            <button
              type="button"
              onClick={() => setSelectedCredits(null)}
              className={cn(
                "rounded-xl border p-4 text-left transition-colors sm:col-span-2",
                selectedCredits === null
                  ? "border-infrastructure-blue bg-infrastructure-blue/5"
                  : "border-border bg-white hover:border-infrastructure-blue/50"
              )}
            >
              <p className="font-medium text-primary-navy">Custom Amount</p>
              {selectedCredits === null && (
                <input
                  type="number"
                  min="100"
                  step="100"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter credit amount"
                  className="mt-2 w-full rounded-lg border border-border px-3 py-2 text-sm"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </button>
          </div>
          <Button
            className="mt-6"
            onClick={handleContinue}
            disabled={credits <= 0}
          >
            Continue
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-lg">
          <h2 className="mb-4 text-lg font-light text-primary-navy">
            Review your purchase
          </h2>
          <div className="rounded-xl border border-border bg-white p-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-secondary-text">Credit amount</span>
                <span className="font-medium tabular-nums">
                  {formatCredits(credits)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary-text">Currency</span>
                <select
                  value={currency}
                  onChange={(e) =>
                    setCurrency(e.target.value as "USD" | "TTD")
                  }
                  className="rounded border border-border px-2 py-1 text-sm"
                >
                  <option value="USD">USD</option>
                  <option value="TTD">TTD</option>
                </select>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary-text">Price</span>
                <span className="font-light text-secondary-text">
                  Placeholder pricing
                </span>
              </div>
              <div className="structural-line-h" />
              <div className="flex justify-between text-base">
                <span className="font-medium text-primary-navy">Total</span>
                <span className="font-medium tabular-nums">
                  {formatCurrency(total, currency)}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="secondary" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button onClick={handleContinue}>Continue</Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="max-w-lg">
          <h2 className="mb-4 text-lg font-light text-primary-navy">
            Complete purchase
          </h2>
          <div className="rounded-xl border border-border bg-white p-6">
            <p className="text-sm font-light text-secondary-text">
              Payment processing is not yet connected. Submitting will create a
              purchase request for {formatCredits(credits)} credits at{" "}
              {formatCurrency(total, currency)}.
            </p>
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="secondary" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button onClick={handleSubmit}>Request Purchase</Button>
          </div>
        </div>
      )}
    </PortalShell>
  );
}
