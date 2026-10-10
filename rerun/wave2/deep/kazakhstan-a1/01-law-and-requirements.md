# Kazakhstan A1: law for kindergarten licensing and inspections, turned into product requirements

Status: complete as of 10 Oct 2026 (resumed run). Open questions are listed near the end.

Primary texts were read on the old Adilet portal (old.adilet.zan.kz), the Justice Ministry's legal database, and on zakon.uchet.kz, which mirrors it. Article and paragraph numbers are from the Russian versions there. In this file "p." means a paragraph (пункт) of an order. "Row" means a numbered row of the qualification-requirements table.

Abbreviations:
- **MoE**: Ministry of Education (Министерство просвещения).
- **CQA**: the MoE Committee for Quality Assurance in Education and its regional departments (Комитет по обеспечению качества в сфере образования). It issues the licence and runs education control.
- **CPCR**: the MoE Committee for the Protection of Children's Rights (Комитет по охране прав детей).
- **SEC**: the Health Ministry's Committee for Sanitary-Epidemiological Control.
- **NOBD**: the National Education Database (Национальная образовательная база данных). Every education organisation must keep its data current there.
- **MRP**: the monthly calculation index, the unit for fees and fines. It is 4,325 tenge in 2026.
- **SEN**: special educational needs.
- **PMPC**: psychological-medical-pedagogical consultation (ПМПК). It confirms a child's SEN.
- **CoAO**: the Code on Administrative Offences.
- **WD**: working days.
- **ЭЦП**: the electronic digital signature issued by the National Certification Centre.
- **"Order 473"**: MoE Order No. 473 of 24 Nov 2022 on qualification requirements for education activity. It is amended by **Order 268** of 27 Nov 2025, which adds item 8 for preschool, and by **Order 128-НҚ** of 15 May 2026.

## Summary

