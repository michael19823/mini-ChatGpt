# Syria: indie software opportunity research

Research date: 2026-10-05. Budget used: 9 WebSearch calls. WebFetch was not used. Searches were run in English and Arabic.

## Accessibility check (read first)

**Verdict: you can now sell here legally, but it is hard in practice. Treat Syria as a "watch and interview" market, not a "build now" market.**

- **US sanctions.** EO 14312 (30 June 2025) ended the comprehensive Syria sanctions programme. The Caesar Act was repealed in December 2025. OFAC and BIS have issued final rules that remove the Syrian Sanctions Regulations and relax export controls, including a broader License Exception TSU for software. On 24 August 2026 OFAC published the removal of Syria's State Sponsor of Terrorism designation. Some controls still apply:
  - List-based designations remain (Assad-linked persons, Captagon traffickers, Iran-aligned actors), and the 50% ownership rule still applies.
  - EAR controls on some software and cloud items have been relaxed but not removed.
  - A seller still has to screen customers against the lists.
- **Cloud providers.** Goodwin (Oct 2025) reported that AWS had not yet publicly restored service to Syria. Check whether hosting and dev-tool vendors have restored service before building.
- **Payment rails.** These are the main practical blocker.
  - Syria rejoined SWIFT. The first international transfer was made in June 2025, and the central bank sent its first message to the New York Fed in November 2025. Correspondent banking is still being rebuilt.
  - The first national e-payment framework (Decision 1124 of 2026) was only adopted in 2026, and the first e-payment trial ran in May 2026.
  - I found no evidence that Stripe or PayPal accept Syrian merchants or buyers (unverified). Expect to collect in cash or USD via agents or diaspora channels at first.
- **Regulatory flux.** Many rules are still drafts or very new: the tax laws, the customs authority, the customs tariff and the currency. That creates "why now" triggers, but specs change often and are published in Arabic only, usually via Telegram, Facebook and SANA rather than stable portals.
- **Ability to pay.** Purchasing power is very low. The proposed tax exemption threshold is about US$12k net income per year. Anything priced like Western SaaS ($200–500/month) only works for import, export, customs and larger trading firms.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Customs brokers / clearance offices | New licensing (Decision 42), electronic-only applications, new harmonised tariff (Decree 110/2026), declaration preparation | **Shortlist (weak)** | Real regulatory churn and fees of $5k–10k a year show the buyers have money, but the customs IT stack is unclear |
| SME accounting / tax | New income tax and sales tax laws (targeted for 2026), planned e-filing, e-invoicing and QR receipts | **Shortlist (speculative)** | Strong trigger on paper. I could not confirm the laws were enacted or that technical e-invoice specs exist. 15+ local accounting packages already serve this |
| Accounting / ERP | Currency redenomination (100 old SYP = 1 new SYP, from 1 Jan 2026) | Reject | One-time conversion. Local accounting vendors and ERPNext partners are already handling it |
| Payments / fintech | New e-payment system (Decision 1124/2026) | Reject | Needs a licence under the new framework and bank partnerships. Not a solo-founder play |
| Used-car importers | Electronic registration form at the new Ports Authority | Reject | The government provides the form for free. The volume per importer is small |
| Exporters (agri / olive oil) to the EU | Traceability and EU documentation | Not pursued | Export volumes are still recovering. I found no evidence of a Syria-specific trigger within my search budget |
| Reconstruction contractors / suppliers to UN and INGOs | Supplier vetting and due-diligence packs | Poor distribution (unverified) | Plausible pain, but buyers are fragmented and the vetting format is owned by each donor or agency |

## Opportunities

### Opportunity: Customs-broker tariff and licensing assistant (Arabic)

**Industry:**
Customs brokers, clearance offices and transit companies

**Buyer:**
Owner or manager of a licensed customs clearance office (مكتب تخليص جمركي) or transit company in Damascus, Latakia/Tartus ports, or at land crossings (Nasib, Bab al-Hawa).

**Trigger / Why now:**
- A new General Authority for Land and Sea Ports took over customs, border posts and free zones.
- Its Decision 42 sets strict new licensing conditions and annual fees ($5k for clearance firms, $10k for transit firms), and paper applications are now rejected outright.
- A new harmonised customs tariff schedule was issued under Decree 110 of 2026.
- Trade volumes are rising after sanctions relief and the SWIFT reconnection.

**Current workflow:**
1. The broker receives commercial invoices, packing lists and certificates of origin from the importer by WhatsApp, PDF or paper.
2. The broker manually looks up HS codes and duty rates in the new tariff PDF (Decree 110), which replaced the old schedule.
3. The broker works out duties and fees by hand or in Excel, then prepares the declaration and supporting documents.
4. The broker keeps up with frequent circulars from the Ports Authority on fees, procedures and allowed goods.
5. The broker submits through the authority's electronic forms or systems. Whether ASYCUDA is used in Syria today is unverified.

