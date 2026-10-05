# Jamaica: Indie-Hacker Opportunity Research

**Date:** 2026-10-05 · **Market size class:** small (about 2.8M people, English-speaking, JMD economy) · **Searches used:** 10 of 10

**Accessibility:** Jamaica is open to a foreign solo founder. It is not sanctioned, it is English-language, and you can sell software there with ordinary card or USD billing. Two things limit it: the small number of buyers and a market dominated by local relationships. **Context for 2026:** Hurricane Melissa (October 2025) has caused a reconstruction and building boom, supported by IMF and IDB financing. Several workflows below are affected by it.

**Bottom line:** I did not find a strong standalone opportunity (score 7 or higher). The best leads are small, compliance-driven niches whose why-now is weak or not yet confirmed. Jamaica works best as an English-speaking **Caribbean add-on**: anything built for CFATF-region AML, ASYCUDA customs or data-protection compliance could also be sold in Trinidad & Tobago, Barbados, the Bahamas, Guyana and the OECS.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Payroll / all SMEs | S01 monthly and S02 annual statutory returns (PAYE, NIS, NHT, Ed Tax, HEART) | Too competitive | YaadBooks, HeadOffice, MC Systems BizPay and iCoPAY already generate S01/S02 |
| GCT-registered businesses | Monthly GCT e-filing, e-invoicing | Rejected | TAJ portal e-filing mandatory since 2018 and handled by accounting software; e-invoicing only "planned", no mandate or date |
| Real estate dealers (DNFBP) | AML/CFT: CDD, risk assessment, goAML reporting to FID, REB supervision | Candidate (weak) | Mandatory, and the June 2026 National Risk Assessment flags real estate; buyers few, consultants dominate |
| All data controllers (clinics, schools, hotels, BPOs) | DPA 2020 annual registration and annual DPIA to OIC | Candidate (weak) | Mandatory but annual; enforcement not fully active; portal offline in March 2026; privacy SaaS already targets it |
| Government suppliers / contractors | GOJEP bids: valid TCC, PPC registration grade, bid document packs | Candidate (weak) | Reconstruction spending raises volume; a mostly generic document tracker |
| Customs brokers / importers | JSWIFT permit to ASYCUDA World declaration | Poor evidence of gap | Gov single window already passes permit data into ASYCUDA; no evidence of re-entry pain found |
| Construction / small residential | Building approvals after Melissa | Poor distribution | Government DevAPP/municipal process; applicants mostly individual homeowners |

---

### Opportunity: Real-estate dealer AML compliance kit (goAML-ready)

**Industry:**
Real estate brokerage (Designated Non-Financial Business and Profession, DNFBP)

**Buyer:**
Principal or compliance officer of a small licensed real-estate dealer (1 to 20 agents) supervised by the Real Estate Board (REB)

**Trigger / Why now:**
The June 2026 National Risk Assessment (published by the BGLC) says illicit value may be moving from the tightened financial sector into DNFBPs and real estate. Jamaica will face FATF/CFATF 5th-round evaluation pressure on effectiveness. *Unverified:* the exact date of Jamaica's 5th-round on-site visit.

**Current workflow:**
1. Agent collects ID, source-of-funds and proof-of-address documents from buyers and sellers on paper or WhatsApp.
2. The compliance officer fills in a risk-assessment form, often in Word or Excel, and keeps the file for the retention period.
3. Threshold or suspicious transactions are keyed manually into goAML (FID). TPA/UNSCR sanctions-list screening is done by hand.
4. During an REB examination, staff assemble the evidence from scattered folders.

**Pain:**
Real estate has a long record of lagging on AML compliance (Gleaner, 2023), and the NRA 2026 highlights it as a risk. Non-compliance under POCA brings criminal penalties and licence risk.

**Existing solutions:**
- AML consultants and attorneys who write manuals and run training
- Generic global KYC tools such as ComplyAdvantage and Sumsub (enterprise-priced, not tailored to REB or goAML)
- Excel/Word templates from REB guidance
- Brokerage CRMs, which have no AML module (unverified for local CRMs)

**The gap:**
No affordable tool built for REB requirements that connects the deal file, CDD checklist, risk score and sanctions screen into a goAML-ready report and an examination evidence pack. *Unverified:* that no local vendor offers this.

**Possible product:**
A per-transaction AML file for Jamaican real-estate deals. It covers the client intake link, risk scoring to REB guidance, screening against UN and local lists, a goAML XML/report draft and a one-click examination binder.

