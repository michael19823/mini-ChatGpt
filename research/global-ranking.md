# Global Indie-Hacker Opportunity Research: Cross-Country Ranking

*Compiled 2026-10-05 from the 199 country reports in `research/countries/`. Method and brief:
`research/brief.md` and `research/method/`.*

## Coverage and how to read the scores

- **Coverage.** Every UN member state plus Palestine, the Holy See, Taiwan, Kosovo, Hong Kong
  and Macau has a report: 199 in total.
- **What came back.** 502 scored opportunities across 184 countries. The other 15 have no viable
  standalone opportunity or are not accessible to a foreign solo founder (sanctions, conflict,
  closed markets or microstates): Afghanistan, Belarus, Cuba, Eritrea, Holy See, Iran, Kiribati,
  Myanmar, North Korea, Russia, São Tomé and Príncipe, Sudan, Turkmenistan, Tuvalu and Yemen.
- **Deep passes.** Twenty-six reports that were first written under a search cap were redone
  with a larger budget. Their "Pass history" notes say what changed.
- **Score distribution.** Most opportunities scored 3–5 out of 10. Only 63 scored 6 or more,
  and only 4 reached 7 or more. That spread is the honest result: in mature markets, most
  mandated workflows are already covered by an incumbent or a free government tool.

**Caveats that apply to everything below**

- WebFetch was blocked in this environment, so agents worked from search results rather than
  reading primary documents. Treat legal dates and competitor feature claims as leads to check.
  The reports mark unverified points.
- Scores come from different agents and are not perfectly calibrated across countries. Use them
  to shortlist, not to rank precisely.
- Pricing figures are hypotheses. Nobody has talked to a customer yet.

---

## Top 10 opportunities

| Rank | Country | Industry | Workflow | Buyer | Why now | Competition | Pricing potential | MVP difficulty | Score |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Peru | Fuel stations | Daily hydrocarbon register: POS + tank readings + inbound transport guides → SUNAT-format register | Owner/administrator of independent stations and small chains; their accountants | Ley 32412 (Jul 2025) put fuels under SUNAT chemical-input control; RS 000135-2026/SUNAT sets the register | SUNAT manual entry; station POS vendors (none found advertising it) | S/150–300 per station per month (~US$40–80) | Low–med | 7.5 |
| 2 | Philippines | SME software vendors (B2B2B) | EIS e-invoice bridge for small local CAS/POS vendors and their SME users | Small Philippine software houses selling BIR-registered CAS/POS | EIS deadline 31 Dec 2026 (RR 11-2025, RR 26-2025); guidelines in RMC 98-2026 | Enterprise players (ClearTax, Cygnet, EDICOM) and SME suites that want users to migrate (Juan, NextPay) | ₱10–25k per vendor per month plus per-invoice fees | Med | 7.0 |
| 3 | Philippines | Security, janitorial and manpower agencies | Per-principal monthly evidence pack (SSS / PhilHealth / Pag-IBIG / ECC proof) that unlocks client payments | Billing or payroll supervisor at multi-client agencies | Government contract terms make monthly payment conditional on remittance proof | PH payroll suites stop at agency-level remittance files | ₱3–10k per agency per month | Low–med | 7.0 |
| 4 | Egypt | Pharma importers and toll manufacturers | Supplier serialization data in any format → EDA EPTTS Phase-1 CSV, validated and split | Regulatory/supply-chain manager at small and mid-size importers | EDA Decrees 161/2025 and 475/2025: imported medicines from 1 Feb 2026 | Optel, TraceLink, rfxcel and others sell full enterprise stacks; no cheap importer-side converter found | EGP 4–10k per month (~US$80–200) or a per-lot fee | Low–med | 7.0 |
| 5 | Australia | Community services, cleaning, security, construction | Portable long-service-leave quarterly returns from Xero/MYOB payroll, one per state scheme | Bookkeeper or payroll officer at 10–300-worker employers | New NSW community-services scheme (Jul 2025); Vic and Qld scheme changes | PayCat (only for its own payroll) proves AUD 2 per employee; Employment Hero is generic | AUD 2–3 per covered worker per month, AUD 49 minimum | Med | 6.5 |
| 6 | Kenya | Private clinics (Level 2–4) | SHA claims: remittance-to-claim matching, rejection aging, dispute packs | Clinic owner or claims officer; certified HMIS vendors as a channel | SHA portal retired; claims must go through DHA-certified HMIS | 28 certified HMIS systems submit claims but do not reconcile remittances (per available evidence) | KSh 5–15k per month (~US$40–115) or a % of recovered money | Low–med | 6.5 |
| 7 | Brazil | Compounding pharmacies, small chemical distributors | NF-e XML + consumption log → validated Polícia Federal SIPROQUIM monthly map | Responsible pharmacist or regulatory analyst | IN DG/PF 338 (published 3 Aug 2026) consolidated chemical-control rules | SIPROQUIM free forms and TXT import; ERP support unverified | R$149–399 per month; consultant plans | Low | 6.5 |
| 8 | Argentina | Agrochemical dealers and agronomists | Dealer sale or field application → SIGIRAO prescription without double entry | Owner of an agronomía; independent agronomists | Buenos Aires province Res. MDA 567/2025 made SIGIRAO mandatory | Free government web app; no private tool found that feeds it | US$30–80 per dealer per month | Low–med | 6.5 |
| 9 | Chile | Mining and construction subcontractors | One accreditation pack pushed to each client portal (SIGA, Webcontrol, Pronexo, Codelco SUCAL) | Accreditation officer or HR lead at 20–500-worker contractors | Clients keep adding stricter platforms; SUCAL covers about 80,000 contractor workers | Every portal is client-side; contractors have no single source of truth | CLP 100–400k per month, or ~CLP 2,000 per worker | Med | 6.5 |
| 10 | Tanzania (and the Zambia/Senegal pattern) | Mining contractors and suppliers | ERP/AP export → quarterly local-content report with supplier ownership evidence | Compliance, procurement or finance manager at mining suppliers | GN 563/2025 overhaul (Tanzania); SI 68 of 2025 in force 1 Jan 2026 (Zambia) | Law firms and consultants; free government portals that only accept submissions | US$100–300 per month per entity; ~US$250–600 in Zambia | Low–med | 6.5 |

