# Equatorial Guinea: offline-industries pass

Research date: 2026-10-05. Budget: 8 WebSearch calls, all used. Two of them were refused with a usage-limit error (a taxi/moto-taxi query and its retry), so 6 returned results. All searches were in Spanish. WebFetch was not used. Findings come from search-result summaries. Anything not confirmed in a primary document is marked **unverified** or **estimate**.

## Bottom line

**I found no quiet-industry opportunity in Equatorial Guinea that a solo founder could build on.** There are about 1.7–1.9 million people (estimate). Regulators publish almost nothing online: no public licensing registers, no official forms as PDFs, and no portals turned up in any search. The quiet industries exist, but they are run by informal operators, many of them foreign (Nigerian, Beninese, Cameroonian). Where rules are enforced, enforcement is mostly a municipal inspector collecting payment in person, not a recurring filing that software could take over. The one live regulatory trigger I found (the May 2025 ban on exporting scrap, plus licensing of scrap and waste firms) affects a very small number of firms. That is a sales relationship with the government, not a software market.

This is consistent with the existing country report (`research/countries/equatorial-guinea.md`), which recommends covering the country only as a Spanish-language add-on to a product built for Cameroon or Gabon.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Households employing domestic workers | Ley General de Trabajo defines domestic work as a special employment relationship; INSESO social-security affiliation applies to employees in principle | No INSESO online affiliation channel found; the only hit was the labour-law PDF on ILO NATLEX | Unknown | Reject | No enforced household filing and no channel; INSESO has no e-service to automate |
| Scrap metal dealers / recyclers | Government decree (May 2025) bans exporting scrap metal, mixed metal waste, batteries and used oil; the mining/hydrocarbons ministry is regularising scrap and waste firms (licences, legal procedures, prices) | Regularisation done through meetings with the ministry; informal street collectors (about 5,000 XAF/day) push product to a handful of licensed firms | Handful of firms (estimate, e.g. Golden Swan named in press); no public register found | Weak (Opp. 1) | Real 2025 trigger, but the buyer count is tiny and access is political |
| Second-hand goods / pawnbrokers | None found | n/a | n/a | Reject | No dealer-register obligation surfaced |
| Market traders (Mercado Central de Malabo, Semu) | Municipal trading licence and market taxes collected by city-hall inspectors | Press reports say taxes are collected in person by Ayuntamiento officials and often diverted; traders paid for the market's renovation themselves | Hundreds of stalls (estimate); no register | Reject | Pain is extraction by officials, not paperwork; software doesn't fix that |
| Money changers | BEAC foreign-exchange rules | Informal street exchange (unverified) | Unknown | Reject | Informal or illegal activity; foreign exchange is covered by the bank-side BEAC file in the country report |
| Taxi and moto-taxi operators | Municipal or ministerial licence (unverified) | Searches refused, no data | Unknown | Not assessed | Search budget hit the usage limit |
| Artisanal fishers | Signed document from the Director General of Waters and Fisheries; entry in the National Fishing Registry (6 lists, one for artisanal fishers and their associations); licence quotas by category | Paper document issued at the counter and carried on board (COMHAFAT report) | Unknown; COMHAFAT has a short report on artisanal fishing | Reject | Paper licence issued by the state; fishers have no recurring filing and no money for software |
| Livestock / abattoirs / butchers | Veterinary inspection (assumed) | No EG-specific results; meat is largely imported from Cameroon (unverified) | Unknown | Reject | No evidence found |
| Beekeepers, farriers, kennels | n/a | n/a | Negligible | Reject | Industry barely exists |
| Well drillers, septic, pesticide applicators | n/a | n/a | Unknown | Reject | No local-body filing regime found; not searched separately because of the budget |
| Cemeteries, religious bodies | n/a | n/a | Unknown | Reject | Not searched; no signal in the country report |
| Tattoo studios, barbers, driving schools | Municipal licence (assumed) | n/a | Small | Reject | Market far too small |

Country-specific groups added: scrap/waste regularisation under the 2025 export ban, Malabo market traders, and artisanal fishers in the National Fishing Registry.

## 2. Opportunities

Only one candidate is worth writing up, and it scores low.

### Opportunity: Licensing and intake register for scrap and waste recyclers after the 2025 export ban

**Industry:**  
Scrap metal and waste recycling (metal scrap, batteries, used oil)

**Buyer:**  
Owner or manager of a licensed scrap or recycling company in Malabo or Bata

**Trigger / Why now:**  
- In May 2025 the government banned the export of scrap metal, mixed metal waste, solid and liquid residues, batteries and used oil, to feed local recycling and steel industry.
- The mining/hydrocarbons ministry has started regularising scrap and waste companies: licences, legal procedures and setting fair prices.
- The government has banned "illegal scrap sales" nationwide.

