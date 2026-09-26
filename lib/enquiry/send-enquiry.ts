import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { SALES_EMAIL } from "@/lib/contact";
import {
  validateEnquiry,
  type EnquiryPayload,
  type EnquiryFieldErrors,
} from "@/lib/enquiry/schema";

/**
 * Email delivery destination (connect provider here — not Resend until approved).
 * @see lib/enquiry/README.md
 */
export const ENQUIRY_DESTINATION_EMAIL = SALES_EMAIL;

export type SendEnquiryResult =
  | {
      status: "delivered";
      referenceId: string;
    }
  | {
      status: "pending_integration";
      referenceId: string;
    }
  | {
      status: "validation_error";
      errors: EnquiryFieldErrors;
    }
  | {
      status: "error";
      message: string;
    };

async function persistEnquiry(
  payload: EnquiryPayload,
  referenceId: string
): Promise<void> {
  const dir = path.join(process.cwd(), ".data", "enquiries");
  await mkdir(dir, { recursive: true });
  const record = {
    referenceId,
    receivedAt: new Date().toISOString(),
    destinationEmail: ENQUIRY_DESTINATION_EMAIL,
    ...payload,
  };
  await appendFile(
    path.join(dir, "enquiries.jsonl"),
    `${JSON.stringify(record)}\n`,
    "utf8"
  );
}

/**
 * Validates and accepts an enquiry. Email delivery is not configured yet —
 * accepted enquiries are queued locally and marked `pending_integration`.
 */
export async function sendEnquiry(
  raw: Record<string, string | undefined>
): Promise<SendEnquiryResult> {
  const validated = validateEnquiry(raw);
  if (!validated.success) {
    return { status: "validation_error", errors: validated.errors };
  }

  const referenceId = crypto.randomUUID();

  try {
    await persistEnquiry(validated.data, referenceId);
  } catch {
    return {
      status: "error",
      message:
        "We could not record your enquiry. Please email sales@jointhegrid.net or use WhatsApp.",
    };
  }

  // When an email provider is approved, send here and return { status: 'delivered' }.
  return { status: "pending_integration", referenceId };
}
