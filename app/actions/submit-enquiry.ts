"use server";

import { headers } from "next/headers";
import { sendEnquiry, type SendEnquiryResult } from "@/lib/enquiry/send-enquiry";

function clientKeyFromHeaders(headerList: Headers): string {
  const forwarded = headerList.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = headerList.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  return "unknown";
}

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

  const headerList = await headers();
  const clientKey = clientKeyFromHeaders(headerList);

  return sendEnquiry(raw, { clientKey });
}
