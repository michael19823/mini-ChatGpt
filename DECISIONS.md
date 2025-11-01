# Architecture Decisions

This document explains the key architectural decisions made for the Mini ChatGPT application, including rationale, tradeoffs, and alternatives considered.

## Database: PostgreSQL + Prisma

### Decision
Use PostgreSQL as the primary database with Prisma as the ORM/query builder.

### Rationale
- **ACID Compliance**: Ensures data consistency for concurrent operations (e.g., creating conversations, updating lastMessageAt)
- **Relational Model**: Natural fit for conversations and messages with foreign key constraints
- **Cursor Pagination**: PostgreSQL's stable sorting on `(createdAt DESC, id DESC)` enables efficient cursor-based pagination without duplicate or missed records
- **Type Safety**: Prisma generates TypeScript types from schema, reducing runtime errors
- **Migrations**: Prisma's migration system provides versioned schema changes

### Schema & Migration Approach
- **Prisma Schema**: Single source of truth for database structure (`prisma/schema.prisma`)
- **Migrations**: Generated via `prisma migrate dev` during development
- **Deployment**: `prisma migrate deploy` runs in Docker container startup to ensure schema is up-to-date
- **Tradeoff**: Requires database connection before app starts, but ensures consistency

### Alternatives Considered
- **SQLite**: Simpler setup, but lacks concurrent write performance and cursor pagination stability
- **MongoDB**: Document store, but requires custom pagination logic and loses relational benefits
- **Raw SQL**: More control, but loses type safety and requires manual query management

---

## Backend: Node.js + Express + TypeScript

### Decision
Build backend with Node.js, Express framework, and TypeScript.

### Rationale
- **Full-Stack TypeScript**: Shared types between frontend and backend reduce integration bugs
- **Lightweight**: Express is minimal, allowing focused implementation without heavy framework overhead
- **Docker Efficiency**: Small Node.js Alpine images result in faster builds and smaller containers
- **Ecosystem**: Rich npm ecosystem for HTTP clients, database drivers, etc.

### Tradeoffs
- **Single-threaded**: Node.js event loop handles concurrent requests well, but CPU-intensive tasks could block
- **Runtime Type Safety**: TypeScript catches errors at compile-time, but runtime type checking still needed for external APIs

---

## LLM Adapter Pattern

### Decision
Implement a pluggable adapter system with factory pattern using `LLM_PROVIDER` environment variable.

### Structure
```typescript
interface LlmAdapter {
  complete(messages: Message[], signal?: AbortSignal): Promise<{ completion: string }>
}
```

### Rationale
- **No Code Changes**: Switch between mock and Ollama via environment variable only
- **Consistent Interface**: All adapters return `{ completion: string }`, ensuring frontend compatibility
- **Testability**: Mock adapter enables testing without external dependencies
- **Extensibility**: New providers (OpenAI, Anthropic, etc.) can be added by implementing the interface

### Retry, Timeout, and Cancel Behavior

#### Retry Logic
- **Strategy**: Retry up to 2 times (3 total attempts) for 500 errors only
- **Backoff**: Exponential backoff (500ms, 1000ms delays)
- **Rationale**: 500 errors indicate transient failures; 400/404 errors are permanent
- **Implementation**: In `messages.ts` route handler, not in adapters

#### Timeout Configuration
- **Client Timeout**: 12 seconds (matches specification requirement)
- **Backend Timeout**: 
  - Mock adapter: 12 seconds
  - Ollama adapter: 12 seconds (per spec; may need longer for model loading, but client requirement is ≤12s)
- **Tradeoff**: 12s may be too short for Ollama model loading, but spec requirement must be met. Production systems might need longer with progressive loading indicators.

#### Cancel Mechanism
- **Implementation**: Uses `AbortController` and `AbortSignal` throughout the stack
- **Frontend**: Aborts `fetch()` request via `AbortController`
- **Backend**: Propagates `AbortSignal` to HTTP client (axios)
- **Cleanup**: User message deleted from database if request is aborted
- **Tradeoff**: Client-side abort preferred over server endpoint (simpler, fewer failure modes)

---

## Pagination Model: Cursor-Based

