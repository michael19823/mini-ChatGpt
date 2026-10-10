# Paraguay: SEPRELAD AML/CFT duties for real-estate firms (and other subjects with no natural supervisor), turned into product requirements

Status: complete as of 2026-10-10. Open questions are listed near the end.

Main primary source: SEPRELAD's own register of laws and resolutions, which links the signed PDFs ([SEPRELAD "Leyes / Normativas / Decretos / Circulares"](https://www.seprelad.gov.py/?page_id=1617); the data behind it is at [resoluciones.php](https://www.seprelad.gov.py/resoluciones/data/resoluciones.php)). I read the full text of Res 201/2020 and the consolidated Ley 1015/97, and all or the key pages of about 20 other resolutions and circulars. Many are scanned PDFs, which I read page by page. Article numbers below come from those PDFs.

Abbreviations:
- **SEPRELAD**: Secretaría de Prevención de Lavado de Dinero o Bienes. It is both the financial intelligence unit and the supervisor of the sectors that have no other ("natural") supervisor.
- **SO**: sujeto obligado (obliged subject).
- **SIRO**: Sistema Integrado de Reporte de Operaciones. SEPRELAD's free web portal. It replaced the older ROS_WEB application.
- **ROS**: suspicious-transaction report. **RN**: negative report (no ROS in the quarter). **RO**: periodic report of all operations. **FA**: Formulario Anual (annual information form). **CI**: internal-control report. **AE**: external-audit report. **ITC**: SEPRELAD request for extra transaction information.
- **CO**: compliance officer (Oficial de Cumplimiento). **CDD**: customer due diligence (debida diligencia del cliente, DDC). **PEP**: politically exposed person. **BO**: beneficial owner.
- **"Res 201"** means SEPRELAD Res 201/2020, the real-estate rulebook. **"Ley"** means Ley 1015/97 as amended.

## Summary

