import { formatCredits, formatCurrency, formatDateTime, cn } from "@/lib/utils";

type Transaction = {
  id: string;
  date: string;
  description: string;
  type: "Purchase" | "Usage" | "Adjustment";
  credits: number;
  amount: number | null;
  status: "Completed" | "Pending" | "Failed";
};

type TransactionTableProps = {
  transactions: Transaction[];
  compact?: boolean;
};

const statusStyles = {
  Completed: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Failed: "bg-error/10 text-error",
};

export function TransactionTable({ transactions, compact = false }: TransactionTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="pb-3 pr-4 font-medium text-secondary-text">Date</th>
            <th className="pb-3 pr-4 font-medium text-secondary-text">Description</th>
            {!compact && (
              <th className="pb-3 pr-4 font-medium text-secondary-text">Type</th>
            )}
            <th className="pb-3 pr-4 font-medium text-secondary-text">Credits</th>
            {!compact && (
              <th className="pb-3 pr-4 font-medium text-secondary-text">Amount</th>
            )}
            <th className="pb-3 font-medium text-secondary-text">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id} className="border-b border-border/60">
              <td className="py-3 pr-4 font-light text-body-text whitespace-nowrap">
                {formatDateTime(txn.date)}
              </td>
              <td className="py-3 pr-4 font-light text-body-text">
                {txn.description}
              </td>
              {!compact && (
                <td className="py-3 pr-4 font-light text-secondary-text">
                  {txn.type}
                </td>
              )}
              <td
                className={cn(
                  "py-3 pr-4 font-medium tabular-nums",
                  txn.credits > 0 ? "text-success" : "text-body-text"
                )}
              >
                {txn.credits > 0 ? "+" : ""}
                {formatCredits(txn.credits)}
              </td>
              {!compact && (
                <td className="py-3 pr-4 font-light text-secondary-text">
                  {txn.amount != null ? formatCurrency(txn.amount) : "N/A"}
                </td>
              )}
              <td className="py-3">
                <span
                  className={cn(
                    "inline-block rounded-md px-2 py-0.5 text-xs font-medium",
                    statusStyles[txn.status]
                  )}
                >
                  {txn.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
