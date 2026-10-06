# Plan #12: India agri-input shop "monthly return autopilot" (pesticide e-register + monthly e-return)

Prepared 2026-10-06. Source: `research/offline/india.md` (Opportunity 1) and row #2 of `research/offline-ranking.md`, original score **7.0**.
Searches used: 27 of 30 (English, Hindi and Marathi; extended mode for the regional-language and niche queries). WebFetch is blocked, so every finding below comes from search-result snippets. Citations follow each claim.
Currency: about ₹88 per US$1 (estimate).

---

## 1. Verdict up front

**Kill as scoped.** The idea assumed that every licensed pesticide retailer must now file a monthly e-return, and that no government tool does it. Verification broke both assumptions. What is left is a narrow "stop typing the same data twice" sync play. It is weak because the government portal has no published API, and cheap agri-billing apps already sell the electronic stock register. I would not build this as a standalone product. A low-priority **interview-first** pivot (section 14) is worth one week of calls in Uttar Pradesh. Nothing more.

The three deciding facts:

1. **The free government tool already exists, and it is being enforced.** The **Integrated Pesticide Management System (IPMS, ipms.gov.in)** is run by the Ministry of Agriculture & Farmers Welfare. Every wholesale and retail pesticide seller must register on it, upload a licence copy and keep stock, and reportedly sales, on it.
   - Uttar Pradesh districts have suspended or cancelled licences in bulk for not registering: Gonda 390 suspended, Muzaffarnagar 129 cancelled, Kannauj 40 then 51, Budaun 37, Kanpur 73 threatened (Mar–Jul 2026).
   - J&K rolled it out with stock-management training in May 2026.
   - The CIB&RC Secretary called for "full implementation of National IPMS" in Sep 2026.

   The report's own kill condition ("the dealer-facing return turns out to be a free government app") has been met.
2. **The monthly e-return in the 2026 amendment falls on manufacturers and importers, not retail shops.** Tribune and Indian Chemical Regulation both say "manufacturers and importers" must submit monthly electronic returns (Appendix D1/D2) within 15 days.
   - Dealers only lost the option to keep **paper** registers: records must now be electronic.
   - Retail dealers' only monthly return is the old **Form XIV** under Rule 15. It covers sales to bulk consumers and licensed buyers, not every farmer sale, so most village shops have little or nothing to report on it.
3. **"Electronic register" is something existing billing apps already do.** It is a batch-wise stock and sales ledger. Vyapar, Busy, myBillBook, GoFrugal and ClearOne track batches and expiry. Agri-specific apps sell for ₹2,999–11,999: Setuverse ₹2,999/yr, AgroVyapar, Agro Manager ("100% compliant with government regulations"), Agrohands from ₹11,999. The only gap left is pushing that ledger into IPMS. No IPMS API or bulk-upload format could be found.

---

## 2. Verification results

