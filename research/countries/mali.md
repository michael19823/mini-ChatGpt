# Mali — Indie-Hacker Opportunity Research

**Date:** 2026-10-04 · **Research depth:** shallow. Only 4 web searches ran before the session's search quota was refused. Following the agent instructions, research stopped there and this is a write-up of what was found. Anything not backed by a source below is marked **unverified**.

## Accessibility check (do this first)

- **Sanctions:** Mali is under several **targeted** sanctions programs (EU, OFAC, UK OFSI, Switzerland SECO, Japan). The EU renewed its Mali regime on 1 Dec 2025, to 14 Dec 2026 ([sanctions.offix.pro](https://sanctions.offix.pro/countries/ml), [OFAC Mali-related program summary](https://sanctions.offix.pro/programs/ofac/mali-related-sanctions)). These programs list individuals and entities. No sector-wide ban on selling software or IT services was found. Selling SaaS to private Malian SMEs therefore looks legally possible, but every customer and payment counterparty must be screened against the lists.
- **Security and operations:** JNIM has blockaded fuel to cities in southern Mali since 3 Sep 2025, and more than 300 fuel tankers have been destroyed ([Wikipedia: Mali fuel blockade](https://en.wikipedia.org/wiki/Mali_fuel_blockade)). Power, connectivity and the business climate are badly degraded. Credit-insurer country risk is at the top of the scale (see [Credendo](https://credendo.com/es/node/719)).
- **Political and regional:** Mali is ruled by a military government and has left ECOWAS as part of the AES (from background knowledge; **unverified here**). Regional trade and customs rules are in flux.
- **Payments (unverified):** the currency is the XOF/CFA franc (BCEAO). Local collection would likely run through mobile money (Orange Money, Moov) or a regional aggregator. Card payments for a foreign Stripe-style merchant are probably impractical.

**Verdict:** The market is **legally reachable but practically hostile** for a foreign solo founder. Customers are few, purchasing power is low, physical risk is high and collecting payments is hard. It is not a standalone target in 2026. At most, Mali could be an add-on to a francophone UEMOA product built first for Côte d'Ivoire or Senegal.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Accountants / SMEs (tax) | Monthly DGI tax filing through e-Impôt / SIGTAS | Too competitive / government tool | DGI e-filing now covers all taxpayers and all taxes; on-time filing was 99% for large and 95% for medium firms in 2024 ([PSDGI 2022–24](https://www.dgi.gouv.ml/wp-content/uploads/2023/04/PSDGI-2022-2024-VF-au-27-02-2023.pdf), [Mali24](https://mali24.info/hamadou-fall-dianka-dg-des-impots-le-montant-des-recettes-electroniques-a-atteint-300-milliards-de-fcfa-en-2024/)). The government portal plus accounting firms already do this. |
| Accountants / SMEs (invoicing) | Standardised e-invoice (like Côte d'Ivoire's FNE) | Not found | No Malian e-invoicing mandate for 2025–26 turned up. Côte d'Ivoire and Morocco have mandates; Mali has none that could be confirmed. |
| Mining subcontractors | Local-content and subcontractor reporting under the 2023 Mining Code | Unresearched (search refused) | Plausible trigger, but buyers are concentrated and the sector is politicised (mine seizures and disputes with foreign operators, per background knowledge, **unverified**). |
| Payroll bureaus / employers | Monthly social-security (INPS) and AMO health-insurance filings | Unresearched | No evidence collected. |
| Import/export / customs brokers | ASYCUDA customs declarations and AES corridor documents | Unresearched | Corridors are disrupted by the blockade; demand for this would also be regional. |

## Strongest opportunities

No opportunity in Mali clears the brief's bar. The ideas below are **hypotheses for a future UEMOA-wide study** and are scored low on purpose.

### Opportunity: Mining-subcontractor local-content compliance pack (hypothesis)

**Industry:**  
Mining subcontractors (gold)

**Buyer:**  
Owner or administrative manager of a Malian firm supplying services to industrial gold mines

**Trigger / Why now:**  
The 2023 Mining Code and the accompanying local-content law (**unverified details**) require mines to report local procurement and give preference to Malian suppliers. That pushes evidence and documentation requests down to subcontractors.

**Current workflow:**  
1. The mine's procurement team asks for supplier documents: registration (RCCM), tax and social-security clearance certificates, and Malian-ownership evidence (**unverified**).  
2. The subcontractor collects PDFs from several agencies and emails them.  
3. The documents are renewed periodically and re-sent to each mine.

**Pain:**  
Not evidenced. The search to confirm it was refused.

**Existing solutions:**  
Consultants and the mines' own supplier portals (e.g. enterprise vendor-management platforms, **unverified**).

**The gap:**  
Unknown.

**Possible product:**  
A vault that tracks expiry dates of supplier compliance documents and assembles the package each mine requires.

**MVP:**  
A document checklist with expiry reminders and per-mine packet export.

**Pricing hypothesis:**  
Estimate of XOF 15,000–30,000 (~USD 25–50) per month.

**How to find first customers:**  
Mine supplier lists and the Chamber of Mines of Mali (**unverified**).

**Risks:**  
Very small buyer pool (a dozen or so industrial mines), the political risk of mine seizures, and a product that is close to "generic document collection".

**Kill condition:**  
The mines run their own supplier portals, or there are fewer than 300 reachable subcontractors.

**Score:** 2/10

**Sources:**  
Only the general country-risk sources above. The key facts are unverified.

### Opportunity: UEMOA payroll filing add-on (INPS/AMO + ITS) for small accounting firms (hypothesis)

**Industry:**  
Payroll bureaus and accountants

**Buyer:**  
Small accounting firms (cabinets comptables) that run payroll for SME clients

**Trigger / Why now:**  
The DGI is extending its e-services; the African Development Bank has issued an expression-of-interest call for technical assistance to digitise DGI teleservices ([AfDB AMI](https://www.afdb.org/fr/documents/ami-mali-assistance-technique-la-digitalisation-de-la-dgi-extension-des-teleservices-de-la-direction-generale-des-impots-pasg)). Social-security filing is presumably still done in a separate system (**unverified**).

**Current workflow (assumed):**  
1. Run payroll in Excel or in Sage.  
2. Re-key the totals into DGI e-Impôt for ITS (the tax on salaries).  
3. Prepare a separate INPS/AMO return.

**Pain:**  
Not evidenced.

**Existing solutions:**  
Sage Paie (SYSCOHADA versions), local payroll software, and manual work by accounting firms (**unverified**).

**The gap:**  
Unknown. It may already be covered by local editions of payroll software.

**Possible product:**  
Turn one payroll run into the DGI and INPS/AMO filing files.

**MVP:**  
An Excel import that produces ready-to-upload or ready-to-key return summaries.

**Pricing hypothesis:**  
USD 20–40 per month per accounting firm (estimate).

**How to find first customers:**  
The directory of the Ordre des Experts-Comptables du Mali (**unverified**).

**Risks:**  
Low willingness to pay, entrenched local software, and the operating environment.

**Kill condition:**  
INPS offers its own e-filing that DGI integrates, or Sage's local edition already produces both outputs.

**Score:** 2/10

**Sources:**  
[AfDB AMI](https://www.afdb.org/fr/documents/ami-mali-assistance-technique-la-digitalisation-de-la-dgi-extension-des-teleservices-de-la-direction-generale-des-impots-pasg), [PSDGI](https://www.dgi.gouv.ml/wp-content/uploads/2023/04/PSDGI-2022-2024-VF-au-27-02-2023.pdf)

## Rejected after competitor research

- **SME tax-filing helper:** killed by the free DGI **e-Impôt / SIGTAS** portal, which already covers all taxes and has near-complete on-time filing among large and medium firms, plus local accounting firms.
- **E-invoicing compliance (FNE-style):** no Malian mandate was found. The real opportunity sits in Côte d'Ivoire, where the FNE exists ([Digitalmag](https://digitalmag.ci/cote-divoire-tout-savoir-sur-la-facture-normalisee-electronique-fne/?amp=1)).

## Attractive problem, poor distribution

- Mining-subcontractor compliance: there are few buyers, and the sector is politicised and hard to reach remotely.

## Too competitive

- Tax filing (beaten by the government's own portal).

## Inaccessible / fragile market note

Mali is **not formally closed**: the sanctions are targeted, not sectoral. It is, however, **practically inaccessible** for a foreign solo founder in 2026 because of the JNIM fuel blockade, insecurity, the military government, AES/ECOWAS realignment and payment-rail friction. The recommendation is not to pursue Mali standalone, and to consider it only as a later add-on to a UEMOA/OHADA product proven in Côte d'Ivoire or Senegal.
