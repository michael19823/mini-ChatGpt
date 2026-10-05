# Mongolia: Indie Software Opportunity Research

*Research date: 2026-10-04. Market size class: small (about 3.5M people; the economy is concentrated in mining, livestock and cashmere, and Ulaanbaatar). Search budget used: 10 WebSearch calls (English and Mongolian). WebFetch was not used.*

## Accessibility check

- **Sanctions:** Mongolia is not under US, EU or UK sanctions. A foreign solo founder can legally sell software there.
- **Practical barriers:**
  - Almost all buyer-facing material and government portals are in Mongolian Cyrillic.
  - Integration with the tax receipt system (eBarimt PosAPI 3.0) goes through the government's MIXX network. A third-party Odoo module recommends using a local integrator's eBarimt server "due to restrictions of Mongolia's MIXX Network" ([Odoo app](https://apps.odoo.com/apps/modules/18.0/es_mongolian_ebarimt_posapi3), [datacenter.gov.mn MIXX](https://datacenter.gov.mn/service/mixx)). In practice this probably needs a local legal entity or partner. **Unverified** whether a foreign entity can connect directly.
- **Verdict:** accessible, but a small market with a high language and local-partner barrier. In general, a non-Mongolian-speaking solo founder will struggle to win here.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Retail / POS / all VAT payers | eBarimt (PosAPI 3.0) e-receipt issuance and VAT reconciliation; VAT law reform effective 2026-01-01 | Too competitive | Mandatory since 2016. Certified POS vendors, Odoo modules and local integrators already provide the connection. |
| Accounting / payroll bureaus | Monthly social insurance (NDSh) and payroll reporting | Reject | Government digitised 24 of 34 social insurance services via e-Mongolia. Local accounting packages exist (specific names unverified). |
| Mining (emitters) and project developers | Greenhouse-gas MRV under the new Climate Change Law (in force 2026-08-03) | Watchlist (weak opportunity) | Genuine new mandate, but implementing MRV rules are not yet issued. Buyers are few, large and enterprise-procured. |
| Cashmere / livestock exporters | Animal ID, traceability and export documentation | Poor distribution | Donor-driven (FAO, ADB, blockchain pilots). Government MAHIS / livestock registry is being built. Exporter count is small. |
| Meat processors / slaughterhouses | Export certification to China (GACC) and other markets | Poor distribution | Procedure is still paper-based across GASI, the Chamber, standards and customs, but only dozens of exporters. Language and government-relationship heavy. |
| Customs brokers / importers | Electronic declarations and permits | Reject | Customs external portal plus an ADB-funded Single Window (75 permits, extended to 2027). Government is closing the gap. Small broker base. |
| Pharmacies / medicine importers | Registration and import permits under the revised Law on Medicines (procedures adopted May 2025) | Reject | Filing goes through government LICEMED. No serialization / track-and-trace mandate found (unverified). Importer count is small. |
| Mining subcontractors | Supplier qualification (e.g. Oyu Tolgoi SQMS) | Reject | Generic supplier-onboarding document collection, which the brief lists as a trap. Owned by the buyer's own portal. |

## Strongest opportunities

No Mongolian opportunity reaches the brief's bar of mandatory recurring workflow, thousands of reachable SMB buyers, weak competition and a narrow MVP. Two are recorded as the "least weak". Neither is recommended for building. One is time-sensitive and worth watching.

### Opportunity: Climate Change Law GHG MRV reporting pack for mid-size emitters

**Industry:**
Mining subcontractors, coal and power, cement, larger industrial emitters; also carbon project developers.

**Buyer:**
Environment / HSE manager at mid-size mining, energy or industrial companies that fall under the forthcoming MRV procedure; carbon project developers registering credits.

**Trigger / Why now:**
- Parliament adopted Mongolia's first Law on Climate Change on 2026-07-02, in force 2026-08-03.
- Authorities must adopt implementing regulations within six months, i.e. by about early February 2027. These cover GHG measurement, reporting and verification (MRV), a carbon credit registry and the National Climate Change Platform.
- A separate carbon credit registry regulation already exists.

**Current workflow (expected; unverified until the regulations are published):**
1. Collect fuel, electricity and process data from site logs and spreadsheets.
2. Calculate emissions manually or with consultants.
3. Prepare the report in the prescribed format.
4. Submit to the national platform.
5. Undergo verification.

**Pain:**
The framework is new and the reporting format is still unknown. Mining companies already juggle environmental reporting. Emission factors and the reporting template will be new work. This is not yet evidenced by complaints.

**Existing solutions:**
- International carbon accounting SaaS (enterprise-priced, English-only).
- Big 4 and local legal/ESG consultants (PwC Mongolia is already publishing alerts on the law).
- UNDP-supported carbon market readiness work.
- Probably a government platform for submission.

**The gap:**
- A Mongolian-language calculator that uses the official national emission factors and template.
- Export in the exact format the National Climate Change Platform requires.
- Low price, aimed at companies too small for enterprise ESG tools.

**Possible product:**
Spreadsheet-in, regulator-template-out GHG inventory tool using the Mongolian MRV procedure's factors. Optionally adds a verification evidence pack.

**MVP:**
A single-page Scope 1 and 2 calculator (fuel and electricity) that outputs the official report template once it is published.

**Pricing hypothesis:**
$100–300/month per facility, or $1–3k per annual report. This is an estimate. Reporting is probably annual, which lowers frequency.

**How to find first customers:**
- Mining licence holders from the Mineral Resources and Petroleum Authority (MRPAM) cadastre (unverified that it is public in bulk).
- Mongolian National Mining Association members.
- Partnering with local ESG consultants who resell.

**Risks:**
- Regulations may cover only a handful of large emitters.
- The government platform may include its own calculator.
- Annual frequency.
- Enterprise procurement at big miners.
- Language barrier.

**Kill condition:**
- MRV regulation (due about Feb 2027) covers fewer than about 200 entities.
- Or the National Climate Change Platform provides a free built-in calculator/template.

**Score:** 4/10

**Sources:**
- PwC Mongolia legal alert on the Climate Change Law: https://www.pwc.com/mn/en/tax_alerts/legal_alert_05_2026.html
- PDF version: https://www.pwc.com/mn/en/tax_alerts/pdf/2026/legal_alert_05_en_v2_2026.pdf
- Carbon Pulse: https://carbon-pulse.com/528791/
- Climate Laws database: https://climate-laws.org/document/mongolia-s-law-on-climate-change-mongol-ulsyn-khuul-uur-amsgalyn-oorchloltiin-tukhai_fe37
- UNDP carbon market blog: https://www.undp.org/mongolia/blog/readiness-action-mongolias-carbon-market-journey
- Carbon credit registry regulation: https://www.legal500.com/developments/thought-leadership/legal-alert-regulation-on-carbon-credit-registry-of-mongolia/

### Opportunity: Export documentation pack for meat / cashmere exporters (paper-to-digital bridge)

**Industry:**
Meat processors and slaughterhouses exporting to China and other markets; cashmere processors facing buyer traceability demands.

**Buyer:**
Export manager or quality manager at export-approved meat plants and cashmere processors.

**Trigger / Why now:**
- China's GACC Decrees 248/249 require establishment registration and traceability for high-risk foods like meat.
- Mongolia is building livestock ID and traceability (FAO projects, MAHIS under the General Authority of Veterinary Services).
- Western cashmere buyers are piloting blockchain traceability.
- No specific 2025–2026 Mongolian mandate was found.

**Current workflow:**
1. Obtain veterinary certificates from GASI / veterinary authority.
2. Get a certificate of origin from the Mongolian National Chamber of Commerce and Industry.
3. Obtain standards / quality certification.
4. File the customs declaration.

All of this is described by the STDF / WTO project as "still based on paper forms".

**Pain:**
Multi-agency paper procedure per shipment, as documented by STDF. Delays at the China border are commercially costly.

**Existing solutions:**
- Customs external portal.
- ADB-funded Single Window (moving 75 permits online across 22 agencies, project extended to June 2027).
- Freight forwarders and customs brokers doing it manually.
- Donor traceability pilots.

**The gap:**
A per-lot document pack that assembles vet, origin and quality certificates and buyer-specific traceability data. This gap is shrinking as the Single Window advances.

**Possible product:**
"One export lot → all certificates plus buyer traceability dossier" tracker for exporters.

**MVP:**
Lot register plus a document checklist per destination, with PDF dossier export.

**Pricing hypothesis:**
$100–200/month per exporter (estimate).

**How to find first customers:**
- GACC's public list of registered Mongolian establishments.
- Mongolian Wool and Cashmere Association members.
- Chamber of Commerce exporter lists.

**Risks:**
- Very small buyer count (dozens of meat plants, tens of cashmere processors).
- The government Single Window absorbs the workflow by 2027.
- Relationship-driven, Mongolian-language market.

**Kill condition:**
- The Single Window covers vet, origin and quality certificates end-to-end.
- Or fewer than about 50 active exporters exist.

**Score:** 3/10

**Sources:**
- STDF PPG 534 recommendations report: https://standardsfacility.org/sites/default/files/PG%20534_Recommendations%20Report_Final.pdf
- STDF mission report: https://standardsfacility.org/sites/default/files/STDF_PPG_534_Schild_Mission_Report_Mar17_Final.pdf
- EU SME Centre, Exporting Meat Products to China, 2025 update: https://www.eusmecentre.org.cn/publications/exporting-meat-products-to-china-2025-update/
- AKIpress, Mongolia–UN animal ID project: https://akipress.com/news:622147:Mongolia,_UN_to_implement_projects_on_animal_identification_and_traceability/
- Livestock registration order (FAOLEX): https://leap.unep.org/en/countries/mn/national-legislation/order-no-a405-minister-food-agriculture-and-light-industry
- WTO TFA database, Mongolia single window: https://tfadatabase.org/members/mongolia/technical-assistance-projects/article-10-4
- CARECs customs progress report: https://www.carecprogram.org/uploads/MON-Customs-Progress-Report.pdf

## Rejected after competitor research

- **eBarimt 3.0 connector / VAT-reform compliance for SMEs.**
  - eBarimt has been mandatory for B2B, B2C and B2G since 2016. The VAT reform effective 2026-01-01 raises the registration threshold to MNT 400M and moves the deadline to the 15th.
  - Killed by: certified local POS vendors and integrators, plus ready-made Odoo PosAPI3 modules (e.g. "es_mongolian_ebarimt_posapi3", tested by the Mongolian Tax Administration) and local eBarimt servers.
  - Sources: https://apps.odoo.com/apps/modules/18.0/es_mongolian_ebarimt_posapi3, https://www.e-invoice.app/country/MN, https://pwc.com/mn/en/tax_alerts/tax_alert_02_2025.html
- **Social insurance / payroll reporting.**
  - Killed by: the government's own digitisation (24 of 34 services on e-Mongolia, saving MNT 13bn/yr) plus local accounting/payroll software and accounting bureaus.
  - Specific vendor names were not verified in this study.
  - Source: https://mlsp.gov.mn/eng/content/detail/1940
- **Customs broker declaration tooling.**
  - Killed by: the Customs External Portal and the ADB Single Window project (extended to 2027). Brokers must employ only 2+ registered specialists, so the base of firms is small.
  - Source: https://tfadatabase.org/members/mongolia/technical-assistance-projects/article-10-4
- **Pharmacy / medicine regulatory filing.**
  - Killed by: the government LICEMED system for registration and import permits (Order A/206, May 2025).
  - No serialization or track-and-trace mandate was found (unverified). Buyers (importers) are few.
  - Sources: https://www.pwc.com/mn/en/tax_alerts/legal_alert_05_2025.html, https://elendilabs.com/en/articles/mng-mmdra-medical-device-registration-licemed-2025
- **Mining supplier qualification packs.**
  - Killed by: buyers' own portals (Oyu Tolgoi SQMS online registration plus quarterly supplier sessions). It is also a generic document-collection trap.
  - Source: https://admin.ot.mn/en/auction-new/supply-of-office-stationery-and-cleaning-materials

## Attractive problem, poor distribution

- **Livestock / cashmere traceability.** Real and growing pressure from buyers and donors, but it is driven by government and donors (FAO, ADB, MAHIS). Herders are dispersed and the processor count is small.
- **Meat export certification.** The paper-based multi-agency procedure is documented, but there are only dozens of exporters and the Single Window is the likely absorber.

## Too competitive

- **eBarimt / POS / VAT e-receipt integration.** Saturated by local POS vendors and Odoo integrators.

## Bottom line

Mongolia is accessible but not attractive for a foreign solo founder. The small market, Mongolian-language requirements and an active e-government push (e-Mongolia, Single Window, LICEMED, eBarimt) close most gaps. The only time-sensitive item is the Climate Change Law's MRV regulations, due about February 2027. Recheck it then. Mongolia could at most be an add-on to a Central Asia ESG/MRV product rather than a standalone market.
