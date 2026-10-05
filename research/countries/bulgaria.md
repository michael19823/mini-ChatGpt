# Bulgaria: Indie-Hacker Opportunity Research

Research date: 2026-10-04. Budget: 16 WebSearch calls (mid-size market), in Bulgarian and English. WebFetch not used, so every claim comes from search-result snippets. Anything I could not confirm is marked "unverified" or "estimate".

**Accessibility:** Bulgaria is an EU member and has used the euro since 1 Jan 2026. There are no sanctions or payment problems, so a foreign solo founder can sell here. The practical barriers are language (Bulgarian UI and support) and the qualified electronic signature (QES/КЕП) that most NRA and ministry e-services require.

**Overall verdict:** Bulgaria has a lot of state-mandated digital reporting (NRA/НАП, BFSA/БАБХ, MOEW/МОСВ). The biggest 2026 triggers are SAF-T, the euro changeover and the electronic employment record, and local accounting/ERP vendors and consultants are already crowding all three. The better openings are narrower, per-transaction obligations. None is strong enough yet to build without customer interviews.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Wholesale/distribution, trucking (fuel, food, building materials, fertilisers, vehicles) | Pre-declaring each transport of "high fiscal risk goods" (СВФР) to NRA to get a unique transport number (УНП) | **Opportunity (6/10)** | Mandatory for every shipment. Gets a QES portal or API/XSD. The goods list keeps growing (fertilisers and building materials added 1 May 2025). |
| Agriculture / crop-protection advisers | Electronic records of plant-protection product use (EU Impl. Reg. 2023/564) | **Opportunity (5/10)** | Electronic, machine-readable records become mandatory 1 Jan 2027. BFSA is preparing its own e-logbook, which is the main risk. |
| Waste collectors / waste generators / environmental consultants | Report books and annual reports in НИСО (National Waste Information System) | **Opportunity (5/10)** | Mandatory and recurring. Today it is mostly outsourced to consultants who key data in by hand. |
| Accounting firms / mid-size companies | SAF-T monthly file, phased 2026–2030 | Too competitive | At least 5 local specialists plus ERP vendors and Big-4 firms already sell this. |
| Retail / all B2C | Euro changeover: dual prices, fiscal-device updates, rounding and reconciliation | Rejected | One-off and ending (dual pricing stops 31 Dec 2026). Fiscal-device and ERP vendors already handle it. |
| Employers / payroll bureaus | Unified electronic employment record (ЕЕТЗ) replacing paper labour books | Rejected | Transition deadline passed 1 Jun 2026. Payroll software and the NRA portal cover it. |
| All VAT-registered businesses | Planned mandatory B2B e-invoicing (NISSEF) and pre-filled VAT returns from 2028 | Too early / too competitive | Still a draft. Comarch, EDICOM and local ERP vendors will cover it. Watch for 2027. |
| Hotels / guest houses | Guest reporting to ЕСТИ (tourism information system) plus municipal tourist tax | Not pursued (unverified) | Mandatory, and fragmented across municipalities, but hotel booking/front-desk software (PMS) vendors likely integrate already. Competitors not checked. |
| Veterinary clinics | Antimicrobial use reporting (EU Reg. 2019/6) | Not verified | Could not find Bulgaria-specific obligations or the BFSA system details. |
| Retail sales software (СУПТО / Ordinance Н-18) | Sales-management software registered with NRA | Too competitive | Mature, certified local vendors (Microinvest and others). Certification burden. |

---

## Opportunity: УНП Autopilot (high-fiscal-risk goods transport declarations)

**Industry:**
Wholesale and distribution of fuel, food staples (sugar, oil, meat, fruit and vegetables), building materials, fertilisers and vehicles, plus the hauliers that carry them.

**Buyer:**
Logistics or sales-admin manager, or the owner, at a small or mid-size distributor/wholesaler or freight company moving СВФР goods in vehicles over 3.5 t. Secondary buyer: accounting firms that file on their behalf.

**Trigger / Why now:**
- Since 3 Jan 2024, pre-declaration is mandatory for transports of high-risk goods in vehicles over 3.5 t that start in a third country and end in Bulgaria, or start and end inside Bulgaria.
- NRA moved the regime to a new e-service with an API and XSD schemas.
- An updated goods list took effect 1 May 2025, adding building materials, new and used road vehicles, and fertilisers. That brought in many new, less digital SMEs, for example agri-input dealers and builders' merchants.

