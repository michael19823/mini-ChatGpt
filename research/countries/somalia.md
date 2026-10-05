# Somalia: Indie-Hacker Opportunity Research

**Date:** 2026-10-05
**Track:** Somalia (Africa; fragile / conflict-affected market)

**Method and limits (read first):**
- I attempted two web searches. The first was an accessibility check covering sanctions, payment rails and mobile money. It was **refused because the shared usage limit had been reached**. The second covered tax digitisation and succeeded. The agent instructions say to stop once a search is refused, so this report rests on **one search's results** plus general background. I mark that background as *unverified (not confirmed by search this session)*.
- I did not use WebFetch, because it is blocked in this environment. I did not open any of the cited PDFs. The facts below come from search-result extracts.
- This is a **thin, low-confidence track**. Treat it as a screening note, not diligence.

**Bottom line:** I found **no viable standalone indie-SaaS opportunity in Somalia** at the brief's quality bar.

The government is digitising quickly:
- **ETAS**, an electronic tax administration system with a 5% electronic sales tax
- **SOMCAS**, automated customs, which is now also mandatory for airline manifests
- **ITAS**, still being rolled out
- a new **Income Tax Law**

That does create new mandatory recurring workflows. But the formal buyer base is tiny: about **1,700 medium and large taxpayers** were registered in 2025. On top of that:
- The systems are government-built.
- Payment and collection rails for a foreign founder are awkward: mobile money such as EVC Plus or Zaad, plus very limited card or Stripe acceptance *(unverified)*.
- Security and operational risk is high.

At most, Somalia could be an add-on to a Kenya- or Ethiopia-based East African compliance product. It does not stand on its own as a market.

---

## Accessibility check

| Question | Finding | Confidence |
|---|---|---|
| US / EU / UK sanctions | As far as I know, the US Somalia sanctions programme (OFAC, 31 CFR Part 551) and the UN Somalia regime are **list-based**: they target designated persons such as al-Shabaab and are not a country-wide embargo. Selling software to ordinary Somali businesses is therefore *likely legal*, but every customer needs SDN screening. | *Unverified*: the search for this was refused |
| Payment rails | The economy runs on mobile money (Hormuud EVC Plus, Telesom Zaad, and others) and US dollars. International card acquiring is limited, and Stripe/Paddle-style payouts to Somali buyers are likely impractical. Collection would probably be by bank wire or through a local reseller. | *Unverified* |
| Internet / licensing | No country-wide software-licensing barrier is known to me. The bigger practical constraints are physical security, the split between federal and member-state authorities (Somaliland, Puntland), and patchy connectivity. | *Unverified* |
| **Verdict** | **Probably legally accessible, but practically hard.** It is not an "inaccessible market" in the sanctions sense, but distribution and collection make solo selling difficult. | Low |

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Medium/large taxpayers (traders, telcos, hotels, retailers) | ETAS 5% electronic sales tax filing; new Income Tax Law returns; reconciliation of sales records against ETAS | Weak lead (Opp. 1) | Mandatory and new, but only about 1,700 registered medium/large taxpayers, and the state built the system itself |
| Importers / customs agents | SOMCAS automated customs declarations | Weak lead (Opp. 2) | New digital customs system creates re-entry work, but there are few brokers and SOMCAS access by third parties is unverified |
| Airlines / travel agents | Passenger manifests and ticket-price reporting through SOMCAS (now mandatory) | Rejected | Buyers are a handful of airlines, which use their own DCS/GDS vendors |
| Property / rental landlords | Property-tax registration (31,000 rental properties registered in 2025) | Poor distribution | Buyers are informal individual landlords with no willingness to pay for SaaS |
| Payroll / NGOs | Payroll tax under the new Income Tax Law | Not researched | Search budget exhausted. Note: NGO payroll is usually handled by international ERP/payroll systems. |

---

## Opportunities (low confidence; none meets the brief's bar)

### Opportunity: ETAS sales-tax and income-tax filing helper for Mogadishu mid-size businesses

**Industry:**
Retail, wholesale trade, hospitality and services (medium/large taxpayers)

**Buyer:**
Owner or finance manager at a registered medium/large taxpayer, or at a local accounting firm that files for several of them

**Trigger / Why now:**
The 5% electronic sales tax is collected through ETAS. A new Income Tax Law has been enacted, and the Ministry of Finance lists "enforcing the new Income Tax Law" and "scaling ETAS and SOMCAS to automate compliance" as 2025–26 priorities. Domestic revenue reportedly grew 94% in 2025 to about $404M.

**Current workflow:** *[inferred]*
1. Sales are recorded in paper ledgers, Excel or a basic POS.
2. Each period, a staff member totals taxable sales by hand and works out the 5% sales tax.
3. Figures are entered into ETAS, and payment is made by bank or mobile money.
4. Income-tax computations under the new law are prepared separately, often by an external accountant.

**Pain:**
The requirement is new and the tax base is expanding fast, so first-time filers have had no prior process. I found no direct complaint evidence (*unverified*).

