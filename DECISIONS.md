# DECISIONS.md

## DB: PostgreSQL + Prisma
- ACID, relations, cursor pagination
- `prisma migrate deploy` in Docker
- Type-safe queries

## Backend: Node.js + Express + TypeScript
- Shared types with frontend
- Lightweight Docker image
- Full TS stack

## LLM Adapter
- `LLM_PROVIDER=mock|ollama`
- No code changes to switch
- Retry (2x), timeout (12s), cancel

## Pagination
- Cursor-based on `(createdAt DESC, id DESC)`
- Stable, no duplicates

## Resilience
- 500 → retry with backoff
- Hang → 12s timeout
- Cancel → aborts fetch

## Health Checks
- `/healthz`, `/readyz`