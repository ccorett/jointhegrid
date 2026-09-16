import { PortalShell } from "@/components/portal/portal-shell";
import { CreditBalance } from "@/components/portal/credit-balance";
import { UsageChart } from "@/components/portal/usage-chart";
import { TransactionTable } from "@/components/portal/transaction-table";
import { Button } from "@/components/ui/button";
import {
  MOCK_USER,
  MOCK_CREDITS,
  MOCK_RECENT_ACTIVITY,
  MOCK_USAGE_BY_DAY,
} from "@/data/mock-portal-data";
import { formatCredits } from "@/lib/utils";

export default function PortalOverviewPage() {
  const greeting = getGreeting();

  return (
    <PortalShell title="Overview">
      <p className="mb-8 text-sm font-light text-secondary-text">
        {greeting}, {MOCK_USER.firstName}
      </p>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-white p-6 lg:col-span-2">
          <CreditBalance balance={MOCK_CREDITS.available} />
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
            <div>
              <p className="text-xs text-secondary-text">Current allocation</p>
              <p className="mt-1 text-lg font-light tabular-nums text-primary-navy">
                {formatCredits(MOCK_CREDITS.currentAllocation)}
              </p>
            </div>
            <div>
              <p className="text-xs text-secondary-text">Credits used</p>
              <p className="mt-1 text-lg font-light tabular-nums text-primary-navy">
                {formatCredits(MOCK_CREDITS.totalUsed)}
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/portal/purchase" size="sm">
              Purchase Credits
            </Button>
            <Button href="/portal/usage" variant="secondary" size="sm">
              View Usage
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-white p-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-secondary-text">
            Usage This Week
          </p>
          <UsageChart data={MOCK_USAGE_BY_DAY} />
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-white p-6">
        <h2 className="mb-4 text-sm font-medium text-primary-navy">
          Recent Activity
        </h2>
        <TransactionTable transactions={MOCK_RECENT_ACTIVITY} compact />
      </div>
    </PortalShell>
  );
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}