**Pain:**
- The tariff is new and replaces long-standing codes.
- Brokers publicly complain about fee pressure ("مخلصون جمركيون تحت ضغط الرسوم", Enab Baladi).
- Licensing now requires electronic applications and strict documentation.
- Misclassification means duty disputes and delays at the port.
- How much time brokers spend on this has not been quantified (unverified).

**Existing solutions:**
- The government's own e-forms and declaration system (details unverified).
- Excel and the tariff PDF.
- Local accounting packages such as Al-Ameen, which do not do customs classification.
- Generic regional customs software (for example Digicust integrates with ASYCUDA but does not target Syria).
- Manual expertise in the office.

**The gap:**
- A searchable Arabic tariff lookup with duty and fee calculators that follows Decree 110 and later circulars.
- A document checklist for each shipment type.
- No Syria-specific tool doing this showed up in my searches. That may be because of limited search coverage, not a real absence.

**Possible product:**
An Arabic web and mobile tool with three parts:
- Search for an HS code by description and see the duty, fees and required permits.
- Get a landed-cost and duty estimate for the importer client.
- Generate a checklist of documents to collect for each shipment.

It would be updated whenever the Ports Authority publishes a circular.

**MVP:**
- A structured database of the Decree 110 tariff with Arabic full-text search and a duty calculator.
- A Telegram channel that pushes circular updates.
- No integration with government systems.

**Pricing hypothesis:**
$15–30 per month per office (estimate), paid in USD cash or through an agent. Importers could later pay per quote.

**How to find first customers:**
- The Ports Authority's published list of licensed clearance offices, if it publishes one (unverified).
- Broker clusters at Damascus customs, Tartus and Latakia ports and the Nasib crossing.
- Customs-broker Facebook and Telegram groups.
- Chambers of commerce in Damascus and Aleppo.

**Risks:**
- The Ports Authority may launch its own portal with tariff lookup, or ASYCUDA-style broker modules may already cover this.
- The tariff may keep changing.
- Collecting payment.
- Political and security instability.
- Low willingness to pay for "information" products, and existing free Telegram channels that share circulars.

**Kill condition:**
- The authority or a free site already offers a searchable Decree 110 tariff with calculators, or
- interviews show brokers classify from memory and would not pay $15/month.

**Score:** 4/10

**Sources:**
- https://www.enabbaladi.net/731869/ (new Ports Authority)
- https://www.syria.tv/بمعايير-صارمة-هيئة-المنافذ-تنظم-قطاع-التخليص-الجمركي-في-سوريا (Decision 42, fees, electronic-only applications)
- https://www.enabbaladi.net/746308/ (brokers under fee pressure)
- https://syrianmemory.org/archive/documents/6a0d6919dc45fbbca4a7af65 (Decree 110/2026 harmonised tariff schedule)
- https://shaam.org/3ELftJ (Ports Authority e-form for imported used cars)

---

### Opportunity: Sales-tax and e-invoice compliance add-on for Syrian SME accounting software

**Industry:**
Accountants and accounting offices serving traders, retailers and small manufacturers

**Buyer:**
Independent accounting offices (مكاتب محاسبة) that keep books for many SMEs, and the software houses that sell local desktop accounting packages.

**Trigger / Why now:**
- The Ministry of Finance's tax reform committee has drafted a new income tax law and sales tax law, targeted to apply from early 2026.
- The reform includes e-filing, electronic invoicing, QR-coded receipts and the abolition of the "presumptive income" committees.
- I could not verify whether either law has been enacted or whether a technical e-invoice spec exists. Tracking that is part of the kill condition.

**Current workflow:**
1. Bookkeeping is done in local desktop packages (Al-Ameen and others) or in Excel.
2. Tax is assessed through negotiation or presumptive committees, not by formal filing.
3. Under the new regime, accountants would need to map invoices to the sales tax, file electronically and possibly issue QR receipts.

**Pain:**
Pain is expected, not yet proven. The move from negotiated assessment to formal, digitised filing would hit thousands of traders at once.

**Existing solutions:**
- 15+ local accounting programs. The Albanknote 2026 list includes Al-Ameen and others.
- ERPNext implementers such as ClefinCode, which already publishes Syria redenomination guidance.
- Regional e-invoicing vendors (Qoyod, Zoho, and others built for ZATCA) that could localise quickly.
- Any free portal the Ministry of Finance launches.

