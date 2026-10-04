# France - opportunity research (2026-10-04)

Research depth: shallow (about 7 searches, no page fetches). Competitor diligence is partial and marked where unverified. Next step is customer interviews, not building.

## Industries screened

| Industry | Workflow | Verdict | Reason |
|---|---|---|---|
| Accounting / all SMEs | B2B e-invoicing and e-reporting (PA, Sept 2026 / Sept 2027) | Too competitive | Dozens of approved platforms (PA) plus Pennylane, Sellsy and accountant-led rollout. |
| Waste transport / BTP earthworks | Trackdechets BSD plus national register (RNDTS merged May 2025) | Candidate | Mandatory, many small operators, free government tool is a web UI. Existing waste ERPs integrate the API. |
| HVAC / refrigeration contractors | Fiche d'intervention plus BSFF (Trackdechets) plus F-Gas | Candidate | Per-job paperwork. Competitor coverage unverified. |
| Healthcare waste (DASRI) | Digital BSDASRI via Trackdechets | Candidate (weak) | Regulatory trigger expected 2026 but I could not confirm the final text. Buyers are fragmented. |
| Large-company sustainability reporting (CSRD) | Supplier questionnaires | Reject | Omnibus (Feb 2026) cut scope to over 1,000 employees and over EUR 450m turnover. |
| Training providers (Qualiopi), DPO, RGE renovation | Not researched beyond one search | Not assessed | No evidence gathered. |

## Opportunity: Trackdechets "register router" for small waste carriers and BTP operators

**Industry:** Waste transport, earthworks, demolition, transit platforms

**Buyer:** Owner or office manager of a small waste carrier, collector or terrassement/demolition firm (often 3-30 staff).

**Trigger / Why now:** RNDTS merged into Trackdechets on 5 May 2025. Road transporters of hazardous waste must use Trackdechets, with register transmission from 1 Jan 2026. Decree no. 2026-433 of 2 June 2026 changed the register transmission deadline to one month (per a law-firm blog, unverified against the decree text).

**Current workflow:**
1. Weighbridge ticket, driver paperwork or an ERP/spreadsheet records each load.
2. Staff re-key BSD data into the Trackdechets web UI, or batch-upload register lines.
3. Staff fix refusals, partial acceptances and corrections, then reconcile with the chronological register and the monthly deadline.

**Pain:** Fines of EUR 750 to 150,000 (EUR 750,000 for a legal entity), suspension of activity and refusal by service providers (HelloPro guide, secondary source). Duplicate entry is implied by the guidance, but I found no first-hand complaints.

**Existing solutions:** Trackdechets web UI and public GraphQL API (free, government). Waste-management ERPs with API integration (named in HelloPro's ERP guide, vendors not verified). Chimirec's integration (large operator). Consultants and DIY spreadsheets.

**The gap:** Probably small operators on Excel or generic transport software with no Trackdechets API link. Unverified; this is the thing to test in interviews.

**Possible product:** Import weighbridge/CSV/ERP exports and push BSDs and register lines through the Trackdechets API. Add a deadline and exception queue for refusals and corrections.

**MVP:** CSV-to-Trackdechets register upload with validation and error report. One flow (BSDD plus register) only.

**Pricing hypothesis:** EUR 49-149 per month per company (estimate).

**How to find first customers:** Trackdechets-registered companies (the public annuaire, if accessible), FNADE and FFB/FNTP member lists, regional DREAL/transport-licence lists.

**Risks:** Trackdechets may add its own bulk upload. Competitors may already integrate. Weak willingness to pay if the UI is tolerable.

**Kill condition:** Interviews show most target firms already use an ERP with Trackdechets sync, or the volume per firm is only a few BSDs a month.

**Score:** 5/10

**Sources:**
- https://www.ecologie.gouv.fr/tracabilite-des-dechets-terres-excavees-et-sediments
- https://blog.landot-avocats.net/2026/07/01/transmission-des-donnees-au-registre-national-trackdechets-nouveaux-delais/amp/
- https://conseils.hellopro.fr/trackdechets-pour-les-transporteurs-obligations-inscription-et-utilisation-4989.html
- https://conseils.hellopro.fr/quel-erp-choisir-pour-la-gestion-des-dechets-4997.html

## Opportunity: Refrigerant fiche d'intervention + BSFF paperwork for HVAC/cold contractors

**Industry:** HVAC and refrigeration contractors

**Buyer:** Owner of a small frigoriste or genie climatique firm.

**Trigger / Why now:** BSFF digitalisation on Trackdechets is mandatory (since 1 Jan 2023). Refrigerant waste must be traced. F-Gas III is tightening HFC rules. Fiche d'intervention is required for every refrigerant handling.

**Current workflow:**
1. Technician fills a paper or PDF fiche d'intervention on site.
2. Office re-enters recovered quantities into the BSFF in Trackdechets, plus any leak-check records.
3. Annual records and equipment inventories are kept in Excel.

**Pain:** Per-job duplication. Evidence is regulatory only; no complaints found.

**Existing solutions:** FFB and Gasco guidance and templates; field-service and maintenance software (unverified whether it covers BSFF); Trackdechets UI.

**The gap:** One job record that produces the fiche, the BSFF and the equipment leak register. Unverified.

**Possible product:** A mobile form that outputs the fiche d'intervention and creates the BSFF via the API.

**MVP:** Fiche plus BSFF only.

**Pricing hypothesis:** EUR 30-80 per month (estimate).

**How to find first customers:** Certified-company lists (attestation de capacite holders, not verified as public), Qualifroid and syndicate member lists.

**Risks:** Existing GMAO and field-service tools may already cover it. Small BSFF volumes.

**Kill condition:** Mainstream field-service tools already generate BSFF, or technicians rarely issue BSFFs.

**Score:** 4/10

**Sources:**
- https://www.ffbatiment.fr/actualites-batiment/actualite-bam/genie-climatique-les-regles-de-traitement-des-dechets-evoluent
- https://gasco-france.com/upload/documents/125/16-la-petite-note-trackdechets.pdf
- https://content.preventionbtp.fr/pdf/droit_de_la_prevention/arrete-du-26-juillet-2022-relatif-aux-bordereaux-de-suivi-des-dechets-dangereux-de-fluides-frigorigenes-et-autres-dechets-dangereux-de-fluides-en-contenants-sous-pression.pdf

## Rejected after competitor research

- **B2B e-invoicing helper for SMEs (deadline Sept 2027):** Heavily served by approved platforms and accounting tools (Pennylane, Sellsy, Dougs and many others). The Sept 2026 and Sept 2027 dates are real, but the space is crowded. Sources: https://www.pennylane.com/fr/fiches-pratiques/facture-electronique/facturation-electronique-dates-cles-et-calendrier , https://www.dougs.fr/blog/liste-pa-facturation-electronique/
- **CSRD supplier-reporting tool:** Scope sharply cut by the Feb 2026 Omnibus, so the trigger has largely gone. Source: https://www.partena-professional.be/fr/node/22413

## Attractive problem, poor distribution

- **DASRI digitalisation for vets and freelance nurses:** The mandate is expected in 2026 but I could not confirm the final text. Buyers are very fragmented and the collector is the natural integrator. Source: https://www.ecologie.gouv.fr/tracabilite-des-dechets-terres-excavees-et-sediments

## Too competitive

- E-invoicing and e-reporting (see above).

## Caveats

France is a very large market and only about 7 searches were run, so many industries in the brief were not covered (pest control, funeral, vet pharmacy, phytosanitary registers, elevators and others). The two candidates rest mostly on secondary sources (HelloPro, FFB). Treat the scores as provisional.
