# Suriname: Offline (Quiet) Industries Pass

**Context:** Suriname has about 0.6M people, a Dutch-language administration and the SRD currency. The existing country report (`research/countries/suriname.md`) already covers oil-and-gas local content, BTW/cash registers and fish-export documents. Those are not repeated here.

**Budget:** 20 WebSearch calls were allowed. 18 returned results and 2 hit the usage limit. No WebFetch was used.

**Bottom line:** this is a small market, and most quiet industries here are regulated by ministries that hold no usable public register and publish almost nothing. Only one opportunity reaches 4/10, and it is narrow. This is an honest short report.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Money-transaction offices (cambios / wisselkantoren and money-transfer offices) | Licence and supervision by the Centrale Bank van Suriname (CBvS) under the Wet Toezicht Geldtransactiekantoren 2012. Periodic statements, on-site inspection, CBvS AML/CFT Richtlijn, unusual-transaction reports (MOT) to FIU Suriname | Supervision is described as on-site inspection plus review of periodic annual statements. The law lets MOT reports be made "in writing, digitally or otherwise". No software listings found | Public CBvS list dated 31 Dec 2025. Named cambios include Central Money Exchange, Dallex, Dharma Tew, Digros, Express, Florin, Keystone, Money Line, Multi Track, Shamy. Total count unverified, estimated 20–40 | **Candidate (weak)** | A real register and recurring reports, but the market is tiny |
| Private line-bus owners (PL-bussen) | Bus permit (autobusvergunning) from the TCT Public Transport Service, with renewals, route and vehicle changes. Re-registration drive. Monthly fuel-compensation subsidy | Paper applications at the TCT counter. The government admits it has no "up-to-date reliable database of permit holders". Compensation runs months late | Unverified. Organised through the PLO (Particuliere Lijnbushouders Organisatie) | **Candidate (weak)** | Real paperwork, but the payer is poor and the state is the integration point |
| Household employers (domestic workers) | Minimum hourly wage (SRD 61.25 from 1 Jul 2026), APF pension under the Wet Algemeen Pensioen 2014, wage tax and AOV | I could not confirm whether domestic workers fall under the APF obligation in practice | Unknown | Rejected | No evidence of enforcement on households, and Celery Payroll already has APF integration |
| Gold buyers (goudopkopers) and small-scale miners | OKGS registration of people in small-scale gold mining. Gold purchases often go unregistered | Paper and cash. The state itself cannot trace gold-purchase flows | Unknown | Rejected | An informal sector. The problem is enforcement, not software |
| Scrap metal dealers | Export licensing under the Besluit Negatieve Lijst (H03 form "in triplicate") | Paper triplicate forms | Unknown | Rejected | I found no dealer register and no recurring obligation |
| Market traders / street vendors | Market designation under the Markttijdenbesluit 1970, plus the general business licence | Only a 1970 decree surfaced | Unknown | Rejected | No modern obligation found. The 2026 cash-register plan targets shops, not stalls |
| Slaughterhouses / meat sellers | Veterinary permit for slaughter facilities and meat outlets (Decision 2020, fixed form and fee). LVV meat inspection | Fixed paper form and fee | Unknown, probably dozens | Rejected | A one-off permit plus a government inspection. Export work is at the NVWA-training stage |
| Pesticide retailers | Separate permit (excluded from the general shop licence). Banned-list enforcement under the Bestrijdingsmiddelenwet 1972 | LVV enforcement is by inspection and licence revocation | Unknown | Rejected | No recurring sales-register filing found |
| Vegetable exporters (pesticide residues) | EU export restriction (e.g. sopropo) until residue testing exists | The residue lab has been under construction since 2012/13 | Few exporters | Rejected | Blocked on a government lab, not on paperwork |
| Wildlife exporters (live animals, birds) | CITES permits, H-99, health certificate, quota, application at the Permits section counter | Counter filing in person at Cornelis Jongbawstraat. Multi-form pack | A handful of exporters (estimate) | Rejected | A real multi-form pack, but too few buyers and a reputational risk |
| Timber concession holders | SBB (Stichting voor Bosbeheer en Bostoezicht) production control and export | SBB already runs its own control system (unverified detail) | 220 permits in 2016 (115 concessions) | Rejected | SBB owns the workflow, and a move to an "authority" is pending |
| DNFBPs: jewellers, car dealers | MOT reports to FIU Suriname. A new AML/CFT law is in draft | Reports may be made "in writing" | Unknown | Not assessed | The draft law's status could not be verified (search limit hit) |
| Taxi operators | Unknown | No Suriname results; only NL/BE came back | Unknown | Not assessed | No data |

## 2. Strongest opportunities

### Opportunity: AML/CFT compliance kit for small money-transaction offices

**Industry:**
Money exchange offices (cambios / wisselkantoren) and money-transfer offices supervised by the CBvS.

