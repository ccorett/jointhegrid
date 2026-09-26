export const ORGANIZATION_SIZES = [
  "1 to 10",
  "11 to 50",
  "51 to 250",
  "251 to 1,000",
  "1,000+",
] as const;

export const AREAS_OF_INTEREST = [
  "Digital Workspace",
  "AI Integration",
  "Deployment",
  "Migration",
  "Administration",
  "Adoption",
  "Not Sure Yet",
] as const;

export type OrganizationSize = (typeof ORGANIZATION_SIZES)[number];
export type AreaOfInterest = (typeof AREAS_OF_INTEREST)[number];

export type EnquiryPayload = {
  fullName: string;
  organization: string;
  workEmail: string;
  phone?: string;
  organizationSize: OrganizationSize;
  areaOfInterest: AreaOfInterest;
  message: string;
  /** Honeypot — must be empty */
  website?: string;
};

export type EnquiryFieldErrors = Partial<
  Record<keyof EnquiryPayload, string>
> & { form?: string };

export const FIELD_LIMITS = {
  fullName: 120,
  organization: 200,
  workEmail: 254,
  phone: 40,
  message: 4000,
} as const;

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEnquiry(
  raw: Record<string, string | undefined>
): { success: true; data: EnquiryPayload } | { success: false; errors: EnquiryFieldErrors } {
  const errors: EnquiryFieldErrors = {};

  if (raw.website?.trim()) {
    errors.form = "Unable to submit enquiry.";
    return { success: false, errors };
  }

  const fullName = sanitize(raw.fullName ?? "");
  const organization = sanitize(raw.organization ?? "");
  const workEmail = sanitize(raw.workEmail ?? "").toLowerCase();
  const phone = sanitize(raw.phone ?? "");
  const organizationSize = raw.organizationSize as OrganizationSize;
  const areaOfInterest = raw.areaOfInterest as AreaOfInterest;
  const message = sanitize(raw.message ?? "");

  if (!fullName) errors.fullName = "Full name is required.";
  else if (fullName.length > FIELD_LIMITS.fullName)
    errors.fullName = "Full name is too long.";

  if (!organization) errors.organization = "Organization is required.";
  else if (organization.length > FIELD_LIMITS.organization)
    errors.organization = "Organization name is too long.";

  if (!workEmail) errors.workEmail = "Work email is required.";
  else if (!EMAIL_PATTERN.test(workEmail) || workEmail.length > FIELD_LIMITS.workEmail)
    errors.workEmail = "Enter a valid work email address.";

  if (phone && phone.length > FIELD_LIMITS.phone)
    errors.phone = "Phone number is too long.";

  if (!ORGANIZATION_SIZES.includes(organizationSize))
    errors.organizationSize = "Select your organization size.";

  if (!AREAS_OF_INTEREST.includes(areaOfInterest))
    errors.areaOfInterest = "Select an area of interest.";

  if (!message) errors.message = "Please tell us what you are looking to achieve.";
  else if (message.length > FIELD_LIMITS.message)
    errors.message = "Message is too long.";

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      fullName,
      organization,
      workEmail,
      phone: phone || undefined,
      organizationSize,
      areaOfInterest,
      message,
    },
  };
}

function sanitize(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}
