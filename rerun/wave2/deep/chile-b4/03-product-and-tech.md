# Chile UAF kit: product, technical design and development plan (deep dive 03)

Part 3 of the Chile B4 deep dive. Date: 10 Oct 2026. Builds on [the B4 report](../reports/chile-b4.md), [01-law-and-requirements.md](01-law-and-requirements.md) and [02-market-and-competition.md](02-market-and-competition.md). The law file lists 68 testable product requirements. I cite them below as "R1" to "R68". "C62" is UAF Circular 62 ([UAF PDF](https://www.uaf.cl/media/documentos/Circular_N62.pdf)). "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm. Money: UF 1 = CLP 41,136 and USD 1 = CLP 981.61 on 10 Oct 2026 ([mindicador.cl](https://mindicador.cl/api)), so UF 1 is about USD 42.

Status: complete as of 10 Oct 2026. Open questions are listed at the end.

## Summary

- **Build a phone-first record keeper, not a filing tool.** The free UAF portal only takes registration, the ROS, the ROE, the nil ROE and inspection uploads. Everything else C62 demands (manual, client files, BO and PEP declarations, UN screening evidence, the case register, training records, the four registers, deadlines) has no home today. The product is that home. It prepares data for the portal but never files: only the compliance officer may send a ROS ([UAF FAQ](https://www.uaf.cl/es-cl/preguntas-frecuentes)), and the portal has no API.
- **The UAF's own top-ten gap list is the MVP scope.** PEP checks, annual training, ROE, client files, UN screening, manual distribution, BO data, the manual and registration upkeep ([DFC 2025](https://www.uaf.cl/media/documentos/Informe_Resultados_DFC_2025_y_Plan_2026_VF_xsmFFOU.pdf), p. 9). The 47 requirements marked [v1] in the law file cover all of them.
- **Key features no rival shows** (per the competitor review in [02-market-and-competition.md](02-market-and-competition.md)): a deadline engine in Chilean business days (nil ROE for every entity and SPV each January and July, 10-day registration changes, 40-day BO chase, 2-year manual, 12-month training); a confidential C62 case register with a ROS draft in the portal's field order; and a one-click inspection pack.
- **The data is free.** The UN consolidated list is a public XML (736 individuals and 274 entities on 9 Oct 2026, downloaded). Chilean PEPs come from **InfoProbidad open data under CC BY 4.0**, updated twice a week, but with no RUN, so matching is by name and position ([InfoProbidad](https://www.infoprobidad.cl/DatosAbiertos/Catalogos)). Company names and closure dates come from free SII lists; the UAF register gives only RUT and sector. The UAF's FATF page was a year stale, so we curate country lists ourselves. No automated ID-validity check is possible without an agreement with the Registro Civil.
- **Filing hand-off.** ROS: a 4-step web form, filled by copy-paste. ROE: a web form for brokers, an Excel template for others (layout not public yet), and a one-click nil ROE. The UAF's new machine channel (Oficio Circular 543, by fixed IP) may later allow ROE filing by software, and the MiUAF platform arrives in 2027 ([Of. 543](https://www.uaf.cl/media/documentos/Oficio_Circular_N543__Implementaci%C3%B3n_Clave_Unica_VF.pdf)). The product never touches Clave Única credentials.
- **Stack:** Django, HTMX and PostgreSQL in one app, with background jobs in Postgres, Word templates the lawyer edits, and no AI calls on customer data. **Host in Santiago** (Vultr's Santiago VMs from USD 20 a month, verified by its API; Google Cloud's Santiago region as the managed alternative). Ley 21.719 applies to us as a foreign processor from **1 Dec 2026**; hosting in Chile keeps the main data in the country, and the model clauses approved in December 2025 cover backups and remote access.
- **Running cost is small:** about USD 77 a month at 50 customers, USD 249 at 300 and USD 495 at 1,000 (my estimates), about 1-5% of revenue. Paddle's fees (5% + USD 0.50) cost more than the hosting.
- **Plan:** start Mon 12 Oct 2026; MVP on 30 Oct (3 weeks: a foundation week, then five build streams plus platform and QA agents on separate modules, with the founder as reviewer); pilots from 2 Nov; lawyer review in weeks 4-7; external security test in week 6; **paid launch on 1 Dec 2026**, in time for the nil-ROE window of 4-15 Jan 2027.
- **Cash budget to a sellable product: about USD 9,700-19,900**, mostly the Chilean AML lawyer (USD 3,000-6,000) and the security test (USD 3,000-6,000). No salaried developers. The build is cheap; the risk is sales and content quality.
- **Main risks:** a wrong template leading to a fine (mitigate with a named lawyer, versions, disclaimers and a liability cap); security holes in agent-written code (founder reviews security code, external test); UAF portal changes (form fields stored as data); and founder review time as the bottleneck.

## Users and jobs

### What the UAF portal leaves undone

The free UAF portal is a filing pipe. It takes registration, the ROS, the ROE and the nil ROE, and it has upload modules for inspections ([ROE guide](https://www.uaf.cl/media/documentos/2025_Env%C3%ADo_del_ROE_gxRNfwu.pdf), p. 7; [portal](https://reporteoperaciones.uaf.cl/portada_unica.asp)). Everything else in C62 lives with the entity. The product is the place where that "everything else" is kept and proven.

| Duty (C62) | UAF portal | Free UAF material | What the product adds |
|---|---|---|---|
| Registration upkeep, 10 business days (a.4, b.6) | Change requests go through a separate "Contáctenos"/SIAC form | None | A change log that opens a dated task, counts Chilean business days and stores the SIAC number and proof (R6-R7) |
| Manual, every 2 years, delivered to all staff (J) | Nothing | None (Simplo has a generic free template, [Simplo](https://simplo.cl/prevencion-lavado-activos-uaf-empresa/)) | Sector manual generator, approval record, delivery receipts per worker, 2-year clock (R11-R17) |
| Client file, yearly update (F) | "Formularios Recomendados DDC" module, content not public (unverified) | None | Client file with the 7 items, verification log, review dates (R18-R27) |
| Beneficial owner, 10%, 40-business-day clock (G) | Nothing | BO form and help sheet ([BO form](https://www.uaf.cl/media/documentos/Declaraci%C3%B3nBFJun2025_giwIbRd.pdf)) | Online BO form for the client, ownership calculator, 40-day chase (R28-R34) |
| PEP check (H) | Nothing | PEP form and a role list; the UAF says it keeps no PEP list ([UAF PEP page](https://www.uaf.cl/es-cl/normativa/personas-expuestas-politicamente-pep)) | PEP question, PEP form, free match against InfoProbidad, approval step, PEP register (R35-R39) |
| UN list screening, evidence 3 years (c.9-c.11) | Nothing | A page that links to the UN list ([UAF](https://www.uaf.cl/es-cl/sujetos-obligados/sector-privado/listas-de-resoluciones-onu)) | Automatic screening and re-screening with stored evidence (R40-R42) |
| Risk countries (K) | Nothing | The UAF FATF page still pointed at the **October 2025** FATF lists on 10 Oct 2026 ([UAF](https://www.uaf.cl/es-cl/sujetos-obligados/sector-privado/listas-de-paises-no-cooperantes)) | Current FATF and SII lists with effective dates (R43) |
| Case register of analysed operations (c.6-c.8) | Nothing | Red Flags Guide ([UAF](https://www.uaf.cl/media/documentos/GuiaSe%C3%B1alesAlerta2023.pdf)) | Confidential case log, red-flag library, ROS draft in portal field order (R44-R50) |
| ROE every six months, nil ROE compulsory (D) | Filing, status and certificate | ROE calendar ([UAF](https://www.uaf.cl/media/documentos/Calendario_ROE_2026_fJZ3WvN.pdf)) | A task per entity per semester, cash register, status and certificate tracking (R51-R57) |
| Four permanent registers, 5 years (E) | Nothing | None | The registers as filterable lists with Excel and PDF export (R58-R59) |
| Annual training of all staff (L) | "Cursos e-learning" for registered entities, with periodic intake ([UAF campus](https://capacitacion.uaf.cl/campus/)) | Generic courses | Training on the entity's own manual and the Red Flags Guide, attendance record, 12-month clock (R63-R65) |
| Inspection | Upload modules for remote and on-site inspections | None | One-click inspection pack mapped to the UAF's 8 verification standards (R60-R62) |

### Who uses the product

| Role (Spanish label) | Who it is | Main jobs | Rights |
|---|---|---|---|
| **Titular / representante legal** | Sole broker, owner of a broker firm, manager of a developer, the notary or conservador | Approve the manual as the "top governing body" (C62 j.3); approve PEP and high-risk clients (f.10.4, h.4.1); report changes of legal representative (b.6); pay | Everything in own entities, billing, grant or revoke partner access |
| **Oficial de cumplimiento (OdC)** | In micro and small firms often the owner or a partner (C62 b.3). In a developer group often one person for many SPVs | Run the programme; keep the case log; **only the OdC sends a ROS** ([UAF FAQ](https://www.uaf.cl/es-cl/preguntas-frecuentes)); send the ROE and nil ROE | Everything, plus the confidential case area (R50) |
| **Staff** (corredor asociado, ejecutivo de ventas, oficial de notaría) | Agents, sales staff, notary clerks | Record deals, onboard clients, send BO links, flag concerns, take training | Clients and deals they work on. Can raise a concern but cannot see case outcomes |
| **Group admin** | Finance or legal manager of a developer group | See all SPVs in one view; keep nil ROEs and manuals in step | All entities in the group; case areas only if also OdC |
| **Partner** (contador, asesor de cumplimiento) | Accountant or compliance boutique serving several small entities | Set up and watch many entities. The OdC cannot be external ([AZ](https://www.az.cl/claves-para-entender-el-impacto-regulatorio-de-la-circular-n62-de-la-uaf/)), so the partner supports, it does not replace | Per-entity grant from the titular; portfolio view; no case access unless the OdC grants it (R66) |
| **End client** (comprador, vendedor, arrendador, arrendatario, sociedad) | The entity's own client | Fill in and sign the BO and PEP forms, upload ID | No account; a one-time secure link |
| **Content editor** | Our Chilean AML lawyer or compliance consultant | Edit manual templates, forms, red flags, course and quiz; publish versions | Content area only; never customer data |
| **Platform admin** | The founder | Support, billing, list feeds | No access to customer data except a logged, time-limited grant; **never** case data (Law art. 6 binds service providers, R66) |
| **UAF inspector** | UAF supervision division (DFC) | Review documents | No login. Gets the inspection pack, which the OdC uploads through the portal's inspection modules |

### Jobs to be done (in the buyer's words)

1. **"Tell me what is due, for every entity I run."** Nil ROE in the first 10 business days of January and July. Data changes within 10 business days. Manual every 2 years. Training every 12 months. Client files every year. BO chase at 40 business days. The yearly UAF portal password ([UAF FAQ](https://www.uaf.cl/es-cl/preguntas-frecuentes)). The UAF's own top-ten gap list is mostly missed deadlines and missing records: PEP checks, annual training, ROE, client files, UN screening, manual distribution, BO data, the manual itself and registration upkeep ([DFC 2025](https://www.uaf.cl/media/documentos/Informe_Resultados_DFC_2025_y_Plan_2026_VF_xsmFFOU.pdf), p. 9).
2. **"Let me do the client check on my phone in five minutes."** Brokers work in the street and at viewings. The client file, BO link and PEP question must work on a phone.
3. **"Get me through an inspection."** One pack with the manual, approvals, delivery receipts, registers, screening evidence, training and ROE certificates.
4. **"Help me decide when something looks odd, and keep it secret."** Red flags, a case record with the C62 fields, a ROS draft that fits the portal form, and no trace visible to the client.
5. **"Give me a manual that fits my business."** A broker, a developer and a notary need different thresholds, ROE forms and red flags.
6. **"Train my people once a year and prove it."**
7. **"Keep 15 SPVs compliant without 15 spreadsheets."** A developer group files a nil ROE for each SPV twice a year until each SPV is formally closed ([01 law file](01-law-and-requirements.md), C62 a.5-a.6, d.3).

## Feature map

### Release stages

- **MVP (end of week 3).** Internal build that covers every requirement the law file marks [v1]. Content is still in draft (written by the founder and agents from the primary texts, not yet lawyer-approved).
- **Sellable (weeks 6-8).** Lawyer-approved content, billing, the external security test and its fixes, 5-10 pilot users, terms and data processing agreement.
- **v1 (months 3-6).** Things that wait for pilot data or third parties: the non-bank ROE Excel file, ID scanning, add-ons.
- **Later.** Direct filing and MiUAF integration, CRM integrations, Peru.

### Feature table

| Module | MVP (week 3) | Sellable (weeks 6-8) | v1 (months 3-6) | Later |
|---|---|---|---|---|
| Accounts, roles, entities | Account with many entities (R3); roles titular, OdC, staff; MFA for titular and OdC; entity switcher; entity status incl. "activity ended, closure pending" (R4) | Partner role and portfolio view; group admin; invitations | Bulk actions across entities | SSO |
| Entity set-up | RUT entry with check-digit validation; prefill from the UAF register (RUT and sector) and SII name list; UAF category, legal form, size (micro/small/medium/large by UF sales) (R1-R2); OdC and legal representative data (R6) | OdC eligibility checklist and appointment document (R8); UAF registration certificate with folio and 60-day validity (R10); portal password reminder (R9) | | |
| Deadline engine | Tasks with due dates in Chilean business days (weekends and holidays excluded); ROE semester tasks per entity (R54); 10-business-day change task (R7); manual 2-year (R15); training 12-month (R65); client review 12-month (R24); BO 40-day (R31); weekly e-mail digest | Combined view across entities; calendar export (ICS) | WhatsApp share link for reminders (wa.me, no API) | |
| Manual and risk policy | Generator with the 9 required parts (R11) for 4 sector variants (R12); approval record (R14); delivery to each worker with acknowledgement (R17) | Lawyer-approved templates; risk policy section rating threats, vulnerabilities and impact (R13); "update needed" flag after a law change (R16) | | |
| Deals (operaciones) | Deal record with parties, amount, currency, date, means of payment; conversion at the day's dólar observado (or UF for notaries); one-off threshold with linked deals (R19, R51-R52) | CSV import of deals | Import from developer CRMs and notary software exports | API for CRMs (Tokko, Kiteprop, PlanOK) |
| Client file (DDC) | The 7 C62 items for persons and companies (R18); permanent-relationship and suspicion switches (R20-R21); refusal opens a case (R23); risk rating with enhanced-measure fields (R26); verification log (R22) | Simplified measures from the 7 C62 f.12 options (R27); purpose vs actual deals check (R25) | ID card MRZ scan to prefill RUN, serial and names | |
| Beneficial owner | UAF BO form with all fields, online link or print (R28-R29); ownership chain calculator tested on the UAF help-sheet cases (R30); 40-business-day clock (R31) | Verification record (R32); foreign companies (R33); "update without changes" (R34) | Advanced e-signature (FEA) add-on | Query an SII BO register if one is enacted (unverified) |
| PEP | PEP question and UAF PEP form for every client and BO (R35); approval before activation (R37); PEP register (R38) | Match against InfoProbidad open data; longer PEP period by policy (R36); re-approval on change (R39) | Foreign PEPs via OpenSanctions, pay per check | |
| Screening | UN consolidated list: onboarding check, re-screen on every list change and at least weekly (R40); evidence kept 3 years (R41); hit review; immediate-ROS task on a confirmed match (R42) | FATF and SII country lists with effective dates (R43); PDF screening certificate with a hash | Accredited electronic timestamp on evidence (see Security) | Adverse media |
| Cases and ROS | Red-flag library: section 15 (15.1-15.30) plus general flags (R44); case record with all C62 c.8 fields (R45); 5-year retention (R46); ROS draft in portal field order with character counters, RUT validation, region/comuna lists, attachment checks (R47); only the OdC marks "sent" and stores the certificate (R48); restricted access (R50) | Elapsed-time warning (R49) | | Filing through the UAF machine channel if vendors are allowed (unverified) |
| ROE | Cash register; ROE task per entity per semester, data or nil (R54); ROE Simplificado data view for brokers (R53); status and certificate (R55); supporting documents (R57) | Correction workflow (R56) | Fill the non-bank 2-sheet Excel template once a pilot shares it (R53) | Machine-channel filing (unverified) |
| Training | Training register: method, date, content, attendees (R63-R64); overdue list (R65) | Short course on the entity's manual and the Red Flags Guide with a quiz and certificate; upload of UAF campus certificates | More micro-courses; course sold to broker schools | |
| Registers, retention, inspection | The 4 registers with Excel and PDF export (R58); retention clocks (R59); inspection pack ZIP (R60); audit trail (R68) | UAF information-request log (R61); inspection and remediation record (R62) | | Read-only "inspection room" link |
| Billing | None (pilots free) | Paddle checkout and plans (Solo, Office, Notary, Group, Partner); invoice download | Annual prepay discount | |
| Data protection | Processor terms draft; export of one person's data | DPA with Chilean model clauses for transfers; breach procedure; data map (R67) | | |

### Why this cut

- The MVP column covers the UAF's top-ten gaps directly. PEP checks are gap 1, training gap 2, ROE gap 3, client files gaps 4 and 6, UN screening gap 5, manual distribution gap 7, BO gap 8, the manual gap 9, and registration upkeep gap 10 ([DFC 2025](https://www.uaf.cl/media/documentos/Informe_Resultados_DFC_2025_y_Plan_2026_VF_xsmFFOU.pdf), p. 9).
- Screening is a commodity: four vendors already sell it ([02 market file](02-market-and-competition.md)). The product includes it because the law demands it and the data is free (UN list, InfoProbidad). It does not compete on screening depth.
- No feature files anything with the UAF. Only the OdC may send a ROS ([UAF FAQ](https://www.uaf.cl/es-cl/preguntas-frecuentes)). The portal has no public API ([01 law file](01-law-and-requirements.md)).

## Key flows

### Flow 1: First hour (target: manual ready to approve in under 45 minutes)

1. Sign up with e-mail and password. Turn on MFA (an authenticator app). A 30-day free trial; no card for pilots.
2. Type the entity's RUT. The app checks the RUT check digit (modulo 11, as in `python-stdnum`'s `cl.rut` module ([PyPI](https://pypi.org/project/python-stdnum/))). It looks up the RUT in the UAF register file (RUT and economic activity only) ([UAF xlsx, 30 Jun 2026](https://www.uaf.cl/media/documentos/Sujetos_Obligados_inscritos_en_la_UAF_al_30.06.2026.xlsx)) and, for companies, the SII legal-entity name list ([SII nóminas](https://www.sii.cl/sobre_el_sii/nominapersonasjuridicas.html)). Result: "Registered with the UAF as corredor de propiedades" or "Not found in the June 2026 register: you may need to register" with the link to [registro.uaf.cl](https://registro.uaf.cl/entidades_reportantes/registro_so.aspx).
3. Choose or confirm the category: corredor, empresa de gestión inmobiliaria, notario, conservador. This sets the one-off threshold (USD 3,000 or 1,000 UF), the ROE form and the red flags (R1, R12).
4. Size by annual sales in UF (micro up to 2,400, small up to 25,000; [SII](https://www.sii.cl/preguntas_frecuentes/factura_electronica/001_003_6503.htm)). If micro or small, explain that the owner may be the OdC (C62 b.3).
5. People: legal representative, OdC and staff, with RUN, address, phone and e-mail (R6).
6. Business questions for the manual and risk policy (15-25 questions): sales or rentals or both, cash received or not, foreign clients, companies as clients, branches, typical deal size. Each shows a one-line "why we ask".
7. Preview the manual with the 9 required parts (R11). Edit the free-text parts.
8. Approve: the titular clicks "Apruebo" (name, role, date, version). Option to print, sign and upload a scan.
9. Send to staff: each worker gets an e-mail link and clicks "Recibí y leí" (R17).
10. Tasks appear: the next ROE window (for example 4-15 Jan 2027, [UAF ROE calendar](https://www.uaf.cl/media/documentos/Calendario_ROE_2026_fJZ3WvN.pdf) per the [01 law file](01-law-and-requirements.md)), training due, manual review in 2 years, portal password renewal.

**Developer group variant.** After the first entity, "Add another entity" accepts a list of RUTs (paste or Excel). The app copies the manual, OdC and staff from the first entity, and creates one ROE task per entity per semester (R3).

### Flow 2: New deal and client check (broker on a phone, target 5 minutes)

1. "Nueva operación": sale or rental, property address, price in UF or CLP, the parties and their side.
2. The app converts to USD at the day's dólar observado and adds linked deals for the same client in the last 12 months (my proposed window; C62 says "linked"). It shows "Client check required" when the one-off threshold is met, the client is a permanent relationship, or suspicion is ticked (R19-R21).
3. Client data: the 7 items. For a person: ID number, nationality, occupation, residence, address, contact, purpose. For a company: RUT, legal form and status (R18).
4. Company client: "Send BO form" creates a secure link. The broker can share it by e-mail or WhatsApp (a `wa.me` link with prefilled text, no WhatsApp API needed). The 40-business-day clock starts (R31).
5. PEP question for the client (and later each BO). If yes, or the InfoProbidad match is strong, the deal needs the titular's approval and source-of-funds fields (R37).
6. Screening runs at once against the UN list. A possible hit blocks the file until the OdC reviews it (R42).
7. Risk rating from the policy rules: low, medium or high with the reasons. High risk opens the enhanced fields (R26).
8. Means of payment: if cash (notes and coins only) above USD 10,000, the deal goes into the cash register and the next ROE (R51-R52).
9. The client file is saved with a review date 12 months ahead and a dated PDF record.

### Flow 3: Client fills in the BO and PEP forms (no account)

1. The client opens the link on a phone. It shows the entity's name, why the law asks (C62 g), and the data use notice.
2. The form follows the UAF BO form: declaration type, company data, owners at 10% or more, control below 10%, the declarant ([BO form](https://www.uaf.cl/media/documentos/Declaraci%C3%B3nBFJun2025_giwIbRd.pdf)). A helper multiplies shares along chains, as the UAF help sheet shows ([AyudaBF](https://www.uaf.cl/media/documentos/AyudaBF.pdf)).
3. The client confirms with a one-time code sent to the e-mail or phone, then "signs" by typing the name. This is a simple electronic signature. Ley 19.799 art. 3 gives electronically signed acts the same effect as paper, and art. 4 requires the advanced signature only for public instruments ([Ley 19.799, BCN](https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=19799)). Whether a simple signature is enough for this sworn declaration is an open question for the lawyer ([01 law file](01-law-and-requirements.md), open question 3). A "print and sign" option is always there.
4. The signed PDF, the code log (time, channel, IP) and a hash are stored in the client file. The broker sees "BO received".
5. Reminders go out on business days 10, 20 and 30. On day 41 without a form, a case opens with "unjustified delay" (R31).

### Flow 4: Screening, every day (automatic)

1. Every 6 hours: download the UN consolidated XML, store it with a checksum, and compute what was added, changed or removed.
2. On any change: screen every active client, BO, representative and prospect of every entity against the changed entries. Re-screen everyone at least weekly (R40).
3. A possible match creates a task for the OdC, with both records side by side.
4. The OdC decides: "not the same person" (reason required), or "confirmed". A confirmed match creates an urgent "ROS now, no analysis" task (R42).
5. Twice a week (InfoProbidad updates on Tuesdays and Fridays, [InfoProbidad](https://www.infoprobidad.cl/DatosAbiertos/Catalogos)): refresh the PEP data and re-check clients with no PEP declaration on file.

### Flow 5: Something looks odd, ROS or not

1. Any user ticks a red flag on a deal, or presses "Reportar inquietud". Staff see only "Enviado al oficial de cumplimiento".
2. The OdC sees a confidential case with the open date, trigger and linked deals and people.
3. The OdC records the analysis phases, steps and sources (R45). Closing needs a conclusion and reasons.
4. If the decision is ROS, the app builds a draft in the order of the UAF's 4-step web form, with counters for the 250-1,000 and 250-500 character fields and validation of RUTs ([ROS guide](https://www.uaf.cl/media/documentos/2025_Instrucciones_Env%C3%ADo_del_ROS_IPRI.pdf), p. 4-19). Each field has a "copy" button.
5. The OdC logs in to the UAF portal (Clave Única from 19 Oct 2026, with the UAF password as a second factor before sending; [Of. 543](https://www.uaf.cl/media/documentos/Oficio_Circular_N543__Implementaci%C3%B3n_Clave_Unica_VF.pdf); [01 law file](01-law-and-requirements.md)) and pastes the data. The app never asks for, stores or uses UAF or Clave Única credentials.
6. The OdC uploads the UAF sending certificate (ROS number, verification code) and the case closes (R48).

### Flow 6: ROE semester (January and July)

1. Ten days before the window opens, each entity gets a ROE task (R54).
2. If the cash register has operations, the app shows them in the order of the ROE Simplificado web form (brokers) or, from v1, fills the non-bank Excel template (real-estate firms, notaries, conservadores) (R53).
3. If there were none, the task says "Send ROE negativo": a link to the portal and the 3 clicks to make.
4. The OdC enters the UAF status and uploads the certificate. The task stays open until "Aprobado". "Rechazado" reopens it. "Aprobado Fuera de Plazo" is flagged as a breach (R55).
5. A group admin sees one row per SPV with its RUT, so the OdC can work through the portal's "Cambiar Entidad" list in order.

### Flow 7: Yearly cycle and inspection

- Training: the app lists every worker with no training in the last 12 months (R65). A session can be the built-in course or an outside one with a certificate.
- Client files: due at 12 months, earlier after a relevant change (R24).
- Manual: review due 2 years after approval (R15), or earlier when we flag a law change (R16).
- UAF letter arrives: log the request and its deadline (R61). Press "Preparar carpeta de fiscalización": choose the date range, see gaps in red, generate the ZIP (R60). Upload it in the portal's inspection module.

### Flow 8: Partner with many entities

1. The accountant or consultant creates a partner account and invites each client's titular, or creates the entity and hands over ownership.
2. The portfolio view shows one row per entity with traffic lights: manual age, training, ROE status, overdue client files, open hits.
3. The titular can revoke access at any time. The data stays with the entity.

## Screens

1. **Panel (dashboard).** For one entity: 8 tiles that mirror the UAF verification standards and gap list (registration, OdC, manual, client files, BO, PEP, screening, training, ROE, registers). Each tile is green, amber or red with a reason ("Nil ROE for Jan 2027 not yet approved"). Below: "Vence esta semana" and "Coincidencias por revisar". For groups and partners: the same, one row per entity.
2. **Set-up wizard.** One question per card, progress bar, "por qué preguntamos". Works on a phone.
3. **Manual.** Versions, status (draft, approved, delivered), approval record, delivery table per worker, "regenerate after a change" with a visible diff.
4. **People.** Staff list with role, training status, manual receipt and OdC/legal representative flags. Registration data and the "report to UAF in 10 business days" tasks.
5. **Operaciones (deals).** List with filters (needs client check, cash, flagged). Deal form built for a phone: big fields, UF/CLP switch, the day's rate shown.
6. **Client file.** Tabs: Identity, Ownership (BO tree and percentages), PEP, Screening history, Risk and approvals, Documents, Timeline (every change with user and time), Reviews.
7. **Client form (public link).** BO and PEP forms for the end client, with code-based signing.
8. **Screening hit review.** Left: our person. Right: the UN entry (names, aliases, birth dates, nationality, listing reference, date listed). Match score and reasons. Buttons with required reasons.
9. **Casos (OdC only).** Confidential list; case page with trigger, flags, people, analysis steps, decision, ROS draft view with copy buttons and counters, and the certificate upload.
10. **ROE.** One row per entity per semester: status, certificate, cash operations included; "nil" checklist.
11. **Training.** Plan, sessions, attendance, course player (short pages plus a 10-question quiz), certificates.
12. **Registers.** Four tabs (cash, suspicious, DDC, PEP) with filters, retention dates and Excel/PDF export.
13. **Inspection pack.** Date range, checklist mapped to the 8 standards, gaps in red, generate ZIP.
14. **Partner portfolio.** Table of entities with traffic lights and next deadlines.
15. **Content admin (lawyer).** Templates (upload DOCX, preview with a test entity, publish with an effective date), red-flag library, risk rules with test cases, course and quiz. A second person approves each publish.

**UX rules.** Chilean Spanish everywhere (R5), using C62's own point labels in tooltips ("literal g.3.8"). Phone-first for deals and client files; desktop-first for the manual, cases and exports. Plain words; the legal source sits in a tooltip. Every list starts with a "cómo empezar" card. Everything prints.

## Data sources and integrations

All checks below were done from this environment on 10 Oct 2026 unless a source says otherwise.

### At a glance

| Source | Use | Access and format | Licence and cost | Checked |
|---|---|---|---|---|
| UN Security Council consolidated list | UN screening (binding, C62 c.9-c.11) | XML, English and Spanish | Free, public | Downloaded: 736 individuals, 274 entities |
| InfoProbidad open data (CPLT and Contraloría) | Chilean PEP matching | CSV, JSON, XML, SPARQL | **CC BY 4.0**, free | Catalogue read; CSV header read |
| OpenSanctions | Foreign PEPs and other sanctions lists (optional) | REST API or bulk files | API EUR 0.03-0.10 per query; bulk use needs a commercial licence | Prices read |
| FATF lists | High-risk countries (C62 k.1-k.3) | Web pages, 3 plenaries a year | Free; we curate by hand | UAF page found stale |
| SII preferential tax regime list | High-risk countries (C62 k.3) | PDF (SII Res. Ex. 30 of 6 Mar 2025) | Free; curated by hand | Links found |
| Dólar observado and UF | Thresholds (USD 3,000, USD 10,000, 1,000 UF) | CMF API (free key), Banco Central BDE API (free user), mindicador.cl (no key, unofficial) | Free | All three answered |
| Chilean public holidays | Business-day deadlines | Unofficial JSON (api.boostr.cl); official sources are laws and decrees | Free | boostr answered; the government API did not |
| Regions and comunas (CUT codes) | ROS and ROE address pick-lists | SUBDERE spreadsheet; MINSAL FHIR value set | Free | Sources found |
| UAF register of reporting entities | Onboarding prefill, sales leads | XLSX every 6 months; RUT and activity only, no names | Free | Downloaded |
| SII legal-entity lists | Company name, start date, closure (término de giro) | TXT in ZIP, about 52 MB, updated Aug 2026 | Free | Headers checked |
| Registro Civil document validity | Check that an ID card is valid | Public web page behind Cloudflare; a web service exists for institutions by agreement | Free web page; agreement terms unverified | Page blocked automated access |
| UAF portal | ROS, ROE, nil ROE, inspections | Web forms and Excel upload; **no public API** | Free | Portal reachable |
| UAF machine channel (Of. 543) | Possible future filing | Separate access for automated ROE/ROS senders, by IP, after UAF approval | Free | Circular read |
| E-signature | BO and PEP declarations | Simple signature in-app; advanced signature (FEA) from accredited providers | Simple: free; FEA: per provider (unverified) | Law read |

### Sanctions list (UN)

- **Endpoint.** `https://scsanctions.un.org/resources/xml/en/consolidated.xml`. It redirects to a signed Azure blob that expires after one hour, so the downloader must follow redirects every time. File size 2.19 MB. The file I downloaded was generated on 9 Oct 2026 at 23:00 UTC and held **736 individuals and 274 entities**. A Spanish version is at `.../xml/sp/consolidated.xml` (2.26 MB, same 736 individuals). Schema: `https://www.un.org/sc/resources/sc-sanctions.xsd` (named in the file).
- **What the UAF says.** C62 requires screening against the lists of 14 named UN resolutions and their successors ([01 law file](01-law-and-requirements.md), duty 13). The UAF page links to the UN consolidated list and the 1267, 1988, 1718 and 1737 committee lists ([UAF](https://www.uaf.cl/es-cl/sujetos-obligados/sector-privado/listas-de-resoluciones-onu)). The consolidated list covers all UN regimes, so one file is enough (my reading; the lawyer should confirm).
- **Design.** Store every version with a checksum. Index names and aliases after normalising (lower case, strip accents, drop legal suffixes such as "SpA", "Ltda.", "S.A."). Pull candidates with trigram search and score them with `rapidfuzz` (MIT, [PyPI](https://pypi.org/project/RapidFuzz/)); raise or lower the score with birth year and nationality. Keep the list version used in every check (R40-R41).
- **OFAC and EU lists** are not required by C62 but some clients expect them (best practice). They are free XML files. Add them in v1 only if pilots ask.

### PEP data

- **There is no official PEP list.** The UAF states that it does not make or keep PEP lists. It only names the minimum categories, from the President to concejales, judges, prosecutors, ambassadors, Central Bank board members, directors of state companies and party leaders, plus spouses, civil partners, relatives up to the second degree and joint-action pact partners ([UAF PEP page](https://www.uaf.cl/es-cl/normativa/personas-expuestas-politicamente-pep)).
- **InfoProbidad is a free, licensed source for most of these roles.** Officials covered by the probity law (Ley 20.880) file asset and interest declarations. The CPLT publishes them as open data in CSV, XML and JSON under **CC BY 4.0**, updated on Tuesdays and Fridays ([InfoProbidad catalogue](https://www.infoprobidad.cl/DatosAbiertos/Catalogos)). The declarations CSV is about 48 MB ([CSV](https://datos.cplt.cl/catalogos/infoprobidad/csvdeclaraciones)). Its columns include names, both surnames, institution, position ("Cargo"), comuna, declaration type and dates. **It has no RUN**, so matching is by name plus position. The rows I saw included alcaldes and concejales, which the UAF lists as PEPs.
- **OpenSanctions repackages the same source.** Its `cl_info_probidad` dataset holds 7,501 PEP persons and 931 positions, processed daily, last changed 7 Oct 2026 ([OpenSanctions](https://www.opensanctions.org/datasets/cl_info_probidad/)). Business use of OpenSanctions data needs a paid licence. The API costs EUR 50 for 500 queries (EUR 0.10 each) down to EUR 15,000 for 500,000 (EUR 0.03), excluding VAT ([OpenSanctions API](https://www.opensanctions.org/api/)). Since the original CPLT data is CC BY 4.0, **we can use it directly for free** with attribution.
- **Limits.** InfoProbidad has no relatives or pact partners. Those come only from the client's signed PEP declaration ([PEP form](https://www.uaf.cl/media/documentos/DeclaracionPEP.pdf)). Foreign PEPs need OpenSanctions (pay per query) or the client's declaration.
- **Design.** MVP: PEP question and UAF PEP form for every client and BO. Sellable: weekly InfoProbidad import mapped to the UAF categories by position; a name match without a PEP declaration creates a review task. v1: optional OpenSanctions check for foreign clients, billed as an add-on.
- **Cost check, my estimate.** If every new foreign person went to OpenSanctions: 1,000 customers × 10 foreign persons a year = 10,000 queries, about EUR 800 a year. Chilean persons cost nothing.

### Risk countries

- **FATF.** The UAF page "Listas de países no cooperantes" linked to the FATF "call for action" and "increased monitoring" lists **of October 2025** when I read it on 10 Oct 2026 ([UAF](https://www.uaf.cl/es-cl/sujetos-obligados/sector-privado/listas-de-paises-no-cooperantes)). So the free source is a year out of date. The product keeps its own country table with effective dates and updates it within 5 business days of each FATF plenary (R43). This is about 3 manual updates a year.
- **SII preferential tax regimes.** Ley 21.713 replaced art. 41 H of the income tax law, and the SII fixed the list by Res. Ex. N°30 of 6 Mar 2025 ([UAF page](https://www.uaf.cl/es-cl/sujetos-obligados/sector-privado/lista-de-paises-con-regimen-fiscal-preferencial); [Res. 30](https://www.uaf.cl/media/documentos/Res30_SII.pdf); [annex](https://www.uaf.cl/media/documentos/Res30_SII_Anexo1.pdf)). Enter it by hand, with the resolution number as the source.

### Exchange rates and UF

- Thresholds need the day's rate: USD 3,000 and USD 10,000 at the Banco Central "dólar observado", and 1,000 UF for notaries and conservadores (R19, R52).
- **CMF API.** Official and free, but needs a key. Without one it answers "API key no ha sido suministrada" (`https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar?formato=json`, tested).
- **Banco Central BDE web service.** Official; needs a registered user (`https://si3.bcentral.cl/SieteRestWS/SieteRestWS.ashx`, tested without credentials: error page).
- **mindicador.cl.** Unofficial, no key. It returned the dólar observado of 981.61 for 9 Oct 2026 and the UF of 41,136.24 ([mindicador.cl](https://mindicador.cl/api/dolar)).
- **Design.** Use the CMF API as primary and mindicador as fallback. Store each day's rate with its source, so every threshold decision can be reproduced.

### Business days, holidays and places

- **Business days.** Chilean administrative law counts days as business days and treats Saturdays, Sundays and holidays as non-business days (Ley 19.880, art. 25, [BCN](https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=19880)). C62 deadlines (10 business days, 40 business days) are counted the same way (my reading; R7 asks for it).
- **Holidays.** The government holiday API (`apis.digital.gob.cl/fl/feriados`) did not answer from here (HTTP 502). An unofficial API answered with the 2026 list ([api.boostr.cl](https://api.boostr.cl/holidays.json)). Holidays are set by many separate laws, so the product keeps its own holiday table, checked each December against an official source (unverified which official list is complete). Regional holidays exist (for example in Arica and Chillán, unverified); store the comuna of each entity so they can be added.
- **Regions and comunas.** The ROS and ROE forms use pick-lists. Load the SUBDERE "códigos únicos territoriales" (346 comunas) ([SUBDERE](https://www.subdere.gov.cl/node/76974); [MINSAL value set](https://build.fhir.org/ig/Minsal-CL/NID/ValueSet-VSCodigosComunaCL.html)). The UAF's own pick-list may differ slightly; match it during the pilot (unverified).

### Registers for prefill and checks

- **UAF register.** The June 2026 file has three columns: number, RUT and economic activity (sector). It has no names ([UAF xlsx](https://www.uaf.cl/media/documentos/Sujetos_Obligados_inscritos_en_la_UAF_al_30.06.2026.xlsx), 503 KB, last modified 24 Sep 2026). Use: tell a new user whether the UAF already lists the entity, and in which sector.
- **SII legal-entity lists.** Free TXT files inside ZIPs: names ("razón social") with start-of-activity and closure dates, addresses, and economic activities, all updated August 2026 ([SII nóminas](https://www.sii.cl/sobre_el_sii/nominapersonasjuridicas.html); `PUB_NOMBRES_PJ.zip` 52 MB, `PUB_NOM_ACTECOS.zip` 39 MB). Uses:
  - autocomplete a company client's name from its RUT;
  - warn when a company client has a "término de giro";
  - for a developer group, show which SPVs the SII lists as closed but the UAF still lists as registered. Those SPVs still owe a nil ROE until the UAF confirms de-registration (C62 a.5-a.6).
- **No public company owners register.** Shareholders are not in these files. A beneficial-owner register run by the SII was proposed by bill in December 2023 ([Hacienda](https://www.hacienda.cl/noticias-y-eventos/noticias/gobierno-ingresa-a-tramitacion-proyecto-que-crea-registro-de-beneficiarios)). I found no proof that it was enacted (unverified). So BO data comes from the client's declaration plus the entity's own checks.

### Identity documents

- **Chilean ID card.** A new cédula has been issued since 16 Dec 2024. It has a contact and a contactless chip and a QR code that verifies authenticity; older cards stay valid until they expire ([Bloomberg Línea](https://www.bloomberglinea.com/latinoamerica/chile/registro-civil-nuevo-carnet-digital-de-identidad-en-chile-paso-a-paso-para-obternelo/); [Sovos](https://sovos.com/es/blog/iva/nueva-cedula-de-identidad-digital-en-chile-innovacion-y-retos/)). The Ministry of Justice's Res. Ex. 466 (Diario Oficial, 7 Dec 2024) sets the card: ID-1 size under ICAO Doc 9303; a chip using ISO 14443 A and B with the ICAO travel-document application; a QR code in the optional-data zone on the back; and a **3-line, 30-character machine-readable zone** (OCR-B) with document type "IN", country "CHL", the RUN and the names ([Diario Oficial](https://www.diariooficial.interior.gob.cl/publicaciones/2024/12/07/44018/01/2580493.pdf)). So the standard TD1 MRZ can be read with open-source OCR. I did not confirm what the QR code holds (unverified).
- **Validity check.** The Registro Civil's public "document validity" page moved to `portal.nuevosidiv.registrocivil.cl/document-validity`. It blocked my automated request with Cloudflare. So automated checks are not possible without an agreement. The Registro Civil does offer a 24-hour web service for institutions that send the RUN and serial number, as its agreement with the SII shows ([SII Res. 105 of 2021](https://www.sii.cl/normativa_legislacion/resoluciones/2021/reso105.pdf)). Whether a private SaaS can get such an agreement is unverified.
- **Paid remote checks exist.** Didit, a foreign identity vendor, sells a Chilean "non-document" check: the person types the RUN and takes a selfie, which is matched against the Registro Civil record. Its blog states USD 0.30 per verification and 500 free checks a month (vendor claim, March 2026, [Didit](https://didit.me/blog/non-doc-verification-chile-registro-civil/)). This involves biometric data and a transfer abroad, so it can only be an opt-in add-on after a legal review.
- **Design.** MVP: type the RUN and serial number, upload photos of both sides, tick "original seen", and record the date and user. A button opens the Registro Civil validity page in a new tab, and the user records the result. v1: read the MRZ with the phone camera to prefill the RUN, serial and names (in-browser or on our server, no ID images sent to third parties). Later: an optional remote check through a vendor such as Didit for clients who never meet the broker in person.
- **RUT validation.** Modulo 11 check digit, in `python-stdnum` (`stdnum.cl.rut`, LGPL, [PyPI](https://pypi.org/project/python-stdnum/)). The ROS form validates the check digit too ([ROS guide](https://www.uaf.cl/media/documentos/2025_Instrucciones_Env%C3%ADo_del_ROS_IPRI.pdf)).

### Electronic signatures

- **Law.** Acts signed with any electronic signature are valid like paper ones (Ley 19.799 art. 3). Only public instruments need the advanced signature (art. 4). A private document signed with an advanced signature has full evidential value, but it does not prove its date unless an accredited provider timestamps it (art. 5) ([Ley 19.799, BCN](https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=19799)). The Labour Directorate reads art. 4 to mean that non-public documents do not need the advanced signature ([Dirección del Trabajo](https://dt.gob.cl/legislacion/1624/w3-article-111073.html)).
- **Advanced signature (FEA).** Only accredited providers ("PSC") issue it, such as Acepta, E-Certchile and E-Cert ([Sovos](https://sovos.com/es/blog/iva/que-son-los-psc-o-prestadores-de-servicios-de-certificacion/)). I found no public per-document API price (unverified). A bill to modernise FEA (Boletín 18.286-03) was filed on 2 June 2026 ([Carey](https://www.carey.cl/api/archivo/ingresa-proyecto-de-ley-que-moderniza-el-regimen-de-firma-electronica-avanzada?lang=es)).
- **Design.** MVP: simple signature with a one-time code, a full log and a document hash, plus "print and sign". v1: an FEA add-on through one PSC, if the lawyer says the sworn BO declaration benefits from it and a provider quotes a fair price. v1 also: accredited electronic timestamps on screening evidence and on the daily audit-log hash, so dates hold up (art. 5; cost unverified).

### UAF portal and filing

- **No API.** ROS: a 4-step web form with attachments up to 50 MB each. ROE for brokers: the "ROE Simplificado" web form. ROE for real-estate firms, notaries and conservadores: upload of a 2-sheet Excel template that is downloadable only inside the portal. Nil ROE: pick the period and click. Inspections: upload modules ([01 law file](01-law-and-requirements.md), "Filing channels and formats"; [ROE guide](https://www.uaf.cl/media/documentos/2025_Env%C3%ADo_del_ROE_gxRNfwu.pdf); [ROS guide](https://www.uaf.cl/media/documentos/2025_Instrucciones_Env%C3%ADo_del_ROS_IPRI.pdf)).
- **Clave Única from 19 Oct 2026.** People who represent obliged entities will log in with Clave Única plus extra security measures to be announced ([Of. 543](https://www.uaf.cl/media/documentos/Oficio_Circular_N543__Implementaci%C3%B3n_Clave_Unica_VF.pdf)). The product must never handle these credentials. It hands data over by copy-paste and file download only.
- **Machine channel.** Of. 543 also opens "a differentiated access and an alternative authentication" for entities that send ROE and ROS through automated systems. The entity applies through SIAC with the type of system, the report types, the **IP address or range** and a technical contact, and the UAF validates it ([Of. 543](https://www.uaf.cl/media/documentos/Oficio_Circular_N543__Implementaci%C3%B3n_Clave_Unica_VF.pdf)). In principle a SaaS with a fixed outbound IP could be named by each customer as its "automated system". Whether the UAF would accept one vendor for many entities, and what protocol it uses, is unknown (unverified). Ask the UAF through SIAC after launch. Only the ROE (and nil ROE) is a candidate. The ROS must stay a human act by the OdC.
- **MiUAF in 2027.** A new platform will gradually replace the portal during 2027, covering registration, reporting, training and supervision (Of. 543). Keep every hand-off (ROS draft, ROE data, nil ROE checklist) in a separate module, so the field order can change without touching the core.

## Data model

### Principles

- **The tenant is the obliged entity** (`Entity`, one RUT). Every customer table carries `entity_id`. An `Account` pays and can own many entities (a developer group or a partner).
- **Every legal decision is reproducible.** Thresholds store the rate used. Risk ratings store the rule-set version. Screening stores the list version. Documents store the template version and a data snapshot.
- **Append-only history.** Changes create new versions or audit events; nothing is overwritten silently (R68).
- **Retention is a field, not a job you remember.** Every record that holds personal data gets a `retention_until` date from its rule (R59).

### Main entities

**Accounts and access**
- `Account`: name, billing e-mail, country, plan, Paddle customer and subscription IDs.
- `Entity`: RUT, name, UAF category (corredor, gestión inmobiliaria, notario, conservador), legal form (natural person or company type), size class (micro, small, medium, large), comuna and region, status (active, activity ended and closure pending, de-registered), UAF registration data, registration certificate (folio, code, issue date), portal password expiry date, `account_id`.
- `User`: e-mail, name, MFA secret, locale.
- `Membership` (User × Entity): role (titular, OdC, staff, group_admin, partner), valid_from, valid_to.
- `PartnerGrant` (Account × Entity): granted_by, scope, granted_at, revoked_at.
- `RegisteredPerson`: legal representative and OdC data as sent to the UAF (name, RUN, address, phone, e-mail), valid_from, valid_to.
- `UafChangeRequest`: what changed, change date, due date (10 business days), sent date, SIAC number, proof file.

**Programme**
- `ManualVersion`: template code and version, sector variant, data snapshot (JSON), DOCX/PDF keys, approved_by, approved_at, review_due (2 years), superseded_by.
- `ManualDelivery`: manual version × staff member, sent_at, method, acknowledged_at.
- `StaffMember`: name, RUN, role, user_id (optional), start, end.
- `TrainingSession`: date, method (in person, online, e-learning), content, trainer, evidence. `TrainingAttendance`: session × staff member, form of participation, quiz score, certificate.
- `OdcAppointment`: person, from, to, eligibility checklist answers, appointment document.

**Clients and deals**
- `Party`: a natural or legal person. Natural: names, paternal and maternal surname, RUN or foreign ID, nationality, occupation, country of residence, address, comuna, contact. Legal: RUT, company name, trade name, legal form, status, country of incorporation, activity. Shared within one entity, so a BO linked to two companies is screened once.
- `Client`: party, relationship type (permanent or one-off), purpose and nature, status (prospect, active, refused, ended), risk level, next_review_at, ended_at, `retention_until`.
- `ClientParty`: client × party with role (self, legal representative, BO with % and route, effective control, senior manager abroad, proxy, PEP relative or associate).
- `Operation` (deal): type (sale, purchase, rental, management mandate, notarial act), date, property reference, amount, currency, rate used and its source, USD and UF equivalent, means of payment (cash, transfer, cheque, vale vista, credit), parties with their side, linked-deal group, red flags ticked.
- `CashOperation`: operation, cash amount, direction, conductor and principal, office, included in which `RoeReport`.
- `Declaration`: type (BO, PEP, source of funds), answers (JSON matching the UAF form version), method (link with code, paper scan, FEA), requested_at, signed_at, signer identity, file, hash, declaration number (for "update without changes").
- `VerificationStep`: what was checked, source (ID seen, SII list, register, other), result, user, date, evidence.
- `RiskRating`: client, rule-set version, inputs, factor results, computed level, final level, override reason, approvals.
- `Approval`: object, approver, role, decision, time (PEP and high-risk, C62 f.10.4 and h.4.1).

**Screening**
- `ListSource` (UN, FATF, SII_PREF, INFOPROBIDAD, OPENSANCTIONS) and `ListVersion` (fetched_at, checksum, counts, diff stats).
- `ListEntry`: source, external ID, person or entity, names and aliases (raw and normalised), birth dates, nationalities, position (for PEPs), programme, listed_on, valid_from and valid_to versions.
- `ScreeningRun`: entity, party, trigger (onboarding, list change, weekly, manual), list versions used, timestamp. Kept at least 3 years (R41).
- `ScreeningHit`: run, entry, score, reasons, status (open, not a match, possible, confirmed), decided_by, decided_at, reason.
- `CountryRisk`: country code, list, category, effective_from, effective_to, source.

**Cases and reports (restricted to the OdC and named users)**
- `Concern`: raised_by, time, text, flags, operation or client.
- `Case`: opened_at, trigger, operations and people, flags, analysis steps (phase, step, source consulted, note), conclusion (ROS or discard), reasons, closed_at.
- `RosDraft`: case, step 1 and step 2 fields as JSON matching the UAF form version, validation results, attachments list.
- `RosFiling`: case, sent_at, ROS number, verification code, certificate file, sent_by (must be the OdC).
- `RoeReport`: entity × semester, kind (data or nil), due window, status (pending, Ingresado, Recibido, Aprobado, Aprobado Fuera de Plazo, Rechazado), certificate (folio, code, date), correction requests.

**Supervision and records**
- `InfoRequest`: received_at, deadline, content, reply_at, files (R61).
- `Inspection`: type, mode, dates, findings, plan actions with owners and due dates, completion proof (R62).
- `InspectionPack`: date range, standards covered, gaps found, ZIP key, generated_by, generated_at.
- `Task`: entity, kind, object, due date (business-day aware), status, assignee, reminder log.
- `AuditEvent`: entity, actor, action, object type and ID, field diff, IP, time, `prev_hash` (a hash chain, so tampering shows).
- `RetentionRule` (global): record type, years, start event. Defaults: 5 years after the relationship or last one-off deal ends (C62 e.2); 3 years for screening evidence (c.9). `DeletionLog`: what was deleted, when, by which rule, with no personal data.

**Content (global, versioned, edited by the lawyer)**
- `Template`: code, document type, sector variant, version, DOCX file, variable schema, effective_from, reviewed_by, change note.
- `RedFlag`: code (for example "15.4"), text, sector, source, version.
- `RuleSet`: version, risk factor tables, hard floors (confirmed UN match = prohibited; PEP = at least high), thresholds per category, golden test cases.
- `FormVersion`: UAF form (BO, PEP, ROS, ROE Simplificado) and its field list, so a UAF form change is a data change.
- `Course`, `Lesson`, `Quiz`, `Question`.
- `Holiday`: date, scope (national or regional), legal source. `ExchangeRate`: date, series (USD observado, UF), value, source.

### Key relations (simplified)

```
Account 1--* Entity 1--* Membership *--1 User
Account 1--* PartnerGrant *--1 Entity
Entity 1--* ManualVersion 1--* ManualDelivery *--1 StaffMember
Entity 1--* TrainingSession 1--* TrainingAttendance *--1 StaffMember
Entity 1--* Client *--1 Party ; Client 1--* ClientParty *--1 Party
Entity 1--* Operation *--* Party ; Operation 1--0..1 CashOperation *--1 RoeReport
Party 1--* ScreeningRun 1--* ScreeningHit *--1 ListEntry *--1 ListVersion
Client 1--* RiskRating *--1 RuleSet ; Client 1--* Declaration
Entity 1--* Case (restricted) 1--0..1 RosDraft, RosFiling
Entity 1--* Task, InfoRequest, Inspection, InspectionPack
everything --> AuditEvent
```

### Rules and templates the lawyer can edit without code

- **Thresholds and floors as data.** One-off DDC threshold per category (USD 3,000 or 1,000 UF), ROE threshold USD 10,000, BO threshold 10%, BO delay 40 business days, PEP period at least 1 year. Each has the C62 point as its source. A change is a new `RuleSet` version.
- **Golden tests.** Each rule set ships with test cases: the three UAF BO help-sheet examples (R30), the CLP 9,600,000 cash example at two exchange rates (R52), the 1 Jun 2025 manual that falls due on 2 Jun 2027 (R15), the Friday-before-a-holiday change (R7), and the two USD 1,800 deals (R19). Publishing is blocked if a test fails.
- **Word templates.** The lawyer edits DOCX files in Word with simple tags such as `{{ entidad.razon_social }}` and `{% if entidad.categoria == "notario" %}`. Rendering uses `docxtpl` (LGPL-2.1, [PyPI](https://pypi.org/project/docxtpl/)) and PDF conversion through a LibreOffice service (Gotenberg). A preview with a test entity shows every variable.
- **Customers' documents never change silently.** A new template version shows "Nueva versión disponible: qué cambió", and the titular regenerates and re-approves.

## Architecture and stack

### Recommendation: one plain web app that agents can build and the founder can run alone

- **Language and framework:** Python with Django 5.2 LTS (6.1.2 is the newest release, 6 Oct 2026; [PyPI](https://pypi.org/project/Django/)). Reasons: the built-in admin covers the lawyer's content area and the founder's support tools; mature authentication, forms and Spanish localisation; and Claude Code agents write idiomatic Django well (my view, unverified). The document libraries this product needs are in Python.
- **Front end:** server-rendered HTML with HTMX and a little Alpine.js, built mobile-first. No single-page app. The product is forms, lists and documents. A Progressive Web App manifest lets brokers add it to the phone's home screen. No native app.
- **Database:** PostgreSQL 17 or later. `pg_trgm` for fuzzy name candidates, JSONB for form answers and rule tables, row-level security as a second wall between entities.
- **Background jobs:** Procrastinate, a PostgreSQL-backed task queue (3.10.0, Sep 2026, [PyPI](https://pypi.org/project/procrastinate/)), so there is no Redis to run. Jobs: UN list check every 6 hours; delta screening after each change; weekly full re-screen; InfoProbidad import twice a week; exchange rates daily at 09:00 Santiago time; reminders daily at 07:00; weekly digest; retention sweep weekly; document rendering on demand.
- **Documents and exports:** `docxtpl` for Word; Gotenberg (LibreOffice in a container) for DOCX to PDF; WeasyPrint (70.0, [PyPI](https://pypi.org/project/weasyprint/)) for records such as client-file and screening certificates; `pypdf` ([PyPI](https://pypi.org/project/pypdf/)) to merge packs; `openpyxl` ([PyPI](https://pypi.org/project/openpyxl/)) for Excel registers and, later, the ROE template.
- **Identity checks:** `python-stdnum` for RUT check digits; a small comuna and region table from SUBDERE codes.
- **Security libraries:** `argon2-cffi` for passwords ([PyPI](https://pypi.org/project/argon2-cffi/)); `django-otp` for TOTP MFA ([PyPI](https://pypi.org/project/django-otp/)).
- **Files:** an S3-compatible store (self-hosted on Santiago block storage, see hosting). Envelope encryption for ID photos, declarations and case attachments: one data key per entity, AES-256-GCM, master key outside the database. Case files use a second key that only OdC sessions unlock. ClamAV scan on upload.
- **E-mail:** a transactional e-mail service with SPF, DKIM and DMARC on our domain. Postmark Basic costs USD 15 a month for 10,000 e-mails, then USD 1.80 per 1,000 ([Postmark](https://postmarkapp.com/pricing)).
- **Payments:** Paddle as merchant of record: 5% + USD 0.50 per checkout transaction, with tax handling included ([Paddle](https://www.paddle.com/pricing)). The app listens to Paddle webhooks and maps the plan to entitlements (number of entities and users). Payment choice and Chilean tax treatment are covered in the go-to-market and payments sections of this deep dive.
- **Error tracking:** Sentry with personal-data scrubbing (Team USD 26 a month billed yearly; a free developer tier exists) ([Sentry](https://sentry.io/pricing/)), or self-hosted GlitchTip. No personal data in logs.
- **Deploy:** Docker Compose on two or three virtual machines behind Caddy (automatic TLS). Infrastructure as code (Terraform or Ansible) so an agent can rebuild it. CI runs unit tests, tenant-isolation tests, golden rule tests, template render tests, Playwright end-to-end tests, `ruff`, `bandit` and `pip-audit` on every change.
- **No AI calls on customer data in the MVP.** AI agents build the software and draft content. The running product does not send client, BO, PEP or case data to any AI service. Case data is covered by the tipping-off and confidentiality rules (Law art. 6), and Ley 21.719 restricts transfers abroad (see Security). A later, opt-in "help me write the ROS facts" feature would need the lawyer's opinion first.

### Where to host

- **Option A (recommended): Santiago, Chile.** Vultr has a Santiago region ("scl") where regular plans are available, for example 2 vCPU and 4 GB RAM for USD 20 a month and 4 vCPU and 8 GB for USD 40 a month (Vultr public API, [regions](https://api.vultr.com/v2/regions), [plans](https://api.vultr.com/v2/plans), [Santiago availability](https://api.vultr.com/v2/regions/scl/availability)). Hosting in Chile lets us tell notaries and brokers "your clients' data stays in Chile", and it removes the international-transfer question for the main data store. PostgreSQL runs on its own VM with a streaming replica and point-in-time backups. Vultr's object storage is **not** offered in Santiago: its API lists 19 object-storage clusters (for example Newark, Atlanta, Amsterdam), none in Chile ([Vultr clusters](https://api.vultr.com/v2/object-storage/clusters)). Block storage is offered in Santiago ([Vultr regions](https://api.vultr.com/v2/regions)). So files stay on encrypted block storage in Santiago, served by a small S3-compatible store (for example MinIO or Garage, my choice), and only encrypted backups go abroad. I could not confirm whether Vultr's managed PostgreSQL is offered in Santiago (pricing pages blocked automated access; unverified).
- **Option B: a hyperscaler in Chile.** Google Cloud's southamerica-west1 region has three zones in Santiago ([Google Cloud regions](https://cloud.google.com/compute/docs/regions-zones)). It offers managed PostgreSQL and object storage in-country, at prices I could not read (unverified). AWS plans a Chile region with three availability zones by the end of 2026, but I found no confirmation that it is open ([AWS Chile](https://aws.amazon.com/local/chile/); [Business Wire, May 2025](https://www.businesswire.com/news/home/20250507585471/en/Amazon-to-Invest-More-Than-$4-Billion-to-Launch-Infrastructure-Region-in-Chile)). Move here later if a large notary or developer client demands a big-cloud provider.
- **Option C: EU or US provider.** Cheapest and simplest, but every customer then transfers data abroad and needs the model clauses (see Security). Not recommended for a product that sells trust to notaries.
- **Backups:** encrypted nightly dumps and continuous WAL archiving to a second provider. If that provider is outside Chile, the transfer is covered by the model clauses in the customer contract (my reading).

### Diagram

```
Phone or desktop browser (HTMX, PWA)
        |
     Caddy (TLS)  -- Santiago VM 1 --------------------------+
        |                                                    |
   Django web app  <-- Procrastinate workers                 |
        |               |   |   |   |                        |
        |      UN XML   |   |   |  CMF / mindicador rates    |
        |   InfoProbidad|   |  Postmark e-mail               |
        |               |  Gotenberg (DOCX -> PDF)           |
        v               v                                    |
   PostgreSQL primary (RLS) -- Santiago VM 2 ----------------+
        | streaming replica (VM 3) + WAL and nightly dumps
        v
   Encrypted file store on Santiago block storage + offsite encrypted backups

Paddle (billing webhooks)        UAF portal: the user copy-pastes or uploads; no API
```

### How the build is organised for AI agents

- **One repository, one Django project, one app per module** (`entities`, `deadlines`, `clients`, `screening`, `documents`, `training`, `cases`, `roe`, `registers`, `billing`, `content`). Each app owns its models and exposes a small service interface. Agents work on different apps in separate git worktrees, so they rarely touch the same files.
- **Contracts first.** In week 1 the founder and one agent write the shared models, the `Task` and `AuditEvent` interfaces, the tenant middleware and the test fixtures. These are frozen before the parallel work starts.
- **Specs are the 68 requirements.** Each requirement in the law file becomes an acceptance test before the feature exists. An agent's work is "done" only when its tests pass in CI.
- **Synthetic data only.** A fixture generator makes fake Chilean names, valid RUTs and fake deals. Agents never see real personal data. Production credentials never reach an agent's environment.
- **Review.** One agent writes, a second agent reviews against the spec and the security checklist, and the founder merges. The founder's review time is the real bottleneck.

## Security, privacy and liability

### Who is responsible for what

- **The obliged entity is the controller ("responsable")** of its clients' data. We are its **processor ("tercero mandatario o encargado")**. We are controller only for our own users' accounts and billing.
- **The Chilean law reaches us abroad.** Ley 21.719 rewrites Ley 19.628. Its new art. 1 bis applies the law to a processor, wherever it is established, that processes data on behalf of a controller established in Chile (letter b), and to foreign controllers or processors that offer goods or services to people in Chile (letter c) ([Ley 21.719, BCN](https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=21719)). It takes effect on **1 Dec 2026** ([Diario Constitucional](https://www.diarioconstitucional.cl/2026/06/12/la-ley-21-719-entra-en-vigor-el-1-de-diciembre-y-expone-vacios-en-regulacion-de-pequenas-empresas/), per the [01 law file](01-law-and-requirements.md)). That is the planned launch week.

### What Ley 21.719 asks of us (article numbers as inserted into Ley 19.628)

All from the official text ([BCN XML](https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=21719)):
- **Processor contract (art. 15 bis).** We process only on the controller's instructions. The contract must state the object, duration, purpose, types of data, categories of data subjects, and both parties' rights and duties. We may not sub-delegate without specific written authorisation, and we stay jointly liable for sub-processors. If we use data for another purpose we become a controller and answer personally. The Agency will publish model contracts. At the end of the service we delete or return the data.
- **Security (art. 14 quinquies, applied to processors by art. 15 bis).** Measures suited to the state of the art, cost and risk that ensure confidentiality, integrity, availability and resilience. Standards may be scaled by company size under Ley 20.416 (art. 14 septies).
- **Breaches (art. 14 sexies, 15 bis).** The processor reports a breach to the controller. The controller reports to the Agency "by the most expeditious means possible and without undue delay" when there is a reasonable risk to data subjects, and keeps a register of breaches. When the data is sensitive or concerns "obligaciones de carácter económico, financiero, bancario o comercial", the controller must also tell each person affected. The law sets no hour count. We commit by contract to tell the customer within 24 hours of confirming a breach (my proposal).
- **Impact assessment (art. 15 ter).** Needed before high-risk processing, for example systematic profiling. Client risk rating may count (unverified). We give customers a ready-made impact assessment for the product.
- **International transfers (art. 27-28).** Lawful to countries the Agency declares adequate, or under contractual clauses, binding corporate rules or similar. The Subsecretaría de Economía approved **model contractual clauses** on 11 Dec 2025 (published 19 Dec 2025), based on the Ibero-American Data Protection Network model. They apply until the Agency issues its own rules and must be paired with a prior assessment of each transfer ([Guerrero Olivos](https://guerrero.cl/wp-content/uploads/2026/01/DOC_Aprobacion-Clausulas-Contractuales-Tipo.pdf)).
- **Controller without domicile in Chile (art. 14).** Must keep a working e-mail or contact channel for data subjects and the Agency. This applies to us for our own user and billing data.
- **Fines (art. 35).** Minor: written reprimand or up to 5,000 UTM. Serious: up to 10,000 UTM. Very serious: up to 20,000 UTM (about CLP 1.44 billion, USD 1.47 million at the October 2026 UTM of CLP 72,151, [mindicador.cl](https://mindicador.cl/api)). A 50% surcharge applies if remedies are not made within 60 days.
- **Data protection officer (art. 50).** Voluntary, as part of an optional compliance programme.

### Design choices that follow

- **Host the main database in Santiago** (Option A above). The customer's data then does not leave Chile for storage. Remote access by the founder from abroad, offsite backups and e-mail delivery may still count as transfers, so the DPA includes the model clauses anyway (my reading; ask the lawyer).
- **DPA in every subscription,** with the sub-processor list (hosting, e-mail, Paddle for billing data only, error tracking with personal data scrubbed).
- **AML retention beats erasure requests.** C62 requires records for at least 5 years after the relationship ends (e.2) and screening evidence for 3 years (c.9). A data subject's deletion request is refused for records under that hold, with the legal basis shown. After the period, the entity's admin confirms deletion; we log it (R59).
- **When a customer leaves:** full export (PDF plus Excel/JSON) and a cheap "archive only" plan, because the entity's 5-year duty continues after it stops paying (my proposal).
- **Data minimisation.** ID photos are optional in the MVP. C62 f.3 lists the ID number among the 7 items; whether a copy must be kept is for the lawyer to confirm (unverified). PEP data from InfoProbidad is loaded only with the fields needed for matching: names, position, institution and dates.

### AML confidentiality (tipping off)

- Law art. 6 forbids telling the client or third parties that a report was made or information requested, and it binds "persons who provide services in any capacity" to the entity. Breach is a crime (art. 7) ([01 law file](01-law-and-requirements.md), duty 17).
- **Product rules:**
  - case data lives in a separate area with its own encryption key, visible only to the OdC and users the OdC names (R50);
  - nothing a client can see (the BO link, e-mails, exports sent to clients) shows that a case exists;
  - staff who raise a concern see only "sent";
  - the platform admin cannot open case data, even in support mode; support needs a grant from the OdC that excludes cases (R66);
  - every case view is logged.
- **Our staff and sub-processors** sign a confidentiality clause that cites Law art. 6 (R66).

### Security baseline for the MVP

- TLS everywhere with HSTS; strict content security policy; secure cookies.
- **MFA required** for titular, OdC, group admin and partner roles; optional for staff. Argon2 password hashing; login rate limits; 30-minute idle timeout.
- Role-based access plus PostgreSQL row-level security per entity. Automated tests try cross-entity reads on every endpoint.
- Envelope encryption for files (per-entity key) and a second key for case data. Disk encryption on all VMs.
- Append-only audit log with a hash chain (R68). In v1, anchor the daily hash with an accredited Chilean timestamp, because Ley 19.799 art. 5 says a private electronic document does not prove its date without one ([BCN](https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=19799)).
- Backups: continuous WAL archiving and nightly encrypted dumps to a second provider; 30 days of point-in-time recovery; monthly restore test. Targets: lose at most 15 minutes of data; back online within 8 hours.
- Secrets in a vault, never in the repository. Agents work only with synthetic data and never hold production credentials.
- Weekly dependency updates; `pip-audit` and `bandit` in CI; an OWASP ZAP baseline scan on staging.
- **External penetration test before the paid launch,** then yearly.
- Written policies: information security, incident response, access control, backups, vendor list. Customers' own due diligence will ask for them.

### Cybersecurity law (possible extra duty)

- The framework cybersecurity law, Ley 21.663, treats as "essential services" those provided by private institutions in, among others, "servicios digitales y servicios de tecnología de la información gestionados por terceros". Such institutions must report significant incidents to the national CSIRT: an early alert within 3 hours, an update within 72 hours, and a final report within 15 days (art. 4 and 9, [Ley 21.663, BCN](https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=21663)).
- Whether a small foreign SaaS for AML records falls under this is unclear (unverified). The incident runbook should meet the 3-hour and 72-hour marks anyway; it costs nothing extra.

### Liability and disclaimers

- **A tool with reviewed templates, not legal advice.** Each document shows "Plantilla versión X, revisada por [abogado] el [fecha]". The titular approves and owns the manual. The OdC decides on cases and files reports.
- **No filing on the user's behalf.** The product prepares data; the OdC files in the UAF portal. This keeps the ROS a human act, as the UAF expects ([UAF FAQ](https://www.uaf.cl/es-cl/preguntas-frecuentes)).
- **Screening disclaimer.** A check covers the named lists at a stated time. "No match" is not a guarantee. InfoProbidad does not cover relatives or foreign PEPs.
- **Liability cap** at fees paid in the last 12 months. No liability where the user ignored tasks or hits.
- **Update promise.** Templates updated within 30 days of a relevant change to the law or a UAF circular, with a notice to users. This is also the renewal argument.
- **Insurance.** Professional indemnity and cyber cover for the operating company (price unverified).

## Hosting and running costs

### Assumptions (my estimates)

- Customer mix: 80% brokers and developers, 20% notaries and conservadores, as in the market file's pricing ([02 market file](02-market-and-competition.md)).
- Files: 60 client files a year per broker or developer and 500 per notary, about 2 MB each (ID photos, signed forms, PDFs).
- E-mail: about 30 messages per customer per month (reminders, BO links, digests).
- Screening is local and free: the UN list has about 1,010 records and InfoProbidad about 7,500 PEP persons, so matching costs almost no CPU.
- Prices: Vultr Santiago VMs from its public API (2 vCPU/4 GB USD 20; 4 vCPU/8 GB USD 40; high-frequency 3 vCPU/8 GB USD 48, all available in Santiago) ([Vultr plans](https://api.vultr.com/v2/plans); [Santiago availability](https://api.vultr.com/v2/regions/scl/availability)); Postmark USD 15 for 10,000 e-mails plus USD 1.80 per extra 1,000 ([Postmark](https://postmarkapp.com/pricing)); Sentry Team USD 26 ([Sentry](https://sentry.io/pricing/)); block storage in Santiago and offsite encrypted backups at a few US dollars per 100 GB (my estimate, unverified).

### Monthly running cost (USD, my estimates)

| Item | 50 customers | 300 customers | 1,000 customers |
|---|---|---|---|
| App and worker VMs | 20 (one 2 vCPU/4 GB) | 80 (two 4 vCPU/8 GB) | 120 (three 4 vCPU/8 GB) |
| PostgreSQL primary | 20 | 48 | 96 (larger plan, unverified price) |
| PostgreSQL replica or standby | 10 | 48 | 96 |
| Gotenberg (PDF) | shared | shared | 20 |
| File storage (block storage in Santiago) and encrypted offsite backups | 10 | 20 | 40 |
| Load balancer | 0 | 10 (unverified) | 10 (unverified) |
| E-mail (Postmark) | 15 | 15 | 51 |
| Error tracking and uptime | 0 (free tiers) | 26 | 60 |
| Domains (.cl CLP 9,990 a year, [NIC Chile](https://www.nic.cl/dominios/tarifas.html), plus a .com) | 2 | 2 | 2 |
| **Infrastructure total** | **about 77** | **about 249** | **about 495** |
| Infrastructure per customer | about 1.50 | about 0.85 | about 0.50 |
| Paddle fees (5% + USD 0.50, annual billing, average USD 420 a year per customer) | about 90 | about 540 | about 1,790 |
| Optional OpenSanctions foreign-PEP checks (pass-through) | 0-10 | 15-40 | 50-70 |

- **Revenue for scale:** at about USD 420 a year per customer (UF 10; my blended estimate from the market file's plan prices, whose year-3 mix averages about UF 12), 50 customers bring about USD 1,750 a month, 300 about USD 10,500 and 1,000 about USD 35,000 (my estimate). Infrastructure is about 1-5% of revenue (4.4% at 50 customers, 1.4% at 1,000). **Payment fees cost more than hosting.**
- **Tools after launch:** Claude Max for maintenance, USD 100-200 a month. The official page lists Max "from USD 100" with Claude Code included ([Claude pricing](https://claude.com/pricing/max)); USD 200 for Max 20x comes from third-party guides ([heyuan110](https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/); [Leanware](https://leanware.co/insights/claude-max-plan)).
- **The real running cost is people:** support (Spanish, by e-mail and WhatsApp), the three FATF updates a year, the yearly lawyer review, and content changes after UAF circulars.

## Development plan

### Assumptions

- The founder builds alone with Claude Code and several agents working in parallel, in separate git worktrees. No hired developers.
- Start: **Monday 12 Oct 2026**. MVP at the end of week 3 (30 Oct). Sellable product and paid launch in week 8 (**1 Dec 2026**, the day Ley 21.719 takes effect).
- This timing serves sales: the UAF portal moves to Clave Única on 19 Oct 2026 (outreach hook), and the first nil-ROE window after launch is **4-15 Jan 2027** ([01 law file](01-law-and-requirements.md)). Every registered entity must file then.
- The founder's review time is the bottleneck. Run four build streams at a time, with platform and QA agents in the background.

### Agent work streams

| Stream | Scope | Requirements | Depends on |
|---|---|---|---|
| **S0 Foundation** (founder + 1 agent, week 1) | Repository, CI, infra as code on Santiago VMs, users, MFA, `Account`/`Entity`/`Membership`, tenant middleware and RLS, `Task` engine with business days and holidays, `AuditEvent` hash chain, synthetic data generator, acceptance-test skeletons for R1-R68 | R1-R4, R68 | none |
| **S1 Entities and deadlines** | Set-up wizard, RUT check, UAF-register and SII prefill, OdC and legal representative data, 10-business-day change tasks, group and partner views, digest e-mails, ICS export | R1-R10 | S0 |
| **S2 Clients and deals** | Deals with rates and thresholds, parties, client file (7 items), BO public link with code signing and ownership calculator, PEP form, verification log, risk rules and approvals, 40-day clock | R18-R39 | S0 |
| **S3 Screening and lists** | UN download and diff, InfoProbidad import and position mapping, matching engine, hit review, re-screen jobs, FATF and SII country tables, screening certificates | R40-R43 | S0; S2's `Party` model |
| **S4 Documents and training** | Template engine (docxtpl + Gotenberg), manual generator with 4 sector variants, approval and delivery receipts, training register, course player and quiz, certificates, content admin with publish workflow and golden tests | R11-R17, R63-R65 | S0 |
| **S5 Cases, ROE and registers** | Red-flag library, concerns and cases with restricted access and separate key, ROS draft with validation, ROE semester tasks, ROE Simplificado view, cash register, 4 registers export, inspection pack, information requests | R44-R62, R66 | S2 (deals), S3 (hits) |
| **S6 Platform** (background) | Backups and restore test, Caddy, monitoring, Postmark, Paddle (week 5), security headers, rate limits, dependency scanning, Spanish copy | R67 | S0 |
| **S7 QA** (background) | Acceptance tests, tenant-isolation tests, Playwright flows 1-8 at phone and desktop size, accessibility checks | all | S0 |

**Working rules for agents.**
- Each stream gets a short spec (its requirements, the frozen interfaces, the screens), a `CLAUDE.md` with conventions, and its acceptance tests.
- A second agent reviews every pull request against the spec and a security checklist (auth, tenant scope, case access, file handling). The founder reviews and merges.
- The founder personally reviews all code for authentication, row-level security, encryption and case access.
- Daily merge to `main` with the full test suite; staging deploy every night.
- Content (manual text, red flags, course) is drafted by an agent from the primary texts, with the C62 point cited beside each paragraph, so the lawyer can check fast.

### Calendar

| Week | Dates (2026) | Engineering | Content and legal | Pilots and sales | Gate |
|---|---|---|---|---|---|
| 1 | 12-18 Oct | S0 foundation; S6 infra | Agents draft the manual outline from C62 J and digitise the BO and PEP forms. Engage the lawyer; book the pen tester for week 6 | List 40 pilot prospects from the UAF register joined to SII names; draft the Clave Única e-mail | Interfaces frozen on Friday |
| 2 | 19-25 Oct | S1, S2, S3, S4 in parallel | Manual drafts for 4 sectors; red-flag library 15.1-15.30 | Clave Única switch on 19 Oct: outreach; 10 short interviews | Each stream demos on staging |
| 3 | 26 Oct-1 Nov | S5 starts; S1-S4 finish; integration Thursday-Friday | Course draft and quiz; risk rules with golden tests. Content pack v0 to the lawyer on 2 Nov | Pick 3 friendly pilots (a broker, a developer group, a notary) | **MVP done (30 Oct)** |
| 4 | 2-8 Nov | Hardening; Playwright flows; inspection pack timing test (2,000 clients in under 2 minutes, R60) | Lawyer review round 1 | 3 pilots set up with the founder's help (free) | Pilots live |
| 5 | 9-15 Nov | Paddle billing; partner and group features; pilot fixes | Lawyer comments applied; terms, DPA with model clauses, privacy policy drafted | Grow to 8-10 pilots, incl. an accountant partner | Billing works in test mode |
| 6 | 16-22 Nov | **External security test** (3-5 days) on staging with synthetic data | Data-protection review of terms and DPA | Pilot feedback calls | Test report received |
| 7 | 23-29 Nov | Fix high and critical findings; retest; restore drill; incident runbook | Lawyer signs template set v1.0 | Ask pilots to convert at a founding price | Retest clean |
| 8 | 30 Nov-6 Dec | Launch on 1 Dec; monitoring; help articles | Publish privacy policy and contact channel | Public launch; "ROE negativo de enero" campaign | **Sellable** |
| 9-13 | Dec-Jan | v1 backlog from pilot data (non-bank ROE Excel, ID scan) | Watch FATF and UAF changes | Support the 4-15 Jan 2027 nil-ROE window | First real ROE window |

**Is 3 weeks realistic?** For 47 requirements with tests and synthetic data, yes, if the founder keeps the scope fixed and accepts plain screens. The risks are review overload and integration bugs between S2, S3 and S5. The fallback is to move the course player and the partner view to the sellable stage; the MVP still covers every top-ten UAF gap.

### Definition of done

**MVP (end of week 3).**
1. All 47 requirements marked [v1] in the law file (R1-R4, R6-R8, R11-R12, R14-R15, R17-R21, R23-R24, R26, R28-R31, R35, R37-R38, R40-R42, R44-R48, R50-R54, R57-R60, R63-R66) have passing acceptance tests. R68 (audit trail) is in the foundation.
2. Flows 1-6 pass end to end at phone and desktop sizes.
3. A broker, a developer group with 3 SPVs, and a notary can each be set up in under 45 minutes with synthetic data.
4. Tenant-isolation tests pass on every endpoint; case data is invisible to staff, partners and the platform admin.
5. Golden tests pass for thresholds, BO arithmetic and business-day deadlines.
6. Backups run, and one restore has been tested.
7. No high-severity finding open from `bandit`, `pip-audit` or the ZAP baseline scan.

**Sellable (week 8).**
1. Template set v1.0 signed off by a named Chilean AML lawyer, with the date shown on every document.
2. External penetration test done; all critical and high findings fixed and retested.
3. Paddle live; terms, DPA with the model clauses, privacy policy (art. 14 ter) and a contact channel for data subjects and the Agency published.
4. At least 5 pilot entities used it for real for 2 weeks or more, including a developer group and a notary; at least 3 agree to pay.
5. The lawyer, or an OdC who has been through a UAF inspection, has reviewed the inspection pack.
6. Incident runbook ready (customer notice within 24 hours; 3-hour and 72-hour marks in case Ley 21.663 applies); restore drill passed; uptime monitoring on.
7. Ten short help articles in Spanish (for example "Cómo enviar el ROE negativo", "Cómo pedir la declaración de beneficiario final").

## Budget

Cash only, until the sellable launch plus three months of running. The founder is unpaid. Company set-up costs are in the go-to-market and company section of this deep dive, not here.

| Item | Low (USD) | High (USD) | Basis |
|---|---|---|---|
| AI tools: Claude Max 20x for 3 months, plus a second plan or API use for parallel sessions in weeks 2-5 | 800 | 1,200 | Max "from USD 100" a month with Claude Code ([Claude pricing](https://claude.com/pricing/max)); Max 20x USD 200 per third-party guides ([heyuan110](https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/)); the second plan is my estimate |
| Chilean AML lawyer or experienced compliance officer: review of 4 manual variants, forms, red flags, risk rules, course and inspection pack (30-50 hours) | 3,000 | 6,000 | No published rates found. One consumer guide gives CLP 30,000-70,000 an hour for general lawyers ([Cronoshare](https://www.cronoshare.cl/cuanto-cuesta/abogado-extranjeria)); AML specialists cost more (unverified). Ask for a fixed fee plus referral share |
| Data-protection review: terms, DPA with model clauses, privacy policy, Ley 21.663 question | 1,000 | 2,500 | My estimate (unverified) |
| External security test: grey-box web app, 3-5 days | 3,000 | 6,000 | Basic small-scope tests sit around EUR 5,000 ([7ASecurity, 2026](https://7asecurity.com/blog/2026/04/the-2026-guide-to-penetration-testing-pricing-and-scoping/)); professional tests USD 5,000-50,000 ([DeepStrike](https://deepstrike.io/blog/costo-de-las-pruebas-de-penetracion)); a local Chilean firm may be cheaper (unverified) |
| Hosting during build and pilots (3 months) | 150 | 300 | Vultr Santiago VMs, see above |
| Tools: domains, Postmark, e-mail workspace, password manager | 150 | 300 | [NIC Chile](https://www.nic.cl/dominios/tarifas.html); [Postmark](https://postmarkapp.com/pricing) |
| Chilean Spanish proofreading of the interface and documents | 300 | 1,000 | My estimate; skip if the founder writes Chilean Spanish |
| **Subtotal** | **8,400** | **17,300** | |
| Contingency 15% | 1,260 | 2,600 | |
| **Total to a sellable product** | **about 9,700** | **about 19,900** | |
| Optional: professional indemnity and cyber insurance, first year | 1,000 | 2,500 | Unverified |

- Compared with the market file's year-3 revenue estimate of about USD 158,000 a year ([02 market file](02-market-and-competition.md)), the build cost is small. The risk is sales, not development.
- The biggest cash items are the lawyer and the security test. Neither should be cut: the lawyer's name is what the customer buys, and the product holds sensitive AML data.

## Risks

| Risk | Effect | Mitigation |
|---|---|---|
| UAF changes the portal (MiUAF in 2027) or its forms | ROS/ROE hand-off screens break | Form fields stored as data (`FormVersion`); hand-off in its own module; watch uaf.cl weekly |
| Non-bank ROE Excel template is not public | Developers, notaries and conservadores cannot get a filled file in the MVP | Nil ROE (the common case) needs no file; get the template from a pilot in November; ship in v1 |
| Content quality: a manual or rule is wrong | Customer is fined and blames us | Named lawyer review, versioned templates, disclaimers, liability cap, 30-day update promise |
| Who is "the client" of a broker is unclear | Over- or under-checking | Policy setting per entity, default chosen by the lawyer; ask the UAF through SIAC |
| Name-only PEP matching (InfoProbidad has no RUN) | False positives annoy users; misses relatives | Score with position and comuna; show reasons; always ask the PEP question |
| Agent-written code has security holes | Data breach of AML data | Founder reviews security code; reviewer agent; automated scans; external pen test before money changes hands |
| One-person operation | Outage or slow support during the January ROE window | Managed backups, restore drills, status page, help articles, a part-time Chilean support helper later |
| Data-protection rules unclear for foreign processors (transfers, Ley 21.663) | Legal exposure from 1 Dec 2026 | Host in Santiago; model clauses in the DPA; lawyer opinion in week 5-6 |
| Users expect automatic filing | Disappointment, churn | Say clearly "we prepare, you file"; make the hand-off fast; explore the Of. 543 machine channel for ROE later |
| C-ONLINE, Regcheq or Lexizum cut prices | Harder sales | Lead on what they do not show: deadlines, case register, nil ROE per SPV, inspection pack ([02 market file](02-market-and-competition.md)) |
| The UAF adds free tools to MiUAF (training, registers) | Parts of the product become free | Keep the product about the entity's own records and evidence, which a regulator portal is unlikely to hold for the entity |

## Open questions

1. **Simple e-signature for the BO and PEP declarations.** Is a code-confirmed simple signature enough for the UAF sworn BO form, or is FEA or wet ink expected in practice? (Ley 19.799 suggests simple is valid for private documents; the lawyer should confirm.)
2. **Who is the client** of a broker (buyer, seller, landlord, tenant), and is a rental-management mandate a permanent relationship? ([01 law file](01-law-and-requirements.md), open question 1.)
3. **Non-bank ROE Excel template.** Its exact layout. Get it from a pilot.
4. **"Formularios Recomendados DDC"** in the portal: what do they contain? Should the product mirror them?
5. **Machine channel (Of. 543).** Will the UAF accept a SaaS vendor's fixed IP as the "automated system" of many entities for ROE and nil ROE? What protocol does it use?
6. **Registro Civil validity service.** Can a private SaaS get an agreement for the RUN-plus-serial check, and at what cost?
7. **ID copies.** Does C62 require a copy of the ID, or only the number and a verification note? This decides whether we store ID photos at all.
8. **Hosting in Santiago.** Does Vultr offer managed PostgreSQL in Santiago (it has no object storage there), and is its contract acceptable to notaries? Alternatively, price Google Cloud's Santiago region, which has managed PostgreSQL and storage in-country.
9. **Ley 21.663.** Does a small foreign SaaS count as an "essential service" (IT services managed by third parties)?
10. **Remote access and backups abroad.** Do they count as international transfers under Ley 21.719 when the main data stays in Chile?
11. **InfoProbidad position mapping.** Which "Cargo" values map to each UAF PEP category, and which declarants are not PEPs?
12. **FATF list timing.** The UAF page still shows October 2025 lists. Does the UAF expect entities to follow the FATF site directly? (Our product will, either way.)
13. **Accredited timestamp provider.** Which Chilean provider sells accredited timestamps by API, and at what price? Acepta publishes a time-stamp practice statement ([Acepta](https://legal.acepta.com/cl/sello_tiempo_practicas_certificacion.pdf)); its accreditation status and price are unverified. Bill 18.286-03 would add "sellado de tiempo" by accredited providers to Ley 19.799 ([Diario Constitucional](https://www.diarioconstitucional.cl/estudios-juridicos/ingresa-proyecto-de-ley-que-moderniza-el-regimen-de-firma-electronica-avanzada-por-felipe-moro-felipe-dalgalarrando-y-gonzalo-ramos/)).

## Sources

**Primary: UAF, laws and official data**
- https://www.uaf.cl/media/documentos/Circular_N62.pdf
- https://www.uaf.cl/media/documentos/Oficio_Circular_N543__Implementaci%C3%B3n_Clave_Unica_VF.pdf
- https://www.uaf.cl/media/documentos/Declaraci%C3%B3nBFJun2025_giwIbRd.pdf
- https://www.uaf.cl/media/documentos/AyudaBF.pdf
- https://www.uaf.cl/media/documentos/DeclaracionPEP.pdf
- https://www.uaf.cl/media/documentos/2025_Env%C3%ADo_del_ROE_gxRNfwu.pdf
- https://www.uaf.cl/media/documentos/2025_Instrucciones_Env%C3%ADo_del_ROS_IPRI.pdf
- https://www.uaf.cl/media/documentos/Calendario_ROE_2026_fJZ3WvN.pdf
- https://www.uaf.cl/media/documentos/GuiaSe%C3%B1alesAlerta2023.pdf
- https://www.uaf.cl/media/documentos/Informe_Resultados_DFC_2025_y_Plan_2026_VF_xsmFFOU.pdf
- https://www.uaf.cl/media/documentos/Sujetos_Obligados_inscritos_en_la_UAF_al_30.06.2026.xlsx
- https://www.uaf.cl/es-cl/sujetos-obligados/sector-privado/listas-de-resoluciones-onu
- https://www.uaf.cl/es-cl/sujetos-obligados/sector-privado/listas-de-paises-no-cooperantes
- https://www.uaf.cl/es-cl/sujetos-obligados/sector-privado/lista-de-paises-con-regimen-fiscal-preferencial
- https://www.uaf.cl/media/documentos/Res30_SII.pdf
- https://www.uaf.cl/media/documentos/Res30_SII_Anexo1.pdf
- https://www.uaf.cl/es-cl/normativa/personas-expuestas-politicamente-pep
- https://www.uaf.cl/es-cl/preguntas-frecuentes
- https://reporteoperaciones.uaf.cl/portada_unica.asp
- https://registro.uaf.cl/entidades_reportantes/registro_so.aspx
- https://capacitacion.uaf.cl/campus/
- https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=21719 (Ley 21.719)
- https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=19799 (Ley 19.799)
- https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=19880 (Ley 19.880)
- https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=21663 (Ley 21.663)
- https://scsanctions.un.org/resources/xml/en/consolidated.xml
- https://scsanctions.un.org/resources/xml/sp/consolidated.xml
- https://www.infoprobidad.cl/DatosAbiertos/Catalogos
- https://datos.cplt.cl/catalogos/infoprobidad/csvdeclaraciones
- https://www.sii.cl/sobre_el_sii/nominapersonasjuridicas.html
- https://www.sii.cl/estadisticas/nominas/PUB_NOMBRES_PJ.zip
- https://www.sii.cl/preguntas_frecuentes/factura_electronica/001_003_6503.htm
- https://www.sii.cl/normativa_legislacion/resoluciones/2021/reso105.pdf
- https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar?formato=json
- https://si3.bcentral.cl/SieteRestWS/SieteRestWS.ashx
- https://www.subdere.gov.cl/node/76974
- https://build.fhir.org/ig/Minsal-CL/NID/ValueSet-VSCodigosComunaCL.html
- https://www.hacienda.cl/noticias-y-eventos/noticias/gobierno-ingresa-a-tramitacion-proyecto-que-crea-registro-de-beneficiarios
- https://dt.gob.cl/legislacion/1624/w3-article-111073.html
- https://www.nic.cl/dominios/tarifas.html

**Secondary: law firms, press, vendors and data services**
- https://guerrero.cl/wp-content/uploads/2026/01/DOC_Aprobacion-Clausulas-Contractuales-Tipo.pdf
- https://www.diarioconstitucional.cl/2026/06/12/la-ley-21-719-entra-en-vigor-el-1-de-diciembre-y-expone-vacios-en-regulacion-de-pequenas-empresas/
- https://www.carey.cl/api/archivo/ingresa-proyecto-de-ley-que-moderniza-el-regimen-de-firma-electronica-avanzada?lang=es
- https://www.az.cl/claves-para-entender-el-impacto-regulatorio-de-la-circular-n62-de-la-uaf/
- https://sovos.com/es/blog/iva/que-son-los-psc-o-prestadores-de-servicios-de-certificacion/
- https://sovos.com/es/blog/iva/nueva-cedula-de-identidad-digital-en-chile-innovacion-y-retos/
- https://www.diariooficial.interior.gob.cl/publicaciones/2024/12/07/44018/01/2580493.pdf
- https://didit.me/blog/non-doc-verification-chile-registro-civil/
- https://legal.acepta.com/cl/sello_tiempo_practicas_certificacion.pdf
- https://www.diarioconstitucional.cl/estudios-juridicos/ingresa-proyecto-de-ley-que-moderniza-el-regimen-de-firma-electronica-avanzada-por-felipe-moro-felipe-dalgalarrando-y-gonzalo-ramos/
- https://www.bloomberglinea.com/latinoamerica/chile/registro-civil-nuevo-carnet-digital-de-identidad-en-chile-paso-a-paso-para-obternelo/
- https://simplo.cl/prevencion-lavado-activos-uaf-empresa/
- https://www.opensanctions.org/datasets/cl_info_probidad/
- https://www.opensanctions.org/api/
- https://mindicador.cl/api
- https://api.boostr.cl/holidays.json
- https://aws.amazon.com/local/chile/
- https://www.businesswire.com/news/home/20250507585471/en/Amazon-to-Invest-More-Than-$4-Billion-to-Launch-Infrastructure-Region-in-Chile
- https://api.vultr.com/v2/regions
- https://api.vultr.com/v2/plans
- https://api.vultr.com/v2/regions/scl/availability
- https://api.vultr.com/v2/object-storage/clusters
- https://cloud.google.com/compute/docs/regions-zones
- https://postmarkapp.com/pricing
- https://www.paddle.com/pricing
- https://sentry.io/pricing/
- https://claude.com/pricing
- https://claude.com/pricing/max
- https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/
- https://leanware.co/insights/claude-max-plan
- https://7asecurity.com/blog/2026/04/the-2026-guide-to-penetration-testing-pricing-and-scoping/
- https://deepstrike.io/blog/costo-de-las-pruebas-de-penetracion
- https://www.cronoshare.cl/cuanto-cuesta/abogado-extranjeria
- https://pypi.org/project/Django/
- https://pypi.org/project/docxtpl/
- https://pypi.org/project/procrastinate/
- https://pypi.org/project/RapidFuzz/
- https://pypi.org/project/weasyprint/
- https://pypi.org/project/pypdf/
- https://pypi.org/project/openpyxl/
- https://pypi.org/project/python-stdnum/
- https://pypi.org/project/argon2-cffi/
- https://pypi.org/project/django-otp/
