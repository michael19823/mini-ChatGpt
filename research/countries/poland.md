# Poland - research report (deep pass, 2026-10-05)

Method note: this is a deep-pass rewrite. About 47 WebSearch calls, mostly in Polish, on top of about 9 in the first pass. WebFetch was blocked, so all evidence comes from search-result snippets. Anything a source does not state directly is marked "unverified" or "estimate". The market is accessible: it is in the EU, payments are in PLN, and there are no sanctions issues. Most target workflows depend on Polish government portals (PUESC, BDO, Emp@tia, e-Doręczenia, praca.gov.pl, PUE ZUS, TRACES), so Polish-language support and a local entity or partner would help in practice.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Nurseries (żłobki, kluby dziecięce) | Monthly RKZ-5 per-child "actual fee paid" entry in Emp@tia, which drives ZUS "Aktywnie w żłobku" payments to the facility | Candidate (best) | Monthly, mandatory, and revenue depends on it (ZUS pays up to 1,500 PLN per child per month straight to the facility). Around 5,700 facilities, about 75-80% of them private |
| Accommodation (hotels, guesthouses, apartment managers) | Opłata miejscowa (local tourist fee) collection as inkasent: per-municipality rates, exemptions and monthly declarations | Candidate | Amendment passed by Sejm and Senate. From 1 Jan 2027 the cap rises to 5 PLN/night and the air-quality condition is dropped, so big cities such as Kraków can levy it. Fragmented by municipality |
| Accounting offices | e-Doręczenia (e-delivery) mailboxes of all clients, mandatory for all firms from 1 Oct 2026, with risk of deemed delivery | Candidate (weak) | Real new duty with liability risk, but Symfonia eDokumenty, Positiv, Certum and others already sell multi-mailbox handling |
| Sawmills, wood processors, furniture makers | EUDR due-diligence statements (DDS) in TRACES (large/medium from 30 Dec 2026, micro/small from 30 Jun 2027) | Candidate (weak) | New mandatory per-lot duty and many small sawmills, but VeriGreen, Green Reporting and global EUDR SaaS are already present, and EU rules keep changing |
| Transport / clothing and footwear wholesale | SENT monitoring on PUESC, extended 17 Mar 2026 to clothing and footwear | Rejected | HuzarSENT (about 1,476 PLN/yr), Comarch, KDCP, WinSAD module and the free PUESC "SENT DOSTAWY" app. Micro firms exempted from 13 May 2026 below 500 kg / 700 pairs |
| Waste producers / carriers | BDO waste transfer cards (KPO), records (KEO), annual reports | Rejected | Many BDO-integrated tools: Darsoft, Eko-Soft, easyRipok, ZEME, Softlab ERP (Asseco) |
| Funeral homes | ZUS funeral-benefit (Z-12) claims filed via the funeral home and paid to its account (2026); ZUS e-platform for funeral homes in 2027 | Rejected | Crowded vertical SaaS (Silenta, Funeria, Velario, Arkadia, Memcare, eSEZ), with Funeria already generating ZUS/KRUS documents. ZUS is building a free platform |
| Temporary work agencies / employers of foreigners | Fully electronic work legalisation on praca.gov.pl since 1 Jun 2025, 7-day start-of-work notifications | Too competitive | HRappka already automates submissions and deadline alerts; LegalLine and law firms also serve this |
| Non-public preschools/schools | Monthly pupil-count reports and annual subsidy settlement, with municipality-specific forms | Too competitive | Inso (with KSeF invoice import), ELF EDU, rozliczprzedszkole.pl, VULCAN Dotacje (municipality side) |
| Retail (deposit-return system) | Deposit records, settlement with several operators, VAT | Too competitive | Kaucyjni.pl, Maasloop, Polski System Kaucyjny + COMP POS integration, Comarch modules |
| Agriculture (plant protection) | Electronic spray records under EU 2023/564 | Rejected | Postponed to 1 Jan 2027. A free ARiMR tool in Portal Rolnika (testing since 1 Jul 2026) plus commercial apps (e.g. e-oprysk.pl) |
| Veterinary (farm animals) | Electronic animal treatment book (e-KLZ), antibiotic-use reporting | Watch | The state must provide a free system, but it is not yet operational and has no launch date. Vet practice software (e.g. Klinika XP) is preparing for it |
| Property managers | c-KOB digital building log | Rejected | Free GUNB app, and the mandatory digitisation date for existing books moved from 2027 to 2032 |
| Building owners / water-hygiene consultants | Internal water-system risk assessment for "priority buildings" (Legionella, lead), in force 21 May 2026 | Poor frequency | First assessment due by 30 Jun 2028, then every 6 years. Consultants (Bluecare, Euroclean, Legionella Control) already sell it |
| Short-term rental operators | National register / property number under the EU STR regulation | Watch | Polish act not yet passed (government adopted amendments 2 Sep 2026). Platforms will transmit data; registration is mostly a one-off |
| Pharmacies | ZSMOPL daily reporting | Too competitive | Daily automated reporting is built into pharmacy systems. A large reimbursement amendment is still in consultation |
| Packaging producers | New EPR (ROP) packaging act (UC100), PPWR from 12 Aug 2026 | Watch | Still a draft, with fees phased to 2028. BDO software vendors and recovery organisations (Interzero etc.) will absorb it |
| All VAT payers / accounting offices | KSeF e-invoicing (2026; micro from 1 Jan 2027) | Too competitive | Every invoicing/accounting vendor shipped KSeF support (inFakt, wFirma, iFirma, Saldeo, Comarch, Symfonia) |
| Importers (steel, aluminium, cement, fertiliser) | CBAM definitive phase (first declaration 30 Sep 2027) | Weak | Annual rhythm, 50 t de minimis, consultants and ERP vendors active (carried over from first pass, not re-searched) |
| HR/payroll | PPK, e-ZLA, PFRON | Rejected | Covered by payroll software and accountants (first pass, not re-searched) |

