# Namibia: Indie Software Opportunity Research

*Research date: 2026-10-04. Small market (about 3M people, 242k registered business entities). Search budget: 10 searches. WebFetch not used. Figures without a source are marked as estimates or unverified.*

## Summary

Namibia is a small but accessible market. It has no sanctions, uses the Namibian dollar (pegged 1:1 to the rand) and its legal and compliance frameworks look a lot like South Africa's. The best "why now" triggers in 2024–2026 are:

1. **FATF grey-listing (Feb 2024) and the EU high-risk listing (2025).** These led to much heavier supervision of DNFBPs (designated non-financial businesses and professions such as estate agents, lawyers, accountants and dealers) by the Financial Intelligence Centre (FIC). Off-site assessments rose 729% and on-site assessments rose 98% in FY2024/25.
2. **Beneficial-ownership (BO) enforcement by BIPA, the business registry.** Only 45.3% of 242,417 entities had declared their beneficial owners. More than 141,000 entities face phased deregistration. A Corporate Laws Bill that would make digital filing the default is in progress.
3. **The Property Practitioners Act 11 of 2024.** It has been signed but has no commencement date yet. It creates a new regulator, new fidelity fund certificates and trust-account rules.

None of these is strong enough to support a standalone Namibian product. The realistic play is a **Namibia module added to a South Africa-focused compliance product**: the FIC/FICA concepts, the goAML reporting platform and the RMCP-style compliance programme carry over with small changes.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Estate agents, legal practitioners, accountants, car and precious-metal dealers (DNFBPs) | FIA customer due diligence (CDD), risk assessment, goAML registration and reporting, readiness for FIC inspections | **Opportunity (moderate)** | Grey-listing drove a large jump in supervision. Small firms do this manually. The market is small, and SA tools can extend into it |
| Accountants / company secretarial firms | BIPA beneficial-ownership (BO1/BO2) declarations, annual returns and annual duty across a client portfolio | **Opportunity (weak–moderate)** | Large backlog of non-compliance and deregistration threat. Mostly an annual task done through a government portal |
| Property practitioners | Fidelity fund certificates, trust-account records and audits under the new Act | Watch | The Act is not yet in force and regulations are unpublished |
| Payroll / employers | PAYE via NamRA ITAS (IT14E annual reconciliation), SSC contributions | Too competitive | SA payroll vendors already support Namibia. ITAS outages are NamRA's problem to fix, not a software gap |
| VAT-registered businesses | Coming e-invoicing through ITAS | Too early | The 2026/27 budget points to about 2028, and global e-invoicing vendors are already positioning |
| Livestock farmers / abattoirs | NamLITS traceability (movement permits, ear tags) for EU beef exports | Rejected | NamLITS Online is a free government/Meat Board tool. Farmers are rural and hard to reach |
| Fisheries | Quota, by-catch levy and violation reporting to the Ministry | Rejected | Few right-holders (about 235 vessels), handled by in-house staff and consultants. Too few buyers to sell to through enterprise-style sales |

## Opportunities

### Opportunity: FIA compliance kit for small Namibian DNFBPs (estate agents, law firms, accountants, dealers)

**Industry:**
Real estate agencies, legal practitioners, accounting firms, motor-vehicle dealers, and dealers in precious metals and stones. All are "accountable institutions" under Namibia's Financial Intelligence Act 2012.

**Buyer:**
The owner/principal or designated compliance officer at an agency or firm with 1–20 staff.

**Trigger / Why now:**
Namibia was placed under FATF increased monitoring on 23 Feb 2024 and the EU added it to its high-risk third-country list in 2025. The FIC's 2024/25 annual report shows a 729% increase in off-site and a 98% increase in on-site FIA compliance assessments of DNFBPs. The FIC upgraded goAML in September 2025. Delisting was targeted for around May 2026; current status is unverified. Supervision intensity usually stays high for a while after delisting, because the next mutual evaluation follows.

**Current workflow:**
1. The firm collects ID, proof of address and (for entities) beneficial-owner documents by email or WhatsApp, and keeps paper or PDF files.
2. A compliance officer fills in a risk assessment and CDD checklist in Word or Excel, often adapted from FIC guidance or an SA template.
3. The firm manually screens the client against sanctions lists.
4. Suspicious or threshold reports are typed by hand into the goAML web portal.
5. Before an FIC inspection, the firm scrambles to assemble evidence of its risk-based programme, staff training and record-keeping.

**Pain:**
Supervision has escalated sharply (figures above). Inspections and administrative sanctions are a real threat. Small agencies have no compliance staff. The government's own FATF progress reporting names DNFBP supervision as a milestone.