**Existing solutions:**
- ETAS itself (government-provided, free)
- local accountants and tax consultants
- QuickBooks, Odoo and other generic ERPs used by larger firms
- local POS vendors (*not researched*)

**The gap:**
A tool that maps POS or Excel sales into ETAS-ready figures, and works out income tax under the new law, is plausibly missing. Whether ETAS offers any import or API is unknown.

**Possible product:**
A spreadsheet/POS-to-ETAS filing workbook with a filing calendar and an income-tax computation sheet, sold to accounting firms.

**MVP:**
An Excel or web template plus a sales-tax summary generator. In practice, a service business more than SaaS.

**Pricing hypothesis:**
$20–50 per month per firm (*estimate*). Realistic willingness to pay is low.

**How to find first customers:**
Somali Chamber of Commerce and Industry members; Ministry of Finance taxpayer outreach events; Mogadishu accounting firms. No public taxpayer registry was found.

**Risks:**
- Tiny market (about 1,700 firms).
- The government may add the same features to ETAS.
- Security and in-person sales needs.
- Collection rails.
- Federal/member-state fragmentation (Somaliland and Puntland run separate tax systems).

**Kill condition:**
ETAS already offers bulk import or invoice capture, or fewer than about 100 firms would pay more than $20 per month.

**Score:** 3/10

**Sources:**
- https://revenuedirectorate.gov.so/sites/default/files/Annual%20Revenue%20Performance_2025_FINAL11_1.pdf
- https://www.dawan.africa/news/somalias-domestic-revenue-grew-by-94percent-to-dollar404-million-in-2025
- https://abdilahi.substack.com/p/navigating-fiscal-reform-in-somalia
- https://archive.mof.gov.so/sites/default/files/Publications/Annual%20Report%20MoF%20-%202024%29.pdf

### Opportunity: SOMCAS declaration-prep for clearing agents

**Industry:**
Customs clearing / import agents (Mogadishu port and airport)

**Buyer:**
Clearing and forwarding agents, and import-heavy traders

**Trigger / Why now:**
SOMCAS automated customs is being scaled. The Ministry has ordered airlines to report through SOMCAS exclusively, which suggests more workflows are moving into the system.

**Current workflow:** *[inferred]*
1. The agent receives the commercial invoice, packing list and bill of lading as PDF or paper.
2. Line items are retyped into SOMCAS.
3. Duties are paid and the release is chased by phone and WhatsApp.

**Pain:**
Retyping invoice line items is a well-known pattern in customs systems elsewhere. I found no Somalia-specific evidence.

**Existing solutions:**
- SOMCAS (government system)
- manual clearing agents
- regional freight forwarders with their own systems

**The gap:**
Line-item extraction from supplier documents into the SOMCAS format, if third-party upload is possible.

**Possible product:**
A document-to-declaration prep tool for SOMCAS.

**MVP:**
Invoice/packing-list parser producing a SOMCAS-ready line-item sheet.

**Pricing hypothesis:**
$5–10 per declaration or $100 per month per agent (*estimate*).

**How to find first customers:**
Agent lists at Mogadishu Port and Aden Adde airport, and the Chamber of Commerce (*no directory verified*).

**Risks:**
- Unknown whether SOMCAS accepts any import format.
- Small number of agents.
- Generic invoice-OCR trap.
- Operations at the port are run by a concessionaire.

**Kill condition:**
SOMCAS has no bulk entry or upload path, or fewer than 50 active agents.

**Score:** 2/10

**Sources:**
- https://dawan.africa/news/somalia-orders-airlines-to-use-digital-tax-system
- https://revenuedirectorate.gov.so/sites/default/files/Annual%20Revenue%20Performance_2025_FINAL11_1.pdf

---

## Rejected after competitor research

- **Airline manifest and ticket-price reporting to SOMCAS:** rejected. There are very few buyers, and airlines already rely on their departure-control and GDS vendors (Amadeus, SITA and similar) plus the free government portal.
- **Government financial management (SFMIS invoice tracking and payroll):** rejected. It is a government-internal system that already has digital signatures and payroll integration, and is procured through donor-funded tenders (GTAI lists a tax-automation consulting tender). This is enterprise/government procurement, not indie software.

## Attractive problem, poor distribution

- **Rental-property tax registration and compliance** (31,000 rental properties registered in 2025): the buyers are individual informal landlords who are unlikely to pay for SaaS.

## Too competitive

- None identified, but the market was not researched deeply enough to judge.

## Sources (all)

- https://revenuedirectorate.gov.so/sites/default/files/Annual%20Revenue%20Performance_2025_FINAL11_1.pdf
- https://www.dawan.africa/news/somalias-domestic-revenue-grew-by-94percent-to-dollar404-million-in-2025
- https://dawan.africa/news/somalia-orders-airlines-to-use-digital-tax-system
- https://archive.mof.gov.so/sites/default/files/Publications/Annual%20Report%20MoF%20-%202024%29.pdf
- https://abdilahi.substack.com/p/navigating-fiscal-reform-in-somalia
- https://www.gtai.de/de/trade/somalia/ausschreibungen-projekte/consulting-automatisierung-der-steuererhebung-kkmu-foerderung--2018892
