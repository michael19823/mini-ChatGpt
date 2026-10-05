# North Macedonia: Opportunity Research

Research date: 2026-10-04. Market size: small (about 1.8M people). Search budget: 10 WebSearch calls, all used. WebFetch was not used.
Accessibility: there are no sanctions or software-sale restrictions. North Macedonia is an EU candidate with euro/denar payment rails and open internet, so a foreign solo founder can sell software here. Two practical barriers: the buyer-facing UI must be in Macedonian (Cyrillic), plus Albanian for part of the market, and e-invoices have to be signed with a qualified electronic signature (QES) from a local issuer (KIBS or Kibriton).

Summary: the country has one strong regulatory trigger, the new e-Faktura clearance e-invoicing system run by the Public Revenue Office (UJP). But local vendors started selling e-Faktura modules before the mandate, so the obvious invoice-issuing product is already crowded. One narrower angle still looks open: the accounting bureau that handles e-invoices for many clients at once. Other screened workflows (packaging EPR, waste, CBAM, labour records, food safety) had no fresh 2025–2027 trigger I could verify, or had too few buyers. **Only one opportunity is worth listing.** Splitting the e-Faktura theme into extra entries to reach the template's 3–7 would only pad the report.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Accountants / accounting bureaus | Receiving and booking incoming e-Faktura invoices for many clients; QES signing; UBL handling | **Candidate (weak-medium)** | Real mandatory trigger (voluntary from 1 Oct 2026, mandatory for VAT payers from 1 Apr 2027 per the draft law), but local vendors are already active |
| All VAT payers (SMEs) | Issuing UBL 2.1 e-invoices via e-Faktura | Too competitive | Facturino, Denarior, Merot, Bilansio, Unija, eArhiva, Login Systems and existing ERPs already sell this |
| Packaging / special-waste producers (EPR) | Reporting packaging quantities; EPR evidence for public tenders | Rejected | Collective schemes (Pakomak, Euro-Ekopak) do the reporting and issue the evidence for their members |
| Waste management / haulers | Waste identification forms, reporting to MoEPP | Rejected (no trigger) | The Law on Waste Management dates from 2021 and a new law is only in drafting, so there's no fixed date. The market is small |
| Steel / aluminium / cement exporters | CBAM emissions data for EU importers (definitive period from Jan 2026) | Rejected | Only a handful of large exporters, so the sale is enterprise/consultant work. CBAM goods are about 10.7% of exports to the EU |
| Employers / payroll | Working-time and labour records under a new Labour Relations Law | Not verified | I found no adopted 2026 law with new e-recording duties. The draft has been pending since 2023 |
| Food business operators | HACCP / traceability records for the Food and Veterinary Agency (AHV) | Not verified | No 2025–2026 North Macedonia-specific rule surfaced. The search only returned results for Croatia and the EU |

## Opportunities

### Opportunity: e-Faktura multi-client inbox and booking bridge for accounting bureaus

**Industry:**
Accounting bureaus / outsourced bookkeeping (smetkovodstveni biroa)

**Buyer:**
Owner or senior accountant of a small accounting bureau (1–10 staff) handling bookkeeping and the DDV-04 VAT return for 30–200 SME clients.

**Trigger / Why now:**
- UJP ran an e-Faktura pilot from 1 Jan 2026. The system is a clearance (CTC) model: an invoice only becomes legally issued once UJP's platform has validated it and assigned an ID.
- The Draft Law on Electronic Invoicing (on ENER; KPMG covered it in 2026) proposes this schedule:
  - voluntary registration from **1 Oct 2026**;
  - mandatory for VAT payers from **1 Apr 2027**;
  - non-VAT legal entities from **1 Jul 2027**;
  - public bodies from **1 Oct 2027**;
  - everyone from **1 Jan 2028**.
- As of my searches the law was still a draft. Some vendor blogs instead state "mandatory from 1 Oct 2026", so the date is contested. Every invoice must be UBL 2.1 XML signed with a QES.

**Current workflow (expected, based on the e-Faktura design; not interview-verified):**
1. Each client logs into efaktura.ujp.gov.mk with its own tax number (EDB) and QES, or hands the credentials or certificate to its accountant.
2. Incoming invoices are downloaded per client from the portal, or forwarded by email as PDF or XML.
3. The accountant re-keys or imports them into the bureau's desktop accounting package. Packages differ by client.
4. The accountant reconciles UJP's e-Faktura records against the bookkeeping before filing the DDV-04, and chases rejected or missing invoices.

**Pain:**
- The clearance model means UJP holds the authoritative invoice data, so any mismatch with the books is visible to the tax authority.
- Bureaus would have to repeat portal logins and downloads for each client every month. QES handling across clients adds friction.
- Evidence of this pain is inferred from the system design and vendor guides. I found no direct complaints, and customer interviews are needed.

**Existing solutions:**
- Local e-Faktura and accounting products:
  - Facturino (facturino.mk);
  - Denarior;
  - Merot Finance (accounting software that also handles DDV-04);
  - Bilansio;
  - Unija;
  - eArhiva (earhiva.mk e-Faktura);
  - Login Systems.
- International clearance/compliance vendors: Sovos, Banqup, Flick, Comarch.
- The free UJP portal itself.
- Incumbent desktop accounting packages adding UBL import/export.

**The gap:**
The vendors' public pages I saw are aimed at the invoice issuer, a single company. None of them showed a bureau-level view across many clients: one queue of all clients' received and issued e-Faktura documents, auto-mapping to each client's ledger, and month-end reconciliation of UJP records against the books before the DDV-04. This is unverified, because I could not check the vendors' feature pages in depth.

