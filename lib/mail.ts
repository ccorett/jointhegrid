import nodemailer from "nodemailer";
import type { EnquiryPayload } from "@/lib/enquiry/schema";

const DEFAULT_FROM_ADDRESS = "nexxgrid@gmail.com";

function parseSecure(value: string | undefined): boolean {
  if (!value) return false;
  const normalized = value.trim().toLowerCase();
  return normalized === "true" || normalized === "1" || normalized === "yes";
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const portRaw = process.env.SMTP_PORT?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !portRaw || !user || pass === undefined || pass === "") {
    return null;
  }

  const port = Number.parseInt(portRaw, 10);
  if (!Number.isFinite(port) || port <= 0) {
    return null;
  }

  return {
    host,
    port,
    secure: parseSecure(process.env.SMTP_SECURE),
    auth: { user, pass },
  };
}

export function getContactToEmail(): string {
  return process.env.CONTACT_TO_EMAIL?.trim() || "sale@grid.co.tt";
}

function getFromAddress(): string {
  return (
    process.env.SMTP_FROM?.trim() ||
    process.env.SMTP_USER?.trim() ||
    DEFAULT_FROM_ADDRESS
  );
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildSubject(payload: EnquiryPayload): string {
  return `Website Enquiry: ${payload.organization} | ${payload.areaOfInterest}`;
}

function buildPlainText(payload: EnquiryPayload): string {
  const lines = [
    "New website enquiry",
    "",
    `Full Name: ${payload.fullName}`,
    `Organization: ${payload.organization}`,
    `Work Email: ${payload.workEmail}`,
    `Phone / WhatsApp: ${payload.phone ?? "—"}`,
    `Organization Size: ${payload.organizationSize}`,
    `Area of Interest: ${payload.areaOfInterest}`,
    "",
    "Message:",
    payload.message,
  ];
  return lines.join("\n");
}

function buildHtml(payload: EnquiryPayload): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top;color:#334155;">${escapeHtml(label)}</td><td style="padding:6px 0;vertical-align:top;color:#0f172a;">${escapeHtml(value)}</td></tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<body style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:15px;line-height:1.5;color:#0f172a;">
  <p style="margin:0 0 16px;">New website enquiry</p>
  <table style="border-collapse:collapse;max-width:560px;">
    ${row("Full Name", payload.fullName)}
    ${row("Organization", payload.organization)}
    ${row("Work Email", payload.workEmail)}
    ${row("Phone / WhatsApp", payload.phone ?? "—")}
    ${row("Organization Size", payload.organizationSize)}
    ${row("Area of Interest", payload.areaOfInterest)}
  </table>
  <p style="margin:20px 0 8px;font-weight:600;">Message</p>
  <p style="margin:0;white-space:pre-wrap;">${escapeHtml(payload.message)}</p>
</body>
</html>`;
}

export type SendEnquiryMailResult =
  | { ok: true; messageId: string }
  | { ok: false; reason: "not_configured" | "send_failed" };

/**
 * Sends an enquiry email via SMTP. Creates a fresh transporter per call (serverless-safe).
 */
export async function sendEnquiryMail(
  payload: EnquiryPayload
): Promise<SendEnquiryMailResult> {
  const smtp = getSmtpConfig();
  if (!smtp) {
    return { ok: false, reason: "not_configured" };
  }

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: smtp.auth,
  });

  try {
    const info = await transporter.sendMail({
      from: {
        name: "#jointhegrid Website",
        address: getFromAddress(),
      },
      to: getContactToEmail(),
      replyTo: payload.workEmail,
      subject: buildSubject(payload),
      text: buildPlainText(payload),
      html: buildHtml(payload),
    });

    if (!info.messageId) {
      return { ok: false, reason: "send_failed" };
    }

    return { ok: true, messageId: info.messageId };
  } catch {
    return { ok: false, reason: "send_failed" };
  } finally {
    transporter.close();
  }
}
