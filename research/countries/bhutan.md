# Bhutan: country research track

**Market type:** Small economy (about 0.8M people). Searches used: 7 of 10.
**Accessibility:** No US/EU/UK sanctions on Bhutan. A foreign founder can legally sell software there in practice. However, payments are in Ngultrum (pegged to INR). Local banks and the BITS/GovTech systems are domestic. The government also steers buyers to a vetted list of local vendors (see below). Selling remotely is possible but hard without a local partner.

**Bottom line:** I found no viable standalone indie-SaaS opportunity in Bhutan. The one real 2026 regulatory trigger is the GST that went live on 1 Jan 2026. Six local vendors that the government recommends already cover it, and only about 4,164 businesses are registered for GST. The best route is as a localized add-on to a product that already sells in India or Nepal (for example a GST module for a South Asia accounting tool). A Bhutan-first product does not make sense.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All VAT-registered SMEs / accountants | GST invoicing, monthly returns in BITS, input-credit tracking (GST live 1 Jan 2026) | Weak candidate (Opp 1) | Real trigger, but DRC/GovTech already list 6 approved local invoicing vendors plus EasyGST and BUSY. Only about 4.2k registrants |
| Tourism (tour operators) | SDF collection, visa/permit booking, guide assignment, operator back office | Weak candidate (Opp 2) | Government Tourism Services Portal and IBLS do the mandatory part for free. The rest is generic tour-operator CRM |
| Payroll / employers | Monthly PIT (TDS) and PF/NPPF remittance by the 15th, GIS | Rejected | Small private-sector payroll base. EOR/payroll vendors (Rivermate, TopSource, Ontop) and local accounting tools cover it. Low willingness to pay |
| Retail / hospitality POS | GST-compliant POS/PMS updates | Too competitive / small | The same approved vendors (Zealous, Abit, Innovates, etc.) and Indian POS tools fill this |
| Cross-border digital services | Non-resident GST registration via local tax representative | Rejected | Niche. Global tax engines (Anrok, PayPro, Avalara-type) already cover Bhutan |

---

## Opportunities (all below the build threshold)

### Opportunity: GST return-prep and input-credit reconciliation for Bhutanese accountants

**Industry:**
Accounting firms / bookkeepers serving GST registrants

**Buyer:**
Small accounting/audit firms and in-house accountants at mid-size traders, hotels and contractors that are registered for GST (turnover of Nu 5M or more)

**Trigger / Why now:**
The GST (Amendment) Act 2025 and GST Rules 2026 replaced sales tax with a 5% GST on 1 Jan 2026. For the first time, businesses must handle integrated registration, compliant invoicing, periodic filing in BITS, input-tax credit and refunds. BITS itself was delayed for years.

**Current workflow:**
1. Issue invoices from a local invoicing tool, Tally/BUSY or spreadsheets.
2. Collect supplier (purchase) invoices on paper or PDF and key them in by hand to claim input credit.
3. Total output and input tax in Excel and type the figures into the BITS return within 30 days of the period end.
4. Handle mismatches, rejected credits and refund claims by hand. Keep records for 5 years.

**Pain:**
This is a new regime with a first-year learning curve. The ICTD working paper describes the shift to "integrated registration, invoicing, filing, posting payments, crediting input tax, and refunds" as a major change. There were reports of transition problems and price backlash. I found no direct user complaints about reconciliation (unverified).

**Existing solutions:**
- Six GST-compliant invoicing vendors recommended by DRC/GovTech: Zealous, Abit, Tshongrig, Dragon Coder, Innovates, I-Technologies
- EasyGST (cloudbhutan), which offers invoicing plus GST return filing
- BUSY accounting through Thimphu partner Ezee Consultancy
- Tally
- Local accountants doing it by hand

**The gap:**
These vendors are invoice-centric (sales side). It is unclear whether any of them does purchase-side input-credit capture or reconciliation against BITS data (unverified). I found no public BITS API for third parties.

**Possible product:**
A tool that ingests purchase invoices (PDF/photo/Excel), validates supplier TPNs and GST fields, and builds a BITS-ready return worksheet. It also flags credits at risk.

**MVP:**
Excel/PDF purchase-register importer, GST validation rules, and a return summary export laid out to match the BITS return form.

**Pricing hypothesis:**
Nu 1,500–4,000 (about US$18–48) per month per client entity. Local price levels are low.

**How to find first customers:**
- Bhutan Institute of Certified Accountants / auditor lists (unverified)
- The DRC registrant base (about 4,164 as of Apr 2026, per BBS)
- Partnering with one of the 6 approved vendors as an add-on

