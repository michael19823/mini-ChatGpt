# Poland: BDO vendors (third-party waste/BDO software)

Dropped idea: C0787, Poland waste BDO software. Searches used: 5 of 6 (Polish and English). No WebFetch, no GitHub.

## Verdict: weak

"BDO vendors" is not one product. The searches found a fragmented set of ERP add-ons and Excel tools, plus a government API. They found no dedicated, well-known SME product with a review footprint. Confidence is low because few vendors were identified.

## Evidence
- The BDO API is a RESTful interface for external software to act in BDO. Source: https://www.pit.pl/?p=26158 (search snippet; also referenced on bdo.mos.gov.pl). Integration is arranged by contacting the ministry. A search summary says the API does not expose some modules, which forces manual entry in third-party software. That summary cites the Sejm interpellation https://api.sejm.gov.pl/sejm/term10/interpellations/4305/body, which I did not read in full. Treat the claim as unverified.
- Vendors seen:
  - All for One BDO, an SAP add-on for S/4HANA and ECC 6.0 or higher, with XML exchange with BDO. Source: https://all-for-one.pl/en/offer/bdo. This is aimed at SAP enterprises, not small firms.
  - CARBOwaste BDO, an Excel add-on. Source: https://www.dudkowiak.com/environmental-law-in-poland/bdo-register-in-poland/ (search snippet). Its vendor was not confirmed.
  - A Microsoft marketplace listing (https://marketplace.microsoft.com/pl-pl/product/office/WA200009652) appeared, but I did not see its content.
- Complaints found concern the government BDO system, not the vendors:
  - Reporting module gaps (https://www.prawo.pl/samorzad/rejestr-bdo-problemy-z-modulem-sprawozdawczosci,497064.html).
  - Outage rules requiring paper records and entry within 30 days (https://www.money.pl/gielda/sejm-w-przypadku-awarii-bdo-ewidencja-odpadow-musi-byc-prowadzona-indywidualnie-6471065536841346a.html).
  - Many firms are unaware of the duty to register.
  - Report errors can lead to rejection or fines (https://amavat.pl/najczestsze-bledy-przy-skladaniu-sprawozdan-bdo-i-jak-ich-uniknac/).
- Complaints about any third-party vendor (app-store, G2, Capterra, Trustpilot, Reddit, forums): none found.
- Demand signal: many paid trainings for small firms on operating BDO themselves. Prices from PARP listings:
  - 490 PLN net for 6 hours, remote.
  - 690 PLN net for 6 hours.
  - 1,500 PLN for 8 hours.
  Source: https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/uslugi/drukuj-pdf?id=2926647 (one of several listings). Which price belongs to which listing was not verified.
- Momentum: unverified. No dates or news on vendor development, acquisition or shutdown were found.

## Pricing
No published software prices found. All for One is quoted per SAP project (unverified), so it is likely enterprise-priced. Subscription pricing for SME BDO tools: unverified.

## Fit gaps
- The SAP add-on serves only SAP customers.
- The Excel add-on is not a workflow or multi-user tool, and probably has no direct BDO sync (unverified).
- No evidence of a mobile, offline or SME-focused product with API sync, though absence in 5 searches is not proof.
- API coverage limits (unverified) would constrain any entrant as well.

## Opening
A cheap, simple BDO record-keeping and reporting helper for small firms looks open. The main risks are API coverage limits and the free official BDO UI.
