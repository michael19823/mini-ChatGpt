# Slovakia B1: goAML registration and AML programme pack for small obliged firms

## Re-assessment (owner's criteria)

Re-assessed 9 October 2026. Budget used: 12 web searches, 9 page fetches.

**Verdict: maybe. New score: 5/10 (old score: 4/10).**

**The case.** The free goAML portal only handles registration and report filing. It does nothing for the daily work: client files, multi-source beneficial-owner (KÚV) evidence, PEP and sanctions checks with a dated audit trail, risk scoring, the §20 programme and training records ([pravnenoviny](https://pravnenoviny.sk/?p=20193), [FSJ PPPO](https://www.minv.sk/swift_data/source/policia/fsj/goaml/PPPO.pdf)). No Slovak product was found that does this job for small agencies, accountants or tax advisers. But the price ceiling is low. A Czech tool, AML PROOF, already has a Slovak-language page with EUR prices of EUR 3–5 per check and no monthly fee ([AML PROOF SK](https://amlproof.ai/sk)). The buyer base is a few thousand small firms, and enforcement is light. A cheap, Slovak-law tool sold per check or for a small fee, mainly to accounting firms with many corporate clients, could reach a modest five-figure to low six-figure revenue. That makes it a good side product, not a stand-alone business.

### Room for improvement over the portal or current practice

- **goAML is only a filing channel.** It covers registration, unusual-transaction (NOO) reports and XML report upload. Users must set up two-factor login with Google Authenticator, and the manual has a chapter on losing access and resetting the account ([FSJ PPPO](https://www.minv.sk/swift_data/source/policia/fsj/goaml/PPPO.pdf)). Setting up access and verifying data "takes a few days" ([pravnenoviny](https://pravnenoviny.sk/?p=20193)). No user complaints about goAML were found (unverified as a pain point).
- **The beneficial-owner check got harder.** A register extract is no longer enough. Firms must check the real owner against several reliable sources, for every client ([pravnenoviny](https://pravnenoviny.sk/?p=20193), [podnikajte](https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/novela-zakona-o-ochrane-pred-legalizaciou-prijmov-z-trestnej-cinnosti-aml-zakon)). Nothing in goAML helps with this. A tool that pulls the business register and RPVS and keeps a dated record of each source fits the gap.
- **A client's own word is not enough.** The FSJ says a client's statement that they are not a PEP or sanctioned is insufficient without verification. It points to EU, UN and OFAC lists and paid databases such as World-Check ([FSJ guidance on remote identification](https://www.minv.sk/swift_data/source/policia/fsj_biro/usmernenia/Identifikacia%20klienta%20bez%20fyzickej%20pritomnosti%20a%20pouzitie%20par%2012%20zakona.pdf)). Small firms cannot afford World-Check. A cheap screening step with a saved result fills that gap.
- **Manual practice fails at inspection.** A note saying "checked, nothing found" with no time stamp, source or name is "almost worthless" to the regulator. Manual list searches are error-prone, and an accounting firm with a hundred clients cannot keep up on paper ([epravo.cz](https://www.epravo.cz/top/clanky/digitalizace-aml-povinnosti-jak-technologie-meni-plneni-povinnosti-pro-tisice-povinnych-osob-121236.html); Czech source written by a vendor, but the Slovak duties are similar).
- **Records are weak today.** In the FSJ's own survey of real estate agencies, 39% kept no record of internal NOO reviews and almost 23% did not vet staff. In 86% of agencies the AML officer also does other work ([FSJ TPU-RS](https://www.minv.sk/swift_data/source/policia/fsj/kpo/TPU-RS.pdf)). The FSJ often finds programmes with vague risk assessments ([epravo.sk](https://www.epravo.sk/top/clanky/program-vlastnej-cinnosti-povinnej-osoby-v-podmienkach-slovenskej-pravnej-upravy-pre-oblast-amlcft-od-roku-2018-4335.html)).
- **Programmes need rewrites.** The programme must be updated when the law changes ([AKMV](https://www.akmv.sk/aml-dokumentacia-program-vlastnej-cinnosti/)). Act 73/2026 and the EU AMLR from 10 July 2027 ([epravo.cz](https://www.epravo.cz/top/clanky/digitalizace-aml-povinnosti-jak-technologie-meni-plneni-povinnosti-pro-tisice-povinnych-osob-121236.html)) mean two rewrites in about a year. One-off law-firm documents do not update themselves.
- **Multi-client work.** Accounting firms check every corporate client. A per-client file with re-check reminders is what they lack. No Slovak accounting suite was found with an AML module (KROS search found nothing; [podnikajte KROS](https://www.podnikajte.sk/uctovnictvo/kros-uctovna-firma); not confirmed absent).

### Competitor reality check

| Option | Does it do the job? | Price | Verdict |
|---|---|---|---|
| goAML (FSJ) | Registration and NOO filing only. No client files, checks or programme. | Free ([pravnenoviny](https://pravnenoviny.sk/?p=20193)) | Not a competitor for the ongoing work. |
| AKMV and other law firms | Write the programme, NOO form, client questionnaire and training template once. No software, no updates, no goAML help. | From EUR 600 per pack for agencies ([AKMV agencies](https://www.akmv.sk/pravne-sluzby/aml-dokumentacia-pre-realitnu-kancelariu/)); EUR 130 per hour otherwise ([AKMV](https://www.akmv.sk/aml-dokumentacia-program-vlastnej-cinnosti/)) | Partial. Covers the document, not the daily record-keeping. A likely partner. |
| FinStat AML | PEP database (1,300+ EU officials, 400+ relatives) via portal or API, under contract ([FinStat](https://finstat.sk/nase-clanky/analyzy/Nova-databaza-FinStat-Politicky-exponovane-osoby-v-instituciach-EU), [CRZ contract](https://www.crz.gov.sk//data/att/4639290.pdf)) | Not public; the AML page returns 403 (unverified) | Partial. A data source, not a workflow. Could be a supplier. |
| Sumsub and other global KYC vendors | ID, PEP and sanctions checks for larger, fintech-type buyers ([Sumsub SK](https://sumsub.com/sk/kyc-compliance/)) | Not checked (unverified) | Too heavy for a one-person agency. No programme or KÚV file. |
| AML PROOF (Czech) | Full workflow: client ID, sanctions, PEP and adverse-media screening, risk scoring, internal policy, NOO reports, 10-year archive with audit trail, training. Built for Czech law only. Its Slovak page names no Slovak law, FSJ, goAML or RPVS ([AML PROOF SK](https://amlproof.ai/sk), [AML PROOF CZ](https://amlproof.ai/cs)) | No monthly fee. EUR 3 per individual check, EUR 5 per company check. Internal policy CZK 990 and training CZK 490 per person per year ([AML PROOF SK](https://amlproof.ai/sk), [AML PROOF CZ](https://amlproof.ai/cs)) | Not usable in Slovakia today, but cheap and close. The biggest risk: it could add Slovak law quickly. |
| Codamore "JUDICIUM" | A LinkedIn snippet says a Slovak online AML app was written for small accounting firms and sole traders ([LinkedIn](https://sk.linkedin.com/in/peter-tengler)) | Unknown | Not verified: no product page found. Must be checked before building. |
| Chambers (SKDP, NARKS, SKCU) | Reminders and info pages. No tool or template found in public pages ([SKDP](https://www.skdp.sk), [NARKS](https://www.narks.sk)) | Free to members | Member areas not checked (unverified). |

So no Slovak product does the whole job at a fair price (as far as public sources show). The incumbents are partial. The Czech price anchor is the real constraint on what can be charged.

### Price per customer

What buyers pay or risk today:
- A one-off programme from a lawyer: from EUR 600 ([AKMV agencies](https://www.akmv.sk/pravne-sluzby/aml-dokumentacia-pre-realitnu-kancelariu/)). Updates at EUR 130 per hour ([AKMV](https://www.akmv.sk/aml-dokumentacia-program-vlastnej-cinnosti/)).
- Fines averaged about EUR 10,000 in 2019–2022 ([epravo.sk](https://www.epravo.sk/top/clanky/aml-a-pokuty-5453.html)). An accountant was fined EUR 50,000 in 2025 ([FSJ PKC2026](https://www.minv.sk/swift_data/source/policia/fsj/kpo/PKC2026.pdf)). The legal ceiling is EUR 1m per podnikajte; BDO speaks of "several million euros" ([podnikajte](https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/novela-zakona-o-ochrane-pred-legalizaciou-prijmov-z-trestnej-cinnosti-aml-zakon), [BDO](https://www.bdoslovakia.com/en-gb/insights/amendment-to-the-act-against-money-laundering-from-1-6-2026)).
- The nearest software price: EUR 3–5 per check, no monthly fee ([AML PROOF SK](https://amlproof.ai/sk)).

Realistic prices (my proposal, unverified with buyers):
- **Small agency or sole-trader accountant:** EUR 9–15 per month (about EUR 100–180 per year), including the programme template, its yearly update and about 20 checks. Extra checks at EUR 2–4.
- **Accounting firm with 30–150 corporate clients:** EUR 30–60 per month (about EUR 360–720 per year), priced by number of client files.
- **Programme-only package:** EUR 99–199 one-off, well below the EUR 600 law-firm pack.

### Revenue estimate (year 3)

Buyer counts are weak. None of these is confirmed by a register:
- Real estate agencies: 1,000–2,000 (unverified). 223 answered the FSJ questionnaire ([FSJ PKC2026](https://www.minv.sk/swift_data/source/policia/fsj/kpo/PKC2026.pdf)). RE/MAX alone has 36 offices ([SITA](https://sita.sk/rok-2025-potvrdil-silu-siete-rok-2026-bude-rokom-transformacie/)).
- Accounting firms and sole traders with external clients: about 4,000 active (unverified). A commercial database lists 57,261 records under NACE 69.20, but that count includes inactive and side-line firms ([InfobelPRO](https://www.infobelpro.com/companies/slovakia/accounting-and-tax)).
- Tax advisers about 1,000 and audit firms several hundred (both unverified).

Arithmetic, base case:
- Small firms: 5,500 x 5% = 275 customers x EUR 150 = **EUR 41,250**
- Multi-client accounting firms: 1,000 x 8% = 80 customers x EUR 500 = **EUR 40,000**
- Extra checks and programme packages: about **EUR 10,000** (unverified)
- **Total: about EUR 90,000 per year.**

Range: low case (2–3% share, lower prices) about EUR 30,000. High case (10% share, with a chamber or accounting-software partner) about EUR 180,000.

### Ease of implementation and sale

- **Build: medium.** The core is a client file, a sanctions list import (EU list is public), lookups in the business register and RPVS, a PDF export and a programme template. Slovak legal review of the template is needed, at law-firm hourly rates ([AKMV](https://www.akmv.sk/aml-dokumentacia-program-vlastnej-cinnosti/)). A PEP source costs extra; FinStat is the local option (price unverified).
- **Onboarding: easy.** Web app, no integration needed. Each firm sets up in under an hour (unverified).
- **Sale: medium to hard.** Buyers are tiny, and the inspection risk is low (about 10 on-site checks a year in 2025, [FSJ PKC2026](https://www.minv.sk/swift_data/source/policia/fsj/kpo/PKC2026.pdf)). Fear alone will not sell it. Channels that reach many at once exist: NARKS and ZRKS (the FSJ used them for its survey), SKDP, and SKCU (unverified as partners).

### Remaining risks

- **AML PROOF localises for Slovakia.** It already has a Slovak-language page and EUR prices ([AML PROOF SK](https://amlproof.ai/sk)). If it adds Slovak law, a new entrant must compete on price with a funded, finished product.
- **Weak enforcement keeps willingness to pay low.** About 10 inspections in 2025 and EUR 142,000 in total fines ([FSJ PKC2026](https://www.minv.sk/swift_data/source/policia/fsj/kpo/PKC2026.pdf)).
- **Unverified local rival.** The Codamore "JUDICIUM" app was seen only in a search snippet (unverified).
- **The 30 Nov 2026 deadline is too close** to use as a launch hook. The better hook is the EU AMLR on 10 July 2027.
- **Small, unconfirmed buyer counts.** All counts above are estimates (unverified).
- **Liability and GDPR.** A generated programme that fails an inspection hurts trust. Storing ID copies needs EU hosting.

### New sources

- https://amlproof.ai/sk
- https://amlproof.ai/cs
- https://www.epravo.cz/top/clanky/digitalizace-aml-povinnosti-jak-technologie-meni-plneni-povinnosti-pro-tisice-povinnych-osob-121236.html
- https://www.akmv.sk/aml-dokumentacia-program-vlastnej-cinnosti/
- https://www.bdoslovakia.com/en-gb/insights/amendment-to-the-act-against-money-laundering-from-1-6-2026
- https://www.minv.sk/swift_data/source/policia/fsj_biro/usmernenia/Identifikacia%20klienta%20bez%20fyzickej%20pritomnosti%20a%20pouzitie%20par%2012%20zakona.pdf
- https://www.epravo.sk/top/clanky/program-vlastnej-cinnosti-povinnej-osoby-v-podmienkach-slovenskej-pravnej-upravy-pre-oblast-amlcft-od-roku-2018-4335.html
- https://sita.sk/rok-2025-potvrdil-silu-siete-rok-2026-bude-rokom-transformacie/
- https://www.infobelpro.com/companies/slovakia/accounting-and-tax
- https://www.podnikajte.sk/uctovnictvo/kros-uctovna-firma
- https://sk.linkedin.com/in/peter-tengler (search snippet only; page blocked)
- https://pravnenoviny.sk/?p=20193 (re-read)
- https://www.crz.gov.sk//data/att/4639290.pdf


Research date: 9 October 2026. Budget used: 20 web searches, 12 page fetches.

## Summary

**Verdict: maybe. Score: 4/10.**

The duty is real and fresh. Act 73/2026 amends the AML Act 297/2008. All existing obliged persons must register in the FSJ's goAML system by 30 November 2026. Beneficial-owner checks from several sources now apply to every client ([pravnenoviny](https://pravnenoviny.sk/?p=20193), [podnikajte](https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/novela-zakona-o-ochrane-pred-legalizaciou-prijmov-z-trestnej-cinnosti-aml-zakon)).

The paid opportunity is weak, though:
- Registration itself is free and done once.
- In the FSJ's own 2025 survey, 92% of 220 real estate agencies said they already have an AML programme. Most are one-person firms brokering a handful of deals ([FSJ TPU-RS](https://www.minv.sk/swift_data/source/policia/fsj/kpo/TPU-RS.pdf)).
- Enforcement is thin. The FSJ started 10 inspections in 2025 across all non-bank obliged persons and fined EUR 142,000 in total ([FSJ PKC2026](https://www.minv.sk/swift_data/source/policia/fsj/kpo/PKC2026.pdf)).

A cheap Slovak-language "AML desk" could sell at a low price: a client-check log, a beneficial-owner (KÚV) evidence file, a risk score and a programme generator. The best route is a bundle sold through accountants' or realtors' associations, or a partnership with an accounting-software vendor. It is a side product, not a stand-alone business, unless the EU AMLR (from July 2027, unverified) brings a second, larger update wave.

## Duty

**Legal basis**
- Act 297/2008 Z.z. (the AML Act), as amended by Act 73/2026 Z.z. Most of it has applied since 1 June 2026, some parts since 10 July 2026. It transposes Directive (EU) 2024/1640 ([pravnenoviny](https://pravnenoviny.sk/?p=20193)).
- The obliged persons are listed in §5 of the Act. They include accountants, tax advisers, auditors, real estate agencies, notaries and lawyers (the last two only for some activities), crypto-asset providers and gambling operators ([pravnenoviny](https://pravnenoviny.sk/?p=20193)).
- Anyone holding a "vedenie účtovníctva" (bookkeeping) trade licence counts as an obliged person, even if they do not use it. Employed in-house accountants are excluded ([podnikajte](https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/novela-zakona-o-ochrane-pred-legalizaciou-prijmov-z-trestnej-cinnosti-aml-zakon)).
- Bookkeeping is a free trade (code 6901), so no professional exam is needed ([AKMV](https://www.akmv.sk/pravna-poradna/uctovnictvo-ako-zivnost/)). The pool of licence holders is therefore probably large (unverified).

**What must be done**
1. **goAML registration.** Existing obliged persons must register by 30 Nov 2026 (§36d). New obliged persons have 30 days (§21(2)). Registration is electronic only. It needs a form, a proof of business authorisation and a named administrator. It is free ([podnikajte](https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/novela-zakona-o-ochrane-pred-legalizaciou-prijmov-z-trestnej-cinnosti-aml-zakon), [pravnenoviny](https://pravnenoviny.sk/?p=20193)). The FSJ publishes a goAML user manual ([FSJ PPPO](https://www.minv.sk/swift_data/source/policia/fsj/goaml/PPPO.pdf)).
2. **Unusual-transaction reports (NOO)** go only through goAML. Paper and email are no longer accepted ([pravnenoviny](https://pravnenoviny.sk/?p=20193)).
3. **Beneficial-owner (KÚV) checks.** From 1 June 2026, the owner and ownership structure must be checked against several reliable sources, not just the register extract. This now covers all clients, not only high-risk ones ([podnikajte](https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/novela-zakona-o-ochrane-pred-legalizaciou-prijmov-z-trestnej-cinnosti-aml-zakon)).
4. **Written programme of own activity (§20).** It must be in Slovak, tailored to the firm and kept up to date. It names a responsible person and covers the NOO list, client due diligence, risk assessment, record keeping, the whistleblower process, internal control and training ([FSJ TPU-RS](https://www.minv.sk/swift_data/source/policia/fsj/kpo/TPU-RS.pdf), [epravo](https://www.epravo.sk/top/clanky/aml-a-pokuty-5453.html)).
   - An accountant, auditor or tax adviser who works only under contract for another obliged person may use that person's programme instead ([podnikajte](https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/smernica-proti-legalizacii-prijmov-trestna-cinnost)).
5. **Ongoing duties:** client due diligence, PEP and sanctions screening, monitoring, training records and internal NOO records ([FSJ PKC2026](https://www.minv.sk/swift_data/source/policia/fsj/kpo/PKC2026.pdf)).
6. **New trade-licence rule.** A legal person whose beneficial owner is not of good character may not run a bookkeeping trade ([podnikajte](https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/novela-zakona-o-ochrane-pred-legalizaciou-prijmov-z-trestnej-cinnosti-aml-zakon)).

**Penalties**
- Missing the goAML registration is an administrative offence with a fine of up to EUR 1,000,000 ([podnikajte](https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/novela-zakona-o-ochrane-pred-legalizaciou-prijmov-z-trestnej-cinnosti-aml-zakon)).
- In 2019–2022, FSJ fines ranged from EUR 300 to EUR 1.5m and averaged about EUR 10,000. The most common breaches were programme defects, weak client due diligence and beneficial-owner checks, and not cooperating with inspections ([epravo](https://www.epravo.sk/top/clanky/aml-a-pokuty-5453.html)).

**Enforcement in practice** ([FSJ PKC2026](https://www.minv.sk/swift_data/source/policia/fsj/kpo/PKC2026.pdf))
- In 2025 the FSJ started 10 inspections: 3 real estate agencies, 3 pawnshops, 1 asset association, 1 exchange office, 1 securities dealer and 1 auction house.
- It issued 6 fine decisions totalling EUR 142,000, and 3 of them were also published.
- One accountant was fined EUR 50,000 under §30(1)-(3), which covers cooperation and information duties. A notary was fined EUR 15,000.
- One off-site check covered the whole real estate sector. It was a questionnaire distributed through ZRKS and NARKS, and 223 agencies answered it by 9 Jan 2026.
- The 2026 plan lists full on-site inspections for the types "real estate agency", "auditor/tax adviser" and "notary", among others. The number of firms per type is not given.

**Upcoming change**
- EU AML Regulation 2024/1624 (AMLR) will apply directly from 10 July 2027 (date unverified in this pass; [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1624/oj)). Under its Article 18, outsourcing is allowed but responsibility stays with the obliged person ([springlex](https://www.springlex.eu/sv/packages/aml/amlr-regulation/article-18/)).
- This means programmes will need another rewrite in 2027 (unverified as to Slovak detail).

## Buyers

**Real estate agencies**
- The FSJ survey had 220 respondents for 2024–2025, out of 223 agencies that answered the questionnaire ([FSJ TPU-RS](https://www.minv.sk/swift_data/source/policia/fsj/kpo/TPU-RS.pdf), [FSJ PKC2026](https://www.minv.sk/swift_data/source/policia/fsj/kpo/PKC2026.pdf)).
- Most respondents have no employees or one employee, and work with partner brokers.
- In 2024–2025, 93 of them brokered 0–10 deals with Slovak-resident buyers. Only 12 brokered more than 100 ([FSJ TPU-RS](https://www.minv.sk/swift_data/source/policia/fsj/kpo/TPU-RS.pdf)).
- NARKS had more than 160 member agencies in 2016 ([NARKS press release 2016](https://www.pss.sk/files/pdf/pressinfo/scany/2016/tlacova-sprava-narks.pdf)). Its current count was not found on [narks.sk](https://www.narks.sk).
- The total number of agencies in Slovakia was not found (unverified). A reasonable guess is 1,000–2,000 trading entities (unverified).

**Accountants with a bookkeeping licence**
- No count was found (unverified).
- Slovakia has about 494,000 sole traders in total ([TASR](https://www.teraz.sk/ekonomika/pocet-sukromnych-osob-podnikatelov/604772-clanok.html)).
- Bookkeeping holders are probably several thousand active firms (unverified). Press coverage says only "thousands of firms and sole traders" are affected ([pravnenoviny](https://pravnenoviny.sk/?p=20193)).

**Tax advisers and auditors**
- Tax advisers are listed in the SKDP register ([TASR](https://www.teraz.sk/ekonomika/zverejnili-register-s-dostupnymi-inform/901170-clanok.html)). The count was not found (unverified, roughly 1,000).
- Auditors are in the SKAU/ÚDVA registers. The count was not found (unverified, several hundred).

**How they comply today**
- 92% of surveyed agencies say they have a programme. Most update it "when needed", for example when the law changes.
- In 86% of agencies, the AML officer also does other work.
- Only 61% (134) keep records of internal NOO reviews. Almost 23% do not vet their staff. Only one agency filed NOO reports in two years (20 reports) ([FSJ TPU-RS](https://www.minv.sk/swift_data/source/policia/fsj/kpo/TPU-RS.pdf)).
- For clients they do not meet in person, agencies use copies of ID documents, video calls, eID and some identity software. Only 26 agencies (12%) do such deals at all.
- The likely pattern: a programme bought once from a lawyer or copied from a template, client checks on paper or in Excel, and PEP and sanctions checks done by hand on EU lists (inferred from the FSJ survey).

## Competition

- **goAML (FSJ):** free state portal with a user manual ([FSJ PPPO](https://www.minv.sk/swift_data/source/policia/fsj/goaml/PPPO.pdf)). It covers registration and NOO filing at no cost. **A free state tool covers the registration step.**
- **FSJ guidance:**
  - The FSJ publishes a free "Usmernenie k obsahu programu vlastnej činnosti" (guidance on what the programme must contain, 12 Apr 2024).
  - It also publishes separate opinions for auditors, accountants and tax advisers, on beneficial owners and on client identification ([FSJ methodology page](https://www.minv.sk/?Metodicke-usmernenia-a-stanoviska-FSJ), [FSJ TPU-RS footnote 3](https://www.minv.sk/swift_data/source/policia/fsj/kpo/TPU-RS.pdf)).
  - There is no fill-in model programme.
- **AKMV law firm:** AML pack for real estate agencies from EUR 600, delivered within 2 weeks ([AKMV](https://www.akmv.sk/pravne-sluzby/aml-dokumentacia-pre-realitnu-kancelariu/)).
  - It includes an analysis, the programme, an NOO form, a client questionnaire, a training-record template and a 30-minute call.
  - No subscription or updates are mentioned. A general consultation costs EUR 130.
  - Other Slovak law firms offer similar AML programme drafting (unverified count).
- **FinStat:** AML service for obliged persons under contract, with EU PEP database checks via the portal or an API ([FinStat](https://finstat.sk/nase-clanky/analyzy/Nova-databaza-FinStat-Politicky-exponovane-osoby-v-instituciach-EU)). A sample contract appears in the public contracts register ([CRZ](https://www.crz.gov.sk//data/att/4639290.pdf)). Its price page returned 403 (unverified). It is the strongest local screening and data competitor. It does not produce a programme or a workflow (unverified).
- **International KYC vendors:** Sumsub has a Slovak page ([Sumsub](https://sumsub.com/sk/kyc-compliance/)). They sell identity, PEP and sanctions checks to fintech-scale buyers.
- **UK AML workflow tools** (AMLHUB, Amiqus, Credas, Wolters Kluwer CCH iFirm AML): built for UK rules, with no Slovak law or language ([G2 AMLHUB](https://www.g2.com/sellers/amlhub-ltd), [Amiqus](https://amiqus.co/uses/anti-money-laundering), [Wolters Kluwer](https://wolterskluwer.com/en/news/wolters-kluwer-launches-cloud-based-aml-module-cch-ifirm-uk)).
- **Chambers:**
  - SKDP posted a goAML deadline reminder on 8 Oct 2026, with practical answers for members. No template or tool appeared on its public page ([SKDP](https://www.skdp.sk)).
  - NARKS has an "AML" info link and an academy, but no AML tool or template was visible ([NARKS](https://www.narks.sk)). Member intranets were not checked.
- **Czech market:** no Czech subscription AML app for accountants or agencies turned up in search (search result only; not confirmed absent).
- **Slovak SaaS:** no Slovak AML workflow app for small agencies or accountants was found in this or earlier passes. KROS/Omega and other accounting software were not confirmed either way (unverified).

## Willingness to pay

**What buyers pay today**
- A one-off programme from a lawyer costs about EUR 600+ ([AKMV](https://www.akmv.sk/pravne-sluzby/aml-dokumentacia-pre-realitnu-kancelariu/)).
- An hour of legal consultation costs about EUR 130 ([AKMV](https://www.akmv.sk/pravne-sluzby/aml-dokumentacia-pre-realitnu-kancelariu/)).
- A part-time AML officer job was advertised at EUR 750 gross per month, but that was in crypto ([worki.sk](https://www.worki.sk/ponuka-prace/manimama-ou/2061359-aml-officer)).

**Staff time**
- A law firm said checking one client can take up to 14 hours. The explanatory memorandum to the 2019 amendment assumed 1.2 hours ([pravnenoviny 2019](https://pravnenoviny.sk/overit-jedneho-klienta-moze-trvat-aj-14-hodin/)). This is an old figure.
- The new multi-source beneficial-owner check adds time for every corporate client.

**Fines compared with risk**
- The legal ceiling is high (EUR 1m) and the typical fine is around EUR 10k ([epravo](https://www.epravo.sk/top/clanky/aml-a-pokuty-5453.html)). Single fines of EUR 50k for accountants have occurred ([FSJ PKC2026](https://www.minv.sk/swift_data/source/policia/fsj/kpo/PKC2026.pdf)).
- But the chance of an inspection is very low: about 10 on-site checks a year nationwide.

**Implication**
- Most small firms will pay once for a programme and little after that.
- A price of EUR 9–29 per month, or EUR 99–249 per year, for a tool that keeps programme, client checks and beneficial-owner evidence audit-ready is plausible for small firms (unverified).
- Accounting firms with many corporate clients feel the beneficial-owner workload most and are the better segment.

## Channels

- **NARKS and ZRKS (Združenie realitných kancelárií Slovenska).** The FSJ itself used them to distribute its AML questionnaire ([FSJ PKC2026](https://www.minv.sk/swift_data/source/policia/fsj/kpo/PKC2026.pdf)). NARKS runs an academy with accredited courses ([NARKS](https://www.narks.sk)). Webinars or co-branded member deals are possible.
- **SKDP (tax advisers).** It is actively telling members about goAML ([SKDP](https://www.skdp.sk)). Seminars and newsletter sponsorship are possible.
- **SKCU, SKAU/ÚDVA and accountant networks** (unverified as channels; not reached in this pass).
- **Content and search.** Podnikajte.sk, pravnenoviny.sk and epravo.sk already publish AML explainers ([podnikajte](https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/novela-zakona-o-ochrane-pred-legalizaciou-prijmov-z-trestnej-cinnosti-aml-zakon), [epravo](https://www.epravo.sk/top/clanky/aml-a-pokuty-5453.html)). Guest articles and SEO on terms like "program vlastnej činnosti vzor" and "goAML registrácia" are a cheap way in.
- **Partnerships.**
  - Accounting-software vendors (KROS/Omega, Money S3, Pohoda) could add an AML module (unverified interest).
  - Real-estate CRMs and listing portals could add a client-check step (unverified).
  - Law firms like AKMV could use the tool for the ongoing part after they sell the programme.

## Risks

- **Weak enforcement leads to low willingness to pay.** There are about 10 inspections a year and EUR 142k of fines in total ([FSJ PKC2026](https://www.minv.sk/swift_data/source/policia/fsj/kpo/PKC2026.pdf)). This is the main risk.
- **Most firms already "have" a programme.** 92% of agencies said so ([FSJ TPU-RS](https://www.minv.sk/swift_data/source/policia/fsj/kpo/TPU-RS.pdf)).
- **Free state material.** goAML and the FSJ guidance are free. The FSJ says it intends to target guidance and training at real estate agencies ([FSJ TPU-RS](https://www.minv.sk/swift_data/source/policia/fsj/kpo/TPU-RS.pdf)). A free FSJ model programme would hit the document side.
- **Tiny buyers.** Many agencies are one-person firms with very few deals, and sole-trader accountants are price-sensitive.
- **The deadline spike ends on 30 Nov 2026.** About 7 weeks remain, which is too short to build, launch and reach buyers.
- **Liability.** A generated programme that fails an inspection hurts trust. Drafting legal documents can also touch Slovak rules on legal services (unverified).
- **AMLR in 2027.** This is both an opportunity (rewrites) and a risk (rules change under the product). AMLA guidance may standardise templates EU-wide (unverified).
- **Data protection.** Storing ID copies and beneficial-owner evidence brings GDPR duties and the need to host in the EU.
- **Small market.** Slovakia has about 5.4m people. A ceiling of perhaps 3,000–6,000 paying firms at low prices is a modest business (unverified).

## First product

**Version 1: "AML desk" for Slovak small obliged persons (agencies, accountants, tax advisers)**
1. **Programme generator.** A guided questionnaire that writes a tailored Slovak §20 programme. It maps to the FSJ content guidance and has versioning and a change log for the next law change and the 2027 AMLR.
2. **Client file.** For each client: identification, purpose of the business, risk score, PEP and sanctions check, and the beneficial-owner check. The check pulls the business register, the public-sector partners register (RPVS) and the EU consolidated sanctions list, and keeps a dated record of every source used.
3. **NOO log.** An internal log of unusual-transaction reviews. The FSJ found 39% of agencies keep no such records. It includes a goAML filing checklist, but no filing integration in version 1.
4. **Training record and yearly review reminders.**
5. **Inspection export.** One-click "inspection pack" PDF with the programme, client list, risk ratings and logs. This matches the documents the FSJ requests in an inspection ([FSJ PKC2026](https://www.minv.sk/swift_data/source/policia/fsj/kpo/PKC2026.pdf)).

**First 30 days**
- **Week 1:** Read the FSJ programme guidance and its accountant and beneficial-owner opinions. Interview 10 agencies or accountants through NARKS, ZRKS or SKDP contacts. Test a price of EUR 15 per month.
- **Week 2:** Build the programme questionnaire and Slovak template, with a reviewing lawyer on a fixed fee.
- **Week 3:** Build the client file with a beneficial-owner evidence checklist, sanctions lookup against the EU list and the PDF export.
- **Week 4:** Publish a free "goAML + programme check" landing page and checklist to capture leads before 30 Nov. Pitch a webinar to NARKS or SKDP.

## Open questions

- How many bookkeeping licence holders, real estate agencies, tax advisers and auditors are there? The trade register open data and the SKDP and SKAU registers need checking.
- What do FinStat's AML plans cost, and do they include a workflow or programme module?
- Do KROS/Omega or other Slovak accounting suites plan an AML module?
- Do the NARKS, SKDP or SKCU member areas already hold free templates?
- How many firms will the FSJ inspect in 2026 per type? The plan names types but not counts.
- How will the FSJ treat firms that miss the 30 Nov goAML deadline? Will there be a grace period or a sweep?
- When will the Slovak AMLR changes take effect, and what is the AMLA template timetable?

## Sources

- https://pravnenoviny.sk/?p=20193
- https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/novela-zakona-o-ochrane-pred-legalizaciou-prijmov-z-trestnej-cinnosti-aml-zakon
- https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/smernica-proti-legalizacii-prijmov-trestna-cinnost
- https://www.minv.sk/swift_data/source/policia/fsj/kpo/PKC2026.pdf
- https://www.minv.sk/swift_data/source/policia/fsj/kpo/TPU-RS.pdf
- https://www.minv.sk/swift_data/source/policia/fsj/goaml/PPPO.pdf
- https://www.minv.sk/?Metodicke-usmernenia-a-stanoviska-FSJ
- https://www.epravo.sk/top/clanky/aml-a-pokuty-5453.html
- https://pravnenoviny.sk/overit-jedneho-klienta-moze-trvat-aj-14-hodin/
- https://www.akmv.sk/pravne-sluzby/aml-dokumentacia-pre-realitnu-kancelariu/
- https://www.akmv.sk/pravna-poradna/uctovnictvo-ako-zivnost/
- https://finstat.sk/nase-clanky/analyzy/Nova-databaza-FinStat-Politicky-exponovane-osoby-v-instituciach-EU
- https://www.crz.gov.sk//data/att/4639290.pdf
- https://sumsub.com/sk/kyc-compliance/
- https://www.g2.com/sellers/amlhub-ltd
- https://amiqus.co/uses/anti-money-laundering
- https://wolterskluwer.com/en/news/wolters-kluwer-launches-cloud-based-aml-module-cch-ifirm-uk
- https://www.skdp.sk
- https://www.narks.sk
- https://www.pss.sk/files/pdf/pressinfo/scany/2016/tlacova-sprava-narks.pdf
- https://www.teraz.sk/ekonomika/pocet-sukromnych-osob-podnikatelov/604772-clanok.html
- https://www.teraz.sk/ekonomika/zverejnili-register-s-dostupnymi-inform/901170-clanok.html
- https://www.worki.sk/ponuka-prace/manimama-ou/2061359-aml-officer
- https://www.springlex.eu/sv/packages/aml/amlr-regulation/article-18/
- https://eur-lex.europa.eu/eli/reg/2024/1624/oj (application date not re-checked)
