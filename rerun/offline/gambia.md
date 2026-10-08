# The Gambia: quiet-industry software screen (offline_v2)

Date: 2026-10-08. Market size: small. Languages searched: English (official), French for regional customs sources.

Bottom line: no standalone opportunity is viable. The Gambia has about 2.7-2.8 million people (estimate), and every regulated group I found is a few dozen to a few hundred operators, or the state already runs a digital channel. The best near-miss is a back-office tool for licensed customs clearing agents (score 3/10). It is a side product, not a business. The earlier report's lead (VAT e-invoicing add-on) is moved to Rejected because the state has appointed its own technical partner and the system is built for businesses to invoice on directly.

## Quiet industries screened

| industry | obligation | evidence it's offline | rough count (with source) | verdict | one-line reason |
|---|---|---|---|---|---|
| Customs clearing and forwarding agents | Annual GRA licence plus bond; all declarations through ASYCUDA World; keep records 5 years (GRA SOP GRA-CB-001, eff. 15 Mar 2026) | Application form on paper or from gra.gm; supporting papers (police clearance, bank statements, good-standing letter) filed at GRA HQ; renewal by paper | About 127 registered with the agents' association ACCFA (The Point, undated, estimate) | Near-miss (3/10) | Mandatory work and a public agent directory, but ceiling is ~100-130 low-paying firms |
| Licensed forex bureaus | Daily return by email by 3:30 pm; monthly stock position in the first week; suspicious-transaction reports to GFIU; fine at least GMD2,000 plus GMD1,000 per day (CBG Revised FX Bureau Guidelines, 25 May 2024) | Returns "by email or as directed in the prescribed format"; a "Daily Return Template" on cbg.gm | 82 entries on the CBG "List of Approved Bureaus" (cbg.gm, undated, may include duplicates) | Rejected | Guidelines require trading on the CBG's own forex platform, and the market is ~80 firms |
| VAT-registered businesses and their accountants | Monthly VAT return due 15 days after month end; e-invoicing coming (GRA FAQ; GRA notice 22 Jun 2026) | Returns go to the nearest tax office per GRA FAQ; invoices in Excel or paper | Count not found. Compulsory VAT registration at taxable supplies of GMD2,000,000 a year (gra.gm/faqs) | Rejected | State-chosen e-invoicing platform (Avatar) is the substitute; specs and penalties unpublished |
| Livestock traders and village livestock officers (alkalolu) | Carry the government attestation in the GLMA-Book (The Point, article page dated 2 Sep 2026) | Printed books distributed via a credit union, then district livestock associations and chiefs; handwritten "white paper" copies in circulation | Not found | Rejected | Village-level users, no payer for software, no register to reach them |
| Hotels, guesthouses, restaurants, night clubs | Licence from the Gambia Tourism Board under the GTBoard Act 2011; hotels keep a register; fine up to D50,000 for operating unlicensed (The Point, 2014) | Licence regularisation drives announced by notice (2023) | 42 licensed upcountry facilities in 2016 (The Point, outdated); national count not found | Rejected | Hotels already run booking or front-desk systems; no recurring filing found |
| Food and feed businesses | Must register with FSQA (Food Safety and Quality Act 2011); importers file an import declaration 21 days before arrival (FSQA import guidelines v1.1, 2016) | Inspection on site, but FSQA runs an online client portal for registration | Not found | Rejected | The regulator already offers an online registration channel |
| Private pharmacies and health facilities | Medicines Record Book (Pharmacy Council Act 2014, s.27, as listed in its contents page); controlled-drug entry book under Drug Control Act 2003 s.30 (news report on DLEAG inspections) | Bound books inspected by DLEAG | Not found; no public register found | Rejected (insufficient evidence) | Could not read the rules or find a count; unverified |
| Artisanal canoes and fish smokers/processors | Canoe registration with the fisheries ministry and Gambia Maritime Administration (fees from 2014: D750 motorised); processing establishments under Fisheries Act 2007 s.58 | Form-based registration; 2024 re-registration drive | Not found | Rejected | One-off registration, no recurring report, buyers are canoe owners |
| Internet resellers and Wi-Fi hotspots | PURA registration and regularisation (1 Jan-3 Mar 2026 exercise; 7-day deadline May 2026) | Regularisation by submitted details; PURA says it may inspect premises | Not found | Rejected | One-off regularisation, no recurring return |
| Employers and domestic workers | SSHFC registration and monthly contributions (payroll vendor guides, not official) | Domestic workers largely outside coverage (The Point study: 75.71% lack social protection) | Not found | Rejected | No evidence domestic workers are covered by a filing duty; buyer not identifiable |

Not researched for lack of budget: pesticide and agro-input dealers, commercial transport and taxi licensing, private schools, mobile-money agents, cashew and groundnut exporters. Marked "not found / not researched", not rejected on evidence.

## Opportunities

Nothing is viable as a standalone business. The best near-miss follows.

### Opportunity: Back-office and renewal tracker for licensed customs clearing agents (near-miss)

**Industry:**
Customs clearing and forwarding agents.

