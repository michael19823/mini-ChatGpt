# Lithuania: Indie Software Opportunity Research

Research date: 2026-10-05. Treated as a small market (budget of 10 searches, all used). WebFetch was not used, so every finding below comes from search-result snippets. Facts not confirmed directly on the source page are marked "unverified".

**Accessibility:** Lithuania is an EU member and the eurozone, with no sanctions or licensing barrier for a foreign solo founder selling B2B SaaS. State systems such as GPAIS, VMI (i.SAF/i.VAZ) and VVAIS require Lithuanian e-identity or company credentials for portal access. This matters for integrations.

**Bottom line:** Lithuania is a small, highly digitized market, and the state already runs mandatory electronic systems for most regulated workflows (GPAIS, i.SAF/i.VAZ, the electronic construction journal, VVAIS e-prescriptions). Local vendors and consultants have filled most of the obvious gaps. No idea reached a "build" grade. The best lead is a narrow GPAIS waste-journal autopilot for small waste generators, and it needs customer interviews first. Lithuania works better as part of a Baltic bundle (LT/LV/EE) than as a standalone market.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Small waste generators (auto repair, workshops, clinics, small manufacturers) | GPAIS waste-generation journal, quarterly summary, annual report | **Shortlist (weak)** | Mandatory, recurring and run by hand on a state portal; consultants and a few integrators already compete |
| Producers/importers/e-shops (packaging and products) | GPAIS product and packaging supply accounting | Too competitive | GPAIS has an integration API (VVS), and go-erp, Imaslengviau, Innercode and consultancies already serve it |
| Veterinary clinics/practitioners | VVAIS e-prescriptions and antimicrobial-use records (mandatory 2026) | Shortlist (weak) / poor distribution | Real duplicate entry is possible, but the market is about 780 vets and API access is unverified |
| Construction contractors | Electronic construction work journal (ESDŽ), mandatory for all projects since 2023-05-01 | Rejected | darbuzurnalas.lt, Logbox, Ekstata and Infostatyba already sell this |
| Timber/sawmills/forest owners | EUDR due-diligence statements from 2026-12-30 | Rejected | EU simplification (one-off simplified declaration, exemption when data is already in national databases) removes most of the recurring pain |
| All VAT payers | B2B e-invoicing (targeted 2028 per secondary sources, not legislated) | Too competitive / too early | Rivilė, Centas, banqup, Sovos, ecosio and Peppol access points will cover it, and there is no legal mandate yet |
| Listed SMEs | Sustainability reporting (from 2027 for FY2026) | Rejected | Tiny buyer count (listed SMEs only), with Big-4 and ESG SaaS saturation |

---

### Opportunity: GPAIS waste-journal autopilot for small waste generators

**Industry:**
Car repair and tyre shops, metal/wood workshops, small manufacturers, dental and medical clinics, beauty salons, and other small waste generators

**Buyer:**
Owner/manager or office administrator of a small company that must keep GPAIS waste-generation accounting. A second buyer is the outsourced accountant or environmental consultant who does it for many clients.

**Trigger / Why now:**
No new 2026 trigger. This is a standing mandatory workflow: waste-generation accounting must be kept electronically in GPAIS. A new journal opens each quarter, a quarterly summary must be created and confirmed within 15 calendar days of quarter-end, and an annual report is due by March 1. The training market lists seminars on "2025–2026 GPAIS news" (mokymuklubas.lt), which suggests continuing rule changes, but the specific changes are unverified. The weak why-now is the biggest weakness of this idea.

**Current workflow:**
1. A worker generates waste (oil, filters, batteries, packaging, medical waste) and records it on paper or in Excel, if at all.
2. A waste handler collects it and issues a transfer document. The handler-side record in GPAIS must match.
3. An admin logs into GPAIS and types entries into the quarterly journal (date, waste code, name, weight).
4. Within 15 days after quarter-end, the admin creates and confirms the summary and reconciles it with the handler's records.
5. The annual report is filed by March 1. Many firms pay a consultant to do this.

**Pain:**
The obligation is mandatory and recurs quarterly (journal entries are per event), and reconciliation runs against the handler's data. An ecosystem of paid consultancies and trainings (gpais.com, gpais.lt, gpaismokymai.lt, mokymuklubas.lt, agia.lt guides) shows that SMEs struggle with GPAIS. Hours lost and penalty levels are unverified.

