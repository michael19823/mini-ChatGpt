# Malaysia B3: community pharmacy poisons registers and pharmacist attendance records

## Re-assessment (owner's criteria)

**Verdict: maybe. New score: 5/10 (old score: 4/10).**

**The case.** There is no state portal for these records at all. Each community pharmacy has to keep its own Form B, Form C, Form D and Form E records, plus codeine/DXM/ephedrine/pseudoephedrine records, for 5 years, ready for a yearly inspection ([ST.164/2025](https://repositori.parlimen.gov.my/bitstream/123456789/3521/121/ST.164.2025); [K-FR-36/3](https://pharmacy.moh.gov.my/sites/default/files/document-upload/senarai-semak-pemeriksaan-premis-berlesen-bawah-akta-racun-1952-versi-3.0.pdf)). Record-keeping is the most-breached rule for community pharmacists in the one inspection study found ([Iraqi J Pharm Sci 2024](https://www.bijps.uobaghdad.edu.iq/index.php/bijps/article/view/2508)). No Malaysian product found advertises these statutory records. That leaves a clear, easy-to-build niche. But the market is about 3,000 independent outlets that pay little, and pharmacy POS vendors could add the same reports. It works as a small, cheap "inspection-ready" add-on, sold through POS vendors or pharmacist bodies. It does not look like a large business.

**Room for improvement over current practice.** No portal exists, so all of the work is on the pharmacy:
- **Evidence of pain.** In Sarawak, community pharmacist compliance with the Poisons Act and Sale of Drugs Act was only 58.6% (2016) and 61.1% (2020). Records for codeine, dextromethorphan, ephedrine and pseudoephedrine were the most common failure, at 12.3%-24.1% of premises each year ([Iraqi J Pharm Sci 2024](https://www.bijps.uobaghdad.edu.iq/index.php/bijps/article/view/2508)). Nationally, 2024 inspections led to 405 reminder letters and 323 warning letters ([MOH Statistics Report 2024](https://pharmacy.moh.gov.my/sites/default/files/document-upload/laporan-statistik-program-perkhidmatan-farmasi-2024-compressed.pdf)). The MOH checklist itself says licensees keep repeating offences after warnings ([K-FR-36/3](https://pharmacy.moh.gov.my/sites/default/files/document-upload/senarai-semak-pemeriksaan-premis-berlesen-bawah-akta-racun-1952-versi-3.0.pdf)).
- **Counter-evidence.** MOH's national KPI says 99.39% of inspected licensed premises were compliant ([MOH Statistics Report 2024](https://pharmacy.moh.gov.my/sites/default/files/document-upload/laporan-statistik-program-perkhidmatan-farmasi-2024-compressed.pdf)). This KPI probably uses a looser test than item-level checks (unverified). Felt pain may be lower than the Sarawak figures suggest.
- **New duties since 2025.** Form D (engagement record, due before the first shift and within a day of exit) and Form E (daily time-in/time-out per pharmacist) are new ([ST.164/2025](https://repositori.parlimen.gov.my/bitstream/123456789/3521/121/ST.164.2025)). Generic time clocks do not hold the IC number or the annual certificate number. They do not produce Form E in the prescribed layout either (unverified). Locum pharmacists make this harder, because each locum shift needs a Form D and a Form E entry. Locums are common at RM25-28 an hour ([Maukerja listing](https://www.maukerja.my/en/job/LQtFH5jNFT-part-time-locum-pharmacist); [Payscale](https://www.payscale.com/research/MY/Job=Locum_Pharmacist/Hourly_Rate)).
- **What software would add:**
  - Running-balance records for the codeine, DXM, ephedrine and pseudoephedrine group, which is the top breach.
  - Form C serial numbers linked to labels.
  - An append-only edit log and 5-year retention.
  - One-click inspection printouts and a self-check built from K-FR-36/3.
  - An evidence pack for the Internal Compliance Programme. The ICP offers licences of up to 3 years to firms with documented internal controls and a yearly audit of their record system ([ICP guide](https://pharmacy.moh.gov.my/sites/default/files/document-upload/panduan-program-pematuhan-dalaman-icp-pemegang-lesen-jenis-b-bawah-akta-racun-1952-.21072026.pdf)).
  - Multi-outlet views for small chains.
- **Consultants.** No consultant market selling help with these records was found. One firm named "APMRC Pharmacy Management & Retails Consultancy" appears in job ads, but its services could not be checked ([Maukerja](https://www.maukerja.my/en/job/27044421-pharmacy-assistant), page blocked, unverified).

**Competitor reality check.**
- **MaxERP.** It markets "Pharmacy Store Software in Malaysia" with POS, dispensing, prescription types and insurance pricing. Its page names no poison book, Prescription Book, Poisons Act, controlled-drug, codeine/DXM or pharmacist-attendance feature. It gives no price ("Get Quote") and no named pharmacy clients ([MaxERP](https://www.maxerp.org/pharmacy-store-software-malaysia)).
- **Others.** MyScripts, Faris and GS Vision were found in the first pass, but their features and prices could not be checked (MyScripts profile page returned 429; unverified).
- **Searches.** English, Malay and Chinese searches for poison-book or Prescription Book software in Malaysia found no product that claims Form B/C/D/E compliance. Generic Odoo pharmacy modules and foreign systems do not cover Malaysian forms ([Odoo app](https://apps.odoo.com/apps/modules/15.0/bi_pos_pharmacy_management)).
- **Chains.** Chains (BIG 282 and Caring 199 outlets in 2022; Alpro 280 in 2023; AA Pharmacy 84 in 2026) are likely served by in-house or enterprise systems ([Vulcan Post](https://vulcanpost.com/834724/big-pharmacy-caring-malaysia-7-eleven-acquisition/); [The Edge](https://theedgemalaysia.com/node/689911); [Hiredly](https://my.hiredly.com/companies/aa-pharmacy-healthcare-sdn-bhd)).
- **Reading.** The incumbents are generic POS/ERP tools that have not visibly done this job. That is an opening. The risk is that they add a report once a customer asks.

**Price per customer.**
- **Benchmarks:**
  - A Malaysian clinic system starts at RM45 a month for a solo practice ([AdvisoryApps FAQ](https://www.medicalmet.advisoryapps.com/faq/how-much-does-clinic-management-software-cost-in-malaysia/)).
  - The Type A licence costs about RM270 a year (first-pass calculation from the [MOH Statistics Report 2024](https://pharmacy.moh.gov.my/sites/default/files/document-upload/laporan-statistik-program-perkhidmatan-farmasi-2024-compressed.pdf)).
  - Pharmacist time costs about RM25 an hour ([Payscale](https://www.payscale.com/research/MY/Job=Locum_Pharmacist/Hourly_Rate)). Saving one hour a week of record work is worth about RM100 a month (own estimate).
  - The fine is up to RM5,000 per offence ([ST.164/2025](https://repositori.parlimen.gov.my/bitstream/123456789/3521/121/ST.164.2025)).
- **Realistic prices:**
  - Single outlet: RM39-59 a month.
  - Small chains: about RM39 per outlet per month, plus a one-off RM300 set-up fee to load pharmacists and opening balances.
  - POS vendor white-label: about RM15-20 per outlet per month.
  - Blended average: about RM50 per outlet per month, or RM600 a year (estimate).

**Revenue estimate (year 3).**
- **Buyers.** There were 4,320 private community pharmacy premises in 2024 ([MOH Statistics Report 2024](https://pharmacy.moh.gov.my/sites/default/files/document-upload/laporan-statistik-program-perkhidmatan-farmasi-2024-compressed.pdf)). The large chains above hold roughly 850-1,300 outlets, counting Watsons and Guardian pharmacies as unverified. That leaves about 3,000 independent and small-chain outlets (estimate).
- **Base case:** 3,000 x 8% x RM600 = **RM144,000 a year** (about USD 34k).
- **Good case** (MPS or a POS-vendor partnership): 3,000 x 15% x RM600 = RM270,000. Add set-up fees of 450 x RM300 = RM135,000 spread over three years (about RM45,000 a year). That gives about **RM315,000 a year** (about USD 75k).
- **Upside, unverified:** GP clinics that dispense must keep the Prescription Book too, and their Prescription Book non-compliance was the most common GP breach in Sarawak ([Iraqi J Pharm Sci 2024](https://www.bijps.uobaghdad.edu.iq/index.php/bijps/article/view/2508)). Clinic systems may already cover it (unverified).

**Ease of implementation and sale.**
- **Build: high.** The forms and fields are fully defined in the regulations and the checklist. A small team can build a PWA in weeks.
- **Onboarding: high.** The app needs no integration to start. CSV import from POS is a nice extra.
- **Sale: medium-low.** Buyers are fragmented, often family-run, and need content in Malay, English and Chinese. Direct sales are slow. The channels to test are:
  - MPS, which has signed digital-health MOUs before.
  - The Tigas banner group of independents (70+ stores in 2011; [Wikipedia](https://en.wikipedia.org/wiki/Tigas)).
  - Wholesalers.
  - POS vendors as white-label partners.
- **Regulatory: medium.** It is still unconfirmed whether state enforcement officers accept app-generated forms and cloud storage as kept "on the premises" (unverified).

**Remaining risks.**
- **POS bundling.** A POS vendor could add Form C/D/E reports cheaply.
- **Low felt pain.** The 99.39% national KPI and warning letters as the first step mean owners may not feel much pressure ([MOH Statistics Report 2024](https://pharmacy.moh.gov.my/sites/default/files/document-upload/laporan-statistik-program-perkhidmatan-farmasi-2024-compressed.pdf)).
- **Small revenue ceiling.** A base case of about RM144k a year makes this a side business unless the clinic upside or a white-label deal comes through.
- **Rules that may change.** The 2027 prescription format and the Pharmacy Bill could change the records required (unverified, see below).
- **Bound-book rules.** Psychotropic and dangerous drugs registers must stay in bound books, so the product cannot cover everything ([K-FR-36/3](https://pharmacy.moh.gov.my/sites/default/files/document-upload/senarai-semak-pemeriksaan-premis-berlesen-bawah-akta-racun-1952-versi-3.0.pdf)).
- **Weak market-size data.** Industry estimates of total pharmacies vary from 3,000 to 4,300+ ([The Edge, 2023](https://theedgemalaysia.com/node/689911)).

**New sources (this re-assessment).**
- https://www.bijps.uobaghdad.edu.iq/index.php/bijps/article/view/2508 (Sarawak compliance study abstract, read)
- https://www.maxerp.org/pharmacy-store-software-malaysia (read)
- https://vulcanpost.com/834724/big-pharmacy-caring-malaysia-7-eleven-acquisition/ (read)
- https://theedgemalaysia.com/node/689911 (read)
- https://en.wikipedia.org/wiki/Tigas (read)
- https://www.payscale.com/research/MY/Job=Locum_Pharmacist/Hourly_Rate (search snippet)
- https://www.maukerja.my/en/job/LQtFH5jNFT-part-time-locum-pharmacist (search snippet)
- https://www.medicalmet.advisoryapps.com/faq/how-much-does-clinic-management-software-cost-in-malaysia/ (search snippet)
- https://my.hiredly.com/companies/aa-pharmacy-healthcare-sdn-bhd (search snippet)
- https://apps.odoo.com/apps/modules/15.0/bi_pos_pharmacy_management (search snippet)
- https://www.maukerja.my/en/job/27044421-pharmacy-assistant (blocked, 403)
- https://www.einpresswire.com/article/528803443/small-retail-pharmacies-likely-targets-of-larger-chains-in-malaysia-retail-pharmacy-market-ken-research (read; it gives about 10,000 poison licences in 2019 but no independent share)

## Summary

**Verdict: maybe. Score: 4/10.**

The duty is real and current. The Poisons (Amendment) Regulations 2025 (P.U.(A) 155/2025) set out three things. The Prescription Book must follow Form C. A new regulation 26A requires a Form D engagement record and a Form E daily time-in/time-out record for every registered pharmacist. A new regulation 27A requires every register to be kept for 5 years. Fines go up to RM5,000, plus up to 2 years' jail under reg 27A ([ST.164/2025](https://repositori.parlimen.gov.my/bitstream/123456789/3521/121/ST.164.2025)). The MOH inspection checklist accepts these records in "physical or electronic" form, so a digital register is allowed ([K-FR-36/3 v3.0](https://pharmacy.moh.gov.my/sites/default/files/document-upload/senarai-semak-pemeriksaan-premis-berlesen-bawah-akta-racun-1952-versi-3.0.pdf)). The market is small: 4,320 private community pharmacy premises in 2024. MOH also reports that 99.39% of inspected licensed premises were compliant, so most owners do not feel much pain ([MOH Statistics Report 2024](https://pharmacy.moh.gov.my/sites/default/files/document-upload/laporan-statistik-program-perkhidmatan-farmasi-2024-compressed.pdf)). Most of the work is already a by-product of pharmacy POS/dispensing software, and the attendance form is a by-product of any time-clock app. That leaves a thin, low-price niche, best sold as a "compliance pack" add-on rather than a standalone business.

## Duty

**Legal basis**
- Poisons Act 1952 [Act 366]:
  - s16(4A): every licensed pharmacist must keep records of registered pharmacists engaged or employed at the licensed premises ([Act 366, MOH consolidated copy](https://pharmacy.moh.gov.my/sites/default/files/document-upload/poisons-act-1952-act-3662_0.pdf)).
  - s23(2): the Poisons Book for Group D retail sales, with purchaser name and address, date, poison, quantity, purpose and signature (same source).
  - s24(1): the Prescription Book entry must be made "on the day" any poison is supplied as a dispensed medicine. It records the date, serial number, poison/medicine, quantity, and the patient's name (and address if there is no prescription) (same source).
- Poisons (Amendment) Regulations 2025, P.U.(A) 155/2025, made 26 March 2025 by the Health Minister ([ST.164/2025](https://repositori.parlimen.gov.my/bitstream/123456789/3521/121/ST.164.2025)):
  - New reg 26: Poisons Wholesale Sales Book on Form A, Poisons Book on Form B, and Prescription Book on Form C.
  - New reg 26A: Form D (engagement or employment record) has the start date, name, IC number, Pharmacy Board registration number, phone/email and end date. Form D entries are due "immediately before" the pharmacist starts duty, and "not later than a day" after the engagement ends, in chronological order. Form E (daily attendance) has the date, name, IC number, annual certificate number, time-in and time-out. The fine is up to RM5,000.
  - New reg 27A: every register, record or book must be kept on the premises for 5 years from the last entry. Written or electronic prescriptions must be kept for 5 years. The penalty is a fine up to RM5,000, up to 2 years' jail, or both.
- Act s32(1): wilfully failing to keep a register or make an entry, or making a false entry, carries up to RM5,000 and/or 2 years. The general penalty in s32(2) is up to RM50,000 and/or 5 years ([Act 366](https://pharmacy.moh.gov.my/sites/default/files/document-upload/poisons-act-1952-act-3662_0.pdf)).
- Other registers on the same inspection checklist:
  - Psychotropic register, kept for 2 years in a bound book unless the licensing officer approves another form in writing.
  - Codeine/dextromethorphan/ephedrine/pseudoephedrine records under licence condition 2, kept for 5 years and allowed in electronic form.
  - Dangerous drugs register, which must be a bound book in ink.
  - Fridge temperature records.
  
  Source: [K-FR-36/3 v3.0](https://pharmacy.moh.gov.my/sites/default/files/document-upload/senarai-semak-pemeriksaan-premis-berlesen-bawah-akta-racun-1952-versi-3.0.pdf).

**Frequency.** Prescription Book entries are made on every dispensing, the same day. Form E is daily. Form D is updated at each hire and exit. Records are kept for 5 years.

**Commencement.** P.U.(A) 155/2025 has no commencement clause ([ST.164/2025](https://repositori.parlimen.gov.my/bitstream/123456789/3521/121/ST.164.2025)). Under the Interpretation Acts it would therefore take effect on its gazette date, which is likely around April 2025 (unverified). MOH's inspection checklist already lists Forms C, D and E with their fields, so inspectors are applying them ([K-FR-36/3](https://pharmacy.moh.gov.my/sites/default/files/document-upload/senarai-semak-pemeriksaan-premis-berlesen-bawah-akta-racun-1952-versi-3.0.pdf)). The Poisons (Amendment) Act 2025 (A1774) came into force on 1 January 2026 under P.U.(B) 472/2025. It mainly widens who counts as an enforcement officer and what counts as "premises", not record-keeping ([Act 366 amendment table](https://pharmacy.moh.gov.my/sites/default/files/document-upload/poisons-act-1952-act-3662_0.pdf); [Sinar Harian](https://www.sinarharian.com.my/article/740742/berita/nasional/dewan-rakyat-lulus-rang-undang-undang-racun-pindaan-2025)).

**Electronic records.**
- The checklist says the Prescription Book and Forms D and E may be "disimpan dalam bentuk fizikal/elektronik" (kept in physical or electronic form) ([K-FR-36/3](https://pharmacy.moh.gov.my/sites/default/files/document-upload/senarai-semak-pemeriksaan-premis-berlesen-bawah-akta-racun-1952-versi-3.0.pdf)).
- Act s34C allows electronic written orders and signatures under the Electronic Commerce Act 2006.
- Act s31E lets officers access computerised data.
- Act s35(h) lets the Minister prescribe how electronic records are kept ([Act 366](https://pharmacy.moh.gov.my/sites/default/files/document-upload/poisons-act-1952-act-3662_0.pdf)).
- No MOH technical standard for e-registers was found (unverified).

**Enforcement.**
- Inspections happen every year before the licence is renewed. The checklist itself says licensees keep repeating offences after warning letters, and tells them to self-inspect with it ([K-FR-36/3](https://pharmacy.moh.gov.my/sites/default/files/document-upload/senarai-semak-pemeriksaan-premis-berlesen-bawah-akta-racun-1952-versi-3.0.pdf)).
- In 2024 there were 5,951 inspections of Type A premises and 9,693 inspections of licensed premises in total. These led to 405 reminder letters and 323 warning letters ([MOH Statistics Report 2024](https://pharmacy.moh.gov.my/sites/default/files/document-upload/laporan-statistik-program-perkhidmatan-farmasi-2024-compressed.pdf)).
- The Pharmacy Enforcement Division had 1,359 new investigation cases in 2024. Courts recorded 912 guilty pleas and RM3.96m in fines across all offences (same source). How many of these concern record-keeping is not broken out (unverified).
- There were 205 raids on community retail pharmacies in 2024 (same source).
- MOH's KPI says 99.39% of inspected licensed premises were found compliant (same source).
- A Sarawak study found the recording provision was the most-breached rule for community pharmacists. Compliance was only 58.6% in 2016 and 61.1% in 2020, as quoted in a search summary ([DOAJ abstract](https://doaj.org/article/561a9980ba6d462eb49dbd03b59fa4c0), not opened, 403).

**Upcoming changes.**
- The Pharmacy Enforcement Division launched an Internal Compliance Programme (ICP) for Type A and B licensees on 17 July 2026. Firms with three years of clean inspections and a documented internal control system can get licences valid for up to 3 years and fewer routine inspections. The ICP asks firms to record purchases "manual or electronic", keep records systematic for audit, and audit their IT/records system once a year ([ICP guide K-GU-88](https://pharmacy.moh.gov.my/sites/default/files/document-upload/panduan-program-pematuhan-dalaman-icp-pemegang-lesen-jenis-b-bawah-akta-racun-1952-.21072026.pdf)).
- MOH reportedly plans a new prescription format from 2027 ([Malay Mail, Apr 2026](https://www.malaymail.com/amp/news/malaysia/2026/04/17/moh-to-introduce-new-prescription-format-with-fuller-patient-and-drug-details-from-2027/216577); page blocked, content unverified).
- The consolidated Pharmacy Bill is still not enacted ([malaysia4u guide](https://malaysia4u.com/pharmacy-guide), secondary, unverified).

## Buyers

- Private community pharmacy premises: 3,513 (2021), 3,946 (2022), 4,246 (2023) and 4,320 (2024). Selangor has 1,084 and Johor 517 ([MOH Statistics Report 2024](https://pharmacy.moh.gov.my/sites/default/files/document-upload/laporan-statistik-program-perkhidmatan-farmasi-2024-compressed.pdf)).
- Licensed premises by type in 2024: 3,949 retail, 961 wholesale-and-retail and 767 wholesale only, for 5,677 in total (same source). Wholesalers must keep Form A.
- Type A licences: 8,024 in 2024, issued per pharmacist, not per shop (same source). Licence fees collected were RM2.17m, about RM270 per licence. That shows how little the state charges (same source, own calculation).
- Segments:
  - National chains, for example Caring, Big Pharmacy, Alpro, Watsons and Guardian. They likely have in-house or enterprise systems; their outlet counts are unverified. Alpro has digitised its inventory with Zebra RFID ([Chain Drug Review](https://chaindrugreview.com/tag/june-13-2022/)).
  - Regional chains of 2-20 outlets (unverified count).
  - Single-outlet independents. Many are Chinese-Malaysian family businesses (unverified).
- A realistic target of independents and small chains is about 2,500-3,000 premises (estimate, unverified).
- How they comply today:
  - Paper books, POS sales logs, and dispensing labels with a serial number linked to the Prescription Book, which the checklist requires ([K-FR-36/3](https://pharmacy.moh.gov.my/sites/default/files/document-upload/senarai-semak-pemeriksaan-premis-berlesen-bawah-akta-racun-1952-versi-3.0.pdf)).
  - For attendance, staff probably use the shop's time clock or a paper sheet (unverified).
  - No consultant market for this specific duty was found.

## Competition

- **Free state tool:** none found for community pharmacies. MY.PHARMA-C 2.0 is the licensing and permit system, not a register ([MOH licence list reference](https://pharmacy.moh.gov.my/sites/default/files/document-upload/daftar-lesen-sistem-my.pharma-c-2.0-2025-data-sehingga-08092025.pdf), page now returns "not found"). PhIS and MyUBAT serve public facilities only ([MOH e-pharmacy guideline](https://pharmacy.moh.gov.my/sites/default/files/document-upload/gp-e-pharmacy-dalam-ohs.pdf)). MOH does provide a free self-inspection checklist ([K-FR-36/3](https://pharmacy.moh.gov.my/sites/default/files/document-upload/senarai-semak-pemeriksaan-premis-berlesen-bawah-akta-racun-1952-versi-3.0.pdf)).
- **Pharmacy POS and dispensing software:** these are the real competitors. Every dispensing system prints labels and logs sales, so a Form C export is a small feature for them. Names found:
  - GS Vision Pharmacy Manager (legacy, aimed at small retail pharmacies) ([GS Vision](https://www.oocities.org/yoongs/gsv/release.htm)).
  - MyScripts (Kuching, founded 2023, "pharmacy operating system") ([Premier Alts](https://www.premieralts.com/companies/myscripts)).
  - Faris Software (cited in a UTHM paper; [UTHM](https://publisher.uthm.edu.my/periodicals/index.php/aitcs/article/download/2332/1902/41130)).
  - Generic retail POS such as SiteGiant and HashMicro ([SiteGiant](https://sitegiant.my/blog/10-best-retail-pos-system-in-malaysia-2026/)).
  
  None of them advertises Form B/C/D/E compliance online, and their prices are not published (unverified).
- **HR/time-attendance apps:** any clock-in app or fingerprint terminal already records time-in/time-out, so Form E is mostly a report format (no specific vendor checked; unverified).
- **International analogues:** UK electronic controlled-drug registers CDsmart (about £18/month) and PharmCD (about £12/month), and Australia's DDBook (price on request) ([Pharmacy Magazine](https://www.pharmacymagazine.co.uk/new-electronic-register-for-cds); [ensun PharmCD](https://ensun.io/company/pharmcd-661e2d5eef817dfac5996eed); [DDBook](https://www.fred.com.au/partner/modeus/ddbook/)). None of them sells in Malaysia.
- **Template packs:** none found.

## Willingness to pay

- The maximum fine is RM5,000 per offence under reg 26A/27A or s32(1) ([ST.164/2025](https://repositori.parlimen.gov.my/bitstream/123456789/3521/121/ST.164.2025); [Act 366](https://pharmacy.moh.gov.my/sites/default/files/document-upload/poisons-act-1952-act-3662_0.pdf)). Actual fines for record breaches are not reported separately. Warning letters are the usual first step ([MOH Statistics Report 2024](https://pharmacy.moh.gov.my/sites/default/files/document-upload/laporan-statistik-program-perkhidmatan-farmasi-2024-compressed.pdf)).
- The real stakes are licence renewal and the pharmacist's personal criminal liability, not the fine size (inference).
- The Type A licence costs about RM270 a year (own calculation from the same report). Software priced well above that will look expensive.
- Analogue prices are £12-18 a month in the UK (sources above). A plausible Malaysian price is RM29-69 per outlet per month, or RM300-600 a year. A one-off set-up fee for digitising paper books would be extra (estimate, unverified).
- Time saved: a few minutes a day per pharmacist on attendance, plus faster pre-renewal self-inspection (estimate).
- Revenue ceiling: 10% of about 3,000 independents at RM50 a month is about RM180k a year (about USD 40k). That is a side business, not a company (estimate).

## Channels

- **Malaysian Pharmacists Society (MPS)**, the national body since 1967, with a community chapter. It has signed digital-health MOUs before, for example with DOC2US in 2023 and SwipeRx in 2019 ([DOC2US press release](https://doc2us.com/pressrelease/doc2us-and-malaysian-pharmacists-society-sign-mou-advancing-malaysias-pharmacy-network-through-digital-health-v5); [SwipeRx](https://www.swiperxapp.com/?p=756)).
- **Malaysian Community Pharmacy Guild (MCPG)** and **Malaysian Community Pharmacists Association (MCPA)** (membership counts unverified) ([LinkedIn profile](https://my.linkedin.com/in/lohpengyeow)).
- **SwipeRx**, a pharmacist app and community with CPD reach ([SwipeRx](https://www.swiperxapp.com/?p=756)).
- **FIP World Congress, Kuala Lumpur 2027**, a large exhibition opportunity ([FIP 2027](https://kualalumpur2027.fip.org/congress-partner/)).
- **Pharmacy POS vendors.** Sell to them as a white-label compliance module. This may be a better channel than selling directly.
- **Wholesalers and distributors** (DKSH, Zuellig) that already serve every pharmacy. DKSH publishes Poisons Act explainers ([DKSH](https://www.dksh.com/my-en/home/insights/how-malaysias-amended-poisons-law-affects-the-healthcare-industry)).
- **ICP applicants.** Licensees seeking 3-year licences need documented internal controls ([ICP guide](https://pharmacy.moh.gov.my/sites/default/files/document-upload/panduan-program-pematuhan-dalaman-icp-pemegang-lesen-jenis-b-bawah-akta-racun-1952-.21072026.pdf)).
- Content should be in Malay, English and Chinese (inference).

## Risks

- **POS bundling (main risk).** Dispensing software already holds Form C data. Any vendor can add a Form C/D/E report in days, and so can a generic time-clock app for Form E.
- **Low felt pain.** MOH reports 99.39% compliance at inspection, and warning letters come first ([MOH Statistics Report 2024](https://pharmacy.moh.gov.my/sites/default/files/document-upload/laporan-statistik-program-perkhidmatan-farmasi-2024-compressed.pdf)).
- **Small market.** There are about 4,300 premises, chains are probably out of reach, and prices are low.
- **Regulator tool.** No sign that MOH will build a private-pharmacy e-register, but the 2027 prescription format change or the Pharmacy Bill could reshape records (unverified).
- **Format limits.** Psychotropic and dangerous drugs registers must be bound books unless the licensing officer approves otherwise in writing, so those cannot simply go digital ([K-FR-36/3](https://pharmacy.moh.gov.my/sites/default/files/document-upload/senarai-semak-pemeriksaan-premis-berlesen-bawah-akta-racun-1952-versi-3.0.pdf)).
- **Liability and data.** Patient names and addresses fall under PDPA 2010. Records must be kept "on the premises", so a cloud-only store may be challenged; offline copy or print-on-demand is needed (unverified interpretation).
- **No licence is needed** to sell the software (unverified).

## First product

Version 1 is a "Rekod Racun" compliance pack. It is a web/PWA app for one outlet.

1. **Form E attendance.** Pharmacist clock-in/out by QR or PIN. It stores the IC number and annual certificate number, and exports Form E to PDF.
2. **Form D engagement register.** Add a pharmacist before their first shift, with a reminder to close the record within one day of exit.
3. **Form C Prescription Book.** Fast entry with an auto serial number, a label with the serial number, and CSV import from common POS exports.
4. **Form B Poisons Book.** Purchaser e-signature, and a 7-day reminder for written orders on urgent supplies.
5. **Codeine/DXM/ephedrine/pseudoephedrine running-balance records.**
6. **Records management.** Five-year retention, an append-only edit log with dated corrections (as the checklist expects), and one-click "inspection mode" printouts.
7. **Self-check.** A self-inspection checklist built from K-FR-36/3, plus an ICP evidence pack.

**First 30 days**
- Weeks 1-2: build Form D/E plus the Form C entry/import and PDF exports.
- Week 3: interview 10 independents in Selangor and Johor, ideally through MPS community contacts. Show the build to one Pharmacy Enforcement Division state office to confirm the electronic format is accepted.
- Week 4: pilot in 5 pharmacies at RM29 a month. Pitch 2-3 local POS vendors on a white-label or referral deal.

## Open questions

- The exact gazette date of P.U.(A) 155/2025.
- Whether state enforcement officers accept app-generated Forms C/D/E and cloud storage as "on the premises".
- Which POS or dispensing systems independents actually use, and whether those systems already print Form C.
- How many record-keeping breaches lead to compounds or charges.
- How many outlets the chains have, and how many true independents there are.
- MCPG and MCPA membership numbers, and partnership terms.
- What the 2027 prescription format requires.

## Sources

- https://repositori.parlimen.gov.my/bitstream/123456789/3521/121/ST.164.2025 (P.U.(A) 155/2025 full text, read)
- https://pharmacy.moh.gov.my/sites/default/files/document-upload/poisons-act-1952-act-3662_0.pdf (Act 366 consolidated, read)
- https://pharmacy.moh.gov.my/sites/default/files/document-upload/senarai-semak-pemeriksaan-premis-berlesen-bawah-akta-racun-1952-versi-3.0.pdf (inspection checklist K-FR-36/3 v3.0, read)
- https://pharmacy.moh.gov.my/sites/default/files/document-upload/laporan-statistik-program-perkhidmatan-farmasi-2024-compressed.pdf (MOH Pharmaceutical Services Statistics Report 2024, read)
- https://pharmacy.moh.gov.my/sites/default/files/document-upload/panduan-program-pematuhan-dalaman-icp-pemegang-lesen-jenis-b-bawah-akta-racun-1952-.21072026.pdf (ICP guide, July 2026, read)
- https://www.sinarharian.com.my/article/740742/berita/nasional/dewan-rakyat-lulus-rang-undang-undang-racun-pindaan-2025
- https://pharmacy.moh.gov.my/sites/default/files/document-upload/gp-e-pharmacy-dalam-ohs.pdf
- https://pharmacy.moh.gov.my/sites/default/files/document-upload/daftar-lesen-sistem-my.pharma-c-2.0-2025-data-sehingga-08092025.pdf (now returns not found)
- https://doaj.org/article/561a9980ba6d462eb49dbd03b59fa4c0 (search snippet only)
- https://www.malaymail.com/amp/news/malaysia/2026/04/17/moh-to-introduce-new-prescription-format-with-fuller-patient-and-drug-details-from-2027/216577 (blocked)
- https://malaysia4u.com/pharmacy-guide
- https://www.dksh.com/my-en/home/insights/how-malaysias-amended-poisons-law-affects-the-healthcare-industry
- https://www.oocities.org/yoongs/gsv/release.htm
- https://www.premieralts.com/companies/myscripts
- https://publisher.uthm.edu.my/periodicals/index.php/aitcs/article/download/2332/1902/41130
- https://sitegiant.my/blog/10-best-retail-pos-system-in-malaysia-2026/
- https://chaindrugreview.com/tag/june-13-2022/
- https://www.fred.com.au/partner/modeus/ddbook/
- https://www.pharmacymagazine.co.uk/new-electronic-register-for-cds
- https://ensun.io/company/pharmcd-661e2d5eef817dfac5996eed
- https://doc2us.com/pressrelease/doc2us-and-malaysian-pharmacists-society-sign-mou-advancing-malaysias-pharmacy-network-through-digital-health-v5
- https://www.swiperxapp.com/?p=756
- https://my.linkedin.com/in/lohpengyeow
- https://kualalumpur2027.fip.org/congress-partner/
