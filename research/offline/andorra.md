# Andorra: offline-industries pass

**Market type:** Microstate (about 85k residents, 7 parishes). Search budget: 8 WebSearch calls, all used.
**Bottom line:** Andorra has one quiet industry with a real, enforced, recurring obligation that started in 2025: **tobacco ("sensitive goods") retailers and wholesalers**, under Llei 9/2025 and its 2025 regulation. The buyer pool is small (tens to perhaps low hundreds of points of sale; no register count found), and the work sits inside POS/invoicing systems that local vendors can patch. It is at best a narrow local service-plus-software niche, not an indie business. The other quiet industries are either tiny (livestock: about 4,600 head in total) or already handled by an association (tobacco growers via APRA) or by gestories (domestic employers). This adds nothing that clears the bar. The existing country report covers gestories/IGI, HUTs, AML and e-invoicing, and these are not repeated here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Tobacco retail and wholesale ("mercaderies sensibles") | Record books (llibres de registre) with brand and description per sale. Monthly sales communication to Customs for outlets selling >600,000 cigarettes/month or obliged to keep books. Buyer name + NRT for sales >2,000 cigarettes. Card-only above 5 cartons / 376 cigars. Transport-hour limits. Staff training duty | Law speaks of "record books" and only *allows* approved accounting systems as an alternative, so paper/manual books are still the default | Unknown. A business directory lists 15 "tabacs i estancs" (empreses.ad; this undercounts, since supermarkets and Pas de la Casa shops also sell). Pas de la Casa is under a licence moratorium, and 2 licences were revoked in July 2026 | Weak lead (score 3) | Real 2025 trigger and enforcement, but tens of buyers. POS vendors can add the fields |
| Tobacco growers | Annual plantation declaration, hail/frost damage claims, quota (125 t agreed with manufacturers) | Declarations collected by the farmers' association APRA at its office or on its website | About 470 families "live from tobacco" (press figure, unverified as current) | Reject | APRA already does the paperwork for free as an association service. Annual |
| Households as employers (domestic workers) | CASS affiliation before first day, monthly contributions, work/residence permit (immigration quota) | No Andorra-specific domestic-employer tool found. Search returned Spanish/Catalan material only | Unknown (no CASS statistic found) | Reject | Gestories and the CASS portal handle it. Market likely a few hundred households |
| Livestock farmers | Animal ID, holding register, movement records (Andorran equivalents of EU rules, unverified) | No Andorran sources found. Results were Catalan | 4,635 head in 2023: 1,429 cattle, 2,248 sheep, 590 equines (Alto/Govern statistics) | Reject | Too few farms. The ministry does the records |
| Second-hand / antique / used-jewellery dealers | Register book under a 1986 Decree of the Veguers on buying and selling antiques, used jewellery and objects with precious metals | Paper register book stated in the decree | Unknown | Reject | Very few dealers. Obligation is old and not changing |
| Taxi operators | Licence held for life. Government plans to force return at 70 and limit transfers to spouse/children | Licence-transfer issue, not a reporting workflow | Unknown (small, fixed number of licences) | Reject | No recurring paperwork to automate |
| Hunting societies (caça) | Capture declarations (assumed) | No Andorran source found within budget | Unknown | Not assessed | No evidence |
| Seed-list groups not present or trivial (scrap, minibus, street trade, agricultural labour contractors, aerial spraying, religious bodies) | – | – | – | Skipped | Absent or negligible in a 468 km² microstate |

## 2. Opportunities

### Opportunity: Sensitive-goods (tobacco) sales register and monthly Customs report for Andorran tobacco sellers

**Industry:**
Tobacco retail and wholesale (Pas de la Casa border shops, estancs, wholesalers)

**Buyer:**
Owner or manager of a licensed tobacco point of sale or wholesale operator, especially the high-volume Pas de la Casa shops

**Trigger / Why now:**
Llei 9/2025 (13 May 2025) amended the Llei 2/2018 on control of sensitive goods. The new Customs Code (Llei 10/2025) and an implementing regulation followed in 2025 as a "shock plan" against smuggling at Pas de la Casa. New duties: brand and description per sale in the record book and on invoices, and a monthly detailed communication (date, time, invoice number, brand, quantity, plus buyer name and NRT for sales >2,000 cigarettes) for outlets above 600,000 cigarettes a month and those obliged to keep books. There is also a cash-payment ban above 5 cartons / 376 cigars. In July 2026 the Govern revoked two Pas de la Casa licences, so enforcement is real.

**Current workflow:**
1. Ring up the sale on the shop's POS/invoicing system.
2. Write or export the sale into the record book with the new brand/description fields. Capture buyer name + NRT for large sales.
3. Each month, compile the detailed sales list and send it to Customs (exact channel, portal or file format, unverified).
4. Keep staff training evidence and respect the transport and sales-hour limits.

**Pain:**
Losing a licence that cannot be replaced (moratorium) is very costly. Operators publicly complained of "discriminatory" treatment (RTVA), and the press reports that a stricter law could make small shops unviable. Per-transaction data capture is required at high volume. Evidence of the time spent per month is not available (estimate).

