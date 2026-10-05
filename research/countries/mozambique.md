# Mozambique: Country Research Track

Research date: 2026-10-04. Budget: 10 web searches (small/medium market). WebFetch not used. Searches were in Portuguese and English.

**Accessibility check:** Mozambique is not under US, EU or UK sanctions on software or IT services. Since 1 January 2026 (Pacote Fiscal 2026), SaaS and cloud services bought by Mozambican businesses are explicitly taxable for VAT in Mozambique. When the provider is non-resident, the **Mozambican buyer self-assesses the VAT (reverse charge)**, so a foreign solo founder does not need a local VAT registration to sell B2B (source: RSM/KPMG 2026 tax guides). Practical frictions: FX controls on paying foreign suppliers (unverified for small SaaS amounts), a market that is small and concentrated in Maputo, insurgency in Cabo Delgado (where the LNG projects are), and a Portuguese-language requirement. Verdict: **accessible but small.**

**Overall verdict:** The Mozambique opportunities found are mostly **small-market add-ons**. The best fit is a Portuguese-language (PALOP) product that is also sold in Angola and Portugal-linked markets. None of the candidates is a standalone build without interviews first.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Accountants / all VAT taxpayers | Monthly invoice communication to AT (SAF-T Moz extract → e-Declaração), from May 2025; e-invoicing mandatory for large taxpayers from 2026 and all companies from 2027; simplified VAT regimes reportedly abolished from 2026 | **Candidate (Opp. 1)** | Mandatory monthly duty, new, and hits many small firms. The invoicing side is saturated, but the accountant-side validation/reconciliation layer is thin |
| Oil and gas supply chain (LNG, Cabo Delgado) | Local content certification, national-supplier registration, wage-bill and ownership evidence under Law 9/2026 | **Candidate (Opp. 2)** | Brand-new binding law (3 June 2026). Regulation still pending, so the timing is early and risky |
| All businesses buying foreign SaaS/cloud | New reverse-charge VAT on digital services, declared by the 10th of the following month (from 2026) | **Weak candidate (Opp. 3)** | Real new monthly obligation, but low value per firm. Best as a feature of Opp. 1 |
| Payroll bureaus / employers | IRPS withholding and INSS (SISSMO) contribution returns | Too competitive | Primavera, PHC, an Odoo `l10n_mz_payroll` module and local bureaus already cover it. INSS is still upgrading SISSMO, so there is no stable integration target |
| Invoicing software for SMEs | Certified invoicing plus SAF-T export | Too competitive | Primavera, PHC, Cegid Vendus, Moloni-type PT vendors and Odoo all market "comunicação de faturas" Mozambique guides and features |
| Customs brokers / importers | Declarations on the Janela Única Electrónica (JUE), run by the SGS MCNet PPP | Rejected | Single government-backed platform (MCNet) plus broker in-house systems. Brokers are not mandatory (Decree 90/2023), so the buyer base is small |
| Fisheries exporters | EU CATCH digital catch certificate, mandatory for EU importers from 10 Jan 2026 | Poor distribution | The obligation falls on the EU importer, and only a handful of Mozambican EU-approved shrimp/fish exporters exist (number unverified) |
| Retail pharmacies | Re-licensing under Resolution 18/2025 (adapt within 1 year); new national medicine Track & Trace system | Poor distribution / too early | The government owns the track-and-trace system. Pharmacies are few and price-sensitive, and there is no clear integration API |

---

## Opportunity: SAF-T Moz Validator & VAT Reconciliation for Accounting Firms

**Industry:**
Accounting / tax compliance (cross-industry)

**Buyer:**
Small and mid-size accounting firms (contabilistas certificados, OCAM members) handling monthly filings for many SME clients, plus in-house finance managers at mid-size companies that use more than one invoicing system.

