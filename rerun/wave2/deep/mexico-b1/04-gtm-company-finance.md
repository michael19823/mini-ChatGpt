# Mexico private-security register keeper: go-to-market, payments, company setup and financials (deep dive 04)

Date: 10 Oct 2026. Builds on [the B1 report](../reports/mexico-b1.md), [01 law](01-law-and-requirements.md), [02 market](02-market-and-competition.md) and [03 product](03-product-and-tech.md).

Conventions:
- Money is in MXN unless stated. "+ IVA" means before Mexico's 16% VAT.
- Exchange rates are my planning assumptions: USD 1 = MXN 18 (as in 02) and EUR 1 = MXN 21.
- "My estimate" marks planning numbers. "(unverified)" marks facts no source confirmed.
- The seller is assumed to be the founder's company in an EU state that has a tax treaty with Mexico. UK, US and Israeli companies are noted where they differ.

## Summary

- **Price per firm, not per guard, and stay below the gestor.** Firms pay an in-house gestor about MXN 18,000 a month ([Computrabajo ad](https://mx.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-gestor-gubernamental-en-cuauhtemoc-BA3B0D3F75D2544A61373E686DCF3405)). They pay MXN 3,290-8,690 a year for cloud payroll ([CONTPAQi 2026](https://www.contpaqi.com/hubfs/Listas%20de%20precios/Lista_de_Precios_Sistemas_CONTPAQi_2026.pdf)). A DGSP fine is MXN 113,140-169,710 ([SIDOF 5795553](https://sidof.segob.gob.mx/notas/docFuente/5795553); [SIDOF 5797220](https://sidof.segob.gob.mx/notas/docFuente/5797220)). Plans, all + IVA:
  - **Estatal** MXN 750 a month;
  - **Federal** MXN 1,900 a month (DGSP pack plus 2 state packs);
  - **Federal Plus** MXN 3,500 a month;
  - **Despacho** (for gestorías) MXN 4,500 a month for up to 15 firms;
  - extra state pack MXN 400 a month.
  Yearly prepaid plans cost 10 months.
- **Sell on the monthly deadline rhythm.** The federal report is due in the first 10 calendar days of each month. Several states want theirs in the first 5 business days ([01 law](01-law-and-requirements.md)). Pitch from day 12 to day 28. December is slow: firms must pay the guards' aguinaldo before 20 December ([LFT art. 87](https://mley.mx/LFT/articulo/87/)). Start paid plans in January.
- **Channels in priority order:**
  1. WhatsApp and phone outreach from public lists: state padrones with permit expiry dates, DOF sanction notices and the 2018 DGSP list.
  2. Gestorías and payroll accountants, with a partner plan and a 20% first-year referral fee.
  3. AMESP and state associations.
  4. Spanish search content and small Google Ads campaigns.
  5. Expo Seguridad México: visit in 2027, take a shared booth in 2028.
  The year-1 marketing budget is **MXN 180,000 (USD 10,000)**, plus MXN 108,000 for travel.
- **Sell from the founder's foreign company at first. No Mexican company is needed at launch.**
  - Cards: Mexican cards work cross-border on Stripe. Approval rates are lower: one vendor puts cross-border approval at 50-60% against 80%+ with a local acquirer ([Nuvei](https://www.nuvei.com/posts/evaluating-payment-strategies-for-the-mexican-market-direct-acquiring-versus-cross-border-models)).
  - Fees: Stripe from an EU account costs about 5.9% of a yearly Federal plan (3.15% + EUR 0.25 + 2% FX + 0.7% Billing; [Stripe IE](https://stripe.com/ie/pricing)).
  - Payment methods the foreign company cannot use: OXXO cash (it bans software sellers and does not support subscriptions) and Stripe's SPEI bank transfers (Mexican Stripe accounts only) ([Stripe OXXO](https://docs.stripe.com/payments/oxxo); [Stripe MX bank transfers](https://docs.stripe.com/payments/mx-bank-transfers)).
- **Buyer-side tax friction is real but manageable.**
  - **Deduction.** A Mexican firm can deduct a foreign invoice that shows six items under RMF rule 2.7.1.14, including the buyer's RFC ([Siempre al Día, Jun 2026](https://siemprealdia.co/mexico/fiscal/requisitos-de-la-factura-de-proveedor-extranjero-para-el-sat/)).
  - **IVA.** If the service is outside Mexico's closed list of taxed "digital services" ([LIVA art. 18-B](https://mley.mx/LIVA/articulo/18-B/)), the buyer self-assesses 16% IVA as an import of services ([LIVA art. 24-V](https://mley.mx/LIVA/articulo/24/)). That is usually cash-neutral, but it is extra work for a small firm's accountant.
  - **Withholding.** Mexico withholds 25% on software royalties, cut to 10% by treaties with EU states, the UK, the US and Israel ([PwC, Aug 2026](https://taxsummaries.pwc.com/mexico/corporate/withholding-taxes)). For a standard, non-customised application sold from a treaty country, Mexico treats the payment as business profits, with no withholding ([IDC, 2021](https://idconline.mx/fiscal-contable/2021/10/04/pago-de-regalias-por-software-con-retencion)).
  - **Get a written Mexican tax opinion before launch** (budget MXN 25,000). The question of whether this SaaS falls under art. 18-B is contested ([SDV](https://sdv.com.mx/compendio/criterios-no-vinculativos-sat/criterio-7-iva-nv/)).
- **Open a Mexican company only when triggers hit.** The triggers are CFDI demands, poor card approval, ARR above about MXN 1.5M, or Mexican staff who close deals. In the base case that is about month 16 (Feb 2028).
  - **Real costs:** an S. de R.L./S.A. done in person costs MXN 20,000-40,000 in notary and registry fees and takes 2-4 weeks ([Praxium 2026](https://praxiumconsultores.com/blog/abrir-empresa-en-mexico-precio-2026)). Done remotely through a full-service firm, it costs USD 3,500-4,500 and takes 6-9 weeks, plus 2-6 weeks for the bank ([Start-Ops](https://start-ops.com.mx/incorporation-service-mexico/)).
  - **Running costs:** an accountant costs MXN 3,000-7,000 a month ([Praxium](https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-por-una-sa-de-cv-recien-constituida)). No minimum capital is required.
  - **SAS:** the free online SAS is only for individuals and caps income at MXN 7.68M a year ([LGSM art. 260](https://mley.mx/LGSM/articulo/260/)).
- **Base case (36 months, founder builds with AI agents):**
  - customers: 67 at month 12, 152 at month 24, 228 at month 36 (about 6.5% of the ~3,500 paying-segment firms in [02](02-market-and-competition.md));
  - ARR at month 36: **MXN 4.5M (USD 250k)**;
  - operating break-even at month 15 (Jan 2028), cumulative cash positive from month 19;
  - **peak cash need: MXN 312,000 (USD 17,000)**;
  - year-3 profit before founder pay: MXN 2.2M (USD 121k).
  - **Low case:** 77 customers, ARR MXN 1.24M, no payback within 36 months, peak cash MXN 727,000.
  - **High case:** 453 customers, ARR MXN 10.1M.
- **Exit:** a small business that could sell to Vigon, Trackforce, a Mexican payroll or HR vendor, or MercadoSeguridad. Small SaaS firms sell for about 2.5-4x revenue or 3-6x owner profit ([beancount.io 2026](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)). On the base case that is about MXN 7-18M (USD 0.4-1.0M).
- **Kill criteria:**
  - fewer than 3 pilots from 20 interviews by 30 Nov 2026;
  - fewer than 12 paying firms by 30 Apr 2027;
  - fewer than 30 by 31 Oct 2027;
  - trial-to-paid conversion below 15%;
  - 12-month logo retention below 70%.

## Pricing and packaging

### What buyers already pay (anchors)

| Item | Price | Source |
|---|---|---|
| In-house "gestor gubernamental" for DGSP, state permits and CUIP | MXN 4,153 a week, about MXN 18,000 a month gross (about MXN 216,000 a year before social costs) | [Computrabajo ad, CDMX security firm](https://mx.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-gestor-gubernamental-en-cuauhtemoc-BA3B0D3F75D2544A61373E686DCF3405) |
| Federal DGSP authorisation or yearly revalidation, per modality | about MXN 33,700 (MXN 25,947.60 study + MXN 7,785.15 issue) | [LFD art. 195-X (mley)](https://mley.mx/LFD/articulo/195-x/) (search snippet in 02, not opened) |
| State permit revalidation | MXN 12,740 (Michoacán, 2024), MXN 14,114.10 (Tabasco) a year | [Michoacán fee list](https://ssp.michoacan.gob.mx/wp-content/uploads/2024/05/COSTOS-DE-AUTORIZACI%C3%93N-SEGURIDAD-PRIVADA.-LEY-DE-INGRESOS-DEL-ESTADO-DE-MICHOACAN-2024.pdf); [Papelea, Tabasco](https://papelea.com/mx/estado-de-tabasco/revalidacion-del-permiso-o-autorizacion-para-la-prestacion-del-servicio-portal-tabasco-1) |
| Cloud payroll (CONTPAQi Nóminas Nube) | MXN 3,290 (10 staff), 4,890 (20), 6,490 (50), 8,690 (100) a year, + MXN 60-200 per extra employee | [CONTPAQi 2026 price list](https://www.contpaqi.com/hubfs/Listas%20de%20precios/Lista_de_Precios_Sistemas_CONTPAQi_2026.pdf) |
| MercadoSeguridad.mx lead plans for guard firms | MXN 2,990 / 5,990 / 9,990+ a month | [MercadoSeguridad plans](https://www.mercadoseguridad.mx/planes) (via 02) |
| Guard-operations apps | USD 5-10 per user a month (GuardsPro); USD 5 per user (C-Guard Pro) | [GuardsPro](https://www.guardspro.com/pricing); [ComparaSoftware](https://www.comparasoftware.com/c-guard-pro) |
| DGSP fines in 2026 | 1,000-1,500 UMA = MXN 113,140-169,710 per sanction, plus a public reprimand | [SIDOF 5795553](https://sidof.segob.gob.mx/notas/docFuente/5795553); [SIDOF 5797220](https://sidof.segob.gob.mx/notas/docFuente/5797220); [SIDOF 5799650](https://sidof.segob.gob.mx/notas/docFuente/5799650) |
| What a firm bills per guard | MXN 6,200-15,000 a month | [blog estimate](https://modelosdeplandenegocios.com/blogs/news/cuanto-cuesta-servicio-seguridad-privada) (unverified) |

What this tells us:
- The budget line we replace is the gestor's time, not other software. A tool that saves a third of a gestor's month is worth about MXN 6,000 a month to a federal firm (reasoned).
- Software budgets are small. Payroll for 150 staff costs about MXN 11,700 a year ([CONTPAQi](https://www.contpaqi.com/hubfs/Listas%20de%20precios/Lista_de_Precios_Sistemas_CONTPAQi_2026.pdf), my calculation in 02). A register tool priced far above payroll will be questioned.
- Some firms already pay MXN 2,990+ a month just to be listed and get leads on MercadoSeguridad. A monthly fee of MXN 750-3,500 is not alien to the sector.
- Per-guard pricing (the US model) would make a 150-guard firm pay USD 750-1,500 a month. Avoid it. Price per firm, with staff bands.

### Proposed plans (all + IVA)

| Plan | Who | Monthly | Yearly prepaid (10 months) | About USD a month | What is included |
|---|---|---|---|---|---|
| Diagnóstico (free) | Any firm (lead magnet) | 0 | - | 0 | 15-minute self-check against the DGSP and state headings; list of gaps; up to 10 staff records; no export |
| **Estatal** | Single-state firm, up to 50 active staff | 750 | 7,500 | 42 | Staff, equipment and branch register with dated changes and causes; Excel/CONTPAQi import; one state monthly pack; exam, training, CUIP and permit expiry alerts by email and WhatsApp; inspection pack; unlimited users |
| **Federal** | Federal firm, up to 150 active staff | 1,900 | 19,000 | 106 | Everything in Estatal, plus the DGSP monthly pack, 2 state packs, the revalidation pack and event-notice clocks (3- and 5-day notices) |
| **Federal Plus** | 151-500 active staff | 3,500 | 35,000 | 194 | Federal plus 4 state packs, branch-level views, roles and approvals |
| Extra state pack | Any plan | 400 | 4,000 | 22 | One more state's monthly format and calendar |
| **Despacho** | Gestoría, consultant or payroll accountant | 4,500 for up to 15 firms, then 250 per firm | 45,000 | 250 | Multi-firm dashboard; each client firm gets its own register and packs; own logo on outputs |
| Onboarding | Monthly-plan firms (waived on yearly Federal plans) | 4,900 once | - | 272 | Data import from cardex, payroll and Excel; first monthly pack checked with the firm |
| Founding offer | First 20 paying firms | 40% off year 1 | - | - | In return: a case study and 3 referrals |

Rules:
- **No per-guard prices inside a band.** Above 500 staff, price by quote. Large groups have their own systems ([EULEN](https://www.eulen.com/mx/wp-content/uploads/sites/8/2025/07/02-Grupo-EULEN-Mexico-Seguridad-formal-frente-al-riesgo-de-la-informalidad-en-el-sector.pdf)) and are not the target.
- **Show prices "+ IVA".** Mexican B2B buyers compare net prices because they credit IVA. See [Payments and tax friction](#payments-and-tax-friction) for who charges the IVA.
- **Raise prices yearly by about inflation (5%)** from the second renewal. Lock founding firms for 2 years.
- **Add-ons later:**
  - "Visita lista": a pre-inspection review by a partner gestor at MXN 6,000. The partner keeps 70%.
  - A "client compliance pack" (permits, REPSE, register extract) for corporate buyers.
  - Extra WhatsApp alert volume. Utility messages cost about MXN 0.16 each ([03 notes](03-product-and-tech.md), Meta rate card).

### Price checks
- The Federal plan costs MXN 22,800 a year (MXN 19,000 prepaid). That is about 9-11% of a gestor's yearly pay and about a fifth of one 1,000-UMA fine (MXN 117,310 in 2026; [SIDOF 5799650](https://sidof.segob.gob.mx/notas/docFuente/5799650)).
- The Estatal plan costs MXN 9,000 a year (7,500 prepaid). That is less than one state revalidation fee ([Michoacán](https://ssp.michoacan.gob.mx/wp-content/uploads/2024/05/COSTOS-DE-AUTORIZACI%C3%93N-SEGURIDAD-PRIVADA.-LEY-DE-INGRESOS-DEL-ESTADO-DE-MICHOACAN-2024.pdf)).
- The Despacho plan works out at MXN 300 per firm a month at 15 firms. A gestoría can resell it at MXN 600-900 a month or fold it into its fee (my estimate).
- B1 proposed MXN 3,000 a month for a 150-guard, 2-state firm. 02 cut that to MXN 1,900, and this plan keeps 02's lower level. Pilots must test both (see kill criteria).

## Go-to-market

### Selling seasons and deadlines

| When | What happens | What to do |
|---|---|---|
| Days 1-10 of each month | Federal monthly report to the DGSP (LFSP art. 13). CDMX, Edomex, Baja California and Tamaulipas want altas and bajas in the first 5 business days ([01 law](01-law-and-requirements.md); [LFSP art. 13](https://mley.mx/LFSP/articulo/13/); [BC guide](https://seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf)) | Do not cold-call. Run support and "pack ready" WhatsApp nudges for customers |
| Days 12-28 of each month | The pain of the last filing is fresh | Outbound calls, demos and trial starts. Ask "how many hours did this month's report take?" |
| Each firm's authorisation anniversary | Federal and state permits last one year. Revalidation must be filed at least 30 business days before expiry ([01 law](01-law-and-requirements.md), LFSP art. 19) | Use padrones with expiry dates, such as [Nuevo León](https://www.nl.gob.mx/sites/default/files/repositorio/Dependencias/Secretar%C3%ADa%20de%20Seguridad/Repositorios/20260721_padron_empresas_seguridad_julio.pdf). Contact firms 60-90 days before expiry with the revalidation pack |
| After a DOF sanction notice | DGSP publishes reprimands and fines naming firms and gaps ([SIDOF 5799650](https://sidof.segob.gob.mx/notas/docFuente/5799650)) | Polite outreach within 2 weeks with a free gap check. Never shame the firm in public |
| December | Aguinaldo of at least 15 days' pay is due before 20 December ([LFT art. 87](https://mley.mx/LFT/articulo/87/)). For a guard firm that is a large cash call. 25 Dec and 1 Jan are rest days ([LFT art. 74](https://mley.mx/LFT/articulo/74/)) | No yearly prepay pushes. Offer "start now, first charge in January" |
| January | New budget year; firms renew client contracts (unverified) | Push yearly plans in the second half of January |
| Long weekends | First Monday of February, third Monday of March, 1 May, 16 September, third Monday of November ([LFT art. 74](https://mley.mx/LFT/articulo/74/)). Semana Santa: Easter is 28 Mar 2027 and 16 Apr 2028 (calendar) | Schedule campaigns around them |
| June | Expo Seguridad México, 2-4 June 2026 at Centro Citibanamex ([SIA](https://www.securityindustry.org/siaevents/expo-seguridad-mexico-2026)). 2027 listed for 22-24 June (aggregators only; unverified: [Jufair](https://www.jufair.com/exhibition/expo-securidad-mexico/)) | Meetings and a talk in 2027; a shared booth in 2028 |
| About Feb 2027 | An SSPC Acuerdo of 12 Feb 2026 merged nine DGSP procedures and gave the DGSP a year to adapt its registry systems ([SIDOF 5784083](https://sidof.segob.gob.mx/notas/docFuente/5784083), via 01) | Watch for a DGSP online system. If one appears, add an export to it and market "your records, ready for the new system" |

The model uses these seasonal factors for new sales: Dec 0.5, Jan 0.9, Feb 1.1, Mar 1.0, Apr 0.8, May 1.0, Jun 1.3, Jul 0.8, Aug 1.0, Sep 1.1, Oct 1.2, Nov 1.1 (my estimate).

### Who to sell to first (from 02)
1. **Federal firms with 30-500 staff** (about 1,100-1,200). They owe the DGSP report plus one per state, they face inspections and they already pay a gestor.
2. **Gestorías and payroll accountants** that serve several guard firms. One sale reaches many firms.
3. **Single-state firms with 11+ staff** in the states with heavy monthly reports: Baja California, Tamaulipas, CDMX, Edomex and Nuevo León (about 2,200-2,500 nationally).
4. Not targeted: micro firms, informal firms and large groups.

### Channels in priority order

1. **Direct outreach from public lists (WhatsApp, phone, email).** This is the main engine in year 1.
   - Lists:
     - state padrones: Nuevo León's 446 valid permits with expiry dates, about 120 firms in Tamaulipas, and the lists in Oaxaca and Quintana Roo ([02](02-market-and-competition.md));
     - 2026 DOF sanction notices;
     - the 2018 DGSP open-data list of 1,232 federal firms ([datamx.io](https://www.datamx.io/dataset/direccion-general-de-seguridad-privada/resource/9e1109a2-5762-4a75-8f27-e221a815661d));
     - the MercadoSeguridad directory of DGSP-authorised firms ([MercadoSeguridad](https://www.mercadoseguridad.mx/empresas-autorizadas-dgsp/cdmx)).
   - Why WhatsApp: Meta says 92% of Mexican micro, small and medium firms use WhatsApp Business (Feb 2025; [Mobile Time](https://mobiletime.la/noticias/28/02/2025/whatsapp-business-pymes-mexico/?rd=1); vendor figure).
   - Who works it: the founder (remote) plus a Mexican customer-success and sales contractor from January 2027.
2. **Gestorías, payroll accountants and REPSE consultants.**
   - Offer: the Despacho plan, plus a 20% referral fee on the first year of any firm they bring.
   - Why they matter: they hold the client relationship and the data. CONTPAQi's own channel shares commissions with distributors even on direct sales ([ITSitio](https://www.itsitio.com/eventos/contpaqi-con-nuevo-programa-comercial-y-distribucion-directa/)), so Mexican accountants expect a referral fee.
3. **Associations.**
   - AMESP has 250-290 member firms and campaigns for a single national register ([Zeta Tijuana, Aug 2026](https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/); [AMESP at ANTAD 2025](https://simposioseguridad.antad.net/simposio2025/presentaciones/7-Los-paradigmas-de-la-seguridad-privada-en-Mexico.pdf)). It also runs 18 competency standards and 30 evaluation centres ([search result, El Universal](https://www.eluniversal.com.mx/articulo/metropoli/cdmx/2017/01/7/buscan-homologacion-en-seguridad-privada/), older; unverified current).
   - ASUME groups about 31 associations ([Excélsior](https://www.excelsior.com.mx/nacional/personas-detras-empresa-segura), via 02).
   - Offer each association a member discount (15%) and a free webinar: "Cómo pasar una visita de verificación de la DGSP".
4. **Search content and small paid search.**
   - Spanish pages and free Excel/Word templates for "informe mensual DGSP", "cédula de baja seguridad privada", "reporte mensual altas y bajas Baja California" and "sanciones DGSP 2026". These searches return thin results today ([B1](../reports/mexico-b1.md)).
   - Google Ads on the same exact terms. Mexican search clicks cost about USD 0.40-3.00 ([NovoAds](https://novoads.ai/es/blog/cuanto-cuesta-publicidad-en-google-ads), secondary).
5. **Events.**
   - Expo Seguridad México: 400+ exhibitors and about 17,000 visitors ([Cluster Industrial](https://clusterindustrial.com.mx/expo-seguridad-mexico-alista-su-23a-edicion-con-mas-de-400-expositores-en-centro-banamex/)). A booth costs about USD 8,500 for 9 m² ([Jufair](https://www.jufair.com/exhibition/expo-securidad-mexico/), aggregator; unverified). Visit in 2027 and share a booth with a partner in 2028.
   - ASIS México monthly meetings reach corporate security buyers ([ASIS](https://asis.org.mx/docs/reportes/JUNE-REPORT-2026.pdf)).
6. **Integration and listing partners.**
   - Vigon, the closest product: an integration that imports its staff list.
   - CONTPAQi and NOI import as the default.
   - MercadoSeguridad: a "Registro al día" badge for its listed firms.

### Lead magnets
- **Free Diagnóstico:** 15 questions. It returns a list of register gaps mapped to recent DOF sanctions.
- **Free monthly pack, first month:** the firm uploads its cardex and gets the DGSP or Baja California pack built.
- **"Sanciones DGSP" monthly email:** a plain summary of new DOF notices and what each firm missed.
- **Templates:** Excel cardex and cédula de baja templates that match the state formats.

### Sales motion
1. **Trigger:** a list entry, an expiry date or a DOF notice.
2. **First contact:** a WhatsApp message with a 60-second video of a pack being built, then a call.
3. **Demo (20 minutes):** live import of the firm's own Excel cardex to show what is missing.
4. **Trial (14 days):** the firm gets its next monthly pack built in the tool.
5. **Close:** a card for monthly plans. A yearly plan is paid by card or by international transfer against an invoice.
6. **Onboarding:** a 45-minute call. The CS contractor checks the first real pack.
7. **Expansion:** extra state packs as the firm grows, then referrals and the gestor's other clients.

The buyer is the owner or the director general. The user is the gestor, an administrative assistant or the payroll clerk. Expect a 2-6 week cycle (my estimate).

Main objections and answers:
- **"I have a gestor."** The tool makes the gestor faster and gives the owner an audit trail. Gestores get the Despacho plan.
- **"My data is sensitive."**
  - The data-processing agreement makes us the processor (encargado) under the 2025 data-protection law, with encryption and an audit log.
  - An optional Mexico-region host is possible: AWS opened a Querétaro region in Jan 2025 ([AWS](https://aws.amazon.com/blogs/aws/aws-weekly-roundup-new-aws-mexico-central-region-simultaneous-sign-in-for-multiple-aws-accounts-and-more-january-20-2025), via 03).
- **"A foreign invoice? My accountant wants a CFDI."** Give the buyer's accountant the one-page FAQ in [Payments](#draft-buyer-faq-for-the-accountant-spanish-and-english). Repeated objections of this kind are a trigger to open the Mexican company.
- **"The DGSP will build its own portal."** The firm still needs its own records and an audit trail, and we will export to any portal.

## 90-day launch plan

Day 1 is Monday 12 Oct 2026. The build follows [03](03-product-and-tech.md): an MVP in about 3 weeks and a sellable product in 6-8 weeks.

| Dates | Product (founder + AI agents) | Market and sales | Legal, money, admin |
|---|---|---|---|
| 12-18 Oct | Agents start on the data model, Excel import and the federal pack | Spanish landing page and waitlist. Build a 600-firm list from NL, Tamaulipas and Oaxaca padrones, 2026 DOF notices and the 2018 DGSP list. Book 20 interviews by WhatsApp and phone | Engage a Mexican private-security lawyer to review formats, T&Cs, the privacy notice and the DPA (budget MXN 60,000). Engage a tax adviser for the IVA and withholding opinion (MXN 25,000). File a PNT transparency request to the SSPC for the firm count and the filing channel |
| 19-25 Oct | Baja California 8-file pack; expiry alerts | 10 interviews. Collect real DGSP and state formats (BC, CDMX, Edomex, NL, Tamaulipas). Test prices: Estatal 750 and Federal 1,900 against 3,000 | Stripe account of the EU company: MXN prices, Billing, Invoicing, buyer RFC field. Draft Spanish T&Cs |
| 26 Oct-1 Nov | **MVP** (register, import, federal and BC packs, inspection pack) | Sign 3-5 design-partner pilots: free to 31 Dec, then the founding price | Mexican trademark search; file at IMPI (budget MXN 10,000 with an agent; unverified fee) |
| 2-15 Nov | Fixes from pilots; WhatsApp alerts | **Trip 1** to CDMX and Monterrey: meet pilots, AMESP, 2-3 gestorías and MercadoSeguridad. Reach 30 interviews | Lawyer's review of the rule library starts |
| 16-29 Nov | CDMX and Tamaulipas packs | Recruit a part-time Mexican CS/sales contractor to start 4 Jan (MXN 15,000 a month) | **Security test** booked (USD 5,000; [Blaze](https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/) puts small tests at USD 5,000-15,000) |
| 30 Nov-13 Dec | Fix test findings. **Sellable release** | Founding offer: 40% off year 1, first charge in January. Book an AMESP webinar for February | Tax opinion received; set the invoicing format (rule 2.7.1.14 fields) |
| 14-31 Dec | Edomex and Nuevo León packs | Slow season: write 6 search pages and templates; set up Google Ads | Cyber and E&O insurance quote |
| 4-10 Jan 2027 | Pilot data migrated to paid accounts | Pilots convert (target 6). The CS contractor starts | First Stripe charges |

**Targets at day 90 (10 Jan 2027):** 30+ interviews, 5 pilots, at least 6 paying firms, 3 gestorías signed as partners, a 1,000-firm list, and a measured "hours saved per monthly report" for each pilot.

## 12-month marketing plan and budget

Months 1-12 run from Nov 2026 to Oct 2027. All amounts are in MXN and are my estimates unless a source is given.

| Quarter | Main moves | Marketing spend | Travel |
|---|---|---|---|
| Q1 Nov 26-Jan 27 | Pilots, interviews, founding offer, 6 search pages, Excel templates, list building | 30,000 (content editor, design, demo video, CRM) | 36,000 (trip 1) |
| Q2 Feb-Apr 27 | AMESP webinar; two state-association talks; Google Ads on (MXN 5,000 a month); monthly "Sanciones DGSP" email; Despacho partner push | 50,000 | 0 |
| Q3 May-Jul 27 | Expo Seguridad México (visitor passes, meetings, a talk if accepted); case studies; Monterrey and Tijuana meetups with gestorías | 55,000 | 36,000 (trip 2, Expo) |
| Q4 Aug-Oct 27 | Revalidation campaign from padrón expiry dates; referral push (1 month free per referral); first price test for year 2 | 45,000 | 36,000 (trip 3) |
| **Year 1** | | **180,000 (USD 10,000)** | **108,000** |

Breakdown of the MXN 180,000:
- Google Ads: about 45,000 (MXN 5,000 a month from February).
- Spanish content editor and templates: about 36,000 (MXN 3,000 a month; the founder drafts with AI).
- Association sponsorships and webinars: about 40,000.
- Expo Seguridad visit and meetings: about 15,000.
- CRM, WhatsApp Business API and LinkedIn tools: about 24,000 (unverified prices).
- Video and print: about 10,000.
- Contingency: about 10,000.

Not in this budget:
- partner referral fees (20% of first-year revenue on partner-sourced firms, about MXN 47,000 in year 1 in the model);
- the CS contractor (MXN 201,000 in year 1);
- the founder's time.

Years 2 and 3: MXN 220,000 and 240,000. That adds a shared booth at Expo Seguridad 2028 (about MXN 60,000-80,000 if split with a partner; my estimate) and more paid search.

KPIs to track every month:
- leads;
- demos;
- trial starts;
- trial-to-paid rate (target 35%, kill below 15%);
- CAC (target below MXN 8,000);
- logo churn (target below 1.5% a month);
- share of sales from partners (target 35%);
- hours saved per monthly report.

## Payments and tax friction

### Can Mexican cards pay a foreign company online?
- **Yes, but with more declines.**
  - Approval: a payments vendor says local acquiring in Mexico approves "80%+" against "often 50-60%" cross-border, and that local routing approves 20-30 points more ([Nuvei](https://www.nuvei.com/posts/evaluating-payment-strategies-for-the-mexican-market-direct-acquiring-versus-cross-border-models); vendor claim). EBANX reports 74% for one client ([EBANX](https://www.ebanx.com/en/opportunities-for-expansion-in-mexico-infographic); vendor claim).
  - Why declines happen: CONDUSEF lists wrong data, expired cards, low funds and security blocks on unusual or foreign transactions. The issuer can approve the charge if the client calls ([IDC, citing CONDUSEF](https://idconline.mx/finanzas/2023/01/23/cuatro-razones-por-las-que-no-se-autorizo-tu-compra-por-internet)).
- **Buyers may pay a foreign-purchase fee of 1-3%,** depending on the issuer ([Mercado Pago](https://www.mercadopago.com.mx/blog/evitar-comisiones-tarjeta-fuera-mexico)). Whether issuers charge it on a peso-priced charge from a foreign acquirer is (unverified).
- **What to do:**
  - Use 3-D Secure.
  - Show a "habilita compras internacionales en línea" note at checkout.
  - Retry failed renewals with Stripe's smart retries.
  - Offer a transfer fallback for yearly plans.

### Stripe from the EU company (recommended start)
- **Fees:**

  | Item | Fee |
  |---|---|
  | International cards | 3.15% + EUR 0.25 |
  | Currency conversion, when needed | + 2% |
  | Stripe Billing | 0.7% |
  | Stripe Invoicing | 0.4% |
  | Stripe Tax | 0.5% |
  | Dispute | EUR 20 |

  Source: [Stripe Ireland pricing](https://stripe.com/ie/pricing).
- **Charge in MXN.** Prices in pesos avoid the buyer's bank conversion. Stripe then converts to EUR at 2%. Pricing in USD would move the conversion cost to the buyer and confuse a peso budget.
- **OXXO is not usable.**
  - It is open to US, Canadian, Mexican and Singapore accounts, and only in "private preview" for EEA and UK accounts.
  - It caps payments at MXN 10,000.
  - It does not support Billing, Invoicing or recurring payments.
  - It lists the "Software" merchant category as prohibited.
  - Source: [Stripe OXXO docs](https://docs.stripe.com/payments/oxxo).
- **Stripe's SPEI bank transfers are only for Mexican Stripe accounts** ([Stripe MX bank transfers](https://docs.stripe.com/payments/mx-bank-transfers)).
- **US company:** Stripe US is similar but adds cross-border and conversion fees (US pricing not checked in this pass; the Bosnia study found 2.9% + 30c + 1.5% + 1%; unverified for 2026).
- **UK company:** Stripe UK is similar.
- **Israeli company:** use an EU, UK or US entity for Stripe (unverified whether Stripe onboards Israeli entities directly).

### Merchant of record options
| Option | Fee | Mexico | Notes |
|---|---|---|---|
| **Paddle** | 5% + 50c per checkout transaction ([Paddle pricing](https://www.paddle.com/pricing)) | Sells in "over 200 countries"; Paddle calculates and remits taxes as MoR ([Paddle docs](https://developer.paddle.com/concepts/sell/supported-countries-locales)). The Mexico row was not visible (unverified). Whether Paddle adds 16% IVA on Mexican B2B sales and prints the buyer's RFC on its invoice is (unverified) | Best fallback **if** the tax opinion says the SaaS is a 18-B digital service. Paddle then carries the IVA registration. The buyer pays Paddle, a UK company (unverified), so the UK treaty applies |
| **Lemon Squeezy** | 5% + 50c; a 1.5% surcharge on international payments is reported ([Fungies](https://fungies.io/lemon-squeezy-stripe-acquisition-saas-founders-2026/); unverified) | Not checked | Owned by Stripe. Merchants are being steered to Stripe Managed Payments (public preview Feb 2026; same source). Not recommended for a new account |
| **Stripe Managed Payments** | About 3.5% on top of normal processing ([Dodo Payments](https://dodopayments.com/blogs/stripe-managed-payments-fees-explained), competitor blog; unverified) | Customer countries not published in what I found (unverified) | Watch it. It would keep Stripe Billing and add MoR tax handling |

### Bank transfers
- **SPEI is the domestic norm** for B2B payments in Mexico (unverified as a statistic). A foreign company cannot get it through Stripe.
- **Local MXN collection accounts:** one vendor says Wise and Airwallex do not give foreign businesses a Mexican CLABE for incoming SPEI, and offers its own ([XTransfer](https://www.xtransfer.com/blog/mexico-peso-payment-options); vendor claim, unverified).
- **International transfer (SWIFT) from the buyer:**
  - BBVA México's online-banking contract shows USD 20 + IVA per SWIFT transfer ([BBVA NetCash terms](https://www.bbva.mx/content/dam/public-web/mexico/documents/empresas/banca-electronica-y-canales/netcash/Caratula.pdf)). BBVA cut the fee to USD 10 for individuals in April 2025 ([Expansión](https://expansion.mx/finanzas-personales/2025/09/22/comisiones-que-bbva-redujo-para-miles-de-clientes-mexico)).
  - Intermediary banks can deduct more (same BBVA source).
  - On a MXN 19,000 yearly plan the buyer pays about MXN 200-420 in fees plus the bank's exchange spread (my estimate).
- **Use:** transfers only for yearly Federal Plus and Despacho plans, and only when a card fails.

### Fee comparison (seller side)

| Route | Yearly Federal, MXN 19,000 | Monthly Estatal, MXN 750 | Other effects |
|---|---|---|---|
| Stripe EU, card, MXN price, Billing (3.15% + 2% + 0.7% + EUR 0.25) | about MXN 1,117 (5.9%) | about MXN 49 (6.5%) | Cross-border approval risk; no IVA charged by us (see below) |
| Paddle (5% + 50c) | about MXN 959 (5.0%) | about MXN 47 (6.2%) | Paddle may add 16% IVA to the buyer's price (unverified); the invoice comes from Paddle |
| Lemon Squeezy (5% + 50c + reported 1.5%) | about MXN 1,244 (6.5%) | about MXN 58 (7.7%) | Product in transition |
| Stripe Managed Payments (Stripe EU + 3.5%) | about MXN 1,782 (9.4%) | about MXN 75 (10.1%) | Availability unverified |
| SWIFT transfer to the EU company | about 1-2% (spreads and fees, both sides; my estimate) | not practical | Manual reconciliation |
| **Later: Stripe Mexico via a Mexican company** (3.6% + MXN 3, + 0.7% Billing, + 16% IVA on fees) | about MXN 951 (5.0%) | about MXN 41 (5.5%) | Local approval rates, CFDI, SPEI possible ([Stripe MX pricing](https://stripe.com/mx/pricing)) |

Local Stripe is not much cheaper per transaction. The gains from a Mexican company are approval rates, CFDI and SPEI, not fees.

### Buyer-side tax friction

**1. Can the buyer deduct a foreign invoice? Yes, if it has six items.** RMF rule 2.7.1.14 (2026 numbering) accepts a foreign supplier's invoice that shows:
1. the supplier's name and address;
2. its foreign tax ID;
3. the place and date of issue;
4. the buyer's RFC;
5. the buyer's name;
6. a description, quantity, unit price and total.

Source: [Siempre al Día, 17 Jun 2026](https://siemprealdia.co/mexico/fiscal/requisitos-de-la-factura-de-proveedor-extranjero-para-el-sat/). Stripe must collect the buyer's RFC and legal name at checkout and print them on the invoice. The usual LISR art. 27 rules also apply: the payment must be strictly necessary, actually paid, and any due withholding made ([Veritas](https://www.veritas.org.mx/Impuestos/Internacional/requisitos-para-la-deduccion-de-pagos-a-residentes-en-el-extranjero)).

**2. IVA: who charges it?**
- **Mexico taxes only a closed list of "digital services" from abroad** ([LIVA art. 18-B](https://mley.mx/LIVA/articulo/18-B/)):
  - downloading or accessing content (images, films, text, information, video, music, games, news, statistics);
  - intermediation between third parties;
  - online clubs and dating;
  - distance teaching.
- **SaaS is not named.** An ITAM paper argues the list is closed and aimed mainly at household consumption ([ITAM](https://contaduria.itam.mx/sites/contaduria.itam.mx/files/contaduriaitammx/noticias/aadjuntos/2023/08/publicacion_andrea_brito.pdf)). A tax-compendium site says a SAT non-binding criterion treats SaaS as a digital service ([SDV, criterio 7/IVA/NV](https://sdv.com.mx/compendio/criterios-no-vinculativos-sat/criterio-7-iva-nv/); secondary, not checked against the SAT annex). **This is the main open tax question.**
- **If the SaaS is outside art. 18-B** (my reading for a B2B compliance tool; unverified):
  - The buyer has an "import of services": a service from a non-resident used in Mexico ([LIVA art. 24-V](https://mley.mx/LIVA/articulo/24/)).
  - The buyer self-assesses 16% IVA and credits it, so it is usually cash-neutral. Guard firms charge IVA on their own services, so they can credit it (reasoned; the exact filing mechanics are unverified).
  - Our invoice shows no Mexican IVA.
- **If the SaaS is inside art. 18-B,** the foreign seller must:
  - register with the SAT, with no threshold;
  - appoint a legal representative and give a Mexican address;
  - charge 16% IVA;
  - file monthly by about the 17th;
  - issue receipts with its RFC. No CFDI is needed.
  - Under the 2026 reform it must also give the SAT permanent online access to its transaction records ([Fonoa](https://www.fonoa.com/resources/country-tax-guides/mexico/tax-on-digital-services)).
  - Non-registration risks include blocking ([SDV](https://sdv.com.mx/compendio/criterios-no-vinculativos-sat/criterio-7-iva-nv/)).
  - In that case, sell through **Paddle** (which handles the registration) or open the Mexican company sooner.

**3. Withholding tax on payments abroad.**
- **Rates:** Mexico withholds 25% on royalties, which include copyright on software, and 25% on technical assistance ([PwC, reviewed 6 Aug 2026](https://taxsummaries.pwc.com/mexico/corporate/withholding-taxes)).
- **Treaties** cap royalties at 10% for Austria, Belgium, the Czech Republic, Estonia, France, Germany, Ireland, Israel, Latvia, Lithuania, Malta, the Netherlands, Poland, Spain, the UK and the US (same source).
- **Gaps:** PwC lists no treaty with Slovenia. Croatia, Cyprus and Bosnia are not in its table. A seller there faces the 25% domestic rate.
- **Standard software sold from a treaty country:** Mexico accepted the OECD view that payments for standardised software, with nothing beyond what is sold to the public, are not royalties. RMF rule 2.1.37 covers this. Customised or adapted software is a royalty ([IDC, 4 Oct 2021](https://idconline.mx/fiscal-contable/2021/10/04/pago-de-regalias-por-software-con-retencion); [ITR/Baker McKenzie, 2019](https://www.internationaltaxreview.com/article/b1h0xl84fv9srr/mexico-grapples-with-tech-sector-taxes)).
- **What to do:**
  - Sell one standard subscription to everyone.
  - Do no custom development under the subscription. Price state packs as standard modules.
  - Give buyers a yearly certificate of tax residence (common treaty practice; the exact Mexican document rule is unverified).
- **Without a treaty,** software-use payments carry 25% ([IDC](https://idconline.mx/fiscal-contable/2021/10/04/pago-de-regalias-por-software-con-retencion)). That would kill the price, so a non-treaty seller should not sell direct.

**4. CFDI habits.** Mexican firms are used to receiving a CFDI for every expense. A foreign invoice is legal (point 1), but many small-firm accountants will push back (my estimate). This is the most likely reason to open a Mexican company early.

### Seller-side summary
- **No Mexican income tax** without a permanent establishment. Keep contract signing abroad. A Mexican contractor should support and generate leads, not conclude contracts. LISR art. 3 protects only "independent agents" ([LISR art. 3](https://mley.mx/LISR/articulo/3/)); the dependent-agent test is in the treaties and LISR art. 2 (unverified detail).
- **Cloud hosting in a Mexican region of a third-party cloud** is generally not a PE (OECD practice; unverified for Mexico).
- **IVA registration** only if the tax opinion puts the SaaS in art. 18-B (see above).

### Recommendation and setup checklist
1. **Phase 1 (Nov 2026 to the trigger):** use the Stripe account of the EU company.
   - Prices in MXN, "+ IVA" in marketing.
   - Cards for monthly plans. Stripe Invoicing for yearly plans (card or international transfer).
   - Invoice fields: buyer RFC, legal name and address; our foreign tax ID; description "Suscripción estándar al software [name], periodo ...".
   - A residence certificate download page.
   - Retry and dunning in Spanish.
2. **Before the first charge:** get the written Mexican tax opinion on art. 18-B and on withholding (MXN 25,000).
   - If SaaS is outside 18-B, keep Phase 1.
   - If it is inside, switch checkout to Paddle (after confirming Paddle supports Mexican B2B invoices with RFC) or open the Mexican company early.
3. **Phase 2 (trigger):** a Mexican company with Stripe MX, SPEI, CFDI through a PAC, and IVA at 16%. See [Company setup](#company-setup-needed-or-not-costs).

### Draft buyer FAQ for the accountant (Spanish and English)

**Español.** "[Producto] es un servicio estándar de software prestado desde [país] por [empresa], sin establecimiento permanente en México. Emitimos una factura que cumple los requisitos de la regla 2.7.1.14 de la RMF (incluye su RFC y razón social), por lo que el gasto es deducible. No trasladamos IVA mexicano: su contador debe revisar el tratamiento como importación de servicios (art. 24, fr. V, LIVA). Somos residentes de [país], que tiene tratado para evitar la doble tributación con México; puede descargar nuestro certificado de residencia fiscal aquí. El servicio es una aplicación estandarizada, igual para todos los clientes, sin desarrollo a la medida. Consulte a su contador para su caso."

**English.** "[Product] is a standard software service supplied from [country] by [company], with no permanent establishment in Mexico. Our invoice meets RMF rule 2.7.1.14 (it shows your RFC and legal name), so the expense is deductible. We do not charge Mexican IVA. Your accountant should review it as an import of services (LIVA art. 24-V). We are tax-resident in [country], which has a tax treaty with Mexico; download our residence certificate here. The service is a standardised application, the same for every customer, with no custom development. Ask your accountant about your own case."

(Have the Mexican tax adviser approve this text before use.)

## Company setup (needed or not, costs)

### Is a Mexican company needed?
**Not at launch.** The foreign company can sell, invoice in a deductible form and collect by card. Open a Mexican company when two or more of these triggers hit:
1. at least 25% of qualified prospects refuse to buy without a CFDI;
2. card approvals stay below 75%, or more than 30% of revenue comes by international transfer;
3. ARR passes about MXN 1.5M (USD 80k);
4. a Mexican salesperson must negotiate and sign deals (PE risk);
5. a reseller or a large gestoría demands CFDI;
6. the tax opinion says art. 18-B registration is needed and Paddle does not work.

In the base case this happens around month 16 (Feb 2028). In the high case it is about month 10 (Aug 2027). In the low case it may never happen.

### Options and real costs

| Option | One-off cost | Time | Ongoing cost | Notes |
|---|---|---|---|---|
| **A. No Mexican entity** (sell from the EU company) | Tax opinion about MXN 25,000 (my estimate) | - | 0 in Mexico | Recommended start |
| **B. Foreign company registers for IVA on digital services** (only if art. 18-B applies) | Adviser fees (unverified) | weeks | A legal representative and monthly returns; budget MXN 3,000-7,000 a month (my estimate from Praxium's accountant range) | No threshold; Mexican address; SAT online access under the 2026 reform ([Fonoa](https://www.fonoa.com/resources/country-tax-guides/mexico/tax-on-digital-services)). Prefer Paddle instead |
| **C. SAS (Sociedad por Acciones Simplificada)**, online | Registration free ([Praxium](https://praxiumconsultores.com/blog/abrir-empresa-en-mexico-precio-2026)) | days, after RFC and e.firma | Accountant MXN 3,000-4,000 a month | **Individuals only**, so the EU company cannot own it. Income capped at MXN 7,678,849.94 a year, updated each January. If the cap is passed, it must convert, or shareholders become personally liable ([LGSM art. 260](https://mley.mx/LGSM/articulo/260/)). From 2026 the SAT RFC and e.firma step is in person ([AMCPDF](https://amcpdf.org.mx/consideraciones-2026-para-las-sociedades-por-acciones-simplificadas-sas/)). A foreign individual needs a Mexican RFC and e.firma (residence requirements unverified). Workable as a small sales company held by the founder personally, but the high case passes the cap |
| **D. S. de R.L. de C.V. or S.A. de C.V., founder in person** | Notary MXN 15,000-25,000 + Registro Público de Comercio MXN 2,500-5,000; name permit, RFC and e.firma free. **Total MXN 20,000-40,000** ([Praxium 2026](https://praxiumconsultores.com/blog/abrir-empresa-en-mexico-precio-2026)). Add apostille and translation of the EU company's papers and the RNIE foreign-investment filing (unverified cost), plus one trip (about MXN 36,000) | 2-4 weeks with complete papers (same source), plus the bank | Accountant MXN 3,000-7,000 a month; MXN 3,000-4,000 for a new firm with no staff; more with foreign shareholders or dollar operations ([Praxium](https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-por-una-sa-de-cv-recien-constituida)) | **No legal minimum capital** (same source). Two shareholders are usual: the EU company and the founder (a secondary source says the law needs two; unverified) |
| **E. Same, done remotely through a full-service firm** | **USD 3,500-4,500** (MXN 63,000-81,000), including deed, registry, RFC, e.firma, RNIE, legal representative, powers of attorney, bank account opening, PAC set-up and a tax address ([Start-Ops](https://start-ops.com.mx/incorporation-service-mexico/)) | 6-9 weeks; the bank adds 2-6 weeks and is opened in person with the representative (same source) | USD 1,000-1,500 a month for full compliance (same source), or a local accountant at MXN 3,000-7,000 | Costly. A hybrid works better: a lawyer drafts the deed under a power of attorney, and the founder flies in once for the bank and e.firma |

**Running a Mexican company:**
- **Taxes:** federal corporate income tax is 30% ([PwC](https://taxsummaries.pwc.com/mexico/corporate/taxes-on-corporate-income)). IVA of 16% is charged on sales with a CFDI.
- **With employees:** IMSS, Infonavit and state payroll tax (rates unverified), and 10% employee profit sharing (PTU; unverified rate).
- **Yearly and standing filings:** the RNIE economic report and the electronic-accounting filings (unverified details).
- **Intercompany:** the Mexican company must pay the EU parent for the software (licence or reseller margin). That payment raises the withholding and transfer-pricing questions above, so get advice before the move (unverified details).

**Model assumption (base case):** MXN 70,000 one-off at month 16 (option E-hybrid), then MXN 8,000 a month for an accountant, a tax address and bank fees (my estimate).

## Contracts and liability

**Contract set (all in Spanish; the Spanish text prevails):**
1. Online **Términos y Condiciones**, accepted by click, with an order form or quote for yearly and Despacho plans.
2. A **contrato de encargo de tratamiento** (DPA). The customer is the controller (responsable). We are the processor (encargado).
3. An **aviso de privacidad** for our own leads and users.
4. A short **SLA**: 99.5% monthly uptime, with a support response within one business day during the filing windows (days 1-10).

**Data protection (new LFPDPPP, DOF 20 Mar 2025, reformed 14 Nov 2025; [LFPDPPP PDF](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf), via 03):**
- Health, toxicology and psychological results are sensitive data. They need the employee's express written consent (art. 8) unless an exception applies (art. 9).
- The customer collects consent. We give a template.
- The law requires security measures (art. 18) and breach notices to the people affected (art. 19).
- Fines run from 100 to 320,000 UMA and double for sensitive data (art. 59). Prison terms are possible (arts. 62-64).
- The 2011 Reglamento sets minimum conditions for cloud services (art. 52) ([mley](https://mley.mx/Reg_LFPDPPP/articulo/52/)). Whether the 2011 Reglamento still applies under the 2025 law is (unverified).
- Offer a Mexico-region hosting option to answer trust concerns ([AWS Querétaro](https://aws.amazon.com/blogs/aws/aws-weekly-roundup-new-aws-mexico-central-region-simultaneous-sign-in-for-multiple-aws-accounts-and-more-january-20-2025)).

**Key clauses:**
- **The firm stays responsible** for what it files with the DGSP and the states. The tool prepares documents, and the firm's legal representative checks and signs them. We do not give legal advice.
- **Format promise.** We update a format within 10 business days of an official change we are told of or detect. If a pack is rejected for a format error we caused, we fix it within 2 business days and credit one month.
- **Liability cap:** fees paid in the last 12 months. Indirect loss is excluded, and so are fines, except where they come from our proven failure to meet the format promise, capped at the same amount.
- **Data:** data export at any time, and deletion 60 days after the end of the contract. Sub-processors are listed. No use of customer data to train shared models.
- **Law and courts:** Mexican federal commercial law and CDMX courts. A foreign forum would scare small buyers (my judgment).
- **E-contracting:** keep clickwrap logs, timestamps and IP addresses. Mexico's Código de Comercio accepts data messages as written form ([Código de Comercio PDF](https://www.diputados.gob.mx/LeyesBiblio/pdf/CCom.pdf); exact articles unverified).
- **Consumer law:** micro-firms may count as consumers in some cases under the LFPC (unverified). So use plain cancellation, notice before auto-renewal, and no hidden fees.

**Insurance:**
- Cyber plus errors-and-omissions cover. A European SME reference puts cyber premiums from EUR 1,000-3,000 a year ([MyBusinessFuture](https://mybusinessfuture.com/es/seguros-de-ciberseguridad-para-pymes/)).
- Mexican brokers sell SME cyber cover ([Howden Mexico](https://www.howdengroup.com/mx-es/seguro-cibernetico/cibernetico-plus)); price not published.
- The model uses MXN 40,000 a year (unverified).

**Other:**
- Register the brand at IMPI (the model includes MXN 10,000 with an agent; fee unverified).
- Keep the founder's EU company as owner of the code and the brand.

## Financial model

The model runs by month. Month 1 is Nov 2026 and month 36 is Oct 2029. It counts cash: yearly plans pay 10 months up front. The script is in the session scratchpad, not in the repo. Taxes on profit are not modelled.

### Assumptions

| Assumption | Low | Base | High | Basis |
|---|---|---|---|---|
| Paying-segment pool | about 3,500 firms + about 150 gestorías | same | same | [02](02-market-and-competition.md) (3,300-3,700 firms; gestoría count unverified) |
| Pilots converting in Jan 2027 | 3 | 6 | 8 | 90-day plan |
| New paid accounts a month (before seasonality), year 1 / 2 / 3 | 2.5 / 3.2 / 3.4 | 5-7.5 / 8.5 / 9 | 8-14 / 16 / 17 | My estimate |
| New accounts, year 1 / 2 / 3 (output) | 29 / 38 / 40 | 70 / 100 / 106 | 124 / 189 / 201 | Output |
| Monthly logo churn | 2.5% (26% a year) | 1.5% (17% a year) | 1.0% (11% a year) | My estimate; compliance tools are sticky, but small firms close |
| Effective revenue per account a month (net of discounts), year 1 / 2 / 3 | MXN 1,100 / 1,250 / 1,350 | 1,350 / 1,550 / 1,650 | 1,500 / 1,700 / 1,850 | List mix of about 45% Federal (average about 2,200 with extra states), 47% Estatal (750), 8% Despacho (4,500) gives about 1,700; less founding and yearly discounts |
| Share on yearly prepaid plans | 30% | 40% | 45% | My estimate |
| Onboarding fee | MXN 4,900 from 30% of new monthly-plan firms | same | same | Price list |
| Seasonality of new sales | Dec 0.5 ... Jun 1.3, Oct 1.2 (see Go-to-market) | same | same | Mexican calendar |
| Build | Founder with Claude Code and parallel agents; no developer payroll | same | same | Owner's brief |
| AI tools | MXN 9,000 a month in months 1-3, then MXN 4,500 (about USD 500, then 250) | same | same | Claude Max USD 100-200 a month plus API use ([03 notes](03-product-and-tech.md)) |
| Hosting and SaaS tools | MXN 3,500 / 5,000 / 7,000 a month in years 1 / 2 / 3 | same | same | Render, Postgres, R2, Resend, WhatsApp ([03 notes](03-product-and-tech.md)) |
| Legal content, tax opinion, trademark | MXN 30,000 (month 1) + 65,000 (month 2), then a retainer of 4,000 a month (year 1) and 8,000 a month (years 2-3, more states) | same | same | My estimate (unverified fees) |
| Security test | USD 5,000 (MXN 90,000) in month 2, repeated in months 14 and 26 | same | same | Low end of USD 5,000-15,000 ([Blaze](https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/)) |
| Cyber and E&O insurance | MXN 40,000 a year | same | same | Unverified |
| Mexican CS and sales contractor | MXN 15,000 a month from month 3 (part-time only) | 15,000 from month 3; 32,000 full-time from month 10; second person (22,000) from month 22 | 20,000 from month 3; 32,000 from month 5; plus 24,000 from month 12 and 24,000 from month 20 | PayScale: customer success manager in CDMX averages MXN 370,300 a year ([PayScale](https://www.payscale.com/research/MX/Job=Customer_Success_Manager/Salary/a0e4c370/Mexico-City)). As a contractor; an employer of record would add about USD 599 a month ([Boundless](https://boundlesshq.com/blog/best-eor-services-mexico/)) |
| Marketing, year 1 / 2 / 3 | MXN 120,000 / 150,000 / 150,000 | 180,000 / 220,000 / 240,000 | 260,000 / 350,000 / 400,000 | Plan above |
| Travel (MXN 36,000 a trip) | 4 trips in 3 years | 6 | 7 | My estimate |
| Partner referral fees | 20% of first-year cash on 35% of accounts | same | same | Plan |
| Payment fees | 5.3% of cash (Stripe EU, some transfers); 3.2% after a Mexican company | same | same | Fee table above |
| Mexican company | never | month 16: MXN 70,000 + 8,000 a month | month 10 | Company section |
| Own admin share (foreign company bookkeeping) | MXN 2,500 a month | same | same | My estimate |
| Founder pay | None in the main tables. Variant: MXN 40,000 a month in year 2 and MXN 70,000 a month in year 3 | | | |

### Base case by quarter (no founder pay, MXN)

| Quarter | New | Churned | Active (end) | Cash in | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|---|
| Q1 Nov 26-Jan 27 | 11 | 0 | 11 | 68,310 | 178,200 | 378,402 | -310,092 | -310,092 |
| Q2 Feb-Apr 27 | 16 | 0 | 26 | 151,088 | 427,027 | 151,108 | -20 | -310,112 |
| Q3 May-Jul 27 | 20 | 1 | 45 | 217,061 | 731,157 | 194,985 | 22,076 | -288,036 |
| Q4 Aug-Oct 27 | 24 | 1 | 67 | 289,656 | 1,092,880 | 254,664 | 34,992 | -253,044 |
| Q5 Nov 27-Jan 28 | 21 | 3 | 86 | 425,814 | 1,600,158 | 387,484 | 38,330 | -214,714 |
| Q6 Feb-Apr 28 | 25 | 4 | 107 | 530,492 | 1,993,230 | 348,394 | 182,098 | -32,616 |
| Q7 May-Jul 28 | 26 | 4 | 129 | 620,405 | 2,402,868 | 319,265 | 301,140 | 268,524 |
| Q8 Aug-Oct 28 | 28 | 5 | 152 | 711,108 | 2,828,869 | 353,784 | 357,324 | 625,848 |
| Q9 Nov 28-Jan 29 | 22 | 6 | 168 | 807,043 | 3,334,871 | 533,627 | 273,415 | 899,263 |
| Q10 Feb-Apr 29 | 26 | 7 | 187 | 927,630 | 3,710,904 | 373,385 | 554,245 | 1,453,509 |
| Q11 May-Jul 29 | 28 | 8 | 207 | 1,023,937 | 4,106,255 | 413,602 | 610,336 | 2,063,844 |
| Q12 Aug-Oct 29 | 30 | 9 | 228 | 1,121,309 | 4,520,676 | 381,878 | 739,432 | 2,803,276 |

Base-case active accounts by month:
- Year 1: 0, 0, 11, 16, 22, 26, 32, 40, 45, 52, 59, 67.
- Year 2: 76, 80, 86, 94, 102, 107, 114, 124, 129, 136, 144, 152.
- Year 3: 160, 163, 168, 176, 183, 187, 194, 203, 207, 214, 221, 228.

Base-case costs by year (MXN):

| Cost line | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| AI tools and hosting | 109,500 | 114,000 | 138,000 |
| Legal, tax, security test, insurance | 265,000 | 226,000 | 226,000 |
| Mexican CS and sales staff | 201,000 | 450,000 | 648,000 |
| Marketing | 180,000 | 220,000 | 240,000 |
| Travel | 108,000 | 36,000 | 72,000 |
| Partner referral fees | 47,176 | 108,774 | 128,334 |
| Payment fees | 38,484 | 82,152 | 124,157 |
| Mexican company | 0 | 142,000 | 96,000 |
| Admin | 30,000 | 30,000 | 30,000 |
| **Total** | **979,160** | **1,408,926** | **1,702,491** |

### Low case by quarter (no founder pay, MXN)

| Quarter | Active (end) | Cash in | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|
| Q1 | 6 | 22,385 | 72,600 | 357,753 | -335,368 | -335,368 |
| Q2 | 12 | 55,002 | 162,751 | 124,743 | -69,741 | -405,109 |
| Q3 | 19 | 72,349 | 254,949 | 162,841 | -90,492 | -495,601 |
| Q4 | 26 | 89,144 | 349,363 | 128,870 | -39,726 | -535,327 |
| Q5 | 33 | 131,366 | 488,700 | 286,768 | -155,401 | -690,728 |
| Q6 | 40 | 159,592 | 592,565 | 158,670 | 922 | -689,806 |
| Q7 | 47 | 181,669 | 700,186 | 196,352 | -14,683 | -704,489 |
| Q8 | 54 | 203,269 | 811,712 | 162,007 | 41,262 | -663,227 |
| Q9 | 59 | 235,871 | 953,263 | 300,030 | -64,159 | -727,386 |
| Q10 | 64 | 265,358 | 1,044,448 | 172,057 | 93,300 | -634,086 |
| Q11 | 70 | 287,504 | 1,140,739 | 209,537 | 77,966 | -556,120 |
| Q12 | 77 | 309,436 | 1,242,200 | 175,018 | 134,418 | -421,702 |

### High case by quarter (no founder pay, MXN)

| Quarter | Active (end) | Cash in | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|
| Q1 | 16 | 121,200 | 288,000 | 409,908 | -288,708 | -288,708 |
| Q2 | 43 | 296,971 | 782,555 | 227,448 | 69,523 | -219,185 |
| Q3 | 79 | 438,723 | 1,417,762 | 292,414 | 146,309 | -72,876 |
| Q4 | 121 | 590,940 | 2,184,747 | 416,280 | 174,660 | 101,784 |
| Q5 | 158 | 851,396 | 3,230,854 | 545,556 | 305,840 | 407,625 |
| Q6 | 201 | 1,098,678 | 4,090,904 | 465,642 | 633,035 | 1,040,660 |
| Q7 | 245 | 1,300,013 | 4,993,639 | 524,501 | 775,511 | 1,816,171 |
| Q8 | 291 | 1,499,559 | 5,939,364 | 522,419 | 977,140 | 2,793,311 |
| Q9 | 326 | 1,729,393 | 7,236,560 | 714,689 | 1,014,704 | 3,808,016 |
| Q10 | 366 | 2,032,521 | 8,128,202 | 562,876 | 1,469,646 | 5,277,662 |
| Q11 | 409 | 2,264,250 | 9,068,879 | 608,900 | 1,655,350 | 6,933,012 |
| Q12 | 453 | 2,494,836 | 10,058,816 | 582,928 | 1,911,908 | 8,844,920 |

### Scenario summary

| Measure | Low | Base | High |
|---|---|---|---|
| Accounts at month 6 / 12 / 24 / 36 | 12 / 26 / 54 / 77 | 26 / 67 / 152 / 228 | 43 / 121 / 291 / 453 |
| Share of the ~3,500-firm paying segment at month 36 | about 2% | about 6.5% | about 13% |
| ARR at month 12 / 24 / 36 (MXN) | 349,000 / 812,000 / 1,242,000 | 1,093,000 / 2,829,000 / 4,521,000 | 2,185,000 / 5,939,000 / 10,059,000 |
| ARR at month 36 (USD) | about 69,000 | about 251,000 | about 559,000 |
| Cash in, years 1 / 2 / 3 (MXN) | 239,000 / 676,000 / 1,098,000 | 726,000 / 2,288,000 / 3,880,000 | 1,448,000 / 4,750,000 / 8,521,000 |
| Costs, years 1 / 2 / 3 (MXN) | 774,000 / 804,000 / 857,000 | 979,000 / 1,409,000 / 1,702,000 | 1,346,000 / 2,058,000 / 2,469,000 |
| Year-3 profit before founder pay and tax (MXN) | about 242,000 | about 2,177,000 (USD 121,000) | about 6,052,000 (USD 336,000) |
| Operating break-even (trailing 3 months positive for good) | month 29 (Mar 2029) | month 15 (Jan 2028) | month 5 (Mar 2027) |
| Cumulative cash positive for good | not within 36 months | month 19 (May 2028) | month 11 (Sep 2027) |
| **Peak cash need, no founder pay (MXN)** | **727,000 (USD 40,000)** | **312,000 (USD 17,000)** | **294,000 (USD 16,000)** |
| Peak cash need with founder pay (MXN) | 1,742,000 (USD 97,000) | 358,000 (USD 20,000) | 294,000 |
| Year-3 profit after founder pay (MXN) | about -598,000 | about 1,337,000 | about 5,212,000 |
| CAC, years 1 / 2 / 3 (marketing + travel + half of CS + referral fees, MXN) | 9,800 / 8,200 / 7,800 | 6,200 / 5,900 / 7,200 | 5,000 / 5,500 / 6,100 |

**Unit economics (base, my estimate):**
- Average revenue is about MXN 1,550 per account a month. Gross margin after hosting, payment fees and a share of support is about 85%.
- CAC is about MXN 6,000-7,000, so payback is about 5 months.
- At 1.5% monthly churn an account lasts about 5 years. Capped at 4 years, an account is worth about MXN 63,000, so LTV/CAC is about 10. The founder's own selling time is not costed, so true CAC is higher.
- **The limit is the size of the pool, not the unit economics.**

**What the numbers mean:**
- **Cash need is small.** About MXN 310,000-360,000 (USD 17,000-20,000) carries the base case, with or without founder pay. Half of it is the first quarter: legal content, the security test, the tax opinion and trip 1. Plan **MXN 750,000 (USD 42,000)** of runway to survive the low case for 18 months.
- **Founder income:** the base case supports MXN 40,000 a month in year 2 and MXN 70,000 in year 3 and still makes about MXN 1.3M after that in year 3.
- **The low case is visible early.** It shows 12 accounts at month 6 against 26 in the base case. That is the kill signal (see milestones).
- **Taxes are not deducted.** The founder's company pays tax at home. A future Mexican company would pay 30% corporate income tax on its own margin ([PwC](https://taxsummaries.pwc.com/mexico/corporate/taxes-on-corporate-income)).

## Regional expansion

**Mexico first: the next market is the next state.** Each state pack opens that state's registered firms. INEGI's end-2025 counts include Nuevo León 516, Edomex 478, Baja California 316, San Luis Potosí 300, Chihuahua 286, Puebla 248, Coahuila 234 and Quintana Roo 219, plus CDMX 1,147 (2024) ([INEGI CNSPF-E 2026](https://www.inegi.org.mx/contenidos/programas/cnspe/2026/doc/cnspe_2026_resultados.pdf), via 02).

Order of state packs:
- **at launch:** Baja California, then the federal DGSP pack;
- **by month 3:** Tamaulipas, CDMX, Edomex and Nuevo León;
- **months 4-12:** San Luis Potosí, Chihuahua, Puebla and Coahuila;
- **year 2:** Quintana Roo, Jalisco (if its register reform passes), Querétaro and the rest on demand.

Each pack costs the founder about 1-3 agent-days plus a lawyer check (my estimate).

**Abroad (from 02, with payment notes):**

| Country | Fit | Payment and tax friction for a foreign seller | Timing |
|---|---|---|---|
| **Chile** | New law 21.659; the Subsecretaría must run a platform and register by 28 Nov 2026 ([Diario Constitucional](https://www.diarioconstitucional.cl/2026/05/13/iniciativa-prorroga-plazos-de-regularizacion-en-seguridad-privada-para-evitar-crisis-operativa-en-el-sector/), via 02). A compliance wave in 2026-2027, but with a state platform | The Chilean tax office has said software licences are not subject to withholding but are subject to VAT ([Garrigues](https://www.garrigues.com/en_GB/new/software-service-saas-challenge-posed-highly-complex-tax-rules-digital-and-interconnected-world); [Bloomberg Tax](https://news.bloombergtax.com/daily-tax-report-international/chile-tax-agency-clarifies-tax-treatment-of-software-licenses-from-nonresident-service-providers)); details unverified | Study from month 18; enter as a record keeper and pre-filler only if Mexico hits the base case |
| **Colombia** | 1,500+ firms; Supervigilancia's RENOVA is the single mandatory channel for monthly reports ([02](02-market-and-competition.md)) | 20% withholding on software licence payments ([PwC Colombia](https://taxsummaries.pwc.com/colombia/corporate/withholding-taxes)); local ERPs exist | Only through a local partner, year 3+ |
| Guatemala, Honduras | 150-200 firms each; Guatemala launched a new state system in Apr 2026 ([02](02-market-and-competition.md)) | Not checked | Low priority |

**Adjacent products in Mexico (cheaper than new countries):**
- A **"client compliance pack"** for corporate buyers, who already demand permits, REPSE and association membership from guard vendors ([AMESP at ANTAD 2025](https://simposioseguridad.antad.net/simposio2025/presentaciones/7-Los-paradigmas-de-la-seguridad-privada-en-Mexico.pdf)).
- A **REPSE monthly evidence pack**: guard firms are outsourcing providers whose clients collect evidence monthly ([BDO](https://www.bdomexico.com/getmedia/514a6f9e-9faf-406d-b485-82f4be6a21c6/Webinar-REPSE-070825.pdf?ext=.pdf), via 02).

## Exit and partnerships

**Likely buyers:**
- **Vigon**, the Mexico-focused guard ERP with payroll and staff files. It is the closest product and the most likely entrant ([Vigon](https://vigonops.com/erp-seguridad-privada-mexico/), via 02). Start with an integration, then explore a reseller deal.
- **Trackforce Valiant**, a roll-up of guard software. It bought Silvertrac in 2020 and reported 2,500+ customers in 45 countries ([MacTech](https://www.mactech.com/2020/01/13/trackforce-valiant-acquires-silvertrac-software)). It has no Mexican compliance layer ([02](02-market-and-competition.md)).
- **Mexican payroll and HR vendors**, such as CONTPAQi, Runa and Worky. The staff master already lives in payroll.
- **MercadoSeguridad.mx**, a directory that sells lead plans to the same firms ([MercadoSeguridad](https://www.mercadoseguridad.mx/planes)).
- **REPSE vendor-compliance platforms** such as Xternall ([El CEO](https://elceo.com/negocios/xternall-la-plataforma-que-ayuda-a-las-empresas-a-supervisar-a-sus-proveedores-repse/), via 02).

**Valuation:**
- Small SaaS firms under USD 1M ARR sell for about 2.5-4x revenue, or 4-6x owner profit while still owner-run ([beancount.io, Jul 2026](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)).
- Another analysis of 651 listings reports much lower median asks for the smallest deals ([BigIdeasDB](https://bigideasdb.com/state-of-saas-valuations-2026)).
- On the base case at month 36: ARR MXN 4.5M x 2.5-4 = MXN 11-18M, or year-3 profit before founder pay MXN 2.2M x 3-4 = MXN 6.5-8.7M. **Range: about MXN 7-18M (USD 0.4-1.0M)**.
- The low case is not saleable except as an asset sale to Vigon or a gestoría.

**Partnerships to start in year 1 (no cash cost):**
- Vigon or another guard app: two-way staff import and export.
- CONTPAQi/NOI: import formats; later a listing in its partner channel.
- AMESP: a member discount plus a co-branded checklist.
- Gestorías: the Despacho plan plus the referral fee.
- MercadoSeguridad: a "Registro al día" badge.

## Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| The DGSP launches an online filing system (the Feb 2026 Acuerdo gives it until about Feb 2027; [SIDOF 5784083](https://sidof.segob.gob.mx/notas/docFuente/5784083)) | Medium | Medium: the federal "report builder" value shrinks | Position as the firm's own register and audit trail; add an export to the DGSP system; state packs still matter |
| Low willingness to pay; firms stay on Excel and the gestor | Medium-high | High | Test prices in pilots; Despacho plan for gestores; kill criteria |
| **Art. 18-B applies to this SaaS** (foreign seller must register for IVA) | Medium (contested) | Medium: admin cost and the 2026 SAT online-access duty | Tax opinion before the first charge; Paddle as MoR; or open the Mexican company early |
| Withholding claimed by a buyer's accountant (25% or 10%) | Low-medium for a treaty seller | High on margin | Standard product, no custom work, residence certificate, buyer FAQ |
| Card declines on cross-border charges | High | Medium | 3-D Secure, buyer note, transfer fallback, Mexican company trigger |
| Buyers demand CFDI | High | Medium | Rule 2.7.1.14 invoice and FAQ; trigger for the Mexican company; a reseller gestoría that issues CFDI |
| Vigon or another guard app adds DGSP packs | Medium | High | Move first on regulatory content and states; integrate rather than fight; possible exit route |
| Law reset (Ley General de Seguridad Privada, "padrón único") | Low-medium in 3 years | Medium-high | Data model is portable; content upkeep is the moat; any new register raises demand for clean records |
| Data breach of sensitive staff data | Low | Very high (LFPDPPP fines up to 640,000 UMA for sensitive data; prison) | Security test before sale, encryption, minimal health data (results and dates, not full reports), insurance |
| Permanent establishment through a Mexican salesperson | Low-medium | Medium | Contractor does support and leads; founder signs; open the Mexican company before hiring closers |
| Small, informal market; firms close | Medium | Medium | Target 11+ staff, federal firms first; 1.5-2.5% monthly churn in the model |
| Founder is remote and the sector is relationship-driven | Medium | Medium | Mexican CS contractor from month 3; three trips in year 1; partners |
| Peso falls against EUR | Medium | Low-medium (MXN prices, EUR costs) | Most costs are in MXN (staff, marketing); yearly price review |

## Milestones and kill criteria

| Date | Milestone (base case) | Kill or rethink if |
|---|---|---|
| 1 Nov 2026 | MVP live with the federal and Baja California packs | - |
| 30 Nov 2026 | 20+ interviews; 3-5 pilots running; real DGSP and 4 state formats in hand | Fewer than 3 pilots from 20 interviews, or more than half say they would never pay MXN 750+ a month |
| 13 Dec 2026 | Sellable release; security test passed; tax opinion received | The tax opinion requires 18-B registration **and** Paddle cannot serve Mexican B2B buyers: pause and plan the Mexican company first |
| 10 Jan 2027 (day 90) | 6+ paying firms; 3 gestoría partners | Fewer than 3 paying |
| 30 Apr 2027 (month 6) | 26 accounts; trial-to-paid 30%+ | **Fewer than 12 accounts** (low case) or trial-to-paid below 15% |
| 31 Oct 2027 (month 12) | 67 accounts; ARR about MXN 1.1M; 35% from partners | **Fewer than 30 accounts**, or 12-month logo retention below 70% |
| Feb 2028 (month 16) | Mexican company decision made on the triggers; ARR above MXN 1.5M | - |
| Oct 2028 (month 24) | 150 accounts; ARR about MXN 2.8M; founder pay started | Below 80 accounts: run as a side business or sell to a partner |
| Oct 2029 (month 36) | About 230 accounts; ARR about MXN 4.5M; regional decision (Chile) | - |
| Any time | - | The DGSP offers free online register-keeping that covers staff, equipment and audit trail, **and** states adopt it: re-scope to state packs and gestorías within 60 days |

## Open questions

1. **Is this SaaS a "digital service" under LIVA art. 18-B?** It decides whether the foreign company must register for IVA. Get a written opinion from a Mexican tax adviser.
2. **Does Paddle sell to Mexican businesses with IVA and the buyer's RFC on its invoice?** Ask Paddle sales. Check its country list via the API.
3. **What are real cross-border approval rates on Stripe for Mexican business cards?** Measure on pilot charges.
4. **How strongly do guard-firm accountants insist on CFDI?** Ask in every interview.
5. **Can a foreign individual get a Mexican RFC and e.firma without residency** (for a SAS)? Check with the SAT or a lawyer.
6. **What do gestorías charge firms** for monthly DGSP and state upkeep? This sets the Despacho resale price.
7. **Will AMESP endorse or co-market,** and on what terms?
8. **Is Expo Seguridad 2027 on 22-24 June,** and what does a shared booth cost from the organiser (RX)?
9. **Cyber and E&O premium** from a Mexican broker for a foreign SaaS holding sensitive data.
10. **The exact Mexican rule for treaty relief** (residence certificate form and timing) and the buyer's DIOT reporting of foreign suppliers.

## Sources

Tax, payments and company
- [PwC Tax Summaries: Mexico withholding taxes (reviewed 6 Aug 2026)](https://taxsummaries.pwc.com/mexico/corporate/withholding-taxes)
- [PwC Tax Summaries: Mexico corporate income tax](https://taxsummaries.pwc.com/mexico/corporate/taxes-on-corporate-income)
- [LIVA art. 18-B (mley)](https://mley.mx/LIVA/articulo/18-B/)
- [LIVA art. 24 (mley)](https://mley.mx/LIVA/articulo/24/)
- [ITAM paper on digital-services IVA](https://contaduria.itam.mx/sites/contaduria.itam.mx/files/contaduriaitammx/noticias/aadjuntos/2023/08/publicacion_andrea_brito.pdf)
- [SDV: criterio 7/IVA/NV summary](https://sdv.com.mx/compendio/criterios-no-vinculativos-sat/criterio-7-iva-nv/)
- [Fonoa: Mexico tax on digital services](https://www.fonoa.com/resources/country-tax-guides/mexico/tax-on-digital-services)
- [IDC: Pago de regalías por software, ¿con retención? (4 Oct 2021)](https://idconline.mx/fiscal-contable/2021/10/04/pago-de-regalias-por-software-con-retencion)
- [International Tax Review: Mexico grapples with tech sector taxes (2019)](https://www.internationaltaxreview.com/article/b1h0xl84fv9srr/mexico-grapples-with-tech-sector-taxes)
- [Siempre al Día: requisitos de la factura de proveedor extranjero 2026](https://siemprealdia.co/mexico/fiscal/requisitos-de-la-factura-de-proveedor-extranjero-para-el-sat/)
- [Veritas: requisitos para la deducción de pagos a residentes en el extranjero](https://www.veritas.org.mx/Impuestos/Internacional/requisitos-para-la-deduccion-de-pagos-a-residentes-en-el-extranjero)
- [Stripe Ireland pricing](https://stripe.com/ie/pricing)
- [Stripe Mexico pricing](https://stripe.com/mx/pricing)
- [Stripe OXXO docs](https://docs.stripe.com/payments/oxxo)
- [Stripe Mexico bank transfers docs](https://docs.stripe.com/payments/mx-bank-transfers)
- [Paddle pricing](https://www.paddle.com/pricing)
- [Paddle supported countries](https://developer.paddle.com/concepts/sell/supported-countries-locales)
- [Fungies: Lemon Squeezy and Stripe 2026](https://fungies.io/lemon-squeezy-stripe-acquisition-saas-founders-2026/)
- [Dodo Payments: Stripe Managed Payments fees](https://dodopayments.com/blogs/stripe-managed-payments-fees-explained)
- [Nuvei: direct acquiring vs cross-border in Mexico](https://www.nuvei.com/posts/evaluating-payment-strategies-for-the-mexican-market-direct-acquiring-versus-cross-border-models)
- [EBANX Mexico infographic](https://www.ebanx.com/en/opportunities-for-expansion-in-mexico-infographic)
- [IDC on CONDUSEF card-decline reasons](https://idconline.mx/finanzas/2023/01/23/cuatro-razones-por-las-que-no-se-autorizo-tu-compra-por-internet)
- [Mercado Pago: cargos por conversión de moneda](https://www.mercadopago.com.mx/blog/evitar-comisiones-tarjeta-fuera-mexico)
- [BBVA NetCash fee schedule](https://www.bbva.mx/content/dam/public-web/mexico/documents/empresas/banca-electronica-y-canales/netcash/Caratula.pdf)
- [Expansión: BBVA fee cuts (Sep 2025)](https://expansion.mx/finanzas-personales/2025/09/22/comisiones-que-bbva-redujo-para-miles-de-clientes-mexico)
- [XTransfer: Mexico peso payment options](https://www.xtransfer.com/blog/mexico-peso-payment-options)
- [Praxium: abrir empresa en México, precio 2026](https://praxiumconsultores.com/blog/abrir-empresa-en-mexico-precio-2026)
- [Praxium: cuánto cobra un contador por una S.A. de C.V.](https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-por-una-sa-de-cv-recien-constituida)
- [Start-Ops: incorporation service Mexico](https://start-ops.com.mx/incorporation-service-mexico/)
- [LGSM art. 260 (mley)](https://mley.mx/LGSM/articulo/260/)
- [AMCPDF: consideraciones 2026 para las SAS](https://amcpdf.org.mx/consideraciones-2026-para-las-sociedades-por-acciones-simplificadas-sas/)
- [LISR art. 3 (mley)](https://mley.mx/LISR/articulo/3/)
- [Boundless: EOR services in Mexico 2026](https://boundlesshq.com/blog/best-eor-services-mexico/)

Law, contracts and calendar
- [LFSP art. 13 (mley)](https://mley.mx/LFSP/articulo/13/)
- [LFT art. 74 (mley)](https://mley.mx/LFT/articulo/74/)
- [LFT art. 87 (mley)](https://mley.mx/LFT/articulo/87/)
- [LFPDPPP PDF (Cámara de Diputados)](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf)
- [Reglamento LFPDPPP art. 52 (mley)](https://mley.mx/Reg_LFPDPPP/articulo/52/)
- [Código de Comercio PDF](https://www.diputados.gob.mx/LeyesBiblio/pdf/CCom.pdf)
- [SIDOF 5784083 (SSPC Acuerdo, Feb 2026)](https://sidof.segob.gob.mx/notas/docFuente/5784083)
- [SIDOF 5795553](https://sidof.segob.gob.mx/notas/docFuente/5795553); [SIDOF 5797220](https://sidof.segob.gob.mx/notas/docFuente/5797220); [SIDOF 5799650](https://sidof.segob.gob.mx/notas/docFuente/5799650)
- [Baja California monthly report guide](https://seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf)
- [MyBusinessFuture: cyber insurance for SMEs](https://mybusinessfuture.com/es/seguros-de-ciberseguridad-para-pymes/)
- [Howden Mexico: Cibernético+](https://www.howdengroup.com/mx-es/seguro-cibernetico/cibernetico-plus)

Market, pricing and channels
- [Computrabajo: gestor gubernamental ad](https://mx.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-gestor-gubernamental-en-cuauhtemoc-BA3B0D3F75D2544A61373E686DCF3405)
- [CONTPAQi 2026 price list](https://www.contpaqi.com/hubfs/Listas%20de%20precios/Lista_de_Precios_Sistemas_CONTPAQi_2026.pdf)
- [LFD art. 195-X (mley)](https://mley.mx/LFD/articulo/195-x/)
- [Michoacán fee list 2024](https://ssp.michoacan.gob.mx/wp-content/uploads/2024/05/COSTOS-DE-AUTORIZACI%C3%93N-SEGURIDAD-PRIVADA.-LEY-DE-INGRESOS-DEL-ESTADO-DE-MICHOACAN-2024.pdf)
- [Papelea: Tabasco revalidation](https://papelea.com/mx/estado-de-tabasco/revalidacion-del-permiso-o-autorizacion-para-la-prestacion-del-servicio-portal-tabasco-1)
- [MercadoSeguridad plans](https://www.mercadoseguridad.mx/planes); [MercadoSeguridad DGSP directory](https://www.mercadoseguridad.mx/empresas-autorizadas-dgsp/cdmx)
- [GuardsPro pricing](https://www.guardspro.com/pricing); [ComparaSoftware: C-Guard Pro](https://www.comparasoftware.com/c-guard-pro)
- [Modelos de plan de negocios: cost of guard services](https://modelosdeplandenegocios.com/blogs/news/cuanto-cuesta-servicio-seguridad-privada)
- [Nuevo León padrón, Jul 2026](https://www.nl.gob.mx/sites/default/files/repositorio/Dependencias/Secretar%C3%ADa%20de%20Seguridad/Repositorios/20260721_padron_empresas_seguridad_julio.pdf)
- [DGSP open-data list (datamx.io)](https://www.datamx.io/dataset/direccion-general-de-seguridad-privada/resource/9e1109a2-5762-4a75-8f27-e221a815661d)
- [INEGI CNSPF-E 2026 results](https://www.inegi.org.mx/contenidos/programas/cnspe/2026/doc/cnspe_2026_resultados.pdf)
- [Zeta Tijuana: AMESP, Aug 2026](https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/)
- [AMESP at ANTAD Simposio 2025](https://simposioseguridad.antad.net/simposio2025/presentaciones/7-Los-paradigmas-de-la-seguridad-privada-en-Mexico.pdf)
- [El Universal: AMESP standards (older)](https://www.eluniversal.com.mx/articulo/metropoli/cdmx/2017/01/7/buscan-homologacion-en-seguridad-privada/)
- [Excélsior: personas detrás de la empresa segura](https://www.excelsior.com.mx/nacional/personas-detras-empresa-segura)
- [Mobile Time: WhatsApp Business and Mexican SMEs (Feb 2025)](https://mobiletime.la/noticias/28/02/2025/whatsapp-business-pymes-mexico/?rd=1)
- [ITSitio: CONTPAQi partner programme](https://www.itsitio.com/eventos/contpaqi-con-nuevo-programa-comercial-y-distribucion-directa/)
- [NovoAds: Google Ads costs](https://novoads.ai/es/blog/cuanto-cuesta-publicidad-en-google-ads)
- [SIA: Expo Seguridad México 2026](https://www.securityindustry.org/siaevents/expo-seguridad-mexico-2026)
- [Jufair: Expo Seguridad México listing](https://www.jufair.com/exhibition/expo-securidad-mexico/)
- [Cluster Industrial: Expo Seguridad México](https://clusterindustrial.com.mx/expo-seguridad-mexico-alista-su-23a-edicion-con-mas-de-400-expositores-en-centro-banamex/)
- [ASIS México June 2026 report](https://asis.org.mx/docs/reportes/JUNE-REPORT-2026.pdf)
- [PayScale: Customer Success Manager, Mexico City](https://www.payscale.com/research/MX/Job=Customer_Success_Manager/Salary/a0e4c370/Mexico-City)
- [Blaze InfoSec: penetration testing cost 2026](https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/)
- [AWS Mexico (Central) region](https://aws.amazon.com/blogs/aws/aws-weekly-roundup-new-aws-mexico-central-region-simultaneous-sign-in-for-multiple-aws-accounts-and-more-january-20-2025)
- [EULEN México report](https://www.eulen.com/mx/wp-content/uploads/sites/8/2025/07/02-Grupo-EULEN-Mexico-Seguridad-formal-frente-al-riesgo-de-la-informalidad-en-el-sector.pdf)
- [BDO REPSE webinar](https://www.bdomexico.com/getmedia/514a6f9e-9faf-406d-b485-82f4be6a21c6/Webinar-REPSE-070825.pdf?ext=.pdf)
- [El CEO: Xternall](https://elceo.com/negocios/xternall-la-plataforma-que-ayuda-a-las-empresas-a-supervisar-a-sus-proveedores-repse/)
- [Vigon Mexico page](https://vigonops.com/erp-seguridad-privada-mexico/)

Expansion and exit
- [PwC Tax Summaries: Colombia withholding taxes](https://taxsummaries.pwc.com/colombia/corporate/withholding-taxes)
- [Garrigues: SaaS tax complexity](https://www.garrigues.com/en_GB/new/software-service-saas-challenge-posed-highly-complex-tax-rules-digital-and-interconnected-world)
- [Bloomberg Tax: Chile software licences](https://news.bloombergtax.com/daily-tax-report-international/chile-tax-agency-clarifies-tax-treatment-of-software-licenses-from-nonresident-service-providers)
- [Diario Constitucional: Chile private-security deadlines](https://www.diarioconstitucional.cl/2026/05/13/iniciativa-prorroga-plazos-de-regularizacion-en-seguridad-privada-para-evitar-crisis-operativa-en-el-sector/)
- [MacTech: Trackforce Valiant acquires Silvertrac (2020)](https://www.mactech.com/2020/01/13/trackforce-valiant-acquires-silvertrac-software)
- [beancount.io: bootstrapped SaaS valuation multiples 2026](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)
- [BigIdeasDB: state of small SaaS valuations 2026](https://bigideasdb.com/state-of-saas-valuations-2026)
