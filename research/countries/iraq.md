# Iraq: Indie-Hacker Opportunity Research

Researched 2026-10-05. I ran 14 web searches, in English and Arabic. WebFetch was not used, so all facts come from search-result summaries. I could not verify some numbers, and they are marked as unverified or estimates.

## Accessibility check

- **Sanctions:** Iraq is not under a comprehensive US/EU/UK embargo the way Iran, Syria or North Korea are. OFAC's Iraq-related program targets named persons, such as former-regime figures and some militia-linked entities and banks. A foreign solo founder can legally sell SaaS there if they screen customers against the SDN list. One search summary claimed "Iraq is currently subject to OFAC sanctions", but that refers to the list-based program, not an embargo. This is my reading and not legal advice.
- **Payments: the main practical barrier.** Iraq is still largely a cash and bank-transfer economy. Card penetration is growing because of the government's move to e-payment of salaries (deadline July 2025) and local wallets and cards (Qi Card, FIB). Stripe does not onboard Iraqi merchants (my understanding, unverified), and collecting USD from Iraqi SMEs by card is unreliable. Realistically you need a local reseller, partner or bank-transfer invoicing. Every price below assumes annual prepayment through a local partner.
- **Political and policy volatility is high.** The 2026 customs regime changed several times in nine months: ASYCUDA went live in January, tariffs were raised, then cut by 25%, the electronic document-verification rule started on 10 July 2026, and advance duty payment started on 1 October 2026. There was also a Federal Supreme Court challenge. That volatility is both the "why now" and the main risk.
- **Verdict:** Accessible with friction. I recommend going in only with a local co-founder or channel partner, such as a customs-broker association member or an Erbil or Baghdad accounting firm.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Importers / traders | ASYCUDA advance customs declaration and duty prepayment linked to CBI bank transfers (from 1 Oct 2026) | **Shortlisted** | It is brand-new and mandatory, applies to every import, causes very heavy documented pain (port backlog of about 52k containers, protests), and nothing sits between the trader's paperwork and ASYCUDA except the broker. |
| Customs brokers / clearance offices | Shipment file and document checklist, FICC certificate-of-origin and invoice verification, client-deposit accounting | **Shortlisted** | Mandatory electronic verification since 10 Jul 2026 and declarations get suspended when it is missing. The only vertical accounting tool found (Qoyod) is Saudi-focused. |
| Freight forwarders / exporters selling into Iraq (UAE, Turkey, China) | Building Iraq-compliant document packs (CO, commercial invoice, FICC registration) | **Shortlisted (weaker)** | It is real, but the buyer sits outside Iraq. That makes payments easier, but the pain is mostly felt by the Iraqi importer. |
| Private employers / payroll | Social security registration and monthly contributions under Law 18/2023 (17% of wages) | Attractive problem, poor distribution | Mandatory, but enforcement is low, the ILO reports low digital readiness, I found no confirmed electronic portal or API, and informality is high. |
| Pharmacies / drug wholesalers | Gudea national track-and-trace (MoH): label scanning, price control | Rejected / poor distribution | It is a government-run platform with its own app. 16,993 pharmacies is a large base, but I found no evidence of a mandatory dispensing-report workflow or a third-party API. Pharmacy app use was 12.7%. |
| Tax / e-invoicing | GCT e-registration (TIN), e-invoicing | Rejected (premature) | Only Phase 1 online TIN registration exists (Aug 2026, new companies only). E-filing and payment are only planned and I found no e-invoicing mandate. Watch for 2027. |
| Salary localisation (توطين الرواتب) | Moving private-sector payroll onto bank and e-wallet rails | Too competitive / bank-led | Banks (TBI, FIB, Qi) provide the payroll file tooling for free as part of account acquisition. |

## Opportunities

### Opportunity: ASYCUDA advance-declaration and duty-prepayment workbench for Iraqi importers

**Industry:**
Import trade (consumer goods, building materials, food, spare parts) in Federal Iraq, and from mid-2026 the Kurdistan Region crossings being linked to ASYCUDA.

**Buyer:**
Owner or import manager of small and mid-size importing trading companies in Baghdad, Basra and Erbil. These firms hold an import licence and a TIN and buy USD through bank transfers for imports.

**Trigger / Why now:**
- ASYCUDA went fully live at federal border crossings in January 2026.
- Valuation (Cabinet Decision 270/2025) has been active since 1 June 2025.
- Pre-customs declaration is required before the vessel arrives.
- Electronic verification of the certificate of origin and commercial invoice has been mandatory since 10 Jul 2026.
- Since 1 Oct 2026 (Council of Ministers decision), the bank only releases an importer's foreign transfer after customs duties and estimated tax deposits are paid through ASYCUDA. An automated pre-payment mechanism was announced in Sept 2026.
- Importers who did not pre-declare through the banking system have their goods valued by ASYCUDA from historical data, which is inflated by the 2022–25 over-invoicing.

