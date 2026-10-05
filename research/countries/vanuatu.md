# Vanuatu: opportunity research

Researched 2026-10-05. Small market: about 330k people (estimate) and about **3,000 VAT-registered businesses** (DCIR figure reported by Daily Post / VBR). I used 6 web searches, below the 10-search cap for a small market. WebFetch was not used, so all facts come from search-result summaries of the cited pages. Any figure I could not confirm from those summaries is marked *unverified*.

**Accessibility:** Vanuatu is not sanctioned and has no internet restrictions. A foreign vendor can sell software there, but it must be accredited for the VSMS fiscal integration (see below). Payments are mostly by bank transfer (ANZ, NBV, BRED, BSP). The market is open, but very small.

**Bottom line:** Vanuatu has one real "why now" trigger: the **Vanuatu Sales Monitoring System (VSMS)** e-invoicing and fiscal-device mandate, under Sales Monitoring Regulation Order No. 153 of 2025. Accredited vendors (FiscoBridge and AJC Bridge, on top of DTI's platform) already cover this regulatory gap. With only about 3,000 obligated businesses, there is **no viable standalone indie opportunity**. The best play is to sell into Vanuatu as an **add-on to a Fiji (FRCS VMS) / Pacific fiscalisation product**. One vendor (FiscoBridge) is already doing exactly that.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All VAT-registered retail/hospitality/services | VSMS e-invoicing: POS/accounting integration with the DCIR fiscal platform, invoices reported in real time | Too competitive / small | The mandate is real, but FiscoBridge (SDC, web invoicing, POS, API) and AJC Bridge (for Xero) are already accredited and marketing it. Only about 3,000 buyers. |
| Accountants / bookkeepers (Port Vila) | VSMS exception reconciliation (VAT return vs. VSMS invoice data) for Xero/MYOB clients | Weak candidate (below) | A possible narrow add-on, but the buyer pool is tiny and AJC (itself an accounting firm) owns the Xero channel. |
| Employers / payroll | Monthly VNPF contribution schedule. The rate rose from 8% to 12% (6% + 6%) on 1 Jan 2026. Schedule due by the 14th. | Rejected | The VNPF Online Employer Portal plus EOR/payroll tools (Ontop, Carbonate) and accountants cover it. One-off rate change, small employer base. |
| Kava exporters | Biosecurity OPS-014 facility certification, per-shipment inspection appointment + sampling, VCMB export licence, annual audit | Poor distribution | Real per-shipment paperwork, but only a few dozen exporters (*estimate*). The government runs inspection and lab testing. Export trade-portal procedures are already documented. Low willingness to pay. |
| Customs brokers / importers | ASYCUDA declarations, trade-portal procedures | Rejected | The government system (ASYCUDA World, Vanuatu Trade Portal) dominates, a handful of brokers handle the work, and there is no new trigger found. |

---

## Opportunities

### Opportunity: VSMS-to-VAT-return reconciliation add-on for Pacific accounting firms

**Industry:**
Accounting / bookkeeping firms serving VAT-registered SMEs (Vanuatu, sold as part of a Fiji/Pacific product)

**Buyer:**
Partner or VAT manager at a small Port Vila / Luganville accounting firm. A secondary buyer is the finance manager at a medium VAT-registered business.

**Trigger / Why now:**
Under Sales Monitoring Regulation Order No. 153 of 2025, all VAT-registered businesses had to register for VSMS (deadline 30 Sept 2025, with extensions available). Large businesses must issue invoices through accredited EFD solutions first, and the rollout is moving down to medium, small and micro businesses. DCIR now holds real-time invoice data that it can match against VAT returns.

**Current workflow:**
1. The business issues sales through POS or accounting software, which an accredited EFD or bridge (FiscoBridge, AJC Bridge) relays to VSMS.
2. Credit notes, voids, offline sales and manual invoices are handled ad hoc (*assumption*, typical in fiscalisation regimes).
3. The accountant prepares the monthly or quarterly VAT return from the ledger, not from the VSMS records.
4. Mismatches between the ledger and VSMS records are found only when DCIR queries them.

**Pain:**
Only inferred. DCIR says VSMS exists to close the VAT gap and that non-compliance can lead to legal action. The pain is a mismatch between fiscal records and the VAT return. I found no direct complaint evidence.

**Existing solutions:**
- FiscoBridge: Vanuatu SDC, web invoicing, desktop POS, accounting integrations, POS API.
- AJC Bridge: built by AJC Vanuatu, an accounting firm, for Xero-based businesses.
- DTI (dti.rs): the platform/technology partner behind VSMS.
- Xero/MYOB VAT reports.
- Accountants reconciling by hand.

**The gap:**
Unverified. The vendors focus on getting invoices *into* VSMS. Nothing I found reconciles VSMS-reported totals against the ledger and the VAT return across a firm's whole client book.

**Possible product:**
A multi-client dashboard that pulls each client's VSMS invoice data (via the EFD vendor export or the portal) and the Xero ledger, then flags mismatches before the VAT return is filed.

**MVP:**
CSV import of a VSMS invoice export plus the Xero API, matched per period, with an exception list per client.

**Pricing hypothesis:**
USD 30–60 per client per month for firms, or a regional bundle with Fiji. Vanuatu alone would bring in perhaps USD 1–3k MRR at best (*estimate*).

**How to find first customers:**
Accounting firms in Port Vila (a handful: AJC, BDO / Law Partners, KPMG-affiliated firms, *unverified list*), the Vanuatu Chamber of Commerce (VCCI), and the DCIR accredited-supplier list as partners.

**Risks:**
- DCIR may offer a free reconciliation view.
- AJC Bridge is owned by an accounting firm, a channel conflict.
- Data access may depend on EFD vendors.
- The market is tiny.

**Kill condition:**
Kill the idea if DCIR's taxpayer portal pre-fills VAT returns from VSMS, or if FiscoBridge/AJC already reconcile to the VAT return.

**Score:** 3/10

**Sources:**
- https://customsinlandrevenue.gov.vu/taxes-and-licensing/vsms.html
- https://vanuatucustoms.gov.vu/vsms-extension.html
- https://bloximages.chicago2.vip.townnews.com/dailypost.vu/content/tncms/assets/v3/classifieds/e/e6/ee616b18-01fb-4d6a-8f5b-924ef9078352/68b6251ee6152.pdf.pdf (Public Notice No. 010 of 2025)
- https://www.dailypost.vu/news/new-vt300m-gov-t-funded-sales-monitoring-system/article_4ab91023-290a-555d-92fb-12785255bd9d.html
- https://vbr.vu/news/govt-strengthens-business-transparency-with-new-tax-system/
- https://fiscobridge.com/blog/read/14/vanuatu-vsms-is-now-live-how-vat-registered-businesses-can-get-ready-with-fiscob
- https://ajc-vanuatu.com/
- https://dti.rs/transforming-tax-compliance-in-vanuatu-a-strategic-leap-with-vsms/

---

## Rejected after competitor research

- **VSMS EFD / POS fiscal connector for Vanuatu SMEs.** This is a strong trigger, with a mandatory, per-sale workflow for about 3,000 businesses. **FiscoBridge** killed it: it already offers an accredited SDC, web invoicing, POS and API, and it reuses its Fiji FRCS VMS product. **AJC Bridge** covers Xero users. Accreditation is required before anyone can sell, and the buyer pool is too small to fight two incumbents.
- **VNPF schedule generator for employers.** A 2026 rate change took the rate from 8% to 12%. The free **VNPF Online Employer Portal**, payroll/EOR tools (Ontop, Carbonate) and accountants killed it. The task is monthly but simple, and the rate change is a one-off.

## Attractive problem, poor distribution

- **Kava export compliance pack.** The workflow is OPS-014 facility QMS records, the per-shipment Biosecurity inspection booking (VUV 5,500), kavalactone/flavokavain test results, the VCMB licence and the annual audit. It is mandatory and runs per shipment, but there are only a few dozen exporters (*estimate*), willingness to pay is low, and the government does the testing. It might be worth revisiting as a Pacific-wide (Fiji + Vanuatu + Tonga + Samoa) kava traceability tool if importing markets tighten their rules. I could not verify any 2025–26 EU/US/NZ trigger.
  Sources: https://biosecurity.gov.vu/index.php/exports/kava-exports, https://vbr.vu/news/biosecurity-reminds-kava-industry-to-meet-export-standards/, https://tradeportal.gov.vu/procedure/385/step/913?l=en

## Too competitive

- VSMS fiscal integration (FiscoBridge, AJC Bridge, DTI platform).

## Note for cross-country synthesis

Vanuatu's VSMS mirrors Fiji's FRCS VMS, and the same vendor (FiscoBridge) operates in both. Pacific fiscalisation is a regional pattern. Any opportunity should be judged at the Fiji + Vanuatu + other Pacific islands level, not for Vanuatu alone.

Other sources: https://www.vnpf.com.vu/employers.html, https://vbr.vu/news/vnpf-contribution-rate-increase-effective-next-year/, https://employmentvanuatu.gov.vu/index.php/resources-2/employer-guideline/vnpf-employers-and-their-responsibilities, https://www.getontop.com/payroll-in/vanuatu
