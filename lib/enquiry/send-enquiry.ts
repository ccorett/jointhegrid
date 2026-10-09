import { sendEnquiryMail } from "@/lib/mail";
import {
  validateEnquiry,
  type EnquiryFieldErrors,
} from "@/lib/enquiry/schema";
import { isEnquiryRateLimited } from "@/lib/enquiry/rate-limit";

export type SendEnquiryResult =
  | {
      status: "delivered";
      referenceId: string;
    }
  | {
      status: "validation_error";
      errors: EnquiryFieldErrors;
    }
  | {
      status: "error";
    };

export async function sendEnquiry(
  raw: Record<string, string | undefined>,
  options?: { clientKey?: string }
): Promise<SendEnquiryResult> {
  const validated = validateEnquiry(raw);
  if (!validated.success) {
    return { status: "validation_error", errors: validated.errors };
  }

  if (options?.clientKey && isEnquiryRateLimited(options.clientKey)) {
    console.error("[enquiry] Rate limit exceeded.", {
      clientKey: options.clientKey.slice(0, 8),
    });
    return { status: "error" };
  }

  const referenceId = crypto.randomUUID();
  const mailResult = await sendEnquiryMail(validated.data);

  if (!mailResult.ok) {
    if (mailResult.reason === "not_configured") {
      console.error("[enquiry] SMTP not configured; send aborted.", {
        referenceId,
      });
    } else {
      console.error("[enquiry] SMTP delivery failed.", { referenceId });
    }
    return { status: "error" };
  }

  return { status: "delivered", referenceId };
}