**Risks:**
- The market is tiny
- The approved-vendor list creates a trust moat for locals
- EasyGST may already do this
- There is no BITS API
- Payments in Ngultrum

**Kill condition:**
Any one of these kills it:
- EasyGST or the approved vendors already handle purchase-side reconciliation
- DRC adds pre-filled returns or e-invoice matching inside BITS
- Fewer than about 20 accounting firms exist to sell to

**Score:** 3/10

**Sources:**
- https://kpmg.com/us/en/taxnewsflash/news/2025/10/tnf-bhutan-new-gst-regime-to-replace-existing-sales-tax-framework.html
- https://www.ictd.ac/publication/from-law-to-practice-bhutans-gst-rollout-and-lessons-for-small-digitalising-economies/
- https://www.drc.gov.bt/wp-content/uploads/2025/10/GST-Rules-2026.pdf
- https://www.drc.gov.bt/wp-content/uploads/2025/12/Consolidated-GST-Act-of-Bhutan-2020-and-amendment-thereof.pdf
- https://tech.gov.bt/wp-content/uploads/2026/01/GST-Compliant-Invoicing-solution-providers.docx
- https://easygst.cloudbhutan.com/
- https://busy.in/international/accounting-software-in-bhutan.md
- https://www.bbs.bt/?p=237397 (4,164 GST registrants, Apr 2026)
- https://www.drc.gov.bt/easy-guide-for-businesses-and-consumers/

### Opportunity: Tour-operator back office for SDF, permits and GST on tour packages

**Industry:**
Inbound tourism

**Buyer:**
Owners of licensed Bhutanese tour operators

**Trigger / Why now:**
- The SDF is US$100 per night under an incentive scheme that runs to 31 Aug 2027, so another rate change is coming.
- GST from 2026 now applies to tour services.
- Licensing moved online to IBLS, and the Department of Tourism runs a Tourism Services Portal.

**Current workflow:**
1. Build the itinerary and quote by email or WhatsApp with foreign agents.
2. Book visa/SDF and permits on the government tourism portal.
3. Assign guides, hotels and drivers in spreadsheets.
4. Invoice the client and reconcile the SDF and GST portions by hand.

**Pain:**
Moderate. There are many small operators (about 2,800 registered as of Jul 2025, many of them dormant), but the mandatory steps are handled by the free government portal.

**Existing solutions:**
- Government Tourism Services Portal (400+ operators onboarded)
- IBLS
- Generic tour-operator software (Tourwriter, Rezdy-type tools; not verified in Bhutan)
- Spreadsheets

**The gap:**
Re-entering itinerary data into the government portal and splitting the SDF/GST for accounting. These are low-value exceptions.

**Possible product:**
An itinerary-to-invoice tool that computes the SDF, GST and night counts and creates a booking pack.

**MVP:**
Quote/itinerary builder with Bhutan SDF/GST rules and PDF output.

**Pricing hypothesis:**
US$20–40 per month

**How to find first customers:**
- Tourism Services Portal operator directory (services.bhutan.travel)
- Association of Bhutanese Tour Operators

**Risks:**
- Generic CRM trap
- The government portal can expand
- Seasonal, price-sensitive buyers

**Kill condition:**
Either of these kills it:
- The government portal adds quoting/invoicing
- Fewer than about 300 operators are active

**Score:** 2/10

**Sources:**
- https://bhutan.travel/travel-trade
- https://www.luxurytraveladvisor.com/asia/bhutan-launches-new-tourism-services-portal
- https://thebhutanese.bt/tourist-arrivals-in-july-2025-increased-by-85-compared-to-last-july/
- https://services.bhutan.travel/search/tour-operator/ultimate-botan-travel

---

## Rejected after competitor research

- **GST-compliant invoicing / POS for SMEs:** killed by the official DRC/GovTech list of 6 approved local vendors (Zealous, Abit, Tshongrig, Dragon Coder, Innovates, I-Technologies), plus EasyGST and BUSY/Tally.
- **Payroll PIT + PF remittance:** killed by EOR/payroll providers that cover Bhutan (Rivermate, TopSource, Ontop) and local accounting tools. The private payroll base is small and NPPF mainly covers civil servants and SOEs.
- **GST for non-resident digital sellers:** killed by global tax engines (Anrok, PayPro Global) and the local tax-representative model.

## Attractive problem, poor distribution

- **GST input-credit reconciliation (Opp 1):** a real new mandatory workflow. The buyer base (about 4.2k registrants) is too small, and local vendors hold government endorsement.

## Too competitive

- GST invoicing/POS (see above).

## Inaccessible markets

- None. Bhutan is accessible, just very small. The best move is to add Bhutan GST support to a product that already sells in India or Nepal, not to build a standalone Bhutan product.