## Opportunities

### Opportunity: RKZ-5 Monthly Filing + ZUS Payment Reconciliation for Private Nurseries

**Industry:**
Childcare for children under 3 (private żłobki and kluby dziecięce; day carers).

**Buyer:**
Owner/director or office manager of a private nursery or nursery chain (1-10 sites). Also accounting offices that serve nurseries.

**Trigger / Why now:**
Since the "Aktywny Rodzic" programme (Oct 2024), ZUS pays the "Aktywnie w żłobku" benefit (up to 1,500 PLN, or 1,900 PLN for children with a disability certificate, per child per month) directly into the facility's bank account by the 20th of the following month. The amount depends on the "actual fee paid" that the facility enters per child in the RKZ-5 form in Emp@tia (MRPiPS register) by the 5th working day of each month. The fee must be net of discounts, municipal subsidies and EU funds, and must exclude meals. Late or wrong entries delay or block payment.

**Current workflow:**
1. Facility bills parents (own billing app, spreadsheet or accounting tool), applying discounts, municipal subsidy and meal charges.
2. By the 5th working day, staff open Emp@tia and update RKZ-5 for every child: fee for the previous month, plus changes in child, parent or bank data.
3. Around the 20th, ZUS transfers lump sums. Staff match receipts against each child and invoice parents for the remainder (fee above 1,500 PLN plus meals).
4. Corrections when a fee changes or a payment differs are made in later months.

**Pain:**
The workflow is per child and per month, and revenue depends on it: ZUS states that missing or inaccurate fee data can delay or prevent payment. RKZ-5 is a set of individual child records, not one aggregate report. Paid training courses exist for operating the register (FRDL), and voivodeship offices publish multi-version instructions. ZUS paid 1.4 bn PLN to facilities in the first five months of one year. How many hours this takes per facility is unverified.

**Existing solutions:**
- Emp@tia itself: free, manual form entry. Bulk/CSV upload for RKZ-5 is unverified.
- Nursery management apps: LiveKid publishes Emp@tia guidance. Kidsview and iPrzedszkole-type apps exist, but whether any of them auto-fills RKZ-5 or reconciles ZUS payments is unverified.
- Accountants and office staff doing it by hand.

**The gap:**
Calculating the "actual fee paid" per child, with all deductions, from billing data. Validating it before the 5th-working-day deadline. Then reconciling ZUS lump-sum receipts against expected amounts per child and auto-generating the parent top-up invoice.

**Possible product:**
A monthly close tool for nurseries: import billing/attendance (CSV or integration), apply the facility's fee rules, produce RKZ-5-ready values (browser-assisted entry if there is no API), and reconcile ZUS bank receipts per child.

