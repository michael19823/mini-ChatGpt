# Netherlands: opportunity research (2026-10-04)

Method note: 9 web searches (EN/NL), no page fetches. Dutch market is highly digitised, with mature vertical SaaS, so most ideas are crowded. Competitor diligence was shallow (search-snippet level); anything not shown in sources is marked "unverified".
Accessibility: fully open market (EU, iDEAL/SEPA, no sanctions). Dutch-language product and eHerkenning/DigiD-style integrations are the main practical barriers.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Asbestos removal / inventory | New permit system (expected 1 Jan 2027) + new Ascert schema | Candidate (weak-moderate) | Real regulatory trigger, but small buyer pool (a few hundred firms, unverified) |
| Construction installers / small contractors | Wkb consumer dossier (opleverdossier) | Candidate, crowded | Mandatory since 2024, but apps (e.g. DiviD) and Wkb checklists exist |
| Funeral directors | Digital death notification to municipalities | Poor distribution | Government (VNG/KING + BGNU) building one central form; the gap will be closed by the state |
| Refrigeration / F-gas installers | Leak-check logbook, BRL 200 transition ended 29 Mar 2026 | Rejected (thin) | Logbook is routine, existing field-service tools and free logbooks; no new 2026 filing burden verified |
| Transport / logistics | CSRD, emissions reporting | Rejected | CSRD scope cut by EU omnibus (Directive (EU) 2026/470); Dutch implementation delayed |
| Accountants / SMEs | E-invoicing / digital reporting | Too early | B2B e-invoicing mandatory only from 1 Jul 2030; large accounting vendors will cover it |
| Staffing / hiring of freelancers (zzp) | Schijnzelfstandigheid (false self-employment) enforcement | Too competitive / unclear | Fines deferred through 2026; many zzp-compliance tools exist (unverified specifics) |
| Childcare | LRK/GIR register, GGD inspections | Rejected | Government-run registers; existing childcare management software (unverified); no clear gap found |

## Opportunities

### Opportunity: Asbestos Permit and Notification Compliance Tracker

**Industry:**
Asbestos removal contractors and asbestos inventory firms.

**Buyer:**
Owner or quality/compliance manager of asbestos removal firms (saneerders) and inventory firms.

**Trigger / Why now:**
A new asbestos permit system (companies removing asbestos need a permit, with categories from limited to extensive; recognised training for workers) is expected from 1 Jan 2027 under the new EU asbestos directive. Stichting Ascert had a completely new certification scheme ready for adoption on 17 Aug 2026. Precise dates are still subject to final legal anchoring (unverified).

**Current workflow:**
1. Firm reads new rules and maps them to its certificates, permits and staff qualifications.
2. Tracks personal and company certificates and training expiry in spreadsheets or its ERP.
3. For each job: inventory report (SC-540), notification to authorities, worker and clearance records, waste records.
4. Prepares for audits by certification bodies (CBI) and inspectors.

**Pain:**
A new permit system forces re-documentation. Failure means the firm cannot legally operate. Evidence of manual work is inferred, not verified.

**Existing solutions:**
Generic ERP and planning tools for contractors, certification-body portals, consultants. Specific asbestos-vertical vendors were not identified (unverified, needs more diligence).

**The gap:**
Mapping jobs and personnel records to the new permit categories and audit evidence. Possibly nothing exists yet for the 2027 regime.

**Possible product:**
Permit/certificate and training expiry tracker with per-job evidence packs (inventory, notifications, worker records) aligned to the new regime.

**MVP:**
Staff and certificate register with expiry alerts, plus per-job checklist and exportable audit dossier.

**Pricing hypothesis:**
EUR 100-300/month per firm.

**How to find first customers:**
Ascert/CBI certified-company lists, SC-540 certified firms, trade association (likely Aboma/Ascert members, unverified).

**Risks:**
Small market (low hundreds of firms, estimate), rules not final, large contractors use in-house systems.

**Kill condition:**
Final rules are delayed or fold into existing certification-body portals; 5 interviews show no spreadsheet pain.

**Score:** 4.5/10

**Sources:**
- https://www.rijksoverheid.nl/actueel/nieuws/2026/04/09/veiliger-werken-met-asbest-met-nieuw-vergunningstelsel
- https://omgevingsweb.nl/nieuws/asbestschema-2027-certificatieplichtige-werkvelden/
- https://iplo.nl/thema/asbest/nieuws-asbest/2025/voortgang-planning-wijziging-asbestregelgeving/