**Current workflow:**
1. A sales order or invoice is created in a local ERP or accounting program (Microinvest, Плюс Минус, Ажур, etc.) or in Excel.
2. Before the truck leaves, a staff member logs into the NRA e-services portal with a QES. They key in the goods, codes, quantities, vehicle, and loading and unloading points, or upload a pre-made file.
3. NRA returns a УНП valid for 14 days. Staff pass it to the driver or carrier by phone, SMS or paper.
4. Exceptions are handled by hand in the portal: corrections, cancellation notices and "goods not received" notices.

**Pain:**
- It happens for every shipment, and missing or wrong declarations bring NRA penalties and roadside checks.
- The list keeps changing (code updates had to be "installed" in the e-service), so companies must keep checking which goods are in scope.
- Accounting news sites, the Bulgarian Industrial Association (BIA) and the Bulgarian Chamber of Commerce (BCCI) run recurring explainers and Q&A, which suggests ongoing confusion.

**Existing solutions:**
- The NRA portal itself: free, manual, needs a QES.
- NRA system-to-system API: requires your ERP vendor or in-house IT to integrate.
- Local ERP/accounting vendors. Плюс Минус has a blog post on СВФР; whether it has a filing module is unverified. Microinvest is a major ERP; whether it has a УНП module is unverified.
- Accountants or admin staff doing it by hand.
- "Check a УНП" lookup sites (proverkite.com). These only verify numbers; they do not file.

**The gap:**
- Companies whose ERP has no built-in УНП filing must re-key every order.
- The fiddly parts are the exceptions: corrections, cancellations, "not received" notices, and tracking 14-day expiry.
- Classification is also hard: which CN codes on this invoice are on the current list.
- Delivering the УНП to the driver or carrier is unmanaged.

**Possible product:**
A lightweight web app or ERP plug-in. It imports invoices or orders (CSV/XML exports from common Bulgarian ERPs), flags lines whose CN codes are on the current СВФР list, files to NRA through the official API, and pushes the УНП to the driver by SMS/Viber. It also tracks expiry and handles correction and cancellation flows.

**MVP:**
- CSV/Excel upload, then mapping to the NRA XSD, then API submission.
- A dashboard of active, expiring and cancelled УНП numbers, with one-click correction and cancellation.
- Integration with one ERP export format.

**Pricing hypothesis:**
€25–60 per month for an SME, or about €0.30–0.50 per declaration (estimate). An accounting-firm tier covers multiple client companies.

**How to find first customers:**
- Fuel distributors (BFSA and excise registers), fertiliser traders, builders'-merchant chains and fresh-produce wholesalers. Sources: Bulgarian Commercial Register (Търговски регистър), NRA excise registers, BFSA register of agri-input traders, and BIA/BCCI member directories.
- Accounting firms, via portals such as kik-info and balans.bg.

**Risks:**
- Large ERP vendors may already offer or add this feature, killing the SME wedge.
- API access may require company-specific certificates or QES per filer.
- NRA could simplify the portal or drop goods from the list.

**Kill condition:**
Five interviews show that Microinvest, Плюс Минус and Ажур users already get one-click УНП filing in their ERP, or that typical volume is under about 10 transports a month per company.

**Score:** 6/10

**Sources:**
- https://kik-info.com/novini/nap/NAP-vavezhda-rezhim-za-zadalzhitelno-predvaritelno-deklarirane-na.14342.php
- https://kik-info.com/novini/nap/Aktualiziran-e-Spisakat-na-stokite-s-visok-fiskalen.14957.php
- https://kik-info.com/novini/novini-i-akcenti/Vaprosi-i-otgovori-otnosno-predvaritelnoto-deklarirane-na-danni.189324.php
- https://www.bia-bg.com/service/view/28702/
- https://news.inbalance.bg/institucii/nap-noi-nsi-novini/nova-e-usluga-ot-nap-za-deklarirane-na-danni-za-prevozi-na-stoki-s-visok-fiskalen-risk
- https://www.infobusiness.bcci.bg/novite-kodove-na-stoki-s-visok-fiskalen-risk-sa-instalirani-v-elektronnata-usluga.html
- https://agri.bg/novini/prevoziet-na-torove-vece-iziskva-predvaritelno-uvedomlenie-kiem-nap
- https://plusminus.com/bg/blog/%D1%81%D1%82%D0%BE%D0%BA%D0%B8-%D1%81-%D0%B2%D0%B8%D1%81%D0%BE%D0%BA-%D1%84%D0%B8%D1%81%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD-%D1%80%D0%B8%D1%81%D0%BA/
- https://proverkite.com/proverka-na-unp-ot-nap/

---

