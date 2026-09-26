"use server";

import { sendEnquiry, type SendEnquiryResult } from "@/lib/enquiry/send-enquiry";

export async function submitEnquiryAction(
  _prev: SendEnquiryResult | null,
  formData: FormData
): Promise<SendEnquiryResult> {
  const raw: Record<string, string | undefined> = {
    fullName: formData.get("fullName")?.toString(),
    organization: formData.get("organization")?.toString(),
    workEmail: formData.get("workEmail")?.toString(),
    phone: formData.get("phone")?.toString(),
    organizationSize: formData.get("organizationSize")?.toString(),
    areaOfInterest: formData.get("areaOfInterest")?.toString(),
    message: formData.get("message")?.toString(),
    website: formData.get("website")?.toString(),
  };

  return sendEnquiry(raw);
}
