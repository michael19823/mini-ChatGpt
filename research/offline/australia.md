# Australia: offline-industries pass

Researched 2026-10-05. I ran 37 WebSearch calls. WebFetch was blocked, so everything here comes from search-result snippets. Anything not stated in a snippet is marked "unverified" or "estimate".

The existing report (`research/countries/australia.md`) already covers PLSL, the Vic plumbing certificates, waste tracking, funeral BDM, vet S8, pesticides, sheep/goat eID, grease-trap pump-out and labour hire. Those are not repeated here.

**Big picture:** Australia's quiet industries mostly report to **local councils** and **state police**, not to a single national body. Two patterns stood out:
- **Many receivers, done on paper:** quarterly AWTS service reports go to councils, mostly by email, post or fillable PDF.
- **A new police register:** in 2025–26, Queensland and South Australia passed scrap-metal laws that add registers and ID checks.

Most of the other quiet groups already have a free government portal or a specialist vendor:
- WaterNSW Drillers Portal
- the QBCC pool register
- NSW Police Weblink for pawnbrokers
- Tradehack for backflow testing
- the free LPA eNVD for livestock
- four or more nanny-payroll services

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| **AWTS / onsite wastewater service agents** | Quarterly service of every aerated wastewater treatment system (AWTS). A report goes to council after each service: "immediately" (Hornsby) or within 7 days (Wollondilly) | Brisbane takes reports "by email or by mail". Mansfield (Vic) uses a fillable PDF. SA found 16 report templates with 58 different questions and none in common. Online lodgement exists only in a few NSW councils (on-trac) | 250,000 onsite systems in NSW (Wingecarribee OSSM strategy) and >250,000 in Vic; 1.4M homes nationally with secondary treatment (ABC 2021, as summarised). AWTS share and number of agent firms unverified | **Candidate (strongest)** | Many receivers, per-job frequency and 2026 triggers (SA online lodgement planned for late 2026; SA state-wide pre-treatment platform business case) |
| **Scrap metal dealers (Qld, SA)** | Qld JOLA Bill 2026: record every scrap transaction, photo ID, provide electronic register copies to QPS at least monthly. SA Scrap Metal Dealers Act 2025: notify police, ID records, no cash; most of it commences in the second half of 2026-27 | Paper transaction registers are allowed under the current Qld Act (unverified detail). Councils lobbied for the law (LGAQ), not the dealers | Qld count asked in Question on Notice 256-2026; answer not seen. Unverified | **Weak candidate** | Real trigger, but ScrapIT (AU-built, from USD 115/mo), ScrapRight, ScrapWare and Scrapyardpro already sell compliance |
| Pawnbrokers / second-hand dealers | NSW: electronic records to NSW Police within 3 working days using approved software; WA reports to WA Police | Already electronic, with published NSW Police software spec | Unverified | Rejected | Mature approved-software ecosystem; pawn POS vendors already serve AU |
| Water bore drillers | Bore construction report within 60 days (NSW, Qld) or 28 days (Vic, G-MW) | Paper Form A still exists | ~low thousands of licensed drillers nationally (estimate) | Rejected | Free WaterNSW Drillers Portal. Per-driller volume is low and buyers are few |
| Backflow testers (plumbers) | Annual device test report to water authority or council | Mixed: Water Corp WA has online lodgement, others use forms | Unverified | Rejected, too competitive | Tradehack (AU) auto-sends AS 2845.3 reports to councils and authorities. Backflow Compliance Australia sells done-for-you |
| Household employers (nannies, carers) | PAYG, STP, super (Payday Super from 1 Jul 2026; SBSCH closed 1 Jul 2026), workers' comp | Families are not businesses and often don't know they're employers | Unverified | Rejected, too competitive | Pay The Nanny, NannyPay, Domestic Payroll and CarePayCo already sell exactly this |
| Beekeepers (NSW) | Registration plus varroa alcohol-wash reporting every 16 weeks via an online DPI form or phone (the regime is changing as varroa moves to management) | Phone line 1800 084 881 accepted | ~3,400 registered (2016 figure, outdated) | Rejected | Free government form, hobbyist-heavy, no money |
| Livestock movement (Qld waybills, NVDs) | NVD/waybill for every movement; NLIS transfers | Paper waybill books historically | Large | Rejected | Free LPA eNVD plus a Qld smart-form waybill. eID is covered in the country report |
| Pool safety inspectors (Qld) | Form 23 certificate / Form 26 non-conformity notice through the QBCC Portal | Single state portal | Unverified | Rejected | One receiver and one portal; no routing problem |
| Cooling-tower water-treatment contractors (NSW) | Monthly report (Approved Form 4), Legionella/HCC notification to council within 24h, annual audit certificate to council | Word-document approved forms | Unverified | Rejected | Monthly report is kept on file, not lodged. Contractors are mid-sized technical firms, not a quiet industry |
| Mobile food vendors / market stalls (NSW) | Food business notification and inspection with each council; temporary-event form for each event | Council-specific PDF forms (Central Coast, Parramatta, Bayside) | Unverified | Rejected | NSW 2025 reform adds mutual recognition across councils. Vic already has the free Streatrader |
| Firearms dealers (WA) | Firearms Act 2024 (commenced 31 Mar 2025): records and nominated persons via the WA Police Firearms Portal | Paper forms (Form 22) | Small (unverified) | Rejected | Small market, one police portal, sensitive product category |
| Cemetery operators (NSW) | Interment Industry Scheme licence, 4 categories | Many operators are volunteer trusts and councils | Many tiny operators (≤9 interments/yr pay no fee) | Rejected | No money; buyers are councils and volunteers |