| Claim from report | What you found | Source | Status |
|---|---|---|---|
| Insecticides (Amendment) Rules 2026 notified 17 Jun 2026, in force 15 Sep 2026 | Confirmed: notified 17/18 Jun 2026; in force 15 Sep 2026, 90 days after notification | ChemRadar https://www.chemradar.com/en/news/detail/frdgjamgq134 ; Global Agriculture https://www.global-agriculture.com/crop-protection/indias-digital-first-insecticide-licensing-rules-take-effect-september-15/ ; TeamLease https://teamleaseregtech.com/updates/article/57112/insecticides-amendment-rules-2026/ | confirmed |
| Postponed? | No deferral of the 2026 amendment found. A separate 2025 draft only extended the Rule 10(1A) deadline (a manufacturing-premises requirement) to 30 Jun 2026. A further draft (18 Mar 2026) on simplifying sale licences was open for consultation | Corpseed https://www.corpseed.com/law-update/draft-insecticides-amendment-rules-2025-issued ; Global Agriculture draft note https://www.global-agriculture.com/crop-protection/india-issues-draft-rules-for-amendment-to-its-insecticides-rules-1971/ | confirmed (in force, not postponed) |
| Dealers must keep **electronic** sale, distribution and stock registers | Confirmed: manufacturers, importers, distributors and dealers must keep records "exclusively through digital systems". The option of physical **or** digital records was removed. Formats: Appendix B (sale/distribution) and C1/C2 (stock) | AgroPages https://news.agropages.com/News/NewsDetail---58018.htm ; Indian Chemical Regulation https://indianchemicalregulation.com/india-insecticides-amendment-rules-2026/ ; Aadrikaa Law https://aadrikaalaw.com/2026/06/22/the-insecticides-amendment-rules-2026-digitalization-of-licensing-record-keeping-and-compliance-procedures-under-the-insecticides-rules-1971/ | confirmed |
| **Dealers** file a monthly e-return within 15 days | **Changed.** The amendment's monthly e-returns (Appendix D1/D2, technical and formulated) are described as obligations of **manufacturers and importers**. Dealers keep the pre-existing Rule 15 / **Form XIV** return, which the form itself titles "monthly return of sales of insecticides made to the bulk consumers" | Tribune https://www.tribuneindia.com/news/india/pesticide-manufacturers-dealers-face-new-compliance-regime-from-sep-15/ ; Insecticides Rules 1971 https://indiankanoon.org/doc/146814531/ ; Form XIV (Meghalaya) https://megagriculture.gov.in/public/dwd_docs/Form_XIV.pdf | changed: the central premise is weakened |
| Which portal? "state licensing authority, e.g. Odisha e-licensing" | **A national portal exists: IPMS (ipms.gov.in)**, run by the Ministry of Agriculture & FW. Modules: master data, licence management, supply-chain management, quality and testing, dashboard. Sellers sign up with mobile, PAN, licence copy and OTP. UP local news says sellers enter stock and sales details there. Odisha keeps its own e-licensing portal | Amar Ujala (Kanpur, Barabanki, Mirzapur) https://www.amarujala.com/uttar-pradesh/kanpur/licenses-of-73-pesticide-sellers-may-be-cancelled-kanpur-news-c-12-1-knp1052-1533565-2026-05-24 ; JK Monitor https://jkmonitor.org/index.php/local-news/agriculture-deptt-launches-digital-platform-integrated-pesticide-management-system-to-streamline-supply-chain ; Kashmir Horizon https://thekashmirhorizon.com/2026/05/26/training-programme-on-ipms-portal-organised-at-directorate-of-agriculture-jammu/ ; https://odishaagrilicense.nic.in/ | contradicted: free govt tool exists |
| Enforcement is real | **Confirmed and stronger than reported, but aimed at IPMS registration.** Gonda: 390 licences suspended (5 Apr 2026). Muzaffarnagar: 129 cancelled, with 30 days to clear stock. Kannauj: 40 (May) and 51 (Jun) cancelled. Budaun: 37 suspended. Kasganj: "register in two days or lose licence" (Jul). Nashik: 90 fertiliser, 10 seed and 12 pesticide licences suspended since 1 Apr 2026 for e-PoS mismatches and records | Amar Ujala Gonda https://www.amarujala.com/uttar-pradesh/gonda/licenses-of-390-pesticide-sellers-suspended-gonda-news-c-100-1-gon1001-155629-2026-04-05 ; Royal Bulletin https://royalbulletin.in/muzaffarnagar/licenses-of-129-pesticide-sellers-not-registered-on-ipms-portal/article-171648 ; Amar Ujala Kannauj https://www.amarujala.com/uttar-pradesh/kannauj/licenses-of-51-pesticide-shops-cancelled-kannauj-news-c-214-1-knj1006-150886-2026-06-17 ; Amar Ujala Budaun https://www.amarujala.com/uttar-pradesh/budaun/37-licenses-suspended-for-failure-to-register-on-ipms-portal-badaun-news-c-123-1-sbly1001-162267-2026-04-24 ; Amar Ujala Kasganj https://www.amarujala.com/uttar-pradesh/kasganj/pesticide-sellers-must-register-on-the-portal-within-two-days-otherwise-their-licenses-will-be-cancelled-kasganj-news-c-175-1-sagr1032-150413-2026-07-09 ; Free Press Journal https://www.freepressjournal.in/pune/nashik-agriculture-department-suspends-13-agri-input-dealer-licences-over-kharif-rule-violations | confirmed (enforcement drives the govt portal, not a third-party tool) |
| National IPMS push | CIB&RC Secretary Dr Subhash Chand (CropLife India conference, Sep 2026): counterfeit pesticides can be eradicated "if National IPMS is fully implemented"; the IPMS database enables track and trace through the authorised dealer network | Global Agriculture https://www.global-agriculture.com/crop-protection/croplife-india-calls-for-full-implementation-of-national-ipms-ai-based-farmer-advisory-tool/ ; Business News This Week https://businessnewsthisweek.com/business/we-can-eradicate-counterfeit-pesticides-if-national-ipms-is-fully-implemented-dr-subhash-chand-secretary-cibrc-ministry-of-agriculture-at-croplife-indias-national-conference/ | confirmed: national rollout is still uneven |
| IPMS has an API, bulk upload or mobile app | Not found in four searches. No developer documentation, no "IPMS-integrated" billing vendor and no Play Store app surfaced | (searches returned nothing relevant) | unverified (assume no) |
| Fertiliser: iFMS e-PoS covers it | Confirmed: iFMS covers >2.5 lakh retailers and >14 crore Aadhaar-linked buyers; stock mismatches are a suspension ground | Business Standard https://www.business-standard.com/amp/industry/agriculture/govt-expands-digital-fertiliser-tracking-system-to-link-farmers-subsidies-126083000698_1.html ; Free Press Journal (above) | confirmed |
| Seed: SATHI | Phase 2 covers dealer licensing, supply chain and inventory; 24 states integrated by mid-2025, with national coverage targeted before Kharif 2026 | Outlook Business https://www.outlookbusiness.com/news/centre-pushes-for-certified-seeds-through-sathi-portal-states-seek-technical-support ; RAU IAS https://compass.rauias.com/current-affairs/digitalising-indias-seed-value-chain-sathi-portal/ | confirmed: a third govt tool |
| Billing apps "stop at the GST invoice" | **Partly contradicted.** Vyapar, Busy and GoFrugal offer batch and expiry tracking for pesticides. Agri-specific dealer software is common and cheap: Setuverse ₹2,999/yr + GST, AgroVyapar, Agro Manager (claims "100% compliant with government regulations"), Agrohands from ₹11,999, AgriPOS, plus IndiaMART offline packages around ₹9,000 one-time. None was found that advertises IPMS sync | Vyapar https://api1.vyaparapp.in/free/small-business-accounting-software/farm ; Busy https://busy.in/accounting-software/agriculture.md ; Setuverse https://www.setuverse.com/blog/agri-input-dealer-license-guide ; AgroVyapar https://www.agrovyapar.in/ ; Agro Manager https://agrobilling.com/agro-manager/ ; Agrohands https://www.agrohands.com/ ; IndiaMART https://www.indiamart.com/proddetail/pesticides-seeds-fertilizer-accounting-billing-software-19604092573.html | changed: the register is commoditised |
| ~2.82 lakh agri-input dealers | ~3 lakh registered pesticide sale points (Global Agriculture). 2024-25 state figures (dataful.in) include Gujarat 22,194, Karnataka 18,576, Haryana 14,193, AP 11,213 and Chhattisgarh 9,802 | Global Agriculture (above) ; dataful https://dataful.in/datasets/19226/ ; Indiastat https://www.indiastat.com/table/template/agriculture/state-wise-number-sale-points-pesticides-india-201/1453085 | confirmed (order of magnitude) |
| Penalties under the Act | Licence suspension or cancellation is what is actually used (above). Fines and imprisonment under s.29 of the Insecticides Act 1968 were not re-verified | — | unverified |
| Dealers struggle with digital | Tribune: the industry has flagged digital readiness, connectivity and portal familiarity as problems for rural dealers. UP officials report many sellers still unregistered even after training | Tribune (above) ; Amar Ujala Kushinagar https://www.amarujala.com/uttar-pradesh/kushinagar/registration-on-ipms-portal-until-the-18th-kushinagar-news-c-205-1-ksh1001-158201-2026-04-17 | confirmed: the pain is real, but it is about using the free portal |

