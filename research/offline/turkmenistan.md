# Turkmenistan: offline-industries pass

**Date:** 2026-10-05
**Searches used:** 6 of 8
**Verdict:** **No opportunity recommended.** This pass confirms the country report (`research/countries/turkmenistan.md`): a foreign solo founder cannot reach or get paid by this market. The quiet industries do exist and are regulated: licensing, veterinary certificates, state registration of private entrepreneurs. But three barriers each block any software product on their own: heavy internet filtering, no legal access to foreign currency for private firms, and closed state systems. This report is short on purpose.

## Why the market is closed (summary; detail and sources in the country report)

- **Internet.** Turkmentelecom is the only provider. More than 122,000 of 15.5M domains tested are blocked, and filtering rules make more than 5.4M more unreachable. Whole /16 subnets were added to the blacklist in 2025, which also catches cloud hosting ranges. Cloud and file-sharing services are blocked as well (Dropbox, WeTransfer, CloudFront). VPN keys sold for about $50/month in July 2025. A hosted SaaS cannot be delivered reliably. (timesca.com; en.turkmen.news)
- **Payments.** The Central Bank has suspended currency convertibility for private enterprises, so a local business cannot legally pay a foreign subscription in USD (trade.gov; see the country report).
- **State systems.** The e.gov.tm single-window portal, the Ministry of Finance and Economy's electronic document management system, and the UNDP-backed statistical reporting platform are all state-built, with no public API (tmembassy.gov.tm).
- **Small private sector.** About 29,000 private companies and entrepreneurs in total (Turkmen state figure from CIET-2024). Farmers are fully exempt from tax, and SMEs pay a 2% turnover tax (turkmenhemrasy.gov.tm). Simple taxes and full exemptions for farmers mean less recurring reporting pain than in neighbouring countries.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | Reason |
|---|---|---|---|---|---|
| Households as employers (domestic workers, nannies) | No formal household-employer payroll regime found | Informal, cash arrangements (unverified; no source found) | Unknown | Rejected | No identifiable mandatory filing. Nobody could pay in FX. |
| Scrap metal / second-hand dealers | Not found in the licensed-activity list surfaced. Scrap trade is likely state-channelled (unverified) | No register or public forms found | Unknown | Rejected | No evidence of a dealer register. Closed market. |
| Livestock breeders and traders, bazaars | Veterinary activity is licensed. Veterinary certificates are required for movement and export (Russian FSVPS import/export requirements for Turkmenistan) | Certificates are issued in person by state vets (inferred) | Unknown. Farmers are fully tax-exempt (turkmenhemrasy.gov.tm) | Rejected | The state vet issues the paper. Individual breeders are banned from exporting leather; the state-linked Turkmenderi company channels it (leathermag.com). Nothing to integrate with, and no payer. |
| Dog breeding / kennels | New Law "On dog breeding and cynological activity" (turkmenistan.gov.tm) | Registration with state bodies (detail not verified) | Very small (estimate) | Rejected | Tiny market. Mostly state and hobby breeders. Akhal-Teke and Alabai breeding is state-prestige territory. |
| Seed producers | Seed-production activity is licensed (Law on licensing, list) | Licence granted by a ministry | Small; mostly state farms (estimate) | Rejected | State-dominated agriculture. |
| Disinfection / pest control (dezinsektsiya, deratizatsiya) | Licensed activity (Law on licensing) | Licensing at a ministry counter. No software vendors visible | Unknown | Rejected | Licence exists, but no evidence of recurring per-job reporting. Buyers cannot pay foreign vendors. |
| Fuel and lubricant retail | Licensed activity (Law on licensing) | State-controlled distribution (Turkmennebit / Turkmengaz network, unverified) | Unknown | Rejected | State monopoly in practice. |
| Pharmacies | Licensed pharmaceutical activity | Counter licensing | Unknown | Rejected | State-dominated supply (Türkmendermanserişdeleri, unverified). Closed systems. |
| Freight forwarding | Licensed activity (Law on licensing) | Customs and FX are state-controlled | Unknown | Rejected | Pain is FX access, which software cannot fix (country report). |
| Taxi / minibus operators | No Turkmenistan-specific 2025 rule found. Neighbours (Kazakhstan, Uzbekistan, Kyrgyzstan) added taxi registration or licensing in 2025 | Police-controlled. Reports of arbitrary enforcement (car colours, 2019) | Unknown | Rejected | No published obligation, no portal, no payer. |
| Bazaar / market traders | Registration as a private entrepreneur with the tax authority (Law on entrepreneurial activity, Art. 9) | Registration at the tax office | Part of about 29,000 private entities | Rejected | 2% turnover tax is simple. Paper or in-person filing. No FX payment route. |
| Private schools / tutoring centres | Education is a licensed activity | Counter licensing | Small | Rejected | Same access barriers. |

