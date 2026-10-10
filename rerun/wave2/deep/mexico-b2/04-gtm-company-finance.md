# Mexico ICSOE/SISUB workbench: go-to-market, payments, company setup and financials (deep dive 04)

Status: complete as of 10 Oct 2026 (open questions at the end). Builds on [the B2 report](../reports/mexico-b2.md), [01 law](01-law-and-requirements.md) and [02 market](02-market-and-competition.md). Market counts below (filers, accounting firms, competitor prices) come from 02 and keep its sources.

Money is in Mexican pesos (MXN). USD figures use about MXN 18 per USD (unverified rate). "Net" means before 16% IVA (Mexican VAT). Anything marked "my estimate" is a planning assumption, not a sourced fact. The model script is in the session scratchpad, not in the repo.

## Summary

- **Sell a "REPSE workbench", not a file generator, and price it just above the cheap incumbent.** SIFO REPSE-Fácil already generates ICSOE and SISUB files for MXN 1,500 a year (VAT included) for 1-5 RFCs ([SIFO](https://sifo.com.mx/precios_sifo.php)). CONTPAQi Nóminas exports the worker lists inside a MXN 5,590-7,690 a year licence ([CONTPAQi](https://www.contpaqi.com/nominas)). Our extra value is checks against SUA and payroll, a deadline board across clients, an archive, and the monthly evidence pack that client portals demand. Plans (net of IVA):
  - **Contratista** MXN 2,490 a year (one RFC);
  - **Contratista Plus** MXN 4,490 a year;
  - **Despacho 15** MXN 5,990 a year (up to 15 client RFCs);
  - **Despacho 40** MXN 11,900 a year;
  - a one-period **Pase de temporada** at MXN 990;
  - a free nil-filer tier and a free SISUB CSV checker as lead magnets.

  This is about MXN 400 per client RFC a year for an accounting firm. That is roughly 1.5 times SIFO's price and below the cost of a CONTPAQi licence.
- **The calendar drives everything.** Filing windows close on the 17th of January, May and September. The next three deadlines are **18 Jan 2027** (17 Jan is a Sunday), **17 May 2027** and **17 Sep 2027**. In each 2025 period, 34-43% of contract returns were filed late, and 25,000-42,000 returns were filed in the last three days (02, from the [IMSS public list](https://www.imss.gob.mx/icsoe/listado-publico)). Sell and onboard in the 4-6 weeks before each deadline. Avoid March and April, when accountants file annual returns (LISR arts. 9 and 150, [LISR](https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf)).
- **Channels in priority order:**
  1. accounting firms through direct outreach and deadline webinars;
  2. accountant colleges and trainers (Colegio de la Contaduría Pública, IMCP colleges, COFIDE);
  3. deadline-season search ads and SEO on SISUB error messages;
  4. CONTPAQi and Aspel distributors as referral partners;
  5. later, client-side REPSE platforms and large client firms.

  The year-1 marketing budget is **MXN 300,000 (about USD 16,700)**, plus 20% partner commissions.
- **Payments: sell through Paddle from the founder's foreign company. No Mexican company is needed at launch.** Paddle.com Market Limited is on SAT's list of registered foreign digital-service providers (RFC PML120808ITA, list cut-off 31 Aug 2026) ([SAT list via SDV](https://sdv.com.mx/dof/5799037/)). It charges Mexican IVA at 16% on B2B and B2C sales ([Paddle](https://www.paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for)) and supports MXN prices ([Paddle currencies](https://developer.paddle.com/concepts/sell/supported-currencies)). Its fee is 5% + USD 0.50 per transaction ([Paddle pricing](https://www.paddle.com/pricing)). Mexican buyers can credit IVA charged by a registered foreign provider, using its receipt instead of a CFDI (LIVA art. 18-F, [LIVA](https://www.diputados.gob.mx/LeyesBiblio/pdf/LIVA.pdf)).
  - Stripe and Lemon Squeezy are **not** on that SAT list.
  - Selling directly with Stripe would make the founder's company register in Mexico's RFC itself (LIVA art. 18-D), with a legal representative and a Mexican address.
- **Buyer-side friction remains.** Accountants want a "factura" (CFDI). A foreign company cannot issue one. A foreign invoice is deductible if it meets RMF rule 2.7.1.14 ([Siempre al Día](https://siemprealdia.co/mexico/fiscal/deduccion-de-pagos-al-extranjero-requistios-sat/)). The Mexican law treats payments for software use as royalties (CFF art. 15-B, [CFF](https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf)), subject to 25% withholding without a treaty (LISR art. 167) and usually 10% under a treaty ([SDV, US treaty](https://sdv.com.mx/compendio/tratados-doble-tributacion/tratado-mexico-usa/)). Practitioners say standardised software counts as business profits under RMF rule 2.1.37, with no withholding where a treaty applies ([Contadigital](https://www.contadigital.mx/posts/gastos-pagados-a-extranjeros-son-deducibles-de-impuestos)). Get a written opinion from a Mexican tax adviser (MXN 20,000 budgeted) and publish a buyer FAQ.
- **A local company is only needed if buyers refuse to buy without a CFDI, or once Mexican staff become employees.** Doing it in person costs about **MXN 15,100-39,700** in third-party fees ([Praxium calculator](https://praxiumconsultores.com/herramientas/calculadora-constitucion-empresa)). Done remotely through a law firm, it costs about **MXN 70,000-160,000** ([Global Law Experts](https://globallawexperts.com/company-formation-mexico/), search snippet). Running it costs about MXN 10,000-15,000 a month (my estimate, built from sourced parts). A foreign-owned company must register with the RNIE within 40 business days ([Secretaría de Economía](https://www.economia.gob.mx/files/comunidad_negocios/registro_inversion/registro_nacional_inversiones_extranjeras_solicitud.pdf)). Its RFC and e.firma require an in-person SAT appointment ([AMCPDF](https://amcpdf.org.mx/consideraciones-2026-para-las-sociedades-por-acciones-simplificadas-sas/)).
- **Base case (36 months, founder builds with AI agents, no founder pay):**
  - **210 accounting firms and 340 contractors** by Oct 2029;
  - **ARR MXN 2.8 million (about USD 155,000)**;
  - year-3 profit before founder pay of **MXN 1.38 million (about USD 77,000)**;
  - peak cash need **MXN 275,000 (about USD 15,300)** in July 2027;
  - profitable on a trailing-12-month basis from January 2028.
  - With founder pay of MXN 60,000 a month from month 13, the peak cash need is MXN 411,000 (about USD 23,000).
  - **Low case:** 227 customers, ARR MXN 1.06 million. Cash only turns positive in month 35, and it never does if the founder takes pay.
  - **High case:** 1,157 customers and ARR MXN 6.3 million.
- **This is a solid one-to-three-person business, not a venture.** Regional expansion is weak: ICSOE and SISUB exist only in Mexico (02). Growth must come from neighbouring REPSE duties for the same buyers. Likely exits are a trade sale to CONTPAQi, Siigo Aspel (Siigo bought Aspel in Feb 2022, [Accel-KKR](https://www.accel-kkr.com/siigo-empresa-colombiana-continua-su-expansion-en-america-latina-con-la-adquisicion-de-aspel-en-mexico/)), a payroll SaaS or a client-side REPSE platform. Small SaaS firms sell at about 2.5-4 times ARR ([beancount.io](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)), so about MXN 7-11 million on the base case.
- **Kill criteria:**
  - fewer than 5 paying accounting firms after the 18 Jan 2027 deadline;
  - fewer than 15 firms after the 17 May 2027 deadline;
  - ARR below MXN 250,000 at month 12 (Oct 2027);
  - first-year firm renewals below 60% in Jan 2028.

## Pricing and packaging

### What buyers already pay (anchors)

| Item | Price | Source |
|---|---|---|
| SIFO REPSE-Fácil (ICSOE file and three SISUB reports, multi-RFC) | MXN 1,500 a year for 1-5 RFCs; 3,000 (6-10); 4,500 (11-15); 6,000 (16-20); 7,500 (21-25). VAT included. About MXN 260 net per RFC a year at the top of each band. | [SIFO prices](https://sifo.com.mx/precios_sifo.php) (via 02) |
| CONTPAQi Nóminas desktop (includes ICSOE/SISUB worker CSV exports) | MXN 5,590 a year for one RFC; MXN 7,690 multi-RFC "for accounting firms"; extra user MXN 1,690-1,790 | [CONTPAQi Nóminas](https://www.contpaqi.com/nominas) (via 02) |
| Aspel NOI payroll | MXN 413 a month paid yearly (MXN 4,956 a year) before VAT | [Siigo Aspel NOI](https://www.siigo.com/mx/nomina-en-linea-aspel-noi/) (via 02) |
| MueveTierras (machinery-rental ERP with ICSOE/SISUB) | MXN 799-1,999 a month paid yearly, before VAT. Sells by Stripe card, SPEI and OXXO. | [MueveTierras](https://muevetierras.mx/precios) (via 02) |
| ICSOE/SISUB course | COFIDE MXN 1,190 (5 hours); Colegio MXN 798 for members, MXN 1,156 for others (2 hours) | [COFIDE](https://www.cofide.mx/cursos/icsoe-y-sisub-infonavit-e-imss-declaraciones-infomativas); [Colegio](https://www.contadoresmexico.org.mx/Curso/Repse-y-sus-informativas-en-el-ICSOE-y-Sisub) |
| SME accounting retainer (company with payroll) | MXN 3,000-7,000 a month | [Praxium](https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-en-guadalajara) |
| Staff time for ICSOE/SISUB, small contractor | About 12 hours a period, 36 hours a year. At an assumed MXN 300 an hour, about MXN 10,800 a year (rate unverified). | [Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre) |
| Client-side supplier platforms | Priced per supplier, on quote | [Vigía Legal](https://www.vigialegal.mx/precios) |
| ICSOE fine, late or missing | 500-2,000 UMA, MXN 58,655-234,620 in 2026 | [BHR México](https://www.bhrmx.com/wp-content/uploads/2026/08/Servicios-especializados-el-riesgo-no-termina-con-el-REPSE.pdf) |

What this tells us:
- **File generation alone is worth about MXN 300 per RFC a year.** SIFO sets that ceiling. We cannot charge much more for the same thing.
- **An accounting firm pays about MXN 5,000-8,000 a year for its payroll software.** A REPSE add-on near that level is plausible only if it saves several hours per client each period (my estimate).
- **A contractor already pays its accountant MXN 3,000-7,000 a month.** A separate tool must justify itself with something the accountant does not provide: the monthly evidence pack that releases client payments ([AXA REPSE document](https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf); [repse.org.mx](https://www.repse.org.mx/repse-portal.html)).
- **Courses cost MXN 800-1,200 per person per season.** A one-period pass at about MXN 990 sits in the same mental bucket.

### Proposed plans (net of 16% IVA; monthly price is one tenth of the yearly price)

| Plan | Who | Yearly | Monthly | What is included |
|---|---|---|---|---|
| Gratis (lead magnet) | Nil filers (about 96,000 a period) and anyone testing | 0 | 0 | Deadline calendar and reminders for 1 RFC. Nil-return ("sin información") checklist. SISUB CSV checker for up to 25 worker rows. No file generation. |
| Contratista | Small contractor, 1 RFC, up to 10 contracts a period and 150 workers | MXN 2,490 | MXN 249 | Contract register; worker-to-contract mapping from CONTPAQi/NOI exports, payroll CFDI XML or Excel; ICSOE worker CSV and contract capture sheet; the three SISUB layouts; checks against SUA/SIPARE and between ICSOE and SISUB; acknowledgement archive; monthly client evidence pack. |
| Contratista Plus | Maintenance or construction firm with many purchase orders (02 counts 1,644 filers with 26 or more contracts) | MXN 4,490 | MXN 449 | As Contratista, with unlimited contracts (fair use 500 workers), purchase-order import, and an evidence pack per client. |
| Despacho 15 | Accounting firm or payroll bureau | MXN 5,990 | MXN 599 | Up to 15 client RFCs, 3 users, multi-client deadline board, all Contratista features per client. |
| Despacho 40 | Larger firm | MXN 11,900 | MXN 1,190 | Up to 40 client RFCs, 8 users. Extra RFC MXN 250 a year. |
| Pase de temporada | One-off buyer in deadline panic | MXN 990 per RFC per period | - | One filing window, no evidence pack. Credited in full against a yearly plan bought within 30 days. |

**Offers and add-ons (my proposals):**
- **Founding offer.** Firms that sign before 28 Feb 2027 get 30% off the first year, and contractors get 20% off. Cap it at the first 50 firms. Price increases after that should track inflation, about 5% a year.
- **Onboarding** for firms: MXN 2,500 one-off, waived on yearly plans.
- **Expert review** ("revisión experta") by a partner accountant: about MXN 1,500 per RFC per period. The partner keeps 70%. Paddle and Stripe Managed Payments only accept fully automated digital products ([Stripe eligibility](https://docs.stripe.com/payments/managed-payments/eligibility)), so the partner bills this directly.
- **Effective average prices** used in the model, after discounts and partial use:
  - firms: MXN 6,900 in year 1, 7,700 in year 2 and 8,400 in year 3;
  - contractors: MXN 2,600, 2,850 and 3,050.

**Why these numbers.**
- Despacho 15 at MXN 5,990 is MXN 399 per RFC a year when full, against about MXN 260 net at SIFO.
- It sits below the CONTPAQi multi-RFC licence (MXN 7,690).
- One saved hour per client per period pays for it, at an assumed MXN 300 an hour (unverified).
- Contratista at MXN 2,490 is about a quarter of the staff-time cost (MXN 10,800) and less than one month of an accounting retainer.

### IVA (VAT) points

- Mexico's general IVA rate is 16% (LIVA art. 1, [LIVA](https://www.diputados.gob.mx/LeyesBiblio/pdf/LIVA.pdf)). Mexican B2B software prices are usually quoted "+ IVA". Aspel and MueveTierras both quote before VAT ([Siigo](https://www.siigo.com/mx/nomina-en-linea-aspel-noi/); [MueveTierras](https://muevetierras.mx/precios)).
- Through Paddle, IVA is added at checkout and remitted by Paddle. Paddle applies 16% to B2B and B2C buyers in Mexico ([Paddle tax list](https://www.paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for)). A business buyer can type its RFC. Paddle's tax-ID format guide lists a Mexican format that matches the RFC pattern ([Paddle VAT ID formats](https://www.paddle.com/help/sell/tax/what-format-should-i-use-for-my-vat-id)) (that it is the RFC is my inference).
- Some contractors are micro firms. Micro firms can count as consumers for some complaints (LFPC art. 2 fr. I, [LFPC](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPC.pdf)), and the consumer law requires the total price to be shown (art. 7 Bis). So the price page should show the total with IVA under each net price.

## Go-to-market

### Selling seasons and deadlines

| Window | What happens | Sales action |
|---|---|---|
| 1-18 Jan 2027 (17 Jan is a Sunday) | ICSOE and SISUB for Sep-Dec 2026. The SISUB amounts must match SUA for the Nov-Dec bimester, which is paid by 17 January ([contadormx](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)), so the real work is squeezed into early January (my inference). Monthly taxes are due on the 17th as well. | Main paid launch. Ads, deadline webinar, extended WhatsApp support. |
| Feb-Apr | Companies' annual returns by 31 March (LISR art. 9). Individuals' returns in April (LISR art. 150). Accountants are overloaded ([LISR](https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf)). | Quiet selling. Case studies, partner deals, product work. Restart outreach on 20 April. |
| 20 Apr-17 May 2027 | Jan-Apr period | Second paid wave. |
| June-July | No filing deadline. Monthly evidence packs continue. | Sell the evidence pack. Push yearly plans. |
| 15 Aug-17 Sep 2027 | May-Aug period. 16 September is a public holiday (LFT art. 74, [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf)). | Third wave. |
| Oct-Dec | No deadline. Budgets for next year. | Yearly renewals and upgrades. Onboard firms before January. Avoid 15 Dec-6 Jan. |

The IMSS filing window opens on the 1st of the deadline month. For example, May-Aug 2026 ran from 1 to 17 Sep 2026 ([IMSS ICSOE](https://imss.gob.mx/icsoe)). Later deadlines: 17 Jan 2028 (Mon), 17 May 2028 (Wed), 18 Sep 2028 (17 Sep is a Sunday), 17 Jan 2029 (Wed), 17 May 2029 (Thu), 17 Sep 2029 (Mon) (my calendar check).

### Target segments in order

1. **Accounting firms and payroll bureaus that file for REPSE clients.**
   - Size: 16,356 accounting establishments, 4,226 of them with 6 or more staff. My guess is that 3,000-6,000 file ICSOE/SISUB for clients (02, [INEGI DENUE](https://www.inegi.org.mx/contenidos/masiva/denue/denue_00_54_csv.zip); the 3,000-6,000 is unverified).
   - Why first: one sale covers many RFCs. They feel the deadline crunch most. They already buy software.
2. **Contractors with several contracts.** 17,052 filers have 3 or more contracts and 6-250 workers (02). They file in-house or need the evidence pack for big clients such as OXXO (759 REPSE suppliers) or Bimbo (454) (02, [IMSS list](https://www.imss.gob.mx/icsoe/listado-publico)).
3. **Single-contract micro contractors** (about 22,000 with one contract). Reach them through the free tier and the Pase de temporada. They are expensive to sell to one by one.

### Channels (priority order)

| # | Channel | Why | How | Cost |
|---|---|---|---|---|
| 1 | Direct outreach to accounting firms | Highest value per sale. Firms can be found from DENUE and from contractor names in the IMSS public list. | LinkedIn, email, then WhatsApp follow-up. WhatsApp is among the most used platforms in Mexico, which had 101.9 million internet users at end-2023 ([dplnews](https://dplnews.com/dia-mundial-de-internet-mexico-supera-los-100-millones-de-internautas/), search snippet). A 20-minute demo on the firm's own past-period files. Use the IMSS list only for company research. Personal data of individuals (personas físicas) needs care under the LFPDPPP (unverified). | Founder time, plus about MXN 24,000 a year in tools |
| 2 | Accountant colleges and trainers | Colegio de la Contaduría Pública runs ICSOE/SISUB workshops each season ([Colegio](https://www.contadoresmexico.org.mx/Curso/Repse-y-sus-informativas-en-el-ICSOE-y-Sisub)). IMCP federates 60-61 colleges with about 21,000-24,000 members (02). COFIDE sells courses ([COFIDE](https://www.cofide.mx/cursos/icsoe-y-sisub-infonavit-e-imss-declaraciones-infomativas)). | Co-host a "file in 30 minutes" workshop 2-3 weeks before each deadline. Every attendee gets one free period. Offer a revenue share or sponsorship. | About MXN 10,000 per event (unverified) |
| 3 | Deadline-season search and SEO | Tens of thousands file in the last three days (02). Mexico's average cost per click is about USD 0.66 (Statista/Semrush via [Merca2.0](https://www.merca20.com/?p=12486357)). B2B accounting keywords probably cost more (unverified). | Google Ads only in the 3 weeks before each deadline. SEO pages for each SISUB error message ("layout incorrecto", "Logmensaje"). A free SISUB CSV checker. | MXN 90,000 a year |
| 4 | CONTPAQi and Aspel distributors | CONTPAQi has more than 6,000 business partners ([CONTPAQi, 2023](https://cdn.uc.assets.prezly.com/65d9a466-a905-4812-b5df-efce991f9d06/-/inline/no/CONTPAQi_MAR2023_Aniversario_39_VF.docx)). Its distributor pitch promises "attractive margins" ([CONTPAQi distributor deck](https://www.contpaqi.com/hubfs/Fichas/Presentacion_Nuevo_Distribuidor.pdf)). We import CONTPAQi's own ICSOE/SISUB exports, so we complement it. | Referral fee of 20% of first-year revenue. Distributors can also resell and issue the CFDI themselves (see Payments). | Commission only |
| 5 | Client-side platforms and large clients | 59,200 client firms; 2,643 use 11 or more REPSE contractors (02). Vigía Legal, BDO and Xternall collect suppliers' acknowledgements but do not produce them (02). | From month 9: partner pilots where a client recommends the tool to its suppliers. | Founder time |
| 6 | Sector bodies (security, cleaning) | Smaller segments: 2,946 security and 5,879 cleaning contract filers (02) | Year 2 | Low |

### Sales motion

- **Self-serve for contractors.** They start with the free tier, then buy the Pase or a yearly plan at Paddle checkout with a card. Onboarding is an upload wizard for CONTPAQi/NOI exports, payroll XML or Excel.
- **Assisted for accounting firms:**
  1. a 20-minute video call;
  2. a free pilot run on one past period of their own data (May-Aug 2026), showing the inconsistencies the tool would have caught;
  3. a 30-day trial on 3 client RFCs;
  4. a yearly plan by card or a Paddle invoice.

  The target cycle is 2-3 weeks, timed to land before a deadline.
- **Support** in Spanish by WhatsApp and email. From January 2027, a part-time Mexican accountant on contract handles it. Hours are extended in the 10 days before each deadline.
- **Proof points to collect:** hours saved per client per period, errors caught before filing, and "on time" rates against the 34-43% late rate in the IMSS list.

## 90-day launch plan

Start Monday 12 October 2026. Day 90 is Saturday 9 January 2027. The plan runs to the January deadline week (18 Jan 2027), with the review on 22 Jan 2027. The build follows the owner's assumption: MVP in about 3 weeks, sellable in 6-8 weeks.

**Days 1-21 (12 Oct-1 Nov): build the MVP and validate.**
- Build with Claude Code and parallel agents:
  - importers for CONTPAQi ICSOE/SISUB CSV, SUA and payroll CFDI XML;
  - the contract register;
  - the ICSOE and SISUB generators;
  - the check suite;
  - the deadline board.
- Hold 20 interviews with accountants and 10 with contractors (LinkedIn, college WhatsApp groups, COFIDE and Colegio contacts). Ask what they charge per period and what they would pay. Collect 5-10 anonymised May-Aug 2026 datasets.
- Engage a REPSE and social-security specialist (contador or lawyer) on a fixed fee to check rules, layouts and check logic (MXN 40,000, my estimate).
- Open the Paddle account. Seller verification can take days to weeks (unverified). Put a Spanish landing page live with a waitlist: "ICSOE y SISUB a tiempo y sin rechazos".
- Ask CONTPAQi and Aspel support whether an ICSOE/SISUB contract layer is on their roadmap.

**Days 22-56 (2 Nov-6 Dec): make it sellable.**
- Back-test on the collected datasets. Compare our files with what was filed, and log every difference.
- Have a Mexican lawyer draft the terms of service, privacy notice ("aviso de privacidad") and processor agreement in Spanish (MXN 30,000, my estimate). Get a tax opinion on IVA, ISR withholding and invoices (MXN 20,000, my estimate).
- Run an external security test by 4 December (MXN 45,000, my estimate) and fix the findings.
- Put Paddle checkout live with MXN prices. Publish the "¿Me das factura?" FAQ (see Payments).
- Release the free SISUB CSV checker and the deadline calendar. Publish 10 SEO pages on SISUB/ICSOE errors.
- Pitch the Colegio (a January workshop), COFIDE, 2-3 IMCP colleges and 5 CONTPAQi distributors.

**Days 57-90 (7 Dec 2026-9 Jan 2027): pilots and pre-sales.**
- Load 10-15 pilot firms with their own Sep-Dec 2026 data as payroll closes.
- Sell the founding offer from 7 to 18 December. Do not push sales from 19 Dec to 4 Jan (holidays).
- 4-9 Jan: start Google Ads. Run webinar no. 1, "ICSOE y SISUB sep-dic 2026 en 30 minutos", with a partner. Email and WhatsApp the waitlist.

**Deadline week (11-18 Jan 2027).** Run a support sprint: same-day answers and a "rejected file" escalation within 4 hours.

**Day-90 review (22 Jan 2027).** Check the results against the milestones below.
- Target: 15 or more paying firms and 20 or more contractors.
- Kill or rethink if there are fewer than 5 paying firms and fewer than 10 contractors.

## 12-month marketing plan and budget

Period: November 2026 to October 2027. All figures in MXN, including IVA where it applies (my estimates).

| Quarter | Focus | Main activities | Budget |
|---|---|---|---|
| Q1 Nov-Jan | Pilots and January wave | Landing page, free checker, SEO pages; Colegio workshop; webinar no. 1; first Google Ads wave (4-18 Jan); outreach to 400 firms | 90,000 |
| Q2 Feb-Apr | Accountants busy with annual returns | Case studies and testimonials; distributor agreements; content; second outreach wave from 20 April; Ads from 25 April | 55,000 |
| Q3 May-Jul | May wave, then the evidence pack | May webinar with COFIDE or a college; Ads 1-17 May; "monthly evidence pack" campaign to contractors serving big clients; first client-platform conversations | 80,000 |
| Q4 Aug-Oct | September wave and renewals | Ads 25 Aug-17 Sep; webinar no. 3; a trip to an IMCP or regional college event (the 2026 IMCP convention moved to Acapulco ([IMCP](https://imcp.org.mx/folio-no-35-2025-2026-cambio-de-sede-de-la-103-asamblea-convencion-imcp-2026/))); renewal and upgrade campaign | 75,000 |
| **Total** | | | **300,000 (about USD 16,700)** |

By line item:

| Item | MXN a year | Notes |
|---|---|---|
| Google Ads, three deadline waves plus a low always-on budget | 90,000 | About 3,000-6,000 clicks at an assumed MXN 15-30 per click (unverified) |
| Co-branded workshops and webinars (6 a year) | 60,000 | About MXN 10,000 each for sponsorship or revenue share (unverified) |
| Events and founder travel (2 events, 3 trips from abroad) | 70,000 | My estimate |
| Content, SEO and demo videos (Spanish freelance editor) | 36,000 | The founder drafts with AI; a native editor reviews |
| Outreach tools (email platform, LinkedIn Sales Navigator, WhatsApp Business API, data cleaning) | 24,000 | My estimate |
| Contingency | 20,000 | |
| **Total** | **300,000** | |
| Partner commissions (not in the 300,000) | 20% of first-year revenue on partner deals | About 6% of new bookings if 30% of deals come through partners |

Years 2 and 3 in the base case: MXN 360,000 and 400,000. The focus moves to referrals, renewals and the client-platform channel.

**One-off launch costs (not marketing; my estimates):**
- REPSE specialist rule review: MXN 40,000.
- Terms, privacy notice and processor agreement: MXN 30,000. As a benchmark, Termly cites an average of USD 930 for lawyer-drafted terms ([Termly](https://termly.io/es/preguntas-frecuentes/cuanto-cuestan-los-terminos-y-condiciones/)).
- Tax opinion: MXN 20,000.
- Trademark: MXN 3,500 (unverified).
- Security test: MXN 45,000.
- **Total: about MXN 138,500 (USD 7,700).**

## Payments and tax friction

### Do Mexican cards work for cross-border online payments?

- Yes, but approval rates are lower.
- Nuvei, a payments vendor, says cross-border card payments in Mexico often clear at 50-60%, against 80% or more on local acquiring. It also says domestic debit cards fail often when processed cross-border ([Nuvei](https://www.nuvei.com/posts/evaluating-payment-strategies-for-the-mexican-market-direct-acquiring-versus-cross-border-models)). These are vendor figures (unverified).
- Mitigations:
  - charge in MXN, not USD;
  - offer PayPal and an invoice with bank transfer through the merchant of record;
  - steer accounting firms (business credit cards) to yearly plans;
  - keep the local reseller route for buyers who cannot pay abroad.

### Option A (recommended): Paddle as merchant of record

- **Mexico is covered.**
  - Paddle charges 16% IVA on B2B and B2C sales in Mexico ([Paddle](https://www.paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for)).
  - It supports MXN as a payment currency, with a minimum charge of MXN 13.70 ([Paddle currencies](https://developer.paddle.com/concepts/sell/supported-currencies)).
  - Mexico is not on its list of unsupported countries ([Paddle](https://www.paddle.com/help/start/intro-to-paddle/which-countries-are-supported-by-paddle)).
- **Paddle is registered with SAT.** It appears as "Paddle.Com Market Limited", UK, RFC PML120808ITA, on SAT's list of foreign digital-service providers registered in the RFC (cut-off 31 Aug 2026, 289 providers). FastSpring (Bright Market LLC) is also on the list. Stripe and Lemon Squeezy are not ([SAT oficio 700 04 00 00 00 2026-088 via SDV](https://sdv.com.mx/dof/5799037/)).
  - This matters because a Mexican buyer can credit IVA charged by a registered foreign provider, using the provider's receipt instead of a CFDI (LIVA art. 18-F).
- **Fee: 5% + USD 0.50 per transaction**, with no monthly fee ([Paddle pricing](https://www.paddle.com/pricing)).
  - On a Despacho 15 yearly payment (MXN 5,990 + IVA = MXN 6,948), that is about MXN 356, or 6% of net. This assumes the fee applies to the gross amount (unverified).
  - On a MXN 249 monthly plan, it is about 9%. The model uses a blended 6.5% of cash.
- **Payout** comes in USD, EUR or GBP balance currencies (per Paddle's currency page) to the founder's foreign company.
- **Limits:**
  - Paddle sells only software. Human services (expert review) must be billed by the partner accountant.
  - OXXO and SPEI are not offered by Paddle as far as I found (unverified).

### Option B: Stripe from the founder's foreign company

- **Fees (US account).** 2.9% + USD 0.30 per card payment, plus 1.5% for international cards and 1% if currency conversion is needed. Stripe Billing adds 0.7% and Stripe Tax 0.5% ([Stripe pricing](https://stripe.com/pricing)).
- **OXXO** cash vouchers work for US, Canadian, Singaporean and Mexican Stripe accounts, and are in preview for EEA and UK accounts. They are capped at MXN 10,000, cannot be used for recurring payments or refunded, and "Software" appears in the list of prohibited merchant categories ([Stripe OXXO docs](https://docs.stripe.com/payments/oxxo)).
- **Tax.** The founder's company becomes the seller. SAT treats SaaS as a digital service:
  - its own non-binding criterion 7/IVA/NV names SaaS ([SDV summary](https://sdv.com.mx/compendio/criterios-no-vinculativos-sat/criterio-7-iva-nv/));
  - Zoom, Atlassian, Slack, Salesforce and Notion are all registered.

  The company would then have to register in the RFC within 30 days of the first Mexican sale and charge 16% IVA separately. It would have to file a monthly information return and pay IVA monthly by the 17th, issue receipts on request, appoint a legal representative with a Mexican address, and get an e.firma (LIVA art. 18-D). Registration needs an apostilled deed with a sworn translation, a power of attorney formalised before a Mexican notary, a legal representative registered in the RFC and proof of a Mexican address (ficha 1/PLT, [contadormx, Jun 2026](https://contadormx.com/empresas-saas-extranjeras-en-mexico-rfc-efirma-sat/)). Doing this alone costs more than Paddle's extra fee at our scale (my estimate).
- **Stripe Managed Payments** (Stripe as merchant of record) costs 3.5% on top of payment fees ([Stripe pricing](https://stripe.com/pricing)). It accepts sellers in the US, Canada, the EEA, the UK and a few Asia-Pacific countries, and buyers in Mexico ([Stripe eligibility](https://docs.stripe.com/payments/managed-payments/eligibility)). Stripe is not on SAT's registered list, though, so its IVA receipts may not be creditable for Mexican buyers (unverified). Do not use it for Mexico until that is confirmed.
- **Lemon Squeezy:** not on SAT's registered list, so the same concern applies (unverified).

### Option C: local payment rails (only with a local company or a reseller)

- **Stripe Mexico:** 3.6% + MXN 3 per domestic card plus IVA on the fee; 0.5% extra for international cards; 2% for currency conversion; bank-based methods 4% + MXN 3; Billing 0.7%; MXN 150 per dispute ([Stripe México](https://stripe.com/es-mx/pricing)).
- **CFDI invoicing.** Facturapi's Stripe connector costs MXN 299 a month plus MXN 0.60 per CFDI, VAT included ([Facturapi](https://www.facturapi.io/pricing)).
- **Reseller route.** A CONTPAQi distributor or a partner accounting firm buys yearly licences from us through Paddle and invoices the end client with its own CFDI, at a 20-30% margin (my proposal). This answers the "factura" objection with no Mexican company of our own.
- Local payment specialists (dLocal, EBANX) offer OXXO and SPEI to foreign merchants. dLocal says OXXO carries about 20% of Mexican e-commerce sales ([Business Wire, 2021](https://www.businesswire.com/news/home/20210223005250/en/Lightspeed-Partners-with-dLocal-to-Power-Payments-for-Independent-Merchants-in-Mexico)). Their fees are not public (unverified).

### Bank transfer norms and costs

- Mexican firms pay each other by SPEI, which is instant and in MXN (common knowledge, unverified).
- Paying abroad means an international SWIFT transfer. Banorte charges USD 30 + IVA per transfer ([Banorte](https://www.banorte.com/Empresas/Internacional/Cobros-y-pagos-internacionales/Envio-de-Transferencias-Internacionales.html)) and BBVA NetCash USD 20 + IVA ([BBVA](https://www.bbva.mx/content/dam/public-web/mexico/documents/empresas/banca-electronica-y-canales/netcash/Caratula.pdf)). Intermediary banks may take more.
- On a MXN 5,990 plan, the buyer would pay roughly 7-10% extra just to send the money. So offer wire transfer only for yearly invoices above about MXN 10,000. Steer everyone else to cards or the reseller.

### Buyer-side tax friction

| Issue | Rule | Effect on us | Mitigation |
|---|---|---|---|
| IVA on SaaS from abroad | SaaS treated as a digital service (LIVA art. 18-B; SAT criterion 7/IVA/NV per [SDV](https://sdv.com.mx/compendio/criterios-no-vinculativos-sat/criterio-7-iva-nv/)). If a service falls outside art. 18-B, the buyer self-assesses IVA as an import of services (LIVA arts. 1 fr. IV, 24 fr. V, 26 fr. IV, [LIVA](https://www.diputados.gob.mx/LeyesBiblio/pdf/LIVA.pdf)). | Paddle charges 16% IVA and is registered. The buyer can credit it under art. 18-F. | Use Paddle. State Paddle's RFC in the FAQ. |
| "Factura" (CFDI) expectation | A foreign provider cannot issue a CFDI. A foreign invoice is deductible if it carries the provider's name, address and tax ID, the buyer's RFC, a description and the amounts (RMF rule 2.7.1.14, per [Siempre al Día](https://siemprealdia.co/mexico/fiscal/deduccion-de-pagos-al-extranjero-requistios-sat/) and [contadormx](https://contadormx.com/requisitos-para-deducir-un-comprobante-de-un-proveedor-extranjero/)). SDV's summary of the SAT criterion says "payments without CFDI are not deductible", which conflicts with that rule (unverified). | Some accountants will object. They are the buyers who know the rules best. | Make sure the buyer's RFC is on Paddle's invoice. Publish the FAQ. Offer the reseller route. |
| ISR withholding | CFF art. 15-B treats the use of computer programs as royalties ([CFF](https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf)). LISR art. 167 fr. II: 25% on royalties to non-residents. Treaty rates are usually 10%, as with the US and Spain ([SDV US](https://sdv.com.mx/compendio/tratados-doble-tributacion/tratado-mexico-usa/); [SDV Spain](https://sdv.com.mx/compendio/tratados-doble-tributacion/tratado-mexico-espana/)). Treaty benefits need proof of residence (LISR art. 4). Practitioners say standardised software is business profits under RMF rule 2.1.37, with no withholding where a treaty applies ([Contadigital](https://www.contadigital.mx/posts/gastos-pagados-a-extranjeros-son-deducibles-de-impuestos); [IDC](https://idconline.mx/fiscal-contable/2021/10/04/pago-de-regalias-por-software-con-retencion)). A deduction requires compliance with withholding duties (LISR art. 27 fr. V). | A careful buyer might withhold, or might hesitate to deduct. Paddle (UK) is the seller of record, so the UK-Mexico treaty would apply (UK rate unverified). In practice, Mexican firms pay Zoom or Notion by card without withholding (unverified). | Get a tax opinion before launch. Provide Paddle's UK residence evidence if asked (check what Paddle provides). Keep the reseller route as a fallback. |
| Must the seller register for Mexican IVA? | Yes, if it sells digital services to Mexican recipients itself (LIVA art. 18-D). Registering does not create a permanent establishment (art. 18-E). | Not needed when Paddle is the seller of record. | Use Paddle. Re-check if we ever sell directly. |

### Draft buyer FAQ (Spanish, for the site)

> **¿Emiten factura (CFDI)?** Vendemos a través de Paddle.com Market Limited, nuestro revendedor autorizado, inscrito en el RFC del SAT como prestador extranjero de servicios digitales (RFC PML120808ITA). Paddle te cobra el IVA del 16% por separado y te envía un comprobante con tu RFC, que te permite acreditar el IVA (art. 18-F LIVA) y deducir el gasto como comprobante de proveedor extranjero. Si necesitas un CFDI emitido en México, puedes comprar con uno de nuestros distribuidores autorizados. Consulta a tu asesor fiscal sobre tu caso.

(Draft only. A Mexican tax adviser must review it before use.)

## Company setup (needed or not, costs)

### Recommendation

**Do not open a Mexican company at launch.** Sell from the founder's foreign company through Paddle. Open a Mexican company only when one of these triggers fires:
1. More than about 25% of qualified accounting-firm prospects refuse to buy without a Mexican CFDI, and the reseller route does not fix it.
2. Mexican staff must become employees rather than contractors. An employer must register with IMSS, and IMSS and INFONAVIT duties follow.
3. A large client or client-side platform requires a Mexican contract and CFDI for a partnership.
4. Card approval rates stay below about 70%, and only local acquiring or SPEI would fix it (Option C).
5. Revenue passes about MXN 3 million a year. The fixed cost of a local company would then be under 5% of revenue (my threshold).

There is a permanent-establishment risk if a person in Mexico habitually concludes contracts for the foreign company. Keep the support accountant on a contract for support only, with no authority to sign deals (my recommendation; get it confirmed in the tax opinion).

### Option A: no Mexican entity (recommended at launch)

| Item | Cost |
|---|---|
| Paddle | 5% + USD 0.50 per transaction ([Paddle](https://www.paddle.com/pricing)) |
| Mexican contractors (support accountant, REPSE specialist) | Paid as contractors from abroad. They invoice the foreign company with their own CFDI (treatment unverified). A contador earns about MXN 15,797 a month on average ([Indeed MX, Jul 2026](https://mx.indeed.com/career/contable/salaries)). |
| Founder's foreign company admin | Depends on the country. MXN 3,000 a month in the model (my estimate). |

### Option B: Mexican S. de R.L. de C.V. or S.A. de C.V.

- **Form.**
  - An S.A.S. can be formed online for free and quickly. Since 2026, though, RFC registration is in person, and the SAT needs each shareholder's RFC and CURP ([AMCPDF](https://amcpdf.org.mx/consideraciones-2026-para-las-sociedades-por-acciones-simplificadas-sas/)). The S.A.S. revenue cap for 2026 is MXN 7,678,849.94 (same source). A non-resident foreigner usually has no CURP (unverified), so the S.A.S. is not practical.
  - An S. de R.L. needs at least 2 partners (up to 50) ([Praxium calculator](https://praxiumconsultores.com/herramientas/calculadora-constitucion-empresa)). The founder and his foreign company can be the two.
- **Steps:**
  1. name authorisation from the Secretaría de Economía;
  2. deed before a notary or broker (in person, or by apostilled power of attorney);
  3. registration in the Registro Público de Comercio;
  4. RFC and e.firma at an in-person SAT appointment for the legal representative;
  5. RNIE registration within 40 business days of the foreign investment, then quarterly updates and an annual economic report ([Secretaría de Economía](https://www.economia.gob.mx/files/comunidad_negocios/registro_inversion/registro_nacional_inversiones_extranjeras_solicitud.pdf); [eRegulations](https://mexico.eregulations.org/media/Inscripci%C3%B3n%20de%20sociedades%20mexicanas%20Secci%C3%B3n%20Segunda.pdf));
  6. a bank account.
- **Minimum capital:** none is fixed by law for these forms in practice (unverified). The calculator notes that capital is separate from the costs below.
- **Time:** 1-3 weeks for the deed and registration, then the SAT appointment, RNIE and bank ([Praxium](https://praxiumconsultores.com/herramientas/calculadora-constitucion-empresa)). Allow 6-10 weeks in total from abroad (my estimate).

| Cost item | In person (founder travels) | Remote through a law firm |
|---|---|---|
| Notary and deed | MXN 12,000-28,000 | Included |
| Registro Público de Comercio (CDMX figure) | MXN 2,500-9,000 | Included |
| Name authorisation | MXN 600-1,200 as listed by Praxium (the government step itself may be free; unverified) | Included |
| SAT RFC and e.firma | Free at SAT; MXN 0-1,500 for help or travel | Included, but the legal representative must still attend in person |
| RNIE registration | No government fee found (unverified) | Included |
| Apostille and sworn translation of the foreign company's documents | MXN 5,000-15,000 (my estimate) | Included |
| Lawyer's fees | - | Included in the total |
| **Total** | **About MXN 20,000-55,000 plus travel** (Praxium's MXN 15,100-39,700 third-party costs plus my apostille estimate) | **About MXN 70,000-160,000 (USD 3,500-8,000)** ([Global Law Experts](https://globallawexperts.com/company-formation-mexico/), search snippet) |

**Hidden requirements:**
- **Legal representative.** Bank and SAT steps need a legal representative who lives legally in Mexico. One provider says the representative can be Mexican or foreign but must be a legal resident ([Biz Latin Hub](https://www.bizlatinhub.com/es/pasos-clave-formar-empresa-mexico/), search snippet). Without residency, the founder has to pay a nominee representative or a law firm, at MXN 3,000-8,000 a month (my estimate, unverified).
- **Bank account.** Banks ask for the deed, powers of attorney, the tax ID certificate, proof of address and IDs. For USD or EUR accounts they also ask for the e.firma ([BBVA](https://www.bbva.com/es/como-puede-una-empresa-basada-en-mexico-o-en-el-extranjero-abrir-una-cuenta-digital/)). Foreigners generally cannot open an account online ([Western Union](https://www.westernunion.com/blog/es/como-abrir-una-nueva-cuenta-bancaria-en-mexico/), search snippet).
- **Tax address.** A virtual office costs about MXN 2,100 a month in one Mexico City listing ([Inmuebles24](https://www.inmuebles24.com/propiedades/clasificado/alclocin-renta-oficina-virtual-benito-juarez-2100-mxn-al-mes-146354402.html)). A June 2026 court thesis says a company's tax address must be where it is really managed ([Siempre al Día](https://siemprealdia.co/mexico/fiscal/domicilio-fiscal-de-personas-morales/)). Practitioners warn that SAT can cancel invoicing seals (CSD) when it cannot locate a taxpayer at a virtual office ([elconta](https://elconta.mx/riegos-sat-oficinas-virtuales-cancelar-csd/)).

**Ongoing costs of a Mexican company (my estimate from sourced parts): about MXN 10,000-15,000 a month (USD 550-850)**

| Item | MXN a month | Source |
|---|---|---|
| External accountant (monthly IVA, ISR prepayments, DIOT, e-accounting, annual return) | 3,000-7,000 | SME retainer range ([Praxium](https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-en-guadalajara)). Lower without payroll (unverified). |
| Tax address or virtual office | about 2,100 | [Inmuebles24](https://www.inmuebles24.com/propiedades/clasificado/alclocin-renta-oficina-virtual-benito-juarez-2100-mxn-al-mes-146354402.html) |
| Legal representative, if nominee | 3,000-8,000 | My estimate (unverified) |
| CFDI issuing | 299 plus MXN 0.60 per CFDI | [Facturapi](https://www.facturapi.io/pricing) |
| Bank fees, RNIE reports, minute book | about 1,000 | My estimate |

- **Taxes:** 30% corporate income tax (LISR art. 9), 16% IVA collected and remitted monthly, and 10% employee profit sharing once there are employees (not checked).
- **Model effect:** in the base case, opening the company in month 1 would add about MXN 230,000 in year 1 and MXN 150,000 a year after that. That would raise the peak cash need from MXN 275,000 to about MXN 500,000 (my calculation).

## Contracts and liability

- **Online contracts are valid.** A commercial contract made by electronic means is concluded when the acceptance is received (Código de Comercio art. 80). A data message satisfies written form and signature (art. 93) ([Código de Comercio](https://www.diputados.gob.mx/LeyesBiblio/pdf/CCom.pdf)). Clickwrap acceptance of Spanish-language terms is enough for B2B (my reading).
- **Two layers of terms.** Paddle's buyer terms govern the sale and payment. Our own licence terms (Términos de Servicio) govern use. Both are in Spanish.
- **Role and scope clause:**
  - We prepare and check. The customer reviews, signs with its own e.firma and files on the IMSS and INFONAVIT portals.
  - We never ask for, store or handle the e.firma private key. IMSS rules make its safekeeping the holder's exclusive responsibility (Lineamientos 4.2, see [01](01-law-and-requirements.md)).
- **Liability:**
  - Cap at the fees paid in the last 12 months.
  - Exclude fines, surcharges, lost client payments and indirect losses.
  - Offer a narrow **"layout guarantee"**: if a portal rejects a file that passed our checks because of our error, we fix it within 4 hours in deadline week and refund that period's fee.
  - Never promise to pay fines.
  - Whether such caps are enforceable between merchants in Mexico, and where they stop (fraud or wilful misconduct), needs the lawyer's check (unverified).
- **Consumer law.** Legal persons that buy for their business count as consumers only for certain complaints (LFPC arts. 99 and 117), and only if they are accredited micro firms (LFPC art. 2 fr. I, [LFPC](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPC.pdf)). Micro contractors could complain to Profeco. Keep cancellation simple, and show the total price with IVA.
- **Data protection (LFPDPPP 2025):**
  - We act as processor ("encargado") for the customer, who is the controller.
  - Needed: a processor agreement, a privacy-notice template for the customer's workers, encryption, access logs, breach notice to the customer, and staff confidentiality (01, requirement 75; [LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf)).
  - State where data is hosted. Whether hosting abroad by a processor counts as a "transfer" is unverified (01). A Mexican cloud region would remove the question.
- **Governing law.** Use Mexican federal commercial law and Mexico City courts. Buyers trust it, and it matches the Spanish terms. An alternative is the founder's home law with a Mexican-law consumer carve-out. The lawyer should choose (my recommendation).
- **Insurance.** Tech errors and omissions plus cyber cover, about MXN 15,000 a year (USD 800) bought in the founder's country (my estimate, unverified).
- **Intellectual property.** Register the brand at IMPI in class 42 (software as a service) and class 9 (fee unverified). Avoid names that use "IMSS", "INFONAVIT" or "SAT".

## Financial model

### Assumptions

| Assumption | Low | Base | High | Basis |
|---|---|---|---|---|
| Buyer pool | 3,000-6,000 accounting firms that file; 30,491 contractors that file contracts every period | same | same | 02 (firm count unverified) |
| New paying firms, years 1 / 2 / 3 | 35 / 45 / 45 | 70 / 90 / 90 | 130 / 170 / 170 | My estimate. Base reaches about 4-7% of filing firms by month 36. |
| New paying contractors, years 1 / 2 / 3 | 50 / 70 / 80 | 110 / 170 / 190 | 220 / 330 / 380 | My estimate. Base reaches about 1.1% of recurring contract filers. |
| Firm renewal, first / later | 70% / 78% | 80% / 85% | 88% / 90% | My estimate |
| Contractor renewal, first / later | 50% / 65% | 60% / 72% | 70% / 80% | Only 71.7% of contract filers reported contracts again a year later (02), so contractors churn partly because they leave REPSE |
| Effective firm price, years 1 / 2 / 3 (net) | 6,200 / 6,800 / 7,300 | 6,900 / 7,700 / 8,400 | 7,400 / 8,300 / 9,100 | Plan mix; 30% founding discount in months 1-6 |
| Effective contractor price, years 1 / 2 / 3 (net) | 2,400 / 2,600 / 2,750 | 2,600 / 2,850 / 3,050 | 2,800 / 3,100 / 3,350 | Plan mix; 20% founding discount in months 1-6 |
| Seasonality of new sales (Nov to Oct) | 0.6, 0.9, 2.0, 0.4, 0.3, 1.2, 2.0, 0.4, 0.5, 1.2, 1.9, 0.6 | same | same | Deadline calendar. November 2026 is 0 (build); December 2026 is 0.5 (pilots). |
| Billing | 75% yearly in advance, 25% monthly | same | same | My estimate |
| Build | Founder plus AI agents; AI tools MXN 5,000 a month in year 1, then 4,000 | same | same | Owner's assumption |
| One-off launch costs | MXN 93,500 in month 1, 45,000 in month 2, 25,000 in months 13 and 25 | same | same | Plan above (pentest repeated yearly) |
| Hosting and infrastructure | MXN 2,500 / 4,000 / 6,000 a month | same | same | My estimate |
| Other tools (CRM, email, help desk, WhatsApp API) | MXN 2,000 a month | same | same | My estimate |
| REPSE specialist on call (layout and rule changes) | MXN 5,000 a month from month 4 | same | same | My estimate |
| Support accountant (contractor) from Jan 2027, MXN a month | 6,000 / 10,000 / 12,000 | 10,000 / 18,000 / 30,000 | 14,000 / 30,000 / 48,000 | Average contador pay MXN 15,797 a month ([Indeed MX](https://mx.indeed.com/career/contable/salaries)) |
| Foreign company admin, insurance | MXN 3,000 a month; 15,000 a year | same | same | My estimate |
| Marketing, years 1 / 2 / 3 | 220,000 / 220,000 / 240,000, cut to 60% after month 6 | 300,000 / 360,000 / 400,000 | 390,000 / 470,000 / 520,000 | Plan above |
| Payment costs | 6.5% of cash | same | same | Paddle 5% + USD 0.50 |
| Partner commissions | 6% of new bookings | same | same | 30% of deals at 20% |
| Founder pay | none in the main tables; a variant adds MXN 60,000 a month from month 13 | | | |
| Mexican company | none | none | none | See the sensitivity in Company setup |

Month 1 is November 2026 and month 36 is October 2029. "Cash in" counts yearly prepayments when they are paid. ARR is the yearly value of active subscriptions.

### Base case by quarter (no founder pay)

| Quarter | New firms | New contractors | Churned | Firms (end) | Contractors (end) | ARR (end) | Cash in | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|---|---|---|
| Q1 Nov 26-Jan 27 | 16 | 25 | 0 | 16 | 25 | 128,841 | 99,852 | 278,971 | -179,119 | -179,119 |
| Q2 Feb-Apr 27 | 12 | 19 | 0 | 28 | 44 | 226,760 | 84,713 | 172,631 | -87,919 | -267,038 |
| Q3 May-Jul 27 | 18 | 29 | 0 | 46 | 73 | 429,496 | 176,857 | 184,910 | -8,053 | -275,091 |
| Q4 Aug-Oct 27 | 24 | 37 | 0 | 70 | 110 | 688,160 | 232,493 | 191,882 | 40,611 | -234,480 |
| Q5 Nov 27-Jan 28 | 26 | 50 | 13 | 93 | 150 | 1,043,507 | 417,896 | 274,520 | 143,377 | -91,103 |
| Q6 Feb-Apr 28 | 14 | 27 | 10 | 105 | 169 | 1,238,995 | 291,705 | 231,897 | 59,808 | -31,295 |
| Q7 May-Jul 28 | 22 | 41 | 15 | 123 | 198 | 1,484,091 | 426,165 | 246,524 | 179,641 | 148,346 |
| Q8 Aug-Oct 28 | 28 | 52 | 20 | 146 | 236 | 1,796,800 | 535,371 | 258,333 | 277,038 | 425,384 |
| Q9 Nov 28-Jan 29 | 26 | 55 | 31 | 165 | 267 | 2,093,084 | 707,671 | 348,120 | 359,551 | 784,935 |
| Q10 Feb-Apr 29 | 14 | 30 | 18 | 175 | 284 | 2,250,245 | 473,915 | 297,242 | 176,673 | 961,607 |
| Q11 May-Jul 29 | 22 | 46 | 28 | 190 | 308 | 2,490,124 | 669,004 | 316,600 | 352,404 | 1,314,011 |
| Q12 Aug-Oct 29 | 28 | 59 | 36 | 210 | 340 | 2,796,176 | 827,487 | 332,243 | 495,244 | 1,809,255 |

### Low case by quarter (no founder pay)

| Quarter | Firms (end) | Contractors (end) | ARR (end) | Cash in | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|
| Q1 | 8 | 11 | 56,341 | 43,664 | 246,969 | -203,304 | -203,304 |
| Q2 | 14 | 20 | 99,160 | 37,044 | 134,227 | -97,183 | -300,487 |
| Q3 | 23 | 33 | 188,005 | 77,491 | 117,618 | -40,127 | -340,614 |
| Q4 | 35 | 50 | 301,360 | 101,872 | 120,673 | -18,801 | -359,415 |
| Q5 | 46 | 65 | 439,989 | 169,714 | 165,321 | 4,393 | -355,022 |
| Q6 | 51 | 72 | 514,440 | 117,901 | 133,050 | -15,148 | -370,171 |
| Q7 | 59 | 82 | 604,586 | 171,124 | 138,949 | 32,175 | -337,996 |
| Q8 | 70 | 95 | 719,600 | 214,244 | 143,704 | 70,540 | -267,456 |
| Q9 | 77 | 106 | 821,613 | 271,202 | 187,977 | 83,225 | -184,231 |
| Q10 | 82 | 112 | 874,651 | 180,827 | 152,715 | 28,113 | -156,118 |
| Q11 | 88 | 120 | 955,605 | 253,870 | 160,205 | 93,665 | -62,453 |
| Q12 | 96 | 131 | 1,058,890 | 313,118 | 166,250 | 146,868 | 84,415 |

### High case by quarter (no founder pay)

| Quarter | Firms (end) | Contractors (end) | ARR (end) | Cash in | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|
| Q1 | 30 | 50 | 265,045 | 205,410 | 320,504 | -115,094 | -115,094 |
| Q2 | 52 | 88 | 466,480 | 174,267 | 219,163 | -44,896 | -159,990 |
| Q3 | 86 | 146 | 882,498 | 362,986 | 244,305 | 118,681 | -41,310 |
| Q4 | 130 | 220 | 1,413,280 | 477,152 | 258,612 | 218,540 | 177,230 |
| Q5 | 176 | 301 | 2,182,451 | 889,138 | 390,639 | 498,499 | 675,729 |
| Q6 | 200 | 342 | 2,612,868 | 624,450 | 328,962 | 295,488 | 971,217 |
| Q7 | 237 | 404 | 3,161,254 | 915,367 | 360,042 | 555,325 | 1,526,542 |
| Q8 | 284 | 484 | 3,860,920 | 1,151,930 | 385,154 | 766,776 | 2,293,317 |
| Q9 | 325 | 559 | 4,578,713 | 1,579,387 | 514,760 | 1,064,627 | 3,357,945 |
| Q10 | 347 | 598 | 4,964,559 | 1,062,135 | 433,579 | 628,556 | 3,986,501 |
| Q11 | 380 | 658 | 5,553,482 | 1,506,165 | 476,541 | 1,029,624 | 5,016,125 |
| Q12 | 423 | 734 | 6,304,866 | 1,867,312 | 511,295 | 1,356,017 | 6,372,142 |

### Scenario summary

| Measure | Low | Base | High |
|---|---|---|---|
| Paying customers at month 6 / 12 / 36 | 34 / 85 / 227 | 72 / 180 / 549 | 140 / 350 / 1,157 |
| Of which firms / contractors at month 36 | 96 / 131 | 210 / 340 | 423 / 734 |
| ARR at month 12 / 24 / 36 (MXN) | 301,000 / 720,000 / 1,059,000 | 688,000 / 1,797,000 / 2,796,000 | 1,413,000 / 3,861,000 / 6,305,000 |
| ARR at month 36 (USD) | about 59,000 | about 155,000 | about 350,000 |
| Cash in, years 1 / 2 / 3 (MXN) | 260,000 / 673,000 / 1,019,000 | 594,000 / 1,671,000 / 2,678,000 | 1,220,000 / 3,581,000 / 6,015,000 |
| Costs, years 1 / 2 / 3 (MXN) | 619,000 / 581,000 / 667,000 | 828,000 / 1,011,000 / 1,294,000 | 1,043,000 / 1,465,000 / 1,936,000 |
| Profit before founder pay, year 3 (MXN) | 352,000 (USD 19,500) | 1,384,000 (USD 77,000) | 4,079,000 (USD 227,000) |
| Operating break-even (trailing 12 months) | month 21 (Jul 2028) | month 15 (Jan 2028) | month 12 (Oct 2027) |
| Cumulative cash positive for good | month 35 (Sep 2029) | month 19 (May 2028) | month 10 (Aug 2027) |
| Peak cash need, no founder pay (MXN) | 405,000 (Dec 2027) | 275,000 (Jul 2027), about USD 15,300 | 196,000 (Dec 2026) |
| Peak cash need with founder pay of MXN 60,000 a month from month 13 | 1,356,000, never repaid in 36 months | 411,000 (Mar 2028), positive from May 2029 | 196,000 |
| Marketing cost per new customer, years 1 / 2 / 3 (MXN) | 2,071 / 1,148 / 1,152 | 1,667 / 1,385 / 1,429 | 1,114 / 940 / 945 |

**Unit economics, base case (my estimate):**
- **Fully loaded CAC** in year 1 is about MXN 2,200 per customer: marketing MXN 300,000, partner commissions about MXN 41,000 and half the support cost about MXN 50,000, over 180 new customers.
- **A firm** pays about MXN 7,700 a year. With 80% then 85% renewal, the five-year expected life is about 3.5 years. At about 85% gross margin, LTV is about MXN 23,000, so LTV/CAC is about 10 and payback is under 4 months.
- **A contractor** pays about MXN 2,850. With 60% then 72% renewal, the expected life is about 2.6 years. LTV is about MXN 6,200, LTV/CAC is about 3, and payback is about 10 months.
- **Conclusion:** focus acquisition spending on firms. Let contractors come through self-serve and the deadline waves.

**What the numbers mean:**
- **Cash need is small because the founder builds the software with AI agents.** Plan for MXN 300,000-450,000 (USD 17,000-25,000), which covers base-case slippage or founder pay from year 2.
- **Founder income comes only from year 2-3 in the base case.** Year-3 profit before founder pay is about MXN 1.4 million, or about USD 77,000.
- **The low case is a kill signal, and it shows early.** At month 6 there would be about 34 customers against a base target of 72. At month 12, ARR would be about MXN 300,000 against 688,000.

## Regional expansion

- **No direct export.** ICSOE and SISUB exist only in Mexico (02). The file formats, portals and rules are Mexican.
- **The best path is expansion inside Mexico, to neighbouring REPSE duties for the same buyers (in order):**
  1. **The monthly client evidence pack and supplier-portal uploads.** Already in the plans; the paid differentiator.
  2. **REPSE renewal every three years.** It needs positive compliance opinions ([IDC Online](https://idconline.mx/laboral/2026/06/10/adios-trabas-del-repse-stps-facilita-la-renovacion-y-registro)). Add a renewal-readiness check, maybe as a MXN 1,500 one-off (my proposal).
  3. **State payroll-tax (ISN) withholding by clients** in some states (02).
  4. **A client-side light version.** A "supplier compliance inbox" for the 37,457 client firms that use one REPSE contractor. They are too small for Vigía or BDO (02 count; positioning is my proposal).
- **Abroad, later and only with a partner:**
  - Chile's contractor compliance certificate (F30-1 from the Labour Directorate) is the closest analogue, but the market is mature and different (02, [Dirección del Trabajo](https://dt.gob.cl/portal/1627/w3-article-124815.html)).
  - Peru has no separate periodic return to automate (02).
  - Do not plan for a second country within 36 months.

## Exit and partnerships

**Likely acquirers:**
- **CONTPAQi.** It already exports ICSOE/SISUB worker files and has more than 6,000 partners. Buying a contract-register and evidence-pack layer is cheaper for it than building one (02; [CONTPAQi](https://cdn.uc.assets.prezly.com/65d9a466-a905-4812-b5df-efce991f9d06/-/inline/no/CONTPAQi_MAR2023_Aniversario_39_VF.docx)).
- **Siigo Aspel.** Siigo bought Aspel in February 2022 and committed more than USD 20 million to product ([Bloomberg Línea](https://www.bloomberglinea.com/2022/02/09/colombiana-siigo-compro-la-mexicana-aspel-e-invertira-us20-millones/)). Aspel NOI has no ICSOE/SISUB export that we found (02).
- **Payroll SaaS and outsourcers:** Runa, Worky, Buk (02).
- **Client-side REPSE platforms:** Vigía Legal, BDO, Xternall, SISE. They would gain the supplier side of the same flow (02).
- **SIFO**, the direct competitor. Merging or buying would remove price pressure (02).

**Valuation:**
- Small bootstrapped SaaS (under USD 1M ARR) trade at about 2.5-4 times revenue, or 4-6 times seller's discretionary earnings ([beancount.io, Jul 2026](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)). Another guide puts it at 2-3 times SDE below USD 500k ARR ([Pipeline Road](https://pipelineroad.com/agency/blog/saas-valuations-guide)).
- **Base case at month 36:** ARR MXN 2.8 million gives about **MXN 5.5-11 million (USD 300,000-620,000)**. Low case: MXN 2-4 million. These are listing-based multiples (unverified).

**Partnerships to build first:**
1. A CONTPAQi distributor referral and resale programme (month 2).
2. Co-branded deadline workshops with the Colegio and COFIDE (month 3).
3. Two or three partner accounting firms for the expert-review add-on (month 4).
4. One client-side platform, or one large client firm, recommending the tool to its suppliers (month 9-12).

## Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| CONTPAQi adds a contract register and SISUB contract/obligated-party layouts | Medium | High | Integrate with its exports, not against them. Pitch CONTPAQi distributors as partners. Make the evidence pack and the multi-client deadline board the value. Keep an exit conversation open. |
| SIFO's MXN 300-per-RFC price drags our price down | High | Medium | Do not compete on generation. Show hours saved and errors caught in the pilot. Keep the Pase and Contratista plans near course prices. |
| Low willingness to pay, "three filings a year" mindset | Medium | High | Bill yearly. Make the monthly evidence pack the habit. Validate pricing in October-November interviews. Kill criteria below. |
| "No CFDI, no sale" | Medium | Medium | Paddle registered in SAT, buyer FAQ, reseller route. Open a Mexican company if more than 25% of prospects refuse. |
| ISR withholding confusion among accountant buyers | Medium | Low-medium | Tax opinion before launch. FAQ. Reseller route. |
| Card declines on cross-border payments | Medium | Medium | MXN pricing, PayPal through Paddle, invoices for big plans, reseller. Track approval rates. |
| IMSS pre-fills ICSOE, or INFONAVIT redesigns SISUB | Low-medium | High | Watch IMSS and INFONAVIT notices. The specialist retainer covers layout changes. The checks and evidence pack stay useful even with pre-filled returns. |
| Layout changes right before a deadline (as in Dec 2023 and Jun 2026) | High | Medium | Specialist on call. Ship layout updates within 72 hours. Design the generators to be driven by configuration. |
| Data breach of NSS, CURP and salary data | Low | High | Never store the e.firma. Encryption, external security test, cyber insurance, processor agreement, data held in a Mexican cloud region if possible. |
| Founder abroad loses touch with the market | Medium | Medium | Mexican support accountant from January 2027. Three trips a year. WhatsApp community of users. |
| Founder single point of failure in deadline week | Medium | High | Runbooks, a second support person on call in deadline weeks, status page. |
| REPSE regime changes (reform or repeal) | Low | High | The June 2026 reform kept all duties ([Siempre al Día](https://siemprealdia.co/mexico/derecho-laboral/simplificacion-del-repse-stps/)). Watch Congress. |

## Milestones and kill criteria

| Date | Milestone | Kill or rethink if |
|---|---|---|
| 1 Nov 2026 (day 21) | MVP generates ICSOE and SISUB files from 3 real anonymised datasets. 30 interviews done. At least 5 firms agree to a pilot. | Fewer than 2 firms agree to a pilot, or most say "SIFO or CONTPAQi is enough". |
| 6 Dec 2026 (day 56) | Legal review, tax opinion and security test done. Paddle checkout live. At least 10 pilots loaded. At least 3 founding pre-orders. | No pre-orders after 30 demos. |
| 22 Jan 2027 (after the January deadline) | At least 15 paying firms and 20 contractors (base: 16 and 25). | Fewer than 5 paying firms and fewer than 10 contractors. |
| 31 May 2027 (after the May deadline) | At least 35 firms and 55 contractors. Evidence pack used by at least 30% of active users. | Fewer than 15 paying firms. |
| 31 Oct 2027 (month 12) | ARR of at least MXN 600,000 (base MXN 688,000). | ARR below MXN 250,000. |
| 31 Jan 2028 (first renewals) | Firm renewal at least 75%. | Firm renewal below 60%. |
| 31 Oct 2028 (month 24) | ARR of at least MXN 1.5 million. Decide on a Mexican company and a second hire. | ARR below MXN 600,000: switch to maintenance mode or sell. |

## Open questions

1. What do accountants charge per ICSOE/SISUB period today? The October interviews must answer this. It sets the price ceiling.
2. Does Paddle's invoice show the buyer's RFC and meet RMF rule 2.7.1.14? Does Paddle provide UK tax-residence evidence on request?
3. Does Paddle offer OXXO or SPEI for Mexican buyers? What are its card approval rates in Mexico?
4. Is Stripe Managed Payments registered with SAT, or planning to be? It was not on the 31 Aug 2026 list.
5. Tax opinion: ISR treatment of SaaS paid to Paddle (UK) under RMF rule 2.1.37 and the UK-Mexico treaty, and the UK treaty royalty rate.
6. Would CONTPAQi distributors resell with CFDI, and at what margin?
7. Official RNIE and name-authorisation fees, and whether a non-resident founder can get a CURP or e.firma without residency.
8. The real cost per click of "ICSOE", "SISUB" and "REPSE" keywords in the Google Ads Keyword Planner.
9. Sponsorship prices for Colegio, IMCP and COFIDE workshops, and the IMCP 2026 convention date.
10. Are Mexican contractors paid from abroad treated as exported services at 0% IVA on their CFDI?

## Sources

- IMSS ICSOE public list: https://www.imss.gob.mx/icsoe/listado-publico
- IMSS ICSOE: https://imss.gob.mx/icsoe
- INEGI DENUE sector 54: https://www.inegi.org.mx/contenidos/masiva/denue/denue_00_54_csv.zip
- SIFO prices: https://sifo.com.mx/precios_sifo.php
- CONTPAQi Nóminas: https://www.contpaqi.com/nominas
- Siigo Aspel NOI: https://www.siigo.com/mx/nomina-en-linea-aspel-noi/
- MueveTierras: https://muevetierras.mx/precios
- COFIDE course: https://www.cofide.mx/cursos/icsoe-y-sisub-infonavit-e-imss-declaraciones-infomativas
- Colegio course: https://www.contadoresmexico.org.mx/Curso/Repse-y-sus-informativas-en-el-ICSOE-y-Sisub
- Praxium hours: https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre
- Praxium accountant fees: https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-en-guadalajara
- Praxium incorporation calculator: https://praxiumconsultores.com/herramientas/calculadora-constitucion-empresa
- Vigía Legal: https://www.vigialegal.mx/precios
- AXA REPSE document: https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf
- repse.org.mx: https://www.repse.org.mx/repse-portal.html
- BHR México: https://www.bhrmx.com/wp-content/uploads/2026/08/Servicios-especializados-el-riesgo-no-termina-con-el-REPSE.pdf
- contadormx SISUB guide: https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/
- LIVA: https://www.diputados.gob.mx/LeyesBiblio/pdf/LIVA.pdf
- LISR: https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf
- CFF: https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf
- LFPC: https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPC.pdf
- Código de Comercio: https://www.diputados.gob.mx/LeyesBiblio/pdf/CCom.pdf
- LFT: https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf
- LFPDPPP: https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf
- SAT list of registered foreign digital providers (via SDV): https://sdv.com.mx/dof/5799037/
- SAT criterion 7/IVA/NV (SDV summary): https://sdv.com.mx/compendio/criterios-no-vinculativos-sat/criterio-7-iva-nv/
- contadormx, foreign SaaS registration: https://contadormx.com/empresas-saas-extranjeras-en-mexico-rfc-efirma-sat/
- contadormx, foreign invoices: https://contadormx.com/requisitos-para-deducir-un-comprobante-de-un-proveedor-extranjero/
- Siempre al Día, foreign payments deduction 2026: https://siemprealdia.co/mexico/fiscal/deduccion-de-pagos-al-extranjero-requistios-sat/
- Contadigital, standardised software: https://www.contadigital.mx/posts/gastos-pagados-a-extranjeros-son-deducibles-de-impuestos
- IDC, software royalties: https://idconline.mx/fiscal-contable/2021/10/04/pago-de-regalias-por-software-con-retencion
- SDV treaty USA: https://sdv.com.mx/compendio/tratados-doble-tributacion/tratado-mexico-usa/
- SDV treaty Spain: https://sdv.com.mx/compendio/tratados-doble-tributacion/tratado-mexico-espana/
- Paddle tax countries: https://www.paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for
- Paddle VAT ID formats: https://www.paddle.com/help/sell/tax/what-format-should-i-use-for-my-vat-id
- Paddle currencies: https://developer.paddle.com/concepts/sell/supported-currencies
- Paddle pricing: https://www.paddle.com/pricing
- Paddle supported countries: https://www.paddle.com/help/start/intro-to-paddle/which-countries-are-supported-by-paddle
- Stripe pricing (US): https://stripe.com/pricing
- Stripe pricing (Mexico): https://stripe.com/es-mx/pricing
- Stripe OXXO: https://docs.stripe.com/payments/oxxo
- Stripe Managed Payments eligibility: https://docs.stripe.com/payments/managed-payments/eligibility
- Stripe Managed Payments overview: https://docs.stripe.com/payments/managed-payments
- Facturapi pricing: https://www.facturapi.io/pricing
- Nuvei, Mexico acquiring: https://www.nuvei.com/posts/evaluating-payment-strategies-for-the-mexican-market-direct-acquiring-versus-cross-border-models
- dLocal/Lightspeed release: https://www.businesswire.com/news/home/20210223005250/en/Lightspeed-Partners-with-dLocal-to-Power-Payments-for-Independent-Merchants-in-Mexico
- Banorte international transfers: https://www.banorte.com/Empresas/Internacional/Cobros-y-pagos-internacionales/Envio-de-Transferencias-Internacionales.html
- BBVA NetCash fees: https://www.bbva.mx/content/dam/public-web/mexico/documents/empresas/banca-electronica-y-canales/netcash/Caratula.pdf
- AMCPDF, S.A.S. 2026: https://amcpdf.org.mx/consideraciones-2026-para-las-sociedades-por-acciones-simplificadas-sas/
- Secretaría de Economía, RNIE: https://www.economia.gob.mx/files/comunidad_negocios/registro_inversion/registro_nacional_inversiones_extranjeras_solicitud.pdf
- eRegulations, RNIE: https://mexico.eregulations.org/media/Inscripci%C3%B3n%20de%20sociedades%20mexicanas%20Secci%C3%B3n%20Segunda.pdf
- Global Law Experts (search snippet): https://globallawexperts.com/company-formation-mexico/
- Biz Latin Hub (search snippet): https://www.bizlatinhub.com/es/pasos-clave-formar-empresa-mexico/
- BBVA, business accounts: https://www.bbva.com/es/como-puede-una-empresa-basada-en-mexico-o-en-el-extranjero-abrir-una-cuenta-digital/
- Western Union (search snippet): https://www.westernunion.com/blog/es/como-abrir-una-nueva-cuenta-bancaria-en-mexico/
- Inmuebles24 virtual office: https://www.inmuebles24.com/propiedades/clasificado/alclocin-renta-oficina-virtual-benito-juarez-2100-mxn-al-mes-146354402.html
- Siempre al Día, tax address thesis: https://siemprealdia.co/mexico/fiscal/domicilio-fiscal-de-personas-morales/
- elconta, virtual offices: https://elconta.mx/riegos-sat-oficinas-virtuales-cancelar-csd/
- Indeed MX salaries: https://mx.indeed.com/career/contable/salaries
- Merca2.0 CPC: https://www.merca20.com/?p=12486357
- dplnews, internet users: https://dplnews.com/dia-mundial-de-internet-mexico-supera-los-100-millones-de-internautas/
- CONTPAQi 2023 release: https://cdn.uc.assets.prezly.com/65d9a466-a905-4812-b5df-efce991f9d06/-/inline/no/CONTPAQi_MAR2023_Aniversario_39_VF.docx
- CONTPAQi distributor deck: https://www.contpaqi.com/hubfs/Fichas/Presentacion_Nuevo_Distribuidor.pdf
- IMCP convention venue: https://imcp.org.mx/folio-no-35-2025-2026-cambio-de-sede-de-la-103-asamblea-convencion-imcp-2026/
- Termly: https://termly.io/es/preguntas-frecuentes/cuanto-cuestan-los-terminos-y-condiciones/
- Accel-KKR, Siigo-Aspel: https://www.accel-kkr.com/siigo-empresa-colombiana-continua-su-expansion-en-america-latina-con-la-adquisicion-de-aspel-en-mexico/
- Bloomberg Línea, Siigo-Aspel: https://www.bloomberglinea.com/2022/02/09/colombiana-siigo-compro-la-mexicana-aspel-e-invertira-us20-millones/
- beancount.io valuation guide: https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide
- Pipeline Road valuation guide: https://pipelineroad.com/agency/blog/saas-valuations-guide
- IDC Online, REPSE simplification: https://idconline.mx/laboral/2026/06/10/adios-trabas-del-repse-stps-facilita-la-renovacion-y-registro
- Siempre al Día, REPSE simplification: https://siemprealdia.co/mexico/derecho-laboral/simplificacion-del-repse-stps/
- Dirección del Trabajo (Chile): https://dt.gob.cl/portal/1627/w3-article-124815.html

## Working notes

- Research budget used: about 25 web searches and 17 page fetches, plus direct downloads of LIVA, LISR, CFF, LFPC, Código de Comercio and LFT from diputados.gob.mx. The SAT FAQ PDF on digital services returned 403.
- The model script is in the session scratchpad (model/model.py). Month 1 = Nov 2026.
- Deadlines: 18 Jan 2027 (17 Jan is a Sunday), 17 May 2027, 17 Sep 2027, 17 Jan 2028, 17 May 2028, 18 Sep 2028 (17 Sep is a Sunday), 17 Jan 2029, 17 May 2029, 17 Sep 2029.
