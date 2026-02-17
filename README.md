# Facing North Travels

A production-ready Next.js website for Facing North Travels — booking, payments and marketing pages with Revolut payments and email integrations.

---

## Quick start ✅

Prerequisites: Node.js 18+ and npm.

1. Install

```bash
npm install
```

2. Run (development)

```bash
npm run dev
# open http://localhost:3000
```

3. Build & run (production)

```bash
npm run build
npm run start
```

---

## What’s included 🔧

- Next.js 14 + React 18
- Revolut hosted checkout + server-side helpers (webhooks)
- Transactional email via Resend; contact forms using EmailJS
- Organized component-based UI (see `components/`) and static data in `data/`
- Payment integration docs at `docs/PAYMENT_INTEGRATION.md`

---

## Environment variables (minimum) 🧩

Add these to `.env.local` or your hosting dashboard:

- `NEXT_PUBLIC_SITE_URL` — site base URL (used for canonical links)
- `NEXT_PUBLIC_REVOLUT_PUBLIC_KEY` — Revolut public key (pk_...)
- `NEXT_PUBLIC_REVOLUT_ENV` — `sandbox` | `production`
- `REVOLUT_SECRET_KEY` — Revolut secret key (sk_...)
- `RESEND_API_KEY` — API key for Resend (emails)
- `ADMIN_EMAIL` — email for admin notifications (defaults to `info@facingnorthtravels.com`)
- `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` — optional (analytics)

Note: EmailJS service/template/user IDs are currently present in the code (contact components).

---

## Important scripts 🏷️

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run Next.js lint

---

## Deployment

Deploy on Vercel (recommended) or any Node-compatible host. Ensure required env vars are configured in the host dashboard.

---

## Project structure (high level)

- `pages/` — Next.js pages & API routes
- `components/` — React UI components
- `data/` — static content used across pages
- `public/` — static assets
- `styles/` — global and module CSS
- `docs/` — integration guides (e.g., payments)

---