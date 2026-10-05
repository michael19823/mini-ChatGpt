# Luxembourg: Indie Software Opportunity Research

**Researched:** 2026-10-05 · **Market size class:** small (about 670k residents; a large cross-border workforce from FR/BE/DE, so the employer base is larger than the population suggests) · **Searches used:** 10 of 10

**Bottom line:** Luxembourg is a small, rich, multilingual market (FR/DE/LB/EN) with high willingness to pay. It also has well-funded local incumbents and free government portals. No idea reaches "build" quality as a Luxembourg-only product. The two most interesting leads both come from Luxembourg's role as a **cross-border labour hub**: (1) checking that posting-of-workers rules were followed along construction subcontracting chains, and (2) counting cross-border telework days to protect tax and social-security status. Both are better framed as Greater Region (LU+FR+BE+DE) products than as Luxembourg-only ones. The 2026 childcare-voucher (CSA) reform is a real regulatory trigger, but Kidola, a local vendor supported by the Ministry of the Economy, already serves it.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Construction (general contractors / main contractors) | Checking subcontractors' ITM posting declarations (e-Détachement) and social badges; fallback 8-day declaration; joint and several liability | **Candidate (weak-moderate)** | A legal duty to verify, repeated per subcontractor per site, and the ITM portal serves the posting firm, not the main contractor. But the market is small and the 2022 law cut the paperwork. |
| Foreign construction/service firms posting workers into LU | Filing e-Détachement declarations, uploading documents, printing social badges | Poor distribution | The free ITM platform plus consultants (Eurofiscalis, law firms) cover it. Buyers are spread across FR/BE/DE/PT/PL. |
| Employers of cross-border commuters (all sectors, SMEs) | Counting days worked outside LU (34-day tax tolerance; 25%/49% social-security thresholds; A1 certificates) | **Candidate (weak-moderate)** | Daily and mandatory in effect (withholding/affiliation risk), but SD Worx, Microtis Gesper and payroll fiduciaries already compete. |
| Childcare (private crèches / SEA under chèque-service accueil) | Moving from hourly packages to billing on actual hours, CSA billing-system encoding, new 2027 compensation mechanism | Too competitive | 2026 reform is a strong trigger, but Kidola (LU-tailored CSA exports, ministry-supported), Kinderpedia and Kidizz serve the market. |
| All VAT-registered businesses | Domestic B2B e-invoicing via Peppol (Draft Law 8815, 2028/2029 phases) | Too competitive / too early | Draft law only (filed 30 July 2026). Peppol access points, ERP vendors and global e-invoicing platforms (banqup, Comarch, Fonoa etc.) will cover it. |

---

## Opportunities

### Opportunity: Subcontractor posting-compliance checker for Luxembourg main contractors

