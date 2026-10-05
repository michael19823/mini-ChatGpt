# Nicaragua: Offline (quiet) industries pass

Researched 2026-10-05. **Truncated run.** The search tool returned a usage-limit error on the 3rd WebSearch call, so this report rests on 2 completed searches. Per the method ("if a search is refused, stop and write up what you have"), I stopped there. Anything not confirmed by those 2 searches is marked "unverified" (from background knowledge) and should not be cited as fact.

Context from the existing country report (`research/countries/nicaragua.md`): ~7M people, a repressive and opaque regulatory environment, and business associations and NGOs closed or exiled. Offline channels that depend on associations are therefore weak, and a non-local founder would struggle. That alone caps distribution scores in this pass.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Pawnshops and private lenders (casas de empeño / prestamistas) | Mandatory registration with CONAMI under Resolución CD-CONAMI-055-01NOV28-2024 (Norma de Registro de los Proveedores de Servicio de Empeño y/o Préstamo, La Gaceta 2024-12-23). Also listed as AML obligated subjects | Registration is filed on paper documents to CONAMI (requirements list in the norm). Recurring reporting format not verified | Unknown. No public register count found | Weak candidate | Real new trigger, but the market is small and politically exposed, and the recurring filing burden is unverified |
| Scrap metal and e-waste collectors/exporters (chatarreras, centros de acopio) | Environmental and handling rules. Fines of C$5,000–50,000 reported for e-scrap mishandling | Described as "one of the least regulated activities" | ~220 collection and export centres (figure from search summary; primary source not identified, so treat as unverified) | Reject | Weak enforcement means no forcing function. The buyers are informal cash businesses |
| Households employing domestic workers | INSS registration and contributions; Labour Code severance (indemnización) and 13th month (aguinaldo) (unverified detail) | Search refused | Unknown | Not assessed | No evidence gathered |
| Cattle traders, small abattoirs (rastros municipales) | IPSA traceability and CUBE farm codes | Government already runs a free system with a mobile app (existing report) | >200,000 farms with CUBE codes (existing report) | Reject | Free mandatory state system |
| Money changers (coyotes / cambistas) | AML / BCN oversight (unverified) | Street-level, cash | Unknown | Reject | Informal, politically sensitive, no software buyer |
| Agro-input retailers (expendios de agroquímicos) | IPSA/MAG establishment registration (unverified) | Not researched | Unknown | Not assessed | Search refused |
| Well drillers / water concessions (ANA) | Water-use concessions under Ley 620 (unverified) | Not researched | Unknown | Not assessed | Search refused |
| Moto-taxis and caponeras | Municipal operating permits (unverified) | Counter at the alcaldía | Unknown | Reject (prior) | Low-income buyers, municipal politics, consumer-grade willingness to pay |
| Artisanal gold buyers (acopiadores, Siuna/Bonanza/Rosita) | Mining and export rules; state-linked buyers (unverified) | Not researched | Unknown | Reject (prior) | Politically sensitive, concessions and sanctions exposure |
| Beekeepers | IPSA apiary registration for honey exports (unverified) | Not researched | Unknown | Not assessed | Search refused |

## 2. Strongest opportunities

None reaches the quality bar. The best lead is recorded below so that a later pass can pick it up. It scores low.

### Opportunity: CONAMI pawn and lender register and compliance book

**Industry:**
Pawnshops (casas de empeño) and registered private lenders

**Buyer:**
Owner-operator of a small pawnshop or lending business

**Trigger / Why now:**
CONAMI Resolución CD-CONAMI-055-01NOV28-2024, published in La Gaceta on 2024-12-23, created a mandatory registration norm for pawn and loan providers. These businesses are also designated as obligated subjects for AML/CFT reporting.

**Current workflow:**
1. The owner assembles registration documents listed in the norm (constitution, public registry entry, IDs, and so on) and files them with CONAMI.
2. Pawn tickets and loan contracts are kept on paper or in spreadsheets (unverified).
3. AML customer identification and suspicious-transaction reporting go to the UAF (unverified format).

**Pain:**
A new mandatory registration plus AML duties on small cash businesses. No evidence was found of complaints, inspections or fines (search budget exhausted).

**Existing solutions:**
Lawyers and notaries who prepare the registration file; accountants; generic pawn POS software from other Latin American countries (not verified for Nicaragua); paper ticket books from stationers (unverified).

**Offline evidence:**
The registration is a document-pack filing to CONAMI. No Nicaragua-specific pawn software listings were seen (not systematically checked).

**Offline channel:**
None concrete. The CONAMI public register of registered providers, if published, could support phone and WhatsApp outreach (unverified that it is published). A local partner such as a law firm doing the registrations would be needed.

**Market count:**
Unknown. No register count found.

**The gap:**
A ticket and loan ledger that also produces CONAMI and UAF report formats. Unconfirmed, because the recurring report formats were not verified.

**Possible product:**
A pawn ticket and loan register with customer KYC capture and export of whatever periodic report CONAMI and UAF require.

**MVP:**
Ticket issuance, KYC fields, and a monthly export.

**Pricing hypothesis:**
USD 20–40 per month (estimate). Done-for-you registration through a law-firm partner is more likely to sell than software.

**How to find first customers:**
A CONAMI registry list (if public) or a local law firm.

**Risks:**
Political exposure of a financial-adjacent business. Small market. Likely needs a local partner. The founder must screen counterparties against the SDN list.

**Kill condition:**
CONAMI requires no recurring report beyond the one-off registration, or the number of registered providers is under ~200.

**Willingness to pay / founder access:**
These buyers pay for a service (the lawyer), not for software. A non-local solo founder could not realistically sell this.

**Score:** 2/10

**Sources:**
- https://garciabodan.com/en/new-regulation-microfinance-institution-contribution-nicaragua/
- https://www.leybook.com/doc/33954/pdf
- https://nicaragua.justia.com/nacionales/resoluciones/normativa-de-prevencion-deteccion-y-reporte-de-actividades-relacionadas-con-el-la-ft-a-traves-de-instituciones-financieras/gdoc

## 3. Rejected

- **Scrap and e-waste collectors:** about 220 centres (figure unverified), but enforcement is weak ("one of the least regulated activities"), so nothing forces a recurring workflow. Source: search summary; the primary article was not identified (possibly https://www.laprensani.com/2014/07/20/seccion-domingo/203992-llego-el-chatarrero, which is dated 2014).
- **Cattle traders and abattoirs:** the free state IPSA/CUBE traceability system already covers this (see the country report).
- **Money changers, moto-taxis, gold buyers:** informal, politically sensitive, or no software buyer.
- **Domestic-worker employers, agro-input retailers, well drillers, beekeepers:** not assessed because of the search cutoff. Domestic-worker INSS filing is the most worth a follow-up check.

## 4. Method notes

- A Spanish regulator-first query ("CONAMI casas de empeño registro norma") found a concrete 2024 trigger right away. Law aggregators (leybook.com, nicaragua.justia.com) and law-firm alerts (garciabodan.com) carry the gazette texts that the official sites don't surface.
- A generic "chatarra registro policía" query returned mostly Argentina, Ecuador and Paraguay. Add "La Gaceta" or "MARENA" to keep results in Nicaragua.
- The run was cut off at 2 of 20 planned searches by a tool usage limit. The domestic-worker, IPSA and ANA screens should be re-run if budget allows.
