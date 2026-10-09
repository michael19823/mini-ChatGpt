# Romania B2: verification and revision register for ANRE EDIB gas firms

## Re-assessment (owner's criteria)

**Verdict: maybe. New score: 5/10. Old score: 4/10.**

**The case.** About 2 million verification and revision sheets are written each year by ANRE-authorised EDIB firms. Each firm must also keep an annual electronic register of its jobs in the Annex 6 format ([Order 179/2015, art. 9, 12](https://www.distrigazsud-retele.ro/wp-content/uploads/2023/11/Ordinul-ANRE-nr.-179.2015-actualizat-07.11.2023.pdf)). The two large distributors now run free portals where firms file sheets. But those portals only take the filing. They do not fill in the sheet on site, capture signatures, keep the firm's own register, or build a customer book for the next job. I found no Romanian product that does this job. The weak points are a small, low-margin buyer base of trade firms, an unknown firm count, and distributors who keep adding features. A simple, cheap tool could reach about €50k a year by year 3. That is a modest side business, not a big one.

**Room for improvement over the portal or current practice.**
- Filing is covered, the paperwork is not. Distrigaz Sud Rețele (DSR) runs a module in ePortalDGSR where firms "register and submit" sheets within 5 working days. Since 28 Sep 2026 it also handles restoring supply after a revision ([DSR](https://www.distrigazsud-retele.ro/parteneri/firme-autorizate/verificari-si-revizii/)). The guide says a sheet can be submitted "with a single click" ([DSR ePortal guide](https://www.distrigazsud-retele.ro/parteneri/firme-autorizate/ghid-eportaldgsr/)). This corrects the first pass, which pointed to the connection portal (racordaresd) instead.
- Delgaz Grid also has a free platform, with an "operator economic" account ([portal.delgaz.ro](https://portal.delgaz.ro/inregistrare/operator-economic)). The firm types the 10-digit consumption-point code, and the platform pre-fills the customer data. It then asks for the work type, sheet number and dates. Paper originals must still reach Delgaz within 30 days ([Delgaz protocol](https://delgaz.ro/getattachment/9b0a2a69-b345-4c59-b644-c3ca21789412/Protocol-inregistrare-electronica-fise-Revizii-si-Verificari.pdf)). I saw this only in a search summary because the PDF returned 403 (unverified).
- The sheet itself is still a paper or Word form. DSR publishes Annex 4 and Annex 5 as .docx files to print and fill in ([DSR](https://www.distrigazsud-retele.ro/parteneri/firme-autorizate/verificari-si-revizii/)). Its guide warns that missing signatures or tick boxes can get a sheet rejected ([DSR guide](https://www.distrigazsud-retele.ro/wp-content/uploads/2026/07/Ghid-Fise-Verificare-Tehnica-IUGN.pdf)). So the firm writes the sheet on paper and then retypes it into a portal. That double entry is the main pain a tool can remove.
- Neither portal page mentions the firm's Annex 6 register, an export of the firm's own jobs, bulk upload or status tracking ([DSR](https://www.distrigazsud-retele.ro/parteneri/firme-autorizate/verificari-si-revizii/); [DSR ePortal guide](https://www.distrigazsud-retele.ro/parteneri/firme-autorizate/ghid-eportaldgsr/)) (absence unverified, since I could not log in).
- Each distributor has its own procedure ([Order 96/2023, art. II](https://www.ppcenergy.ro/wp-content/uploads/ord-96-2023.pdf)). A firm that works in more than one distributor's area deals with several portals or email channels. One tool that produces the sheet once and tracks all filings helps here.
- The firm has to keep its own customer book with next due dates if it wants the repeat job. The distributor database and the supplier notices go to the customer, not to the firm ([Order 179/2015, art. 5, 13-14](https://www.distrigazsud-retele.ro/wp-content/uploads/2023/11/Ordinul-ANRE-nr.-179.2015-actualizat-07.11.2023.pdf)).
- Pressure is rising after safety incidents. After the October 2025 Rahova incident, firms had to repeat checks and complete new sheets before gas came back on ([HotNews](https://hotnews.ro/?p=2089206)).
- Evidence gap: I found no user complaints, error rates or rejection counts for these portals (unverified). The pain argument rests on the double entry and the rejection warnings, not on measured data.

**Competitor reality check.**
- No dedicated software found. Twelve searches in this pass (Romanian and English) found no product for EDIB firms that fills in sheets, keeps the Annex 6 register or tracks due dates. That makes about 27 searches across all passes. Absence of a product cannot be proven by search, so treat this as (unverified).
- Distributor portals: free, but filing only (see above). They are a complement, not a rival, as long as a tool can feed them. It can feed them by hand-off, not by API: I found no API or file import (unverified).
- Flam Install: a free iOS app for one firm's own customers, not a tool sold to other firms ([App Store](https://apps.apple.com/gb/app/flam-install/id6479674236)).
- Supplier bundles such as Engie ASIGAZ and Premier Energy's verification service compete for the end customer, not for the firm's tooling ([Engie](https://www.engie.ro/wp-content/uploads/2023/04/Condiții-generale-ASIGAZ.pdf); [Premier Energy](https://premierenergy.ro/verificare-si-revizie-clienti-casnici)). I saw the Premier Energy page only in search results (unverified).
- Generic field-service apps (forms, photos, signatures) exist abroad. I found no Romanian vendor or Romanian-language template for the Annex 4 and 5 sheets (unverified). Without that template they do not do the job out of the box.
- No killer under the owner's criteria.

**Price per customer.**
- Firms charge about 150-250 lei per flat verification and up to 600 lei for a revision ([bzi.ro](https://www.bzi.ro/care-este-pretul-pentru-o-verificare-a-gazelor-iata-de-ce-sunt-importante-reviziile-periodice-la-instalatia-de-gaz-5514055); [playtech.ro](https://playtech.ro/2026/revizia-la-centrala-termica-si-la-instalatiile-gaze-cat-costa-si-ce-se-intampla-daca-nu-o-faci/)).
- Value test (my estimate, unverified): a firm doing 1,500 sheets a year earns about 300,000 lei from them. If the tool saves 10 minutes of retyping and register work per sheet, that is 250 hours a year. At about 30 lei an hour for office staff, that is 7,500 lei of time.
- Suggested price (my estimate): 99 lei a month (about €20) for a small firm, plus 29 lei a month per extra installer login. A firm with 3 installers (the new legal minimum) pays about 157 lei a month, or about €375 a year. That is under 1% of the firm's sheet revenue and well under the time saved. A per-sheet option of 1 leu a sheet suits firms with few jobs.
- Exchange rate assumed: about 5 lei per euro (unverified).

**Revenue estimate (year 3).**
- Buyers: EDIB firm count unknown. I assume 2,000 (unverified). The ANRE register has filters and an Excel export but returned no rows to my fetch ([ANRE register](https://portal.anre.ro/PublicLists/AtestatGN)). A figure of "almost 5,700" ANRE-authorised gas firms of all types circulates, but I could not trace its source (unverified).
- Base case: 2,000 firms x 10% share x €300 a year = **€60,000 a year**.
- Low case: 1,500 firms x 6% x €240 = €21,600 a year.
- High case: 3,000 firms x 15% x €375 = €168,750 a year.
- Upside not counted: a bundle with the ISCIR boiler workbench (K02), since many of the same firms service boilers ([playtech.ro](https://playtech.ro/2026/revizia-la-centrala-termica-si-la-instalatiile-gaze-cat-costa-si-ce-se-intampla-daca-nu-o-faci/)).

**Ease of implementation and sale.**
- Build: medium-easy. Two fixed forms (Annex 4 and 5), field rules from the DSR guide, signature capture, PDF output, an Annex 6 export and a due-date book ([DSR guide](https://www.distrigazsud-retele.ro/wp-content/uploads/2026/07/Ghid-Fise-Verificare-Tehnica-IUGN.pdf)). No integrations are needed on day one, because firms already file through the portals. Onboarding is a login and a logo.
- Sale: hard. The buyers are small trade firms with low software habits (unverified). The ANRE register gives a free call list with phone and county ([ANRE](https://anre.ro/consumatori/gaze-naturale/care-sunt-operatorii-economici-autorizati-pentru-efectuarea-verificarilor-la-instalatiile-de-gaze/)). No trade association was found.
- Timing helps a little. Order 17/2026 raises the minimum to 3 installers and adds in-house welders, with 3 months for existing holders to comply ([capital.ro](https://www.capital.ro/noul-regulament-anre-pentru-companiile-din-domeniul-gazelor-dispar-firmele-fara-capacitate-reala-cum-se-vor-acorda-autorizatiile.html); [profit.ro](https://profit.ro/perspective/schimbari-legislative-pentru-firme/nou-regulament-de-autorizare-a-operatorilor-economici-din-domeniul-gazelor-naturale-22461813)). The firms that remain will be fewer but bigger, which suits a per-installer price.

**Remaining risks.**
- Distributors add on-site digital sheets with signatures. DSR is clearly digitising this service ([DSR](https://www.distrigazsud-retele.ro/parteneri/firme-autorizate/verificari-si-revizii/)). This is the main threat.
- Firm count unknown, and Order 17/2026 will shrink it.
- Low price ceiling. A firm earning 150-250 lei a job will not pay much.
- No measured evidence of portal pain (rejection rates, complaints) (unverified).
- No API to the portals. The tool's value stops at producing the sheet and the register (unverified).

**New sources.**
- https://www.distrigazsud-retele.ro/parteneri/firme-autorizate/verificari-si-revizii/
- https://www.distrigazsud-retele.ro/parteneri/firme-autorizate/ghid-eportaldgsr/
- https://www.distrigazsud-retele.ro/wp-content/uploads/2023/11/Ordinul-ANRE-nr.-179.2015-actualizat-07.11.2023.pdf
- https://portal.delgaz.ro/inregistrare/operator-economic
- https://delgaz.ro/getattachment/9b0a2a69-b345-4c59-b644-c3ca21789412/Protocol-inregistrare-electronica-fise-Revizii-si-Verificari.pdf (search summary only; 403 on fetch)
- https://premierenergy.ro/verificare-si-revizie-clienti-casnici
- https://hotnews.ro/?p=2089206
- https://profit.ro/perspective/schimbari-legislative-pentru-firme/nou-regulament-de-autorizare-a-operatorilor-economici-din-domeniul-gazelor-naturale-22461813
- https://www.capital.ro/noul-regulament-anre-pentru-companiile-din-domeniul-gazelor-dispar-firmele-fara-capacitate-reala-cum-se-vor-acorda-autorizatiile.html
- https://portal.anre.ro/PublicLists/AtestatGN

## Summary

**Verdict: maybe. Score: 4/10.**

The duty is real and current. Every gas user installation in Romania needs a technical verification at most every 2 years and a revision at most every 10 years. Only ANRE-authorised EDIB firms may do this work, and each job produces a regulated record sheet (fișă de evidență). Firms must also keep an annual electronic register of all their jobs, in a format set by the law ([Order 179/2015, art. 3, 9, 12](https://www.axpo.com/content/dam/axpo19/countries/romania/DE%20PUS_Ordinul-nr-179-din-2015-actualizat-Procedura%20verificari%20si%20revizii%20tehnice%20instalatii%20utilizare%20GN.pdf)). About 4.25 million consumption points drive roughly 2 million checks a year ([profit.ro](https://profit.ro/povesti-cu-profit/energie/anre-situatie-fara-precedent-pe-piata-gazelor-cati-consumatori-au-ramas-fara-furnizor-doua-treimi-preluati-de-engie-restul-de-electrica-20470287)). I found no dedicated software for EDIB firms. But the parts that hurt most are already handled for free. Distributors run free upload platforms and keep the due-date database, and suppliers send due-date notices to customers ([Order 96/2023](https://www.ppcenergy.ro/wp-content/uploads/ord-96-2023.pdf)). What is left is a form-and-register tool for small trade firms that charge 150-250 lei a job. It could sell at a low price, but it is a thin, hard-to-reach market. I could not count the EDIB firms.

## Duty

**Legal basis.**
- ANRE Order 179/2015 approves the procedure for verifications and technical revisions of gas user installations. It has applied since 1 January 2016 ([Order 179/2015, art. 4](https://www.axpo.com/content/dam/axpo19/countries/romania/DE%20PUS_Ordinul-nr-179-din-2015-actualizat-Procedura%20verificari%20si%20revizii%20tehnice%20instalatii%20utilizare%20GN.pdf)). It was amended by Order 71/2020 and by Order 96/2023, published in Monitorul Oficial no. 1002 of 3 Nov 2023 ([Order 96/2023](https://www.ppcenergy.ro/wp-content/uploads/ord-96-2023.pdf)). A consolidated text dated 14 Dec 2025 is published by Gazest ([gazest.ro](https://gazest.ro/wp-content/uploads/2025/12/Procedura-privind-verificarile-si-reviziile-tehnice-ale-instalatiilor-de.pdf)).
- Firm authorisation now falls under ANRE Order 17/2026 of 21 May 2026, published in Monitorul Oficial no. 444 of 26 May 2026. It repeals Order 132/2021 ([Order 17/2026](https://anre.ro/wp-content/uploads/2026/05/Ord-17-2026.pdf)). The EDIB type covers execution of gas user installations at medium, reduced and low pressure. Installations between 6 and 10 bar need ET instead ([Order 96/2023](https://www.ppcenergy.ro/wp-content/uploads/ord-96-2023.pdf)).

**What must be done, and how often.**
- Verification: periodic, at most every 2 years, or at the customer's request. Revision: at most every 10 years. A revision is also needed after more than 6 months out of use, after any incident, or on request. Periodic checks are mandatory for all final customers ([Order 179/2015, art. 3](https://www.axpo.com/content/dam/axpo19/countries/romania/DE%20PUS_Ordinul-nr-179-din-2015-actualizat-Procedura%20verificari%20si%20revizii%20tehnice%20instalatii%20utilizare%20GN.pdf)).
- A revision replaces the verification due that year. The next verification then falls due at most 2 years after the revision ([Order 96/2023, new art. 3^2](https://www.ppcenergy.ro/wp-content/uploads/ord-96-2023.pdf)). The earlier checks called this an unconfirmed draft. It has been law since November 2023. The profit.ro article reported the draft ([profit.ro](https://profit.ro/povesti-cu-profit/energie/anre-clientii-nu-mai-sunt-obligati-sa-efectueze-verificarea-periodica-a-instalatiilor-de-gaze-in-anul-in-care-este-programata-o-revizie-tehnica-19463215)).

**What the EDIB firm (the buyer) must do.**
- Fill in the fișă de evidență correctly and completely after each job. Annex 4 covers the verification sheet and Annex 5 the revision sheet ([Order 179/2015, art. 9(3)-(5)](https://www.axpo.com/content/dam/axpo19/countries/romania/DE%20PUS_Ordinul-nr-179-din-2015-actualizat-Procedura%20verificari%20si%20revizii%20tehnice%20instalatii%20utilizare%20GN.pdf)).
- Register the sheet with the distributor within 5 working days, and no later than the due date ([art. 9(6)](https://www.axpo.com/content/dam/axpo19/countries/romania/DE%20PUS_Ordinul-nr-179-din-2015-actualizat-Procedura%20verificari%20si%20revizii%20tehnice%20instalatii%20utilizare%20GN.pdf)). Registration can be on paper at the distributor's office. It can also be electronic, by email or by upload to a platform the distributor provides to firms free of charge. The distributor issues a registration number on the spot for paper, or within 2 working days for electronic filing ([Order 96/2023, new art. 9^1](https://www.ppcenergy.ro/wp-content/uploads/ord-96-2023.pdf)).
- Send the customer a copy within 2 working days of registration, on paper or electronically (email, SMS) ([Order 96/2023, art. 9(7)](https://www.ppcenergy.ro/wp-content/uploads/ord-96-2023.pdf)).
- Answer any customer request within 5 working days ([art. 9(8)](https://www.axpo.com/content/dam/axpo19/countries/romania/DE%20PUS_Ordinul-nr-179-din-2015-actualizat-Procedura%20verificari%20si%20revizii%20tehnice%20instalatii%20utilizare%20GN.pdf)).
- **Keep an annual record of all verifications and revisions as an electronic register in the Annex 6 format.** Annex 6 records the customer, consumption-point address and code, contract, sheet numbers and the compliance result ([art. 12 and Annex 6](https://www.axpo.com/content/dam/axpo19/countries/romania/DE%20PUS_Ordinul-nr-179-din-2015-actualizat-Procedura%20verificari%20si%20revizii%20tehnice%20instalatii%20utilizare%20GN.pdf)). This is the clearest software-shaped duty.
- For customers connected directly to transmission or upstream pipes, the firm must also keep their records current. It must send the supplier the last and next due dates and the appliance list at least 90 days before the due date, and forward the sheets ([Order 96/2023, new art. 12^2](https://www.ppcenergy.ro/wp-content/uploads/ord-96-2023.pdf)). This is a small segment.
- Distributor guides add field rules. Distrigaz Sud Rețele's July 2026 guide says a missing customer signature or missing tick boxes "poate duce la respingerea fișei" (can lead to the sheet being rejected) ([DSR guide](https://www.distrigazsud-retele.ro/wp-content/uploads/2026/07/Ghid-Fise-Verificare-Tehnica-IUGN.pdf)).

**Other parties' duties, which are partial substitutes.**
- The supplier sends the customer a free notice at least 60 days before the due date, attached to the invoice ([art. 5](https://www.axpo.com/content/dam/axpo19/countries/romania/DE%20PUS_Ordinul-nr-179-din-2015-actualizat-Procedura%20verificari%20si%20revizii%20tehnice%20instalatii%20utilizare%20GN.pdf)).
- The distributor gives the supplier the due dates at least 90 days ahead. It keeps a central database of all sheets per consumption point and updates it within 30 days ([art. 13-14](https://www.axpo.com/content/dam/axpo19/countries/romania/DE%20PUS_Ordinul-nr-179-din-2015-actualizat-Procedura%20verificari%20si%20revizii%20tehnice%20instalatii%20utilizare%20GN.pdf)). Each distributor also had to publish its own procedure for registering sheets ([Order 96/2023, art. II](https://www.ppcenergy.ro/wp-content/uploads/ord-96-2023.pdf)).

**Penalties and enforcement.**
- If the distributor finds that a check was not done, or that defects were not fixed, it may cut supply on the day it finds out ([Order 96/2023, new art. 14^1](https://www.ppcenergy.ro/wp-content/uploads/ord-96-2023.pdf)).
- Breaching the procedure is a contravention under Law 123/2012 ([art. 16](https://www.axpo.com/content/dam/axpo19/countries/romania/DE%20PUS_Ordinul-nr-179-din-2015-actualizat-Procedura%20verificari%20si%20revizii%20tehnice%20instalatii%20utilizare%20GN.pdf)). I did not confirm the fine amounts that apply to EDIB firms (unverified). One consumer article cites fines of 2,000-4,000 lei for missed deadlines ([playtech.ro](https://playtech.ro/2026/revizia-la-centrala-termica-si-la-instalatiile-gaze-cat-costa-si-ce-se-intampla-daca-nu-o-faci/)) (unverified against the law).
- Under Order 17/2026, ANRE can suspend an authorisation for 60 days. It can withdraw it if the holder breaks the same obligation at least twice in 12 months ([Order 17/2026, art. 28-29](https://anre.ro/wp-content/uploads/2026/05/Ord-17-2026.pdf)).
- ANRE ran 1,018 controls in 2025, 344 of them in gas, and fined about 63.2m lei. Most of the gas fines came from one producer ([economedia](https://economedia.ro/exclusiv-interviul-integral-cu-george-niculescu-seful-anre-institutia-a-dat-amenzi-de-peste-63-de-milioane-de-lei-in-2025.html)). I found no published fines against EDIB firms for sheet or register failures (unverified).
- The Competition Council fined Delgaz Grid 30m lei in 2021. Delgaz had failed to register firms' sheets, or registered them late, from 2015 to 2018, which favoured an E.ON group company ([economica.net](https://www.economica.net/concurenta-a-amendat-delgaz-e-on-cu-30-de-milioane-de-lei-pentru-abuz-de-pozitie-dominanta-pe-piat%cc%a6a-serviciilor-de-verifica%cc%86ri-si-revizii-tehnice_509715.html/amp)). Sheet registration matters commercially, but the bottleneck sat on the distributor's side.

**Recent changes.** The new authorisation rules in Order 17/2026 tighten entry. EDIB now needs at least 3 authorised installers and staff proven through REGES employment records. Existing holders have 3 months to comply ([capital.ro](https://www.capital.ro/noul-regulament-anre-pentru-companiile-din-domeniul-gazelor-dispar-firmele-fara-capacitate-reala-cum-se-vor-acorda-autorizatiile.html)). Authorisations do not expire, but they must be re-endorsed (vizare) every 5 years ([Order 17/2026](https://anre.ro/wp-content/uploads/2026/05/Ord-17-2026.pdf)). The tighter rules will likely shrink the number of firms.

## Buyers

- **Demand base:** 4,018,505 household and 234,476 non-household customers connected to distribution networks, about 4.25 million consumption points. The source does not state the year ([profit.ro](https://profit.ro/povesti-cu-profit/energie/anre-situatie-fara-precedent-pe-piata-gazelor-cati-consumatori-au-ramas-fara-furnizor-doua-treimi-preluati-de-engie-restul-de-electrica-20470287)). With a 2-year cycle, that is roughly 2.1 million verification sheets a year (my estimate).
- **Obliged firms:** I could not count the EDIB firms. ANRE publishes the register at [portal.anre.ro/PublicLists/AtestatGN](https://portal.anre.ro/PublicLists/AtestatGN). It can be filtered by authorisation type and lists name, county, phone and legal representative ([ANRE](https://anre.ro/consumatori/gaze-naturale/care-sunt-operatorii-economici-autorizati-pentru-efectuarea-verificarilor-la-instalatiile-de-gaze/)). My fetch returned an empty table, probably because the page needs JavaScript. An earlier check cited a secondary source with about 5,700 ANRE-authorised gas firms of all types (unverified). My guess is 1,500-4,000 EDIB holders (unverified).
- **Segments:**
  - Big players: distributor-linked and supplier-linked service arms, such as Engie's ASIGAZ bundle ([Engie](https://www.engie.ro/wp-content/uploads/2023/04/Condiții-generale-ASIGAZ.pdf)).
  - Mid-size installers that serve blocks of flats through owners' associations ([alba24](https://alba24.ro/cine-raspunde-pentru-verificarea-instalatiei-de-gaze-la-bloc-cat-de-des-trebuie-facuta-si-cine-plateste-1104330.html)).
  - Many small local firms with 3-10 staff. The staff estimate is inferred from the 3-installer minimum (unverified).
- **How they comply today:**
  - Paper sheets filled by hand. The DSR guide still describes a printed form with X boxes and signatures ([DSR guide](https://www.distrigazsud-retele.ro/wp-content/uploads/2026/07/Ghid-Fise-Verificare-Tehnica-IUGN.pdf)).
  - Filing by paper, email or the distributor's free platform ([Order 96/2023](https://www.ppcenergy.ro/wp-content/uploads/ord-96-2023.pdf)). On the DSR portal, 71% of verification and revision sheets were submitted online, per a 2024 report on profit.ro. I saw that figure only in a search summary because the page blocked my fetch (unverified).
  - The Annex 6 register is most likely kept in Excel (unverified).

## Competition

- **Free distributor platforms (main substitute).** By law, distributors must offer firms a free electronic channel for filing sheets ([Order 96/2023, art. 9^1](https://www.ppcenergy.ro/wp-content/uploads/ord-96-2023.pdf)). Distrigaz Sud Rețele runs a portal for authorised firms (racordaresd.distrigazsud-retele.ro) that takes sheet uploads and shows customers their next due date. I saw this only in a search summary of a [profit.ro](https://profit.ro/povesti-cu-profit/energie/modernizarea-si-extinderea-retelei-de-distributie-si-imbunatatirea-experientei-de-client-prioritati-pentru-distrigaz-sud-retele-19566408) article (unverified). I did not confirm Delgaz Grid's current platform (unverified). These platforms take uploads but do not appear to fill in the form or keep the firm's own register (unverified).
- **State and supplier reminders.** The distributor database plus the supplier's notice 60 days ahead already remind every customer for free ([art. 5, 13, 14](https://www.axpo.com/content/dam/axpo19/countries/romania/DE%20PUS_Ordinul-nr-179-din-2015-actualizat-Procedura%20verificari%20si%20revizii%20tehnice%20instalatii%20utilizare%20GN.pdf)). A firm-side reminder tool adds little for compliance. It only helps a firm win the repeat job.
- **Supplier bundles.** Engie ASIGAZ packages the verification with other services ([Engie](https://www.engie.ro/wp-content/uploads/2023/04/Condiții-generale-ASIGAZ.pdf)). This competes for the end customer, not for the tool.
- **Lead-generation marketplaces.** Brig.ro lists gas installers by city with price ranges ([brig.ro](https://brig.ro/verificare-gaze/bacau)). It is a channel and a partial rival for the customer.
- **Single-firm app.** Flam Install is a free iOS app for one firm's customers ([App Store](https://apps.apple.com/gb/app/flam-install/id6479674236)).
- **Dedicated SaaS for EDIB firms:** none found after 6 Romanian-language searches in this pass and 9 in the earlier checks. Generic field-service tools exist internationally, but I did not check whether any Romanian firm uses one for this job (unverified).
- **Free state tool covering the firm's duty:** none found. ANRE offers no generator for the fișă or the Annex 6 register. The distributor platforms cover only filing.

## Willingness to pay

- Price per job: a verification costs about 150-250 lei for a flat, 190-300 lei for a house and up to 600 lei for a revision. Block-wide deals go as low as 25-30 lei per flat ([bzi.ro](https://www.bzi.ro/care-este-pretul-pentru-o-verificare-a-gazelor-iata-de-ce-sunt-importante-reviziile-periodice-la-instalatia-de-gaz-5514055); [brig.ro](https://brig.ro/verificare-gaze/bacau); [playtech.ro](https://playtech.ro/2026/revizia-la-centrala-termica-si-la-instalatiile-gaze-cat-costa-si-ce-se-intampla-daca-nu-o-faci/)).
- Total service market: about 2.1m checks a year at about 150 lei is roughly 300m lei, or about €60m (my estimate).
- What a tool could charge: a small firm doing 1,000-3,000 sheets a year might pay 50-150 lei a month, roughly €10-30 (my estimate, unverified). The value comes from fewer rejected sheets, faster filing within the 5-day window, legal electronic delivery to customers and an automatic Annex 6 register. Rebooking each customer 2 years later adds marketing value.
- What firms pay today: I found no consultant or software prices for this job (unverified). Today's cost is staff time and paper.
- Fine pressure on firms is weak. I found no evidence of fines on EDIB firms. The real penalties land on the customer (supply cut) or on the distributor (Delgaz).

## Channels

- **ANRE public register:** a free list of every EDIB holder with phone and county, usable for direct outreach ([ANRE](https://anre.ro/consumatori/gaze-naturale/care-sunt-operatorii-economici-autorizati-pentru-efectuarea-verificarilor-la-instalatiile-de-gaze/)).
- **Distributors:** they want clean, complete sheets. DSR publishes guides for firms ([DSR guide](https://www.distrigazsud-retele.ro/wp-content/uploads/2026/07/Ghid-Fise-Verificare-Tehnica-IUGN.pdf)). A tool that outputs "DSR-ready" or "Delgaz-ready" sheets could be pitched through their firm newsletters or trainings (unverified that such programmes exist).
- **Associations:** I found no association or employers' body for EDIB firms. Possible routes are installer-training providers who prepare ANRE exams and the engineers' association AIIR (unverified).
- **Marketplaces:** a partnership with brig.ro or similar sites (unverified).
- **Re-authorisation:** the Order 17/2026 compliance window gives a moment of contact. Firms must refile staff evidence within 3 months ([capital.ro](https://www.capital.ro/noul-regulament-anre-pentru-companiile-din-domeniul-gazelor-dispar-firmele-fara-capacitate-reala-cum-se-vor-acorda-autorizatiile.html)). Consultants who handle ANRE files are a possible reseller channel (unverified).

## Risks

- **Distributors extend their free platforms** into digital form filling with tablet signatures. They already must provide free electronic filing, and DSR is digitising fast. This is the most likely way the idea dies.
- **Low value per firm:** small trade businesses, thin margins and a commodity service at 150-250 lei.
- **Market size unknown:** I have no EDIB count. Order 17/2026 will push out firms without real staff, so the count is likely to fall.
- **Fragmented formats:** each of the roughly 30+ distributors has its own registration procedure ([Order 96/2023, art. II](https://www.ppcenergy.ro/wp-content/uploads/ord-96-2023.pdf)) (the distributor count is unverified). Integrations would be per distributor. Without APIs, the tool only produces files to upload.
- **Liability:** the firm, not the tool, takes responsibility for what the sheet states ([Order 96/2023, art. 12^1](https://www.ppcenergy.ro/wp-content/uploads/ord-96-2023.pdf)). Product liability is low if the tool only formats data.
- **Language:** Romanian only. That is no barrier for a local founder but a barrier for a foreign one.
- **Repeal risk:** low. The rule has been in force since 2016 and was strengthened in 2023.

## First product

**Version 1 (web plus mobile-friendly):**
1. A digital fișă for verification (Annex 4) and revision (Annex 5). It follows the field rules in distributor guides: mandatory fields, DA/NU/N/A logic, reasons required when "NU" is ticked, and consistency checks for appliances and flow rates.
2. On-screen signature for the customer and the installer, with PDF output in the official layout.
3. Automatic delivery of the PDF to the customer by email or SMS, which the law allows, and tracking of the 2-working-day deadline.
4. A filing tracker per distributor: the 5-working-day clock, the registration number received and a rejected or accepted status.
5. The annual Annex 6 electronic register, built automatically and exportable to Excel or PDF.
6. A customer book with next due dates, applying the rule that a revision replaces that year's verification. It sends rebooking reminders 60-90 days ahead.

**First 30 days:**
- Week 1: pull the EDIB list from the ANRE portal and call 30 firms in 2-3 counties. Ask how they fill, file and register sheets and what gets rejected.
- Week 2: get the filing procedures from DSR, Delgaz and two smaller distributors. Build the Annex 4 form, the PDF output and the Annex 6 export.
- Week 3: add signature capture, email delivery and the due-date book. Pilot with 3-5 firms for free.
- Week 4: measure time saved per sheet and the drop in rejections. Test a price of 79 lei a month and decide whether to continue.

Possible bundle: the K02 ISCIR boiler workbench, since the same installers often service boilers and VTP/ISCIR checks are sold alongside gas checks ([playtech.ro](https://playtech.ro/2026/revizia-la-centrala-termica-si-la-instalatiile-gaze-cat-costa-si-ce-se-intampla-daca-nu-o-faci/)). A combined product would raise the value per firm.

## Open questions

- How many EDIB holders are there now, and how many will remain after Order 17/2026?
- Does Delgaz Grid, the other large distributor, run a firm-side upload platform, and can it accept structured data?
- Do distributor platforms already let firms fill in the sheet online, not just upload a scan?
- What fines under Law 123/2012 apply to EDIB firms for late registration or a missing Annex 6 register, and has ANRE ever applied them?
- How many sheets are rejected by distributors, and how much rework does that cause?
- Is there any EDIB-firm association, Facebook group or training provider with reach?

## Sources

- https://www.axpo.com/content/dam/axpo19/countries/romania/DE%20PUS_Ordinul-nr-179-din-2015-actualizat-Procedura%20verificari%20si%20revizii%20tehnice%20instalatii%20utilizare%20GN.pdf (Order 179/2015, consolidated to July 2021)
- https://www.ppcenergy.ro/wp-content/uploads/ord-96-2023.pdf (Order 96/2023, Monitorul Oficial 1002/3 Nov 2023)
- https://gazest.ro/wp-content/uploads/2025/12/Procedura-privind-verificarile-si-reviziile-tehnice-ale-instalatiilor-de.pdf (consolidation, 14 Dec 2025)
- https://anre.ro/wp-content/uploads/2026/05/Ord-17-2026.pdf (Order 17/2026, authorisation regulation)
- https://anre.ro/consumatori/gaze-naturale/care-sunt-operatorii-economici-autorizati-pentru-efectuarea-verificarilor-la-instalatiile-de-gaze/
- https://anre.ro/participanti-la-piata-de-energie/persoane-juridice/gaze-naturale/
- https://portal.anre.ro/PublicLists/AtestatGN
- https://www.distrigazsud-retele.ro/wp-content/uploads/2026/07/Ghid-Fise-Verificare-Tehnica-IUGN.pdf
- https://profit.ro/povesti-cu-profit/energie/modernizarea-si-extinderea-retelei-de-distributie-si-imbunatatirea-experientei-de-client-prioritati-pentru-distrigaz-sud-retele-19566408
- https://profit.ro/povesti-cu-profit/energie/anre-clientii-nu-mai-sunt-obligati-sa-efectueze-verificarea-periodica-a-instalatiilor-de-gaze-in-anul-in-care-este-programata-o-revizie-tehnica-19463215
- https://profit.ro/povesti-cu-profit/energie/anre-situatie-fara-precedent-pe-piata-gazelor-cati-consumatori-au-ramas-fara-furnizor-doua-treimi-preluati-de-engie-restul-de-electrica-20470287
- https://www.economica.net/concurenta-a-amendat-delgaz-e-on-cu-30-de-milioane-de-lei-pentru-abuz-de-pozitie-dominanta-pe-piat%cc%a6a-serviciilor-de-verifica%cc%86ri-si-revizii-tehnice_509715.html/amp
- https://economedia.ro/exclusiv-interviul-integral-cu-george-niculescu-seful-anre-institutia-a-dat-amenzi-de-peste-63-de-milioane-de-lei-in-2025.html
- https://www.capital.ro/noul-regulament-anre-pentru-companiile-din-domeniul-gazelor-dispar-firmele-fara-capacitate-reala-cum-se-vor-acorda-autorizatiile.html
- https://www.engie.ro/wp-content/uploads/2023/04/Condiții-generale-ASIGAZ.pdf
- https://apps.apple.com/gb/app/flam-install/id6479674236
- https://brig.ro/verificare-gaze/bacau
- https://www.bzi.ro/care-este-pretul-pentru-o-verificare-a-gazelor-iata-de-ce-sunt-importante-reviziile-periodice-la-instalatia-de-gaz-5514055
- https://playtech.ro/2026/revizia-la-centrala-termica-si-la-instalatiile-gaze-cat-costa-si-ce-se-intampla-daca-nu-o-faci/
- https://alba24.ro/cine-raspunde-pentru-verificarea-instalatiei-de-gaze-la-bloc-cat-de-des-trebuie-facuta-si-cine-plateste-1104330.html