**MVP:**
A web form plus document upload for each deal, a risk checklist that follows REB/GLC guidance, a PDF audit pack, and a manual goAML export template.

**Pricing hypothesis:**
US$40–100 per month per firm, or about US$10 per transaction file.

**How to find first customers:**
The REB public register of licensed dealers and salesmen, the Realtors Association of Jamaica, and REB AML training events.

**Risks:**
- Small number of buyers (dealer count unverified, probably a few hundred firms).
- Consultants bundle templates for free.
- The same product needs adapting for attorneys (GLC) and accountants (PAB).

**Kill condition:**
Fewer than about 150 active dealer firms, or REB/FID releasing a free template and portal that covers the risk file.

**Score:** 5/10

**Sources:**
- https://www.bglc.gov.jm/wp-content/uploads/2026/06/Official_National_Risk_Assessment_Report_18062026.pdf
- http://past.jamaica-gleaner.com/article/business/20230611/real-estate-sector-still-lagging-anti-money-laundering-compliance
- https://www.generallegalcouncil.org/documents/general-legal-council-anti-money-laundering-guidance-jan-2-2024.pdf
- https://www.fatf-gafi.org/content/dam/fatf-gafi/fsrb-fur/Jamaica-FUR-2024.pdf.coredownload.inline.pdf
- https://www.bglc.gov.jm/wp-content/uploads/2022/03/BGLC-Presentation-Reinforcing-goAML-Final.pdf

---

### Opportunity: DPA annual registration and DPIA pack for SME data controllers

**Industry:**
Private clinics, private schools, small hotels, BPOs and other SMEs that process personal data

**Buyer:**
Practice manager, school bursar or owner acting as the Data Protection Officer

**Trigger / Why now:**
The Data Protection Act 2020 has been in force since December 2023. Registration renews annually by 1 December, and a DPIA must be submitted within 90 days after each calendar year. The government says enforcement provisions are being "fully activated", and fines run up to 4% of turnover.

**Current workflow:**
1. Fill in the OIC registration form on the portal and pay a fee of J$7,500–25,000.
2. Inventory personal data in a spreadsheet.
3. Write a DPIA, usually with a lawyer or consultant.
4. Submit it by the end of March.

**Pain:**
Mandatory and liable to fines, but the work is annual. The OIC portal was offline as of March 2026, and enforcement is not yet fully active.

**Existing solutions:**
- MyPrivicy, which writes Jamaica DPA-specific content
- ConsentStack, which has a Jamaica DPA page
- OneTrust and other enterprise tools
- Local law firms
- The GOJ DPA compliance framework, aimed at public bodies

**The gap:**
A cheap, sector-template DPIA generator, for example for a dental clinic or a basic school. Existing privacy SaaS is generic or priced in USD for larger firms.

**Possible product:**
A questionnaire that outputs the data inventory, the DPIA and the registration particulars in OIC format, with a reminder for the next renewal.

**MVP:**
Three sector templates (clinic, school, hotel) with PDF output.

**Pricing hypothesis:**
US$100–200 per year per entity, or a consultant white-label licence.

**How to find first customers:**
- OIC's list of priority sectors
- Ministry of Health register of private health facilities
- Jamaica Independent Schools Association
- JHTA (hotel association) members

**Risks:**
- Annual frequency.
- Weak enforcement.
- Competitors already present.
- Generic AI can draft DPIAs.

**Kill condition:**
OIC enforcement stays dormant through 2027, or the OIC publishes free sector templates.

**Score:** 4/10

**Sources:**
- https://jis.gov.jm/enforcement-provisions-of-data-protection-act-to-be-fully-activated/
- https://oic.gov.jm/press-release/registration-data-controllers
- https://www.dataguidance.com/news/jamaica-registration-data-controllers-commences-june-1
- https://myprivicy.com/blog/jamaica-dpa-enforcement-2025
- https://www.consentstack.io/regulations/jm-dpa
- https://practiceguides.chambers.com/practice-guides/data-protection-privacy-2026/jamaica

---

### Opportunity: GOJEP bid-readiness tracker for reconstruction contractors

**Industry:**
Construction subcontractors and suppliers bidding on Government of Jamaica tenders

**Buyer:**
Owner or office manager of a small contractor or supplier registered with the Public Procurement Commission (PPC, formerly NCC)

**Trigger / Why now:**
Post-Hurricane Melissa reconstruction has more than US$1B in financing available, through IMF disbursements, IDB support and the Reconstruction Implementation Support Project. Tender volume is up, and every GOJEP bid requires a valid Tax Compliance Certificate (TCC) and PPC registration in the right category and grade.

