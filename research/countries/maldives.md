# Maldives: opportunity research

**Market class:** small economy (about 0.5m residents), concentrated in tourism and fisheries. Budget: 10 searches, all used. WebFetch was not used. Everything below comes from search-result summaries. Figures marked "estimate" or "unverified" were not confirmed against a primary document.

**Accessibility:** the Maldives is not sanctioned, and nothing found says a foreign vendor needs a licence to sell SaaS there. Sales would be in USD by card or bank transfer. A foreign supplier of digital services may itself owe GST registration (unverified for B2B SaaS, so check before selling). Accessible.

**Bottom line:** the market is tiny. The only workflow with a real 2026–2027 regulatory trigger and many small, identical buyers is **guesthouse guest-data and tax reporting**. MIRA's new MGIS system starts in Nov 2026 for properties with more than 50 beds and on 1 Jan 2027 for everyone else. That sits on top of the existing Tourism Ministry TIMS monthly statistics. Even this case is weak: the regulator gives guesthouses a free portal, and PMS vendors are present locally. A foreign founder could at best run it as a small add-on business, or as a feature inside a hospitality-compliance product for South Asia or the Indian Ocean.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Guesthouses / small hotels (inhabited islands) | MGIS guest reporting + TIMS monthly stats + Green Tax/GST monthly returns | **Shortlist (weak)** | New mandatory system from Nov 2026 / Jan 2027 with an integration path. Free MIRA portal and PMS vendors limit the gap |
| Any employer of expatriates (construction, resorts, retail) | Xpat quota, work permit, worksite registration (new Jan 2026) | Shortlist (weak) | Mandatory and recurring with a new 2026 document requirement. Handled today by appointed agents and HR/EOR firms |
| Foreign tour operators / OTAs / DMCs selling Maldives | New GST registration (MIRA 120) and MIRA 211 return from 1 Oct 2026 | Shortlist (weak) | Real new obligation, but buyers are abroad and served by global indirect-tax compliance firms |
| Fisheries / tuna exporters | Catch certificates, EU IUU CATCH system (mandatory from 10 Jan 2026) | Reject | Government FIS already covers logbooks, purchases and catch certificates. Only a handful of exporters |
| Payroll (all employers) | Pension (MPAO), employee withholding tax (EWT), service-charge pooling | Reject | Mercans (Malé-based), global EOR/payroll firms and local accountants cover it. Volume is small |
| General B2B/B2C (GST e-invoicing) | MIRA e-invoicing | Reject for now | ADB-funded scoping mission only began June 2026. No mandate or specification published. Local POS vendor (Ewity) is well placed |

## Opportunities

### Opportunity: Guesthouse "one booking → MGIS + TIMS + Green Tax" compliance bridge

**Industry:**
Tourism accommodation (guesthouses and small city hotels on inhabited islands, liveaboards secondarily)

**Buyer:**
Owner-manager or front-office/admin person at independent guesthouses (typically under 50 rooms) that run on spreadsheets, Booking.com/Airbnb extranets, or a light PMS without MGIS integration.

**Trigger / Why now:**
MIRA launched the Maldives Guest Information System (MGIS) for Green Tax-registered businesses. Properties with more than 50 beds must report through it from November 2026. All other Green Tax registrants, i.e. the long tail of guesthouses, must start on 1 January 2027. MIRA says existing guest-management systems can integrate, which implies an API. Separately, all tourist establishments must already file monthly occupancy and nationality statistics on the Tourism Ministry's TIMS portal by the 7th, and the ministry has threatened penalties for missed filings. Green Tax and GST are filed monthly on MIRAconnect by the 28th, and electronic filing becomes mandatory for all registrants from 1 Jan 2027.

**Current workflow:**
1. Bookings arrive via OTAs, WhatsApp or direct, and guest passport data is copied into a spreadsheet or PMS.
2. Each month, staff tally guest-nights by nationality for the TIMS statistics report (due by the 7th).
3. Staff calculate Green Tax (USD 6 per guest-night for small inhabited-island guesthouses, USD 12 otherwise, since Jan 2025) and GST, then file on MIRAconnect (due by the 28th).
4. From 2027, guest-level records also have to be submitted to MGIS, either manually in the portal or through PMS integration.

