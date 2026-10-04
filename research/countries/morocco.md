# Morocco: Indie-Hacker Opportunity Research

Research date: 2026-10-04. Track: Morocco (French/Arabic/English sources).

> **Method note and evidence limits.** WebFetch was blocked by network policy for every domain tried, and the shared WebSearch budget ran out twice (about 30 searches in total). Every claim below comes from **search-result summaries**, and only URLs those searches returned are cited. Anything not confirmed that way is marked **(unverified)** or **(estimate)**. No primary regulator PDF was read in full. Treat this as a **screening pass**: the top ideas need a primary-source check, such as the DGI circular on 69-21, the NARSA téléservices rules and decree 2-15-865, before customer interviews.

---

## 1. Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | Accounting firms (fiduciaires) / all SMEs with revenue above 2M MAD | Law 69-21 quarterly payment-delay declaration on SIMPL, plus fine computation and the accountant's visa | **Opportunity (crowded)** | Mandatory, quarterly and penalised. Since 2026 it covers every firm with revenue above 2M MAD. Sage, KONTA, ETmanager, GestiSuite and many consultants are already active. |
| 2 | Driving schools (auto-écoles) | New NARSA "Téléservices" platform for candidate files and exam booking (live 1 Oct 2026) | **Opportunity (watch)** | Fresh trigger, but NARSA itself migrates files, and a local editor (J2HB Plus) exists. |
| 3 | Riads / maisons d'hôtes / short-term rentals | Daily DGSN guest declaration (télédéclaration des nuitées), guest records, tourism promotion tax and taxe de séjour | **Opportunity (moderate)** | Mandatory per guest under Law 80-14 art. 36, with fines. DabaFiche, StaySign and PMSs are already active. |
| 4 | All B2B companies | DGI e-invoicing (clearance model) | **Too competitive** | Large vendor field, and the DGI promises a free web tool for very small firms (TPE). |
| 5 | Steel/aluminium/cement/fertiliser exporters | EU CBAM definitive regime (from Jan 2026): emissions data for EU importers | **Too competitive / small SME base** | Few Moroccan SME exporters. Verifiers, consultants and global CBAM SaaS are crowded. |
| 6 | Seafood processors/exporters | EU CATCH IT catch certificates (mandatory for EU importers from 10 Jan 2026) | **Rejected** | CATCH is voluntary for third-country exporters, and the EU and Moroccan authorities run the system. |
| 7 | Pharmacies | Pharmacy management, wholesaler ordering | **Rejected** | Sobrus claims 50–60% share (5,000–7,000 pharmacies). |
| 8 | Private schools | Re-entering grades and absences into the ministry's MASSAR system | **Poor distribution / platform risk** | No public API, so third-party sync needs ministry (AREF) authorisation. Existing vendors already offer Excel exports. |
| 9 | Private clinics / labs | CNSS/AMO third-party payment (tiers payant) claims, rejections and withholding tax | **Attractive problem, insufficient evidence** | Real payer complexity, but I could not verify rejection pain or the vendor landscape. |
| 10 | Hazardous-waste collectors | Waste movement slips (bordereau de suivi) under Law 28-00 | **Poor distribution / no trigger found** | Authorisation regime exists, but no 2025–26 digital-manifest trigger was found and the buyer base is small. |
| 11 | Customs brokers (transitaires) | Customs declarations (DUM) in BADR, the PortNet single window | **Not concluded** | BADR supports EDI and has an established ecosystem. Searches found no clear gap, and vendor diligence was incomplete. |

---

## 2. Strongest opportunities

### Opportunity: 69-21 Payment-Delay Declaration Workbench for Fiduciaires

**Industry:**
Accounting firms (fiduciaires, experts-comptables, comptables agréés) serving SMEs. Secondary buyer: finance teams at mid-size companies (revenue 2–50M MAD).

**Buyer:**
Partner or manager at a small or mid-size fiduciaire handling 20–200 client companies. Secondary: DAF or chief accountant at a company with revenue of 10–50M MAD.

