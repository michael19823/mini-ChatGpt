# Portugal: offline (quiet) industries pass

**Status: incomplete.** The search tool returned "You've hit your usage limit" on the 3rd WebSearch call. The instructions say to stop and write up when a search is refused, so this report rests on **2 successful searches**. Only one industry (used precious-metal buyers) has sourced evidence. Every other row in the screening table comes from background knowledge and was **not verified in this pass**; treat those rows as hypotheses for a later pass, not findings. No market counts could be sourced.

Overlap check: the existing report (`research/countries/portugal.md`) covers PPP records, CATCH, livro de obra, SAF-T, AL, TVDE, rent receipts, IMPIC AML, wine, energy communities, e-GAR, payroll, vet PEMV, lifts, fire safety and funeral homes. None of those is repeated here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Used gold / precious-metal buyers ("compro ouro", ourivesarias with a used-goods licence) | Lei 98/2015 (RJOC): daily register of each purchase (item, weight, price, payment method, seller ID, destination); full register sent **weekly** to the territorial Polícia Judiciária; 20-day hold before resale; CCTV kept 90 days; no cash above EUR 250 | Law and ASAE guidance: weekly delivery **by post, fax or email** on a PJ-approved form model (sourced) | Unknown. INCM issues the licences; count not found (search refused) | **Lead, 4/10** | Weekly, mandatory, police-facing, still post/fax/email; but small market and possible PJ-side change |
| Household employers of domestic workers | Monthly Segurança Social contributions and declarations, payslips, work-accident insurance | Not verified | Not verified | Not screened | No searches left |
| Livestock keepers and traders | SNIRA movement declarations, transport guides | Not verified; often done by the producer group or association (unverified) | Not verified | Not screened | No searches left |
| Beekeepers | Apiary registration and annual stock declaration to DGAV | Not verified; believed to be a free DGAV online channel (unverified) | Not verified | Not screened (likely reject) | Free government channel plus associations probably cover it (unverified) |
| Arms dealers (armeiros) | Transaction records under the arms law, reported to PSP | Not verified | Not verified | Not screened | No searches left |
| Hunting-zone managers (zonas de caça) | Management plans and harvest reports to ICNF | Not verified | Not verified | Not screened | No searches left; country-specific candidate for a later pass |
| Olive mills (lagares de azeite) | Production and stock reporting; mill wastewater (águas ruças) management | Not verified | Not verified | Not screened | No searches left; country-specific candidate |
| Market traders and street vendors (feirantes) | Prior notification and municipal market rules | Not verified | Not verified | Not screened | No searches left |
| Childminders (amas) | Segurança Social licensing and supervision | Not verified | Not verified | Not screened | No searches left |
| Septic-tank emptying and well drilling | Municipal or APA water licensing | Not verified | Not verified | Not screened | No searches left |

## 2. Opportunities

### Opportunity: Weekly Polícia Judiciária register submission for used-gold buyers

**Industry:**
Retail purchase and resale of used items made of precious metal (gold, silver, platinum): "compro ouro" shops, traditional ourivesarias with the used-goods licence, and pawn-type operators.

**Buyer:**
The owner-operator of a small licensed shop that holds the "retalhista de compra e venda de artigos com metal precioso usados" licence.

**Trigger / Why now:**
There is no new 2025–2026 trigger. The obligation dates from Lei 98/2015 (RJOC). Its continued enforcement by ASAE and the PJ is plausible, but this pass could not verify 2024–2026 enforcement activity. The "why now" is therefore weak. An AORP item on a "nova lei orgânica da Polícia Judiciária" appeared in results. Its content was not read, so whether it changes the reporting channel is unknown.

**Current workflow:**
1. At each purchase, the shop records the item description (weight, age and so on), price, payment method, the seller's identification and the item's destination in a daily register.
2. Each week, the shop compiles the complete register on the form model approved by the PJ National Director.
3. It sends that form to the PJ unit for its area by post, fax or email, and keeps an email record for 3 years.
4. It holds each item for 20 days after the register is delivered before melting or reselling it.
5. Separately, it keeps CCTV footage for 90 days and pays by electronic means above EUR 250.