**Buyer:**
The owner or compliance officer of a small CBvS-licensed cambio or money-transfer office. These are often family-run, single-branch businesses.

**Trigger / Why now:**
- The CBvS published an updated list of supervised money-transaction offices as of 31 Dec 2025.
- The CBvS has issued an AML/CFT Richtlijn, and the IMF provided technical assistance (2024) to strengthen the AML/CFT legal framework.
- Local press reports that the current compliance legislation is to be replaced by a new money-laundering and terrorist-financing law. Its status in 2026 is unverified.
- A new law would most likely bring new CDD, record-keeping and reporting formats.

**Current workflow:**
1. Customer ID is copied at the counter.
2. Transactions are logged in the cambio's own system or in Excel.
3. Staff check by hand against the indicators of unusual transactions (Besluit Indicatoren Ongebruikelijke Transacties, amended in 2013).
4. MOT reports are made to FIU Suriname "in writing, digitally or otherwise".
5. Periodic statements are compiled for the CBvS, which also inspects on site.

**Pain:**
The obligation is mandatory, and getting it wrong risks the licence. That said, I found no Suriname-specific complaints or fines; the only fine example that surfaced was Dutch. The pain is inferred from the regulatory framework, not from complaints.

**Existing solutions:**
- Cambio core/forex software (vendors unverified)
- Generic AML screening tools (enterprise-priced)
- Local compliance consultants and accountants
- FIU and CBvS forms

**Offline evidence:**
- Supervision runs through on-site inspection and periodic statements.
- MOT reporting is allowed in writing.
- No Suriname AML software vendor surfaced.

**Offline channel:**
- The CBvS public register PDF gives every licensee's name, so a founder can phone or visit each one in Paramaribo.
- Compliance consultants and accountants who serve cambios can resell.

**Market count:**
The CBvS register of 31 Dec 2025 lists all licensees. The exact count is unverified (estimated 20–40 cambios plus a smaller number of transfer offices).

**The gap:**
A Dutch-language tool built around Suriname's indicator list and CBvS reporting, sized for a single-counter office. Whether this gap is real is unverified.

**Possible product:**
A counter-side CDD log that:
- applies the Suriname unusual-transaction indicators automatically;
- drafts MOT reports in the FIU format;
- keeps an inspection-ready file for CBvS visits.

**MVP:**
Transaction CSV import, indicator rules, an MOT draft PDF and a record-retention archive.

**Pricing hypothesis:**
US$100–250 per month per office (estimate). Willingness to pay is higher than in other quiet sectors because the licence is at stake. Buyers may still prefer a done-for-you consultant.

**How to find first customers:**
The CBvS register of money-transaction offices.

**Founder access:**
A non-local founder could reach these offices from the register, but a Dutch speaker and probably a local compliance partner are needed.

**Risks:**
- The total addressable market is tiny, under US$100k ARR even at full penetration (estimate).
- FIU Suriname may mandate its own portal (e.g. goAML, unverified).
- Cambios may already get AML modules from their forex-software vendor.

**Kill condition:**
- FIU Suriname uses goAML with a free web entry form, and CBvS reporting is a simple annual statement; or
- fewer than 20 licensees exist.

**Score:** 4/10

**Sources:**
- https://www.cbvs.sr/images/content/2026/DTZ2026/Ondertoezichtstaande_Instellingen/Ondertoezichtstaande_geldtransactiekantoren_31dec2025.pdf
- https://www.sris.sr/wp-content/uploads/2021/06/Wet-Toezicht-Geldtransactiekantoren-2012-bijgewerkt-door-SRiS-tm-2021-no-53.pdf
- https://www.doingbusinessdutchcaribbean.com/suriname/financial-and-insurance-services-supervision/money-transfer-companies-stock-exchange/
- https://www.imf.org/en/publications/technical-assistance-reports/issues/2024/07/12/suriname-technical-assistance-report-strengthening-the-aml-cft-legal-framework-and-551729
- https://keynews.sr/vervanging-huidig-surinaamse-compliancewetgeving-door-ontwerpwet-wet-ter-voorkoming-en-bestrijding-van-moneylaundering-en-terrorismefinanciering
- https://www.dna.sr/media/hcipk2go/s-b-_2012_no-_133_wet_wijziging_melding_ongebruikelijke_transacties_mot.pdf

---

### Opportunity: Permit-and-subsidy file manager for private line-bus owners (via the PLO)

**Industry:**
Private line-bus transport (PL-bussen).

**Buyer:**
The PLO (Particuliere Lijnbushouders Organisatie), on behalf of its members, or individual bus owners. Most are owner-drivers with one or two buses.

**Trigger / Why now:**
- A presidential task force on ordering the bus and boat permit sector was given six months to propose modernisation. It found "outdated permit policies", no reliable database of permit holders, and a need to restructure the subsidies.
- TCT ran a re-registration drive that not every owner completed.
- The fuel-price compensation is paid per period and paid late (the government was four months behind at one point).

