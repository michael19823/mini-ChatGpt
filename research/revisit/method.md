# Revisit pass: ideas dropped because of competitors

Earlier passes dropped about 1,447 ideas because a competitor, incumbent or substitute already
existed. Those passes checked only that a competitor exists, not whether it serves the market
well. This pass asks whether those competitors leave customers unhappy:

- Do customers complain about them online?
- Do they miss the real need?
- Are they overpriced for small buyers?

Where the answer is yes, the gap may still be open.

Sources:
- `candidates.jsonl`: every dropped idea, with an id, pass, country, name and the original rejection
  text;
- `countries/` reports: 1,166 ideas;
- `offline/` reports: 271 ideas;
- development-plan downgrades;
- the Florida FOG benchmark;
- Opus-review cuts.

## Phase 1: triage (no web search)

Sonnet agents read the candidates in chunks and write one JSON line per idea to
`triage/chunk_NN.jsonl`. Each line has these fields:

```json
{"id": "C0001", "country": "kenya", "idea": "short name",
 "need": 1-10,        // strength of the underlying need: pain x mandatory x frequency x market size
 "kill": 1-10,        // how decisively competitors closed the gap (10 = many cheap, good, loved products)
 "kill_type": "commercial | government-free-tool | mixed | not-competitor",
 "competitors": [{"name": "...", "url": "... or null", "type": "commercial | government | consultant | generic"}],
 "why_revisit": "one line: what might still be open (segment, price point, workflow step, language, size)",
 "priority": 1-10}    // need x (10 - kill), adjusted for whether a small founder could plausibly win
```

Rules:
- Use only what the text says. Don't invent competitor names or URLs. A URL can be null.
- `kill_type: not-competitor` covers ideas dropped for other reasons, such as a weak law or no
  market. Give these priority 1.
- Score ideas killed by a free government tool, or by a homologation or certification barrier,
  lower. Complaints don't reopen those gaps.

The top 300 ideas by priority go to phase 2, with competitors de-duplicated by name and country.

## Phase 2: one Sonnet agent per competitor

Each agent gets one competitor (name, country, the idea or ideas it killed) and uses up to 6
WebSearch calls. WebFetch is blocked, and GitHub tools are out of scope. The agent looks for:

1. **Complaints:** app-store reviews (Google Play, App Store), G2, Capterra, Trustpilot, Reddit,
   Facebook groups, local forums, and news about outages or failed filings. Search in the local
   language too.
2. **Fit gaps:** what the product doesn't do for the dropped idea's buyer, for example:
   - it serves only large firms;
   - it lacks a filing format, a language, offline or mobile use, or multi-entity support;
   - it requires hardware.
3. **Pricing:** published price and minimums, compared with what a small buyer could pay. Is it
   overpriced for the segment?
4. **Momentum:** is it actively developed, recently acquired, shut down or stagnant?

It writes `competitors/<country>--<competitor-slug>.md` with these sections:
- verdict: strong / beatable / weak / not-a-real-competitor;
- evidence bullets with sources;
- pricing;
- fit gaps;
- one line on the opening it leaves.

The usual rules apply: never invent quotes, reviews, prices or URLs; mark anything unverified as
"unverified"; and say so when no complaints are found. Finding none is a valid result.

## Phase 3: re-score and rank

For each revisited idea, combine its competitors' verdicts and re-score the brief's 10 criteria. An
idea is **revived** if every major competitor is beatable, weak or not a real competitor, and its
need is at least 6. Opus then checks every revived idea that scores 5 or higher. The output is
`ranking.md`, with revived ideas ranked alongside the current leaders from `global-ranking.md`,
`plans/reassessment.md` and `offline-ranking.md`.
