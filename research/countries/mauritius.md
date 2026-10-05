# Mauritius: Indie-Hacker Opportunity Research

**Date:** 2026-10-04 · **Market size class:** small (about 1.3M people, upper-middle-income, English/French/Kreol; budget of 10 searches used)
**Accessibility:** Open. There are no sanctions and no data-localisation barrier to selling SaaS. English is the language of law and the MRA, and French is widely used in business. The Data Protection Act 2017 (GDPR-like) applies to guest and KYC data.

**Bottom line:** Mauritius is small and has an unusually strong local vendor and Big-4/consultant ecosystem, so few standalone opportunities exist. Two niche opportunities score 5/10 at most. Both depend on new 2025–2026 rules: the €3/night Tourist Fee (from 1 Oct 2025) and the FIAMLA administrative-penalty regime for DNFBPs (in force 18 Nov 2025). The loudest trigger, MRA e-invoicing Phase 3, is already crowded. Mauritius works best as an add-on market to a product built for a larger market, for example a multi-island short-term-rental (STR) tourist-tax tool or an AML pack for small professional firms in Africa and the Indian Ocean.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| All VAT-registered SMEs (e-invoicing) | Real-time fiscalisation of invoices via MRA EBS/MIRA API (Phase 3: turnover > MUR 40M from 1 Sep 2026) | Too competitive | BDO from MUR 1,850/month, Odoo apps ($218–$516), Greytrix for Sage, an MRA-published list of EBS solution providers |
| Payroll bureaus / all employers | Monthly joint PAYE + CSG + NSF + Training Levy return to MRA (file spec published) | Too competitive | Mature payroll vendors (e.g. Sage VIP Mauritius) already implement the MRA file specs, and the spec is stable |
| Tourist accommodation (guesthouses, tourist residences, villas, STR conciergeries) | Monthly Tourist Fee return and EUR remittance with per-guest exemptions | **Opportunity (5/10)** | New in Oct 2025, guest-level exemption evidence needed, small operators on OTAs, so far only a light competitor |
| DNFBPs (small accountants, real-estate agents, jewellers, notaries) | FIAMLA AML/CFT: FIU registration, risk assessment, CDD files, record keeping, regulator inspections | **Opportunity (4–5/10)** | New administrative-penalty regs (Nov 2025) and an AML/CFT/CPF Bill 2026, but buyers are small and consultants dominate |
| All companies (BO/UBO) | Beneficial-ownership register + declaration + filing in CBRIS (Finance Act 2025; 30 Jun 2026 deadline) | Reject | Mostly a one-time event plus event-driven updates, and management companies/CSPs bundle it in their fees |
| Pharmacies | Dangerous Drugs Act 2000 / Pharmacy Act registers for controlled drugs | Insufficient evidence | No evidence found of a recurring electronic return or a new 2025–26 trigger, and the pharmacy count is unverified |

---

### Opportunity: Tourist Fee & Guest-Register Compliance for Small Tourist Accommodation

**Industry:**
Tourism: guesthouses, tourist residences (licensed villas/apartments), small hotels, and STR property managers/conciergeries.

**Buyer:**
Owner-manager of a guesthouse or tourist residence, or the operations manager of a conciergerie managing 5–100 villas/apartments on Airbnb/Booking.com.

**Trigger / Why now:**
Since 1 Oct 2025, every "Domaine, Guesthouse, Hotel and Tourist residence" registered (or required to be registered) under the Tourism Authority Act must charge **€3 per tourist per night** (age 12+). The manager must file a **monthly return** and remit **in euro** to the MRA by the end of the following month. Exempt guests include Mauritian residents, Mauritian-passport holders living abroad, Premium Visa holders and Residence Permit holders. The MRA administers the fee and publishes a guide and notes on filling in the return.

**Current workflow:**
1. Bookings arrive from Airbnb, Booking.com, Vrbo or direct (WhatsApp/email). Guest names, ages and nationalities sit in OTA extranets or chat threads.
2. The host checks each guest's age and exemption status (resident? Mauritian passport? Premium Visa?) and keeps the evidence by hand, if at all.
3. The host counts eligible guest-nights per property per month in a spreadsheet.
4. The host collects the fee from guests (at check-in, or folded into the price), converts and reconciles it in EUR, and fills in the MRA monthly return online.
5. Conciergeries repeat this for each owner/property and allocate the fee back to each owner's statement.

