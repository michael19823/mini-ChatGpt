# Cabo Verde: offline (quiet) industries pass

**Researched:** 2026-10-05. **Search budget:** 8 of 8 WebSearch calls used. WebFetch not used.
**Context:** about 0.5–0.6 million people (estimate) on 10 islands, Portuguese-language administration. The existing country report (`research/countries/cabo-verde.md`) already covers short-term rental compliance (SGIT, tourist tax, guest bulletins) and e-Fatura. Those are not repeated here.

**Bottom line:** No quiet industry in Cabo Verde supports an indie software business. The regulated quiet trades are either tiny in absolute numbers (about 2,300 insured domestic workers in total), mostly informal and unenforced (domestic work, street trade, slaughter), or served directly by a government counter or system (fishing licences, transport licences through DGTR and the municipalities). The one idea below is a weak lead, scored honestly. It is better treated as a local accountant's service line than as a software product.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Households employing domestic workers | Register the worker with INPS under the domestic-service regime. Monthly contributions: 16% employer + 8.5% worker | 92.8% of domestic workers have no written contract and only about 10% are INPS-registered (Lusa/DN). Registration and payment happen at INPS counters or through accountants (unverified detail) | **2,298 insured domestic workers in 2024** (1,197 on Santiago, 708 on São Vicente) (ILO country brief, Mar 2026) | Weak lead | A real obligation, but compliance is about 10% and the formal pool is about 2,300. Too small and unenforced |
| Hiace minibus (collective "aluguer") operators | Licence and route permit (DGTR for inter-municipal routes, municipalities for local ones), technical inspection, insurance. DL 27/2025 amended the transport framework | Owner-operators organised in an owners' association. No software listings found | Unknown. Hiace dominates collective transport (bus-planet.com). No register count found | Reject | DL 27/2025 relaxed a rule (it revoked the 12-year age limit) rather than adding recurring filings. Licensing is annual or one-off at a counter |
| Taxi operators | Municipal alvará, inspection | Municipal counters | Unknown | Reject | Annual or one-off. Small fleets |
| Scrap metal / used-goods dealers | No specific dealer register found. Exports need a licensed operator and an accredited broker | No specific regime found | Unknown | Reject | No register obligation identified (trade.gov CCG) |
| Artisanal fishers and boat owners | Fishing licence (mandatory for commercial fishing, including artisanal) | Licences issued by the fisheries authority. Paper-based is assumed (unverified) | Effort cap of **6,500 artisanal vessels** (2025 fishing-effort instrument, per search summary, unverified detail) | Reject | An annual licence with no recurring reporting found. Buyers are very low-income |
| Fish sellers (peixeiras) / market traders | Municipal market fees and stall permits | Cash at municipal markets | Unknown | Reject | Informal. Fees are paid in cash. No willingness to pay for software |
| Micro-enterprises under REMPE (rabidantes, small shops) | Unified special tax (TEU) on turnover under REMPE (2014, in force 2015) | Academic work (IPL repository) describes it as a formalisation tool for the informal economy | Unknown. Forbes África Lusófona says micro-enterprises dominate the business count | Reject | Filing is simple and low-frequency, and accountants or the tax portal already handle it |
| Small abattoirs / livestock traders | Veterinary inspection, slaughter at licensed abattoirs | Search returned only Portuguese (ASAE) results. No Cabo Verde-specific regime surfaced | Unknown | Reject (no evidence) | Not enough evidence of a recurring documented obligation |
| Beekeepers, kennels, farriers, tattoo studios, well drillers, backflow testers | — | Not searched (budget). These are almost certainly negligible in this market | — | Not screened | Microstate. These trades are tiny or absent |
| Cemeteries / funeral services | Municipally run cemeteries. Death registration at the civil registry | Not searched | — | Not screened | Mostly municipal, few private operators (estimate) |

The instructions ask for at least three country-specific groups. In this market the country-specific groups are the Hiace "aluguer" operators, the REMPE micro-traders (rabidantes) and the artisanal fishers and peixeiras. All three are listed above.

---

## 2. Strongest opportunities

### Opportunity: Domestic-employer INPS compliance service (registration + monthly contributions + payslips)

**Industry:**
Households as employers (domestic workers, nannies, caregivers)

**Buyer:**
Middle-class and expatriate households in Praia (Santiago) and Mindelo (São Vicente) that employ a domestic worker. The secondary buyer is a small accounting firm that wants to offer this as a white-label service.

**Trigger / Why now:**
Weak. There is a long-standing domestic-service regime under INPS (contributions of 16% employer + 8.5% worker). ICIEG and UN Women presented a draft regulation of domestic work, and in March 2026 the ILO published a country brief on unemployment protection for domestic workers. Together these suggest policy attention, possibly leading to new obligations. **No 2025–2026 decree creating a new obligation was found.**

