# North Macedonia: Offline (Quiet) Industries Pass

Research date: 2026-10-05. Search budget: 20 WebSearch calls; **6 used** (5 returned results, 1 refused with a usage limit, after which I stopped searching as the instructions require). WebFetch not used.

Market context: about 1.8M people, low price levels, Macedonian (Cyrillic) UI required, Albanian for part of the market. The earlier country report covered e-Faktura, EPR, waste reporting, CBAM, labour and food safety. This report doesn't repeat them.

**Bottom line:** this is a short report and every finding in it is honest but weak. I found no quiet industry here that meets the brief's bar (mandatory, frequent, at least a few thousand reachable buyers, EUR 200+/month willingness to pay). The two least-bad leads below both score under 5/10. They are listed so the cross-country ranking has a negative data point. Neither is a recommendation to build.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Driving schools (avtoshkoli) | MVR rulebook on how driving schools work: curriculum, staff, equipment and **the records (evidencii) a school must keep** on candidates; instructor licences via MVR exam | Records kept per the rulebook; MVR runs exams in person; new rules reported in the press | Unverified. Each school needs at least 5 licensed instructors (rulebook as reported) | **Weak candidate (4/10)** | Real per-candidate record-keeping, but a local vendor (LABCOM) already sells driving-school software and the buyer count is small |
| Scrap metal / secondary raw material buyers (otkup na sekundarni surovini) | Entry in the Central Register for purchasing and processing secondary raw materials; waste-trading/collection permit from MoEPP; MVR enforcement | MVR files criminal charges for unlicensed scrap buying (2022); operators are listed mostly in paper-style directories (MarketKonekt, MkMap) | Unverified (dozens to low hundreds, estimate) | **Weak candidate (3/10)** | The obligation is real, but I found no per-transaction seller-ID register like the UK/US scrap laws, so the work is mostly permits plus waste reporting to MoEPP |
| Beekeepers | Annual census of overwintered colonies with apiary GPS coordinates; AHV registration above 50 colonies; subsidy claims to the AFPZRR (paying agency) | Beekeepers locate their own apiary coordinates on Google Maps and attach them to the census; extensions are announced by AHV | About 7,000 apiaries and 300,000 colonies (Zelena Berza, date unclear); 5,234 beekeepers paid direct payments per colony (MIA) | Rejected | Annual-only filing, very low willingness to pay; associations and municipal advisers help for free |
| Livestock transporters / animal transport | AHV registers of long-journey transporters, drivers and attendants; approved livestock markets register | AHV publishes registers and paper forms (obrasci) | Unverified, small | Rejected | Few operators; the journey log is an EU-format paper document; volume is too small |
| Pawnshops / gold buyers | Obliged entities under the Law on Prevention of Money Laundering (Off. Gazette 151/2022); CDD and suspicious-transaction reports to the Financial Intelligence Office (UFR) | UFR guidance and PDF instructions; reports go through the UFR system | Unverified, small | Rejected | Few legal entities; generic AML compliance; the UFR system is the substitute |
| Households as employers (domestic workers, caregivers) | Social contributions via MPIN if formally employed | Not researched (the search was refused at the usage limit) | Unknown | Not verified | Most domestic work is believed to be informal (unverified), so there's no forced workflow |
| Small abattoirs / butchers | AHV approval and registration of food-of-animal-origin establishments | AHV registers are published as lists | Unverified | Rejected | Covered by the general food-safety/HACCP finding in the country report; no fresh trigger found |
| Monument makers / cemeteries | Municipal public enterprises run cemeteries | Not researched | Unknown | Not verified | Budget exhausted |
| Taxi operators | Municipal licences; fiscal cash registers | Not researched | Unknown | Not verified | Budget exhausted; fiscalisation is served by the fiscal-device vendors |
| Hunting associations / game | Hunting-ground management plans to the Ministry of Agriculture | Not researched | Unknown | Not verified | Budget exhausted |

Country-specific groups from the registers: driving schools (MVR rulebook), secondary-raw-material buyers (Central Register), and long-journey animal transporters (AHV register).

## 2. Strongest opportunities

