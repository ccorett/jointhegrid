"use client";

import { PortalShell } from "@/components/portal/portal-shell";
import { Button } from "@/components/ui/button";
import { MOCK_USER } from "@/data/mock-portal-data";

export default function PortalAccountPage() {
  return (
    <PortalShell title="Account">
      <div className="mx-auto max-w-2xl space-y-8">
        <section className="rounded-xl border border-border bg-white p-6">
          <h2 className="mb-4 text-sm font-medium text-primary-navy">Profile</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" value={`${MOCK_USER.firstName} ${MOCK_USER.lastName}`} />
            <Field label="Email" value={MOCK_USER.email} />
            <Field label="Phone" value={MOCK_USER.phone} />
          </div>
        </section>

        <section className="rounded-xl border border-border bg-white p-6">
          <h2 className="mb-4 text-sm font-medium text-primary-navy">
            Organization
          </h2>
          <Field label="Organization Name" value={MOCK_USER.organization} />
        </section>

        <section className="rounded-xl border border-border bg-white p-6">
          <h2 className="mb-4 text-sm font-medium text-primary-navy">
            Billing Information
          </h2>
          <p className="text-sm font-light text-secondary-text">
            Billing details can be configured when payment processing is
            connected.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-white p-6">
          <h2 className="mb-4 text-sm font-medium text-primary-navy">Security</h2>
          <Button variant="secondary" size="sm" disabled>
            Change Password
          </Button>
          <p className="mt-2 text-xs font-light text-secondary-text">
            Available when authentication is connected.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-white p-6">
          <h2 className="mb-4 text-sm font-medium text-primary-navy">
            Preferences
          </h2>
          <label htmlFor="currency" className="mb-1.5 block text-xs text-secondary-text">
            Preferred Currency
          </label>
          <select
            id="currency"
            defaultValue={MOCK_USER.preferredCurrency}
            className="rounded-lg border border-border px-3 py-2 text-sm"
          >
            <option value="USD">USD</option>
            <option value="TTD">TTD</option>
          </select>
        </section>
      </div>
    </PortalShell>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-secondary-text">{label}</p>
      <p className="mt-1 text-sm font-light text-body-text">{value}</p>
    </div>
  );
}
