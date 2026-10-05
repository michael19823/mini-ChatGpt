# Tonga: Offline-Industries Pass

**Classification:** Microstate (population about 100,000). Search budget: 8 WebSearch calls, all used.
**Bottom line:** No quiet industry in Tonga supports a standalone indie-software product. Most of the seed-list industries either don't exist at a meaningful scale (scrap, pawn, beekeeping, tattoo, well drilling) or are handled by a government system. The one register with a real, named, reachable set of regulated operators is the **National Reserve Bank of Tonga (NRBT) list of licensed money transfer operators** (about 17 non-bank licensees). It is a weak lead that only makes sense as a Tonga module of a Pacific-wide remittance-compliance service. The kava export pack is already covered in `research/countries/tonga.md`, so I don't repeat it here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Money transfer operators / FX dealers | Licence under the Foreign Exchange Control Act 2018 (s.13(1)), NRBT supervision, AML/CFT obligations reported to the NRBT FIU | Small family-run and church/community-linked operators (e.g. Manatu 'Ofa, Toumu'a, Nikua, L & G Money and Shopping Transfer). The regulator's list is published in newspaper notices, not on a portal. NRBT has shut down operators (LWS Trading / RK3, 2024) | About 12 Type A (in and out), 5 Type B (inward only), 1 Type C (FX only), from the NRBT authorised-persons list reported by Matangi Tonga | **Weak lead (3/10)** | It is a real register and enforcement happens, but there are fewer than 20 buyers and AML tooling is sold regionally |
| Households as employers | National Retirement Benefits Fund: 5% employer + 5% employee, monthly contribution schedule | Unverified whether domestic workers are covered. Domestic work is mostly informal or done by family | Unknown | Rejected | Informal and family-based. I found no obligation that clearly applies to households |
| Small private employers (NRBF schedule) | Monthly NRBF contribution schedule plus PAYE to Revenue & Customs | Paper or Excel schedules (unverified). Local accountants file them | Unknown. The business-licence register is searchable but not counted | Rejected | Xero/MYOB plus local accounting firms already cover it. The market is too small |
| Scrap metal dealers | No dealer register found. Export only | 2025 scrap exports to Malaysia were tiny (aluminium about USD 3.7k, copper about USD 6.6k, per Trading Economics) | A handful (estimate) | Rejected | The trade is negligible and I found no police register |
| Second-hand goods / pawnbrokers | None found | n/a | Unknown | Rejected | No register or obligation found |
| Seasonal-labour (RSE/PALM) recruitment | Workers recruited through the Ministry of Internal Affairs work-ready pool or by direct recruitment. RSE uses approved agents | The government work-ready pool runs it. Bogus-agent warnings are issued | About 1,676 Tongans on RSE in 2025/26 (1News). Approved agents: few (unverified) | Rejected | The government is the intermediary, and the buyers are NZ/AU employers, who already use their own systems |
| Small-scale fishers / fishing vessels | Fisheries Management Act 2002: licence, VMS, daily logbook in prescribed form | Logbooks in prescribed form, applications posted to PO Box 871 | Few licensed tuna vessels. 2025 EEZ tuna catch was 1,469 t (WCPFC). Artisanal fishers are not licensed in the same way | Rejected | Regional bodies (FFA/SPC) provide e-logbook tools. The licensed fleet is tiny |
| Taxi / minibus operators | Land Transport licensing | Taxi companies are found by phone. I found no data | Unknown | Rejected | No register or count found. Fares are cash and informal |
| Livestock / pigs / small abattoirs | Not found | Pigs are mostly kept by households for ceremonial use | n/a | Rejected | Non-commercial and outside any regulation |
| Churches / funerals / burial | Not found as a regulated filing | Church and family led | n/a | Rejected | Culturally run. There is no recurring filing to automate |
| Kava processors / exporters | Kava Standard / Kava Bill, MAFF phytosanitary inspection | Covered in the country report | A few dozen (estimate) | Already in country report (3/10) | Not repeated here |
| Licensed businesses (general) | Business licence under the Business Licences Act. Online registry since 2014 (Foster Moore Catalyst) | The registry is online and searchable by island group and activity | Not counted | n/a (prospecting source) | This is the best list source for any future Tonga outreach |

## 2. Strongest opportunity

### Opportunity: Pacific MTO AML compliance kit (Tonga module)

**Industry:**
Money transfer and remittance operators (non-bank)

**Buyer:**
Owner or compliance officer of an NRBT-licensed money transfer operator. Many are small family or community businesses.

**Trigger / Why now:**
Remittances are a very large share of Tonga's GDP, and correspondent-bank de-risking has repeatedly forced Tongan MTOs out of business for AML/CFT non-compliance. NRBT has shown it will act: it shut down LWS Trading / RK3 Pacific Tonga Ltd in 2024 after customer complaints. In 2026 Tonga is also deepening FIU cooperation with Australia and New Zealand (MoUs, AFP/NZ support). I found no specific new 2025–26 reporting rule (unverified).

**Current workflow:**
1. Collect customer ID at the counter, often on paper or by photocopy (assumed, unverified).
2. Record transactions in the sending partner's system (e.g. KlickEx, or the NZ/AU sending agent) and keep a local register.
3. Compile periodic returns to NRBT and suspicious or threshold reports to the FIU (format unverified).
4. Respond to due-diligence questionnaires from the correspondent bank or the sending partner, the step that drives de-risking.