## Opportunity: Electronic spray records for EU Reg. 2023/564 (Bulgarian agronomists and farms)

**Industry:**
Agriculture: arable, orchards, vineyards and vegetables. Also crop-protection consultants and pest-control contractors.

**Buyer:**
- Independent agronomists and crop-protection consultants who keep records for many farms.
- Mid-size farms (roughly 50–2,000 ha), where the owner or farm manager buys.
- Agri-input dealers who offer record-keeping as a service.

**Trigger / Why now:**
- Commission Implementing Regulation (EU) 2023/564 sets the required record content from 1 Jan 2026: product, authorisation number, date/time, dose, area, crop, location, and EPPO/BBCH codes.
- From 1 Jan 2027, records must be electronic and machine-readable. Records made in another format must be converted within 30 days of use.
- In Bulgaria, the farm-press site agri.bg reports that BFSA is "preparing a new system for electronic spraying diaries", with implementation terms still under discussion.
- Separately, BFSA launched a platform where operators must publicly announce plant-protection treatments before they happen.

**Current workflow:**
1. The agronomist writes a recommendation. The farm sprays and records it in a paper diary (дневник) or Excel.
2. The same treatment is announced separately on BFSA's treatment-announcement platform, which overlaps with the diary.
3. Records are produced at BFSA inspections and checks linked to EU farm subsidies (paid through the State Fund Agriculture/ДФЗ). From 2027 they must be electronic in the prescribed format.

**Pain:**
- The obligation is mandatory, and every treatment must be recorded (many per season).
- Coding is tedious: EPPO and BBCH codes and authorisation numbers.
- The same treatment is entered twice, once in the announcement platform and once in the diary.
- Small farmers are not very digital.

**Existing solutions:**
- Farm-management software that operates regionally: Agrivi (Croatian), eAgronom, and Cropwise (Syngenta). Their Bulgarian localisation and 2023/564 export format are unverified.
- Paper diaries and Excel.
- The upcoming BFSA government system, likely free.

**The gap:**
A cheap, Bulgarian-language tool built for consultants who manage many farms. It would auto-fill codes from the BFSA register of plant-protection products and produce the exact format BFSA will require. Ideally it would also re-use one entry for both the announcement platform and the diary.

**Possible product:**
A mobile-first spray-record app for Bulgarian agronomists. It looks up products in the BFSA register and auto-fills authorisation, dose limits, EPPO and BBCH codes. It exports records in the BFSA/EU format and generates the announcement entry.

**MVP:**
- Product lookup plus field/crop list plus treatment entry.
- An inspection-ready PDF/CSV export.
- Multi-farm view for consultants.

**Pricing hypothesis:**
€5–15 per month per farm, or €49–99 per month for a consultant managing 20+ farms (estimate).

**How to find first customers:**
- BFSA registers of certified plant-protection consultants and agri-input outlets.
- The Ministry of Agriculture's national rural network (ruralnet.bg) and farmer associations.
- Agri.bg readership, and local agronomist groups on Facebook and Viber.

**Risks:**
- BFSA may ship a free e-logbook, possibly with an API. A free government tool would largely substitute for the core product.
- Farmers' willingness to pay is low.
- The work is seasonal.
- Large farm-management vendors could add Bulgarian localisation.

**Kill condition:**
BFSA's e-logbook is free, usable on mobile, and has no third-party interface, or Agrivi or eAgronom already offer Bulgarian 2023/564 exports at a similar price.

**Score:** 5/10

**Sources:**
- https://lawplayer.com/eu/act/32023R0564
- https://www.daera-ni.gov.uk/articles/new-requirements-plant-protection-product-ppp-record-keeping-professional-users (EU timeline illustration)
- https://agri.bg/novini/podgotvia-se-nova-sistema-za-elektronni-dnevnici-na-prieskaniiata
- https://ruralnet.bg/ (BFSA treatment-announcement platform article, found in search)
- https://utroruse.com/article/998444/
- https://bfsa.egov.bg/wps/portal/bfsa-web/registers/plant.protection.products
- https://www.capterra.co.za/compare/136084/1012161/agrivi/vs/eagronom

---

## Opportunity: НИСО ledger automation for waste collectors and consultants

**Industry:**
Waste management: collection and transport firms, recyclers and scrap dealers, plus industrial and construction waste generators.

**Buyer:**
Environmental compliance officers at licensed waste companies, and the many small environmental consultancies that maintain НИСО records for clients.

