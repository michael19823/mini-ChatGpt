# Cameroon: offline (quiet) industries pass

Research date: 2026-10-05. Searches used: 17 of the 20 budgeted. The 18th was refused because of a usage limit, so I stopped and wrote up what I had. Queries were mostly in French. WebFetch and GitHub were not used. All facts come from search-result snippets. Anything I could not confirm in a primary text is marked **unverified** or **estimate**.

The existing report (`research/countries/cameroon.md`) covers e-invoicing (CTC), EUDR for timber and cocoa, CNPS/DGI DIPE payroll, e-GUCE customs and pharmacies. This pass does not repeat them.

**Bottom line:** Cameroon's quiet industries are regulated on paper, but enforcement comes in **campaigns**: prefects' inspections, municipal round-ups, BEAC/COBAC sanctions. There are no recurring digital filings to automate. Most obligations are a one-off licence, plus inspection by a visiting officer and an in-person stamp (a visa, a laissez-passer, a prefect's authorisation). That leaves very little "re-entry between systems" pain for software to remove. No opportunity scored above 4/10.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Manual money changers (bureaux de change) | Licensed by MINFI under CEMAC Reg. 02/18 and BEAC Instr. 011/GR/2019. They must report to the BEAC (Instr. 013 on information to the central bank), meet AML/KYC duties, and face COBAC sanctions | Licence list published as a ministerial document. Supervision by COBAC on-site inspection. No vendor software found (search refused before I could check) | **41** licensed at 31 Mar 2026, up from 27 a year earlier (MINFI list via EcoMatin) | **Weak candidate** | Real recurring reporting and real sanctions (5M FCFA fine), but only 41 buyers |
| Gold/diamond collectors and buying desks (comptoirs) | Mining Code 2023/014 and Decree 2024/05251/PM (19 Nov 2024) on holding, sale, export and traceability. Collectors may sell only to licensed desks. SONAMINES is the hub. Certificates of origin now come from the Chamber of Commerce | Artisanal production "poorly or not declared". Approvals are frozen | About **200** desks waiting to be formalised (union leader, Financial Afrik, Aug 2026) | **Weak candidate** | Strong traceability trigger, but the approval freeze means almost no legal buyers yet |
| Households employing domestic workers | Mandatory CNPS affiliation of domestic workers. Employer registration within 15 days and worker declaration within 8 days. Fines up to 500,000 XAF | No household-employer e-service found. Usually informal and paid in cash | Unknown (no official count found) | **Weak candidate (service only)** | Mandate exists but enforcement looks negligible. Households won't pay for software |
| Moto-taxi operators (Douala) | Enrolment certificate from the "assainissement" programme, approved vest from the Communauté urbaine, licence, carte grise, insurance. Controls from 2 Apr 2026, impound on failure | Enforced by municipal police on the street. Paper certificate and vest | Not found (often quoted in the tens of thousands per city; **unverified**) | Reject | Buyer is a poor individual rider. The obligation is a one-off enrolment, not a recurring filing |
| Scrap metal collectors (casseurs, récupérateurs) | Mostly informal. The import ban on reinforcing bar concerns imports, not dealer registers | No dealer register or police book found | 53,000–61,800 t/yr of ferrous scrap; 29% by casseurs (academic study) | Reject | No register obligation to digitise. Informal sector |
| Livestock traders and cattle markets | Decree 86/711: herders need a livestock passport and a health pass/certificate, stamped at veterinary posts along the route | Paper passports visaed at each veterinary post | Not found | Reject | Paper stamps at physical posts. No portal, and no buyer would pay |
| Driving schools (auto-écoles) | Approval by Ministry of Transport. Audits and suspensions (396 of 540 files irregular in 2020; ~50 suspended) | Paper files submitted to the ministry. Clean-up campaigns | ~540 files submitted in the 2020 audit (le360) | Reject | No current recurring reporting trigger found for 2025–2026. Enforcement is campaign-style |
| Interurban bus agencies | Passenger registration with ID at the agency, baggage search, list of enrolled drivers to MINT. Suspensions after accidents | Paper manifests at the counter | Not found | Reject (low evidence) | Only 2015–2017 sources. No 2025–2026 trigger or receiving portal |
| Pesticide distributors and resellers | Product homologation and sprayer certification by MINADER's national commission. Rules dating from 2003 and 2005 | Minister complains of non-compliant actors and counterfeit products | Not found | Reject | Problem is fraud and smuggling. No reseller register duty I could confirm |
| Artisanal quarries | Decree of 19 Nov 2024: municipal authorisation for 2 years, Cameroonian individuals only. Separate decree on HSE and local-development obligations | Authorisation from the commune | Not found | Reject | Fragmented across about 360 communes, but the operators are individuals with no money |
| Well drillers (forages) | Public tenders (BIP/MINEE) through ARMP | Tender PDFs on pridesoft.armp.cm | Not found | Reject | No licensing register or recurring filing found. The work is tender-driven |
| Morgues and funeral transport | Body-transfer authorisation from the prefect or governor, based on a cause-of-death certificate. Hearse checks | Prefectoral paper authorisation | Not found | Reject | One-off per death, issued at a counter. Pain is morgue fees, not paperwork |
| Private security (gardiennage) companies | Approval by presidential decree and MINAT authorisation. Prefects inspect personnel files and contracts | Prefectoral field inspections | 9 approved in 2016, plus 16 in Feb 2021 (EcoMatin); ~100+ operating without approval in 2016 | Reject | Few legal buyers. Payroll/CNPS side is already served (see the main report) |

---

## 2. Strongest opportunities

### Opportunity: AML and BEAC reporting kit for Cameroon's licensed bureaux de change

**Industry:**
Manual foreign exchange (bureaux de change).

**Buyer:**
The owner-manager or compliance officer of a licensed bureau de change, mostly in Douala, then Yaoundé, Maroua and Limbé.

**Trigger / Why now:**
The CEMAC exchange regulation (Reg. 02/18/CEMAC/UMAC/CM) and BEAC Instruction 011/GR/2019 set the conditions for manual exchange. Instruction 013 governs reporting to the central bank. MINFI licensed 14 new operators in the year to 31 March 2026, taking the total from 27 to 41. The new entrants must set up compliance from scratch. The minister has publicly threatened to prosecute clandestine changers. COBAC finds the infractions, and the BEAC has sanctioned banks and bureaux de change for breaking the rules on non-resident accounts and similar.

**Current workflow:**
1. A cashier serves the customer at the counter, checks ID and records the transaction (assumed to be a paper ledger or Excel; **unverified**).
2. Periodic statements of currency bought and sold go to the BEAC under Instruction 013 (exact format and frequency **unverified**).
3. Suspicious transactions go to ANIF, Cameroon's financial intelligence unit. COBAC inspects on site.

**Pain:**
The fine is 5 million FCFA plus surrender of the foreign currency for operating without a licence, with warnings, suspension or revocation for other breaches (Phoenix Advisory summary of the regime). The BEAC has published sanctions against bureaux de change.

**Existing solutions:**
- Excel and paper registers (assumed).
- Generic forex-bureau software sold elsewhere in Africa (not checked: the search was refused).
- Accounting firms and compliance consultants (for example the law and advisory firms that publish on the regime, such as Kalieu Elongo and Phoenix Advisory).
- Core-banking modules for banks and microfinance institutions, which also do manual exchange.

**Offline evidence:**
The licence list is published as a ministerial document. Supervision is by on-site COBAC inspection. I found no CEMAC-specific software listing (but competitor diligence is incomplete).

**Offline channel:**
The MINFI licence list names all 41 operators. Visit them in person in Douala's commercial districts (Akwa). The 14 new licensees are the warmest leads. Douala compliance consultants can refer clients.

**Market count:**
41 licensed bureaux at 31 Mar 2026 (MINFI list reported by EcoMatin).

**The gap:**
A counter-side register that captures ID and transaction in one step and then generates the BEAC statement, the threshold alerts (supporting documents above 1M FCFA) and an ANIF suspicious-transaction draft. No local tool is known for this (**unverified**).

**Possible product:**
A tablet/web counter app that records each exchange with an ID photo, enforces the CEMAC thresholds, and exports the periodic BEAC statement and an inspection-ready register.

**MVP:**
A transaction register, ID capture, a threshold alert at 1M FCFA, and a monthly export in the BEAC statement format (once the format has been obtained from an operator).

**Pricing hypothesis:**
50,000–100,000 FCFA (about US$85–170) per month per bureau. Ceiling: 41 × ~US$120 ≈ US$5k MRR across the whole country. Extending to the other CEMAC states (Gabon, Congo, Chad, CAR, Equatorial Guinea) under the same regulation is the only path to scale.

**How to find first customers:**
The MINFI published list. A Douala counter walk.

**Willingness to pay:**
Probably yes for software that cuts inspection risk, since these are cash-rich businesses. They might prefer a done-for-you compliance service from a consultant.

**Founder access:**
Needs a French-speaking local or partner. Counter sales and trust matter, and AML data on foreign servers may worry operators and supervisors.

**Risks:**
A tiny market. The BEAC may impose its own reporting tool. Banks and microfinance institutions, which also do manual exchange, already have core-banking systems. Data-residency and AML sensitivity.

**Kill condition:**
The BEAC statement turns out to be a simple quarterly form, or 5 operator interviews show that their accountant already handles it for under US$50 a month.

**Score:** 4/10 (real mandate and sanctions, but 41 buyers; only works as a CEMAC-wide product)

**Sources:**
- https://ecomatin.net/change-manuel-le-cameroun-agree-14-nouveaux-operateurs
- https://www.beac.int/wp-content/uploads/2019/03/REGLEMENT-02_18_CEMAC_UMAC_CM-compressé.pdf
- https://kalieu-elongo.com/les-nouvelles-regles-applicables-au-change-manuel-dans-la-cemac/
- https://www.beac.int/p-des-changes/instructions/instructions-vf/
- https://phoenixadvisory-cm.com/2022/12/la-constatation-des-infractions-a-la-reglementation-des-changes-dans-la-cemac/
- https://droitmediasfinance.com/index.php/actualites/droit-monetaire/857-cemac-des-sanctions-de-la-beac-contre-les-banques-et-bureaux-de-change-pour-violation-des-regles-sur-les-comptes-de-non-residents-et-les-be
- https://droitmediasfinance.com/index.php/actualites/droit-bancaire/1001-cameroun-reglementation-des-changes-le-ministre-des-finances-menace-de-poursuivre-les-auteurs-du-change-clandestin

---

### Opportunity: Purchase register and traceability file for gold collectors and buying desks (Decree 2024/05251)

**Industry:**
Artisanal and semi-mechanised gold (and diamond) trading.

**Buyer:**
Licensed buying desks (comptoirs de commercialisation agréés) and licensed collectors, mainly in the East and Adamawa regions. Also, indirectly, SONAMINES.

**Trigger / Why now:**
Mining Code Law 2023/014 and Decree 2024/05251/PM (19 Nov 2024) set the rules for holding, selling, exporting, importing and transiting mineral substances, with traceability as the explicit goal. Collectors may sell only to licensed desks. SONAMINES is the central buyer. The Chamber of Commerce is now authorised to issue certificates of origin. MINFI has started a large tax reassessment in the gold sector. A gap between gold import and export figures was questioned in Jan 2026.

**Current workflow:**
1. A collector buys gold from diggers in cash at the mine site (paper notes, if any; **unverified**).
2. The collector sells to a licensed desk or SONAMINES. The desk compiles purchase records for export, tax and the certificate of origin.
3. Mines and tax officials reconcile declarations, and the gaps lead to tax reassessments.

**Pain:**
Production is "poorly or not declared". The tax reassessment campaign and SONAMINES' public complaints that tax and slow administration push gold into illegal export show what non-compliance costs.

**Existing solutions:**
- SONAMINES' own buying and recording process.
- The Chamber of Commerce's certificate-of-origin procedure.
- Paper registers.
- International responsible-sourcing schemes and traceability vendors (none confirmed as active in Cameroon).

**Offline evidence:**
Rural, cash-based operators. The approval freeze is reported by a union leader in the press, not on any portal. No local software found.

**Offline channel:**
The miners' union quoted by Financial Afrik, SONAMINES (as the receiving body), and the Chamber of Commerce's certificate-of-origin desk.

**Market count:**
About 200 desks waiting for approval (union statement, Aug 2026). The number of currently licensed desks is unknown and may be close to zero because of the freeze.

**The gap:**
A purchase-by-purchase register linking site, seller, weight and fineness to each export lot and certificate-of-origin file. It is unclear whether anyone wants this before the approvals reopen.

**Possible product:**
An offline-first mobile purchase register for collectors that syncs to a desk dashboard, which then produces the lot file for SONAMINES, customs and the certificate of origin.

**MVP:**
An offline Android form (seller ID, site, weight, price, photo), aggregation into lots, and a PDF lot dossier.

**Pricing hypothesis:**
US$100–300 per month per desk.

**How to find first customers:**
Through the union and the SONAMINES-licensed desks list (not found publicly).

**Willingness to pay:**
Low until enforcement bites. Desks that want to look compliant for their approval application might pay for a done-for-you dossier.

**Founder access:**
Needs a local partner. This is remote, cash-heavy and politically sensitive, with smuggling and illicit-finance risk.

**Risks:**
The approval freeze, SONAMINES building its own tool, reputational and AML risk around artisanal gold, and an insecure East-region border zone.

**Kill condition:**
Approvals stay frozen through 2027, or SONAMINES mandates its own register.

**Score:** 3/10

**Sources:**
- https://www.financialafrik.com/2026/08/02/rencontre-avec-ousmanou-aladji-hamadou-leader-syndical-minier-camerounais/
- https://droitmediasfinance.com/index.php/actualites/droit-ohada-affaires/882-cameroun-le-gouvernement-veut-garantir-la-tracabilite-et-la-transparence-de-la-commercialisation-des-substances-minerales
- https://cameroon-tribune.cm/article.html/69274/fr.html/details_2
- https://ecomatin.net/cameroun-la-chambre-de-commerce-desormais-habilitee-a-delivrer-les-certificats-dorigine-sur-les-substances-minerales
- https://fr.allafrica.com/stories/202601060053.html
- https://www.capmad.com/article/cameroun-louispaul-motaze-declenche-un-vaste-redressement-fiscal-dans-la-filiere-aurifere
- https://ecomatin.net/serge-herve-boyogueno-dg-de-la-sonamines-la-fiscalite-et-les-lenteurs-administratives-favorisent-lexportation-illegale-de-lor-au-cameroun

---

### Opportunity: Done-for-you CNPS registration and payslips for households employing domestic workers

**Industry:**
Households as employers (maids, nannies, guards, drivers).

**Buyer:**
Middle- and upper-income households and expatriates in Douala and Yaoundé. Expatriate households are the most likely payers.

**Trigger / Why now:**
The government requires employers to affiliate their domestic workers with the CNPS. Employers must register within 15 days of hiring the first employee and declare each worker within 8 days. Fines reach up to 500,000 XAF. The date of the government announcement is **unverified**; it does not appear to be a 2025–2026 change.

**Current workflow:**
1. The household pays the worker in cash or by mobile money, with no payslip.
2. If compliant, the employer registers in person at a CNPS centre, then files a monthly DIPE.
3. Most households do nothing (**estimate**).

**Pain:**
Low perceived pain. The only pain is an employer's exposure if a dispute arises (labour inspection, severance claims).

**Existing solutions:**
- CNPS counters and the e-DIPE portal.
- Payroll Odoo modules (business-oriented).
- Accountants.
- Employer-of-record providers (for example Rivermate, which publishes Cameroon guides) for companies, not households.

**Offline evidence:**
No household-employer product or service found.

**Offline channel:**
Expatriate associations, embassies' staff networks, international schools and NGO HR departments in Yaoundé and Douala.

**Market count:**
Unknown. No official count of domestic workers was found.

**The gap:**
A single monthly fee covering CNPS registration, DIPE filing, payslip and a contract template.

**Possible product:**
A concierge service with a simple web dashboard. The software alone is not enough.

**MVP:**
A WhatsApp intake, a contract template, a payslip generator, and a manual CNPS filing by a local agent.

**Pricing hypothesis:**
10,000–20,000 FCFA (about US$17–35) per worker per month.

**How to find first customers:**
Expatriate and NGO staff networks.

**Willingness to pay:**
For a service only, and mainly from expatriates. Local households are very unlikely to pay.

**Founder access:**
Needs a local agent to file at CNPS counters.

**Risks:**
Weak enforcement means low demand. It is a services business with thin margins.

**Kill condition:**
Fewer than 1 in 10 surveyed expatriate households would pay for it.

**Score:** 2/10

**Sources:**
- https://afrique.le360.ma/societe/cameroun-le-gouvernement-exige-laffiliation-des-employes-de-maison-a-la-caisse-de-retraite_QJYL7ARBONG3FMVYXTAJ7IJXWA
- https://africarrieres.com/cameroun/fr/guide/employeur-entreprise/obligations-employeur

---

## 3. Rejected

- **Moto-taxi enrolment (Douala, 2026):** a real, enforced trigger (controls from 2 Apr 2026, impound), but the buyer is a low-income individual rider and the obligation is a one-off enrolment with a vest from the Communauté urbaine. The council is the only buyer, and that is an enterprise or government sale.
- **Scrap metal:** I found no dealer register or police-book obligation. The sector is informal (casseurs). The import ban on reinforcing bar does not create dealer reporting.
- **Livestock trade:** the livestock passport and health pass are paper documents visaed at veterinary posts. No portal, and traders won't pay.
- **Driving schools:** the clean-up audits (2019–2020) were campaigns. I found no 2025–2026 recurring reporting trigger.
- **Interurban bus manifests:** only old (2015–2017) evidence. The manifest is a security list kept at the counter, with no receiving system.
- **Pesticide resellers:** the regulatory issue is counterfeit and smuggled products and homologation. I could not confirm a reseller sales-register duty.
- **Artisanal quarries:** licensed by about 360 communes (fragmented), but the operators are individuals with little money.
- **Well drillers:** tender-driven work. No licence register or recurring filing found.
- **Morgues and funeral transport:** the prefect's transfer authorisation is one-off and issued at a counter. The pain is the cost of the morgue, not paperwork.
- **Private security companies:** only about 25 approved firms. Prefects' inspections are campaign-based, and the payroll/CNPS side is already served by Odoo and Sage (see the main report).

## 4. Method notes

- **What worked:** French queries naming the regulator and the instrument ("agrément", "liste", "décret 2024", "BEAC instruction") surfaced ministerial lists (bureaux de change), decrees (mining and quarries) and enforcement news (moto-taxi controls, auto-école audits). EcoMatin, Cameroon Tribune, camer.be and droitmediasfinance.com were the most useful outlets.
- **What didn't:** I found no licensing registers or dealer-register obligations for scrap, livestock, pesticides or well drilling. Most quiet sectors are informal, with campaign-style enforcement and no recurring filing. Snippets for transport and funeral topics were mostly from before 2020.
- **Incomplete:** the search budget was cut short at 17 queries by a usage limit. Competitor diligence for bureau-de-change software was not done.
