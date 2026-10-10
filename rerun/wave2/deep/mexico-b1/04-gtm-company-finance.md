# Mexico private-security register keeper: go-to-market, payments, company setup and financials (deep dive 04)

Status: IN PROGRESS (draft 0, 10 Oct 2026). Skeleton written first; sections are filled as research goes on.

Builds on [the B1 report](../reports/mexico-b1.md), [01 law](01-law-and-requirements.md), [02 market](02-market-and-competition.md) and [03 product](03-product-and-tech.md). Money is in MXN unless stated. "+ IVA" means before Mexico's 16% VAT. USD at about MXN 18 (my rounding). "My estimate" marks planning numbers. "(unverified)" marks facts no source confirmed. The seller is assumed to be the founder's EU company; UK, US and Israeli companies are noted where they differ.

## Summary
(pending)

## Pricing and packaging
(pending)

## Go-to-market
(pending)

## 90-day launch plan
(pending)

## 12-month marketing plan and budget
(pending)

## Payments and tax friction
(pending)

## Company setup (needed or not, costs)
(pending)

## Contracts and liability
(pending)

## Financial model
(pending)

## Regional expansion
(pending)

## Exit and partnerships
(pending)

## Risks and mitigations
(pending)

## Milestones and kill criteria
(pending)

## Open questions
(pending)

## Sources
(pending)

## Research notes (working, to be merged)
- From 02: market about 6,300 state registrations, about 1,500 federal firms (AMESP 1,487), paying segment 3,300-3,700 incl. 1,100-1,200 federal. Proposed prices: Estatal 750/mo, Federal 1,900/mo, Federal Plus 3,500/mo, extra state 400/mo, Gestoría 4,500/mo (+ IVA). Gestor costs about MXN 18,000/mo. CONTPAQi cloud payroll 150 staff about MXN 11,700/yr. Fines MXN 113k-170k. MercadoSeguridad lead plans MXN 2,990-9,990/mo.
- From 01: federal monthly report first 10 calendar days; states first 5 business days (CDMX, Edomex, BC, Tamaulipas); 67 DGSP visits in 2020 for about 1,650 firms; >20 firms sanctioned in 2025; SSPC Acuerdo 12 Feb 2026 gives DGSP one year to adapt registry systems (so by about Feb 2027).
- From 03 notes: Render, R2, Resend, WhatsApp utility MXN 0.1565/msg; Claude Max USD 100/200; LFPDPPP new law DOF 20 Mar 2025.

