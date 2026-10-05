# Hungary: opportunity research

Researched 2026-10-05. 14 WebSearch calls, one of them refused because of a usage limit. Searches were in Hungarian and English. WebFetch was not used, so all findings come from search-result snippets and the official PDFs and pages they cite. Anything I could not confirm is marked *unverified*.

**Accessibility:** Hungary is an EU member and has no sanctions or software-licensing barriers. SEPA and card payments work. Hungarian language is a real practical barrier: every buyer, portal (OKIRkapu, NÉBIH eGN, NAV KOBAK) and piece of guidance is Hungarian-only. To get API access, a foreign solo founder must file a connection request with each authority, for example NÉBIH's API request form.

**Overall verdict:** Hungary is a heavily digitised compliance state. The government usually ships its **own free portal or app** (eGN, KOBAK/ePénztárgép, ePincekönyv, OKIRkapu), and two dominant local SaaS products (Számlázz.hu, Billingo) quickly absorb any new obligation that sits next to invoicing. The gaps that remain are narrow. They are the **multi-client and record-keeping layers that sit in front of free government portals**, especially in environmental (OKIR) reporting and agricultural plant-protection records. None of these is a strong opportunity, and none scores above 5/10.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Agriculture / plant protection | Electronic spray records in eGN (EU Reg. 2023/564: new start-time and BBCH fields in 2026) | Weak opportunity (multi-client angle only) | NÉBIH eGN is free and has an open API, and farm software (e.g., AgroMAP/DAS-GEOD) already connects. A gap may remain for advisors and contract sprayers who serve many farmers. |
| Small waste producers (tyre/car service, workshops, small manufacturers) | Ongoing waste records plus the annual OKIR (HIR) waste report due 1 March | Weak opportunity | Real fines of 200,000 HUF and publicly named offenders. But the filing is annual, and competing software and consultants were not mapped. |
| Packaging / EPR (producers, importers, webshops) | Quarterly EPR (KGYF-NÉ) data report via OKIRkapu with KF codes | Too competitive / weak | Running since July 2023. EY tool, korforgo.hu web app, Novitax lists and long-standing product-fee (termékdíj) consultants already serve it. |
| Retail micro-businesses (hairdressers, mechanics, tutors) | e-nyugta / receipt data reporting to NAV, mandatory from 1 Sep 2026 | Rejected | About 270k businesses are affected, but NAV offers a free ePénztárgép app and manual KOBAK entry, and Billingo already automates it. |
| Wineries | Cellar book (pincekönyv), HNT and excise records | Rejected | The state ePincekönyv is integrated with HNT and NÉBIH systems. Electronic excise records are mandatory only for large wineries (>20k hl). |
| Invoicing / VAT (all SMEs) | NAV Online Számla, VAT draft (eÁFA) | Rejected (desk judgement, not researched in depth) | Saturated by Számlázz.hu, Billingo and accounting software. |
| CBAM / EUDR importers | Embedded-emissions and deforestation due-diligence data | Not pursued | The obligation is EU-wide, not Hungary-specific, and EU-wide vendors are better placed. Not researched for Hungary. |

## Opportunities

### Opportunity: Multi-client eGN spray-record hub for plant-protection advisors and contract sprayers

**Industry:**
Agriculture: plant-protection services (licensed plant-protection advisors, contract and drone sprayers, input dealers who give advice)

**Buyer:**
Independent plant-protection engineers and advisors (növényvédelmi szakmérnök/szaktanácsadó) and contract spraying companies (bérpermetezők) that serve 10–100 farmers each. The farmer is the legal record-keeper, but the service provider holds the data.

**Trigger / Why now:**
EU Implementing Regulation 2023/564 sets the content and format of electronic pesticide-use records. Since 2026, Hungarian eGN entries require two new mandatory fields: treatment start time and the crop's BBCH growth stage. Farmers with more than 10 ha must keep records up to date, and treatments must be entered within 24 hours. Farms in AKG/ÖKO support schemes must report by 31 January. NÉBIH has acknowledged eGN system errors in the past.

**Current workflow:**
1. The advisor writes the prescription, or the contractor performs the spray, and records it on paper, in WhatsApp or in their own spreadsheet or app.
2. They pass product, dose, area, time and BBCH to each farmer.
3. Each farmer, or their advisor holding that farmer's login, re-enters the data in NÉBIH eGN or in the farmer's own farm software within 24 hours.
4. Errors and missing fields surface at inspections or at the support-scheme check.

