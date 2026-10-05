# Serbia: Opportunity Research

Researched 2026-10-05. Mid-size market (about 6.6M people). I used 18 web searches, in Serbian and English. WebFetch was not used, so all facts come from search-result snippets. Anything I could not confirm is marked "unverified" or "estimate".

**Accessibility:** Serbia is not under US, EU or UK sanctions on software. It is an EU candidate. Card payments and invoicing to Serbian companies work normally. One practical hurdle: most local buyers expect invoices to arrive through SEF (Serbia's e-invoicing platform) and expect the product in Serbian. A foreign solo founder would probably need a local entity or reseller to issue SEF invoices to Serbian companies (estimate).

**Overall picture:** Serbia is going through a burst of state-driven digitisation:
- SEF e-invoicing, with amendments taking effect for tax periods after 31 Mar 2026
- e-Otpremnice (electronic delivery notes), phase 1 from 1 Jan 2026 and phase 2 from 1 Oct 2027
- eBolovanje (electronic sick leave): mandatory for companies from 1 Jan 2026, with refund requests to RFZO (the national health insurance fund) from 1 Apr 2026, and mandatory for entrepreneurs with employees from 1 Jan 2027
- a new Law on Waste Management (Official Gazette 109/2025), applying from 12 Dec 2025, with some provisions from 1 Jan 2027

The why-now triggers are strong. The catch is that the local software ecosystem reacts very quickly: dozens of SEF/ERP vendors launched e-otpremnica modules before the go-live. Prices are low (some compliance tools cost about EUR 8–10 per month). Opportunities exist, but they are moderate rather than outstanding.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Wholesale / distribution / HoReCa buyers | e-Otpremnica sending, receipt confirmation, match with e-faktura | **Candidate (moderate)** | Phase 2 (all B2B, 1 Oct 2027) is a huge forced change, but many vendors are already in the market |
| Accounting agencies / payroll bureaus | Multi-client deadline queue across SEF, eBolovanje and e-Otpremnice | **Candidate (moderate)** | About 5,500 licensed firms (2023 figure), each facing several new portals with short deadlines; tools exist per portal, not across them |
| Employers / payroll | eBolovanje sick-leave refund requests to RFZO and tracking | **Candidate (weak, folded into the agency idea)** | Payroll software already imports eBolovanje XML; the remaining gap is tracking refund claims |
| Steel / metal processing exporters | CBAM embedded-emissions data for EU importers | **Weak candidate** | The definitive CBAM regime started in 2026, but few covered direct producers; SME downstream exposure is unverified |
| Waste generators / operators | DKO (waste-movement document), daily records, annual NRIZ reports to SEPA | **Rejected: too competitive / low WTP** | UPSEKO from 1,000 RSD/month, eDepo, POTOS |
| SEF e-invoicing (generic) | Sending and receiving e-invoices, VAT evidencing | **Rejected: too competitive** | Every ERP plus banks (OTP eFakture) and many SEF access providers |
| Construction | Electronic site diary / quantities book | **Rejected: unverified mandate** | Searches only found Montenegro (2025) and Croatia (2023) mandates, not Serbia |
| Food / veterinary exporters | Export veterinary certificates | **Rejected: insufficient evidence** | Certificates are issued by official veterinarians; I found no 2026 digital trigger |

---

## Opportunity: e-Otpremnica three-way match and exception queue for B2B buyers and small distributors

**Industry:**
Wholesale distribution, food and beverage distribution, building materials, HoReCa and small retail chains. These are the buyers that receive many delivery notes.

**Buyer:**
Owner, warehouse manager or finance lead at small and mid-size distributors and multi-site buyers that receive many deliveries per day. Also accounting staff who must match deliveries to invoices.

**Trigger / Why now:**
- The Law on Electronic Delivery Notes was adopted in Nov 2024, and its Rulebook in Mar 2025, amended in early 2026.
- Phase 1 has applied since 1 Jan 2026 to the public sector, excise-goods traders, and private suppliers to the public sector.
- Phase 2 starts 1 Oct 2027. From then, all private companies must send and receive e-otpremnice between themselves, and carriers must present them during inspections.
- The recipient must confirm physical receipt within 3 working days.
- Business associations publicly called the law a "new bureaucratic burden".

**Current workflow:**
1. The sender's ERP (or a SEF-access vendor) issues the e-otpremnica, which the system verifies before transport starts.
2. The driver carries it, using the state MATP app or any device.
3. At the buyer, staff count the goods and compare them to the paper or electronic note. Shortages, damages and substitutions get noted.
4. Within 3 working days, someone logs in (state MAP app, SEF portal or a vendor tool) and confirms receipt, creating an e-prijemnica (electronic receipt note).
5. Later, the e-faktura arrives in SEF and must be accepted or rejected within 15 days. Accounting matches it against the delivery and receipt by hand, especially when quantities differ.

**Pain:**
- Hard deadlines: 3 working days for receipt confirmation and 15 days for invoice accept/reject. The SEF reminder gives 5 more days, then the invoice is automatically rejected.
- The volume of documents roughly doubles for every B2B delivery.
- Experts quoted by N1 said the rules bring "no benefits and significant harm", and there is uncertainty for small businesses.
- As of the first search I ran, more than 44,000 e-otpremnice had been exchanged since 1 Jan 2026 in phase 1 alone.

**Existing solutions:**
- Free state tools: the CIP system (Central Information Intermediary) with its MAP app for businesses, MATP app for carriers and MAK app for inspectors.
- Dedicated vendors: ePrijemnica.rs, which has an App Store app focused on receipt.
- SEF-access and ERP vendors with e-otpremnica modules: SEF LINK, e-racuni.rs, YuTeam, eKompanija, Smartbit, Arhivix.
- Large ERPs: Pantheon, Minimax, BizniSoft. These appear in SEF-related results, but their e-otpremnica modules are unverified.

**The gap:**
- Existing tools focus on issuing notes and confirming receipt one document at a time.
- The likely remaining gap is the exception layer: a quantity or price mismatch between the e-otpremnica, the physically received goods and the later e-faktura. That covers partial deliveries, returns, credit notes, and one invoice spanning several delivery notes.
- Also missing is deadline control across many suppliers and sites.
- This is unverified. Some ERPs or ePrijemnica may already do the matching, so it needs checking in interviews.

**Possible product:**
A buyer-side inbox connected to the e-Otpremnica and SEF APIs. It automatically matches delivery note, receipt and invoice, flags mismatches with a phone-photo discrepancy record, and confirms receipt or rejects the invoice before the deadline.

**MVP:**
- API pull of incoming e-otpremnice and SEF purchase invoices for one company.
- A matching table with mismatch flags.
- One-click receipt confirmation.
- Deadline alerts by email or Viber.

**Pricing hypothesis:**
EUR 15–40 per month per company, tiered by delivery-note volume, or about EUR 0.05–0.10 per matched document (estimate). Local price anchors are low.

**How to find first customers:**
- APR business register, filtered by wholesale activity codes (NACE 46.xx).
- Phase-1 obligors first: excise-goods traders (fuel, tobacco, alcohol distributors) and suppliers to the public sector, found via the public procurement portal (Portal javnih nabavki).
- Partnerships with accounting agencies.

**Risks:**
- Crowded vendor field that formed quickly.
- ERPs may add matching for free.
- Phase 2 could be postponed. SEF B2B reforms have been postponed before.
- Serbian-language UX and local support are needed.

**Kill condition:**
If ePrijemnica.rs or the big ERPs already offer automatic e-otpremnica, e-prijemnica and e-faktura matching with exception handling, or if phase 2 is postponed beyond 2028.

**Score:** 5/10

**Sources:**
- https://biznis.rs/vesti/srbija/ko-ce-imati-obavezu-koriscenja-e-otpremnica/
- https://biznis.rs/vesti/srbija/nova-pravila-za-elektronske-otpremnice-preciznije-pracenje-voznje-i-prijema-robe/
- https://biznis.rs/vesti/srbija/privrednici-smatraju-da-su-elektronske-otpremnice-novi-birokratski-teret/
- https://biznis.rs/vesti/mali-pozvao-kompanije-da-pristupe-sistemima-e-otpremnica-i-e-bolovanje/
- https://n1info.rs/biznis/privrednici-zakon-elektronska-otpremnica/
- https://n1info.rs/biznis/ministarstvo-sistem-e-otpremnica-stupio-na-snagu-obavezna-primena-od-1-januara/
- https://kpmg.com/rs/sr/analize-i-istrazivanja/poreske-vesti/2026/02/izmene-i-dopune-pravilnika-o-elektronskim-otpremnicama.html
- https://abc.comarch.com/trade-and-services/data-management/legal-regulation-changes/serbia-rolls-out-mandatory-digital-delivery-note-platform-in-2026
- https://www.eprijemnica.rs/
- https://apps.apple.com/us/app/eprijemnica/id6758045395
- https://seflink.rs/eotpremnice/
- https://help.e-racuni.com/Serbian/WikiPage?page=eOtpremnica2026&lang=Serbian&action=printPages
- https://yuteam.co.rs/najava-za-e-otpremnice
- https://ekompanija.com/blog/e-otpremnice
- https://smartbit.rs/blog/elektronska-otpremnica-na-sef-u/
- https://arhivix.com/sr/blog/e-otpremnice-prevoznici-vodic
- https://invoicedataextraction.com/blog/preuzimanje-primljenih-e-faktura-sef-knjigovodstvo (15-day + 5-day SEF rule)

---

## Opportunity: Multi-client "portal deadline cockpit" for accounting agencies (SEF + eBolovanje + e-Otpremnice)

**Industry:**
Accounting and payroll bureaus.

**Buyer:**
Owner or lead accountant of a licensed accounting agency serving roughly 20–200 small clients.

**Trigger / Why now:**
In 2026, several new mandatory portals land on top of SEF:
- **eBolovanje–Poslodavac:** mandatory for companies from 1 Jan 2026. Electronic sick-leave certificates and refund requests to RFZO started 1 Apr 2026. Entrepreneurs with employees join on 1 Jan 2027. Fines reach up to RSD 50,000.
- **e-Otpremnice:** receipt confirmations are due within 3 working days.
- **SEF:** amendments apply to tax periods after 31 Mar 2026, and the VAT Rulebook changed (Official Gazette 30/2026, from the April 2026 VAT period).

Agencies are often the de facto operators of these portals for their clients.

**Current workflow:**
1. For each client, log in separately to eUprava/eBolovanje, SEF (per-company login or API key) and the e-otpremnica portal.
2. Check for new sick-leave certificates, incoming invoices awaiting accept/reject, and pending receipt confirmations.
3. Download the eBolovanje XML and import it into payroll software. File refund requests to RFZO for sick leave over 30 days, then track RFZO calculations and payments.
4. Track all deadlines in Excel or by memory, and chase clients by phone or Viber for decisions.

**Pain:**
- Every portal has its own short deadline: 15+5 days in SEF, 3 working days for e-prijemnica, and penalties under eBolovanje.
- An agency guide explicitly warns that "for an agency with several clients the 15-day reminder must not be the first moment the invoice is seen".
- Accountants already struggled with licensing and registration rules: about 5,476 entities in the APR register of accounting services as of Aug 2023.

**Existing solutions:**
- Payroll and ERP software with an eBolovanje XML import: M&I Systems, plus likely Pantheon and BizniSoft (unverified).
- Minimax, which has a SEF integration and an agency-oriented offering.
- Bank SEF apps, such as OTP Bank eFakture in Biznis eBank/mBank.
- Invoice data-extraction tools for downloading SEF invoices.
- Nimi, a tax-calendar app.
- Manual Excel.

**The gap:**
- Each tool covers one portal for one company.
- I found no product that aggregates pending actions and deadlines across all clients and all portals into one queue with client-approval links. I searched for one and found none, but absence is not proof.
- eBolovanje refund-claim tracking (claim filed → RFZO calculation → payment received → reconciled against payroll) looks especially manual.

**Possible product:**
A read-mostly cockpit that connects per client via SEF API keys, plus e-otpremnica API and eBolovanje access where technically possible. It shows a single "due this week" queue, sends a Viber/email approval request to the client for each invoice, and tracks RFZO refund claims until payment.

**MVP:**
- SEF-only first: multi-client API-key vault, pending purchase invoices with countdown, client approval link, accept/reject push back to SEF.
- Then add e-otpremnica receipts.
- Then add an eBolovanje refund tracker, manual or via XML upload, if no API exists.

**Pricing hypothesis:**
EUR 2–4 per client company per month. That is EUR 50–300 per month for a typical agency (estimate).

**How to find first customers:**
- The public APR Register of accounting services providers.
- Local accounting associations and webinars, such as the Institut za ekonomsku diplomatiju's eBolovanje courses.
- Paragraf and biznis.rs readership.

**Risks:**
- eBolovanje may lack an API for third parties, and per-company eUprava authentication with qualified certificates may block automation.
- Minimax or other agency-focused ERPs could add a cross-client dashboard cheaply.
- Agencies are price-sensitive.

**Kill condition:**
If eBolovanje and e-Otpremnica allow no delegated or API access for agencies (forcing manual logins), or if Minimax or Pantheon already ship a multi-client deadline queue.

**Score:** 5/10

**Sources:**
- https://biznis.rs/lifestyle/zdravlje/koje-obaveze-firmama-donosi-e-bolovanje/
- https://biznis.rs/vesti/srbija/od-1-aprila-obavezni-elektronski-zahtevi-za-obracun-i-refundaciju-bolovanja/
- https://bizlife.rs/od-2027-primena-sistema-ebolovanje-poslodavac-i-za-preduzetnike-koji-zaposljavaju-druga-lica/
- https://forbes.n1info.rs/biznis/propisi/zdravstveni-podaci-u-digitalnoj-eri-sta-nam-donosi-sistem-ebolovanje-i-koje-su-novine-od-1-aprila/
- https://www.ite.gov.rs/vest/sr/12043/onlajn-info-dan-o-novim-funkcionalnostima-sistema-ebolovanje-poslodavac.php
- https://misystemsgroup.com/ebolovanje-poslodavac/
- https://www.economicdiplomacy.co.rs/course/ebolovanje-refundacija-obracun/
- https://biznis.rs/vesti/srbija/vodjenje-poslovnih-knjiga-poveravati-samo-firmama-sa-dozvolom/ (5,476 registered accounting providers, 2023)
- https://www.efaktura.gov.rs/extfile/sr/1470/Rad sa SEF-om preko API servisa_prezentacija.pdf (SEF API)
- https://invoicedataextraction.com/blog/preuzimanje-primljenih-e-faktura-sef-knjigovodstvo
- https://otpbanka.rs/wp-content/uploads/2025/01/uputstvo-efakture-biznis-ebank.pdf
- https://sharedserviceslink.com/news/serbia-tightens-e-invoicing-rules-ahead-of-31st-march-2026-rollout
- https://vatcalc.com/serbia/serbia-vat-updates

---

## Opportunity: CBAM supplier emissions data pack for Serbian metal-product exporters

**Industry:**
Iron, steel and aluminium products manufacturing and metalworking subcontractors exporting to the EU.

**Buyer:**
Quality or export manager at small and mid-size Serbian producers of CBAM-covered goods, such as steel articles and aluminium products, whose EU importer must declare embedded emissions.

**Trigger / Why now:**
- The definitive CBAM regime started in 2026, and the last transitional report was due 31 Jan 2026.
- The Fiscal Council estimates CBAM costs Serbian iron and steel exporters EUR 4.7M in 2026, rising to EUR 13.6M by 2030. For cement it adds EUR 18M in 2026.
- Serbia plans a domestic carbon tax from 2027: EUR 4 per tonne of CO2e, rising to EUR 40 per tonne by 2030 (draft energy and climate plan, NECP).

**Current workflow:**
1. The EU importer sends an emissions-data template.
2. The Serbian producer collects energy bills, input-material certificates and production volumes in Excel.
3. A consultant computes installation-level and product-level embedded emissions.
4. The result is emailed back, often per customer and in each customer's format.

**Pain:**
Data requests are mandatory in effect, because without real data importers pay on default values. The problem itself is real, but I could not quantify how many Serbian SMEs are affected (unverified).

**Existing solutions:**
- Global CBAM software and EU importer supplier portals (not individually verified in this session).
- Consultants and Big-4 firms; Schoenherr and others publish Serbia-specific guidance.

**The gap:**
A Serbian-language, low-cost tool for small installations to produce one reusable emissions dataset in the EU communication template for many EU customers. The gap is unverified.

**Possible product:**
A guided calculator plus document vault that outputs the EU supplier communication template per product (CN code) and per period.

**MVP:**
An Excel-to-template generator for one CN family (for example, steel fasteners and structures) with Serbian grid-electricity factors.

**Pricing hypothesis:**
EUR 100–300 per month, or EUR 500–1,500 per year per installation (estimate).

**How to find first customers:**
- The Serbian Chamber of Commerce (PKS) metal-industry association.
- Exporter lists in the RZS (statistical office) foreign-trade data.
- Development Agency of Serbia (RAS) export programmes.

**Risks:**
- Small and uncertain buyer count.
- The EU 2025 simplification exempted small importers (50 t threshold, from my training knowledge, not verified in this session), which reduces downstream demand.
- Global tools are competitors.

**Kill condition:**
Fewer than about 200 Serbian SMEs export CBAM goods, or EU importers mostly accept default values.

**Score:** 3/10

**Sources:**
- https://balkangreenenergynews.com/cbam-ante-portas-the-ball-is-in-serbias-court-to-facilitate-conditions-for-its-companies/
- https://ceelm.com/serbia/30334-serbia-s-cbam-readiness-and-carbon-pricing-framework
- https://www.mondaq.com/environmental-law/1450406/cbam-regulation-and-its-effect-on-balkan-companies-in-iron-and-steel-cement-fertilisers-aluminium-hydrogen-and-electricity-sectors
- https://vreme.com/en/ekonomija/porez-eu-na-prozvode-dobijene-prljavom-energijom-eps-u-preti-najtezi-udar/

---

## Rejected after competitor research

- **Waste-movement documents (DKO), daily waste records and annual NRIZ reports.** This is a mandatory recurring workflow: pre-notification 48 hours before movement, DKO completion within 15 days, and annual reports, with the new law partly applying from 1 Jan 2027. It is killed by UPSEKO Aplikacija (from RSD 1,000, about EUR 8.5, per month), eDepo (Extreme doo) and POTOS (PanMax Solutions, for special waste streams), plus the SEPA/NRIZ portal itself. Prices are already too low for an indie product, unless the 2027 provisions add a much heavier workflow (worth re-checking in 2027).
  Sources: https://www.upseko.org/ , https://extreme.rs/edepo/ , https://www.panmaxsol.com/proizvodi/program-za-posebne-tokove-otpada-potos/ , https://www.posebnitokoviotpada.rs/novi-nriz-portal/ , https://www.paragraf.rs/propisi_download/zakon_o_upravljanju_otpadom.pdf
- **eBolovanje-to-payroll import.** Killed by payroll vendors (for example M&I Systems) that already import eBolovanje XML directly into salary calculation. Only refund tracking survives, inside the agency cockpit above.
- **Generic SEF e-invoice send/receive for SMEs and agencies.** Killed by Minimax, bank SEF apps (OTP eFakture), the gart.rs eInvoicing web app, invoice-extraction tools and every local ERP.
- **e-Otpremnica issuing for carriers.** Killed by the free state MATP carrier app plus SEF LINK, Arhivix and others.

## Attractive problem, poor distribution

- **CBAM data for SME exporters.** The pain is real, but the buyer count is unknown and possibly small, and buyers are hard to identify without customs data.

## Too competitive

- e-Otpremnica issuing and confirmation (at least 7 vendors plus free state apps). Only the reconciliation/exception angle might survive.
- SEF e-invoicing access.
- Waste record-keeping (UPSEKO, eDepo, POTOS).

## Not verified / dropped for lack of evidence

- Electronic construction site diary: searches returned only Montenegro and Croatia mandates.
- Veterinary export e-certification: no 2026 Serbian trigger found.