**The gap:**
- A bridge from existing local accounting data to whatever e-invoice or e-filing format the ministry adopts, plus a sales-tax reconciliation report.
- This only exists once the spec exists.

**Possible product:**
A connector or exporter that reads invoices from popular Syrian accounting packages or Excel. It would validate them against the new sales tax rules, produce the e-filing format, and track filing status for each client of an accounting office.

**MVP:**
An Excel-to-filing converter with rule checks for one tax return type, sold to accounting offices.

**Pricing hypothesis:**
$10–25 per month per accounting office, or about $2–5 per client company per month (estimate).

**How to find first customers:**
- The Syrian Association of Certified Accountants and the syndicate of financial and accounting professions (directories unverified).
- Chambers of commerce.
- Accountant Facebook groups.
- Resellers of local accounting software.

**Risks:**
- The law may be delayed or changed.
- The ministry may build its own portal, which would favour local incumbents.
- Al-Ameen-type vendors could add the feature themselves.
- Willingness to pay is very low.

**Kill condition:**
- Neither law is enacted with an e-invoice mandate by mid-2027, or
- the main local accounting vendors ship native e-filing.

**Score:** 3/10

**Sources:**
- https://www.enabbaladi.net/769219/ (new tax system to apply from early 2026)
- https://karamshaar.com/syria-in-figures/syria-tax-reform-2025/ (e-filing, e-invoicing, QR receipts in the reform)
- https://www.enabbaladi.net/777012/ (figures in the draft income and sales tax laws)
- https://syrianbusinessgateway.com/ما-الذي-تغيّر-في-المسار-الضريبي-السوري-حتى-2026؟/
- https://invest.albanknote.com/accounting-software-syria (15+ accounting programs in Syria)

## Rejected after competitor research

- **Redenomination conversion tool (old SYP to new SYP):**
  - The change took effect 1 Jan 2026 with a 90-day co-circulation period, so the work is one-time.
  - Local accounting vendors such as Al-Ameen already support multiple currencies, and ERPNext integrators such as ClefinCode publish migration frameworks.
  - Sources: https://www.intellinews.com/syria-rolls-out-new-currency-in-redenomination-push-418039/ and https://clefincode.com/blog/global-digital-vibes/en/accounting-and-erp-strategies-for-currency-redenomination-syria-2026-syp-transition
- **E-payment or billing gateway for SMEs:**
  - Decision 1124/2026 requires providers to be licensed and to partner with banks, which a foreign solo founder cannot realistically do.
  - Source: https://sana.sy/economy/syrian-economy/2557936/
- **Used-car import registration helper:** the Ports Authority already provides a free electronic form (https://shaam.org/3ELftJ).

## Attractive problem, poor distribution

- **Supplier vetting and due-diligence packs for Syrian contractors bidding to UN agencies, INGOs and reconstruction donors:**
  - Each agency sets its own vetting format.
  - The buyers are fragmented, and the donors, not the suppliers, own the process.
  - Not verified by search.

## Too competitive

- **General SME accounting / ERP:** there are 15+ local packages (Al-Ameen and others), plus ERPNext partners and regional Arabic SaaS (Qoyod, Zoho).

## Bottom line

Syria became legally accessible in 2025–2026: the comprehensive US programme was terminated, the Caesar Act repealed and the SST designation removed in August 2026. There are real 2026 triggers: a new customs authority and tariff, the tax reform and the currency change. However:

- payment rails are nascent;
- the rules are unstable and published only in Arabic;
- willingness to pay is very low.

No opportunity scored above 4/10. The customs-broker tariff tool is worth a few remote interviews (Arabic needed). Otherwise, re-check in 2027 once the tax laws and e-invoicing spec are final.

## Sources (accessibility)

- https://ofac.treasury.gov/recent-actions/20260824
- https://www.goodwinlaw.com/en/insights/publications/2025/10/alerts-otherindustries-syria-sanctions-subside
- https://sanctionsnews.bakermckenzie.com/ofac-and-bis-issue-final-rules-removing-syria-sanctions-regulations-and-relaxing-export-controls-for-syria/
- https://www.crowell.com/en/insights/client-alerts/us-lifts-most-sanctions-on-syria-in-major-policy-development
- https://www.arabnews.com/node/2605031/business-economy
- https://gfmag.com/economics-policy-regulation/with-lifting-of-us-sanctions-syria-banks-reconnect/
- https://www.aljazeera.net/ebusiness/2026/5/9/سوريا-تطلق-أول-تجربة-للدفع-الإلكتروني-ضمن-مسار-الاقتصاد-الرقمي
- https://sana.sy/economy/syrian-economy/2556396/
