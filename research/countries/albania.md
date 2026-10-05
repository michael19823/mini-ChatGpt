# Albania: Country Research

**Market size class:** small (about 2.4M residents; tourism-heavy economy; EU candidate country moving its laws toward the EU acquis).
**Accessibility:** open. No sanctions on software sales. Foreign SaaS can be sold directly; card and SEPA-adjacent payment rails work. Main barrier: government systems (e-Albania, DPT fiscalization) are national portals, and a public third-party API is confirmed only for fiscalization (certified-software model).
**Searches used:** 10 (small-market budget). WebFetch was not used.
**Date of research:** 2026-10-05.

## Summary verdict

Albania has plenty of regulatory activity in 2025-2026: Law 79/2025 on tax procedures (automated VAT returns, mandatory e-notifications), the short-term-rental tax regime from 1 Jan 2026, the new tourism-law categorization certificates, a food lot-traceability instruction from 1 Jan 2026, Law 57/2025 on integrated waste management, and a new Extended Producer Responsibility (EPR) law. Most of these produce either **one-time or annual** tasks, or tasks that **local certified vendors already cover** (Financa 5 and Alpha Web for accounting and payroll; devPOS, HotelBee and BESA OS for fiscalization). The market is small, so even a well-placed product has a low revenue ceiling unless it also sells into other Western Balkan countries (Kosovo, North Macedonia, Montenegro), which are moving their laws in the same direction. No opportunity reaches the "build now" bar. Two are worth noting at most as interview candidates or regional add-ons.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Accounting / payroll bureaus | Monthly payroll lists, social contributions, VAT books, e-Albania filings | Reject (too competitive) | Financa 5 and Alpha Web dominate, with built-in online declarations and fiscalization |
| All VAT payers | VAT return filing under Law 79/2025 | Reject | The DPT now auto-generates and files the return from fiscalized data within 24h, which removes the pain |
| Retail / all B2B and B2C sellers | Fiscalization (e-invoicing, real-time reporting) and the POS/POI card-acceptance mandate (30 May 2026) | Reject (too competitive) | Mature since 2021; many certified vendors (devPOS and others) |
| Short-term rental hosts (individuals) | Declaring rental income in DIVA (15%, annual) | Reject | Annual only, done by individuals or accountants, low willingness to pay |
| Hotels / guesthouses / registered accommodation | Guest registration with police, guest register, tourism tax, fiscal receipts | Weak candidate (see Opp. 1) | High frequency and mandatory, but Albanian PMS vendors already bundle fiscalization; the police-registration link is not verified |
| Accommodation / developers | Categorization certificate (new tourism rules; e-Albania only) | Reject | One-time, with no fixed term; done by consultants |
| Importers / producers (packaging, batteries, WEEE, vehicles) | EPR registration and reporting under the new EPR law and Law 57/2025 | Weak candidate (see Opp. 2) | New obligation, but implementing rules are unclear and collective schemes will likely do the reporting |
| Food processors / packers | Lot ("L") traceability marking, from 1 Jan 2026 | Reject | ERP and label printing already cover it; not a reporting workflow |
| Pharmacies | Medicine traceability / controlled-drug reporting | Reject (no evidence) | No 2025-2026 track-and-trace mandate found; e-prescription is state-run |
| Online sellers / e-commerce | DPT sectoral compliance plan for online trade (2026) | Reject | Enforcement campaign, not a new workflow; existing fiscal and accounting tools apply |

## Opportunities

### Opportunity: Small-accommodation compliance hub (guest registration + tourist register + tourism tax), bolted onto existing PMS and fiscal tools

**Industry:**
Hospitality: small hotels, guesthouses and apartment operators registered as accommodation structures, especially in Sarandë, Vlorë, Durrës and Tirana.

**Buyer:**
Owner-manager of a 3-40 room guesthouse or small hotel, or a property manager running several apartments registered as an accommodation business (NIPT).

**Trigger / Why now:**
- From 1 Jan 2026, short-term rental income is under a formal tax regime, and the tax administration cross-checks platform commissions against declarations.
- Booking.com requires hosts to declare a NIPT (reported from 1 November).
- New tourism-law rules make a categorization certificate mandatory for every accommodation structure, with applications through e-Albania only.
- Law 79/2025 makes e-communication with the DPT mandatory.
- The mandatory POS/POI card-acceptance deadline for accommodation was 30 May 2026.
- Enforcement is reported to be tightening in coastal towns.

**Current workflow:**
1. Take the booking (Booking.com, Airbnb, direct, WhatsApp).
2. At check-in, copy the passport details into a paper or Excel guest register and, per a consultancy guide, submit foreign-guest details to the police electronically within 24h (**unverified** mechanism and portal).
3. Calculate and collect the municipal tourism tax per night and record it in the register.
4. Issue a fiscalized invoice through a POS/PMS (HotelBee, BESA OS, devPOS and others).
5. The accountant reconciles platform payouts and commissions against fiscal invoices and the tax declarations.

