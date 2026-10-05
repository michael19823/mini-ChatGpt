# Niger: Country Research

**Research date:** 2026-10-05 · **Search budget used:** 10 of 10 (treated as a small, fragile market) · **Languages:** French and English

## Bottom line

Niger is **legally accessible but practically marginal** for a foreign solo founder. Nothing in the regime blocks software sales: the EU sanctions are targeted asset freezes and travel bans, renewed to 24 Oct 2026. The economy is small, though. The military government that took power in July 2023 has repeatedly clashed with foreign telecoms and other firms over tax demands. Niger has left ECOWAS for the AES (Alliance des États du Sahel), and its transit corridors are disrupted. Fiscal digitisation is the one real regulatory trigger: certified invoicing (SECeF) and the new General Tax Code in force from 1 Jan 2026. That ground is already partly occupied by the free government tool e-SECeF and by DGI-homologated local software publishers. **No opportunity reaches the "build" bar.** The best leads are add-ons for a francophone UEMOA tax and invoicing product that is built mainly for larger neighbours, such as Côte d'Ivoire with its FNE (normalised electronic invoice) and Senegal. Niger could be sold as a secondary market for such a product.

## Accessibility check

| Factor | Finding |
|---|---|
| Sanctions | EU regime (since the 2023 coup) covers only listed persons and entities: asset freezes and travel bans, renewed to 24 Oct 2026. There is no sectoral ban on software or IT services. Screening customers against the lists is still needed. |
| Political and commercial risk | The government has a history of large tax claims against foreign operators: Airtel and Orange had their offices closed in 2018. Orange sold its subsidiary, whose business is now run by Zamani Com. Regulatory unpredictability is high. |
| Payment rails | Niger stays in UEMOA and uses the XOF. The 2026 finance law adds a **1% tax on mobile-money and transfer transactions above 100,000 XOF** made by or with companies under the real (actual-profit) tax regime. This makes collecting B2B subscriptions slightly more expensive. Mobile money runs through Airtel, Moov and Zamani. |
| Telecoms | Airtel has about 8.1M subscribers and Moov about 4.1M (mid-2025). Connectivity outside Niamey is weak (estimate). |
| Local presence | DGI homologation of an invoicing system (SFE) appears to require a local entity or partner. All the publishers on the published list are Nigerien. **Unverified** whether a foreign firm can be homologated. |

Verdict: **accessible with high friction.** It is best entered through a local partner or as an extension of a UEMOA-wide product.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All VAT-registered SMEs (cross-industry) | Certified e-invoicing (SECeF: an invoicing system plus the MCF control module, QR code and DGI signature) | Weak lead | Mandatory since Sep 2021, but the free e-SECeF portal (13,000+ users by Feb 2024) and local homologated publishers already cover it. |
| Accounting firms and in-house accountants | Monthly tax returns on the 15th, withholding taxes and the new 2026 tax code obligations | Weak lead | New tax code from 1 Jan 2026 adds more filing obligations, and DGI e-filing is still being rolled out. The buyer pool is small and unquantified. |
| Private clinics and pharmacies | Billing with certified invoices | Rejected | Local homologated vertical software already exists (Sahelis Smart Clinique, GesMedicale). |
| Banks, mobile-money operators and transfer agencies | Setting up the new 1% transfer tax (three-month adaptation window in 2026) | Rejected | The buyers are a handful of large operators that need enterprise procurement and a local integrator. It is a one-off project. |
| Customs brokers and freight forwarders | ASYCUDA/SYDONIA transit declarations on the Lomé–Ouagadougou–Niamey corridor | Poor distribution | Real pain from corridor disruption, but buyers are few and close to the state. The core system is government ASYCUDA. Security risk is high. |
| Mining subcontractors (uranium, gold) | Supplier compliance | Not pursued | The sector is dominated by the state and the political conflict with Orano. It is unsuitable for a solo founder (no searches spent). |
| Agricultural exporters (onion, sesame, livestock) | Export documentation and traceability | Not pursued | Exports go mostly to Nigeria and the region by informal or land routes. There is no EU traceability trigger such as the EU Deforestation Regulation (EUDR) (estimate). |

## Opportunities (all below the build bar)

### Opportunity: SECeF-plus-tax-return bridge for accounting firms (add-on to a UEMOA product)

