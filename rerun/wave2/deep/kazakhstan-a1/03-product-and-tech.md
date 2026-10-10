# Kazakhstan A1: kindergarten licence and inspection readiness - product, technical design and development plan

Part 3 of the Kazakhstan A1 deep dive. Status: draft 0 (10 Oct 2026), skeleton written before research. Builds on [the A1 report](../reports/kazakhstan-a1.md), [01-law-and-requirements.md](01-law-and-requirements.md) and [02-market-and-competition.md](02-market-and-competition.md). "My estimate" marks numbers I derived; "(unverified)" marks facts I could not confirm.

## Summary

(pending)

## Users and jobs

(pending)

## Feature map

(pending)

## Key flows

(pending)

## Screens

(pending)

## Data sources and integrations

(pending)

## Data model

(pending)

## Architecture and stack

(pending)

## Security, privacy and liability

(pending)

## Hosting and running costs

(pending)

## Development plan

(pending)

## Budget

(pending)

## Risks

(pending)

## Open questions

(pending)

## Sources

(pending)

## Working notes (raw)

- Personal Data Law Art 12(2): storage in a database located in Kazakhstan (01 file, https://old.adilet.zan.kz/rus/docs/Z1300000094). Host the DB in Kazakhstan.
- Row 79 needs a third-level domain in edu.kz. CQA checklist: not publishing self-assessment materials on the official website is a gross violation (01 file). Possible feature: hosted edu.kz site.
- Forms 1-КК..6-КК, 8-КК filed with the application on eGov/elicense with ЭЦП (Order 248, https://old.adilet.zan.kz/rus/docs/V2500037314).
- Anti-terror passport is marked "for official use" (Order 117) - do not store it.
- CONFIRMED domain rules (Order 38/НҚ of 13 Mar 2018, old.adilet V1800016654, last amended 20 Sep 2022 No. 337/НҚ): p.16(6) use of a .KZ/.ҚАЗ domain is suspended if the site is hosted on hardware outside Kazakhstan; p.2(5) Kazakh segment = resources hosted in KZ; application form asks server location; p.27 and p.16(5) TLS certificate required; p.29(1) EDU.KZ reserved for third-level names of KZ-resident organisations doing educational activity, given on request (p.30). Registrations via accredited registrars; nic.kz EDU.KZ policy v1.1 draft dated 05.06.2026 (search summary; PDF 404 on fetch).
- PS.kz: .KZ domain 9,590 tg/year; SSL from 6,000 tg/year; VPS prices JS-loaded, not captured (ps.kz/cloud, ps.kz/hosting/vps). PS Cloud claims PCI DSS 4.0.1 and ISO 27001 and KZ IS standard certification.
- Yandex Cloud KZ (ТОО «Облачные Сервисы Казахстан»), region kz1 has one zone kz1-a. KZT worked examples (incl. VAT): compute 100% vCPU 8.70 tg/h, RAM 2.33 tg/GB-h; 20% vCPU 3.63 tg/h; Managed PostgreSQL vCPU 13.52 tg/h, RAM 3.625 tg/GB-h, network HDD 26.51 tg/GB-month; Object Storage standard 16.67 tg/GB-month, first 1 GB free. (yandex.cloud/ru-kz/docs/compute/pricing, managed-postgresql/pricing, storage/pricing)
- Serverspace: VMs in Almaty (Kazteleport DC), billed in EUR, cards via PayPal, min deposit 5 EUR (search summary; serverspace.io/services/vps-server/vps-in-kazakhstan). ALC Hosting KZ VPS from US$4.99 (alchosting.net).
- Personal Data Law fetched: Art 12(2) storage in KZ; Art 16 cross-border only to protecting states or with consent; Art 25 notify authorised body on discovery of breach (no fixed hours), appoint responsible person, approve PD list and policies; Art 8-1 integration with state access-control service only if interacting with state digital objects, else voluntary; no special rules for minors beyond legal-representative consent; latest amendment Law 350-VIII of 14 Jul 2026.
- AI law signed 17 Nov 2025, in force 16-18 Jan 2026; must inform users of AI-generated synthetic content; CoAO Art 641-1 (tengrinews, forbes.kz, finratings, zakon.kz).
- NCALayer JS wrapper ncalayerjs (MIT) github.com/seithq/ncalayerjs.
- No free documented BIN lookup API: stat.gov.kz BIN search needs login; data.egov.kz API key; Bitrix24 paid app.
- Order 68 of 17 Mar 2023: list of documents teachers must keep (zakon.uchet.kz/rus/docs/V2300032110).
- Claude Max US$100/200 a month (third-party guides).
- CONFIRMED Order 268 page (old.adilet V2500037500): Annex 1 (as restated) columns: 1 No; 2 full name; 3 year/place of birth; 4 education (higher/TVET/post-secondary, pedagogical retraining, specialty, diploma qualification, institution, year); 5 main workplace (address, post, experience); 6 practical work in profile, experience; 7 criminal record absence/presence; 8 category, date, order No.*; 9 medical exam (personal medical book)*; 10 master's; 11-13 PhD/doctor/candidate; 14 academic title; 15 honours; 16 recognition of foreign education; 17 subject taught. Row 79 lists: equipment/furniture per Order 70; groups and fill per Order 385; edu.kz third-level domain; lockers; daytime beds (except part-day mini-centres); toilets/washbasins per ҚР ДСМ-76; anti-terror equipment per Order 117; lockers/beds counted on planned intake (new) or actual (existing). Row 81: NOBD data current per Order 570 admin forms AND "информационная система управления образованием с актуальными базами данных, соответствующих административным данным НОБД".
- CONFIRMED Order 473 annexes (old.adilet V2200030721): Annex 2 (literature fund): No; subject/activity/programme section; number of learners; teaching literature (title, year, authors); methodical/fiction/scientific literature; quantity (at least 1 copy). Annex 3 (per 128-НҚ): actual address of building; medical licence number; note; "status checked via e-license.kz". Annex 4: address; catering object name (canteen etc.); sanitary conclusion; note (lessees). Annex 5 (per 128-НҚ): building type (typical project/adapted/other) and address; asset title (own/economic mgmt/operational/trust/lease); room types; area m2; note: registered property rights not submitted if available from state IS. Annex 6 (per 128-НҚ): building address with total and useful area; equipment; rooms with area; workshops; labs; teaching aids list; halls, library; computers, equipment, furniture, individual lockers, video cameras; online-learning equipment; "education management IS with current DBs, NOBD, edu.kz domain, internet". Annex 8: No; full name; topic; place and period; organisation; hours and experience; form of completion; head's signature.
- CONFIRMED Order 248 (V2500037314): forms are administrative-data forms with indexes 1-КК..8-КК, "периодичность: единовременная", filed by legal entities and IPs "при подаче заявления", "Метод сбора: в электронном виде", each with filling explanations per column; head signature and stamp. Registration data, medical licence and fee payment pulled by the licensor from state IS via the e-gov gateway. Application only "в электронной форме через портал при условии наличия ЭЦП". Whether forms are typed into portal fields or uploaded as files: not stated (unverified).
- CONFIRMED CQA risk criteria (old.adilet V1500012777) preschool violation list: item 32 "Неразмещение материалов самооценки образовательной деятельности на официальном интернет-ресурсе организации образования" = GROSS; item 33 not submitting or false admin data in education monitoring = GROSS; item 31 staffing table and tariffs on website of STATE preschools = minor.
- CONFIRMED Order 130 of 6 Apr 2020 (old.adilet V2000020317), Annex 1 as restated by Order 319 of 29 Oct 2024 and amended by 194-НҚ of 15 Jul 2026: preschool teachers keep, in paper OR electronic (Word or PDF) form, not both: (1) once a year before the school year a long-term plan (перспективный план) of organised activity per age group, based on typical plans (Order 557) and typical programme (Order 499); (2) WEEKLY a cyclogram; (3) during the year an individual child development card (start, interim, final control); (3-1) for pre-school groups the card is filled in the digital system NOBD (ЦС НОБД). Forms in Annex 2 (restated by 194-НҚ, Jul 2026). Plans made jointly by educator, Kazakh-language teacher, PE instructor, music leader, special teacher.
- Search: no public NOBD API found; meaning of "education management information system" in row 81 not found (open question).
- CONFIRMED Order 486 of 5 Dec 2022 (old.adilet V2200031053; amended 30 Apr 2025 No. 98 and 20 Apr 2026 No. 101-НҚ): criteria for annual SELF-ASSESSMENT (Law on Education Art 5(62)). Preschool Annex 1, 9 criteria scored 2-5: (1) share of teachers with higher/postgrad pedagogical education in profile or retraining; (2) share who raised/confirmed category at least once in 5 years (heads once in 3); (3) share with in-service training at least once in 3 years; (4) equipment and furniture per Order 70; (5) SEN conditions per Order 92; (6) UMK per Order 216; (7) group fill per group; (8) parent survey; (9) teacher survey. Thresholds 100%=5, 95-99=4, 80-94=3, <80=2; survey 80-100% satisfied=5, 65-79=4, 50-64=3, <50=2. Levels: exemplary 40-45, good 35-39, needs improvement 30-34, low <30; minus 50% if not GOSO-compliant. Surveys run ONLINE by territorial staff of the ministry, >=90% participation (>=80% if <=10 children); preschool: teachers and parents of pre-school-age children.
- Language Law (old.adilet Z970000151_) Art 8: non-state organisations use the state language and, if needed, others; Art 21: forms (бланки) of non-state organisations in the state language, if needed also Russian; seals/stamps in Kazakh and Russian. => generated documents must have a Kazakh version.
- SMS ~EUR 0.14, WhatsApp from ~EUR 0.02 per message (messaggio.com, aggregator); sender IDs must be pre-registered since 1 Jan 2022 (sent.dm).
- Lawyer: in-house lawyer 3-6 yrs 600-650k tg/month net (hh.ru vacancy); advocates' minimum consult 5,000 tg in regions (inform.kz); Kaspi advocate drafting from 25,000 tg.
- Criminal record certificate: free via eGov Mobile, ~10 min (egov.kz/cms/ru/news/criminal_mobile, 2023).