**Pain:**
The same spray job is keyed in separately for every farmer, under a 24-hour rule. The new mandatory fields add work, and earlier eGN outages have led to deadline extensions (adozona.hu reports). The 24-hour rule and the support-scheme cross-checks are documented. How much pain this causes service providers specifically is *unverified*.

**Existing solutions:**
- NÉBIH eGN web interface, which is free.
- Farm-management software connected to the eGN API, e.g., AgroMAP (DAS-GEOD). eAgronom and other vendors also sell FMIS products in Hungary (*unverified* whether they connect to eGN).
- Paper records and spreadsheets.
- Advisors doing the entry manually as a service.

**The gap:**
FMIS products are built around one farm. The workflow that may be underserved is a **service-provider-centric** one: one spray job, or one prescription for many parcels or farmers, is pushed through the eGN API into each client farmer's journal with the 2026 fields pre-filled and checked. This is *unverified*: some FMIS vendors may already offer advisor or multi-farm accounts.

**Possible product:**
A mobile-first job log for sprayers and advisors. It captures product (from the NÉBIH registry), dose, parcel, start time and BBCH once, then syncs per farmer to eGN through the NÉBIH API using the farmer's delegated authority.

**MVP:**
Web app with a client list, job entry form, 2026 field validation and an eGN API push (or a CSV export if API delegation is not possible), plus a per-farmer annual summary.

**Pricing hypothesis:**
HUF 8,000–20,000 (about €20–50) per month per advisor or contractor, or HUF 1,000–2,000 per client farm per season.

**How to find first customers:**
Licensed plant-protection professionals are registered with NÉBIH and the chamber (*registry access unverified*). Other routes are NAK (Hungarian Chamber of Agriculture) advisor networks, drone-spraying service listings and agricultural fairs (e.g., AGROmashEXPO).

**Risks:**
Whether NÉBIH API delegation lets one provider write to many farmers' journals. Farmers are already locked into an FMIS. Seasonality. NAK is pushing to lighten the eGN burden, which could reduce the pain.

**Kill condition:**
The NÉBIH API does not allow writing on behalf of multiple farmers, or two or more FMIS vendors already offer multi-client advisor accounts at low price.

**Score:** 5/10

**Sources:**
- https://www.agroinform.hu/szantofold/tudtad-mar-az-orat-is-nezni-kell-permetezeskor-ket-uj-kotelezo-mezo-az-egn-ben-90962-001
- https://www.agroinform.hu/szantofold/novenyvedosok-es-gazdalkodok-figyelem-uj-kotelezettsegek-a-2026-os-e-gn-feluleten-91077-001
- https://www.nak.hu/tajekoztatasi-szolgaltatas/kozos-agrarpolitika/109561-tajekoztatas-a-novenyvedelmi-muveletek-elektronikus-nyilvantartasarol
- https://portal.nebih.gov.hu/documents/10182/560688569/Nebih+API+csatlakozasi+kerelem.pdf
- https://portal.nebih.gov.hu/documents/10182/501576/DATAPLANT-EGN-WHITEBOOK_2026_v0.23.pdf
- https://adozona.hu/altalanos/Elismerte_a_rendszerhibakat_a_Nebih_eGN_ada_SA6KM8
- https://adozona.hu/altalanos/Januartol_a_Nebih_feluleten_kell_vezetni_az_QJHBKW
- https://agraragazat.hu/hir/mezogazdasag-egn-konnyites/

---

### Opportunity: Waste-record and OKIR filing assistant for small waste producers (workshops, tyre services, car washes)

**Industry:**
Small waste-producing businesses: car and tyre services, car washes, small manufacturers, mechanical workshops, small mineral-water bottlers

**Buyer:**
Owner or office manager of a micro or small company with a KÜJ/KTJ environmental ID. A secondary buyer is accounting firms that handle admin for such clients.