---

## 3. Customer and problem (as it now stands)

**Buyer and user:** owner of a licensed rural agri-input shop (krishi seva kendra) that holds pesticide, fertiliser and seed sale licences. The user is the owner or a family member. The best-evidenced state is **Uttar Pradesh**, where IPMS is enforced hardest. Secondary buyer: a district distributor with 50–300 retailer accounts.

**Job to be done (revised):** "Keep my licence safe by keeping IPMS, iFMS and my own books consistent, without typing every sale three times in peak season."

**Current workflow, with all times as estimates:**

| Step | Time / cost (estimate) |
|---|---|
| 1. Bill the farmer in a bill book or billing app | 1–2 min per bill |
| 2. Fertiliser: Aadhaar-authenticated sale on the iFMS e-PoS device | 1–3 min per bill (mandatory, free) |
| 3. Seed: SATHI where integrated | per lot |
| 4. Pesticide: register and keep stock and sales on IPMS (web, OTP login) | registration 30–60 min once (often via a cyber café or a son or daughter); ongoing entry frequency **unverified** (daily vs. on purchase) |
| 5. Keep an electronic register (Appendix B/C) from 15 Sep 2026 | billing app ledger or IPMS itself |
| 6. Form XIV for bulk or licensed buyers | only for shops with such sales; minutes per month |
| 7. Inspection | inspector checks physical stock against IPMS and e-PoS |

