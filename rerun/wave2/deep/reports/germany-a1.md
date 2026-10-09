# Germany A1: Mietwagen and taxi owner-operator compliance file

## Re-assessment (owner's criteria)

**Verdict: maybe. New score: 5/10 (old score: 4/10).**

**The case.** No state portal exists for the Mietwagen order book. Each firm must build its own record, and authorities now audit it with data analysis. Courts accept an order book "buchmäßig oder elektronisch" ([VG Regensburg RN 8 S 25.1192](https://www.gesetze-bayern.de/Content/Document/Y-300-Z-BECKRS-B-2025-N-17340?hl=true)) and uphold permit revocations based on time-series checks of app data ([VGH München 11 CS 26.1088](https://www.gesetze-bayern.de/Content/Rtf/Y-300-Z-BECKRS-B-2026-N-19364?all=False)). The only product found that does part of this job is Fahrly, a fleet back-office for Uber and Bolt fleets. It has a basic return-duty check, but no order book or audit export was found. That leaves an opening for an audit-ready register with self-checks. The idea is held back by three things: the buyer base is small and price-sensitive, many firms do not want their breaches documented, and the return duty is under political pressure.

**Room for improvement over current practice.**
- There is no free state tool to beat. Firms keep paper books, use platform portals, or keep nothing ordered. The 2010 Bielefeld guidance still asks for a bound book ([Bielefeld](https://www.bielefeld.de/sites/default/files/dokumente/Mietwagenverkehr_Hinweis.pdf)).
- Authorities ask for more and more data. In 2025 a Bavarian authority demanded the order book, platform web applications with order data, order e-mails, shift sheets and trip records. The court allowed inspection of these on site. It limited the demand to hand over all electronic data without a concrete reason ([VG Regensburg, 22 May 2025](https://www.gesetze-bayern.de/Content/Document/Y-300-Z-BECKRS-B-2025-N-17340?hl=true)). In 2026 the VGH allowed a USB handover and a time-series analysis that found 50 breaches in 175 trips ([VGH München](https://www.gesetze-bayern.de/Content/Rtf/Y-300-Z-BECKRS-B-2026-N-19364?all=False)). A firm that cannot produce clean, consistent data on demand risks its permits.
- Authorities may be getting tools of their own. A site called RouteProof offers "Digitale Kontrolle der Rückkehrpflicht im Mietwagenverkehr" ([routeproof.de](https://routeproof.de/)). A search summary described it as a tool for authorities that analyses digital trip logs and order books. The page content could not be read (unverified). If authorities analyse the data, firms need the same check first.
- There are two retention regimes. PBefG requires the order record to be kept for one year. Tax law requires each trip to be recorded individually and kept for at least six years ([LSt Niedersachsen guidance](https://lstn.niedersachsen.de/download/153059); [BMF letter 11 Mar 2024](https://lfst.rlp.de/fileadmin/lfst.rlp.de/Service/Unternehmer/20240311_BMF___146a_AO_Aufzeichnung_und_Aufbewahrung_Taxi_u_Mietwagen.pdf)). One register that feeds both is real value.
- Multi-client use: tax advisers already write about the return duty for Mietwagen clients and recommend "belastbare Dokumentation der Auftragsannahme" with trip-end and follow-on order times ([Intelligent Accounting, Kassel](https://intelligent-accounting.de/wissenswertes/ruckkehrpflicht-fur-mietwagen-rechtssicherheit-bei-uber-x)). Advisers and revocation lawyers could run the tool across several clients.
- Data is available. Uber offers a "Fahrtaktivität" trip activity file that Fahrly already imports for its return-duty check ([Fahrly help search](https://intercom.help/fahrly-solutions-llc/de/?q=R%C3%BCckkehrpflicht)). Bolt and FREENOW exports were not confirmed (unverified).

**Competitor reality check.**
- **Fahrly** (founded 2021, Cardiff) targets Mietwagen fleets on Uber and Bolt ([CB Insights](https://www.cbinsights.com/company/fahrly)). Its help centre has a "Compliance & Sicherheit" section covering "Rückkehrpflicht, Führerschein, Bußgelder, Tankquittungen und Betrugserkennung" ([Fahrly help](https://intercom.help/fahrly-solutions-llc/de/)). The return-duty check imports Uber's Fahrtaktivität file and flags a breach when the shift start is farther from the office than a chosen threshold ([Fahrly help search](https://intercom.help/fahrly-solutions-llc/de/?q=R%C3%BCckkehrpflicht)). That is a crude, Uber-only check. No order book, no authority export, no Bolt or FREENOW check and no TSE link were found. No price is published, and fahrly.com is a parked domain. This is a partial incumbent. It is also the most likely company to close the gap, because it already sits in the same customers' daily workflow.
- **TAXI-Experte** is a local Windows billing program with a cash book and an optional DATEV module. It costs about EUR 780 to 1,080 net, one-off. Its listing names no order book, return duty or TSE ([SoftGuide](https://www.softguide.de/programm/taxi-experte)). It is clunky and aimed at classic taxi billing.
- **Platforms**: The Uber portal shows trips and earnings per driver and car ([Uber fleet management](https://www.uber.com/pl/pl/earn/fleet-management/)). FREENOW makes partners record orders in its Fleet Partner Dashboard ([FREENOW AGB](https://eu-assets.contentstack.com/v3/assets/blt6e28a7086c72dd55/blt88cec6d4f33f02d6/69f9b33d63b2b574c44a6a01/Allgemeine_Geschaftsbedingungen_-_Stand_12.2023.pdf)). No platform was found to produce a cross-platform § 49 register with return checks (unverified either way).
- **Dispatch and GPS logbooks** (SuE-TaMi, taris, Webfleet, Vimcar) log orders or trips. None is sold as return-duty proof ([SoftGuide](https://www.softguide.de/programm/sue-tami-dispo); [OMR logbook ranking](https://omr.com/de/reviews/contenthub/beste-fahrtenbuch-apps)).
- **TSE**: crowded and hardware-bound. Stay out, as in the first pass.

**Price per customer.**
- What firms pay today: platform fees of about 20 to 29% of fares (Berlin 25%), per an unofficial source ([wandernundmehr](https://www.wandernundmehr.at/faq/wie-viel-prozent-nimmt-bolt)). TSE hardware costs from EUR 500 per car ([IHK Lippe-Detmold](https://www.ihk.de/lippe-detmold/hauptnavigation/bilden-und-qualifizieren/sach-und-fachkundepruefungen-unterrichtung/fachkunde-personenbefoerderung/tse-pflicht-fuer-taxi-und-mietwagen-ab-2026-6586016)). Billing software costs EUR 780 to 1,080 one-off ([SoftGuide](https://www.softguide.de/programm/taxi-experte)). At stake: fines up to EUR 10,000 ([Bielefeld](https://www.bielefeld.de/sites/default/files/dokumente/Mietwagenverkehr_Hinweis.pdf)) and loss of 8 to 16 permits in single cases ([VGH München](https://www.gesetze-bayern.de/Content/Rtf/Y-300-Z-BECKRS-B-2026-N-19364?all=False)).
- Average firm size: Berlin had 2,335 Mietwagen in 436 firms in March 2025, about 5.4 cars per firm ([Berlin Senate](https://www.berlin.de/sen/uvk/presse/pressemitteilungen/2025/pressemitteilung.1551176.php)).
- Suggested price: EUR 12 per car per month, with a EUR 39 minimum per firm. A 5-car firm pays about EUR 60 per month, or EUR 720 per year (unverified, no comparable price found).
- Audit pack: EUR 500 to 1,000 one-off when an authority demands data (unverified).
- Advisers and lawyers: EUR 99 to 199 per month for multi-client access (unverified).

**Revenue estimate (year 3).**
- Buyers: about 4,000 to 8,000 Mietwagen firms nationwide, estimated from Berlin figures. There is no national count since 2016 ([Brandenburg Landtag answer](https://kleineanfragen.de/brandenburg/6/11595-mietwagen-und-taxiunternehmen-in-brandenburg.pdf)) (unverified estimate). The sector as a whole has about 23,800 taxi and Mietwagen businesses ([Taxiverband Geschäftsbericht 2025](https://www.lobbyregister.bundestag.de/media/02/74/778564/Geschaftsbericht-2025.pdf)).
- Base case: 5,000 firms x 5% share = 250 firms x EUR 720 = EUR 180,000. Add 40 audit packs x EUR 750 = EUR 30,000. Add 15 advisers or lawyers x EUR 1,500 = EUR 22,500. **Total: about EUR 230,000 per year.**
- Low case: 4,000 x 3% = 120 x EUR 600 = EUR 72,000, plus EUR 15,000 in audit packs = **about EUR 87,000.**
- High case: 8,000 x 8% = 640 x EUR 900 = EUR 576,000, plus EUR 60,000 in audit packs and advisers = **about EUR 636,000.**
- The base case supports one founder. It does not support a team.

**Ease of implementation and sale.** Medium to low.
- Build: medium. CSV imports per platform, a hash-chained register, a return-gap check against base address and times, and an export. There is no confirmed official API, so imports may break when platforms change their files (unverified).
- Onboarding: easy if the firm can download Uber's Fahrtaktivität file. Drivers, many of whom do not read German, need simple multilingual guidance. Fahrly offers Arabic articles, which shows the need ([Fahrly help search](https://intercom.help/fahrly-solutions-llc/de/?q=R%C3%BCckkehrpflicht)).
- Sale: hard. Firms are price-sensitive, and many break the duty on purpose. The pull is strongest just after an authority letter arrives, so revocation lawyers and specialist tax advisers are the best channel. Taxi associations are hostile to platform Mietwagen. The platform-friendly Bundesverband wirfahren is a better fit ([Lobbyregister R003822](https://www.lobbyregister.bundestag.de/suche/R003822)).

**Remaining risks.**
- Fahrly or the platforms could add an order book and export cheaply. Fahrly already has the data and the customers ([Fahrly help](https://intercom.help/fahrly-solutions-llc/de/)).
- The rule could change. Lobby groups push to scrap the return duty or allow automatic app acceptance, and the 2021 reform is under evaluation ([Lobbyregister RV0023847](https://www.lobbyregister.bundestag.de/inhalte-der-interessenvertretung/regelungsvorhabensuche/RV0023847)). If the duty goes, the core value goes. If app acceptance is allowed "with documentation duties", demand could rise.
- Buyer incentive: compliance means empty return trips. A tool that shows breaches is unwelcome to firms that rely on them.
- The market may be shrinking or moving. Berlin's Mietwagen count roughly halved in a year, and fleets reportedly moved to districts outside Berlin ([Berlin Senate](https://www.berlin.de/sen/uvk/presse/pressemitteilungen/2025/pressemitteilung.1551176.php); [Tagesspiegel Background headline](https://background.tagesspiegel.de/verkehr-und-smart-mobility/briefing/mietwagenfirmen-umgehen-berlin), article not readable (unverified)).
- Liability: the VGH holds that orders forwarded by app are not received at base ([VGH München](https://www.gesetze-bayern.de/Content/Rtf/Y-300-Z-BECKRS-B-2026-N-19364?all=False)). The product must flag risk, not promise legal compliance.
- Proportionality limits: VG Regensburg held that firms need only make records available for inspection at their premises unless the authority gives a concrete reason for a handover ([VG Regensburg](https://www.gesetze-bayern.de/Content/Document/Y-300-Z-BECKRS-B-2025-N-17340?hl=true)). This reduces the urgency of an export feature in routine checks.

**New sources.**
- https://www.gesetze-bayern.de/Content/Document/Y-300-Z-BECKRS-B-2025-N-17340?hl=true
- https://intercom.help/fahrly-solutions-llc/de/
- https://intercom.help/fahrly-solutions-llc/de/?q=R%C3%BCckkehrpflicht
- https://www.cbinsights.com/company/fahrly
- https://www.softguide.de/programm/taxi-experte
- https://routeproof.de/
- https://intelligent-accounting.de/wissenswertes/ruckkehrpflicht-fur-mietwagen-rechtssicherheit-bei-uber-x
- https://lstn.niedersachsen.de/download/153059
- https://www.uber.com/pl/pl/earn/fleet-management/
- https://omr.com/de/reviews/contenthub/beste-fahrtenbuch-apps
- https://background.tagesspiegel.de/verkehr-und-smart-mobility/briefing/mietwagenfirmen-umgehen-berlin

## Summary

**Verdict: maybe. Score: 4/10.**

The duty is real, federal and enforced harder than before. Under § 49(4) PBefG a Mietwagen (private hire car) may only take orders received at its base. The firm must record each order and keep the record for one year. The car must return to base after each trip unless it already has a new order. In 2026 courts upheld permit revocations based on authorities' time-series analysis of order books and app data ([VGH München 11 CS 26.1088](https://www.gesetze-bayern.de/Content/Rtf/Y-300-Z-BECKRS-B-2026-N-19364?all=False)). The BGH confirmed the return duty on 3 June 2026 ([LTO](https://www.lto.de/recht/nachrichten/n/bgh-izr12325-rueckkehr-mietwagen-uber-taxis-betriebsgelaende)). The gap is real: I found no product that turns platform trip data and order intake into an audit-ready order register with return-duty checks. But the TSE half of the idea is already sold by hardware and cloud vendors. The buyer pool for the order-book half is a few thousand Mietwagen firms, many of which break the return duty on purpose. Their real compliance cost is empty return trips, not paperwork. This is a narrow, legally exposed niche. It is better tested as a "pre-audit" data analysis service for firms facing an authority audit, sold through lawyers and tax advisers, than as a broad SaaS.

## Duty

**Order book and return duty (passenger transport law).**
- § 49(4) PBefG: Mietwagen may only carry out orders received at the base or the owner's home. After each trip the car must return to base "unverzüglich" unless it got a new order before or during the trip. The firm must record order intake "buchmäßig" and keep it for one year ([Bielefeld guidance quoting § 49(4)](https://www.bielefeld.de/sites/default/files/dokumente/Mietwagenverkehr_Hinweis.pdf); [buzer.de § 49 PBefG](https://www.buzer.de/49_PBefG.htm)).
- Content of the record: date and time of order intake or acceptance, pickup place, destination and the car that ran the trip ([Bielefeld guidance](https://www.bielefeld.de/sites/default/files/dokumente/Mietwagenverkehr_Hinweis.pdf)). That guidance dates from August 2010 and demands a bound paper book. The earlier check in this study found that the 2021 reform allows electronic storage ([buzer.de](https://www.buzer.de/49_PBefG.htm)). I could not re-read the current text myself because both gesetze-im-internet.de and buzer.de refused the fetch (exact current wording unverified).
- Order forwarding by app: A 2021 Bundestag research paper said automatic forwarding through a phone app did not meet the exception. Under the old text, a new order had to be passed on "fernmündlich" (by phone) ([Bundestag WD 5 021/21](https://www.bundestag.de/resource/blob/831572/4c9a819c45d256acfb49c1b1caa767fb/WD-5-021-21-pdf.pdf)). In August 2026 the VGH München held that orders passed through smartphone apps are not received at the base ("Nicht anders liegt es bei der Zuleitung eines Auftrags über Smartphone-Applikationen") ([VGH München 11 CS 26.1088](https://www.gesetze-bayern.de/Content/Rtf/Y-300-Z-BECKRS-B-2026-N-19364?all=False)).
- Penalties: fines of up to EUR 10,000 for breaches. Drivers' breaches are attributed to the owner ([Bielefeld guidance](https://www.bielefeld.de/sites/default/files/dokumente/Mietwagenverkehr_Hinweis.pdf)). The main sanction in practice is revocation of the permit for unreliability.

**Enforcement evidence (strong and recent).**
- VGH München, 7 Aug 2026 (11 CS 26.1088): The authority ordered the full order book plus app-based order data on a USB stick. It ran a "Plausibilitäts-, Querschnitts- und Zeitreihenanalyse" and found 50 breaches in 175 trips, then 24 in 95 trips on a later date. Permits for 8 cars were revoked without a prior warning, and the court upheld this. The court also held that the authority may demand electronic data instead of only inspecting on site ([gesetze-bayern.de](https://www.gesetze-bayern.de/Content/Rtf/Y-300-Z-BECKRS-B-2026-N-19364?all=False)).
- VG Ansbach AN 10 S 26.536 (16 Jul 2026): permits for 16 cars were revoked after 67 breaches in 210 trips. Source: the earlier check in this study ([gesetze-bayern.de](https://www.gesetze-bayern.de/Content/Rtf/Y-300-Z-BECKRS-B-2026-N-20282?all=False)). I did not re-read it.
- Berlin, 2024: the LABO revoked 74 Mietwagen operating permits covering 1,427 cars and refused 143 new applications covering 1,917 cars. It inspected 494 firm bases and checked 779 taxis and Mietwagen with the police. Licensed Mietwagen fell from 695 firms with 4,498 cars (Dec 2023) to 436 firms with 2,335 cars (Mar 2025). Since August 2023 platforms must have new Mietwagen firms pre-checked by the LABO ([Berlin Senate press release, 11 Apr 2025](https://www.berlin.de/sen/uvk/presse/pressemitteilungen/2025/pressemitteilung.1551176.php)).
- BGH I ZR 123/25 (3 Jun 2026): the return duty applies to Uber X Mietwagen and is not contrary to EU law in purely domestic cases. The court saw no serious constitutional doubts. Breaches are unfair competition, and competitors (taxi co-ops) can sue ([LTO](https://www.lto.de/recht/nachrichten/n/bgh-izr12325-rueckkehr-mietwagen-uber-taxis-betriebsgelaende); [otto-schmidt.de](https://www.otto-schmidt.de/news/wirtschaftsrecht/ruckkehrpflicht-fur-uber-uber-x-gebuchte-mietwagen-ist-bei-rein-nationalem-sachverhalt-nicht-am-unionsrecht-zu-messen-2026-06-03.html)). One commentary says even nine minutes of waiting can count as a breach ([LTO](https://www.lto.de/recht/nachrichten/n/bgh-izr12325-rueckkehr-mietwagen-uber-taxis-betriebsgelaende)).

**TSE and tax records (tax law).**
- § 146a AO and the KassenSichV treat taximeters and Wegstreckenzähler (distance counters in Mietwagen) as electronic recording systems. The BMF letter of 11 Mar 2024 sets the minimum records for taxi and Mietwagen firms ([BMF letter via LfSt RLP](https://lfst.rlp.de/fileadmin/lfst.rlp.de/Service/Unternehmer/20240311_BMF___146a_AO_Aufzeichnung_und_Aufbewahrung_Taxi_u_Mietwagen.pdf)).
- From 1 Jan 2026, taximeters and distance counters must run with a certified TSE. The non-objection rule ended at the close of 2025 ([selbststaendigkeit.de, updated 14 Feb 2026](https://selbststaendigkeit.de/news-gruendertipps/tse-pflicht-taxis-mietwagenunternehmen/); [IHK Lippe-Detmold](https://www.ihk.de/lippe-detmold/hauptnavigation/bilden-und-qualifizieren/sach-und-fachkundepruefungen-unterrichtung/fachkunde-personenbefoerderung/tse-pflicht-fuer-taxi-und-mietwagen-ab-2026-6586016)).
- Exception: distance counters placed on the market before 1 Jul 2024 that have a digital interface for a TSE are covered only from 1 Jan 2027 ([Steuerportal MV leaflet](https://www.steuerportal-mv.de/static/Regierungsportal/Ministerium%20f%C3%BCr%20Finanzen%20und%20Digitalisierung/Steuerportal/Inhalte/Merkblatt%20f%C3%BCr%20Mietwagenunternehmen.pdf)). The second KassenSichV amendment, passed by the Bundestag on 6 Nov 2025, set this date at 2027 (the draft said 2026). It also extends the INSIKA transition rule to Mietwagen ([KPMG, Nov 2025](https://kpmg.com/de/de/home/themen/2025/11/2-vo-aend-kassensichvo.html); [Bundesrat Drs. 651/25](https://dserver.bundestag.de/brd/2025/0651-25.pdf)). I could not open the KPMG page or confirm publication in the Bundesgesetzblatt (unverified).
- Devices must be reported to the Finanzamt. Existing devices were due by 31 Jul 2025, and new devices are due within one month ([selbststaendigkeit.de](https://selbststaendigkeit.de/news-gruendertipps/tse-pflicht-taxis-mietwagenunternehmen/)). Tax auditors are told to run more cash checks ("Kassennachschauen") on taximeters and distance counters ([ETL](https://www.etl.de/aktuelles/taxi-und-mietwagenunternehmen-finanzamt-2026/)).
- Berlin LABO checks TSE proof when it grants or renews taxi permits from 1 Jan 2026. Proof was due by 30 Sep 2026 ([Berlin LABO](https://www.berlin.de/labo/mobilitaet/fahrerlaubnisse-personen-und-gueterbefoerderung/aktuelles/artikel.1623029.php)).
- Fines up to EUR 25,000 for TSE breaches ([Härting](https://haerting.de/en/insights/odometer-with-tse-what-taxi-and-hire-car-companies-need-to-know-now/)). This figure comes from the earlier check, and I did not re-read it.

**Upcoming changes.** Lobby groups push to remove or loosen the return duty and to allow automatic app order acceptance "with clear requirements for traceability and documentation" ([Lobbyregister RV0023847](https://www.lobbyregister.bundestag.de/inhalte-der-interessenvertretung/regelungsvorhabensuche/RV0023847); [Lobbyregister statement SG2606260017](https://www.lobbyregister.bundestag.de/media/fb/06/783840/Stellungnahme-Gutachten-SG2606260017.pdf)). An evaluation of the 2021 reform is due in 2026 ([Lobbyregister SG2605290001](https://www.lobbyregister.bundestag.de/media/e7/47/744451/Stellungnahme-Gutachten-SG2605290001.pdf)). I found no government draft (unverified either way).

## Buyers

- Whole sector: about 23,800 taxi and Mietwagen businesses, about 156,700 employees and about EUR 7 bn turnover, including chauffeur services. The Taxiverband says small firms are declining and larger platform fleets are growing, and that Mietwagen numbers are rising "stark" ([Taxiverband Deutschland Geschäftsbericht 2025](https://www.lobbyregister.bundestag.de/media/02/74/778564/Geschaftsbericht-2025.pdf)). The report gives no source year for the firm count.
- No official national count since the federal survey dated 31 Dec 2016 ([Brandenburg Landtag answer](https://kleineanfragen.de/brandenburg/6/11595-mietwagen-und-taxiunternehmen-in-brandenburg.pdf)). In 2004 there were 22,882 taxi operators ([BT-Drs. 16/4358](https://dserver.bundestag.de/btd/16/043/1604358.pdf)).
- Mietwagen subset, which is the target for the order book: in Berlin, 436 firms with 2,335 cars (Mar 2025) ([Berlin Senate](https://www.berlin.de/sen/uvk/presse/pressemitteilungen/2025/pressemitteilung.1551176.php)). In 2018 Berlin had about 3,250 taxi firms and 530 Mietwagen firms ([Berlin Drs. 18/18929](https://kleineanfragen.de/berlin/18/18929-taxis-und-mietwagen-in-berlin.pdf)). Extrapolating, I estimate 4,000 to 8,000 Mietwagen firms nationwide, concentrated in big cities with Uber, Bolt and FREENOW (unverified estimate).
- TSE buyers: every taxi and Mietwagen firm with a taximeter or distance counter, roughly the full 23,800.
- How they comply today: paper order books (the 2010 Bielefeld guidance even required a bound book), platform portals (the Uber supplier portal holds trips and revenue reports ([Uber](https://www.uber.com/at/de/drive/vehicle-solutions/supplier-portal/payments))), and tax advisers for the TSE and cash records ([ETL](https://www.etl.de/aktuelles/taxi-und-mietwagenunternehmen-finanzamt-2026/)). Uber says it built a mechanism that monitors the return duty and excludes drivers who breach it ([Volksstimme](https://www.volksstimme.de/wirtschaft/uber-aendert-nach-urteil-vorgehensweise-in-deutschland/1577111255000)). That article dates from 2019.

## Competition

- **TSE and taximeter hardware**: certified taximeter and distance-counter vendors with hardware TSEs, from about EUR 500 per car. Cloud TSEs carry monthly fees ([IHK Lippe-Detmold](https://www.ihk.de/lippe-detmold/hauptnavigation/bilden-und-qualifizieren/sach-und-fachkundepruefungen-unterrichtung/fachkunde-personenbefoerderung/tse-pflicht-fuer-taxi-und-mietwagen-ab-2026-6586016)). The earlier check named Hale and fiskaly via FMS (unverified for 2026). ready2order is named for cloud cash systems ([selbststaendigkeit.de](https://selbststaendigkeit.de/news-gruendertipps/tse-pflicht-taxis-mietwagenunternehmen/)). This part is crowded and tied to calibrated hardware, so a newcomer should stay out of it.
- **Platforms**: The Uber supplier portal is free and manages drivers and cars, with revenue and transaction reports ([Uber](https://www.uber.com/at/de/drive/vehicle-solutions/supplier-portal/payments); [Uber fleet management](https://www.uber.com/ch/de/earn/fleet-management)). The FREENOW AGB require Mietwagen partners to record orders via its Fleet Partner Dashboard ([FREENOW AGB](https://eu-assets.contentstack.com/v3/assets/blt6e28a7086c72dd55/blt88cec6d4f33f02d6/69f9b33d63b2b574c44a6a01/Allgemeine_Geschaftsbedingungen_-_Stand_12.2023.pdf)). I found no evidence that any platform exports a § 49 order book with return checks (unverified).
- **Fleet back-office tools**: Fahrly syncs Uber and Bolt trips to drivers and cars and does cash settlement. Its help article mentions no order book, return duty, TSE or GoBD export ([Fahrly help](https://intercom.help/fahrly-solutions-llc/de/articles/15909467-einnahmen-verwalten-uber-bolt-automatisch-manuell)). Prices were not found. FahrerApp (meinfahrer.app) does shift tracking for Mietwagen ([productcool](https://www.productcool.com/product/fahrerapp-mietwagen-fuhrparkmanagement-software)).
- **Dispatch software**: SuE-TaMi Dispo (order handling, vehicle tracking, invoicing; over 160 dispatch centres) ([SoftGuide](https://www.softguide.de/programm/sue-tami-dispo)) and taris dispatch by MPC-Software ([Capterra](https://www.capterra.com.de/software/218204/taris-dispatch)). Both serve central dispatch for taxi and Mietwagen. They log orders but are not sold as return-duty proof.
- **General fleet tools**: Flottenmanager (K-SOFT) from EUR 378, about EUR 712 for 30 vehicles ([Capterra](https://www.capterra.com.de/software/219076/flottenmanager)). Fleetio from about USD 4 per vehicle per month ([G2](https://www.g2.com/de/products/callcomm/pricing)). Neither has PBefG features.
- **Free state tool**: none found for the order book. ELSTER is only used to report devices.
- **Gap**: I found no product that merges order intake at base, platform trip data and GPS return times into a register an authority can audit, and flags breaches before the authority does.

## Willingness to pay

- At stake: the VGH and VG Ansbach cases cost firms 8 and 16 permits. Each Mietwagen permit carries a car's full revenue ([VGH München](https://www.gesetze-bayern.de/Content/Rtf/Y-300-Z-BECKRS-B-2026-N-19364?all=False)). PBefG fines run up to EUR 10,000 ([Bielefeld](https://www.bielefeld.de/sites/default/files/dokumente/Mietwagenverkehr_Hinweis.pdf)). TSE fines run up to EUR 25,000 ([Härting](https://haerting.de/en/insights/odometer-with-tse-what-taxi-and-hire-car-companies-need-to-know-now/)).
- Current spend: TSE hardware from about EUR 500 per car, and EUR 1,500+ for upgrades ([IHK Lippe-Detmold](https://www.ihk.de/lippe-detmold/hauptnavigation/bilden-und-qualifizieren/sach-und-fachkundepruefungen-unterrichtung/fachkunde-personenbefoerderung/tse-pflicht-fuer-taxi-und-mietwagen-ab-2026-6586016)). Platform fees take 20 to 29% of fares ([wandernundmehr FAQ](https://www.wandernundmehr.at/faq/wie-viel-prozent-nimmt-bolt), which is unofficial). Margins are thin, so firms are price-sensitive.
- Plausible price: EUR 10 to 20 per car per month for an order register with return checks. A one-off audit-readiness report could cost EUR 300 to 1,500 per firm, sold when an authority demands data (unverified, no comparable price found).
- The catch: full compliance means empty return trips. That costs far more than any software saves. Firms that already comply cheaply may not see the need. Firms that do not comply may not want a tool that documents their breaches.

## Channels

- Associations: Taxiverband Deutschland e.V. in Berlin, which covers taxi and Mietwagen ([Geschäftsbericht 2025](https://www.lobbyregister.bundestag.de/media/02/74/778564/Geschaftsbericht-2025.pdf)). Bundesverband wirfahren in Berlin, which represents Mietwagen and taxi firms "im Verbund mit Plattformanbietern" ([Lobbyregister R003822](https://www.lobbyregister.bundestag.de/suche/R003822)). Taxi associations are hostile to platform Mietwagen, so wirfahren is the better fit for an order-book tool.
- IHKs run the Fachkunde (competence) exams for passenger transport and publish TSE notices ([IHK Lippe-Detmold](https://www.ihk.de/lippe-detmold/hauptnavigation/bilden-und-qualifizieren/sach-und-fachkundepruefungen-unterrichtung/fachkunde-personenbefoerderung/tse-pflicht-fuer-taxi-und-mietwagen-ab-2026-6586016); [IHK Bergisches Land](https://www.ihk.de/bergische/standortpolitik/verkehr/service-pruefungen/strassenverkehr/taxen-und-mietwagen-1-1421424)).
- Tax advisers who specialise in taxi and Mietwagen work, such as ETL ([ETL](https://www.etl.de/aktuelles/taxi-und-mietwagenunternehmen-finanzamt-2026/)), and lawyers who defend revocation cases. Court rulings name the cases, so lawyers can be found.
- Trade press: Taxi Times ([taxi-times.com](https://taxi-times.com/?p=40124)).
- Platform partner programmes (Uber, Bolt, FREENOW) and fleet back-office vendors such as Fahrly as integration partners (unverified interest).

## Risks

- **Rule change**: lobbying to scrap or loosen the return duty continues, and the 2021 reform evaluation is due in 2026 ([Lobbyregister RV0023847](https://www.lobbyregister.bundestag.de/inhalte-der-interessenvertretung/regelungsvorhabensuche/RV0023847)). Some commentators call the duty hard to sustain under EU law ([Tagesspiegel Background](https://background.tagesspiegel.de/verkehr-und-smart-mobility/briefing/schutz-des-taxigewerbes-gegen-mietwagen-steht-auf-der-kippe)). If automatic acceptance is legalised "with documentation duties", demand for a register could rise. If the duty is scrapped, the core value disappears.
- **Platforms build it**: Uber already monitors returns internally ([Volksstimme](https://www.volksstimme.de/wirtschaft/uber-aendert-nach-urteil-vorgehensweise-in-deutschland/1577111255000)). A platform export of an "order book" would cover most of the job for free.
- **Buyer incentive**: firms that breach the duty on purpose will not pay to document it. Compliant firms may manage with platform exports.
- **Market size**: about 4,000 to 8,000 Mietwagen firms (unverified), shrinking under consolidation ([Taxiverband](https://www.lobbyregister.bundestag.de/media/02/74/778564/Geschaftsbericht-2025.pdf)). In Berlin the number nearly halved in 15 months ([Berlin Senate](https://www.berlin.de/sen/uvk/presse/pressemitteilungen/2025/pressemitteilung.1551176.php)).
- **Legal uncertainty**: the VGH says app-forwarded orders are not received at the base ([VGH München](https://www.gesetze-bayern.de/Content/Rtf/Y-300-Z-BECKRS-B-2026-N-19364?all=False)). A tool that claims to prove compliance for platform orders could mislead clients and carries liability risk.
- **Data access**: no confirmed official API for Uber, Bolt or FREENOW trip exports. The tool depends on CSV downloads (unverified).
- **TSE**: hardware, calibration and BSI certification are out of reach for a small firm.

## First product

Version 1, aimed at Mietwagen firms with 1 to 30 cars that work with platforms:
1. Import of order data: platform CSV exports (Uber supplier portal, Bolt, FREENOW dashboard), plus a simple web form or phone-call log for orders taken at the base.
2. A tamper-evident order register with the fields authorities expect: date and time of intake, pickup, destination and car ([Bielefeld](https://www.bielefeld.de/sites/default/files/dokumente/Mietwagenverkehr_Hinweis.pdf)). Records kept for one year, with a hash chain.
3. Return-duty check: compare drop-off time and place with the next order time and the base address. Flag trips that lack a follow-on order and a plausible return time. This reproduces the authority's "Zeitreihenanalyse".
4. One-click audit export on USB or as a ZIP (CSV plus PDF summary), in the shape authorities demanded in the VGH case.
5. Show TSE and device report status only as reminders: device list, ELSTER report date, and the 2027 retrofit date for older distance counters.

First 30 days:
- Week 1: interview 10 Mietwagen owners and 3 revocation lawyers. Get sample platform exports and one real authority data request.
- Week 2: build the CSV importer for Uber and Bolt, the register and the return-gap detector.
- Week 3: produce the audit export and a one-page "self-audit report". Test it on real anonymised data.
- Week 4: sell 5 paid self-audits (EUR 300 to 500) through lawyers and the wirfahren association. Decide on SaaS only if repeat demand appears.

## Open questions

- The exact current wording of § 49(4) PBefG after 2021: is electronic storage expressly allowed, and is "fernmündlich" still in the text? Both law sites failed to load.
- Was the second KassenSichV amendment published, and when did it enter into force?
- An official national count of Mietwagen firms and vehicles (BMV survey after 2016).
- Do Uber, Bolt or FREENOW offer exports that authorities accept as the order book?
- Fahrly, FahrerApp and dispatch vendors: prices, and whether they plan return-duty features.
- How many authorities outside Berlin and Bavaria run data audits?
- Will compliant firms pay, or only firms already under audit?

## Sources

- https://www.gesetze-bayern.de/Content/Rtf/Y-300-Z-BECKRS-B-2026-N-19364?all=False
- https://www.gesetze-bayern.de/Content/Rtf/Y-300-Z-BECKRS-B-2026-N-20282?all=False
- https://www.berlin.de/sen/uvk/presse/pressemitteilungen/2025/pressemitteilung.1551176.php
- https://www.bielefeld.de/sites/default/files/dokumente/Mietwagenverkehr_Hinweis.pdf
- https://www.buzer.de/49_PBefG.htm
- https://www.bundestag.de/resource/blob/831572/4c9a819c45d256acfb49c1b1caa767fb/WD-5-021-21-pdf.pdf
- https://www.lto.de/recht/nachrichten/n/bgh-izr12325-rueckkehr-mietwagen-uber-taxis-betriebsgelaende
- https://www.otto-schmidt.de/news/wirtschaftsrecht/ruckkehrpflicht-fur-uber-uber-x-gebuchte-mietwagen-ist-bei-rein-nationalem-sachverhalt-nicht-am-unionsrecht-zu-messen-2026-06-03.html
- https://lfst.rlp.de/fileadmin/lfst.rlp.de/Service/Unternehmer/20240311_BMF___146a_AO_Aufzeichnung_und_Aufbewahrung_Taxi_u_Mietwagen.pdf
- https://selbststaendigkeit.de/news-gruendertipps/tse-pflicht-taxis-mietwagenunternehmen/
- https://www.ihk.de/lippe-detmold/hauptnavigation/bilden-und-qualifizieren/sach-und-fachkundepruefungen-unterrichtung/fachkunde-personenbefoerderung/tse-pflicht-fuer-taxi-und-mietwagen-ab-2026-6586016
- https://www.steuerportal-mv.de/static/Regierungsportal/Ministerium%20f%C3%BCr%20Finanzen%20und%20Digitalisierung/Steuerportal/Inhalte/Merkblatt%20f%C3%BCr%20Mietwagenunternehmen.pdf
- https://kpmg.com/de/de/home/themen/2025/11/2-vo-aend-kassensichvo.html
- https://dserver.bundestag.de/brd/2025/0651-25.pdf
- https://www.etl.de/aktuelles/taxi-und-mietwagenunternehmen-finanzamt-2026/
- https://www.berlin.de/labo/mobilitaet/fahrerlaubnisse-personen-und-gueterbefoerderung/aktuelles/artikel.1623029.php
- https://haerting.de/en/insights/odometer-with-tse-what-taxi-and-hire-car-companies-need-to-know-now/
- https://www.lobbyregister.bundestag.de/media/02/74/778564/Geschaftsbericht-2025.pdf
- https://www.lobbyregister.bundestag.de/inhalte-der-interessenvertretung/regelungsvorhabensuche/RV0023847
- https://www.lobbyregister.bundestag.de/media/fb/06/783840/Stellungnahme-Gutachten-SG2606260017.pdf
- https://www.lobbyregister.bundestag.de/media/e7/47/744451/Stellungnahme-Gutachten-SG2605290001.pdf
- https://www.lobbyregister.bundestag.de/suche/R003822
- https://background.tagesspiegel.de/verkehr-und-smart-mobility/briefing/schutz-des-taxigewerbes-gegen-mietwagen-steht-auf-der-kippe
- https://kleineanfragen.de/brandenburg/6/11595-mietwagen-und-taxiunternehmen-in-brandenburg.pdf
- https://kleineanfragen.de/berlin/18/18929-taxis-und-mietwagen-in-berlin.pdf
- https://dserver.bundestag.de/btd/16/043/1604358.pdf
- https://www.uber.com/at/de/drive/vehicle-solutions/supplier-portal/payments
- https://www.uber.com/ch/de/earn/fleet-management
- https://www.volksstimme.de/wirtschaft/uber-aendert-nach-urteil-vorgehensweise-in-deutschland/1577111255000
- https://eu-assets.contentstack.com/v3/assets/blt6e28a7086c72dd55/blt88cec6d4f33f02d6/69f9b33d63b2b574c44a6a01/Allgemeine_Geschaftsbedingungen_-_Stand_12.2023.pdf
- https://intercom.help/fahrly-solutions-llc/de/articles/15909467-einnahmen-verwalten-uber-bolt-automatisch-manuell
- https://www.productcool.com/product/fahrerapp-mietwagen-fuhrparkmanagement-software
- https://www.softguide.de/programm/sue-tami-dispo
- https://www.capterra.com.de/software/218204/taris-dispatch
- https://www.capterra.com.de/software/219076/flottenmanager
- https://www.g2.com/de/products/callcomm/pricing
- https://www.wandernundmehr.at/faq/wie-viel-prozent-nimmt-bolt
- https://www.ihk.de/bergische/standortpolitik/verkehr/service-pruefungen/strassenverkehr/taxen-und-mietwagen-1-1421424
- https://taxi-times.com/?p=40124
