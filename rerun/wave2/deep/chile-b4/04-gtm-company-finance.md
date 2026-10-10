# Chile UAF kit: go-to-market, payments, company setup and financials (deep dive 04)

Date: 10 October 2026. Builds on [the B4 report](../reports/chile-b4.md), [01 law](01-law-and-requirements.md) and [02 market](02-market-and-competition.md).

Status: complete (10 October 2026).

Money: CLP (Chilean pesos) unless stated. On 9-10 October 2026: **UF 1 = CLP 41,136; USD 1 = CLP 982; EUR 1 = CLP 1,100; UTM = CLP 72,151** ([mindicador.cl](https://mindicador.cl/api)). "Net" means before 19% VAT (IVA). "My estimate" marks a planning assumption, not a sourced fact. The founder builds the software with Claude Code and AI agents, so there is no developer payroll in this plan.

## Summary

- **Use a low public price, with notaries as the paying anchor.** The plans are Solo at CLP 199,000 a year (about UF 4.8), Oficina at CLP 399,000, Notaría at CLP 890,000 and Grupo at CLP 690,000 plus CLP 59,000 per extra SPV, all + IVA. There is also a Partner plan for accountants and boutiques.
  - The closest rival, C-ONLINE, charges UF 2.5 a month + IVA plus a setup fee ([C-ONLINE](https://uaf.conline.cl/)). That is about CLP 1.23 million a year: fine for a notary, too much for a sole broker.
  - A free "Autodiagnóstico + Calendario UAF" brings in leads.
- **Timing.** The plan is an MVP by 31 October 2026, then a public launch on 1 December 2026, the day Ley 21.719 takes effect.
  - The two compulsory nil-ROE windows are the biggest hooks: 4-15 January and early July ([UAF ROE calendar](https://www.uaf.cl/media/documentos/Calendario_ROE_2026_fJZ3WvN.pdf)).
  - February is dead. March is the main push.
  - Channels in order:
    1. the public UAF register (new entrants first);
    2. notaries;
    3. compliance boutiques and accountants on referral;
    4. broker associations' courses;
    5. Spanish content.
  - Year-1 marketing: CLP 14.7 million (USD 15,000).
- **Sell from the foreign company through Paddle; no Chilean company at launch.**
  - Paddle charges in CLP and remits Chile's 19% VAT on B2C sales for 5% + USD 0.50 ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/); [Paddle currencies](https://developer.paddle.com/concepts/sell/supported-currencies); [Paddle pricing](https://www.paddle.com/pricing)).
  - Notaries and sole brokers are mostly not VAT taxpayers. They pay the 19% on top, as they do with C-ONLINE.
  - VAT-registered buyers self-assess through a "factura de compra" and take the VAT back as a credit ([SII, June 2026](https://www.sii.cl/noticias/2026/PPTIVASD08062026_2.pdf)).
  - Standard-software payments are exempt from the 15% withholding tax ([PwC](https://taxsummaries.pwc.com/chile/corporate/withholding-taxes)).
  - A seller company in a treaty country (US, UK, Spain, Ireland) is a safer base than Germany or Estonia, which are not in PwC's Chile treaty table (a Germany treaty in force is unverified).
  - Selling direct with Stripe instead would mean registering in Chile's simplified VAT regime from the first B2C sale. There is no threshold ([Stripe Tax Chile](https://docs.stripe.com/tax/supported-countries/latin-america-and-caribbean/chile)).
- **Form a Chilean SpA only when a trigger fires.** The main trigger: lost deals that cite "no Chilean factura" or "no local transfer".
  - Online registration is free. A non-resident needs a RUT through a representative resident in Chile ([SII FAQ](https://www.sii.cl/preguntas_frecuentes/rut_inicio_actividades/001_105_6823.htm)).
  - Remote setup costs USD 750-2,400. Running it costs about USD 8,600 a year (representative, bookkeeping, tax return, address, patente) ([NSS](https://www.nss.cl/en/services/international)).
  - The Pro Pyme tax rate is 12.5% to 2027 ([SII Circular 53](https://www.sii.cl/normativa_legislacion/circulares/2025/circu53.pdf)).
  - The base case assumes an SpA from May 2028.
- **Base case.** By month 36 (October 2029):
  - 295 customers;
  - ARR of CLP 124 million (about USD 126,000);
  - year-3 profit before founder pay of about CLP 49 million (USD 50,000).
  - It breaks even on a trailing 12-month basis in month 14. **Peak cash need is about CLP 18 million (USD 18,000)** with no founder pay, or about USD 39,000 with founder pay.
  - **Low case:** 103 customers and USD 37,000 ARR. It never breaks even.
  - **High case:** 586 customers and USD 280,000 ARR.
- **Exit.** The likely buyers are Regcheq (it already bought Mexico's UBCubo), C-ONLINE, screening vendors, broker CRMs or digital-notary platforms. At 2.5-4x revenue the base case is worth about USD 200,000-400,000 ([beancount.io](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)).
- **Regional expansion.** Peru is next, through a local reseller. Direct cross-border B2B sales there face 18% IGV self-assessment and a 30% withholding on digital services ([El Peruano](https://elperuano.pe/noticia/223591-impuesto-a-la-renta-consejos-para-los-contribuyentes-no-domiciliados)).
- **Kill criteria:**
  - fewer than 3 paid pilots from 40 conversations by 15 December 2026;
  - fewer than 20 paying customers by 30 April 2027;
  - fewer than 50 by 31 October 2027;
  - a first renewal rate below 50% in January 2028.
- **Verdict for this area.** It is a sound small business that needs little capital. The go-to-market risk is weak enforcement pressure on small firms, not payments or company setup. Both of those are solvable without a local company.

## Pricing and packaging

### What buyers already pay (anchors)

| Item | Price | About USD a year | Source |
|---|---|---|---|
| C-ONLINE "Sujetos Obligados - UAF" module (KYC form, PEP/UN search, enhanced due diligence, ROS/ROE alerts, manual, training) | **UF 2.5 a month + IVA**, plus a one-off setup fee "evaluated case by case". No public trial | about 1,260 + VAT, plus setup | [C-ONLINE](https://uaf.conline.cl/) |
| Lexizum screening (Starter / Profesional / Business) | UF 3 / 8 / 12 a month | about 1,510 / 4,020 / 6,030 | [Lexizum](https://www.lexizum.com/) via [02](02-market-and-competition.md) |
| Regcheq, Gesintel, Neitcom | quote only | unknown | [Regcheq](https://regcheq.com/es-cl/cumplimiento-uaf); [gesintel.cl](https://www.gesintel.cl/); [Neitcom](https://neitcom-compliance.cl/productos/empresas/) |
| Anacopro broker association | UF 6 to join, UF 2.5 a year | about 250 + 105 | [Anacopro](https://anacopro.cl/como-ser-socio-anacopro/) |
| Anacopro broker course / training pack | CLP 156,000 / CLP 289,000 | about 160 / 295 once | [Anacopro](https://anacopro.cl/producto/curso-de-corredor-de-propiedades/) |
| UC continuing-education AML course | CLP 410,000 per person | about 420 once | [UC](https://educacioncontinua.uc.cl/programas/claves-contra-el-lavado-de-activos-y-la-corrupcion/) |
| UAF e-learning campus | free, periodic intake | 0 | [UAF campus](https://capacitacion.uaf.cl/campus/) |
| Typical UAF fine in this group, 2024-2025 | UF 15-60, plus a public reprimand | about 630-2,500 once | [UAF sanctions](https://www.uaf.cl/es-cl/publicaciones-uaf/sanciones-ejecutoriadas) via [02](02-market-and-competition.md) |
| Typical broker commission | about 2% + IVA from each side of a sale | — | [RE/MAX First](https://www.remax-first.cl/cuanto-cobra-corredor-propiedades-chile/) |
| Law-firm or boutique AML manual | not published (my searches found no price) | unknown (unverified) | — |
| Broker CRMs (Wasi, Kiteprop, Tokko) | Wasi Pro about USD 30 per user a month (aggregator, country unclear); Tokko about USD 80-300 a month per agency (Argentine estimate) | 360-3,600 | [Appvizer](https://www.appvizer.es/construccion/software-inmobiliario/wasi); [Develop Argentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026) (both unverified for Chile) |

What this means:
- **C-ONLINE sets the ceiling.** UF 30 a year plus setup plus VAT is about CLP 1.23 million net. That is fine for a notary. It is too much for a sole broker, who earns about UF 60 from one side of a typical sale ([02](02-market-and-competition.md)).
- **Brokers think in "membership" and "course" amounts.** CLP 150,000-300,000 is what they already pay for a course or a year in an association. A broker kit at about CLP 200,000 a year sits in that band.
- **Notaries can pay C-ONLINE-level prices.** They are the most inspected group (38 supervisions in 2025, about 8% of notaries) and the most sanctioned in 2024-2025 ([UAF DFC 2025](https://www.uaf.cl/media/documentos/Informe_Resultados_DFC_2025_y_Plan_2026_VF_xsmFFOU.pdf) via [02](02-market-and-competition.md)).

### Proposed plans (net of 19% IVA; yearly price = 10 months)

| Plan | Who | Monthly | Yearly | In UF a year | vs. rival |
|---|---|---|---|---|---|
| **Gratis: Autodiagnóstico + Calendario UAF** | anyone on the UAF register | 0 | 0 | 0 | Lead magnet: gap check against the UAF's own top-10 gaps; email/WhatsApp reminders for the nil-ROE windows, 10-day data changes, two-year manual review and yearly training |
| **Solo** | sole broker, 1 user, 1 entity | CLP 19,900 | **CLP 199,000** | about 4.8 | C-ONLINE about UF 30 + setup |
| **Oficina** | broker firm or small developer, up to 5 users, up to 3 entities | CLP 39,900 | **CLP 399,000** | about 9.7 | Lexizum Starter UF 36 |
| **Notaría** | notary or conservador, up to 15 users, higher screening and BO volume | CLP 89,000 | **CLP 890,000** | about 21.6 | C-ONLINE UF 30 + setup |
| **Grupo** | developer group with many SPVs | — | **CLP 690,000** for 5 entities + CLP 59,000 per extra entity | about 16.8 + 1.4 each | Regcheq quote-only |
| **Partner** | accountant or compliance boutique | — | **CLP 1,190,000 for 10 client entities**, then CLP 99,000 each; or 25% resale margin on list prices | about 29 | none |

Add-ons (sold by partners, revenue split 50/50; my estimate):
- **Puesta en marcha** (done-for-you start: questionnaire, manual, client import, one live training): CLP 149,000 for Solo/Oficina; CLP 390,000 for Notaría/Grupo.
- **Revisión de carpeta de inspección** by a partner lawyer before or after a UAF visit: CLP 190,000.
- **Founding-customer offer:** 50% off the first year for the first 15 paying customers (December 2026-January 2027).

Packaging rules:
- **Every plan has every legal feature.** Plans differ only by users, entities and screening volume. A sole broker has the same legal duties as a notary ([01](01-law-and-requirements.md)).
- **Yearly is the default.** It cuts card fees per sale and churn. Monthly is offered at the price of 12 months, so yearly saves two months.
- **Show prices in CLP "+ IVA".** Chilean B2B software and services are quoted "+ IVA" (C-ONLINE does: [C-ONLINE](https://uaf.conline.cl/)). Re-set CLP prices once a year in line with the UF instead of billing in UF, because card checkouts charge a fixed amount.
- **Group pricing per entity is the key to developers.** Each SPV is its own obliged entity with its own semi-annual nil ROE ([01](01-law-and-requirements.md)). Per-entity add-on pricing captures this without scaring a one-project developer.
- **14-day free trial without a card** for Solo and Oficina; a 20-minute demo for Notaría and Grupo.

### Weighted price (used in the model)

At list price, a mix of 35% Solo, 30% Oficina, 15% Notaría, 10% Grupo (average about CLP 900,000) and 10% partner entities (about CLP 119,000 each) gives about **CLP 425,000 a year per customer** (my arithmetic). The model uses a lower effective price after discounts and partner margins: **CLP 330,000 in year 1, 380,000 in year 2, 420,000 in year 3** (base case).

### VAT (IVA) points

- A Chilean seller adds 19% IVA to software services. Since Ley 21.420 (2023), services in general carry VAT unless exempt ([Carey](https://www.carey.cl/reforma-tributaria/2022/iva-a-los-servicios-digitales/)).
- A foreign seller has no IVA to charge on sales to Chilean VAT taxpayers. The buyer self-assesses (see "Payments and tax friction"). It must charge 19% on sales to buyers who are not VAT taxpayers ([SII, June 2026](https://www.sii.cl/noticias/2026/PPTIVASD08062026_2.pdf)).
- So the list prices above are net in both cases. The buyer either pays 19% on top (non-VAT buyer) or self-assesses 19% and takes it back as a credit (VAT-registered buyer).

## Go-to-market

### Selling calendar and deadlines

| Date | Event | Use | Source |
|---|---|---|---|
| 19 Oct 2026 | UAF portal moves to Clave Única login | First content and email hook: "what changes for your OdC" | [Prieto](https://www.prieto.cl/en/uaf-implementa-autenticacion-mediante-clave-unica-en-el-portal-de-entidades-reportantes-2/); [01](01-law-and-requirements.md) |
| 19 Oct-16 Dec 2026 | ACOP broker course runs | Pitch an AML module or guest session | [ACOP](https://www.acop.cl/) via [02](02-market-and-competition.md) |
| 1 Dec 2026 | Ley 21.719 (personal data) in force | "Your client files and ID copies under the new data law" | [01](01-law-and-requirements.md) |
| 4-15 Jan 2027 | Semi-annual nil-ROE window for brokers, real-estate firms, notaries, conservadores | Biggest hook: every entity and every SPV must file, even with nothing to report | [UAF ROE calendar](https://www.uaf.cl/media/documentos/Calendario_ROE_2026_fJZ3WvN.pdf); [01](01-law-and-requirements.md) |
| January and July | UAF publishes its register of reporting entities | New entrants are the warmest leads | [UAF register](https://www.uaf.cl/es-cl/sujetos-obligados/sector-privado/inscritos-en-la-uaf) |
| February | Summer holidays; business slows sharply | Content and partner work only | my assumption (unverified) |
| March | Return to work | Main sales push; founder trip to Santiago | my assumption |
| April | Annual income-tax season ("Operación Renta") | Accountants are busy; avoid partner launches | my assumption (unverified) |
| 1-14 Jul 2027 (2026 pattern) | Second nil-ROE window | Second biggest hook | [UAF ROE calendar](https://www.uaf.cl/media/documentos/Calendario_ROE_2026_fJZ3WvN.pdf) (2027 dates unverified) |
| Mid-September | Fiestas Patrias | Slow fortnight | my assumption |
| 2027 onward | MiUAF platform gradually replaces the portal | Product update and content | [01](01-law-and-requirements.md) |
| 2026-2027 | New notaries take office after Ley 21.772 contests | Each new notary needs a system from day one | [Meganoticias](https://www.meganoticias.cl/nacional/520237-cambios-por-ley-de-notarias-23-04-2026.html) via [02](02-market-and-competition.md) |

Season factors used for new sales in the model (my estimate): Jan 0.9, Feb 0.3, Mar 1.2, Apr 1.0, May 1.1, Jun 1.2, Jul 1.3, Aug 1.1, Sep 0.8, Oct 1.1, Nov 1.1, Dec 0.9.

### Channels in priority order

1. **The public register, worked directly.** The UAF lists all 4,278 target entities by name, sector and RUT ([UAF June 2026 register](https://www.uaf.cl/media/documentos/Sujetos_Obligados_inscritos_en_la_UAF_al_30.06.2026.xlsx)). It has no emails or phones, so contacts come from websites, association member lists and the notaries' directory ([02](02-market-and-competition.md)). Start with new entrants (87 brokers, 242 real-estate entities and 43 notaries in the last year) and with the sanctions list ([UAF sanctions](https://www.uaf.cl/es-cl/publicaciones-uaf/sanciones-ejecutoriadas)).
2. **Notaries as the paying anchor.** Direct approach through the notaries' directory ([Notarios y Conservadores](https://notariosyconservadores.cl/)) and partnerships with digital-notary networks such as Despapeliza/Legaliza.io ([Descubre](https://www.descubre.vc/noticia/despapeliza-y-fundaci-n-red-notarial-impulsan-la-digitalizaci-n-notarial-en-chile-2025-09-03)). Ten notary customers bring as much revenue as about 45 Solo brokers.
3. **Compliance boutiques and accountants as resellers.** Regcheq already works this way with law firms that write AML manuals ([Regcheq partners](https://regcheq.com/es-cl/partners)). Smaller boutiques and the accountants of small brokers are not served by Regcheq. Offer the Partner plan, a 25% margin and the add-on revenue split.
4. **Broker associations and training schools.** ACOP, COPROCH and ANACOPRO run courses and member lists ([ACOP](https://www.acop.cl/); [COPROCH](https://www.coproch.cl/); [Anacopro courses](https://anacopro.cl/catalogo-cursos/)). Offer a free "UAF for brokers" module inside their courses and a member discount (15%).
5. **Content and search.** Plain-Spanish guides for brokers and notaries: nil ROE, beneficial-owner declaration, the 40-business-day red flag, the yearly training record. 02 found no such content written for brokers ([02](02-market-and-competition.md)). Small Google and LinkedIn tests only: legal B2B clicks cost USD 6-9 in the US, and LatAm clicks are said to be 40-65% cheaper ([NovoAds](https://novoads.ai/es/blog/cpc-promedio-por-industria-latam); [Semrush](https://es.semrush.com/blog/google-ads-coste/)). No Chile figure was found (unverified).
6. **Developer CRMs: later, and carefully.** PlanOK, Moby Suite and SCI already integrate Regcheq ([Regcheq partners](https://regcheq.com/es-cl/partners)). Broker CRMs such as Tokko Broker and Kiteprop show no UAF feature and are better partners ([02](02-market-and-competition.md)).

### Sales motion

- **Solo and Oficina: self-serve.** Free autodiagnóstico -> results email with the three biggest gaps -> 14-day trial -> card checkout. Target conversion: 15% of trial starts (my estimate).
- **Notaría and Grupo: assisted.** WhatsApp or phone first contact by a part-time Chilean rep, then a 20-minute video demo, then a Paddle invoice or checkout link. Target cycle: 2-4 weeks.
- **Partners: one partner manager (the founder at first).** A 45-minute onboarding, a partner kit (slides, email templates, price list) and a shared dashboard of their clients.
- **Hooks that create urgency:** the two nil-ROE windows; a UAF visit or "representación" letter (the UAF chose follow-up or an observation letter in 113 of 134 decisions from March 2025 to February 2026: [UAF DFC 2025](https://www.uaf.cl/media/documentos/Informe_Resultados_DFC_2025_y_Plan_2026_VF_xsmFFOU.pdf) via [01](01-law-and-requirements.md)); a new registration; a bank asking for proof of AML controls (unverified).
- **Language and trust:** everything in Chilean Spanish; a named Chilean lawyer on the template review; a Chilean phone/WhatsApp number; prices in CLP.

## 90-day launch plan

Day 1 is Monday 12 October 2026. MVP by 31 October; sellable by 1 December after legal review, a security test and pilots.

| Dates | Product (founder + AI agents) | Legal and admin | Sales and marketing | Exit check |
|---|---|---|---|---|
| 12-18 Oct | Data model; client file; UN-list import; deadline engine | Brief two Chilean AML lawyers; apply for a Paddle account | Download and segment the June 2026 register; landing page with waitlist and autodiagnóstico | Lawyer chosen |
| 19-25 Oct | Manual generator (broker, developer, notary); training record | Draft terms, DPA and privacy policy (Spanish) | Clave Única post and email (19 Oct); 20 discovery calls | 20 calls held |
| 26 Oct-1 Nov | ROE helper incl. nil ROE per entity; analysed-case register; inspection-folder export | Lawyer starts template review | Contact ACOP, ANACOPRO, COPROCH; list 30 boutiques and accountants | **MVP done 31 Oct** |
| 2-15 Nov | Fixes from pilots; multi-entity (Grupo) view | Template review comments in; trademark filing at INAPI | 10 pilot firms onboarded (at least 2 notaries, 2 developers) | 10 pilots active |
| 16-29 Nov | Hardening; audit log; backups; export | External security test and fixes; final terms and DPA | Webinar 1 with the partner lawyer (25 Nov); 5 partner meetings | Test passed; 3 pre-orders |
| 30 Nov-6 Dec | Paddle checkout live; onboarding emails | — | **Public launch 1 Dec** (same day as Ley 21.719); founding-customer offer to 31 Jan | First paid customers |
| 7-20 Dec | Free nil-ROE reminder; WhatsApp reminders | Partner agreement template | Email to all enriched contacts: "ROE negativo de enero"; year-end training push | 10 paid |
| 21 Dec-3 Jan | Support; small features | — | Light: holidays; schedule January content | — |
| 4-10 Jan 2027 | Live nil-ROE checklist and help | — | Daily reminders during the 4-15 Jan window; convert free-calendar users | **Day-90 targets below** |

Day-90 targets (10 January 2027): **20 paying customers**, 400 free-calendar sign-ups, 3 signed partners, 2 paying notaries. Below 8 paying customers is a warning (see kill criteria).

## 12-month marketing plan and budget

Period: November 2026 to October 2027. Total **CLP 14.7 million (USD 15,000)**, plus partner commissions and one founder trip (USD 3,000), which the model counts separately.

| Month | Theme | Main actions | Budget (CLP '000) |
|---|---|---|---|
| Nov 2026 | Pilots | Contact enrichment (assistant + tools); landing page; 10 pilots | 2,000 |
| Dec 2026 | Launch + data law | Launch emails; webinar 2; first Google/LinkedIn tests | 1,500 |
| Jan 2027 | Nil ROE | Reminder campaign; live help sessions; retargeting | 1,500 |
| Feb 2027 | Holidays | Write 8 guides; record training video; partner kit | 1,200 |
| Mar 2027 | Back to work | Founder trip to Santiago: notaries, boutiques, ACOP; webinar 3 | 1,500 |
| Apr 2027 | New register (Jan edition) | Outreach to new entrants; notary campaign | 1,000 |
| May 2027 | Partners | Co-branded webinars with 3 partners; association course module | 1,200 |
| Jun 2027 | Pre-July ROE | "Get ready for July" campaign; ads | 1,300 |
| Jul 2027 | Nil ROE | Reminder campaign; live help | 1,000 |
| Aug 2027 | New register (Jul edition) | Outreach to new entrants; case studies from customers | 800 |
| Sep 2027 | Renewals prep | Customer review calls; referral offer (1 month free per referral) | 700 |
| Oct 2027 | Year review | Pricing review; plan for year 2; Peru research | 1,000 |
| **Total** | | | **14,700** |

By type: contact data and enrichment 1,500; Spanish content and SEO (freelance writer, 4 guides a month) 3,000; webinars, association course modules and small event fees 2,500; Google and LinkedIn tests 3,000; partner kit and co-marketing 1,200; training video 1,500; reserve 2,000 (all my estimates).

Partner commissions: 25% of the first-year fee for partner-sourced customers, 10% on renewals (my estimate). The model books about 9% of new bookings and 3% of renewals.

## Payments and tax friction

### Bottom line

- **Sell from the foreign company through Paddle as merchant of record (MoR) at launch.** Paddle lists Chile as a country where it charges 19% VAT on B2C sales ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)), and it can charge in CLP (zero decimals, minimum CLP 800) ([Paddle currencies](https://developer.paddle.com/concepts/sell/supported-currencies)). This handles the one real seller-side duty: Chilean VAT on sales to buyers who are not VAT taxpayers.
- **Many of our buyers are not VAT taxpayers.** Notaries' services have been VAT-exempt since 2023 under the widened exemption in art. 12 E N° 8 (SII Oficio 3460 of 2022, as reported by [Transtecnia](https://transtecnia.cl/noticias/servicios-prestados-por-notarios-quedaran-exentos-a-partir-del-1-de-enero-de-2022/); one later ruling raises doubt, so this is partly unverified). Sole brokers who issue boletas de honorarios charge no VAT either ([RE/MAX First](https://www.remax-first.cl/cuanto-cobra-corredor-propiedades-chile/), unverified). They pay 19% on top, as they already do with C-ONLINE ([C-ONLINE](https://uaf.conline.cl/)), so this is no handicap.
- **VAT-registered buyers self-assess.** Broker companies and real-estate firms (inmobiliarias) are VAT taxpayers. On a service from a foreign provider they issue a "factura de compra" with 19% VAT and take it back as a credit ([SII, June 2026](https://www.sii.cl/noticias/2026/PPTIVASD08062026_2.pdf); [Garrigues](https://garrigues.com/node/2263)). The net cost is zero, but their accountant must do one extra step. Give them a one-page "cómo contabilizar" guide.
- **No income-tax withholding is expected.** Payments abroad for "standard" software are exempt from the 15% Impuesto Adicional ([PwC](https://taxsummaries.pwc.com/chile/corporate/withholding-taxes); [Garrigues](https://www.garrigues.com/es_ES/noticia/software-service-saas-desafio-alta-complejidad-tributaria-mundo-digital-e-interconectado)). Whether a SaaS subscription always counts as standard software has no specific SII ruling in my sources (unverified).
- **Bank transfer is the weak spot.** Chilean SMEs like to pay by local transfer. A foreign company cannot take one cheaply. Paddle takes bank transfers only in EUR, GBP and USD ([Paddle currencies](https://developer.paddle.com/concepts/sell/supported-currencies)). Use cards for everyone at launch, and a local reseller or, later, a Chilean SpA for buyers who insist on transfer and a Chilean invoice.

### Can Chilean buyers pay a foreign seller by card?

- **Yes, mostly.** Visa, Mastercard and American Express are widely held. Debit cards are popular for online buying, and the local debit scheme Redcompra matters ([Transfi](https://www.transfi.com/es/blog/best-online-digital-payment-platform-providers-in-chile)).
- **Debit cards may need "uso internacional" switched on.** For example, BancoEstado's CuentaRUT Visa Débito needs it enabled in online banking ([24horas](https://www.24horas.cl/te-sirve/bancoestado/cuentarut/cuentarut-como-activar-el-uso-internacional-de-mi-tarjeta)). Put this in the checkout help text.
- **Some banks charge the cardholder a fee on foreign purchases.** Older reports cite 1.9% at BancoEstado (2019) and about 3.5% at Santander (2020); Santander applies its contractual international-purchase fee from 1 January 2025 ([Rankia](https://www.rankia.cl/blog/mejores-tarjetas-credito-debito/5788374-comisiones-por-usar-tarjeta-debito-extranjero); [Santander](https://banco.santander.cl/personas/tarjetas/debito/detalles/tarjeta-de-debito)). Current rates are unverified. Charging in CLP avoids a currency conversion for the buyer, but the issuer may still treat it as a foreign purchase ([Stripe currencies](https://docs.stripe.com/currencies)).
- **Card success rates for Chilean cards on foreign gateways are unknown** (unverified). Track declines from the first pilot and offer a fallback (payment link, partner invoice).

### Stripe (own account, foreign company)

- Stripe charges customers in over 135 currencies ([Stripe currencies](https://docs.stripe.com/currencies)). CLP is a zero-decimal currency on Stripe (the list did not render in my fetch, so this is unverified for the seller's account country).
- **Fees on an Irish (EU) account:** international cards 3.15% + EUR 0.25, plus 2% if currency conversion is needed. Billing 0.7% of volume. Stripe Tax 0.5% per transaction where registered. Invoicing 0.4% per paid invoice. Disputes EUR 20 ([Stripe IE pricing](https://stripe.com/ie/pricing)).
- **US account:** 2.9% + USD 0.30, plus 1.5% for international cards and 1% for conversion ([Stripe US pricing](https://stripe.com/pricing); not re-checked in this session, unverified).
- **Stripe Tax supports Chile as a customer location** for digital products. Remote sellers to consumers have no threshold and must register from the first sale. "Sales to business customers in Chile don't trigger any tax registration obligations" ([Stripe Tax Chile](https://docs.stripe.com/tax/supported-countries/latin-america-and-caribbean/chile)).
- **If we use Stripe directly, we must register in Chile's simplified VAT regime (RTS) ourselves**, because notaries and sole brokers are B2C for VAT purposes. See "Seller side" below.
- **Stripe Managed Payments** (Stripe as MoR) costs 3.5% per transaction on top of payment fees ([Stripe IE pricing](https://stripe.com/ie/pricing)). Chile coverage is unverified.

### Merchant of record options

| Option | Chile | Chile VAT | Fee | Notes |
|---|---|---|---|---|
| **Paddle** (recommended) | Supported; charges in CLP; minimum CLP 800 ([Paddle currencies](https://developer.paddle.com/concepts/sell/supported-currencies)) | "Chile 19% VAT B2C" ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)). Whether Paddle drops VAT when a Chilean business enters its RUT is not stated (unverified) | 5% + USD 0.50 per checkout transaction; no monthly fee ([Paddle pricing](https://www.paddle.com/pricing)) | Bank transfer only in EUR, GBP, USD. Paddle must approve the account and website first |
| **Lemon Squeezy** (owned by Stripe) | Sells globally (Chile unverified) | Takes on tax collection (Chile detail unverified) | 5% + USD 0.50, +1.5% non-US, +0.5% subscriptions, +1.5% PayPal; 1% per payout to a non-US bank ([Lemon Squeezy fees](https://docs.lemonsqueezy.com/help/getting-started/fees)) | About 7% + USD 0.50; the most expensive here |
| **Stripe Managed Payments** | (unverified) | (unverified) | Stripe fees + 3.5% ([Stripe IE pricing](https://stripe.com/ie/pricing)) | Recheck in 2027 |

### Fee comparison on one Oficina plan (CLP 399,000 a year, about USD 406)

| Route | Fee | Share | Who handles Chile VAT |
|---|---|---|---|
| Paddle, charged in CLP | 5% + USD 0.50 = about CLP 20,400 | 5.1% | Paddle (B2C) |
| Stripe IE, charged in CLP, settled in EUR | 3.15% + 2% + EUR 0.25 = about CLP 20,800; + Billing 0.7% + Tax 0.5% = about CLP 25,600 | 6.4% | We do (RTS registration and F129 filings) |
| Stripe IE, charged in EUR | 3.15% + EUR 0.25 = about CLP 12,800; + Billing and Tax = about CLP 17,600 | 4.4% | We do; buyer may pay an issuer FX fee |
| Lemon Squeezy | 7% + USD 0.50 = about CLP 28,400, + 1% payout | 7.1-8.1% | Lemon Squeezy (unverified for Chile) |
| Partner reseller in Chile | 25% margin = CLP 99,750 | 25% | The partner invoices with IVA |

Arithmetic is mine, from the fee pages cited above. On a monthly CLP 19,900 Solo plan the fixed USD 0.50 makes Paddle about 7.5%, another reason to push yearly billing.

### Bank transfer and local payment methods

- **Inside Chile, transfers between banks are the normal B2B habit** (my assumption, unverified). A foreign company has no local account to receive them.
- **SWIFT from Chile is costly for small amounts.** One Chilean bank tariff lists USD 200 + VAT for a foreign-currency SWIFT transfer, and Chilean banks charge USD 21-300 + VAT to receive one ([China Construction Bank Chile tariff](https://cl.ccb.com/chile/uploadfile/727784/20210827164627203971.pdf); [Wise Chile](https://wise.com/cl/blog/que-bancos-reciben-transferencias-internacionales-chile)). Do not offer SWIFT for a CLP 199,000 plan.
- **Local methods through a cross-border processor.** dLocal offers Webpay, Khipu, Mercado Pago, Servipag and Sencillito in Chile ([dLocal Chile](https://docs.dlocal.com/docs/chile)). It is aimed at larger merchants (minimums unverified). Webpay is said not to support recurring charges ([CartDNA](https://cartdna.com/en/shopify-payment-methods/webpay), unverified). Revisit at about 300 customers.
- **Practical rule:** cards through Paddle for everyone; a partner reseller for buyers who need transfer plus a Chilean factura; a Chilean SpA only when the triggers in "Company setup" fire.

### Buyer-side tax friction

**VAT on a service bought from abroad (Ley 21.210, SII Circular 42 of 2020):**
- SaaS ("la puesta a disposición de software, almacenamiento, plataformas o infraestructura informática") from a provider without residence in Chile is taxed with 19% VAT when used in Chile ([SII, June 2026](https://www.sii.cl/noticias/2026/PPTIVASD08062026_2.pdf)).
- Use in Chile is presumed if the IP address, the card or bank account, the billing address or the SIM is Chilean ([SII, June 2026](https://www.sii.cl/noticias/2026/PPTIVASD08062026_2.pdf)).
- **B2B (buyer is a VAT taxpayer):** "contribuyente de IVA en Chile. Opera cambio de sujeto del artículo 11 letra e)". The buyer issues a purchase invoice charging the VAT and uses it as a credit ([SII, June 2026](https://www.sii.cl/noticias/2026/PPTIVASD08062026_2.pdf); [Garrigues](https://garrigues.com/node/2263)).
- **B2C (buyer is not a VAT taxpayer, including companies that are not):** the foreign provider is liable and must use the simplified regime (RTS). Circular 12 of 2025 extended the RTS to all foreign providers of services used in Chile B2C ([SII, June 2026](https://www.sii.cl/noticias/2026/PPTIVASD08062026_2.pdf); [Garrigues](https://garrigues.com/node/2263)).
- **If a foreign provider does not register,** the SII can put it on the "nómina de cambio de sujeto" (published each 15 December). Card issuers then add 19% VAT to cardholders' purchases from it, shown on their statements. This applies only to B2C ([SII, June 2026](https://www.sii.cl/noticias/2026/PPTIVASD08062026_2.pdf)). Staying unregistered is therefore visible to our own customers.

**Withholding tax (Impuesto Adicional, art. 59 LIR):**
- Payments for the use of software are taxed at 15%, but **standard software is exempt** when the rights are limited to using it, not exploiting, copying or modifying it ([PwC](https://taxsummaries.pwc.com/chile/corporate/withholding-taxes); [Garrigues](https://www.garrigues.com/es_ES/noticia/software-service-saas-desafio-alta-complejidad-tributaria-mundo-digital-e-interconectado)). Our subscription grants use only, so it should be exempt. Put "licencia de uso estándar, no exclusiva, sin derecho de explotación ni modificación" in the terms.
- Art. 12 E N° 7 of the VAT law co-ordinates the two taxes: if Impuesto Adicional applies, VAT does not; if the payment is exempt from it, VAT applies ([Garrigues](https://www.garrigues.com/es_ES/noticia/software-service-saas-desafio-alta-complejidad-tributaria-mundo-digital-e-interconectado)).
- **Treaties** cap software royalties at 10% where they apply: United States, United Kingdom, Spain, Ireland, Netherlands, Portugal (2/10 or 5/10 bands). Uruguay 10%; Canada, Mexico, Peru, Paraguay 15% (MFN may cut some); Argentina 3/10/15. Germany and Estonia are not listed in PwC's Chile treaty table (whether a Germany treaty is in force is unverified) ([PwC](https://taxsummaries.pwc.com/chile/corporate/withholding-taxes)). This only matters if the SII ever treated our fee as a royalty. **Prefer a seller company in a treaty country** (for example a US LLC taxed as a corporation, a UK Ltd, an Irish or Spanish company) over a German or Estonian one (my inference).
- **Deductibility:** the buyer deducts the cost against its own invoice from abroad. Chile requires expenses to be supported by reliable documents (exact rule for foreign invoices unverified).

### Seller side: must we register for Chilean VAT?

- **With Paddle: no.** Paddle is the seller of record and remits Chile VAT on B2C sales ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/); [Paddle pricing](https://www.paddle.com/pricing)).
- **Selling directly with Stripe: yes, from the first B2C sale.** There is no threshold ([Stripe Tax Chile](https://docs.stripe.com/tax/supported-countries/latin-america-and-caribbean/chile)).
  - Registration is online in English or Spanish on the SII "Portal IVA Digital" (Res. 105 of 2024). Only non-residents can register. You choose a 1-month or 3-month period and a currency (EUR, CLP or USD) ([SII, June 2026](https://www.sii.cl/noticias/2026/PPTIVASD08062026_2.pdf)).
  - Returns are form F129, online. They cover B2C VAT only. Sales to Chilean VAT taxpayers are excluded from the base ([SII, June 2026](https://www.sii.cl/noticias/2026/PPTIVASD08062026_2.pdf)).
  - RTS registrants cannot recover Chilean input VAT and need not issue Chilean tax invoices ([Fonoa](https://fonoa.com/countries/chile/tax-on-digital-services); search summary). Fonoa says a fiscal representative is mandatory; the SII deck does not say so (unverified).
- **Recommendation:** start with Paddle. Its 5% fee costs about 1-1.5 points more than Stripe on our ticket size but removes the RTS filings, the B2C/B2B split at checkout, chargebacks and dunning. Re-evaluate at about CLP 100 million a year in sales.

## Company setup (needed or not, costs)

### Recommendation

**No Chilean company at launch.** The foreign company sells through Paddle. A Chilean partner (compliance boutique or accountant) resells to buyers who need a local invoice or local bank transfer. **Form a Chilean SpA only when one of these triggers fires:**
1. More than 30% of lost B2B deals cite "no Chilean factura" or "no local transfer" (track it from day 1).
2. A notary network, association or developer group wants a contract with a Chilean entity.
3. We want to employ staff in Chile rather than contract freelancers.
4. Sales pass about CLP 150 million a year, so the overhead of about CLP 8-9 million a year (below) is under 6% of sales.

The base model assumes the SpA from month 19 (May 2028); the high case from month 13 (November 2027); the low case never.

### Option A: foreign company only (launch)

- Cost: no new Chilean cost. Paddle handles Chile VAT. Budget USD 150 a month for the home-country accountant to book foreign sales (my estimate).
- What the buyer sees: a Paddle receipt in CLP, VAT shown when charged, and our company details.
- Limits: no Chilean factura electrónica; no local bank transfer; some buyers' accountants will need the "factura de compra" step explained.

### Option B: foreign company + Chilean reseller partner

- The partner buys from us B2B (no VAT on our side; it self-assesses) and invoices its clients with 19% IVA and a Chilean factura.
- Cost: the 25% partner margin on those sales.
- **Check first:** a Chilean firm paying a foreign company for the right to resell software may owe 15% Impuesto Adicional on those payments. The SII examined a Chilean distributor of a US provider's software in Ordinario 810 of 21 April 2020 under art. 59, with a 15% rate for software use and an exemption for standard software ([vLex, Ord. 810](https://vlex.cl/vid/ordinario-n-810-servicio-844315896)). A search summary of a Transtecnia note says the SII held the distributor's payments taxable at 15% ([Transtecnia](https://transtecnia.cl/articulo-tributario/sii-fija-tratamiento-tributario-de-pagos-derivados-de-contrato-de-distribucion-de-software-suscrito-con-un-proveedor-extranjero/), unverified: I could not read the full ruling). A **referral model** (the partner sells our subscription to the client, Paddle bills the client, we pay the partner a commission) avoids this. Use referral by default; use resale only after advice.

### Option C: Chilean SpA (later)

| Point | Detail | Source |
|---|---|---|
| Form | SpA (sociedad por acciones): one shareholder allowed; 100% foreign ownership allowed | [Lofwork](https://www.lofwork.cl/emprender-en-chile-siendo-extranjero/); [Expat.com](https://www.expat.com/es/guia/america-del-sur/chile/17117-transportes-en-chile.html) |
| Minimum capital | No meaningful legal minimum (a nominal amount is accepted; one guide says USD 1) | [Damalion](https://www.damalion.com/how-to-register-a-company-in-santiago-chile-costs-timelines-2026/) (unverified) |
| Official fees, online route | Registro de Empresas y Sociedades ("Tu Empresa en un Día"): "sin costo" | [Lofwork](https://www.lofwork.cl/emprender-en-chile-siendo-extranjero/) |
| Official fees, notarial route (founder in person) | Deed CLP 50,000-200,000; Registro de Comercio 0.2% of capital + CLP 300 a page; Diario Oficial extract about CLP 8,000-20,000 | [Holafly](https://esim.holafly.com/es/blog/expatriados/abrir-empresa-chile/); [Damalion](https://www.damalion.com/how-to-register-a-company-in-santiago-chile-costs-timelines-2026/) (both unverified) |
| Foreign founder's RUT | Non-residents apply on form F4415.1. It must be signed by the person or by a representative or attorney resident in Chile. A power signed abroad must be consularised or legalised (apostille in practice). Since 1 June 2020 the steps are online with RUT and Clave Tributaria | [SII FAQ F4415.1](https://www.sii.cl/preguntas_frecuentes/rut_inicio_actividades/001_105_6823.htm); search summary of [SII representante legal](https://www.sii.cl/portales/investors/registrese/representante_legal.htm) |
| Local representative | Required for SII purposes; the provider page says "your company needs someone in Chile to sign and answer for it" | [NSS](https://www.nss.cl/en/services/international); [SII FAQ](https://www.sii.cl/preguntas_frecuentes/rut_inicio_actividades/001_105_6823.htm) |
| Remote setup with a provider | **Starter USD 750** (power of attorney, tax advice, company setup, bylaws; no bank, e-invoicing or tax setup). **Full USD 2,400** (adds bank-account support, e-invoicing, tax and municipal setup, tax address for 1 year). Third-party costs at cost | [NSS](https://www.nss.cl/en/services/international) |
| In person | The founder flies in, signs at a notary and uses the free online register once he has a RUT and Clave Única or advanced e-signature. Cost: notary fees above + travel (about USD 1,500-2,500, my estimate). He still needs a resident representative if he leaves | as above |
| Time | 2-6 weeks to full formalisation; bank account extra | [Lofwork](https://www.lofwork.cl/emprender-en-chile-siendo-extranjero/) |
| Bank account | Possible for non-residents but "the final decision rests with each bank"; some banks want a representative with permanent residence; fintechs are a stopgap | [NSS](https://www.nss.cl/en/services/international); [Lofwork](https://www.lofwork.cl/emprender-en-chile-siendo-extranjero/) |
| Municipal licence (patente) | 2.5-5 per thousand of tax equity a year; minimum 1 UTM (CLP 72,151), maximum 8,000 UTM; paid January and July | [Simplo](https://simplo.cl/calculadoras/patente-municipal/providencia/); [mindicador.cl](https://mindicador.cl/api) |
| Corporate tax | Pro Pyme regime: 12.5% for 2025-2027, 15% for 2028, 25% permanent; the reduced rate depends on employer pension-contribution conditions | [SII Circular 53 of 2025](https://www.sii.cl/normativa_legislacion/circulares/2025/circu53.pdf) |
| VAT | The SpA adds 19% IVA and issues electronic invoices (DTE) after "inicio de actividades" | [Lofwork](https://www.lofwork.cl/emprender-en-chile-siendo-extranjero/); [Carey](https://www.carey.cl/reforma-tributaria/2022/iva-a-los-servicios-digitales/) |

**Ongoing cost of a remotely run SpA (provider prices, excluding VAT):**

| Item | USD a year | Source |
|---|---|---|
| Legal representation (USD 400/month, 2 hours included) | 4,800 | [NSS](https://www.nss.cl/en/services/international) |
| SME bookkeeping and monthly tax returns (USD 200/month) | 2,400 | [NSS](https://www.nss.cl/en/services/international) |
| Annual income-tax return | 700 | [NSS](https://www.nss.cl/en/services/international) |
| Tax address | 400 | [NSS](https://www.nss.cl/en/services/international) |
| Patente municipal (minimum 1 UTM) | about 75+ | [Simplo](https://simplo.cl/calculadoras/patente-municipal/providencia/) |
| Bank fees (my estimate) | 200 | — |
| **Total** | **about 8,600 (CLP 8.4 million)**; 15% off representation and accounting if paid yearly | |

One-off: USD 2,400 (Full package) + notary, apostille and courier costs (about USD 300, my estimate).

**Structure warning.** If the SpA pays the foreign company for the software, those payments can face 15% Impuesto Adicional (10% under a treaty) unless they qualify as standard software, and dividends to a foreign owner face Impuesto Adicional too (rate and credits unverified). The cleanest set-up is for the SpA to own Chilean customer contracts and pay the foreign company a documented fee agreed with a Chilean tax adviser. Budget USD 1,500 for that advice (my estimate).

## Contracts and liability

**Documents before the first paid customer (all in Spanish):**
1. **Términos y condiciones de servicio** with an order page. State: a standard, non-exclusive use licence with no right to exploit, copy or modify (supports the standard-software exemption).
2. **Contrato de encargo de tratamiento de datos (DPA).** The customer is the controller and we are the processor. Ley 21.719 applies from 1 December 2026 ([01](01-law-and-requirements.md)). The product stores ID copies, beneficial-owner declarations and PEP data, so list security measures, sub-processors, hosting location, the legal basis for international transfer, breach notice times and deletion on exit.
3. **Política de privacidad** and a sub-processor list (hosting, email, Paddle, e-signature).
4. **Partner/referral agreement** and a consultant agreement for add-on services. The consultant, not us, gives legal advice.
5. **Engagement letter with the Chilean AML lawyer** who reviews templates and tracks UAF changes.

**Key clauses:**
- **"Herramienta, no asesoría legal."** The customer and its compliance officer stay responsible. The product never files a ROS for the customer; only the OdC may file ([01](01-law-and-requirements.md)).
- **Confidentiality and tipping-off.** The ban on tipping off covers service providers (Ley 19.913 art. 6, per [01](01-law-and-requirements.md)). Limit staff access to the analysed-case register and log every access.
- **Template warranty.** Templates reflect Circular 62 as of a stated date, reviewed by a named Chilean lawyer. Updates within 30 days of a UAF change.
- **Inspection promise (capped).** If the UAF finds a defect in a generated document caused by our error, we fix it within 5 business days and refund that year's fee.
- **Liability cap.** 12 months of fees; fines excluded. **Caution:** Ley 20.416 art. 9 applies consumer-law protections, including control of abusive clauses, to contracts between micro or small firms and their suppliers ([Revista Chilena de Derecho](https://revistadisena.uc.cl/index.php/Rchd/article/download/24969/20171/58693); [Carey 2010](https://www.carey.cl/api/archivo/news-alert-n1-junio-2010?lang=es)). Most of our buyers are micro or small firms. Keep the cap reasonable and do not exclude liability for our own gross fault. A clause sending Chilean SMEs to a foreign court may not hold (unverified). Choose Chilean law and Santiago courts for Chilean customers.
- **Retention.** Keep records at least 5 years after the client relationship ends, as the law requires of the customer (Ley 19.913 art. 5; [01](01-law-and-requirements.md)), then delete or export on request.
- **Cancellation.** Yearly plans renew automatically with a 30-day reminder email. Monthly plans cancel any time.

**Insurance:** professional indemnity plus cyber cover through the foreign company, about USD 1,500 a year for a USD 250,000-500,000 limit (my estimate, unverified). Ask the insurer to name Chile as a covered territory.

**Trademark:** file at INAPI in classes 9, 42 and 41 before launch. A Chilean registration lasts 10 years and is renewable ([BioBioChile](https://www.biobiochile.cl/noticias/servicios/toma-nota/2025/03/30/como-inscribir-una-marca-y-una-patente-en-chile-los-pasos-y-costos.shtml)). Fees were not confirmed; budget CLP 1.2 million including an agent (unverified). Filings are rising, up 18% to July 2026 ([Diario Estrategia](https://www.diarioestrategia.cl/texto-diario/mostrar/6009922/solicitudes-marcas-chile-aumentan-182-cierre-julio-2026-e-impulsan-sectores-tecnologia-salud)), so check the name early.

**Lawyer costs:** no published Chilean rates were found (unverified). Budget **CLP 4.5 million** (about UF 110) fixed fee for the review of three manual templates, the client-file forms, terms and DPA, then **CLP 250,000 a month** for rule changes (my estimates). Ask for a fixed fee in UF.

## Financial model

### Assumptions

| Assumption | Low | Base | High | Basis |
|---|---|---|---|---|
| Buyer pool | 4,278 target entities, about 3,000-3,500 buying decisions, plus 1,453 adjacent small obliged firms | same | same | [02](02-market-and-competition.md), from the [UAF June 2026 register](https://www.uaf.cl/media/documentos/Sujetos_Obligados_inscritos_en_la_UAF_al_30.06.2026.xlsx) |
| New paying customers, years 1 / 2 / 3 | 45 / 55 / 50 | 130 / 140 / 120 | 230 / 250 / 220 | My estimate, spread by the season factors above; no sales in November 2026 (build month) |
| Active customers at month 36 as a share of buying decisions | about 3% | about 9% | about 17% | Output; base is close to 02's year-3 estimate of about UF 3,760 |
| First renewal / later renewals | 60% / 75% | 70% / 85% | 80% / 90% | My estimate; compliance tools renew when the duty is yearly |
| Effective price per customer a year (net, after discounts and partner margins), years 1 / 2 / 3 | CLP 300k / 330k / 350k | CLP 330k / 380k / 420k | CLP 360k / 420k / 470k | List mix gives about CLP 425k (see Pricing) |
| Founding offer | 50% off for new customers in December 2026 and January 2027 | same | same | Plan |
| Add-on margin per new customer | CLP 15k | CLP 25k | CLP 35k | About 15% buy a setup service; we keep half |
| Billing | Yearly in advance (cash at sign-up and renewal) | same | same | A 30% monthly mix would delay cash slightly |
| Build | Founder + Claude Code agents; AI tools USD 300 a month in year 1, USD 250 after | same | same | Owner's brief; tool cost my estimate |
| Hosting, SaaS tools, e-signature, PEP data | USD 200 / 250 / 300 a month | USD 250 / 400 / 550 | USD 300 / 550 / 800 | My estimate |
| Lawyer | CLP 4.5 million in months 1-2, then CLP 250k a month | same | same | My estimate (no published rates found) |
| Security test | USD 4,000 in month 2, USD 3,000 in months 14 and 26 | same | same | My estimate |
| Insurance / trademark | USD 1,500 a year / CLP 1.2 million once | same | same | My estimate (unverified) |
| Home-country accounting | USD 150 a month | same | same | My estimate |
| Part-time Chilean sales and support (freelance), from month 3 | CLP 400k / 600k / 700k a month | CLP 700k / 1.3m / 1.6m | CLP 0.9m / 2.0m / 3.0m (two people by year 3) | My estimate |
| Marketing | USD 8,000 a year | USD 15,000 a year | USD 25,000 a year | Plan above |
| Founder trip to Santiago | USD 3,000 each March | same | same | My estimate |
| Chilean SpA | none | from month 19 (May 2028): USD 2,700 once, then about USD 715 a month | from month 13 | [NSS](https://www.nss.cl/en/services/international); see Company setup |
| Partner commissions | 9% of new bookings + 3% of renewals | same | same | About 35% of sales via partners |
| Payment fees | 5.5% of cash in | same | same | Paddle 5% + USD 0.50 ([Paddle pricing](https://www.paddle.com/pricing)) |
| Founder pay | none in the main tables; variant: USD 3,000 a month in year 2, USD 5,000 a month in year 3 | | | |
| VAT | Prices are net; Paddle collects and remits Chile VAT | | | |

Month 1 is November 2026 and month 36 is October 2029. Amounts are CLP thousands. The model script is in the session scratchpad, not in the repo.

### Base case by quarter (no founder pay, CLP '000)

| Quarter | New | Churned | Active (end) | Cash in | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|---|
| Q1 Nov 26-Jan 27 | 21 | 0 | 21 | 3,990 | 6,930 | 18,639 | -14,649 | -14,649 |
| Q2 Feb-Apr 27 | 30 | 0 | 51 | 10,650 | 16,830 | 13,017 | -2,367 | -17,016 |
| Q3 May-Jul 27 | 43 | 0 | 94 | 15,265 | 31,020 | 10,711 | 4,554 | -12,463 |
| Q4 Aug-Oct 27 | 36 | 0 | 130 | 12,780 | 42,900 | 10,367 | 2,413 | -10,049 |
| Q5 Nov 27-Jan 28 | 34 | 6 | 158 | 19,356 | 59,926 | 17,503 | 1,853 | -8,197 |
| Q6 Feb-Apr 28 | 29 | 9 | 178 | 19,725 | 67,526 | 15,951 | 3,774 | -4,423 |
| Q7 May-Jul 28 | 42 | 13 | 207 | 28,448 | 78,584 | 18,790 | 9,658 | 5,235 |
| Q8 Aug-Oct 28 | 35 | 11 | 231 | 23,751 | 87,780 | 15,585 | 8,166 | 13,401 |
| Q9 Nov 28-Jan 29 | 29 | 12 | 248 | 28,149 | 103,990 | 21,657 | 6,492 | 19,893 |
| Q10 Feb-Apr 29 | 25 | 12 | 261 | 27,148 | 109,513 | 20,001 | 7,147 | 27,039 |
| Q11 May-Jul 29 | 36 | 17 | 280 | 39,114 | 117,445 | 18,341 | 20,772 | 47,812 |
| Q12 Aug-Oct 29 | 30 | 14 | 295 | 32,636 | 124,047 | 17,644 | 14,992 | 62,804 |

Base-case cost lines, year 1 (CLP '000): marketing 14,730; legal 7,000; local sales/support 7,000; security test 3,928; commissions 3,861; AI tools 3,535; hosting and tools 2,946; travel 2,946; payment fees 2,348; home accounting 1,768; insurance 1,473; trademark 1,200. Total 52,734 (about USD 53,700).

Year 3: local sales/support 19,200; marketing 14,730; SpA 8,421; payment fees 6,988; commissions 6,745; hosting and tools 6,481; other 15,078. Total 77,643 (about USD 79,100).

### Low case by quarter (no founder pay, CLP '000)

| Quarter | Active (end) | Cash in | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|
| Q1 | 7 | 1,155 | 2,100 | 15,882 | -14,727 | -14,727 |
| Q2 | 18 | 3,465 | 5,400 | 9,262 | -5,797 | -20,525 |
| Q3 | 33 | 4,725 | 9,900 | 6,494 | -1,769 | -22,294 |
| Q4 | 45 | 3,780 | 13,500 | 6,361 | -2,581 | -24,874 |
| Q5 | 55 | 5,871 | 18,216 | 11,598 | -5,727 | -30,602 |
| Q6 | 63 | 6,318 | 20,724 | 10,144 | -3,826 | -34,428 |
| Q7 | 73 | 8,490 | 24,024 | 7,460 | 1,030 | -33,398 |
| Q8 | 82 | 7,206 | 27,060 | 7,312 | -106 | -33,505 |
| Q9 | 88 | 8,212 | 30,712 | 12,240 | -4,027 | -37,532 |
| Q10 | 92 | 8,268 | 32,305 | 10,751 | -2,483 | -40,015 |
| Q11 | 99 | 11,198 | 34,528 | 8,136 | 3,061 | -36,954 |
| Q12 | 103 | 9,210 | 36,138 | 7,906 | 1,304 | -35,650 |

### High case by quarter (no founder pay, CLP '000)

| Quarter | Active (end) | Cash in | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|
| Q1 | 38 | 8,170 | 13,680 | 22,279 | -14,109 | -14,109 |
| Q2 | 91 | 20,935 | 32,760 | 17,612 | 3,323 | -10,785 |
| Q3 | 167 | 30,020 | 60,120 | 15,910 | 14,110 | 3,324 |
| Q4 | 230 | 24,885 | 82,800 | 15,207 | 9,678 | 13,002 |
| Q5 | 282 | 40,068 | 118,608 | 29,717 | 10,351 | 23,354 |
| Q6 | 324 | 41,468 | 135,996 | 25,518 | 15,950 | 39,304 |
| Q7 | 385 | 60,116 | 161,532 | 24,737 | 35,379 | 74,683 |
| Q8 | 434 | 49,378 | 182,280 | 23,486 | 25,892 | 100,576 |
| Q9 | 472 | 62,184 | 221,821 | 32,671 | 29,513 | 130,088 |
| Q10 | 503 | 60,717 | 236,560 | 30,884 | 29,833 | 159,922 |
| Q11 | 548 | 87,624 | 257,579 | 30,768 | 56,857 | 216,778 |
| Q12 | 586 | 72,406 | 275,232 | 29,176 | 43,231 | 260,009 |

### Scenario summary

| Measure | Low | Base | High |
|---|---|---|---|
| Customers at month 6 / 12 / 24 / 36 | 18 / 45 / 82 / 103 | 51 / 130 / 231 / 295 | 91 / 230 / 434 / 586 |
| ARR at month 12 / 24 / 36 (CLP million) | 13.5 / 27.1 / 36.1 | 42.9 / 87.8 / 124.0 | 82.8 / 182.3 / 275.2 |
| ARR at month 36 (USD) | about 37,000 | **about 126,000** | about 280,000 |
| Cash in, years 1 / 2 / 3 (CLP million) | 13.1 / 27.9 / 36.9 | 42.7 / 91.3 / 127.0 | 84.0 / 191.0 / 282.9 |
| Costs, years 1 / 2 / 3 (CLP million) | 38.0 / 36.5 / 39.0 | 52.7 / 67.8 / 77.6 | 71.0 / 103.5 / 123.5 |
| Profit before founder pay, year 3 | CLP -2.1 million | **CLP 49.4 million (USD 50,000)** | CLP 159.4 million (USD 162,000) |
| Break-even, trailing 12 months | not reached | month 14 (December 2027) | month 12 (October 2027) |
| Cumulative cash positive for good | not within 36 months | month 20 (June 2028) | month 9 (July 2027) |
| **Peak cash need, no founder pay** | CLP 40.8 million (USD 41,600), if never stopped | **CLP 17.8 million (USD 18,100), in month 5** | CLP 16.0 million (USD 16,300) |
| Peak cash need with founder pay (USD 3,000 then 5,000 a month) | CLP 130 million | CLP 38.0 million (USD 38,700); still CLP -31.5 million at month 36 | CLP 16.0 million |
| Blended acquisition cost, year 1 (marketing + half of local staff + commissions + trip) | about CLP 311k | about CLP 193k (USD 197) | about CLP 172k |

Unit economics, base case (my arithmetic):
- First-year price about CLP 330k against an acquisition cost of about CLP 193k: payback in about 8 months.
- Gross margin about 88% after payment fees and hosting.
- With 70% then 85% renewal, a customer stays about 3.2 years within a 5-year horizon and is worth about CLP 1.1 million (USD 1,100). LifetimeValue/CAC is about 5-6.
- The limit is the small pool, not the unit economics.

What the numbers mean:
- **Cash need is small:** about CLP 18 million (USD 18,000) if the founder takes no pay. Plan USD 40,000 to cover founder pay in year 2 or slow sales.
- **Chile alone pays the founder modestly.** Year-3 profit of about USD 50,000 covers founder pay of about USD 4,000 a month, not 5,000. Peru is the route to more.
- **The low case is visible early.** By month 6 it shows about 18 customers against a base of 51. The kill criteria stop it before the loss grows from about CLP 25 million at month 12 to about CLP 34 million at month 18.
- **Biggest swing factors:** notary uptake (each notary is worth about 4 Solo brokers) and the first renewal rate (the first cohort renews December 2027-January 2028).

## Regional expansion

Order: **Chile first; Peru from about month 24 (November 2028) with a local partner; Paraguay as a low-cost add-on; Uruguay and Argentina only by partnership; Mexico later or never.** The model above is Chile only.

| Country | Buyers | Rivals | Payments and tax for a foreign seller | Timing |
|---|---|---|---|---|
| **Peru** | Real-estate agents and construction/real-estate firms are listed obliged subjects ([SBS list](https://www.sbs.gob.pe/prevencion-de-lavado-activos/Sujetos-Obligados/Relacion-de-Sujetos-Obligados)); about 10,946 obliged subjects had an approved compliance officer in July 2025 (unverified figure via [02](02-market-and-competition.md)) | Regcheq has a Peru site ([Regcheq](https://regcheq.com/)) | Paddle charges 18% VAT B2C ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)). Business buyers self-assess 18% IGV on form 1662 ([RSM Peru](https://rsm.global/peru/sites/default/files/media/documents/ES-Doing%20Business%202025.pdf)). **Digital services from non-domiciled providers face 30% income-tax withholding** ([El Peruano](https://elperuano.pe/noticia/223591-impuesto-a-la-renta-consejos-para-los-contribuyentes-no-domiciliados)); how this applies to a SaaS subscription is still debated ([Gestión](https://gestion.pe/opinion/sunat-complica-a-no-domiciliados-usar-e-mail-convertiria-a-cualquier-consultoria-en-servicio-digital-noticia/)) | Prepare from month 18; launch about month 24 through a Peruvian reseller who invoices locally. The 30% withholding makes direct cross-border B2B sales hard. Whether a Chilean SpA could use the Chile-Peru treaty to cut it is (unverified) |
| **Paraguay** | About 1,450 real-estate firms; 1,238 were warned in 2024 for missing filings ([SEPRELAD 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)) | none found ([02](02-market-and-competition.md)) | Not checked (unverified) | Year 3, as a deadline-calendar add-on; low prices |
| **Uruguay** | 2,058 estate agencies and 7,368 notaries registered in 2019 ([GAFILAT MER Uruguay](https://biblioteca.gafilat.org/wp-content/uploads/2024/07/IEM-Uruguay.pdf)) | Cumplo360; HADA from USD 10 + tax ([HADA](https://hada.com.uy/)) | Paddle charges 22% VAT B2C ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)) | Partnership or licence only |
| **Argentina** | 10,365 real-estate agents registered with the UIF in March 2024 ([GAFILAT/FATF MER](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)) | AMLify, a member benefit of the Buenos Aires colegio ([CUCICBA](https://colegioinmobiliario.org.ar/novedades/245)) | Not checked; currency controls (unverified) | Not head-on |
| **Mexico** | Property intermediaries and developers are "actividades vulnerables" ([BHR](https://www.bhrmx.com/wp-content/uploads/2025/11/INTERMEDIACIÓN-EN-LA-TRANSMISIÓN-DE-INMUEBLES-Y-LA-LFPIORPI.pdf)) | Crowded; Regcheq has a Mexico site and bought UBCubo ([TLA](https://thelatinamericanlawyer.com/vei-counsels-regcheq-on-2m-investment-round/)) | Paddle charges 16% VAT B2B and B2C ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)) | Later or never |

What changes per country: the rule pack (law, regulator circulars, forms, deadlines), the national lists, the manual templates, a local lawyer review, local currency prices and the payment route. The core (client file, BO, PEP and UN screening, deadline engine, registers, training record, inspection folder) carries over. With AI agents, a new rule pack is about 2-4 weeks of build plus the lawyer review (my estimate).

## Exit and partnerships

**Likely buyers or partners:**

| Party | Why they would care | Source |
|---|---|---|
| **Regcheq** | Strongest Chilean AML SaaS; raised USD 2 million (2023) and bought Mexico's UBCubo, so it buys companies. A self-serve SME base would fill its gap below the enterprise motion | [TLA](https://thelatinamericanlawyer.com/vei-counsels-regcheq-on-2m-investment-round/); [Descubre](https://www.descubre.vc/noticia/regcheq-levant-us-2m-2023-07-11) |
| **C-ONLINE** | Closest direct rival; a cheaper SME line or customer base would help it | [C-ONLINE](https://uaf.conline.cl/) |
| **Gesintel, Neitcom, Lexizum** | Screening vendors that lack the manual, registers, deadlines and training workflow | [gesintel.cl](https://www.gesintel.cl/); [Neitcom](https://neitcom-compliance.cl/productos/empresas/); [Lexizum](https://www.lexizum.com/) |
| **Broker CRMs** (Tokko Broker, Kiteprop, Wasi) | No UAF feature; a compliance module raises their price per seat | [02](02-market-and-competition.md) |
| **Digital-notary platforms** (Despapeliza/Legaliza.io, Legora) | Notary networks need KYC and BO workflows | [Descubre](https://www.descubre.vc/noticia/despapeliza-y-fundaci-n-red-notarial-impulsan-la-digitalizaci-n-notarial-en-chile-2025-09-03); [ITSitio](https://www.itsitio.com/ch/soluciones/chile-transformacion-digitalnotarial/) |
| **Compliance boutiques and law firms** | Recurring revenue next to one-off manuals | [Regcheq partners](https://regcheq.com/es-cl/partners) |

**Value:** small bootstrapped SaaS businesses under USD 1 million ARR sell for about 2.5-4x revenue, or 4-6x seller's discretionary earnings when owner-dependent ([beancount.io](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)). Acquire.com listings average about 2.6x revenue, and these are asking prices ([BigIdeasDB](https://bigideasdb.com/saas-valuation-multiples-2026)). Another guide gives 2-3x earnings under USD 500k ARR ([Pipeline Road](https://pipelineroad.com/agency/blog/saas-valuations-guide)). Base case at month 36 (ARR about USD 126,000, profit about USD 50,000): **about USD 200,000-400,000.** High case: about USD 600,000-1,000,000.

**Partnerships to start in year 1:** one association (ACOP or ANACOPRO course module), one notary network, three boutiques or accountants, one broker CRM integration (client import).

## Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Small firms feel little pressure (inspection odds about 1% a year for brokers, small fines) | High | High | Sell time saved and the nil-ROE deadlines; target notaries (about 8% inspected a year) and new registrants; free calendar as a foot in the door |
| C-ONLINE cuts its price or Regcheq launches a self-serve tier | Medium | High | Public low price from day 1; features rivals do not show (deadline calendar, analysed-case register, inspection folder, multi-SPV view); lock in partners |
| UAF adds free tools (it already runs a free e-learning campus: [UAF campus](https://capacitacion.uaf.cl/campus/)) or MiUAF adds registers | Medium | Medium | Link to the free campus; focus on the entity's own manual, files and evidence, which the UAF cannot hold for firms |
| Chilean cards decline on a foreign gateway | Medium | Medium | Charge in CLP; help text on enabling "uso internacional"; partner invoice as fallback; track decline rate weekly |
| SII treats the subscription as a royalty (15% withholding) | Low | Medium | Standard-use licence wording; seller in a treaty country; ask a Chilean tax adviser for a written opinion before month 6 |
| Paddle refuses or drops the account (AML is a sensitive topic) | Low | High | Apply in week 1; Stripe direct + Chile RTS registration as plan B |
| Template error leads to a fine | Low | High | Named lawyer review; update SLA; insurance; capped inspection promise |
| Data breach of ID copies and BO data under Ley 21.719 | Low | High | Security test before launch; encryption; least-privilege access; DPA; incident plan |
| Liability caps void under Ley 20.416 for micro/small buyers | Medium | Low-Medium | Balanced terms; insurance |
| Broker licensing bill (Boletín 18.241-03) stalls | High | Low (upside only) | Model excludes it; if it passes, thousands of unregistered brokers become buyers ([01](01-law-and-requirements.md)) |
| Founder is abroad and not a native Chilean Spanish speaker (unverified) | Medium | Medium | Part-time Chilean rep from month 3; WhatsApp; Chilean lawyer on the brand |

## Milestones and kill criteria

| Date | Milestone | Kill or pivot trigger |
|---|---|---|
| 31 Oct 2026 | MVP done; 20 discovery calls held | Fewer than 5 of 20 calls say they would pay CLP 200k+ a year: rethink scope or price |
| 30 Nov 2026 | Lawyer review done; security test passed; 10 pilots | Paddle refuses the account: switch to Stripe + RTS |
| 15 Dec 2026 | First paid customers | **Fewer than 3 paid pilots or pre-orders from 40 conversations: stop or pivot to a partner-only offer** |
| 31 Jan 2027 (after the nil-ROE window) | 20 paying customers; 400 free-calendar users | Fewer than 8 paying: cut marketing to the minimum and test notaries only |
| 30 Apr 2027 | 51 paying customers (base); 3 active partners | **Fewer than 20 paying: stop investing; keep only if notaries are paying** |
| 31 Oct 2027 | 130 paying customers; 15 notaries | **Fewer than 50: stop or sell the code and list to a rival** |
| Jan 2028 | First renewal cohort | **First-year renewal below 50%: stop** |
| May 2028 | SpA decision (base); Peru partner shortlisted | SpA only if the triggers in "Company setup" fired |
| Oct 2028 | 231 customers; ARR CLP 88 million | Below 120: hold costs flat, no Peru |
| Nov 2028 | Peru launch with a reseller | — |
| Oct 2029 | 295 customers; ARR CLP 124 million; profit about CLP 49 million | — |

## Open questions

- Does Paddle drop Chilean VAT when a Chilean business enters its RUT, or charge 19% to everyone? Ask Paddle before launch. If it charges VAT-registered buyers, they lose a creditable 19% unless they self-assess properly.
- Are notaries and conservadores VAT-exempt in every case (SII Oficio 3460 of 2022 versus Oficio 949 of 2023)?
- Has the SII ruled specifically on SaaS subscriptions as "standard software" under art. 59?
- What are the full conclusions of SII Ordinario 810 of 2020 on a Chilean software distributor's payments abroad? This decides between a referral and a resale partner model.
- Do Chilean issuers decline cross-border CLP card charges often? What international-purchase fees do they charge today?
- Does the UAF accept a simple electronic signature on the beneficial-owner declaration, or does it need an advanced one (Ley 19.799)? This affects e-signature cost.
- What do Chilean compliance lawyers charge for a fixed-fee template review? What does E&O plus cyber cover cost for a foreign SaaS selling into Chile?
- What are INAPI's current trademark fees per class?
- What are ACOP's, ANACOPRO's and the notaries' association's event dates for 2027, and what do they charge for a course module or sponsorship?
- Would a Chilean SpA be a good hub for Peru under the Chile-Peru tax treaty?
- What are the 2027 nil-ROE window dates?

## Sources

Read or fetched in this session (primary sources first):
- SII, "IVA a los servicios prestados por contribuyentes sin domicilio ni residencia en Chile en forma remota", June 2026: https://www.sii.cl/noticias/2026/PPTIVASD08062026_2.pdf
- SII FAQ on form F4415.1 (RUT for non-residents): https://www.sii.cl/preguntas_frecuentes/rut_inicio_actividades/001_105_6823.htm
- SII investors portal, legal representative (search summary): https://www.sii.cl/portales/investors/registrese/representante_legal.htm
- SII Circular 53 of 2025, Pro Pyme rates (search summary): https://www.sii.cl/normativa_legislacion/circulares/2025/circu53.pdf
- SII Ordinario 810 of 2020 (partial text only): https://vlex.cl/vid/ordinario-n-810-servicio-844315896
- Exchange rates: https://mindicador.cl/api
- C-ONLINE UAF module: https://uaf.conline.cl/
- Paddle tax list: https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/
- Paddle currencies: https://developer.paddle.com/concepts/sell/supported-currencies
- Paddle pricing: https://www.paddle.com/pricing
- Stripe Tax, Chile: https://docs.stripe.com/tax/supported-countries/latin-america-and-caribbean/chile
- Stripe Ireland pricing: https://stripe.com/ie/pricing
- Stripe currencies: https://docs.stripe.com/currencies
- Stripe US pricing (not re-checked in this session): https://stripe.com/pricing
- Lemon Squeezy fees: https://docs.lemonsqueezy.com/help/getting-started/fees
- PwC, Chile withholding taxes (reviewed 19 Dec 2025): https://taxsummaries.pwc.com/chile/corporate/withholding-taxes
- Garrigues on SaaS taxation in Chile (2021): https://www.garrigues.com/es_ES/noticia/software-service-saas-desafio-alta-complejidad-tributaria-mundo-digital-e-interconectado
- Garrigues on the 2020 digital VAT draft circular: https://garrigues.com/node/2263
- NSS, company setup and representation prices: https://www.nss.cl/en/services/international
- Lofwork, setting up as a foreigner (22 Apr 2026): https://www.lofwork.cl/emprender-en-chile-siendo-extranjero/

From search-result summaries (details less certain):
- Carey, VAT on digital services: https://www.carey.cl/reforma-tributaria/2022/iva-a-los-servicios-digitales/
- Fonoa, Chile digital services VAT: https://fonoa.com/countries/chile/tax-on-digital-services
- Transtecnia, notaries VAT-exempt: https://transtecnia.cl/noticias/servicios-prestados-por-notarios-quedaran-exentos-a-partir-del-1-de-enero-de-2022/
- Transtecnia, software distribution ruling (page returned 403): https://transtecnia.cl/articulo-tributario/sii-fija-tratamiento-tributario-de-pagos-derivados-de-contrato-de-distribucion-de-software-suscrito-con-un-proveedor-extranjero/
- RE/MAX First, broker commissions and boletas: https://www.remax-first.cl/cuanto-cobra-corredor-propiedades-chile/
- Transfi, Chile payment methods: https://www.transfi.com/es/blog/best-online-digital-payment-platform-providers-in-chile
- dLocal, Chile: https://docs.dlocal.com/docs/chile
- CartDNA, Webpay: https://cartdna.com/en/shopify-payment-methods/webpay
- 24horas, CuentaRUT international use: https://www.24horas.cl/te-sirve/bancoestado/cuentarut/cuentarut-como-activar-el-uso-internacional-de-mi-tarjeta
- Rankia, debit-card foreign fees: https://www.rankia.cl/blog/mejores-tarjetas-credito-debito/5788374-comisiones-por-usar-tarjeta-debito-extranjero
- Santander debit card: https://banco.santander.cl/personas/tarjetas/debito/detalles/tarjeta-de-debito
- China Construction Bank Chile tariff: https://cl.ccb.com/chile/uploadfile/727784/20210827164627203971.pdf
- Wise Chile, receiving transfers: https://wise.com/cl/blog/que-bancos-reciben-transferencias-internacionales-chile
- Simplo, patente municipal: https://simplo.cl/calculadoras/patente-municipal/providencia/
- Holafly, company costs: https://esim.holafly.com/es/blog/expatriados/abrir-empresa-chile/
- Damalion, company costs 2026: https://www.damalion.com/how-to-register-a-company-in-santiago-chile-costs-timelines-2026/
- Expat.com, company setup: https://www.expat.com/es/guia/america-del-sur/chile/17117-transportes-en-chile.html
- Revista Chilena de Derecho, Ley 20.416 and abusive clauses: https://revistadisena.uc.cl/index.php/Rchd/article/download/24969/20171/58693
- Carey 2010, Ley 20.416: https://www.carey.cl/api/archivo/news-alert-n1-junio-2010?lang=es
- BioBioChile, trademarks: https://www.biobiochile.cl/noticias/servicios/toma-nota/2025/03/30/como-inscribir-una-marca-y-una-patente-en-chile-los-pasos-y-costos.shtml
- Diario Estrategia, trademark filings 2026: https://www.diarioestrategia.cl/texto-diario/mostrar/6009922/solicitudes-marcas-chile-aumentan-182-cierre-julio-2026-e-impulsan-sectores-tecnologia-salud
- Appvizer, Wasi: https://www.appvizer.es/construccion/software-inmobiliario/wasi
- Develop Argentina, real-estate software prices: https://developargentina.com/blog/software-inmobiliaria-argentina-2026
- NovoAds, LatAm CPC: https://novoads.ai/es/blog/cpc-promedio-por-industria-latam
- Semrush, Google Ads costs: https://es.semrush.com/blog/google-ads-coste/
- The Latin American Lawyer, Regcheq round: https://thelatinamericanlawyer.com/vei-counsels-regcheq-on-2m-investment-round/
- Descubre, Regcheq round: https://www.descubre.vc/noticia/regcheq-levant-us-2m-2023-07-11
- beancount.io, SaaS multiples: https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide
- BigIdeasDB, SaaS multiples: https://bigideasdb.com/saas-valuation-multiples-2026
- Pipeline Road, SaaS valuations: https://pipelineroad.com/agency/blog/saas-valuations-guide
- El Peruano, Peru non-resident income tax: https://elperuano.pe/noticia/223591-impuesto-a-la-renta-consejos-para-los-contribuyentes-no-domiciliados
- Gestión, Peru digital services: https://gestion.pe/opinion/sunat-complica-a-no-domiciliados-usar-e-mail-convertiria-a-cualquier-consultoria-en-servicio-digital-noticia/
- RSM Peru, Doing Business 2025: https://rsm.global/peru/sites/default/files/media/documents/ES-Doing%20Business%202025.pdf

Taken from the sibling deep dives [01](01-law-and-requirements.md) and [02](02-market-and-competition.md), which give the underlying sources:
- UAF register, sanctions, ROE calendar, DFC 2025 report, e-learning campus: https://www.uaf.cl/media/documentos/Sujetos_Obligados_inscritos_en_la_UAF_al_30.06.2026.xlsx ; https://www.uaf.cl/es-cl/sujetos-obligados/sector-privado/inscritos-en-la-uaf ; https://www.uaf.cl/es-cl/publicaciones-uaf/sanciones-ejecutoriadas ; https://www.uaf.cl/media/documentos/Calendario_ROE_2026_fJZ3WvN.pdf ; https://www.uaf.cl/media/documentos/Informe_Resultados_DFC_2025_y_Plan_2026_VF_xsmFFOU.pdf ; https://capacitacion.uaf.cl/campus/
- Prieto on Clave Única: https://www.prieto.cl/en/uaf-implementa-autenticacion-mediante-clave-unica-en-el-portal-de-entidades-reportantes-2/
- Rivals: https://www.lexizum.com/ ; https://regcheq.com/es-cl/cumplimiento-uaf ; https://regcheq.com/es-cl/partners ; https://regcheq.com/ ; https://www.gesintel.cl/ ; https://neitcom-compliance.cl/productos/empresas/
- Price anchors: https://anacopro.cl/como-ser-socio-anacopro/ ; https://anacopro.cl/producto/curso-de-corredor-de-propiedades/ ; https://anacopro.cl/catalogo-cursos/ ; https://educacioncontinua.uc.cl/programas/claves-contra-el-lavado-de-activos-y-la-corrupcion/
- Channels: https://www.acop.cl/ ; https://www.coproch.cl/ ; https://notariosyconservadores.cl/ ; https://www.descubre.vc/noticia/despapeliza-y-fundaci-n-red-notarial-impulsan-la-digitalizaci-n-notarial-en-chile-2025-09-03 ; https://www.itsitio.com/ch/soluciones/chile-transformacion-digitalnotarial/ ; https://www.meganoticias.cl/nacional/520237-cambios-por-ley-de-notarias-23-04-2026.html
- Regional: https://www.sbs.gob.pe/prevencion-de-lavado-activos/Sujetos-Obligados/Relacion-de-Sujetos-Obligados ; https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf ; https://biblioteca.gafilat.org/wp-content/uploads/2024/07/IEM-Uruguay.pdf ; https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf ; https://hada.com.uy/ ; https://colegioinmobiliario.org.ar/novedades/245 ; https://www.bhrmx.com/wp-content/uploads/2025/11/INTERMEDIACIÓN-EN-LA-TRANSMISIÓN-DE-INMUEBLES-Y-LA-LFPIORPI.pdf
