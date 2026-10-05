# Central African Republic (CAR / Centrafrique) — Opportunity Research

Research date: 2026-10-05. Search budget: 4 (fragile / conflict-affected, very small formal economy). Languages: French, English.

## Bottom line

**No viable standalone indie-software opportunity found.** CAR is legally accessible but commercially thin. There is
one real regulatory trigger (the mandatory e-Tax platform, live since March 2025), but the reachable buyer pool is a few
hundred firms in Bangui with weak connectivity and low willingness to pay. The only sensible approach is to serve CAR as an
**add-on to a CEMAC / Congo Basin product built for Cameroon** (or Congo / Gabon). Cameroon is the natural hub: same
OHADA/SYSCOHADA accounting framework, same CFA franc (XAF), the same French-language admin culture, and most CAR timber
leaves through the port of Douala.

## Accessibility check

- **Sanctions:** UN sanctions (UNSC 2127 regime, renewed to 31 July 2026) and the matching EU, UK, US/OFAC, Swiss and Japanese
  programmes are **targeted**: arms embargo on armed groups, asset freezes and travel bans on listed people. The 2024
  UNSC Res. 2745 lifted the arms embargo on government forces. There is no sectoral ban on software or IT services.
  Selling SaaS to ordinary CAR companies is legal. Buyers and owners must be screened against the lists, because armed-group
  links to mining and timber are a real risk.
- **Internet:** the ITU reported 13.8% internet penetration for 2024. The authorities claim about 30% in 2025 (unverified).
  Service is poor and costly; fibre is being rolled out only in the south-west.
- **Payments:** XAF zone (BEAC) with mobile money (Orange, Telecel). Card or Stripe collection from CAR buyers is impractical.
  You would invoice in XAF or EUR through a Cameroon or French entity (practical friction, not a legal ban).
- **Verdict:** legally accessible, but in practice very hard to reach. It does not justify a standalone go-to-market.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Accountants / fiduciaries (cabinets comptables) | E-Tax télé-déclaration & télépaiement for client companies (mandatory since 22 Mar 2025) | Weak (add-on only) | Real trigger, but only about 626 large and medium firms registered; the government platform is free; buyers are a tiny pool |
| Timber / forestry concessions | EUDR due-diligence and geolocation package for EU buyers (application from end-2026) | Weak (add-on to Cameroon) | About a dozen concessions (estimate); most volume goes to non-EU buyers; established traceability vendors already sell to the region |
| Coffee exporters | EUDR plot geolocation | Reject | Volumes are tiny and collection is disrupted by insecurity; generic EUDR tools already exist |
| Diamonds / gold mining | Kimberley Process certificates, production reporting | Reject | Governance and sanctions-exposure risk is high; the work runs through a state/KP channel; the buyers are not a fit for an indie founder |
| Customs / freight forwarding (Bangui–Douala corridor) | Transit documents and customs declarations | Reject | Done through the national customs system and Cameroon-side forwarders; better treated as a Cameroon opportunity |
| NGOs / humanitarian contractors | Donor reporting, payroll for local staff | Reject | Generic workflows run on HQ systems (international NGOs); not a local SME buyer |

## Opportunities

### Opportunity: E-Tax filing workbench for CAR accounting firms (CEMAC add-on)

**Industry:**
Accounting / tax fiduciaries

**Buyer:**
Managing partner of a Bangui accounting firm (cabinet comptable / expert-comptable), or the finance head of a large or medium company registered with the DGID

**Trigger / Why now:**
The DGID e-Tax platform launched on 24 March 2025: NIU registration, télé-déclaration, télépaiement, and cross-checking against multiple data sources. All tax filing and payment is supposed to be online since 22 March 2025. In August 2025 the Minister of Finance threatened sanctions because more than half of the targeted taxpayers were still not using it. At that point 301 large and 325 medium enterprises were registered.

**Current workflow:**
1. The firm keeps SYSCOHADA books in a local or French accounting package, or in Excel.
2. It recomputes monthly VAT and withholding returns by hand.
3. It types the figures into the e-Tax web forms for each client, often over a poor connection.
4. It pays online or via the bank, then downloads and files the receipts.
5. It reconciles against DGID cross-checks when notices arrive.

**Pain:**
The filing is mandatory and penalised. Adoption lagged (more than 50% non-use five months after launch), connectivity is poor, and the same figures are entered twice (accounting system, then portal).

**Existing solutions:**
- The free government e-Tax portal
- SYSCOHADA accounting packages used in CEMAC (for example Sage, plus local packages): unverified for CAR specifically
- Manual entry by the firm's own staff or outside fiduciaries

**The gap:**
No known tool maps SYSCOHADA trial-balance or VAT data into the exact CAR e-Tax returns, and none keeps an offline-first queue for low-bandwidth filing. This is unverified: the e-Tax forms and whether any API exists were not inspected.

**Possible product:**
A multi-client filing calendar plus a return pre-builder. It takes an Excel or accounting export and produces CAR (and Cameroon) return values, plus a checklist and archive of receipts for each client.

**MVP:**
An Excel-template-to-return calculator for monthly VAT and IRPP withholding, with a filing calendar for 20–50 clients.

**Pricing hypothesis:**
XAF 30,000–60,000 (about €45–90) per firm per month. This is an estimate; willingness to pay is unproven.

**How to find first customers:**
- Ordre national des experts-comptables / DGID-approved fiduciaries (directory unverified)
- Chamber of Commerce (CCIMA) members in Bangui
- Cross-sell from a Cameroon customer base

