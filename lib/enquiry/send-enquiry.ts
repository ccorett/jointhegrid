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
      message: string;
    };

const GENERIC_ERROR =
  "Something went wrong while sending your enquiry. Please try again or use WhatsApp.";

export async function sendEnquiry(
  raw: Record<string, string | undefined>,
  options?: { clientKey?: string }
): Promise<SendEnquiryResult> {
  const validated = validateEnquiry(raw);
  if (!validated.success) {
    return { status: "validation_error", errors: validated.errors };
  }

  if (options?.clientKey && isEnquiryRateLimited(options.clientKey)) {
    return {
      status: "error",
      message: GENERIC_ERROR,
    };
  }

  const referenceId = crypto.randomUUID();
  const mailResult = await sendEnquiryMail(validated.data);

  if (!mailResult.ok) {
    if (mailResult.reason === "not_configured") {
      console.error("[enquiry] SMTP environment variables are not configured.");
    } else {
      console.error("[enquiry] SMTP send failed.", { referenceId });
    }
    return { status: "error", message: GENERIC_ERROR };
  }

  return { status: "delivered", referenceId };
}
