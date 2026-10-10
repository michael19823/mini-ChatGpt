# Argentina: UIF anti-money-laundering duties of real estate brokers, turned into product requirements

Status: draft complete as of 2026-10-10 (open questions at the end). Research was done in Spanish and English on primary sources: the official consolidated texts on argentina.gob.ar, the Boletín Oficial, UIF instruction pages, UIF sanction records and the FATF/GAFILAT mutual evaluation.

Short names used below:
- **Law** = Ley 25.246 as amended by Law 27.739 (BO 15 Mar 2024) and Decree 274/2025 (BO 16 Apr 2025) ([consolidated Law 25.246](https://www.argentina.gob.ar/normativa/nacional/62977/actualizacion)).
- **Res. 43** = Resolución UIF 43/2024 for real estate brokers, as amended by Res. UIF 56/2024 ([consolidated Res. 43/2024](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion)).
- **UIF** = Unidad de Información Financiera, the FIU and the only AML supervisor of brokers.
- **SRO+** = the UIF's online reporting system. **RSM** = monthly systematic report. **RSA** = annual systematic report. **ROS** = suspicious transaction report. **RFT** = terrorist-financing report. **ITAER** = technical self-assessment report. **REI** = independent external reviewer. **SMVM** = minimum wage. **PEP** = politically exposed person. **BO** = beneficial owner. **RePET** = Argentina's public terrorist register.

Corrections to the earlier report ([reports/argentina-b1.md](../reports/argentina-b1.md)):
- **The ROS clock is 24 hours, not 15 days.** Res. 56/2024 (BO 26 Mar 2024) changed Art. 33. A ROS is now due within 24 hours after the broker concludes an operation is suspicious, and no later than 90 calendar days after the operation ([consolidated Res. 43](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion)). The "15 days / 150 days" figure is the original text, replaced eight days after publication.
- **Thresholds use a fixed SMVM, not the current one.** Res. 43 Art. 2(ñ) uses the SMVM in force on 31 December of the prior year and on 30 June of the current year. That is ARS 334,800 or ARS 367,800, not the September 2026 value (see "Who is obliged").
- **The terrorist-financing rule changed.** Res. UIF 207/2025 (BO 4 Nov 2025) repealed Res. 29/2013, which Res. 43 still cites ([Res. 207/2025](https://www.boletinoficial.gob.ar/detalleAviso/primera/333954/20251104)).
- **Brokers have been fined before.** The UIF's own sanctions register lists 12 final fines on brokers from 2019 to 2022 ([UIF sanctions](https://www.argentina.gob.ar/uif/sanciones)).

## Summary

- **One national rule set.** Res. 43, in force since 19 Mar 2024, sets every broker duty under Law 25.246 Art. 20 inc. 15 and Art. 21 ([Res. 43](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion); [Law](https://www.argentina.gob.ar/normativa/nacional/62977/actualizacion)). Cross-cutting UIF rules add more duties:
  - PEPs: Res. 35/2023 as amended by Res. 192/2024.
  - Beneficial owners: Res. 112/2021.
  - Terrorist financing: Res. 207/2025. Proliferation financing: Res. 3/2026.
  - External reviewer: Res. 67/2017 as amended by Res. 132/2024.
  - Registration: Res. 50/2011, Res. 47/2024 and Res. 37/2026.
  - Supervision: Res. 61/2023. Sanction procedure: Res. 90/2024.
  - There are no provincial AML rules. Provinces only license brokers.
- **Who is obliged.** Licensed (matriculated) brokers, and companies run by them, but only when they actually broker a sale, or a lease worth 300 SMVM or more a year (Res. 43 Art. 2(a), 2(o)).
  - Every sale counts, whatever the price.
  - The lease threshold is about ARS 100-110 million a year at the 2025/2026 reference wages (my calculation).
  - The UIF had 10,365 registered brokers in March 2024 ([FATF MER 2024, Table 1.2](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf)).
- **No small-firm exemption.** A sole broker runs the whole system personally. Two things are lighter: no compliance officer appointment, and no internal audit (Res. 43 Art. 9, 11, 17(b)).
  - The REI applies to any broker with income above 875 SMVM or 50 or more qualifying operations a year (Art. 17(a)). That is about ARS 293-322 million of income (my calculation).
- **What must exist on paper:**
  - a prevention manual, reviewed every 2 years, with signed staff acknowledgements (Art. 8);
  - an ITAER self-assessment and its methodology, filed before 30 April every 2 years (first due 30 Apr 2026, next 30 Apr 2028), with the methodology reviewed every 4 years (Art. 5, 36);
  - client files to fixed data lists (Art. 19-21);
  - a PEP sworn statement from every client (Res. 35/2023 Art. 8);
  - a RePET check before onboarding (Art. 7(a));
  - a three-level client risk rating, with file refreshes at most every 1, 3 or 5 years (Art. 23, 27);
  - an unusual-operations register with 8 fixed fields (Art. 32);
  - yearly training records (Art. 16);
  - 10-year retention with a backup copy (Art. 15).
- **Reports to the UIF:**
  - the RSM between the 1st and 15th of each month;
  - the RSA between 2 January and 15 March;
  - a ROS within 24 hours of concluding there is suspicion (90 days at most from the operation);
  - an RFT or proliferation-financing report within 24 hours, with an immediate freeze on a sanctions match (Res. 43 Art. 33-34; Res. 207/2025; Res. 3/2026).
  - All go through SRO+. Bulk RSMs can go through the UIF's Windows SROMasivo app as one XML file per operation ([UIF RSM-Masivo](https://www.argentina.gob.ar/uif/rsm)).
- **The UIF portal stops at filing.** It takes reports and registrations. It does not keep the client file, the risk rating, the PEP or RePET evidence, alerts, the unusual-operations register, the self-assessment workings, the manual sign-offs, training logs or retention clocks. The UIF can ask for any of these at an inspection with as little as 3 business days' notice ([Res. 61/2023 Annex, Art. 15](https://www.colegio-escribanos.org.ar/noticias/2023_04_17-UIF-Res-61-23-Anexo.pdf)). That gap is the product.
- **Enforcement is thin but real.**
  - The UIF inspected 21 of 10,307 brokers in 2023 (0.3%) ([FATF MER 2024, para 546](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf)).
  - It has 12 final fines against brokers on record (2019-2022). The charges were a deficient manual, no audit, no training, weak client files, no monitoring tools, missing PEP statements and no terrorist-list checks ([UIF sanctions sheet](https://www.argentina.gob.ar/uif/sanciones); [RESAP-2022-108](https://www.argentina.gob.ar/sites/default/files/resap-2022-108-apn-uifmec_-_expte_ndeg_522-17.pdf)).
  - Fines now run from 15 to 2,500 módulos per infraction (ARS 0.81-135.4 million at ARS 54,140), and board members are jointly liable (Law Art. 24).
  - A fast-track procedure charges 15, 25 or 30 módulos per charge. It requires a fix within 3 months, filed together with an REI (Res. 90/2024 Annex Art. 35-37).
- **What is changing.**
  - The next ITAER cycle is due in April 2028, with the next REI around 28 Aug 2028 (my calculation).
  - The UIF moved the accountants' REI to 1 Mar 2027 but has given brokers no relief ([CPCE CABA](https://www.consejo.org.ar/noticias/2026/uif-se-prorroga-la-presentacion-del-informe-de-revision-externa-independiente)).
  - A government draft would end the broker licence requirement ([iProfesional, Jul 2026](https://www.iprofesional.com/realestate/460633-5-fuertes-cambios-que-transformaran-para-siempre-el-negocio-inmobiliario-en-argentina)). Res. 43 is written for licensed brokers, so a new UIF rule would follow (unverified).
- **Product.** The 78 requirements below cover:
  - scope and threshold tracking;
  - the client file;
  - PEP, RePET and UN checks;
  - risk rating and refresh clocks;
  - the 31 statutory alerts and the unusual-operations register;
  - a ROS draft (never auto-filed);
  - RSM export and validation, and RSA assembly;
  - the ITAER wizard;
  - the manual and training;
  - an REI workspace that redacts ROS identities;
  - a one-click inspection pack;
  - 10-year retention, with export on exit.

## Who is obliged

**Legal basis.**
- The Law lists as obliged "natural and/or legal persons, or other structures with or without legal personality, that carry out real estate brokerage" (Law Art. 20 inc. 15, as replaced by Law 27.739) ([Law](https://www.argentina.gob.ar/normativa/nacional/62977/actualizacion)). The Law does not require a licence.
- Res. 43 Art. 1 still cites "Art. 20 inc. 19", which was the brokers' number before Law 27.739 renumbered the list. The UIF's 2022 sanction against Inmobiliaria Bullrich cites inc. 19 for brokers ([RESAP-2022-108](https://www.argentina.gob.ar/sites/default/files/resap-2022-108-apn-uifmec_-_expte_ndeg_522-17.pdf)). The mismatch is cosmetic (my observation).

**Definition in Res. 43 Art. 2(o)** ([Res. 43](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion)):
- licensed ("matriculados") real estate agents or brokers; and
- companies of any type whose object is real estate brokerage and that are formed and/or managed by licensed brokers;
- in both cases "only when, in the name of and/or on behalf of their clients, they actually carry out" an Actividad Específica.

**Actividades Específicas (Art. 2(a)):**

| Activity | Threshold | Notes |
|---|---|---|
| Purchase and/or sale of property | None. Every sale is in scope. | Reported monthly in the RSM (Art. 34(a)(i)). |
| Lease of property | Annual amount, "in one or several operations", of 300 SMVM or more | Below the threshold, a lease is outside Res. 43. Whether "several operations" means several leases by the same client in a year is not defined (open question). |

**SMVM reference values (Art. 2(ñ)).** The rule uses the SMVM "in force on 31 December of the previous calendar year and on 30 June of the current calendar year, as applicable".
- The SMVM was ARS 334,800 in December 2025 and ARS 367,800 from June 2026 ([Chequeado](https://chequeado.com/el-explicador/el-gobierno-fijo-nuevos-valores-del-salario-minimo-vital-y-movil-de-cuanto-es-en-diciembre-2025-y-como-evoluciono-frente-a-la-inflacion/); [La Nación](https://www.lanacion.com.ar/economia/de-cuanto-sera-el-salario-minimo-vital-y-movil-tras-el-aumento-del-gobierno-nid03122025/)).
- The thresholds below are my calculations:

| Threshold | Use | At ARS 334,800 (31 Dec 2025) | At ARS 367,800 (30 Jun 2026) |
|---|---|---|---|
| 300 SMVM | Lease in scope (Art. 2(a)) | ARS 100.44 m | ARS 110.34 m |
| 700 SMVM | Habitual client (Art. 2(d)) | ARS 234.36 m | ARS 257.46 m |
| 875 SMVM | REI needed if annual income is above this (Art. 17(a)) | ARS 292.95 m | ARS 321.83 m |

- Which value applies to which month is not spelled out (open question). The lower value catches more operations, so it is the safe default.

**Client definitions (Art. 2(d)).**
- A **client** is any person or structure with which the broker sets up an occasional or habitual relationship to carry out an Actividad Específica.
- A **habitual client** does more than one Actividad Específica within one year from the last operation, with a combined amount of 700 SMVM or more. Everyone else is occasional.
- **Two obliged brokers in one deal.** Each broker covers only its own client and records the other broker's licence number.
- **One obliged broker and one non-obliged intermediary.** The obliged broker must cover every person in the operation.

**Sole broker versus company:**

| Item | Sole broker | Company run by licensed brokers |
|---|---|---|
| Compliance officer | Not appointed. The broker is the obliged person and does the officer's tasks himself, except Art. 11(a), (l), (o), (q), (s), (t). | Must appoint a titular and an alternate. They must register with the UIF and be members of the board (Res. 43 Art. 10; Law Art. 21(f)). |
| Board duties (Art. 9) | Done by the broker, except (a) appoint an officer, (g) approve the officer's annual plan and reports, and (l) set up a committee | All apply |
| REI | If income is above 875 SMVM or there are 50 or more activities a year | Same |
| Internal audit | Not required | Required if no REI is needed, unless the firm chooses an REI (Art. 17(b)) |
| AML committee | n/a | Optional (Art. 12) |

**No size exemption.** Res. 43 has no micro-firm carve-out. It asks only that the self-assessment method fit "the nature and size" of the business (Art. 5) and that the board consider size when giving the officer resources (Art. 9(f)). Law Art. 24 tells the UIF to weigh size when setting fines ([Law](https://www.argentina.gob.ar/normativa/nacional/62977/actualizacion)).

**Not covered by Res. 43:**
- Notaries, lawyers and accountants in property deals have their own resolutions. For example, accountants fall under Res. 42/2024 ([UIF resolutions](https://www.argentina.gob.ar/uif/normativa/resoluciones)).
- Property registries move to Res. 93/2026 from 8 Nov 2026 (same source).
- Brokers handling only leases below 300 SMVM.

**Size of the obliged pool.**
- 10,365 brokers were registered with the UIF in March 2024 ([FATF MER 2024, Table 1.2](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf)).
- The UIF's 2023 risk ratings of brokers were 1,482 high, 5,383 medium and 3,442 low (same, Table 6.3).
- The UIF received 3,748 broker registration requests from 2019 to 2024 and rejected 1,741 (same, Table 6.1).
- Brokers must also hold a provincial licence (same, para 500).

## Duty-by-duty table

**How to read the penalty column.**
- Every breach is punishable under Law Art. 24, after an administrative proceeding ("sumario") ([Law](https://www.argentina.gob.ar/normativa/nacional/62977/actualizacion)). The sanctions are:
  - a warning;
  - a warning published in the Boletín Oficial and up to two newspapers;
  - a fine of 15-2,500 módulos per infraction ("15-2,500 mod.");
  - for ROS failures, a fine of 1-10 times the value of the operation;
  - disqualification of the compliance officer for up to 5 years.
- Fines are added up per infraction. Board members are jointly liable.
- The módulo is ARS 54,140 (Res. UIF 95/2025, BO 23 Jun 2025) ([UIF resolutions](https://www.argentina.gob.ar/uif/normativa/resoluciones)). 15 mod. is about ARS 0.81 m and 2,500 mod. about ARS 135.4 m.
- "Fast-track" is the provisional charge under the abbreviated procedure ([Res. 90/2024 Annex Art. 35](https://www.argentina.gob.ar/normativa/nacional/400665/actualizacion)):
  - 30 mod. for a total breach, or 25 mod. for a partial breach, of: monitoring, terrorist lists, PEP, BO, registration and compliance officer, duty to cooperate, or enhanced due diligence;
  - 15 mod. or a warning for any other breach;
  - 1x the operation value for a ROS failure.

**How to read the evidence column.** It draws on:
- the charges in published broker sanctions ([RESAP-2022-108 Bullrich](https://www.argentina.gob.ar/sites/default/files/resap-2022-108-apn-uifmec_-_expte_ndeg_522-17.pdf); [RESAP-2022-128 Hansen Barrientos](https://www.argentina.gob.ar/sites/default/files/resap-2022-128-apn-uifmec.pdf));
- the REI minimum content ([Res. 132/2024 Art. 9](https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-132-2024-403326/texto));
- the UIF's monitoring sources (Res. 61/2023 Annex Art. 22).

| # | Duty | Legal basis | What must exist or be done | Frequency / deadline | Evidence an inspector asks for | Penalty |
|---|---|---|---|---|---|---|
| 1 | Register with the UIF and keep data current | Law Art. 21(d); Res. 50/2011 Art. 3 bis (as replaced by Res. 47/2024); Res. 37/2026 | Online registration in SRO+ with PDFs. Natural person: signed note (name, ID, CUIT, address, phone, e-mail as legal address, activity, PEP status), ID copy, CUIT proof, licence copy, criminal-record certificate. Company: note with company, compliance officer and board data plus BO list; by-laws, board minutes, officer designation, BO sworn statement, criminal records of board members and BOs ([UIF natural person](https://www.argentina.gob.ar/uif/persona-humana); [UIF legal person](https://www.argentina.gob.ar/uif/persona-o-estructura-juridica)) | Before acting. Address, phone or e-mail changes within 5 business days ([UIF registration guide](https://www.argentina.gob.ar/uif/instructivos/como-registrarse-por-primera-vez-en-la-uif)) | SRO+ registration certificate; up-to-date data | 15-2,500 mod.; fast-track 30/25 mod. (registration). Unanswered UIF requests can lead to the SRO registration being blocked (Res. 61/2023 recitals) |
| 2 | Compliance officer (companies only) | Res. 43 Art. 7(o), 9(a), 10, 11; Law Art. 21(f) | A titular and an alternate, both board members, trained or experienced in AML, registered with the UIF, with an address in Argentina. One must be in office at all times. | Alternate acting: e-mail sujetosobligados@uif.gob.ar within 24 h. Removal: approved by the appointing body, notified within 15 days with replacements. Former officer keeps an address on file for 5 years | Board minutes; UIF registration; notices sent | Same as #1; officer can be disqualified for up to 5 years |
| 3 | Risk-based prevention system | Res. 43 Art. 3, 6, 7 | Policies, procedures and controls covering items (a)-(v) of Art. 7. They must take account of the national risk assessments, UIF documents and the broker's own risks, and match the ITAER | Ongoing; "updated and reviewed regularly" (Art. 7, last para) | Manual; evidence each item works | 15-2,500 mod.; fast-track 15 mod. |
| 4 | Risk check before new services, practices or technology | Res. 43 Art. 4 (last para) | A documented analysis of the 4 factors (clients, services, channels, geography) before launch | Before each launch | Written analysis | 15-2,500 mod. |
| 5 | Self-assessment report (ITAER) and methodology | Res. 43 Art. 2(b), 4, 5, 9(b), 11(b), 36(i); Law Art. 21(h) | A technical report that identifies and assesses inherent risk and how well controls work. It covers at least clients, services, channels and geography. It uses UIF information, the national risk assessments, typologies and guides. The board approves it (a sole broker approves it himself). Documented, kept and sent to the UIF. | Update every 2 years, filed before 30 April. First due 30 Apr 2026 (covering 2024-2025); next before 30 Apr 2028. Methodology reviewed every 4 years. Earlier update and filing if a new risk appears or an existing one changes | The ITAER, the methodology, the approval, the filing proof. The REI also checks a "risk tolerance statement" (Res. 132/2024 Art. 9(a)(4)) | 15-2,500 mod. |
| 6 | AML/CFT manual | Res. 43 Art. 2(h), 8, 9(e), 11(c); Law Art. 21(e) | Contains at least all the Art. 7 policies, procedures and controls. Approved by the board. Available to directors, staff and collaborators, with a reliable record that each read it and committed to follow it | Review every 2 years and keep current with the rules. Always available to the UIF | Manual versions; approvals; signed acknowledgements. "Deficient manual" was a 2022 charge (ARS 60,000 then) | 15-2,500 mod.; fast-track 15 mod. |
| 7 | Governance records (companies) | Res. 43 Art. 9(c)-(l), 11(o), (s)-(u), 12 | The officer's annual work plan and management reports, approved by the board; board approval of training and of the remediation plan; approval of any reliance on third parties; committee rules and minutes if a committee exists | Annual (work plan); on each review finding | Minutes, plans, reports | 15-2,500 mod. |
| 8 | Training | Res. 43 Art. 7(r), 16, 11(k) | Yearly AML training for the broker and for staff involved in Actividades Específicas, by role and risk. Minimum topics (a)-(f): ML/TF crimes; national and international rules; own policies (with emphasis on due diligence); own risks per the ITAER and national assessments; typologies from the broker, UIF, FATF and GAFILAT; alerts and the ROS process, including confidentiality. Keep certificates and any test results | At least yearly; continuous | Training register and certificates. "No training" was a 2022 charge | 15-2,500 mod.; fast-track 15 mod. |
| 9 | External independent review (REI) | Res. 43 Art. 17(a), 36(ii); Res. 67/2017 as replaced by Res. 132/2024 | Applies if annual income is above 875 SMVM or there are 50 or more Actividades Específicas in a year. The broker requests the reviewer's registration on the UIF website and keeps a 15-item reviewer file for 5 years. The reviewer must be a natural person with a degree, 50 h of AML training, 5 years of AML experience and no conflicts. The report covers two annual periods, starts after the ITAER date, covers minimum topics (a)-(i) with 4-level ratings, and lists findings, measures, deadlines and the action plan. The reviewer files the result on the UIF form | Every 2 years, within 120 calendar days after the ITAER deadline. First due 31 Aug 2026; next about 28 Aug 2028 (my calculation) | REI report; reviewer file; action plan; board notice | 15-2,500 mod. (broker); the reviewer can be warned, suspended or struck off (Res. 132/2024 Art. 12) |
| 10 | Internal audit (companies with no REI) | Res. 43 Art. 17(b) | AML areas included in the yearly audit programme. The officer knows the scope but does not decide it. Results list deficiencies, fixes and deadlines and go to the board | Yearly programme | Audit programme and report. "No periodic AML audits" was a 2022 charge | 15-2,500 mod. |
| 11 | Remediation plan | Res. 43 Art. 9(i), 11(t)-(u) | A documented plan for every weakness found by the audit or REI, approved by the board, carried out and followed up | After each audit or REI | Plan, approvals, status reports | 15-2,500 mod. |
| 12 | Client identification and verification | Res. 43 Art. 7(d)-(e), 18-21; Law Art. 21(a), (g), (j) | Before the relationship starts. Natural persons, field list (a)-(i): name, ID type and number with a copy and verification evidence, nationality, date and place of birth, marital status, CUIL/CUIT/CDI, address, phone and e-mail, occupation, PEP and TF compliance; the same for proxies, guardians and representatives, plus proof of authority. Legal persons, field list (a)-(m): name, registration date and number, CUIT, legal address, by-laws, phone and e-mail, activity, representatives, board list, shareholders, BOs and their PEP and TF checks. Rules for the public sector, trusts, funds and other structures (Art. 21). No false names | Before the first operation; ongoing for habitual clients | Client file ("legajo") with ID copies. "Missing ID documents" and "missing identification data" were 2022 charges | 15-2,500 mod.; fast-track 15 mod. (or 30/25 for BO) |
| 13 | Beneficial owner | Res. 43 Art. 7(e), 20(k)-(m), 21(b); Res. 112/2021; Law Art. 21(a) | Identify the natural persons with 10% or more of capital or votes, or final control by other means. If there are none, record the person who directs or represents the entity ([Res. 112/2021 summary](https://abogados.com.ar/resolucion-uif-n1122021-nuevo-regimen-de-identificacion-de-beneficiarios-finales/29323)). Verify, and check PEP and TF status | At onboarding and on change | BO sworn statement and verification evidence | Fast-track 30/25 mod. |
| 14 | PEP check and sworn statement | Res. 43 Art. 7(c), (g), 19(h), 20(l), 26; Res. 35/2023 Art. 5, 7, 8 as replaced by Res. 192/2024 | Show the client the PEP rule, then get a signed PEP statement (on paper or electronically with evidence) at the start and whenever status changes, including the BOs' status. Foreign PEPs are always high risk: officer approval, source of funds and wealth, enhanced due diligence. Domestic PEPs rated high risk get the same. Relatives and close associates get approval and source of funds. PEP status lasts 2 years after leaving office. Automated alerts and controls are required for PEPs (Res. 35/2023 Art. 7) ([Res. 192/2024](https://www.argentina.gob.ar/normativa/nacional/407011/texto); [Res. 35/2023](https://www.consejo.org.ar/storage/attachments/Resoluci%C3%B3n%20UIF%2035-2023.pdf-lDg1Qu0KNv.pdf)) | At onboarding and on change | Signed statements. "Missing PEP sworn statement" was a 2022 charge | Fast-track 30/25 mod. |
| 15 | Terrorist and proliferation lists; freezing | Res. 43 Art. 7(a)-(b), 11(m); Res. 207/2025; Res. 3/2026; Decree 918/2012 | Check RePET before onboarding and continuously, for applicants, clients, BOs and recipients of international transfers. Check UN 1718/1737 lists "regularly and periodically". On a match: freeze without delay and without notice, tell the UIF immediately, and file an RFT or proliferation report. On a UIF freezing order: check the client base, freeze, report results within 24 h through "Reporte Orden de Congelamiento", report any later operations, and do not tip off | Before onboarding; permanent; RFT/RFP within 24 h of the operation; freeze reports within 24 h of notice | Screening logs. "No terrorist-list check" was a 2022 charge | Fast-track 30/25 mod. (terrorist lists); ROS-type fines for failure to report |
| 16 | Client risk rating and segmentation | Res. 43 Art. 7(h), 23, 26; Law Art. 21(h) | Every client rated high, medium or low using the risk model. Factors: client type, activity, source of funds, real or estimated volume, nationality, residence, area of operation, services and channels. Ten listed situations raise risk (Art. 23(a)-(j)), including shell companies, cash-intensive activity, complex ownership, listed countries, third-party funds, SAS companies, and payments from accounts in other names. Foreign PEPs and FATF "call for action" links are always high risk | At onboarding and on triggers | Rating with reasons; risk model. The REI reports client counts and volumes per risk level | 15-2,500 mod. |
| 17 | Due diligence by risk level | Res. 43 Art. 6, 24-26, 7(f), (g), (v), 11(e)-(f) | **Low:** simplified (Art. 18-22 data), with optional proof of activity and income. **Medium:** add documents on economic activity and the source of income, funds and/or wealth. **High:** add documents that justify the source of income, funds and wealth; more documents and the purpose of the relationship and operations; checks for past ML/TF cases and sanctions; stronger monitoring. The officer (or sole broker) approves the start of, or continuation with, high-risk and foreign PEP clients, keeps a register of them, and records accept or reject decisions with reasons. Any suspicion means enhanced due diligence plus a ROS | Before the operation | Source-of-funds documents; approvals register. "KYC deficiencies" was the largest 2022 charge (ARS 70,000) | Fast-track 30/25 mod. (enhanced due diligence) or 15 mod. |
| 18 | Transactional profile | Res. 43 Art. 30 | A profile per client built from the purpose of the relationship, the operations, the amounts and the economic, financial and tax documents | At onboarding; recalibrated for habitual clients | Profile in the file | 15-2,500 mod. |
| 19 | Ongoing due diligence and file refresh (habitual clients) | Res. 43 Art. 7(i), 27, 31; Law Art. 21(i) | Continuous follow-up. Refresh the file at least every 1 year (high), 3 years (medium) or 5 years (low). Low risk can rely on information only; medium on information and documents; high on documents. Medium and low may skip a refresh on a documented materiality basis. A client who will not cooperate means deciding whether to exit, and whether to file a ROS | 1/3/5 years | Refresh dates and evidence | 15-2,500 mod. |
| 20 | Non-face-to-face onboarding | Res. 43 Art. 22; Law Art. 21(k) | Rigorous, storable, auditable and tamper-proof electronic means with fraud protection. The same data as in person. Automated checks are allowed only with evidence that they perform at least as well as a human. A risk analysis of the remote process, reviewed periodically. Date- and time-stamped records. The REI must rate the process | Each remote onboarding | Process records; risk analysis | 15-2,500 mod. |
| 21 | Client that is itself an obliged subject | Res. 43 Art. 28 | Check the client is registered with the UIF. If not, tell the UIF and do not start | At onboarding | Registration check | 15-2,500 mod. |
| 22 | Reliance on another obliged subject | Res. 43 Art. 9(k), 14; Law Art. 21(a) | Allowed only for identification and verification and for understanding the purpose of the relationship. Conditions: get the data at once; copies available on request; the third party is regulated; reliance documented; country risk considered; data protection. Sharing data between obliged subjects needs the data subject's consent. The broker remains responsible | When used | Reliance file; board approval | 15-2,500 mod. |
| 23 | Refusal or exit | Res. 43 Art. 7(ñ), 18, 29; Law Art. 21 (last para) | If due diligence cannot be done, do not start or continue, and assess a ROS. Due diligence may be skipped only if it would tip off the client and a ROS is filed | Each case | Decision with reasons | 15-2,500 mod. |
| 24 | Monitoring and alerts | Res. 43 Art. 7(m), 31; Res. 35/2023 Art. 7 | Risk-based alerts on all operations, drawing on 31 listed situations (i)-(xxxi) and typologies. Every unusual operation must be analysed and, where needed, the client profile updated | Ongoing | Alert rules; analyses. "No technology tools for monitoring" was a 2022 charge (ARS 60,000) | Fast-track 30/25 mod. (monitoring) |
| 25 | Unusual-operations register | Res. 43 Art. 11(n), 32 | Minimum fields: (a) client risk level; (b) client profile; (c) operation (date and time, product, amount); (d) method used to detect and analyse; (e) date, time and source of the alert; (f) type of unusualness; (g) steps taken; (h) date and reasoned final decision. Supporting documents kept, including cases closed as not suspicious | Each alert | The register | Fast-track 30/25 mod. (monitoring) |
| 26 | Suspicious transaction report (ROS) | Res. 43 Art. 7(k), 33 (as replaced by Res. 56/2024); Law Art. 21(b) | Reasoned, with all data and supporting documents. ML: within 24 h after concluding there is suspicion, and at most 90 calendar days after the operation or attempt. TF and PF: 24 h from the operation. Confidential: never shown to the bodies that control the activity (e.g., the licensing colegios). REIs may see the monitoring and analysis process only with identities removed | 24 h / 90 days | Proof of filing; analysis file. "No ROS filed" was a 2022 charge | 1-10x the operation value; fast-track 1x |
| 27 | No tipping-off; secrecy | Law Art. 21(c), 22 | Do not reveal to the client or third parties any action taken under the Law. Breach of secrecy can mean 6 months to 3 years in prison (Art. 22) | Always | Access controls | Criminal (Art. 22-23) |
| 28 | Monthly systematic report (RSM) | Res. 43 Art. 7(l), 11(r), 34(a), 36(iii) | Report the previous month's sales, and leases of 300 SMVM or more a year, in the UIF template (fields in the next section) | Between the 1st and 15th of each month. First filed in February 2025 | Filing receipts with control numbers; the REI checks the RSM procedure | 15-2,500 mod.; fast-track 15 mod. |
| 29 | Annual systematic report (RSA) | Res. 43 Art. 34(b) | General, corporate, accounting, business, activity and client data (fields in the next section) | 2 January to 15 March, for the prior calendar year | RSA receipt ("Constancia") | 15-2,500 mod.; fast-track 15 mod. |
| 30 | Record keeping | Res. 43 Art. 7(s), 15; Law Art. 21(n) | Transaction records for at least 10 years from the operation, enough to rebuild each operation, including amounts and currencies. Client and BO due-diligence records, correspondence and analysis results for at least 10 years from the exit or the last activity, whichever is later. Paper or digital, protected from unauthorised access, with a backup copy on the same type of medium. A process to answer authorities within their deadlines | 10 years | Retrieval on demand | 15-2,500 mod. |
| 31 | Cooperate with UIF requests and inspections | Res. 43 Art. 7(n), 11(g)-(h), 15(c); Res. 61/2023 Annex Art. 15, 18; [UIF requests guide](https://www.argentina.gob.ar/instructivos/requerimientos) | Check the registered e-mail constantly. On-site inspection: answer at once, with missing documents within 3 business days (one extension). Remote inspection: within the term given, at most 3 business days (one extension). Information requests are answered by uploading one ZIP or RAR file under 20 MB through an e-mailed link. Corrective actions within at most 30 business days | Per request | Response log | Fast-track 30/25 mod. (duty to cooperate); a sumario can follow non-response |
| 32 | Staff screening | Res. 43 Art. 7(q) | Proper standards for hiring staff and collaborators, monitored throughout | At hiring; ongoing | Screening records | 15-2,500 mod. |
| 33 | High-risk countries | Res. 43 Art. 7(u)-(v), 11(i), 23(d)-(g), 26; alert (v) | Take FATF grey-list countries into account in risk. Enhanced due diligence for black-list ("call for action") links. Watch tax non-cooperative jurisdictions (Decree 862/2019 as amended by Decree 48/2023) | Ongoing | Country list used, with dates | 15-2,500 mod. |
| 34 | Branches and subsidiaries | Res. 43 Art. 13 | Group-wide rules. Abroad, apply the stricter law and document the differences | If applicable | Group policy | 15-2,500 mod. |
| 35 | Co-brokered deals | Res. 43 Art. 2(d) | Record the other obliged broker's licence number. Cover all parties if the other intermediary is not obliged | Each operation | Operation file | 15-2,500 mod. |

## Filing channels and formats

| Filing | Channel | Format and rules | Source |
|---|---|---|---|
| Registration as an obliged subject | SRO+ online (https://sro.uif.gob.ar/RegisterUser.aspx). Fully digital since Res. 37/2026 | Attached PDFs, each named after its field (e.g. notasuscripta.pdf) and at most 20 MB. All documents at registration, none by e-mail. One e-mail address per CUIT. Automatic reply from the SRO notifications address. Model notes (.docx, 2026) are published | [UIF natural person](https://www.argentina.gob.ar/uif/persona-humana); [UIF legal person](https://www.argentina.gob.ar/uif/persona-o-estructura-juridica); [UIF resolutions](https://www.argentina.gob.ar/uif/normativa/resoluciones) |
| Contact data changes | SRO+ | Within 5 business days | [UIF guide](https://www.argentina.gob.ar/uif/instructivos/como-registrarse-por-primera-vez-en-la-uif) |
| Alternate officer acting; officer removal | E-mail to sujetosobligados@uif.gob.ar "or the procedure that replaces it". SRO+ has guides for registering an alternate and for removing or replacing officers | 24 h (alternate acting); 15 days (removal, with the reasons and the new officers) | [Res. 43 Art. 10](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion); [UIF registration guides](https://www.argentina.gob.ar/uif/instructivos/registracion) |
| RSM, sale | SRO+ web form, or SROMasivo bulk upload | See the field list below | [UIF RSM sale guide](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles) |
| RSM, lease of 300 SMVM or more | Same | Same party fields, plus contract start and end dates and the annual rent. Roles are landlord and tenant; a percentage is needed only for landlords. No payment section | [UIF RSM lease guide](https://www.argentina.gob.ar/uif/instructivos/rsm-operaciones-de-locacion-de-inmuebles-cuyo-monto-anual-sea-igual-o-superior-300) |
| RSM bulk (SROMasivo) | A Windows desktop app (installer v7.2 is an .msi) that uses the SRO+ login | One XML file per operation, placed in a folder. The app checks the XML is well formed, validates it against the UIF schemas, asks for the RSM period (month and year), sends valid files, returns a control number for each operation, and moves files to "sent" or "error" folders. A mass rectification adds a `Rectificación_Operación_Original/Numero_Control_Operación_Original` block. Only an RSM can be rectified, from the same CUIT and subject type, and the original must not be a draft or already rectified. Mass annulment has its own guide. The broker-specific XSD was not found as a public download (unverified) | [UIF RSM-Masivo](https://www.argentina.gob.ar/uif/rsm); [SROM manual](https://www.argentina.gob.ar/sites/default/files/manual_usuario_srom_v2.pdf); [rectification guide (zip)](https://www.argentina.gob.ar/sites/default/files/intructivo_rectificacionesmasivas_rsms.zip) |
| RSA | SRO+ web form, "RSA" tab | Values without decimals, 0 if none. Corporate, business and client data as of 31 December; accounting data from the last financial year. After "Reportar" only "Rectificar" is possible. Gives a "Constancia" with a control number | [UIF RSA guide](https://www.argentina.gob.ar/uif/reporte-sistematico-anual-rsa) |
| ROS / RFT | SRO+ web form, "ROS/RFT" tab | Fields: persons (legal, foreign legal, natural, foreign natural; a legal person needs at least one linked natural person); PEP details; link to the facts (direct, indirect, other party's due-diligence failure); predicate offence if known and the information source; done or attempted; start and end of the operation; location; tax-haven or Triple Frontier link; amount without dots or decimals, in figures and words, with currency. Four free-text boxes: Operatoria, Análisis, Documentación de respaldo, Conclusiones. No special characters; leave unknown fields blank, never "S/D" | [UIF ROS/RFT guide](https://www.argentina.gob.ar/uif/instructivos/rosrft) |
| Proliferation-financing ROS | SRO+ ("RFP" guide) | Within 24 h | [Res. 3/2026](https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-3-2026-422247/texto); [UIF reports](https://www.argentina.gob.ar/uif/reportes) |
| Freeze-order results | "Reporte Orden de Congelamiento" system | Within 24 h of notice | [Res. 207/2025 Art. 4](https://www.boletinoficial.gob.ar/detalleAviso/primera/333954/20251104) |
| ITAER self-assessment and methodology | "Sent to the UIF" (Res. 43 Art. 5). No broker-specific UIF guide found. The accountants' council says accountants file through SRO+ (unverified for brokers) | Not prescribed. For notaries, the Buenos Aires colegio's app produces a PDF with a QR code, a score, residual risk by factor and a risk-tolerance statement ([Colegio de Escribanos guide](https://www.colegio-escribanos.org.ar/noticias/2026_03_17_UIF-Autoevaluacion-UIF-instructivo.pdf)) | [Res. 43](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion) |
| REI registration and report | The broker asks for the reviewer's registration at https://www.argentina.gob.ar/uif/revisores-externos. The reviewer then completes registration and files the result on the UIF form | The broker keeps the reviewer file for 5 years. Updates by e-mail to revisoresexternos@uif.gob.ar | [Res. 132/2024 Art. 5-6, 11](https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-132-2024-403326/texto); [UIF REI guides](https://www.argentina.gob.ar/instructivos/revisor-externo-independiente-rei) |
| UIF information requests | A link sent by e-mail | One ZIP or RAR file under 20 MB, with an optional comment | [UIF requests guide](https://www.argentina.gob.ar/instructivos/requerimientos) |
| Notices and sanction proceedings | The registered e-mail is the legal electronic address. Electronic case handling is available. Fines are paid through eRecauda | Fines are due within 10 days; appeal goes to the federal administrative courts | [Res. 90/2024](https://www.argentina.gob.ar/normativa/nacional/400665/actualizacion); [UIF sumarios](https://www.argentina.gob.ar/uif/sumarios); [RESAP-2022-108](https://www.argentina.gob.ar/sites/default/files/resap-2022-108-apn-uifmec_-_expte_ndeg_522-17.pdf) |

**RSM field list for a sale** ([UIF RSM sale guide](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles)). Fields marked * are optional.

- **Period:** month and year of the operations.
- **Operation:** date; currency of origin, and which foreign currency; total amount in that currency; ARS equivalent; cadastral reference or registry number; province, locality, street, number (digits or "S/N"), floor*, unit*, postcode*.
- **Payments (one or more):**
  - form: Efectivo (cash), Transferencia, Cheque, Activo Virtual (virtual asset) or Otra (other);
  - free text for the virtual-asset type, or for "other";
  - payment currency (for a virtual asset, enter "dólar estadounidense");
  - amount in that currency, and the ARS equivalent.
- **Buyers and sellers:**
  - role (Comprador or Vendedor);
  - person type: natural, foreign natural, legal or foreign legal;
  - company name, with the company type;
  - CUIT/CUIL without hyphens, or a CDI* for foreigners;
  - for foreign legal persons: tax ID type and number;
  - surname and first names without special characters ("D'angelo" becomes "Dangelo");
  - ID type and number;
  - nationality and date of birth;
  - PEP (yes or no);
  - share in % (two decimals, comma separator);
  - address: in Argentina (province, locality, street, number, floor*, unit*, postcode, area code*, phone*, e-mail*), or abroad (country, state, city, street, number, postcode, contacts*).
- **Linked persons:**
  - role: Apoderado (proxy), Tutor, Curador (guardian) or Representante;
  - natural or foreign natural person;
  - CUIT/CUIL, or CDI* for foreigners;
  - names and ID;
  - PEP;
  - which buyer or seller they are linked to.
- **UIF validations:**
  - the period may not be later than the report date;
  - CUIT/CUIL/CDI check digit, matched to the person type;
  - DNI, LC and LE numbers must be 3-8 digits;
  - at least one payment;
  - at least one buyer and one seller;
  - every legal-person party has at least one linked person;
  - buyer shares total 100,00 and seller shares total 100,00.

**RSA content** ([UIF RSA guide](https://www.argentina.gob.ar/uif/reporte-sistematico-anual-rsa)):
- **Section 1, corporate.** Shareholders with 20% or more, looked through to natural persons at 20% or more; PEP shareholders at any percentage, with CUIT, name, %, PEP and foreign status. Economic group. Board members with CUIT, name and position. Total employees and AML staff.
- **Section 2, accounting.** Figures from the last financial statements, in ARS without decimals.
- **Section 3, business.**
  - Each service with its yearly number of operations and yearly volume.
  - Yearly cash volume, required where the firm does not file cash transaction reports (enter 0 if there was none).
  - Whether the firm is listed.
  - Branches, by locality and province.
- **Section 4, clients.** Total; natural-person and legal-person counts; % high risk (including PEPs and high-risk non-residents), % domestic PEPs, % non-residents, % non-resident PEPs.
- **Section 5.** Confirm and report.

## Supervisors and enforcement evidence

**Who supervises.**
- The UIF's Dirección de Supervisión is the only AML supervisor of brokers. Banks and insurers have sector supervisors (OCEs) such as the BCRA or SSN; brokers do not.
- Brokers are on the FATF list of sectors under the UIF alone ([FATF MER 2024, Table 6.1](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf)).
- The provincial colegios license brokers but do not supervise AML. The UIF can ask a licensing body to revoke a broker's licence (Law Art. 24) ([Law](https://www.argentina.gob.ar/normativa/nacional/62977/actualizacion)). Final sanctions are sent to the relevant colegios (Res. 90/2024 Annex, sanctions publication article) ([Res. 90/2024](https://www.argentina.gob.ar/normativa/nacional/400665/actualizacion)).

**How the UIF supervises (Res. 61/2023, BO 14 Apr 2023)** ([Annex](https://www.colegio-escribanos.org.ar/noticias/2023_04_17-UIF-Res-61-23-Anexo.pdf); [recitals](https://contadoresenred.com/uif-procedimiento-de-supervision-basado-en-riesgo-resolucion-61-2023/)):
- The UIF sets a yearly strategy with a 3-year inspection plan and a monitoring plan. Both are driven by a UIF risk matrix and the national and sector risk assessments.
- Inspections are on-site at the broker's address or remote by notes and e-mail. Regional agencies may run them.
- Time limits:
  - On-site: documents at once, or within 3 business days with one extension.
  - Remote: within 3 business days at most, with one extension.
  - Corrective actions: within 30 business days at most. They can be orders, progress reports, meetings with the officer or board, or observations.
- Failing a corrective action, or a serious deficiency, leads to a sanction proceeding.
- Remote monitoring uses SRO registrations, RSMs, RSAs, self-assessments, REI reports and information from colegios (Annex Art. 22).
- If a broker ignores a request after notice, the UIF blocks the SRO registration, so no registration certificate can be downloaded. The duty to keep filing continues.
- **Product consequence.** The UIF's data already shows who never filed an RSM, RSA or ITAER (my inference).

**Inspection intensity:**

| Data point | Value | Source |
|---|---|---|
| Brokers inspected, 2023 | 21 of 10,307 (0.3%), including 13 of 1,482 high-risk (0.9%) | [FATF MER 2024, para 546](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf) |
| Broker inspections by year | On-site: 2022: 0, 2023: 5, Q1 2024: 2. Remote: 2022: 1, 2023: 16, Q1 2024: 4 | same, Table 6.4 |
| ROS filed by brokers | 2019: 11, 2020: 1, 2021: 10, 2022: 19, 2023: 16, Q1 2024: 2 | same, Table 5.1 |
| FATF view | Real estate "is implicated in half of the ML convictions", yet brokers file almost no ROS. Supervision of these sectors is "concerning". The UIF rated brokers medium risk in 2022-2024; the 2022 national risk assessment said low | same, paras 114, 546; Table 6.2 |
| All UIF supervisions, 2024 | 235 supervisions (109 central; 44, 36 and 34 by three regional agencies; 12 joint with OCEs); 68 sanction proceedings opened; 25 fines, across all sectors | [UIF 2024 summary](https://www.argentina.gob.ar/sites/default/files/2016/09/uif_resumen_ejecutivo_gestion_2024_-_v03.pdf) |

**Sanction record against brokers.**
- The UIF's public register of final fines ([UIF sanctions](https://www.argentina.gob.ar/uif/sanciones)) is a Google Sheet behind that page. I downloaded it on 10 Oct 2026.
- It has 263 rows: 10 in 2019, 8 in 2020, 27 in 2021, 74 in 2022, 110 in 2023, 14 in 2024, 12 in 2025 and 5 in 2026.
- 148 are notaries and 12 are brokers.
- The broker cases:
  - Yukon SA (Res. 161/19);
  - Iglesias Negocios Inmobiliarios SA (69/20);
  - Intelligent Architecture SA (106/21);
  - four "Bau" franchise companies (RESAP 9, 10, 11 and 45/22);
  - Global Investments SRL (91/22);
  - Salvatierra Rigourd (101/22);
  - Inmobiliaria Bullrich SA (108/22);
  - Daniel Castro (112/22);
  - Hansen Barrientos SRL (128/22).
- None is dated 2023-2026. All were decided under the old Res. 16/2012 and the old peso amounts.

**What the broker cases punished:**
- **Inmobiliaria Bullrich SA**, RESAP-2022-108, 6 Oct 2022, opened in 2019 on a 2017 file ([PDF](https://www.argentina.gob.ar/sites/default/files/resap-2022-108-apn-uifmec_-_expte_ndeg_522-17.pdf)). The compliance officer and the board members were fined ARS 270,000 in total:
  - deficient manual: 60,000;
  - no periodic AML audits: 40,000;
  - no training: 40,000;
  - deficient know-your-customer policy and client files: 70,000;
  - no technology tools for monitoring: 60,000.
  - The company was also given a published warning. Payment was due through eRecauda within 10 days. Appeal goes to the federal administrative court.
- **Hansen Barrientos SRL**, RESAP-2022-128 ([PDF](https://www.argentina.gob.ar/sites/default/files/resap-2022-128-apn-uifmec.pdf)). Charges included:
  - missing PEP sworn statements: 20,000;
  - missing client documents: 20,000;
  - missing general identification data: 20,000;
  - no check of the terrorist lists: 30,000;
  - several manual, training and audit items.
- **This is the checklist an inspector works from today.** The REI minimum content in Res. 132/2024 Art. 9 is the same list in modern form ([Res. 132/2024](https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-132-2024-403326/texto)).

**Penalties today.**
- Law Art. 24 sets 15-2,500 módulos per infraction (ARS 0.81-135.4 million at ARS 54,140), plus joint liability of board members ([Law](https://www.argentina.gob.ar/normativa/nacional/62977/actualizacion)).
- The limitation period is 5 years (Art. 24 bis).
- Probation-style suspension is possible for breaches other than ROS (Art. 24 ter).
- The fast-track procedure ([Res. 90/2024 Annex Art. 34-39](https://www.argentina.gob.ar/normativa/nacional/400665/actualizacion)):
  - The broker accepts the provisional charges within 10 days and pays: 30, 25 or 15 módulos per charge, or 1x the operation value for a ROS failure.
  - It commits to fix every gap within 3 months, in a filing signed together with a registered REI.
  - The final resolution leaves no record if there is no new breach within 3 years.
- **Product consequence.** Even a small broker caught under the fast-track route has to buy an REI's time. A tool that shows the gaps are already closed lowers that cost (my inference).

## Regional differences

**AML duties are the same nationwide.** Law 25.246 and the UIF resolutions are federal. They apply the same way in every province and in Buenos Aires City (CABA). I found no provincial AML rule for brokers.

**Licensing is provincial.** Each province, and CABA, runs its own broker licence and colegio. Res. 43 relies on that licence ("matriculados").
- **CABA, Law 2340.** The licence is issued by CUCICBA (Colegio Único de Corredores Inmobiliarios) and requires a broker degree. Unlicensed people may not broker (Art. 15). Duties under Art. 10 include:
  - check the title deeds and keep a copy;
  - request ownership, encumbrance and inhibition reports on the property and the parties;
  - show the licence number on every document (a company shows its IGJ number and the responsible director's licence number);
  - report an address change within 5 days.
- **CABA operations book (Art. 14).** Brokers must keep a book stamped by the colegio. It records mandates and completed operations in date order, with:
  - the parties' names and addresses;
  - the property's location;
  - the main contract terms;
  - the total amount and the commission.
- This overlaps heavily with the UIF operation log ([CABA Law 2340](https://www.colegio-escribanos.org.ar/normas/CABA_LEY_2340.pdf); [official CABA gazette](https://boletinoficial.buenosaires.gob.ar/normativaba/norma/101209)).
- **Other provinces.** Buenos Aires Province (Law 10.973, with departmental colegios of martilleros and corredores), Santa Fe (Law 13.154) and Córdoba (Law 9445) have their own licence laws and colegios. I did not read their record-keeping rules (unverified).
- **National civil code.** Art. 1347(a) requires every broker to check the identity and legal capacity of the parties ([Art. 1347 text](https://codigocivilonline.com.ar/etiquetas/articulo-1347/)).

**Supervision has regional arms.** In 2024, 114 of the UIF's 235 supervisions were carried out by three regional agencies (44, 36 and 34) ([UIF 2024 summary](https://www.argentina.gob.ar/sites/default/files/2016/09/uif_resumen_ejecutivo_gestion_2024_-_v03.pdf)). The agencies appear to be Centro, Litoral and Norte; their seats are (unverified). The FATF found DNFBP notaries and brokers concentrated in CABA and Buenos Aires Province, then Mendoza and Córdoba ([FATF MER 2024, para 114](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf)).

**Data differences the software must handle:**
- Property identifiers differ by province. The RSM accepts either the "nomenclatura catastral" or the registry "matrícula" ([UIF RSM guide](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles)).
- The broker licence number format differs by colegio (unverified).
- Alert (vii) targets large operations on properties inside the Border Security Zones set by Decree 253/2018. These zones cover parts of border provinces only (Res. 43 Art. 31(vii)).

## Upcoming changes

| When | What | Effect on the product | Source |
|---|---|---|---|
| Monthly, 1st-15th | RSM | Recurring workload | [Res. 43 Art. 34](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion) |
| 2 Jan - 15 Mar 2027 | RSA for 2026 | Annual peak, a natural sales window | same |
| 8 Nov 2026 | Res. 93/2026 brings in a new risk-based regime for property registries. Brokers are not mentioned | Registries will monitor more; broker data may be cross-checked (unverified) | [UIF resolutions](https://www.argentina.gob.ar/uif/normativa/resoluciones); [Res. 93/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/345725/20260810) |
| Before 30 Apr 2028 | Second ITAER, presumably covering 2026-2027 (my reading of Art. 5 and 36) | The data must be collected during 2026-2027 | [Res. 43](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion) |
| About 28 Aug 2028 | Second REI (120 calendar days after the ITAER deadline; my calculation) | REI workspace | same |
| 2030 | Methodology review (4 years after the first in 2026; my reading) | Versioned methodology | same |
| Possible | Relief for brokers like that given to accountants (REI moved to 1 Mar 2027) and lawyers (Res. 90/2026 suspended their first REI). None found for brokers | Keep deadlines as data, not code | [CPCE CABA](https://www.consejo.org.ar/noticias/2026/uif-se-prorroga-la-presentacion-del-informe-de-revision-externa-independiente); [abogados.com.ar](https://abogados.com.ar/resolucion-uif-902026-suspension-transitoria-de-la-primera-presentacion-del-rei-para-abogados-sujetos-obligados/39988) |
| Possible | Broker deregulation. The Sturzenegger draft (July 2026) would drop the licence and degree, let companies broker, and free fees. The Bongiovanni "Ley de Libertad Inmobiliaria" bill is similar. Not confirmed as filed or passed | Res. 43 Art. 2(o) refers to licensed brokers. The Law covers anyone who brokers, so the UIF would likely rewrite the scope (unverified). This could widen the obliged pool and weaken the colegio channel | [iProfesional, 28 Jul 2026](https://www.iprofesional.com/realestate/460633-5-fuertes-cambios-que-transformaran-para-siempre-el-negocio-inmobiliario-en-argentina); [iProfesional, 24 Jul 2026](https://www.iprofesional.com/politica/460737-federico-sturzenegger-busca-que-cualquiera-pueda-vender-propiedades-y-desata-furia-inmobiliaria) |
| Rolling | The UIF may update the módulo each budget year (Law Art. 24). The SMVM changes by resolution | Keep both in a parameter table | [Law](https://www.argentina.gob.ar/normativa/nacional/62977/actualizacion) |
| Rolling | Res. 43 still cites the repealed Res. 29/2013. Res. 207/2025 and Res. 3/2026 now govern terrorist and proliferation financing. Res. 43 may be tidied up (unverified) | Templates must cite the current rules | [Res. 207/2025](https://www.boletinoficial.gob.ar/detalleAviso/primera/333954/20251104) |
| Rolling | FATF follow-up after the 2024 MER, which called DNFBP supervision weak. Expect more broker inspections (my inference) | Inspection pack | [FATF MER 2024](https://fatf-gafi.org/en/publications/Mutualevaluations/MER-Argentina-2024.html) |