**Current workflow:**
1. The employer (or the worker) registers the worker with INPS at a counter or through an accountant (channel unverified).
2. Every month the employer computes contributions on the declared wage and pays INPS.
3. Payslips and contracts are mostly absent: 92.8% of workers have no written contract.

**Pain:**
Low perceived pain because enforcement is weak. About 90% of domestic workers are unregistered, so most households face no consequence. Where there is pain, it is the worker's loss of social protection, not a cost to the employer.

**Existing solutions:**
The INPS counter or portal (inps.cv lists employer obligations). Local accountants. Doing nothing (informality), which is the dominant substitute.

**Offline evidence:**
92.8% of domestic workers have no written contract and only about 10% are INPS-registered. No household-payroll software for Cabo Verde was found.

**Offline channel:**
Accountants in Praia and Mindelo. Expatriate community and embassy networks. INPS awareness campaigns, if INPS ran a formalisation drive (speculative).

**Market count:**
2,298 insured domestic workers in 2024 (ILO country brief, March 2026). The potential pool is larger if formalisation grows, but there is no source for that.

**The gap:**
A simple done-for-you monthly calculation, payslip and payment reminder for households. The gap exists only because the market is too small for anyone to bother.

**Possible product:**
A WhatsApp-based monthly reminder plus a contribution calculator and payslip PDF, sold through one accountant.

**MVP:**
A spreadsheet template plus a payslip generator. Contribution payment stays manual.

**Pricing hypothesis:**
€3–5 per household per month (estimate). Households would only pay for a done-for-you service, not for software. Even at 100% capture of the insured pool the market is about 2,300 × €4 ≈ €9k per month, so realistic capture is a few hundred euros per month.

**How to find first customers:**
Accountants. Expatriate associations in Praia. There is no public register of household employers.

**Risks:**
No enforcement. Tiny market. INPS could add simple online payment itself. Founder access: a non-local founder could not sell this. It needs a local accountant partner.

**Kill condition:**
No new domestic-work regulation or INPS formalisation campaign with penalties by 2027 (likely).

**Score:** 2/10

**Sources:**
- https://www.ilo.org/sites/default/files/2026-03/ILO%20Country%20brief_Prote%C3%A7%C3%A3o%20no%20desemprego%20no%20trabalho%20dom%C3%A9stico%20em%20Cabo%20Verde.pdf
- https://www.dn.pt/lusa/interior/maioria-das-empregadas-domesticas-cabo-verdianas-nao-tem-contrato-nem-protecao-social-9066788.html
- https://www.cidadefm.cv/noticia/39067/maioria-das-empregadas-domesticas-cabo-verdianas-nao-tem-contrato-nem-protecao-social
- https://inps.cv/obrigacoes/

No other quiet-industry opportunity reached even this level.

---

## 3. Rejected

- **Hiace minibus fleet compliance:** DL 27/2025 (BO n.º 77, 19 Aug 2025) amended the motor-transport framework and the Road Code, but the visible change *removed* a burden (the 12-year age limit) in favour of technical inspection. Licensing goes through DGTR or the municipalities and is annual or one-off. No recurring per-trip or monthly reporting was found. The owners' association is a channel, but there is nothing to sell into it. Sources: https://boe.incv.cv/Bulletins/DownloadAct?id=86958, https://www.bus-planet.com/bus/bus-africa/Cabo-Verde-site/Hiace/intro.html
- **Artisanal fishing licences:** The effort cap of about 6,500 vessels shows a sizeable population, but the obligation is a licence with no recurring report, and the buyers have very low incomes. The substitute is the fisheries authority counter. Source: https://faolex.fao.org/docs/pdf/cvi194488.pdf (unverified that this is the 2025 instrument)
- **REMPE / TEU filings for micro-traders:** Simple, low-frequency filings already handled by accountants or the DNRE portal. Source: https://repositorio.ipl.pt/entities/publication/a576710f-531c-4a36-b93b-0629c3aeedd0
- **Scrap and second-hand dealer registers:** No dealer-register obligation was found. Exports need only a licensed operator and an accredited broker. Source: https://trade.gov/country-commercial-guides/cabo-verde-import-requirements-and-documentations
- **Abattoirs and livestock:** No Cabo Verde-specific evidence surfaced (the results were Portuguese ASAE news).

## 4. Method notes

- Portuguese queries naming the regulator (INPS, DGTR) and "Boletim Oficial" decree numbers worked best. Results land on boe.incv.cv, which confirms that a decree exists, although snippets rarely give its content.
- ILO and social-protection.org briefs were the only source of hard counts (domestic workers).
- Queries on livestock and slaughter were swamped by Portugal results, so a future query should include "Cabo Verde" plus an island or municipality name.
- With 8 searches, the seed trades (tattoo studios, well drillers, kennels and so on) were skipped as almost certainly negligible in a microstate.
