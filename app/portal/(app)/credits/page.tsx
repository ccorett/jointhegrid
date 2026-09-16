import { PortalShell } from "@/components/portal/portal-shell";
import { CreditBalance } from "@/components/portal/credit-balance";
import {
  MOCK_CREDITS,
  MOCK_ALLOCATION_HISTORY,
} from "@/data/mock-portal-data";
import { formatCredits, formatDate } from "@/lib/utils";

export default function PortalCreditsPage() {
  return (
    <PortalShell title="Credits">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-white p-6">
          <CreditBalance
            balance={MOCK_CREDITS.available}
            label="Available Balance"
            size="sm"
          />
        </div>
        <div className="rounded-xl border border-border bg-white p-6">
          <CreditBalance
            balance={MOCK_CREDITS.totalPurchased}
            label="Total Purchased"
            size="sm"
          />
        </div>
        <div className="rounded-xl border border-border bg-white p-6">
          <CreditBalance
            balance={MOCK_CREDITS.totalUsed}
            label="Total Used"
            size="sm"
          />
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-white p-6">
        <h2 className="mb-4 text-sm font-medium text-primary-navy">
          Allocation History
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pr-4 font-medium text-secondary-text">Date</th>
                <th className="pb-3 pr-4 font-medium text-secondary-text">Action</th>
                <th className="pb-3 pr-4 font-medium text-secondary-text">Amount</th>
                <th className="pb-3 font-medium text-secondary-text">Balance</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_ALLOCATION_HISTORY.map((entry) => (
                <tr key={entry.date + entry.action} className="border-b border-border/60">
                  <td className="py-3 pr-4 font-light text-body-text">
                    {formatDate(entry.date)}
                  </td>
                  <td className="py-3 pr-4 font-light text-body-text">
                    {entry.action}
                  </td>
                  <td className="py-3 pr-4 font-medium tabular-nums text-success">
                    +{formatCredits(entry.amount)}
                  </td>
                  <td className="py-3 font-light tabular-nums text-body-text">
                    {formatCredits(entry.balance)}
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