**Current workflow:**
1. The owner applies at the TCT Public Transport Service counter for new permits, renewals, route changes and vehicle replacements (TCT FAQ).
2. The owner re-registers when TCT demands it.
3. The PLO collects members' data for fuel-compensation claims.
4. Payments arrive months late, and the PLO chases TCT.

**Pain:**
- Repeated press coverage: "bushouders woedend over boetes", "PLO bushouders al zat van misleidingen TCT", and compensation arrears.
- Permits are withdrawn by TCT inspectors.

**Existing solutions:**
- TCT paper forms and counter
- PLO and NVB internal administration (Excel or paper, unverified)
- A future government database, which is the task force's own goal

**Offline evidence:**
- Counter applications.
- The government states in public that it has no reliable database.
- No software surfaced.

**Offline channel:**
The PLO association leadership, which is named in the task force. Also bus stations and terminals in Paramaribo.

**Market count:**
Unverified. The number of PL-bus permit holders is not public. Estimated in the high hundreds to low thousands.

**The gap:**
- A member-side record of permit expiry, vehicle documents and compensation claims.
- An evidence trail when TCT is late.

**Possible product:**
An association-run membership register that tracks permit and vehicle-document expiry, assembles fuel-compensation claim files and records amounts owed by TCT.

**MVP:**
A WhatsApp-plus-web register run for the PLO, with expiry reminders and a claims export.

**Pricing hypothesis:**
- An association fee of US$100–300 per month, or
- SRD-priced per-bus dues collected by the PLO.

Willingness to pay for software is low; owners would pay only for a done-for-you service.

**How to find first customers:**
The PLO board. The TCT task force membership is public.

**Founder access:**
Needs a local, Dutch- and Sranan-speaking partner. Not realistic for a non-local solo founder.

**Risks:**
- The government builds the database itself, and the task force will likely recommend exactly that.
- Political volatility.
- SRD revenue.

**Kill condition:**
TCT launches an online permit and subsidy system, or the PLO will not pay.

**Score:** 3/10

**Sources:**
- https://gov.sr/wp-content/uploads/2023/03/Veelgestelde-vragen-Autobusvergunningen.pdf
- https://keynews.sr/president-santokhi-stelt-werkgroep-in-voor-ordening-bus-en-bootsector
- https://www.surinametimes.com/artikel/reregistration-creates-division-among-bus-owners
- https://keynews.sr/particuliere-lijnbushoudersontvangen-brandstofcompensatie
- https://keynews.sr/subsidie-bus-en-boothouders-blijven-gegarandeerd
- https://www.surinametimes.com/artikel/bushouders-woedend-over-boetes

## 3. Rejected

- **Household employers (APF pension and the July 2026 minimum-wage rise):** I found no evidence that the obligation is enforced on households. Celery Payroll already integrates APF. Sources: https://www.celerypayroll.com/en/?p=10993, https://wageindicator.org/ai/work/minimum-wage/updates/2026/minimum-wage-increased-in-suriname-from-01-july-2026-july-26-2026/
- **Gold buyers:** informal, and buyers have no reason to pay. Source: https://www.srherald.com/suriname/2024/07/11/gajadien-pleit-voor-meer-inkomsten-uit-goudsector
- **Wildlife exporters:** a real multi-form CITES pack filed at a counter, but only a handful of exporters and a reputational risk. Source: https://www.fao.org/4/y7429e/y7429e06.htm
- **Timber concession holders:** SBB owns the control system, and about 220 permits (2016) is too small a base. Source: https://www.fao.org/4/x6827e/X6827E10.htm
- **Vegetable exporters:** blocked by the government residue lab, not by paperwork. Source: https://www.surinametimes.com/artikel/lvv-werkt-aan-residuelab-om-exportverbod-landbouwproducten-eu-op-te-heffen
- **Shop cash-register mandate (2026):** cheap cash registers cost US$100–150, and this is already covered by the BTW idea in the country report. Source: https://www.srherald.com/suriname/2026/03/08/regering-wil-kassasystemen-verplicht-stellen-voor-btw-controle/
- **Scrap, markets, slaughterhouses, pesticide retailers:** I found only one-off permits or old decrees, with no recurring filing.

## 4. Method notes

- Dutch queries naming the regulator worked best: CBvS, TCT, LVV, SBB, FIU Suriname. The CBvS publishes a real licensee register. Other ministries publish almost nothing, and Suriname news sites (keynews.sr, srherald, surinametimes) were the main evidence.
- Dutch queries often returned results from the Netherlands or Belgium (taxi, market permits). Adding "Suriname" plus a regulator acronym helped.
- Operator counts were almost never public.
- The search limit cut off the checks on the AML law's status and the bus re-registration count.
