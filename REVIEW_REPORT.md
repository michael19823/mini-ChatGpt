# Code Review Report - Mini ChatGPT Assignment

## ✅ Requirements Met

### Docker Setup

- ✅ All Dockerfiles present (mock-llm, backend, frontend)
- ✅ docker-compose.yml configured with all services
- ✅ Database container included (PostgreSQL)
- ✅ Health checks implemented

### LLM Adapter System

- ✅ Pluggable adapter pattern implemented
- ✅ Environment variable switching (`LLM_PROVIDER`)
- ✅ Both mock and Ollama adapters exist
- ✅ Same response shape (`{ completion: string }`)

### Core Features

- ✅ Basic chat UI with send/cancel
- ✅ Input disabled during in-flight sends
- ✅ Conversation list with create/delete
- ✅ Conversation history persistence
- ✅ Optimistic delete with 5-second undo
- ✅ Cursor-based pagination for messages
- ✅ Cancel aborts backend→LLM requests
- ✅ Error handling and retries

### Storage

- ✅ Real database (PostgreSQL)
- ✅ Prisma migrations
- ✅ Data persists across restarts

### API Endpoints

- ✅ POST /api/conversations (201 response)
- ✅ GET /api/conversations (200 response)
- ✅ DELETE /api/conversations/:id (204 response)
- ✅ POST /api/conversations/:id/messages (200 response)
- ✅ GET /api/conversations/:id/messages with pagination

### Health & Readiness

- ✅ /healthz endpoint
- ✅ /readyz endpoint (checks DB)

### UI/UX

- ✅ Mobile responsive (MUI breakpoints, drawer on mobile)
- ✅ Empty states
- ✅ Loading states
- ✅ Error notifications
- ✅ Keyboard navigation support

---

## ❌ Issues Found

### 🔴 CRITICAL ISSUES

#### 1. Mock LLM Missing Required Behavior

**Location**: `mock-llm/server.js`

**Issue**: The mock LLM server is missing the required behavior from the specification:

- ❌ No 10% chance of hanging forever
- ❌ No 20% chance of returning 500 error

**Current code** (lines 14-23):

```javascript
app.post("/complete", async (req, res) => {
  const content = (req.body && req.body.content) || "";
  console.log("Mock LLM got:", content);
  const reply = "This is a mock response from a pretend LLM.";
  const delayMs = 500 + randomInt(1500);
  await new Promise((r) => setTimeout(r, delayMs));
  return res.json({ completion: reply });
});
```

**Required code** (from spec):

```javascript
app.post("/complete", async (req, res) => {
  if (Math.random() < 0.1) return; // hang forever
  if (Math.random() < 0.2)
    return res.status(500).json({ error: "mock-llm error" });
  // ... rest
});
```

**Impact**: Cannot properly test retry logic and timeout handling.

---

#### 2. Conversation Counter Not Persistent

**Location**: `backend/src/routes/conversations.ts:8`

**Issue**: Conversation counter is stored in memory, causing:

- Counter resets on server restart → duplicate titles
- Not persistent across service restarts
- Violates requirement for sequential titles: "Conversation #1", "Conversation #2", etc.

**Current implementation**:

