# Architecture

`finops-architect-toolkit` is a static-first Next.js application: each
calculator is a route under `frontend/app/`, backed by pure pricing functions
in `frontend/lib/`. There is no database — all calculations happen client-side.

## Components

- **Frontend (Next.js 16):** landing + per-calculator pages.
- **Pricing data (`frontend/lib/pricing.ts`):** static AWS pricing constants
  with provenance comments.
- **Docs (`docs/`):** architecture notes, ADRs, references to AWS pricing.
- **CI/CD:** validate, build, scan, deploy.
- **Hosting:** Vercel; DNS via Cloudflare for `finops.moretes.com`.

## Pricing source of truth

Pricing values are static snapshots refreshed on a cadence (initially
quarterly). Each constant in `pricing.ts` includes a comment with:

- the AWS pricing page URL,
- the date the value was captured,
- the region the value is valid for.

## Roadmap

1. Ship the EC2 RI vs On-Demand calculator with break-even chart.
2. Add the S3 storage class optimizer with access-pattern presets.
3. Add the Lambda cost estimator with sliders.
4. Generate an opinionated tagging baseline downloadable as JSON.
