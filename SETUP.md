# Setup — Vercel + Cloudflare

Connect this repository to Vercel and expose it on `finops-toolkit.moretes.com`.

## 1. Vercel project

https://vercel.com → **Add New… → Project** → import
`fernandofatech/finops-architect-toolkit`. Framework: Next.js. Root directory:
`frontend`. Click **Deploy**.

## 2. IDs and token

Copy `Project ID` (`VERCEL_PROJECT_ID`) and team ID (`VERCEL_ORG_ID`) from
**Settings → General**. Create a token at https://vercel.com/account/tokens
(`VERCEL_TOKEN`).

## 3. GitHub Actions secrets

```bash
gh secret set VERCEL_TOKEN      --body "<token>"
gh secret set VERCEL_ORG_ID     --body "<org-id>"
gh secret set VERCEL_PROJECT_ID --body "<project-id>"
```

## 4. Custom subdomain

Vercel: **Settings → Domains → Add** → `finops-toolkit.moretes.com`.

## 5. Cloudflare DNS

Add CNAME `finops` → `cname.vercel-dns.com`, **DNS only** (gray cloud).

## 6. Verify

```bash
curl -I https://finops-toolkit.moretes.com
```
