# China: Country Research (Indie-Hacker Opportunity Study)

**Research date:** 2026-10-05
**Research depth: LIMITED.** The session's shared WebSearch cap was hit after 4 searches (the 4th was refused with "usage limit"). As the agent instructions require, I stopped there and wrote up what I had. This report covers only the accessibility check and one outward-facing (export-compliance) track. Treat everything here as a first pass. A rerun with budget should test the "unverified" items below.

---

## 0. Accessibility check (most important finding)

**Verdict: Selling software to Chinese SMEs for domestic compliance workflows is effectively inaccessible to a foreign solo founder.** The one practical route is narrow: software hosted outside China and sold to Chinese exporters for *foreign* (EU/US) compliance obligations.

Evidence and reasoning:
- **Hosting SaaS in China needs a licence.** It requires a Value-Added Telecommunication Services (VATS) licence, which for SaaS usually includes an ICP licence. Foreign ownership of an ICP-licensed entity has generally been capped at 50% and still needs approval ([Harris Sliwoski, "SaaS in China: The 101"](https://harris-sliwoski.com/chinalawblog/saas-in-china-the-101/); [Conventus Law](https://conventuslaw.com/report/opportunities-for-foreign-saas-companies-in-china/)).
- **The pilot opening does not help a solo founder.** MIIT's October 2024 pilot lets foreign firms wholly own some VATS businesses, but only in Beijing, Shanghai, Hainan and Shenzhen, and only after individual approval. The first batch was just 13 foreign-invested enterprises ([Belt and Road Portal](https://eng.yidaiyilu.gov.cn/p/0REM7F1I.html); [Digital Policy Alert](https://digitalpolicyalert.org/change/13501-miit-order-approving-13-foreign-invested-firms-to-establish-data-centers)). That is not a route for a solo founder.
- **Enforcement against foreign software providers is active.** IPVM reports enforcement against foreign AI and video-surveillance SaaS providers that operate without VATS licensing ([IPVM](https://ipvm.com/reports/vats)).
- **Other practical barriers (from general knowledge, not re-verified in this run):**
  - Domestic compliance workflows (Golden Tax / 全电发票 e-invoicing, social insurance, environmental 排污许可 reporting, food traceability) are tied to government portals. Large local vendors already serve them: Kingdee (金蝶), Yonyou (用友), Baiwang (百望) and Aisino (航天信息). The tax e-invoicing vendors are themselves licensed or state-linked.
  - Payment runs on WeChat Pay and Alipay, which needs a local entity.
  - PIPL and data-localisation rules apply to personal data.
  - Selling depends on WeChat ecosystems and local-language sales channels.
- **Sanctions:** China is not under a general US/EU/UK software embargo. Export-control (EAR) and entity-list screening of individual customers still applies.

**Outward-facing route (accessible):** Chinese exporters must produce data for EU/US buyers under:
- CBAM (definitive phase from 2026-01-01)
- the EU Battery Regulation (carbon footprint and due diligence; battery passport from 2027)
- EUDR
- US UFLPA supply-chain tracing

A tool hosted outside China, priced in USD or EUR, and sold to the export or quality department of an exporting manufacturer avoids the VATS/ICP issue. The data it handles is mainly production and energy data. Whether that falls under China's "important data" export rules needs checking. This is the only track I researched further.

---

## 1. Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Steel / aluminium downstream fabricators (fasteners, pipe fittings, aluminium articles) exporting to EU | CBAM embedded-emissions data packages for EU importers | **Candidate (weak)** | Real mandatory pain from 2026. But many CBAM SaaS tools and Chinese certifiers/consultants already serve it. |
| Battery / e-bike / power-tool exporters | EU Battery Regulation carbon footprint and due diligence | Not verified (search refused) | Plausible future pain. Large Chinese cell makers have in-house teams and big consultancies (unverified). |
| Domestic e-invoicing (全电发票) for SMEs | Invoice issuance and reconciliation | **Inaccessible** | Licensing; served by Baiwang, Aisino, Kingdee, Yonyou and the free tax-bureau platform (from general knowledge). |
| Domestic environmental reporting (排污许可 / pollutant discharge permits) | Monthly/annual permit execution reports | **Inaccessible** | Chinese-language government portals; local environmental consultancies; needs a VATS/ICP-licensed local presence. |
| Food / cold-chain traceability (domestic) | Provincial traceability platforms | **Inaccessible** | Provincial government platforms; local vendors; licensing. |
| Cross-border e-commerce sellers (Amazon/Temu suppliers) | EU GPSR / EPR registration documentation | Not researched (budget) | Probably crowded with Shenzhen service agencies (unverified). |

---

## 2. Strongest opportunities

Only one candidate cleared minimal diligence, and even it scores low. There are not 3 to 7 credible opportunities to report from this run.

### Opportunity: CBAM supplier-side emissions data pack for small Chinese downstream steel/aluminium exporters

**Industry:**
Small manufacturers: fasteners, steel articles, aluminium articles (CN chapters 72, 73, 76) exporting to the EU.

**Buyer:**
Export manager or quality/EHS manager at a Chinese SME fabricator. Typical sources of these firms are the Ningbo/Jiaxing fastener cluster and Foshan aluminium (cluster names from general knowledge, unverified). These SMEs buy steel or aluminium inputs and get emissions-data requests from EU importers.

**Trigger / Why now:**
- CBAM's definitive phase began 2026-01-01.
- EU importers buy their first certificates for 2026 imports from 2027-02-01.
- Missing verified data means high default values. China-specific defaults are given as, for example, 5.304 tCO2e/t for CN 7616, and these increase through 2028 ([China Briefing](https://www.china-briefing.com/news/eu-cbam-2026-china-based-manufacturing-impact-investment-strategy/)).
- Most steel and aluminium products need verified emissions data from input suppliers too, not only from the exporter ([China Briefing](https://www.china-briefing.com/news/eu-cbam-2026-china-based-manufacturing-impact-investment-strategy/); [PwC](https://www.pwc.ch/en/insights/cbam-in-focus-preparing-for-the-definitive-regime.html)).

**Current workflow:**
1. The EU importer sends the EU Commission's Excel communication template, or its own questionnaire.
2. The exporter collects electricity and fuel data per installation, plus production volumes.
3. The exporter chases input-steel suppliers (mills) for precursor embedded emissions, often unsuccessfully.
4. A consultant or certification body calculates the figures and arranges verification.
5. The exporter re-sends similar data to each EU customer in a different format.

**Pain:**
- Default values directly raise the EU buyer's cost, so the exporter risks losing price competitiveness or the customer.
- Requests repeat per customer and per period.
- Precursor data from mills is hard to obtain.

The problem evidence comes from the official regime as summarised by China Briefing and PwC. I could not obtain direct complaint evidence (budget).

**Existing solutions:**
- CBAM-focused SaaS: Kolum.earth (Berlin) and Carbbit ([Dealroom](https://app.dealroom.co/companies/kolum_earth); [Net Zero Compare](https://netzerocompare.com/software/carbbit)).
- A CBAM SaaS listed for sale on Acquire, which suggests indie-level entry is easy and the space is commoditising ([Acquire listing](https://app.acquire.com/startup/4bnb0a1vfg-eu-cbam-compliance-saas-mandatory-regulation-100k-importers-need-this-software)).
- Port-community and broker tools such as Portbase's Carbon Pricing Platform ([Portbase](https://www.portbase.com/en/marketplace/the-carbon-pricing-platform/)).
- AWS China's "carbon data lake" CBAM solution for larger firms ([AWS China blog](https://aws.amazon.com/cn/blogs/china/respond-to-cbam-with-the-help-of-aws-carbon-data-lake-solution/)).
- Chinese carbon-accounting vendors and certification bodies (e.g. Carbonstop 碳阻迹, plus TÜV, SGS and CQC consulting arms). These are from general knowledge and were not verified in this run.

**The gap (hypothesis, unverified):**
- Most CBAM tools are built for the *EU importer/declarant* side.
- The supplier side has three possible gaps:
  - a multi-customer response tool in Chinese for small fabricators;
  - one installation dataset exported into each importer's template;
  - tracking of precursor-mill data requests.
- These may be under-served by software but are heavily served by consultants. Chinese domestic carbon vendors may already offer exactly this.

**Possible product:**
A bilingual (Chinese/English) "CBAM supplier passport". The fabricator enters installation energy and production data once. The tool computes embedded emissions per CN code under the EU methodology, tracks precursor data from mills, and outputs the EU communication template for each importer.

**MVP:**
- Excel-in, Excel-out web app for one product family (fasteners, CN 7318).
- Outputs the official EU supplier communication template.
- Includes a precursor-default fallback calculator.

**Pricing hypothesis:**
- USD 100–300 per installation per month, or a per-report fee of about USD 200–500.
- This is an estimate. Price pressure from free consultant templates and importer-provided tools is likely.

**How to find first customers:**
- Exhibitor lists from trade fairs: Canton Fair; Fastener Fair Stuttgart's Chinese exhibitors.
- Chinese fastener industry association member lists (unverified).
- EU importers who want their suppliers onboarded (a B2B2B channel).

**Risks:**
- Crowded tool space.
- Chinese-language sales and WeChat distribution are hard for a foreign solo founder.
- Collecting payment from Chinese SMEs in foreign currency is hard.
- Data-export sensitivity ("important data" rules).
- Verification still needs an accredited verifier, so software does not remove the consultant.
- EU simplifications: the 2025 Omnibus de-minimis threshold of 50 t/yr, if confirmed, removes many small importers.

**Kill condition:**
Kill the idea if either is true:
- Interviews show EU importers or Chinese certifiers already supply free supplier templates and data portals.
- Chinese carbon vendors (Carbonstop etc.) already sell a cheap supplier-side CBAM module.

Either is likely, so first check Chinese vendor offerings.

**Score:** 4/10

**Sources:**
- https://www.china-briefing.com/news/eu-cbam-2026-china-based-manufacturing-impact-investment-strategy/
- https://www.pwc.ch/en/insights/cbam-in-focus-preparing-for-the-definitive-regime.html
- https://iisd.org/publications/guide/navigating-eu-carbon-border-adjustment-mechanism
- https://app.dealroom.co/companies/kolum_earth
- https://netzerocompare.com/software/carbbit
- https://app.acquire.com/startup/4bnb0a1vfg-eu-cbam-compliance-saas-mandatory-regulation-100k-importers-need-this-software
- https://www.portbase.com/en/marketplace/the-carbon-pricing-platform/
- https://aws.amazon.com/cn/blogs/china/respond-to-cbam-with-the-help-of-aws-carbon-data-lake-solution/

---

## 3. Rejected after competitor research / accessibility

- **Domestic SME compliance SaaS of any kind:** Rejected on accessibility. It needs VATS/ICP licensing, foreign ownership is capped at 50% outside the four-area pilot, and enforcement is active ([Harris Sliwoski](https://harris-sliwoski.com/chinalawblog/saas-in-china-the-101/); [IPVM](https://ipvm.com/reports/vats); [Belt and Road Portal](https://eng.yidaiyilu.gov.cn/p/0REM7F1I.html)).
- **Domestic e-invoicing reconciliation:** Rejected. It is dominated by licensed incumbents (Baiwang, Aisino, Kingdee, Yonyou) and the free national tax platform. These incumbents come from general knowledge and were not re-verified in this run.
- **Generic CBAM calculator for EU importers:** Rejected as too competitive. Kolum, Carbbit and Portbase already serve it, and indie CBAM SaaS is being sold off on Acquire.

## 4. Attractive problem, poor distribution

- **CBAM / EU Battery Regulation supplier data for Chinese SMEs.** The pain is real and mandatory. But reaching the buyer needs Chinese-language, WeChat-based selling and local payment, which a foreign solo founder can hardly provide.

## 5. Too competitive

- CBAM importer-side declaration software (EU-wide market, many tools).
- Domestic carbon accounting in China (local vendors plus certification bodies; unverified detail).

## 6. Not researched (search cap hit): recommended for a rerun

- EU Battery Regulation due diligence and carbon footprint for e-bike, power-tool and energy-storage SMEs.
- EUDR for Chinese importers and re-exporters of wood, rubber and leather.
- US UFLPA supply-chain tracing documentation for apparel and solar component suppliers.
- EU GPSR / EPR documentation for cross-border e-commerce sellers.
