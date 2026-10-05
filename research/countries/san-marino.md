# San Marino: Country Research

**Market type:** Microstate (about 34k residents, roughly 61 km2). Search budget: 4 WebSearch calls (all used).
**Accessibility:** Fully accessible. San Marino is not sanctioned, uses the euro, and forms a customs union with the EU. It also sits inside the Italian economic area (Italian banks, SEPA, Italian-language software market). An EU Association Agreement was cleared for signature and provisional application by the EU Council in July 2026, which brings dynamic alignment with EU law.

**Bottom line:** I found no viable standalone indie opportunity. There is one real regulatory trigger: domestic B2B e-invoicing through HUB-SM becomes mandatory from 1 Jan 2027, under Decreto Delegato 4 Sept 2026 n.133. But local and Italian vendors had already shipped products for it before the voluntary phase started, and the reachable buyer pool is a few thousand firms at most. Treat San Marino as an add-on to an Italian e-invoicing or accounting product, not as a market of its own.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All VAT-registered operators (cross-industry) | Domestic SM-to-SM e-invoicing via HUB-SM (mandatory from 2027 above €100k revenue) | Weak / add-on only | Real why-now, but Kreosoft EK Cloud, WindDoc, BP Overview and the Italian ERPs already cover it, and the buyer pool is tiny |
| Accountants / commercialisti (studi) | Managing clients' move to HUB-SM: who is over the €100k threshold, who opted in voluntarily, and late-transmission sanctions from 2028 | Weak | Few dozen to low hundreds of studi (estimate); they will use their existing gestionale's multi-client module |
| Cross-border traders (SM to Italy) | Italy–SM e-invoice exchange and monofase import-tax handling (SdI to HUB-SM) | Rejected | Mature since 2022; every Italian e-invoicing vendor handles the San Marino flow |
| Payroll / frontier workers | IGR income-tax reform (Law 141/25, effective 2026) recalculation for payroll bureaus | Rejected | Payroll software and consultants absorb this; it is a one-off rule change, not a recurring new workflow |
| Regulated firms in EU-alignment sectors (food, products, financial) | Compliance with the EU acquis under the Association Agreement | Too early / unclear | Alignment timelines and sector protocols are not yet operational, and each sector has only a handful of firms |

---

## Opportunities

None reach the bar for a standalone product. I document the strongest candidate below for completeness, with a low score.

### Opportunity: HUB-SM domestic e-invoicing connector/add-on for Italian-centric invoicing tools

**Industry:**
Cross-industry (all San Marino economic operators with revenue of €100k or more). Mainly reached through accounting firms.

**Buyer:**
Owners and administrators of small San Marino companies, and San Marino accounting studios (studi commerciali) that manage invoicing for clients.

**Trigger / Why now:**
Decreto Delegato 4 settembre 2026 n.133 extends e-invoicing to transactions between San Marino operators:
- Voluntary from 1 Oct 2026.
- Mandatory from 1 Jan 2027 for operators with revenue of €100k or more in the prior year. Below that threshold, operators can opt in, and once they cross the threshold or opt in, the obligation is permanent.
- Invoices go through the Ufficio Tributario's HUB-SM, which assigns a HASH code to each file.
- A €100 penalty per omitted or late invoice applies from 1 Jan 2028.

**Current workflow:**
1. The operator issues paper or PDF invoices to San Marino customers, often from a local gestionale or from Excel/Word.
2. For trade with Italy, they already use the SdI–HUB-SM channel through an Italian or local provider.
3. From 2027 they must also send domestic invoices as XML through HUB-SM. Small firms without a gestionale need a new tool or must route it through their accountant.

**Pain:**
The obligation is mandatory and per-invoice, so frequency is high. The penalties are mild (€100 per invoice, starting only in 2028), and the format is close to the Italian FatturaPA that many firms already use for Italian trade.

**Existing solutions:**
- Kreosoft "EK Cloud": already marketed as "Fatturazione Elettronica Sammarinese 2026".
- WindDoc: an Italian SaaS that has published guidance on the SM-to-SM obligation.
- BP Overview srl: a San Marino provider offering an e-invoicing service.
- Local accounting firms (for example Sfera Professionisti Associati and HLB San Marino) advising on and handling the transition.
- Italian ERP/accounting suites already used for SM–Italy flows. Specific support for the domestic flow is unverified.
- Possibly a free Ufficio Tributario/HUB-SM web interface. Unverified.

**The gap:**
The only plausible gap is a small one: an add-on for Italian-market invoicing apps that lack the San Marino domestic channel, plus a dashboard for accountants that tracks each client's threshold or opt-in status and transmission failures. Local vendors shipped before the voluntary start date, so there is no meaningful incumbent gap.