**Trigger / Why now:**
- Law 69-21 (published June 2023) amends the Commercial Code. It sets payment terms (60 days by default, up to 120 by agreement, 180 in some sectors) and requires debtors to **declare late-paid or unpaid supplier invoices and pay the fine themselves**.
- Firms with revenue of 2–10M MAD came in for invoices issued from **1 Jan 2025**. Their 2025 declaration was due **before 1 April 2026**.
- From **1 Jan 2026**, every firm with revenue above 2M MAD follows the same **quarterly** calendar on "SIMPL-Délais de paiement". The Q3-2026 filing is due **31 Oct 2026**, which is this month.
- A filing is due even when it is nil.

**Current workflow:**
1. Each quarter, the client sends the supplier ledger or purchase journal and payment records, usually as Excel or an export from local accounting software.
2. Staff rebuild invoice-level data: invoice date, supplier, ICE (business ID), amounts, partial payments, credit notes, and any agreed terms.
3. Staff work out the applicable deadline (60 days, the contract term, or the sector term), the delay in months, and the fine. The fine uses the Bank Al-Maghrib rate plus 0.85% per extra month, and the rate changes over time (the DGI moved it to 2.75% in 2024).
4. Staff fill or upload the declaration on SIMPL, pay the fine online, and keep evidence.
5. For larger clients, an auditor or accountant issues a "visa" confirming the declaration matches reality. The OEC (accountants' order) directive of Oct 2023 covers firms with revenue of 50M MAD or more.

**Pain:**
- Non-filing fines are reported at 5,000–250,000 MAD. Hespress reports up to 125,000 MAD for firms in breach.
- The fine is a cost on every late invoice.
- The work repeats 4 times a year per client, and a nil filing is still mandatory.
- Accounting media describe auditors' "dilemma" over the visa.
- Proof of manual effort is indirect. A whole cottage industry of consultant guides (Upsilon, Nexora, Aafir, Panthera Numbers, IPO Maroc) points to manual, error-prone preparation, but I found **no first-hand complaint threads** (unverified).

**Existing solutions:**
- **Sage Maroc**: a 69-21 compliance solution launched Oct 2023 ("Intuit-EDI/ECF": reporting, automation, tele-filing).
- **KONTA** (getkonta.tech): SaaS that centralises payment-term tracking and the DGI declaration.
- **ETmanager**: management software that auto-computes due dates.
- **GestiSuite**: blog and tooling on 69-21.
- Consulting firms that file on clients' behalf.
- DGI SIMPL itself, with manual entry or file upload.
- Excel templates.

**The gap:**
- Most tools are built for **one company with clean ERP data**.
- Small and mid-size fiduciaires get **messy, multi-format client data** (Sage 100, Ciel, local software, Excel). They need:
  - a multi-client, quarter-by-quarter batch workflow,
  - automatic column mapping,
  - handling of partial payments and credit notes,
  - a register of contractual terms (proof of the 120-day agreement),
  - an audit trail that supports the visa,
  - one-click file generation for SIMPL.
- Whether a cheap, fiduciaire-first product exists is **unconfirmed**. I could not see pricing or features for KONTA or aube.ma. The gap may already be closed.

**Possible product:**
A multi-client workbench for accounting firms:
- import each client's supplier ledger or VAT purchase data,
- auto-compute deadlines, delays and fines with dated Bank Al-Maghrib rates,
- flag anomalies (missing agreements, credit notes, duplicates),
- output the SIMPL-ready declaration plus a visa working-paper pack.

Later, it could extend to other recurring DGI filings, and to e-invoicing reconciliation once that becomes mandatory.

**MVP:**
Excel/CSV upload → column mapper → rules engine (60/120/180-day terms plus the BAM rate table) → per-client quarterly report, SIMPL upload file and PDF working papers. No integrations at first.

**Pricing hypothesis:**
Per-client-company pricing for fiduciaires: about **50–100 MAD per client per quarter** (estimate), or **300–1,500 MAD per month** per firm by tier. For direct mid-size companies, about 300–500 MAD per month.

**How to find first customers:**
- OEC member directory (experts-comptables).
- Comptables agréés registry (the profession was recently given a formal framework).
- CGEM regional commissions.
- LinkedIn and Facebook groups of Moroccan accountants.
- Selling just before the quarterly deadlines: 31 Oct, 31 Jan, 30 Apr, 31 Jul.

**Risks:**
- Crowded field: Sage, KONTA, ETmanager, and possibly more local SaaS and indie tools.
- The DGI could improve SIMPL's own import.
- E-invoicing (clearance) may make invoice and payment data native to the DGI, which could shrink the problem from 2027–28.
- Fiduciaire willingness to pay is low, and price sensitivity is high.

**Kill condition:**
- 10 fiduciaire interviews show they already use KONTA, Sage or a cheap local tool, or find SIMPL plus Excel "good enough"; or
- the DGI announces that 69-21 data will be derived automatically from e-invoices or VAT filings.

**Score:** 6/10. Strong mandate, frequency and why-now. Downgraded for visible competition and a looming platform risk from e-invoicing.

**Sources:**
- https://medias24.com/2026/03/14/delais-de-paiement-declaration-obligatoire-avant-le-1er-avril-2026-1643453/
- https://medias24.com/2026/07/24/dgi-les-principales-echeances-fiscales-a-respecter-avant-le-31-juillet-1730075/
- https://fr.le360.ma/economie/delais-de-paiement-la-dgi-rappelle-lobligation-de-declaration-avant-le-1er-avril-2026_YG2XWXNV2NFIJJMOCCTEOFMJ5Q/
- https://ecoactu.ma/la-dgi-rappelle-le-depot-de-la-declaration-des-delais-de-paiement-avant-le-1er-avril-2026/
- https://www.fnh.ma/article/actualites-marocaines/dgi-impots-delais-paiements
- https://fr.hespress.com/414120-414120.html
- https://medias24.com/2023/10/23/delais-de-paiement-la-circulaire-de-la-dgi-apporte-des-precisions-sur-le-calcul-des-delais-et-des-sanctions/
- https://telquel.ma/instant-t/2024/07/01/retards-de-paiement-la-dgi-ajuste-le-taux-a-275_1880894/
- https://medias24.com/2023/10/10/delais-de-paiement-le-dilemme-des-commissiares-aux-comptes-la-directive-de-loec/
- https://fr.hespress.com/337076-sage-maroc-lance-sa-solution-de-conformite-sur-les-delais-de-paiement-de-la-loi-69-21.html
- https://getkonta.tech/loi-69-21-maroc-2024/
- https://etmanager.com/delais-paiement-maroc-amendes/
- https://www.gestisuite.com/blog/loi-delais-paiement-maroc-69-21
- https://nexora-expertise.ma/articles/declaration-delais-de-paiement-maroc-guide-complet-2026
- https://www.aafir.ma/loi-69-21-un-tournant-pour-les-delais-de-paiement-au-maroc/
- https://fnh.ma/article/actualite-economique/comptables-agrees-la-profession-mieux-encadree

---

### Opportunity: NARSA Téléservices Companion for Driving Schools

**Industry:**
Driving schools (auto-écoles).

**Buyer:**
Owner or manager of an independent auto-école. Most are small, owner-operated businesses (estimate).

**Trigger / Why now:**
- NARSA (the road-safety agency) is rolling out a multiservice digital portal for auto-écoles.
- Candidate registration through "Téléservices" began **1 Sep 2026**, and the platform entered into force **1 Oct 2026**.
- It covers candidate files, exam scheduling, results, renewal of the school's licence (agrément), performance indicators and digital archiving.
- It follows 2025–26 turbulence: a new theory exam, a "permis crisis" scandal, and NARSA warnings about misleading school offers and official tariffs.

**Current workflow:**
1. The school collects candidate documents (ID, photos, medical certificate) on paper or WhatsApp.
2. Staff register the candidate on NARSA Téléservices or Perminou and book exam slots.
3. Separately, the school tracks lessons, instructor schedules, instalment payments and the official tariffs in a notebook or Excel (unverified).
4. Staff chase results and re-book failed candidates.
5. The school keeps its own records for NARSA performance indicators and licence renewal.

**Pain:**
- Professional-press coverage reports anger among driving-school professionals over exam issues, and NARSA reminders of rules and official tariffs, which means compliance pressure.
- NARSA says existing files migrate automatically "avoiding double entry", so that specific pain is **partly removed by the regulator**.
- Remaining pain (unverified): reconciling NARSA status with the school's own scheduling, payments and document collection.

**Existing solutions:**
- **J2HB Plus** (gestionautoecole.com), a Moroccan driving-school software editor.
- French SaaS (Klaxo, ReservationAutoEcole, Elgeaweb), which are not Morocco-specific.
- Odoo setups.
- NARSA's own portal.

**The gap:**
- No sign that any local tool syncs with or mirrors NARSA Téléservices status, such as exam dates and results, with the school's candidate ledger and payments.
- No public NARSA API was found. Integration would rely on manual import or browser automation, which is risky.

**Possible product:**
A mobile-first school back office: candidate document checklist, instalment tracking against the NARSA official tariff, instructor scheduling, and a "NARSA status board" fed by semi-automated capture from the portal.

**MVP:**
A WhatsApp-friendly candidate intake and document checklist, plus a payment ledger and an exam-booking tracker, all manual-entry. Validate it with 20 schools in one city.

**Pricing hypothesis:**
150–300 MAD per month per school (estimate). Willingness to pay is low to medium.

**How to find first customers:**
- NARSA list of licensed schools (khadamatnarsa.ma has the licensing service; a public list is unverified).
- Driving-school professional associations.
- Google Maps scraping by city.

**Risks:**
- NARSA expands its portal to cover the school's own operations.
- No API, and scraping a government portal is fragile and legally sensitive.
- Low willingness to pay.
- The number of schools is unknown; a few thousand is an unverified estimate.

**Kill condition:**
The NARSA portal already covers payments and scheduling, or schools say WhatsApp plus a notebook is enough.

**Score:** 5/10. Real why-now, but the regulator removed the main duplicate-entry pain and integration access is unclear.

**Sources:**
- https://www.bladi.net/nouveau-permis-marocain,121966.html
- https://www.journalducanada.com/permis-de-conduire-au-maroc-la-narsa-lance-une-plateforme-numerique-9515-2026/
- https://autoecoletrajectoire.ma/teleservices-auto-ecole-maroc/
- https://maroctl.com/en-bref/narsa-lance-un-nouveau-bouquet-de-services-destines-aux-professionnels-et-au-grand-public/
- https://khadamatnarsa.ma/fr/services/ouverture-et-exploitation-dauto-ecole
- http://perminou.narsa.gov.ma/
- https://fr.hespress.com/427435-427435.html
- https://fr.hespress.com/360612-crise-du-permis-de-conduire-les-professionnels-des-auto-ecoles-ne-decolerent-pas-apres-le-scandale.html
- https://gestionautoecole.com/fr/actualite/1

---

### Opportunity: Guest-Declaration and Tourist-Tax Router for Riads, Guesthouses and Short-Term Rentals

**Industry:**
Tourist accommodation outside large hotel chains: riads, maisons d'hôtes, gîtes, and Airbnb-type rentals now covered by Law 80-14.

**Buyer:**
Owner or manager of a riad or guesthouse. Also property-management companies that run 5–50 short-term-rental units, often for Moroccans living abroad (MRE).

**Trigger / Why now:**
- Law 80-14 brings all tourist rentals under authorisation. Art. 36 requires electronic declaration of guests (nuitées) to the DGSN or Gendarmerie.
- Operators must collect the tourism promotion tax and the communal taxe de séjour.
- The tax authority is intensifying control of short-term-rental income in 2025–26.
- The tourism boom (AFCON 2025, World Cup 2030) is increasing volume.

**Current workflow:**
1. A booking arrives from Booking.com or Airbnb, or directly.
2. At check-in, staff copy passport or ID data onto a paper guest form (fiche de police).
3. Staff re-key the same data into the DGSN télédéclaration space. The account is activated after filing licence, trade register (RC) and classification documents.
4. Staff compute and declare the tourist taxes to the commune.
5. Staff keep paper forms for inspection.

**Pain:**
- Non-compliance fines of 200–1,000 MAD, plus administrative closure if repeated. This figure comes from a search summary and is unverified at primary source.
- Per-guest, daily re-keying of passport data.
- Historic under-declaration: a study estimated only about 30 of more than 600 Medina guesthouses were legal. That is old data, but it shows enforcement and formalisation pressure.

**Existing solutions:**
- **DabaFiche** (dabafiche.ma): online guest forms and accommodation contracts with pre-fill.
- **StaySign** (staysign.io): blog on Moroccan rental regulation, likely a check-in/e-signature product (unverified).
- **GetWelcom**: French guest-form automation.
- Global PMSs and channel managers (Lodgify publishes on Morocco's Airbnb law).

**The gap:**
- No evidence that any tool **pushes data directly into the DGSN system**. No public API was found.
- No evidence that any tool **also handles the communal tax declarations**. "Scan once → police + tax + stats" is unproven.
- Competitors already do the pre-fill part.

**Possible product:**
- Passport/ID scan at check-in, or a guest self-check-in link.
- Generates the compliant guest form, prepares the DGSN entry (assisted copy or browser extension), and builds the monthly tourist-tax statements per commune.
- Syncs arrivals from iCal or channel managers.

**MVP:**
A self-check-in link with passport OCR, plus a daily "to-declare" list with one-click copy fields, plus a monthly tax summary PDF. Pilot in Marrakech Medina.

**Pricing hypothesis:**
100–250 MAD per month per property, or 30–50 MAD per unit per month for property managers (estimate).

**How to find first customers:**
- Booking.com/Airbnb listings by city.
- Ministry of Tourism lists of classified maisons d'hôtes (availability unverified).
- Regional tourism councils and riad associations in Marrakech and Fès.

**Risks:**
- DabaFiche or StaySign may already cover most of this.
- The DGSN system has no API, and automating a police system is legally sensitive.
- Small owners have low willingness to pay.
- The government may build its own unified e-platform.

**Kill condition:**
- DabaFiche or StaySign already submit directly to the DGSN and handle taxes; or
- the DGSN forbids third-party entry.

**Score:** 5/10.

**Sources:**
- https://www.dabafiche.ma/
- https://www.staysign.io/blog/location-saisonniere-maroc-reglementation
- https://tourismapost.ma/alertes_infos/teledeclaration-les-fiches-police/
- https://medias24.com/2017/03/29/hotellerie-comment-proceder-a-la-tele-declaration-des-nuitees/
- https://www.getwelcom.com/en/produits/fiche-de-police-hotel
- https://www.lodgify.com/blog/fr/loi-airbnb-maroc/
- https://fr.hespress.com/363239-le-maroc-intensifie-le-controle-des-revenus-generes-par-airbnb.html
- https://fr.hespress.com/410689-location-courte-duree-les-investisseurs-invites-a-declarer-leurs-revenus-aux-impots.html
- https://www.memoireonline.com/04/10/3328/m_Maisons-dhte-naissance-et-developpement19.html

---

## 3. Rejected after competitor research

- **Pharmacy management / ordering.** Killed by **Sobrus**, which claims more than 50% share (5,000+ pharmacies, with another source saying 7,000, or 60%) and is interconnected with 20 wholesalers. Source: https://telquel.ma/sponsors/gitex-e-health-la-fantastique-ascension-de-sobrus_1872385
- **EU CATCH catch-certificate tooling for Moroccan seafood exporters.** CATCH became mandatory on 10 Jan 2026 for **EU importers and member-state authorities only**. Third-country operators use it **voluntarily**, and the flag-state authority validates certificates. The EU-run free system is the killer, and there is no forced workflow for Moroccan SMEs. Sources: https://oceans-and-fisheries.ec.europa.eu/system/files/2024-01/FAQ-amendment-IUU-Regulation_en.pdf, https://thefishingdaily.com/eu-fishing-industry-news/new-eu-digital-certification-system-targets-illegal-fishing-imports/
- **E-invoicing for micro and small businesses.** Killed by the **DGI's promised free web invoicing tool for TPE** and a crowded vendor field: Sage, Hisab, Karizma, Oasis Technocloud, Fawatirai, Experio, Hunter BI and others. The decree was still at the government secretariat (SGG) in April 2026. Sources: https://www.challenge.ma/facturation-electronique-une-transition-sans-cout-pour-les-tpme-319928/, https://medias24.com/2026/04/16/dgi-facturation-electronique-lancement-en-preparation-les-details-avec-younes-idrissi-kaitouni-1660967/

## 4. Too competitive

- **DGI e-invoicing compliance (medium and large firms).** Clearance model, phased from the largest firms. Dates on vendor blogs (Jan/Jul 2026, Jan 2027) are **not confirmed** by the DGI. As of Apr 2026 the launch was "in preparation" pending a decree. International e-invoicing players plus Sage and local integrators will dominate. Revisit only for **exception handling** (rejected invoices, credit-note mismatches) once the decree is out. Sources: https://medias24.com/2026/04/17/dgi-electronic-invoicing-rollout-in-preparation-details-from-younes-idrissi-kaitouni-1661609/, https://www.sage.com/fr-ma/blog/facturation-electronique-maroc-2026/, https://hisab.ma/fr/docs/mandate-2026
- **CBAM emissions data for Moroccan exporters.** The definitive regime started in Jan 2026, and the first annual declaration on 2026 emissions is due 30 Sep 2027. Exposed Moroccan firms are mostly large: OCP fertilisers, cement, steel. Accredited verifiers, consultants and global CBAM SaaS crowd the space, and the SME base is too small. Sources: https://fnh.ma/article/actualite-economique/secteur-bancaire-marocain-face-au-risque-cbam-quand-bruxelles-devient-un-risque-de-credit-a-casablanca, https://news.metal.com/fr/newscontent/104031152-smm-analysis-les-co%C3%BBts-du-cbam-entrent-en-vigueur-la-capacit%C3%A9-de-v%C3%A9rification-est-%C3%A0-la-tra%C3%AEne-ce-que-les-exportateurs-da
- **69-21 for single companies** (as opposed to fiduciaires) is already contested by Sage, KONTA and ETmanager. See Opportunity 1.

## 5. Attractive problem, poor distribution

- **Private schools ↔ MASSAR duplicate entry.** Private schools are about 36% of establishments (2019–20 figure), and grades and absences must go into MASSAR. However, there is **no live API**, ministry (AREF) authorisation is required for sync, and vendors such as OpenEduCat already offer MASSAR-format exports. There are also reported incidents of private-school pupils excluded from MASSAR. Sources: https://openeducat.org/fr/k12-school-management-software-in-morocco/, https://medias24.com/2021/11/11/36-des-etablissements-denseignement-au-maroc-sont-prives-chiffres-2020/, https://fr.le360.ma/societe/ecoles-privees-des-eleves-exclus-du-systeme-massar_QKRSETCKDFFJHPEAFFGH7RMOVY/
- **Private-clinic and lab CNSS/AMO third-party-payment claims.** Payer complexity is real: CNOPS, and now CNSS, has suspended third-party payment for some clinics, and withholding tax on care-provider fees applies since LF 2023. But I found **no verified rejection or backlog data**. Hospital-system vendors are unknown, and the buyer is fragmented and sold to through relationships. Sources: https://www.fnh.ma/article/actualites-marocaines/cnss-maroc-amo, https://www.bladi.net/maroc-cliniques-sanctionnees,61011.html
- **Hazardous-waste movement slips (Law 28-00).** Collectors and transporters need authorisation, but no Moroccan digital-manifest mandate was found (unlike France's Trackdéchets). The buyer base is small and concentrated. Sources: https://www.dmp.uae.ma/cours_dmp/CHAPITRE_3.pdf, https://lematin.ma/journal/2014/environnement_le-gouvernement-veut-mieux-quadriller--la-gestion-des-dechets-dangereux/207030.html
- **Customs brokers (BADR/PortNet).** BADR supports EDI and is mature. It is unclear where an indie tool fits next to incumbent broker software, and vendor diligence was incomplete. Sources: https://www.finances.gov.ma/fr/Pages/e-Services-et-formulaires.aspx, https://www.capmad.com/article/transit-tir-maroceurope-transmartic-detaille-les-procedures-de-dedouanement-pour-les-pme

---

## 6. Bottom line for Morocco

Morocco's clearest 2026 "regulatory trigger" is **Law 69-21**: quarterly, mandatory, fined, and since Jan 2026 extended to every firm with revenue above 2M MAD. The pain is real, but competitors moved early: Sage launched in 2023, and KONTA and ETmanager followed. The only plausible indie wedge is a **fiduciaire-first, multi-client, messy-data workbench**, and it should be validated with about 10 accounting-firm interviews **before 31 Oct 2026 (Q3 deadline)**. The NARSA and DGSN ideas have a real why-now but face government-portal access risk. No Morocco idea yet meets the brief's full build bar.
