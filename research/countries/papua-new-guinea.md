# Papua New Guinea: opportunity research

Research date: 2026-10-05. Treated as a **small market** (budget of about 10 searches, 9 used). WebFetch was not used, so all findings come from search-result snippets. Anything not confirmed by a source is marked *unverified* or *estimate*.

**Overall verdict:** PNG is a small, relationship-driven market. The formal SME base is thin and concentrated in Port Moresby and Lae. A foreign solo founder can legally sell software there: PNG is not under US, EU or UK sanctions, and the forex shortage that used to block offshore payments eased a lot in 2025–26. The PNG 100 CEO Survey 2026 ranks forex shortage as the #10 business impediment, down from #3. The one real *why now* is the IRC's **GST Monitoring System (GMS)**, which uses TaxCore (the same technology as Fiji and Samoa) and is being rolled out in phases to point of sale (POS) through 2026. That aside, I found no standalone opportunity strong enough to build for PNG alone. The best ideas work only as an add-on to a Pacific (Fiji, Samoa, PNG TaxCore) or Asia-Pacific (EUDR origin) product.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Retail / hospitality / wholesale (GST-registered) | Connecting POS and invoicing to the IRC GST Monitoring System (TaxCore) | **Candidate (weak to moderate)** | Real mandatory trigger in 2026, but rules and accreditation details are unpublished, and DTI/VirtualFlex plus local POS dealers will capture much of it |
| Coffee / cocoa exporters and cooperatives | EUDR geolocation plus due-diligence data package per export lot | **Candidate (weak)** | Real requirement from 30 Dec 2026 (or 30 Jun 2027 for micro and small operators), but buyers, NGOs and global traceability SaaS already cover it, and there are few PNG exporters |
| Employers (all sectors) | Fortnightly Salary or Wages Tax (SWT) plus superannuation remittance (Nasfund / Nambawan) | **Candidate (weak) / mostly too competitive** | Mandatory and frequent, but already covered by an Odoo PNG payroll module, EOR providers and local bureaus |
| Customs brokers / freight forwarders | Lodging entries in ASYCUDA World; multi-agency permits | Rejected | ASYCUDA World has been web-based at all ports since 2019, the single window is not due until 31 Dec 2030, and there are very few brokers |
| Accountants / tax agents | Monthly GST and SWT filing via myIRC; preparing for ITAS | Rejected for now | ITAS (new tax system) is delayed past mid-2026 and its specs are unknown, so building ahead of the portal is too risky |

## Opportunities

### Opportunity: GMS/TaxCore compliance bridge for small PNG retailers' existing POS and invoicing

**Industry:**
Retail, wholesale, hospitality, fuel and other GST-registered B2C businesses in high-consumption, high-risk sectors (IRC phases rollout by sector).

**Buyer:**
Owner or finance manager of a single- or multi-outlet retailer or wholesaler using a small or locally installed POS (or invoicing from Excel, MYOB or Xero). Secondary buyer: local POS resellers or IT shops who need a certified connector to keep their clients.

**Trigger / Why now:**
In 2026 the IRC started a phased rollout of the GST Monitoring System. It links directly to business POS to capture real-time transaction data so the IRC can pre-fill GST returns. It is built with VirtualFlex Ltd and Data Tech International (DTI) on TaxCore, already used in Fiji, Samoa and Serbia, and is meant to be fully operational by the end of 2026. Businesses are told to update their pricing, invoicing and accounting systems.

**Current workflow:**
1. Sales are rung up on an older POS or written as invoices in Excel or accounting software.
2. Each month an accountant aggregates sales and files the GST return through myIRC by the 21st.
3. Under GMS, each fiscal receipt or invoice must be signed and reported in real time through a TaxCore-compliant SDC (fiscal device, or a virtual/electronic SDC). Older POS cannot do this without vendor work *(inferred from how TaxCore works in Fiji; PNG specifics unverified)*.
4. Businesses whose POS vendor will not or cannot integrate face switching POS or manual workarounds.

**Pain:**
The requirement is mandatory, its timing is uncertain, and it applies to every sale. In Fiji, the same TaxCore rollout forced businesses onto accredited POS systems *(unverified for PNG)*. Penalties and accreditation rules for PNG have not been published. PwC notes that "administrative and technical details for taxpayers have yet to be released".

**Existing solutions:**
- DTI / VirtualFlex (TaxCore) themselves, which likely supply the SDC component and a basic invoicing option *(unverified for PNG)*.
- International POS vendors already accredited for Fiji TaxCore, who may extend to PNG *(unverified)*.
- Local POS and IT resellers in Port Moresby and Lae.
- Odoo partners (Odoo already ships PNG localisation modules, for example `l10n_pg_payroll`).

**The gap:**
A cheap connector that lets an existing non-accredited POS or invoicing system (Excel, Xero, MYOB, a bespoke POS) push receipts to a TaxCore SDC and print the compliant QR or receipt, without replacing the POS. The same connector could serve Fiji, Samoa and PNG.