**Pain:**
The obligation is mandatory, weekly and tied to the police. Errors carry fines under the RJOC. The 20-day hold clock starts at delivery, so late filing directly delays cash conversion of stock. That is a real revenue link. No operator complaints were found; with only two searches, none were looked for.

**Existing solutions:**
Not researched (search refused). Likely substitutes: the PJ form model filled in by hand or in Excel; the general jewellery POS and invoicing software certified by AT; and support from the trade associations AORP and APIO, which publish legislation and PJ contacts. Whether any jewellery POS already generates the PJ weekly file is **unknown, and it is the first thing to check**.

**Offline evidence:**
The legal channel is post, fax or email, with no portal. ASAE's own guidance page and the AORP circular (which lists PJ contacts per region) confirm it. Operators are small shops, often family-run.

**Offline channel:**
AORP (Associação de Ourivesaria e Relojoaria de Portugal) and APIO circulars to members; the INCM contrastarias (assay offices), which every licensed operator visits for hallmarking; and walk-in or phone outreach to "compro ouro" shops, which are visible on high streets.

**Market count:**
Unknown. INCM holds the licence register, but no figure was obtained. Estimate: low thousands at most (unverified).

**The gap:**
Turn a phone-captured purchase (ID card photo, item photo, weight, price) into the PJ weekly form automatically. Email it with proof of delivery, and track each item's 20-day release date.

**Possible product:**
A tablet or phone purchase-intake app that builds the daily register, emails the weekly PJ form to the correct regional PJ unit, archives the proof for 3 years, and flags items that are free to melt or resell.

**MVP:**
A single-screen intake form, plus a weekly PDF or Excel export in the PJ model, sent by email from the shop's own address, plus a 20-day hold list.

**Pricing hypothesis:**
EUR 15–30 per month per shop. Buyers would pay for simple software. A done-for-you service is unlikely to be needed.

**How to find first customers:**
The AORP member base, contrastaria visits, and high-street walk-ins in Lisbon and Porto.

**Risks:**
- Jewellery POS vendors may already include the export.
- The PJ may move to its own portal, which would make the export obsolete or create a new integration opportunity.
- The market is small.
- The founder needs Portuguese and in-person selling. A non-local solo founder would struggle; this needs a local.
- Handling seller ID data raises GDPR liability.

**Kill condition:**
A jewellery POS already produces the PJ file, or there are fewer than about 1,000 licensed used-goods retailers.

**Score:** 4/10 (pain 6, frequency 8, mandatory 9, fragmentation 3, competition unknown, gap unknown, accessibility 6, WTP 3, MVP 9, distribution 5; no why-now)

**Sources:**
- https://diariodarepublica.pt/dr/detalhe/lei/98-2015-70042475
- https://www.asae.gov.pt/fiscalizacao-economica/informacoes-sobre-atividades-economicas/regime-juridico-da-ourivesaria-e-das-contrastarias-rjoc/compra-e-venda-de-artigos-com-metal-precioso-usados.aspx
- https://www.asae.gov.pt/newsletter2/asaenews-n-95-marco-2016/compra-e-venda-de-artigos-com-metal-precioso-usados-.aspx
- https://www.aorp.pt/newspage?newsn=176
- https://www.aorp.pt/_usr/docs/151119163909_Legisla%C3%A7%C3%A3o%20e%20contactos.pdf
- https://aorp.pt/newspage?newsn=281 (title only; content not read)
- https://valores.pt/pt-pt/compra-e-venda-de-ouro-usado-lei/
- https://www.publico.pt/2015/11/15/economia/noticia/transaccoes-de-ouro-em-dinheiro-superiores-a-250-euros-passam-a-ser-proibidas-1714510

## 3. Rejected

None were rejected on evidence in this pass. The rows marked "Not screened" were not tested and should not be read as rejections.

## 4. Method notes

- Regulator-first queries in Portuguese worked immediately. ASAE's "informações sobre atividades económicas" pages and the trade-association (AORP) circulars state the filing channel (post, fax or email) directly. These pages are the best entry point for the other RJOC and ASAE-regulated trades.
- The search budget was cut off at call 3 ("usage limit"). A follow-up pass should start with:
  1. the INCM licence count;
  2. whether jewellery POS software has a PJ export;
  3. the AORP note on the PJ organic law;
  4. armeiros/PSP, zonas de caça/ICNF, lagares de azeite and household employers.
