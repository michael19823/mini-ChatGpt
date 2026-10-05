# Zimbabwe: opportunity research

**Status: partial, low-confidence.** The shared WebSearch quota ran out after 2 successful searches
(a third returned "You've hit your usage limit"). The agent instructions say to stop and write up
when a search is refused, so this report rests on those two searches. Anything not backed by one
of them is marked **unverified**, and those items need checking before anyone acts on them.

## Accessibility check

- **Sanctions (unverified in this session):** as far as I know, the US ended its country-wide
  Zimbabwe sanctions program in March 2024 and moved to Global Magnitsky designations of named
  individuals. The UK and EU keep targeted measures. Selling generic SaaS to private Zimbabwean
  businesses therefore looks legally possible, but screen every customer against the SDN, UK and
  EU lists.
- **Payments and currency (unverified):** the economy runs on both USD and ZiG. Collecting card
  payments from abroad is unreliable, and businesses often pay in USD by bank transfer, mobile money
  (EcoCash) or locally issued Visa cards. Expect collection friction and keep prices in USD.
- Verdict: **accessible with friction.** This is not a closed market.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All SMEs that process personal data (clinics, schools, microfinance, retailers, security firms) | POTRAZ data-controller licence, annual renewal, inspection readiness under the Cyber and Data Protection Act | **Shortlisted** | It is mandatory, it recurs every year, inspections start 1 Sep 2026, and the competition seen so far is law firms and generic tools |
| Tobacco contractors and merchants | TIMB contractor compliance, grower payment, labour-code and traceability evidence | Poor distribution | Only about 48 licensed contractors, and merchants already run their own traceability systems |
| All VAT-registered businesses | ZIMRA fiscalisation (FDMS / fiscal device) reconciliation | Rejected (unverified) | Many accredited fiscal-device and POS vendors already exist, so I could not confirm a gap without searches |
| Private schools / clinics | Sector reporting | Not researched | No search budget left |
| Mining subcontractors | Environmental (EMA) and mining reporting | Not researched | No search budget left |

## Opportunities

### Opportunity: POTRAZ data-controller licence and inspection-readiness kit for SMEs

**Industry:**  
Cross-industry, aimed first at private clinics, private schools, microfinance institutions, security companies and HR/payroll bureaus (all hold sensitive personal data on 50 or more people)

**Buyer:**  
Owner, compliance officer or appointed Data Protection Officer (DPO) at a Zimbabwean SME, or the accounting/legal firm acting as outsourced DPO for several SMEs

**Trigger / Why now:**  
The licensing requirement took effect in September 2024 and the deadline to comply was 12 March 2025. Many organisations are reported as still unregistered. **POTRAZ starts mandatory compliance inspections and assessments of data controllers on 1 September 2026.** Licences last 12 months and must be renewed at least 3 months before they expire, so the task comes back every year.

**Current workflow:**  
1. Work out the licence tier (fees of US$50–2,000 depending on tier, plus a US$30 application fee).
2. Fill in the POTRAZ application by hand, often with a law firm or consultant's help.
3. Put together the supporting material (processing activities, DPO appointment, policies) from Word and Excel files.
4. Track the renewal date (3 months before expiry) and keep evidence ready for an inspection.

**Pain:**  
Licence fees are publicly criticised as a "costly burden" (CITE). Many firms missed the 2025 deadline, and inspection enforcement now creates penalty risk. MISA Zimbabwe has published compliance guidance, which suggests controllers are confused about what they must do.

**Existing solutions:**  
Local law firms and consultancies offering CDPA compliance services (e.g. Mawere Sibanda Legal Practitioners publishes guidance); generic privacy-compliance SaaS (ConsentStack lists ZW CDPA); manual templates. Local DPO-training providers exist but are unverified.

**The gap:**  
I found no cheap, Zimbabwe-specific tool that works out the tier, pre-fills the POTRAZ licence pack, keeps a record of processing activities, tracks the renewal date and produces an evidence pack for an inspection. This is **unverified**: I had no budget to check local vendors properly.

**Possible product:**  
A "CDPA compliance in a box" web app. It asks a short questionnaire, then produces the licence application pack, a register of processing activities and policies, and runs a renewal and inspection-readiness calendar. A multi-client dashboard serves firms acting as outsourced DPOs.

**MVP:**  
A tier calculator, an auto-generated record of processing activities and privacy policy, a renewal reminder, and an inspection checklist with an evidence locker. Start with one vertical: private clinics.

**Pricing hypothesis:**  
US$15–40/month per SME, or US$100–200/month for a consultancy managing 10+ clients (estimate).

**How to find first customers:**  
The POTRAZ list of licensed controllers, if published (unverified). Medical and Dental Practitioners Council registers for clinics. Associations of private schools. The Microfinance association member list (ZAMFI, unverified). Partnership with law and accounting firms that run DPO courses.

**Risks:**  
Willingness to pay is low and USD collection is hard. Lawyers may bundle templates for free. POTRAZ might add its own portal or simplify the rules. This is an annual task, so the recurring value depends on inspections being enforced for real. The format of generic compliance tools is easy to copy.

**Kill condition:**  
POTRAZ does not actually carry out inspections after 1 Sep 2026. Or, in interviews, SMEs say a one-off US$100–300 lawyer pack is enough.

**Score:** 5/10

**Sources:**  
- https://cite.org.zw/potraz-data-licence-fees-slammed-as-costly-burden-on-businesses-and-consumers/
- https://zimbabwe.misa.org/2025/03/14/navigating-the-data-protection-act-requirements-ensuring-compliance-for-zimbabwean-data-controllers
- https://zimbabwe.misa.org/2024/11/09/misa-zimbabwe-analysis-and-position-on-new-data-regulations
- https://maweresibanda.co.zw/?p=4048
- https://www.consentstack.io/regulations/zw-cdpa
- https://techpoint.africa/?p=357363

## Rejected after competitor research

- **ZIMRA fiscalisation reconciliation (FDMS).** Fiscalisation is mandatory, but there are many
  ZIMRA-accredited fiscal-device, POS and ERP vendors, and accounting packages already cover it.
  I could not verify an exception-handling gap. The rejection is **provisional**: I could not
  check the vendor landscape (search refused).

## Attractive problem, poor distribution

- **Tobacco contractor compliance and grower traceability.** TIMB licensed 48 contractors and
  46 Class A buyers for 2025/26 and barred 5 contractors over payment and contract irregularities.
  It also enforces an Agricultural Labour Practices Code and a Contractors Compliance
  Administrative Framework. The pain is real, but there are only about 94 buyers, the big
  merchants already run their own traceability and monitoring systems (about 60% of production is
  contracted), and selling to them looks like enterprise procurement. Deforestation pressure is
  real (60,000+ ha a year), but I found no evidence that EU deforestation rules (EUDR) cover tobacco.
  Sources: https://newsday.co.zw/theindependent/local-news/article/200006072/timb-puts-contractors-owing-tobacco-growers-on-notice ,
  https://www.coresta.org/node/32872 , https://businesstimes.co.zw/timb-tightens-grip-to-seal-tobacco-marketing-leakages/ ,
  https://www.heraldonline.co.zw/timb-rebrands-to-promote-sustainability/

## Too competitive

- ZIMRA fiscal devices and POS (see above; provisional).

## Recommended follow-up (when search budget is available)

ZIMRA FDMS exception workflows; EMA environmental licensing for mining subcontractors; MCAZ pharmacy
controlled-drug registers; NSSA/ZIMDEF payroll filings by payroll bureaus; ZIMRA customs (ASYCUDA)
for clearing agents at Beitbridge.