```typescript
let convoCounter = 1; // ❌ In-memory, resets on restart

router.post("/", async (req, res) => {
  const title = `Conversation #${convoCounter++}`; // ❌ Not persistent
  // ...
});
```

**Required fix**: Calculate counter from database:

```typescript
router.post("/", async (req, res) => {
  const count = await prisma.conversation.count();
  const title = `Conversation #${count + 1}`;
  // ...
});
```

**Impact**: High - violates requirement for sequential, persistent titles.

---

#### 3. API Contract Mismatch

**Specification requires**:

```
GET /api/conversations/:id?messagesCursor=<cursor>&limit=<int>
```

**Implementation uses**:

```
GET /api/conversations/:id/messages?messagesCursor=<cursor>&limit=<int>
```

**Location**:

- Backend: `backend/src/routes/messages.ts:17`
- Frontend: `front/src/store/api.ts:163`

**Note**: This works correctly but doesn't match the specification. The frontend calls match the implementation, so functionally it works, but it's a spec deviation.

---

#### 4. Missing `retryAfterMs` in Error Responses

**Location**: `backend/src/routes/messages.ts` (error responses)

**Specification requires**:

```json
{
  "error": "Upstream error/timeout",
  "retryAfterMs": 1000
}
```

**Current implementation**: Error responses don't include `retryAfterMs` field.

**Example** (line 457-461):

```typescript
res.status(504).json({
  error: "Request timeout",
  message: "The AI service is taking too long to respond. Please try again.",
  // ❌ Missing: retryAfterMs: 1000
});
```

---

#### 5. Timeout Configuration Inconsistency

**Location**: Multiple files

**Issue**:

- Frontend timeout: 12s ✅ (matches requirement)
- Mock adapter timeout: 12s ✅ (matches requirement)
- Ollama adapter timeout: 120s ❌ (should be 12s per requirement)

**Files**:

- `front/src/store/api.ts:132` → `timeout: 12000` ✅
- `backend/src/adapters/mockAdapter.ts:16` → `timeout: 12000` ✅
- `backend/src/adapters/ollamaAdapter.ts:28` → `timeout: 120000` ❌

**Note**: Ollama may need longer for model loading, but per spec, client timeout should be ≤12s.

---

### ⚠️ MINOR ISSUES

#### 6. DECISIONS.md Too Brief

**Location**: `DECISIONS.md`

**Issue**: The file exists but is very minimal. Specification requires explanation of:

- ✅ DB choice (briefly mentioned)
- ✅ Schema & migration approach (not explained)
- ✅ Retry, timeout, cancel behavior (briefly mentioned)
- ✅ Pagination model (briefly mentioned)
- ✅ LLM adapter structure (briefly mentioned)
- ❌ Tradeoffs (missing)

**Current content**: 27 lines, mostly bullet points.
**Expected**: More detailed explanations, examples, and tradeoff discussions.

---

#### 7. Mock LLM Health Endpoint Mismatch

**Issue**: docker-compose.yml expects `/health` endpoint (line 35), but the provided mock-llm/server.js doesn't include it.

**Current**: Health endpoint exists in implementation ✅
**Note**: Actually, the implementation DOES have it (line 10-12), so this is fine.

---

#### 8. Cancel Endpoint Not Implemented

**Specification mentions** (optional):

```
POST /api/conversations/:id/cancel
```

**Implementation**: Uses client-side abort (preferred method) ✅

**Note**: This is fine - spec says "Preferred: client aborts fetch (no server endpoint required)."

---

#### 9. Undo Duration Mismatch

**Specification**: "offer an Undo for ~5 seconds"

**Implementation**: `front/src/components/ConversationList.tsx:104` uses 5000ms (5 seconds) ✅

**Actually correct** - no issue here.

---

## 📊 Summary Statistics

| Category                 | Status                                 |
| ------------------------ | -------------------------------------- |
| **Critical Issues**      | 5                                      |
| **Minor Issues**         | 2 (DECISIONS.md, minor clarifications) |
| **Requirements Met**     | ~85%                                   |
| **Ready for Submission** | ❌ No (needs fixes)                    |

---

## 🔧 Required Fixes Before Submission

1. **Fix Mock LLM** - Add 10% hang and 20% 500 error logic
2. **Fix Conversation Counter** - Make it persistent (query DB)
3. **Fix API Contract** - Match spec or update documentation
4. **Add retryAfterMs** - Include in all error responses
5. **Fix Ollama Timeout** - Should be 12s (or document why 120s)
6. **Expand DECISIONS.md** - Add more detail and tradeoffs

---

## ✅ What's Working Well

- Excellent adapter pattern implementation
- Good error handling and logging
- Proper cursor pagination
- Optimistic UI with undo working correctly
- Mobile responsiveness implemented
- Clean code structure
- Proper TypeScript usage
- Good separation of concerns

---

## 📝 Notes

The implementation is quite solid overall. The main issues are:

1. Mock LLM not matching specification behavior
2. Conversation counter not persistent
3. API endpoint path mismatch
4. Missing retryAfterMs in error responses

Most functionality works correctly, but these issues need to be addressed to fully meet the specification requirements.
