# Moldova: Offline-Industries Pass

**Status: incomplete.** I ran 2 of the 20 WebSearch calls in the budget. On the third call the tool replied "You've hit your usage limit". The instructions say to stop when a search is refused and write up what I have, so I did. Only two findings are backed by a search. Everything else in this file is screening logic from general knowledge, marked **unverified**. Treat every verdict as a hypothesis to check, not a finding.

Context, from the existing country report (`research/countries/moldova.md`): the market is about 2.4M people, the language is Romanian (Russian helps), state systems need MSign/MPass e-signatures, and the overall verdict was "no standout standalone opportunity". This pass does not change that verdict.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Scrap metal (ferrous / non-ferrous) collectors | Licence plus an Environmental Agency authorisation. Licensees must keep records of metal waste on statistical forms approved by the National Bureau of Statistics (BNS) | Licence conditions refer to BNS statistical forms. These look like periodic paper or Excel forms (format **unverified**) | Unknown. The sector includes Metalferos SA (state-registered since 1995) and an unknown number of small licensees (**unverified**) | Watch / weak | The obligation is confirmed, but the market looks concentrated around a few licensees. The reporting cadence and the existence of a police register are **unverified** |
| Pawnshops (case de amanet) | Licensed and supervised by CNPF. CNPF says it will revise the pawnshop regulatory framework in the coming years | Small sector supervised by CNPF. Reporting format **unverified** | Unknown (**unverified**). Probably a few dozen to low hundreds | Watch | A regulatory revision is announced, which could be a trigger once dates are published. Count and reporting format not found |
| Beekeepers | Apiary registration with ANSA, veterinary records (**unverified**) | Search refused | Unknown | Not screened | Search refused |
| Livestock keepers / traders | Animal registration within 15 days (from the country report), ANSA identification | The state system already exists (country report) | Fragmented smallholders | Reject | The state provides the tool. Buyers are smallholders with low WTP |
| Households employing domestic workers | Individual employers must register workers and pay contributions (**unverified**) | Not checked | Unknown | Not screened | Search refused. A large informal sector is likely |
| Minibus (rutiere) operators | ANTA route licences, municipal route contracts (**unverified**) | Not checked | Unknown | Not screened | Search refused |
| Market traders / street trade | Notification or authorisation from the primărie, cash-register rules (**unverified**) | Not checked | Unknown | Not screened | Search refused |
| Currency exchange offices | BNM licence, AML reporting (**unverified**) | Bank-grade regulator, probably reported electronically | Unknown | Likely reject | BNM-supervised entities usually already have vendor software (**unverified**) |
| Small wineries / wine producers (country-specific) | Vineyard and wine register, ONVV, excise for alcohol (**unverified**) | Not checked | Unknown | Not screened | The country report already rejects excise traceability as enterprise / state-vendor territory |
| Funeral services and cemeteries | Municipal regulation (**unverified**) | Not checked | Unknown | Not screened | Search refused |

## 2. Strongest opportunities

**None.** With 2 searches I can't meet the validation standard (buyer, count, substitute, offline channel) for any quiet industry in Moldova. I won't invent an Opportunity block.

The leads most worth a future pass:
- **Scrap-metal licensee records.** Confirm the BNS form, its cadence (monthly or quarterly) and the number of licensees. The licence register is on the public licensing portal (**unverified**). The likely substitute is an accountant filling in the BNS form.
- **Pawnshops.** Get the CNPF list of licensed pawnshops and the date of the announced framework revision. The likely substitute is CNPF's own reporting templates plus an accountant.

## 3. Rejected

- **Livestock / animal registration:** the state system already exists, the buyers are fragmented smallholders and willingness to pay is low (consistent with the country report).
- **Excise / small-winery traceability:** state-procured system and enterprise vendors (from the country report).

## 4. Method notes

- Romanian regulator-first queries worked. For scrap metal they returned licence conditions straight from mtender.gov.md tender documents and gov.md registers. CNPF and BNM documents came up for pawnshops but gave no counts.
- In Moldova, good sources for licence conditions seem to be `storage.mtender.gov.md` PDFs and state licensing documents.
- The pass ended after 2 searches because the search tool hit its usage limit. A rerun should start with: "registrul licențelor case de amanet CNPF", "formular statistic deșeuri metale feroase BNS trimestrial", "registrul apicol ANSA", "angajator persoană fizică lucrător casnic CNAS declarație".

## Sources

- https://old.app.gov.md/storage/upload/heritage/heritageregister/tmp/phpmFOCEd/SA%20Metalferos%20RO%20(1).pdf
- https://storage.mtender.gov.md/get/b233e436-fc09-4eab-9ecf-b93e180953e7-1751541443981 (licence conditions for metal-waste collection, as summarised in search results)
- https://www.cnpf.md/storage/files/files/site_raport_transparenta%202024(2).pdf (CNPF plans to revise the pawnshop framework, as summarised in search results)