**Buyer:**
Owner or manager of a GRA-licensed clearing agency (small, owner-run).

**Trigger / Why now:**
GRA standard procedure GRA-CB-001 took effect 15 March 2026 and tightened how agents get ASYCUDA World certification (training, 70% exam pass, bond, annual licence). Weak trigger: it governs new entrants, not a new recurring filing.

**Current workflow:**
1. Agent receives shipping papers from importer or exporter, by phone, paper or WhatsApp (inferred, not documented).
2. Staff key the declaration into ASYCUDA World (asycuda.gra.gm), calculate duties and levies by hand or spreadsheet (inferred).
3. Pay duties through the system, collect the client's money, issue an invoice (inferred).
4. Keep records 5 years (GRA SOP) and renew the licence and bond every year.

**Pain:**
Fines up to D500,000, suspension or revocation for non-compliance (GRA SOP). No direct complaints found. The pain is inferred.

**Existing solutions:**
ASYCUDA World is the declaration channel and cannot be replaced. I found no Gambia-specific broker back-office software. I did not search general freight-forwarding or accounting packages in depth, so competition is incomplete. Accountants and consultants as a service: not found.

**The gap:**
Client job files, duty and levy calculation worksheets (the only rates found were a removal-goods guide, 1.5% CIF fee plus 0.55% ECOWAS levy, which may not apply to commercial goods), invoicing, and licence and bond renewal reminders. Nothing here connects to ASYCUDA, so it is a note-keeping tool, not a compliance tool.

**Possible product:**
A browser tool for job files, client invoicing and reminders for licence renewal and record retention, with a duty worksheet the agent can copy into ASYCUDA by hand.

**MVP:**
Job file plus invoice plus renewal calendar. No integration with GRA.

**Pricing hypothesis:**
Estimate: USD 20-40 per month per agency. Ceiling at about 127 agents is under USD 5,000 per month at full penetration (estimate); realistic uptake is a fraction of that.

**How to find first customers:**
The public "Find Clearing Agents" directory on the ASYCUDA site (GRA SOP step 5.5), the agents' association ACCFA (annual general meetings), and GCCI, which endorses licence applicants.

**Risks:**
Importers need not use a broker (Customs and Excise Act 2010), so the broker pool can shrink. Buyers may prefer Excel. A foreign founder cannot easily collect payment or learn local practice (unverified).

**Kill condition:**
Agents report they already use an ERP or accounting tool for jobs, or the directory shows fewer than about 80 active agents.

**Score:** 3/10. Overall is below the sub-score average (4.6) on purpose: the ceiling of ~127 low-paying firms is not captured by the sub-scores.

**Sources:**
- GRA, Standard Procedure GRA-CB-001, Obtaining an ASYCUDA World Certification, effective 15 Mar 2026: https://www.gra.gm/download-file/f1319dea-3e38-11f1-b086-029254d29bb1
- GRA customs FAQ: https://www.gra.gm/custom-faqs
- WTO TFA database, Gambia Article 10.6.2 (brokers not mandatory): https://tfadatabase.org/en/members/gambia-the/article-10-6-2
- The Point, ACCFA 20th AGM (127 agents, undated): https://thepoint.gm/africa/gambia/national-news/accfa-conveys-20th-agm
- ASYCUDA programme, Gambia upgrade to ASYCUDA World, 21 Jun 2022: https://asycuda.org/gambia-successfully-upgrades-to-asycudaworld/

**Offline evidence:**
GRA application form is obtained at GRA offices or downloaded; the package is submitted at GRA HQ with police clearance, bank statements and a good-standing letter. Renewal by updated documents and fees. No online licence application is described.

**Offline channel:**
The ASYCUDA "Find Clearing Agents" directory, ACCFA meetings, and GCCI endorsement letters.

**Market count:**
About 127 agents (ACCFA, The Point, undated; estimate). Current licensed count not found.

**Checks:**
- Competitor: queries "Gambia clearing agents ASYCUDA World broker software job file duty calculator re-export Senegal transit documents" (English) and "Gambie agents en douane logiciel declaration SYDONIA transit Banjul Senegal courtiers licence" (French). Only one English query and one French query were run, short of the three required for a 4+ score, because the score stays below 4. No local broker software found. ASYCUDA World is the state's channel. Opened GRA SOP and ASYCUDA pages.
- Duty: GRA SOP says licence "valid for one year", records kept 5 years, fines up to D500,000, suspension or revocation. The duty falls on the agent, which is the buyer. The SOP gives two renewal dates (31 December in step 4.3, 31 October in step 6.3), which I could not reconcile. The SOP's own fees are given as ranges.
- Jurisdiction: GRA is the Gambia Revenue Authority (gra.gm). The SOP cites the Customs and Excise Act 2010 and a Customs Brokers Policy 2021. A Point article says a first policy was validated in 2020; I did not confirm which policy is in force. The 2013 Customs and Excise Regulation is cited by the WTO database; I did not open the regulation text.

**Sub-scores:** Pain 4, Frequency 7, Mandatory nature 5, Fragmentation 2, Existing competition 4, Incumbent gap 4, Buyer accessibility 7, Willingness to pay 2, MVP simplicity 7, Distribution 4. Average 4.6.

