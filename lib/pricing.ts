/** Pricing configuration placeholders — replace with live pricing when available */
export const CREDIT_PACKAGES = [
  { id: "starter", credits: 1000, label: "1,000 credits" },
  { id: "growth", credits: 5000, label: "5,000 credits" },
  { id: "scale", credits: 10000, label: "10,000 credits" },
  { id: "enterprise", credits: 25000, label: "25,000 credits" },
] as const;

/** Placeholder price per credit in USD — not live pricing */
export const PRICE_PER_CREDIT_USD = 0.01;

/** Placeholder price per credit in TTD — not live pricing */
export const PRICE_PER_CREDIT_TTD = 0.068;

export function calculatePurchaseTotal(
  credits: number,
  currency: "USD" | "TTD"
): number {
  const rate =
    currency === "USD" ? PRICE_PER_CREDIT_USD : PRICE_PER_CREDIT_TTD;
  return credits * rate;
}