**Pain:**
The same guest-night data is re-keyed into three filings for two agencies. Penalties apply for late or missing statistics, and Green Tax is computed from guest-nights. Evidence that MGIS is expected to remove manual work for properties with a PMS: MIRA's own framing that "manual work in submitting information will come to an end" once systems integrate. No complaints from operators were found (unverified pain level).

**Existing solutions:**
- MGIS portal itself (free; MIRA says it especially benefits guesthouses without a PMS). This is the main substitute.
- Hotelogix (resold locally by Octopus Systems, aimed at small and mid-size properties)
- eZee Absolute (markets a Maldives version)
- Qvian (Maldives hotel software page)
- EVETS (cloud ERP/POS list for Maldivian resorts and guesthouses)
- MaldivesforYou (local channel manager)
- Local accountants who file GST and Green Tax

**The gap:**
No source showed any PMS that already submits to MGIS *and* produces TIMS statistics *and* pre-fills the Green Tax/GST return from the same records. Guesthouses that don't use a PMS will key data into MGIS by hand. The gap only holds if MGIS doesn't itself feed TIMS and MIRA returns. MIRA's "tourist information from one network" framing suggests the government may aim to do exactly that.

**Possible product:**
A lightweight guest register (phone-friendly, with passport scan or OTA import) that pushes each stay to MGIS via the API. It would generate the TIMS monthly statistics and a Green Tax/GST working sheet for MIRAconnect, with an end-of-month reconciliation: OTA payouts vs guest-nights vs tax declared.

**MVP:**
A CSV/OTA-reservation import that outputs (a) an MGIS upload or API push, (b) the TIMS nationality/occupancy table, and (c) a Green Tax computation. Target a single property type: inhabited-island guesthouses.

**Pricing hypothesis:**
USD 15–30 per property per month (estimate). Small guesthouses are price-sensitive and the government alternative is free. The maximum realistic size is a few hundred paying properties, i.e. a few thousand USD of monthly revenue.

**How to find first customers:**
Tourism Ministry public "Registered Facilities" directory (tourism.gov.mv/en/registered/facilities), Maldives guesthouse associations (not verified by search), Facebook groups for guesthouse operators, and accounting firms that file Green Tax for several guesthouses (a reseller channel).

**Risks:**
- MGIS API access for third parties is unconfirmed.
- MIRA may make MGIS the single source and auto-fill returns.
- Local PMS resellers (Octopus/Hotelogix, eZee) will add MGIS integration quickly.
- The market is very small. Guesthouse count is roughly 1,000 (estimate, unverified).
- A local presence and Dhivehi-language support may be expected.

**Kill condition:**
Either of these kills it:
- MIRA doesn't publish a third-party API, or limits integration to approved vendors.
- MGIS submissions automatically feed TIMS statistics and the Green Tax return.

Customer interviews showing guesthouses are happy entering data in the free portal would also kill it.

**Score:** 5/10

**Sources:**
- https://hoteliermaldives.com/resorts-hotels-to-begin-reporting-guest-data-through-new-mira-system/
- https://edition.mv/business/54543
- https://edition.mv/business/54545
- https://hoteliermaldives.com/tourism-ministry-penalize-tourism-facilities-fail-monthly-stats-submissions/
- https://tourism.gov.mv/en/circulars/reminder_of_submission_of_statistical_reports
- https://www.tourism.gov.mv/en/registered/facilities
- https://mira.gov.mv/Pages/View/FAQ_GreenTax
- https://www.vatupdate.com/2026/09/23/maldives-introduces-gst-registration-and-reporting-rules-for-overseas-tourism-suppliers/
- https://hoteliermaldives.com/hotelogix-pms-now-available-in-maldives/
- https://www.ezeeabsolute.com/hotel-software-in-maldives.php
- https://qvian.com/hotel-management-software-maldives
- https://evets.net/resources/top-cloud-erp-pos-systems-maldives-resorts-hotels