### Opportunity: Candidate-record and MVR-paperwork tool for driving schools

**Industry:**
Driving schools (avtoshkoli)

**Buyer:**
Owner/manager of a small driving school, often a family business with 5–15 instructors.

**Trigger / Why now:**
An MVR rulebook in the Official Gazette (No. 29 of 11 Feb 2025, MVR bylaws, published on the MDT portal) sets the criteria for driving schools, the curriculum, staff, equipment and **the records schools must keep** on candidates. The press ("New rules for driving schools and for taking the driving test", netpress.com.mk) reported the change. I couldn't verify the exact effective dates or the format of the records.

**Current workflow (expected; not interview-verified):**
1. The school enrols a candidate and records personal data, medical certificate and first-aid certificate.
2. Instructors log theory and practical hours per candidate in the prescribed records (paper books, or the school's own software).
3. The school schedules the candidate for MVR or exam-centre tests and keeps the results.
4. Inspectors check the records against the rulebook.

**Pain:**
Per-candidate hour logging is mandatory and recurs for every candidate. Penalties for incomplete records are likely (unverified). I found no direct complaints.

**Existing solutions:**
- LABCOM (labcom.com.mk) sells a driving-school web application;
- AMSM (the national auto club) runs its own driving school with its own systems;
- paper record books;
- Excel.

**Offline evidence:**
MVR runs licensing exams in person, and records follow a gazette rulebook rather than a portal. Most driving-school websites are brochure sites with price lists.

**Offline channel:**
- the MVR instructor-licensing exam sessions;
- the national auto club AMSM;
- municipal public calls that select driving schools (e.g. Karpoš municipality), which give a list of active schools;
- phone outreach from that list.

**Market count:**
Not verified. The likely order is 100–200 schools nationwide (estimate, not sourced).

**The gap:**
Unknown. LABCOM may already cover the 2025 rulebook records. I couldn't check its features.

**Possible product:**
A Macedonian-language candidate file with hour logs that matches the 2025 rulebook's record forms, exam scheduling and printable records for inspection.

**MVP:**
Enrol candidates; log hours per instructor and vehicle; print the prescribed record forms.

**Pricing hypothesis:**
EUR 20–40 per school per month (estimate). The total market is under EUR 100k ARR.

**How to find first customers:**
Use municipal public-call winners lists and AMSM, then phone schools directly.

**Risks:**
- LABCOM is already present.
- The market is tiny.
- A local language and a local presence are needed.
- The willingness to pay is likely for software only at a very low price.
- A non-local solo founder realistically can't sell this; it needs a Macedonian speaker.

**Kill condition:**
LABCOM or another vendor already implements the 2025 rulebook records, or there are fewer than 100 schools.

**Score:** 4/10

**Sources:**
- MVR, professional exam for driving-school staff: https://mvr.gov.mk/mk-MK/odnosi-so-javnost/novosti/polaganje-na-strucen-ispit-za-predavac-i-instruktor-vo-avtoskola
- Official Gazette No. 29 of 11 Feb 2025 (MVR bylaws, PDF): https://portal.mdt.gov.mk/post-body-files/podzakonski-akti-mvr-file-T7nu.pdf
- Netpress, "Нови правила за автошколите…": https://netpress.com.mk/novi-pravila-za-avtoskolite-za-polaganje-za-vozacka-dozvola/
- LABCOM driving-school software: https://labcom.com.mk/mk/avtoskola.html
- Karpoš municipality public call for driving schools: https://karpos.gov.mk/%D1%98%D0%B0%D0%B2%D0%B5%D0%BD-%D0%BF%D0%BE%D0%B2%D0%B8%D0%BA-%D0%B7%D0%B0-%D0%B8%D0%B7%D0%B1%D0%BE%D1%80-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%82%D0%BE-%D1%88%D0%BA%D0%BE%D0%BB%D0%B8-%D0%B7%D0%B0-%D0%BE%D0%B1/
- AMSM driving school: https://amsm.mk/avtoskola/b-kategorija/

### Opportunity: Purchase ledger and waste-reporting pack for secondary-raw-material buyers

**Industry:**
Scrap metal and secondary-raw-material buyers (otkup na sekundarni surovini)

**Buyer:**
Owner of a small scrap or secondary-raw-material buying yard.

**Trigger / Why now:**
There's no fresh 2025–2027 trigger. The obligations are entry in the Central Register for purchasing and processing secondary raw materials, a waste collection or transport permit, and waste reporting to MoEPP. The new waste law is still in drafting (see the country report).

**Current workflow (expected; not interview-verified):**
1. Buy material from individuals and companies at the yard.
2. Record the purchase, the seller and the waste type.
3. Report waste flows to MoEPP and the municipality.
4. Keep permits current.

**Pain:**
MVR enforcement targets unlicensed buyers (criminal charges in 2022). For licensed yards, the pain of per-transaction recording is unverified.

**Existing solutions:**
- general accounting packages;
- the MoEPP waste information system;
- paper purchase books;
- environmental consultants who prepare permits.

**Offline evidence:**
Yards are listed in business directories (MarketKonekt, MkMap) with phone numbers only; MVR enforcement happens on the ground.

**Offline channel:**
- phone outreach from the Central Register and directory listings;
- recyclers and steel mills that buy from the yards.

**Market count:**
Unverified (dozens to low hundreds, estimate).

**The gap:**
Not established. There may be no per-transaction police register at all.

**Possible product:**
A yard purchase ledger with seller ID capture and automatic MoEPP waste-report export.

**MVP:**
A tablet purchase entry screen and a quarterly or annual waste-report export.

**Pricing hypothesis:**
EUR 15–30 per month (estimate).

**How to find first customers:**
Use the Central Register and the MarketKonekt "otkup na metali" listings.

**Risks:**
- Many operators are informal.
- Willingness to pay is low.
- There's no trigger.
- A local language and a local presence are needed.

**Kill condition:**
There's no per-transaction legal recording duty, or fewer than 100 registered yards.

**Score:** 3/10

**Sources:**
- MoEPP waste services: https://www.moepp.gov.mk/mk-MK/uslugi/otpad
- Netpress, MVR charge for unlicensed scrap buying: https://netpress.com.mk/2022/04/14/vrshel-otkup-na-staro-zhelezo-bez-dozvola-mvr-mu-podnese-krivichna-pri-ava/
- MarketKonekt directory: https://marketkonekt.com/makedonija/zhivotna-sredina/upravuvanje-so-otpad/otkup-na-metali/ejg.htm

## 3. Rejected

- **Beekeepers:** there are about 7,000 apiaries and 300,000 colonies, and 5,234 beekeepers were paid direct payments. But the census and subsidy claim are **annual**, the beekeepers are low-income, and associations, AHV and AFPZRR provide the substitute for free. Sources:
  - https://zelenaberza.com.mk/se-zgolemuva-brojot-na-pchelari-i-pchelni-semejstva/
  - https://fva.gov.mk/index.php/mk/210608-babovski-prodolzen-rok-popis-pcelni-semejstva
  - https://mia.mk/ (AFPZRR 5,234 beekeepers paid)
- **Animal transport and livestock traders:** AHV keeps registers of long-journey transporters, drivers and attendants, and of approved livestock markets. There are too few operators, and the journey log is an EU-format paper document. Source: https://fva.gov.mk/mk/zastita-blagosostojba-zivotni-prevoz
- **Pawnshops and gold buyers (AML):** they are obliged entities under the AML law (Off. Gazette 151/2022). They are few, the work is generic AML compliance, and the UFR reporting system is the substitute. Source: https://ufr.gov.mk/?p=3211

## 4. Method notes

- Macedonian-language regulator queries on fva.gov.mk, mvr.gov.mk, moepp.gov.mk and ufr.gov.mk returned official registers and rulebooks quickly.
- The local business directories MarketKonekt and MkMap are a usable source of operator lists.
- None of the searches gave operator counts. Counts would need the Central Register, AHV lists or the Central Registry (CRRM).
- The run stopped after 6 searches when a usage-limit refusal came back, so households as employers, cemeteries and monuments, taxis and hunting weren't screened.