**Pain:**
The proof is indirect: operators have closed over AML non-compliance (2017 reporting) and NRBT has enforced. I found no direct complaints about reporting hours.

**Existing solutions:**
The sending-partner platforms (KlickEx, MoneyGram via BSP, Digicel's own stack), Excel, external AML consultants, global screening tools (e.g. sanctions-list APIs), and bank-provided questionnaires.

**Offline evidence:**
The licence list is published as a newspaper notice. Operators are small and community-linked, and none show a software footprint. Counter-based KYC.

**Offline channel:**
Phone or walk-in visits using the NRBT authorised-persons list (names are public). NRBT or FIU industry briefings. The partner-platform operators (e.g. KlickEx) as resellers.

**Market count:**
About 17 non-bank licensees (12 Type A, 5 Type B), from the NRBT authorised-persons list as reported by Matangi Tonga.

**The gap:**
No small-operator tool turns counter KYC plus the transaction log into NRBT/FIU returns and a ready-made correspondent-bank due-diligence pack. Unverified whether NRBT returns are paper or portal.

**Possible product:**
A KYC and transaction-register tool for small Pacific MTOs. It produces regulator returns and a due-diligence pack for the bank or sending partner, with country modules for Tonga, Samoa and Fiji.

**MVP:**
A web form for customer KYC with sanctions screening, a transaction register, and a monthly PDF/CSV return plus an "AML programme" document pack.

**Pricing hypothesis:**
USD 100–200/month per operator. Tonga alone is at most about USD 40k ARR, so it must go regional. Buyers would likely want a done-for-you service (compliance officer as a service) more than software alone.

**How to find first customers:**
The NRBT authorised-persons list. Samoa and Fiji have equivalent central-bank or FIU lists (Fiji's FIU publishes guidance for FX dealers and remittance providers).

**Risks:**
The sending partners may already supply KYC/AML. NRBT may mandate its own format. A tiny market. Trust: operators may not hand customer data to a foreign SaaS.

**Kill condition:**
Kill it if the main sending platforms (KlickEx etc.) already generate the NRBT/FIU returns for their agents, or if regional MTOs say the bank handles due diligence.

**Willingness to pay:** Likely only for a service that includes software. Owners are not compliance specialists.

**Founder access:** A non-local founder could reach about 17 named operators by phone or email. Closing the sale probably needs a Pacific-based partner or a regional compliance consultant.

**Score:** 3/10

**Sources:**
- https://matangitonga.to/node/35078 (NRBT authorised persons list / foreign exchange licensing)
- https://matangitonga.to/node/35036 (National Reserve Bank of Tonga notice)
- https://kanivatonga.co.nz/2024/05/lws-trading-rk3-pacific-tonga-ltd-is-shut-down-by-regulator-following-customers-complaints/
- https://kanivatonga.co.nz/2017/03/tonga-reserve-bank-warns-of-illegal-money-exchange-operators/
- https://pina.com.fj/2026/03/19/nz-boosts-support-for-tongas-drug-fighting-efforts/
- https://www.fijifiu.gov.fj/FTR-Act-You/Information-for-Financial-Institution-and-Business/FX-Dealers-and-Money-Remitance-Service-Providers (regional comparator)

## 3. Rejected

- **Household / small-employer NRBF schedules:** NRBF is 5% + 5% monthly, but local accountants and Xero/MYOB already handle it, and I found no evidence that domestic-worker coverage applies. Sources: https://rivermate.com/guides/tonga/benefits, https://pacliirms.austlii.edu.au/to/legis/num_act/rfa1998179
- **Scrap metal dealers:** The trade is negligible (USD thousands per year) and I found no dealer register. Source: https://tradingeconomics.com/tonga/exports/malaysia/aluminum-waste-scrap
- **Seasonal-labour recruitment (RSE/PALM):** The government work-ready pool is the substitute, and the buyers are overseas employers. Sources: https://matangitonga.to/node/39701, https://www.1news.co.nz/2026/08/02/seasonal-work-in-nz-helping-tongans-build-businesses-back-home/, https://tonga.embassy.gov.au/nkfa/PALM.html
- **Fishing logbooks:** The licensed fleet is tiny and VMS and e-reporting come through FFA/SPC. Sources: https://www.tongafish.gov.to/images/documents/Publications/Guidelines/Guide%20for%20Application%20for%20Fisheries%20Licence.pdf, https://meetings.wcpfc.int/file/20965/download
- **Taxi / minibus, livestock, churches/burial, pawn, second-hand, tattoo:** I found no register, no obligation, or no commercial scale.

## 4. Method notes

- What worked: the central bank's licence list (published as a newspaper notice on Matangi Tonga) and ministry PDF guides (Fisheries). The Business Registries site (businessregistries.gov.to) is the best prospect source. It is searchable by activity and island group.
- What didn't work: police-register and dealer-register queries (Tonga has none of these regimes online), and the land-transport and taxi data. English is enough; Tongan-language queries were not tried because of the budget.
- Recommendation: treat Tonga only as an add-on market to Fiji/Samoa-led Pacific products (kava and MTO compliance). Do not research it further as a standalone market.
