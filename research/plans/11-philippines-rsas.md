# Development plan #11: Philippines RSAS quarterly-report and 5-year stock-ledger kit

**Offline-ranking #1, original score 7.0.** Sources: the RSAS section of `research/offline/philippines.md`
and row 1 of `research/offline-ranking.md`.
**Plan date:** 2026-10-06. **Verification budget:** 30 web searches, all used. WebFetch was blocked, so
every source below was read through search-result summaries, not opened directly.

---

## 1. Verdict up front

**Park it: interview first, at low priority, with a ₱0 template test. Do not build software before
DA publishes the quarterly-report format and the first 2027 inspections actually happen.** The legal
trigger is real and has not been postponed. The business case is weaker than the report thought,
for three reasons:

1. **The deadline is real, but the binding part is a free, one-off registration.** DA MC No. 03 s.2026
   (2 Feb 2026) sets **31 Dec 2026** as the RSAS registration cutoff. The RSAS portal is live, and as
   of 6 Oct 2026 no extension had been reported. The recurring duties are monthly records and quarterly
   electronic reports "through the relevant regulatory agencies". They are stated in every news source,
   but **no report format, form fields, upload route or first due date is public**. Inspections start in
   2027, staggered by region, and DA itself says it lacks staff and enforcement powers.
2. **The buyer pool is smaller than assumed.** Micro operators are **exempt**: sari-sari stores, wet-market
   vendors and registered BMBEs with assets under ₱3M. Many provincial traders are BMBEs. The last public
   count (NFA, Aug 2017) was 7,606 millers, 14,531 warehouses, 3,820 wholesalers and 9,507
   retailer-wholesalers. After the BMBE exemption, the realistic obliged rice/corn segment is perhaps
   **8,000–15,000 facilities (estimate)**, and nobody publishes a current list.
3. **Willingness to pay is the weakest link.** The pain only becomes acute at an inspection, which is
   unlikely before mid-2027 for most regions. The law makes "failure to produce records or an updated
   operations report on demand" **prima facie evidence of a violation**. That is a strong fear-based
   argument, but the buyers are older, cash-based family businesses. Some of them have a reason *not*
   to want auditable digital stock records. No local vendor, accountant or association sells an RSAS
   product yet. That leaves the field open, but it also means nobody has shown that demand exists.

**Deciding facts:** (a) the deadline holds, but only registration is defined, and it is free and
one-off; (b) BMBEs under ₱3M are exempt and enforcement is thin until 2027; (c) no competitor and no
published report format, so the product would rest on a format that does not exist yet.

## 2. Verification results