**Possible product:**
Middleware or a lightweight web invoicing and POS-receipt app that implements the TaxCore API (E-SDC/V-SDC), plus a reconciliation dashboard comparing GMS-reported GST with the GST return the accountant files on myIRC.

**MVP:**
A Xero/MYOB/CSV-to-TaxCore invoice signer for B2B wholesalers (invoice-based, no real-time till integration), plus a monthly GMS-vs-ledger reconciliation report.

**Pricing hypothesis:**
K150–400 per outlet per month (about US$40–100). *Estimate.*

**How to find first customers:**
IRC sector-phase announcements, PNG Chamber of Commerce and Industry and Port Moresby/Lae chamber member lists, and partnerships with local POS resellers and accounting firms (PwC, KPMG and Deloitte PNG publish GMS commentary and could refer clients).

**Risks:**
- An accreditation or certification process with the IRC/TaxCore may exclude small foreign vendors.
- DTI may ship a free web invoicing portal.
- Rollout delays; IRC projects in PNG often slip.
- Small addressable base: GST-registered retailers number in the low thousands *(estimate, unverified)*.

**Kill condition:**
The IRC publishes rules requiring PNG-located accredited vendors or hardware fiscal devices only, or provides a free TaxCore web invoicing tool that covers small businesses.

**Score:** 5/10

**Sources:**
- https://www.nbc.com.pg/post/37057/irc-begins-phased-rollout-of-gst-monitoring-system
- https://pnghausbung.com/irc-launches-gst-monitoring-system-project/
- https://www.pwc.com/pg/en/publications/png-pulse-keeping-you-informed/png-pulse-may-2026.html
- https://www.pwc.com/pg/en/newsletters/epb-newsletters/Private%20Newsletter%20-%20Issue%2014%20(March%202026).pdf
- https://www.businessadvantagepng.com/dramatic-improvement-in-forex-availability-provides-relief-for-papua-new-guinea-businesses/

---

### Opportunity: EUDR lot-level due-diligence pack for PNG coffee and cocoa exporters and cooperatives

**Industry:**
Coffee and cocoa export (mostly smallholder; coffee exports run through the CIC Export Office in Lae).

**Buyer:**
Export or compliance manager at a CIC-registered coffee exporter or Cocoa Board-licensed cocoa exporter, or the manager of a Fairtrade or organic cooperative selling to the EU.

**Trigger / Why now:**
EUDR applies from 30 Dec 2026 (30 Jun 2027 for micro and small operators). EU importers must submit Due Diligence Statements with plot geolocation in TRACES. Fairtrade NAPP is already training PNG cooperatives to collect geolocation data (49 producer organisations across 9 countries, including PNG). JDE Peet's has run satellite deforestation monitoring in PNG since 2024.

**Current workflow:**
1. Field officers map plots with GPS devices, phone apps or Google Maps (Fairtrade training).
2. Polygons and farmer lists are kept in spreadsheets or a buyer-supplied app.
3. For each export lot, the exporter assembles the list of supplying plots and sends geodata and legality documents to the EU buyer by email.
4. Separately, CIC export documents (grade, quality certificate, Online Export Manager System) and NAQIA phytosanitary papers are prepared.

**Pain:**
PNG land is mostly customary, with unclear tenure. One industry source calls PNG "high-risk" for traceability. That is *unverified*, and it conflicts with the EU's 2025 country benchmarking, which I recall placed only four countries in the high-risk tier; check this before relying on it. Aggregation through middlemen breaks the link between a lot and its plots.

