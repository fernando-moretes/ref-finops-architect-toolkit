# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project overview

`finops-architect-toolkit` is a portfolio FinOps companion for AWS architects:
RI vs On-Demand calculators, S3 storage class optimizers, Lambda cost
estimators and tagging strategies. The frontend at `finops-toolkit.moretes.com` hosts
the interactive calculators.

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript 5
- Tailwind CSS 4
- GitHub Actions: CI, Frontend, Vercel, Security

## Development commands

```bash
cd frontend
npm install
npm run dev
npm run build
npm run lint
```

## Repository layout

- `frontend/app/` — landing + calculator routes
- `frontend/lib/` — pricing data and pure calculator functions (add as needed)
- `docs/` — architecture, ADRs, references to AWS pricing pages
- `.github/workflows/` — pipelines

## Conventions

- Pricing constants live in `frontend/lib/pricing.ts` with provenance comments
  pointing to the AWS Pricing page they came from.
- Calculators are pure functions (no I/O), tested with simple unit assertions.
- All money values render as USD with two decimals; currency is configurable
  later if needed.
