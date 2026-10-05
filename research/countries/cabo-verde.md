# Cabo Verde: country research

**Researched:** 2026-10-05. **Search budget used:** 10 of 10 (small market). WebFetch not used.
**Market context:** about 0.5–0.6 million people (estimate) on 10 islands. The economy is dominated by tourism (Sal, Boa Vista) and canned or frozen fish exports to the EU (Spain). Portuguese is the official language, and legal and administrative templates are close to Portugal's. The market is accessible to a foreign solo founder: no sanctions, no known internet restrictions, and the escudo is pegged to the euro. Local payment rails were not verified.

**Bottom line:** There is no strong standalone indie opportunity. The best lead is a compliance hub for short-term rental (alojamento complementar) hosts and property managers, driven by Decree-Law 56/2024 and the new ITCV SGIT platform. The hub would cover licensing, the tourist tax, guest reporting to police and e-Fatura. The market is too small for a standalone business. It works best as a Cabo Verde module added to a Portugal or Lusophone short-term rental compliance product, a market where Portuguese tools already exist.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Short-term rental / alojamento complementar | SGIT licensing, monthly tourist-tax statements and DUC payment, 24h foreign-guest boletim de alojamento, e-Fatura | **Candidate (weak-moderate)** | New 2024–2025 regime and portal create a real recurring per-booking task. Buyer pool is small and price-sensitive |
| Hotels (resorts on Sal/Boa Vista) | PMS → e-Fatura, tourist tax, guest bulletins | Too competitive / enterprise | Large resorts are chain-owned and use international PMSs and integrators. Enterprise procurement |
| All VAT-registered businesses (e-invoicing) | e-Fatura XML signing and clearance with DNRE; 2026 Budget Law makes e-issuance universal | Candidate as a developer connector only (weak) | Mandate is real, but EDICOM, an Odoo module, an open-source PHP library and a free government portal already cover it |
| Payroll / accountants | Monthly INPS Declaração de Remunerações plus IRPS withholding by the 15th | Too competitive / tiny | Done by local accounting firms and ERP payroll modules. Few hundred formal employers at most (estimate) |
| Customs brokers (despachantes oficiais) | SYDONIAWorld declarations, manifests, supporting documents | Poor distribution | The legal cap is 98 brokers. SYDONIAWorld is the integrated government system |
| Fish processing / export | EU IUU catch certificates, rules-of-origin derogation quotas (tuna, mackerel, melva) | Poor distribution | A handful of canneries, many tied to Spanish groups. Traceability is handled by the group or in Excel |

---

## Opportunities

### Opportunity: Alojamento Complementar compliance hub (SGIT + tourist tax + guest bulletin + e-Fatura)

**Industry:**
Tourism: short-term rentals (villas, apartments, rooms sold on Airbnb or Booking)

**Buyer:**
Property-management companies and multi-unit hosts on Sal (Santa Maria), Boa Vista and São Vicente, often expatriate (Portuguese, Italian, British) owners or agencies managing 5–50 units. Single-unit hosts are a secondary segment.

**Trigger / Why now:**
- Decree-Law 56/2024 (13 Nov 2024) regulates alojamento complementar. Every unit must be licensed by ITCV, and unlicensed units are blocked from advertising on Booking or Airbnb.
- In July 2025 ITCV presented the **SGIT** (Sistema de Gestão de Informação Turística) platform. Licensing, monitoring and payment must go *exclusively* through SGIT.
- Tourist-tax statements go into an automatic accommodation-statements system. A DUC (single collection document) is issued by the 5th of the following month.
- Foreign guests must be reported within 24h on a boletim de alojamento, under penalty of fines. The procedure was recently updated to integrate the computer systems.
- From 2026, e-Fatura is mandatory for all taxpayers, which covers invoicing of stays.

**Current workflow:**
1. A booking arrives through Airbnb, Booking or direct WhatsApp/email. Guest details sit in the OTA extranet or a channel manager.
2. The host re-keys guest identity data into the foreigners' accommodation-bulletin system (police/DEF) within 24h.
3. The host enters stay and night counts into the tourist-tax accommodation-statement system or SGIT. The monthly DUC is then paid.
4. The host issues an e-Fatura through a certified invoicing program or the free DNRE portal, re-typing the same stay.
5. The host keeps the SGIT licence and inspection evidence current so listings are not delisted.

