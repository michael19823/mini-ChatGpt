# Expert Packages

Each specialist agent is a **self-contained skill package** in its own folder.
This is the project's take on the Claude "skill" idea (from
`awesome-claude-skills`): an expert is a portable, reviewable bundle you can drop
in without touching any code.

```
experts/
  <id>/
    expert.json   # the spec: watchlist + catalyst taxonomy (source of truth)
    SKILL.md      # the brief: the persona an LLM backend reads (auto-generated)
```

- **`expert.json`** is the machine-readable source of truth. The loader
  (`src/experts.ts`) reads and validates every `experts/*/expert.json` at
  startup and exposes them as the domain registry.
- **`SKILL.md`** is the human/LLM-readable "skill body" — the persona the Ollama
  backend uses as its system prompt. It is generated from `expert.json` by
  `npm run gen:briefs`, so the two never drift. **Edit the JSON, not the MD.**

## Add a new expert (no code changes)

1. Create `experts/<id>/expert.json`:

```json
{
  "id": "water",
  "name": "Water",
  "edge": "Slow theme; occasional discrete drought / regulation catalysts.",
  "tickers": ["XYL", "AWK", "WTRG", "ECL", "PHO", "FIW"],
  "matchTerms": ["water", "drought", "pfas", "desalination"],
  "catalysts": [
    {
      "id": "pfas-rule",
      "title": "PFAS regulation tightening",
      "keywords": ["pfas", "forever chemical", "drinking water rule"],
      "direction": "bullish",
      "tickers": ["XYL", "ECL"],
      "logic": "Tighter limits drive water-treatment demand."
    }
  ]
}
```

2. Run `npm run gen:briefs` to create `experts/water/SKILL.md`.
3. Done — `npm run domains`, the router, agents, and ledger all pick it up.

## expert.json schema

| Field | Type | Notes |
|---|---|---|
| `id` | string | Unique; matches the folder name. |
| `name` | string | Display name. |
| `edge` | string | Why the corner is under-followed. |
| `tickers` | string[] | The full watchlist (non-empty). |
| `matchTerms` | string[] | Terms the router matches to route news here (non-empty). |
| `catalysts[]` | object[] | Event taxonomy (see below). |
| `catalysts[].id` | string | Catalyst id. |
| `catalysts[].title` | string | Human title. |
| `catalysts[].keywords` | string[] | Matched against news text. |
| `catalysts[].direction` | `bullish` \| `bearish` \| `context` | Base impact. `context` = resolved by sentiment. |
| `catalysts[].logic` | string | One-line direction rationale (shown in outputs). |
| `catalysts[].tickers` | string[] (optional) | Restrict impact to a subset; defaults to whole watchlist. |

Malformed specs fail loudly at startup with the offending file path.
