# Task playbooks

Short recipes for common kinds of parallel work. Each lists the shape, how to divide the work,
models, what the shared contract must pin down, the checks, and the usual failure. Model choices
follow section 5 of SKILL.md; adjust after your pilot.

Contents
1. Per-item research (countries, companies, products, people)
2. Multi-angle research on one question
3. Codebase exploration
4. Code review
5. Parallel code changes and migrations
6. Debugging independent failures
7. Extraction and classification over many documents
8. Content at scale: translation, summaries, descriptions
9. Design and decision panels
10. Verification panels

## 1. Per-item research (countries, companies, products, people)

- **Shape**: fan-out, then staged checks. One item per agent.
- **Runtime**: Workflow `pipeline()` (or a headless loop) once the list passes about 20 items.
- **Models**: Sonnet at `medium` per item (`high` for data-poor items); a Sonnet judge per item;
  Opus to verify flagged items and to repair; code to merge.
- **Contract**: the exact definition of each field (unit, period, scope, edge cases); the
  reference date; which list defines the items and how to treat disputed or ambiguous ones; a
  ranked source list; statuses `found`, `not_found`, `not_applicable`, `conflict`; and for each
  value a source URL, a short quote and an as-of date.
- **Checks**: schema and coverage in code; URL checks; outliers against peers (a value 100x the
  median is usually a unit or period error); a judge per item; a human sample.
- **Pilot items**: a data-rich case, a data-poor case, one with an ambiguous identity, one whose
  primary sources aren't in English, and one with a recent change.
- **Usual failure**: answers from training memory with no date anchoring, and units or periods
  that differ from item to item.

## 2. Multi-angle research on one question

- **Shape**: split into 3-6 angles that don't overlap and together cover the question (for
  example mechanisms, data, forecasts; or by region, by stakeholder, by time period), then
  synthesize.
- **Models**: Sonnet researchers at `medium`; Opus for the plan and the report.
- **Contract**: the user's question verbatim; the time and geographic bounds; each angle's
  boundary; one notes format (key findings, each with a source, plus gaps).
- **Checks**: before synthesis, look for contradictions between angles and for claims that rest on
  a single source; check the quotes behind the claims the conclusion depends on.
- **Usual failure**: angles that overlap, so agents search the same things and miss the rest.

## 3. Codebase exploration

- **Shape**: split by subsystem, directory or question ("where is X validated", "how does Y
  reach the database").
- **Models**: Haiku or Sonnet at `medium`. Explore agents locate code quickly but read excerpts;
  use general-purpose (or a read-only custom agent) when the answer needs whole files read. Pass
  the model explicitly: Explore otherwise runs on the main model.
- **Contract**: answer with `file:line` for every claim; mark anything unconfirmed; no edits.
- **Checks**: open a few cited `file:line` references yourself before relying on them.
- **Usual failure**: confident descriptions of code the agent never opened.

## 4. Code review

- **Shape**: split by lens (correctness, security, performance, tests, the project's rules), then
  verify each finding in a fresh context.
- **Models**: cheap gatekeeping (Haiku: is the diff trivial, already reviewed, generated?);
  Sonnet reviewers per lens; Opus to validate findings that would block a merge.
- **Contract**: the diff and the base; what counts as a real issue; "if you aren't sure an issue
  is real, don't report it"; each finding with `file:line` and a concrete failure scenario.
- **Checks**: a separate agent per finding, not the reviewer itself, either scores it 0-100
  against a fixed rubric (Anthropic's code-review plugin uses Haiku for this and drops findings
  under 80) or tries to refute it; Opus validates findings that would block a merge. Don't filter
  on the reviewers' own confidence.
- **Usual failure**: a flood of plausible nits that buries the two real bugs.

## 5. Parallel code changes and migrations

- **Shape**: discover the sites first (in code or with one agent), then fan out one agent per
  file or module, then verify.
- **Isolation**: run each writing agent in its own git worktree (`isolation: worktree`) when
  agents could touch the same files; give each a disjoint set of files.
- **Models**: Sonnet at `medium` for mechanical transformations; Opus for the tricky sites and
  for integration.
- **Contract**: the exact transformation with before-and-after examples; files in and out of
  scope; the commands that must pass; "don't refactor anything else".
- **Checks**: build, tests and lint per change; one integrator merges and runs the full suite;
  review the combined diff.
- **Usual failure**: agents that each make a different "reasonable" choice for the same pattern.
  Put the choice in the contract.

## 6. Debugging independent failures

- **Shape**: one agent per independent failure (test file, subsystem, error signature). Group
  failures that share a root cause first.
- **Models**: Sonnet at `medium` or `high`; Opus for failures that resist a first attempt.
- **Contract**: reproduce first and paste the reproduction; find the root cause, not a symptom
  patch; the fix must stay inside named files; never skip or weaken a test.
- **Checks**: the failing test passes, the rest of the suite still passes, and the diff is small
  and explained.
- **Usual failure**: "fixed" by changing the test or by a guard that hides the error.

## 7. Extraction and classification over many documents

- **Shape**: fan-out with no tools. The documents are already in hand.
- **Runtime**: the Batch API (50% off) when nothing is urgent; otherwise grouped calls of 4-8
  short documents.
- **Models**: Haiku at `medium` (`high` for strict schemas); Sonnet for documents the Haiku pass
  marks low-confidence.
- **Contract**: a schema with enums for categories (lowercase, normalized in code); definitions
  and tie-break rules for each category; "unknown" as a legal value; an evidence quote per value.
- **Checks**: schema in code; a hand-labelled gold set of 20-50 documents, weighted toward hard
  cases; agreement on a re-run of about 10 documents.
- **Usual failure**: category drift, where similar documents get different labels. Fix it with
  sharper definitions and examples, not a bigger model.

## 8. Content at scale: translation, summaries, descriptions

- **Shape**: fan-out over chunks or items, then a consistency pass.
- **Models**: Sonnet for quality-sensitive text; Haiku for short templated text.
- **Contract**: a style guide and a glossary injected into every prompt "as a hard constraint";
  length limits; what never to change (names, numbers, code, links).
- **Checks**: glossary terms used consistently; numbers and names preserved (check in code);
  length within limits; a sample read by a person.
- **Usual failure**: terminology drift between chunks. The translate-book skill solved it by
  building the glossary from sample chunks before the fan-out and injecting it everywhere.

## 9. Design and decision panels

- **Shape**: redundant. N independent attempts from deliberately different angles (for example
  simplest-first, risk-first, user-first), then parallel judges, then synthesis.
- **Models**: Sonnet or Opus for attempts, depending on difficulty; judges on a different prompt,
  ideally a different model; Opus to synthesize.
- **Contract**: the problem, the constraints and the judging rubric, shared identically; the angle
  differs per attempt.
- **Checks**: judges score against the rubric without knowing which angle produced which attempt.
- **Usual failure**: N near-identical attempts, because nothing forced the angles apart.

## 10. Verification panels

- **Shape**: redundant. Several skeptics per claim, each told to refute it, or each given a
  different lens (is it correct, is it supported, does it reproduce).
- **Models**: Sonnet skeptics for routine claims; Opus for claims a decision rests on.
- **Contract**: the claim and its cited evidence, not the reasoning that produced it; the verdicts
  (confirmed, refuted, unverifiable); the rule for the outcome (for example "drop when 2 of 3
  refute").
- **Checks**: unverifiable is recorded as unverified, never as refuted.
- **Usual failure**: verifiers who see the original reasoning and simply agree with it.
