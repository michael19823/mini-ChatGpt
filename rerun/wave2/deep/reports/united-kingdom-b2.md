# Scottish visitor levy returns assistant (UK, C02)

## Re-assessment (owner's criteria)

**Verdict: maybe. New score: 5/10 (old score: 4/10).**

**The case.** The free platform visitorlevy.scot is a manual entry form. Each quarter it asks for monthly money figures for each premises, and it does not import booking data ([Edinburgh guide v2.1, Sep 2026, p.14](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers); [VisitScotland FAQ 7.3](https://support.visitscotland.org/binaries/content/assets/bsh/2025/10/visitor-levy-faqs.pdf)). A small tool that turns Airbnb, Booking.com and direct-booking exports into those figures, and keeps the 5-year evidence file, fills a real gap. No incumbent does the whole job. The tool is easy to build, because most councils are expected to use the same national platform and return. The ceiling is the problem. The Scottish market is a few thousand small hosts plus a few dozen letting managers, and each saves only an hour or two per quarter. Realistic year-3 revenue is about £40k-£100k, unless England's levy (from about 2028-29) opens a larger market.

### Room for improvement over the portal or current practice

- **No data import.** The platform registers premises, takes quarterly returns and shows the levy due. "System prompts" ask for cap and start-date figures. Nothing describes CSV upload, OTA links or an API ([VisitScotland FAQ 7.3](https://support.visitscotland.org/binaries/content/assets/bsh/2025/10/visitor-levy-faqs.pdf)). The site's help pages could not be read, so bulk upload is still unconfirmed (unverified).
- **The return is detailed.** Each quarter, for every month, the host enters three figures: accommodation-only revenue, revenue booked before 1 Oct 2025, and revenue beyond night 5. On request, the council can also ask for five monthly counts: availability, occupied nights, nights booked before 1 Oct 2025, bookings over 5 nights and nights beyond the 5th ([Edinburgh guide v2.1, p.14](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers)). A host using two or three channels has to rebuild this by hand.
- **No safe calculator.** The council says the platform calculator and OTA calculations are not endorsed and are used "at the user's own risk" ([Edinburgh guide v2.1, pp.3, 13](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers)). A tool that shows each booking's working fills that gap.
- **Record-keeping.** Section 28 requires records of each stay, transaction and payment for 5 years. There are penalties for failing to keep records (s.54) and for inaccurate information (s.59). The council can also inspect premises (s.38) and make its own assessment (s.45) ([Act contents](https://www.legislation.gov.uk/asp/2024/8/contents)). The portal stores returns, not the evidence behind them. An evidence pack per return is a clear gap.
- **Multi-property and multi-council work.** A host with property in several councils must deal with each council separately ([VisitScotland FAQ 1.4](https://support.visitscotland.org/binaries/content/assets/bsh/2025/10/visitor-levy-faqs.pdf)). Section 9 allows third-party arrangements, but a third party can file only with council consent (s.9 title confirmed at [Act contents](https://www.legislation.gov.uk/asp/2024/8/contents); consent detail unverified). No agent or accountant login on the portal was found (unverified). Letting managers who file for dozens of owners need a per-owner workspace.
- **Evidence of pain.** Operators report that booking systems cannot handle the levy. Staff spend about 8 minutes correcting each bill by hand ([Caterer Licensee, Aug 2026](https://catererlicensee.com/sta-urges-councils-to-learn-from-edinburgh-visitor-levy-problems-as-businesses-face-mounting-costs/); [MCA Insight](https://www.mca-insight.com/legislation/scottish-tourism-alliance-warns-of-mounting-costs-from-edinburgh-visitor-levy/722927.article)). A Bookster podcast names accurate calculation with complex pricing, and unclear remittance guidance, as host problems ([Bookster podcast](https://www.booksterhq.com/podcast/158982-the-visitor-levy)). In Parliament, the Minister accepted that some non-compliance may come from providers "still becoming accustomed to the new system" ([SJHLG Committee report, Sep 2026, para 23](https://www.parliament.scot/chamber-and-committees/committees/committee-reports/sjhlg/2026/9/14/sjhlgs072026r1/pdf)). No late-filing data exists yet, because the first returns close on 30 Oct 2026 ([same report](https://www.parliament.scot/chamber-and-committees/committees/committee-reports/sjhlg/2026/9/14/sjhlgs072026r1/pdf)).
- **Deadlines.** There are two dates per quarter: a return window of 30 days and a payment date about 2 weeks later ([Edinburgh guide v2.1, p.13](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers)). Reminders are an easy add-on.

### Competitor reality check

- **visitorlevy.scot (free).** Handles filing and payment only. It does not prepare the figures or keep evidence (see above).
- **Bookster.** It adds a levy uplift to bookings. As of its last post, a report for the council return was still something it "plans to review" before October 2026 ([Bookster](https://www.booksterhq.com/news/159016-visitor-levy)). Directory listings give £25/month for up to 3 rentals on Solo and £44/month on Pro ([Capterra UK](https://www.capterra.co.uk/reviews/151130/bookster); unverified on Bookster's own site). That is fair value for a full booking system, but it only helps hosts who move their bookings into Bookster.
- **freeonlinebooking.** It has two levy reports a host can email to the council, plus night caps and refunds ([freeonlinebooking blog](https://www.freeonlinebooking.com/en/Blog/scottish-visitor-levies.aspx)). The PMS price is not stated. Whether its reports match the portal's monthly fields is unverified.
- **Hop Software.** Has a Visitor Levy finance report from night audit ([Hop help](https://help.hopsoftware.com/support/solutions/articles/43000782980-edinburgh-visitor-levy)). It is a hotel PMS, not a tool for single-unit hosts.
- **freetobook, Roommaster.** Guidance and guest-facing levy display. No return report was found ([freetobook](https://en.freetobook.com/blog/scottish-visitor-levy-tax/); [Roommaster](https://www.roommaster.com/hotel-tax/edinburgh)).
- **Eviivo, Little Hotelier, Lodgify, Guesty.** Searches found no Scottish levy feature (unverified).
- **Airbnb, Booking.com.** Hosts must collect and remit the levy themselves ([Airbnb help 4105](https://www.airbnb.com/help/article/4105)).
- **Letting managers.** Houst charges about 14% of nightly income for full management in Edinburgh ([Houst](https://www.houst.com/blog/edinburgh-airbnb-host-guide)). A search snippet said Houst collects and remits the levy for owners, but the page did not confirm it (unverified). Managers are a buyer for a multi-owner tool, not a competitor to it.
- **Accountants.** No priced levy-return service was found (unverified).
- **Bottom line.** The incumbents are partial. Each one works only inside its own booking system. None takes exports from several channels, produces the portal's monthly fields per premises, and keeps an evidence pack. This is an opening, not a killer.

### Price per customer

- **Value anchors.**
  - **Retention.** The 2% retention on a £30,000-a-year unit is about £30 a year (assumption; [Edinburgh guide v2.1](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers)).
  - **Late-return penalty.** The first penalty is about £108-£398 for residential premises. Late payment adds 10% of the levy ([penalty framework v1](https://www.edinburgh.gov.uk/downloads/file/40690/visitor-levy-penalty-framework-v1)).
  - **Time.** About 1-3 hours a quarter for a small host (estimate). An accountant would likely charge £50-£150 per quarterly return (unverified; no published fee found).
  - **Software spend.** Hosts already pay about £25-£44 a month for a booking system ([Capterra UK](https://www.capterra.co.uk/reviews/151130/bookster); unverified).
- **Suggested prices.**
  - **Single host:** £6-£8 per property per month, or £25 per return. That is about £70-£100 a year.
  - **Letting managers and accountants:** £2-£3 per property per month, with a £30 monthly minimum.

### Revenue estimate (year 3, 2029)

- **Buyers.** Edinburgh has 3,209 short-term let licences ([gov.scot STL statistics](https://www.gov.scot/publications/short-term-lets-licensing-statistics-scotland-to-31-december-2025/pages/licences-in-operation-local-areas/)) and about 200 guest houses and B&Bs ([Lichfields](https://lichfields.uk/blog/2022/september/15/tourist-accommodation-in-edinburgh-more-not-less-is-needed)). Glasgow (Jan 2027), Aberdeen, Stirling and West Dunbartonshire join in 2027 ([Glasgow](https://www.glasgow.gov.uk/article/14799/Glasgow-s-Visitor-Levy); [West Dunbartonshire](https://www.west-dunbarton.gov.uk/business/visitor-levy/)). That gives an estimated 5,000-7,000 small liable persons by 2029 (estimate, unverified), plus about 30-60 letting managers (estimate).
- **Base case.**
  - Hosts: 6,000 × 5% = 300 × £80 = £24,000.
  - Managers: 25 × 60 properties × £30 a year = £45,000.
  - Total: about **£69,000 a year**.
- **Low case.**
  - Hosts: 5,000 × 3% = 150 × £70 = £10,500.
  - Managers: 10 × 40 × £24 = £9,600.
  - Total: about **£20,000 a year**.
- **High case.** Scotland plus an early English launch (unverified timing). Scotland gives about £100,000. Each English mayoral area that adopts a percentage levy adds more ([ICAEW, Sep 2026](https://www.icaew.com/insights/tax-news/2026/sep-2026/government-confirms-new-tourist-levy); [Irish News](https://www.irishnews.com/news/uk/holidaymakers-face-tourism-tax-with-new-powers-for-mayors-across-england-WQ6JGNUL7FM6PLUG4EIEHUENA4/)).

### Ease of implementation and sale

- **Build: high.** The product is CSV parsers for Airbnb, Booking.com and Vrbo, a rules engine (rate, 5-night cap, pre-1-Oct-2025 exemption, check-out quarter, extras), and output matched to one national form. Most councils are expected to use visitorlevy.scot, which keeps returns standard ([VisitScotland FAQ 7.3-7.5](https://support.visitscotland.org/binaries/content/assets/bsh/2025/10/visitor-levy-faqs.pdf)). An MVP is about 4-6 weeks of work (estimate).
- **Onboarding: high.** The host uploads files and gets figures to copy into the portal. There is no integration to sign off.
- **Sale: medium.** The demand is seasonal, peaking at each quarter's filing window. It sells through ASSC, the Edinburgh Guest House Association, ICAS accountants and letting managers ([ICAS](https://icas.com/news-insights-events/news/tax/visitor-levy-what-accommodation-providers-need-to-know/)). Councils will not endorse a tool ([Edinburgh guide v2.1](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers)).

### Remaining risks

- **Flat rates.** Section 6A now lets councils set a fixed amount per night ([Act contents](https://www.legislation.gov.uk/asp/2024/8/contents); [Scottish Business News](https://scottishbusinessnews.net/scottish-councils-given-power-to-charge-flat-fee-tourist-tax/)). Under a flat rate the sum becomes simple and most of the value goes. England's levy is planned as a percentage, which helps ([Irish News](https://www.irishnews.com/news/uk/holidaymakers-face-tourism-tax-with-new-powers-for-mayors-across-england-WQ6JGNUL7FM6PLUG4EIEHUENA4/)).
- **Platform upgrades.** The Improvement Service could add CSV upload (unverified plans).
- **Competitors catch up.** PMS vendors, Bookster for one, could ship reports that match the return.
- **OTA collection.** Airbnb or Booking.com could sign collection agreements with councils.
- **Low value per customer.** Each customer is worth well under £100 a year, so acquisition has to be cheap.
- **Liability.** The tool must leave submission to the user and state clearly what it does not cover.

### Sources (new in this re-assessment)

- https://support.visitscotland.org/binaries/content/assets/bsh/2025/10/visitor-levy-faqs.pdf
- https://www.parliament.scot/chamber-and-committees/committees/committee-reports/sjhlg/2026/9/14/sjhlgs072026r1/pdf
- https://www.legislation.gov.uk/asp/2024/8/contents
- https://www.mca-insight.com/legislation/scottish-tourism-alliance-warns-of-mounting-costs-from-edinburgh-visitor-levy/722927.article
- https://www.booksterhq.com/podcast/158982-the-visitor-levy
- https://www.capterra.co.uk/reviews/151130/bookster
- https://www.houst.com/blog/edinburgh-airbnb-host-guide
- https://www.irishnews.com/news/uk/holidaymakers-face-tourism-tax-with-new-powers-for-mayors-across-england-WQ6JGNUL7FM6PLUG4EIEHUENA4/
- https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers (re-read: v2.1, Sep 2026, return fields p.14)

## Summary

**Verdict: maybe. Score: 4/10.**

The duty is real and live. Under the Visitor Levy (Scotland) Act 2024, Edinburgh started charging its levy on 24 July 2026. The first quarterly returns are due 1-30 October 2026 on the free national platform visitorlevy.scot. The return is more involved than earlier checks assumed. Edinburgh asks for **monthly** figures for each premises: accommodation-only revenue, revenue from bookings made before 1 Oct 2025, revenue from nights beyond the 5-night cap, available units, occupied nights and long-stay counts. Small hosts who sell through Airbnb, Booking.com and direct channels have to rebuild these figures from several exports, so there is a real gap for a tool that turns those exports into the return.

The case is held back by four things. The near-term market is small: about 3,200 Edinburgh short-let licences plus a few hundred guest houses and B&Bs, with Glasgow, Aberdeen, Stirling and West Dunbartonshire joining in 2027. Willingness to pay is low, because hosts keep only 2% of the levy. Booking and PMS systems are adding levy reports. The sector is lobbying for flat per-night rates, which the 2026 amendment now allows and which would make the sum trivial.

The upside option is England, where the government has confirmed that mayoral authorities may bring in a percentage-based levy (unverified detail). A Scotland tool could be the beachhead for that larger market.

## Duty

- **Legal basis.** Visitor Levy (Scotland) Act 2024 (asp 8). Part 4, Chapter 2 sets the duty to make returns. Under s.26, the liable person must make a return within 30 days of the end of each period, which is quarterly by default. If the provider has more than one set of premises, the return must assess the levy for each one ([s.26](https://www.legislation.gov.uk/asp/2024/8/section/26); [Part 4 Ch 2](https://www.legislation.gov.uk/asp/2024/8/part/4/chapter/2)). Under s.27, the council sets the form and the manner of the return, and payment is due with the return ([Part 4 Ch 2](https://www.legislation.gov.uk/asp/2024/8/part/4/chapter/2)). Under s.28, records must be kept for 5 years ([Edinburgh guide v2.1](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers)).
- **2026 amendment.** The Visitor Levy (Amendment) (Scotland) Act 2026 came into effect in July 2026. It says the levy is charged on the "initial transaction", which matters for OTA, commission and wholesaler deals ([Edinburgh guide v2.1](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers)). It also lets councils charge a fixed sum per night instead of a percentage. The bill passed on 24 March 2026 ([Scottish Business News](https://scottishbusinessnews.net/scottish-councils-given-power-to-charge-flat-fee-tourist-tax/)).
- **Who is liable.** All paid overnight accommodation is liable, even below the VAT threshold. That covers hotels, hostels, guest houses, B&Bs, self-catering and short-term lets, and campsites ([Edinburgh guide v2.1](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers)). The provider stays liable for OTA bookings. Airbnb tells Edinburgh hosts they must collect and remit the levy themselves ([Airbnb help 4105](https://www.airbnb.com/help/article/4105)).
- **Edinburgh rules** ([Edinburgh guide v2.1](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers)):
  - **Rate and cap.** The levy is 5% of the accommodation-only charge, net of VAT. Meals, parking, laundry, entertainment and transport are excluded. Cleaning is included unless guests can opt out of it. Only the first 5 consecutive nights of each chargeable transaction are charged, at their actual value.
  - **Transition.** Stays from 24 July 2026 are covered. Bookings paid in part or in full before 1 Oct 2025 are exempt if they meet strict tests: specific dates, a room count, a stated price, and a non-refundable payment.
  - **Cancellations and refunds.** The levy is due only when the guest takes entry, so no-shows are excluded. A refund after the stay does not remove the levy.
  - **Split periods.** A stay that spans two quarters goes in the quarter of check-out.
  - **Retention.** Providers keep 2%, which the platform calculates.
- **Timetable (Edinburgh).** Returns for 24 Jul-30 Sep 2026 are filed 1-30 Oct 2026, with payment by 13 Nov 2026. Later quarters follow the same pattern: Jan, Apr, Jul and Oct 2027 ([Edinburgh guide v2.1](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers)).
- **What the return asks for (Edinburgh)** ([Edinburgh guide v2.1](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers)):
  - **Each quarter:** availability (full, part or none), with a reason if part.
  - **Each month of the quarter:**
    - accommodation-only revenue;
    - revenue from bookings made before 1 Oct 2025;
    - revenue from nights beyond the 5-night cap.
  - **On request from the enforcement team:** total availability, occupied nights, nights booked before 1 Oct 2025, the number of bookings over 5 nights, and nights beyond the 5th.
  - **Optional:** uploaded supporting documents.
  - **Evidence:** providers must be able to show their calculations if asked.
- **Penalties (Edinburgh).** The Penalty Framework was approved on 26 May 2026 ([Edinburgh guide v2.1](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers)). Figures from the framework document ([penalty framework v1](https://www.edinburgh.gov.uk/downloads/file/40690/visitor-levy-penalty-framework-v1)); the table layout is hard to read, so stage-by-stage details need checking against the PDF:
  - **Late return, residential premises:** first penalty of 10% of annual council tax, about £108-£398.
  - **Late return, non-residential premises:** first penalty of 1% of rateable value, about £81-£9,870.
  - **Late payment:** 10% of the levy due, rising to 70% cumulative by 11 months.
  - **Failure to keep records:** a separate penalty.
  - **Obstruction:** a £200 daily default penalty.

  The "£100 plus 5%" figure from an older law-firm note ([DWF 2025](https://dwfgroup.com/en/news-and-insights/insights/2025/3/the-visitor-levy-is-travelling-across-scotland)) is superseded. The council says enforcement will be "reasonable and proportionate".
- **Enforcement so far.** None yet. The first return deadline is 30 Oct 2026, so no fines or inspections exist yet (unverified: no reports found).
- **Other councils:**
  - **Glasgow:** 5% from 25 Jan 2027 ([Glasgow City Council](https://www.glasgow.gov.uk/article/14799/Glasgow-s-Visitor-Levy)). Admin retention reported as 1.5% (unverified).
  - **Aberdeen:** 7%, from 1 April 2027 at the earliest ([Aberdeen committee report](https://committees.aberdeencity.gov.uk/documents/s171570/TVL%20Report%20060825.pdf?txtonly=1); [AGCC](https://www.agcc.co.uk/news-article/aberdeen-to-introduce-7-visitor-levy)). Final approval not confirmed.
  - **Stirling:** agreed on 11 Dec 2025, at a reported 3% from 14 June 2027 ([Stirling Council](https://www.stirling.gov.uk/visitorlevy)). The 3% rate is unverified on a primary page.
  - **West Dunbartonshire:** 5%, for stays from 1 July 2027 ([West Dunbartonshire Council](https://www.west-dunbarton.gov.uk/business/visitor-levy/)).
  - **Paused or dropped:** Highland and Argyll & Bute paused ([Scottish Financial News](https://www.scottishfinancialnews.com/articles/highland-council-pauses-visitor-levy-plans-as-stirling-presses-ahead)). South Ayrshire, Orkney, Shetland and the Western Isles paused or dropped theirs (unverified).
  - **Other drafts:** East Lothian has a draft scheme ([East Lothian draft](https://eastlothianconsultations.co.uk/housing-environment/visitor-levy/user_uploads/east-lothian-draft-visitor-levy-scheme.pdf)). Fife has published FAQs ([Fife FAQs](https://industry.welcometofife.com/wp-content/uploads/2025/11/Fife-Visitor-Levy-FAQs.pdf)). Neither has a confirmed start date.
- **Rest of the UK.** Wales has a separate regime, the Visitor Accommodation (Register and Levy) Act 2025. Every provider must register by 31 March 2027, and councils may then opt into a flat per-person levy from April 2027 ([gov.wales](https://www.gov.wales/registering-visitor-accommodation-overview)). England consulted on an overnight visitor levy from Nov 2025 to Feb 2026 ([MHCLG consultation](https://consult.communities.gov.uk/devolution-funding-and-fiscal-events/overnight-visitor-levy-consultation/)). In September 2026 the government confirmed that mayoral and strategic authorities may levy a percentage of the accommodation cost, with legislation to follow ([ICAEW, Sep 2026](https://www.icaew.com/insights/tax-news/2026/sep-2026/government-confirms-new-tourist-levy); details unverified, as the article body could not be read).

## Buyers

- **Short-term lets.** Edinburgh had 3,209 short-term let licences in operation at 31 Dec 2025, and Scotland had 32,317 ([Scottish Government STL statistics](https://www.gov.scot/publications/short-term-lets-licensing-statistics-scotland-to-31-december-2025/pages/licences-in-operation-local-areas/)). One host can hold several licences, so there are fewer liable persons than licences.
- **Serviced accommodation.** The latest full count for Edinburgh is from 2019: 167 hotels, 40 serviced-apartment buildings, 15 hostels, and about 200 guest houses and B&Bs with about 1,300 bedrooms (Ryden/GVA for the council, cited by [Lichfields 2022](https://lichfields.uk/blog/2022/september/15/tourist-accommodation-in-edinburgh-more-not-less-is-needed)).
- **Registrations.** No published count of providers registered on visitorlevy.scot was found (unverified).
- **Near-term segment.** Edinburgh has roughly 2,500-3,500 small liable persons: self-catering hosts, B&Bs and guest houses (estimate). Glasgow, Aberdeen, Stirling and West Dunbartonshire join through 2027 and might add 2,000-4,000 more (estimate, unverified). Hotels and chains are not the target, because their PMS vendors and finance teams handle the levy.
- **How they comply today:**
  - Larger operators use their PMS (Hop, Bookster, freeonlinebooking and others).
  - Single-unit Airbnb and Booking.com hosts must work out levy revenue themselves. Edinburgh warns that online calculators and OTA calculations are "not endorsed" and are used at the provider's own risk ([Edinburgh guide v2.1](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers)).
  - Some will use their accountant. ICAS has briefed members, which suggests accountants expect client questions ([ICAS](https://icas.com/news-insights-events/news/tax/visitor-levy-what-accommodation-providers-need-to-know/)).
- **Pain is visible.** The Scottish Tourism Alliance says some booking platforms are not set up for the percentage model. Staff are correcting bills by hand, at about 8 minutes per bill by one operator's estimate. The STA says the 2% retention may not cover the cost ([Caterer Licensee, 26 Aug 2026](https://catererlicensee.com/sta-urges-councils-to-learn-from-edinburgh-visitor-levy-problems-as-businesses-face-mounting-costs/); [Scotsman](https://www.scotsman.com/news/visitor-levy-causing-major-problems-for-edinburgh-firms-body-warns-8943968)). Earlier, the ASSC complained that no business-facing guidance existed ([Scottish Financial News](https://www.scottishfinancialnews.com/articles/assc-calls-out-lack-of-government-guidance-as-visitor-levy-deadline-looms)).

## Competition

- **visitorlevy.scot.** This is the free state platform, run by the Improvement Service and built by TCS DigiGOV ([visitorlevy.scot](https://www.visitorlevy.scot)). It handles registration, returns and payment, and offers a levy calculator plus user guides. It does not ingest booking data. No bulk upload, CSV import, API or agent access was found (unverified either way). Section 24 lets a council authorise another person to receive returns, but nothing shows third-party filing on a provider's behalf ([Part 4 Ch 2](https://www.legislation.gov.uk/asp/2024/8/part/4/chapter/2)).
- **freeonlinebooking.** Has two levy reports you can email to the council, one-click refunds, night caps, seasonal dates, and exclusion of extras. The basic booking system is free; the PMS is paid, price not stated ([freeonlinebooking blog, Oct 2025](https://www.freeonlinebooking.com/en/Blog/scottish-visitor-levies.aspx)).
- **freetobook.** A Scottish company that says it has "implemented all the required technology to make your accommodation compliant". No report or filing feature is described ([freetobook](https://en.freetobook.com/blog/how-to-calculate-the-scottish-visitor-levy-without-the-headache/); [freetobook levy post](https://en.freetobook.com/blog/scottish-visitor-levy-tax/)).
- **Hop Software.** Calculates the levy in night audit and has a Visitor Levy finance report ([Hop help](https://help.hopsoftware.com/support/solutions/articles/43000782980-edinburgh-visitor-levy)).
- **Bookster.** Adds a levy uplift to bookings. Its return reporting was "to be reviewed" before October 2026 ([Bookster](https://www.booksterhq.com/news/159016-visitor-levy)).
- **Roommaster.** Publishes guidance pages ([Roommaster](https://www.roommaster.com/hotel-tax/edinburgh)).
- **Eviivo, Little Hotelier, Guesty, Lodgify, Hostaway, Sykes.** No levy-specific feature was found (unverified). Several are likely to add one as more councils join.
- **Airbnb and Booking.com.** Neither collects and remits for hosts in Edinburgh ([Airbnb help 4105](https://www.airbnb.com/help/article/4105)).
- **Accountants and bookkeepers.** Likely to do it as an add-on. No priced offer was found (unverified).
- **Templates or standalone trackers.** None found.

**Bottom line.** Filing is free and state-run, and calculation is moving into PMS tools. The open gap is narrow: hosts with no PMS, or with several channels, who need the monthly per-premises figures. It is not a "no tool exists" gap.

## Willingness to pay

- **The retention cap.** Providers keep 2% of the levy in Edinburgh ([Edinburgh guide v2.1](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers)). On a typical single self-catering unit with £30,000 a year of accommodation revenue (an assumption), the levy is about £1,500 and the retention about £30 a year. That anchors the price low.
- **The cost of getting it wrong.** A first late-return penalty is about £108-£398 for residential premises, and late payment costs 10% of the levy ([penalty framework v1](https://www.edinburgh.gov.uk/downloads/file/40690/visitor-levy-penalty-framework-v1)). The return also takes time: rebuilding monthly figures from OTA exports, splitting out pre-October-2025 bookings and capping long stays could take 1-3 hours a quarter for a small host (estimate).
- **Plausible price.** About £5-£10 a month per property, or £20-£40 per quarterly return, with an accountant or agent tier at about £1-£3 per property per month (estimate). No current market prices were found for a comparable standalone tool (unverified).

## Channels

- **Associations.**
  - ASSC (self-caterers) has been vocal on the levy ([Scottish Financial News](https://www.scottishfinancialnews.com/articles/assc-calls-out-lack-of-government-guidance-as-visitor-levy-deadline-looms)).
  - The Scottish Tourism Alliance keeps national FAQs ([STA](https://scottishtourismalliance.co.uk/visitor-levy-information/)).
  - The Edinburgh Guest House Association (unverified reach).
  - FSB Scotland has warned about platform readiness ([Scottish Financial News](https://www.scottishfinancialnews.com/articles/fsb-time-running-out-for-edinburgh-to-be-ready-for-visitor-levy)).
- **Regulator and tourism bodies.** VisitScotland publishes business FAQs ([VisitScotland](https://www.visitscotland.org/news/2025/visitor-levy-faqs-for-businesses)). Council levy teams run training and send provider mailings ([Edinburgh](https://www.edinburgh.gov.uk/business/information-businesses)). Councils will not endorse tools, though.
- **Accountants.** ICAS members serve these clients ([ICAS](https://icas.com/news-insights-events/news/tax/visitor-levy-what-accommodation-providers-need-to-know/)). A white-label or bulk-client tier fits them.
- **Property managers.** Edinburgh short-let management companies run many licences each. This is the most efficient B2B channel (unverified count).
- **Other.** Glasgow, Aberdeen and Stirling go live in 2027, and each launch is a fresh window for content and SEO.

## Risks

- **PMS bundling.** freeonlinebooking, Hop, Bookster and freetobook already calculate or report the levy, and larger PMS vendors will follow as Glasgow joins.
- **Flat-rate schemes.** The 2026 amendment allows fixed per-night levies. The STA is pushing councils towards them ([Caterer Licensee](https://catererlicensee.com/sta-urges-councils-to-learn-from-edinburgh-visitor-levy-problems-as-businesses-face-mounting-costs/); [Scottish Business News](https://scottishbusinessnews.net/scottish-councils-given-power-to-charge-flat-fee-tourist-tax/)). Under a flat rate, the sum becomes nights × rate and much of the value goes away.
- **Platform upgrades.** The Improvement Service could add CSV import or OTA links to visitorlevy.scot (unverified plans).
- **OTA collection.** Airbnb or Booking.com could start collecting and remitting under a council agreement, which would remove the short-let segment. Edinburgh's guide notes that no such agreement exists today ([Edinburgh guide v2.1](https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers)).
- **Small market.** Several councils have paused, so the Scottish total may stay at about 5-8k liable persons (estimate).
- **Liability.** The council itself disclaims liability for calculations. A tool would need clear terms and to leave the final submission to the user.
- **Scheme differences.** Each council sets its own return form and its own rules on rate, cap, cut-off and retention, which adds per-council maintenance.

## First product

**What v1 does.** A web app for small hosts and managers in Edinburgh, ready for the Glasgow launch in January 2027.

1. **Import.** Takes Airbnb, Booking.com and VRBO CSV exports, plus a simple direct-bookings sheet.
2. **Classify each booking** by premises, booking and payment date (to test the pre-1-Oct-2025 exemption), nights, check-out quarter, and cancellation or no-show.
3. **Apply the rules.** Strips non-accommodation extras, keeps cleaning unless optional, applies the 5-night cap at actual nightly values, and handles commission according to the initial-transaction rule.
4. **Output the return.** Produces Edinburgh's monthly return fields for each premises (revenue, pre-Oct-2025 revenue, revenue beyond 5 nights, occupied nights and the rest). Shows the levy due less the 2% retention, and creates a PDF or CSV evidence pack for the 5-year record and for inspections.
5. **Remind.** Sends deadline reminders for the filing window and the payment date.

**First 30 days:**
- Week 1: an Airbnb and Booking.com CSV parser, with the Edinburgh rules as config.
- Week 2: the monthly return output, matched field by field to the visitorlevy.scot screens, plus the evidence pack.
- Week 3: a multi-property and accountant view, plus Glasgow rules (25 Jan 2027).
- Week 4: test with 10 Edinburgh hosts or one management company before the January 2027 return window. Pricing would be about £8 per property per month, or £25 per return.

## Open questions

- Does visitorlevy.scot have, or plan, CSV upload, an API or agent/delegate logins?
- How many liable persons are registered in Edinburgh, and how many returns arrive late in the first cycle (Oct-Nov 2026)?
- Do Glasgow and the 2027 councils use the same monthly return fields as Edinburgh, or a simpler single total?
- Will any council adopt a flat per-night rate? (Highland's paused proposal was £5 per night: [Caterer Licensee](https://catererlicensee.com/sta-urges-councils-to-learn-from-edinburgh-visitor-levy-problems-as-businesses-face-mounting-costs/).)
- What is the final English design (percentage base, collection by councils or centrally), and when will the legislation come?
- What levy support do Eviivo, Little Hotelier, Guesty, Lodgify and Hostaway offer, and what do they charge?
- How many Edinburgh hosts use no PMS, or several channels without a channel manager?

## Sources

- https://www.legislation.gov.uk/asp/2024/8/section/26
- https://www.legislation.gov.uk/asp/2024/8/part/4/chapter/2
- https://www.edinburgh.gov.uk/downloads/file/40692/edinburgh-visitor-levy-scheme-information-for-accommodation-providers
- https://www.edinburgh.gov.uk/downloads/file/40690/visitor-levy-penalty-framework-v1
- https://www.edinburgh.gov.uk/business/information-businesses
- https://www.edinburgh.gov.uk/business/timeline-implementing-levy
- https://www.visitorlevy.scot
- https://www.airbnb.com/help/article/4105
- https://www.glasgow.gov.uk/article/14799/Glasgow-s-Visitor-Levy
- https://committees.aberdeencity.gov.uk/documents/s171570/TVL%20Report%20060825.pdf?txtonly=1
- https://www.agcc.co.uk/news-article/aberdeen-to-introduce-7-visitor-levy
- https://www.stirling.gov.uk/visitorlevy
- https://www.west-dunbarton.gov.uk/business/visitor-levy/
- https://eastlothianconsultations.co.uk/housing-environment/visitor-levy/user_uploads/east-lothian-draft-visitor-levy-scheme.pdf
- https://industry.welcometofife.com/wp-content/uploads/2025/11/Fife-Visitor-Levy-FAQs.pdf
- https://www.scottishfinancialnews.com/articles/highland-council-pauses-visitor-levy-plans-as-stirling-presses-ahead
- https://scottishbusinessnews.net/scottish-councils-given-power-to-charge-flat-fee-tourist-tax/
- https://www.gov.scot/publications/short-term-lets-licensing-statistics-scotland-to-31-december-2025/pages/licences-in-operation-local-areas/
- https://lichfields.uk/blog/2022/september/15/tourist-accommodation-in-edinburgh-more-not-less-is-needed
- https://catererlicensee.com/sta-urges-councils-to-learn-from-edinburgh-visitor-levy-problems-as-businesses-face-mounting-costs/
- https://www.scotsman.com/news/visitor-levy-causing-major-problems-for-edinburgh-firms-body-warns-8943968
- https://www.scottishfinancialnews.com/articles/assc-calls-out-lack-of-government-guidance-as-visitor-levy-deadline-looms
- https://www.scottishfinancialnews.com/articles/fsb-time-running-out-for-edinburgh-to-be-ready-for-visitor-levy
- https://scottishtourismalliance.co.uk/visitor-levy-information/
- https://www.visitscotland.org/news/2025/visitor-levy-faqs-for-businesses
- https://icas.com/news-insights-events/news/tax/visitor-levy-what-accommodation-providers-need-to-know/
- https://www.freeonlinebooking.com/en/Blog/scottish-visitor-levies.aspx
- https://en.freetobook.com/blog/how-to-calculate-the-scottish-visitor-levy-without-the-headache/
- https://en.freetobook.com/blog/scottish-visitor-levy-tax/
- https://help.hopsoftware.com/support/solutions/articles/43000782980-edinburgh-visitor-levy
- https://www.booksterhq.com/news/159016-visitor-levy
- https://www.roommaster.com/hotel-tax/edinburgh
- https://dwfgroup.com/en/news-and-insights/insights/2025/3/the-visitor-levy-is-travelling-across-scotland
- https://www.gov.wales/registering-visitor-accommodation-overview
- https://consult.communities.gov.uk/devolution-funding-and-fiscal-events/overnight-visitor-levy-consultation/
- https://www.icaew.com/insights/tax-news/2026/sep-2026/government-confirms-new-tourist-levy