### Opportunity: Wkb Consumer-Dossier Builder for Small Installers and Contractors

**Industry:**
Construction and installation subcontractors (consequence class 1 building work).

**Buyer:**
Owner or office manager of small installation and building firms.

**Trigger / Why now:**
Wkb in force since 1 Jan 2024 with installers now "contractors of work" responsible for evidence in the consumer dossier. Technieknederland published Wkb developments in July 2026 and trade press reports the system "stands on a weakened foundation", so rules may still shift (unverified details).

**Current workflow:**
1. Installer photographs and documents work on site.
2. Evidence is gathered from several trades and the main contractor.
3. Dossier assembled by hand (PDF/photos/checklists) at completion.
4. Delivered to client / quality assurer.

**Pain:**
Added liability and admin for small firms. Frequency is per project.

**Existing solutions:**
DiviD (construction app with Wkb logbook), Wkb checklists from BouwBeurs/trade groups, inspection software with importable checklists, quality assurers' own tooling.

**The gap:**
Installer-specific, low-effort dossier assembly that merges multiple trades. Unclear whether the gap exists given incumbents.

**Possible product:**
Mobile-first evidence capture that outputs an installer-level opleverdossier per trade.

**MVP:**
Photo and checklist capture to PDF dossier for 2-3 trades (e.g. ventilation, electrical).

**Pricing hypothesis:**
EUR 30-80/month per small firm.

**How to find first customers:**
Installer trade bodies (NVKL, Techniek Nederland), KvK SBI-code lists.

**Risks:**
Direct competitors exist; regulatory uncertainty about the system's future; buyers reluctant to adopt new apps.

**Kill condition:**
Interviews show installers already use DiviD or a quality assurer's tool; or Wkb is scaled back.

**Score:** 3.5/10

**Sources:**
- https://iplo.nl/regelgeving/regels-voor-activiteiten/technische-bouwactiviteit/kwaliteitsborging/privaatrecht-wet-kwaliteitsborging/consumentendossier-opleverdossier-wkb/
- https://leden.technieknederland.nl/stream/20260708-ontwikkelingen-wet-kwaliteitsborging.pdf
- https://omgevingsweb.nl/nieuws/wet-kwaliteitsborging-staat-op-verzwakt-fundament/
- https://apps.apple.com/nl/app/divid/id971765642

## Rejected after competitor research / evidence
- F-gas logbook for refrigeration installers: free downloadable logbook (CoolingPost) and established installer tooling; 2026 BRL 200 change affects certification, not a new filing flow.
- Transport CSRD reporting: scope narrowed by the EU omnibus (Directive (EU) 2026/470); Dutch law still pending.
- Childcare compliance: LRK/GIR are state registers, new version July 2026 (https://duo.nl/zakelijk/kinderopvang/nieuws/nieuwe-versie-lrk-gir-juli-2026.jsp); childcare software market assumed mature (unverified).

## Attractive problem, poor distribution
- Funeral-director death notifications: 75% time saving in pilots, but municipalities, VNG/KING and BGNU are building a central form and eDienst (eHerkenning) per municipality, so the state fixes it. Sources: https://www.binnenlandsbestuur.nl/digitaal/rekenkamer/vng-en-king-werken-aan-centrale-aangifte-overlijden , https://www.binnenlandsbestuur.nl/digitaal/wet-en-regelgeving/digitale-aangifte-overlijden-kan-in-kwart-van-de-tijd

## Too competitive / too early
- zzp compliance (false self-employment): Tax Authority fines deferred for 2026, phase-in to 2030; many tools. https://www.forvismazars.com/nl/en/who-we-are/news-events-and-publications/news/handhaving-op-zzp-ers-vanaf-1-januari
- B2B e-invoicing/digital reporting: mandatory from 1 Jul 2030 (domestic reporting 1 Jul 2031); served by accounting vendors. https://www.dlapiper.com/en/insights/publications/indirect-tax-monthly-alert-series/2026/indirect-tax-monthly-alert-march-2026/e-invoicing-and-digital-reporting-in-the-netherlands-current-status-and-what-lies-ahead