| Claim from report | What you found | Source | Status |
|---|---|---|---|
| DA MC 03 s.2026 implements RA 12022 s.6, signed 2 Feb 2026 | Confirmed. Title: "Guidelines for the Registration of Facilities Involved in the Storage of Agricultural and Fishery Products, and the Keeping of Records by All Persons Involved in Agriculture and Fishery Business Pursuant to Section 6 of RA 12022", issued 2 Feb 2026 | [Tribune 29 Sep 2026](https://tribune.net.ph/2026/09/29/agri-warehouses-face-year-end-registration-deadline), [Inquirer](https://newsinfo.inquirer.net/2179846/warehouse-owners-required-to-register-facilities-with-da) | Confirmed |
| Register on RSAS by 31 Dec 2026 | Confirmed as the "final cutoff". Unregistered facilities are "non-compliant" and "no longer legally recognized". No extension found as of 6 Oct 2026 (one search specifically for an extension) | [Context.ph](https://context.ph/2026/09/29/unregistered-agri-warehouses-not-allowed-after-dec-31-2026/), [BusinessMirror](https://businessmirror.com.ph/2026/09/30/da-orders-mandatory-registration-of-farm-storage-facilities-by-year-end/), [Bombo Radyo](https://www.bomboradyo.com/da-nagtakda-ng-year-end-deadline-sa-pagpaparehistro-ng-mga-bodega-ng-agri-products) | Confirmed |
| 5-year auditable records, monthly records, quarterly e-reports | Confirmed in wording: capacity, commodities handled and inventory levels; monthly operational records; quarterly electronic reports "through the relevant (trade) regulatory agencies" | [Tribune Feb 2026](https://tribune.net.ph/2026/02/14/da-requires-registration-of-agri-warehouses), [Philstar](https://www.philstar.com/headlines/2026/02/15/2508060/da-tightens-grip-warehouses-under-sabotage-law) | Confirmed (wording only) |
| Quarterly report format / bulk upload / API | Nothing public. No form fields, template, upload route, first due date or per-agency routing found in 3 targeted searches. RSAS is described as a "registration, monitoring and management" platform | [rsas.da.gov.ph](https://rsas.da.gov.ph/) (snippet) | **Unverified** |
| Free DA/BPI tool | RSAS itself is free. Whether it has a report module is unknown. Separately, the PSA's monthly **Rice and Corn Stocks Survey: Commercial** already collects stocks from a *sample* of NFA-registered grain businesses | [PSA RCSS:C](https://psada.psa.gov.ph/catalog/239) | Partly confirmed |
| Penalties: fines, suspension, criminal charges, Cybercrime Act | News confirms "fines, suspension, or even criminal charges under the Cybercrime Prevention Act" for missing documents, missing reports or manipulated records. RA 12022 itself: failure to produce records or an updated operations report on demand by the Enforcement Group is **prima facie evidence of a violation**. No specific fine amount for s.6 non-compliance found. The law is self-executory (no IRR) | [Tribune Feb 2026](https://tribune.net.ph/2026/02/14/da-requires-registration-of-agri-warehouses), [lawphil RA 12022](https://lawphil.net/statutes/repacts/ra2024/ra_12022_2024.html), [Tribune on IRR](https://tribune.net.ph/2024/12/03/villar-tough-law-against-agri-smugglers-doesnt-need-irr) | Confirmed in substance; amount unverified |
| Covers all storage operators | **Changed.** Exempt: sari-sari stores, wet-market vendors and registered BMBEs with assets under ₱3M | [Tribune 29 Sep](https://tribune.net.ph/amp/story/2026/09/29/agri-warehouses-face-year-end-registration-deadline), RSAS search snippets | **Changed (narrower)** |
| Nationwide inspections in 2027 | Confirmed. Regions get assigned periods "amid limited personnel". Registration is separate from certification and inspection | [Context.ph](https://context.ph/2026/09/29/unregistered-agri-warehouses-not-allowed-after-dec-31-2026/), [Inquirer](https://newsinfo.inquirer.net/2179846/warehouse-owners-required-to-register-facilities-with-da) | Confirmed |
| Enforcement will bite | **Doubtful.** DA chief says RA 12022 raised the thresholds for qualifying offences, DA "still lacks enforcement powers", and DA-IE can only operate with the Bureau of Customs. DA is asking Congress for amendments | [Context.ph 2025](https://context.ph/2025/09/01/da-intensifies-anti-smuggling-drive-urges-law-reforms-for-stronger-enforcement/), [InsiderPH](https://insiderph.com/da-flags-loopholes-in-anti-agri-smuggling-law-seeks-urgent-fixes) | Contradicted in part |
| New: incentive to register | DA–DILG JMC (1 Jul 2026, Sagip Saka Act) exempts farm storage with assessed value ≤ ₱3M from real-property tax, and DA will require RSAS registration to claim it | [BusinessWorld](https://bworldonline.com/economy/2026/07/01/760607/property-tax-exemptions-granted-to-farm-storage-facilities/), [Philstar](https://www.philstar.com/nation/2026/07/02/2539215/tax-break-guidelines-farm-storage-facilities-out) | New |
| New: overlapping grains regime | RA 12078 (Dec 2024) restored DA powers to register, license and supervise rice/grain warehouses and mills, with regular inspections. The older LOI 79 rule required weekly stock reports from licensed millers and traders (current status unknown) | [lawphil RA 12078](https://lawphil.net/statutes/repacts/ra2024/ra_12078_2024.html), [LOI 79](https://jur.ph/law/summary/guidelines-governing-palay-and-rice-procurement-and-trading) | New; may duplicate or absorb RSAS reporting |
| Number of registrants | No RSAS count published. Secretary Tiu Laurel ordered an updated count and compliance rate (late Sep 2026). Proxy: NFA Aug 2017: 54,152 retailers, 3,820 wholesalers, 9,507 retailer-wholesalers, 7,606 millers, 14,531 warehouses, 304 importers (excluding Region XII); a later figure of 74,875 licensed grains businesses | [Context.ph](https://context.ph/2026/09/29/unregistered-agri-warehouses-not-allowed-after-dec-31-2026/), [PCC Issues Paper 2019](https://www.phcc.gov.ph/storage/pdf-resources/1678085999_PCC-Issues-Paper-2019-01-Competition-in-the-Rice-Industry-An-Issues-Paper.pdf) | Unverified (proxy only) |
| Competitors: only foreign rice-mill ERPs | Confirmed. Gofrugal, Dataman, Invoay, Softronix (Pakistan), BFS, SAP B1 partners. Generic PH inventory tools: Zoho Inventory, QNE Cloud, Odoo, HashMicro. None mention RA 12022 or RSAS. No accountant or consultant RSAS service found | [Gofrugal](https://www.gofrugal.com/retail/supermarket-pos/rice-mill-software.html), [Dataman](https://dataman.in/rice-mill-erp/), [HashMicro list](https://www.hashmicro.com/ph/blog/best-inventory-management-software/) | Confirmed |
| Associations as channel | No statement from PHILCONGRAINS or any millers' group on RSAS found | search 13 | Unverified |
| Would a provincial trader pay? | No direct evidence. Generic PH SMB inventory tools cost "a few thousand pesos per user per month" | [Cleverence](https://www.cleverence.com/articles/for-business/inventory-management-software-philippines-7395/) | Unverified |

## 3. Customer and problem

**Buyer.** The owner, or the second-generation manager, of a non-BMBE rice/corn mill, wholesale trading
house or grain warehouse with assets over ₱3M. These cluster in Nueva Ecija, Isabela, Pangasinan, the
Ilocos and Cagayan Valley regions, Iloilo and Davao. **Users:** the warehouse clerk (*bodegero*), who
writes the in/out tickets, and the family bookkeeper or external accountant.

**Secondary buyers:** onion cold stores accredited by BPI, and meat and fish cold stores (NMIS/BFAR).
These are larger, fewer and more formal. No count was found.

**Job to be done.** "Register on time, then be able to show an inspector 5 years of monthly stock
records that agree with what we reported each quarter, so that a records gap is never read as
hoarding."

**Current workflow (all times and costs are estimates):**

| Step | Who | Time | Cost |
|---|---|---|---|
| 1. Register each facility on RSAS (one-off) | Owner or child, sometimes with DA field-office help | 1–3 hours | ₱0 |
| 2. Daily in/out tickets (palay bought, milled, rice sold, transfers) in a ledger notebook or Excel | Bodegero | 15–45 min/day | Existing staff |
| 3. Month-end stock count and reconciliation (moisture shrink, milling recovery, spillage) | Owner/bookkeeper | 2–6 hours/month | ₱1–3k of staff time |
| 4. Quarterly e-report (format unknown) | Owner/bookkeeper | 1–4 hours/quarter (guess) | ₱1–3k |
| 5. Inspection (2027+): produce 5 years of monthly records that tie to the reports | Owner, plus a lawyer if flagged | 1–5 days | ₱0 to six figures if a case is opened |

**Cost of failure.** Unregistered storage is "not legally recognised" after 31 Dec 2026. Failing to
produce records on demand is prima facie evidence of a violation of a law whose hoarding and smuggling
penalties run to 20–30 years' imprisonment and multiples of the goods' value. The realistic near-term
cost is fines, suspension, seizure of stock pending explanation, or losing the new property-tax
exemption.

## 4. Product definition

**Core loop:** record a stock movement on the phone (or a photo of the ticket) → the running balance per
commodity and facility updates → at month end, lock the month and generate a signed monthly record →
at quarter end, generate the quarterly figures in whatever format DA publishes → export an inspection
binder at any time.

**MVP (must-have):**
- One business, 1–3 facilities, commodities: palay, milled rice, corn grain and grits.
- Movement types: receipt, issue/sale, milling conversion (palay → rice + by-products with recovery
  %), transfer, adjustment (with a reason code).
- Month-end lock with a hash-chained audit log: corrections become new entries and are never edits.
- Monthly record PDF (in Filipino and English) and a quarterly summary sheet to copy into RSAS.
- Offline-first mobile PWA, because connectivity in rural mills is patchy.

**v1:** Excel import of past ledgers; multiple users with roles; onion/garlic cold-store pack;
accountant dashboard covering many clients; reminders by SMS or Viber.
**Later:** a direct upload once DA publishes a file format; weighbridge integration; warehouse
receipts and financing data; BIR inventory-list export.

**Out of scope:** BIR accounting and invoicing, POS, quality grading, and any filing *on behalf of* the
operator that needs their RSAS credentials (at first).

**Key screens:**
1. *Today:* stock per commodity and facility, with a big "+ Pasok / − Labas" (in/out) button.
2. *Ticket capture:* photo, quantity in sacks or kg, counterparty, price (optional).
3. *Month close:* physical count vs book, variance reason, lock and sign.
4. *Quarter report:* figures laid out the way RSAS asks for them, with copy buttons and a
   "submitted on" proof upload.
5. *Inspection binder:* pick a date range, then one PDF with registration details, monthly records,
   quarterly reports and the audit log.

## 5. Technical design

- **Architecture:** PWA front end (offline queue in IndexedDB) → API → Postgres. PDFs rendered on the
  server. Object storage for ticket photos. One region (Singapore) for latency.
- **Stack for a solo developer:** SvelteKit or Next.js PWA plus Supabase (Postgres, auth, storage). It
  is cheap, comes with row-level security, and needs no ops work. PDFs via a headless-Chromium
  template.
- **Data model:** Business (TIN, BMBE flag, RSAS registration number), Facility (address, type,
  capacity), Commodity, Movement (type, quantity in kg, unit, counterparty, ticket photo, created_by,
  hash, prev_hash), MonthClose (counts, variances, locked_at, signer), QuarterReport (figures,
  submitted_at, proof), User/Role, AccountantLink.
- **Integrations:** RSAS has no known API or bulk upload → **manual copy-assist** (fields laid out in
  RSAS order). Fallback: browser-extension autofill, only if RSAS forms are stable and DA does not
  object. Never store RSAS passwords.
- **Rules engine:** unit conversions (cavan/sack of 50 kg; palay-to-rice recovery about 60–65% as a
  configurable default); no negative stock; flags for month-close variances above a threshold; a
  warning when stock is held unusually long (a hoarding red flag); capacity breaches.
- **Privacy and residency:** Data Privacy Act 2012 (RA 10173) and NPC rules. Counterparty names
  (farmers) are personal data, so a privacy notice and a DPO contact are needed, and NPC registration
  applies if thresholds are met. No legal data-residency rule found for this data; a Singapore host
  is acceptable (to confirm with counsel). Electronic records are valid under the E-Commerce Act
  (RA 8792).
- **Audit trail and liability:** an append-only, hash-chained log is the selling point, because the
  Cybercrime Act exposure is about *manipulated* records. Terms state that the operator is
  responsible for accuracy and filing; the product is a record-keeping tool, not a filer.
- **Localisation:** Filipino/Taglish UI, Ilocano later; pesos; kg, sacks and cavans; TIN format.
- **Testing:** property tests on the ledger (balances can never drift from movements), golden PDFs, and
  a format test against the real RSAS quarterly form as soon as it is visible (needs a real
  registrant's screen share).

## 6. Build plan

Do not start coding before the validation gate in section 13 passes.

| Week | Milestone | Effort |
|---|---|---|
| 0–2 | Validation: 12 interviews, see the real RSAS screens, free Google Sheets ledger template + Tagalog landing page | 0 dev-weeks |
| 3–5 | Ledger core, movements, month close, offline PWA | 3 dw |
| 6 | Monthly PDF, quarter summary, binder export | 1 dw |
| 7–8 | Concierge pilot with 3–5 operators; the founder or a local VA keys tickets from Viber photos | 0.5 dw |
| ~9 | **First paying customer** (annual prepay) | — |
| 10–16 | v1: Excel import, accountant dashboard, roles, cold-store pack, SMS reminders | 5 dw |

About **4.5 developer-weeks to the first paying customer**, and about 10 to v1. **Concierge:** ticket
entry from photos by a ₱25–35k/month Filipino VA (estimate); quarterly figures prepared by hand.

## 7. Go-to-market

- **First 10 customers:** mid-size millers and wholesale traders in Nueva Ecija and Isabela who are
  *not* BMBEs, and who also want the RPT exemption (which requires registration). Find them through
  the BPI licence notices on buplant.da.gov.ph, BPI rice-importer lists, Facebook pages of rice mills,
  and provincial grains associations (names unverified).
- **Channels:** (1) provincial accountants and bookkeepers serving millers. Pay them a 20–30% recurring
  share and give them a free dashboard. (2) DA regional field offices and RSAS help desks: offer free
  Tagalog "how to register" guides they can hand out, no selling. (3) Grains associations: a
  seminar slot.
- **Outreach angles:** "If an inspector asks, can you show five years in five minutes?"; "No record
  means prima facie violation (RA 12022)"; "Register by Dec 31 and keep your amilyar exemption".
- **Timing:** the registration rush (Oct–Dec 2026) is for content and list-building, not selling. The
  paid window is **Q1–Q2 2027**, when the first quarterly report falls due (date unverified) and the
  regional inspection schedules are announced.
- **Content/SEO (Filipino):** "Paano mag-register sa RSAS", "RA 12022 record keeping bodega",
  "quarterly report RSAS DA", and a free ledger template download.

## 8. Pricing and unit economics

| Tier | Price | For |
|---|---|---|
| Libre (free) | Google Sheets template + guide | List-building |
| Ledger | ₱990/month or ₱9,900/year per facility | Self-serve millers and traders |
| Done-for-you | ₱2,500/month per facility (VA keys tickets, prepares quarterly figures) | Owners who won't type |
| Accountant | ₱600/facility/month wholesale | Bookkeepers who resell |

- **Expected ACV:** about ₱14,000 (≈US$240 at an assumed ₱58/US$) per facility, blending ledger and
  done-for-you.
- **CAC (estimates):** accountant channel ₱3–5k per facility; direct phone/Viber outreach ₱6–10k;
  associations ₱2–4k once a seminar is booked.
- **Gross margin:** software about 90%; done-for-you about 45–55% (VA time).
- **Payment rails:** bank transfer, GCash or Maya via a local partner, or a Philippine entity with
  PayMongo/Xendit. A foreign founder can use Paddle as merchant of record for card payments (whether
  it supports PH tax collection is unverified), but rural buyers mostly pay by transfer or GCash.
- **FX risk:** revenue in PHP, costs in USD; small at this scale.

## 9. Company and legal setup

- **Entity:** start without a local entity (merchant of record or a partner invoicing). Incorporate a
  domestic corporation (one-person corporations are allowed) only after about 50 customers, because
  collecting GCash and bank payments requires it.
- **Local partner:** essential. A Filipino co-founder or an accounting-firm partner in Nueva Ecija or
  Isabela who speaks Tagalog and Ilocano.
- **Tax:** VAT on digital services by non-resident providers (RA 12023, 2024) applies: 12% VAT, with the
  non-resident provider collecting on B2C sales (B2B mechanics to verify with counsel).
- **Contracts:** SaaS terms saying the customer remains responsible for registration, reports and
  accuracy; a DPA for farmer data; a reseller agreement for accountants.
- **Liability:** professional-indemnity cover only once done-for-you scales. Never submit under the
  customer's credentials.

## 10. Financial model (24 months, estimates)

Assumptions: start Nov 2026 (validation first); paid sales from month 4 (Feb 2027); blended ARPU
₱1,200/facility/month; churn 3%/month; costs = tools/hosting ₱8k/month plus a VA from month 4
(₱30k/month) plus the local partner's share (25% of revenue). Founder time is not paid.
FX ₱58/US$ (assumed).

| Month | Facilities | MRR (₱) | Costs (₱) | Cumulative cash (₱) |
|---|---|---|---|---|
| 1 | 0 | 0 | 8,000 | −8,000 |
| 2 | 0 | 0 | 8,000 | −16,000 |
| 3 | 0 | 0 | 8,000 | −24,000 |
| 4 | 3 | 3,600 | 38,900 | −59,300 |
| 5 | 6 | 7,200 | 39,800 | −91,900 |
| 6 | 10 | 12,000 | 41,000 | −120,900 |
| 7 | 14 | 16,800 | 42,200 | −146,300 |
| 8 | 18 | 21,600 | 43,400 | −168,100 |
| 9 | 22 | 26,400 | 44,600 | −186,300 |
| 10 | 26 | 31,200 | 45,800 | −200,900 |
| 11 | 29 | 34,800 | 46,700 | −212,800 |
| 12 | 32 | 38,400 | 47,600 | −222,000 |
| Q5 (m13–15) | 40 | 48,000 | 50,000/month | −228,000 |
| Q6 (m16–18) | 48 | 57,600 | 52,400/month | −212,400 |
| Q7 (m19–21) | 55 | 66,000 | 54,500/month | −177,900 |
| Q8 (m22–24) | 62 | 74,400 | 56,600/month | −124,500 |

- **Month-12 MRR:** about ₱38k (≈US$660).
- **Break-even:** monthly cash break-even around month 15–16 (about 42 facilities) (excluding founder pay). Cumulative cash
  does not turn positive within 24 months.
- **Realistic ceiling:** SAM of about 10,000 non-BMBE rice/corn facilities (estimate) × 3% achievable
  share × ₱1,200 = about ₱360k MRR (≈US$6k). Adding cold stores might double it. That is a modest
  side business, not a venture.

## 11. Team and founder fit

Needs: Tagalog plus Ilocano or Hiligaynon, comfort with provincial face-to-face selling, and trust
with older Chinese-Filipino and Ilocano trading families. **Not realistic for a non-local remote
founder** without a local partner who takes a real equity or revenue share. The software is easy; the
selling is entirely local.

## 12. Risks and mitigations

| Risk | Type | Mitigation |
|---|---|---|
| DA's quarterly report is a 5-field web form inside RSAS, so the "report" part is trivial | Government | Sell the 5-year ledger and the inspection binder, not the filing |
| Deadline extended, or inspections slip past 2027 (common in PH), and DA lacks enforcement powers | Regulatory | Don't build until inspections start; keep cost near zero |
| RA 12022 amendments or the RA 12078 grains licensing regime re-routes reporting to BPI/NFA in another format | Regulatory | Keep the format layer separate from the ledger |
| Owners don't want auditable digital stock records (hoarding sensitivity) | Market | Target formal, importer-linked and bank-financed operators who benefit from clean records |
| A local POS or ERP vendor (or Odoo partner) adds an "RSAS report" | Competitive | Stay cheaper and simpler; go deep on rice milling-recovery rules |
| Rural payment collection and churn after an inspection passes | Operational/payment | Annual prepay discount; GCash via partner |
| FX | FX | Minor; PHP costs for the VA offset it |

## 13. Validation plan before writing code

**Interview targets (12–15):** 6 non-BMBE millers or traders (Nueva Ecija, Isabela, Pangasinan); 2
onion cold-store operators (Nueva Ecija/Bulacan); 3 provincial accountants serving millers; 1 DA
regional field office RSAS focal person; 1 grains association officer; 1 PSA RCSS:C enumerator (who
knows how traders already report stocks).

**Questions:**
- Have you registered on RSAS? How long did it take, and what did it ask for?
- Have you seen the quarterly-report screen? Show me.
- How do you keep stock records today? Can you produce last March's closing stock?
- Do you already report stocks to BPI, NFA or PSA? How often?
- What would you do if an inspector asked for 5 years of records tomorrow?
- What do you pay your bookkeeper, and for what? Would you pay ₱1,000/month to never worry about this?

**Pass/fail thresholds:**
- Pass: at least 8 of 12 are obliged (non-BMBE); at least 5 keep records they could not produce
  quickly; at least 4 say they would pay ≥₱800/month; at least 2 accountants want to resell.
- Fail (kill): the quarterly report is a simple RSAS form *and* fewer than 3 operators fear
  inspection; or DA extends or softens the rules.

**Pre-sale test:** offer an annual "Inspection-Ready 2027" package at ₱7,900 (founding price) with a
refund guarantee if inspections are not held in their region in 2027. Target: 5 paid pre-sales from
30 qualified pitches.

## 14. Expansion path

- **Adjacent workflows in PH:** onion and garlic cold stores (BPI accreditation), meat and fish cold
  stores (NMIS/BFAR), feed and grain silos; the Sagip Saka RPT-exemption paperwork; BIR annual
  inventory list; warehouse-receipt financing data for banks.
- **Same pattern elsewhere:** stock-declaration regimes for food traders, e.g. India's wheat and pulses
  stock-limit declarations (from memory, unverified), and Bangladesh food-grain licence stock reports
  (unverified). Each would be its own country pack on the same ledger core.

## 15. Reassessment scorecard

| Criterion | Original | New | Reason |
|---|---|---|---|
| Pain | 7 | 5 | Registration is free and one-off. Recurring pain is latent until an inspection, probably mid-2027 or later |
| Frequency | 6 | 5 | Monthly records and quarterly reports, but the report format and first due date are unknown |
| Mandatory nature | 9 | 7 | Law and deadline confirmed and not postponed, but BMBEs under ₱3M are exempt and DA admits weak enforcement powers |
| Fragmentation | 6 | 4 | Rice/corn likely goes through one channel (RSAS/BPI); multi-agency routing is unconfirmed |
| Existing competition | 8 | 8 | Still nobody: no vendor, accountant or association product mentions RSAS |
| Incumbent gap | 7 | 6 | Real gap, but the substitute (paper ledger plus a free RSAS form) may be good enough |
| Buyer accessibility | 6 | 5 | No current public list; latest counts are NFA 2017; channels need face-to-face selling |
| Willingness to pay | 5 | 3 | Cash-based family businesses, fear-driven only, and some don't want transparent records; no evidence of spend |
| MVP simplicity | 8 | 7 | The ledger is easy, but the quarterly format is unpublished, so the core output cannot be finished |
| Distribution | 5 | 4 | Needs a local partner, provincial presence and accountant resellers; the non-local founder fit is poor |

**New overall score: 5.0/10 (was 7.0).** It drops 2 points because:
- the micro-business exemption and weak enforcement shrink both the obliged market and the urgency;
- the recurring report has no published format, so the product's main output is speculative;
- willingness to pay is unproven and possibly negative in a hoarding-sensitive trade.

It stays at 5 because the law and deadline are real, nobody serves the gap, and the 2027 inspections
could create acute demand. Revisit when DA publishes the quarterly-report format or announces regional
inspection dates.

## Sources

- https://tribune.net.ph/2026/09/29/agri-warehouses-face-year-end-registration-deadline
- https://tribune.net.ph/2026/02/14/da-requires-registration-of-agri-warehouses
- https://context.ph/2026/09/29/unregistered-agri-warehouses-not-allowed-after-dec-31-2026/
- https://businessmirror.com.ph/2026/09/30/da-orders-mandatory-registration-of-farm-storage-facilities-by-year-end/
- https://www.philstar.com/headlines/2026/02/15/2508060/da-tightens-grip-warehouses-under-sabotage-law
- https://newsinfo.inquirer.net/2179846/warehouse-owners-required-to-register-facilities-with-da
- https://www.bomboradyo.com/da-nagtakda-ng-year-end-deadline-sa-pagpaparehistro-ng-mga-bodega-ng-agri-products
- https://rsas.da.gov.ph/
- https://lawphil.net/statutes/repacts/ra2024/ra_12022_2024.html
- https://lawphil.net/statutes/repacts/ra2024/ra_12078_2024.html
- https://tribune.net.ph/2024/12/03/villar-tough-law-against-agri-smugglers-doesnt-need-irr
- https://context.ph/2025/09/01/da-intensifies-anti-smuggling-drive-urges-law-reforms-for-stronger-enforcement/
- https://insiderph.com/da-flags-loopholes-in-anti-agri-smuggling-law-seeks-urgent-fixes
- https://bworldonline.com/economy/2026/07/01/760607/property-tax-exemptions-granted-to-farm-storage-facilities/
- https://www.philstar.com/nation/2026/07/02/2539215/tax-break-guidelines-farm-storage-facilities-out
- https://www.phcc.gov.ph/storage/pdf-resources/1678085999_PCC-Issues-Paper-2019-01-Competition-in-the-Rice-Industry-An-Issues-Paper.pdf
- https://jur.ph/law/summary/guidelines-governing-palay-and-rice-procurement-and-trading
- https://psada.psa.gov.ph/catalog/239
- https://www.gofrugal.com/retail/supermarket-pos/rice-mill-software.html
- https://dataman.in/rice-mill-erp/
- https://www.hashmicro.com/ph/blog/best-inventory-management-software/
- https://www.cleverence.com/articles/for-business/inventory-management-software-philippines-7395/