**Current workflow:**
1. The trader gets a proforma or commercial invoice from the supplier (China, Turkey, UAE, Iran) by WhatsApp or email.
2. The trader or broker classifies the goods by HS code and estimates duty and tax by hand against a tariff schedule that changed several times in 2026.
3. Invoice and certificate of origin details are registered with the Federation of Iraqi Chambers of Commerce for electronic verification.
4. The trader files the pre-declaration (for example code 05 at Ibrahim Khalil) and pays the duty and tax deposit electronically.
5. The trader opens the bank transfer and reconciles the bank's foreign-transfer request against the ASYCUDA payment so the bank will release funds.
6. When goods arrive, the final declaration is reconciled against the pre-declaration. Any differences in value, HS code or weight cause holds and demurrage.

**Pain:**
- Ports have been partially paralysed since January 2026, with about 52,000 containers waiting (Kapita).
- Trade volume has reportedly halved and traders protested.
- There was a Federal Supreme Court case over ASYCUDA complaints.
- Declarations are suspended when documents are not electronically verified.
- Mistakes tie up USD (the transfer is blocked until duty is paid) and cause demurrage.
- Tariff rates run 5–30% and are calculated by value, weight or quantity depending on the goods.

**Existing solutions:**
- ASYCUDA itself: the free government system, with no planning, costing or document-tracking layer for the trader.
- Licensed customs brokers doing everything by hand.
- Bank portals, which handle only the transfer leg.
- Generic accounting and ERP: Odoo partners, local Iraqi accounting packages (none with ASYCUDA features found).
- Qoyod: Saudi cloud accounting with a customs-clearance vertical, built around ZATCA and FASAH, with no evidence of Iraq support.
- Importer-of-record firms (IOR Service, One Union) for foreign oil and gas shippers only.

**The gap:**
No tool connects four things for each shipment:
- the supplier invoice
- the HS classification and duty/tax estimate under the current 2026 Iraqi tariff
- FICC verification status
- the bank transfer release

ASYCUDA is the system of record but does not plan, cost or flag gaps. Banks see only the money. Brokers keep it in their heads and in WhatsApp.

**Possible product:**
An Arabic-first web app with one record per shipment. You upload the supplier invoice and packing list. The app proposes HS lines, estimates duty and tax deposits with a versioned 2026 tariff table, and tracks a checklist (FICC registration, pre-declaration number, ASYCUDA payment receipt, bank release). It also flags value or weight differences before the final declaration. A side benefit is landed-cost per SKU, so traders can price despite tariff changes.

**MVP:**
- A versioned Iraqi tariff lookup and duty/tax calculator.
- Invoice parsing into line items.
- A shipment checklist with document vault and status for the four milestones.
- A one-page summary for the broker or bank.
- No ASYCUDA integration: the user types in reference numbers.

**Pricing hypothesis:**
$50–150/month per importer, or $10–25 per shipment, billed annually through a local partner. Brokers could pay $150–300/month for multi-client use.

**How to find first customers:**
- Members of the Federation of Iraqi Chambers of Commerce and the Baghdad, Basra and Erbil chambers.
- Trader associations that organised the 2026 protests.
- Customs broker offices around Umm Qasr and Ibrahim Khalil.
- The Trade Ministry's Private Sector Development Department meetings.
- Iraqi trader Facebook and Telegram groups.

**Risks:**
- Policy changes every few months, so the tariff tables need constant upkeep. That is also a moat.
- Payment collection.
- Many traders may route through Kurdistan or informal channels to avoid ASYCUDA.
- UNCTAD or the Customs Authority could add a trader portal with calculators.
- Classification liability.

**Kill condition:**
- Interviews show brokers absorb all of this and importers will not pay separately.
- Or ASYCUDA or the bank release becomes automatic and reliable (the announced Sept 2026 "automation mechanism") so the reconciliation pain disappears.
- Or the tariff schedule cannot be obtained in machine-readable form.

**Score:** 6/10. Very strong why-now and pain, but payments, informality and policy volatility hold it back.

