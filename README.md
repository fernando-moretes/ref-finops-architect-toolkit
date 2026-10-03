# FinOps Architect Toolkit

A practical FinOps toolkit for solution architects on AWS: cost calculators,
Reserved Instance vs On-Demand comparisons, S3 storage class optimizers, Lambda
cost estimators and a tagging strategy generator — designed to support
real conversations about cloud spend.

![CI](https://github.com/fernandofatech/finops-architect-toolkit/actions/workflows/ci.yml/badge.svg)
![Frontend](https://github.com/fernandofatech/finops-architect-toolkit/actions/workflows/frontend.yml/badge.svg)
![Security](https://github.com/fernandofatech/finops-architect-toolkit/actions/workflows/security.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)

## Live portfolio / Portfolio ao vivo

- **Production:** [FinOps Architect Toolkit](https://finops-toolkit.moretes.com)
- **Documentation:** [Project docs](docs/architecture.md)
- **GitHub:** [fernandofatech/finops-architect-toolkit](https://github.com/fernandofatech/finops-architect-toolkit)
- **Author:** [Fernando Francisco Azevedo](https://fernando.moretes.com) · [LinkedIn](https://www.linkedin.com/in/fernando-francisco-azevedo/) · [GitHub](https://github.com/fernandofatech)

This public repository is part of a bilingual portfolio focused on solution
architecture, AWS, AI, MCP/tooling, DevSecOps, and production-ready engineering
practices.

Este repositório público faz parte de um portfólio bilíngue focado em
arquitetura de soluções, AWS, IA, MCP/tools, DevSecOps e boas práticas de
engenharia para produção.

## What it includes

- **EC2 RI vs On-Demand** calculator with break-even analysis.
- **S3 storage class optimizer** for Standard, IA, Glacier and Deep Archive.
- **Lambda cost estimator** by invocations, duration and memory.
- **Tagging strategy generator** aligned to FinOps allocation use-cases.
- **Cost allocation report** templates.
- **Showback / chargeback** model patterns.

## Why this matters

FinOps decisions land on architects because architecture choices drive 80% of
the bill. A small toolkit that speaks the same language as procurement and
engineering shortens the conversation about what to optimize first.

## Tech stack

- Next.js 16 + React 19 · TypeScript 5 · Tailwind CSS 4
- GitHub Actions (CI, Frontend, Vercel, Security)
- Deployed on Vercel · DNS via Cloudflare

## Run locally

```bash
cd frontend
npm install
npm run dev
```

## Operations

See [OPERATIONS.md](OPERATIONS.md) and [SETUP.md](SETUP.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE) — Copyright © 2026 Fernando Francisco Azevedo.