---

### Opportunity: Expatriate quota and work-permit compliance tracker for SME employers

**Industry:**
Construction, retail, resort contractors and other SMEs that hire expatriate workers

**Buyer:**
HR/admin officer or the owner of a Maldivian company employing dozens of expatriate workers, or the independent "Xpat representatives" (agents) who file on behalf of many employers.

**Trigger / Why now:**
Under amended rules effective 1 January 2026, applications for permanent quotas now require worksite registration, plus a notarised Work Site Declaration Form and an affidavit, on top of the existing documents. Quota fees are MVR 2,000 per year per quota, and work-permit volumes are high (over 83,000 permits issued in one year, per Edition.mv). Everything has to be filed through the Ministry's Xpat online system.

**Current workflow:**
1. Employer or appointed agent collects passports, medicals, contracts and worksite documents for each worker.
2. Staff apply for and renew quotas and work permits in the Xpat portal, and pay fees.
3. Expiry dates for permits, visas, medicals and quota fees are tracked in spreadsheets.
4. Payroll, pension (Maldivians only) and EWT are handled separately.

**Pain:**
Missed renewals cause fines and leave workers without valid status, and the new 2026 worksite documentation adds per-quota paperwork. No operator complaints were found. Pain level is an inference.

**Existing solutions:**
- Xpat system itself (government portal)
- Licensed agents/representatives who do the filing manually
- Mercans and global payroll/EOR providers (TopSource, Rivermate) that track permit fees
- Generic HR software and spreadsheets

**The gap:**
A document-and-expiry tracker, linked to quota slots and worksites, that warns ahead of renewals and builds the 2026 worksite-registration pack. The portal is unlikely to expose an API, so filing itself would stay manual.

**Possible product:**
A multi-employer dashboard for Xpat agents covering workers, quotas, worksites, document expiry and fee due dates. It would include templated declaration packs and reminders by WhatsApp or email.

**MVP:**
A spreadsheet import of the worker roster with expiry alerts and a checklist generator for the 2026 worksite declaration.

**Pricing hypothesis:**
USD 50–150/month per agent or mid-size employer (estimate).

**How to find first customers:**
Agents registered as Xpat representatives (no public list found, unverified), construction contractor registries, and the Maldives National Chamber of Commerce and Industry (MNCCI) membership.

**Risks:**
- It is close to generic HR/document-expiry software.
- No portal integration means low lock-in.
- Agents are cheap and paid per transaction.
- The government may add expiry alerts to Xpat itself.

**Kill condition:**
Agents report that the Xpat portal already shows expiry dashboards and reminders. Or they won't pay more than about USD 30/month.

**Score:** 4/10

**Sources:**
- https://www.ctlstrategies.com/latest/regulation-on-employment-of-expatriate-workers/
- https://maldives.net.mv/42590/maldives-enacts-new-expatriate-employment-regulations/
- https://edition.mv/news/44649
- https://trade.gov.mv/wp-content/uploads/Regulation-on-Foreign-Employment.pdf
- https://topsourceworldwide.com/global-payroll/maldives/

---

### Opportunity: Maldives inbound-tourism GST filing for overseas tour operators and OTAs

**Industry:**
Travel distribution (foreign tour operators, DMCs, bed banks, OTAs, charter operators selling Maldives packages)

**Buyer:**
Finance/tax manager at small or mid-size foreign tour operators and DMCs that sell Maldives resort packages.

**Trigger / Why now:**
Non-resident suppliers of Maldives inbound tourism products must register for GST on form MIRA 120 and charge 17% tourism GST on supplies invoiced or paid from 1 October 2026. They file a new return, MIRA 211, and electronic filing through MIRAconnect is mandatory for all registrants from 1 January 2027.

**Current workflow:**
1. Operator registers online (a four-step MIRA process).
2. Each period, the operator extracts Maldives-component bookings from its reservation system and separates the inbound-tourism product value from its margin. The exact split rules were not verified.
3. The operator computes GST, files MIRA 211 and pays from abroad.