**Current workflow:**  
1. Informal collectors bring scrap to a yard and are paid in cash.
2. The yard keeps whatever record it chooses; I found no prescribed register format.
3. The firm deals with the ministry in meetings and by letter to obtain or keep its licence.

**Pain:**  
- Firms risk losing their licence or being shut down during the regularisation drive.
- Collectors lost income (press quotes about 5,000 XAF/day).
- No complaints about record-keeping specifically were found.

**Existing solutions:**  
- Paper ledgers and Excel (assumed).
- Local lawyers and fixers for the licence.
- Generic scrap-yard software from abroad (none localised for EG).

**Offline evidence:**  
- No online licensing portal, register or form was found.
- Regularisation happens through ministry meetings, as reported in the press.

**Offline channel:**  
- The ministry's regularisation meetings.
- Visits to yards in Malabo and Bata.
- The Cámara Oficial de Comercio, Agrícola y Forestal de Bioko.
- All of this needs a local partner.

**Market count:**  
A handful of firms (estimate, under 20). Golden Swan is named in the press. No public register exists.

**The gap:**  
Possibly a supplier-intake register (who sold what, ID, weight, origin) that could serve as proof of legal sourcing. There is no evidence that the ministry requires one.

**Possible product:**  
A mobile intake log for scrap yards that produces a monthly sourcing statement for the ministry.

**MVP:**  
A WhatsApp or phone form that writes to a spreadsheet and outputs a monthly PDF.

**Pricing hypothesis:**  
$30–100/month (estimate). Buyers would more likely pay for a done-for-you licensing service than for software.

**How to find first customers:**  
Press coverage of the regularisation meetings, plus a local fixer.

**Risks:**  
- Too few buyers.
- Licensing is decided politically.
- Payment rails are hard (XAF, BEAC rules).
- A non-local founder can't sell this. It needs a local partner.

**Kill condition:**  
The ministry sets no recurring reporting or register obligation, or there are fewer than 30 licensed firms.

**Score:** 2/10  
- Willingness to pay: a service at best.  
- Distribution: 2, since it depends on a local partner.  
- Founder access: needs a local.

**Sources:**  
- https://ahoraeg.com/politica/2025/05/06/el-gobierno-prohibe-la-exportacion-de-chatarras-y-de-material-solido-en-el-pais/
- https://realequatorialguinea.com/minas-e-hidrocarburos/el-gobierno-insiste-en-la-regularizacion-de-firmas-del-sector-de-chatarra-y-residuos-en-guinea-ecuatorial/
- https://realequatorialguinea.com/destacado/politica/se-comunica-a-golden-swan-las-restricciones-de-venta-de-chatarra-y-la-apuesta-por-industrializar-el-reciclaje-en-guinea-ecuatorial/
- https://www.guineaecuatorialpress.com/noticias/guinea_ecuatorial_pone_fin_a_la_venta_ilegal_de_chatarra
- https://impactuseg.com/impactus-noticias.php?id=162

## 3. Rejected

- **Domestic-worker payroll and INSESO:** the labour law covers domestic workers ([ILO NATLEX, Ley General de Trabajo](https://natlex.ilo.org/dyn/natlex2/natlex2/files/download/113235/EG%20TRA.pdf)), but I found no enforced household affiliation process and no e-channel. The substitute is cash and no paperwork.
- **Malabo market traders:** the burden is in-person tax collection by municipal inspectors, which press reports describe as often diverted ([Diario Rombe](https://diariorombe.es/magazine/el-mercado-central-de-malabo-lugar-paradogicamente-emblematico-de-la-ciudad/), [Diario Rombe on reform](https://diariorombe.es/ultimas-noticias/la-alcaldesa-malabo-obliga-los-comerciantes-reformar-mercado-central-malabo-propios-recursos/)). That is a governance problem, not a software one.
- **Artisanal fishers:** a one-off paper licence and a National Fishing Registry entry, issued by the Directorate General of Waters and Fisheries ([COMHAFAT report](https://beta.comhafat.org/wp-content/uploads/2025/06/doc_actualite_1145.pdf), [FAOLEX](https://faolex.fao.org/docs/pdf/eqg5287.pdf)). The obligation doesn't recur and fishers can't pay.
- **Livestock, abattoirs, butchers, apiculture and other animal trades:** no EG-specific evidence; the sector is tiny.
- **Money changers:** informal, and foreign exchange is already covered by the BEAC import file in the country report.
- **Taxis and moto-taxis:** not assessed, because the searches were refused (usage limit).

## 4. Method notes

- Spanish news sites (ahoraeg.com, realequatorialguinea.com, guineaecuatorialpress.com, diariorombe.es) were the only useful regulator-side sources. They report decrees and enforcement drives.
- Searches for registers, official forms and gazettes returned nothing for EG. Spanish queries are swamped by results for *Ecuador*, so add "Malabo" or "Bata" to every query.
- COMHAFAT and FAOLEX hold EG fisheries law.
- Two of the 8 calls failed on the usage limit.

Research model: Opus