- **One law change makes preschool a licensed activity from 1 Jan 2027.** Law No. 148-VIII of 30 Dec 2024 adds "provision of preschool education and training" as sub-type 10 of the education licence. It is a non-transferable class 1 licence. The same law removes preschool from the notification list and extends Art. 57 of the Law on Education to sole traders. These parts take effect on 1 Jan 2027 ([Law 148-VIII](https://old.adilet.zan.kz/rus/docs/Z2400000148)).
  - **The licence has no time limit** ([Law on Education Art. 57(3-1)](https://old.adilet.zan.kz/rus/docs/Z070000319_); [Law on Permits Art. 29(7)](https://old.adilet.zan.kz/rus/docs/Z1400000202)). The licence is therefore a one-off. Recurring work comes from inspections, re-issues, new buildings, staff turnover and the records the rules demand every year.
  - **The law has no transitional clause.** The old notification rule applies only until 1 Jan 2027 ([Law 148-VIII, Art. 2](https://old.adilet.zan.kz/rus/docs/Z2400000148)). Officials still promise phasing. The Ministry said in May 2026 that the move "will be phased, taking into account each organisation's readiness" ([24.kz, 13 May 2026](https://24.kz/ru/news/social/768260-litsenzirovanie-detskikh-sadov-predprinimateli-opasayutsya-novykh-pravil)). The North Kazakhstan licensing department said in July 2026 that its 429 organisations will be licensed over 3 years, with more than 200 in 2027 ([MTRK, 24 Jul 2026](https://mtrk.kz/ru/2026/07/24/licenzirovanie-detskikh-sadov-startu/)). I found no legal act that sets this schedule.
- **Ten rows decide the licence.** Order 268 adds rows 73-82 to Order 473, in force 1 Jan 2027 ([Order 268](https://old.adilet.zan.kz/rus/docs/V2500037500)). They cover:
  - curricula and plans;
  - staff: at least 75% of teachers on main-job contracts and at least 20% with a teaching category;
  - teaching materials;
  - a medical room with a medical licence or contract (not needed with 3 groups or fewer);
  - a catering unit with a sanitary conclusion;
  - premises owned or leased for at least 5 years, with sanitary and fire documents;
  - equipment, an edu.kz web domain, lockers, beds and anti-terror equipment;
  - 36 hours of training every 3 years;
  - NOBD data and an education information system;
  - conditions for SEN children.
  - Rows 79 and 81 were rewritten by Order 128-НҚ from 12 Jul 2026.
- **The application is electronic.** It is filed on eGov or elicense.kz and signed with the applicant's ЭЦП. It carries seven data forms (Annexes 1-6 and 8) and e-copies of documents. The licensor checks completeness in 2 WD, then checks the documents and visits the site within 22 WD. The licence must be issued within 30 WD. The fee is 10 MRP, which is 43,250 tenge at the 2026 rate ([public service rules, Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314)).
- **The licence is tied to one region and to each building.** It covers only the region of the legal address. A separate annex is issued for each building after a site check ([Law on Education Art. 57(4)](https://old.adilet.zan.kz/rus/docs/Z070000319_)). A move, a rename or a reorganisation triggers a re-issue.
- **Inspections are frequent and got tougher in 2026.**
  - Preschools are "high risk" in both MoE risk systems ([CQA criteria](https://old.adilet.zan.kz/rus/docs/V1500012777); [CPCR criteria](https://old.adilet.zan.kz/rus/docs/V2600038978)). Both publish checklists: 29 items from CQA and 9 from CPCR. Together they work as a ready-made product spec.
  - Since 1 Feb 2026, organisations paid from the budget for children's care can get unscheduled checks with no notice. This includes private kindergartens on the state order ([Child Rights Law Art. 52-4](https://old.adilet.zan.kz/rus/docs/Z020000345_); [bizmedia, 2 Feb 2026](https://bizmedia.kz/2026-02-02-proveryat-vnezapno-detsady-i-shkoly-kazahstana-budet-komitet-sanepidkontrolya/)).
  - Every month, "preventive control without a visit" matches NOBD and other data. The kindergarten must act on any recommendation within 10 WD. If it does not, it is put on the list for a visit ([Child Rights Law Art. 52(7)-(13)](https://old.adilet.zan.kz/rus/docs/Z020000345_)).
- **Fines are moderate for small firms. Suspension is the real threat.** All figures below are for a small business ([CoAO](https://old.adilet.zan.kz/rus/docs/K1400000235)).
  - Working without a licence from 2027: 25 MRP plus confiscation of income (Art. 463).
  - Breach of licensing rules: 45 MRP, with or without suspension (Art. 464). Repeat breaches or false data: 100 MRP, with or without loss of the licence.
  - Breach of the model rules or the state standard: 15 MRP plus suspension (Art. 409).
  - Anti-terror breaches: 200 MRP (Art. 149).
  - Sanitary breaches: 160 MRP (Art. 425).
  - During a suspension of up to 6 months, the kindergarten cannot take part in state-order competitions or admit new children ([Law on Education Art. 57(5)](https://old.adilet.zan.kz/rus/docs/Z070000319_)).
- **Enforcement is heavy.** In 2023 there were 7,497 inspections of preschools. 90.7% found violations, and 4,027 officials were fined 1.12 billion tenge in total ([finratings.kz, Feb 2025](https://finratings.kz/news/533-v-kazakhstane-milliardnye-shtrafy-dushat-chastnye-detsady/)). The Health Ministry said 60% of kindergartens had sanitary violations in its unannounced checks ([azattyq-ruhy](https://rus.azattyq-ruhy.kz/avtory/103634-u-70-shkol-i-60-detsadov-byli-sanitarno-epidemiologicheskie-narusheniia-minzdrav-o-proverkakh-bez-preduprezhdenii/amp)).
- **Regions apply the rules differently.** Owners and the Atameken chamber say one region accepts existing buildings while another demands a change of land or building use. On 1 Oct 2026 they asked for one joint explanation and a transition period. I found no answer ([informburo, 1 Oct 2026](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia)).
- **Data must stay in Kazakhstan.** Personal data must be stored "in a database and/or digital object located in Kazakhstan" ([Personal Data Law Art. 12(2)](https://old.adilet.zan.kz/rus/docs/Z1300000094)). Software that holds children's and staff data must host its database in Kazakhstan, even if it is sold by a company abroad.
- **Two findings shape the product.**
  - Row 81 and Annex 6 ask for an "education management information system with current databases" that matches the NOBD. The model rules also require automated data exchange with the MoE system ([Order 473 Annex 6](https://old.adilet.zan.kz/rus/docs/V2200030721); [Order 385 p.20](https://old.adilet.zan.kz/rus/docs/V2200029329)). A light management system could therefore count as evidence for row 81. Whether it must connect to the MoE system is an open question.
  - Teachers may be required to keep only three documents: a long-term plan, a weekly cyclogram and a development card for each child ([informburo, Sep 2022](https://informburo.kz/novosti/vospitateli-detskih-sadov-teper-dolzhny-budut-zapolnyat-tolko-tri-dokumenta)). Demanding extra or duplicate reports is itself an offence (CoAO Art. 409(7-3)). The product must cut paperwork, not add to it.
- **Product.** The 72 testable requirements below centre on:
  - an applicability profile;
  - a row-by-row readiness check for rows 73-82 with computed thresholds;
  - generators for the annex forms;
  - a staff register with alerts for category, training, medical book and criminal-record checks;
  - a check of group sizes against the norms;
  - the two official checklists, run as self-audits with evidence;
  - a tracker for recommendations and orders with their legal deadlines;
  - anti-terror and fire journals;
  - hosting in Kazakhstan.

## Who is obliged

**The rule.** From 1 Jan 2027, anyone who runs a preschool education programme needs the licence sub-type "provision of preschool education and training". This applies to legal entities of any ownership, state or private, and now also to sole traders (ИП) ([Law 148-VIII, Art. 1(7)(26) amending Art. 57(1) of the Law on Education](https://old.adilet.zan.kz/rus/docs/Z2400000148)).

| Who | Covered? | Basis and notes |
|---|---|---|
| Private kindergartens and nursery-kindergartens (LLP, NCO) | Yes | Law on Education Art. 57; [Order 385 p.5](https://old.adilet.zan.kz/rus/docs/V2200029329) lists the types. About 6,526 private and 11,909 total ([Tengri, Apr 2026](https://tengrinews.kz/tengri-institutions/novyie-pravila-chto-jdt-chastnyie-detsadyi-v-kazahstane-594367/amp/)). |
| Sole traders (ИП) running a kindergarten | Yes, from 1 Jan 2027 | Art. 57(1) as amended by [Law 148-VIII](https://old.adilet.zan.kz/rus/docs/Z2400000148). |
| State kindergartens | Yes | Same licence for all forms of ownership. They have extra duties (typical staffing, website publication, CCTV item in the CQA checklist). |
| Preschool mini-centres (full or part day) | Yes, if they run the preschool programme | Order 385 p.5 defines mini-centres as attached to education organisations ("при организациях образования"). Part-day mini-centres need no beds (Row 79). Whether a school's mini-centre needs its own sub-type annex is (unverified). |
| Family nursery-kindergartens, sanatorium and special kindergartens | Yes | [Order 385 p.5](https://old.adilet.zan.kz/rus/docs/V2200029329). Special kindergartens have extra SEN duties (not covered here). |
| Clubs and development centres that teach preschool children without the preschool programme | No licence; notification instead | The new Art. 57-1 keeps notification only for additional education of children ([Law 148-VIII, Art. 1(7)(27)](https://old.adilet.zan.kz/rus/docs/Z2400000148)). Where the line falls for a "development centre" is a judgement call (unverified). |
| Children's camps and health centres | Separate licence sub-type | Already licensed through eLicense ([SKO department](https://www.gov.kz/memleket/entities/control-sko/press/news/details/1247472?lang=ru)). Out of scope. |

**Thresholds and exemptions inside the rules:**
- **3 groups or fewer:** no medical room or medical licence needed (Row 76). The state-order rules then ask for a contract with a primary care provider ([Order 381 p.14](https://old.adilet.zan.kz/rus/docs/V2200029323)).
- **Fewer than 2 groups:** the 20% teaching-category rule does not apply (Row 74).
- **Part-day mini-centres, including pre-school groups:** no beds needed (Row 79).
- **Lockers and beds:** counted against the planned intake for a new organisation and current enrolment for an existing one (Row 79).
- **Anti-terror equipment** depends on location and size. Group 1 is a rural object with up to 700 people. Group 2 is a district centre, city or the capital, or more than 700 people, and also needs access control, which for preschools means an intercom ([Order 117 p.77-79](https://old.adilet.zan.kz/rus/docs/V2200027414)).
- **Budget funding.** Organisations paid from the budget, which includes private kindergartens on the state order, face planned and unscheduled checks under Art. 52-4 of the Child Rights Law. Others face preventive control ([Child Rights Law Art. 52(4)-(5)](https://old.adilet.zan.kz/rus/docs/Z020000345_)). About 96% of private kindergartens hold the state order ([Tengri](https://tengrinews.kz/tengri-institutions/novyie-pravila-chto-jdt-chastnyie-detsadyi-v-kazahstane-594367/amp/)).
- **Business size** sets the fine. Small businesses and officials pay the lowest rates. Medium and large businesses pay more ([CoAO](https://old.adilet.zan.kz/rus/docs/K1400000235)).

**Who signs.** The application is an e-request signed with the ЭЦП of the legal entity's head or of the sole trader ([Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314)). Plans, development cards and forms are "approved by the head" (Row 73; Annex 8).

## Duty-by-duty table

Fines are for a small business. Officials pay the same or less. Tenge figures use the 2026 MRP of 4,325 tenge. "Gross", "significant" and "minor" are the violation degrees set in the risk-criteria orders.

### A. Licence and its upkeep

| Duty | Legal basis | What must exist or be done | Frequency or deadline | Evidence an inspector asks for | Penalty |
|---|---|---|---|---|---|
| Hold a licence for preschool education | [Law 148-VIII](https://old.adilet.zan.kz/rus/docs/Z2400000148); [Law on Education Art. 57](https://old.adilet.zan.kz/rus/docs/Z070000319_) | Licence sub-type 10 with an annex for each building | From 1 Jan 2027; no time limit | Licence and annexes in the e-register. Until 2027, the notification and acceptance coupon (CQA checklist item 10, gross) | CoAO 463(1): 25 MRP (108,125 tenge) plus confiscation of income; repeat 50 MRP ([CoAO](https://old.adilet.zan.kz/rus/docs/K1400000235)) |
| Annex for each building | Law on Education Art. 57(4) | Annex with the actual address, issued after a site check | Before using a new building | Annex in the e-register | As above for the unlicensed building (unverified reading) |
| Re-issue on change | Law on Education Art. 57(6); [Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314) | Re-issue on a change of name, legal address or a sole trader's details, or on reorganisation | Within 30 calendar days of reorganisation; the licensor takes 3 WD (30 WD for a reorganisation) | Re-issued licence | CoAO 464(1): 45 MRP (194,625 tenge), with or without suspension (unverified that it applies) |
| Stay registered at the right address | [CQA criteria](https://old.adilet.zan.kz/rus/docs/V1500012777), subjective criterion 1 | Register in the state e-register of permits and notifications, including after a change of address | On every change | E-register entry | Triggers a preventive control visit |
| Comply with the licence requirements at all times | CoAO 464; Law on Education Art. 57(5) | Keep meeting rows 73-82 after the licence is issued | Continuous | As for rows 73-82 | 464(1): 45 MRP with or without suspension. 464(2) for false data at filing, a repeat, or failure to cure after a suspension: 100 MRP (432,500 tenge) with or without loss of the licence. A suspension lasts up to 6 months, with no state-order competitions and no new admissions |

### B. Qualification requirements, rows 73-82 (from 1 Jan 2027)

Source for every row: [Order 268](https://old.adilet.zan.kz/rus/docs/V2500037500), which adds item 8 to [Order 473](https://old.adilet.zan.kz/rus/docs/V2200030721). Rows 79 and 81 are as restated by Order 128-НҚ, in force 12 Jul 2026.

| Row | What must exist | Thresholds and exemptions | Evidence filed or shown | Penalty if missing after licensing |
|---|---|---|---|---|
| 73 Curricula | Working curricula built on the typical curricula (Order 557 of 20 Dec 2012) and the typical programme (Order 499 of 12 Aug 2016) | None | Copies of long-term plans for each age group, cyclograms and individual child development cards, approved by the head | 464(1); for the state standard, 409(6): 15 MRP plus suspension |
| 74 Staff | Teachers with higher or TVET teaching education, or retraining; head and teachers qualified per Order 338 of 13 Jul 2009 | At least 75% of teachers work there as their main job. At least 20% hold the category moderator, expert, researcher or master, unless the kindergarten has fewer than 2 groups | Annex 1 staffing form | 464(1); 409(7-5) for unqualified teachers: 25 MRP |
| 75 Teaching materials | Teaching-methodical complexes per Order 216 of 22 May 2020; teaching and play materials per Order 70 of 22 Jan 2016 | None | Annex 2 (library fund) | 464(1) |
| 76 Medical | Medical room or point and a medical licence (pre-doctor primary care for children) per Health Ministry order ҚР ДСМ-25 of 15 Mar 2022 | Not required with 3 groups or fewer | Annex 3; copy of the contract with a health organisation. The licensor checks the medical licence itself on e-license.kz | 464(1) |
| 77 Catering | Catering unit with a sanitary conclusion per ҚР ДСМ-59 and ҚР ДСМ-16 of 17 Feb 2022 | None | Annex 4 (date and number of the conclusion; tenants, if catering is outsourced) | 464(1); sanitary breaches 425: 160 MRP |
| 78 Premises | Owned, held under economic or operational management or trust, or leased for at least 5 years. Group rooms meet ҚР ДСМ-76 of 5 Aug 2021 and fire rules (MES Order 55) | Lease of at least 5 years | Annex 5; title or lease; sanitary conclusion for each building; a fire inspection or preventive-control act. A new organisation shows instead: the commissioning act, the order naming fire-safety staff, fire instructions, the evacuation plan, the list of primary extinguishers and the acceptance act for fire automatics. If violations were cured, the control body's reply is accepted | 464(1); fire breaches 410(1): warning or 15 MRP |
| 79 Equipment and groups | Equipment and furniture per Order 70. Groups and group sizes per Order 385. A third-level domain in edu.kz. Equipped clothes lockers. Beds for day sleep. Toilets and washbasins per ҚР ДСМ-76. Anti-terror equipment per Order 117 | Part-day mini-centres need no beds. Lockers and beds are counted against planned intake (new) or enrolment (existing) | Annexes 5 and 6 | 464(1); 149 for anti-terror: 200 MRP (865,000 tenge) |
| 80 Training | Teacher training of at least 36 hours at least once in 3 years. Heads trained in their field and in education management at least once in 3 years | 36 hours in 3 years | Annex 8: training over the last 5 years, signed by the head | 464(1) |
| 81 Data | Data entered in the NOBD per the administrative data forms (Order 570 of 27 Dec 2012), plus an education management information system whose databases are current and match the NOBD | None | Annex 6 | 464(1); NOBD mismatch is a gross violation in the CQA checklist |
| 82 SEN | Conditions for SEN children per the psychological-pedagogical support rules (Order 92 of 29 Apr 2025) | None | Annex 5 | 464(1); CPCR item 9 (gross) |

### C. Running the kindergarten (model rules and the state standard)

| Duty | Legal basis | What must exist or be done | Frequency or deadline | Evidence an inspector asks for | Penalty |
|---|---|---|---|---|---|
| Group sizes | [Order 385 p.7-8](https://old.adilet.zan.kz/rus/docs/V2200029329) | Single-age groups: age 1 up to 10 children; age 2 up to 20; ages 3, 4 and 5 up to 25. Mixed-age groups: ages 1-2 up to 15; ages 3-5 up to 20 | Continuous; regrouping 1-31 Aug (p.14) | Group lists; NOBD data | 409(4): 15 MRP plus suspension. Group size above the norm triggers a CQA visit |
| SEN children per group | Order 385 p.10; [CPCR checklist item 2](https://old.adilet.zan.kz/rus/docs/V2600038978) | No more than 3 SEN children in an ordinary group, on PMPC advice | Continuous | Group lists, PMPC opinions | Significant violation; 409(4) |
| Age grouping | [CQA checklist item 28](https://old.adilet.zan.kz/rus/docs/V1500012777) | Groups formed by age periodisation, except mixed-age groups | Each August | Group lists with birth dates | Gross |
| Admission | Order 385 p.13 | State and state-order private kindergartens admit only through the single e-queue (Order 254 of 19 Jun 2020) | Each admission | Referral (направление) | 409(4) p.8: 15 MRP |
| Contract with parents | CQA item 18; CPCR item 1; typical contract form ([Order V1600013227](https://zakon.uchet.kz/rus/docs/V1600013227), number and date unverified) | Signed education-services contract for each child, and compliance with it | On admission | Contracts | Minor |
| Keeping a child's place | Order 385 p.15; CQA item 20 | Keep the place during illness or treatment, parental leave up to 2 months, quarantine or emergencies | Each case | Absence records | Gross |
| Expulsion | Order 385 p.16; CPCR item 3 | Only for breach of contract, more than 1 month's absence without reason, or a medical contraindication | Each case | Expulsion order with grounds | Significant |
| Fees | Order 385 p.17 | State-order private kindergartens may charge parents only 100% of food costs. Others are set by the founder | Monthly | Fee records | 409(4) (unverified link) |
| State standard and programme | Order 385 p.20; state standard (GOSO, Order 348 of 3 Aug 2022) | Deliver the standard in full | Continuous | Plans, cyclogram, daily routine | 409(6): 15 MRP plus suspension |
| Teacher documents | [Informburo, 9 Sep 2022](https://informburo.kz/novosti/vospitateli-detskih-sadov-teper-dolzhny-budut-zapolnyat-tolko-tri-dokumenta) (MoE order, number not given) | Only three: an annual long-term plan, a weekly cyclogram, and an individual development card for each child per school year (start, interim and final diagnostics) | Yearly, weekly, per school year | The three documents; CQA items 7 and 9 | CQA: long-term plan gross; development cards significant |
| No extra paperwork for teachers | CQA item 21; CoAO 409(7-3) | No non-teaching work, no reports beyond the list, no forced purchases, no duplicate paper and electronic records | Continuous (checked on complaint) | Complaints | Gross; 409(7-3) warning, then fines (informburo cites 20-120 MRP on repeat, unverified) |
| Daily routine | CQA item 7 | Cyclogram covering reception, morning exercise, meals, walk, nap, hardening and going home. Organised play, cognitive, communicative, creative, experimental, labour, object, motor and visual activities | Weekly | Cyclogram | Gross |
| Councils | CQA items 12 and 23 | Approved work plans and minutes of the pedagogical, methodological and ethics councils, plus rules for the ethics council | Per school year | Plans, minutes | Minor (plans, minutes); significant (ethics council) |
| Charter and internal acts | Order 385 p.19; CQA items 16 and 19 | A charter covering programmes, admission, language, regime, expulsion, paid services and relations with parents. Approved internal rules and job descriptions | On change | Charter, rules, job descriptions | Gross (charter); minor (rules) |
| Menu | Order 385 p.20; [CPCR items 4-5](https://old.adilet.zan.kz/rus/docs/V2600038978) | A forward menu approved by the head and posted in each group. Order 385 says a 10-day menu; the CPCR checklist asks for a 4-week seasonal menu. The daily menu must match the forward menu | Seasonal and daily | Forward menu, daily menus | Forward menu gross; mismatch significant |
| Medical care | Order 385 p.20; CQA item 29 | Medical observation, immunisation and preventive examinations with a primary care provider | Ongoing | Medical records | Significant (no medical service) |
| Data exchange with the MoE system | Order 385 p.20 | Automated data exchange with the MoE information system, and an approved regulation on information interaction | Continuous | The regulation; NOBD data | 409(4) (unverified link) |
| Organisation's own evaluation | [Order 486](https://zakon.uchet.kz/rus/docs/V2200031053) | 9 criteria scored 2-5 (max 45): teacher education, categories, training, equipment, SEN conditions, teaching sets, group sizes, parent and teacher satisfaction. Ratings: exemplary (40-45), good (35-39), needs improvement (30-34), low (under 30). The criteria are meant for self-assessment; p.3 describes a yearly evaluation | Yearly (p.3) | Self-assessment materials | Not publishing self-assessment materials on the website is a gross violation in the CQA criteria |
| Website | Row 79; CQA criteria; Order 385 p.21 | Website on a third-level domain in edu.kz. Self-assessment materials published. State kindergartens also publish the staffing table and pay rates | Continuous | The website | Gross (self-assessment); minor (staffing table) |

### D. Staff

| Duty | Legal basis | What must exist or be done | Frequency or deadline | Evidence an inspector asks for | Penalty |
|---|---|---|---|---|---|
| Teacher qualifications | Order 385 p.22; Row 74; CQA item 13 | Only people with teaching or relevant education may teach | On hiring | Diplomas with supplements; approved pay-rate lists | Gross; 409(7-5): 25 MRP |
| Barred persons | CQA item 14 | Do not hire anyone with a court ban, legal incapacity, a medical contraindication or psychiatric or narcology registration, no teaching education, or a conviction for listed offences | On hiring | Criminal-record certificate (Annex 1 has a field for it) | Gross; 409(7-5): 25 MRP |
| Teacher categories | [Order 83](https://zakon.uchet.kz/rus/docs/V1600013317) p.3, p.26; CQA item 4 | Attestation at least once in 5 years for teachers (3 years for first heads). Categories: teacher, moderator, expert, researcher, master. Applications go through the Ұстаз platform for moderator and expert, and egov for researcher and master (p.15) | Category valid 5 years (3 for heads) | Certificate (удостоверение), attesting body's order | Gross (no upgrade or confirmation at least once in 5 years) |
| Training | Row 80; Law on Education Art. 37(4); Law on the Status of the Teacher Art. 18(1); CQA item 3 | At least 36 hours at least once in 3 years; heads at least once in 3 years | Every 3 years | Certificates; Annex 8 | Gross |
| Medical book | [ҚР ДСМ-59](https://old.adilet.zan.kz/rus/docs/V2100023469) p.125, p.1(7) | No hiring without a personal medical book. Service and kitchen staff pass medical exams and hygiene training | Periodic | Medical books; exam log | 425: 160 MRP (692,000 tenge) |
| Kitchen staff daily check | ҚР ДСМ-59 p.133(7) | Daily health check of kitchen staff, logged | Daily | Kitchen staff exam log | 425 |

### E. Data reporting and state-order paperwork

| Duty | Legal basis | What must exist or be done | Frequency or deadline | Evidence an inspector asks for | Penalty |
|---|---|---|---|---|---|
| NOBD data | Row 81; CQA item 5 | NOBD statistics must match reality | Continuous; monthly data matching by CPCR | NOBD extract vs registers | Gross; submitting false administrative data is gross |
| Daily attendance (state order) | [Order 381 p.33](https://old.adilet.zan.kz/rus/docs/V2200029323) | Record attendance daily in the NOBD | Daily | NOBD | Loss of funding (p.25-26) |
| Funding claim (state order) | Order 381 p.31 | Electronic attendance sheet with reasons for absences, an act of work done and an e-invoice, signed with the head's ЭЦП | Each financing period | The submitted set | Funding withheld |
| Pupil data (personalised financing) | Order 381 p.46 | Fill in pupil data in the NOBD | Monthly | NOBD | Funding withheld |
| State-order materials | CQA item 11 | Design capacity, the akimat's resolution on the state order, list of children | Yearly | Documents | Significant |
| Relocation notice (state order) | Order 381 p.34, p.41 | Notify 1 month before a move | Each move | Notice | Contract terminated; excluded within 3 WD |
| Anti-terror data in NOBD | [Order 117 p.80](https://old.adilet.zan.kz/rus/docs/V2200027414) (from 12 Jul 2026) | After the police check, enter the compliance information in the NOBD | After each police check | NOBD entry | 149 (unverified link) |

### F. Safety: anti-terror, fire, sanitary

| Duty | Legal basis | What must exist or be done | Frequency or deadline | Evidence an inspector asks for | Penalty |
|---|---|---|---|---|---|
| Anti-terror equipment | [Order 117 p.77-79](https://old.adilet.zan.kz/rus/docs/V2200027414); CPCR item 7 | Group 1: alert system, CCTV feeding police centres, a fixed or mobile panic button to police or a security firm. Group 2: plus an intercom. CPCR also lists fencing and vehicle speed-reduction means | Continuous | Equipment on site; contracts | Gross; 149: 200 MRP; repeat 300 MRP plus suspension up to 3 months |
| CCTV coverage and storage | Order 117 p.84-88 | Cameras on the perimeter, entrances and busy areas (corridors, halls, dining room, lobby, cloakrooms, playgrounds). Recordings kept at least 30 days | Continuous | Archive check | 149 |
| Backup power | Order 117 p.97 | Backup power for the security systems | Continuous | On site | 149 |
| Anti-terror passport | Order 117 ch.5; CPCR item 8 | Draft within 45 WD of notice that the object is on the vulnerable list. Send to the local police head within 10 calendar days; police approve within 15 WD. The head approves within 10 WD. A second copy and a PDF go to the police within 10 calendar days. Update within 20 WD after a change of owner, head, name, purpose, area, dangerous zones or technical means. Marked "for official use" | Event-driven | Passport agreed with police | Gross; 149 |
| Lease clause | Order 117 p.8 | For leased premises, the lease says who makes the passport, guards and equips | At lease signing | Lease | 149 (unverified link) |
| Anti-terror training | Order 117 p.26-27, 30, 36, 42-50 | A responsible person named by the head's order. Planned instruction at least twice a year for each group of staff; extra instruction when the threat level changes. Drills. "Basics of safe behaviour" for children from the pre-school group | At least twice a year | Journal (Annex 3): section 1 instructions (date, name and post of the person instructed, type, instructor, signatures); section 2 drills (date, topic, questions, number present, signature). Numbered, laced and sealed. A protocol if more than 20 take part | 149 |
| Fire drills and plans | [MES Order 55](https://old.adilet.zan.kz/rus/docs/V2200026867) p.12, p.14, p.200 | Evacuation plans in the Annex 2 form. Practical drills at least once every six months, logged in a drills journal. Fire-safety talks with children | Every 6 months | Plans, drills journal | 410(1): warning or 15 MRP |
| Building use and night duty | Order 55 p.10, 207, 208, 212, 213 | Groups no higher than the 3rd floor. Furniture not blocking exits. End-of-day check with appliances off. In 24-hour kindergartens, round-the-clock duty with a phone and a log of people staying overnight | Daily | Logs | 410(1) |
| Medical documentation | [ҚР ДСМ-59 Annex 12](https://old.adilet.zan.kz/rus/docs/V2100023469) | 17 records: infectious disease log; somatic illness log; contacts log; vaccination card; Mantoux log; risk-group Mantoux log; TB-positive log; chemoprophylaxis log; worm-infection log; child health passport; risk-group lists; perishable-food grading log (бракеражный); kitchen staff exam log; food-norm control sheet; individual medical cards; organoleptic quality log; vitamin C log | Ongoing | The logs | 425: 160 MRP |
| Child health documents | ҚР ДСМ-59 p.134 | Health passport and health certificate on admission | Each admission | Child files | 425 |
| Reports to the sanitary body | ҚР ДСМ-59 p.133(8) | Written reports yearly and on request; analysis of food norms every 10 days | Yearly; every 10 days | Reports | 425 |
| Premises location | [ҚР ДСМ-59 p.24](https://www.zakon.kz/sovety-yurista/6435574-detskie-sady-v-zhilykh-domakh-mogut-zakryt-kakie-imenno-i-pochemu.html) (via zakon.kz); Land Code Art. 107(3) | A kindergarten may sit on the first two floors of an apartment block, in its own building, a private house or attached premises. Land-use zoning may still require a change of designated use, which costs a payment equal to the plot's cadastral value | At licensing | Title, zoning | Astana owners were fined 60 MRP in 2024 ([24.kz](https://24.kz/ru/news/social/654425-pochti-80-chastnykh-detskikh-sadov-mogut-zakrytsya-v-astane), search summary; unverified) |

### G. Responding to control

| Duty | Legal basis | What must exist or be done | Frequency or deadline | Evidence | Penalty |
|---|---|---|---|---|---|
| Recommendation after preventive control without a visit | [Child Rights Law Art. 52(7)-(13)](https://old.adilet.zan.kz/rus/docs/Z020000345_) | The control body sends a recommendation within 5 WD. The kindergarten objects within 5 WD or fulfils it within 10 WD and reports | At most once a month (by the 25th) | Report on fulfilment | Failure puts it on the half-year list for a visit; 100 points in the CPCR criteria |
| Order (предписание) after a check | Child Rights Law Art. 52-4 | Fix each violation by its deadline and report | As set in the order | Report with proof | Failing to report more than once is a ground for an unscheduled check |
| State-order monitoring | Order 381 p.24-26 | Planned monitoring once per financial year with 1 month's notice. Fix violations within 7 WD of the commission's act | Yearly | Proof of fixes | Excluded from the state order; funding suspended the day notice is received |
| Do not obstruct a check | Child Rights Law Art. 52-4; CoAO 462 | Admit inspectors, including unannounced ones | Each check | — | CoAO 462 (amount not checked) |

### H. Personal data

| Duty | Legal basis | What must exist or be done | Frequency or deadline | Evidence | Penalty |
|---|---|---|---|---|---|
| Store data in Kazakhstan | [Personal Data Law Art. 12(2)](https://old.adilet.zan.kz/rus/docs/Z1300000094) | Data held "in a database and/or digital object located in Kazakhstan" by the owner, operator and any third party | Continuous | Hosting location | CoAO Art. 79: up to 60 MRP (259,500 tenge) for a small business since 2025 ([digitalbusiness.kz, Mar 2025](https://digitalbusiness.kz/2025-03-11/uznali-kakimi-budut-shtrafi-za-narushenie-zashchiti-personalnih-dannih/); unverified against the code text) |
| Consent | Art. 7(1), 8(1) | Consent of the person or their legal representative, given in writing, through a state or non-state service, or in another way that proves consent | Before collection | Consent records | CoAO Art. 79, as above (unverified) |
| Cross-border transfer | Art. 16 | Only to states that protect personal data, unless an exception applies, such as consent | Each transfer | — | CoAO Art. 79, as above (unverified) |
| Operator's internal acts | Art. 25(2) | Approve the list of personal data, approve the policy documents, name the person responsible, and notify the authorised body of a security breach "from the moment of discovery" (the time limit's wording is ambiguous; unverified) | On setup; on breach | Acts, orders | CoAO Art. 79, as above (unverified) |

## Filing channels and formats

**Licence application** ([Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314), the new edition of public service rules Order 483, in force 1 Jan 2027):
- **Channel.** Filed on the egov.kz portal or elicense.kz. The e-request is signed with the applicant's ЭЦП. Since Feb 2025, eLicense has separate education-licensing services for MoE organisations and for universities ([egov.kz](https://egov.kz/cms/ru/news/educational_organisations)).
- **Contents.** The e-request; proof of the fee; information forms per Annexes 1, 2, 3, 4, 5, 6 and 8, listed as administrative forms 1-КК to 6-КК and 8-КК (one-off, electronic, filed with the application); and e-copies of the documents named in Order 473. The licensor pulls registration data and the medical licence from state systems itself. Property data is not needed if it is in the Unified State Real Estate Cadastre ([Order 473 Annex 5 note](https://old.adilet.zan.kz/rus/docs/V2200030721)).
- **Steps and deadlines.**
  - Completeness check: 2 WD. An incomplete set or expired documents get a reasoned refusal to proceed.
  - Document check and permit control with a site visit: 22 WD. The regional department sends an expert opinion to a commission, which decides in 2 WD. The e-licence is formed in 2 WD and signed in 1 WD.
  - Before a refusal there is a hearing. Notice comes at least 3 WD before the end of the term, and the applicant has 2 WD to object.
  - Totals: issue within 30 WD; re-issue 3 WD; reorganisation 30 WD.
  - A regional head described the same flow. The commission reviews the file, then staff look at "photos and video" ([MTRK](https://mtrk.kz/ru/2026/07/24/licenzirovanie-detskikh-sadov-startu/)).
- **Fee.** 10 MRP on issue and 1 MRP on re-issue. No fee for an annex. Order 248 cites the old Tax Code (art. 554); the article in the 2026 Tax Code is (unverified). That is 43,250 tenge in 2026, or 46,930 tenge in 2027 if the draft MRP of 4,693 tenge is adopted ([bes.media, Sep 2026](https://bes.media/news/mrp-4-693-tenge-minimalnaya-zarplata-85-tysyach-chto-zalozhili-v-byudzhet-kazahstana-na-2027-god/)).
- **Refusal grounds.** Not meeting the qualification requirements; unpaid fee; a negative answer from an approving state body; no consent to access personal data.
- **Helpline.** 8 (7172) 74-24-30 and 1414.

**Exact columns of the annex forms** (from the consolidated [Order 473](https://old.adilet.zan.kz/rus/docs/V2200030721) and [Order 268](https://old.adilet.zan.kz/rus/docs/V2500037500)). These are what the product must reproduce:
- **Annex 1 (staff).** No.; full name; year and place of birth; education (diploma speciality, qualification, institution, year; retraining); main place of work (address, post, length of service); practical experience in the field; criminal record (none or present); category, date and order number; medical exam (personal medical book); master's degree; PhD; scientific degree; academic title; honours; recognition of foreign education; subject taught.
- **Annex 2 (library fund).** No.; subject, discipline or section of the upbringing programme; number of learners (planned intake); teaching literature (title, year, authors); teaching-methodical, fiction and scientific literature (title, year, authors); quantity, at least 1 copy; total.
- **Annex 3 (medical).** Actual address of the building; medical licence number; note. The licence is checked in the e-license.kz system.
- **Annex 4 (catering).** Actual address of the building; catering object (canteen, buffet, café); sanitary conclusion (date and number); note, with tenants if catering is outsourced.
- **Annex 5 (premises and conditions).** Building type (standard design, adapted, other) and actual address; assets held by ownership, economic or operational management or trust, or lease details; types of rooms (a long list including toilets, CCTV and SEN conditions); room area in m².
- **Annex 6 (material and technical support).** Actual address with total and useful area; equipment; rooms with name and area; technical teaching aids; assembly hall, gym and library; computers, furniture, individual lockers and video cameras; online-learning equipment; and "education management information system with current databases, NOBD, third-level domain in edu.kz; internet".
- **Annex 8 (training, last 5 years).** No.; full name; topic; place and period; training organisation; hours and length of service; form of completion. Signed by the head.

**Other channels:**
- **NOBD** for data, including daily attendance for the state order ([Order 381](https://old.adilet.zan.kz/rus/docs/V2200029323)).
- **State-order documents** go by e-mail to the akimat's preschool department, signed and sealed, or on paper if e-mail is not possible (Order 381 p.17).
- **Teacher categories:** the Ұстаз platform or egov ([Order 83 p.15](https://zakon.uchet.kz/rus/docs/V1600013317)).
- **Anti-terror passport:** paper plus PDF to the local police ([Order 117](https://old.adilet.zan.kz/rus/docs/V2200027414)).

## Supervisors and enforcement evidence

| Supervisor | What it checks | How | Source |
|---|---|---|---|
| CQA regional departments (MoE) | Licensing; compliance with education law, model rules, the standard and licence requirements | Licensing and permit control; preventive control with and without visits; checks; state attestation (still listed in model rules p.18; unverified after 2027) | [Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314); [CQA criteria](https://old.adilet.zan.kz/rus/docs/V1500012777); [Law on Education Art. 59](https://old.adilet.zan.kz/rus/docs/Z070000319_) |
| CPCR and its regional departments (MoE) | Children's rights: contracts, SEN, expulsions, menus, premises, anti-terror | Monthly preventive control without visits; preventive control with visits; for budget-funded organisations, planned checks by risk (high risk at most once a year) and unannounced unscheduled checks | [Child Rights Law Art. 52, 52-4](https://old.adilet.zan.kz/rus/docs/Z020000345_); [CPCR criteria](https://old.adilet.zan.kz/rus/docs/V2600038978) |
| SEC (Health Ministry) | Sanitary rules, food, medical records | Special sanitary control of about 15,000 education organisations since Feb 2026; unannounced; monitoring visits only on orders from top officials; no fines at a first visit in planned checks | [bizmedia, 2 Feb 2026](https://bizmedia.kz/2026-02-02-proveryat-vnezapno-detsady-i-shkoly-kazahstana-budet-komitet-sanepidkontrolya/) |
| Emergency Situations Ministry (fire) | Fire safety | Fire inspection or preventive-control act, which Row 78 requires | [Order 268 Row 78](https://old.adilet.zan.kz/rus/docs/V2500037500) |
| Police (Interior Ministry) | Anti-terror protection | Agrees the passport; checks equipment; results go to the NOBD | [Order 117](https://old.adilet.zan.kz/rus/docs/V2200027414) |
| Akimat state-order commission | State-order compliance and funding | Planned monitoring once per financial year; exclusion if violations are not fixed in 7 WD | [Order 381](https://old.adilet.zan.kz/rus/docs/V2200029323) |

**Inspection mechanics under the Child Rights Law, Art. 52-4** (in force 1 Feb 2026; added by the law of 4 Dec 2025 on culture, education, family and state control, [azattyq-ruhy](https://rus.azattyq-ruhy.kz/news/99400-v-kazakhstane-s-fevralia-2026-goda-vvodiatsia-vnezapnye-proverki-detskikh-uchrezhdenii)):
- **Planned checks.** Frequency depends on risk: high risk at most once a year, medium once in 2 years, low once in 3 years. The yearly list is published by 25 Dec, and written notice comes 30 calendar days ahead.
- **Unscheduled checks.** No notice. Grounds:
  - repeated failure to report on fixing violations;
  - complaints (not anonymous ones);
  - a prosecutor's demand;
  - requests from state bodies;
  - media reports;
  - criminal-prosecution bodies.
- **Duration.** A planned check takes 15 WD (extendable by 15). An unscheduled check takes 10 WD (extendable by 10). The act ordering the check is registered with the legal-statistics body.
- **Result.** An order (предписание) with deadlines.
- **Source:** [Child Rights Law](https://old.adilet.zan.kz/rus/docs/Z020000345_).

**What triggers a visit (risk scoring):**
- *CQA.* Each of the following scores 100%:
  - not registered in the e-register of permits and notifications;
  - group size above the norm (seen in NOBD monitoring);
  - children's ages or conditions not matching the type of kindergarten;
  - groups formed against the age rules;
  - failure to fix violations or to report after preventive control without a visit.
  - Source: [CQA criteria](https://old.adilet.zan.kz/rus/docs/V1500012777).
- *CPCR.* One gross violation scores 100 and leads to preventive control with a visit. So does an unfulfilled recommendation. Source: [CPCR criteria](https://old.adilet.zan.kz/rus/docs/V2600038978).

**The two official checklists** (both are product content):
- *CQA preschool checklist (Annex 2, 29 items):* teacher duties and ethics; no party or religious structures; training certificates; category certificates; NOBD match; curricula and SEN plans; long-term plans, cyclogram and activity types; consultations for parents whose children do not attend; development cards; founding documents and the notification coupon; state-order materials; council plans and minutes; diplomas and pay-rate lists; no barred persons; the head's safety duties; charter functions; typical staffing (state); parent contracts; internal rules and job descriptions; keeping a child's place; no non-teaching work for teachers; CCTV (state); ethics council rules; equipment norms; competition for posts (state); staffing table on the website (state); national qualification testing; age grouping; medical observation and immunisation. Several items are checked only on complaint.
  - Gross: barred persons; training; category every 5 years; NOBD; curricula; long-term plan; founding documents; diplomas; head's safety duties; charter; keeping a child's place; non-teaching work; equipment norms; activities missed for lack of specialists; self-assessment not published on the website; false administrative data; age grouping.
  - Significant: no sport or music room; no medical service; ethics; development cards; state-order materials; staff numbers; ethics council; competition; at least 1 confirmed complaint.
  - Minor: parent consultations; plans and minutes; contracts with parents; internal rules; staffing table online.
  - Source: [CQA criteria](https://old.adilet.zan.kz/rus/docs/V1500012777) (Annex 2 as of 30 Mar 2023).
- *CPCR preschool checklist (Annex 3, 9 items, revised 12-15 Jun 2026):*
  1. contract with parents (minor);
  2. at most 3 SEN children per group (significant);
  3. no unlawful expulsions (significant);
  4. 4-week seasonal forward menu (gross);
  5. daily menu matches the forward menu (significant);
  6. premises, equipment and furniture (significant);
  7. anti-terror equipment: alert system, CCTV, panic button, access control or intercom, fence, speed-reduction means (gross);
  8. anti-terror passport agreed with police (gross);
  9. conditions for children with disabilities (gross).
  - Source: [CPCR criteria](https://old.adilet.zan.kz/rus/docs/V2600038978).

**Enforcement evidence:**
- **Volume.** In 2023 there were 7,497 inspections of preschool organisations. 90.7% found violations. 4,027 officials were fined 1.12 billion tenge, about 278,000 tenge each by my division, with some fines up to 1 million tenge ([finratings.kz, 12 Feb 2025](https://finratings.kz/news/533-v-kazakhstane-milliardnye-shtrafy-dushat-chastnye-detsady/)).
- **Sanitary.** The Health Ministry said that in unannounced checks 70% of schools and 60% of kindergartens had sanitary violations ([azattyq-ruhy](https://rus.azattyq-ruhy.kz/avtory/103634-u-70-shkol-i-60-detsadov-byli-sanitarno-epidemiologicheskie-narusheniia-minzdrav-o-proverkakh-bez-preduprezhdenii/amp)).
- **Unlicensed activity is fined in practice.** In 2024, 58 schools were found operating without a licence and fined under Art. 463, with fines of more than 92,000 tenge ([kapital.kz](https://kapital.kz/gosudarstvo/131843/v-kazakhstane-oshtrafovali-58-shkol-za-ot-sut-stviye-litsenzii.html)). This is the template for kindergartens from 2027.
- **Premises.** In 2024, Astana owners were given a month to change the designated use of their premises after the inspection moratorium ended, and some were fined 60 MRP ([24.kz](https://24.kz/ru/news/social/654425-pochti-80-chastnykh-detskikh-sadov-mogut-zakrytsya-v-astane); search summary, unverified).
- **Officials promise "partnership" checks with no fine at a first planned visit** ([24.kz, Dec 2025](https://24.kz/ru/news/social/744959-kakie-organizatsii-zhdut-vnezapnye-proverki); [bizmedia](https://bizmedia.kz/2026-02-02-proveryat-vnezapno-detsady-i-shkoly-kazahstana-budet-komitet-sanepidkontrolya/)). Fines, suspensions and removal of staff remain for those who ignore orders or where there is an urgent risk.

## Regional differences

- **The law is national, but the licence and the inspections are regional.**
  - The licence covers only the region of the legal address ([Law on Education Art. 57(4)](https://old.adilet.zan.kz/rus/docs/Z070000319_)). A chain with buildings in several regions may need a licence in each region (unverified reading).
  - Each region and each city of republican significance has its own CQA department, for example North Kazakhstan, East Kazakhstan and Akmola ([MTRK](https://mtrk.kz/ru/2026/07/24/licenzirovanie-detskikh-sadov-startu/); [gov.kz VKO](https://www.gov.kz/memleket/entities/control-vko/press/news/details/1269193?lang=kk)). That makes about 20 licensors (count unverified).
- **Land and building use are read differently by region.** Atameken says one region accepts an existing kindergarten's documents while another demands a change of land or building use ([informburo, 1 Oct 2026](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia)).
  - The sanitary rules allow the first two floors of an apartment block.
  - The Land Code zones a private kindergarten as commercial, not residential. Changing the designated use costs a payment equal to the plot's cadastral value, which zakon.kz puts at 5-30 million tenge ([zakon.kz](https://www.zakon.kz/sovety-yurista/6435574-detskie-sady-v-zhilykh-domakh-mogut-zakryt-kakie-imenno-i-pochemu.html)).
- **The pace of licensing differs.** North Kazakhstan plans more than 200 of its 429 organisations in 2027 ([MTRK](https://mtrk.kz/ru/2026/07/24/licenzirovanie-detskikh-sadov-startu/)). East Kazakhstan counts 381 organisations to license ([gov.kz VKO](https://www.gov.kz/memleket/entities/control-vko/press/news/details/1269193?lang=kk)). I found no national schedule.
- **Anti-terror equipment depends on place.** Rural objects with up to 700 people are group 1. District centres, cities and the capital are group 2 and need an intercom too ([Order 117 p.77-79](https://old.adilet.zan.kz/rus/docs/V2200027414)).
- **State-order administration is run by akimats.** Each akimat runs its own commission, monitoring and funding, and per-child rates differ ([Order 381](https://old.adilet.zan.kz/rus/docs/V2200029323)). Twelve regions use the Indigo voucher system ([A1 report](../reports/kazakhstan-a1.md), citing [zakon.kz](https://www.zakon.kz/stati/6420659-verifitsiruy-menya-ili-zachem-kazakhstanskim-roditelyam-navyazyvayut-novoe-prilozhenie-dlya-detsadov.html)).
- **Language.** Documents must be kept in Kazakh, with Russian where needed. The language law requires accounting, statistical, financial and technical documents in both Kazakh and Russian in organisations of any ownership ([Law on Languages, via dogovor24](https://dogovor24.kz/questions/v-kazahstane-rabotodatel-dolzhen-vesti-deloproizvodstvo-na-dvuh-yazykah-kazahskii-i-russkii-mozhno-li-chtoby-versii-dokumentov-24222.html); [law text](https://cdb.kz/sistema/pravovaya-baza/o-yazykakh-v-respublike-kazakhstan/)). The north works mostly in Russian and the south mostly in Kazakh (my estimate). The product must offer both languages everywhere.

## Upcoming changes

| Date | Change | Source |
|---|---|---|
| Already in force, 1 Feb 2026 | Unannounced checks of budget-funded children's organisations; special sanitary control | [Child Rights Law Art. 52-4](https://old.adilet.zan.kz/rus/docs/Z020000345_); [bizmedia](https://bizmedia.kz/2026-02-02-proveryat-vnezapno-detsady-i-shkoly-kazahstana-budet-komitet-sanepidkontrolya/) |
| Already in force, 12 Jun - 17 Jun 2026 | New CPCR risk criteria and 9-item preschool checklist | [CPCR criteria](https://old.adilet.zan.kz/rus/docs/V2600038978) |
| Already in force, 12 Jul 2026 | Rows 79 and 81 restated (Order 128-НҚ). Anti-terror compliance must be entered in the NOBD after the police check (Order 117 p.80). Order 486 evaluation criteria amended (Order 101-НҚ) | [Order 268](https://old.adilet.zan.kz/rus/docs/V2500037500); [Order 117](https://old.adilet.zan.kz/rus/docs/V2200027414); [Order 486](https://zakon.uchet.kz/rus/docs/V2200031053) |
| Already in force, 3 Jul 2026 | Teacher attestation rules amended; moderator and expert categories handled on the Ұстаз platform | [Order 83](https://zakon.uchet.kz/rus/docs/V1600013317); [zakon.kz](https://www.zakon.kz/pravo/6524542-izmenilis-pravila-provedeniya-attestatsii-pedagogov.html) |
| Aug 2026 | State-order rules amended (Order 218-НҚ of 5 Aug 2026). The admission condition I read still says "notified", not "licensed" | [Order 381](https://old.adilet.zan.kz/rus/docs/V2200029323) |
| 1 Jan 2027 | Licensing starts; rows 73-82 apply; new public service rules apply; notification for preschool ends | [Law 148-VIII](https://old.adilet.zan.kz/rus/docs/Z2400000148); [Order 268](https://old.adilet.zan.kz/rus/docs/V2500037500); [Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314) |
| 1 Jan 2027 (draft) | MRP rises to 4,693 tenge, which moves every fee and fine by about 8.5% | [bes.media](https://bes.media/news/mrp-4-693-tenge-minimalnaya-zarplata-85-tysyach-chto-zalozhili-v-byudzhet-kazahstana-na-2027-god/); [uchet.kz](https://uchet.kz/week/mzp-i-mrp-na-2027-god-proekt-respublikanskogo-byudzheta-opublikovan/) |
| 2027-2029 (practice, not law) | Phased licensing of existing kindergartens over about 3 years | [24.kz](https://24.kz/ru/news/social/768260-litsenzirovanie-detskikh-sadov-predprinimateli-opasayutsya-novykh-pravil); [MTRK](https://mtrk.kz/ru/2026/07/24/licenzirovanie-detskikh-sadov-startu/) |
| 1 Jan 2028 | A 5-year licence term applies to special psychological-pedagogical support organisations only, not kindergartens (Law 334-VIII of 7 Jul 2026) | [Law on Education](https://old.adilet.zan.kz/rus/docs/Z070000319_) footnotes |
| Pending | Atameken asks for a transition period, separate rules for existing kindergartens, and no suspension or loss of the state order for unfinished paperwork without a direct threat | [informburo, 1 Oct 2026](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia) |
| Pending | A deputy proposed (Sep 2026) a 1-2 year moratorium on checks of small and medium business, with exceptions for threats to life and health. Kindergarten checks would likely stay exempt (my reading) | [digitalbusiness.kz, 30 Sep 2026](https://digitalbusiness.kz/2026-09-30/v-kazahstane-mogut-vernut-moratoriy-kotoriy-do-sih-por-vspominayut-s-teplom/) |
| Pending | Owners asked to amend Land Code Art. 107(3) so preschools are allowed in residential zones. Status (unverified) | [zakon.kz](https://www.zakon.kz/sovety-yurista/6435574-detskie-sady-v-zhilykh-domakh-mogut-zakryt-kakie-imenno-i-pochemu.html) |
| Pending | Law on Permits amendments by Law 352-VIII of 23 Jul 2026; content not checked (unverified) | [Law on Permits](https://old.adilet.zan.kz/rus/docs/Z1400000202) footnotes |

## PRODUCT REQUIREMENTS

Each requirement is testable and names its legal basis. "Must" means required for a sellable version. Legal content is in Russian and Kazakh.

### A. Profile and applicability

1. **Organisation profile.** The product must capture the following, each as a required field:
   - legal form (LLP, sole trader, state institution, NCO);
   - BIN or IIN;
   - region (one of the regional licensing departments);
   - settlement type (rural, district centre, city, capital);
   - kindergarten type per Order 385 p.5;
   - regime (hours, 5- or 6-day week);
   - state-order status;
   - business size (small, medium, large).
   - Basis: [Order 385 p.4-5](https://old.adilet.zan.kz/rus/docs/V2200029329); [CoAO](https://old.adilet.zan.kz/rus/docs/K1400000235).
2. **Building records.** For each building the product must store:
   - the address;
   - the tenure type (owned, economic or operational management, trust, lease);
   - lease start and end dates;
   - the number of groups and places;
   - the peak number of people on site.
   - Test: a profile with two buildings yields two annex records. Basis: Law on Education Art. 57(4); Row 78; Order 117 p.77-79.
3. **Applicability engine.** From the profile the product must mark each requirement as applicable or not applicable, with the citation. At minimum:
   - medical room not required at 3 groups or fewer (Row 76);
   - 20% category rule not required below 2 groups (Row 74);
   - beds not required for part-day mini-centres (Row 79);
   - anti-terror group 1 or 2 (Order 117 p.77-79);
   - Art. 52-4 check regime if budget-funded (Child Rights Law);
   - 24-hour night-duty rules (Order 55 p.213);
   - state-only checklist items hidden for private kindergartens (CQA checklist).
   - Test: a 3-group private kindergarten shows "medical room: not required (Row 76)".
4. **Licence or notification classifier.** A short questionnaire tells a user whether their activity is a preschool programme (licence) or additional education (notification). The result is labelled guidance, not legal advice. Basis: [Law 148-VIII](https://old.adilet.zan.kz/rus/docs/Z2400000148), new Art. 57-1.
5. **Licence register.** Store the notification coupon, application date, licence number and date, and one annex per building. Flag any building without an annex. Basis: Law on Education Art. 57(4).
6. **Re-issue triggers.** When the user edits the name, legal address, a sole trader's details or reorganisation fields, the product must create a re-issue task. A reorganisation task carries a 30-calendar-day deadline. Basis: Law on Education Art. 57(6); [Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314).
7. **Region check.** Warn when a building's region differs from the legal-address region. Basis: Law on Education Art. 57(4).
8. **Fine estimator.** For each open gap, show the CoAO article and the fine for the user's business size, in MRP and in tenge. The MRP table is editable by year: 4,325 for 2026, and 4,693 for 2027 marked "draft" until confirmed. Basis: CoAO 149, 409, 410, 425, 463, 464.

### B. Readiness check, rows 73-82

9. **Row-by-row checklist.** One item per row 73-82. Each item must show the rule in plain words, the evidence list from Order 268's documents column, status (met, partly met, not met, not applicable), uploaded evidence, owner and due date. Test: all 10 rows present, with their sub-items. Basis: [Order 268](https://old.adilet.zan.kz/rus/docs/V2500037500).
10. **Main-job share.** Compute the share of teachers whose main job is at this kindergarten from the staff register. Fail below 75%, and show how many main-job hires would close the gap. Basis: Row 74.
11. **Category share.** Compute the share of teachers with moderator, expert, researcher or master category. Fail below 20% unless there are fewer than 2 groups, and show how many categories would close the gap. Basis: Row 74.
12. **Teacher education.** Each teacher must have either a teaching diploma (higher or TVET) or a retraining record. Missing records are flagged. Basis: Row 74; Order 385 p.22.
13. **Training clock.** For each teacher, sum training hours in the last 3 years. Fail below 36 hours and show the date by which training must be finished. For heads, check for training in the last 3 years. Basis: Row 80; Law on Education Art. 37(4).
14. **Lease test.** For leased buildings, compute the remaining lease term on the planned filing date. Fail if it is under 5 years. Basis: Row 78.
15. **Building documents.** Per building, require the sanitary conclusion (building and catering, with date and number) and either a fire inspection or preventive-control act, or the new-organisation fire set (6 documents). Basis: Rows 77-78.
16. **Medical.** Where applicable, require the medical licence number, or a contract with a health organisation. Basis: Row 76; [Order 381 p.14](https://old.adilet.zan.kz/rus/docs/V2200029323).
17. **Group-size validator.** For each group, take the age band and headcount, then:
    - flag breaches of the size limits (age 1: 10; age 2: 20; ages 3-5: 25; mixed 1-2: 15; mixed 3-5: 20);
    - flag more than 3 SEN children in a group;
    - flag age-grouping errors.
    - Test: a group of 26 four-year-olds fails with a citation.
    - Basis: [Order 385 p.7, 8, 10](https://old.adilet.zan.kz/rus/docs/V2200029329); CQA subjective criteria; CPCR item 2.
18. **Lockers and beds.** Compare lockers and beds with current enrolment, or with planned intake for a new kindergarten. Beds are skipped for part-day mini-centres. Basis: Row 79.
19. **Equipment norms.** A checklist of Order 70 items by age group with required and actual quantities. Content depends on reading Order 70 (open question). Basis: Rows 75, 79.
20. **Teaching sets.** A checklist of the Order 216 teaching-methodical complexes, feeding Annex 2. Basis: Row 75.
21. **edu.kz domain.** Check by DNS lookup that the entered website is a third-level domain under edu.kz. Test: "sad15.edu.kz" passes, "sad15.kz" fails. Basis: Row 79; [Order 473 Annex 6](https://old.adilet.zan.kz/rus/docs/V2200030721).
22. **NOBD consistency.** The user enters NOBD figures (groups, children, staff, categories) or uploads an NOBD export. The product compares them with its registers and lists every mismatch. Basis: Row 81; CQA item 5 (gross).
23. **SEN conditions.** A checklist per Order 92 (accessible environment, specialists, individual plans), with the PMPC opinion stored per child. Basis: Row 82; CPCR item 9.
24. **Anti-terror equipment.** A checklist by group 1 or 2: alert system, CCTV with a police feed, panic button, intercom (group 2), fencing, speed-reduction means and backup power. Basis: [Order 117 p.77-79, 97](https://old.adilet.zan.kz/rus/docs/V2200027414); CPCR item 7.
25. **Readiness score.** A single red, amber or green status per row and overall. Any red row blocks the "ready to file" status. Basis: Order 248 (non-compliance with any requirement is a refusal ground).

### C. Filing pack

26. **Annex generators.** Generate Annexes 1, 2, 3, 4, 5, 6 and 8 with the exact column order listed in "Filing channels and formats", in Russian and Kazakh, as XLSX and PDF. Test: column headings match the order text word for word. Basis: [Order 473](https://old.adilet.zan.kz/rus/docs/V2200030721); [Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314).
27. **Annex rules.**
    - Annex 8 covers exactly the last 5 years from the filing date and has a head's signature block.
    - Annex 5 omits property data when the user marks it as in the cadastre.
    - Annex 3 notes that the medical licence is checked on e-license.kz.
28. **Copy-into-portal view.** For each eLicense e-form, show the values in the portal's field order with copy buttons, because the head files and signs on the portal. Basis: Order 248.
29. **No automatic filing.** The product must not hold or use the client's ЭЦП and must not submit to eLicense. Test: no code path accepts an ЭЦП key file. Basis: Order 248 (the applicant signs the e-request).
30. **Evidence bundle.** List every e-copy to attach per row, check that each is uploaded and not expired, and export them with clear file names. Basis: Order 268 documents column; Order 248 (expired documents are a refusal-to-proceed ground).
31. **Fee calculator.** 10 MRP for issue, 1 MRP for re-issue and 0 for an annex, using the year's MRP. Basis: Order 248.
32. **Application timeline.** From the filing date, compute 2 WD (completeness), 22 WD (check and visit) and 30 WD (decision) on the Kazakhstan working-day calendar. On a pre-refusal notice, start a 2-WD objection countdown. Test: a filing on 4 Jan 2027 gives correct dates around public holidays. Basis: Order 248.
33. **Site-visit binder.** A printable index of all evidence in row order 73-82, plus a photo checklist of rooms and equipment, because the commission reviews photos and video. Basis: Order 248; [MTRK](https://mtrk.kz/ru/2026/07/24/licenzirovanie-detskikh-sadov-startu/).

### D. Inspection readiness

34. **CQA self-audit.** All 29 CQA preschool checklist items, each with its violation degree, an "on complaint only" flag, a "state organisations only" flag, evidence upload and a last-reviewed date. Basis: [CQA criteria](https://old.adilet.zan.kz/rus/docs/V1500012777).
35. **CPCR self-audit.** All 9 CPCR items with degrees and evidence. Basis: [CPCR criteria](https://old.adilet.zan.kz/rus/docs/V2600038978).
36. **Visit-trigger warnings.** Warn when the data shows a trigger for a visit: group size above the norm, wrong age grouping, ages that do not match the type, a missing e-register entry, any open gross item, or an overdue recommendation. Basis: CQA and CPCR subjective criteria.
37. **Recommendation tracker.** Record each recommendation from preventive control without a visit with its receipt date. Compute the objection deadline (5 WD) and the fulfilment and report deadline (10 WD), and send alerts at 5 and 2 WD before each. Basis: [Child Rights Law Art. 52(7)-(13)](https://old.adilet.zan.kz/rus/docs/Z020000345_).
38. **Order tracker.** Record each order (предписание) item with its deadline, the fix evidence and the date the report was sent. Show a red warning if any report is late, because repeated failure is a ground for an unscheduled check. Basis: Child Rights Law Art. 52-4.
39. **State-order monitoring.** Record the commission's act and compute the 7-WD fix deadline, with an alert. Show the yearly planned monitoring. Basis: [Order 381 p.24-26](https://old.adilet.zan.kz/rus/docs/V2200029323).
40. **Inspection log.** For each check record the body, type (planned, unscheduled, preventive), dates, the registration number of the ordering act and the findings. Show the legal maximum length (planned 15+15 WD; unscheduled 10+10 WD) and flag overruns. Basis: Child Rights Law Art. 52-4.
41. **Unannounced-visit mode.** A one-page "inspector is here" view that opens in 2 clicks and lists the evidence for every checklist item, with links. Basis: Art. 52-4 (no notice).
42. **Evaluation score.** Compute the 9 criteria of Order 486 from the registers where possible (teacher education, categories, training, group sizes). The rest are entered by hand, including the two satisfaction surveys. Show the total out of 45 and the rating band. Basis: [Order 486](https://zakon.uchet.kz/rus/docs/V2200031053).
43. **Website checklist.** Check that the self-assessment materials are published, and for state organisations the staffing table and pay rates. Basis: CQA criteria (gross); Order 385 p.21.

### E. Registers and records

44. **Staff register.** Store the Annex 1 fields plus employment type (main job or part-time), hire date, medical-book exam date and next due date, criminal-record certificate date, category with order number and date, and training records. Test: Annex 1 can be generated with no extra data entry. Basis: Order 473 Annex 1.
45. **Hiring screen.** A new teacher cannot be marked "active" until diploma, criminal-record certificate, psychiatric and narcology certificates and medical book are recorded, or the head overrides with a logged reason. Basis: CQA item 14; CoAO 409(7-5); ҚР ДСМ-59 p.125.
46. **Category expiry.** Compute expiry at 5 years for teachers and 3 years for first heads, with alerts at 12, 6 and 3 months. Show the channel (Ұстаз or egov) for the next category. Basis: [Order 83 p.3, 15, 26](https://zakon.uchet.kz/rus/docs/V1600013317).
47. **Children register.** Store for each child: group, date of birth, contract date, health passport and certificate on admission, SEN status with the PMPC opinion, and the e-queue referral for state-order places. Basis: ҚР ДСМ-59 p.134; Order 385 p.10, 13; CQA item 18.
48. **Expulsion guard.** Leaving is recorded with a reason from a fixed list: parents' request, transfer, school entry, or the three lawful grounds for expulsion. An expulsion requires evidence of the ground. Basis: [Order 385 p.16](https://old.adilet.zan.kz/rus/docs/V2200029329); CPCR item 3.
49. **Keeping a child's place.** Absence reasons include illness or treatment, parental leave (up to 2 months) and quarantine. The place is held, and the child cannot be removed from the group list during a protected absence. Basis: Order 385 p.15; CQA item 20.
50. **The three teacher documents only.** Provide templates for the annual long-term plan, the weekly cyclogram (with the required routine elements and activity types) and the per-child development card (start, interim and final diagnostics). The product must not add other mandatory teacher reports. Basis: [informburo](https://informburo.kz/novosti/vospitateli-detskih-sadov-teper-dolzhny-budut-zapolnyat-tolko-tri-dokumenta); CQA items 7, 9, 21; CoAO 409(7-3).
51. **No duplicate records.** Every record is kept once, electronically. The print function produces a paper copy on demand and never asks teachers to maintain a second paper version. Basis: CoAO 409(7-3).
52. **Head approval.** Plans, cyclograms, menus, internal rules and Annex 8 carry a "approved by the head" step with name, date and stamp area. Basis: Row 73; Annex 8; Order 385 p.20.
53. **Councils.** Templates and registers for pedagogical, methodological and ethics council plans and minutes, plus ethics council rules. Basis: CQA items 12, 23.
54. **Internal acts register.** Charter (with a check for the required functions), internal rules and job descriptions, each with its approval date and version. Basis: Order 385 p.19; CQA items 16, 19.
55. **Menu module.** A forward menu with a configurable cycle (10 days per Order 385; 4 weeks seasonal per CPCR), head approval, a print copy for each group, and a daily menu with deviations flagged. Basis: Order 385 p.20; CPCR items 4-5.
56. **Medical logs.** Templates for all 17 records of ҚР ДСМ-59 Annex 12, with daily entry for the kitchen-staff and food logs. Basis: [ҚР ДСМ-59](https://old.adilet.zan.kz/rus/docs/V2100023469).
57. **Anti-terror passport tracker.** Track only status and dates, not content:
    - date of notice of inclusion → 45-WD draft deadline;
    - date sent to police (10 calendar days);
    - police approval;
    - head's approval (10 WD);
    - copy and PDF to police (10 calendar days);
    - update tasks (20 WD) when the head, owner, name or technical means change in the profile.
    - The product must not store the passport file, because it is marked "for official use".
    - Basis: [Order 117 ch.5](https://old.adilet.zan.kz/rus/docs/V2200027414).
58. **Anti-terror journal.** An electronic journal with the Annex 3 fields (section 1 instructions; section 2 drills). It prompts planned instruction at least twice a year for each staff group, requires a protocol when more than 20 take part, and prints in a format that can be laced and sealed. It also stores the order naming the responsible person. Basis: Order 117 p.26-27, 42-50.
59. **Lease clause check.** For leased buildings, ask whether the lease says who makes the passport, guards and equips the building, and offer clause wording. Basis: Order 117 p.8.
60. **Fire module.** Drills every 6 months with a drills journal, an evacuation-plan checklist (Annex 2 form), a children's fire-safety talk log and, for 24-hour regimes, a night-duty log. Basis: [Order 55 p.10, 12, 14, 200, 213](https://old.adilet.zan.kz/rus/docs/V2200026867).
61. **CCTV checklist.** Coverage zones and a quarterly test that recordings go back at least 30 days. The product must not store video. Basis: Order 117 p.84-88.
62. **NOBD reminders.** A daily attendance reminder for state-order kindergartens, a monthly pupil-data reminder for personalised financing, and an NOBD entry task after each police anti-terror check. Basis: Order 381 p.33, 46; Order 117 p.80.
63. **State-order claim checklist.** For each financing period, a checklist for the attendance sheet with absence reasons, the act and the e-invoice, each signed with ЭЦП outside the product. Basis: Order 381 p.31.

### F. Legal content management

64. **Traceable rules.** Every requirement, checklist item and deadline stores the act, article, paragraph or row, the amending act and its in-force date, a source URL and a last-reviewed date. Test: no rule record lacks these fields. Basis: good practice; rows 79 and 81 changed mid-2026.
65. **Versioned content.** Content changes are versioned and each user sees what changed for their profile. For example, the CPCR checklist changed in June 2026 and rows 79 and 81 in July 2026.
66. **Regional practice notes.** Notes per licensing department, such as land-use practice, labelled "reported practice, not law" and dated. Basis: [informburo, 1 Oct 2026](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia).
67. **Two languages.** All screens and generated documents are in Kazakh and Russian, and the user can generate both versions of any document. Basis: Law on Languages Art. 8, 10 ([dogovor24](https://dogovor24.kz/questions/v-kazahstane-rabotodatel-dolzhen-vesti-deloproizvodstvo-na-dvuh-yazykah-kazahskii-i-russkii-mozhno-li-chtoby-versii-dokumentov-24222.html); unverified article numbers).

### G. Data protection, security and hosting

68. **Hosting in Kazakhstan.** The production database, file storage and backups holding personal data must be in data centres in Kazakhstan. Test: the infrastructure inventory lists only Kazakhstan locations for these stores. Basis: [Personal Data Law Art. 12(2)](https://old.adilet.zan.kz/rus/docs/Z1300000094).
69. **No cross-border personal data.** Support, analytics, AI features and e-mail must not send children's or staff personal data outside Kazakhstan, unless Art. 16 allows it (for example, with recorded consent). Test: outbound data-flow review. Basis: Art. 16.
70. **Consent records.** Parent consent for each child and staff consent, with the consent text version, time stamp and method. Templates are provided. Basis: Art. 7(1), 8(1).
71. **Customer's own data-protection acts.** Generate the kindergarten's list of personal data, its data-protection policy and the order naming the responsible person, plus a breach log with a notification task. Basis: Art. 25(2).
72. **Access, audit and export.** Role-based access (head, methodologist, nurse, teacher; teachers see only their groups), a full audit log, and a complete export (PDF and XLSX in a ZIP) on request or on cancellation. Personnel records are never auto-deleted; retention is configurable. Under the old list, personnel files were kept 75 years; that list was repealed in June 2025 and the replacement was not read (unverified) ([adilet](https://adilet.zan.kz/rus/docs/V1700015997)). Basis: Personal Data Law Art. 12; retention list.

## Open questions

1. **Can existing kindergartens keep working in 2027 while they wait for their phase?** The law has no transitional clause. The Ministry and a regional department speak of a 3-year phase-in. I found no act that sets the schedule. This decides how big the January 2027 rush is.
2. **Will the state order require a licence?** Order 381 p.13, as read on 10 Oct 2026 after the Aug 2026 amendment, still speaks of "notified" kindergartens. A lawyer says unlicensed kindergartens lose the state order ([zakon.kz](https://www.zakon.kz/sovety-yurista/6520878-kakie-detskie-sady-zakroyut-s-novogo-goda-gotov-sadik-letom.html)). Check for a further amendment.
3. **Does a school's mini-centre need a preschool annex?** And how are standalone private mini-centres and "development centres" classified?
4. **Does state attestation of preschools continue after licensing,** and how often? Model rules p.18 still mention it.
5. **What exactly do the eLicense e-forms and attachments require?** Field layout, file formats and size limits. Is the data form identical to Annexes 1-8?
6. **What do Order 70 (equipment norms) and Order 216 (teaching sets) contain item by item?** Needed for requirements 19-20.
7. **Must a kindergarten's own information system exchange data automatically with the MoE system?** Is there an API or approved list (Order 385 p.20; Row 81)? If yes, the product may need to integrate or be accredited.
8. **What is the deadline for reporting a personal-data breach,** and who is the authorised body? Art. 25(2)(8) wording is ambiguous.
9. **Which document-retention list replaced Order 263** (repealed 30 Jun 2025 by Order 298-НҚ)?
10. **What is the licence-fee article in the 2026 Tax Code,** and is it still 10 MRP?
11. **Will the 2027 MRP of 4,693 tenge be adopted?**
12. **Does a chain need a licence in each region** where it has buildings?
13. **Which forward-menu cycle applies:** 10 days (Order 385) or 4 weeks seasonal (CPCR checklist)? An inspector may ask for either.
14. **Which regions demand a change of land or building use?** No regions are named in public reports.
15. **What do Law 352-VIII and the proposed SME inspection moratorium contain?**
16. **What is the typical parent-contract form?** Order V1600013227: number, date and current text not read.

## Sources

Primary legal texts:
- Law No. 148-VIII of 30 Dec 2024 (amends Law on Permits and Law on Education): https://old.adilet.zan.kz/rus/docs/Z2400000148
- Law on Education No. 319-III of 27 Jul 2007: https://old.adilet.zan.kz/rus/docs/Z070000319_
- Law on Permits and Notifications No. 202-V of 16 May 2014: https://old.adilet.zan.kz/rus/docs/Z1400000202
- MoE Order No. 268 of 27 Nov 2025 (rows 73-82): https://old.adilet.zan.kz/rus/docs/V2500037500
- MoE Order No. 473 of 24 Nov 2022 (qualification requirements and annex forms): https://old.adilet.zan.kz/rus/docs/V2200030721
- MoE Order No. 248 of 31 Oct 2025 (licence public service rules, new edition of Order 483): https://old.adilet.zan.kz/rus/docs/V2500037314
- Code on Administrative Offences: https://old.adilet.zan.kz/rus/docs/K1400000235
- CQA risk criteria and checklists, joint order 719/843 of 31 Dec 2015 as amended: https://old.adilet.zan.kz/rus/docs/V1500012777
- CPCR risk criteria and checklists, joint order 165-НҚ/73 of Jun 2026: https://old.adilet.zan.kz/rus/docs/V2600038978
- Law on the Rights of the Child No. 345-II of 8 Aug 2002: https://old.adilet.zan.kz/rus/docs/Z020000345_
- Anti-terror Instruction, MoE Order No. 117 of 30 Mar 2022: https://old.adilet.zan.kz/rus/docs/V2200027414
- Model operating rules, MoE Order No. 385 of 31 Aug 2022: https://old.adilet.zan.kz/rus/docs/V2200029329
- Sanitary rules for preschools, ҚР ДСМ-59 of 9 Jul 2021: https://old.adilet.zan.kz/rus/docs/V2100023469
- Fire safety rules, MES Order No. 55 of 21 Feb 2022: https://old.adilet.zan.kz/rus/docs/V2200026867
- Law on Personal Data No. 94-V of 21 May 2013: https://old.adilet.zan.kz/rus/docs/Z1300000094
- State-order rules, MoE Order No. 381 of 27 Aug 2022: https://old.adilet.zan.kz/rus/docs/V2200029323
- Teacher attestation rules, Order No. 83 of 27 Jan 2016: https://zakon.uchet.kz/rus/docs/V1600013317
- Evaluation criteria, MoE Order No. 486 of 5 Dec 2022: https://zakon.uchet.kz/rus/docs/V2200031053
- Typical contract forms (Order V1600013227, details unverified): https://zakon.uchet.kz/rus/docs/V1600013227
- Old retention list, Order No. 263 of 29 Sep 2017 (repealed): https://adilet.zan.kz/rus/docs/V1700015997

Official and press sources:
- MTRK, 24 Jul 2026 (North Kazakhstan department on process and phasing): https://mtrk.kz/ru/2026/07/24/licenzirovanie-detskikh-sadov-startu/
- 24.kz, 13 May 2026 (Ministry: phased transition): https://24.kz/ru/news/social/768260-litsenzirovanie-detskikh-sadov-predprinimateli-opasayutsya-novykh-pravil
- 24.kz, 15 Dec 2025 (unannounced checks from 1 Feb): https://24.kz/ru/news/social/744959-kakie-organizatsii-zhdut-vnezapnye-proverki
- bizmedia, 2 Feb 2026 (sanitary special control): https://bizmedia.kz/2026-02-02-proveryat-vnezapno-detsady-i-shkoly-kazahstana-budet-komitet-sanepidkontrolya/
- azattyq-ruhy (law of 4 Dec 2025, from Feb 2026): https://rus.azattyq-ruhy.kz/news/99400-v-kazakhstane-s-fevralia-2026-goda-vvodiatsia-vnezapnye-proverki-detskikh-uchrezhdenii
- azattyq-ruhy (Health Ministry: 60% of kindergartens with violations): https://rus.azattyq-ruhy.kz/avtory/103634-u-70-shkol-i-60-detsadov-byli-sanitarno-epidemiologicheskie-narusheniia-minzdrav-o-proverkakh-bez-preduprezhdenii/amp
- informburo, 1 Oct 2026 (Atameken requests): https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia
- informburo, 9 Sep 2022 (three teacher documents): https://informburo.kz/novosti/vospitateli-detskih-sadov-teper-dolzhny-budut-zapolnyat-tolko-tri-dokumenta
- inbusiness.kz, Nov 2024 (schedule to 2030): https://www.inbusiness.kz/ru/news/kakie-peremeny-gotovit-licenzirovanie-detsadov-roditelyam-i-biznesu
- zakon.kz, 10 Jun 2026 (lawyer: no transition): https://www.zakon.kz/sovety-yurista/6520878-kakie-detskie-sady-zakroyut-s-novogo-goda-gotov-sadik-letom.html
- zakon.kz (kindergartens in residential buildings): https://www.zakon.kz/sovety-yurista/6435574-detskie-sady-v-zhilykh-domakh-mogut-zakryt-kakie-imenno-i-pochemu.html
- zakon.kz (attestation rules changed, 2026): https://www.zakon.kz/pravo/6524542-izmenilis-pravila-provedeniya-attestatsii-pedagogov.html
- zakon.kz (Indigo/ED24): https://www.zakon.kz/stati/6420659-verifitsiruy-menya-ili-zachem-kazakhstanskim-roditelyam-navyazyvayut-novoe-prilozhenie-dlya-detsadov.html
- Tengri, Apr 2026 (counts; 96% state order): https://tengrinews.kz/tengri-institutions/novyie-pravila-chto-jdt-chastnyie-detsadyi-v-kazahstane-594367/amp/
- finratings.kz, 12 Feb 2025 (2023 inspections and fines): https://finratings.kz/news/533-v-kazakhstane-milliardnye-shtrafy-dushat-chastnye-detsady/
- kapital.kz (58 schools fined for no licence): https://kapital.kz/gosudarstvo/131843/v-kazakhstane-oshtrafovali-58-shkol-za-ot-sut-stviye-litsenzii.html
- 24.kz (Astana: 80% may close; 60 MRP fines): https://24.kz/ru/news/social/654425-pochti-80-chastnykh-detskikh-sadov-mogut-zakrytsya-v-astane
- bes.media, Sep 2026 (MRP 2026 and draft 2027): https://bes.media/news/mrp-4-693-tenge-minimalnaya-zarplata-85-tysyach-chto-zalozhili-v-byudzhet-kazahstana-na-2027-god/
- uchet.kz (draft 2027 budget figures): https://uchet.kz/week/mzp-i-mrp-na-2027-god-proekt-respublikanskogo-byudzheta-opublikovan/
- digitalbusiness.kz, 30 Sep 2026 (moratorium proposal): https://digitalbusiness.kz/2026-09-30/v-kazahstane-mogut-vernut-moratoriy-kotoriy-do-sih-por-vspominayut-s-teplom/
- digitalbusiness.kz, 11 Mar 2025 (personal-data fines raised): https://digitalbusiness.kz/2025-03-11/uznali-kakimi-budut-shtrafi-za-narushenie-zashchiti-personalnih-dannih/
- egov.kz (eLicense education services split, Feb 2025): https://egov.kz/cms/ru/news/educational_organisations
- gov.kz, East Kazakhstan department (381 organisations): https://www.gov.kz/memleket/entities/control-vko/press/news/details/1269193?lang=kk
- gov.kz, North Kazakhstan department (camps on eLicense): https://www.gov.kz/memleket/entities/control-sko/press/news/details/1247472?lang=ru
- dogovor24 (language of records): https://dogovor24.kz/questions/v-kazahstane-rabotodatel-dolzhen-vesti-deloproizvodstvo-na-dvuh-yazykah-kazahskii-i-russkii-mozhno-li-chtoby-versii-dokumentov-24222.html
- Law on Languages text (cdb.kz): https://cdb.kz/sistema/pravovaya-baza/o-yazykakh-v-respublike-kazakhstan/