**Industry:**
Construction (general contractors, main contractors, larger finishing/technical-installation firms using foreign subcontractors), plus project owners (maîtres d'ouvrage).

**Buyer:**
Site manager / HR or administration manager at a Luxembourg general contractor or mid-size construction firm that hires subcontractors from France, Belgium, Germany or Portugal; secondarily the project owner's representative.

**Trigger / Why now:**
No new 2025–2026 law. The trigger is ongoing enforcement. Under the Labour Code, a service provider using a direct subcontractor that posts workers to LU must check, by the start of the posting, that the subcontractor sent its ITM posting declaration and named a reference person in Luxembourg. If no copy is provided, the contractor must itself file a declaration on the ITM platform within 8 days, including the service contract. All companies in the chain are jointly and severally liable. The press reports that ITM is targeting posted workers. The "why now" is weak: no deadline-driven new obligation.

**Current workflow:**
1. The main contractor signs a subcontract with a foreign firm and asks for its e-Détachement declaration copy and social badges by email.
2. The admin collects PDFs and badge printouts in a shared folder or spreadsheet for each site.
3. As postings change (new workers, extended dates, new sub-subcontractors), they chase updated declarations.
4. If a subcontractor fails to provide the declaration, the contractor files the 8-day fallback declaration on the ITM platform by hand.
5. During an ITM site inspection, the site manager has to show who is on site and whether their badges and declarations are valid.

**Pain:**
- A legal verification duty, with joint and several liability and fines (CdM fiche 20, Pixie guidance on documents required from subcontractors).
- FEDIL (the industry federation) has publicly complained that recent tightening of posting obligations "pose d'importants problèmes".
- Exceptions (late declarations, worker swaps, sub-subcontracting chains) are handled through email chasing.

**Existing solutions:**
- ITM e-Détachement platform (free; built for the posting firm, which receives the badge/QR code).
- Consultants and law firms: Eurofiscalis (posting-of-workers service for LU), Arletti Partners, EY Law.
- Chamber of Trades (Chambre des Métiers) guidance sheets: free.
- Generic subcontractor-document platforms from France (e.g. e-Attestations / Provigis-type "vigilance" tools). **Unverified** whether they handle Luxembourg e-Détachement badges.
- Construction ERPs / site-access systems used by large contractors (unverified for LU).

**The gap:**
No tool found that is built for the **receiving** side of a Luxembourg posting: a per-site register of subcontractor declarations and badges, with alerts on posting end dates and missing reference persons, and a pre-filled fallback 8-day declaration pack. (Gap is an estimate from 10 searches, not exhaustive diligence.)

**Possible product:**
A per-site subcontractor posting register. Subcontractors upload their declaration and badges through a link; the tool checks dates, workers and reference persons, flags anything missing before the start of works, and generates the fallback declaration content and an inspection-ready site roster.

**MVP:**
A web app with sites, subcontractors, a magic-link upload, a badge/QR list per worker, expiry alerts, and a PDF "inspection folder" export. No ITM API (none known); data entry is manual or extracted from the uploaded PDFs.

**Pricing hypothesis:**
€49–149/month per company by number of active sites. Possibly €5–10 per worker posting checked for occasional users.

**How to find first customers:**
- Groupement des Entrepreneurs du Bâtiment et des Travaux Publics and FEDIL member lists.
- Chambre des Métiers registries.
- Public-procurement award notices (marches.public.lu) to identify general contractors.
- ITM and Chambre des Métiers info sessions.

**Risks:**
- Small market: likely a few hundred relevant contractors (estimate).
- ITM could add a main-contractor view to e-Détachement.
- Large contractors use their own access-control systems.
- Joint liability may be lightly enforced in practice.

**Kill condition:**
Kill the idea if either of these is found:
- Main contractors already get the badge data through their site-access systems or a French vigilance platform covering LU.
- Interviews show checks are a once-per-subcontract email that takes minutes.

**Score:** 5/10

**Sources:**
- https://itm.public.lu/en/questions-reponses/droit-travail/detachement-salaries/a/a22.html
- https://itm.public.lu/en/publications/guide/edetachement.html
- https://guichet.public.lu/en/entreprises/ressources-humaines/conditions-travail/mobilite/detachement/declaration-detachement.html
- https://www.cdm.lu/download/10879/fiche-20.-la-responsabilite-solidaire-du-maitre-de-l-ouvrage-en-matiere-de-detachement.pdf
- https://www.pixie.lu/corpus/rh/27-0014/quels-documents-l-entreprise-doit-elle-exiger-d-un-sous-traitant-au-luxembourg/?view=pdf
- https://fedil.lu/fr/positions/adaptions-necessaires-en-matiere-de-detachement/?pdf=1
- https://www.lesfrontaliers.lu/emploi/les-salaries-detaches-dans-le-collimateur-de-linspection-du-travail-luxembourgeoise/
- https://www.eurofiscalis.com/en/posted-workers-luxembourg/

---

### Opportunity: Cross-border telework day counter and evidence file for SME employers

**Industry:**
All sectors employing cross-border commuters (frontaliers): fiduciaries, IT, finance support functions, engineering, trades.

**Buyer:**
HR/payroll lead at a Luxembourg SME with 10–250 staff, many of them resident in FR/BE/DE. Alternatively the payroll bureau / fiduciary that runs payroll for many such SMEs (a white-label channel).

**Trigger / Why now:**
Since 1 January 2024, all three neighbouring countries apply a 34-day yearly tolerance for work outside LU before salary becomes partly taxable in the residence country. The threshold is pro-rated for part-time work and for contract start dates. Social security uses separate thresholds: 25% under Regulation 883/2004, or 49% under the framework agreement for telework, with an A1 certificate from the CCSS. Guidance updated in 2025–2026 still tells workers and employers to "keep a joint calendar".

**Current workflow:**
1. The employee declares telework, training and mission days outside LU in an HR tool, email or spreadsheet.
2. HR keeps a per-employee count of tax days (34, pro-rated) and of the social-security share (25%/49%), often in Excel.
3. Near the threshold, HR warns the employee or manager. Partial days and training days abroad count as days, which causes errors.
4. At year-end, payroll checks the counts to see if a split taxation applies, and keeps evidence for tax audits in FR/BE/DE.
5. HR applies for or renews the A1 certificate (valid 3 years) when telework exceeds 25%.

**Pain:**
Mistakes shift taxation or social-security affiliation, which means withholding corrections and cross-border tax filings. Paperjam has covered "gathering fiscal proof in telework". The rules differ by country of residence and are pro-rated (KPMG flash alert, Grant Thornton newsflash). Counting happens daily or weekly.

**Existing solutions:**
- SD Worx Luxembourg (payroll/HR with cross-border day tracking).
- Microtis "Gesper Time Management" (LU time tracking that records country worked).
- Payroll fiduciaries doing it manually: Grant Thornton, KPMG, EY, many local fiduciaries.
- Generic HR/leave tools (unverified LU-specific features).
- Free counter spreadsheets and calendars from frontalier associations (Frontaliers Grand Est).

**The gap:**
Incumbents tie the counter to a full payroll/time-tracking suite. The narrow layer appears missing: a lightweight, residence-country-aware counter (FR/BE/DE pro-rating, partial days, training abroad, 25/49% social-security split) with an audit-ready evidence export, sold on its own or through fiduciaries. (Unverified: smaller LU HR tools may already include it.)

**Possible product:**
A tool where the employee confirms their location each week (one tap). It applies the correct thresholds per residence country and contract, alerts HR and the employee before limits, and produces a year-end certificate and evidence pack for payroll and foreign tax authorities.

**MVP:**
A rules engine for the 34-day and 25%/49% thresholds with pro-rating, an employee self-declaration calendar, threshold alerts, and a CSV export for the payroll bureau.

**Pricing hypothesis:**
€2–4 per employee per month (€50–300/month for a typical SME). Or €100–300/month white-labelled to a fiduciary covering many clients.

**How to find first customers:**
- Fiduciary and payroll-bureau directories (Ordre des Experts-Comptables, OEC).
- House of Entrepreneurship and Chamber of Commerce events.
- HR associations (APRH Luxembourg).
- Frontalier media (lesfrontaliers.lu) for employee-side pull.

**Risks:**
- SD Worx and Microtis cover the core function.
- A possible treaty change to 50+ days would reduce the pain.
- Bought rarely as a standalone product.
- Employees may not want location tracking (privacy).

**Kill condition:**
Kill the idea if either of these holds:
- Most target SMEs' payroll fiduciaries already provide the counter inside their payroll service at no extra cost.
- Employers say they push the responsibility onto employees (the guidance is mostly aimed at workers).

**Score:** 4.5/10

**Sources:**
- https://frontaliers-grandest.eu/accueil/teletravail/au-luxembourg/reglementation
- https://frontaliers-grandest.eu/wp-content/uploads/2025/01/Teletravail_frontalier_au_Luxembourg.pdf
- https://www.grantthornton.lu/en/insights/social-security-and-taxation-of-cross-border-employees
- https://kpmg.com/xx/en/our-insights/gms-flash-alert/flash-alert-2024-100.html
- https://www.lexgo.be/en/news-and-articles/14989-34-day-tax-threshold-for-french-cross-border-workers-practical-application
- https://en.paperjam.lu/article/gathering-fiscal-proof-in-tele

---

## Rejected after competitor research

- **Private-crèche billing for the 2026 chèque-service accueil reform.** The trigger is strong. From 2026, non-contracted SEAs must bill on actual hours instead of hourly packages and can no longer charge supplements. The state contribution rises to €7/hour. A compensation mechanism for small providers (fewer than 120 children, no municipal funding) arrives from 2027. **Killed by Kidola**: a local, Ministry-of-Economy-supported crèche package with CSA exports and attestations, serving about 2,000 settings across FR/BE/LU/ES. Kinderpedia and Kidizz also serve the market. The only gap left may be a 2027 compensation-claim calculator, which is too narrow and too infrequent. Sources: https://gouvernement.lu/dam-assets/images-documents/actualites/2026/01-janvier/06-presentation-paquet-mesures/docs/2026-01-06-menej-factsheets-csa.pdf, https://paperjam.lu/article/reforme-du-cheque-service-accueil-300-millions-pour-laccueil-des-enfants, https://kidola.club/fr-lu, https://www.capterra.lu/software/174857/kinderpedia
- **Posting-declaration filing service for foreign firms (sending side).** **Killed by** the free ITM e-Détachement platform and the law of 23 December 2022, which halved the required documents. Consultants such as Eurofiscalis and Arletti Partners handle the rest. Sources: https://paperjam.lu/article/allegement-obligations-en-mati, https://www.eurofiscalis.com/detachement-salaries-luxembourg/

## Attractive problem, poor distribution

- **Posting compliance for foreign SMEs entering LU.** The pain is real (badges, reference person, inspections), but buyers are spread across FR/BE/DE/PT/PL with no single directory, and they file only occasionally.

## Too competitive

- **Domestic B2B e-invoicing (Draft Law 8815; receipt from 1 January 2028, issuance phased 1 July 2028 / 1 January 2029, Peppol 4-corner).** Peppol access points, ERP/accounting vendors and e-invoicing platforms (banqup, Comarch, Fonoa, etc.) are already positioned. The law is still only a draft. Sources: https://www.fiscal-requirements.com/news/5941-luxembourg-b2b-e-invoicing-peppol-proposed-for-phased-20282029-rollout, https://www.banqup.com/resources/blog/luxembourg-introduces-mandatory-b2b-e-invoicing
- **Crèche CSA billing** (see above: Kidola, Kinderpedia, Kidizz).

## Notes and limitations

- Not screened, given the 10-search budget: AED anti-money-laundering supervision of real-estate agents and fiduciaries, CNS direct payment for health professionals, waste and transport. These are candidates for a follow-up.
- Accessibility: Luxembourg is an EU member with no sanctions or localisation barriers. Selling SaaS from abroad is straightforward. French and German UIs are needed.
- Best framing: build both leads as **Greater Region** products. Posting and telework rules are mirrored in FR (SIPSI), BE (Limosa) and DE, which multiplies the buyer pool.