**Possible product:**
An API or connector that lets an existing Italian invoicing SaaS route SM-to-SM invoices through HUB-SM and reconcile the returned HASH and status. It would be sold B2B to software vendors or accountants rather than to end operators.

**MVP:**
XML generation in the HUB-SM spec, a transmission and status poller, and a multi-client exceptions queue for accountants.

**Pricing hypothesis:**
€10–25 per month per operator, or €100–300 per month per accounting studio. This is an estimate.

**How to find first customers:**
- The register of San Marino accounting professionals (Ordine dei Dottori Commercialisti e degli Esperti Contabili di San Marino; directory not verified).
- Attendees of Segreteria di Stato Finanze information sessions (slides dated 25 May 2026).
- Italian invoicing SaaS vendors as integration partners.

**Risks:**
- The market is tiny. The number of operators above €100k is unknown; at most a few thousand is an estimate.
- Local incumbents were first to market.
- A free government tool may exist.
- Access to the HUB-SM technical spec and accreditation requirements was not verified.

**Kill condition:**
HUB-SM offers a free web portal for manual and bulk upload, or the main Italian gestionali (TeamSystem, Zucchetti and others) ship SM domestic support by Q1 2027. Either is likely.

**Score:** 3/10

**Sources:**
- Segreteria di Stato Finanze, slides "Fatturazione elettronica interna a San Marino", 25 May 2026: https://finanze.sm/pub1/dam/jcr:2651de7b-4955-4d29-9bd5-cc2d471ade55/25-05-2026%20Slides%20Fatturazione%20elettronica%20interna%20a%20San%20Marino.pdf
- HLB San Marino, Decreto Delegato 4 settembre 2026 n.133: https://www.hlbsanmarino.com/decreto-delegato-4-settembre-2026-nr-133-disciplina-delle-fatture-nellinterscambio-di-beni-e-servizi-tra-operatori-economici-sammarinesi/
- Sfera Professionisti Associati, "dal 2027 obbligo anche tra operatori economici sammarinesi": https://www.sferastp.com/fatturazione-elettronica-a-san-marino-dal-2027-obbligo-anche-tra-operatori-economici-sammarinesi/
- Tribuna Politica Web, 16 Sept 2026: https://news.tribunapoliticaweb.sm/economia/2026/09/16/san-marino-fatturazione-elettronica-obbligatoria-dal-1-gennaio/
- Relazione al decreto delegato (Consiglio Grande e Generale): https://www.consigliograndeegenerale.sm/on-line/home/lavori-consiliari/dettagli-delle-convocazioni/documento17126755.html
- Kreosoft EK Cloud: https://www.kreosoft.com/ek-cloud/
- WindDoc guide: https://www.winddoc.com/fattura-elettronica-tra-operatori-sammarinesi-obblighi-sanzioni-e-differenze/
- BP Overview: https://www.overviewsm.com/fattura-elettronica-san-marino/
- EDICOM (B2B mandatory from 2027): https://edicomgroup.com/pt/blog/fatura-eletronica-san-marino

---

## Rejected after competitor research

- **Standalone SM-to-SM e-invoicing SaaS for operators.** Killed by Kreosoft EK Cloud, WindDoc and BP Overview, which were already selling before the 1 Oct 2026 voluntary start, and by the tiny market.
- **Italy–San Marino cross-border e-invoice / monofase handling.** Killed by every Italian SdI e-invoicing provider. The flow has been mature since 2022 (see https://www.informazionefiscale.it/fattura-elettronica-San-Marino-non-obbligatoria-societa-non-residente-Italia).
- **IGR reform payroll recalculation (Law 141/25).** Killed by existing payroll software and labour consultants. It is a one-off rule change. Source: https://www.consigliograndeegenerale.sm/on-line/home/documento17050247.html

## Attractive problem, poor distribution

- **EU Association Agreement compliance (dynamic alignment with the EU acquis).** Real future obligations, but sector protocols and timelines are not yet operational, and each sector has only a handful of firms. Better served by EU-wide tools. Sources: https://www.eunews.it/2026/07/16/andorra-e-san-marino-piu-vicine-il-consiglio-ue-firma-laccordo-di-associazione/ and https://www.specialeurasia.com/2026/02/04/san-marino-unione-europea/

## Too competitive

- E-invoicing in general: the Italian e-invoicing ecosystem is saturated, and San Marino is an edge case that it already serves.

## Notes / limitations

- Only 4 searches were run, as the microstate budget allows. Industry-specific verticals (funeral homes, pharmacies, food processors and others) were not screened individually: with about 34k residents, each would have single-digit or double-digit operator counts.
- The number of San Marino operators above the €100k threshold is unverified.
- The HUB-SM technical spec and API accessibility for third parties are unverified.
