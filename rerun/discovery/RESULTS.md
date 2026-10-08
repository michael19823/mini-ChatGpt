# Recall test results (2026-10-08)

One blind run of the recall-first design for Egypt and Jamaica, as a single Workflow: a Sonnet
discovery worker per country with a coverage map and full candidate ledger, a tool-free Sonnet
critic, a Sonnet gap fill, a Haiku triage, and Opus checks on the top 5 candidates scoring 3 or
more. Workers never saw earlier reports. Full output: `results.json`. Answer key, committed before
the results: `answer-key.md`.

## Recall against the answer key

| Lead | Old run | Pilot | This run |
|---|---|---|---|
| Egypt: baladi bakery direct-deduction reconciliation | found (5) | missed | found (3, unverified), then **dropped by triage** |
| Egypt: nursery licence tracker | found (4) | missed | found (3), not checked (beyond cap) |
| Egypt: gold shop records | found (3) | found, rejected | found (3), not checked (beyond cap) |
| Egypt: overseas recruitment agencies | missed | found (5) | found (4), Opus: 3, unverifiable |
| Egypt: NGO books and filing | missed | found (3.5) | found (3), not checked (beyond cap) |
| Egypt: real estate brokers | missed | found (3.5) | found (4), Opus: 3, confirmed |
| Jamaica: produce receipt book | found (4) | found, rejected | found (4), Opus: 3, confirmed |
| Jamaica: security-guard payroll | found (4) | found (3) | found (4), Opus: 3, confirmed |
| **Found** | **5 of 8** | **6 of 8** | **8 of 8** |

Discovery also produced 40 candidates for Egypt and 36 for Jamaica (earlier runs reported 2-3 each),
with every one of 36 and 32 coverage categories marked screened; the critic and gap fill added 10
candidates per country.

## Opus checks (top 5 per country)

| Candidate | Provisional | Opus | Verdict |
|---|---|---|---|
| Jamaica: early childhood institution compliance pack | 4 | 4 | confirmed: 2,428 ECIs, registration on paper, no ECC-specific software |
| Jamaica: short-term rental GCT and registration toolkit | 5 | 3 | unverifiable |
| Jamaica: produce receipt book | 4 | 3 | confirmed |
| Jamaica: private security compliance | 4 | 3 | confirmed |
| Jamaica: bar and rum shop licence calendar | 4 | 3 | confirmed |
| Egypt: real estate broker kit | 4 | 3 | confirmed |
| Egypt: foreign-factory registration expiry tracker | 4 | 3 | confirmed |
| Egypt: recruitment agency desk | 4 | 3 | unverifiable (the pilot's Opus check gave 5) |
| Egypt: non-hazardous waste licensee tool | 4 | 3 | refuted: the state's WIMS system does the core job |
| Egypt: hotel guest-data notification | 4 | 2 | refuted: free mandatory state system |

The pilot had rejected Jamaica's early childhood institutions; this run found the lead and Opus
confirmed it at 4.

## What leaked, and the fixes now in the skill

- **Triage dropped good leads.** Haiku dropped the bakery lead by reading "bakers use the
  ministry's payment terminal" as "a state tool already does the job" (the old Opus review held
  this lead at 5). It also dropped household employers as "not businesses", although the study
  includes households, because triage never received the study's definitions. Fix: cheap triage
  only merges duplicates and drops what the contract defines as out of scope; "already solved" and
  "won't pay" are verifier calls; every stage receives the contract's definitions.
- **The verification cap left candidates unchecked**: 10 in Egypt (including nurseries, NGOs, gold
  and holiday homes) and 6 in Jamaica. Fix: verify everything above the threshold, using a cheaper
  model for the rest if cost forces a cap.
- **Single checks are noisy near the threshold**: the recruitment desk scored 5 in the pilot's
  Opus check (about 10 searches) and 3 in this one (6 searches). Fix: same rubric and budget across
  runs, and two verifiers where a score decides the ranking; "unverifiable" stays unresolved.
- **Breadth overran the budget**: discovery used 40 searches for Egypt (budget 25-35) and 32 for
  Jamaica (12-20), because each category needs about one search. Fix: budget by the coverage map.

## Measured cost

| Stage | Egypt | Jamaica |
|---|---|---|
| Discovery (Sonnet, high) | $0.74 input + $0.40 search | $0.37 + $0.32 |
| Critic (Sonnet) and triage (Haiku) | $0.04 | $0.14 |
| Gap fill (Sonnet, high) | $0.49 + $0.25 | $0.25 + $0.19 |
| Five Opus checks | $1.13 + $0.28 | $1.10 + $0.26 |
| Output tokens (estimated) | about $1.0 | about $0.8 |
| **Total** | **about $4.3** | **about $3.4** |

That is about twice the pilot's cost for the same two countries (about $4.30 then, workers plus
checks), for 8 of 8 known leads instead of 5-6 and about ten times as many candidates. The
Workflow took 16 minutes with 2 agents at a time, and its staggered starts let agents read the
shared ~38.5K-token prompt from cache.