## 2. Opportunities

### Opportunity: AWTS service-report router ("service once, lodge with every council")

**Industry:**
Onsite wastewater: service agents for aerated wastewater treatment systems (AWTS), sand filters and septic systems in unsewered peri-urban and rural areas.

**Buyer:**
Owner-operator of a small AWTS servicing business (1–10 technicians), often a plumber or an agent accredited by the AWTS manufacturer. In larger firms, the office manager who chases council paperwork.

**Trigger / Why now:**
- **SA:** a standardised AWTS service report template (v2, Aug 2024) has been released. The LGA-SA-backed project, run by City of Onkaparinga with Healthy Environs, plans online lodgement "by late 2026". A parallel LGA SA business case covers a state-wide platform for septic tank and grease arrestor (CWMS pre-treatment device) compliance, with AWTS "a natural extension".
- **NSW:** councils in the Sydney drinking-water catchment (Wollondilly, Cessnock and others) have moved to the WaterNSW/CIBIS **on-trac** platform. It accepts reports through an app, CSV or API.
- **Elsewhere:** most councils still take email, post or PDF.

Agents now face two or three receiving formats at once.

**Current workflow:**
1. The technician visits each AWTS quarterly. They check the aerator, alarm, chlorine, sludge and irrigation, then fill a paper or tablet checklist (the manufacturer's or their own template).
2. The office types or scans the report. It emails or posts it to the council for that property (Brisbane: email or "Locked Bag 1 Fairfield Gardens"). For on-trac councils it lodges in on-trac within 7 days. It also sends a copy to the owner.
3. Each council has its own required fields. SA counted 16 templates and 58 distinct questions.
4. Councils chase missing reports ("Council will contact property owners and service agents if a service report has not been received", Brisbane). Agents also chase owners for overdue services, because the contract is with the owner.

**Pain:**
- The volume is per job and recurring: each AWTS creates 4 reports a year.
- The fragmentation is documented: 16 templates and 58 questions in SA alone, plus a separate receiving channel for each council.
- Councils run compliance follow-ups on missing reports.
- Larger agents built their own tablet apps that email reports to client and council (AWTS Sales & Service). That shows the job is worth automating, and that small agents without such an app do it by hand.
- No operator complaints were found online, which is expected for a quiet industry. Pain intensity is unverified.

**Existing solutions:**
- **on-trac** (CIBIS International / WaterNSW): a free or council-funded lodgement platform, but only in participating NSW councils.
- The future **SA state platform**, vendor not yet chosen.
- Generic field-service apps: ServiceM8 and Simpro handle recurring scheduling and custom forms, but not council-specific lodgement.
- US septic software (ServiceCore and others): no Australian council lodgement.
- In-house apps at large agents and manufacturers.
- Paper carbon-copy service books, email and post.

**Offline evidence:**
- Brisbane accepts only email or mail.
- Councils publish fillable PDFs (Mansfield "report AWTS v2 fillable").
- Councils publish PDF lists of "suitably qualified service agents" (Ballina, Albury).
- No Capterra/G2 listing for an AWTS-specific product was found.
- The SA project had to compile templates by hand from industry.

**Offline channel:**
1. Council-published approved or qualified service-agent lists (Ballina, Albury and others): phone each agent directly.
2. AWTS manufacturers with accredited service networks (NSW Health-accredited AWTS makers; names not individually verified here).
3. The Onkaparinga/Healthy Environs project team and LGA SA, who are actively looking for "platform solutions" and are road-testing with service agents.
4. Council environmental health officers, who already chase agents and would point them to anything that improves report quality.

**Market count:**
- Systems: 250,000 onsite systems in NSW (OSSM strategy, reviewed 2022) and >250,000 in Vic (search summary).
- Nationally: 1.4M homes on secondary treatment (ABC 2021, via search summary). This includes non-AWTS secondary systems.
- Service-agent businesses: **estimate 500–1,500 nationally** (unverified). Council lists can be compiled to count them.
- Report volume: if even 200,000 AWTS are serviced quarterly, that is ~800,000 council reports a year (estimate).

**The gap:**
No tool takes **one** service record and produces each council's required output: on-trac CSV/API, the SA template and future platform, and council-specific PDF/email. It would also track which reports each council has acknowledged, and chase owners for overdue quarterly services. ServiceM8 forms cover capture but not routing. on-trac covers routing but only for its own councils.

**Possible product:**
A mobile service checklist (or a ServiceM8/Simpro add-on) that stores the property's council and system model. After each service it generates the council-specific report, pushes it to on-trac by CSV/API, emails or uploads it elsewhere, and sends the owner copy. It also runs a "due this quarter / lodged / acknowledged" board per council.

**MVP:**
1. Pick one region with mixed receivers, for example the Sydney catchment councils (on-trac) plus neighbouring email councils, or Brisbane/Moreton Bay.
2. Build a web form on the SA standard template's fields, a council lookup by address, PDF and email output, an on-trac CSV export, and a quarterly due-list with SMS owner reminders.
3. Leave out integrations with field-service apps in v1.

**Pricing hypothesis:**
AUD 2–3 per lodged report, or AUD 79–199/month per business by technician count (estimate). A mid-size agent doing ~3,000 reports a year would pay roughly AUD 6–9k a year. Expect buyers to pay for software if it saves office time. Very small agents may prefer to keep a carbon book, so a done-for-you "we lodge for you" tier at a higher per-report price is plausible.

**How to find first customers:**
Compile council agent lists for 20 high-AWTS councils (NSW South Coast, Hunter, Sydney catchment, SEQ, Adelaide Hills/Onkaparinga). Phone the owners. In parallel, offer to pilot the SA template digitally with the Onkaparinga/Healthy Environs project.

**Risks:**
- The SA state platform (and any NSW on-trac expansion) may become a free, state-mandated single receiver. That would remove the routing value in that state.
- Manufacturers may give their networks a free app.
- Agents may resist paying for something they view as a council's job.
- Some councils may refuse third-party submissions. on-trac CSV/API access for a third-party vendor is unverified.
- A **non-local founder** can build it, but selling to tradie owner-operators by phone and to councils needs an Australian presence or partner.

**Kill condition:**
Any of these kills it:
- Interviews with 10 agents show most already use a manufacturer app or ServiceM8 forms that email council, and spend <1 hour a week on lodgement.
- SA picks on-trac (or another free platform) state-wide, and NSW expands it to most councils within 12 months.

**Score:** 6/10. Pain 5, Frequency 9, Mandatory 9, Fragmentation 8, Competition/incumbent gap 6, Buyer accessibility 7, WTP 5, MVP 8, Distribution 6, Founder access 5 (needs a local or a partner).

**Sources:**
- Wollondilly electronic lodgement fact sheet: https://www.wollondilly.nsw.gov.au/assets/Documents-NEW/Resident-Services/Water-Management/Fact-Sheet-Electronic-Wastewater-Service-Report-Lodgement.pdf
- Cessnock On-site Wastewater (on-trac): https://www.cessnock.nsw.gov.au/Plan-and-build/On-site-Wastewater
- Onkaparinga project update, June 2025: https://yoursay.onkaparinga.sa.gov.au/sustainable-onsite-wastewater-system-management
- LGA SA project page: https://www.lga.sa.gov.au/members/services/research-and-publications/library/2023/building-regulatory-efficiencies-for-sustainable-onsite-wastewater-system-management
- Brisbane on-site sewage facilities: https://brisbane.qld.gov.au/planning-building/do-i-need-approval/residential-projects/plumbing-drainage/site-sewerage-facilities
- Mansfield AWTS fillable report: https://www.mansfield.vic.gov.au/files/assets/public/documents/community-safety/report-awts-v2-fillable.pdf
- Hornsby AWTS FAQ: https://www.hornsby.nsw.gov.au/property/myproperty/developing-my-property/onsite-sewage-management-systems/frequently-asked-questions/content/i-have-an-aerated-wastewater-treatment-system-which-is-inspected-by-a-service-technician-every-quarter.-will-i-still-be-inspected
- Ballina qualified service agents list: https://www.ballina.nsw.gov.au/files/assets/public/v/1/residents/documents/ossm-program-list-of-suitably-qualified-service-agents.pdf
- Albury authorised AWTS servicing agents: https://www.alburycity.nsw.gov.au/environment/public-health/on-site-sewage-management-systems/authorised-awts-servicing-agents
- Wingecarribee OSSM strategy (250,000 NSW households): https://www.wsc.nsw.gov.au/files/assets/public/v/1/services/water-and-sewer/on-site-sewage-management/ossm-strategy-adopted-2000-reviewed-august-2022.pdf
- ABC 2021 (1.4M homes): https://www.abc.net.au/news/2021-01-16/sewage-system-technology-wastewater-system-upgrade/13008286
- Agent in-house app: https://www.awtssalesandservice.com.au/awts-servicing-and-maintenance
- Victoria EPA onsite wastewater guidance: https://www.epa.vic.gov.au/sites/default/files/epa/publications/onsite-wastewater-management-pdf.pdf

---

### Opportunity: Scrap-metal register and police-export kit for small Qld and SA dealers

**Industry:**
Scrap metal dealers and recyclers, especially small yards, rural dealers and mobile collectors that buy over the counter.

**Buyer:**
Owner of a small scrap yard or second-hand dealer that trades scrap and uses a generic weighbridge or POS system, or paper.

**Trigger / Why now:**
- **Qld:** the Justice and Other Legislation Amendment Bill 2026 (introduced 4 Mar 2026; Moreton Bay Council reported "new laws" as won; passage and commencement date unverified) has these requirements:
  - every scrap transaction recorded in a transaction register regardless of value;
  - photo-ID verification;
  - electronic copies of the register to QPS at least monthly;
  - penalties up to 400 penalty units.
- **SA:** the Scrap Metal Dealers Act 2025 adds police notification, ID and payment records, and a cash, cheque and crypto ban. Most of the scheme commences in the second half of 2026-27, per the SAPOL regulatory impact statement.

**Current workflow:**
1. The seller arrives and the metal is weighed.
2. The dealer copies the ID by hand or photocopies it.
3. The dealer writes the transaction in a register book or weighbridge software.
4. The dealer pays by EFT, since cash is now banned in NSW, Vic and SA.
5. From commencement, a monthly electronic register goes to QPS.

**Pain:**
- New monthly police export, photo-ID capture, and higher penalties.
- Councils (LGAQ) pushed the law over copper theft from council assets, so enforcement interest is high.
- Dealer-side complaints were not found (unverified).

**Existing solutions:**
- ScrapIT: AU-built and "compliant with Australian tax and scrap laws", from USD 115/month.
- ScrapRight, ScrapWare, Scrapyardpro, BuyScrap software.
- Weighbridge software (WinWeigh).
- ID scanners.
- Paper register books.

**Offline evidence:**
- Under the current law the register may be kept in a book (unverified for Qld).
- Lobbying came from councils, not operators.
- Most small yards' web presence is a price page.

**Offline channel:**
- The Australian Council of Recycling and other state recycler associations (unverified as channels).
- Weighbridge installers and service firms (for example NWI Weighbridges, which sells WinWeigh).
- The QPS and OLGR licensee list, if obtainable (unverified).

**Market count:**
Unverified. The Qld count was asked in Question on Notice 256-2026; the answer was not seen.

**The gap:**
Only a narrow gap: a low-cost add-on that gives generic weighbridge or paper users the photo-ID capture, a no-cash payment record and the QPS monthly export, without moving to full yard software.

**Possible product:**
A tablet app that captures seller ID and a photo of the load, logs the weight entered or imported from weighbridge CSV, and generates the monthly QPS and SAPOL register exports.

**MVP:**
A tablet web app with ID photo, transaction form, monthly CSV/PDF export in the regulator's format (format not yet published, unverified) and EFT reference capture.

**Pricing hypothesis:**
AUD 49–99/month, undercutting ScrapIT.

**How to find first customers:**
Qld Fair Trading licensee search, weighbridge installers, and recycler associations.

**Risks:**
- ScrapIT and similar tools already cover the full need at a modest price.
- QPS may supply its own upload template or portal.
- The number of small dealers may be only a few hundred.

**Kill condition:**
Any of these kills it:
- QPS publishes a free web form or spreadsheet that small dealers can fill in directly.
- Qld and SA together have fewer than ~300 licensed scrap dealers.
- ScrapIT or a weighbridge vendor ships the QPS export before commencement.

**Score:** 4/10. Mandatory 9 and a real trigger, but Competition 3, Market size 3, Distribution 4. A non-local founder could sell it by phone to a known list, but the AU vendor is ahead.

**Sources:**
- Qld JOLA Bill 2026 committee briefing paper: https://documents.parliament.qld.gov.au/com/JICSC-CD82/JOLAB2026-60DA/DoJ_Committee%20Briefing%20Paper%20-%20Justice%20and%20Other%20Legislation%20Amendment%20Bill%202026.pdf
- Qld JOLA Bill 2026 response to submissions: https://documents.parliament.qld.gov.au/com/JICSC-CD82/JOLAB2026-60DA/Response%20to%20Submissions_Justice%20and%20Other%20Legislation%20Amendment%20Bill%202026.pdf
- Moreton Bay media release: https://www.moretonbay.qld.gov.au/News/Media/New-laws-to-stamp-out-copper-theft-a-major-win-for-Council
- SA Scrap Metal Dealers Act 2025: https://www.legislation.sa.gov.au/_legislation-documents/lz/c/a/scrap-metal-dealers-act-2025/current/2025.71.auth.pdf
- SAPOL regulatory impact statement: https://www.dpc.sa.gov.au/__data/assets/pdf_file/0005/1231709/RIS-SAPOL-scrap-metal-industry.pdf
- Consumer Affairs Victoria scrap metal laws: https://www.consumer.vic.gov.au/licensing-and-registration/second-hand-dealers-and-pawnbrokers/scrap-metal-laws
- ScrapIT features: https://www.scrapitsoftware.com/software
- ScrapIT on Capterra: https://www.capterra.com/p/10027116/ScrapIT/

## 3. Rejected

- **Pawnbrokers / second-hand dealers:** NSW Police Weblink with a published dealer software specification and approved record-keeping software. A mature ecosystem.
- **Bore drillers:** the free WaterNSW Drillers Portal; 28–60-day deadlines; few buyers.
- **Backflow testers:** Tradehack already auto-sends reports to councils and authorities; Water Corp WA has its own lodgement.
- **Household employers:** Pay The Nanny, NannyPay, Domestic Payroll and CarePayCo. Payday Super and the SBSCH closure were absorbed by these services and payroll apps.
- **Beekeepers:** a free DPI form or phone line, a hobbyist-heavy base, and a changing varroa regime.
- **Livestock waybills / NVDs:** the free LPA eNVD and the Qld smart-form waybill.
- **Pool safety inspectors:** a single QBCC Portal.
- **Cooling towers:** the monthly report is kept, not lodged; a non-quiet contractor base.
- **Mobile food vendors:** the NSW mutual-recognition reform (2025) and Vic Streatrader shrink the fragmentation.
- **WA firearms dealers:** a small market and a single police portal.
- **NSW cemetery operators:** volunteer and council operators with no budget.
- **Tattoo, driving instructors, halal, taxis:** not screened in depth. Licensing is one-off or one regulator, or the work is already handled by platforms.

## 4. Method notes

**What worked:**
- Council fact-sheet queries ("service report must be provided to Council", "authorised servicing agents") exposed the AWTS many-receivers pattern quickly. Council PDFs are the best evidence source in Australia.
- Parliamentary committee documents (Qld JOLA Bill 2026) gave the scrap-metal trigger with exact obligations.

**What didn't work:**
- Market counts. Neither licensing registers nor state statistics surfaced numbers for scrap dealers or AWTS agents through search snippets. Counts need direct register pulls.
- Vendor-name queries for niche AU tools returned US septic-software listicles.
- Several "quiet" groups (drillers, pool inspectors, livestock) turned out to have free state portals already. In Australia the substitute is usually a **free government portal**, not paper.

Research model: Opus