**Existing solutions:**
- The shop's existing POS/ERP (local Andorran or Spanish/French vendors; names not identified within budget), which can add fields and an export
- The law's own route of "approved accounting systems"
- Gestories / accountants compiling the monthly report
- Paper record books

**Offline evidence:**
The law is written around physical "llibres de registre". No software vendor listing for "mercaderies sensibles" compliance was found. The operators communicate through press statements and associations, not online forums.

**Offline channel:**
Walk-in visits to the Pas de la Casa shops (one street cluster), the Pas de la Casa traders' association (exists per press coverage; name unverified), the CCIS (Cambra de Comerç), and the gestories that serve them.

**Market count:**
No official licence register count found. empreses.ad lists 15 tobacconists (an undercount). The licence moratorium and revocations show a fixed, small licensed population. Estimate: tens to low hundreds of points of sale, of which perhaps a few dozen pass the 600k/month threshold.

**The gap:**
A validated monthly Customs file built from POS exports, with automatic checks for the >2,000-cigarette buyer-ID rule and the cash cap. This would be possible only if the POS vendors have not already shipped it, which is unverified.

**Possible product:**
A POS-export-to-Customs converter that flags missing NRT/name and cash-limit breaches and produces the monthly communication plus a digital record book. Sold as a done-for-you monthly service.

**MVP:**
A CSV import from one common POS, with rule checks, the monthly file, and a printable register.

**Pricing hypothesis:**
€50–150 per outlet per month as a service. Estimated total market well under €100k ARR.

**How to find first customers:**
In-person visits in Pas de la Casa, the CCIS, and gestories.

**Willingness to pay:**
Shops would pay for a done-for-you service tied to keeping their licence, not for standalone software.

**Founder access:**
Needs a local, Catalan/Spanish/French-speaking founder with Customs contacts. A non-local solo founder could not realistically sell this.

**Risks:**
Tiny market. POS vendors close the gap with one update. Customs may define its own format or portal. Politically volatile sector (possible further restrictions or EU-agreement changes).

**Kill condition:**
The main POS vendors used in Pas de la Casa already output the monthly Customs file, or fewer than about 30 outlets are obliged.

**Score:** 3/10 (tiny market, local-only distribution)

**Sources:**
- https://portaljuridicandorra.ad/L2025009
- https://portaljuridicandorra.ad/L2025010
- https://www.govern.ad/ca/w/el-govern-aprova-el-reglament-d-aplicacio-de-la-llei-de-control-de-les-mercaderies-sensibles-1
- https://www.laveulliure.ad/ca/article/reglament-contraban-tabac-andorra-2025
- https://www.altaveu.com/actualitat/finances/control-mes-estricte-sobre-compra-transport-intern-tabac-dificultar-contraban_62425_102.html
- https://www.ara.ad/societat/ja-no-pot-pagar-metal-lic-compra-mes-376-cigars-cinc-catronts-tabac_1_5378722.html
- https://www.diariandorra.ad/nacional/260724/govern-revoca-dues-llicencies-venda-tabac-pas-casa_201154.html
- https://www.diariandorra.ad/nacional/260725/llei-mes-restrictiva-amb-tabac-faria-inviable-part-petit-comerc_201202.html
- https://www.rtva.ad/noticies/societat/els-tabaquers-del-pas-denuncien-un-tracte-discriminatori
- https://empreses.ad/categoria/tabacs-estancs

## 3. Rejected

- **Tobacco-grower declarations and damage claims:** APRA (Associació de Pagesos i Ramaders d'Andorra) already collects plantation declarations at its office or online and sends technicians for hail/frost claims. The work is annual, with about 470 families. Sources: http://www.apra.ad/index.php?accion=contingut&idmenu=3&id=140, https://www.bondia.ad/societat/el-cultiu-del-tabac-representa-el-8-de-la-superficie-agraria-util
- **Domestic-worker payroll / CASS:** Real obligation (CASS affiliation before work starts), but gestories and the CASS portal substitute, and the household count is small and unquantified. Source: https://ca.andorraservices.com/cass-andorra-seguretat-social-per-a-residents-i-aut%C3%B2noms/
- **Livestock records:** About 4,600 head nationally in 2023. Source: https://www.alto.ad/other/andorra-livestock-recovers-slightly-to-4-63-260317
- **Second-hand / used-jewellery register:** 1986 Decree of the Veguers with a paper register book, but there are very few dealers and no new trigger. Source: search snippet only (decree text not opened).
- **Taxi licences:** The issue is a licence-transfer/age-70 policy, not a recurring workflow. Source: https://www.altaveu.com/actualitat/economia/govern-avisa-taxistes-llicencies-hauran-tornar-administracio-en-complir-xofers_66291_102.html

## 4. Method notes

- Catalan queries naming the specific law ("mercaderies sensibles", "llibre registre") worked well and surfaced portaljuridicandorra.ad, the BOPA and the local press.
- Generic Catalan queries (CASS domestic workers, livestock register) were swamped by Catalonia/Spain results. For Andorra, add "Andorra" plus an Andorran institution name (CASS, APRA, Govern, BOPA).
- No query found an official count of licence holders. Andorra publishes few registers. Counts come from the press or the statistics department.