**Existing solutions:**
- Global traceability SaaS: TraceX, Meridia, Farmforce, Koltiva, Coolx.
- Buyer-provided systems (JDE Peet's).
- Free tools and support from Fairtrade NAPP, plus donor programmes.
- Spreadsheets.

**The gap:**
Joining up three things for each lot in the PNG context: the plot list for that lot, CIC grading and export paperwork, and the EU buyer's DDS data format. It also has to work for customary-land evidence and for cooperatives with patchy connectivity.

**Possible product:**
An offline-capable lot builder that links mapped plots to purchase receipts and export lots, then emits a buyer-ready EUDR GeoJSON and evidence pack alongside the CIC export document checklist.

**MVP:**
A web app that imports plot GeoJSON or KML plus a purchase CSV, assigns purchases to lots, runs a basic post-2020 forest-loss overlay using public data, and exports a TRACES-compatible GeoJSON per lot.

**Pricing hypothesis:**
US$100–300 per exporter per month, or US$20–50 per export lot. *Estimate.*

**How to find first customers:**
CIC exporter register, Cocoa Board exporter list, and the Fairtrade NAPP PNG producer list.

**Risks:**
- The market is tiny: probably a few dozen active exporters *(estimate, unverified)*.
- Well-funded global competitors already offer this.
- Buyers or donors provide tools for free.
- EUDR has been delayed and simplified repeatedly.
- The EU is not PNG's dominant coffee or cocoa destination *(unverified)*.

**Kill condition:**
Interviews show that EU buyers or Fairtrade already supply a free tool that PNG exporters use, or that fewer than about 15 PNG exporters ship to the EU.

**Score:** 4/10. Only viable as a PNG module inside a multi-origin Pacific/Asia EUDR product.

**Sources:**
- https://www.fairtrade.net/en/get-involved/news/geolocation-data-project-advances-eudr-readiness-in-papua-new-guinea.html
- https://www.confectioneryproduction.com/news/54078/fairtrade-unveils-papua-new-guinea-geolocation-data-training-for-eudr-compliance/
- https://www.coolset.com/academy/the-eu-deforestation-regulation-eudr-what-businesses-need-to-know-and-do
- https://www.developmentaid.org/organizations/view/157689/cic-papua-new-guinea
- https://emtv.com.pg/cic-and-phama-plus-sign-mou-for-higher-value-coffee/
- https://tracextech.com/eudr-coffee-supply-chain-examples/

---

### Opportunity: SWT and super remittance file generator for SMEs on Xero/MYOB

**Industry:**
Any employer, but especially SMEs and NGOs with 15 or more staff, the threshold at which superannuation becomes compulsory.

**Buyer:**
Office manager or accountant running payroll fortnightly in a spreadsheet or in accounting software without PNG payroll.

**Trigger / Why now:**
There is no strong new trigger. The upcoming ITAS e-filing system (originally due mid-2026, now delayed) may change SWT return formats.

**Current workflow:**
1. Compute fortnightly SWT using IRC tables (0% up to K20,000, then 30–42%).
2. Compute super contributions: 8.4% from the employer and 6% from the employee.
3. Prepare the SWT remittance for the IRC.
4. Prepare separate contribution schedules for Nasfund and Nambawan Super.
5. Re-key the data into each portal or form.

**Pain:**
The work is mandatory, recurs every fortnight, and is error-prone. I found no direct complaints.

**Existing solutions:**
- Odoo `l10n_pg_payroll` module (SWT, super schedules, IRC/fund remittance summaries).
- EOR and global payroll providers (Topsource, G-P, Rivermate).
- Local payroll bureaus and accounting firms.
- Fund employer portals.

**The gap:**
Only a narrow one: SMEs on Xero or MYOB without a PNG payroll module, who want the fund and IRC files without moving to Odoo.

**Possible product:**
An add-on that takes a payroll export and produces SWT and Nasfund/Nambawan remittance files with validation.

**MVP:**
Upload a CSV and get the SWT schedule plus fund contribution files.

**Pricing hypothesis:**
K100–250 per month. *Estimate.*

**How to find first customers:**
PNG Chamber of Commerce and Industry members, and Xero/MYOB partner accountants in Port Moresby.

**Risks:**
- Odoo and the bureaus already cover it.
- Fund file formats may not be public.
- The market is small.

**Kill condition:**
Nasfund and Nambawan accept a standard CSV that Xero or MYOB can already produce, or ITAS bundles SWT calculation.

**Score:** 3/10

**Sources:**
- https://apps.odoo.com/apps/modules/19.0/l10n_pg_payroll
- https://topsourceworldwide.com/global-payroll/papua-new-guinea/
- https://irc.gov.pg/pages/downloadable-resources/swt-resources
- https://www.pwc.com/pg/en/publications/png-pulse-keeping-you-informed/png-pulse-may-2026.html

## Rejected after competitor research

- **Customs broker ASYCUDA data-entry automation.** ASYCUDA World (UNCTAD) has been web-based at all PNG ports since 2019. The national single window is not due until 31 Dec 2030, the broker population is small, and there is no new trigger. Killed by ASYCUDA World plus market size. Sources: https://tfadatabase.org/en/members/papua-new-guinea/technical-assistance-projects/article-10-4
- **ITAS/myIRC filing helper for accountants.** ITAS is contracted but delayed and has no published specs. The Big-4 firms (PwC, KPMG, Deloitte PNG) dominate advice for the larger taxpayers. Killed by timing and incumbent advisers. Sources: https://www.pwc.com/pg/en/publications/png-pulse-keeping-you-informed/png-pulse-may-2026.html, https://assets.kpmg.com/content/dam/kpmg/pg/pdf/insights/kundu-2025/KPMG-PNG-Kundu-April-2025.pdf

## Attractive problem, poor distribution

- **EUDR traceability for PNG smallholder exporters.** The problem is real, but the buyer base is a few dozen exporters, and buyers and NGOs give out free tools.
- **Mining and LNG subcontractor compliance** (local-content reporting, safety documentation). Not researched in depth. Buyers are reachable only through enterprise procurement by majors, which fails the brief's distribution test.

## Too competitive

- **PNG payroll (SWT plus superannuation).** Covered by the Odoo PNG payroll module, EOR providers and local bureaus.

## Accessibility notes

PNG is accessible to a foreign solo founder. It is not sanctioned, and forex for offshore payments improved sharply in 2025–26. Practical hurdles are still significant: trust-based sales usually need an on-the-ground partner, internet is patchy outside the main cities, and TaxCore accreditation may be required for GMS.