**Existing solutions:**
- The GPAIS portal itself (free, manual entry) and the official user guide
- gpais.com: outsourced packaging and waste accounting services
- gpais.lt and gpaismokymai.lt: consultations and trainings
- Imaslengviau (imaslengviau.prg.lt): GPAIS consultations and integrations
- go-erp.eu: ERP with a GPAIS module
- esavadai.lt: templates for internal waste-accounting procedures

**The gap:**
The GPAIS integration API (the VVS data-exchange spec) is aimed at large producers and importers. As far as the searches showed, no cheap, self-serve tool lets a 5-person garage log waste in seconds (mobile, photo of the handler document), push the journal to GPAIS, and automatically match quarterly summaries with the handler's records. It is unverified whether the waste-generation journal, as opposed to packaging data, is exposed through the API.

**Possible product:**
A mobile/web logbook with waste-code presets per trade. It syncs entries to GPAIS via the API, or prepares them for fast entry, runs the quarter-end summary checklist with deadline reminders, and flags mismatches against the waste handler's records. There is a multi-client dashboard for consultants and accountants.

**MVP:**
One trade (auto repair) with about 15 preset waste codes, quick entry, quarter-end summary generation, and deadline alerts. API push only if the VVS interface covers waste-generation journals. Otherwise it produces an exact entry list for manual copying.

**Pricing hypothesis:**
€10–25/month per site, or €3–8 per client per month for consultants. Value is capped by the cost of a consultant (estimate: a few hundred euros per year per small firm).

**How to find first customers:**
Lithuanian Register of Legal Entities filtered by activity code (NACE 45.20 car repair, etc.), car-service associations, waste-handler companies (who could resell or recommend the tool to their generator clients), and GPAIS consultants as channel partners.

**Risks:**
Low willingness to pay. GPAIS may improve its own UI. Consultants may see the tool as a threat. The API may not cover this journal. The market is small (company counts unverified, estimate a few thousand relevant SMEs).

**Kill condition:**
Interviews show that small generators either have very few entries per quarter (5 minutes of work) or already outsource to a waste handler or consultant for under €100/year. The idea also dies if the GPAIS API does not allow waste-generation journal writes and the GPAIS UI is good enough.

**Score:** 5/10

**Sources:**
- https://aad.lrv.lt/lt/veiklos-sritys/imonems/dokumentai/atlieku-susidarymo-apskaitos-metine-ataskaita-gpais/
- https://www.gpais.eu/documents/20143/37003658/Atliek%C5%B3+susidarymo+apskaita_GPAIS+IP+vadovas_LT.pdf
- https://www.gpais.eu/documents/20143/28915/VVS+projektavimo+dokumentas.pdf/b076c524-a69a-2db3-8e79-0c1b5fc08ffc
- https://e-seimas.lrs.lt/rs/legalact/TAP/a23ab48029c211e79f4996496b137f39/
- https://gpais.com/ ; https://imaslengviau.prg.lt/ ; https://go-erp.eu/lt/gpais/ ; https://www.gpaismokymai.lt/SEMINARAI/
- https://mokymuklubas.lt/seminaras/gaminiu-ir-pakuociu-apskaita-vieningoje-gaminiu-pakuociu-ir-atlieku-apskaitos-informacineje-sistemoje-gpais-3/

---

### Opportunity: Veterinary practice ↔ VVAIS bridge (e-prescriptions and antimicrobial records)

**Industry:**
Veterinary practitioners (mainly farm-animal vets: cattle, pigs, poultry) and veterinary pharmacies

**Buyer:**
Owner of a private vet practice or farm-animal veterinary service. A secondary buyer is the vet clinic software vendor (OEM/integration licence).

**Trigger / Why now:**
Per search results, from 2026-01-01 electronic veterinary prescriptions and pharmacy requests must go through VVAIS (Veterinary Medicines Accounting Information System). This supports EU Regulation 2019/6 antimicrobial-use data collection per farm for cattle, pigs and poultry. Exact dates are unverified because older articles say e-prescriptions began earlier ("from the new year", 2021–2022 articles).

**Current workflow:**
1. The vet treats animals at a farm and records the treatment in their own notes or clinic software.
2. The vet logs into VVAIS and writes the e-prescription (drug, quantity, farm, species).
3. The farm keeps its own treatment register. The pharmacy dispenses against the e-prescription.
4. Data flows to VMVT for annual EU (EMA) reporting.

**Pain:**
Possible duplicate entry between clinic software or paper notes and VVAIS, done in the field. No complaint evidence was found, so this is unverified.

**Existing solutions:**
The free VVAIS portal (state), whatever practice-management software Lithuanian vets use (not identified, unverified), and paper notes.