**Cost of failure:** licence suspension or cancellation in season, sometimes with 30 days to clear stock (Muzaffarnagar). That cost is severe. But the trigger in the evidence is **not registering on the free portal**, which is a one-time fix, not a recurring job someone will pay for.

---

## 4. Product definition (only if the pivot passes validation)

**Core loop (pivot "Ek Entry"):** the dealer bills once in a WhatsApp/Android app → the app keeps the statutory electronic register (Appendix B/C1/C2 layout) → it produces an IPMS-ready daily or weekly entry list, and an operator or browser helper keys it in → it flags differences between IPMS, the e-PoS and the books.

- **MVP:**
  - Hindi Android PWA with product master preloaded from CIB&RC registered products.
  - Purchase entry from supplier invoice photos (OCR plus human check).
  - Sale entry.
  - Register PDF ("inspector view").
  - IPMS entry checklist.
  - Done-for-you IPMS keying by an operator.
- **v1:**
  - Tally/Vyapar Excel import.
  - Form XIV generator.
  - Expiry and banned-product alerts.
  - iFMS stock-mismatch check from a manually entered PoS balance.
- **Later:** distributor dashboard; an official IPMS API, if one is ever published.
- **Out of scope:**
  - GST billing replacement (partner with or import from existing apps).
  - Fertiliser subsidy flows.
  - Anything that touches Aadhaar authentication.