**MVP:**
A spreadsheet import, a fee-rule calculator and a validated per-child RKZ-5 sheet with deadline reminders, plus a bank-statement matcher for ZUS transfers.

**Pricing hypothesis:**
99-249 PLN/month per facility, or about 5 PLN per child per month (estimate).

**How to find first customers:**
The public "Rejestr żłobków i klubów dziecięcych" (Emp@tia, searchable by municipality) lists every facility with operator details. Also nursery owner Facebook groups and training providers such as FRDL.

**Risks:**
LiveKid/Kidsview may already do or add this. Emp@tia has no third-party API (browser automation would be fragile). Programme rules may change. Small facilities (about 30 children) have low willingness to pay.

**Kill condition:**
Interviews show that LiveKid or Kidsview already fill RKZ-5 and reconcile ZUS payments, or that the monthly update takes under 30 minutes for a typical facility.

**Score:** 5/10

**Sources:**
- https://www.zus.pl/en/aktywnyrodzic/wiadczenie-aktywnie-w-zlobku
- https://www.prawo.pl/kadry/aktywnie-w-zlobku-a-obowiazki-informacyjne-placowek-do-zus,529808.html
- https://legionowo.pl/a/aktywnie-w-zlobku-pod-warunkiem-ze-placowka-wpisze-dziecko-do-rejestru
- https://www.gov.pl/attachment/5403c233-8f19-4e2c-94bf-bfd6075aa30c
- https://www.katowice.uw.gov.pl/download/6015
- https://livekid.com/pl/blog/nowy-lad-uzupelnianie-danych-w-empatii/
- https://frdl.org.pl/szkolenia-otwarte-online-i-stacjonarne/oswiata/obsluga-elektronicznego-systemu-rejestru
- https://demagog.org.pl/wypowiedzi/w-ilu-gminach-nie-ma-zlobka-oddzialu-zlobkowego-lub-klubu-dzieciecego/

### Opportunity: Tourist-Fee (Opłata Miejscowa) Inkasent Router for Multi-Municipality Accommodation Operators

**Industry:**
Accommodation: apartment-management companies, small hotel/guesthouse groups, holiday-park operators.

**Buyer:**
Operations/finance manager of an operator running properties in several municipalities (e.g. Zakopane, Kołobrzeg, Gdańsk, Kraków, Karpacz).

**Trigger / Why now:**
Both chambers have passed an amendment, which as of the sources was awaiting the President. From 1 Jan 2027 the maximum opłata miejscowa rises to 5 PLN/night (5.50 PLN in spa zones; spa fee up to 6.86 PLN). The clean-air precondition is removed, so large cities can introduce the fee. Inkasent commission is at least 10%. Expect a wave of new municipal resolutions in late 2026 with different rates, exemptions, deadlines and declaration forms.

**Current workflow:**
1. PMS or booking platform records stays.
2. Staff work out chargeable guest-nights and exemptions per municipality rules, by hand or in Excel.
3. Each month (often by the 10th) they file a municipality-specific inkasent declaration and transfer the collected fee, keeping the commission.
4. They keep evidence for municipal audits.

**Pain:**
Fragmentation: each municipality sets its own rate (inkasent commission varies 3-25% today), exemptions and paperwork. Monthly frequency. The amount collected will grow sharply where cities newly adopt the fee. Quantified hours are unverified.

**Existing solutions:**
PMS systems (KWHotel, Hotres, IdoBooking, Vezpa and others) can apply a rate per property. Whether they generate municipality-specific inkasent declarations is unverified. Otherwise accountants, Excel, and municipal paper/ePUAP forms.

**The gap:**
A maintained rules database of municipal resolutions (rates, exemptions, deadlines, forms), plus automatic monthly per-municipality declarations and payment instructions from PMS/channel-manager stay exports.

**Possible product:**
"One stay export, every municipality filed": import stays, apply municipal rules, output a filled declaration and transfer details per municipality, and keep an audit trail.

**MVP:**
CSV import from 2-3 popular PMS/channel managers plus rules for the top 30 tourist municipalities, producing PDF declarations and a payment list.

**Pricing hypothesis:**
5-10 PLN per unit per month for apartment managers, or 149-399 PLN/month per operator (estimate). Inkasent commission income makes accuracy worth paying for.