### Decision
Use cursor-based pagination on `(createdAt DESC, id DESC)` instead of offset-based pagination.

### Implementation
```typescript
const messages = await prisma.message.findMany({
  where: { conversationId: id },
  orderBy: [{ createdAt: "desc" }, { id: "desc" }],
  take: limit + 1,  // Fetch one extra to check for more
  cursor: cursor ? { id: cursor } : undefined,
  skip: cursor ? 1 : 0,
});
```

### Rationale
- **Stability**: Cursor on `id` ensures stable pagination even if messages are created simultaneously
- **Performance**: No OFFSET means no performance degradation on large offsets
- **No Duplicates**: Stable sort prevents duplicate or missed messages when new messages arrive during pagination
- **Bidirectional**: Supports both forward and backward pagination via `prevCursor` and `nextCursor`

### Tradeoffs
- **Cannot Jump to Page**: Must paginate sequentially; cannot jump to page 10 directly
- **Implementation Complexity**: Slightly more complex than offset, but worth it for stability

### Alternatives Considered
- **Offset-Based**: Simple but unstable with concurrent writes and slow on large offsets
- **Keyset Pagination**: Similar to cursor, but cursor is more standard in GraphQL-style APIs

---

## Resilience & Error Handling

### Retry Strategy
- **Retryable Errors**: Only 500 errors (upstream service errors)
- **Non-Retryable**: Timeouts, aborts, 400/404 errors (user or configuration errors)
- **Backoff**: 500ms, 1000ms delays between retries
- **Rationale**: Retrying non-transient errors wastes resources and delays user feedback

### Error Response Format
All retryable errors include `retryAfterMs: 1000` to guide client-side retry behavior:
```json
{
  "error": "Upstream error/timeout",
  "message": "The AI service is taking too long to respond. Please try again.",
  "retryAfterMs": 1000
}
```

### Hang Detection
- **Timeout**: 12-second timeout on all LLM requests
- **Client Timeout**: Frontend also times out at 12 seconds
- **Handling**: Request aborted, user message deleted, error returned

---

## Health & Readiness Checks

### Endpoints
- **`/healthz`**: Basic liveness check (server is running)
- **`/readyz`**: Readiness check (database connection verified)

### Rationale
- **Docker Health Checks**: Enable container orchestration to restart unhealthy containers
- **Database Verification**: Ensures app is ready to serve requests before accepting traffic
- **Standard Pattern**: Follows Kubernetes-style health check conventions

---

## UI/UX Decisions

### Mobile Responsiveness
- **Material-UI Breakpoints**: Uses MUI's responsive grid system
- **Drawer Navigation**: Conversation list slides in/out on mobile
- **Tradeoff**: Drawer requires more taps on mobile, but saves screen space

### Optimistic UI
- **Conversation Deletion**: Immediate removal with 5-second undo window
- **Rationale**: Fast perceived performance, but requires careful state management
- **Tradeoff**: Complex state synchronization, but better UX than waiting for server confirmation

### Empty States
- Clear messaging when no conversations exist
- Loading states for all async operations
- Error notifications via Material-UI snackbars

---

## Docker Architecture

### Multi-Stage Builds
- Minimal final images using Alpine Linux
- Separate build and runtime stages
- Tradeoff: Slightly longer build times, but smaller images and better security

### Service Dependencies
- PostgreSQL service with health checks
- Services depend on database readiness
- Tradeoff: Sequential startup, but ensures services don't start before dependencies are ready

---

## API Design Decisions

### Endpoint Structure
- RESTful routes: `/api/conversations`, `/api/conversations/:id/messages`
- Note: Specification mentioned `/api/conversations/:id?messagesCursor=...` but implementation uses `/api/conversations/:id/messages?messagesCursor=...` for RESTful consistency

### Response Codes
- `201` for resource creation (conversations)
- `200` for successful responses with data
- `204` for successful deletion
- `404` for not found
- `500/503/504` for server errors with `retryAfterMs`

### Tradeoffs
- **Consistency**: Standard HTTP status codes improve API discoverability
- **Error Messages**: Include both `error` (machine-readable) and `message` (human-readable) fields