**Trigger / Why now:**
This is not a new rule. The 2026 trigger is enforcement. Under Government Decree 309/2014, waste producers above certain thresholds per site per year must keep waste records and file an annual report via OKIRkapu by 1 March. The thresholds are more than 200 kg of hazardous waste, more than 2,000 kg of non-hazardous waste, or more than 5,000 kg of construction and demolition waste. In July and August 2026, Somogy county government office alone published dozens of signed decisions fining named firms **HUF 200,000** each for missing their 2024 and 2025 reports. Examples are Varese Autószerviz, Cseri Gumiszerviz, Gumi Profi Team, Kapos Mechanika and Kaposwash.

**Current workflow:**
1. The workshop hands waste (oil, filters, tyres, batteries) to a collector and files the receipt slips.
2. The required ongoing waste record (nyilvántartás, by site and EWC code) is often not kept.
3. Before 1 March, someone sums the slips by waste code and site and types them into OKIRkapu. Often nobody does this, and a fine follows.

**Pain:**
Fines of HUF 200,000 (about €500) are documented in public decisions, along with repeated warning and fine cycles. Thresholds are low: one workshop's used oil alone can pass 200 kg of hazardous waste.

**Existing solutions:**
- OKIRkapu manual entry, which is free.
- Environmental consultants (környezetvédelmi megbízott) who file for clients.
- Some waste collectors provide annual summaries (*unverified*).
- Dedicated waste-records software exists in the market but I could not identify specific products (*unverified*), so competitor diligence is **incomplete**.

**The gap:**
There appears to be nothing cheap and self-serve for the micro-producer. The tool would turn photographed collector slips into a compliant running waste record by EWC code and site, then produce the annual OKIR data (and the EPR quarterly report, if applicable), with deadline reminders. *Unverified* until the consultant and software landscape is mapped.

**Possible product:**
A "compliance inbox" for KÜJ holders. Users upload or forward collector slips, the tool maintains the legally required record, and it pre-builds the annual OKIR HIR submission plus a filing checklist. It can be bundled with the EPR quarterly report for the same KÜJ.

**MVP:**
Slip upload with manual or assisted EWC coding, threshold calculator, annual summary laid out to match OKIRkapu screens, and email/SMS deadline reminders.

**Pricing hypothesis:**
HUF 3,000–6,000 per month or HUF 30,000–50,000 per year per site. That is well under one HUF 200,000 fine. Accountants could get a white-label tier.

**How to find first customers:**
Published fine decisions on kormanyhivatalok.hu name the offending firms (a ready-made list of motivated prospects). Others are tyre and auto-service associations, the chamber of commerce (kamara) and accounting firms.

**Risks:**
The filing is annual, so engagement is low and churn is likely. Consultants are cheap. If collectors start filing on producers' behalf, demand disappears. OKIRkapu may not accept XML imports for HIR (*unverified*).

**Kill condition:**
Collectors already give clients ready-to-file OKIR summaries for free, or existing environmental software sells this at under about HUF 20,000 per year.

**Score:** 5/10

**Sources:**
- https://kormanyhivatalok.hu/system/files/dokumentum/somogy/2026-08/hgo_04467_4_2026_varese_autoszerviz_kft_hatarozat_alairt.pdf
- https://www.kormanyhivatalok.hu/system/files/dokumentum/somogy/2026-07/hgo_04182_4_2026-cseri-gumiszerviz-kft.-hatarozat_alairt.pdf
- https://www.kormanyhivatalok.hu/system/files/dokumentum/somogy/2026-07/hgo_04198_4_2026-gumi-profi-team-kft.-hatarozat_alairt.pdf
- https://www.kormanyhivatalok.hu/system/files/dokumentum/somogy/2026-07/hgo_04456_5_2026_kaposwash_kft_hatarozat_alairt.pdf
- https://www.kormanyhivatalok.hu/system/files/dokumentum/somogy/2026-07/hgo_04302-5_2026_trans-injekt-kft_adatszolgaltatas_engedelyes_figyelmeztetes_alairt.pdf
- https://kormanyhivatalok.hu/system/files/dokumentum/baranya/2025-09/3287-3-2025.pdf

---

### Opportunity: EPR quarterly report reconciliation for small importers and webshops

**Industry:**
Retail, e-commerce and import (packaged goods placed on the Hungarian market)

**Buyer:**
Finance or office manager at a small importer, distributor or webshop with an EPR obligation, or their accountant.

**Trigger / Why now:**
Hungary's EPR system (MOHU as concession holder) has been live since 1 July 2023. Producers report quarterly via OKIRkapu (data-sheet type KG:KGYF-NÉ, with KF codes and quantities). MOHU then invoices fees on the basis of these reports. Inaccurate data carries serious penalties.