Other ideas that scored 6.5: Colombia's RNDC shipper-side cockpit, Indonesia's villa
guest-reporting router (APOA and PBJT, Bali first), Cambodia's "one payroll run, three
submissions" pack, Chile's private-security compliance desk, Panama's resident-agent accounting
records cycle and Sri Lanka's RAMIS e-invoice connector.

The strongest English-language markets after the deep passes, both at 6.0, were the UK (a
highway-licence router for skip-hire and scaffolding firms, and a DoLS application router for
care homes) and the US (school-choice funding reconciliation for private schools in Texas and
Florida).

---

## Cross-country patterns

Some of the same workflows came up again and again. A product built for one country could reuse
its engine elsewhere and add a country-specific layer.

| Pattern | Opportunities | Best examples | Why it recurs |
|---|---|---|---|
| Labour and contractor compliance (per-client packs, statutory remittance proof, accreditation) | 68 | Philippines 7.0; Chile, Cambodia and Australia 6.5 | Many separate systems, and getting paid depends on proving compliance |
| Customs and trade documents | 54 | Egypt 7.0; Pakistan, Iraq and Hong Kong 6.0 | New single windows and pre-arrival rules, with weak support for small traders |
| Waste manifests and packaging EPR | 51 | Slovakia, Romania, Peru and Mexico 6.0 | Per-pickup manifests plus quarterly filings, re-keyed into government systems |
| E-invoice and fiscal connectors | 42 | Philippines and Egypt 7.0; Sri Lanka 6.5 | New mandates keep coming. It's only winnable where the mandate is new **and** only enterprise vendors exist; elsewhere it's crowded (see below) |
| CBAM, EUDR and export traceability | 40 | Ukraine and Ecuador 6.0 | Real, but averages only 3.9: consultants and well-funded SaaS move fast |
| AML/KYC for small regulated businesses (gold dealers, resident agents) | 26 | Panama 6.5; Vietnam, Kuwait and Ghana 6.0 | FATF pressure lands on tiny businesses with no tools |
| Clinic insurance claims and remittance reconciliation | 16 | Kenya 6.5; Rwanda and Canada 6.0 | New national insurers and digital-claims mandates; clinics lose money on rejections |
| Mining local-content reporting | 8 | Tanzania 6.5; Zambia and Senegal 6.0 | New 2025–26 regulations, buyers listed in public registers, consultants as the price anchor |
| Controlled agri-inputs and chemicals registers | 8 | Peru 7.5; Brazil and Argentina 6.5 | New laws turning paper registers into digital ones, plus a free but bare government form |