## 2. Strongest opportunities

**None.** No candidate passes the brief's final decision rule. Every row fails at least these criteria:
- **Buyer can pay:** no. Private firms have no legal FX for foreign SaaS.
- **Product deliverable:** no. Hosted services sit behind filtering and /16 IP blocks.
- **System accessible:** no. Receiving bodies are state counters or state portals with no APIs.
- **Founder access:** a non-local solo founder could not sell here. Even a local founder would need a local legal entity, a local-currency business model and state approval to integrate.

The only theoretically viable shape would be a **local, TMT-billed, done-for-you service**: a clerk filling licence and veterinary paperwork, run by a resident. That is a services business, not indie software, and it is out of scope.

## 3. Rejected

- **Livestock movement / veterinary certificate helper.** The state vet issues the paper and the state controls hide and leather export. No payer, no portal.
- **Licensed-activity renewal tracker** for disinfection, seed, fuel, pharmacy and education licences. A real obligation exists (Law "On licensing of some activities", new edition), but the licensing ministries handle it at the counter. The market is small, and FX and internet barriers block a foreign vendor.
- **Taxi / minibus registration tool.** No published Turkmen obligation found. The 2025 taxi rules found apply to Kazakhstan, Uzbekistan and Kyrgyzstan (those countries' own reports should cover them).
- **SME tax / statistical filing helper.** Killed in the country report: free state platform, simple 2% turnover tax.

## 4. Method notes

- Russian-language queries for official texts worked best: "закон Туркменистана о лицензировании", turkmenistan.gov.tm, and the FAOLEX PDFs. They surfaced the licensed-activity list and the new dog-breeding law.
- English and Russian queries for specific quiet industries (taxi, livestock bazaars, scrap) returned mostly results from neighbouring countries. Turkmenistan publishes almost no enforcement news, registers or forms online. No Turkmen-language queries were tried.
- Stopped at 6 of 8 searches. More searching would not change the access verdict, which is set by FX and internet controls rather than by the lack of industry detail.

## Sources

- Law "On licensing of some activities" (new edition): https://turkmenistan.gov.tm/index.php/ru/post/34942/zakon-turkmenistana-o-litsenzirovanii-otdelnykh-vidov-deyatelnosti-(novaya-redaktsiya)* ; https://faolex.fao.org/docs/pdf/tuk105943.pdf
- How to obtain a licence: https://orient.tm/ru/post/45375/poluchenie-licenzii-v-turkmenistane-kak-uzakonit-svoyu-deyatelnost ; https://business.com.tm/ru/post/4650/kak-poluchit-licenziyu-dlya-vedeniya-licenziruemogo-vida-deyatelnosti
- Law on dog breeding and cynological activity: https://www.turkmenistan.gov.tm/ru/post/65076/zakon-turkmenistana-o-sobakovodstve-i-kinologicheskoj-deyatelnosti
- Registration of private entrepreneurs / doing-business tests: https://gratanet.com/publications/tests-of-doing-business-and-penalties-for-unregistered-entities-considered-as-doing-business-in-turkmenistan ; https://afghanistan.tmembassy.gov.tm/en/news/49440
- Leather export restriction and Turkmenderi: https://leathermag.com/?p=6196
- Veterinary requirements (Russia–Turkmenistan): https://fsvps.gov.ru/importexport/turkmeniya/veterinarnye-trebovaniya-95/
- Private sector of 29,000 entities and tax regime: https://turkmenhemrasy.gov.tm/en/news/892
- E-document law and e.gov.tm: https://uae.tmembassy.gov.tm/en/news/63611
- Internet blocking: https://timesca.com/turkmenistan-tightens-internet-blocks-to-promote-state-controlled-vpns/ ; https://en.turkmen.news/news/dozens-of-foreign-websites-social-networks-blocked-in-turkmenistan/