**Possible product:**
A web dashboard for accounting bureaus. It pulls every client's e-Faktura documents (via the UJP API, if delegated access exists), flags missing, rejected or unmatched invoices against each client's ledger export, and exports bookings in the import formats of the main local accounting packages.

**MVP:**
1. Upload or drag in UBL XML files for each client.
2. Normalize them and run a reconciliation report against a CSV ledger export: missing, duplicate, VAT-rate mismatches.
3. Export to one or two of the most common local accounting packages.
4. Add UJP API pull later, once access for intermediaries is confirmed.

**Pricing hypothesis:**
EUR 2–4 per client company per month, or about EUR 50–150 per bureau per month. Macedonian price levels are low, so ARR potential is modest. Estimate.

**How to find first customers:**
- The register of licensed accountants and accounting firms kept by the Institute of Accountants and Certified Accountants (ISOS). The number of firms is unverified; my search for it failed.
- UJP and ISOS e-Faktura trainings.
- Macedonian accountant Facebook groups.
- Partnerships with the QES issuers (KIBS, Kibriton).

**Risks:**
- The incumbent accounting packages, which bureaus already pay for, will add multi-client UBL import quickly.
- The UJP API may not allow intermediaries delegated access across many clients.
- The law could be delayed again.
- The market is small with low prices. Language and Cyrillic UI are required.

**Kill condition:**
- The two or three dominant local accounting packages ship multi-client e-Faktura import and reconciliation before Apr 2027; or
- UJP offers a free accountant view across all clients; or
- interviews with 10 bureaus show they plan to make clients forward XML and import it manually without complaint.

**Score:** 5/10

**Sources:**
- KPMG North Macedonia, "Draft Law on Electronic Invoicing Published in North Macedonia" (2026): https://kpmg.com/mk/en/insights/2026/03/draft-law-on-electronic-invoicing-published-in-north-macedonia.html
- Fiscal Requirements, "Draft law proposes phased mandatory rollout from April 2027": https://www.fiscal-requirements.com/news/5923-north-macedonia-e-invoicing-draft-law-proposes-phased-mandatory-rollout-from-april-2027
- RTC Suite: https://rtcsuite.com/north-macedonia-proposes-phased-e-invoicing-mandate-from-april-2027/
- RSM Macedonia (phased timeline in Macedonian): https://www.rsm.global/macedonia/mk/node/170
- Fiscal Requirements, "Starts Testing Mandatory B2B e-Invoicing": https://www.fiscal-requirements.com/news/4981-north-macedonia-starts-testing-mandatory-b2b-e-invoicing-for-2026
- Sovos: https://sovos.com/vat/tax-rules/north-macedonia-e-invoicing/
- Local vendors:
  - https://www.facturino.mk/mk/e-faktura/vodic
  - https://denarior.com/shto-e-e-faktura/
  - https://merot.com/finance/
  - https://bilansio.com/
  - https://unija.com/mk/e-faktura-vo-makedonija/
  - https://earhiva.mk/e-faktura/
  - https://www.loginsystems.biz/post/predlog-zakon-e-faktura-makedonija-2026-2028

## Rejected after competitor research

- **E-invoice issuing tool for SMEs (e-Faktura UBL + QES):** killed by the crowd of local vendors that were already marketing before the mandate: Facturino, Denarior, Merot, Bilansio, Unija, eArhiva, Login Systems. Sovos, Banqup and Flick serve larger firms, and the UJP portal itself is free.
- **Packaging/EPR reporting and procurement evidence:** public bodies refuse to sign procurement contracts with suppliers that lack evidence of meeting their extended producer responsibility (EPR) obligations, which looks like a trigger. But the licensed collective schemes (Pakomak, Euro-Ekopak) already do the reporting and issue that evidence for members. Small producers below the thresholds pay a flat fee. Sources:
  - https://balkangreenenergynews.com/?p=29097
  - https://closetheglassloop.eu/wp-content/uploads/2026/06/Irina-Stojanovska-Euro-Ekopak-presentation-Tirana-June-2026.pdf
- **CBAM emissions-data packages for exporters:** killed by the tiny buyer count. A few steel, ferro-alloy, aluminium and cement plants are served by verifiers and consultants. Sources:
  - https://www.energy-community.org/dam/jcr:6b643ba1-8a96-45ef-8f76-ea35e1ce690c/2025%2007%2001%20CBAM%20State%20of%20Play%20V.pdf
  - https://idscs.org.mk/en/?p=27260

## Attractive problem, poor distribution

- **Waste identification forms and reporting for haulers/generators:** the workflow fits the thesis, but there are few operators. MoEPP's information system is the substitute, and the new waste law has no date yet. Sources:
  - https://www.moepp.gov.mk/mk-MK/uslugi/otpad
  - https://dejure.mk/akti/akt/zakon-za-upravuvanje-so-otpadot-1

## Too competitive

- Generic e-Faktura issuing and SME accounting with UBL support (see above).

## Not verified / gaps for a follow-up

- Labour Relations Law reform: there may be new working-time or e-recording duties, but no adopted 2026 text was found.
- Food and Veterinary Agency (AHV) HACCP/traceability rule changes, and certificates for agri-food exporters: not researched to a conclusion.
- Number of accounting bureaus and licensed accountants (ISOS register): not found.
- Whether the e-Faktura law has been adopted by Parliament: still a draft as of my sources.