**Pain:**
Mandatory monthly filing with payment in a foreign currency. A vendor blog states that most OTAs do not collect the fee automatically (unverified; this needs checking per platform). Exemptions depend on guest documents the OTA does not capture. The tax falls on the smallest operators, who have no PMS. Local conciergerie blogs already write about the hidden admin cost of managing STRs alone.

**Existing solutions:**
- Lodge Compliance (lodgecompliance.com), a multi-country STR compliance site with a Mauritius page. Its depth is unverified and it may be guidance only.
- Hotel PMS systems (Opera and the like, used by big groups), which may add tourist-fee fields. Coverage for small properties is unverified.
- Conciergeries and property managers (e.g. Hevea Conciergerie, First Grand Property Management) that do it by hand as part of a 15–25% commission (commission level is an estimate).
- Accountants filing the return for the host.
- Spreadsheets plus the MRA e-service.

**The gap:**
No tool was found that takes OTA bookings (iCal/CSV exports), asks guests for their exemption evidence, and outputs the exact MRA monthly figures per property and per owner. Big hotels are served by their PMS. The long tail of licensed and unlicensed STRs is not served.

**Possible product:**
"Tourist Fee autopilot." It imports bookings from Airbnb/Booking CSV/iCal, sends guests a pre-arrival link to declare age, residence and passport status (with an upload), computes the eligible nights, produces the monthly MRA return figures plus an audit pack, and splits the fee per owner for conciergeries.

**MVP:**
CSV/iCal import, an exemption rules engine based on the MRA guide, a guest declaration web form, and a monthly return summary with PDF evidence export. No MRA API is needed: the user keys the figures into the MRA e-service.

**Pricing hypothesis:**
€5–10/property/month for owners, and €2–4/property/month (volume pricing) for conciergeries. This is a modest market, so roughly €2–6k MRR at best in Mauritius alone (estimate).

**How to find first customers:**
The Tourism Authority register of licensed tourist residences and guesthouses, the MRA tourist accommodation registrations (not public), Airbnb/Booking listings in Grand Baie, Flic-en-Flac and Trou-aux-Biches, local conciergerie websites, and AHRIM (hotel association) for small members.

**Risks:**
Airbnb or Booking may start collecting and remitting the fee themselves, which would kill most of the long tail. The market is small (property counts are unverified, an estimate in the low thousands). Many STRs are unlicensed and avoid compliance altogether. Some PMS/channel managers (e.g. Hostaway, Guesty) may add a Mauritius tax rule.

**Kill condition:**
Airbnb/Booking announce collection of the Mauritius Tourist Fee, or interviews with 10 conciergeries show the fee is a 15-minute monthly spreadsheet task.

**Score:** 5/10. It has a real why-now and is mandatory and monthly, but the market is tiny and OTA collection is a risk. It is better framed as one module of a multi-country tourist-tax tool for Indian Ocean and Africa STR hosts (Seychelles, Zanzibar, Cape Verde, etc.).

**Sources:**
- MRA, Registration of Tourist Accommodation and Payment of Tourist Fee: https://mra.mu/index.php/eservices1/tourist-fee
- MRA Guide on Tourist Fee: https://www.mra.mu/download/GuideTouristFee.pdf
- MRA Communiqué, Tourist Fee (11 Sep 2025): https://www.mra.mu/download/CoTouristFee11092025.pdf
- MRA Notice to Tourists (6 Oct 2025): https://www.mra.mu/download/NoticeTourists061025.pdf
- First Grand Property Management, what the €3 fee means for STR hosts: https://firstgrandpropertymanagement.com/mauritius-new-tourist-fee-what-the-e3-per-night-tax-means-for-airbnb-and-short-term-rental-hosts/
- Lodge Compliance, Mauritius: https://www.lodgecompliance.com/countries/mauritius
- Hevea Conciergerie, hidden costs of solo STR management: https://www.heveaconciergerie.com/blog/couts-caches-gestion-locative-solo-maurice
- Aptec, Mauritius tourist fee explained: https://www.aptec.mu/blogs/mauritius-tourist-fee-explained

