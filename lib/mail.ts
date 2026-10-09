import nodemailer from "nodemailer";
import type { EnquiryPayload } from "@/lib/enquiry/schema";

type SmtpLoggedError = {
  message?: string;
  code?: string;
  command?: string;
  response?: string;
  responseCode?: number;
};

const REQUIRED_ENV_VARS = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "SMTP_FROM",
  "CONTACT_TO_EMAIL",
] as const;

export function getMissingSmtpEnvVars(): string[] {
  const missing: string[] = [];
  for (const name of REQUIRED_ENV_VARS) {
    const value = process.env[name];
    if (value === undefined || value.trim() === "") {
      missing.push(name);
    }
  }
  return missing;
}

function logSmtpError(context: string, err: unknown): void {
  if (err && typeof err === "object") {
    const smtpErr = err as SmtpLoggedError;
    console.error(`[enquiry] ${context}`, {
      message: smtpErr.message,
      code: smtpErr.code,
      command: smtpErr.command,
      response: smtpErr.response,
      responseCode: smtpErr.responseCode,
    });
    return;
  }
  console.error(`[enquiry] ${context}`, { message: String(err) });
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
  const missing = getMissingSmtpEnvVars();
  if (missing.length > 0) {
    console.error("[enquiry] Missing SMTP environment variables:", missing);
    return { ok: false, reason: "not_configured" };
  }

  const host = process.env.SMTP_HOST!.trim();
  const port = Number(process.env.SMTP_PORT!.trim());
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER!.trim();
  const pass = process.env.SMTP_PASSWORD!.trim();
  const from = process.env.SMTP_FROM!.trim();
  const to = process.env.CONTACT_TO_EMAIL!.trim();

  if (!Number.isFinite(port) || port <= 0) {
    console.error("[enquiry] Invalid SMTP_PORT value.");
    return { ok: false, reason: "not_configured" };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  try {
    await transporter.verify();
  } catch (err) {
    logSmtpError("SMTP verify failed", err);
    return { ok: false, reason: "send_failed" };
  }

  try {
    const info = await transporter.sendMail({
      from: `"GRID Website" <${from}>`,
      to,
      replyTo: payload.workEmail,
      subject: buildSubject(payload),
      text: buildPlainText(payload),
      html: buildHtml(payload),
    });

    if (!info.messageId) {
      console.error("[enquiry] SMTP sendMail returned without messageId.");
      return { ok: false, reason: "send_failed" };
    }

    return { ok: true, messageId: info.messageId };
  } catch (err) {
    logSmtpError("SMTP sendMail failed", err);
    return { ok: false, reason: "send_failed" };
  } finally {
    transporter.close();
  }
}