**Willingness to pay:** Would pay for a cheap tool only if it saves clerk time; a done-for-you service from an accountant is the likelier spend (unverified).

**Founder access:** A non-local solo founder could sell remotely only with a local partner; ACCFA introduction needed. Collecting payment is unverified.

## Rejected

- **VAT e-invoicing connector and reconciliation layer (previous report's lead).** GRA announced the system on 22 June 2026 and started a pilot in early July 2026 with Worldwide AVATAR Technologies as technical partner. The developer says the system "enables businesses to issue and manage invoices digitally while securely transmitting transaction data to the GRA in real time" (VoiceGambia/The Point). Avatar's own product page describes free online accounting software for VAT traders plus fiscal devices (it does not mention Gambia). So GRA's own tool is a probable substitute. No API for third parties, no penalties, no go-live date, no list of pilot taxpayers found; KPMG (3 Sep 2026) still relies on the 22 June notice. Registration threshold D2,000,000 a year (gra.gm/faqs); count of registrants not found. Watch item only: if GRA later publishes an API and accredits third-party systems, revisit. Sources: https://thepoint.gm/africa/gambia/headlines/gra-launches-pilot-phase-of-electronic-invoicing-system-to-modernize-tax-administration ; https://www.voicegambia.com/gra-rolls-out-e-invoicing-pilot-in-major-tax-reform-push/ ; https://avatar-technologies.com/efdsolution/ ; https://kpmg.com/us/en/taxnewsflash/news/2026/09/tnf-gambia-implementation-of-e-invoicing-system-for-vat-and-other-taxes.html
- **Forex bureau daily-return tool.** The duty is real (daily return by 3:30 pm, monthly stock position within the first week, fine at least GMD2,000 plus GMD1,000 per day) and falls on the bureau, but the 2024 guidelines say all forex business must be on the CBG foreign exchange platform and bureaus pay an annual software fee to the CBG, so the CBG supplies the substitute. About 82 entries. The guideline text I extracted gives minimum core capital GMD5,000,000; a December 2023 press report said D10 million, so figures are unreliable (the May 2024 text says it supersedes earlier guidelines). Sources: https://www.cbg.gm/downloads-file/209886e2-88c3-11f0-8725-02e599c15748 ; https://www.cbg.gm/list-of-approved-bureaus ; https://alkambatimes.com/licensed-forex-bureau-operators-reportedly-against-central-bank-capital-and-mandatory-deposit-increments/
- **Livestock attestation (GLMA-Book) digitisation.** Printed books issued through GLMA and village officers; no payer for software, no register. Source: https://thepoint.gm/africa/gambia/national-news/chief-bah-calls-on-alkalolu-to-issue-correct-attestation-to-livestock-traders
- **Food business registration (FSQA).** The regulator already runs an online client portal (https://clientportal.fsqa.gm/).
- **Hotel and guesthouse licence/register tool.** Operators already use booking or front-desk software, and the register duty has no recurring filing found. Source: GTBoard Act 2011 section list, as reported by The Point.
- **Pharmacy controlled-drug book, canoe registration, PURA reseller regularisation, SSHFC domestic workers.** Insufficient evidence, one-off duties or no identifiable buyer, as shown in the table.
- Extra ideas not researched: pesticide/agro-dealers, taxi licensing, mobile-money agents.

## Search log

WebSearch calls: 15. WebFetch calls: 11 (all succeeded; the two PDFs, the CBG guidelines and the GRA SOP, returned binary through WebFetch and I extracted their text locally with pdftotext).

Competitor and substitute queries run:
1. "Gambia Revenue Authority e-invoicing public notice 2026 VAT taxpayers pilot"
2. "Worldwide AVATAR Technologies Gambia Revenue Authority electronic invoicing system" (extended)
3. "CBG foreign exchange platform bureaus mandatory software fee forex bureaus Gambia 2025" (extended)
4. "Central Bank of The Gambia foreign exchange bureaus licensed list returns reporting requirements"
5. "Gambia clearing agents ASYCUDA World broker software job file duty calculator re-export Senegal transit documents"
6. "Gambie agents en douane logiciel declaration SYDONIA transit Banjul Senegal courtiers licence"
7. Screening queries: PURA licence register; livestock licensing; tourism levy and licences; pharmacy and controlled-drug records; FSQA registration; SSHFC and domestic workers; fisheries licensing; customs clearing agents licensing; VAT registrant counts.

Competitor checks were thinner than the three-per-idea standard; no idea scored 4 or higher overall, so none required them. The e-invoicing and forex competitor checks were adequate to kill the ideas.

Query patterns that worked here:
- Naming the regulator plus the instrument ("Central Bank of The Gambia foreign exchange bureaus...") surfaced official PDFs on cbg.gm and gra.gm.
- Fetching a PDF and extracting it locally with pdftotext gave real clauses (returns, fines, deadlines) where WebFetch alone failed.
- Local newspaper searches (The Point) gave counts and enforcement notices, but dates are often missing, and generic "software + register" queries returned nothing for The Gambia.
