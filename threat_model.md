# Threat Model

## Project Overview

This repository is a pnpm TypeScript monorepo with two production artifacts: a static React/Vite marketing site in `artifacts/milesweb-clone` and an Express 5 API in `artifacts/api-server`. Shared libraries define the OpenAPI contract, generated Zod schemas, API client utilities, and PostgreSQL access through Drizzle ORM.

The current production API surface is small and appears limited to `/api/healthz`, while the frontend serves static pages and copied public assets. The `artifacts/mockup-sandbox` app is a development-only environment and should be ignored unless future evidence shows it is deployed in production. Replit-managed TLS protects traffic in production, and production runs with `NODE_ENV=production`.

## Assets

- **Frontend origin integrity** — the production site serves marketing content and public assets from its own origin. Any XSS in those assets can let an attacker run arbitrary JavaScript in visitors' browsers and alter page content, phishing flows, or outbound links.
- **API availability and response integrity** — even though the current API is minimal, clients rely on `/api` responses being authentic, correctly scoped, and not exposing internal details.
- **Database connectivity and future application data** — `lib/db` establishes privileged server-side PostgreSQL access through `DATABASE_URL`. Compromise at the API layer would expose future persisted data and the server's database privileges.
- **Secrets in environment variables** — database connection strings and any future API keys or signing secrets are high-value assets and must remain server-side.
- **Build and deployment outputs** — Vite copies files from `artifacts/milesweb-clone/public` into the production static artifact. Unsafe legacy files in that directory are production-reachable even if they are not imported by React code.

## Trust Boundaries

- **Browser → static frontend assets** — all HTML, JS, CSS, and copied public files served by the frontend are attacker-observable and execute in an untrusted browser. Any client-side script that turns user input into HTML crosses a major trust boundary.
- **Browser → API (`/api`)** — all requests entering Express are untrusted and must be validated, authenticated where needed, and safe to log.
- **API → PostgreSQL** — the API holds direct database credentials. Injection or unsafe query construction here would cross from request data into privileged storage operations.
- **Build inputs → production static output** — files placed in `artifacts/milesweb-clone/public` are promoted directly into the deployed site. Legacy static assets therefore require the same scrutiny as first-class application code.
- **Production → dev-only sandbox boundary** — `artifacts/mockup-sandbox` is intentionally excluded from production scope. Findings there should not be reported unless the threat model changes and production reachability is shown.

## Scan Anchors

- Production entry points: `artifacts/milesweb-clone/src/main.tsx`, `artifacts/milesweb-clone/public/`, `artifacts/api-server/src/index.ts`, `artifacts/api-server/src/app.ts`, `artifacts/api-server/src/routes/`.
- Highest-risk areas for this repo shape: copied static public assets, Express middleware/configuration, any future auth middleware, and server-side database access in `lib/db`.
- Public vs authenticated vs admin surfaces: frontend marketing site is public; visible API routes are public; no current admin or authenticated production surface is evident.
- Usually out of scope: `artifacts/mockup-sandbox`, generated `dist/` files unless they prove deployment behavior, and purely development tooling.

## Threat Categories

### Spoofing

If the API grows beyond health checks, all protected routes must require server-validated authentication and must not trust client-provided identity claims. Any future bearer-token support from shared client utilities must be matched by verification on the server.

### Tampering

The browser is untrusted. User-controlled values must never be inserted into HTML, script, CSS, or URLs without context-appropriate escaping or validation. Files copied from `public/` into production must be treated as live application surface, not harmless legacy content.

### Information Disclosure

The server must avoid exposing secrets, stack traces, or sensitive headers in logs or responses. Frontend code must not embed secrets, and API errors must remain generic enough that internal configuration and database details are not disclosed to unauthenticated callers.

### Denial of Service

Public API routes must remain bounded in parsing and processing cost. If the API expands, request size limits, timeouts, and route-level rate limiting will become relevant because all `/api` traffic is internet reachable.

### Elevation of Privilege

Any path from untrusted input to privileged server behavior must be constrained: database access must stay parameterized, filesystem access must remain non-user-directed, and client-side XSS must be prevented because same-origin script execution can perform actions with the application's origin and mislead users into unsafe flows.