**Pain:**
Fines from the tourism inspectorate, DPT and fiscalization authority are reported. About 28,000 apartments are listed on Booking/Airbnb (Shqiptarja). The work is per guest and happens daily in season. All evidence of pain comes from consultancy guides; no first-hand complaints were found.

**Existing solutions:**
- HotelBee (PMS with Albanian fiscalization)
- BESA OS (Albanian PMS, POS, beach POS and accounting)
- PMS Expert (Tirana)
- devPOS (certified fiscal software)
- Roomspilot (Balkan channel manager)
- Local accountants doing the reconciliation by hand

**The gap:**
None of the PMS pages found says it submits guest data to the police / e-Albania automatically, or reconciles platform payouts and commissions against fiscal invoices and tourism-tax records. Italian PMSs such as CybHotel do this for Alloggiati Web. **Unverified:** whether Albanian PMSs already do it quietly, and whether a submission API exists at all.

**Possible product:**
An add-on that reads bookings from the channel manager or iCal, captures passports by scan, prepares the police/e-Albania guest submission, runs the tourist register and per-night tourism tax by municipality, and produces a monthly reconciliation pack for the accountant.

**MVP:**
Passport scan → guest register + tourism-tax ledger (Sarandë and Vlorë rules) + exportable monthly accountant pack. Police submission stays manual (pre-filled copy-paste) until an integration path is confirmed.

**Pricing hypothesis:**
EUR 15-40 per property per month, seasonal. The ceiling is low.

**How to find first customers:**
- Central Tourism Register of categorized structures (Ministry of Tourism)
- Booking.com and Airbnb listings in Sarandë and Vlorë
- Accounting firms that serve hosts (for example sherbimekontabiliteti.al, alprofitconsult.al)

**Risks:**
- The police-registration obligation and its electronic channel are unverified.
- e-Albania probably has no API, so browser automation would be fragile.
- Local PMS vendors can add the feature quickly.
- Demand is seasonal.
- Small hosts have low willingness to pay.

**Kill condition:**
Either guest registration is done automatically by the state (or not enforced), or HotelBee or BESA OS already ship police submission plus tourism tax.

**Score:** 4/10

**Sources:**
- https://sherbimekontabiliteti.al/en/albania-short-term-rental-license/
- https://www.hlb.al/short-term-rentals-in-albania-new-tax-reporting-obligations-from-2026/
- https://www.balkanweb.com/rregullat-e-reja-te-booking-nga-1-nentori-ata-qe-japin-apartamente-me-qira-duhet-te-deklarojne-nipt-in-ndryshe-do-te/
- https://shqiptarja.com/lajm/shqiptaret-hapin-dyert-per-booking-dhe-airbnb-lulezon-biznesi-i-qiradhenies-mbi-28-mije-apartamente-te-listuara
- https://businessmag.al/rregulla-te-reja-per-turizmin-certifikate-e-detyrueshme-per-cdo-strukture-akomoduese/
- https://www.fiscal-requirements.com/news/5525
- https://hotelbee.co/features/albanian-fiscal-system
- https://besa.al/albania-hotel-fiscalization-guide/
- https://pms.expert/en/online-hotel-software-system/
- https://www.prostay.com/blog/hotel-guest-registration-police-reporting-2026/

### Opportunity: EPR placed-on-market data prep for importers and distributors (packaging, batteries, WEEE)

**Industry:**
Importers, wholesalers and small manufacturers that place packaged goods, batteries or electrical equipment on the Albanian market.

**Buyer:**
Finance or compliance manager at a mid-size importer or distributor (food and beverage, FMCG, electronics), or the accounting firm serving them.

**Trigger / Why now:**
- A new Law "On Extended Producer Responsibility" covers packaging, batteries, end-of-life vehicles and WEEE. An EU guide (EEAS, 2026) explains its registration and reporting obligations.
- The integrated waste management law (Law 57/2025) was adopted 16 Oct 2025.
- EPR is an EU-accession condition.
- Entry into force is reported as "1 December"; the exact year and the implementing VKMs are **unverified**.

**Current workflow (expected):**
1. Pull import declarations (customs) and purchase and sales data from Financa 5 / Alpha Web or an ERP.
2. Convert SKUs to packaging weight by material (paper, plastic, glass, metal), battery type and EEE category, by hand in Excel.
3. Register with the ministry or a collective scheme and report quantities placed on the market, annually or more often.
4. Pay scheme fees and keep the evidence for audit.

**Pain:**
SKU-to-material-weight mapping is the classic EPR pain in the EU. In Albania it would be new and done in Excel. There is no first-hand evidence yet, because the obligations have not started.

**Existing solutions:**
- Collective schemes / producer responsibility organizations (to be created), which usually provide member reporting templates
- Environmental consultants
- EU EPR SaaS (for example Lizee/Ecosystem-type tools, Reflaunt; **unverified** Albanian coverage)
- The existing VKM 177/2012 on packaging, under which annual packaging reports already go to the ministry

**The gap:**
A packaging-weight master-data builder from ERP and customs data, in Albanian, that produces the scheme or ministry report. Only valuable if reporting is more often than annual and the schemes do not offer it.

