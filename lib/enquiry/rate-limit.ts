const WINDOW_MS = 15 * 60 * 1000;
const MAX_SUBMISSIONS = 5;

type Bucket = { count: number; windowStart: number };

const buckets = new Map<string, Bucket>();

function prune(key: string, now: number) {
  const bucket = buckets.get(key);
  if (!bucket) return;
  if (now - bucket.windowStart >= WINDOW_MS) {
    buckets.delete(key);
  }
}

/** Best-effort in-memory limit (per serverless instance). */
export function isEnquiryRateLimited(clientKey: string): boolean {
  const key = clientKey.trim() || "unknown";
  const now = Date.now();
  prune(key, now);

  const existing = buckets.get(key);
  if (!existing) {
    buckets.set(key, { count: 1, windowStart: now });
    return false;
  }

  if (now - existing.windowStart >= WINDOW_MS) {
    buckets.set(key, { count: 1, windowStart: now });
    return false;
  }

  if (existing.count >= MAX_SUBMISSIONS) {
    return true;
  }

  existing.count += 1;
  return false;
}