**Trigger / Why now:**
- НИСО report books (отчетни книги) and reports are mandatory and electronic (QES or an authorised person), with an annual report due 10 March.
- MOEW keeps amending Ordinance No. 1/2014 on waste reporting. The stated reasons include a large volume of paper-based information and slow processing.
- No single hard 2026 trigger was found (unverified).

**Current workflow:**
1. Weighbridge tickets, transfer/identification documents and invoices are produced in the company's own systems or on paper.
2. A staff member or outsourced consultant re-keys each waste movement by waste code into НИСО report books, then compiles annual reports.
3. Errors and missing entries surface at regional environmental inspectorate (RIOSV/РИОСВ) checks or annual-report validation.

**Pain:**
- The obligation is recurring and penalised.
- There is a visible market of consultants selling "НИСО record-keeping" as a service (SK Consult, Bordimisa, Dibois, ML Bulgaria), which is evidence of manual re-entry. Firms pay for it rather than doing it themselves.

**Existing solutions:**
- Consultants (above).
- The НИСО web interface itself.
- Weighbridge and ERP software. Whether any of it exports to НИСО is unverified.

**The gap:**
Moving weighbridge and invoice data into НИСО report-book entries automatically, with validation of waste codes and cross-checks against permit limits. Whether НИСО offers bulk import or an API is **unverified**. Without one, the product becomes browser automation or a tool for consultants.

**Possible product:**
A tool that turns weighbridge/ERP CSVs into ready НИСО entries. It validates waste codes against the operator's permit, keeps a reconciled ledger, and pre-fills the annual report. Sold first to consultancies as a productivity tool.

**MVP:**
CSV import, waste-code mapping, a permit-limit checker, and output formatted for fast НИСО entry (or browser-assisted filling).

**Pricing hypothesis:**
€30–80 per month per waste company. €100–200 per month for a consultancy with many clients (estimate).

**How to find first customers:**
- Public registers of waste permits and registration documents kept by each regional inspectorate (for example, the Plovdiv inspectorate's published register).
- Consultancies advertising НИСО services, found via Google.

**Risks:**
- No API, and browser automation behind QES is fragile.
- MOEW system redesigns.
- Small market (estimate: low thousands of licensed operators; unverified).

**Kill condition:**
НИСО has no bulk import and forbids automated access, or consultants say per-client data volume is too low to justify a tool.

**Score:** 5/10

**Sources:**
- https://sk-consult.org/blog/niso-registraciya-i-vodene-na-otchetnost/
- https://bordimisa.bg/uslugi/vodene-na-otchetnost-v-niso/
- https://dibois.bg/uslugi/vodene-na-otchetnost-v-niso/
- https://mlbulgaria.com/niso/
- https://stz.riew.gov.bg/Vazhno_-c172
- https://strategy.bg/bg/public-consultations/6132/export
- https://mail.plovdiv.riew.gov.bg/files/_documents/REGISTER_ZDOI_RIOSV_PLOVDIV_2025_web.pdf

---

## Rejected after competitor research

- **SAF-T reporting for SMEs and accounting firms.**
  - The trigger is real: monthly SAF-T is mandatory from 2026 for large firms, phased down to almost all enterprises by 2030.
  - Competitors already in place: SAF-T Bridge (saft-bridge.com, aimed at Плюс Минус users), NAPplus (napplus.bg), Flowex AI (flowexai.bg), Gravitech, Plana Solutions and PwC Bulgaria, plus ERP vendors (Comarch, SAP partners, Microinvest).
  - Killed by Plana Solutions, SAF-T Bridge, NAPplus and Flowex AI, plus the ERP vendors themselves.
- **Euro changeover tooling.** Dual pricing runs 8 Aug 2025 to 31 Dec 2026, and receipts must show both currencies. It is one-off and expiring, and fiscal-device and ERP vendors already did the updates. Killed by timing and incumbents.
- **Unified electronic employment record (ЕЕТЗ).** The transition deadline of 1 Jun 2026 has passed. It is now an NRA register fed by payroll software. Killed by payroll vendors and the NRA portal.
- **Mandatory e-invoicing (NISSEF, 2028).** Still a draft. EDICOM, Comarch and local ERPs are positioned to cover it. Revisit in 2027 for gaps around exceptions or reconciliation.

## Attractive problem, poor distribution

- **Spray records:** farmers' low willingness to pay and a likely free BFSA tool mean consultants are the only viable channel.
- **НИСО:** a small and fragmented buyer base, reachable mainly through regional permit registers.

## Too competitive

- SAF-T, sales-management software under Ordinance Н-18 (СУПТО), and likely ЕСТИ guest reporting via hotel booking/front-desk software (PMS) vendors (unverified).
