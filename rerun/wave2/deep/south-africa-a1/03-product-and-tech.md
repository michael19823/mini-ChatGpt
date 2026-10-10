# South Africa high-value goods dealer FICA pack: product, technical design and development plan (deep dive 03)

Part 3 of the South Africa A1 deep dive. Started and last updated 10 Oct 2026. It builds on the A1 report ([../reports/south-africa-a1.md](../reports/south-africa-a1.md)) and the sibling files [01-law-and-requirements.md](01-law-and-requirements.md) (duties D1-D26) and [02-market-and-competition.md](02-market-and-competition.md) (buyers, prices, competitors). Legal facts below come from primary FIC documents that the 01 agent read; I cite the same documents. "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm.

Working name in this file: **the Pack**. Currency: rand (R). I use about **R16.5 per US$**: the ECB reference rates for 9 Oct 2026 give EUR 1 = R18.53 = US$1.1206 ([ECB daily XML](https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml), as used in the [04 file](04-gtm-company-finance.md)).

Status: complete draft, 10 Oct 2026. Research budget used: 23 web searches and 16 page or file fetches.

## Summary

- **What to build.** A small web app that runs a dealer's whole yearly FIC job: an applicability check, a risk assessment and an RMCP built from the dealer's own answers, the owner's approval, a goAML-ready PDF, a deadline calendar, a register of R100k+ deals with a 3-business-day cash-report clock, a client file with sanctions screening, a restricted suspicion log, a training register and a one-click inspection pack. It does not file on goAML for the dealer. It prepares everything and records what was filed.
- **Why software helps even though goAML is free.** goAML only receives filings. It does not write or version the RMCP, record the owner's approval, keep client files, run the report clocks, keep a training register or build an inspection file ([01 file, summary](01-law-and-requirements.md)). The FIC's top inspection findings in 2025/26 were exactly these gaps, including "lack of evidence of client screening against the targeted financial sanctions list" ([FIC AR 2025/26, p. 41](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf)).
- **The RMCP must be tailored, not a template.** The FIC calls an uncustomised copy of its own template "non-compliant", and its guidance may only be reused "for personal and non-commercial use" ([PCC 53](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf)). So the core of the product is an original clause library, written to s42(2)(a)-(s) of the Act, assembled by rules from about 80 answers per dealer and approved by a South African attorney.
- **goAML integration is manual by design.** goAML has web forms for small reporters; XML batch upload is only for high-volume reporters who ask the FIC, and system-to-system (B2B) is for very high volumes ([FIC presentation, 2019, via regalert](https://regalert.today/document/34322b55-1b86-4cf0-996f-24713dab8379/text)). Each user must have their own goAML login (Directive 2, per [PCC 5C](https://www.fic.gov.za/wp-content/uploads/2024/01/PCC-5C-Accountable-and-reporting-institutions-registration.pdf)). The Pack therefore produces the RMCP PDF named `YYYYMMDD_RMCP.pdf` ([FIC how-to](https://www.fic.gov.za/wp-content/uploads/2026/10/HTSRMCP.png)) and "copy sheets" that follow the goAML form order. goAML moved to version 5.4 in September 2025; the FIC's schema specification and B2B developer guide sit in its UAT staging environment, not on a public page ([Moonstone, 4 Sep 2025](https://www.moonstone.co.za/?p=57394)). goAML XML export for cash reports is a v1 option, only if the FIC grants a dealer XML access.
- **Sanctions screening is cheap to build and closes an inspection finding.** The FIC's TFS list is downloadable as Excel, PDF and XML ([FIC TFS portal](https://tfs.fic.gov.za/Pages/TFSListDownload)) and gives effect to UN Security Council designations ([Act s26A](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf)); the FIC mirrors the UN consolidated list within 24 hours of UN changes ([TFS manual, Oct 2026](https://www.fic.gov.za/wp-content/uploads/2026/10/Targeted-financial-sanctions-manual-2026.pdf), per [01 file](01-law-and-requirements.md)). The UN consolidated XML had 736 individuals and 274 entities on 9 Oct 2026 (my download of [the UN file](https://scsanctions.un.org/resources/xml/en/consolidated.xml)). The Pack screens clients and staff against it, re-screens on every list change and keeps a dated certificate. ID verification and PEP data are bought per check from local vendors in v1 (VerifyNow from R2.99 per ID check, [VerifyNow](https://www.verifynow.co.za/pricing)).
- **Two FICA rules shape the design.** (1) A dealer that lets a third party keep its records must tell the FIC the third party's particulars ([Act s24; Regs 20](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf), duty D16 in the 01 file). The Pack must generate that notice. (2) Suspicious-transaction reports must not be disclosed ([Act s29(3)-(4)](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf)). The suspicion log is a restricted area, with no details in e-mails and no data sent to AI services.
- **Stack.** One plain monolith: Python and Django with HTMX, PostgreSQL, a Postgres-backed job queue, WeasyPrint for PDFs and python-docx for Word files. This suits a solo founder directing several Claude Code agents in parallel.
- **Hosting in South Africa is cheap.** Vultr's Johannesburg region costs the same as its other regions: 2 vCPU and 4 GB for US$20 a month, 4 vCPU and 8 GB for US$40 ([Vultr public API, plans](https://api.vultr.com/v2/plans); [regions](https://api.vultr.com/v2/regions)). Hosting in South Africa avoids questions about records abroad ([GN 7B, paras 169-174](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf)). POPIA still applies, and the founder's company abroad is an "operator" that needs a written contract (s21) and a transfer basis (s72) ([POPIA](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf)).
- **Running cost is small:** about US$30-110 a month at 50 customers, US$170-340 at 300 and US$500-790 at 1,000 (my estimates). That is about 2-9% of revenue at the planned prices. A fully managed AWS Cape Town set-up would cost about 3 times more at the small end.
- **Plan.** Start Mon 12 Oct 2026. MVP feature-complete on staging Fri 30 Oct (3 weeks: a foundation week, then 7 agent streams in parallel). Sellable launch Mon 30 Nov 2026 (week 8), after attorney sign-off, a penetration test and 5-8 pilots. The 29 Oct (Directive 10) and 31 Oct (RMCP) 2026 deadlines come too early for the software; serve late filers by hand in November. The real selling seasons are final PCC 126 (new registrations, each needing an RMCP within 90 days), FIC inspections all year, the next risk and compliance return window, and 31 Oct 2027.
- **Cash budget for the MVP: about US$14,000-32,000 (R230k-R530k)**, with no salaried developers. The attorney and the penetration test are two-thirds or more of it. The first year after launch adds about US$10,000-24,000.

## Users and jobs

### Buyer segments

| Segment | FIC registrations, 31 Mar 2026 | What is special for the product | Source |
|---|---|---|---|
| Precious stones dealers (diamonds, coloured stones) | 244 | Licensed by SADPMR; best RCR filers (87%); used to paperwork | [02 file](02-market-and-competition.md); [FIC AR 2025/26, p. 38](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf) |
| Precious metals dealers, jewellers, refiners | 178 | Jeweller's permit; second-hand buy-ins; draft PCC 126 adds source-of-goods and permit checks | [draft PCC 126](https://www.fic.gov.za/wp-content/uploads/2026/09/2026.9-PCC-DPMS.pdf) |
| Krugerrand and bullion dealers | 242 | Frequent cash and EFT deals (my inference); bundles sold as one unit count as one item; only 57% filed the RCR | [PCC 58](https://www.fic.gov.za/wp-content/uploads/2024/03/2024.03-PCC-HVGD-guidance.pdf); [02 file](02-market-and-competition.md) |
| Second-hand and scrap gold buyers | not counted separately | A R100k lot is one item; buying counts as dealing | [PCC 58, example 2](https://www.fic.gov.za/wp-content/uploads/2024/03/2024.03-PCC-HVGD-guidance.pdf) |
| Motor dealers | 4,277 | 77% of item 20; many branches and franchises; nCino KYC markets due-diligence software to them | [02 file](02-market-and-competition.md) |
| Other goods (farm equipment, machinery, boats, art, antiques, livestock) | 640 | Weakest filers (49%) | [02 file](02-market-and-competition.md) |
| Consultants, accountants and attorneys who serve dealers | unknown | Run many dealers; want one screen and white-label output | [02 file](02-market-and-competition.md) |

The first sales target is the jewellery, bullion and stones niche (664 registrations). The product must also serve motor and other-goods dealers from launch, because the niche alone is too small ([02 file, summary](02-market-and-competition.md)). For the MVP this means sub-sector content packs, not different software.

### Roles inside one customer

| Role | Who in a small dealer | What they do in the Pack | Legal hook |
|---|---|---|---|
| Owner or board ("senior management") | Owner, directors, members of a CC | Answers the profile, approves the risk assessment and each RMCP version, receives the yearly compliance report | Approval cannot be delegated to a committee ([Act s42(2B)](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf); [GN 7B paras 181A-181M](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf)) |
| Compliance officer | Often the owner or the shop manager | Runs the calendar, files on goAML, reviews screening hits and concerns, keeps training | [Act s42A](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf); the owner may hold the role in a sole proprietorship ([PCC 5C para 5.2](https://www.fic.gov.za/wp-content/uploads/2024/01/PCC-5C-Accountable-and-reporting-institutions-registration.pdf)) |
| MLRO (optional) | Same person, or a second senior person | Files STRs and CTRs; sees the restricted area | [PCC 5C paras 5.1-5.5](https://www.fic.gov.za/wp-content/uploads/2024/01/PCC-5C-Accountable-and-reporting-institutions-registration.pdf) |
| Counter or sales staff | 1-20 people | Log qualifying deals and cash, collect client documents, raise a concern, read the RMCP, do training | Following the RMCP's reporting procedure is a defence for staff ([Act s69](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf)) |
| External adviser | Consultant, accountant or attorney | Manages several dealers; prepares drafts; cannot approve for the dealer | (product rule) |
| Partner reviewer | South African attorney or senior compliance practitioner | Reviews an RMCP in the "Reviewed" tier and signs a review note | (product rule) |
| Platform content editor | Founder plus the contracted attorney | Maintains rules, questions and clauses; publishes content releases | (product rule) |

The FIC inspector is not a user. The inspector receives an export.

### Jobs to be done (in the buyer's words)

1. "Tell me if I am in, under which category, and how many registrations I need."
2. "Get my RMCP done for 31 October, about my business, approved by me, in the file the FIC wants."
3. "Report all my branches for Directive 10, and remind me when something changes."
4. "Don't let me miss a cash report. I have 3 business days."
5. "Prove that I screened my clients and staff against the sanctions list."
6. "If something smells wrong, tell me what to do and keep it secret."
7. "When the inspector arrives, give me one file."
8. "When the FIC opens the risk and compliance return, help me answer it from my records."
9. "Train my staff once a year and keep proof."
10. Adviser: "Let me run 20 dealer clients from one screen."

## Feature map

### Duties behind the features

Each duty from the 01 file's table maps to a feature. "Track" means the Pack records evidence and dates; "Make" means it produces a document or data; "Guide" means step-by-step help for a goAML action the user must do.

| Duty (01 file) | Feature | Type | Tier |
|---|---|---|---|
| D1 register, D2 keep details current | Applicability checker; registration register (Org IDs, item, sub-category, SADPMR permit); 90-day change clock; goAML registration guide | Make, Track, Guide | MVP |
| D3 Directive 10 locations | Location register (head office, branches, subsidiaries, in or outside SA) with all required fields; goAML step checklist; 90-day change clock | Make, Track, Guide | MVP |
| D4 risk assessment | Sub-sector risk questionnaire; explainable scoring; risk appetite; residual risk | Make | MVP |
| D5 RMCP, D6 approval, D7 review | RMCP generator from an original clause library; s42(2) coverage table; versions; approval record; yearly review wizard | Make, Track | MVP (yearly wizard v1) |
| D8 staff access to RMCP | Staff read-and-confirm links | Track | MVP |
| D9 send RMCP to FIC | `YYYYMMDD_RMCP.pdf` export; goAML upload guide; submission record with screenshot | Make, Guide, Track | MVP |
| D10 compliance function | Appointment letter, competence note, yearly report to the owner or board | Make | MVP |
| D11 training | Training register; attendance; v1 short course with quiz | Track (Make in v1) | MVP / v1 |
| D12 employee screening | Staff register; TFS screening of staff; integrity check log | Track | MVP |
| D13 CDD, D14 PEPs | Client file (person, company, trust); beneficial owners; PEP/PIP declaration; source of funds; SADPMR permit and source of goods (draft PCC 126) | Track | MVP; vendor ID and PEP checks v1 |
| D15 records, D16 outsourced record keeper | 5-year retention engine; full export; s24 notice to the FIC pre-filled with our particulars | Make, Track | MVP |
| D17 TFS screening | UN/FIC list ingest; screening at onboarding; re-screen on each list change; hit review; certificates | Make, Track | MVP |
| D18 CTR | Deal register flags cash above R49,999.99; 3-business-day clock; copy sheet with Reg 22C fields | Make, Track, Guide | MVP; goAML XML v1 |
| D19 STR, D20 no tipping off | Restricted concern log; 15-business-day clock; STR copy sheet; access log | Make, Track | MVP |
| D21 TPR | Confirmed TFS hit creates a 5-business-day TPR task and freeze checklist | Track, Guide | MVP |
| D22 FIC requests | Request log with due dates | Track | v1 |
| D23 RCR | RCR checklist and evidence folder (MVP); RCR workbook that mirrors the 2026 HVGD questionnaire with answers per data period computed from the registers (v1) | Track, Make | MVP / v1 |
| D24 missed report notice | Directive 3A notice letter, drafted when a report clock is missed | Make | MVP |
| D25 inspections | One-click inspection pack (ZIP plus index PDF) | Make | MVP |
| D26 no shared goAML logins | The Pack never stores goAML passwords and never files for the user | (design rule) | MVP |

### Feature map

| Area | MVP (sellable 30 Nov 2026) | v1 (Dec 2026 - Jul 2027) | Later |
|---|---|---|---|
| Scope | Free public checker (per-item R100k test, sub-category, number of registrations under current and draft rules, item 11 credit flag) | Update for final PCC 126 and final PCC 5E | Other Schedule 1 items (estate agents, attorneys) |
| Profile | Legal entity, registrations, SADPMR permits, locations, people, roles | Group view for dealer groups | |
| Risk and RMCP | Questionnaire (about 80 questions, 6 sub-sector packs); scoring; RMCP PDF and DOCX; coverage table; approval; versions; staff read-and-confirm | Yearly review wizard with "what changed" (answers and law); attorney review workflow inside the app | Regional legal packs (Namibia, Botswana, Kenya) |
| Calendar | Deadline engine with SA business days; e-mail reminders; weekly digest | WhatsApp or SMS reminders; iCal feed | |
| Filing help | goAML guides; copy sheets (RMCP, Directive 10, CTR, STR, TPR); submission log; Directive 3A letter; a guard that keeps RCR and RMCP flows apart | goAML XML for CTRs (where the FIC allows XML upload); FIC request log | |
| Deals and cash | Qualifying-deal register; payments with linked-payment and cash flags; CTR clock; structuring alerts (cash split around R50k, deals split under R100k) | CSV import from POS or accounting exports to catch missed R100k items and cash | POS integrations; Second-Hand Goods Act registers with the 7-day hold; six-monthly Precious Metals Regulations return (PMR 4) |
| Clients | Client file; BO; PEP declaration; document upload; TFS screening | Client self-service link or QR code at the counter; ID and PEP checks via a vendor API; CIPC company look-up via a reseller | |
| Suspicion | Restricted concern log; STR clock and copy sheet | Red-flag prompts per sub-sector at deal entry | |
| People | Staff register; training log; employee screening | Short course and quiz; certificates | |
| Evidence | Inspection pack; self-check against the six most common inspection findings; s24 notice; full export with a quarterly retrieval test | Read-only link for an external reviewer | |
| RCR | Checklist and evidence folder | RCR workbook mirroring the 2026 HVGD questionnaire (Parts 1-4), one per Org ID, answers per data period computed from the registers, questions editable without a code release | |
| Commercial | Card checkout (merchant of record); plans; adviser multi-dealer switcher | Adviser dashboard; white-label PDFs | Partner API (for example with a KYC vendor) |
| AI | None in the MVP | Help assistant on the Pack's own approved content; draft wording for "not applicable" reasons and business descriptions (user must confirm) | |

### Match with the 01 file's product requirements

The [01 file](01-law-and-requirements.md) lists 70 testable requirements (sections A-P), tagged MVP or Later. This design ships every [MVP] item with three deliberate changes:
- **RCR workbook (requirements 61-63) moves to v1 (Q1 2027).** The questions are known from the 2026 HVGD questionnaire ([FIC](https://www.fic.gov.za/wp-content/uploads/2026/05/High-value-goods-dealer-questionnaire.pdf)), but RCR rounds came in 2023 and 2026 and the next is not announced ([01 file, upcoming changes](01-law-and-requirements.md)). Building it later costs nothing in sales.
- **Training course content (requirement 54) moves to v1.** The MVP keeps the training register, which is the evidence an inspector asks for; the course and quiz follow.
- **Motor and other-goods modules (requirement 17, "Later" in the 01 file) come in the MVP in a basic form**, because 88% of item 20 registrations are motor and other goods ([02 file](02-market-and-competition.md)).

### Why this cut

- The MVP has everything the FIC's inspection findings name: RMCP, approval, screening evidence, registration details, CDD files ([FIC AR 2025/26, p. 41](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf)). That is what the "Inspection-ready" plan in the [02 file](02-market-and-competition.md) promises (R5,900 a year).
- Vendor ID checks, POS import and goAML XML need outside contracts or FIC approval. They are not needed to sell.
- The RCR workbook waits until Q1 2027. The 2026 round closed on 31 July 2026 ([Directive 11](https://www.fic.gov.za/wp-content/uploads/2026/03/Directive-11-%E2%80%93-Risk-and-compliance-return.pdf)) and no new round is announced (unverified), so it does not help the first sales.
- No AI in the MVP keeps the legal text fully attorney-approved and the privacy story simple.

## Key flows

### Flow 1: Free check to sign-up (5 minutes)
1. The visitor answers 6-8 questions: what they sell or buy, the highest single item or bundle value, payment forms, SADPMR permits held, branches, credit given.
2. Result: "In scope under item 20, sub-category X. You need N goAML registrations (today's rule) or M (if draft PCC 126 is adopted). Your next deadlines are ..." Each rule shows its source ([PCC 58](https://www.fic.gov.za/wp-content/uploads/2024/03/2024.03-PCC-HVGD-guidance.pdf); [draft PCC 126](https://www.fic.gov.za/wp-content/uploads/2026/09/2026.9-PCC-DPMS.pdf); [draft PCC 5E](https://www.fic.gov.za/wp-content/uploads/2026/03/2026.3-PCC-Draft-PCC05E_.pdf)).
3. Sign-up with e-mail and MFA; card checkout or a 14-day trial (my proposal).

### Flow 2: First RMCP (target: under 90 minutes of the owner's time)
1. **Profile** (10 min): legal form, registrations and Org IDs, permits, locations, staff count, compliance officer.
2. **Risk questionnaire** (30-40 min): products and price bands; share of items over R100k; payment mix (cash, EFT, card, crypto, trade-ins, lay-by); clients (walk-in public, foreign visitors, trade buyers, companies and trusts, PEPs); channels (shop, online, phone, agents, auctions, export); buy-ins from the public; suppliers; geography, including high-risk countries and non-Kimberley Process sources for rough diamonds ([draft PCC 126 para 3.2](https://www.fic.gov.za/wp-content/uploads/2026/09/2026.9-PCC-DPMS.pdf)); existing controls. Sector red flags from [PCC 58 para 4.2](https://www.fic.gov.za/wp-content/uploads/2024/03/2024.03-PCC-HVGD-guidance.pdf) are asked as plain questions.
3. **Risk result** (10 min): inherent risk per factor (client, product, channel, geography) with the reason shown; the owner may change a rating with a written reason; a risk appetite statement (for example "no cash above R X", "no crypto").
4. **Controls** (10 min): the Pack proposes controls for each risk (for example source-of-goods checks for scrap buy-ins); the owner accepts or changes them. Each accepted control becomes RMCP text and, where needed, a calendar task.
5. **Draft RMCP** (10 min to read): sections follow the FIC's three parts (risk, controls, monitoring) ([GN 7B para 183A](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf)). An annex maps each s42(2)(a)-(s) element to a section or to "not applicable because ...". Fields the owner must write in their own words (business description, how cash is handled) are marked; the RMCP cannot be approved while they are empty.
6. **Approval**: the owner (or each director) approves the exact version (hash shown). Optional: upload a signed resolution. The PDF gets an approval page and is named `YYYYMMDD_RMCP.pdf` with the approval date ([FIC how-to](https://www.fic.gov.za/wp-content/uploads/2026/10/HTSRMCP.png)).
7. **Upload on goAML**: a guide for "My Org Details" with the comment "RMCP submission" ([01 file, D9](01-law-and-requirements.md)). The user records the date and adds a screenshot. One RMCP per item registration ([Directive 12 feedback note, para 7](https://www.fic.gov.za/wp-content/uploads/2026/09/Consultation-feedback-note-Relating-to-draft-Directive-12-on-the-submission-of-RMCPs.pdf)).
8. **Staff**: read-and-confirm links go to staff ([Act s42(3)](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf)). The calendar sets the next review and the 31 October upload.

### Flow 3: Directive 10 locations (15 minutes)
1. The location register lists each head office, branch, subsidiary head office and subsidiary branch, with name, licence number, registration number, address and the compliance contact ([Directive 10, paras 4-6](https://www.fic.gov.za/wp-content/uploads/2026/07/Directive-10-On-information-pertaining-to-geographic-locations.pdf)).
2. A checklist per location follows the goAML steps: log in to the head office profile, open the "active organisations" tab, create a "new delegating organisation" for each location ([Directive 10 information sheet](https://www.fic.gov.za/wp-content/uploads/2026/08/Directive-10-information-sheet-3-1.pdf), per [01 file](01-law-and-requirements.md)). A location without a compliance contact cannot be marked ready. The user records the date. Single-location dealers do not see this flow.
3. Any later change starts a 90-day clock.

### Flow 4: A qualifying sale with cash (counter, about 5 minutes)
1. Staff open "New deal" on a phone or tablet: item, value, date, location.
2. Find or create the client. A new client is screened against the TFS list at once. A possible match blocks the deal until the compliance officer clears it.
3. CDD checklist by client type: ID seen and copied, address, for companies the directors and beneficial owners ([PCC 59](https://www.fic.gov.za/wp-content/uploads/2024/08/PCC-59-Beneficial-ownership.pdf)), PEP declaration, source of funds where needed.
4. Payments: each payment with method and amount. Linked payments add up to the item's value ([PCC 58 paras 1.5.10-1.5.11](https://www.fic.gov.za/wp-content/uploads/2024/03/2024.03-PCC-HVGD-guidance.pdf)). Cash above R49,999.99 inside the deal creates a CTR task due in 3 business days ([Regs 22B, 22C, 24(4)](https://www.fic.gov.za/wp-content/uploads/2023/10/Money-Laundering-and-Terrorist-Financing-Control-Regulations.pdf)). Cash paid into the dealer's bank account still counts as cash received (my reading of the 2017 fines in the [02 file](02-market-and-competition.md); confirm with the attorney).
5. The compliance officer opens the CTR copy sheet. It lists the Reg 22C fields with values from the deal and client file, and "not obtained" where allowed ([GN 5C, paras 16-21](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.10-Guidance-Guidance-Note-5C-CTRs.pdf)). They file on goAML and record the goAML reference.

### Flow 5: A buy-in from the public (scrap gold lot or Krugerrands of R100k or more)
Same as Flow 4, plus the source of the goods, the seller's permit or second-hand dealer details where relevant, and a prompt about structuring (several lots just under R100k) ([PCC 58 para 1.10](https://www.fic.gov.za/wp-content/uploads/2024/03/2024.03-PCC-HVGD-guidance.pdf)).

### Flow 6: Something looks suspicious
1. Any staff member presses "Raise a concern" (also outside qualifying deals: STRs apply to any value, [PCC 58 para 1.8](https://www.fic.gov.za/wp-content/uploads/2024/03/2024.03-PCC-HVGD-guidance.pdf)). They write what they saw. The record goes to the compliance officer only; the staff member gets a receipt (their s69 defence).
2. The compliance officer decides: no report (with reasons) or STR. An STR starts a 15-business-day clock ([Regs 24(3)](https://www.fic.gov.za/wp-content/uploads/2023/10/Money-Laundering-and-Terrorist-Financing-Control-Regulations.pdf)).
3. The STR copy sheet helps structure the grounds. The user files on goAML and records the reference.
4. No e-mail ever contains the content. The client's file shows nothing.

### Flow 7: The sanctions list changes
1. A job checks the UN XML and the FIC list several times a day. A new version is stored with its date and hash.
2. All clients and staff of all tenants are re-screened against the change. Possible matches go to each compliance officer's queue.
3. The officer marks "not a match" with a reason or "confirmed". A confirmed match creates a "do not deal" block, a TPR task due in 5 business days ([Regs 24(1)-(2)](https://www.fic.gov.za/wp-content/uploads/2023/10/Money-Laundering-and-Terrorist-Financing-Control-Regulations.pdf)) and a freeze checklist.
4. Each check produces a certificate: who, which list version, when, result.

### Flow 8: The yearly cycle
- **1 September:** reminder; the review wizard shows last year's answers and the content-release notes (what changed in the law).
- **September-October:** the owner updates answers, approves the new version, uploads by 31 October ([Directive 12](https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf)).
- **Any time:** an amended RMCP must be uploaded within 10 days of approval (same source). The Pack starts that clock on every approval.
- **Yearly:** staff training refresh, employee screening refresh, compliance report to the owner or board.

### Flow 9: The FIC opens a risk and compliance return
The content editor publishes the window (2026: 4 May to 31 July, [Directive 11](https://www.fic.gov.za/wp-content/uploads/2026/03/Directive-11-%E2%80%93-Risk-and-compliance-return.pdf)) as a calendar event for all customers. The RCR is filed on a separate online RCR platform linked from the FIC website, not on goAML; drafts can be saved; one return per Org ID, consolidating branches of one legal entity, with a declaration by the MLRO ([PCC 60](https://www.fic.gov.za/wp-content/uploads/2026/06/2026.6-PCC-60-RCR-_On-RCR-Submission.pdf), per [01 file](01-law-and-requirements.md)). MVP: a checklist and an evidence folder. v1: a workbook that mirrors the HVGD questionnaire and computes the percentage answers per data period (natural persons, foreigners, trusts, PEPs, cash in qualifying deals, third-party payments, online sales, Kimberley Process checks and so on) from the registers ([HVGD questionnaire](https://www.fic.gov.za/wp-content/uploads/2026/05/High-value-goods-dealer-questionnaire.pdf)). The interface warns if a user tries to upload an RMCP during an RCR window, a mix-up the FIC has warned about ([01 file, requirement 26](01-law-and-requirements.md)).

### Flow 10: An inspection notice
One click builds a ZIP: index PDF; registration details; current RMCP and all past versions with approvals and goAML upload records; risk assessment; Directive 10 list; compliance officer appointment; training and staff screening registers; TFS screening log with list versions; CTR log; client files for chosen deals; s24 notice. The STR log is excluded by default; the compliance officer can add a summary by hand.

### Flow 11: Adviser with many dealers
The adviser has one login and a list of dealers with traffic lights (RMCP due, overdue CTRs, open hits). They prepare drafts, but only the dealer's owner can approve. Each dealer is a separate tenant.

## Screens (described)

1. **Home dashboard.** "Your FIC year": a progress bar (for example 7 of 10 items done), next three deadlines with days left, open tasks (CTRs, screening hits, staff to train), and a red banner for anything overdue.
2. **Calendar.** Month and list views. Each item shows its legal source and the evidence attached.
3. **Checker** (public and in-app). One question per screen, with a result page that cites sources.
4. **Business profile.** Tabs: entity, registrations (Org IDs, item, sub-category, permit), locations, people and roles.
5. **Risk questionnaire.** One topic per page, progress on the left, "why we ask" help on the right, save-and-resume.
6. **Risk result.** A 4 x 3 table (factors by inherent, controls, residual) with reasons and override fields.
7. **RMCP.** Document view with section navigation; "you must write this" fields highlighted; coverage annex; version history; approve button; downloads (PDF, DOCX).
8. **goAML filing.** Cards for each filing type with a step-by-step guide, the copy sheet and "record submission".
9. **Deals.** A list with filters (cash flag, CTR due); a mobile-first "new deal" form.
10. **Clients.** List with risk level and screening status; a client page with documents, BOs, PEP status and the deal history.
11. **Screening.** List status (version, date, source); hit queue with side-by-side comparison; certificates.
12. **Concerns** (restricted). Visible only to the compliance officer and MLRO; separate access log.
13. **People and training.** Staff list, training sessions, attendance, read-and-confirm status, screening.
14. **Inspection pack.** Choose period and sample deals; build; download.
15. **Settings and billing.** Users and roles, MFA, plan, invoices, data export, s24 notice download.
16. **Adviser portfolio.** One row per dealer.
17. **Content admin** (internal). Questions, rules, clauses, guides; draft, review and publish releases with the attorney's sign-off.

## Data sources and integrations

### At a glance

| Source | What we use | Access | Format | Licence or terms | Cost | In |
|---|---|---|---|---|---|---|
| goAML (FIC), version 5.4 since 15 Sep 2025 ([Moonstone](https://www.moonstone.co.za/?p=57394)) | Where the user files; we never connect | Web portal with personal logins ([goAML](https://goweb.fic.gov.za/goAMLWEb_PRD/Home)) | Web forms; RMCP as one PDF; XML batch on request to the FIC; B2B for very high volume ([2019 FIC presentation](https://regalert.today/document/34322b55-1b86-4cf0-996f-24713dab8379/text)) | Logins may not be shared (Directive 2, per [PCC 5C](https://www.fic.gov.za/wp-content/uploads/2024/01/PCC-5C-Accountable-and-reporting-institutions-registration.pdf)) | Free | Guides and copy sheets: MVP; XML: v1 |
| FIC TFS list | Screening; list version label (latest notice TFS-924, 7 Oct 2026) | [tfs.fic.gov.za](https://tfs.fic.gov.za/); download page; online search with a similarity score; e-mail alerts go to registered institutions automatically. The FIC mirrors the UN consolidated list and updates within 24 hours of UN changes ([TFS manual, Oct 2026, ss 2.1-2.5, 6.6](https://www.fic.gov.za/wp-content/uploads/2026/10/Targeted-financial-sanctions-manual-2026.pdf), per [01 file](01-law-and-requirements.md)) | Excel, PDF, XML ([download page](https://tfs.fic.gov.za/Pages/TFSListDownload)) | Disclaimer not read (unverified); public list | Free | MVP |
| UN Security Council consolidated list | Machine source for screening | [consolidated.xml](https://scsanctions.un.org/resources/xml/en/consolidated.xml) | XML (schema at un.org); 2.2 MB; 736 individuals, 274 entities on 9 Oct 2026 (my download) | Public UN document | Free | MVP |
| FIC Act, Regulations, directives, PCCs, guidance notes | Requirement library, rules, citations | fic.gov.za PDFs | PDF | FIC guidance may be reproduced unaltered only for personal, non-commercial use ([PCC 53](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf)): we cite and link, never copy | Free | MVP |
| South African public holidays | Business-day clocks (3, 5, 15 days) | 12 fixed or Easter-based holidays; "whenever any public holiday falls on a Sunday, the Monday following on it shall be a public holiday" (for example 10 Aug 2026 and 22 Mar 2027) ([gov.za](https://www.gov.za/about-sa/public-holidays)) | Rule table in code, checked against the gov.za list each year; ad hoc holidays (for example election days) added by the content editor | Government information | Free | MVP |
| ID verification against Home Affairs | Verify SA ID numbers and photos | Via resellers. VerifyNow sells ID checks from R2.99 and sanctions and PEP checks from R5.98 ([VerifyNow pricing](https://www.verifynow.co.za/pricing)) and is described as having a REST API ([Software Advice](https://www.softwareadvice.co.uk/software/548724/VerifyNow)); AML GO sells screening at R1-R7 a check ([AML GO](https://amlgo.co.za/)) | REST/JSON (unverified details) | Vendor contract; POPIA operator terms | Pass-through per check | v1 |
| CIPC company data | Directors and registration for company clients | No open API confirmed. CIPC is said to be building an "APIVerse" portal with approval-based access ([CompanyData](https://companydata.com/cipc-api/), vendor claim, unverified). Resellers: WinDeed about R16.81 a search ([WinDeed, via search](https://www.windeed.co.za/director-search/), unverified) | Reseller API or manual | Reseller terms | Pass-through | v1 (manual upload in MVP) |
| PEP data | PEP and PIP checks | No official SA PEP list. The Act lists the positions (Schedules 3A, 3B, 3C; [Act s21F-21H](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf)). OpenSanctions holds about 3,036 South African office-holders (national and provincial legislators, municipal leaders) and the FIC TFS list ([OpenSanctions, ZA](https://www.opensanctions.org/countries/za/)), but not the wider Schedule 3A positions (my reading) | Self-declaration against the position lists in MVP; vendor or OpenSanctions API in v1 | OpenSanctions: free for non-commercial use, a licence for business use, API about EUR 0.10 a call ([OpenSanctions API](https://www.opensanctions.org/api/); date of price unverified) | Pass-through | MVP / v1 |
| SADPMR permits and licences | Dealer's own permits; trade clients' permits (draft PCC 126) | No public register found. The Precious Metals Regulations provide for a register and a jeweller's permit holder form ([Precious Metals Regulations, Annexure C](https://shop.acts.co.za/precious-metals-act-2005/r570_annexure_c__forms.php)); public access unverified | Manual entry and copy upload | | Free | MVP |
| Exchange rates | Foreign-currency cash converted at the time of the deal ([GN 5C para 26](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.10-Guidance-Guidance-Note-5C-CTRs.pdf)) | User enters the rate in MVP | | | Free | MVP |
| Payments | Subscriptions by card | Merchant of record (Paddle) or Stripe; see the company and payments files | Webhooks | Vendor terms | Paddle: 5% + 50 US cents per checkout transaction, including "global tax and regulatory compliance" ([Paddle pricing](https://www.paddle.com/pricing)). Paddle takes bank transfers only in USD, EUR and GBP, so a dealer who pays only by rand EFT needs another route ([04 file](04-gtm-company-finance.md)) | MVP |
| E-mail | Reminders, digests, sign-in links | Postmark or Amazon SES | SMTP/API | | About US$15 a month for 10,000 e-mails at Postmark ([third-party](https://automationatlas.io/answers/postmark-pricing-explained-2026/)) | MVP |
| SMS (optional) | Reminders for overdue CTRs and the 31 October upload | South African bulk SMS providers | API | | R0.14-R0.24 per SMS excl. VAT ([ITWeb, sponsored, Jul 2026](https://www.itweb.co.za/article/new-price-comparison-reveals-sas-cheapest-bulk-sms-provider/xA9POvNE6a9qo4J8); [Panacea Mobile](https://www.panaceamobile.com/gateways/bulk-sms-gateway/); [Vodacom Messaging](https://www.vodacommessaging.co.za/products/pdf/Bulk%20SMS.pdf)) | v1 |

### goAML: what it accepts and what the Pack does

- **RMCP.** One PDF named `YYYYMMDD_RMCP.pdf` (approval date), uploaded under "My Org Details" with the comment "RMCP submission" ([FIC how-to](https://www.fic.gov.za/wp-content/uploads/2026/10/HTSRMCP.png), per [01 file D9](01-law-and-requirements.md)). A file size limit is not published (unverified). The Pack keeps the PDF small (text, no images) and embeds fonts.
- **Directive 10 locations.** Entered on goAML from the head office profile: "active organisations" tab, then "new delegating organisation" per location ([Directive 10 information sheet](https://www.fic.gov.za/wp-content/uploads/2026/08/Directive-10-information-sheet-3-1.pdf), per [01 file](01-law-and-requirements.md)). The Pack gives a checklist in the same order. Pilot screenshots will make the guide concrete.
- **CTR, STR, TPR.**
  - Small reporters use web forms. Fields marked * are mandatory; readily-available fields left empty must say "not obtained". The goAML 5.4 CTR user guide also shows an "Upload XML and web reports" function ([goAML CTR user manual, Aug 2025](https://www.fic.gov.za/wp-content/uploads/2025/09/goAML-V5.4-Cash-Threshold-Report-User-Manual_7-August-2025.pdf), per [01 file](01-law-and-requirements.md)).
  - XML batch upload exists, but the reporter must ask the FIC for it. Reporters should pre-validate files in-house and can test on a staging (UAT) environment; goAML may not be used to pre-validate ([FIC presentation, 2019](https://regalert.today/document/34322b55-1b86-4cf0-996f-24713dab8379/text); [FIC goAML Notice 4A, 2020, via Moonstone](https://www.moonstone.co.za/wp-content/uploads/library/Moonstone%20Library/MS%20Industry%20News/201110_goAML_Notice%204A_on_Process_to_Remediate_Batch_Reports_on_goAML.pdf)).
  - goAML moved from version 4.6 to 5.4 on 15 September 2025, and reporters had to "use the new schema from 15 September". The "goAML EE FIC Schema Specification" (the linked PDF is V5.0.2) and the "goAML EE Version 5.4 B2B Developers Guide" (July 2025) are "available in the FIC's UAT staging environment". Queries go to goAMLupgrade@fic.gov.za ([Moonstone, 4 Sep 2025](https://www.moonstone.co.za/?p=57394)).
  - So the schema exists but is not on a public page; a developer must get UAT access from the FIC. Other FIUs publish theirs openly, for example [Uganda](https://fia.go.ug/sites/default/files/downloads/goAML_XML_Schema_Documentation_Uganda_Dec_2023.pdf).
  - The MVP uses copy sheets. v1 adds XML export for dealers who get XML access, validated against the FIC's XSD and tested in UAT.
- **RCR.** Not on goAML: a separate online RCR platform (Directives 6 and 7 used a Microsoft Forms link). An online questionnaire per data period, one per Org ID, declared by the MLRO ([PCC 60](https://www.fic.gov.za/wp-content/uploads/2026/06/2026.6-PCC-60-RCR-_On-RCR-Submission.pdf), per [01 file](01-law-and-requirements.md)). No upload. The Pack prepares answers.
- **Access problems are common.** The FIC "continues to receive numerous enquiries on how to access goAML", mostly about passwords and adding users ([Moonstone](https://www.moonstone.co.za/fic-accepting-rmcps-after-the-12-march-deadline/)). The Pack's goAML guides start with access: registering, adding users, resetting passwords, with links to the FIC's own help.
- **What the Pack never does:** store goAML passwords, log in as the user, or scrape goAML. That would breach the no-sharing rule (D26) and break when goAML changes.

### Sanctions screening design

- **Sources.** Primary: UN consolidated XML, polled every 2 hours (the 01 file asks for at least every 6 hours, requirement 39). Cross-check: the FIC XML from the TFS download page, and the FIC notice number as the human-readable version label. Alert the founder if either source fails for more than 24 hours. The FIC expects screening "without delay" after a list update, ideally within hours ([01 file D17](01-law-and-requirements.md); [TFS manual, Oct 2026](https://www.fic.gov.za/wp-content/uploads/2026/10/Targeted-financial-sanctions-manual-2026.pdf)).
- **Matching.** Normalise names (case, accents, transliteration, word order, honorifics, company suffixes such as "(Pty) Ltd"), match on all aliases with token-based fuzzy scores, raise or lower by date of birth, nationality and ID numbers when present, and store the explanation. At about 1,000 records this is cheap.
- **Quality bar.** A test set of 100 listed names with spelling variants must all be caught; false positives below 1 per 50 clients on a realistic South African name set (my target, to tune in the pilot).
- **Evidence.** Each check stores the list version, time, matched fields and the reviewer's decision. This is the "evidence of client screening" the FIC looks for.

### File formats the Pack produces

| Output | Format | Notes |
|---|---|---|
| RMCP | PDF (`YYYYMMDD_RMCP.pdf`) and DOCX | Approval page and version table; DOCX is for reading or legal review only; edits go back through the app so the approved text stays traceable |
| Risk assessment | PDF | Annex to the RMCP |
| Copy sheets | Screen and PDF | RMCP upload, Directive 10, CTR, STR, TPR |
| Registers | XLSX and CSV | Deals, CTRs, clients, screening log, training, staff |
| s24 notice, appointment letter, board report, Directive 3A letter | PDF and DOCX | Pre-filled |
| Inspection pack | ZIP with an index PDF | Built on demand, kept 30 days |
| goAML XML (v1) | XML validated against the FIC XSD | Only for dealers with XML access |

## Data model

### Main entities

| Entity | Key fields | Notes |
|---|---|---|
| Tenant (customer account) | name, plan, billing ids, data region | Every other row carries `tenant_id` |
| User, Membership | e-mail, MFA, role per tenant (owner, compliance officer, MLRO, staff, adviser, reviewer) | Advisers have memberships in many tenants |
| LegalEntity | name, form (company, CC, trust, sole proprietor, partnership), registration number | A tenant can hold several entities |
| Registration | entity, Org ID, Schedule 1 item, sub-category, linked permit, registered date | One RMCP per registration |
| Permit | type (jeweller's permit, diamond dealer licence, import or export permit, second-hand dealer), number, expiry, copy | |
| Location | entity, kind (head office, branch, subsidiary head office, subsidiary branch), name, licence number, address, country, compliance contact, reported_on | Drives Directive 10 |
| Person | name, ID type and number, roles (director, BO, compliance officer, MLRO, staff, client contact) | Encrypted ID number |
| RiskAssessment | version, answers (JSON), content release, inherent and residual ratings, overrides with reasons | Immutable once approved |
| RMCPVersion | registration, number, content release, clause ids and versions, rendered PDF hash, status (draft, approved, uploaded), approved_by, approved_at, uploaded_at, goAML evidence | Approved versions cannot change |
| Approval | object, approver, role, timestamp, IP, document hash, optional signed file | |
| Obligation (task) | type, rule id, due date, status, evidence, source event | Output of the deadline engine |
| Client | type (person, company, trust, partnership), risk level, PEP status, screening status | |
| ClientDocument | client, kind, encrypted file, checksum, retention date | |
| BeneficialOwner | client, person, ownership or control, percent | |
| Deal | date, location, staff, direction (sale or buy-in), item, value, client, CDD status, source of goods and seller permit (buy-ins), red flags | Qualifying deals only, plus other deals linked to a concern |
| Payment | deal, method (cash, EFT, card, crypto, trade-in, other), amount, currency, rate, linked flag | Cash above R49,999.99 makes a CTR obligation |
| ReportRecord | kind (CTR, STR, TPR, SAR), deal or concern, due, filed_on, goAML reference | STR and TPR rows live in the restricted schema |
| Concern | raised_by, text, decision, reasons | Restricted schema, separate key |
| ScreeningListVersion | source (UN, FIC), generated_at, notice number, hash, record count | |
| ScreeningRun, ScreeningHit | subject, list version, score, explanation, decision, reviewer | |
| TrainingSession, Attendance, Attestation | date, topic, material, person, result; RMCP version read | |
| EmployeeScreening | person, method, result, date | Directive 8 |
| Document | generated pack or letter, template version, hash | |
| ContentRelease | version, law-as-at date, changes, attorney sign-off | Every generated document points to one |
| AuditEvent | actor, action, object, time, previous hash | Append-only hash chain |

### The deadline engine

Rules are data (YAML), each with a legal source and a test:
- **Fixed yearly date:** RMCP upload by 31 October for item 20 ([Directive 12](https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf)).
- **Days after an event:** registration within 90 days of starting; changes within 90 days ([Regs 27A](https://www.fic.gov.za/wp-content/uploads/2023/10/Money-Laundering-and-Terrorist-Financing-Control-Regulations.pdf); [Act s43B(4)](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf)); location changes within 90 days ([Directive 10](https://www.fic.gov.za/wp-content/uploads/2026/07/Directive-10-On-information-pertaining-to-geographic-locations.pdf)); amended RMCP within 10 days of approval and a new business's RMCP within 90 days ([Directive 12](https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf)). Whether "10 days" means calendar or business days is unverified; the engine uses calendar days, the safer reading.
- **Business days after an event:** CTR 3, TPR 5, STR 15, excluding weekends and public holidays ([Regs 24](https://www.fic.gov.za/wp-content/uploads/2023/10/Money-Laundering-and-Terrorist-Financing-Control-Regulations.pdf), per [01 file](01-law-and-requirements.md)).
- **Windows set by the content editor:** RCR rounds; one-off directives (Directive 10's 29 Oct 2026).
- **Intervals:** RMCP review (yearly, FIC recommendation per [01 file D7](01-law-and-requirements.md)), training, employee screening, permit expiry.
- **Time-travel tests** run every rule against fixed calendars, including Easter (Good Friday and Family Day) and holidays that fall on a Sunday (the Monday becomes a holiday, [gov.za](https://www.gov.za/about-sa/public-holidays)). Example: a CTR for cash received on Thu 24 Dec 2026 is due on Wed 30 Dec 2026, because 25 and 26 December and the weekend are skipped (my arithmetic).

### Content release process

1. The founder (with agents) drafts changes in the content repository: questions, scoring tables, clauses, guides.
2. Golden tests render the RMCP for the 6 synthetic dealers (see Development plan) and show the text diff.
3. The attorney reviews the diff and signs the release (name, date, "law as at" date).
4. Publish. Customers see release notes; affected RMCPs get a "review suggested" task. Old releases stay for audit.

## Architecture and stack

### Recommendation: one plain monolith

- **Language and framework:** Python with Django (5.2 LTS or current), server-rendered pages with HTMX and a little Alpine.js. Reasons: the built-in admin serves the content editor; mature auth, forms and permissions; strong Python libraries for this job (WeasyPrint for PDF, python-docx for Word, rapidfuzz and unidecode for name matching, lxml for XML and XSD validation). Claude Code agents are productive in Django because the conventions are well known (my judgement).
- **Database:** PostgreSQL 16 or later. JSONB for questionnaire answers, `pg_trgm` for client search, row-level security as a second tenant wall.
- **Jobs:** a Postgres-backed queue (Procrastinate or django-q2), so no Redis at first. Jobs: list polling every 2 hours; re-screening on change; reminders daily at 07:00 SAST; weekly digest; retention sweep weekly; pack building on demand.
- **Documents:** clause library in YAML plus Jinja templates, rendered to HTML (screen), PDF (WeasyPrint) and DOCX (python-docx) from one document tree.
- **Files:** encrypted at the application level with a per-tenant data key (AES-256-GCM via the `cryptography` package); the master key held outside the database. Antivirus scan on upload (ClamAV).
- **Payments:** a merchant of record (Paddle) or Stripe via webhooks; the details sit in the payments and company files.
- **Deploy:** Docker Compose behind Caddy (automatic TLS) on Vultr Johannesburg; GitHub Actions for CI; one staging and one production server at first.
- **Observability:** structured logs with no personal data; error tracking with data scrubbing; uptime checks; a status page.

### Diagram

```
Browser / phone (HTMX)
      |
   Caddy (TLS)  -- Vultr Johannesburg
      |
   Django web  ----->  PostgreSQL (RLS; restricted schema for concerns/STR)
      |                     ^
      v                     |
   Job workers ------------+----> encrypted file store (block volume)
      |   |   |
      |   |   +--> UN XML + FIC TFS list (poll, diff, re-screen)
      |   +------> e-mail provider (reminders; no case details)
      +----------> nightly encrypted backups to a second SA location (Cape Town object storage)
   Payments provider (webhooks)      v1: ID/PEP vendor API, Claude API (no personal data)
```

### Multi-tenancy and restricted areas

- `tenant_id` on every tenant row; a default manager that always filters by tenant; Postgres RLS with `SET app.tenant_id` per request; automated tests that try cross-tenant reads for every model and file route.
- Concerns, STRs and TPRs live in a separate schema with a separate encryption key and their own access log. Only the compliance officer and MLRO roles can read them. Advisers cannot, unless the dealer grants it by name.
- No cross-tenant data sharing of any kind, for example no shared "bad customer" list. Sharing information on criminal behaviour "on behalf of third parties" would need prior authorisation from the Information Regulator ([POPIA s57(1)(b)](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf)).

### AI in the product (v1, optional)

- A help assistant that answers from the Pack's own attorney-approved content and links to FIC documents.
- Draft wording for business descriptions and "not applicable because ..." reasons from the owner's answers. The owner must edit or confirm; the draft is marked.
- Hard rule: no client personal data, ID numbers, concern or STR text is ever sent to an AI service. Only business-profile answers. This avoids tipping-off and transfer questions.

## Security, privacy and liability

### Personal data the Pack holds

- Client identity data and ID copies, addresses, company and trust ownership, PEP status, source of funds: needed for CDD ([Act s21-21H](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf)).
- Staff data: names, ID numbers, training, screening results.
- Concern and STR records: information about suspected crime. Highly sensitive.
- ID numbers are "unique identifiers" under POPIA; the Pack does not link them across tenants.

### POPIA applied to the Pack

- **Roles.** The dealer is the responsible party. The founder's company is an operator. An operator may process only with the responsible party's authorisation and must keep the data confidential (s20). The responsible party must have a written contract that makes the operator keep s19 security measures, and the operator must tell the responsible party "immediately" about a suspected breach (s21) ([POPIA](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf)). The Pack's terms include an operator agreement.
- **Security duty.** Identify risks, keep safeguards, verify them regularly and update them (s19(2)).
- **Breaches.** The responsible party notifies the Regulator and the data subjects "as soon as reasonably possible" (s22). Since 2025 the Regulator wants breach reports through its eServices portal ([Acts Online, May 2025](https://acts.co.za/news/blog/2025/05/popia-regulation-amendments-2025); [Covington](https://www.insideprivacy.com/data-security/data-breaches/south-africa-introduces-mandatory-e-portal-reporting-for-data-breaches/)). The Pack's incident plan sends each affected dealer the facts it needs within 24 hours (my target).
- **Transfers abroad.** The founder's company is abroad, so the dealer's data reaches a third party in a foreign country even if servers are in Johannesburg (remote access). Section 72 allows this where the recipient is bound by a law, binding corporate rules or a binding agreement giving adequate protection, among other grounds ([POPIA s72](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf)). The operator agreement includes s72-style clauses, including on onward transfers. If the founder's company is in the EU, GDPR also applies to it (unverified for the chosen country).
- **Our own data.** For billing contacts and marketing, the founder's company is a responsible party. POPIA applies to a responsible party abroad that "makes use of automated or non-automated means in the Republic" (s3(1)(b)(ii)), which servers in Johannesburg probably are (my reading). So plan to comply directly: privacy notice, information officer, PAIA manual. An information officer must be registered before taking up duties (s55(2)). Law-firm commentary says a multinational's information officer based abroad must authorise a person inside South Africa, and that the Regulator's eServices portal will not accept an officer outside South Africa, so a foreign company needs a South Africa-based deputy or a "POPIA representative" ([Mondaq, on the Regulator's guidance note](https://mondaq.com/southafrica/privacy-protection/1055352/popia-registration-of-information-officers-and-deputy-information-officers); [Michalsons](https://www.michalsons.com/blog/information-officer/12231)) (unverified against the current guidance note; cost of a representative service unverified). This is a small extra cost of hosting in South Africa while the company sits abroad.
- **Prior authorisation.** Not needed as long as each dealer processes its own records and no data is shared across dealers (s57(1)(a)-(b)) (my reading; ask the attorney).
- **Fines.** Administrative fines up to R10 million (s109) ([POPIA](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf)).

### FICA rules that shape the design

- **s24 outsourced record keeping.** If the Pack keeps the dealer's FICA records, the dealer must give the FIC the third party's name, trading name, the person controlling access, the address where records are kept, the address of control and the dealer's liaison person "without delay" ([Act s24; Regs 20](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf), per [01 file D16](01-law-and-requirements.md)). Onboarding generates this notice. What "address where records are kept" means for cloud servers needs the attorney's view (open question).
- **Records location and access.** Cloud storage is allowed. Records outside South Africa are fine only if no foreign law blocks access; dealers using storage providers should test retrieval regularly ([GN 7B, paras 169-174](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf)). Hosting in Johannesburg, a one-click full export and a quarterly "test your export" reminder answer this.
- **Retention.** 5 years after the relationship ends, after the transaction or after an STR ([Act s23](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf), per [01 file D15](01-law-and-requirements.md)). Records linked to an investigation are kept until law enforcement closes the case (GN 7B para 178). The retention engine flags but never auto-deletes without the dealer's confirmation. After cancellation the dealer gets a full export and a read-only period (my proposal: 90 days), then deletion.
- **Tipping off.** STR existence and contents may not be disclosed ([Act s29(3)-(4), s53](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf)). The founder's own staff must not read restricted records; support works on synthetic copies; production access by the founder is logged and limited to emergencies.
- **Inspector access.** Dealers must give inspectors access to computer systems and reproduce data ([Act s45B](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf), per [01 file D25](01-law-and-requirements.md)). The inspection pack and exports cover this.

### Security baseline (MVP)

- MFA (TOTP or passkeys) offered to every user and required for owner, compliance officer, MLRO and adviser roles.
- Roles and per-object permissions; restricted schema for concerns and reports.
- Encryption in transit (TLS) and at rest (disk encryption plus application-level file encryption).
- Append-only, hash-chained audit log of approvals, exports and restricted-area access.
- Daily encrypted backups with point-in-time recovery; offsite copy in a second South African location; a timed restore drill before launch and each quarter.
- OWASP ASVS level 2 as the checklist; dependency and secret scanning in CI; rate limits; strict content security policy; antivirus on uploads.
- No personal data in logs or error reports.
- An external grey-box penetration test before launch, then yearly.
- A short security sheet for customers (what we store, where, who can see it).

### Liability

- **Position.** The Pack is software and information, not legal advice and not the dealer's compliance officer. The RMCP is the dealer's document; the dealer approves it ([Act s42(2B)](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf)). The compliance function must sit inside the dealer ([Act s42A](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf); nCino KYC argues it cannot be outsourced, [nCino KYC](https://blog.kycafrica.ncino.com/breaking-the-myths-around-fica-outsourcing)).
- **Quality controls.** Attorney-signed content releases with a "law as at" date; owner-written fields the RMCP cannot skip; mock inspections of pilot RMCPs by a compliance practitioner.
- **Honest messages in the product.** The dealer files on goAML and stays responsible; a successful goAML upload is not FIC approval ([GoLegal](https://www.golegal.co.za/?p=74912)); using a screening tool is no defence, and each screen shows the list version used ([GN 7B para 200](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf), per [01 file](01-law-and-requirements.md)).
- **Contract.** Disclaimers; liability capped at 12 months' fees (my proposal); the "Reviewed" tier's review is done by an independent attorney under that attorney's own professional cover.
- **Insurance.** Professional indemnity and cyber cover for the founder's company (quote needed; unverified cost).
- **Reserved legal work.** Section 33(1) of the Legal Practice Act 28 of 2014 stops non-practitioners, for reward, from appearing where only lawyers may appear and from drawing up documents "for use in any action, suit or other proceedings" in court; s33(3) covers acts that another law reserves for attorneys, advocates, conveyancers or notaries ([Acts Online, s33](https://www.acts.co.za/legal-practice-act-2014/33__authority_to_render____)). An RMCP is an internal compliance document, not a court document, and I found no law that reserves it to attorneys (my reading; confirm with the attorney). The "Reviewed" tier's legal opinion is given by the attorney, not by the Pack.
- **Electronic approval.** FICA requires approval, not a signature (s42(2B)). The Pack records a click approval with identity, time and document hash, and allows upload of a signed resolution. Where a law requires a signature without naming the type, ECTA requires an advanced electronic signature ([CMS e-signature guide, South Africa](https://cms.law/en/int/expert-guides/cms-expert-guide-to-e-signatures-in-commercial-contracts/south-africa)); whether that ever applies here is an open question for the attorney.

## Hosting and running costs

### Where to host

- **Choice: Vultr, Johannesburg region.** Vultr lists Johannesburg (`jnb`) and offers the same plan prices there as elsewhere: `vc2-2c-4gb` (2 vCPU, 4 GB, 80 GB) US$20 a month; `vc2-4c-8gb` US$40; high-performance `vhp-2c-4gb-amd` US$24 and `vhp-4c-8gb-amd` US$48 ([Vultr public API, plans](https://api.vultr.com/v2/plans); [regions](https://api.vultr.com/v2/regions), read 10 Oct 2026).
- **Gaps.** Vultr has no object storage in Johannesburg ([Vultr object storage clusters](https://api.vultr.com/v2/object-storage/clusters), read 10 Oct 2026). Files go on an encrypted block volume. Vultr's automatic backups do not cover block volumes ([Vultr docs](https://docs.vultr.com/support/platform/billing/how-much-does-it-cost-to-enable-automatic-backups)), so the Pack backs up files and database itself. Offsite backups go to Amazon S3 in Cape Town (`af-south-1`) at US$0.0274 per GB-month for the first 50 TB ([AWS Price List API, S3 af-south-1](https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonS3/current/af-south-1/index.json), published 28 Sep 2026). Vultr says its managed databases run in all its regions, including Johannesburg ([Vultr managed databases](https://www.vultr.com/products/managed-databases/), via search; price not checked). Start with self-managed Postgres on the same VM with tested backups, and move to managed Postgres at about 300 customers.
- **Fully managed alternative: AWS Cape Town.** On-demand list prices: EC2 `t4g.medium` (2 vCPU, 4 GB) US$0.0434 an hour, about US$32 a month; `t4g.large` (8 GB) about US$63 ([AWS Price List API, EC2 af-south-1](https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonEC2/current/af-south-1/index.csv), published 9 Oct 2026). RDS PostgreSQL `db.t4g.small` single-AZ US$0.041 an hour (about US$30 a month); `db.t4g.medium` Multi-AZ US$0.164 an hour (about US$120) ([AWS Price List API, RDS af-south-1](https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonRDS/current/af-south-1/index.csv), published 6 Oct 2026). A small AWS set-up costs about 3 times the Vultr one before storage and data transfer (my arithmetic). Azure and Google also have Johannesburg regions (prices not checked). An EU host is lawful with the right contracts ([GN 7B](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf); [POPIA s72](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf)) but loses the "your records stay in South Africa" message, which local vendors use in sales (for example VerifyNow, [Software Advice](https://www.softwareadvice.co.uk/software/548724/VerifyNow)).
- **Portability.** One Docker image and infrastructure as code, so a move takes a day.

### Monthly running cost estimate (US$, excluding staff, VAT and payment fees)

VM prices are Vultr list prices (above). Everything else is my estimate (unverified) unless cited.

| Item | 50 customers | 300 customers | 1,000 customers |
|---|---|---|---|
| App, workers and database | 1 VM, 2 vCPU / 4 GB: 20-24 | app VM 4 vCPU / 8 GB plus DB VM 2-4 vCPU: 64-96 | 2 app VMs, DB primary and replica, load balancer: 180-220 |
| Server backups (Vultr automatic backups cost 20% of the VM price and exclude block volumes, [Vultr docs](https://docs.vultr.com/support/platform/billing/how-much-does-it-cost-to-enable-automatic-backups)) | 4-5 | 13-20 | 35-45 |
| Encrypted block storage for files (about 0.2 GB per customer a year) | 1-2 | 6-10 | 20-30 |
| Offsite backups in Cape Town (S3 at US$0.0274 per GB-month; 30-50 GB, 150-300 GB, 500-1,000 GB incl. 30 days of history) | 1-2 | 4-8 | 14-28 |
| SMS reminders (v1, about 5 a customer a month at R0.20) | 0-3 | 5-10 | 15-30 |
| Transactional e-mail | 0-15 ([Postmark, third-party](https://automationatlas.io/answers/postmark-pricing-explained-2026/)) | 15-50 | 50-100 |
| Error tracking, uptime, logs | 0-26 | 26-60 | 80-150 |
| Code hosting and CI | 4-20 | 20-40 | 40-60 |
| DNS, domains, status page | 2-5 | 5-15 | 15-25 |
| Claude API for v1 help and drafts (no personal data) | 0-5 | 15-30 | 50-100 |
| **Total** | **about 30-110** | **about 170-340** | **about 500-790** |
| Revenue at a blended R5,000 a year (about US$25 a month) per customer, from the [02 file](02-market-and-competition.md) price tiers | 1,260 | 7,580 | 25,250 |
| **Running cost as share of revenue** | **2.5-8.5%** | **2.3-4.5%** | **2-3%** |

Notes:
- Payment fees are bigger than hosting: at 5% + 50 US cents per transaction ([Paddle pricing](https://www.paddle.com/pricing)), a R5,000 yearly payment loses about 5.2%; monthly billing at R420 loses about 7%. Details belong to the payments file.
- ID and PEP checks are passed through to the customer at cost plus a margin (VerifyNow R2.99-R5.98 a check, [VerifyNow](https://www.verifynow.co.za/pricing)).
- 1,000 customers is 18% of all 5,581 item 20 registrations ([02 file](02-market-and-competition.md)). That column is a stretch case.
- The founder's Claude Code plan is a development cost (see Budget), not a running cost.

## Development plan

### Timing drives the plan

- **The 2026 deadlines are too close.** Directive 10 is due Thu 29 Oct 2026 and the first yearly RMCP upload on Sat 31 Oct 2026 ([01 file](01-law-and-requirements.md)). A 3-week build ends on 30 Oct with draft, unreviewed content. Do not promise software for these dates. Instead, in November, serve late filers by hand: the founder runs them through the staging app with consent, and the partner attorney reviews each RMCP. The FIC accepted late RMCPs in 2025 but treated them as non-compliant ([Moonstone](https://www.moonstone.co.za/fic-accepting-rmcps-after-the-12-march-deadline/)).
- **The selling seasons after launch:** inspections all year (61 of 549 inspection reports in 2025/26 went to precious metal and stone dealers, [FIC AR 2025/26, p. 40](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf)); final PCC 126 (comments closed 16 Oct 2026; if one registration per permit is kept, every new registration needs an RMCP within 90 days, [Directive 12](https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf)); the next RCR window (2026's ran May to July); and 31 Oct 2027.
- **Plan:** start **Mon 12 Oct 2026**. MVP feature-complete on staging **Fri 30 Oct** (3 weeks). Sellable launch **Mon 30 Nov 2026** (week 8). South Africa has no public holidays between these dates; the next are 16, 25 and 26 December 2026 ([gov.za](https://www.gov.za/about-sa/public-holidays)). Expect slow weeks from mid-December to about 11 January.

### How the founder works with Claude Code and parallel agents

- **Roles.** The founder is architect, reviewer, integrator, product owner and content manager. Agents write code, tests, help text and first drafts of content. A South African attorney approves all legal content. A compliance practitioner who knows dealers checks the workflows and mock-inspects pilot RMCPs.
- **5-7 streams at once, at most.** The founder's review time is the limit. Each stream works in its own git worktree and branch and owns its own Django app folder.
- **Contracts first.** By the end of week 1 the shared pieces are frozen: core models (tenant, entity, registration, location, person, membership, obligation, document, audit event, content release), service interfaces (storage, e-mail, PDF and DOCX rendering, deadline engine, screening, audit), URL names, base templates and UI components. Changing a contract needs the founder's approval.
- **Spec, then code.** Each task is a short written spec with given/when/then acceptance tests. The agent writes tests first. CI must pass. A separate review agent checks security and correctness. The founder merges small pull requests (under about 400 lines).
- **`CLAUDE.md` rules:** commands; conventions; never bypass the tenant manager; no raw SQL outside the data layer; restricted-schema rules; no personal data in logs; no secrets in code; synthetic data only.
- **Synthetic dealers from day 1:** a one-shop jeweller (sole proprietor), a Krugerrand and bullion dealer, a diamond dealer with three SADPMR permits, a scrap gold buyer, a motor dealer with two branches and a franchise, a farm-equipment dealer, and an adviser with five clients. Every stream tests against them.
- **Daily rhythm:** morning specs and merges; agents run during the day; late-afternoon review; nightly staging rebuild and end-to-end run.

### Agent work streams for the MVP

| Stream | Scope | Owns | Depends on | Done by Fri 30 Oct when |
|---|---|---|---|---|
| **S0 Foundation** (founder + 2 agents, week 1) | Skeleton, auth with MFA, tenants and memberships, roles, entities, registrations, locations, people, audit log, encrypted file storage, e-mail, PDF and DOCX service, job queue, CI/CD, staging on Vultr JNB, UI shell, seed data | `core`, `accounts`, `org`, infra | - | Frozen contracts; staging deploy on every merge; tenant-isolation tests in CI |
| **S1 Rules and calendar** | Rule YAML loader; deadline engine with SA business days; obligations; reminders and digest; public checker | `rules`, `obligations`, `checker` | S0 | All rule kinds pass time-travel tests; the checker gives the right answer for 25 reviewed cases |
| **S2 Risk and RMCP** | Questionnaire engine; scoring tables; controls; clause assembly; coverage annex; versions; approvals; `YYYYMMDD_RMCP.pdf`; DOCX; staff read-and-confirm | `risk`, `rmcp` | S0, S1, S6 content | Golden-file tests render RMCPs for all 6 synthetic dealers; no s42(2) element unmapped |
| **S3 Registers** | Deals and payments with linked and cash flags; structuring alerts; CTR, STR and TPR records and copy sheets; client file, BOs (ownership-control-management cascade), agents, PEP declaration, permit and source-of-goods fields; CDD-failure stop; restricted concern log; training, attestations, staff screening | `deals`, `clients`, `reports`, `people` | S0, S1 | A 200-deal fixture gives correct CTR flags and due dates; restricted-area tests pass |
| **S4 Screening** | UN and FIC list ingest, versioning and diff; name normalisation and matching; re-screen on change; hit review; certificates | `screening` | S0 | 100-name test set fully caught; false-positive rate measured; re-screen of 10,000 subjects under 2 minutes |
| **S5 Commercial and evidence** | Marketing site; checker embed; onboarding wizard; plans and checkout (sandbox); adviser switcher; goAML guides and copy sheets (RMCP, Directive 10); s24 notice; Directive 3A letter; inspection pack; self-check dashboard; full export and deletion | `web`, `billing`, `filing`, `evidence` | S0, S2, S3 | Sandbox purchase activates a plan; inspection pack for the jeweller fixture opens and is complete |
| **S6 Content** (agents draft, attorney reviews) | Requirement library from the 01 file's D1-D26 and its 70 requirements; about 80 questions with 6 sub-sector packs; scoring tables; original clause library mapped to s42(2)(a)-(s); sector risk library from the FIC's DPMS sector risk assessment, PCC 58 red flags and the draft PCC 126 country list; goAML guides; help text; terms, operator agreement, privacy notice | `content/` (YAML, Markdown) | 01 file | Draft v0.9 of all content; attorney review round 1 booked |
| **S7 QA and security** (throughout) | Threat model; cross-tenant tests for every model and file route; Playwright end-to-end tests; dependency and secret scans; backup and restore drill; load test | `tests/`, CI | all | No failing tenant test; restore drill timed |

### Calendar

| Week (start) | Engineering | Content and legal | Sales and pilots |
|---|---|---|---|
| 0 (Sat 10 Oct) | Accounts (code hosting, Vultr, e-mail, payments sandbox); `CLAUDE.md`; architecture decisions | Shortlist 2-3 FICA attorneys and 1 compliance practitioner; ask for fixed quotes | Pick 40 pilot targets from the JCSA directory ([02 file](02-market-and-competition.md)) |
| 1 (Mon 12 Oct) | **S0 foundation.** S1 checker logic and S4 matching as pure functions with tests | S6 requirement library v0. **LC0:** attorney engaged; written questions sent (s24 notice, e-approval, reserved work, operator access to STR data, POPIA s57 and s72) | Landing page with the free checker and a waitlist. 10 discovery calls. PCC 126 comments close Fri 16 Oct |
| 2 (Mon 19 Oct) | **S1-S5 in parallel**, S7 alongside | S6 questionnaire, scoring and clause drafts. **LC1:** attorney approves the requirement map, risk method and RMCP outline | Recruit 5-8 pilots (2 jewellers, 1 bullion, 1 stones, 1 scrap buyer, 1-2 motor or other goods, 1 adviser) |
| 3 (Mon 26 Oct) | Streams finish. **Fri 30 Oct: MVP feature-complete on staging** (draft content) | S6 v0.9 of all content | Talk to dealers who just filed for 29 and 31 October: what hurt |
| 4 (Mon 2 Nov) | Integration; end-to-end and time-travel tests; mobile checks; performance | Attorney review round 1; practitioner reviews flows | Concierge late-filer offer: founder runs 3-5 dealers through staging; attorney reviews each RMCP |
| 5 (Mon 9 Nov) | Fixes; penetration test scoping; billing live; security sheet | **LC2:** content v1.0 signed. Terms, operator agreement, privacy notice and disclaimers approved | Founding-customer offer to the waitlist |
| 6 (Mon 16 Nov) | **External penetration test** (3-4 days) on a production-like copy | Pilot feedback into content | Pilots onboard (discounted founding price) |
| 7 (Mon 23 Nov) | Fix high and medium findings; retest; restore drill; monitoring | Practitioner mock-inspects 3 pilot RMCPs | Adviser partners trained |
| 8 (Mon 30 Nov) | **Sellable launch.** Self-serve sign-up opens | Weekly FIC watch starts (directives, PCCs, TFS notices) | Outreach through JCSA contacts, trade press, advisers |
| Dec 2026 | v1a: client self-service link and QR code; CSV import; adviser dashboard | Final PCC 126 release, if published | Inspection-season content: "what the inspector asks for" |
| Jan-Mar 2027 | v1b: RCR workbook (from the 2026 HVGD questionnaire); vendor ID and PEP checks; yearly review wizard; short training course and quiz; WhatsApp or SMS reminders | Content for final PCC 126 and PCC 5E; RCR workbook mapping | New-registration campaign if one registration per permit is final |
| Apr-Jul 2027 | v1c: goAML XML for CTRs if the FIC grants UAT and XML access; FIC request log; new-product risk assessment (draft s42(2)(aA)); RCR workbook updated if a new directive appears | RCR content; General Laws Amendment Bill changes if enacted | RCR campaign if a round opens |
| Aug-Oct 2027 | Hardening; second penetration test; speed | Yearly content review | 31 Oct 2027 campaign; renewals |

The 3-week MVP is realistic because there is no official integration to build, the stack is plain and content runs in parallel. The 8-week date depends on two outside people: the attorney (LC1, LC2) and the penetration tester. Book both in week 0.

### What to cut if time slips

1. First cut: DOCX export (PDF only), the adviser switcher (separate logins), the RCR checklist, staff read-and-confirm links (use a printed sign-off sheet).
2. Never cut: tenant isolation and its tests, the restricted area for concerns, MFA, sanctions screening evidence, attorney sign-off of content, the penetration test, backups with a tested restore.

### Definition of done for the MVP (sellable on 30 Nov 2026)

1. A pilot dealer goes from sign-up to an approved RMCP PDF, correctly named, in **under 90 minutes** of the owner's time, in at least 4 of 5 pilots.
2. Every RMCP covers every s42(2)(a)-(s) element or gives a reason, and every clause comes from an attorney-signed content release (LC2) with a "law as at" date.
3. A practitioner's mock inspection of 3 pilot RMCPs finds no missing element and no "template" text left unfilled.
4. The checker gives the right result in 25 reference cases reviewed by the attorney.
5. The deadline engine passes time-travel tests for every rule kind (31 Oct, 10 and 90 days, 3, 5 and 15 business days with holidays, RCR windows, intervals).
6. A 200-deal fixture produces the right CTR flags, including linked payments and cash inside mixed payments (R50,000.00 cash triggers, R49,999.99 does not; R60,000 cash plus R40,000 EFT on a R100,000 item triggers), and the structuring alerts fire on the seeded cases ([01 file, requirements 46 and 48](01-law-and-requirements.md)).
7. Screening catches all 100 test names; every check stores list version and decision; a list change triggers re-screening within 2 hours.
8. Cross-tenant and restricted-area tests pass; the penetration test leaves no open high or critical finding; a restore from backup has been done and timed.
9. The inspection pack for a pilot dealer contains every item in Flow 10.
10. Terms, operator agreement, privacy notice and the s24 notice template are approved by the attorney.
11. Card checkout works end to end with invoices.
12. At least 3 pilots used it end to end, and at least 2 paid.

## Budget

Cash costs only. The founder is unpaid; no developers are hired. Company set-up costs sit in the company file. US$ at about R16.5 (ECB, 9 Oct 2026, above).

| Item | Basis | MVP (weeks 0-8), US$ | First year after launch (Dec 2026-Nov 2027), US$ |
|---|---|---|---|
| Claude Code subscriptions | 2 x Max 20x at US$200 a month for Oct-Nov, then 1 seat ([Anthropic support](https://support.claude.com/en/articles/11049744-how-much-does-the-max-plan-cost)) | 800 | 2,400 |
| Claude API (tests of v1 AI features) | Usage | 0-50 | 100-300 |
| South African FICA attorney: content review, terms and operator agreement, written opinions | About 40-60 hours (my estimate). No published hourly rates found; I assume R2,000-R3,000 an hour blended (unverified). Employee attorney pay averages about R700 an hour, so billed rates are several times higher ([Payscale](https://www.payscale.com/research/ZA/Job=Attorney_%2F_Lawyer/Hourly_Rate/9c918adb/Late-Career-Bill-Collections)); simple commercial contracts cost R8,000-R30,000 ([Global Law Experts](https://globallawexperts.com/commercial-lawyer-fees-south-africa/)) | 4,800-10,900 (R80k-R180k) | 2,400-4,800 (updates: PCC 126, RCR, yearly review) |
| Compliance practitioner (workflow review, 3 mock inspections, pilot introductions) | 4-6 days (my estimate); AML GO charges "from R2,500" to review one RMCP ([AML GO](https://amlgo.co.za/)) | 1,500-3,600 (R25k-R60k) | 600-1,200 |
| External penetration test, 3-4 days grey-box, with retest | South African providers include SensePost (Orange Cyberdefense), Nclose, Telspace Africa, Performanta and Wolfpack, but publish no prices ([DeepStrike roundup](https://deepstrike.io/blog/penetration-testing-companies-south-africa-2025)); ask 2-3 for quotes. Narrow web-app tests about US$5,000-15,000 ([Redfox Security](https://www.redfoxsec.com/blog/how-much-does-web-application-penetration-testing-cost-2026-pricing-guide); [Blaze](https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/)); EUR 4,000-9,000 black-box, EUR 8,000-18,000 grey-box ([Kolonell](https://kolonell.com/en/blog/web-application-penetration-test-price-sme-2026)); South African quotes not found | 5,000-8,000 | 2,000-5,500 (yearly retest; retests cost US$2,000-5,500, [Andersen](https://andersenlab.com/blueprint/penetration-testing-costs-2026)) |
| Hosting and SaaS tools | About US$60-120 a month during the build; then the table above | 150-250 | 600-2,500 |
| Domains (.co.za and .com) | (unverified) | 30 | 30 |
| Professional indemnity and cyber insurance | Quote needed (unverified) | 0-1,800 | 600-1,800 |
| Pilot trip to Johannesburg and Cape Town (optional, 1 week) | Flights and lodging (my estimate) | 0-2,500 | 0-2,500 |
| Contingency, about 15% | | 1,800-4,200 | 1,300-3,200 |
| **Total** | | **about 14,000-32,000 (R230k-R530k)** | **about 10,000-24,000** |

Reading:
- **Trust costs money; code does not.** The attorney and the penetration test are two-thirds or more of MVP cash.
- **Payback.** At a blended R5,000 a year, the MVP is paid back by about 50-100 customer-years. The [02 file](02-market-and-competition.md) base case is about R2.3m a year of revenue in year 3.
- **To spend less:** make the attorney a channel partner (a lower content fee in exchange for paid "Reviewed"-tier reviews at about R2,500-R3,000 each), and run the full penetration test only after the founding pilots if cash is tight, with a scanner-based test before. I do not recommend launching without any external test: the Pack holds ID copies and suspicion records.

## Risks

| Risk | Why it matters | Mitigation |
|---|---|---|
| A generated RMCP fails an FIC inspection | The FIC rejects standard templates ([NADA](https://nada.co.za/?p=5097)); a failure hurts the brand | Answers drive the text; owner-written mandatory fields; attorney-signed releases; practitioner mock inspections; "Reviewed" tier |
| Draft PCC 126 and PCC 5E change after comment | Registration counts and CDD content may change | Rule flags "draft-based"; content releases; checker shows both rules until final |
| goAML forms or upload rules change | Copy sheets and guides go stale | Versioned guides; pilot screenshots; weekly FIC watch |
| Sanctions screening misses a name or the feed fails | A missed listed person is a crime risk for the dealer ([Act s26B](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf)) | Two sources (UN and FIC); feed alarms; test set in CI; manual FIC search link as fallback |
| Data breach of ID copies or suspicion records | POPIA fines up to R10m; customer trust | Encryption, MFA, restricted schema, penetration test, minimal data, incident plan |
| Tipping off through the product | A crime under s53 | No STR content in e-mails, AI or support views; access logs |
| s24 notice deters dealers | Some may not want to tell the FIC about a vendor | Make it a one-click letter; explain it is normal; attorney opinion on when it applies |
| AI-written code has hidden flaws | Security and correctness | Tests first; review agent; small pull requests; penetration test; founder review |
| Founder is the bottleneck | Review time limits streams | Cap streams at 5-7; cut list; contracts frozen in week 1 |
| Motor dealers want DMS or volume features | 77% of the market | Keep motor content in the MVP; CSV import in v1; partner with a KYC vendor rather than build |
| nCino KYC or another vendor adds an RMCP builder | Competition | Move fast on sub-sector depth; consider integration or partnership |
| Vultr outage or price change | Availability | Offsite backups in Cape Town; Docker image and infrastructure as code; restore drill |

## Open questions

1. Does using the Pack make it a third-party record keeper under s24, so that each dealer must notify the FIC? What "address where records are kept" should a cloud service give?
2. Is a click approval with identity, time and document hash enough for s42(2B), or does the FIC expect a signed resolution?
3. Will the FIC give the founder access to its UAT environment and the goAML 5.4 schema (via goAMLupgrade@fic.gov.za), and will it give a small dealer XML upload access for CTRs?
4. Is there a size or format limit (PDF/A or not) on the goAML RMCP upload? The FIC promised a user guide ([Directive 12 feedback note, para 24](https://www.fic.gov.za/wp-content/uploads/2026/09/Consultation-feedback-note-Relating-to-draft-Directive-12-on-the-submission-of-RMCPs.pdf), per [01 file](01-law-and-requirements.md)).
5. May an outside adviser be added as a dealer's MLRO user on goAML? That decides how far the adviser plan can go ([PCC 5C para 5.4](https://www.fic.gov.za/wp-content/uploads/2024/01/PCC-5C-Accountable-and-reporting-institutions-registration.pdf), per [01 file](01-law-and-requirements.md)).
6. What are the FIC TFS list's terms of use, and does the FIC XML differ from the UN XML in content or timing?
7. May the founder's company access STR and concern records as an operator, or should they be encrypted so that only the dealer can read them (end-to-end)?
8. Does POPIA s57 prior authorisation apply to an operator holding suspicion records for many dealers, if no data is shared across them?
9. Must a foreign operator with servers in South Africa register an information officer with the Information Regulator?
10. Is selling a tailored RMCP generator, or an attorney-reviewed tier, affected by the Legal Practice Act's reserved work?
11. Which ID and PEP vendor offers a clean API, POPIA operator terms and per-check pricing for small volumes (VerifyNow, AML GO, others)?
12. When will the next RCR directive come, and what will it ask?
13. Is the SADPMR permit register public or available on request?

## Sources

FIC and South African law
- FIC Act (consolidated): https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf
- Money Laundering and Terrorist Financing Control Regulations: https://www.fic.gov.za/wp-content/uploads/2023/10/Money-Laundering-and-Terrorist-Financing-Control-Regulations.pdf
- Directive 12: https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf
- Directive 12 consultation feedback note: https://www.fic.gov.za/wp-content/uploads/2026/09/Consultation-feedback-note-Relating-to-draft-Directive-12-on-the-submission-of-RMCPs.pdf
- FIC "How to submit an RMCP": https://www.fic.gov.za/wp-content/uploads/2026/10/HTSRMCP.png
- Directive 10: https://www.fic.gov.za/wp-content/uploads/2026/07/Directive-10-On-information-pertaining-to-geographic-locations.pdf
- Directive 10 information sheet: https://www.fic.gov.za/wp-content/uploads/2026/08/Directive-10-information-sheet-3-1.pdf
- HVGD RCR questionnaire (2026): https://www.fic.gov.za/wp-content/uploads/2026/05/High-value-goods-dealer-questionnaire.pdf
- goAML 5.4 Cash Threshold Report user manual (Aug 2025): https://www.fic.gov.za/wp-content/uploads/2025/09/goAML-V5.4-Cash-Threshold-Report-User-Manual_7-August-2025.pdf
- GoLegal on RMCP uploads: https://www.golegal.co.za/?p=74912
- Directive 11: https://www.fic.gov.za/wp-content/uploads/2026/03/Directive-11-%E2%80%93-Risk-and-compliance-return.pdf
- PCC 60: https://www.fic.gov.za/wp-content/uploads/2026/06/2026.6-PCC-60-RCR-_On-RCR-Submission.pdf
- PCC 58: https://www.fic.gov.za/wp-content/uploads/2024/03/2024.03-PCC-HVGD-guidance.pdf
- Draft PCC 126: https://www.fic.gov.za/wp-content/uploads/2026/09/2026.9-PCC-DPMS.pdf
- Draft PCC 5E: https://www.fic.gov.za/wp-content/uploads/2026/03/2026.3-PCC-Draft-PCC05E_.pdf
- PCC 5C: https://www.fic.gov.za/wp-content/uploads/2024/01/PCC-5C-Accountable-and-reporting-institutions-registration.pdf
- PCC 53: https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf
- PCC 59: https://www.fic.gov.za/wp-content/uploads/2024/08/PCC-59-Beneficial-ownership.pdf
- Guidance Note 7B: https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf
- Guidance Note 5C: https://www.fic.gov.za/wp-content/uploads/2023/09/2022.10-Guidance-Guidance-Note-5C-CTRs.pdf
- TFS manual, Oct 2026: https://www.fic.gov.za/wp-content/uploads/2026/10/Targeted-financial-sanctions-manual-2026.pdf
- FIC Annual Report 2025/26: https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf
- goAML login: https://goweb.fic.gov.za/goAMLWEb_PRD/Home
- FIC TFS portal and download page: https://tfs.fic.gov.za/ ; https://tfs.fic.gov.za/Pages/TFSListDownload
- FIC registration and reporting presentation, 2019 (copy): https://regalert.today/document/34322b55-1b86-4cf0-996f-24713dab8379/text
- FIC goAML Notice 4A on batch reports, 2020 (Moonstone copy): https://www.moonstone.co.za/wp-content/uploads/library/Moonstone%20Library/MS%20Industry%20News/201110_goAML_Notice%204A_on_Process_to_Remediate_Batch_Reports_on_goAML.pdf
- POPIA, Act 4 of 2013 (gazette text): https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf
- POPIA breach-reporting portal: https://acts.co.za/news/blog/2025/05/popia-regulation-amendments-2025 ; https://www.insideprivacy.com/data-security/data-breaches/south-africa-introduces-mandatory-e-portal-reporting-for-data-breaches/
- Precious Metals Regulations, forms: https://shop.acts.co.za/precious-metals-act-2005/r570_annexure_c__forms.php
- E-signatures in South Africa (CMS): https://cms.law/en/int/expert-guides/cms-expert-guide-to-e-signatures-in-commercial-contracts/south-africa
- Public holidays: https://www.gov.za/about-sa/public-holidays

Data and vendors
- UN consolidated sanctions list XML: https://scsanctions.un.org/resources/xml/en/consolidated.xml
- VerifyNow pricing: https://www.verifynow.co.za/pricing ; listing: https://www.softwareadvice.co.uk/software/548724/VerifyNow
- AML GO: https://amlgo.co.za/
- CIPC API (vendor page): https://companydata.com/cipc-api/ ; WinDeed: https://www.windeed.co.za/director-search/
- Uganda goAML XML schema documentation (example of a published schema): https://fia.go.ug/sites/default/files/downloads/goAML_XML_Schema_Documentation_Uganda_Dec_2023.pdf
- Vultr public API (plans, regions, object storage clusters): https://api.vultr.com/v2/plans ; https://api.vultr.com/v2/regions ; https://api.vultr.com/v2/object-storage/clusters
- Postmark pricing (third-party): https://automationatlas.io/answers/postmark-pricing-explained-2026/
- Paddle pricing: https://www.paddle.com/pricing
- goAML 5.4 upgrade and schema in UAT (Moonstone, 4 Sep 2025): https://www.moonstone.co.za/?p=57394
- OpenSanctions South Africa and API: https://www.opensanctions.org/countries/za/ ; https://www.opensanctions.org/api/
- AWS Price List API, Cape Town: https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonS3/current/af-south-1/index.json ; https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonEC2/current/af-south-1/index.csv ; https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonRDS/current/af-south-1/index.csv
- Vultr managed databases: https://www.vultr.com/products/managed-databases/
- SMS prices: https://www.itweb.co.za/article/new-price-comparison-reveals-sas-cheapest-bulk-sms-provider/xA9POvNE6a9qo4J8 ; https://www.panaceamobile.com/gateways/bulk-sms-gateway/ ; https://www.vodacommessaging.co.za/products/pdf/Bulk%20SMS.pdf
- Information officer registration (commentary): https://mondaq.com/southafrica/privacy-protection/1055352/popia-registration-of-information-officers-and-deputy-information-officers ; https://www.michalsons.com/blog/information-officer/12231
- Claude Max price: https://support.claude.com/en/articles/11049744-how-much-does-the-max-plan-cost
- Penetration test prices: https://www.redfoxsec.com/blog/how-much-does-web-application-penetration-testing-cost-2026-pricing-guide ; https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/ ; https://kolonell.com/en/blog/web-application-penetration-test-price-sme-2026 ; https://andersenlab.com/blueprint/penetration-testing-costs-2026
- South African penetration test providers: https://deepstrike.io/blog/penetration-testing-companies-south-africa-2025
- Vultr backups pricing: https://docs.vultr.com/support/platform/billing/how-much-does-it-cost-to-enable-automatic-backups
- Legal Practice Act s33: https://www.acts.co.za/legal-practice-act-2014/33__authority_to_render____
- Lawyer fees: https://globallawexperts.com/commercial-lawyer-fees-south-africa/ ; https://www.payscale.com/research/ZA/Job=Attorney_%2F_Lawyer/Hourly_Rate/9c918adb/Late-Career-Bill-Collections
- Exchange rate (ECB reference rates): https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml

Market and practice
- Moonstone on late RMCPs and goAML access: https://www.moonstone.co.za/fic-accepting-rmcps-after-the-12-march-deadline/
- NADA on templates: https://nada.co.za/?p=5097
- nCino KYC on outsourcing: https://blog.kycafrica.ncino.com/breaking-the-myths-around-fica-outsourcing
- Sibling files: [01-law-and-requirements.md](01-law-and-requirements.md), [02-market-and-competition.md](02-market-and-competition.md); A1 report: [../reports/south-africa-a1.md](../reports/south-africa-a1.md)