**The gap:**
Unverified. A mobile-first treatment capture would generate the VVAIS prescription and the farm's treatment record in one step.

**Possible product:**
A field app for farm vets: record the treatment once, then produce the VVAIS e-prescription, the farm treatment log and invoice data.

**MVP:**
A mobile form with drug presets plus a pre-filled VVAIS submission (only if VVAIS offers an API or allows browser automation).

**Pricing hypothesis:**
€20–40/month per vet.

**How to find first customers:**
VMVT-registered vets and the Lithuanian Veterinary Association member lists. Per the source, about 780 vets issue e-prescriptions.

**Risks:**
The market is tiny (about 780 vets, roughly €200k/year maximum). VVAIS API access is unknown. The state may add its own mobile app.

**Kill condition:**
There is no VVAIS API and automating the portal is impractical, or vets report that VVAIS entry takes under a minute.

**Score:** 3/10

**Sources:**
- https://vmvt.lt/naujienos/nuo-naujuju-metu-veterinarijos-gydytojai-naudosis-e-recepto-sistema
- https://vmvt.lt/naujienos/popierinius-veterinarinius-receptus-pakeis-elektroniniai
- https://agrobite.lt/lietuva/nuo-naujuju-metu-taps-privalomi-e-veterinariniai-receptai
- https://www.valstietis.lt/ukininku-zinios/elektroniniai-receptai-antibiotiku-naudojimo-kontrolei-stiprinti/120979
- https://vmvt.lrv.lt/lt/visuomenei/naujienos/atsakingas-antimikrobiniu-medziagu-naudojimas-lietuvos-pazanga/

---

## Rejected after competitor research

- **Electronic construction work journal (ESDŽ):** mandatory for all construction since 2023-05-01. It is already served by darbuzurnalas.lt (Proptechas), Logbox, Ekstata and Infostatyba, and VTPSI publishes guidance on these private "filling and storage services". Sources: https://www.infolex.lt/portal/start.asp?act=news&Tema=1&str=98682 ; https://darbuzurnalas.lt/ ; https://www.logbox.lt/ ; https://ekstata.lt/statybu-darbu-zurnalas
- **EUDR due diligence for Lithuanian timber:** applies from 2026-12-30. The Lithuanian Environment Ministry says the revised rules allow a simplified single declaration instead of per-batch statements, postal addresses as geolocation, and exemptions where data already sits in national databases (felling permits are issued via ALIS / State Forest Service). Most of the recurring workload disappears for an EU low-risk country. Sources: https://am.lrv.lt/lt/veiklos-sritys-1/misku-politika1/es-kovos-su-misku-naikinimu-reglamento-eudr-igyvendinimas/ ; https://www.alisas.lt/permits/L08.1
- **i.SAF / i.VAZ reporting:** mandatory since 2016, and every Lithuanian accounting package (Rivilė, Centas, etc.) produces it. This is a solved problem.

## Too competitive

- **GPAIS packaging/product supply accounting for producers, importers and e-shops:** GPAIS has an official integration interface (VVS) for business systems, and there are go-erp.eu's GPAIS module, Imaslengviau integrations, Innercode's PrestaShop-to-GPAIS module, and several consultancies (gpais.com, gpais.lt). The EU PPWR may add work, but the incumbents will absorb it.
- **B2B e-invoicing:** only B2G is mandatory. B2B is targeted for 2028 per vatupdate/secondary sources and is not yet legislated. When it comes, Rivilė, Centas, banqup, Sovos, ecosio and Peppol access points will serve it. Sources: https://www.vatupdate.com/2026/07/30/lithuania-e-invoicing-e-reporting-country-booklet/ ; https://ecosio.com/en/compliance/lithuania/e-invoicing/
- **Sustainability reporting (CSRD/ATAS):** affects listed SMEs only from FY2026, a crowded ESG-software and Big-4 space. Source: https://www.pwc.com/lt/lt/apie-mus/naujienos/tvarumo-prievole-palies-visus-verta-ruostis-is-anksto.html

## Attractive problem, poor distribution

- **Vet ↔ VVAIS bridge:** the market of about 780 vets is too small to support a standalone product. It is viable only as a Baltic or multi-country vet tool built around EU Regulation 2019/6 reporting.

## Not covered (budget)

Funeral homes (civil registration), pharmacies (controlled-drug reporting), freight forwarding (customs/e-CMR) and food processors (VMVT traceability) were not screened. Lithuania's large trucking sector (e-CMR, posted-worker declarations under the EU Mobility Package via IMI) is a promising lead for a Baltic/EU-wide follow-up, but it was not checked here.