**Pain:**
Three or four government touchpoints per stay, all with the same data. Fines apply for missed 24h bulletins. Listings can be removed if the licence is not in order. Evidence comes from official and legal sources (Decree-Law 56/2024 coverage, ITCV SGIT presentation, Boletim Oficial on accommodation bulletins). There is **no direct user-complaint evidence**: this is unverified pain intensity.

**Existing solutions:**
- SGIT (government, free) for licensing and payment.
- The free DNRE e-Fatura portal for small taxpayers, plus certified invoicing software (Odoo l10n_cv_efatura module, EDICOM, local programs).
- International PMSs and channel managers (Cloudbeds, SiteMinder and similar). These handle bookings, not Cabo Verde filings.
- Portuguese short-term rental compliance tools such as Chekin, which automate SEF/AIMA guest reporting and the tourist tax in Portugal. **Whether any of them cover Cabo Verde is unverified.**
- Local consultants and accountants (e.g. consultoria.cv publishes guides on the law).

**The gap:**
No tool was found that takes one booking and produces the Cabo Verde guest bulletin, the tourist-tax statement line and the e-Fatura together. Whether SGIT or the bulletin system offers any API is **unknown**. This is the key risk: browser automation may be the only route.

**Possible product:**
Hosts connect iCal or a channel manager and guests fill an online check-in form (passport photo, details). The tool pre-fills or submits the 24h bulletin, accumulates monthly tourist-tax nights for the DUC, and issues the e-Fatura through the DNRE API.

**MVP:**
Guest online check-in, a bulletin data export in the required format, a monthly tourist-tax summary, and e-Fatura issuance through the existing open-source library. Use manual or semi-automatic submission at first.

**Pricing hypothesis:**
€5–10 per unit per month, or €40–150 per month for a 10–30 unit property manager (estimate).

**How to find first customers:**
The ITCV/SGIT licensed-establishment register (the decree mandates one; public access is unverified). Airbnb/Booking listings in Santa Maria and Sal Rei. Real-estate and property-management agencies on Sal and Boa Vista. Expat host Facebook groups. Accountants serving expatriate owners.

**Risks:**
- The market is tiny. The number of licensed units is unknown, perhaps low thousands (estimate).
- Government systems may have no API.
- SGIT may grow its own booking-integration features.
- Portuguese incumbents could add Cabo Verde cheaply.
- Enforcement may be lax, which weakens urgency.

**Kill condition:**
- The bulletin and tourist-tax systems cannot be submitted to programmatically and SGIT already pre-fills from platforms, or
- fewer than about 1,000 licensed units exist, or
- an existing Portuguese short-term rental tool already supports Cabo Verde.

**Score:** 5/10 as a standalone product. About 6/10 as a Cabo Verde add-on module for a Portugal or Lusophone short-term rental compliance product.

**Sources:**
- https://forbesafricalusofona.com/nova-lei-para-regular-alojamentos-locais-em-cabo-verde/
- https://expressodasilhas.cv/pais/2025/07/16/instituto-do-turismo-de-cabo-verde-apresenta-decreto-lei-do-alojamento-complementar-na-ilha-da-boa-vista/98002
- https://cmalex.net/pt-pt/%F0%9F%93%8Dapresentacao-publica-do-diploma-de-alojamento-complementar-e-da-plataforma-sgit/
- https://consultoria.cv/en/quer-alugar-o-seu-imovel-em-cabo-verde-como-alojamento-complementar-veja-o-que-diz-a-lei/
- https://boe.incv.cv/Bulletins/DownloadAct?id=88604 (tourist-tax DUC / accommodation statements)
- https://boe.incv.cv/Bulletins/DownloadAct?id=85465 (boletins de alojamento procedure)
- https://faolex.fao.org/docs/pdf/cvi25614.pdf (24h accommodation-bulletin obligation for foreigners)
- https://chekin.com/pt/blog/registo-alojamento-local/ (Portuguese comparable)

