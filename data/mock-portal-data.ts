/**
 * MOCK / DEMO DATA ONLY
 * Replace with API data when backend is connected.
 */

export const MOCK_USER = {
  firstName: "Alex",
  lastName: "Morgan",
  email: "alex.morgan@example.org",
  phone: "+1 (868) 555-0100",
  organization: "Example Organisation Ltd.",
  preferredCurrency: "USD" as const,
};

export const MOCK_CREDITS = {
  available: 12450,
  totalPurchased: 25000,
  totalUsed: 12550,
  currentAllocation: 15000,
};

export const MOCK_RECENT_ACTIVITY = [
  {
    id: "1",
    date: "2026-09-14T10:30:00Z",
    description: "Workplace AI usage",
    type: "Usage" as const,
    credits: -120,
    amount: null,
    status: "Completed" as const,
  },
  {
    id: "2",
    date: "2026-09-10T14:00:00Z",
    description: "Credit purchase",
    type: "Purchase" as const,
    credits: 5000,
    amount: 50.0,
    currency: "USD" as const,
    status: "Completed" as const,
  },
  {
    id: "3",
    date: "2026-09-08T09:15:00Z",
    description: "Workplace AI usage",
    type: "Usage" as const,
    credits: -85,
    amount: null,
    status: "Completed" as const,
  },
  {
    id: "4",
    date: "2026-09-05T16:45:00Z",
    description: "Allocation adjustment",
    type: "Adjustment" as const,
    credits: 500,
    amount: null,
    status: "Completed" as const,
  },
];

export const MOCK_ALLOCATION_HISTORY = [
  { date: "2026-09-10", action: "Credits purchased", amount: 5000, balance: 12450 },
  { date: "2026-09-01", action: "Monthly allocation", amount: 10000, balance: 7450 },
  { date: "2026-08-15", action: "Credits purchased", amount: 5000, balance: 7450 },
  { date: "2026-08-01", action: "Monthly allocation", amount: 10000, balance: 2450 },
];

export const MOCK_USAGE_BY_DAY = [
  { date: "Sep 8", credits: 45 },
  { date: "Sep 9", credits: 62 },
  { date: "Sep 10", credits: 38 },
  { date: "Sep 11", credits: 91 },
  { date: "Sep 12", credits: 55 },
  { date: "Sep 13", credits: 73 },
  { date: "Sep 14", credits: 120 },
  { date: "Sep 15", credits: 48 },
];

export const MOCK_TRANSACTIONS = [
  {
    id: "txn-001",
    date: "2026-09-14T10:30:00Z",
    description: "Workplace AI usage, September",
    type: "Usage" as const,
    credits: -120,
    amount: null,
    status: "Completed" as const,
  },
  {
    id: "txn-002",
    date: "2026-09-10T14:00:00Z",
    description: "Credit purchase, 5,000 credits",
    type: "Purchase" as const,
    credits: 5000,
    amount: 50.0,
    status: "Completed" as const,
  },
  {
    id: "txn-003",
    date: "2026-09-08T09:15:00Z",
    description: "Workplace AI usage",
    type: "Usage" as const,
    credits: -85,
    amount: null,
    status: "Completed" as const,
  },
  {
    id: "txn-004",
    date: "2026-09-05T16:45:00Z",
    description: "Allocation adjustment",
    type: "Adjustment" as const,
    credits: 500,
    amount: null,
    status: "Completed" as const,
  },
  {
    id: "txn-005",
    date: "2026-09-01T08:00:00Z",
    description: "Credit purchase, 10,000 credits",
    type: "Purchase" as const,
    credits: 10000,
    amount: 100.0,
    status: "Completed" as const,
  },
  {
    id: "txn-006",
    date: "2026-08-28T11:20:00Z",
    description: "Purchase request, pending approval",
    type: "Purchase" as const,
    credits: 2500,
    amount: 25.0,
    status: "Pending" as const,
  },
];