**Industry:**
Accounting and tax services for SMEs under the real (actual-profit) tax regime

**Buyer:**
Small accounting firms (cabinets d'expertise comptable / comptables agréés) and accountants at mid-sized companies in Niamey, Maradi and Zinder

**Trigger / Why now:**
The new General Tax Code (Ordinance 2025-22 of 14 Jul 2025) took effect on 1 Jan 2026 with more filing obligations, including cross-checks against beneficial-ownership data. The 2026 finance law (Ordinance 2025-44 of 31 Dec 2025) adds new taxes, including the 1% transfer tax. DGI e-filing and e-payment are being rolled out in stages.

**Current workflow:**
1. Clients issue certified invoices through e-SECeF or a homologated invoicing system.
2. The accountant collects invoice exports, PDFs and paper from each client.
3. The accountant rebuilds VAT and withholding schedules in Excel.
4. The accountant fills in the monthly return due on the 15th, on paper or in the DGI portal, then pays.
5. The accountant reconciles certified-invoice totals with ledgers and returns for audit defence.

**Pain:**
The DGI cross-checks SECeF data against filings, so mismatches become audit triggers. The monthly deadline repeats for every client. The new code changes rates and rules mid-transition. Hours spent per client are not quantified (estimate).

**Existing solutions:**
- The free DGI e-SECeF portal
- Homologated local publishers: DAFTARI (CGP Profisc Niger), REZO-SYSTEM and others on the DGI list
- Generic ERPs (Sage, local SYSCOHADA accounting packages)
- CassKai, which markets accounting software for Niger
- Manual work in Excel

**The gap:**
No source showed a tool that reconciles SECeF invoice data against the monthly VAT and withholding return and builds the schedules for many clients at once. **Unverified:** the local publishers may already do this.

**Possible product:**
A multi-client workspace for accountants. It imports SECeF and e-SECeF invoice exports, applies the rates and withholding rules of the 2026 tax code, produces draft monthly returns and flags invoice-versus-return mismatches before the DGI finds them.

**MVP:**
An import of e-SECeF invoice exports (CSV/PDF) that outputs a VAT schedule and a mismatch report, plus a calendar of client deadlines.

**Pricing hypothesis:**
15,000–40,000 XOF (about $25–65) per firm per month, or about 3,000 XOF per client file per month (estimate).

**How to find first customers:**
The ONECCA Niger member roll (size not found), the Chambre de Commerce du Niger, firms advertising on nigeremploi.com (which carries 2026 finance-law training notices), and the DGI's homologated-publisher list as possible partners.

**Risks:**
- The e-SECeF export format and API access may be closed to third parties.
- The market is tiny.
- Local publishers could add this feature quickly.
- Currency, payment and political risk.

**Kill condition:**
e-SECeF offers no export or API, or a local publisher already ships multi-client return preparation.

**Score:** 4/10

**Sources:**
- https://edicomgroup.com/fr/facture-electronique/niger
- https://www.impots.gouv.ne/index.php?view=article&id=136&catid=39 (homologated publishers)
- https://x.com/DGI_Niger/status/1740297519769464917 (free e-SECeF)
- https://www.lesahel.org/loi-de-finances-2026-le-directeur-general-des-impots-explique-les-nouvelles-mesures-fiscales/
- https://cms.law/fr/fra/legal-updates/lois-de-finances-2026-en-afrique-de-l-ouest-et-centrale
- https://www.eyrolles.com/Entreprise/Livre/niger-code-general-des-impots-2026-9782353083374/
- https://www.impots.gouv.ne/index.php/reglementation-fiscale/code-general-des-impots
- https://www.nigeremploi.com/annonce.php?action=voir_pj_annonce&pdf=TDR_Loi_des_Finances_012026.pdf

### Opportunity: SECeF connector for vertical and point-of-sale software publishers (white-label)

**Industry:**
Software publishers and IT integrators serving retail, hotels, fuel stations and distributors

**Buyer:**
Small local or regional software houses whose POS or ERP must issue certified invoices, and that would rather not build and maintain the SECeF / control-module (MCF) integration themselves

**Trigger / Why now:**
SECeF has been mandatory for VAT-registered firms since 2021, and the DGI keeps adding homologations. The 2026 tax code consolidates the e-invoicing texts. Neighbouring countries run similar systems: Benin's e-MECeF, the model SECeF is based on, and Côte d'Ivoire's FNE with its May 2025 API procedure. A single multi-country connector therefore becomes valuable.

**Current workflow:**
1. The publisher reads the DGI specification.
2. The publisher builds the API or MCF integration and applies for homologation.
3. The publisher maintains it as rules change.
4. The publisher repeats all of this in every country.

**Pain:**
The integration and homologation cost is fixed per country, and Niger alone does not justify it for small or foreign POS vendors. That is an inference, not verified.

**Existing solutions:**
- EDICOM (enterprise compliance vendor)
- Local homologated publishers that integrate themselves
- The free e-SECeF portal as a manual fallback

**The gap:**
A cheap per-invoice API covering Niger, Benin and Côte d'Ivoire for small software houses (unverified whether one exists).

**Possible product:**
A REST API that takes a plain invoice, handles the certification call for each country and returns the QR code and signature.

**MVP:**
Niger and Benin only, with a sandbox and a PDF renderer.

**Pricing hypothesis:**
About 25–50 XOF per certified invoice, or $50–150 per month per publisher (estimate).

**How to find first customers:**
The DGI homologated-publisher lists in Niger and Benin, and POS resellers in Niamey.

**Risks:**
- Homologation may require a local legal entity.
- The DGI may restrict third-party certification.
- Very few buyers.
- EDICOM-type vendors already cover enterprise clients.

**Kill condition:**
The DGI will not homologate an intermediary platform, or it requires a local company.

**Score:** 3/10

**Sources:**
- https://edicomgroup.com/electronic-invoicing/niger
- https://www.impots.gouv.ne/index.php?view=article&id=136&catid=39
- https://www.fne.dgi.gouv.ci/documents/FNE-procedureapi.pdf
- https://apkpure.com/secef-niger/ne.gouv.impots.secef

## Rejected after competitor research

- **Certified-invoice billing for clinics and pharmacies.** Rejected because homologated local vertical tools already exist: Sahelis Smart Clinique (Sahel Ingénieries et Services) and GesMedicale (Niger Soft Center).
- **Simple SECeF invoicing app for small traders.** Rejected because the free DGI e-SECeF portal and mobile app already serve 13,000+ users, including taxpayers under the synthetic (flat-rate) regime, and local publishers such as DAFTARI and REZO-SYSTEM cover the rest.
- **Setting up the 1% transfer tax for operators.** Rejected because the buyers are a handful of banks, mobile-money operators and transfer agencies. It needs enterprise procurement and is a one-off adaptation within a three-month window.

## Attractive problem, poor distribution

- **Transit and customs paperwork for brokers on the Lomé–Ouagadougou–Niamey corridor.** The pain is real (corridor disruption, slow transit, cost), but the core system is government ASYCUDA, buyers are few and politically exposed, and the corridor carries security risk. Sources: https://www.policycenter.ma/publications/corridors-des-pays-de-lalliance-des-etats-du-sahel-vulnerabilites-logistiques, https://maritimafrica.com/en/?p=16132

## Too competitive

- General certified invoicing for VAT-registered SMEs (free e-SECeF plus homologated local publishers).

## Other sources consulted

- https://mf.globalsanctions.com/2025/10/eu-renews-niger-sanctions-until-october-2026/
- https://government.se/government-policy/foreign-and-security-policy/international-sanctions/geographical-sanctions/niger---sanctions/
- https://www.ecofinagency.com/news-digital/1203-53730-niger-telecoms-seeks-government-support-as-market-share-falls-to-5-24
- https://www.osiris.sn/telecoms-apres-orange-le-niger-sevit-contre-airtel.html
- https://www.osiris.sn/niger-vers-la-reprise-des-activites-d-orange-par-zamani-com.html
- https://tamtaminfo.com/la-dgi-precise-les-nouvelles-mesures-fiscales-de-2026/

## Gaps / not verified

- The number of ONECCA Niger members and accounting firms was not found.
- No Niger CNSS (social security) e-declaration platform was found. The searches returned only other countries' CNSS systems.
- Whether e-SECeF data can be exported or reached by API was not confirmed.
- Whether homologation is restricted to local entities was not confirmed.