### Notes batch 2 (payments, tax, company) - findings so far
- PwC Mexico WHT (reviewed 6 Aug 2026): royalties for copyrights incl. software 25%; technical assistance 25%; treaty royalty caps 10% for Austria, Belgium, Czech Rep., Estonia, France (MFN), Germany, Ireland, Israel, Netherlands, Poland, Spain, UK, US, Malta, Latvia, Lithuania; no treaty with Slovenia; Croatia, Cyprus, BiH not in table; 40% on PTR related-party. https://taxsummaries.pwc.com/mexico/corporate/withholding-taxes
- IDC 4 Oct 2021: treaty country + standardised software = not royalty (OECD view accepted, RMISC rule 2.1.37); adapted software = royalty; non-treaty = 25% (LISR 167-II, CFF 15-B). https://idconline.mx/fiscal-contable/2021/10/04/pago-de-regalias-por-software-con-retencion ; ITR 2019 (Baker McKenzie): SAT rule defines "standardised application"; https://www.internationaltaxreview.com/article/b1h0xl84fv9srr/mexico-grapples-with-tech-sector-taxes
- LIVA 18-B closed list: content access/download, intermediation, online clubs/dating, distance teaching. SaaS not named. https://mley.mx/LIVA/articulo/18-B/ ; ITAM paper: closed list, mainly household consumption, data storage outside. https://contaduria.itam.mx/sites/contaduria.itam.mx/files/contaduriaitammx/noticias/aadjuntos/2023/08/publicacion_andrea_brito.pdf ; SDV (secondary) says SaaS is digital service: https://sdv.com.mx/compendio/criterios-no-vinculativos-sat/criterio-7-iva-nv/
- LIVA 24-V: import of services = use in Mexico of services by non-residents; only exception international transport. https://mley.mx/LIVA/articulo/24/
- Fonoa: 18-B registrants: no threshold, fiscal rep required, monthly by 17th (+days by RFC digit), no CFDI needed (PDF receipt with RFC etc.), 2026 reform: give SAT permanent online access, request by 30 Apr 2026. https://www.fonoa.com/resources/country-tax-guides/mexico/tax-on-digital-services
- Rule 2.7.1.14 RMF 2026: foreign invoice 6 requirements (name+address, foreign tax ID, place+date, buyer RFC, buyer name, description qty unit price total). https://siemprealdia.co/mexico/fiscal/requisitos-de-la-factura-de-proveedor-extranjero-para-el-sat/
- Stripe OXXO: available MX/US/CA/SG, EEA+UK private preview; max MXN 10,000; no Billing/Invoicing/recurring; MCC "Software" prohibited. https://docs.stripe.com/payments/oxxo
- Stripe MX bank transfers (SPEI) only for MX Stripe accounts. https://docs.stripe.com/payments/mx-bank-transfers
- Stripe IE pricing: intl cards 3.15% + EUR 0.25; +2% FX; Billing 0.7%; Tax 0.5%; Invoicing 0.4%; dispute EUR 20. https://stripe.com/ie/pricing
- Paddle 5% + 50c. https://www.paddle.com/pricing ; Paddle 229 countries, MoR calculates/remits taxes. https://developer.paddle.com/concepts/sell/supported-countries-locales (Mexico row not visible)
- Lemon Squeezy 5% + 50c; Stripe Managed Payments public preview Feb 2026, +3.5% on top of processing (secondary): https://fungies.io/lemon-squeezy-stripe-acquisition-saas-founders-2026/ ; https://dodopayments.com/blogs/stripe-managed-payments-fees-explained
- Nuvei: local acquiring 80%+ vs cross-border 50-60% approvals (vendor claim). https://www.nuvei.com/posts/evaluating-payment-strategies-for-the-mexican-market-direct-acquiring-versus-cross-border-models
- Card foreign purchase fee 1-3% by issuer. https://www.mercadopago.com.mx/blog/evitar-comisiones-tarjeta-fuera-mexico ; CONDUSEF reasons for declines: https://idconline.mx/finanzas/2023/01/23/cuatro-razones-por-las-que-no-se-autorizo-tu-compra-por-internet
- BBVA SWIFT: USD 20 + IVA per online contract; cut to USD 10 for individuals from Apr 2025. https://www.bbva.mx/content/dam/public-web/mexico/documents/empresas/banca-electronica-y-canales/netcash/Caratula.pdf ; https://expansion.mx/finanzas-personales/2025/09/22/comisiones-que-bbva-redujo-para-miles-de-clientes-mexico
- XTransfer claims Wise/Airwallex no MXN collection accounts (vendor). https://www.xtransfer.com/blog/mexico-peso-payment-options
- Praxium 2026: notary MXN 15-25k, RPC 2.5-5k, name/RFC/e.firma free, total S.A./S. de R.L. MXN 20-40k, SAS free online, 2-4 weeks, no min capital. https://praxiumconsultores.com/blog/abrir-empresa-en-mexico-precio-2026 ; accountant PM MXN 3-7k/mo, new no-staff 3-4k. https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-por-una-sa-de-cv-recien-constituida
- Start-Ops: USD 3,500-4,500 setup incl RNIE, legal rep, bank, PAC; USD 1,000-1,500/mo; 6-9 weeks + bank 2-6 weeks, bank in person with rep. https://start-ops.com.mx/incorporation-service-mexico/
- AMCPDF 2026 SAS: in-person SAT step for RFC/e.firma from 2026. https://amcpdf.org.mx/consideraciones-2026-para-las-sociedades-por-acciones-simplificadas-sas/
- Expo Seguridad Mexico 22-24 Jun 2027 (aggregator), booth ~USD 8,500 / 9 m2; space USD 750/m2 min 18 m2 (aggregator). https://www.jufair.com/exhibition/expo-securidad-mexico/
- Salaries: PayScale CSM CDMX MXN 370,300/yr (2026), Mexico CSM 380k, early 268k. https://www.payscale.com/research/MX/Job=Customer_Success_Manager/Salary/a0e4c370/Mexico-City ; Computrabajo sales exec avg MXN 11,141/mo https://mx.computrabajo.com/salarios/ejecutivo-ventas
- Google Ads Mexico Search CPC USD 0.40-3.00 (secondary, novoads): https://novoads.ai/es/blog/cuanto-cuesta-publicidad-en-google-ads
