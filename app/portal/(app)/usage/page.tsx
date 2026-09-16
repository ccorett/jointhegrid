"use client";

import { useState } from "react";
import { PortalShell } from "@/components/portal/portal-shell";
import { CreditBalance } from "@/components/portal/credit-balance";
import { UsageChart } from "@/components/portal/usage-chart";
import {
  MOCK_CREDITS,
  MOCK_USAGE_BY_DAY,
} from "@/data/mock-portal-data";
import { cn, formatCredits } from "@/lib/utils";

const filters = ["7 Days", "30 Days", "90 Days", "Custom"] as const;

export default function PortalUsagePage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("30 Days");

  const monthTotal = MOCK_USAGE_BY_DAY.reduce((sum, d) => sum + d.credits, 0);

  return (
    <PortalShell title="Usage">
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
              activeFilter === filter
                ? "bg-infrastructure-blue text-white"
                : "bg-white text-secondary-text border border-border hover:border-infrastructure-blue/50"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-white p-6">
          <p className="text-xs text-secondary-text">Usage this month</p>
          <p className="mt-1 text-2xl font-light tabular-nums text-primary-navy">
            {formatCredits(monthTotal)}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-white p-6">
          <p className="text-xs text-secondary-text">Credits consumed</p>
          <p className="mt-1 text-2xl font-light tabular-nums text-primary-navy">
            {formatCredits(MOCK_CREDITS.totalUsed)}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-white p-6">
          <CreditBalance
            balance={MOCK_CREDITS.available}
            label="Remaining balance"
            size="sm"
          />
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-white p-6">
        <h2 className="mb-4 text-sm font-medium text-primary-navy">
          Usage Over Time
        </h2>
        <UsageChart data={MOCK_USAGE_BY_DAY} />
      </div>

      <div className="mt-6 rounded-xl border border-border bg-white p-6">
        <h2 className="mb-4 text-sm font-medium text-primary-navy">
          Daily Usage
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pr-4 font-medium text-secondary-text">Date</th>
                <th className="pb-3 font-medium text-secondary-text">Credits</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_USAGE_BY_DAY.map((row) => (
                <tr key={row.date} className="border-b border-border/60">
                  <td className="py-3 pr-4 font-light text-body-text">
                    {row.date}
                  </td>
                  <td className="py-3 font-medium tabular-nums text-body-text">
                    {formatCredits(row.credits)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalShell>
  );
}
