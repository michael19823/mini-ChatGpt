# Offline-industries pass: instructions for research agents

The first round of this study (199 country reports) found pain mostly where people *write about
it online*: forum complaints, news, vendor blogs. Industries whose operators rarely post online
were almost absent. Scrap dealers, second-hand dealers, livestock traders, beekeepers, well
drillers, tattoo studios, street traders, minibus operators and household employers had between
0 and 3 mentions across 199 reports, and none reached the ranking.

This pass looks only for those **quiet industries**. It finds them through what the *regulator*
publishes, not through what operators complain about. Today is 2026-10-05.

Your prompt names your country, your output file (under `research/offline/`) and the existing
country report.

## 1. Read first

1. `research/brief.md`: the scoring criteria, the traps and the Opportunity template. Everything
   still applies.
2. Your country's existing report in `research/countries/` (skim). Don't re-report its
   opportunities.

## 2. What counts as a quiet industry

An industry qualifies if **most** of these hold:

- its operators are small, often family-run or owner-operated, and often older;
- it has little web presence: no active forums, few vendor blogs, no SaaS review pages;
- it is regulated: it holds a licence, keeps a mandatory register, or files recurring reports to an
  authority, utility, police, vet or municipality;
- the work is still done on paper, by phone, by fax, at a counter, or through a clerk, an
  accountant or an association.

### Seed list

Screen these groups, keeping whichever ones apply in your country. Then add at least
3 groups specific to your country, which you find through licensing registers (section 3).

1. **Households as employers:** domestic workers, live-in caregivers, nannies (payslips, social
   security, pension and severance funds, visas, work permits).
2. **Dealer registers reported to police:** scrap metal, second-hand goods, pawnbrokers, gold
   buyers, antiques, used car parts.
3. **Animals:** livestock traders and auctions, animal transport journey logs, small abattoirs and
   butchers, beekeepers, farriers and horse passports, kennels and breeders, veterinary medicine
   and antimicrobial records.
4. **Field trades that file to a local body:** backflow testers, well drillers, septic and
   portable-toilet operators, chimney sweeps, boiler and lift inspectors, small water-system
   operators, pesticide applicators, aerial sprayers. These follow the "one job, many receiving
   authorities" pattern of the brief's Florida grease benchmark.
5. **Agricultural labour and inputs:** seasonal-labour contractors, farm workers' housing,
   fertiliser and pesticide sales registers, seed certification.
6. **Community and religious bodies:** cemeteries, burial societies, monument makers, kosher and
   halal supervision, places of worship that act as charities or employers.
7. **Informal transport and street trade:** minibus, taxi and moto-taxi operators, market traders,
   street vendors, money changers.
8. **Small licensed premises with inspections:** tattoo and piercing studios, barbers, driving
   instructors, childminders, small food producers selling at markets, hunting outfitters, game
   dealers, taxidermists, fishermen selling their own catch.

## 3. How to search: regulator first

Quiet industries leave few traces in blogs, but they leave plenty in official records. Use these
query patterns, **in the local language first**:

| Source | What it tells you | Example queries |
|---|---|---|
| Licensing registers and public lists | How many operators exist and where | "register of licensed scrap metal dealers", "registro de chatarreros", "רשם עוסקים ב..." |
| Official gazettes and new regulations, 2024–2027 | The trigger and its dates | "<industry> new obligation 2026", "<industry> regulation amended register" |
| Enforcement: fines, prosecutions, inspection campaigns | Proof that the obligation is enforced and painful | "<industry> fined failing to keep register", "inspection campaign <industry> 2025" |
| Official forms | The exact workflow and whether it is still on paper | "<form name> PDF", "submit by post / fax / in person", "carnet", "libro de registro" |
| Trade associations, trade magazines, newsletters | Pain stated by insiders, plus the offline channel | "<industry> association members new reporting requirement" |
| Suppliers to the industry | Who already reaches these operators | "<industry> equipment supplier", "stationery register book for <industry>" |
| Court and tribunal cases, ombudsman reports | Cost of getting it wrong | "<industry> tribunal register failure" |
| Accountants, labour lawyers, notaries | The intermediary who currently does the work | "accountant for <industry>", "<obligation> service fee" |

Rules:

- Budget: **at most 45 WebSearch calls** for your country. The session cap is 200 and is shared by
  4 agents. Use extended mode for niche or local-language queries. WebFetch is blocked: don't use
  it. Don't use GitHub tools. If a search is refused, stop and write up what you have.
- Do real competitor diligence. In quiet industries the substitute is usually not software: it's a
  paper register sold by a stationer, a free form from the association, an accountant, or the
  receiving authority's own portal. Name it.
- Count the market from a register or official statistic whenever you can, and give the source.
- Never invent facts, names, numbers or URLs. Mark anything you can't verify as "unverified" or
  "estimate".
- Reject honestly. Many quiet industries are quiet because there's no money in them.

## 4. Extra scoring rules for this pass

Score with the brief's 10 criteria, and apply these adjustments:

- **Distribution** must name a concrete *offline* channel: an association, supplier, inspector,
  receiving body, accountant network, trade fair, or WhatsApp or phone outreach from a public
  register. If you can't name one, distribution is 3 or lower.
- **Willingness to pay:** say whether the buyer would pay for software, or only for a
  done-for-you service. Score a service-plus-software model honestly.
- **Founder access:** say whether a non-local solo founder could realistically sell this. If it
  needs a local, say so. For Israel, assume the founder is local.

## 5. Write the report

Write Markdown to your output file:

1. **Quiet industries screened:** a table with columns industry | obligation | evidence it's
   offline | rough count (with source) | verdict | one-line reason. Aim for 10–15 rows.
2. **The 2–5 strongest opportunities**, using the brief's exact Opportunity template, with
   `**Score:** X/10` and Sources. Add three fields after "Existing solutions":
   - **Offline evidence:** why this industry is under-served online (paper forms, counter
     filing, no software listings, and so on);
   - **Offline channel:** how to reach the first 10 customers without SEO;
   - **Market count:** the number of obliged businesses and its source.
3. **Rejected:** ideas that looked good but were killed, with the reason or the substitute.
4. **Method notes:** which query patterns worked in this country and which didn't. Keep it short.

Don't commit or push. Write only your one file.

## 6. Final reply to the orchestrator

Compact, at most 300 words. One line per opportunity:

`Country | Name | industry | buyer | trigger | substitute/gap | offline channel | market count | score`

Then one line listing the rejected ideas, and one line on the method notes.