**Trigger / Why now:**
- AT's General Directorate of Taxes requires all taxpayers to communicate the previous month's invoices every month, starting May 2025 (April data). The file is extracted from AT-certified invoicing software and uploaded to e-Declaração as XML/CSV (also XLSX per vendor guides).
- E-invoicing becomes mandatory for large taxpayers from 1 Jan 2026 and for all companies from 2027 (as reported by RSM's Pacote Fiscal 2026 summary).
- The 2026 Tax Package reportedly eliminated the VAT simplified and exemption regimes, which pushes previously exempt micro firms into full VAT and monthly invoice communication (KPMG/RSM). Exact scope and transition rules are **unverified** and need checking.
- AT says it expects that in future only certified software will produce valid SAF-T files, which means more rejections from non-compliant tools.

**Current workflow:**
1. The accountant collects monthly SAF-T/CSV/Excel extracts from each client's invoicing tool (Primavera, PHC, Vendus, Odoo, Excel, or manual invoice books).
2. They check by hand that numbering sequences, NUITs, VAT rates and totals are right. Manual or paper invoices are typed into a spreadsheet.
3. They upload to e-Declaração per client and handle rejections or format errors.
4. They prepare the monthly VAT return separately and reconcile the totals with the invoice file by eye.
5. Clients that buy foreign SaaS now also need reverse-charge VAT computed (Opp. 3).

**Pain:**
- Multiple law/consulting firms published alerts on the procedure: EY, PwC, Tree Consulting, PLMJ. So did invoicing vendors: Primavera, PHC, Cegid Vendus ("Are manual invoices valid in 2026?"). That shows confusion.
- OCAM (the accountants' order) published an FAQ on e-invoicing, which signals member demand for guidance.
- The duty is monthly and per client, and discrepancies between the communicated invoices and the VAT return are an obvious audit trigger.
- **No direct complaint evidence was found**; hours lost are an estimate.

**Existing solutions:**
- Certified invoicing/ERP vendors: Primavera BSS, PHC, Cegid Vendus, Odoo localisations. Each exports its own client's file, but none validates files across vendors for an accountant.
- AT's own e-Declaração portal: upload only, with basic validation (detail unverified).
- Portuguese SAF-T PT validators and analysers exist (Portugal's ecosystem). Their adaptation to the SAF-T (Moz) schema is unverified.
- Accounting firms doing the checks manually in Excel.

**The gap:**
Nothing found does **multi-client, multi-vendor pre-submission validation of SAF-T (Moz) files plus automatic reconciliation against the monthly VAT return**, with an exception queue per client. Vendors serve the issuer, not the accountant who sits across 30–200 clients on different tools.

**Possible product:**
A web app where an accountant drops each client's monthly SAF-T/CSV/XLSX. It validates the file against the AT structure, flags numbering gaps, invalid NUITs, rate errors and duplicates, converts Excel/manual invoice lists into the accepted format, and reconciles totals to the draft VAT return. Later it adds reverse-charge digital-services VAT.

**MVP:**
An SAF-T (Moz) XML/CSV schema-and-rules validator, a converter from an Excel template to the accepted CSV, and a monthly client dashboard (submitted / errors / reconciled). No portal automation in v1.

**Pricing hypothesis:**
Per accounting firm: ~MZN 3,000–10,000/month (~USD 50–160) tiered by client count, or ~USD 2–4 per client-file per month. Estimate.

**How to find first customers:**
OCAM (Ordem dos Contabilistas e Auditores de Moçambique) member listings and events. Partnering with Primavera/PHC resellers in Maputo and Beira. LinkedIn search for "contabilista certificado Moçambique". The tax-alert audiences of local consulting firms.

**Risks:**
- The SAF-T (Moz) schema may not be fully public, or may change.
- AT may move to real-time e-invoicing (2027), which would make monthly batch validation obsolete; the pivot would be to a reconciliation and exceptions tool.
- Large vendors could add accountant consoles.
- Mozambique has a limited number of formal accounting firms (count unverified) and a low ability to pay.
- A Portuguese product is needed; a later Angola extension is possible, since Angola has its own e-invoicing.

**Kill condition:**
- Interviews show that e-Declaração already rejects bad files with clear errors and that accountants spend under 1 hour/month per client.
- Or the 2027 real-time e-invoicing spec removes the monthly file entirely, with no reconciliation pain left.

**Score:** 5.5/10

**Sources:**
- https://www.ey.com/pt_mz/technical/tax-alerts/procedimento-de-comunicacao-das-facturas-emitidas-a-autoridade-tributaria-de-mocambique
- https://www.pwc.pt/pt/pwcinforfisco/flash/mocambique/novo-procedimento-at-mocambicana-facturas-emitidas.html
- https://treeconsulting.co.mz/index.php/2025/11/10/tax-alert-procedimentos-de-comunicacao-de-facturas-a-autoridade-tributaria/
- https://mz.primaverabss.com/pt/blog/comunicacao-faturas-autoridade-tributaria-mocambique/
- https://phcsoftware.com/mz/artigo/saf-t-mocambique-novas-regras-impacto-empresas/
- https://www.vendus.co.mz/blog/comunicar-faturas-autoridade-tributaria-mocambique/
- https://www.vendus.co.mz/blog/faturas-manuais-2026/
- https://ocam.org.mz/2025/06/27/perguntas-frequentes-sobre-a-facturacao-electronica/
- https://www.rsm.global/mozambique/pt-pt/news/pacote-fiscal-2026-principais-alteracoes-fiscais-em-mocambique
- https://kpmg.com/kpmg-us/content/dam/kpmg/taxnewsflash/pdf/2026/01/tnf-mozambique1-jan-7-2026.pdf
- https://www.plmj.com/xms/files/07_Guias_e_Manuais/2026/Colab_-_Reforma_Fiscal_em_Mocambique.pdf

---

## Opportunity: Local Content Certification & Evidence Kit for LNG Suppliers (Law 9/2026)

**Industry:**
Oil and gas supply chain: catering, logistics, civil works, security, manpower and maintenance subcontractors

**Buyer:**
Owner or compliance manager of Mozambican SMEs (Maputo, Pemba, Palma, Nacala) that supply or want to supply operators and EPC contractors on the Rovuma Basin LNG projects. A secondary buyer is foreign contractors' local-content managers who must document national-supplier use.

**Trigger / Why now:**
- Law No. 9/2026 of 3 June is Mozambique's first binding local content law for oil and gas.
- It creates a Local Content Authority, which keeps a supplier register and publishes procurement plans and certified national suppliers on a public portal.
- Goods and services must be certified by accredited bodies for their local-content percentage.
- Exclusivity applies when goods/services meet three tests: at least 80% domestic production factors, at least 20% Mozambican-held capital, and at least 50% of the wage bill paid to Mozambicans.
- National suppliers get a price preference of up to 20%.
- Implementing regulations were due within 90 days (expected around September 2026). Their status as of October 2026 is **unverified**.

**Current workflow:**
1. The supplier assembles ownership documents (certidão de registo, shareholder IDs), payroll by nationality, INSS/AT clearances and the local share of inputs. Today this happens by hand in Excel and PDF, per buyer pre-qualification.
2. They submit to each operator/EPC vendor portal and, once it exists, to the Authority register.
3. They repeat this for certification by an accredited body and re-certify periodically (frequency to be set by the regulation).
4. Buyers ask for ongoing evidence: wage-bill share by nationality, Mozambican hires, training.

**Pain:**
- The law makes certification a precondition for preference and exclusivity, so there is direct revenue at stake.
- Commentators (O Económico) say the regulation must stop "intermediaries without productive capacity" from capturing quotas, so evidence scrutiny will be high.
- The wage-bill share and ownership tests need ongoing recalculation from payroll.
- No complaint data yet, because the regime is new.

**Existing solutions:**
- Consultants and law firms (JLA Advogados, ENSafrica/Lex Africa network) for one-off certification.
- Operator supplier-registration portals and supplier-qualification databases. Which ones are used in Mozambique is unverified; Achilles-type schemes are common in the sector.
- CTA and business-development programmes.
- Payroll software (Primavera/PHC) has the payroll data but no local-content calculations.

**The gap:**
No tool was found that takes an SME's payroll export and cap table, **continuously computes the Law 9/2026 tests** (wage-bill share by nationality, ownership, domestic-input share), and produces a reusable evidence pack for the Authority register, certifiers and each buyer's pre-qualification.

**Possible product:**
A "local content passport" for Mozambican suppliers. It imports payroll and procurement records monthly, computes the statutory percentages, stores certificates and their expiry dates, and generates buyer-specific pre-qualification packs and Authority submissions.

**MVP:**
An Excel/CSV payroll import, a calculator for the three exclusivity tests, a document vault with expiry alerts, and PDF evidence-pack export. Build this only after the regulation is published.

**Pricing hypothesis:**
USD 50–150/month per supplier, or USD 300–600 per certification cycle. Alternatively sell to an EPC contractor to roll out across its national suppliers (USD 1–3k/month). Estimate.

**How to find first customers:**
The Local Content Authority's public list of certified national suppliers (once published). Supplier-development programmes around Mozambique LNG and Coral/Rovuma. CTA and the Pemba business associations. Law firms advising on certification as a referral channel.

**Risks:**
- The regulation is not yet published, so the metrics, frequency and portal are unknown.
- The Authority may issue its own portal or forms.
- Buyers are concentrated (a few operators and EPCs) and their projects depend on the Cabo Delgado security situation.
- Accredited certifiers may bundle software.
- The SME base may be only a few hundred firms (unverified).

**Kill condition:**
- The regulation makes certification a one-off or annual paper process run entirely by accredited bodies.
- Or the Authority's portal computes the percentages itself.
- Or fewer than ~200 active national suppliers exist.

**Score:** 5/10

**Sources:**
- https://lexafrica.com/2026/07/local-content-law-in-mozambique/
- https://www.jlaadvogados.com/post/aprova%C3%A7%C3%A3o-da-lei-de-conte%C3%BAdo-local
- https://www.jlaadvogados.com/post/approval-of-the-local-content-law?lang=en
- https://www.oeconomico.com/lei-de-conteudo-local-entra-na-fase-decisiva-o-regulamento-vai-separar-a-industrializacao-da-intermediacao/
- https://clubofmozambique.com/news/mozambique-parliament-enables-local-content-law/

---

## Opportunity: Reverse-Charge Digital Services VAT Tracker

**Industry:**
Cross-industry (any VAT-registered business buying foreign SaaS, cloud, ads or streaming); sold through accountants

**Buyer:**
Finance managers at mid-size Mozambican companies, NGOs' local entities and accounting firms.

**Trigger / Why now:**
From 1 Jan 2026, software, SaaS, cloud, digital platforms and digital intermediation acquired by a Mozambican-established buyer are taxable in Mozambique. When the provider is non-resident, the **buyer** must assess, declare and pay 16% VAT by reverse charge. RSM's 2026 guide reports a deadline of the 10th of the following month.

**Current workflow:**
1. Finance staff pull card statements and bank transfers for foreign vendors (Google, Microsoft, Meta, AWS, Zoom and others).
2. They identify which payments are digital services and convert to MZN at the legal rate.
3. They compute 16% and file by the 10th, then reconcile with the main VAT return.

**Pain:**
The duty is new and monthly. Card-paid subscriptions are easy to miss, and penalties apply for omission. Hours per month are low for most SMEs (estimate).

**Existing solutions:**
Manual work by accountants; ERP VAT modules (Primavera/PHC) with manual entry; Big-4 tax services for large firms.

**The gap:**
Automatic classification of bank and card statement lines into foreign digital services, with the MZN conversion and a reverse-charge schedule ready for the return.

**Possible product:**
A statement upload that runs a vendor-classification rules engine and produces a monthly reverse-charge VAT schedule.

**MVP:**
CSV bank/card import, a curated foreign-digital-vendor list, a rate table and a schedule export.

**Pricing hypothesis:**
USD 10–30/month per company, or bundled into Opp. 1.

**How to find first customers:**
Same as Opp. 1 (OCAM accountants), plus the AmCham/BCM and EU chamber member lists in Maputo.

**Risks:**
Low value per customer; banks may report this to AT directly; and it is easily added by ERP vendors.

**Kill condition:**
AT requires card issuers or banks to withhold the VAT at source, or the average company has fewer than 5 foreign digital vendors.

**Score:** 3.5/10 (viable only as a feature of Opp. 1)

**Sources:**
- https://www.rsm.global/mozambique/sites/default/files/media/documents/Mo%C3%A7ambique%20Guia%20Fiscal%202026.PT%20_0.pdf
- https://kpmg.com/kpmg-us/content/dam/kpmg/taxnewsflash/pdf/2026/01/tnf-mozambique1-jan-7-2026.pdf
- https://www.pwc.pt/pt/pwcinforfisco/flash/mocambique/mocambique-iva-alteracao-civa.html
- https://checka.co.mz/tributacao-transaccoes-digitais-legislacao-fiscal-mocambique/

---

## Rejected after competitor research

- **Customs declaration helper for importers/brokers.** Killed by **SGS MCNet's Janela Única Electrónica**, a state-backed PPP single window that centralises import/export/transit, plus broker in-house systems. Decree 90/2023 does not make brokers mandatory, so the buyer base is small. Sources: https://btw.media/en/sgs-mcnet-boosts-digital-customs-in-mozambique, https://tfadatabase.org/en/members/mozambique/article-10-6-2
- **Payroll / INSS / IRPS filing tool.** Killed by **Primavera, PHC, the Odoo `l10n_mz_payroll` module** and payroll bureaus. INSS is also mid-upgrade of SISSMO, so the integration target is unstable. Sources: https://apps.odoo.com/apps/modules/18.0/l10n_mz_payroll, https://flagship.social-protection.org/gimi/Media.action?id=19162
- **SME e-invoicing / SAF-T export app.** Killed by **Cegid Vendus, Primavera, PHC and Odoo**, which already sell certified invoicing with Mozambique SAF-T communication guides.

## Attractive problem, poor distribution

- **EU CATCH catch-certificate packs for Mozambican shrimp/fish exporters** (mandatory for EU importers from 10 Jan 2026). The obligation sits with the EU importer, and Mozambique has only a handful of EU-approved exporters (unverified count). Sources: https://oceans-and-fisheries.ec.europa.eu/news/new-digital-certification-system-tackle-illegal-fishing-2026-01-12_en, https://www.sfpa.ie/What-We-Do/Trade-Market-Access-Support/IUU-Fishing/CATCH-NEW-EU-SYSTEM
- **Pharmacy re-licensing (Resolution 18/2025) and the national medicine Track & Trace system.** The government owns the traceability platform, there is no known API, and the pharmacy base is small and price-sensitive. Sources: https://www.dlapiperafrica.com/pt/mozambique/insights/2025/Regulation-on-Licensing-for-the-Sale-of-Pharmaceutical-Products-at-Retail, https://forbesafricalusofona.com/?p=160468

## Too competitive

- SME certified invoicing and SAF-T export (Primavera, PHC, Cegid Vendus, Odoo).
- Payroll and INSS/IRPS returns (Primavera, PHC, Odoo, local bureaus).
