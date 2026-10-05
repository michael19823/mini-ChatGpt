# Syria: offline (quiet) industries pass

Research date: 2026-10-05. I used all 8 of my WebSearch calls, all in Arabic and in extended mode. I did not use WebFetch. The run was interrupted once by an API usage limit. The report is built from search-result snippets only, so every figure below is as reported by those snippets and was not checked against the full source.

**Context:** read the accessibility section of `research/countries/syria.md` first. Sanctions are largely lifted (the State Sponsor of Terrorism designation was removed in August 2026), but:
- payment rails are only just starting;
- rules are published in Arabic, often via SANA, Telegram or Facebook;
- purchasing power is very low.

Every quiet industry below is reachable only by an Arabic-speaking founder who is on the ground or has a local partner.

## Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Gold retailers / goldsmiths (صاغة) | May 2026 rules from the General Authority for Managing Precious Metals: mandatory standard invoice with shop name, item description, weight, gram price, making charge, date and customer name; used gold must be labelled as used on the invoice; no selling above, or buying below, the daily official price; no sales via social media; only licensed shops may sell | Daily prices are set by the Damascus goldsmiths' craft association and circulated, not served by an API; invoices are hand-written books; the ban on social-media sales pushes trade back to the counter | Unknown. No national count found. The historic Damascus Souq al-Sagha alone had 72 shops (Wikipedia) | **Shortlist** | New, specific, per-sale invoice rule with enforcement, plus a reachable craft association |
| Private bakeries (أفران خاصة) | Subsidised flour allocation; supply-control (تموين) inspections; quality and weight rules | Inspection is in person; enforcement is reported in SANA as counts of violations | Unknown. Reported 2,933 bakery violations and 51 closures in nine months (Enab Baladi 778478; the year in the snippet is unverified) | **Weak shortlist** | Enforcement is heavy, but the obliged record lives with the state, and bakeries make little money |
| Livestock exporters (sheep and goats) | Export permission by quota (e.g. 200,000 head); veterinary inspection and certificates to WOAH standards; destination-country approval; exporter performance bond | Veterinary checks happen at the quarantine station or border; Iraq suspended livestock transit | Unknown, probably dozens of exporters (estimate) | **Shortlist (weak)** | Real per-shipment paperwork, but few buyers, and the state issues the documents |
| Livestock keepers (national ear-tagging register) | Ministry of Agriculture project to number and register livestock, starting with cattle | The register is ministry-run; the tagging is done by vets in the field | Unknown | Reject | The government owns the register; farmers would not pay |
| Scrap metal dealers | Export of all metal scrap banned (iron, copper, aluminium, lead) by the Ministry of Economy and Industry; I found no police dealer register | No dealer register was found in search | Unknown | Reject | The ban removes the export paperwork, and no domestic register obligation was found |
| Money changers / remittance offices | Central Bank of Syria (CBS) licence and register of exchange firms; firms formerly in opposition-held areas must regularise, including a deposit of at least USD 1.25M at CBS | Licence application is on a paper form at the bank; the register is held by the Government Commissioner to Banks | Unknown | Reject | Not small operators: a USD 1.25M deposit puts this in core-banking and AML vendor territory |
| Household employers (domestic workers) | No evidence of a formal social-security or work-permit workflow for households | — | — | Reject (not searched) | Domestic work is informal; there is no filing trigger |
| Pawnbrokers / second-hand dealers | No evidence found | — | — | Not searched | Budget |
| Minibus (سرافيس) operators | Fuel allocation and route licences (from general knowledge, not searched) | — | — | Not searched | Budget |
| Halal / slaughterhouses, beekeepers, well drillers | Not searched | — | — | Not searched | Budget; no trigger surfaced |

Groups specific to Syria that I added: goldsmiths under the new Precious Metals Authority, private bakeries under flour-allocation control, and livestock exporters under the export quota and veterinary regime.

## Opportunities

### Opportunity: Compliant gold-shop invoice book and daily-price register (Arabic)

**Industry:**
Gold retail and goldsmith shops

**Buyer:**
The owner of a licensed gold shop (محل صاغة). These are family-run and concentrated in souqs in Damascus, Aleppo, Homs and Hama.

