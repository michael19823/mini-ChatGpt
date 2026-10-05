# Timor-Leste: country research

**Researcher:** country agent (Timor-Leste) | **Date:** 2026-10-05 | **Search budget used:** 10 of 10 (small market)

## Summary verdict

Timor-Leste (about 1.4M people; joined ASEAN as its 11th member on 26 Oct 2025) is a **tiny, oil-fund-dependent, mostly informal economy**. SERVE (the business registry) lists about 29.5k sole traders, 18.7k single-shareholder companies, 6.2k joint-shareholder companies and about 160 foreign branches. Most are micro-scale: in an AEMTL survey, about 64% of women-owned firms earned under USD 500 a month and about 63% were unregistered. Government digital tools are thin but present: an ATTL website for annual returns and debt certificates, the P24 internet tax payment system, ASYCUDA World with the TileSW electronic single window (live since Feb 2021), an INSS online contributions platform (Aug 2025), and eprocurement.gov.tl.

**No viable standalone indie-SaaS opportunity found.** The single real "why now" is **VAT, targeted for 2027**, with a new Tax Authority. But the draft law is unpublished: rate, threshold, invoicing rules and the filing channel are all unknown as of Sept 2026. Timor-Leste is best treated as a **watchlist add-on market**, either to an Indonesia product (ASEAN and geographically adjacent; ATTL is benchmarking VAT on Indonesia's DGT) or to a Lusophone product (legal and administrative Portuguese, sharing templates with Portugal, Angola and Mozambique).

**Accessibility:** No sanctions. USD is the official currency, which makes payments simple. A foreign founder can sell software. The barriers are market size, low willingness to pay, and buyers being concentrated in Dili and among NGOs, donors and oil and gas contractors.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All registered SMEs (tax) | Monthly WIT/service/sales tax returns; VAT readiness for 2027 | Watchlist | Real trigger (VAT 2027), but the law is unpublished and the buyer base is tiny and price-sensitive |
| Employers / payroll (NGOs, contractors, hotels) | Monthly 10% wage income tax withholding plus INSS contributions by the 15th | Weak | Simple flat-rate rules; INSS launched its own online platform in 2025; EOR vendors serve foreign employers |
| Coffee exporters / cooperatives | EUDR geolocation and due-diligence data for EU-bound coffee | Weak | Real mandatory trigger, but only a handful of exporters; global EUDR traceability SaaS already exists |
| Customs brokers / importers | DAU declarations in ASYCUDA World / TileSW; permits from partner agencies | Reject | UNCTAD-run state system; small licensed broker pool; little room for a third-party layer |
| Government vendors | Tender/RFQ packs on eprocurement.gov.tl | Poor distribution / low WTP | Tenders are public and listable, but suppliers are micro firms bidding on small RFQs (e.g., office supplies) |
| Oil & gas supply chain | Local-content registration/reporting to ANPM and operators (Bayu-Undan decommissioning, Greater Sunrise) | Reject | Handled by operators (Santos) and consultants through supplier interest forms; enterprise procurement; few buyers |

## Opportunities (watchlist only, none recommended to build)

### Opportunity: VAT-readiness invoicing and monthly return pack (Timor-Leste 2027 VAT)

**Industry:**
Cross-sector SMEs: retail and wholesale importers, hotels and restaurants, construction contractors, service firms in Dili

**Buyer:**
Owner or bookkeeper of a registered company (single- or joint-shareholder) likely to exceed the future VAT threshold; local accounting/bookkeeping firms serving them

**Trigger / Why now:**
The government targets **2027** for VAT plus a dedicated Tax Authority. Parliament's Commission C held a public seminar on 18 Sept 2026. ATTL ran a VAT technical exchange with Indonesia's DGT on 7–9 July 2026, covering policy design, end-to-end process and IT architecture. The draft law has not been published.

**Current workflow:**
1. Firms keep sales and purchases in Excel or paper ledgers and file service/sales/withholding taxes monthly by the 15th.
2. They pay via bank or the P24 system; annual returns go through the ATTL site.
3. Once VAT arrives, they will need compliant invoices, input/output VAT tracking and a monthly or periodic VAT return, probably re-keyed into whatever portal ATTL builds.

**Pain:**
Expected, not yet observed. A new tax in a low-capacity, mostly paper-based SME base is likely to cause errors and penalties. No complaints exist yet because the regime does not exist.

**Existing solutions:**
International accounting packages (Xero, QuickBooks, Odoo) are configurable for generic VAT. Indonesian or Portuguese ERP vendors could localize. Big-4 and local law firms (e.g., Miranda, VdA) provide advisory. ATTL may ship its own e-invoicing/e-filing, possibly modelled on Indonesia's Coretax/e-Faktur (unverified).

**The gap:**
Unknown until the law is published. The plausible gap is a Tetum/Portuguese invoice template plus a VAT-return generator matching ATTL's exact form, which generic tools will not localize for a market this small.

**Possible product:**
A Tetum/Portuguese/English invoicing and VAT ledger that outputs the ATTL VAT return (and existing monthly service/sales/WIT returns) in the regulator's format, priced for micro firms.

**MVP:**
An Excel or web template that imports a sales/purchase CSV and produces a completed monthly return plus a compliant invoice PDF.

**Pricing hypothesis:**
USD 10–25/month per firm; USD 50–100/month for bookkeepers with multiple clients. Estimate.

**How to find first customers:**
SERVE company registry; CCI-TL (the Chamber of Commerce); local accounting firms; the Parliament/ATTL VAT seminar attendee lists.

**Risks:**
Law slips past 2027 (Timor-Leste VAT has been "planned" for years). ATTL ships a free government tool or mandates e-invoicing via a state system. The market (perhaps a few thousand VAT-registrable firms, estimate) is too small to sustain a product on its own.

**Kill condition:**
The draft law sets a high threshold (only hundreds of registrants), or ATTL mandates a free state e-invoicing portal with no API.

**Score:** 4/10 (as an add-on to an Indonesia or Lusophone VAT product; 2/10 standalone)

**Sources:**
- https://www.vatcalc.com/?p=52452 (VAT 2027 target, 18 Sept 2026 seminar, draft unpublished)
- https://www.pajak.go.id/index.php/en/node/120199 (ATTL VAT study visit to Indonesia DGT, July 2026)
- https://taxsummaries.pwc.com/timor-leste/corporate/tax-administration (monthly filing by the 15th)
- https://en.tatoli.tl/2021/03/05/timor-leste-modernizes-the-payment-platform-for-taxes-through-p24-system/23/ (P24 payments)
- https://mirandalawfirm.com/en/insights-knowledge/publications/alerts/new-features-of-the-timor-leste-tax-authorities-site (ATTL online annual returns)
- https://serve.gov.tl (registered-entity counts)

### Opportunity: EUDR geolocation and due-diligence pack for Timorese coffee exporters

**Industry:**
Coffee exporting / cooperatives (coffee is Timor-Leste's main non-oil export)

**Buyer:**
Export manager or certification/ICS manager at a coffee exporter or cooperative selling to EU roasters

**Trigger / Why now:**
EUDR requires plot-level geolocation for coffee placed on the EU market. The application date was postponed again; per my knowledge it is end of 2026 for large operators and mid-2027 for micro/small operators (date not re-verified in this session).

**Current workflow:**
1. Smallholders sell cherry or parchment through intermediaries who consolidate village collections into truckloads.
2. Certified exporters keep farmer lists and internal control systems (organic/Fairtrade) on spreadsheets.
3. EU buyers request plot coordinates or polygons and deforestation-free evidence per shipment.

**Pain:**
Documented: many smallholders lack smartphones, power is unreliable, illiteracy is high, and intermediaries break traceability. Sources say two large exporters with known, certified farmer bases are better positioned.

**Existing solutions:**
Global EUDR traceability SaaS (e.g., TraceX, plus many others serving coffee origins). Certification-body ICS tools. Donor-funded mapping projects. Buyers' own supplier portals.

**The gap:**
Offline-first farmer and plot capture plus a shipment-level geolocation file for very small cooperatives. But this is identical to every other coffee origin, and global vendors already sell it.

**Possible product:**
Not Timor-specific. At best, a regional (Timor-Leste/Laos/PNG) reseller or localization of an existing traceability tool.

**MVP:**
Offline mobile GPS capture plus a cooperative farmer register exported to an EU Information System GeoJSON.

**Pricing hypothesis:**
USD 100–300/month per exporter, often donor-paid. Estimate.

**How to find first customers:**
The handful of known exporters and cooperatives; NCBA CLUSA/USAID-era coffee programmes and the specialty-coffee buyers sourcing from Ermera (unverified names omitted).

**Risks:**
Buyer count is in single or low double digits. Global competition. Donor programmes may give tools away free.

**Kill condition:**
Fewer than about 10 exporters ship to the EU, or the main exporters already use buyer- or certifier-provided systems. Both are likely.

**Score:** 3/10

**Sources:**
- https://dailycoffeenews.com/2024/01/18/unintended-consequences-of-eu-deforestation-free-regulation-eudr-on-smallholder-coffee-producers-part-2 (Timor-Leste smallholder EUDR constraints, intermediaries, two large exporters)
- https://tracextech.com/eudr-coffee-compliance-for-exporters/ (existing EUDR coffee SaaS)
- https://efi.int/sites/default/files/2026-08/preparedness-check-of-lao-coffee-for-eudr.pdf (regional comparator: Laos preparedness, 2026)

### Opportunity: Monthly payroll WIT + INSS filing for local employers

**Industry:**
Employers: NGOs, hotels, construction contractors, security companies, retailers

**Buyer:**
Admin/finance officer at a 10–200-employee employer in Dili

**Trigger / Why now:**
INSS launched an online contributions platform in Aug 2025. Withholding tax and INSS contributions (employee 4%, employer share additional) are both due monthly by the 15th.

**Current workflow:**
1. Payroll is calculated in Excel (10% WIT above the threshold, plus INSS).
2. The officer pays the tax via bank/P24 and files the monthly return with the tax authority.
3. The officer separately declares contributions to INSS, now through its online platform.

**Pain:**
Double entry into two agencies, but the rules are flat and simple. No evidence of significant complaints or penalties was found.

**Existing solutions:**
Excel; EOR/global payroll vendors for foreign employers (Rivermate, Ontop, Asanify, Deel); local accounting firms; INSS's own free platform.

**The gap:**
A one-click "one payroll run → ATTL return + INSS upload" tool. This is thin value for simple flat-rate rules.

**Possible product:**
A Tetum/Portuguese payroll calculator that generates the ATTL monthly WIT figures and an INSS upload file.

**MVP:**
Spreadsheet import → payslips + both agency outputs.

**Pricing hypothesis:**
USD 1–2 per employee per month; USD 20–50/month per employer. Estimate.

**How to find first customers:**
SERVE registry; CCI-TL; NGO forum (FONGTIL) members; hotel association.

**Risks:**
INSS has no file-upload/API (unverified). The market is tiny. Excel is "good enough".

**Kill condition:**
The INSS platform accepts only manual per-employee entry with no bulk upload, or fewer than about 500 formal employers with 10+ staff.

**Score:** 3/10

**Sources:**
- https://en.tatoli.tl/2025/08/05/mssi-launches-online-app-to-improve-social-security-services/15/ (INSS online platform, Aug 2025)
- https://taxsummaries.pwc.com/timor-leste/individual/tax-administration (monthly WIT filing)
- https://asanify.com/global-employer-of-record/timor-leste/payroll/ (payroll rules, DGR + INSS remittance)
- https://www.getontop.com/payroll-in/timor-leste (EOR competitor with INSS handling)

## Rejected after competitor research

- **Customs declaration helper for brokers/importers.** Killed by **ASYCUDA World / TileSW**, the UNCTAD-built state system (single window live since Feb 2021, linking partner agencies and TradeInvest). Brokers are licensed and trained to file the DAU directly in it, the broker pool is small, and no third-party integration layer is evident. Sources: https://customs.gov.tl/doing-business/customs-brokers/ , https://asycuda.org/timor-lestes-electronic-single-windows-increasing-capabilities/
- **Oil & gas local-content supplier registration/reporting.** Killed by **operator-run processes (Santos supplier interest forms) and consultants (e.g., Worley capability mapping)**. Enterprise procurement and very few buyers. Bayu-Undan is in decommissioning and the Greater Sunrise framework is still not final. Sources: https://www.santos.com/wp-content/uploads/2023/03/TL-Suppliers-Info-slides-for-engagement-May-2022-Rev-2.pdf , https://insights.worley.com/case-studies/mapping-and-development-of-industry-capabilities-in-timor-leste
- **Payroll for foreign employers.** Killed by **EOR vendors** (Rivermate, Ontop, Asanify, Deel), which already publish Timor-Leste payroll/INSS handling.

## Attractive problem, poor distribution

- **Government tender (RFQ) document packs for micro suppliers on eprocurement.gov.tl.** Tenders are public and suppliers could be listed from award data, but most RFQs are small (e.g., office supplies and beverages for municipal agencies), and bidders are micro firms with very low willingness to pay. Source: https://eprocurement.gov.tl/publicPage/showPage/1

## Too competitive

- **EUDR coffee traceability** (global vendors such as TraceX and others, plus certifier/donor tools). Listed above only as a weak watchlist item.

## Recommendation

Do not build for Timor-Leste standalone. Revisit when the **VAT draft law is published (expected late 2026/2027)**. If it mandates periodic VAT returns with a moderate threshold and no free state e-invoicing tool, add Timor-Leste as a localization (Tetum/Portuguese forms) of an Indonesia or Lusophone VAT/invoicing product.