---

### Opportunity: AML/CFT Compliance Pack for Small DNFBPs (accountants, real-estate agents, jewellers)

**Industry:**
Designated non-financial businesses and professions: professional accountants (MIPA-supervised), real-estate agents, dealers in jewellery/precious metals and stones (FIU-supervised), and small law/notary offices.

**Buyer:**
The owner or the MLRO/compliance officer of a 1–20-person firm.

**Trigger / Why now:**
- The FIAMLA (Administrative Penalties) Regulations 2025 came into operation on 18 Nov 2025. They introduce graded penalties, from moderate to high gravity, that regulators can impose on reporting persons for AML/CFT breaches.
- The AML/CFT/CPF (Miscellaneous Provisions) Bill 2026 broadens FIU powers ahead of FATF follow-up.
- Section 14C FIAMLA requires every reporting person to register with the FIU.
- The Finance Act 2025 tightened BO/UBO rules (written BO declarations, internal BO register, 30 Jun 2026 transitional deadline), which adds to CDD evidence requirements.

**Current workflow:**
1. The firm buys a policy template or a consultant engagement (gap analysis, policy, training).
2. Client CDD is done with Word/Excel checklists and copies of ID and proof of address kept in email and folders.
3. Business risk assessment and client risk ratings are done once, in a spreadsheet, and rarely updated.
4. Sanctions and PEP screening is done by hand with Google, UN or EU lists.
5. Before a regulator inspection, the firm scrambles to rebuild evidence.

**Pain:**
Penalties are now administrative, so regulators can impose them without court action, and they are graded. Regulators (FIU, MIPA) run supervisory training aimed at DNFBPs. Small firms lack in-house compliance staff.

**Existing solutions:**
- Consultants and law firms such as Appleby ARC (regulatory and compliance services), plus the Big 4 and local compliance firms
- Global screening/KYC platforms: LSEG World-Check (has a DNFBP offering), ComplyAdvantage, Sumsub (enterprise pricing)
- Management-company platforms used by Global Business CSPs (not aimed at domestic DNFBPs)
- Generic templates and spreadsheets

**The gap:**
No affordable, Mauritius-specific tool was found that combines FIAMLA/FIAML Regulations 2018 checklists, client risk scoring, CDD document expiry tracking, UN/MU sanctions screening and an "inspection-ready" export for MIPA/FIU. Only enterprise screening tools and consultants exist, but this is unverified because a local regtech may exist.

**Possible product:**
A lightweight AML file manager for small Mauritian DNFBPs. It provides a client onboarding questionnaire, a risk-rating rules engine mapped to FIAMLA and sector guidance, document expiry reminders, a sanctions-list check against the UN and national lists, and a one-click inspection pack.

**MVP:**
A client register, a CDD checklist per client type (individual, company, trust), a risk score, an expiry tracker, and a PDF inspection pack. Screening is limited to the free UN consolidated list.

**Pricing hypothesis:**
MUR 2,000–5,000/month (about $45–110) per firm. The market is the hundreds of MIPA member firms plus real-estate agents and jewellers (counts unverified, an estimate of 500–1,500 firms).

**How to find first customers:**
The MIPA register of licensed accountants and member firms, the FIU list of registered reporting persons (if published), real-estate agent listings (PropertyCloud and the like), the jewellers' association, and MIPA CPD events.

**Risks:**
Consultants bundle software-like templates. The buyer is tiny and price-sensitive. Regulators may issue their own templates or tools. Generic AML SaaS from South Africa/UAE could add a Mauritius rule pack. Willingness to pay is low until enforcement visibly starts.

**Kill condition:**
No published administrative penalties against DNFBPs by mid-2027, or a local regtech or MIPA-endorsed tool already covering this at under MUR 2,000/month.