**Possible product:**
Upload product lists and import declarations; get a packaging material/weight catalogue with the gaps flagged, then a periodic placed-on-market report and fee estimate per scheme.

**MVP:**
Excel/CSV importer + material-weight catalogue + one report template for the first approved packaging scheme.

**Pricing hypothesis:**
EUR 50-150/month for importers. Alternatively, a white-label licence to a scheme or consultancy.

**How to find first customers:**
- The producer register, once created
- Albanian chambers of commerce and the AmCham / Foreign Investors Association member lists
- Importer lists from customs statistics
- Packaging-related firms licensed under VKM 177/2012

**Risks:**
- Implementing acts are delayed.
- Reporting may be annual only.
- Schemes may bundle reporting tools.
- The small market limits revenue.
- Better as a Western Balkans regional product (Serbia, North Macedonia and Kosovo have similar regimes).

**Kill condition:**
Implementing VKMs set annual-only reporting through a simple ministry form, or the first scheme provides a free member portal.

**Score:** 4/10

**Sources:**
- https://www.eeas.europa.eu/sites/default/files/2026/documents/Guide%20English_EPR%20Law_0.pdf
- https://ceelegalmatters.com/briefings/31285-a-new-milestone-in-albania-s-environmental-legislation-law-no-57-2025-on-integrated-waste-management
- https://albaniatech.org/the-extended-producer-responsibility-law-where-responsibilities-begin-and-end/
- https://scantv.al/english/lajme/shqiperia/bizneset-do-financojne-grumbullimin-dhe-riciklimin-e-mbetjeve-pe-i30416
- https://www.wb6cif.eu/wp-content/uploads/2025/11/Policy-Brief-EPR-in-the-Western-Balkans_2025.pdf
- https://ishmt.gov.al/wp-content/uploads/2024/01/VKM-Nr.-177-date-6.3.2012-Per-ambalazhet-dhe-mbetjet-e-tyre.pdf

## Rejected after competitor research

- **Payroll and tax-declaration automation for accounting firms.** Killed by Financa 5 and Alpha Web. Both file purchase and sales books, VAT, payroll lists, social and health insurance, withholding and balance sheets online, with built-in fiscalization. (https://sherbimekontabiliteti.al/guida/financa-5/)
- **VAT-return preparation tool.** Killed by the state. Under Law 79/2025, the DPT auto-generates and files the VAT return from fiscalized data if the taxpayer does not file. (https://www.fiscal-requirements.com/news/5091, https://europe.thomsonreuters.com/compliance/regulatory-updates/albania)
- **E-invoicing / fiscalization connector.** Killed by a mature certified-vendor market since 2021: devPOS, HotelBee, BESA OS and ERP modules, plus international providers such as Pagero and Voxel. (https://devpos.al/, https://www.voxelgroup.net/compliance/guides/albania/)
- **Short-term-rental DIVA income declaration helper.** Killed by low frequency: annual, due 31 March. Individuals or accountants do it in DIVA; there is no NIPT requirement and willingness to pay is low. (https://gazetadita.al/te-ardhurat-nga-airbnb-booking-dhe-rrjetet-sociale-si-ti-deklaroni-ne-diva/, https://euronews.al/en/no-tax-id-required-for-short-term-apartment-rentals-taxes-to-be-paid-through-diva/)
- **Food lot-traceability software (from 1 Jan 2026).** Killed because the requirement is only an "L" lot code on labels, which ERP and label printers already handle. (https://www.balkanweb.com/udhezimi-i-ri-si-do-gjurmohen-produktet-ushqimore-qe-nga-1-janari-2026/)

## Attractive problem, poor distribution / weak economics

- **Accommodation categorization certificate preparation.** This is a real new mandatory step, done electronically on e-Albania only. But it happens once per structure, the certificate has no expiry, and consultants (for example AlProfit Consult) already sell it as a service. (https://telegraf.al/ekonomi/kategorizimi-i-strukturave-akomoduese-certifikimi-ne-dhjetor/, https://alprofitconsult.al/ligji-i-ri-i-turizmit-cfare-ndryshon-per-strukturat-akomoduese-dhe-stacionet-e-plazhit/)
- **Online-seller tax formalization.** The DPT's 2026 sectoral plan targets e-commerce sellers. The buyers are informal micro-sellers who are not looking to buy compliance software. (https://www.vatupdate.com/2026/08/26/albania-targets-online-businesses-in-new-tax-compliance-plan/)

## Too competitive

- Accounting / payroll (Financa 5, Alpha Web)
- Fiscalization / POS (devPOS and other certified vendors)
- Hotel PMS with fiscalization (HotelBee, BESA OS, PMS Expert)

## Not researched / evidence gaps

- **Pharmacy track-and-trace.** No 2025-2026 mandate was found.
- **Medicinal and aromatic plant exporters.** Organic certificates (COI via EU TRACES) and residue testing are a possible traceability niche. It was not searched because of the search budget; worth a regional look.
- **Façon textile and footwear exporters to Italy.** Possible EU Digital Product Passport work later; not researched.