**How to find first customers:**
Municipal inkasent lists (often published in resolutions on BIP), apartment-management companies listed on Booking/Airbnb in resort towns, and the Izba Gospodarcza Hotelarstwa Polskiego and regional tourism organisations (membership lists unverified).

**Risks:**
The President may veto or the date may slip. PMS vendors may add per-municipality reports. Rules may be too few to need a tool (many municipalities use simple forms). The upcoming short-term-rental act may change who collects the fee.

**Kill condition:**
The amendment is vetoed, or the major PMS vendors already output municipal declarations, or interviews show that operators file in under an hour per month.

**Score:** 5/10

**Sources:**
- https://www.infor.pl/prawo/gmina/podatki-i-oplaty/7667456,oplata-miejscowa-i-uzdrowiskowa-2027-nowe-stawki-zwolnienia-i-zasady-po-zmianie-ustawy.html
- https://e-hotelarz.pl/artykul/124210/senat-przyjal-zmiany-w-oplatach-od-noclegow-bez-odpisu-dla-pot-i-wojewodztw.html
- https://forsal.pl/lifestyle/turystyka/artykuly/11315146,do-5-zl-za-kazda-noc-sejm-przyjal-zmiany-dotyczace-oplaty-miejscowej.html
- https://www.poronin.pl/mieszkaniec/mieszkancy/podatki-i-oplaty/oplata-miejscowa/6823.html
- https://vezpa.it/pl/blog/najlepszy-system-pms-noclegi/
- https://www.ustronie-morskie.pl/8013/oplata-miejscowa-wazna-informacja-2

### Opportunity: e-Doręczenia Client-Mailbox Monitor for Accounting Offices

**Industry:**
Accounting offices (biura rachunkowe), and secondarily law firms.

**Buyer:**
Owner of an accounting office serving 30-250 clients.

**Trigger / Why now:**
e-Doręczenia (the legal e-delivery address) becomes mandatory for all businesses, including sole traders registered in CEIDG, from 1 Oct 2026. Letters from tax offices, ZUS and courts arrive there, and unread items are deemed delivered. Clients authorise their accountant as mailbox administrator, so offices now face hundreds of separate mailboxes. The ministry's basic interface has limited permission, handling and archiving features.

**Current workflow:**
1. The office gets authorised on each client's mailbox.
2. Staff log in and switch between mailboxes to check for new items.
3. They download each letter, file it to the client and forward it by email.
4. They track deadlines in Excel or practice software.

**Pain:**
There is liability risk: a missed tax-office summons is deemed delivered, and press coverage asks who must check the mailbox. Checking is daily or weekly per client. Exact hours are unverified.

**Existing solutions:**
Symfonia eDokumenty (e-Doręczenia module with REST API retrieval and archiving), Positiv.pl, Certum (qualified provider), Autenti (sending), Centrum Verte guidance, e-POK support articles, and practice-management tools such as Saldeo and Zorius (e-Doręczenia support unverified).

**The gap:**
A cheap, accountant-specific inbox that aggregates all client mailboxes, auto-tags the sender (US, ZUS, court) and the deadline, and notifies the client with proof of handover. Most existing offers are general document-management suites.

**Possible product:**
A multi-client e-Doręczenia inbox with deadline extraction, client notification and an audit log.

**MVP:**
Integration via the public provider's EZD-class API (the ministry grants access to its INT test environment on request), plus a daily digest per office.

**Pricing hypothesis:**
2-4 PLN per client mailbox per month, or 99-299 PLN/month per office (estimate).

**How to find first customers:**
The Ministry of Finance accounting-services register is unverified as a list. Also the SKwP and accounting associations, Facebook groups for biura rachunkowe, and Google Ads on "e-Doręczenia biuro rachunkowe".

**Risks:**
API access terms for non-public integrators across many mailboxes are unverified. Symfonia, Saldeo or Comarch can bundle the feature. Offices may avoid taking on mailbox-monitoring liability at all.

**Kill condition:**
The API does not allow one integrator to read many mailboxes under delegated authority, or Saldeo/Comarch ship it free in their accounting-office packages.

**Score:** 4/10