**Score:** 4/10. The trigger is real but the buyers are few and frugal, and consultants are entrenched. It would be better as a multi-jurisdiction product for small professional firms (UAE/Mauritius/South Africa DNFBPs) than as a Mauritius-only product.

**Sources:**
- ITL Newsletter, Compliance Update 2025–2026 (Administrative Penalties Regulations, 18 Nov 2025): https://intercontinentaltrust.com/wp-content/uploads/2026/03/ITL_Newsletter_Compliance-Update-2025-2026.pdf
- Zigram, Mauritius AML/CFT/CPF Bill 2026: https://www.zigram.tech/resources/mauritius-aml-cft-cpf-bill-2026
- Mauritius IFC, supervisory training for DNFBP regulators: https://mauritiusifc.mu/news/supervisory-training-designated-non-financial-businesses-and-professions-dnfbps-regulators-in
- DLA Piper Africa, FIU notice on registration of reporting persons: https://www.dlapiperafrica.com/en/mauritius/insights/2021/the-financial-intelligence-unit-issues-a-notice-on-registration-of-reporting-persons.html
- Expanship, Mauritius beneficial ownership: https://www.expanship.com/mu/blog/mauritius-beneficial-ownership
- Appleby ARC Mauritius: https://www.applebyglobal.com/services/arc/appleby-regulatory-and-compliance-arc-mauritius
- LSEG DNFBP solutions: https://lseg.com/en/risk-intelligence/designated-non-financial-businesses-and-professions

---

## Rejected after competitor research

- **MRA e-invoicing (EBS fiscalisation) for Phase 2/3 SMEs.** This is a strong trigger: the mandate expands to turnover above MUR 80M in mid-2026 and above MUR 40M from 1 Sep 2026, with real-time JSON API clearance to MIRA returning an IRN/QR. It is killed by BDO's MRA-compliant EBS from MUR 1,850/month (works with QuickBooks, Xero, Odoo and legacy systems), Odoo App Store modules (Pokutsoft about $218, ERP Heritage POS about $516), Greytrix for Sage X3/300, Webtel, and the MRA's own published list of EBS solution providers. Sources: https://www.mra.mu/e-invoicing, https://www.mra.mu/download/eInvoicing/EBSSolutionProviders.pdf, https://apps.odoo.com/apps/modules/18.0/l10n_mu_ebs_einvoice, https://www.greytrix.com/africa/product/other-solutions/e-invoicing-solutions/e-invoicing-for-sage-erp-mauritius/, https://kpmg.com/us/en/taxnewsflash/news/2025/06/mauritius-e-invoicing-mandatory-new-group-taxpayers.html, https://lookuptax.com/tax-changes/mauritius/einvoicing-phase3-mur40m-2026
- **Beneficial-ownership register and CBRIS filing (Finance Act 2025).** Killed by its mostly one-time nature, and by management companies and corporate secretaries who already bundle it into annual fees. The MUR 300,000 penalty is real, but the work is not recurring enough. Sources: https://www.expanship.com/mu/blog/mauritius-beneficial-ownership, https://global.acclime.com/news/mauritius-beneficial-ownership-rules-changed/

## Attractive problem, poor distribution

- **DNFBP AML compliance (above).** The problem is real, but the buyers are few, frugal and consultant-loyal.
- **Pharmacy controlled-drug registers (Dangerous Drugs Act 2000).** Local press calls pharmacies a weak link in drug-trafficking control, but no electronic return or new trigger was found. Source: https://www.lemauricien.com/?p=227752

## Too competitive

- **MRA e-invoicing/fiscalisation connectors** (BDO, Odoo apps, Greytrix, Webtel, local integrators on the MRA list).
- **Monthly PAYE/CSG/NSF/Training Levy contribution returns.** The MRA publishes file specifications and established payroll vendors (e.g. Sage VIP Mauritius) implement them. Sources: https://mra.mu/download/SpecsMonthlyPACODec2024.pdf, https://communityhub.sage.com/za/sage-vip-payroll-hr/f/announcements/154405/mauritius-changes-to-the-payroll-taxes-2020-2021