### Opportunity: e-Fatura CV connector for foreign SaaS, PMS and POS vendors

**Industry:**
Cross-industry tax compliance (developer infrastructure)

**Buyer:**
Foreign software vendors (PMSs, POS, e-commerce, ERPs) with Cabo Verdean customers, and local developers who need DNRE clearance without becoming certified themselves.

**Trigger / Why now:**
- Decree-Law 79/2020 phased in e-Fatura from 2021 to 2022. The 2026 State Budget Law makes electronic issuance mandatory for **all** taxpayers.
- e-Fatura requires XML, an ICP-CV digital signature and real-time clearance. DNRE's technical manual is at v10.0, so the specification changes often.

**Current workflow:**
1. The vendor reads the DNRE technical manual.
2. The vendor builds XML signing with an ICP-CV certificate.
3. The vendor goes through software approval.
4. The vendor maintains the integration through manual updates.

**Pain:**
A spec change in each manual version, ICP-CV certificate handling, and the software certification hurdle for small vendors.

**Existing solutions:**
- EDICOM (global e-invoicing provider covering Cabo Verde).
- The Odoo `l10n_cv_efatura` module (v15–v18).
- The open-source PHP library `kowts/efatura-cv`.
- Thomson Reuters/ONESOURCE-type global providers.
- The free DNRE portal for small taxpayers.

**The gap:**
Only a cheap per-document REST API for small vendors. That is a thin wedge.

**Possible product:**
A REST API: JSON in, signed and cleared DFE out, with PDF rendering.

**MVP:**
A wrapper around the open-source library with certificate custody.

**Pricing hypothesis:**
€0.05–0.10 per document, or a €29–99 per month minimum (estimate).

**How to find first customers:**
Odoo partners and PMS/POS vendors active in Lusophone Africa. The DNRE certified-software list, if it is public (unverified).

**Risks:**
Whether third-party clearance on behalf of taxpayers is permitted is unverified. Global e-invoicing aggregators will win enterprise deals. Volume is tiny.

**Kill condition:**
DNRE requires each invoicing program to be certified individually, with no intermediary or "service provider" model.

**Score:** 3/10

**Sources:**
- https://edicomgroup.com/pt/blog/como-cumprir-fatura-eletronica-cabo-verde
- https://www.efatura.cv/assets/files/manual-tecnico-da-fatura-eletronica-v10.0-81ac76da0d05ec36abdb626087cda762.pdf
- https://efatura.cv/assets/files/socializacao_contribuintes-245bec345d7e4324a74db2b832235d2f.pdf
- https://apps.odoo.com/apps/modules/17.0/l10n_cv_efatura
- https://packagist.org/packages/kowts/efatura-cv
- https://orbitax.com/news/country/article/Cabo-Verde-2026-State-Budget-l_a1f19cfa-fd6e-11f0-87b9-76a0d27b047b

---

## Rejected after competitor research

- **General e-Fatura compliance for SMEs:** Killed by the free DNRE portal for small taxpayers, plus EDICOM, the Odoo module and existing certified local invoicing programs.
- **Hotel/resort PMS compliance integration:** Large resorts belong to international chains using enterprise PMSs (Cloudbeds/SiteMinder-class ecosystems and integrators). Selling to them requires enterprise procurement.
- **Payroll / INPS + IRPS monthly filing:** Handled by accounting firms and ERP payroll modules. Too few formal employers to support a standalone product (estimate).

## Attractive problem, poor distribution

- **Fish-export EU IUU catch certificates and derogation-quota tracking:** The regulatory pressure is real, and canned fish is about 75% of goods exports. But there are only a handful of canneries, mostly Spanish-group owned, and the EU fisheries protocol (2024–2029) runs government to government.
- **Customs brokers (SYDONIAWorld):** At most 98 licensed brokers, and an integrated government system already exists.

## Too competitive

- e-invoicing middleware (EDICOM, Odoo localisation, global tax engines).
- Hotel PMS / channel management (international vendors).

## Accessibility

Accessible. No sanctions, Portuguese-language legal framework, euro-pegged currency. API access to government systems (SGIT, the accommodation-bulletin system) is unverified.
