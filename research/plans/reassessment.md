# Reassessment of the Top 10 After Development Planning

*2026-10-05. Each top-10 opportunity from `research/global-ranking.md` was given to its own agent.
The agent checked the claims the plan depends on, then wrote a full software and business plan
(files `01`–`10` in this folder). This page compares them and re-ranks them.*

## Headline

Fact-checking lowered most scores. **Eight of ten opportunities lost 0.5–2 points**, and only two
held: the **Australia portable LSL builder** and the **mining local-content kit**. None was killed
outright, but none is the strong, uncontested gap the country research suggested.

All ten are realistic **lifestyle businesses**, not venture-scale ones. The best projections reach
about US$5k MRR at month 12, with ceilings between about US$10k and US$90k MRR.

## Side-by-side

MRR and ceilings are converted to US$ at rough current rates. They are planning estimates and
leave out founder salary unless noted.

| New rank | Opportunity | Old → new score | Verdict | Effort to first paying customer | MRR at month 12 | Break-even (costs / cumulative cash) | Realistic ceiling (MRR) | Biggest risk |
|---|---|---|---|---|---|---|---|---|
| 1 | Australia: portable LSL builder for Xero/MYOB employers | 6.5 → **6.5** | Interview, then build | ~7 dev-weeks (9–10 calendar weeks); done-for-you pilots on the Jan 2027 returns | ~US$4.8k (AUD 7.3k) | Month 6 / with a founder salary, months 16–17 | ~US$43–60k (AUD 65–90k) | Xero ships it natively, or PayCat opens up to Xero and MYOB data |
| 2 | Tanzania mining local content, extending to Zambia and Senegal | 6.5 → **6.5** | Interview, then build | ~6 dev-weeks after 3 weeks of validation; targets the Q4 report due ~14 Jan 2027 | ~US$5.7k | Month 10 cumulative; founder draw covered months 12–13 | ~US$18–44k | The Mining Commission launches its own form, as Zambia did with LOCAS; small, relationship-driven market |
| 3 | Philippines: per-principal billing pack for security and janitorial agencies | 7.0 → **6.0** | Interview first | ~6 dev-weeks (9 calendar weeks) | ~US$3.2k | Month 7 / month 12; founder salary covered ~month 14 | ~US$16–39k | Inertia: a chronic pain with no new trigger |
| 4 | Chile: contractor accreditation pack (narrowed to non-mining) | 6.5 → **5.0** | Interview a narrower wedge | ~10–12 weeks (5.5 dev-weeks) | ~US$4.4k | Month 7 / month 11 | ~US$34–95k | Funded passport products (MINPASS, Mine Pass, MyPass, ACREDIX) expand beyond mining |
| 5 | Argentina: SIGIRAO bridge | 6.5 → **5.5** | Interview first | ~9.5 dev-weeks (week 10) | ~US$2.6k | Month 7 / month 15 | ~US$13k (Buenos Aires province only) | The ministry's new integration tools let dealer software connect natively |
| 6 | Philippines: EIS kit for local billing-software vendors (pivoted) | 7.0 → **5.5** | Interview the pivot only | ~6 dev-weeks | ~US$3.6k | Month 9 / month 20 | Not estimated | Vendors build it themselves; BIR extends the deadline again |
| 7 | Peru: fuel-station register | 7.5 → **5.5** | Interview; prepaid test by 30 Nov | ~11 dev-weeks (first customer ~Feb 2027) | ~US$2.7k | Month 7 / month 17 | ~US$4–10k | Only illegal-mining zones are covered (~600–1,500 stations); station-software vendors already hold the data |
| 8 | Brazil: SIPROQUIM map generator | 6.5 → **5.5** | Interview a tool for consultants, not single pharmacies | ~6 dev-weeks | ~US$2.3k | Month 8 / month 13 | ~US$11–18k | Business software already exports the file; free government validator |
| 9 | Egypt: EPTTS file compiler | 7.0 → **5.5** | Interview first | ~6 weeks, starting with a hand-run per-lot service | ~US$1.4k | Months 5–6 / month 13 | ~US$5–13k | The regulator's direct-XML route lets suppliers report themselves |
| 10 | Kenya: SHA rejections and disputes desk (pivoted) | 6.5 → **5.0** | Interview the pivot | ~12 weeks | ~US$2.1k | Month 9 / month 17 | ~US$10–25k | Payment data only reaches certified clinic software, and the government's system covers ~87% of clinics |

