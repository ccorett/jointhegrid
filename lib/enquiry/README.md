# Enquiry delivery

Enquiries submitted from `/contact` are validated server-side via `sendEnquiry()` in `send-enquiry.ts`.

**Destination email:** `sales@jointhegrid.net` (`ENQUIRY_DESTINATION_EMAIL`)

## Current behaviour

- Valid submissions are appended to `.data/enquiries/enquiries.jsonl` (gitignored).
- The API returns `pending_integration` until an email provider is connected.
- Do **not** show the final “Thanks. Your enquiry is on the GRID.” success state until `sendEnquiry()` returns `delivered`.

## Connecting email later

1. Add the approved provider (e.g. Resend) and environment variables.
2. In `sendEnquiry()`, after validation, send HTML/text to `ENQUIRY_DESTINATION_EMAIL`.
3. On successful send, return `{ status: 'delivered', referenceId }`.
4. Keep or remove local JSONL persistence as needed for audit.