**Trigger / Why now:**
In May 2026 the General Authority for Managing Precious Metals issued binding rules for selling and buying gold:
- Every sale must be on a standard invoice listing the shop name and address, item description, weight, gram price, making charge, date and customer name.
- Used items must be declared as used on the invoice, and their making charge capped at half that of new items.
- Shops may not sell above the daily official price or buy below it.
- No sales through social media.
- Sales are restricted to licensed shops.

In July 2026 the same authority halted imports of gold coins and ounces. The market is clearly being formalised fast.

**Current workflow:**
1. Each morning the shop gets the daily price from the goldsmiths' association, usually via a WhatsApp or Telegram broadcast (channel unverified).
2. The shop owner writes a carbon-copy invoice by hand for each sale and works out weight × gram price + making charge on a calculator.
3. Used gold bought from customers is recorded, or not, in a paper book. Its purity has to be checked before resale.
4. During an inspection the inspector compares invoices against the official price of that day.

**Pain:**
- The rule is new and specific to each sale.
- The making-charge cap for used gold and the "not above or below the daily price" rule are easy to break by hand.
- Supply-control enforcement in Syria is very active: more than 34,000 violations and 380 closures over nine months were reported for all trades (Enab Baladi 778478; the year is unverified).
- I found no gold-specific fine figures (unverified).

**Existing solutions:**
- Printed carbon invoice books from local stationers.
- Calculators and Excel.
- Generic Syrian accounting packages such as Al-Ameen (most have a jewellery module? unverified).
- Regional jewellery point-of-sale software (Gulf vendors, not localised to Syrian rules; unverified).

**Offline evidence:**
- Prices come out daily from a craft association, not through an API.
- The new rules push sales back to the counter.
- My searches found no Syrian gold-shop software.

**Offline channel:**
- The Craft Association for Goldsmithing and Jewellery Making in Damascus (الجمعية الحرفية للصياغة وصنع المجوهرات بدمشق) and its equivalents in Aleppo and Homs.
- Walking the souqs: shops are clustered physically.
- Invoice-book printers who already supply these shops.

**Market count:**
Unknown. No national register was found. The Damascus Souq al-Sagha historically had 72 shops. A national figure in the low thousands is an estimate.

**The gap:**
Nothing turns the daily official price plus the new invoice fields into a compliant, printable invoice and a register of used-gold purchases that a shop can show an inspector.

**Possible product:**
An Arabic phone or tablet app with a small Bluetooth receipt printer that:
- pulls in the day's official price;
- calculates the line from weight, karat and making charge, applying the used-gold cap;
- prints the mandatory invoice;
- keeps a searchable register of sales and used-gold purchases for inspections.

**MVP:**
An offline-first Android app with a manually entered or broadcast daily price, an invoice template with all mandatory fields, PDF/print output and a daily summary.

**Pricing hypothesis:**
USD 5–15 per month (estimate), or a one-off setup fee sold with the printer. The buyer would pay for a done-for-you setup rather than for software alone.

**How to find first customers:**
Through the association office and by visiting souq clusters in person, then by word of mouth among neighbouring shops.

**Risks:**
- The authority or association may issue its own app or invoice book.
- Shops may avoid recording customer names to stay informal.
- Collecting payment is hard.
- A non-local solo founder cannot sell this. It needs a local partner.

**Kill condition:**
- The authority mandates its own e-invoice app, or
- shop owners say inspectors only check printed price boards and not invoices.

**Score:** 4/10 (pain 6, frequency 9, mandatory 8, fragmentation 2, competition 6, incumbent gap 5, accessibility 6, willingness to pay 3, MVP 8, distribution 6. Weighed down by willingness to pay, the unknown market size and the founder-access problem.)

**Sources:**
- https://sana.sy/economy/2473815/ (rules on selling and buying gold)
- https://sana.sy/economy/2473652/ (ban on sales via social media)
- https://www.alarabiya.net/aswaq/economy/2026/05/13/سوريا-تعلن-عن-ضوابط-جديدة-لبيع-الذهب-قرار-خاص-بالتسويق-الالكتروني
- https://thawra.sy/local/سوق-الذهب-الضوابط-الجديدة/
- https://www.enabbaladi.net/815636/ (halt on gold coin imports, July 2026)
- https://manhom.com/شركات/نقابة-الصاغة-في-دمشق/ (craft association sets daily prices)
- https://ar.wikipedia.org/wiki/سوق_الصاغة (72 shops historically)

