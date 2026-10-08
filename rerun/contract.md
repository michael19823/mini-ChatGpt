<context>
Today's date is 2026-10-08. Your training data ends well before this date. Laws, licences, portals,
deadlines, operator counts and software products change often, so check every one of them with
search before you rely on it, even when you feel sure. Things that can't change need no check.

Overall goal: find software opportunities a solo founder could build and sell, in "quiet"
regulated industries: small, often family-run businesses that rarely post online but must keep
registers or file recurring reports with an authority. The study covers about 200 countries, one
research agent per country. You cover exactly one country, named in <item> at the end.
Your report is read by an orchestrator who ranks all countries together, so follow the scoring and
the format exactly. Honest null results ("nothing viable here") are useful. Invented or
unchecked leads are harmful.
</context>

<task>
Objective: for your country, screen quiet regulated industries and report the 2-5 strongest
software opportunities, or say clearly that none is viable.
Done means: every section in <output> is filled, every opportunity has passed the three checks in
<method> step 4, and every score has its sub-scores.
Apply every rule below to every candidate, not just the first.
Read first:
1. /home/user/mini-ChatGpt/rerun/inputs/brief.md, sections "Opportunity Quality Criteria", "Avoid
   These Traps", "Validation Standard" and "Required Output per Country" (the Opportunity
   template). Skip the rest; this contract replaces it.
2. Your country's earlier general report, path in <item>. Skim it only so you don't repeat its
   opportunities.
Do not: read any other file under /home/user/mini-ChatGpt; edit any file except your output file;
commit or push; use GitHub tools; launch sub-agents. Do the work yourself.
</task>

<contract version="offline_v2">
Quiet industry: most of these hold: operators are small, often owner-run and older; little web
presence (no forums, few vendor blogs, no SaaS review pages); regulated (licence, mandatory
register, or recurring reports to an authority, utility, police, vet or municipality); the work is
still done on paper, by phone or fax, at a counter, or through a clerk, accountant or association.
Seed groups (screen those that apply, then add at least 3 groups specific to your country found
through licensing registers): households as employers (domestic workers, carers); dealer registers
reported to police (scrap metal, second-hand goods, pawnbrokers, gold buyers, used car parts);
animals (livestock traders, animal transport, small abattoirs, beekeepers, vets' medicine records);
field trades filing to a local body (well drillers, septic operators, lift and boiler inspectors,
small water systems, pesticide applicators); farm labour and inputs (labour contractors,
fertiliser and pesticide sales registers); community and religious bodies (cemeteries, burial
societies, halal and kosher supervision); informal transport and street trade (minibus, taxi,
moto-taxi, market traders, money changers); small licensed premises with inspections (tattoo
studios, driving instructors, childminders, small food producers, hunting outfitters).
Scoring: use the brief's 10 criteria, each 1-10, plus these rules. Distribution must name a
concrete offline channel (association, supplier, inspector, receiving body, accountant network,
trade fair, outreach from a public register); without one, distribution is 3 or lower.
Willingness to pay: say whether the buyer would pay for software or only for a done-for-you
service. Founder access: say whether a non-local solo founder could sell this. The overall score
must not exceed the average of the 10 sub-scores by more than 0.5; if you think it should, give
the reason in one line.
Sources: prefer the official gazette, the regulator's site and licensing registers, then trade
associations and vendor sites, then press. Avoid aggregators, AI-written summaries and undated
pages. Count the market from a register or official statistic when you can, with the source.
Uncertainty: mark anything you could not confirm as "unverified" or "estimate". Never invent a
fact, number, product name or URL. If a fact can't be found within budget, write "not found" and
list what you searched.
</contract>

<method>
1. Search the regulator first, in the local language first, then English: licensing registers,
   official gazettes and new rules for 2024-2027, enforcement (fines, inspection campaigns),
   official forms (still on paper, post or fax?), trade associations, suppliers to the industry.
   Use short queries. Use extended search mode for niche or local-language queries.
2. Read the key pages, not just search snippets: open the law or official guidance, the register,
   and every vendor page you rely on with WebFetch. If WebFetch fails for a site, say so in the
   search log and use the search results.
3. Shortlist candidates from the screen.
4. Before you score any candidate 4 or higher, run all three checks and record them in the report:
   a. Competitor check: at least two searches in the local language and one in English of the form
      "<software/program/app> + <the obligation or register name> + <industry>" (for example
      "software ourivesaria registo PJ"). Open the top vendor results. Also check ERP/accounting
      add-ons, the authority's own free portal or app, associations' free tools, and accountants
      or consultants who do it as a service. If a product already does the core job, apply the
      kill condition and move the idea to "Rejected".
   b. Duty check: open the legal text and quote who must do what, by when, and the penalty. Make
      sure the duty falls on the buyer you name.
   c. Jurisdiction and currency check: confirm every law, regulation and licence you cite belongs
      to your country (gazette name, issuing body, URL domain) and is the version in force today,
      not superseded.
5. Budget: large market 25-35 WebSearch calls, medium 15-25, small or microstate 8-15, plus up to
   20 WebFetch calls. Use at least the minimum for your market size unless the market is
   inaccessible (sanctions, conflict, closed economy): then document why with sources and stop.
   If a search is refused, stop searching and write up what you have, saying so.
</method>

<output>
Write Markdown to the output path in <item>, with these sections in this order:
1. "## Quiet industries screened": a table with columns industry | obligation | evidence it's
   offline | rough count (with source) | verdict | one-line reason. Aim for 10-15 rows.
2. "## Opportunities": the 2-5 strongest, each in the brief's Opportunity template with
   `**Score:** X/10` and Sources, plus these fields after "Existing solutions": **Offline
   evidence**, **Offline channel**, **Market count** (with source), **Checks** (what the competitor,
   duty and jurisdiction checks found, with the queries you ran), and **Sub-scores** (all 10, then
   the average). If nothing is viable, say so plainly and give the best near-miss.
3. "## Rejected": ideas that looked good but were killed, with the product, substitute or fact that
   killed them.
4. "## Search log": the number of WebSearch and WebFetch calls you made, every competitor query
   you ran, and three lines on which query patterns worked here.
Then reply with only this (under 200 words): one line per opportunity,
`Country | Name | buyer | trigger | main competitor or substitute | market count | score`, then one
line with the rejected ideas, then one line: `searches: N, fetches: M`.
</output>

<before_returning>
Check: every table row and opportunity follows the contract; every opportunity scored 4+ shows all
three checks with their queries; every law cited is confirmed for your country and current; every
number has a source or an "unverified"/"estimate" label; each score is within 0.5 of its
sub-score average or explains why; the search log is filled; you wrote only your one file.
</before_returning>

<finish>
Keep working until every section is complete and checked, then stop and reply. Don't add sections
or files that weren't asked for; mention extra ideas in one line under "Rejected" instead.
Think each candidate through before you score it.
</finish>
