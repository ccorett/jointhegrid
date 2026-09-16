"use client";

import { useState } from "react";
import { PortalShell } from "@/components/portal/portal-shell";
import { TransactionTable } from "@/components/portal/transaction-table";
import { MOCK_TRANSACTIONS } from "@/data/mock-portal-data";
import { cn } from "@/lib/utils";

const typeFilters = ["All", "Purchase", "Usage", "Adjustment"] as const;
const statusFilters = ["All", "Completed", "Pending", "Failed"] as const;

export default function PortalTransactionsPage() {
  const [typeFilter, setTypeFilter] = useState<(typeof typeFilters)[number]>("All");
  const [statusFilter, setStatusFilter] =
    useState<(typeof statusFilters)[number]>("All");

  const filtered = MOCK_TRANSACTIONS.filter((txn) => {
    if (typeFilter !== "All" && txn.type !== typeFilter) return false;
    if (statusFilter !== "All" && txn.status !== statusFilter) return false;
    return true;
  });

  return (
    <PortalShell title="Transactions">
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="self-center text-xs font-medium text-secondary-text">
            Type:
          </span>
          {typeFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setTypeFilter(f)}
              className={cn(
                "rounded-lg px-3 py-1 text-xs font-medium transition-colors",
                typeFilter === f
                  ? "bg-infrastructure-blue text-white"
                  : "border border-border bg-white text-secondary-text"
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="self-center text-xs font-medium text-secondary-text">
            Status:
          </span>
          {statusFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setStatusFilter(f)}
              className={cn(
                "rounded-lg px-3 py-1 text-xs font-medium transition-colors",
                statusFilter === f
                  ? "bg-infrastructure-blue text-white"
                  : "border border-border bg-white text-secondary-text"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-white p-6">
        <TransactionTable transactions={filtered} />
      </div>
    </PortalShell>
  );
}
