# Instructions for development-plan agents

You are one of 10 parallel agents. Each takes one of the top-10 opportunities from
`research/global-ranking.md` and turns it into a complete, realistic development plan, covering
both the software and the business, for a **solo founder or a team of two**. Today is
2026-10-05.

Your prompt names your opportunity, its source report under `research/countries/`, and your
output file under `research/plans/`.

## 1. Read first

1. `research/brief.md`: the quality bar, the traps, and the final decision rule.
2. Your opportunity's section in its country report, plus that report's rejected and competitor
   notes.
3. The opportunity's row in `research/global-ranking.md`.

## 2. Verify before you plan (most important)

The country research only saw search snippets, so check the facts the plan depends on:

- **The legal trigger:** regulation number, dates, who is obliged, penalties, and whether it has
  been postponed.
- **Integration feasibility:** is there an API, web service, bulk upload or file format? Can a
  third party submit on the client's behalf, or is certification/homologation required? What
  would the product have to do without access (browser automation, file generation, assisted
  manual upload)?
- **Competitors:** search for anyone already doing this, including vendors who added it since the
  report. Name them, with pricing where you can find it.
- **Market size:** how many obliged businesses, and the public registry or list they appear in.

Constraints:
- Use WebSearch only. WebFetch is blocked, and GitHub tools are out of scope.
- Use **at most 15 searches**. The session has a hard cap shared by all 10 agents. If a search is
  refused, stop and write up what you have.
- Never invent facts, names, numbers or URLs. Mark anything you can't verify as "unverified" or
  "estimate", and cite sources.

If verification **kills** the idea (the trigger is postponed indefinitely, a cheap incumbent now
does it, or third parties are barred), say so at the top. Still write a short plan explaining
what would have to change for it to come back.

## 3. Write the plan

Write the plan to your output file, using these sections:

1. **Verdict up front:** one paragraph on whether you would build this, and the 3 facts that
   decide it.
2. **Verification results:** a table with columns Claim from report | What you found | Source |
   Status (confirmed / changed / unverified / contradicted).
3. **Customer and problem:**
   - the exact buyer and user;
   - the job-to-be-done;
   - the current workflow, step by step, with time and cost per step (estimates labelled);
   - the cost of failure (penalties, lost revenue).
4. **Product definition:**
   - the core loop;
   - MVP features (must-have) vs v1 vs later;
   - what is explicitly out of scope;
   - the 3–5 key screens or flows, described in words.
5. **Technical design:**
   - architecture: components, data flow, hosting;
   - stack recommendation for a solo developer, with reasons;
   - data model: the main entities;
   - integrations: each one with its method (API, file, browser automation, manual) and a
     fallback;
   - rules engine and validation;
   - security, privacy and data-residency obligations in that country (name the law);
   - audit trail and liability (what happens if a submission is wrong);
   - localisation (language, currency, tax IDs);
   - testing approach, especially against the government format.
6. **Build plan:**
   - week-by-week milestones from week 0 to first paying customer, then to v1;
   - effort estimates in developer-weeks;
   - what to fake or do manually at first (concierge MVP).
7. **Go-to-market:**
   - the ideal first 10 customers and exactly how to reach them (registry, association,
     channel partner);
   - outreach script angles;
   - channel partners (accountants, software vendors, associations);
   - launch timing against the regulatory calendar;
   - content and SEO angles in the local language.
8. **Pricing and unit economics:**
   - pricing tiers;
   - expected ACV;
   - CAC estimate by channel;
   - gross margin;
   - payment rails and how a foreign founder gets paid (local entity? merchant of record?);
   - FX risk.
9. **Company and legal setup:**
   - entity needs;
   - local partner or representative;
   - tax/VAT on digital services sold into that country;
   - contracts and terms;
   - professional liability.
10. **Financial model:** a 24-month table (monthly for months 1–12, then quarterly) with
    customers, MRR, costs and cumulative cash, and the stated assumptions behind it. Include a
    break-even month and a realistic ceiling (SAM × achievable share).
11. **Team and founder fit:** the skills and language needed, whether it's realistic for a
    non-local founder, and what local help is needed.
12. **Risks and mitigations:** regulatory, platform/government, competitive, operational and
    FX/payment risks.
13. **Validation plan before writing code:**
    - 10–15 interview targets;
    - the questions to ask;
    - pass/fail thresholds;
    - a pre-sale or letter-of-intent test.
14. **Expansion path:** adjacent workflows and other countries with the same pattern.
15. **Reassessment scorecard:** rescore each of the brief's 10 criteria (1–10), with a one-line
    reason each and the original report score next to it. Then give a new overall score and a
    one-line reason for any change of 1 point or more.

Be concrete and honest. A plan that ends with "don't build this" is a good outcome if the
evidence says so.

## 4. Final reply to the orchestrator

Compact, at most 300 words:

- the verdict (build / interview first / kill), with the new and old scores;
- the 3 deciding facts;
- the build effort to the first paying customer (in weeks);
- the month-12 MRR estimate and the break-even month;
- the biggest risk;
- any verification that changed the picture.

Do not commit or push. Write only your one file.
