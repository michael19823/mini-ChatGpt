# Belarus: Country Research Track

**Researcher:** country agent (Belarus) · **Date:** 2026-10-05 · **Searches used:** 6 of 18 (stopped early once the market proved inaccessible)

## Verdict: inaccessible market for a foreign solo founder. No opportunities recommended.

Following section 4 of the agent instructions (accessibility check), I checked first whether a foreign solo founder could legally and practically sell compliance and workflow software in Belarus. Four separate blockers apply, and any one of them would be enough to stop. Together they rule the market out, so I stopped the full industry screen after the accessibility check.

### 1. EU sanctions on software and IT services (Regulation 765/2006 as amended by 2024/1865)
- From 1 July 2024 the EU prohibits selling, supplying or providing **"software for the management of enterprises and software for industrial design and manufacture"** to Belarus. The ban sits alongside bans on **IT consultancy**, accounting, auditing, bookkeeping, tax-consulting, business-consulting, architectural/engineering and legal-advisory services.
- Practitioner summaries describe the targets as "the Republic of Belarus, its Government, its public bodies, corporations or agencies" or anyone acting on their behalf. Some summaries read it as a general ban on supplying Belarus. The exact personal scope should be checked against the consolidated text (**unverified**: I could not fetch EUR-Lex). Either way, the product shapes in our brief (ERP-adjacent compliance workflow, bookkeeping/tax-reporting automation, payroll filing) sit squarely inside the prohibited categories for anyone under EU jurisdiction.
- The carve-out for Belarusian subsidiaries of EU, EEA or partner-country companies expired on 2 January 2025.
- Sources: https://www.curtis.com/our-firm/news/eu-adopts-new-restrictive-measures-against-belarus ; https://sanctionsnews.bakermckenzie.com/eu-adopts-new-belarus-sanctions-package/ ; https://eur-lex.europa.eu/eli/reg/2024/1865/oj/eng ; https://belarus.revera.legal/en/info-centr/news-and-analytical-materials/1873-novye-sankcionnye-ogranicheniya-es-protiv-belarusi-chto-uchityvat/

### 2. US export controls and sanctions
- Since 16 September 2024, BIS requires a licence to export, re-export or transfer certain EAR99 software, **including enterprise-management and design/manufacturing software and updates**, to Russia **and Belarus**.
- OFAC banned IT consultancy, IT support and cloud services for enterprise-management and design/manufacturing software from 12 September 2024. Law-firm summaries group this measure under "Russia and Belarus" actions. Whether the OFAC services ban itself reaches Belarus, or only the BIS part does, is **unverified**.
- Sources: https://www.fenwick.com/insights/publications/u-s-imposes-sweeping-new-sanctions-and-export-controls-on-russia-and-belarus ; https://www.morganlewis.com/pubs/2024/06/us-further-tightens-grip-with-new-export-control-restrictions-sanctions-on-russia-and-belarus ; https://www.thompsonhinesmartrade.com/2024/06/new-sanctions-and-export-control-restrictions-on-russia-and-belarus/

### 3. Payment rails
- **Paddle** lists Belarus as an unsupported country and does not allow transactions from Belarus. **Lemon Squeezy** does not list Belarus for payouts. Stripe support was not confirmed in my searches; it is believed to be unavailable (**unverified**).
- Belarusian bank cards (Visa/Mastercard) are restricted for payments to foreign online services. Several Belarusian banks (BelVEB, Belgazprombank, Alfa-Bank Belarus, Sber Bank and VTB Belarus) are under EU sanctions or card-scheme restrictions.
- Sources: https://www.paddle.com/help/legal/sanctions/which-countries-are-supported-by-paddle ; https://paddle.com/help/legal/sanctions/impact-of-sanctions-on-russia-and-belarus ; https://docs.lemonsqueezy.com/help/getting-started/supported-countries ; https://myfin.by/stati/view/v-banke-belveb-rasskazali-o-rabote-kart-i-vvedennyh-ograniceniah ; https://myfin.by/article/banki/karty-sber-banka-visa-i-mastercard-bolse-ne-budut-rabotat-za-granicej-a-ekvajring-po-nim-budet-ogranicen

### 4. Domestic structure (would kill most ideas even without sanctions)
- The workflows that are rich in regulatory triggers run through state-designated operators and portals, and established local vendors integrate with them. These include the Ministry of Taxes and Duties' (MNS) electronic VAT invoices (ESChF), electronic waybills, the traceability regime and the EAEU goods-marking (identification-means) programme. A foreign vendor would need local EDI-operator status or integration accreditation, which is **unverified but highly likely** to be required.
- There are real 2025–2026 triggers. Under EAEU decisions, marking is expanding to antiseptics, bicycles, caviar and motor oils. Soft drinks and juices, including existing stocks, must be marked from **1 May 2026**. Codes are now being linked to e-waybills, and the list of traceable goods (Annex 1 to Resolution 250) has been revised. The pattern matches the brief, but these markets are captured by Belarusian 1C integrators and EDI operators, and a foreign founder is legally barred from them anyway.
- Sources: https://pravo.by/novosti/analitika/2025/october/90389/ ; https://ilex.by/news/mns-o-markirovke-proslezhivaemosti-i-elektronnyh-nakladnyh/ ; https://ilex.by/news/novaya-redaktsiya-perechnya-proslezhivaemyh-tovarov-iz-prilozheniya-1-k-postanovleniyu-250/ ; https://neg.by/novosti/otkrytj/jelektronnye-nakladnye-dlja-molochnoj-produkcii-reshenie-mns/

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Food and beverage producers / distributors | Goods marking (soft drinks and juices from 1 May 2026) plus marking codes in e-waybills | Rejected: inaccessible | Strong regulatory trigger, but this is enterprise-management/ERP-adjacent software banned under EU/US rules. Local EDI operators and 1C integrators own the market. |
| Dairy processors | Mandatory e-waybills for dairy products (MNS decision) | Rejected: inaccessible | Same as above. The workflow runs through state-designated EDI operators. |
| Wholesale/retail of traceable goods | Traceability documents under Resolution 250 (list revised) | Rejected: inaccessible | Sanctions, plus integration with the state system through local operators. |
| Accountants / payroll bureaus | ESChF VAT invoices, tax and social-fund (FSZN) filings | Rejected: inaccessible | Bookkeeping/tax software and services are explicitly in the EU services ban. The local 1C ecosystem dominates. |
| Importers / customs brokers | EAEU import marking (e.g., phones/laptops from Russia) | Rejected: inaccessible | Sanctions and payment rails. Customs software is tied to the EAEU/Russian ecosystem. |

## Opportunities

None. Belarus fails the accessibility gate (EU/US software and IT-services restrictions, plus no workable payment rails), so no opportunity is scored.

## Rejected after competitor research
- **Marking/traceability compliance router (2026 marking expansion):** the trigger matches the brief, but it is killed by the EU 765/2006 enterprise-software ban and the BIS licence requirement. Even setting legality aside, local 1C integrators and the accredited EDI operators that handle ESChF and e-waybills would dominate.

## Attractive problem, poor distribution
- Belarusian SMEs facing marking and e-waybill deadlines have a real, recurring, mandatory workflow. A foreign founder, however, cannot legally sell to them, collect payment, or obtain local operator accreditation.

## Too competitive
- Domestic accounting/ESChF tooling (1C-based local configurations and EDI operators). Specific vendor names were not verified in this session.

## Add-on note
- Belarus cannot be served as an add-on to a neighbouring EU market (Poland, Lithuania or Latvia) because the restrictions apply to any EU-based seller. Do not include Belarus in multi-country rollouts until sanctions change.
