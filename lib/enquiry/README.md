# Enquiry delivery

Enquiries from `/contact` and the homepage block are validated server-side and sent by email via **Nodemailer** (`lib/mail.ts`).

**Destination:** `CONTACT_TO_EMAIL` (default `sale@grid.co.tt`)

## Flow

1. Client submits the form → `submitEnquiryAction` (server action).
2. `sendEnquiry()` validates input, applies honeypot + rate limiting, then calls `sendEnquiryMail()`.
3. Success UI is shown only when Nodemailer accepts the message (`status: "delivered"`).

## Environment variables

See `.env.example`. Set the same values in **Vercel → Project → Settings → Environment Variables** (never commit secrets).

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` | Mail provider SMTP hostname |
| `SMTP_PORT` | SMTP port (e.g. 587 or 465) |
| `SMTP_SECURE` | `true` for TLS on connect (typical for 465) |
| `SMTP_USER` | SMTP authentication username |
| `SMTP_PASSWORD` | SMTP authentication password |
| `CONTACT_TO_EMAIL` | Inbox for enquiries (`sale@grid.co.tt`) |
| `SMTP_FROM` | Optional From address (defaults to `SMTP_USER`; use `nexxgrid@gmail.com` if required by provider) |

Do not use `NEXT_PUBLIC_` for any SMTP values.