**Risks:**
- The buyer pool is tiny (likely fewer than 50 firms and 626 registered companies)
- The government portal may change or add its own import features
- Payment collection and support depend on connectivity
- Security conditions make in-person sales difficult

**Kill condition:**
The e-Tax returns cannot be pre-filled or uploaded (manual web forms only, nothing to automate), or fewer than 10 accounting firms exist that would pay.

**Score:** 3/10 (standalone); possibly 5/10 as a module of a Cameroon/CEMAC tax product

**Sources:**
- https://www.osiris.sn/la-centrafrique-lance-officiellement-e-tax-sa-plateforme-de-paiement-d-impots.html
- https://ecomatin.net/fiscalite-bangui-menace-de-sanctionner-les-grandes-entreprises-qui-boudent-la-plateforme-e-tax
- https://ecomatin.net/centrafrique-malgre-la-mauvaise-connectivite-du-pays-les-autorites-optent-pour-le-paiement-des-impots-en-ligne
- https://www.wearetech.africa/fr/fils/actualites/tech/la-centrafrique-adopte-le-tax-pour-mieux-percevoir-les-impots
- https://www.digitalbusiness.africa/rca-la-digitalisation-des-paiements-des-taxes-et-impots-simpose/

### Opportunity: EUDR/legality evidence pack for CAR timber exported via Douala (add-on to Cameroon)

**Industry:**
Forestry / timber export

**Buyer:**
Export or compliance manager at a CAR forest concession (PEA holder) selling sawn wood or logs to EU importers through Douala

**Trigger / Why now:**
The EUDR applies from end-2026 for large operators and mid-2027 for small and micro operators. EU importers need geolocation, legality and traceability data for each lot. TRAFFIC/ATIBT published a guide on the Congo Basin–EU legal timber trade in July 2025.

**Current workflow:**
1. The concession tracks logs on paper or spreadsheets.
2. It compiles concession permits, tax receipts and transport documents as PDFs.
3. It sends a different document pack to each EU importer.
4. Cameroon transit and port paperwork is handled separately.

**Pain:**
EU buyers need structured due-diligence data. Producers in the Central African Republic carry a high risk profile, so evidence demands are heavier.

**Existing solutions:**
- TraceX (EUDR guide for African timber)
- Certification bodies and auditors such as SCS Global
- Consultants and NGO programmes (ATIBT, TRAFFIC)
- Importer-side due-diligence platforms

**The gap:**
A cheap, CAR-specific legality checklist mapped to CAR forestry law plus the Cameroon transit documents, exported per lot in the formats importers use. This gap is unverified.

**Possible product:**
A lot-based evidence pack builder: concession polygon, permits, tax receipts and transit documents in, an importer-ready EUDR package out.

**MVP:**
A per-lot document checklist plus GeoJSON polygon export and a PDF/ZIP pack.

**Pricing hypothesis:**
€150–300 per month per concession. This is an estimate.

**How to find first customers:**
- The CAR Ministry of Water and Forests list of PEA concession holders (unverified)
- ATIBT membership
- EU importers of CAR timber

**Risks:**
- Very few buyers (about 10–15 concessions; estimate)
- Much of the volume goes to non-EU (Asian) markets, so the EUDR does not apply to it
- EUDR timing has slipped before
- Sanctions and reputational screening of concession owners

**Kill condition:**
Less than 20% of CAR timber goes to the EU, or importers already standardise on a free or industry-funded tool.

**Score:** 2/10 (standalone); include only as a CAR checklist inside a Cameroon/Congo Basin EUDR timber product

**Sources:**
- https://africasustainabilitymatters.com/africas-cocoa-coffee-and-timber-exports-face-new-eu-timeline-under-eu-deforestation-rules/
- https://www.atibt.org/en/news/13668/publication-of-a-practical-guide-on-legal-timber-trade-between-the-congo-basin-and-the-eu
- https://tracextech.com/?p=18506
- https://www.ecofinagency.com/news/1407-57380-eu-closes-door-on-deforestation-law-delays-putting-african-exporters-on-the-clock

## Rejected after competitor research

- **Coffee EUDR traceability:** killed by the generic EUDR traceability vendors (TraceX and others), certification bodies, and the very small, insecurity-disrupted export volume.
- **Customs / transit paperwork on the Bangui–Douala corridor:** the Cameroon-side forwarders and the national customs systems own this workflow. Pursue it, if at all, in the Cameroon track.
- **Diamond/gold Kimberley Process documentation:** a state-run KP channel plus a high sanctions/governance risk. It is not a fit for a solo founder.

## Attractive problem, poor distribution

- CAR e-Tax filing (above): the mandate is real and the pain is real, but there are only about 626 registered large and medium firms, few accounting firms, roughly 14–30% internet penetration, and payment friction.

## Too competitive

- None at local level. Regionally, EUDR traceability is crowded (TraceX, certification bodies, importer platforms).

## Sources (accessibility)

- UN sanctions renewal to 31 July 2026: https://exportcompliancedaily.com/news/2025/07/31/UN-Renews-Central-African-Republic-Sanctions-2507300034
- EU amendment after UNSC Res. 2745: https://www.cgc.org.cy/en/eu-amends-central-african-republic-sanctions-regulation/
- UN SC2127 programme: https://www.opensanctions.org/programs/UN-SC2127
- UK guidance: https://govdiff.njk.onl/update/2026-03-25T08:41:00+00:00/www.gov.uk/government/publications/central-african-republic-sanctions-guidance
- Internet penetration (ITU 13.8% for 2024): https://ecomatin.net/fiscalite-bangui-menace-de-sanctionner-les-grandes-entreprises-qui-boudent-la-plateforme-e-tax