The last two rows score highest on average (5.1–5.3) despite few examples. They match the
brief's core thesis: a new law forces a recurring filing, only a free government form exists,
and buyers can be found in public registers.

---

## Selections

### Top 3 worth customer interviews

1. **Peru: daily hydrocarbon register for fuel stations (7.5).** It has the sharpest trigger in
   the dataset, a per-station price, and buyers in OSINERGMIN's establishment registry.
   - First question to settle: whether SUNAT will build the register itself from data it already
     holds. Interview 10 station owners and 3 fuel-station accountants.
2. **Australia: portable LSL return builder for Xero/MYOB employers (6.5).** It's English-speaking
   and has a proven price point: PayCat charges AUD 2 per employee, but only for its own payroll.
   The Xero API is open. Buyers can be reached through the public NDIS register, peak bodies, and
   a long-running Xero feature-request thread.
   - First question to settle: whether Xero or MYOB plans a native report, and whether templates
     take more than 10 minutes to fill.
3. **Philippines: EIS bridge for local CAS/POS vendors (7.0).** It sells through a channel (one
   vendor brings many SMEs) and has a hard 31 Dec 2026 deadline.
   - First question to settle: whether BIR lets third parties transmit on a taxpayer's behalf.
   - The window is short, so interview within weeks or drop it.

### Top 1 worth building, only after interviews

**Australia: portable LSL return builder.** Peru scores higher, but Australia best fits the
brief's final decision rule for a solo founder:

- the price is already proven by a competitor that only serves its own payroll customers;
- it plugs into an open payroll API instead of scraping a government portal;
- buyers are reachable through public registers;
- the market speaks English and pays in a hard currency;
- the MVP is narrow: Xero only, with the NSW and Vic community-services schemes.

Peru should stay in the running if interviews confirm SUNAT won't build the register itself.
Build neither until interviews confirm the pain and the willingness to pay.

### 3 interesting but too competitive

- **SME e-invoicing where the mandate is mature or well served:** Poland (KSeF), France (approved
  platforms), Belgium (Peppol), Saudi Arabia (ZATCA) and Turkey (e-Fatura). Hundreds of certified
  vendors and free government tools.
- **Australia Payday Super (July 2026):** Xero, MYOB, QuickBooks, KeyPay and Employment Hero all
  shipped support.
- **CBAM emissions calculation SaaS:** Coolset, CBAMBOO, CarbonChain, Glassdome, Eco365.Ai and
  others already sell it (Italy, Korea and Poland reports). The narrow supplier-side data pack is
  still open in Ukraine and Turkey.

### 3 attractive problems with poor distribution

- **Ireland childcare Core Funding admin:** the burden is real, but provider margins are thin and
  the funder controls the process.
- **UK Building Safety Act Gateway 2 for subcontractors:** regulators do reject applications, but
  the buyers sit inside large contractors.
- **Malaysia MSPO/EUDR traceability for palm smallholders:** government tools (e-MSPO, MSPO Trace)
  dominate, and the buyers are fragmented smallholders.

### 3 ideas rejected after competitor research

- **US towing and impound lien notices:** Autura already does DMV lookups across 38+ states and
  sends the state notices.
- **Spain DeCA electronic transport document:** bluecmr, logitrack and others, plus a free
  government app.
- **Japan fluorocarbon leak logs and reporting:** RaMS (the government-authorised cloud) and
  Mitsubishi Electric MELflo.

---

## Next steps

1. Interview customers for the top 3 using each report's "Kill condition" as the script. For each
   idea, write down beforehand the one answer that would kill it.
2. Before interviewing, check each idea's legal trigger against the primary source (the
   regulation itself). This research could only see search results.
3. In parallel, run a cheap check on the multi-country patterns: mining local-content reporting
   (Tanzania, Zambia, Senegal) and controlled agri-input registers (Peru, Brazil, Argentina). Each
   could become a regional product with one shared engine.