**Key screens:**
1. "Aaj ki bikri" (today's sales): quick entry.
2. "Maal aaya" (stock received): invoice photo capture.
3. Register view, exportable to PDF.
4. IPMS status: entries pending versus done, with operator chat.
5. Licence-risk dashboard: expiry, mismatches, renewal dates.

---

## 5. Technical design

- **Architecture:**
  - Flutter or PWA client, offline-first with SQLite.
  - Backend: Postgres plus a small API (Django or Node).
  - Hosting: AWS/GCP Mumbai region.
  - WhatsApp Business API for reminders and invoice-photo intake.
  - Operator console for IPMS keying.
- **Stack for a solo developer:** Django + Postgres + a PWA (one codebase, cheap Android phones, works offline). Use cloud OCR such as Google Vision, with a human check.
- **Data model:**
  - Shop (licence numbers by input type).
  - Product (CIB&RC registration number, brand, formulation, pack).
  - Batch (manufacturer, batch number, mfg/expiry dates).
  - Purchase and Sale (party, licence number for licensed buyers).
  - StockLedger.
  - IPMSEntryTask.
  - Inspection log.
- **Integrations:**

| System | Method | Fallback |
|---|---|---|
| IPMS | No known API. Browser automation is fragile: OTP login, government site changes, and possible terms-of-use issues | Human operator keying from the generated list |
| iFMS | No dealer API; PoS is a closed device | Dealer types the PoS balance; app compares |
| SATHI | No API known | Out of MVP |
| Billing apps | Excel/CSV export | Photo OCR |
- **Rules engine:**
  - Stock never goes negative.
  - Expiry and banned/restricted list checks against CIB&RC.
  - Licensed-buyer sales routed to Form XIV.
  - Product must be in the shop's licence "principal certificate" list (unverified rule detail).
- **Security and privacy:** Digital Personal Data Protection Act 2023 and the DPDP Rules 2025 apply. Farmer names and phone numbers are personal data, so collect only what is needed, get consent, and host data in India. Storing dealer IPMS OTPs or credentials is a red line: the operator logs in on the dealer's phone over a call, or the dealer approves the OTP.
- **Audit trail and liability:** keep an immutable ledger with an edit history. The ToS makes the dealer the filer of record and caps liability at fees paid. The operator works from dealer-confirmed lists only.
- **Localisation:** Hindi first (Devanagari), then Marathi and Telugu; INR; GSTIN and licence-number formats.
- **Testing:** golden files built from real bill books; replay a month's register against IPMS stock in 5 pilot shops.

---

## 6. Build plan (pivot only)

| Week | Milestone | Dev-weeks |
|---|---|---|
| 0–1 | 15 interviews in 2 UP districts (section 13); confirm IPMS entry frequency and fields | 0 |
| 2–3 | Concierge: WhatsApp group plus Google Sheet register, with an operator keying IPMS for 10 shops | 0.5 |
| 4–7 | PWA MVP: product master, purchase/sale entry, register PDF, IPMS task list | 4 |
| 8 | First paying customers (concierge price ₹499/month) | — |
| 9–14 | OCR intake, Excel import, Form XIV, expiry alerts | 5 |
| 15–20 | Operator console, mismatch dashboard, distributor view (v1) | 5 |

About **8 weeks to first paying customer** (mostly concierge) and about 15 dev-weeks to v1. Fake at first: IPMS sync (human), OCR (human), and the product master (a hand-built list of the top 300 SKUs).

---

## 7. Go-to-market

- **First 10 customers:** shops in a UP district that just had an IPMS crackdown, such as Gonda, Kannauj or Muzaffarnagar. Reach them through the district pesticide dealers' association and the District Agriculture Protection Officer's (Jila Krishi Raksha Adhikari) dealer meetings. Distributor salesmen are a second route.
- **Outreach angles:**
  - "Your licence stays safe; we do the IPMS entries."
  - "Bill once; register, IPMS and inspector PDF are ready."
- **Channel partners:**
  - Pesticide distributors, who want clean secondary-sales data.
  - Cyber cafés/CSC operators already doing IPMS registrations, as resellers (unverified that they do this).
  - Agri-billing vendors, as an add-on.
- **Timing:** Rabi inspection season (Oct–Dec) and the pre-Kharif crackdown (Mar–May) are when fear peaks.
- **Content and SEO (Hindi):** "IPMS portal registration kaise kare", "kitnashak vikreta stock register online", "Form XIV kya hai". Short YouTube walkthroughs.

---

## 8. Pricing and unit economics

- **Tiers:**
  - Self-serve register: ₹199/month or ₹1,999/year.
  - Register plus IPMS done-for-you: ₹499/month.
  - Distributor: ₹99 per shop per month.
- **Blended ARPU:** about ₹350/month. **ACV** about ₹4,200 (~US$48).
- **CAC by channel (estimates):**
  - Association meeting: ₹300–600 per shop.
  - Distributor channel: ₹200 plus revenue share.
  - Field visits: ₹800–1,500.
- **Gross margin:** about 40–55% on done-for-you, because operator time runs about 20–40 min per shop per month (estimate); about 85% self-serve.
- **Payment rails:** UPI AutoPay mandates via Razorpay or Cashfree. A foreign founder needs an Indian Pvt Ltd (or LLP) for Razorpay KYC. Otherwise use a merchant of record like Paddle, which handles INR UPI poorly for village shops (estimate). An Indian co-founder or partner entity is effectively required.
- **FX:** revenue in INR, so the INR/USD drift (~2–4%/yr, estimate) erodes dollar value.

---

## 9. Company and legal setup

- Indian Pvt Ltd with a resident director. Costs about ₹15–30k plus annual compliance of about ₹40–60k (estimate).
- **GST:** 18% on SaaS. Register once turnover passes ₹20 lakh, or voluntarily to give dealers input credit.
- **Contracts:**
  - ToS in Hindi: the dealer is the filer of record.
  - DPDP-compliant privacy notice.
  - Operator NDA.
- **Professional liability:** small cyber/PI policy (estimate ₹15–25k/yr). Contractually capped liability.
- A local partner is mandatory for field sales and operations.

---

## 10. Financial model (24 months, pivot scenario, INR)

**Assumptions:**
- Blended ARPU ₹350/month; net customer adds shown after about 4% monthly churn.
- Costs: tools, hosting and WhatsApp ₹6k/month. Part-time field partner ₹25k/month from M3. Operator ₹15k from M6. Extra ops and travel ₹10k from M10.
- ₹30k setup cost. No founder salary.

| Period | Customers | MRR | Costs (period) | Cumulative cash |
|---|---|---|---|---|
| M1 | 0 | ₹0 | ₹6,000 | ₹-36,000 |
| M2 | 0 | ₹0 | ₹6,000 | ₹-42,000 |
| M3 | 0 | ₹0 | ₹31,000 | ₹-73,000 |
| M4 | 8 | ₹2,800 | ₹31,000 | ₹-101,200 |
| M5 | 20 | ₹7,000 | ₹31,000 | ₹-125,200 |
| M6 | 35 | ₹12,250 | ₹46,000 | ₹-158,950 |
| M7 | 55 | ₹19,250 | ₹46,000 | ₹-185,700 |
| M8 | 75 | ₹26,250 | ₹46,000 | ₹-205,450 |
| M9 | 95 | ₹33,250 | ₹46,000 | ₹-218,200 |
| M10 | 115 | ₹40,250 | ₹56,000 | ₹-233,950 |
| M11 | 135 | ₹47,250 | ₹56,000 | ₹-242,700 |
| M12 | 150 | ₹52,500 | ₹56,000 | ₹-246,200 |
| Q ending M15 | 200 | ₹70,000 | ₹168,000 | ₹-221,700 |
| Q ending M18 | 250 | ₹87,500 | ₹168,000 | ₹-144,700 |
| Q ending M21 | 290 | ₹101,500 | ₹168,000 | ₹-22,200 |
| Q ending M24 | 330 | ₹115,500 | ₹168,000 | ₹142,300 |

- **Month-12 MRR:** about ₹52,500 (~US$600).
- **Operating break-even:** about M13. Cumulative cash turns positive about M22, but only because no founder salary is counted.
- **Realistic ceiling:**
  - UP pesticide sale points are estimated at 25–35k (not verified). At 2% share that is 600 shops × ₹350 = **~₹2.1 lakh/month (~US$2,400)**.
  - Nationally, 3 lakh sale points × 1% = 3,000 shops = **~₹10.5 lakh/month (~US$12k)**. That figure is reachable only if IPMS sync works and states enforce it uniformly.
- This is a lifestyle-sized business at best, and fragile against a single IPMS UI or app change.

---

## 11. Team and founder fit

Requires Hindi (and later Marathi or Telugu), field presence in UP districts, and comfort with government portals and district officials. Not realistic for a non-local founder without a local operating partner who effectively runs sales and operations. The software is the easy part. Operator labour is the product.

---

## 12. Risks and mitigations

| Risk | Detail | Mitigation |
|---|---|---|
| **Government (biggest)** | IPMS adds a mobile app, QR scan-to-sell or an official billing module, and the sync layer becomes unnecessary overnight. That is the iFMS e-PoS pattern | Stay a thin service layer; pivot to "operator for IPMS + iFMS + SATHI" |
| Platform | IPMS changes UI, adds captchas or forbids third-party entry | Human keying; dealer logs in on own phone |
| Regulatory scope | Dealer obligations may be narrower than feared (no general monthly return), which weakens urgency after registration | Sell on inspection-readiness, not the return |
| Competitive | Agri-billing vendors (Setuverse, AgroVyapar, Agro Manager) add an "IPMS export" first; Vyapar or myBillBook add an agri template | Partner with them instead of competing |
| Operational | Done-for-you keying does not scale; errors land on the dealer's licence | Dealer-confirmed lists, audit trail, liability cap |
| FX/payment | UPI mandate failures; village cash habits | Annual prepay discount; distributor collects |

---

## 13. Validation plan before writing code

- **Interview targets (15):**
  - 8 pesticide retailers in Gonda/Kannauj/Muzaffarnagar (mix of IPMS-registered and recently suspended).
  - 2 distributors.
  - 2 district agriculture protection officers.
  - 1 dealers' association office-bearer.
  - 1 cyber café doing IPMS registrations.
  - 1 agri-billing vendor (Setuverse or AgroVyapar).
- **Questions:**
  - After registration, what must you enter on IPMS, and how often: each sale, each purchase, monthly?
  - How long does it take?
  - Who does it today, and what do you pay them?
  - What did the inspector check last time?
  - Do you file Form XIV?
  - What billing tool do you use, and what do you pay?
  - Would you pay ₹499/month for someone to do IPMS and keep the register?
- **Pass/fail thresholds:**
  - **Pass:** ≥6 of 8 retailers must make recurring IPMS entries (at least weekly), taking ≥2 hrs/month. ≥4 must already pay someone or say they would pay ≥₹300/month.
  - **Fail (final kill):** IPMS entries are one-off or monthly and quick; the distributor or company does it free; or IPMS auto-pulls from the supply chain (manufacturer → distributor → retailer push).
- **Pre-sale test:** collect ₹499 UPI for the first month of done-for-you from 10 shops before writing code.

---

## 14. Expansion path

- **Pivot options:**
  - (a) A B2B "IPMS sync" module licensed to existing agri-billing vendors.
  - (b) A distributor-side tool that pushes secondary sales into IPMS on behalf of its retailers, if the portal allows it.
  - (c) A tri-portal operator service (IPMS + iFMS + SATHI) for multi-licence shops.
- **Adjacent workflows:** licence renewal reminders, banned-product recalls, expiry returns to companies.
- **Same pattern elsewhere:** Philippines FPA pesticide-dealer records; Bangladesh and Pakistan pesticide dealer registers (unverified); Indonesia's pesticide kiosk rules (unverified).
- **What would bring the original idea back:**
  - A rule or state order requiring **retail** monthly e-returns in a non-IPMS format.
  - IPMS publishing a bulk-upload or API spec, which would make sync cheap and reliable.
  - Evidence that IPMS sales entry is per-transaction and widely hated.

---

## 15. Reassessment scorecard

| Criterion | Original | New | One-line reason |
|---|---|---|---|
| Pain | 8 | 6 | Licence-loss fear is real, but it is about registering on a free portal, mostly one-off |
| Frequency | 8 | 5 | No general monthly retail return; how often ongoing IPMS entry happens is unverified |
| Mandatory | 9 | 8 | Electronic records are mandatory and enforced; the return itself is not on retailers |
| Fragmentation | 6 | 6 | IPMS + iFMS + SATHI + billing app is still three or four systems |
| Competition | 6 | 3 | Free govt IPMS plus many cheap agri-billing apps with batch registers |
| Incumbent gap | 7 | 3 | The only gap left is IPMS sync, with no API |
| Buyer access | 8 | 7 | District crackdown lists and associations make shops easy to find |
| WTP | 5 | 3 | The free govt tool anchors price at zero; billing apps cost ₹2,999/yr |
| MVP feasibility | 7 | 4 | Without an IPMS API, the product is human keying |
| Distribution | 7 | 6 | Distributors and associations exist; field-heavy |

**New overall score: 4.0 (was 7.0).**
- The drop of 3 points comes from verification. The government shipped the free tool the report named as the biggest risk (IPMS), and is enforcing it with mass licence actions.
- The headline "dealer monthly e-return" belongs to manufacturers and importers.
- The electronic register is already sold by cheap agri-billing apps.