**Sources:**
- https://www.pit.pl/aktualnosci/e-doreczenia-obowiazkowe-od-1-pazdziernika-firmy-musza-przygotowac-nie-tylko-skrzynke
- https://bank.pl/dla-wszystkich-firm-e-doreczenia-obowiazkowe-od-1-pazdziernika-26/
- https://edgp.gazetaprawna.pl/podatki/artykuly/11323019,skrzynka-edoreczen-jest-klienta-czy-ksiegowy-powinien-ja-sprawdzac.html
- https://symfonia.pl/edokumenty/pl/edoreczenia/
- https://www.positiv.pl/e-doreczenia-dla-firm-i-dla-biur-rachunkowych/
- https://centrumverte.pl/blog/e-doreczenia-przewodnik-dla-administratorow-skrzynek/
- https://www.gov.pl/web/e-doreczenia/z-zewnetrznymi-systemami-uslugowymi

### Opportunity: EUDR DDS Desk for Small Polish Sawmills and Wood Processors

**Industry:**
Sawmills, pallet makers, small wood processors buying from Lasy Państwowe (State Forests) or private forest owners.

**Buyer:**
Owner/office manager of a small or medium sawmill.

**Trigger / Why now:**
EUDR applies from 30 Dec 2026 for large and medium operators and from 30 Jun 2027 for micro and small ones, after the Regulation 2025/2650 changes. The sawmill that first places sawn timber on the market is the "operator" and must file a DDS with plot geolocation in TRACES. Downstream operators can reference the supplier's DDS. Private forest owners file a simplified declaration. Poland is also passing its own implementing act (UC101).

**Current workflow:**
1. Buy roundwood through the State Forests' PLD sales application, or from private owners.
2. Collect origin and geolocation data from the State Forests' documents and private suppliers.
3. File a DDS in TRACES per lot/shipment and pass reference numbers to customers (furniture makers, exporters).
4. Keep evidence and respond to customer due-diligence questionnaires.

**Pain:**
A new mandatory per-shipment duty. Sources describe small local sawmills as the main "risk link" and estimate a compliance premium of 60-100 PLN/m³ (VeriGreen estimate). The industry association PIGPD lobbied for revision or postponement.

**Existing solutions:**
VeriGreen (Polish; TRACES/ERP integration and supplier due diligence), Green Reporting EUDR module, TraceX and other global EUDR SaaS, consultants (Multicert, Reco), and TRACES itself (free, manual).

**The gap:**
The cheapest possible "State Forests purchase document → TRACES DDS → customer reference" flow for micro sawmills without ERP. That depends on what data the State Forests provide, which is unverified.

**Possible product:**
Upload State Forests sale documents or private-owner declarations, and the tool pre-fills DDS via the TRACES API (v1.4 exists) and emails reference numbers to buyers.

**MVP:**
A State Forests document parser plus TRACES DDS submission for one product type (sawn softwood).

**Pricing hypothesis:**
99-299 PLN/month, or about 10-20 PLN per DDS (estimate).

**How to find first customers:**
State Forests' list of registered timber buyers (PLD participants; access unverified), PIGPD and regional sawmill associations, and drewno.pl readers.

**Risks:**
The EU may simplify further or postpone again. The State Forests may supply DDS-ready data or references, making the tool unnecessary. VeriGreen and global vendors are already in the market. Micro deadline is not until mid-2027.

**Kill condition:**
The State Forests become the DDS-filing operator (so sawmills only reference numbers), or the EU review exempts low-risk-country timber.

**Score:** 4/10

**Sources:**
- https://www.drewno.pl/artykuly/maly-producent-wyrobow-z-drewna-musi-wdrozyc-przepisy-eudr-z-koncem-2026r-13851.html
- https://verigreen.pl/cisza-przed-burza-jak-eudr-zmieni-ceny-drewna-w-polsce-po-1-stycznia-2026/
- https://multicert.pl/blog/eudr-rozporzadzenie-deforestacyjne-2026/
- https://greenreporting.eu/eudrplatform/
- https://tracextech.com/eudr-dds/wood-supply-chain-poland/
- https://www.meblosfera.pl/polska-branza-meblarska-apeluje-do-rzadu-nie-zostawiajcie-przedsiebiorcow-samych-z-eudr/

## Rejected after competitor research