**Sources:**
- https://mof.gov.iq/en/asycuda.aspx
- https://www.deloitte.com/middle-east/en/services/tax/perspectives/iraq-customs-activates-electronic-verification-of-import.html
- https://www.iraq-businessnews.com/2026/08/21/new-rules-for-pre-payment-of-iraqi-customs-duties/
- https://www.iraq-businessnews.com/2026/09/21/new-mechanism-to-automate-customs-duty-pre-payment-in-iraq/
- https://research.kapita.iq/publications/iraq-ports-crisis-2026-asycuda-customs-system
- https://www.iraq-businessnews.com/2026/03/11/report-iraqs-2026-customs-reset/
- https://shafaq.com/en/Economy/Iraq-s-new-customs-system-puts-import-fees-upfront
- https://channel8.com/english/news/52683
- https://channel8.com/english/news/52428
- https://www.alestiklal.net/en/article/liquidity-crisis-and-asycuda-how-customs-decisions-upended-the-lives-of-iraq-s-traders-and-markets
- https://peregraf.com/en/news/10903

---

### Opportunity: Shipment-file and client-deposit manager for Iraqi customs clearance offices

**Industry:**
Customs brokerage / clearing agents (مكاتب التخليص الكمركي).

**Buyer:**
Owner of a licensed clearance office handling 20–200 declarations a month for many small importers.

**Trigger / Why now:**
- The broker now has to collect, check and electronically verify every certificate of origin and commercial invoice through FICC (mandatory 10 Jul 2026).
- The broker has to file pre-declarations and manage advance duty payments for clients (1 Oct 2026). The cash and deposit flows per client have grown sharply.

**Current workflow:**
1. Collect client documents by WhatsApp.
2. Check FICC registration and verification status for each document.
3. Key the data into ASYCUDA.
4. Pay duty and fees (customs, port, inspection, platform) from client deposits or the broker's own float.
5. Re-bill the client.
6. Track storage and demurrage when declarations are suspended.

**Pain:**
- Declarations are suspended when documents are not verified.
- Fees are many and paid to different bodies.
- Client deposits get mixed with the broker's revenue. Qoyod's own material describes this as the core accounting pain for clearance offices.
- Broker volume and liability increased during the 2026 backlog.

**Existing solutions:**
- Excel and paper ledgers.
- Generic accounting (local Iraqi desktop packages, Odoo).
- Qoyod's customs-clearance accounting module (Saudi market; Iraq support unverified).
- Forwarder TMS tools such as CargoWise, which are enterprise-level and too expensive for local offices.

**The gap:**
A cheap Arabic tool for a shipment file plus a client trust ledger, built around Iraqi milestones (FICC verification, ASYCUDA pre-declaration, duty deposit, release) and Iraqi fee types.