---

### Opportunity: Livestock-export shipment file for small exporters

**Industry:**
Live sheep and goat export (Awassi sheep)

**Buyer:**
Livestock export traders and their clearance agents

**Trigger / Why now:**
- The ministry has allowed export quotas, for example 200,000 head of sheep and goats.
- Exporters must post a performance bond.
- Shipments must meet WOAH-standard veterinary checks and have destination-country approval.
- Iraq suspended livestock transit, which forces changes of route and documents.

**Current workflow:**
1. The exporter applies for a share of the quota.
2. The exporter posts the bond.
3. Animals are gathered, then inspected and certified by a vet at quarantine.
4. The exporter collects destination approval and clears customs at the Ports Authority.

All of this is on paper, by hand, at counters (assumed; not verified in detail).

**Pain:**
A delay at the border means the animals suffer and the exporter loses money. The quota and the destination rules change often.

**Existing solutions:**
- Customs brokers.
- Ministry and quarantine paper forms.
- Excel.

**Offline evidence:**
Inspection happens at quarantine stations, and the documents are issued by the state.

**Offline channel:**
- Livestock traders' markets.
- Chambers of agriculture.
- Customs brokers at the Nasib and Bukamal crossings (unverified).

**Market count:**
Unknown. Probably dozens of active exporters (estimate).

**The gap:**
A per-shipment checklist and document pack that follows each destination's rules (Gulf states, Iraq, Jordan).

**Possible product:**
A checklist for each destination and a file tracker per shipment.

**MVP:**
A WhatsApp-delivered checklist and document tracker for each destination.

**Pricing hypothesis:**
USD 20–50 per shipment (estimate).

**How to find first customers:**
Through customs brokers and livestock markets.

**Risks:**
- The market is tiny.
- The state controls the documents.
- Exports are politically sensitive and quota-driven.
- A local is needed.

**Kill condition:**
There are fewer than 50 active exporters, or the brokers already bundle this service.

**Score:** 2/10

**Sources:**
- https://shaam.org/news/syria-news/السماح-بتصدير-200-ألف-رأس-أغنام-وماعز-من-سوريا
- https://sana.sy/economy/syrian-economy/2484102/
- https://ultrasyria.ultrasawt.com/ (Iraq transit suspension; full URL in the search log)
- https://alwatan.sy/اللجنة-الاقتصادية-توافق-على-فرض-كفالة/ (exporter bond; date unverified)

## Rejected

- **Scrap-metal dealer register:**
  - The search found no police or municipal dealer register in Syria.
  - The ministry banned all metal scrap exports (Enab Baladi 753794), so there is no export documentation flow.
  - Search results about Jordan and Egypt were not relevant.
- **Money-changer compliance:**
  - Firms need a CBS licence and a USD 1.25M deposit (CNBC Arabia, March 2025), so these are not small operators.
  - The substitutes are core-banking and AML vendors plus lawyers.
- **Private-bakery flour and inspection log:**
  - Enforcement is heavy: about 2,933 violations and 51 closures reported.
  - But flour allocation is recorded by the state (Ministry of Internal Trade), and margins are thin.
  - The sources were Enab Baladi 778478 and Al-Watan.
- **National livestock tagging register:** the ministry runs it; farmers would not pay.
- **Household employers:** there is no formal filing obligation.

## Method notes

- Arabic regulator-first queries worked well when anchored on a named authority, for example "الهيئة العامة لإدارة المعادن الثمينة" (the precious-metals authority) or "مصرف سوريا المركزي" (the central bank). SANA, Enab Baladi and Al-Watan carry the decisions.
- Generic "licence + register" queries returned results from Jordan, Egypt and Saudi Arabia (for example, scrap licensing in Jordan and livestock tagging in Saudi Arabia). Always include "سوريا" (Syria) and an authority name.
- No Syrian body publishes a register count. Every market count here is unknown or an estimate.
- An 8-search budget was enough only to confirm triggers, not to do competitor diligence. The gold invoice idea needs a local interview before any further work.