- **One national rulebook governs real estate.** SEPRELAD Res 201/2020 (September 2020) covers anyone who habitually buys or sells property: agencies, agents, brokers, commission agents and developers ([Res 201/2020, art. 1](https://www.seprelad.gov.py/resoluciones/resoluciones/res-n201-2020-reglamentacion-para-inmobiliarias.pdf)). It rests on Ley 1015/97, art. 13(k), as amended last by Ley 6960/2022 ([consolidated Ley 1015/97](https://www.seprelad.gov.py/resoluciones/resoluciones/ley10151997actualizada_.pdf)). Car dealers (Res 196/2020) and jewellers (Res 222/2020) have near-identical rulebooks.
- **What must exist on paper.** The firm needs:
  - a compliance officer, notified to SEPRELAD within 5 business days (art. 8-10);
  - a manual with the Annex I contents, and a code of ethics, both approved by the owner or board and signed off by staff (art. 11-12);
  - a documented risk self-assessment at least every 2 years, with the method checked every 4 years (art. 3);
  - an annual training programme and training records kept 5 years (art. 15-16);
  - a KYC file on every client, a risk score for every client, an alert and unusual-operation register, and a register of all operations (art. 18-32).
- **What must be filed, all through SIRO.** SEPRELAD's Circular 2/2025 lists the calendar ([Circular UIF-SEPRELAD/SE 02/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/CIRCULAR%202-2025.pdf)):
  - the CI report by 30 March;
  - the FA by 31 May;
  - the AE report by 30 June;
  - an RN in days 1-10 after each quarter with no ROS ([Res 326/2022](https://www.seprelad.gov.py/resoluciones/resoluciones/resn326-22-implementacionsiro-r-n.pdf));
  - an RO of all property deals in days 11-20 after each quarter ([Res 003/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/resol-03-2025-ro-inmobiliarias.pdf));
  - a ROS within 24 hours of deciding an operation is suspicious (art. 33).
- **New in 2026.**
  - SEPRELAD can now exempt or defer the external audit for one year for inactive or very small firms. The firm must ask before the deadline ([Res 328/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/Res.%20328.26_Excepci%C3%B3n%20de%20auditor%C3%ADa%20externa.pdf)).
  - Every SO must confirm its SIRO data once a year, and report any change within 5 business days. Failure can block SIRO functions ([Res 435/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/435_2026.pdf)).
  - The minimum wage rose to Gs 3,044,000 on 1 July 2026 ([Decreto 6225/2026](https://impuestospy.com/impuestos/decreto-n-6225-2026/)). That moves the simplified-KYC ceilings to about Gs 456.6m for a single payment and Gs 60.9m a year for instalments (my calculation from Res 201, art. 22).
- **Enforcement is mass and objective, not deep.**
  - SIRO data shows who missed a filing. In December 2024 SEPRELAD sent warning notes plus "remedial actions" to 1,238 real-estate firms that had missed FY2023 filings (CI, AE, ROS/RN or FA) ([Res 681/2024](https://www.seprelad.gov.py/resoluciones/resoluciones/res-n681-24.pdf); [SEPRELAD Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)).
  - A warning note is the first sanction listed in Ley art. 24. Sanctions go on SEPRELAD's register (art. 28.8), and repeat offences weigh in grading the next sanction (art. 25(f)). The legal maximum for a firm is 5,000 minimum wages, about Gs 15.2bn at the 2026 wage (my calculation).
  - Fines are rare. The earlier pass found only 1 fine in all sectors in 2025 ([SEPRELAD stats portal](https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml), per the [earlier report](../reports/paraguay-b2.md)).
- **SEPRELAD says private advisers do this work.** Circular 2/2025 bars its own staff from acting as paid advisers on manuals, codes of ethics, risk self-assessments, risk matrices, internal and external audit reports, list-screening mechanisms, and FA, RO, RN and ROS filings. That list is close to a product spec.
- **What the portal leaves undone.** SIRO receives filings. It does not keep the KYC file, score clients, screen lists, log alerts, write the manual or the CI report, or remind anyone of deadlines. The RO can be uploaded as an Excel file with a published field list ([RO Excel spec](https://www.seprelad.gov.py/resoluciones/resoluciones/contenido-archivo-excel-ro-inmobiliarias.pdf)). Software that keeps the deal register can generate that file.
- **Product.** 96 testable requirements follow, each traced to its source. Three limits shape the design:
  - The tool must never file for the client. SIRO has no API, and the owner or board must approve each ROS (art. 7(6)).
  - The ROS draft must not reveal the identity of the CO or the firm (art. 36).
  - Records must outlive a cancelled subscription by 5 years (Ley art. 18).

## Who is obliged

### Real-estate subjects (core market)

| Who | Legal basis | Condition | Supervisor and rulebook |
|---|---|---|---|
| "Las inmobiliarias" | Ley 1015/97 art. 13(k) (text per Ley 6960/2022) ([Ley](https://www.seprelad.gov.py/resoluciones/resoluciones/ley10151997actualizada_.pdf)) | Natural or legal persons who "de manera habitual" carry out activities involving the purchase and sale of real property | SEPRELAD (Ley art. 28.9); Res 201/2020 |
| Agencies, real-estate agents, brokers, commission agents, developers "and other equivalent names" | Res 201/2020 art. 1 ([Res 201](https://www.seprelad.gov.py/resoluciones/resoluciones/res-n201-2020-reglamentacion-para-inmobiliarias.pdf)) | **Habitual** means the person is set up to buy and sell property, whether that is its main or a secondary activity, and **whatever the number or value of deals** (art. 1, footnote 2). There is no size or value threshold. | Same |
| Individual agents and brokers | [Circular 001/2022](https://www.seprelad.gov.py/resoluciones/resoluciones/circular-uif-sepreladsen001-22.pdf) (interpreting Res 201 art. 1 and 42) | Obliged only if they intermediate **independently and with their own structure**. An agent who is an employee (labour contract plus IPS social security) or works exclusively for one firm (exclusive service contract plus VAT invoices to that firm) is not a separate SO. The firm covers them. | Same |
| Firms that only rent out property | Not in Res 201, which covers "compra-venta". [Res 460/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/Resolucion%20N%C2%B0%20460_25%20-%20Se%20autoriza%20la%20implement%20del%20modulo%20BAJA%20DE%20SUJETOS%20OBLIG%20desarrollado%20en%20el%20SIRO.pdf) Annex II 3.1(4) lets a real-estate SO deregister by showing a lease contract and invoice "for those whose only activity is leasing". | Out of scope (my inference from Res 460/2025) | — |

There are **no exemptions by size.** The only reliefs are these:
- In a one-owner firm the owner may be the CO (art. 7(4), 8).
- Low-risk clients below the thresholds may get simplified CDD (art. 22).
- Since July 2026, SEPRELAD may exempt or defer the external audit for a given year on request ([Res 328/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/Res.%20328.26_Excepci%C3%B3n%20de%20auditor%C3%ADa%20externa.pdf)).

**Size of the group.** The real-estate sector is SEPRELAD's largest supervised group. In 2025, 1,451 firms paid the annual SIRO fee, and in 2024 SEPRELAD warned 1,238 of them ([earlier report](../reports/paraguay-b2.md); [Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)).

### Other "no natural supervisor" subjects in the same regime (possible later verticals)

| Sector | Ley art. 13 | Rulebook | Differences from real estate (from the texts I read) |
|---|---|---|---|
| Vehicle importers, dealers and consignment sellers | 13(ñ) | Res 196/2020 ([PDF](https://www.seprelad.gov.py/resoluciones/resoluciones/res-seprelad-n-196-20-automotores.pdf)) | Same structure. CI within 90 days and AE within 180 days (art. 13-14, now amended by Res 328/2026). RO (art. 31) and RN (art. 37). Simplified CDD only up to **15** minimum wages for a single payment, or 20 a year in instalments (art. 22). A trade-in car does not count toward the instalment sum. FA under Res 246/2022. SEPRELAD warned 454 dealers in 2024 (Res 410/2024). |
| Jewels, stones and precious metals | 13(s) | Res 222/2020 | Not read in full (scanned PDF). FA not required: Memoria 2024 lists FA only for real estate, cars, remitters and NPOs. |
| Pawn shops | 13(m) | Res 265/2007 and 267/2007 | Old rules. SEPRELAD is reviewing them under a GAFILAT action item ([Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)). |
| Art, antiques, philately and numismatics | 13(t) | Registration under Res 158/2023 | No sector rulebook found (unverified). |
| Cash-in-transit; safe-deposit boxes | 13(u) and SEPRELAD resolutions | Res 208/2014 (amended by Res 111/2026); Res 220/2014 (amended by Res 215/2026) | Amendments in 2026. Contents not read. |
| Non-profits (OSFL) | 13(l) | Separate rules; FA form under Res 247/2020 | Fee tiers by segment (Res 56/2026). Low ability to pay (earlier report). |

## Duty-by-duty table

The table covers real estate. "Res 201" articles refer to the annex rulebook ([PDF](https://www.seprelad.gov.py/resoluciones/resoluciones/res-n201-2020-reglamentacion-para-inmobiliarias.pdf)).

**Penalty column.**
- **Default:** a breach of the rulebook is a breach of the Ley (Res 201 art. 39). It can draw any of the Ley art. 24 sanctions ([Ley](https://www.seprelad.gov.py/resoluciones/resoluciones/ley10151997actualizada_.pdf)).
  - **Legal person:** (a) warning note; (b) public reprimand; (c) fine up to 5,000 minimum wages; (d) fine up to 50% of the operation; (e) suspension up to 1 year; (f) revocation.
  - **Natural person, including the owner, CO and staff:** (a) warning note; (b) public reprimand; (c) fine up to 500 minimum wages; (d) fine of 1-10% of the operation; (e) removal from office with a 3-10 year ban; plus other measures.
- **"Practice":** what SEPRELAD actually does for missed filings, namely a warning note and remedial notes sent to the e-mail registered in SIRO ([Res 681/2024](https://www.seprelad.gov.py/resoluciones/resoluciones/res-n681-24.pdf)).

| # | Duty | Legal basis | What must exist or be done | Frequency or deadline | Evidence an inspector or auditor asks for | Penalty |
|---|---|---|---|---|---|---|
| 1 | Register as an SO | Res 218/2011 and 375/2016; [Res 483/2021](https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-483-21-siro.pdf) Annex II; [Res 258/2023](https://www.seprelad.gov.py/resoluciones/resoluciones/resn258-23.pdf); [Res 203/2024](https://www.seprelad.gov.py/resoluciones/resoluciones/ResolucionN203_2024.pdf) | Pre-registration form in SIRO. Fields include: RUC, name, address, e-mail, department, city, service type, activity, years in the sector, employees, annual income, assets, liabilities, equity, partners and shares, directors, and CO data. Attach PDFs: request note; ID; RUC certificate; for companies, the bylaws, legal-representative mandate, **BO certificate**, municipal trade licence, a sworn list of the banks and co-ops used, and the fee receipt. Scans without notarisation have been accepted since 2024. | Before operating (no explicit deadline found). Answer SEPRELAD's queries within **30 calendar days** or the request lapses (Res 258/2023). The QR registration certificate is issued once the process ends. | Registration certificate with QR; [public RUC lookup](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml) | Default. In 2024, 532 of 2,042 requests were annulled ([Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)). |
| 2 | Pay registration fee and annual SIRO fee (canon) | [Res 7/2018](https://www.seprelad.gov.py/resoluciones/resoluciones/res%2007.pdf) (registration: 3 jornales mínimos for real estate); [Res 56/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/RESOLUCION%20N%C2%B0%2056.pdf) (canon) | Canon 2026: Gs 331,000 for real estate (also cars, jewellers and notaries). The payment slip is downloaded in SIRO "Cuentas". | Yearly. 2% surcharge per month late (Res 56/2026 art. 6). | Payment receipts. An up-to-date canon is needed to deregister (Res 460/2025). | Surcharge; no deregistration while in debt |
| 3 | Keep SIRO data current and confirm yearly | [Res 435/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/435_2026.pdf) art. 2-7 | Update or confirm general, registration and contact data, including legal representatives, partners or shareholders and board, as SIRO enables them. The confirmation is a sworn declaration. | **Annually, even with no change.** Any change within **5 business days**. Rolled out gradually by sector. | SIRO record | Restricted SIRO functions until fixed (art. 7), plus Default |
| 4 | Top authority (owner or board) responsibilities | Res 201 art. 7 | Weigh AML risk when setting objectives. Approve and review policies. Approve the manual and code. Appoint the CO, or the owner takes the role. Give the CO resources. **Approve each ROS.** | Ongoing | Board minutes or owner approvals | Default |
| 5 | Appoint a CO (and branch "Encargados") | Res 201 art. 8-9 | Senior-level, autonomous, no conflicting duties. The owner may be CO in a one-person firm. Branches may have an Encargado. The CO has 15 functions, including an **annual report to the top authority** (art. 9(11)) and a register of unusual operations not reported, with reasons (art. 9(9)). | Ongoing | Appointment act; CO annual report; CO register | Default; natural-person sanctions for the CO |
| 6 | Notify CO appointment, changes and removal | Res 201 art. 10 | Report: name, ID type and number, nationality, office address, phone and e-mail, home address **with a sketch map and a utility bill**, and a CV. SEPRELAD may object within 10 business days. Name an interim CO during absences (max 6 months) and a vacancy (max 60 days). SEPRELAD assigns confidential CO codes. | **5 business days** after appointment, any change, or removal | Notification proof (SIRO CO module) | Default |
| 7 | Risk self-assessment | Res 201 art. 3-4 | A documented assessment of client, product or service, channel and geography risks, using the National Risk Assessment (ENR). Write extra internal indicators. Keep the report and the method document. | At least **every 2 years**; method checked at least **every 4 years** | Assessment report and method document | Default |
| 8 | New product, technology or region assessment | Res 201 art. 5-6 | A written assessment **before** launching a new product or technology, or changing a product's risk. A written report before entering new geographic zones. | Event-driven | Pre-launch assessment documents | Default |
| 9 | AML manual | Res 201 art. 11 and Annex I | Contents: general aspects, roles, risk mechanisms (factors, method, CO role on new products, KYC method, red flags, alert analysis), recording and reporting procedures, and references. Proposed by the CO and approved by the top authority. **Signed acknowledgement by every director, manager, employee and collaborator.** Keep it updated. | On adoption and on rule changes | Approved manual; acknowledgements | Default. Inspectors ask for the manual first ([Ferrere on Res 36/21](https://ferrere.com/es/novedades/inspecciones-aleatorias-de-seprelad-bajo-resolucion-36-21/)). |
| 10 | Code of ethics and conduct | Res 201 art. 12 | AML principles, breaches treated as infractions, graded internal sanctions, signed acknowledgements, a record of internal sanctions. **Associated firms may adopt one shared code.** | On adoption | Code; acknowledgements; internal sanctions log | Default |
| 11 | Annual internal-control evaluation, sent to SEPRELAD | Res 201 art. 13 and Annex II; [Res 202/2023](https://www.seprelad.gov.py/resoluciones/resoluciones/resn202-23.pdf) | Yearly evaluation, which the CO may do. The report has the 12 Annex II items: KYC actions, risk results, manual and code compliance and sanctions, approvals, RO quality check, new red flags, **monthly statistics of unusual operations and ROS with amounts**, manual changes, training stats, training updates, ended third-party KYC contracts, other. | Within **90 days** of fiscal-year end, i.e. **30 March** ([Circular 2/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/CIRCULAR%202-2025.pdf)) | SIRO "Presentado" status; the PDF | Practice: warning (Res 681/2024) |
| 12 | Independent external audit | Res 201 art. 14 as rewritten by [Res 328/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/Res.%20328.26_Excepci%C3%B3n%20de%20auditor%C3%ADa%20externa.pdf); [Res 411/2013](https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-4112013.pdf) and 035/2014 (audit standards); Res 218/2020 (auditor register) | The auditor must be on SEPRELAD's register. Scope (a)-(g): policy effectiveness, risk method, high-risk parameters, **samples of client files**, training, recommendations, follow-up of past findings. Under Res 411/2013 auditors also test the IT tools and the sheet used to detect unusual operations (art. 8). | Annual. Report to SEPRELAD within **180 days**, i.e. **30 June**. Exemption or deferral for one year only if requested **before** the deadline, with documents. A request does not stop the clock. | SIRO upload naming the registered auditor; auditor's report | Practice: warning (Res 681/2024) |
| 13 | Training programme and records | Res 201 art. 15-16 | Annual programme proposed by the CO and approved by the top authority, for directors, staff and outsourced staff. 10 minimum topics. Records of date, topics and attendees, **kept 5 years**. Internal sanctions for skipping. Since Res 174/2023 art. 6, outside trainers giving "academic" AML courses must train at SEPRELAD's CECAD for certification ([Res 174/2023](https://www.seprelad.gov.py/resoluciones/resoluciones/resn174-23.pdf)). | Annual | Programme; attendance records | Default. Inspectors ask for proof of training (Ferrere). |
| 14 | CDD on every client | Ley art. 14-15; Res 201 art. 17-19 | Identify and verify the client and BO. Understand the purpose. Build a profile. Monitor. Verification may be deferred up to **60 days** if the risk policy allows. | At onboarding and throughout | KYC files | Default |
| 15 | Identification form and supporting documents | Res 201 art. 20-21 | A form per client, updated per the CDD regime or on relevant change. **Natural person:** name, ID type and number, nationality, address, phone and e-mail, RUC or a non-taxpayer certificate, declaration of origin of funds, proof that income matches the operations. **Legal person:** name, RUC, deed of incorporation and amendments, address, phone and e-mail, powers, BO and legal representatives, origin of funds, income proof. | Onboarding and update | Completed forms; documents | Default |
| 16 | Simplified CDD (optional) | Res 201 art. 22 | Only if the risk is assessed low and there is no suspicion, **and** either a single payment of 150 minimum wages or less in the last 12 months, or instalments of 20 minimum wages a year or less. Reduced fields: 5 for natural persons, 6 for legal persons. | Per client | Risk assessment justifying it | Default |
| 17 | Enhanced CDD | Res 201 art. 24 | **Mandatory** for non-residents, trusts, non-profits and PEPs, and for others the firm identifies. Stronger measures. **Acceptance and continuation approved at the highest management level.** | Per client, ongoing | Approval records; extra checks | Default |
| 18 | Refuse or exit when CDD fails | Ley art. 15; Res 201 art. 26 | Do not start, do not execute, or end the relationship. Consider a ROS. If CDD would tip off the client, file the ROS without doing CDD. | Event | Decision record | Default |
| 19 | Client profile and risk score | Res 201 art. 27-28 and Annex V | A profile from purpose, operations, amounts and activity. A **scoring system applied to all clients**, at minimum on: person type, legal-entity type, occupation, SO status, CDD regime, PEP, product, channel, currency, cash or bank payment, country and locality of birth or incorporation and of residence, and volume. Refresh periodically; the firm sets the period. | Onboarding and periodic | Score in each client file; method | Default |
| 20 | Monitoring, alerts and unusual-operation register | Res 201 art. 29 and Annex III | Alert rules approved by the top authority and kept confidential, with a documented method. A register of operations analysed: (a) operation ID, (b) date, time and source of alert, (c) steps taken, (d) reasoned final decision with date and time. Classify within **30 calendar days** of the alert. Annex III gives 14 real-estate red flags. | Continuous | Alert register; support files | Default |
| 21 | Reliance on third parties | Res 201 art. 30 | Immediate access to copies, and a **sworn declaration** from the intermediary. The SO stays responsible. | Per arrangement | Declarations; contracts | Default |
| 22 | Register **all** operations (RO register) | Ley art. 17; Res 201 art. 31 | Every operation, regardless of amount, with full client data. | Continuous | Operations register | Default |
| 23 | Record retention | Ley art. 18; Res 201 art. 20, 32 | Operations: **5 years** from the operation or the end of the relationship. CDD records, files, correspondence and analyses: **5 years** after the relationship ends. Includes the reasons why an unusual operation was not reported. | Continuous | Archive | Default |
| 24 | ROS | Ley art. 19; Res 201 art. 33-35 | An unusual operation may be analysed for up to **90 calendar days**. If suspicious, file **within 24 hours** of that decision. Minimum content: people involved (CDD data), operations (dates, amounts, currencies, accounts, place, attachments), the reasons, other information. Answer SEPRELAD's extra requests within **4 business days**. A returned ROS must be fixed within **15 business days** or it counts as not filed. | Event | SIRO receipt; internal file | Default. Missing ROS was cited in Res 681/2024. |
| 25 | Confidentiality and no tipping-off | Ley art. 20; Res 201 art. 33, 36; [Circular 01/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/circular0125.pdf) | Only the top authority, the CO and their assistants may know of a ROS. The ROS must not identify the CO or the SO, except through SEPRELAD codes. ROS and ITC requests are reserved. | Always | Access controls | Default |
| 26 | Negative report (RN) | Res 201 art. 37; [Res 326/2022](https://www.seprelad.gov.py/resoluciones/resoluciones/resn326-22-implementacionsiro-r-n.pdf) | Declare "no suspicious operations detected" for any quarter with no ROS. | Res 201 says within 10 business days after the quarter. Res 326/2022 sets days **1-10** of Jan, Apr, Jul and Oct. | SIRO receipt | Practice: warning (Res 681/2024) |
| 27 | Periodic operations report (RO) | Res 201 art. 31; [Res 003/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/resol-03-2025-ro-inmobiliarias.pdf) | Report each purchase, sale and intermediation with property, operation, buyer and seller data (see Filing channels). One-off backlog of all operations active at 31 Dec 2024, due by 21 Feb 2025. | Quarterly, days **11-20** of Jan, Apr, Jul and Oct, for the previous quarter (art. 4) | SIRO receipt | Default. The RO was among the obligations checked in 2024 (Memoria 2024). |
| 28 | Annual information form (FA) | [Res 165/2022](https://www.seprelad.gov.py/resoluciones/resoluciones/res-n-165-22-formulario-anualso-sector-inmobiliario.pdf) art. 1 and [annex](https://www.seprelad.gov.py/resoluciones/resoluciones/anexos-res-n-165-22-formulario-anualso-sector-inmobiliario.pdf) | Previous fiscal year: counts and amounts by operation type, clients (national, foreign, PEP, total), number and value of operations, cash versus other payment, % of funds in and out through cash versus the financial system, and the departments where the firm operates. Sworn declaration. Feeds SEPRELAD's risk matrix. | **31 May** | SIRO "ticket de cumplimiento" | Practice: warning (Res 681/2024) |
| 29 | PEP identification and EDD | [Res 50/2019](https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-50-19-por-el-cual-se-aprueba-el-reglamento-de-identificacion-de-personas-expuestas-politicamente.pdf) art. 1-8 | PEP lists: foreign (a-j), international organisations, national (a-z, including mayors, councillors, judges, prosecutors, party candidates and customs chiefs). PEPs by link: relatives to the 2nd degree by blood or marriage; entities in which a PEP holds 10% or more; partners and managers of such entities. **Signed PEP sworn declaration** from each client at the start, after informing them of the rule. Senior approval, source of wealth and funds, enhanced monitoring. PEP treatment continues for **2 years** after leaving office. Keep records of the checks. | Onboarding and on change | PEP declarations; check records | Default |
| 30 | BO identification | Ley art. 15(c), 16; Res 436/2011; [Res 202/2020](https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-202-2020.pdf) | For corporate clients, require the **BO register certificate** (Registro de Beneficiarios Finales, Ministerio de Hacienda) at onboarding and on updates. | Onboarding and update | Certificate copy | Default |
| 31 | Screen lists and freeze | Res 201 art. 38 and Annex IV; Ley 6419/2019; [Decreto 5920/2021](https://www.seprelad.gov.py/resoluciones/resoluciones/Decreto-5920-2021.pdf) art. 10, 19-20 | Screen the **whole client base, BOs and operations** against the UN Security Council lists, FATF high-risk lists, **OFAC**, **the EU terrorist list** and others SEPRELAD names. On a UN match, freeze "immediately and without delay" and report. SEPRELAD publishes list changes by circular and on its website. | Onboarding, each operation, and on list changes | Screening logs; freeze report | Default |
| 32 | Answer authority requests, including ITC | Ley art. 22; Res 201 art. 41; [Res 321/2022](https://www.seprelad.gov.py/resoluciones/resoluciones/575-resolucion-n321-2022.pdf) and [379/2022](https://www.seprelad.gov.py/resoluciones/resoluciones/resoln379-2022-itc.pdf) | Have a procedure. ITC requests are answered in SIRO. JSON attachments are mandatory only for banks and finance companies. | Per request (4 business days for ROS follow-ups) | Response log | Default |
| 33 | Deregister on ceasing activity | [Res 460/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/Resolucion%20N%C2%B0%20460_25%20-%20Se%20autoriza%20la%20implement%20del%20modulo%20BAJA%20DE%20SUJETOS%20OBLIG%20desarrollado%20en%20el%20SIRO.pdf) Annex II | SIRO "Baja" module. A note to SEPRELAD's head as a sworn declaration, an RUC certificate showing the activity change or closure, ID, and, for rental-only firms, a lease contract and invoice. The canon must be paid up. | Event | Approval of deregistration | Until deregistered, all duties continue (my inference) |

### Notes on thresholds, lists and data rules

- **Minimum wage used for thresholds.** Gs 3,044,000 a month from 1 July 2026 ([Decreto 6225/2026](https://impuestospy.com/impuestos/decreto-n-6225-2026/)). Simplified-CDD ceilings: 150 × = Gs 456,600,000 (single payment in 12 months) and 20 × = Gs 60,880,000 a year (instalments). Fine ceilings: 5,000 × = Gs 15.22bn for firms and 500 × = Gs 1.52bn for individuals. All are my calculations. The wage changes each July, so the product must store it as a dated parameter.
- **Geographic risk zones are set by SEPRELAD.** The FA instructions set three zones ([Res 165/2022 annex](https://www.seprelad.gov.py/resoluciones/resoluciones/anexos-res-n-165-22-formulario-anualso-sector-inmobiliario.pdf)):
  - **Zone 1, high risk:** Alto Paraná, Itapúa, Misiones, Ñeembucú, Central and Asunción, Canindeyú, Amambay, Concepción, San Pedro.
  - **Zone 2, medium:** Presidente Hayes, Boquerón, Alto Paraguay.
  - **Zone 3, low:** Caaguazú, Caazapá, Cordillera, Guairá, Paraguarí.
- **PEP sources.** SEPRELAD points to the civic list www.aquieneselegimos.org.py and lets each SO choose other sources, official or private (same annex; Res 50/2019 art. 5).
- **Personal data law (coming).** Ley 7593/2025 was promulgated on 27 November 2025. It has a 2-year transition, with full effect expected around November 2027 ([La Nación](https://www.lanacion.com.py/politica/2025/11/28/nueva-ley-de-datos-personales-refuerza-la-privacidad-sin-recortar-la-transparencia-publica/); [Infonegocios](https://infonegocios.com.py/default/ley-de-proteccion-de-datos-personales-en-paraguay-que-cambia-para-su-empresa); [IAPP](https://iapp.org/news/a/paraguay-da-un-paso-hacia-un-marco-moderno-de-protecci-n-de-la-privacidad)). Its main points:
  - international transfers need adequate safeguards unless the destination is declared adequate;
  - controllers must notify security incidents;
  - contracts with processors need set clauses;
  - data subjects get rights of access, rectification, erasure, objection and portability.

  Article numbers and the breach deadline are (unverified). A vendor hosting outside Paraguay will be a processor making an international transfer (my inference).

## Filing channels and formats

All filings go through SIRO with the firm's own user credentials. Circular 2/2025 lists SIRO as the channel for every periodic report ([Circular 2/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/CIRCULAR%202-2025.pdf)).

There is **no public API**. The only bulk formats are the RO Excel upload for real estate and JSON uploads for high-volume sectors ([Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)). SEPRELAD runs free SIRO training, for example a Zoom session on 12 Oct 2026 ([SEPRELAD news](https://www.seprelad.gov.py/?p=4442)).

| Filing | Channel and format | Window | Proof of filing | Source |
|---|---|---|---|---|
| Registration | SIRO > "Registrarse" pre-registration form, plus PDF attachments (scans accepted) | Before operating; answer queries in 30 calendar days | QR certificate | Res 483/2021, 258/2023, 203/2024 |
| CO appointment or change | SIRO CO module (self-service since 2024, per Memoria 2024) | 5 business days | SIRO record | Res 201 art. 10 |
| Annual data confirmation | SIRO "update/confirm data" function | Yearly, plus 5 business days after any change | SIRO record (sworn) | Res 435/2026 |
| ROS | SIRO ROS module. SEPRELAD can return a ROS through SIRO (Res 384/2025, title only read). | 24 h after deciding it is suspicious | SIRO receipt | Res 201 art. 33-35 |
| RN | SIRO | Days 1-10 of Jan, Apr, Jul, Oct | SIRO receipt | Res 326/2022 |
| RO | SIRO RO module: **web form operation by operation**, or **mass upload of the "Formulario RO Inmobiliario" Excel file** | Days 11-20 of Jan, Apr, Jul, Oct | SIRO receipt | Res 003/2025 |
| FA | SIRO > Formulario Anual. The system pre-fills the "Generado" state; the firm edits it ("Modificado"), then submits ("Presentado") with a sworn declaration. | By 31 May | Printable "ticket de cumplimiento" | Res 165/2022 annex |
| CI report | SIRO > Obligaciones > Informes. Choose the period, add an optional comment (250 characters), attach the file, and it becomes "Presentado". SEPRELAD may revert it to "Generado"; the earlier upload stays on file. | By 30 March | SIRO status | [Res 202/2023 manual](https://www.seprelad.gov.py/resoluciones/resoluciones/manual-de-usuario-remision-informe-cumplimiento-s-o.pdf) |
| AE report | Same screen. **Pick the auditor from SEPRELAD's register.** | By 30 June | SIRO status | Same; Res 201 art. 14 |
| AE exemption or deferral request | "Canales habilitados por la SEPRELAD", with supporting documents. The exact channel is (unverified). | Before 30 June | SEPRELAD decision | Res 328/2026 art. 2-3 |
| ITC replies | SIRO ITC module | Per request | SIRO | Res 321/2022 |
| Canon payment | Payment slip downloaded in SIRO "Cuentas" | Yearly (date in the slip) | Receipt | Res 56/2026 art. 2 |
| Deregistration | SIRO "Baja de Sujetos Obligados" module | Event | SEPRELAD e-mail | Res 460/2025 |

**RO data fields** (Res 003/2025 annex; Excel spec [contenido-archivo-excel-ro-inmobiliarias.pdf](https://www.seprelad.gov.py/resoluciones/resoluciones/contenido-archivo-excel-ro-inmobiliarias.pdf)):
- **Property:** type (URBANO or RURAL); classification (LOTE O TERRENO, VIVIENDA UNIFAMILIAR, CONDOMINIO, COCHERA, OFICINA O COMERCIO, ESTABLECIMIENTO AGRÍCOLA, ESTABLECIMIENTO GANADERO, DEPÓSITO, DEPARTAMENTO, OTRO); cadastral account (ctaCteCatastral); matrícula-finca (for sales); building name; floor; city, department and district (SEPRELAD city code table).
- **Operation:** type (COMPRA, VENTA, INTERMEDIACIÓN); date as `dd-MM-yyyy`; currency (ISO 4217); modality (CRÉDITO, CONTADO); payment form (EFECTIVO, TARJETA DE DÉBITO, TRANSFERENCIA BANCARIA, COMPENSACIÓN); amount delivered, financed amount, number of instalments, compensation amount, and total in Gs.
- **Buyer and seller, each:** person type (FISICA, JURÍDICA); document type (CI, PA, RUC, CRP, CRT, TDEF, CRC); document number; name; nationality and residence (ISO 3166-1 alpha-3); city code; economic activity (SEPRELAD table); PEP (SI/NO); landline (9 digits); mobile (10 digits).
- SEPRELAD's IT and analysis directorates decide which fields are optional or mandatory, so the list is "not exhaustive" (Res 003/2025 annex).

**FA data fields** (Res 165/2022 annex):
- Operations in the year, in number and Gs: own purchases, own sales, sales for third parties, commissions, other. Use 0 when none.
- Clients: national, foreign, PEP, total.
- Total number of operations and total Gs.
- Total cash received; total received by other means.
- % of inflows by cash versus the financial system, and % of outflows (property purchases) by cash versus the financial system.
- The departments where the firm is present, mapped to the risk zones.

## Supervisors and enforcement evidence

**Supervisor.** SEPRELAD's Dirección General de Supervisión y Regulaciones (DGSR) supervises all SOs with no natural supervisor (Ley art. 28.9). It uses a risk-based supervision manual (Res 239/2020) and runs a SIRO "Supervision" module for on-site and off-site inspections ([Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)). Sanctions follow the administrative-proceedings rule Res 31/2019 (title only read; [PDF](https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion_20261005_133909_dUx1fKzZf8UsoDEoa7Fd.pdf)).

**What SEPRELAD checks most: objective, SIRO-visible filings.**
- In 2024 the DGSR checked 2,043 SOs under Res 196/2020, 201/2020, 165/2022, 246/2022, 326/2022 and 202/2023. The checks covered RN, RO, FA, AE and CI ([Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)).
- It warned **1,692 SOs**: 1,238 real-estate firms (Res 681/2024, for FY2023) and 454 car dealers (Res 410/2024, for FY2022) (same source).
- Res 681/2024 treats a missed filing as **"incumplimiento objetivo"** proven by SIRO data, with no disputed facts. It orders warning notes plus **remedial notes**, sent by e-mail to the address registered in SIRO ([Res 681/2024](https://www.seprelad.gov.py/resoluciones/resoluciones/res-n681-24.pdf)). A firm with a stale SIRO e-mail may not even see the warning.

**Filing gaps (adoption).**
- In 2024 only 526 real-estate firms sent the FA ([Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)), against about 1,451 fee payers ([earlier report](../reports/paraguay-b2.md)).
- In 2025 real-estate filers sent 492 external-audit and 683 internal-evaluation reports (earlier report, from the [stats portal](https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml)).

**Inspections.** Random inspections have run since Q3 2021 under Res 36/21. Inspectors ask for the manual, the CO appointment and proof of training ([Ferrere](https://ferrere.com/es/novedades/inspecciones-aleatorias-de-seprelad-bajo-resolucion-36-21/)).

**Fines.**
- GAFILAT found that no economic sanctions had been applied to real-estate firms, and judged the sanctions regime not dissuasive ([GAFILAT MER 2022, paras. 599-602](https://www.pj.gov.py/descargar/ID1-148_informe_de_evaluacion_mutua_de_paraguay_2022.pdf), cited from the earlier report).
- In 2025 there was 1 fine across all SEPRELAD sectors, on a car dealer and under appeal. None so far in 2026 (stats portal, per the earlier report).

**Why a warning still matters.** It is a formal sanction under Ley art. 24(1)(a) and 24(2)(a). SEPRELAD keeps a register of sanctioned persons (art. 28.8). Prior conduct and repeat offences are aggravating factors (art. 25(b), (f)) ([Ley](https://www.seprelad.gov.py/resoluciones/resoluciones/ley10151997actualizada_.pdf)). The new Res 435/2026 adds a practical penalty: SIRO functions can be restricted.

**Auditors as quasi-inspectors.**
- The external auditor must follow SEPRELAD's minimum standards (Res 411/2013, made mandatory by Res 035/2014).
- Those standards require an independence letter, a questionnaire on the prevention system, document review on site, interviews, review of client-file samples, and **testing of the IT systems and the spreadsheet used to detect unusual operations** ([Res 411/2013, Annex A, art. 1-9](https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-4112013.pdf)).
- SEPRELAD's public lookup shows each auditor's registration status, resolution number and expiry date ([lookup](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml); Memoria 2024).

**Private help is expected.** Circular 2/2025 point 3 forbids SEPRELAD officials to charge for or provide "gestoría, asesoramiento externo", or to recommend advisers, for the manual, code, self-assessment, risk matrix, audit reports, list-screening mechanisms and the four filings ([Circular 2/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/CIRCULAR%202-2025.pdf)). SEPRELAD does not endorse vendors. A product cannot claim SEPRELAD approval.

## Regional differences

- **There is no regional variation in the law.** Ley 1015/97 and the SEPRELAD resolutions apply nationwide. No departmental or municipal AML rules were found. One supervisor covers the whole country.
- **Geography enters through risk scoring.** SEPRELAD's FA instructions class departments into three risk zones (see Notes above). The border departments (Alto Paraná, Itapúa, Amambay, Canindeyú) and Central/Asunción are in the high-risk zone ([Res 165/2022 annex](https://www.seprelad.gov.py/resoluciones/resoluciones/anexos-res-n-165-22-formulario-anualso-sector-inmobiliario.pdf)). Res 201 Annex V also requires national geographic differences in client scoring.
- **Local documents.** Registration asks for the municipal trade licence (patente), so it varies by municipality (Res 375/2016; Res 483/2021).
- **Outreach outside Asunción.** In 2024 SEPRELAD ran 27 SO training events in 14 cities in Alto Paraná, Itapúa, Caaguazú, Guairá, Misiones, Canindeyú, Concepción, Amambay and Boquerón ([Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)).
- **Language.** All texts and SIRO are in Spanish. SEPRELAD's letterhead adds Guaraní ("Viru ha Mba'erepy Ipoti'ỹva Jejokorã"), but no Guaraní forms were found.

## Upcoming changes

| Change | Status | Effect on the product | Source |
|---|---|---|---|
| External-audit exemption or deferral | In force since July 2026 | Add a request workflow before 30 June for inactive or low-volume firms. The first real use is for the FY2026 report due 30 June 2027 (my inference). | [Res 328/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/Res.%20328.26_Excepci%C3%B3n%20de%20auditor%C3%ADa%20externa.pdf) |
| Annual SIRO data confirmation | Approved Aug 2026; gradual rollout by sector | Add a yearly reminder and a change-detection prompt (5 business days) | [Res 435/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/435_2026.pdf) |
| Personal data law Ley 7593/2025 | Promulgated 27 Nov 2025; full effect about Nov 2027; implementing decree pending | Processor contract, transfer safeguards, breach notices, data-subject rights | [La Nación](https://www.lanacion.com.py/politica/2025/11/28/nueva-ley-de-datos-personales-refuerza-la-privacidad-sin-recortar-la-transparencia-publica/); [IAPP](https://iapp.org/news/a/paraguay-da-un-paso-hacia-un-marco-moderno-de-protecci-n-de-la-privacidad) |
| National Risk Assessment ENR 2025 | Industry form in SIRO closed 24 Sep 2025; results not seen | Res 201 art. 3 and 16 require using the ENR. Templates must be updated when it is published. | [SEPRELAD notice](https://www.seprelad.gov.py/?p=3259) |
| GAFILAT follow-up and 5th round | Paraguay is in enhanced follow-up after its 2022 evaluation, with priority actions running to 2028 (search snippet). The 5th-round date is (unverified). | Pressure to update sector rules. Res 201 is 6 years old. | [Hoy, Oct 2024](https://www.hoy.com.py/nacionales/2024/10/10/ministra-de-seprelad-detalla-evaluacion-de-gafilat-y-su-implicancia) |
| Rule updates in other sectors | Pawn-shop rules under review; cash-in-transit and safe-deposit rules amended in 2026 (Res 111/26, 215/26) | Templates for later verticals | [Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf); [SEPRELAD register](https://www.seprelad.gov.py/?page_id=1617) |
| New SIRO modules and forms | Car-dealer risk matrix being updated with IMF help; RO forms are being added sector by sector | Watch for format changes in the RO Excel and FA | [Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf) |
| Real-estate brokerage licensing law (ACIP) | Proposed; not enacted | Could add a licence register to KYC of agents (unverified) | Earlier report (Infonegocios) |
| Minimum wage | Reset every July | Thresholds and fine ceilings change. Keep them as a dated parameter. | [Decreto 6225/2026](https://impuestospy.com/impuestos/decreto-n-6225-2026/) |

## PRODUCT REQUIREMENTS

Each requirement is testable. "Basis" gives the source. "Res 201" = SEPRELAD Res 201/2020 annex; "Ley" = Ley 1015/97 consolidated. Other rules are linked in the sections above.

General design limits (apply to all):
- **G1.** The product prepares and records. It never submits to SIRO and never stores SIRO passwords. Test: there is no field for SIRO credentials, and every filing ends with "export + mark as filed + attach SIRO receipt". Basis: SIRO has no public API; filings are sworn declarations by the SO (Res 165/2022 annex; Res 435/2026 art. 5); the top authority approves each ROS (Res 201 art. 7(6)).
- **G2.** All user-facing text and generated documents are in Spanish (Paraguay). Basis: all SEPRELAD texts and SIRO are in Spanish.
- **G3.** Every legal parameter is a dated, versioned setting, not a constant: minimum wage, thresholds, deadlines, zones, enums. Test: changing the minimum wage effective 1 July recalculates thresholds only for operations on or after that date. Basis: Decreto 6225/2026; Res 201 art. 22.

**A. Scope, set-up and registration**

1. The onboarding wizard must ask whether the firm buys, sells or intermediates property habitually, and must state that number and value of deals do not matter. Test: a firm with one sale a year is classed "obliged". Basis: Res 201 art. 1, footnote 2.
2. The wizard must ask whether each agent works independently with their own structure, or as an employee or exclusive contractor of a firm. Only independent agents are flagged as separate SOs. Test: an agent with IPS registration under agency X is "covered by X". Basis: Circular 001/2022.
3. The wizard must flag "rental-only" firms as likely out of scope and point to the Res 460/2025 deregistration route. Test: rental-only answers show the deregistration checklist. Basis: Res 460/2025 Annex II 3.1(4) (my inference on scope).
4. The system must store the firm's sector rulebook (real estate Res 201/2020 at launch; car dealers Res 196/2020 later) and load sector parameters from it. Test: switching to "automotores" changes the single-payment simplified-CDD ceiling from 150 to 15 minimum wages. Basis: Res 201 art. 22; Res 196 art. 22.
5. The system must produce a registration pack: a pre-filled copy of every SIRO pre-registration field (Res 483/2021 Annex II) and a document checklist for natural and legal persons. The checklist includes the BO certificate, municipal licence, sworn statement of banks and co-ops used, and fee receipt. Test: a legal-person pack lists 9 documents; a natural-person pack lists 5. Basis: Res 483/2021 Annex II §2-3; Res 203/2024 (scans allowed).
6. After a registration request, the system must track SEPRELAD queries with a 30-calendar-day countdown and warn at day 20. Test: a query logged on day 0 shows "lapses on day 30". Basis: Res 258/2023 art. 1.
7. The system must store the SIRO registration certificate (QR) and registration date, and show registration status on the dashboard. Basis: Res 483/2021 §4.
8. The system must keep a record of SIRO general and contact data (legal representatives, partners or shareholders, board, CO, e-mail) and must: (a) prompt yearly confirmation; (b) when any of these changes in the product, raise a 5-business-day task "update SIRO". Test: editing the board on day 0 creates a task due on business day 5. Basis: Res 435/2026 art. 2, 4.
9. The system must warn when the firm's SIRO contact e-mail has not been confirmed in the last 12 months, because SEPRELAD sends warnings there. Basis: Res 681/2024 art. 3; Res 435/2026.
10. The system must track the canon: amount per year (Gs 331,000 in 2026 for real estate), payment date and receipt, and must show the 2% monthly surcharge if overdue. Basis: Res 56/2026 art. 1, 6.

**B. Governance and compliance officer**

11. The system must record the top authority (owner or board) and require its approval, with name, role, date and electronic sign-off, for: policies, manual, code, CO appointment, training programme, alert parameters, EDD acceptances and every ROS. Test: a ROS cannot reach "ready to file" without a top-authority approval. Basis: Res 201 art. 7, 11, 12, 15 (footnote 10), 24, 29(4).
12. The system must allow "owner as CO" only when the firm is a one-owner firm. Test: a legal entity with several partners cannot select "owner as CO" without a warning. Basis: Res 201 art. 7(4), 8.
13. The system must generate the CO notification pack with the 7 required items (name, ID type and number, nationality, office address, phone and e-mail, home address with sketch map and utility bill, CV), and start a 5-business-day countdown on appointment, any change of those data, or removal. Test: changing the CO's phone creates a task due in 5 business days. Basis: Res 201 art. 10.
14. The system must track a 10-business-day SEPRELAD objection period after a CO notification, and show "deemed accepted" after it. Basis: Res 201 art. 10 and footnote 7.
15. The system must support an interim CO and enforce limits: absence of 6 consecutive months or less, vacancy of 60 calendar days or less, with alerts at 5 months and 45 days. Basis: Res 201 art. 10.
16. The system must allow branch "Encargados de Cumplimiento" with documented activity logs. Basis: Res 201 art. 8.
17. The system must generate the CO's annual management report to the top authority, built from system data. Basis: Res 201 art. 9(11).
18. The system must store the confidential CO code assigned by SEPRELAD and use it in place of the CO's name in all SEPRELAD-bound drafts. Basis: Res 201 art. 10, 36.

**C. Risk self-assessment**

19. The risk-assessment wizard must cover at least the four factors (clients; products or services; distribution channels; geographic zones), let the firm add its own indicators, and output a written report plus a separate methodology document. Test: the PDF has one section per factor with text, not only scores. Basis: Res 201 art. 3-4.
20. The wizard must reference the current National Risk Assessment (ENR) and record which version was used. Test: a new ENR version flags all assessments "review needed". Basis: Res 201 art. 3, 16(2).
21. The wizard must pre-load SEPRELAD's department risk zones (Zone 1, 2, 3) as defaults and let the firm adjust them with a reason. Basis: Res 165/2022 annex; Res 201 art. 4(4).
22. The system must schedule a reassessment no later than 24 months after the last approved one, and a methodology review no later than 48 months after. Test: the dashboard shows "overdue" on day 731. Basis: Res 201 art. 3.
23. The system must block "launch" of a new product, technology or channel record until a pre-launch risk assessment is approved. Basis: Res 201 art. 5.
24. The system must require a written zone-entry report before a new office or department is added. Test: adding a branch in Alto Paraná asks for the report. Basis: Res 201 art. 6.
25. All assessments must be versioned, with approval and a read-only history. Basis: Res 201 art. 3 ("debidamente documentadas"); Ley art. 18.

**D. Manual, code of ethics and acknowledgements**

26. The manual generator must produce every Annex I heading (1 general aspects a-f; 2 roles a-c; 3 risk mechanisms a-f; 4 recording and communication a-f; 5 references a). A coverage check must fail if any heading is empty. Basis: Res 201 art. 11 and Annex I.
27. The manual must include the procedure and the person responsible for classifying alerts as unusual operations. Basis: Res 201 art. 29(7) and footnote 14.
28. If parts of the manual sit in other internal documents, the manual must list them and the system must hold them with the same approval trail. Basis: Res 201 Annex I, final paragraph.
29. The code-of-ethics generator must include AML principles, the rule that any breach of the prevention system is an infraction, graded internal sanctions, and the duty of confidentiality. Basis: Res 201 art. 12.
30. The system must offer an "association code" option, so one code is adopted by several member firms, each with its own acknowledgements. Basis: Res 201 art. 12, last paragraph.
31. The system must collect a dated acknowledgement (e-signature or uploaded signed page) of the manual and the code from every director, manager, employee and collaborator, including on each new version. Test: a new manual version resets everyone to "pending". Basis: Res 201 art. 11-12.
32. The system must keep an internal-sanctions log for code or training breaches. Basis: Res 201 art. 12, 15; Annex II(3).
33. When a tracked regulation changes, the system must flag the manual, the code and the training plan "update required" and notify staff after approval. Basis: Res 201 art. 11 and footnote 11.

**E. Client due diligence (KYC)**

34. Every client, buyer or seller, natural or legal, must get a KYC file before an operation can be saved as "completed". Test: an operation with an incomplete client file cannot be closed. Basis: Ley art. 14-15; Res 201 art. 17-18.
35. The natural-person form must capture the 8 general-regime items. Basis: Res 201 art. 21.
36. The legal-person form must capture the 9 general-regime items: name, RUC, deed and amendments, address, phone and e-mail, powers, BO and legal representatives, origin of funds, income proof. Basis: Res 201 art. 21.
37. The system must apply the simplified regime only when **all** of these hold, and show the reason:
    - the risk score is "low";
    - no suspicion flag is set;
    - single-payment total ≤ 150 minimum wages in the last 12 months, **or** instalment total ≤ 20 minimum wages a year.
   It then requires the reduced 5 or 6 fields. Test: a Gs 400m cash sale with no flags is "simplified-eligible". The same sale with an open alert is not. Basis: Res 201 art. 22.
38. The system must force the enhanced regime for non-residents, trusts, non-profits and PEPs, and for any client the firm marks high-risk. It must require top-management approval to accept and to continue. Basis: Res 201 art. 24; Res 50/2019 art. 7.
39. The system must allow deferred verification only if the firm's policy allows it, with a hard limit of 60 days and daily reminders after day 45. Basis: Res 201 art. 19.
40. The system must record CDD failure outcomes (not started, not executed, terminated) and prompt "consider ROS". Where CDD would tip off the client, it must allow "ROS without CDD". Basis: Ley art. 15; Res 201 art. 26.
41. The system must keep a client profile (purpose, nature, expected amounts, activity) and a risk score. It must apply the Annex V minimum criteria to every client and record the date of the next review set by the firm's policy. Test: a client with no score cannot be saved. Basis: Res 201 art. 27-28; Annex V.
42. For third-party intermediaries, the system must store the intermediary's sworn declaration and support an "immediate document request" log. Basis: Res 201 art. 30.
43. Document uploads must keep the original file, upload date, uploader and hash. Basis: Res 201 art. 20 (records that allow easy retrieval).

**F. PEP, beneficial owner and sanctions screening**

44. The system must produce the PEP sworn declaration form for each client, with a summary of Res 50/2019 shown first, and store the signed copy. Test: an operation cannot complete without a signed PEP declaration. Basis: Res 50/2019 art. 6, 8.
45. PEP screening must cover the Res 50/2019 categories and PEPs by link: relatives to the 2nd degree by blood or marriage; entities with 10% or more PEP ownership; partners and managers of those entities. PEP status must continue 2 years after leaving office. Basis: Res 50/2019 art. 1-4, 7.
46. For PEP clients the system must capture the institution, position, start and end dates, source of wealth, source of funds and senior approval, and must apply intensified monitoring. Basis: Res 50/2019 art. 5, 7.
47. For corporate clients the system must require the BO register certificate (Ministerio de Hacienda) at onboarding and at each update, and record the BOs. Basis: Res 202/2020 art. 1-2; Ley art. 15(c), 16.
48. Screening must run against: the UN Security Council consolidated list; the FATF high-risk and increased-monitoring jurisdictions; the OFAC SDN list; the EU terrorist list; and any list SEPRELAD adds. The list set must be editable. Basis: Res 201 Annex IV.
49. Screening must cover the whole client base, BOs, and the counterparties of each operation. It must re-run on every list update and at each new operation. Test: adding a name to the UN list flags an existing client within one list-refresh cycle. Basis: Res 201 Annex IV; Decreto 5920/2021 art. 19-20.
50. Each screening must be logged (date, lists and versions, query, result, reviewer, decision) and kept for 5 years. Basis: Res 50/2019 art. 5 (keep records of checks); Ley art. 18.
51. A confirmed UN-list match must open a "freeze and report immediately" task, block the operation, and generate the communication draft. Basis: Res 201 art. 38; Ley 6419/2019; Decreto 5920/2021 art. 10.
52. The system must allow import of SEPRELAD list circulars, by manual upload or a watched source. Basis: Decreto 5920/2021 art. 10, 19.

**G. Operations register and RO export**

53. Every operation (purchase, sale, intermediation), whatever its amount, must be recorded with all Res 003/2025 annex fields. Test: an operation of Gs 1 is stored and exported. Basis: Ley art. 17; Res 201 art. 31; Res 003/2025 annex.
54. Field values must be validated against SEPRELAD's enums and formats: date `dd-MM-yyyy`, ISO 4217 currency, ISO 3166-1 alpha-3 country, SEPRELAD city and activity codes, phone digit lengths, PEP SI/NO, and the document-type codes. Test: a phone with 8 digits fails validation. Basis: RO Excel spec.
55. The system must export a quarterly "Formulario RO Inmobiliario" Excel file in SEPRELAD's column layout, plus a one-click summary for small firms that key operations by web form. Test: the export opens in SEPRELAD's reference template with no column mismatch (to be tested against the reference file). Basis: Res 003/2025 annex §2; RO Excel spec.
56. The system must keep the city and economic-activity code tables updatable from SEPRELAD downloads, and flag when a newer table is published. Basis: RO Excel spec (linked tables).
57. Amounts must be recorded in the operation currency and in Gs (amount delivered, financed amount, instalments, compensation, total). The FX source and rate must be logged. Basis: Res 003/2025 annex (amounts in Gs).
58. The RO export must mark each quarter "exported", "filed (receipt attached)" or "nil", and keep the exported file. Basis: Res 003/2025 art. 4.

**H. Monitoring, unusual operations and ROS**

59. The system must ship the 14 Annex III real-estate red flags as configurable rules. Examples: price well below market; successive quick resales; mass purchases; purchases for minors; mostly cash payment; deposits then cancellation. The top authority must approve the rule set, and it must be hidden from users without the CO role. Basis: Res 201 art. 29(1)-(4); Annex III.
60. Each alert must create an entry in the analysis register with: operation ID; date, time and source of the alert; measures taken; reasoned final decision with date and time. Basis: Res 201 art. 29(6).
61. The system must enforce a 30-calendar-day limit from alert to "unusual / not unusual" classification, with escalation at day 20. Basis: Res 201 art. 29(8), footnote 15.
62. For unusual operations, the system must track the 90-calendar-day analysis window. Once the top authority approves "suspicious", it must start a 24-hour ROS clock. Test: approval at 10:00 Monday shows "file by 10:00 Tuesday". Basis: Res 201 art. 33, footnote 16.
63. The ROS draft must contain: people involved with their CDD data; operation details (dates, amounts, currencies, accounts, place, attached documents); reasons; other information; and a narrative that goes beyond amounts. Basis: Res 201 art. 34.
64. The ROS draft must not contain the SO's name or the CO's identity, only SEPRELAD codes. The system must run a check that blocks export if the firm's name, RUC or CO name appears in the text. Basis: Res 201 art. 36; Ley art. 19.
65. ROS records must be visible only to the top authority, the CO and named assistants. Any client-facing export (client file print, data-subject request) must exclude ROS existence and ITC requests. Test: a user with the "agent" role cannot see that a ROS exists. Basis: Ley art. 20; Res 201 art. 33, 36; Circular 01/2025.
66. "Not reported" decisions on unusual operations must store the reasons and be kept 5 years. Basis: Res 201 art. 9(9), 32.
67. The system must track SEPRELAD follow-ups: extra information due in 4 business days; a returned ROS due in 15 business days, otherwise "deemed not filed". Basis: Res 201 art. 33, 35.

**I. Negative report, FA and deadline calendar**

68. At each quarter end, if no ROS was marked filed in the quarter, the system must create an RN task due on the 10th calendar day of the next month (Jan, Apr, Jul, Oct). Test: no ROS in Q3 produces "RN due 10 Oct". Basis: Res 326/2022 art. 2 (stricter than Res 201 art. 37, which allows 10 business days).
69. The calendar must hold every SIRO deadline with reminders at 30, 7 and 1 days:
    - CI: 30 March;
    - FA: 31 May;
    - AE: 30 June;
    - RO: days 11-20 of Jan, Apr, Jul and Oct;
    - RN: days 1-10 of the same months;
    - canon;
    - SIRO data confirmation;
    - risk reassessment;
    - training plan.

   Basis: Circular 2/2025; Res 003/2025; Res 326/2022; Res 435/2026; Res 201 art. 3, 15.
70. The calendar must compute deadlines from the firm's fiscal-year end (default 31 December) and adjust business-day rules for Paraguayan public holidays. Basis: Res 201 art. 13-14 (90 and 180 days after close); Res 201 art. 10, 37 (business days).
71. The system must compute the FA from the operations register: counts and amounts per operation type; national, foreign and PEP client counts; total operations and Gs; cash versus other totals; % inflow and outflow channels; departments present. It must show a side-by-side sheet matching the SIRO screen order. Test: the FA totals equal the sum of the year's RO exports. Basis: Res 165/2022 annex.
72. Each filing must store the SIRO proof (FA "ticket de cumplimiento", RO, RN and ROS receipts, CI and AE "Presentado" screenshot or PDF). A filing must not show "done" without proof. Basis: Res 165/2022 annex ("ticket ... suficiente respaldo documental"); Res 202/2023 manual.
73. The system must hold a "SEPRELAD notices" log for warning notes and remedial notes, each with a remediation checklist and due dates. Basis: Res 681/2024 art. 1-3.
74. The dashboard must show a compliance status per obligation (CI, AE, FA, RN, RO, ROS, canon, data confirmation). These mirror the objective checks SEPRELAD runs in SIRO. Basis: Res 681/2024; Memoria 2024.

**J. Internal-control report and external audit**

75. The system must generate the annual CI report with all 12 Annex II items, filled from system data, including monthly statistics of unusual operations and ROS with amounts. Test: a missing item blocks "final". Basis: Res 201 art. 13 and Annex II.
76. The CI report must cover the three art. 13 minimum points: (a) integrity and effectiveness checks; (b) warnings to the top authority on weaknesses; (c) documentation of the evaluations. Basis: Res 201 art. 13.
77. The system must give the external auditor an "audit pack": manual, code, acknowledgements, risk assessments, training records, a client-file sample with risk scores, the alert register, the RO, RN, FA and ROS-count history, and past audit findings with status. Basis: Res 201 art. 14(a)-(g); Res 411/2013 Annex A art. 1, 4-8.
78. The system must provide a read-only auditor role, plus a system description (purpose, functions, rules, logs) the auditor can test. Basis: Res 411/2013 Annex A art. 8 (auditors test IT tools and the detection sheet).
79. The system must record the auditor's SEPRELAD registration resolution number and expiry date, and warn if the expiry is before the report date. Basis: Res 201 art. 14 (registered auditor); Res 218/2020; SIRO public lookup fields.
80. The system must track audit findings to closure, so the next audit can verify them. Basis: Res 201 art. 14(g).
81. The system must offer an AE exemption or deferral request workflow. It must check eligibility triggers (no operations, inactivity, recent start or end, low volume, no clients), assemble the evidence from system data, and enforce "submit before 30 June". It must state that the deadline keeps running until SEPRELAD decides, and that all other duties stay. Basis: Res 328/2026 art. 1-3.

**K. Training**

82. The system must generate the annual training programme, proposed by the CO and approved by the top authority, covering the 10 minimum topics. Basis: Res 201 art. 15-16 and footnote 10.
83. Training records must store date, topics and attendees (including outsourced staff) and be kept 5 years. Test: deleting a record younger than 5 years is blocked. Basis: Res 201 art. 15.
84. The system must flag staff who missed the programme and link to the internal-sanctions log. Basis: Res 201 art. 15.
85. Any training content the vendor itself delivers as a course must be marked "not SEPRELAD-certified" unless the vendor's trainers are CECAD-certified. Basis: Res 174/2023 art. 6.

**L. Records, security, confidentiality and data protection**

86. Retention: keep operation records 5 years from the operation; keep CDD, correspondence and analysis 5 years from the end of the relationship or the occasional transaction. Purge only after both clocks expire, and only with a CO approval. Basis: Ley art. 18; Res 201 art. 20, 32.
87. On subscription cancellation, the system must give a full export (PDF and CSV plus original files, with an index). It must offer low-cost archive retention until the last retention date. Test: export contains every client file, operation and log. Basis: Ley art. 18 (the duty stays with the SO).
88. Every create, edit, approve, export and delete action must be logged with user, time and before and after values. Logs must be tamper-evident and kept 5 years. Basis: Res 201 art. 29(6), 32; Res 411/2013 art. 8 (auditor testing).
89. Role-based access must cover at least: top authority, CO, assistant, agent, auditor (read-only) and consultant. ROS and ITC data are visible only to the first three. Basis: Res 201 art. 33, 36; Ley art. 20.
90. Data must be encrypted in transit and at rest, with daily backups and a tested restore. Basis: Res 201 art. 9(12) (custody of documents); Ley 7593/2025 security duties (detail unverified).
91. The vendor must sign a processor agreement covering purpose, security, sub-processors, international transfer basis, breach notice and return or deletion. The product must let the SO answer data-subject requests without revealing ROS or ITC. Basis: Ley 7593/2025 (from 2027; article numbers unverified); Ley art. 20.
92. The product must record where data is hosted and show it in the processor agreement, so the SO can justify the international transfer. Basis: Ley 7593/2025 transfer rules (unverified detail).

**M. Multi-firm, consultant and change management**

93. A consultant or auditor account must manage many SOs, with a portfolio deadline view and per-firm isolation of data. Test: consultant A cannot see firm B unless invited. Basis: Circular 2/2025 point 3 (the private adviser role); Res 201 art. 30 (the SO stays responsible).
94. The system must keep a regulation register (resolution, date, articles affected) and show which templates and rules depend on each. Test: loading Res 328/2026 marks the AE workflow "changed". Basis: Res 201 art. 11 and footnote 11 (update the manual on rule changes); SEPRELAD's register.
95. A new sector module (cars, jewellers and others) must be possible by configuration: thresholds, RO fields, FA form, red flags, deadlines. Test: enable Res 196/2020 without code changes to the core. Basis: Res 196/2020; Res 246/2022; Memoria 2024 (RO forms differ by sector).
96. The product must show a disclaimer that SEPRELAD does not approve or recommend vendors, and that the firm and its CO remain responsible. Basis: Circular 2/2025 point 3; Res 201 art. 30.

## Open questions

1. What exactly does the SIRO ROS form for real estate contain, and does SIRO accept attachments in a given format? The real-estate SIRO ROS resolution (2023) was not read.
2. Is the RO Excel reference file ("Formulario RO Inmobiliario") column order fixed? SEPRELAD points to a "guía interpretativa" page (Res 003/2025 annex §2) that I did not fetch.
3. Which channel does Res 328/2026 mean by "canales habilitados" for exemption requests (SIRO module, Mesa de Entrada or e-mail)?
4. Is Res 435/2026's annual confirmation already live for real estate, and on what date each year?
5. Res 436/2011 (BO definition and threshold) was not read. What percentage defines a BO for SEPRELAD purposes?
6. Does SEPRELAD treat an RN filed on business days 6-10 (allowed by Res 201 art. 37) but after calendar day 10 (Res 326/2022) as late?
7. Res 218/2020 (auditor register) and Res 31/2019 (sanction procedure) were read by title only. What are the auditor registration term and the proceeding steps?
8. Will the ENR 2025 results lead to a new real-estate rule replacing Res 201/2020, and when?
9. Under Ley 7593/2025, which transfer mechanisms and breach deadlines will the implementing decree set?
10. Would SEPRELAD object to a vendor's training being used as the firm's "annual programme" without CECAD certification (Res 174/2023 art. 6)?
11. Res 222/2020 (jewellers) is a scanned PDF and was not read. Its thresholds and filings are needed before a second vertical.

## Sources

Primary (SEPRELAD and official), all accessed 10 Oct 2026:
- SEPRELAD register of laws and resolutions: https://www.seprelad.gov.py/?page_id=1617 (data: https://www.seprelad.gov.py/resoluciones/data/resoluciones.php)
- Ley 1015/97 consolidated with Leyes 3783/09, 6497/19, 6797/21, 6960/22: https://www.seprelad.gov.py/resoluciones/resoluciones/ley10151997actualizada_.pdf
- Res 201/2020 (real-estate rulebook, full text read): https://www.seprelad.gov.py/resoluciones/resoluciones/res-n201-2020-reglamentacion-para-inmobiliarias.pdf
- Res 328/2026 (rewrites art. 14, external-audit exemption or deferral): https://www.seprelad.gov.py/resoluciones/resoluciones/Res.%20328.26_Excepci%C3%B3n%20de%20auditor%C3%ADa%20externa.pdf
- Res 435/2026 (annual SIRO data confirmation): https://www.seprelad.gov.py/resoluciones/resoluciones/435_2026.pdf
- Res 003/2025 (RO module for real estate): https://www.seprelad.gov.py/resoluciones/resoluciones/resol-03-2025-ro-inmobiliarias.pdf
- RO Excel technical specification: https://www.seprelad.gov.py/resoluciones/resoluciones/contenido-archivo-excel-ro-inmobiliarias.pdf
- Circular UIF-SEPRELAD/SE 02/2025 (deadline table; no official advisers): https://www.seprelad.gov.py/resoluciones/resoluciones/CIRCULAR%202-2025.pdf
- Res 681/2024 (warnings to 1,238 real-estate SOs): https://www.seprelad.gov.py/resoluciones/resoluciones/res-n681-24.pdf
- Res 165/2022 (FA for real estate): https://www.seprelad.gov.py/resoluciones/resoluciones/res-n-165-22-formulario-anualso-sector-inmobiliario.pdf ; annex and instructions: https://www.seprelad.gov.py/resoluciones/resoluciones/anexos-res-n-165-22-formulario-anualso-sector-inmobiliario.pdf
- Res 202/2023 (CI and AE uploads): https://www.seprelad.gov.py/resoluciones/resoluciones/resn202-23.pdf ; user manual: https://www.seprelad.gov.py/resoluciones/resoluciones/manual-de-usuario-remision-informe-cumplimiento-s-o.pdf
- Res 326/2022 (RN windows): https://www.seprelad.gov.py/resoluciones/resoluciones/resn326-22-implementacionsiro-r-n.pdf
- Res 146/2023 (SIRO ROS and RN for other sectors): https://www.seprelad.gov.py/resoluciones/resoluciones/146-23-implementacion-ros-generico-siro.pdf
- Res 375/2016 (registration procedure): https://www.seprelad.gov.py/resoluciones/resoluciones/2016-375-resolucion.pdf
- Res 483/2021 (SIRO registration, Annex II real estate): https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-483-21-siro.pdf
- Res 258/2023 (30-day lapse; QR certificate): https://www.seprelad.gov.py/resoluciones/resoluciones/resn258-23.pdf
- Res 203/2024 (scanned documents accepted): https://www.seprelad.gov.py/resoluciones/resoluciones/ResolucionN203_2024.pdf
- Res 460/2025 (deregistration module): https://www.seprelad.gov.py/resoluciones/resoluciones/Resolucion%20N%C2%B0%20460_25%20-%20Se%20autoriza%20la%20implement%20del%20modulo%20BAJA%20DE%20SUJETOS%20OBLIG%20desarrollado%20en%20el%20SIRO.pdf
- Res 50/2019 (PEP rule): https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-50-19-por-el-cual-se-aprueba-el-reglamento-de-identificacion-de-personas-expuestas-politicamente.pdf
- Res 202/2020 (BO certificate in CDD): https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-202-2020.pdf
- Res 56/2026 (canon 2026): https://www.seprelad.gov.py/resoluciones/resoluciones/RESOLUCION%20N%C2%B0%2056.pdf
- Res 7/2018 (registration fees): https://www.seprelad.gov.py/resoluciones/resoluciones/res%2007.pdf
- Circular 001/2022 (who counts as an agent): https://www.seprelad.gov.py/resoluciones/resoluciones/circular-uif-sepreladsen001-22.pdf
- Circular 01/2025 (confidentiality, ROS and ITC): https://www.seprelad.gov.py/resoluciones/resoluciones/circular0125.pdf
- Decreto 5920/2021 (UN targeted financial sanctions): https://www.seprelad.gov.py/resoluciones/resoluciones/Decreto-5920-2021.pdf
- Res 174/2023 (CECAD training; trainer certification): https://www.seprelad.gov.py/resoluciones/resoluciones/resn174-23.pdf
- Res 411/2013 (minimum standards for independent AML audit): https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-4112013.pdf
- Res 321/2022 (ITC module): https://www.seprelad.gov.py/resoluciones/resoluciones/575-resolucion-n321-2022.pdf ; Res 379/2022: https://www.seprelad.gov.py/resoluciones/resoluciones/resoln379-2022-itc.pdf
- Res 196/2020 (car dealers): https://www.seprelad.gov.py/resoluciones/resoluciones/res-seprelad-n-196-20-automotores.pdf
- Res 31/2019 (sanction proceedings; title only): https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion_20261005_133909_dUx1fKzZf8UsoDEoa7Fd.pdf
- Res 218/2020 (auditor register; title only): https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-218-2020-reglamento-para-auditores-externos.pdf
- SEPRELAD Memoria Anual 2024: https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf
- SEPRELAD public lookup of SOs and auditors: https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml
- SEPRELAD statistics portal: https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml
- SEPRELAD news, SIRO training 12 Oct 2026: https://www.seprelad.gov.py/?p=4442
- SEPRELAD notice, ENR 2025 form: https://www.seprelad.gov.py/?p=3259
- Decreto 6225/2026, minimum wage (via impuestospy): https://impuestospy.com/impuestos/decreto-n-6225-2026/
- GAFILAT Mutual Evaluation Report of Paraguay 2022 (via the earlier report): https://www.pj.gov.py/descargar/ID1-148_informe_de_evaluacion_mutua_de_paraguay_2022.pdf

Secondary:
- Ferrere on Res 36/21 random inspections and the sanctions scale: https://ferrere.com/es/novedades/inspecciones-aleatorias-de-seprelad-bajo-resolucion-36-21/
- La Nación on Ley 7593/2025 (Nov 2025): https://www.lanacion.com.py/politica/2025/11/28/nueva-ley-de-datos-personales-refuerza-la-privacidad-sin-recortar-la-transparencia-publica/
- Infonegocios on Ley 7593/2025: https://infonegocios.com.py/default/ley-de-proteccion-de-datos-personales-en-paraguay-que-cambia-para-su-empresa
- IAPP on Ley 7593/2025 (Dec 2025): https://iapp.org/news/a/paraguay-da-un-paso-hacia-un-marco-moderno-de-protecci-n-de-la-privacidad
- Hoy on GAFILAT enhanced follow-up (Oct 2024; search snippet only): https://www.hoy.com.py/nacionales/2024/10/10/ministra-de-seprelad-detalla-evaluacion-de-gafilat-y-su-implicancia
- Earlier deep-dive report (fee-payer counts, 2025-2026 sanctions from the stats portal): /home/user/mini-ChatGpt/rerun/wave2/deep/reports/paraguay-b2.md
