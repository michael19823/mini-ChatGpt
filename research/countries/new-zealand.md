# New Zealand: indie-hacker opportunity research

Research date: 2026-10-04. Budget used: about 13 searches (WebSearch only; WebFetch blocked). The market is small (about 5M people) with mature SaaS, high digitisation and light regulation. Many pain points are already served. Accessibility: open market. A foreign solo founder can sell without sanctions or data-localisation problems, and NZD payments via Stripe are straightforward.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Building compliance (BWOF / IQP) | Annual Form 12A collection and BWOF submission to council | Candidate (Opp 1) | Mandatory, annual plus recurring inspections, fragmented across about 66 councils. Incumbents exist (BC Group, ERS). |
| Animal-product and plant exporters | Export certificate requests moving to MPI Trade Certification (animal products from 17 Aug 2026) | Candidate (Opp 2) | Fresh system change. Unclear whether a software layer is needed or permitted. |
| Micro-abattoirs and small food processors | RMP / Food Control Plan records and verification | Candidate (Opp 3) | New 2025-26 micro-abattoir RMP template. Tiny buyer pool. |
| Electricians | Certificate of Compliance and Record of Work | Rejected | Many job-management apps (Tradify, GoCanvas forms and similar) already generate CoCs. |
| Building consents | Applicant submission to the council portal | Rejected | Councils are moving between Simpli, Objective Build and Consentit. Reform (voluntary BCA consolidation, bill expected 2026) is unstable. Buyer is council procurement. |
| Contractor H&S prequalification | SiteWise (Site Safe) assessments and annual renewals | Rejected | Site Safe is dominant and cheap, and councils and the Ministry of Education adopt it. |
| Waste facility operators | Waste levy reporting (Activity Category Reporting; levy $70/t from 1 July 2026) | Too narrow | Small number of facility operators. Government portal exists. |
| Forestry ETS | Mandatory emissions returns (current period 1 Jan to 30 Jun 2026) | Poor distribution | Seasonal, and about 80% of participants are small and use default look-up tables. Forestry consultants already do this. |
| Climate and modern slavery reporting | CRD thresholds raised; modern slavery bill only above NZ$100m revenue | Rejected | Regimes are shrinking or aimed at enterprises. |

## Opportunities

### Opportunity: BWOF Evidence Pack for Small Property Managers and IQP Firms

**Industry:**
Commercial property management / fire and building services compliance

**Buyer:**
Small commercial property managers, body-corporate managers and small IQP firms (fire, backflow, lift, HVAC) that hold many buildings with compliance schedules.

**Trigger / Why now:**
No new law. The trigger is that building-consent and council systems are churning in 2026 (Simpli rolled out 15 June 2026 at some councils; others are moving to Objective Build). Annual BWOF submissions go to different councils with different portals and forms. This is a weak trigger and is flagged as such.

**Current workflow:**
1. The owner or agent tracks the compliance schedule's specified systems in a spreadsheet.
2. They chase each IQP for a signed Form 12A, plus any reports.
3. They assemble the BWOF with all 12As and send it to the council by email or portal before the anniversary date.
4. They publicly display a copy in the building.
5. Late or missing 12As force them to chase the IQP again or risk an expired BWOF.

**Pain:**
The BWOF cannot be issued without every Form 12A (building.govt.nz). Anniversary dates differ per building. Evidence for pain is structural (the process itself) rather than complaints. Unverified: actual hours or penalty rates.

**Existing solutions:**
- BC Group offers web-based BWOF management and council submission as a service (bcgroup.co.nz).
- ERS (ers.co.nz) offers BWOF compliance services.
- Councils' own guidance and forms.
- General asset or maintenance tools and spreadsheets.
- Other fire-compliance platforms probably exist (unverified).

**The gap:**
Existing players are mainly service providers rather than self-serve, cheap tools for a property manager's own portfolio. Council-specific submission format handling is probably thin. Unverified.

**Possible product:**
A self-serve tracker where IQPs upload or e-sign Form 12As via magic links, with automatic chasing and a ready-to-send BWOF pack per council.

**MVP:**
Building and compliance-schedule register, due-date engine, IQP upload portal, auto-reminders, one-click zip/PDF pack and cover email per council.

**Pricing hypothesis:**
NZ$8-15 per building per month, or NZ$99-299 per month per manager. Estimate.

**How to find first customers:**
Council BWOF and compliance-schedule lists (public in some councils), IQP registers kept by councils, Property Council NZ and IPM member lists, LinkedIn.

**Risks:**
Incumbent services (BC Group) could undercut. Annual cycle per building. Total market is small. Buyers may prefer outsourcing to a service.

**Kill condition:**
Interviews show managers already outsource BWOF to BC Group or ERS at low cost, or councils reject third-party submission.

**Score:** 5/10

**Sources:**
- https://www.building.govt.nz/managing-buildings/managing-your-bwof/
- https://www.building.govt.nz/managing-buildings/managing-your-bwof/inspection-and-maintenance-of-specified-systems
- https://bcgroup.co.nz/services
- https://ers.co.nz/building-warrant-of-fitness
- https://cdc.govt.nz/simpli-for-building-consents/

### Opportunity: MPI Trade Certification Request Assistant for Small Exporters and Export Agents

**Industry:**
Food and agricultural exports (animal products, then other sectors)

**Buyer:**
Small and mid-sized exporters, cold stores and freight forwarders or export agents who raise export certificates.

**Trigger / Why now:**
From 17 August 2026 MPI Trade Certification replaced AP E-cert for most animal-product export certification. Some processes (premises and product registration) stay in AP E-cert until the 14 September release. Plant products moved in March 2026 and wine in 2024. MPI is also consulting on charges (cost recovery) for the system.