**Current workflow:**
1. Monitor GOJEP for tenders.
2. Check whether the TCC and PPC certificate are still valid.
3. Renew them through TAJ and the PPC.
4. Assemble the bid documents (company docs, NIS/NHT compliance and similar) by hand.
5. Upload the bid to GOJEP.

**Pain:**
Bids are rejected over expired certificates (inferred from the repeated eligibility clauses in tenders; no direct complaint evidence found).

**Existing solutions:**
- Bid consultants
- GOJEP's own alerts
- Generic document-expiry trackers
- Accounting firms that handle TCC renewals

**The gap:**
A Jamaica-specific tender-match plus certificate-validity plus bid-pack checklist. The gap is thin, and the product is close to "generic document collection".

**Possible product:**
GOJEP tender alerts filtered by the contractor's PPC category and grade, combined with tracking of certificate expiry and a reusable bid document vault.

**MVP:**
Certificate vault with expiry reminders, and a manually curated weekly tender digest by PPC category.

**Pricing hypothesis:**
US$25–60 per month.

**How to find first customers:**
- PPC register of contractors (public availability unverified)
- Incorporated Masterbuilders Association of Jamaica
- Bidder lists on GOJEP award notices

**Risks:**
- Generic.
- GOJEP may add expiry checks itself.
- Low willingness to pay.

**Kill condition:**
GOJEP already validates TCC/PPC status automatically, or interviews show bid rejections over expired certificates are rare.

**Score:** 3/10

**Sources:**
- https://www.mof.gov.jm/wp-content/uploads/Advertisement-1.pdf
- https://jamaica-demo.eurodyn.com/epps/docs/Supplier_User_Manual.docx
- https://www.localgovjamaica.gov.jm/building-boom-in-full-swing-as-melissa-recovery-continues-local-govt-minister-warns-that-improved-construction-regulation-will-accompany-increased-activity/
- https://www.iadb.org/en/blog/economic-analysis/jamaica-after-hurricane-melissa-building-resilience-through-disaster-risk-financing
- https://opm.gov.jm/hurricane-melissa-reconstruction-implementation-support-project-signing-ceremony/

---

## Rejected after competitor research

- **Payroll statutory filing (S01/S02, NIS/NHT/Ed Tax/HEART):** rejected because YaadBooks, HeadOffice, MC Systems BizPay and iCoPAY already compute and generate the TAJ forms. Sources: https://yaadbooks.com/payroll-software-jamaica, https://yaadbooks.com/blog/payroll-compliance-jamaica-guide
- **GCT monthly filing / e-invoicing:** e-filing has been mandatory on the TAJ portal since 2018 and is covered by accounting software. E-invoicing is only an editorial proposal and a government "plan", with no mandate yet. Worth revisiting if TAJ announces a date. Sources: https://www.jamaicatax.gov.jm/home/-/blogs/mandatory-e-filing-requirement-for-all-gct-taxpayers, https://jamaica-gleaner.com/article/commentary/20260317/editorial-case-digital-gct
- **Customs broker permit-to-declaration helper:** rejected because JSWIFT, the government single window, already passes approved permit data into ASYCUDA World. JSWIFT has 86 services and 10,000+ users, and I found no evidence of re-entry pain. The JCA plans further ASYCUDA–JSWIFT integration for 2026–2030. Sources: https://jca.gov.jm/wp-content/uploads/2026/09/JCA-Revised-Strategic-Business-Plan-FY26-30-07-09-26-V.9.x58514.pdf, https://jis.gov.jm/features/importers-must-apply-for-permits-through-jswift/

## Attractive problem, poor distribution

- **Post-Melissa residential building approvals and damage-assessment paperwork:** volume is high and growing (the biggest rise is in small residential applications), but the applicants are individual homeowners. The process runs through government DevAPP, municipal corporations and official damage assessments. There is no repeat B2B buyer. Sources: https://www.jamaicaobserver.com/2026/06/04/building-boom-20260604-0521-377274/, https://opm.gov.jm/official-damage-assessment-required-for-hurricane-melissa-housing-repair-or-reconstruction-assistance/

## Too competitive

- Payroll / statutory deductions (YaadBooks, HeadOffice, BizPay, iCoPAY).
- General SME accounting and GCT (local and international accounting packages).

## Not researched (budget)

Pharmacies and controlled drugs, food-handler and tourism licensing (TPDCo), the private security regulator (PSRA), and bauxite and agricultural exports. These are worth a follow-up only as part of a Caribbean-wide track.