**Pain:**
The obligation is brand new and unfamiliar to small foreign operators. Bookings mix several destinations, and the operator has to extract the Maldives part.

**Existing solutions:**
- Global indirect-tax compliance firms and Big-4/local tax advisers (Riza & Co and others)
- Reservation-system tax modules
- Do-it-yourself filing in MIRAconnect

**The gap:**
A mapping from booking exports to MIRA 211 lines, for small operators with only a few dozen Maldives bookings a month. Whether this is a gap is unverified. Advisers may handle it cheaply.

**Possible product:**
Upload a booking export, tag the Maldives components, and receive a calculated MIRA 211 working file plus a reconciliation against resort invoices.

**MVP:**
A CSV-to-MIRA-211 calculator with an audit trail.

**Pricing hypothesis:**
USD 50–100/month or per-return pricing (estimate).

**How to find first customers:**
Resorts' lists of tour-operator partners, trade-show exhibitor lists (ITB, ATM, FITUR) and Maldives specialist operators in the UK, DE, IT and CN.

**Risks:**
- Buyers are scattered globally.
- Many larger operators already use tax firms.
- Rules may be revised.
- Volume per operator is low.

**Kill condition:**
Advisers already offer a fixed-fee service under about USD 100/month, or MIRA 211 turns out to be trivial to file.

**Score:** 4/10

**Sources:**
- https://www.vatupdate.com/2026/09/23/maldives-introduces-gst-registration-and-reporting-rules-for-overseas-tourism-suppliers/
- https://lookuptax.com/tax-changes/maldives/nonresident-supplier-regime-2026
- https://corporatemaldives.com/mira-streamlines-online-gst-registration-for-overseas-suppliers/
- https://www.traveldailynews.asia/tourism-policy/maldives-tourism-tax-overseas-operators/
- https://rcolawyers.com/guides/4-maldives-goods-and-services-tax/

## Rejected after competitor research

- **Tuna export traceability / EU catch certificates:** killed by the government **Fisheries Information System (FIS)**. It already covers logbooks, fish purchases, licences and catch certificates. There are also very few exporters, all large or state-linked (e.g. MIFCO). Sources: https://ipnlf.org/future-of-fish-hails-the-maldives-new-fisheries-information-system-for-one-by-one-tuna-as-a-big-step-forward-for-fisheries-management/ and https://island.is/en/o/directorate-of-fisheries/announcements/new-eu-rules-on-catch-certificates-take-effect-on-the-10th-of-january-18-12-2025
- **Payroll / pension (MPAO) / EWT filing:** killed by **Mercans** (headquartered in Malé), global EOR/payroll providers (TopSource, Rivermate) and local accountants. Volume is too small for a new entrant. Sources: https://topsourceworldwide.com/global-payroll/maldives/ and https://www.rivermate.com/guides/maldives/taxes
- **GST e-invoicing connector:** premature. MIRA only began an ADB-funded e-invoicing mission in June 2026, with no mandate or specification yet. A local POS vendor (**Ewity**) and accounting packages would add it when the mandate comes. Revisit in 2027–2028. Sources: https://en.maaldif.com/13299/ and https://ewity.com/

## Attractive problem, poor distribution

- Inbound-tourism GST for overseas tour operators. The obligation is real, but buyers are worldwide and hard to reach from a Maldives-only product.

## Too competitive

- Resort-level PMS and ERP compliance. Large resorts run Opera-class PMS, local integrators (Octopus Systems) and ERP vendors (EVETS list), so MGIS integration there will come from existing vendors.

## Note on viability

There is no strong standalone opportunity for a solo founder. The most realistic play is to add MGIS/TIMS/Green Tax reporting as a module to a broader small-hospitality compliance product: one booking feeding several government filings in several island or tourism countries (e.g. Sri Lanka, Seychelles, Mauritius). Alternatively, partner with a local PMS reseller as an integration contractor.
