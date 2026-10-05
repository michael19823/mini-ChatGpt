# Azerbaijan: opportunity research

**Researched:** 2026-10-05. Mid-size market (about 10M people). I used 12 WebSearch calls (WebFetch not used). I searched in English and Azerbaijani.

**Accessibility:** A foreign solo founder can legally sell software here. Azerbaijan is not under US, EU or UK sanctions on software or IT services, and the internet is open for business use. Practical frictions:
- Whether Stripe supports Azerbaijan as a merchant country is *unverified*. Selling from a foreign entity through a merchant of record (Paddle or similar) is the likely route.
- Since 23 Aug 2026, non-resident B2C e-service providers with annual sales above USD 10,000 must register for VAT. B2B SaaS sold to Azerbaijani companies is less affected, but check this before launch ([vatupdate](https://www.vatupdate.com/2026/07/26/azerbaijan-e-invoicing-e-reporting-country-booklet/), [EY](https://www.ey.com/en_gl/technical/tax-alerts/azerbaijan-to-require-vat-registration-for-nonresident-entities-providing-digital-services-to-individuals)).
- Every filing to the state needs an Asan İmza or SIMA signature, which is tied to the local user. A foreign tool can prepare data but usually cannot submit it on the user's behalf.
- The product must work in Azerbaijani, with Russian as a secondary language.

**Bottom line:** I found no strong standalone opportunity.
- **Core compliance is already covered.** e-qaimə (e-invoicing), VAT, e-kassa and payroll are handled by 1C partners, local SaaS and the free tools of the State Tax Service (STS).
- **Healthcare and pharmacy are state-run.** The state runs the central systems (the drug traceability system DTMS, e-prescription, the mandatory health insurance agency), so the private buyers are either few or already served by local POS vendors.
- **The one real why-now is HACCP.** Under the Food Safety Law, HACCP becomes mandatory for small and medium food businesses four years after the law took effect. The State Food Safety Program 2027–2032, approved on 10 Sep 2026, sets a target of 80% of food enterprises using HACCP and plans a unified monitoring subsystem inside AQTİS, the food safety agency's information system. That supports one weak-to-moderate idea, with large uncertainty about competition from consultants.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Accountants / all VAT payers | e-qaimə XML invoices, VAT returns, e-kassa, bank reconciliation | Too competitive | The 1C partners (Optima, AKBIS) already ship e-qaimə upload. Local SaaS such as Finex, Hesabat.az and AzMuhasib does the same, and STS gives away the free eFP offline tool and an online cabinet |
| Food processors, caterers, restaurants | HACCP plans, CCP monitoring logs, AQTA (food safety agency) inspection readiness | Candidate (weak–moderate) | Legal deadline for SMEs, plus the new 2027–2032 State Program. Consultants and paper logs are the substitute |
| Pharmacies | DTMS DataMatrix scanning, e-prescription dispensing, AEM (Analytical Expertise Center) inspections | Weak candidate | State-run DTMS. Pharmacy POS vendors (e.g. Xezeroglu's pharmacy software) already handle batches and expiry |
| Private clinics | Claims and reporting to the State Agency for Mandatory Health Insurance (İTSDA) | Rejected | Only about 92 contracted private clinics. The state controls the system, so the buyer pool is too small |
| Fruit and vegetable exporters | Customs declaration, phytosanitary certificates, buyer documents | Weak candidate | Exports are large ($589M in Jan–Jul 2026), but customs is already online (Smart Customs app, e-services portal), brokers absorb the work, and buyers are mostly in Russia and the CIS, where there is no EU-style traceability pull |
| Producers / importers of packaging | EPR reporting | Rejected (too early) | EPR is still under discussion (expert commentary, June 2026). There is no live obligation yet |
| Non-resident digital sellers | VAT registration from Aug 2026 | Rejected | One-off registration plus a periodic return, handled by global tax-compliance SaaS and local accountants |

## Opportunities

### Opportunity: HACCP record-keeping and AQTA inspection pack for small food businesses (Azerbaijani-language)

**Industry:**
Food production, processing and catering: bakeries, dairies, meat processing, restaurants and canteens.

**Buyer:**
The owner or production manager of a small or medium food business (roughly 10–100 staff), or the HACCP consultant who serves several of them.

**Trigger / Why now:**
- The Food Safety Law makes HACCP-based procedures mandatory: 2 years after the law took effect for large businesses, 4 years for medium and small ones. The law is in force, but the exact entry-into-force date is *unverified*. If it took effect in 2023, as reports suggest, the SME deadline falls around 2027.
- The State Program on Food Safety 2027–2032, approved by presidential decree on 10 Sep 2026, targets HACCP adoption in 80% of food enterprises. It also plans a Unified Monitoring Subsystem in AQTİS that food-chain businesses will be required to use.

**Current workflow:**
1. The business pays a consultant to write a HACCP plan. The deliverable is a Word or PDF binder.
2. Staff fill in paper logs: fridge temperatures, cooking and cooling CCPs, cleaning, pest control, goods receiving.
3. Before an AQTA inspection, a manager collects the logs, fills the gaps and reprints documents.
4. Corrective actions and supplier certificates live in folders and on WhatsApp.

**Pain:**
- Penalties and inspections: AQTA runs inspections, and the Administrative Offences Code sets the fines.
- SMEs have no in-house food-safety staff.
- Paper logs are routinely back-filled. This is an inference from standard HACCP practice. I found no complaint posts from Azerbaijan, so the pain is *unverified*.
- AQTA's own messaging pushes HACCP as both a requirement and a competitive advantage.

**Existing solutions:**
- Local HACCP and ISO 22000 consultants and certifiers (SGS operates in Azerbaijan).
- Paper templates.
- Global food-safety SaaS (FoodDocs, Safefood 360 and similar). None of these has a verified Azerbaijani localisation.
- 1C has no HACCP module that I could verify.

**The gap:**
There appears to be no affordable tool in Azerbaijani that:
- turns a consultant's HACCP plan into daily digital checklists, and
- produces an inspection-ready export in the format AQTA expects.

There is also no tool yet ready to feed the planned AQTİS monitoring subsystem. That subsystem is not live, which makes this an option for later, not a current gap.

**Possible product:**
A mobile-first, Azerbaijani/Russian log app with templates for each food sub-sector. It would issue CCP alerts and offer one-click "AQTA inspection pack" PDFs. It would be sold mainly through HACCP consultants as their delivery tool, with one consultant workspace serving many clients.

**MVP:**
- Templates for bakery and restaurant.
- Temperature, cleaning and receiving logs.
- Corrective-action entries.
- A monthly PDF pack.
- A dashboard for consultants who manage several clients.

**Pricing hypothesis:**
AZN 30–60 per site per month (about USD 18–35). Consultant plans at AZN 150–300 per month for 10 clients. These are estimates.

**How to find first customers:**
- HACCP consultants and trainers listed around AFSA and AFSI (the food safety agency and its institute) training programmes.
- The AQTA register of food businesses, if it is public (*unverified*).
- Bakery and dairy associations.
- Restaurant clusters in Baku.

**Risks:**
- AQTA could ship its own free logging inside AQTİS.
- Enforcement on small businesses could be soft or delayed.
- Willingness to pay among micro food businesses is low.
- Consultants may prefer to keep selling paper binders.

**Kill condition:**
- AQTA confirms that the AQTİS monitoring subsystem will include free self-monitoring logs for food businesses, or
- the SME deadline is postponed or micro/small businesses are exempted, or
- fewer than 3 of 10 interviewed consultants would pay.

**Score:** 4/10

**Sources:**
- https://afsa.gov.az/az/xeberler/qida-tehlukesizliyi-haqqinda-qanunda-qida-subyektlerinde-haccp-sisteminin-tetbiqi-nezerde-tutulur2776
- https://banker.az/qida-mu%C9%99ssis%C9%99l%C9%99rinin-80-ind%C9%99-haccp-t%C9%99tbiqi-h%C9%99d%C9%99fl%C9%99nir/
- https://azertag.az/xeber/aqta_qida_muessiselerinde_haccp_sisteminin_tetbiqi_genislendirilecek-4423206
- https://www.bayraqdar.info/2026/09/10/qida-t%C9%99hluk%C9%99sizliyinin-t%C9%99min-edilm%C9%99sin%C9%99-dair-dovl%C9%99t-proqrami-t%C9%99sdiql%C9%99nib/
- https://report.az/sehiyye-xeberler/qida-tehlukesizliyi-haqqinda-qanun-bu-gunden-quvveye-minir
- https://afsi.gov.az/az/service/haccp
- https://faolex.fao.org/docs/pdf/aze211461.pdf

### Opportunity: Pharmacy DTMS / e-prescription exception reconciliation

**Industry:**
Independent pharmacies.

**Buyer:**
The owner or head pharmacist of an independent pharmacy or a small chain.

**Trigger / Why now:**
- The drug traceability system (DTMS, GS1 DataMatrix) run by AEM is being extended to pharmacies and medical institutions after its 2024 build-out, and it is integrated with e-prescription.
- AEM ran nationwide pharmacy inspections in 2025 and pharmacies were fined.
- Generic (INN) prescribing is being introduced ("the era of brand-name drugs is ending"), which changes how prescriptions are dispensed.

**Current workflow:**
1. The pharmacy receives stock from a distributor and scans codes into the state system.
2. It dispenses against an e-prescription in the state portal.
3. It reconciles the stock in its pharmacy POS with DTMS and handles mismatches: unregistered or blocked batches and recalls.

**Pain:**
- Fines after AEM inspections (Monetar.az reported pharmacy fines).
- Recalls and blocked batches have to be handled quickly.
- The volume of reconciliation exceptions is *unverified*.

**Existing solutions:**
- The state DTMS and e-prescription portals, which are free.
- Pharmacy POS and accounting software (e.g. Xezeroglu's pharmacy program; 1C-based pharmacy configurations).
- Distributors' systems.

**The gap:**
Possibly a cross-check between the pharmacy's own stock and DTMS/recall status. Local POS vendors are much better placed to add this.

**Possible product:**
An add-on that flags recalled, blocked or expiring batches against the pharmacy's stock export.

**MVP:**
A CSV stock import, checked against published recall lists.

**Pricing hypothesis:**
AZN 20–40 per pharmacy per month (estimate).

**How to find first customers:**
- The Ministry of Health pharmacy licence lists.
- E-prescription participating pharmacies.

**Risks:**
- No public API to DTMS.
- POS incumbents can add the feature.
- The market is consolidating into chains with in-house IT.

**Kill condition:**
The main pharmacy POS vendors already show DTMS and recall status (very likely).

**Score:** 2/10

**Sources:**
- https://pharma.az/dv-t%C9%99qib-v%C9%99-izl%C9%99m%C9%99/dv-t%C9%99qib-v%C9%99-izl%C9%99m%C9%99-sob%C9%99si/d%C9%99rman-vasit%C9%99l%C9%99rinin-t%C9%99qib-v%C9%99-izl%C9%99m%C9%99-sob%C9%99si/
- https://monetar.az/biznes/aptekler
- https://az.trend.az/azerbaijan/society/3809067.html
- https://xezeroglu.com/yazilar/aptek-proqrami-derman-ucotu-son-istifade-tarixi-ve-partiya-idareetmesinde-effektiv-heller
- https://jeksonvision.com/understanding-azerbaijans-pharmaceutical-regulations-serialization-and-traceability/

### Opportunity: Fruit and vegetable exporter document pack

**Industry:**
Agricultural exporters (fruit and vegetables, hazelnuts).

**Buyer:**
The export manager at a mid-size fruit or vegetable exporter, or a freight forwarder or broker.

**Trigger / Why now:**
- Export revenue grew more than 16% (503k t, $589M in Jan–Jul 2026).
- There is no new 2026 documentation rule that I could find.

**Current workflow:**
1. The exporter assembles the invoice, packing list, quality certificate and phytosanitary certificate.
2. The customs declaration is filed through the e-services portal or the Smart Customs app, usually by a broker.
3. The same data is retyped for buyer and transport documents (CMR).

**Pain:**
Duplicate data entry across these documents. Error rates are *unverified*.

**Existing solutions:**
- Customs brokers (e.g. SGF Group).
- The state e-customs services.
- 1C.
- Excel templates.

**The gap:**
A single-entry generator for CMR, invoice and packing-list documents. It is thin: brokers already do this work for a fee.

**Possible product:**
One lot record that generates the full set of export documents.

**MVP:**
Templates for the Russian and CIS export routes.

**Pricing hypothesis:**
USD 50–100 per month or USD 5 per shipment (estimate).

**How to find first customers:**
- Lists of exporters from AZPROMO (the export promotion agency) and the "Made in Azerbaijan" programme.

**Risks:**
- Few buyers.
- Seasonal demand.
- Brokers are a cheap substitute.

**Kill condition:**
Interviews show brokers already deliver the full document pack within their fee.

**Score:** 2/10

**Sources:**
- https://www.freshplaza.com/asia/article/9863797/azerbaijan-increases-fruit-and-vegetable-export-revenue-by-more-than-16/
- https://sgfgroup.az/en/customs-declaration/
- https://wto.az/en/areas/sanitary-and-phytosanitary

## Rejected after competitor research

- **e-qaimə / VAT / e-kassa integration for SMEs.** Killed by:
  - 1C, whose official partners (Optima, AKBIS) include e-qaimə upload;
  - local SaaS (Finex, Hesabat.az, AzMuhasib);
  - the free STS eFP tool and online cabinet;
  - Dynamics 365 BC localisations.
  ([finex.az](https://finex.az/muhasibat), [1c.optima.az](https://1c.optima.az/), [hesabat.az](https://hesabat.az/aboutus), [taxes.gov.az](https://taxes.gov.az/en/page/elektron-qaime-faktura))
- **Private clinic claims to mandatory health insurance.** Killed by the small buyer pool (about 92 contracted private clinics) and the state-controlled system ([fed.az](https://fed.az/az/saglamliq/icbari-tibbi-sigortaya-kecen-klinikalarin-adlari-aciqlanib-siyahi-136481)).
- **Non-resident VAT registration helper.** Killed by global tax-compliance SaaS and local accountants. It is also mostly a one-time task.

## Attractive problem, poor distribution

- **Pharmacy DTMS reconciliation.** The pain is real and inspections are active, but pharmacy POS vendors own the channel and the data.

## Too competitive

- Accounting, e-invoicing and payroll compliance (the 1C ecosystem plus local SaaS).

## Too early

- **Packaging EPR reporting.** It is still at the discussion stage in 2026 ([newscenter.az](https://newscenter.az/2026/06/25/ekspertler-azerbaycanda-tekrar-tullantilarin-idare-edilmesi-barede-ne-dusunur.html)). Revisit once a law or decree sets the obligations.