**Current workflow:**
1. The exporter or agent gathers product, consignment and premises data from ERP, spreadsheets and cold-store records.
2. They key it into MPI Trade Certification to request each export certificate.
3. They check importing-country requirements and attach transfer documents.
4. They fix rejections and re-request.
5. They reconcile certificates against shipments and invoices.

**Pain:**
System change forces retraining and re-keying. Dual-system period for some processes. Unverified: complaint volume and whether an API is available for third-party software.

**Existing solutions:**
- MPI's own portal and user guides.
- Customs and freight-forwarder platforms (names unverified).
- Exporter ERPs.
- Consultants and brokers.

**The gap:**
Unknown. The critical unknown is whether MPI exposes an API or bulk-upload. Without one, only a data-prep and checklist layer is possible.

**Possible product:**
A pre-validation and templating tool that turns consignment spreadsheets into MPI-ready entries with country-requirement checklists, plus a certificate-to-shipment reconciliation log.

**MVP:**
Spreadsheet or CSV importer, per-market checklist rules for 2-3 products (for example meat and dairy), and an export tracker.

**Pricing hypothesis:**
NZ$100-300 per month per exporter. Estimate.

**How to find first customers:**
MPI-registered exporter and premises registers, NZ Customs broker lists, Export NZ and Meat Industry Association member directories.

**Risks:**
Integration access, large incumbents (meat and dairy majors have in-house teams), sector-by-sector transition ending soon, and a small number of mid-sized buyers.

**Kill condition:**
MPI offers no API or bulk upload, or interviews show exporters see the new system as simpler than before.

**Score:** 4/10

**Sources:**
- https://www.mpi.govt.nz/export/export-requirements/export-certification/animal-product-export-certificates
- https://www.mpi.govt.nz/export/exporting-from-nz-how-it-works/mpis-role-in-exporting/replacing-our-trade-certification-systems
- https://www.mpi.govt.nz/export/export-requirements/export-certification/how-to-use-mpi-trade-certification
- https://www.mpi.govt.nz/consultations/proposed-amendments-to-the-animal-products-notice-official-assurance-requirements-2026

### Opportunity: Records and Verification Pack for Micro-Abattoirs and Small Food Operators

**Industry:**
Small meat processing and food manufacturing (RMP, Food Control Plan and National Programme operators)

**Buyer:**
Owners of micro-abattoirs, small processors and National Programme 2 and 3 food businesses.

**Trigger / Why now:**
A new low-throughput RMP template for micro-abattoirs (reduced sampling, for example a minimum of 30 carcasses in the first season then 12), plus Food Act renewals (Food Control Plans annually, National Programmes every two years) and verifier visits. Remote verification is available for some low-risk operators.

**Current workflow:**
1. Daily and batch records are kept on paper or spreadsheets.
2. Corrective actions and sampling results are logged by hand.
3. Before verification, the owner collects records for the verifier.
4. Registration renewal is done on council or MPI forms.

**Pain:**
Record keeping and audit prep burden on tiny teams. Evidence is regulatory (template and verification requirements) rather than complaints. Unverified: how many operators use paper.

**Existing solutions:**
- MPI templates and guidance.
- Verifiers such as AsureQuality.
- Generic food-safety apps (names not verified).
- Spreadsheets.

**The gap:**
Template-specific digital records with a verifier-ready export. Unverified whether this is already served by generic food-safety apps.

**Possible product:**
Template-aligned digital record book (sampling, temperature, corrective action) with a one-click verification pack and renewal reminders.

**MVP:**
Micro-abattoir RMP template forms, sampling schedule tracker, PDF export for verifier.

**Pricing hypothesis:**
NZ$30-60 per month. Estimate.

**How to find first customers:**
MPI public registers of RMP and Food Act operators, council food-premises lists, farmers' market associations.

**Risks:**
Very small buyer pool (micro-abattoirs are likely in the tens), low willingness to pay, generic apps.

**Kill condition:**
Fewer than about 100 reachable operators or interviews show paper is fine and verifiers supply their own tools.

**Score:** 3/10

**Sources:**
- https://foodprocessing.com.au/content/business-solutions/news/new-zealand-updates-micro-abattoir-risk-management-program-724777959
- https://www.asurequality.com/industries/food/food-control-plan-and-national-programme-verification-nz-food-act-2014/
- https://www.mpi.govt.nz/food-business/meat-game-processing-requirements/meat-processing/primary-meat-processing

## Rejected after competitor research

- **Electrical Certificate of Compliance / Record of Work:** killed by existing tools. GoCanvas has NZ CoC forms, and Tradify and similar trade job-management apps cover CoC generation (Tradify guide). Worksafe and Energy Safety registers are not a workflow gap.
- **Contractor H&S prequalification:** killed by Site Safe's SiteWise, which is recognised by many councils and the Ministry of Education.
- **Building consent submission tools:** councils are choosing their own platforms (Simpli, Objective, Consentit) and reform is in flux. Buyer is council procurement.
- **Climate disclosure and modern slavery tools:** thresholds raised, scope aimed at large entities.

## Attractive problem, poor distribution

- **Forestry ETS emissions returns:** about 80% of participants are small, but the period ended 30 June 2026 and forestry consultants already prepare returns.
- **Waste levy reporting for facility operators:** mandatory but a very small operator set and a government portal.

## Too competitive

- None identified. NZ trades and field-service software (Tradify and similar) already crowds adjacent workflows.

## Overall assessment

NZ has no strong standalone opportunity found within the search budget. Best bet is the BWOF pack (5/10), and only if interviews show owners are underserved by BC Group and ERS. A tool built for NZ could be sold as an add-on to Australian compliance products, but that was not researched. Several competitor names above are unverified and need follow-up.
