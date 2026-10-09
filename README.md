# #jointhegrid

Marketing website for **#jointhegrid**. Digital Workspace + Enterprise Intelligence.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:43123](http://localhost:43123).

## Public contact email

All customer-facing mailto links and enquiry delivery use **`sale@grid.co.tt`** via `SALES_EMAIL` in `lib/contact.ts`.

## Enquiries

Contact form submissions are sent via SMTP (Nodemailer) from `lib/mail.ts`, triggered by the server action in `app/actions/submit-enquiry.ts`. Copy `.env.example` to `.env.local` for local testing.

### Vercel environment variables

In **Vercel → Project → Settings → Environment Variables**, add (Production, Preview, and Development as needed):

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE` (`true` or `false`)
- `SMTP_USER`
- `SMTP_PASSWORD`
- `CONTACT_TO_EMAIL` (`sale@grid.co.tt`)
- `SMTP_FROM` (optional; e.g. `nexxgrid@gmail.com` if your provider requires a specific From address)

Do not commit real passwords to GitHub. See `lib/enquiry/README.md` for behaviour and validation details.

## Build

```bash
npm run build
npm start
```