- **SENT filing for clothing/footwear (5/10 in the first pass):** HuzarSENT (1,476 PLN/yr first seat), the Comarch ERP XL SENT module, the KDCP Digital SENT module and a WinSAD-integrated SENT module, telematics vendors for GPS locators (DataSystem), and the free PUESC "SENT DOSTAWY" mobile app. A 13 May 2026 change exempts CEIDG micro-entrepreneurs moving under 500 kg of clothing or 700 pairs of footwear, which removes much of the small-firm target.
- **BDO waste paperwork (4/10 in the first pass):** the BDO REST API has been open since 2019, and many integrated tools exist: Darsoft Ewidencja odpadów, Eko-Soft, easyRipok, ZEME (BDO automation), Softlab ERP by Asseco.
- **Funeral-home ZUS benefit claims:** Silenta, Funeria (already generates ZUS/KRUS documents and authorisations), Velario, Arkadia, Memcare, eSEZ, Oprogramowanie Pogrzebowe. ZUS's own electronic channel for funeral homes is due in 2027. The market is about 2,500 active firms.
- **Foreign-worker legalisation for agencies:** HRappka (permit generation, submission to the labour office, validity alerts), LegalLine, and immigration law firms.
- **Non-public preschool subsidy settlement:** Inso, ELF EDU, rozliczprzedszkole.pl, VULCAN Dotacje.
- **Deposit-return system for small shops:** Kaucyjni.pl (per-operator settlements), Maasloop, Polski System Kaucyjny with COMP POS, Comarch Optima/e-Sklep.
- **Electronic plant-protection records:** free ARiMR Portal Rolnika tool, commercial apps such as e-oprysk.pl, and the obligation postponed to 1 Jan 2027.
- **KSeF tooling:** every invoicing and accounting vendor.
- **CBAM for small importers:** consultants and ERP vendors, de minimis threshold, annual rhythm.
- **PPK/e-ZLA payroll helpers:** payroll software and accountants.
- **c-KOB building logs:** free GUNB app, and the mandatory date for existing books moved to 2032.

## Attractive problem, poor distribution / poor frequency

- **Legionella / internal-water-system risk assessments for priority buildings:** many buildings (schools, hotels, clinics, offices with 50+ people a day), but the first assessment is due by 30 Jun 2028 and then every 6 years. Buyers are scattered building owners, and consultants already sell it. A report-generator for consultants is possible but low-frequency.
- **KSeF for micro firms (from 1 Jan 2027):** many buyers, but low price tolerance and they buy through accountants.
- **Short-term rental registration:** a one-off per unit, the act is still pending, and platforms will carry the data flow.

## Too competitive

- KSeF invoicing, purchase-invoice verification and accounting-office KSeF workflows (Saldeo, Comarch, wFirma, inFakt, Symfonia).
- Funeral-home management software (see above).
- Waste BDO software (see above).
- Foreign-worker legalisation (HRappka and others).
- Deposit-system retail tools.
- Pharmacy ZSMOPL reporting (built into pharmacy systems).

## Watch list (no action yet)

- **e-KLZ electronic animal treatment book:** a free state system with no launch date. Vet software vendors are preparing.
- **New packaging EPR act (UC100):** fees phased in until 2028.
- **Short-term rental act:** zoning provisions from 2028.

## Pass history

- **First pass (2026-10-04):** about 9 searches. Screened KSeF, SENT, BDO, CBAM and payroll. Proposed SENT (5/10) and BDO (4/10).
- **Deep pass (2026-10-05, this file):** about 47 more searches, mostly in Polish. Screened 15 additional workflows (nurseries, tourist fee, e-Doręczenia, EUDR, funeral, foreign workers, preschool subsidies, deposit system, plant-protection records, vets, c-KOB, water risk assessment, short-term rental, pharmacy, packaging EPR).
  - **SENT rejected.** Competitor pricing was verified (HuzarSENT about 1,476 PLN/yr), more modules were found, and the micro-firm exemption from 13 May 2026 removes much of the target market.
  - **BDO rejected.** Five or more BDO-integrated vendors were found.
  - **Funeral homes rejected.** Six or more vertical SaaS vendors were found, plus the ZUS 2027 platform.
  - **New top candidates:**
    - nursery RKZ-5 / ZUS reconciliation (5/10);
    - tourist-fee router for 2027 (5/10);
    - e-Doręczenia for accounting offices (4/10);
    - EUDR for sawmills (4/10).
  - **Bottom line.** No Polish idea reached 6+/10: Poland's vertical-software market is dense, and most new government obligations ship with a free state portal.