**Current workflow:**
1. Pull purchases and sales from the invoicing or ERP system.
2. Map each SKU to its packaging materials, weights and KF codes in a spreadsheet.
3. Aggregate the totals and type them into OKIRkapu, or upload XML.
4. Reconcile against MOHU invoices.

**Pain:**
Mapping SKUs to KF codes is error-prone, and EPR questions recur on adozona.hu Q&A. The work is quarterly, with penalties.

**Existing solutions:**
- EY EPR data-upload tool, which generates OKIRkapu XML with consistency checks.
- korforgo.hu web app, marketed as a cheap and simple solution.
- Novitax module (produces lists only, no XML).
- Long-standing termékdíj/EPR consultants.
- EU-wide EPR services for foreign sellers.

**The gap:**
The only plausible remaining gap is automatically pulling SKU-level data from Számlázz.hu, Billingo or Shopify into an XML file. Competitors already cover most of this.

**Possible product / MVP:**
A connector from an invoicing API to a SKU packaging master to OKIRkapu XML.

**Pricing hypothesis:**
HUF 5,000–15,000 per month.

**How to find first customers:**
The MOHU producer register (*public availability unverified*), webshop associations and accountants.

**Risks:**
Crowded field (see existing solutions).

**Kill condition:**
korforgo.hu or the invoicing vendors already import from these platforms. That is likely.

**Score:** 3/10

**Sources:**
- https://adozona.hu/2023_as_adovaltozasok/Kozeleg_az_EPR_kovetkezo_negyedeves_adatszo_VE7RVE
- https://assets.ey.com/content/dam/ey-sites/ey-com/hu_hu/topics/tax/ey_epr_adatfeltolto_tool.pdf
- https://tudastar.novitax.hu/epr-adatszolgaltatas/?pdf=18343
- https://adozona.hu/brandContent/EPRdij_olcso_egyszeru_megoldas_39IVTK
- https://adozona.hu/2023_as_adovaltozasok/EPRbevallason_tul_erkeznek_a_MOHU_szamlai_MHW4UZ

## Rejected after competitor research

- **e-nyugta / receipt data reporting (mandatory from 1 Sep 2026, about 270k businesses).** This looked like the best why-now trigger. It was killed by NAV's **free ePénztárgép app** (smartphone, available since July 2025), free manual daily-total entry on the **KOBAK portal**, and **Billingo** automating it. Számlázz.hu and Billingo dominate cloud invoicing. NAV is not fining anyone until 31 Dec 2026.
  - https://szabkam.hu/hirek/NAV%20nyugta-adatszolgaltatas-e-penztargep-elektronikus-nyugta
  - https://telex.hu/pr-cikk/2026/09/14/nem-szunt-meg-a-nyugtatomb-ez-valtozott-szeptember-1-jen
  - https://hirlevel.egov.hu/2025/03/01/kitolja-az-e-nyugta-bevezetesenek-hataridejet-a-kormany-csak-2026-szeptemberetol-lesz-kotelezo-a-hasznalata/
- **Single-farm eGN / spray diary.** Killed by NÉBIH's free eGN web interface and FMIS products already connected through the NÉBIH API (e.g., AgroMAP/DAS-GEOD). Only the multi-client angle above survives.
- **Winery cellar-book and excise records.** Killed by the state **ePincekönyv**, which is integrated with the HNT information system and NÉBIH. Electronic excise records are mandatory only above 20k hl. https://www.portfolio.hu/premium/20230320/uj-ugyintezesi-felulet-a-szolo-boragazatban-603434

## Attractive problem, poor distribution

- **Waste records for micro-producers** (Opportunity 2). The pain and fines are real, but buyers are dispersed, the filing is annual, and many owners do not know they are obliged until fined. The public fine lists help partly.

## Too competitive

- EPR quarterly reporting (EY, korforgo.hu, consultants, Novitax).
- NAV Online Számla / eÁFA (Számlázz.hu, Billingo, accounting suites). This is a desk judgement and was not researched in depth.
- e-nyugta (NAV app, Billingo).

## Inaccessible markets

None. Hungary is legally accessible, but the language barrier and authority-specific API onboarding are significant for a non-Hungarian founder.