Ties at 5.5 are ordered by month-12 MRR and by how open the gap still looks. Chile ranks above them
on a lower score because it has the highest revenue ceiling, provided the narrowed wedge holds.

## What the fact-checking taught us

1. **Governments close their own gaps.** Argentina opened automatic loading into SIGIRAO, Brazil
   added a free validator, Egypt accepts XML directly from suppliers, and Kenya routes payment data
   only to certified systems. A product that simply fills in a bare government form is exposed to
   this. The two ideas that held either sit on a private ecosystem (Xero/MYOB) or have no
   government tool for the hard part (classifying suppliers' local content).
2. **Existing software vendors absorb narrow exports.** Peru station POS systems, TOTVS in Brazil,
   and local billing-software vendors in the Philippines all already hold the data. If the product
   is just "export a file", the incumbent adds it cheaply.
3. **Scope is often narrower than the headline.** Peru's register covers only illegal-mining zones,
   and the Philippines e-invoicing wave excludes POS users and micro taxpayers.
4. **Rules that don't allow third parties to submit filings kill foreign founders.** The Philippines
   ESP freeze shows how a "submit on the client's behalf" plan can turn illegal overnight.
5. **Penalty size predicts which ideas survive.** The ideas that held come with large, personal
   penalties: Zambia fines up to about US$17.7k plus daily fines and makes directors liable, and
   Australian schemes can fine up to AUD 10k.

## Recommendation

**Validate two in parallel for three weeks, then build at most one.**

### 1. Australia: portable LSL builder (primary)

It remains the best fit for a solo, non-local founder:
- it reads data through an open payroll API, with no government certification needed;
- there's a proven price anchor (PayCat, at AUD 2 per employee);
- new state schemes keep adding demand (SA in 2025, NT in 2026);
- it's English-speaking, with no payment friction.

The trade-off is a smaller market than first thought: about 4–5k covered employers on Xero or
MYOB.

**Gate:**
- 15 interviews with bookkeepers and payroll officers at NDIS, community-services and cleaning
  employers.
- At least 5 prepaid done-for-you pilots for the January 2027 returns.
- Start the Xero app certification early, because uncertified apps are capped at 25 connections.

### 2. Mining local-content kit (secondary)

It has the strongest penalties, no affordable competitor, and consultants as the price anchor. It
can grow across three countries with one engine.

The trade-offs:
- the sale is relationship-driven;
- the buyer count is unknown;
- it likely needs a local partner, and perhaps travel to Dar es Salaam or Lusaka.

**Gate:**
- 10 conversations through TAMISA (the mining suppliers' association) and Zambian suppliers.
- At least 3 paid preparations of the Q4-2026 report, due about 14 January 2027.

### Keep on the shelf

- **Philippines agency billing pack:** real pain, but buyers have tolerated it for years.
  Revisit if the 2027 procurement rules add a new documentation trigger.
- **Chile contractor packs outside mining:** only if the passport vendors stay in mining.

### Effectively dropped unless interviews contradict the plans

Peru, Brazil, Egypt, Kenya, Argentina and the Philippines e-invoicing kit. Each depends on a gap
that the government or an existing vendor is already closing.

## Caveats

- All checking used web-search snippets only (WebFetch was blocked). Each plan's "Verification
  results" table marks what's confirmed, changed or unverified.
- Revenue figures are model estimates. No customer has been interviewed and nothing has been
  pre-sold.
- Each plan's "Validation plan before writing code" section has the interview list, the questions
  and the pass/fail thresholds to use next.