**Possible product:**
A clearance-office back office with:
- one file per declaration,
- a document checklist with verification status,
- a client deposit wallet (kept separate from the broker's revenue),
- automatic re-bill statements sent to clients by WhatsApp or PDF.

**MVP:**
Shipment file, document checklist, client deposit ledger and statement PDF. Arabic UI, mobile-friendly.

**Pricing hypothesis:**
$40–100/month per office (estimate).

**How to find first customers:**
- Broker offices clustered at Umm Qasr, Basra, Safwan, Ibrahim Khalil and Baghdad customs centres.
- Broker licences issued by the General Customs Authority. No public directory was found, and the number of brokers is unverified.
- Introductions through the importer product above.

**Risks:**
- The broker count is unknown.
- Low willingness to pay.
- It sits close to "generic accounting".
- Qoyod or a regional ERP could localise for Iraq.

**Kill condition:**
- Fewer than about 1,000 active clearance offices, or brokers say WhatsApp plus Excel is "good enough".
- Or a local ERP vendor already ships an ASYCUDA-milestone module.

**Score:** 5/10

**Sources:**
- https://www.deloitte.com/middle-east/en/services/tax/perspectives/iraq-customs-activates-electronic-verification-of-import.html
- https://www.iraqinews.com/iraq/iraq-customs-mandates-asycuda-electronic-invoice-verification-by-july-10/
- https://iqdnews.substack.com/p/iraq-activates-electronic-verification
- https://www.qoyod.com/en/blog/qoyod-sectors/customs-clearance-accounting-software/
- https://www.iraq-businessnews.com/2026/08/21/new-rules-for-pre-payment-of-iraqi-customs-duties/

---

### Opportunity: Iraq-compliance document pack for foreign exporters and forwarders shipping to Iraq

**Industry:**
Freight forwarding / export trading in UAE (Jebel Ali), Turkey (Mersin, Habur → Ibrahim Khalil), Iran and China.

**Buyer:**
Export documentation clerks at forwarders and suppliers with regular Iraqi customers.

**Trigger / Why now:**
Since 10 Jul 2026 no paper certificate of origin or commercial invoice is accepted unless it can be verified digitally. Iraqi customs now values goods from declared invoice data (versus the inflated historical database), so invoice consistency matters. The unification of Kurdistan crossings with ASYCUDA is in progress.

**Current workflow:**
1. The foreign supplier issues the invoice and certificate of origin.
2. The Iraqi importer or broker discovers missing or inconsistent fields after the fact.
3. Documents are reissued and re-registered.
4. Goods sit in port.

**Pain:**
Declaration suspensions and demurrage. The cost falls mostly on the Iraqi importer, so the exporter's pain is indirect.

**Existing solutions:**
- Forwarder in-house knowledge.
- Generic export-document software in Turkey, UAE and China.
- Import guides such as FedEx's and IOR firms.

**The gap:**
An Iraq-specific pre-shipment validator: field rules, HS consistency and the FICC registration requirements.

**Possible product:**
A validator plus template generator for exporters shipping to Iraq. It produces a document pack that passes verification and a data sheet the Iraqi broker can import.

**MVP:**
Rules checklist and invoice template generator, in Arabic, English and Turkish.

**Pricing hypothesis:**
$5–15 per shipment, or $50–100/month per forwarder. Payment is easier because buyers are in the UAE or Turkey.

**How to find first customers:**
- Forwarders advertising "Iraq service" in Mersin, Gaziantep and Dubai.
- Turkish exporter associations (Iraq is a top Turkish export market).

**Risks:**
- I have not verified that FICC registration can be done or influenced by the foreign party.
- It may be too thin a product.

**Kill condition:**
- The FICC registration step can only be done by the Iraqi importer, leaving nothing for the exporter to buy.
- Or forwarders say rejections are rare.

**Score:** 4/10

**Sources:**
- https://www.deloitte.com/middle-east/en/services/tax/perspectives/iraq-customs-activates-electronic-verification-of-import.html
- https://research.kapita.iq/publications/iraq-ports-crisis-2026-asycuda-customs-system
- https://shafaq.com/en/Economy/Baghdad-and-Erbil-to-unify-digital-customs
- https://www.fedex.com/content/dam/fedex/international/guides/FedEx_Import_Guide_IQ.pdf

## Rejected after competitor research

- **Pharmacy / wholesaler track-and-trace compliance (Gudea).** Gudea is an MoH-run end-to-end platform covering labels, price control, lab testing, inspection and a public verification app. It has more than 1.8 billion labels issued and 3,263 inspection visits. I found no third-party integration point or recurring pharmacy filing to automate. The government tool is the substitute. The market is large (16,993 pharmacies, 455 wholesalers, 611 scientific bureaus), so it is worth revisiting if MoH publishes an API or dispensing-report mandate. Sources: http://ajms.iq/index.php/ALRAFIDAIN/article/view/3094 , https://link.springer.com/article/10.1186/s40780-026-00628-5
- **Private-sector payroll file / salary localisation.** Banks and wallets (TBI, FIB, Qi Card) give payroll-upload tooling away for free to win accounts. Sources: https://shafaq.com/en/Economy/Iraq-sets-July-2025-deadline-to-end-cash-payments-digitize-payroll , https://intellinews.com/trade-bank-of-iraq-signs-kurdistan-salary-localisation-agreement-351489
- **Tax e-filing / e-invoicing.** Rejected for now because the mandate does not exist yet. GCT launched only online TIN registration for new companies in Aug 2026, and e-filing is planned for later phases. It could become a 2027 trigger. Source: https://www.deloitte.com/middle-east/en/services/tax/perspectives/the-general-commission-for-taxes-federal-iraq-announced-the-launch-of-their-online-tax-registration-platform.html

## Attractive problem, poor distribution

- **Social security registration and contributions under Law 18/2023.** The law has been in force since 1 Dec 2023 and covers all private-sector workers, including informal and self-employed. Contributions are 17% of wages (12% employer, 5% employee), with fines for non-registration. The ILO found low awareness, administrative complexity and low digital readiness. I found no confirmed electronic employer portal or API. Most employers are informal and enforcement is weak, so the first 50 paying customers would be hard to reach. Watch for an e-portal launch. Sources: https://www.ilo.org/publications/reform-reality-understanding-perceptions-iraq%E2%80%99s-new-social-security-law , https://hhl-iq.com/workers-retirement-and-social-security-law-no-18-of-2023/ , https://turtl.tamimi.com/story/law-update-issue-366-transport-and-insurance/page/29

## Too competitive

- **Generic accounting and payroll for Iraqi SMEs.** Odoo partners, local desktop accounting packages and regional cloud players already cover it. It is only defensible when tied to a specific mandate, such as the ASYCUDA milestones above.

## Notes and caveats

- I could not verify the number of licensed customs brokers or active importers. This is the first fact to establish in interviews, for example through FICC and the General Customs Authority.
- The ASYCUDA tariff and valuation rules have changed several times in 2026, including a 25% tariff cut after the backlog. Any product must treat the rule tables as versioned data.