**Existing solutions:**
- SA KYC/AML vendors: DocFox (RMCP templates and onboarding), Moonstone Compliance's DIY FICA toolkit, nCino/KYC Africa, and VoveID, which publishes a 2026 Namibia KYB guide.
- Local compliance consultants and law/audit firms.
- Free FIC guidance notes and the goAML portal.
- Bank-grade AML suites, which are too expensive for this segment.

**The gap:**
SA tools are built around SA FICA (Directive 10/11/12, the SA FIC's RCR returns). It is not verified that any of them ships Namibia-specific FIA forms, Namibian ID/BIPA entity checks, or goAML Namibia report preparation for a 3-person estate agency. Consultants hand over a policy document but not a working per-client CDD workflow.

**Possible product:**
A per-client CDD file that guides the user by entity type (individual, close corporation, company, trust), collects documents through a link, scores risk, screens against sanctions lists, and produces an "inspection-ready" evidence pack plus pre-filled goAML report drafts.

**MVP:**
A web form for client onboarding, a Namibia-specific risk-scoring checklist, UN/consolidated sanctions screening, a PDF audit pack per client, and an annual firm-wide risk assessment template. The target is estate agents only.

**Pricing hypothesis:**
N$400–1,200/month (about US$22–65) per firm, or N$50–100 per client file. This is an estimate.

**How to find first customers:**
- The Namibia Estate Agents Board (future PPRA) register of registered agents.
- The Law Society of Namibia member list.
- Institute of Chartered Accountants of Namibia (ICAN) and Public Accountants' and Auditors' Board (PAAB) registers.
- FIC sector training sessions (the FIC runs broad sector outreach).
- Most realistically, as a Namibia add-on sold through an SA product's existing channels.

**Risks:**
- The market is small: an estimated few hundred estate agencies and a few hundred law and accounting firms (unverified).
- Pressure may fade after FATF delisting.
- SA incumbents can add Namibia cheaply.
- Willingness to pay is low among very small agencies.

**Kill condition:**
- DocFox or Moonstone already supports Namibian FIA workflows, or
- interviews with 10 agencies show they rely on a free FIC template and see no inspection risk.

**Score:** 5/10

**Sources:**
- https://www.zigram.tech/?p=34286 (FIC Annual Report 2024–25 analysis: DNFBP assessment increases)
- https://thebrief.com.na/2025/10/namibias-race-to-exit-the-fatf-grey-list-progress-pressure-and-the-politics-of-global-finance/
- https://www.we.com.na/mw-main/namibia-on-track-for-fatf-delisting-says-fic2025-10-07172843
- https://www.eeas.europa.eu/delegations/namibia/european-commission-adds-namibia-updated-list-high-risk-jurisdictions-financial-crime-monitoring_en
- https://www.bon.com.na/getattachment/9c6cdada-d9a4-41b9-8f92-5483bd9e4037/.aspx (FIC / Bank of Namibia document on goAML)
- https://www.moonstone.co.za/new-do-it-yourself-fica-compliance-solution-for-accountable-institutions/
- https://blog.voveid.com/kyb-compliance-in-namibia-2026-guide-for-regulated-businesses/

### Opportunity: Beneficial-ownership and annual-return tracker for Namibian accounting / company-secretarial firms

**Industry:**
Accounting firms and company-secretarial practitioners managing portfolios of close corporations (CCs) and companies.

**Buyer:**
The practice owner or company-secretarial clerk at a firm handling 50–2,000 client entities.

**Trigger / Why now:**
Beneficial-ownership disclosure has been mandatory since July 2023 (amendments to the Companies Act and Close Corporations Act). At the end of 2025 only 45.3% of 242,417 entities had complied. BIPA began a phased deregistration of more than 141,000 non-compliant entities in 2025. The Corporate Laws Bill (2025/2026) expands and harmonises annual-return fields (directors, registered office, UBO) and makes electronic filing the default.

**Current workflow:**
1. The firm keeps a spreadsheet of client entities with annual-return months and annual-duty status.
2. It chases clients for shareholder and member changes and certified IDs.
3. It fills in BO1 (initial or changed) or BO2 (annual confirmation) forms and annual returns on the BIPA portal, entity by entity.
4. It tracks proof of filing and payment, and handles deregistration notices and restorations.

**Pain:**
The deregistration threat hits clients' bank accounts, tenders and licences. Portal filing is entity-by-entity and some submissions still need physical documents or an intermediary.

**Existing solutions:**
- The BIPA online portal (free).
- Spreadsheets.
- Generic practice-management tools.
- SA CIPC-focused company-secretarial software, which does not cover BIPA (unverified).
- Local corporate service providers that do filings manually for a fee.

**The gap:**
No Namibia-specific multi-entity deadline tracker with BO-change detection and document chasing was found.

**Possible product:**
A portfolio dashboard showing each entity's BO and annual-return status. It automatically chases clients for change confirmations and document uploads and pre-fills BO1/BO2 data for portal entry.

**MVP:**
A spreadsheet import of entities, a deadline calendar, client confirmation links, BO-form data sheets and a filing log.

**Pricing hypothesis:**
N$15–30 per entity per year, or N$500–1,500/month per firm. This is an estimate.

**How to find first customers:**
- ICAN and PAAB member registers.
- Namibian tax practitioner registrations with NamRA.
- Accounting firms in Windhoek, Swakopmund and Walvis Bay.

**Risks:**
- Annual frequency.
- No BIPA API, so it is a manual-entry assist tool.
- A small number of firms.
- The Corporate Laws Bill may change forms.
- BIPA may improve its own portal.

**Kill condition:**
- BIPA launches bulk or agent filing with portfolio status views, or
- firms report fewer than 100 entities each.

**Score:** 4/10

**Sources:**
- https://thebrief.com.na/2025/05/141000-non-compliant-businesses-face-deregistration-by-bipa/
- https://www.thevillager.com.na/top-stories/2026/only-45-3-compliant-with-beneficial-ownership-declaration/
- https://www.bipa.na/beneficial-ownership/
- https://globallawexperts.com/namibia-corporate-law-reform-2026/
- https://globallawexperts.com/corporate-laws-bill-2025-namibia/

## Watch list

- **Property Practitioners Act 11 of 2024**
  - What it does: makes the Estate Agents Board the Property Practitioners Regulatory Authority, adds 3-year fidelity fund certificates, trust-account record-keeping and conduct rules.
  - Status: not yet commenced, regulations not seen.
  - When it commences, a trust-account and compliance module for estate agents could be bundled with the FIA kit above.
  - Sources: https://www.lac.org.na/laws/2024/8503.pdf, https://www.parliament.na/wp-content/uploads/2024/07/Property-PractitionersBill.pdf
- **VAT e-invoicing via ITAS**
  - The 2026/27 budget reaffirmed it, but about 2028 is now likely.
  - Recheck in 2027.
  - Sources: https://sharedserviceslink.com/news/namibia-s-2026-to-2027-national-budget-confirms-e-invoicing-likely-2028, https://edicomgroup.com/blog/mandatory-electronic-invoice-namibia

## Rejected after competitor research

- **NamLITS livestock movement and traceability helper.** Killed by NamLITS Online, a free combined Meat Board / Directorate of Veterinary Services tool for identification, traceability and marketing. The registration backlog is a government capacity problem, not a software gap. Sources: https://nammic.com.na/namlits-online-general-information/, https://www.namibian.com.na/wiping-namlits-backlog-a-priority
- **Fisheries quota and by-catch levy compliance.** The pain is real: a 2% by-catch threshold, a 50% levy and public naming of violators. But there are only a few dozen right-holder companies (about 235 vessels). They use in-house compliance staff and consultants and buy through enterprise-style procurement. Sources: https://allafrica.com/stories/202511100528.html, https://www.thevillager.com.na/national/2025/235-vessels-fishing-in-nam-waters/
- **PAYE/IT14E and SSC payroll filing.** Payroll software that supports Namibia already exists, including SA vendors such as Sage and SimplePay (this is from vendor knowledge and was not verified in this session). The 2026 ITAS problems were NamRA system outages that pushed the deadline to 31 Aug 2026, not a gap a third party can fill. Sources: https://thebrief.com.na/?p=20516, https://www.namibian.com.na/namra-extends-tax-return-deadline-3/

## Attractive problem, poor distribution

- **Communal-area livestock traceability compliance.** It affects pastoralists in north-western Namibia, who lack connectivity and ability to pay; the state is the real buyer. Source: https://centaur.reading.ac.uk/id/eprint/114146

## Too competitive

- Payroll / PAYE (SA payroll vendors).
- Future e-invoicing (EDICOM and other global e-invoicing and fiscalisation vendors will arrive before the mandate).
- Generic KYC for banks and insurers (DocFox, nCino/KYC Africa, VoveID and bank-grade AML suites).

## Accessibility

Accessible. There are no sanctions or software restrictions. Card and bank rails work through the rand-linked Common Monetary Area. A foreign solo founder can sell SaaS. Namibia is best treated as an add-on to a South Africa product rather than a standalone market.
