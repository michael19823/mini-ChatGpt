# Wave 1 results (2026-10-08)

18 of the 20 countries are complete. Guinea-Bissau and Liechtenstein are not: the last batch launch
was refused by the session's auto-mode permission check, so it waits for the user. Design, counting
rule and stop rule: `README.md` (committed before the run). Data: `results/leads.json` (every
checked candidate with both checks), `results/summary.json` (counts, shadow test, costs).

## Headline

- **14 new leads verified at 4 or more**: an Opus check scored each 4+ without refuting it, and an
  adversarial Opus challenge then failed to kill it and also scored it 4+. All 14 are new to the
  study (none matches the 4-25 ideas per country it already had).
- **Stop rule: passed** (5 or more needed).
- 13 more are **disputed** (first check 4+, challenge unclear or lower) and 4 were **refuted on
  challenge**. 78 candidates scored 3+ were left unchecked by the per-country caps.
- **Cost**: about $80 of useful agent work, so about $5.70 per verified lead. On top of that, about
  $24 went on runs that hit the search cap and returned junk, and about $22 on coordinating
  everything from one very long session. Input-side costs are exact; output is estimated and may
  run about 10% low.

## Less strict view (adopted after the run)

The counting rule above is strict: a lead must pass two Opus checks. Graded instead, so a second
check moves a lead between tiers and only a named killer removes it, the same checks give:

| Tier | Ideas | Rule |
|---|---|---|
| Strong | 14 | Both Opus checks scored it 4 or more (the verified leads below) |
| Likely | 13 | First Opus check 4+; the challenge found nothing that kills it but was unsure or lower |
| Possible | 93 | Checked, not refuted, scored 3: real duty, weaker market, payment or competition |
| Out | 50 | 23 refuted with a named product, rule or fact; 27 scored below 3 |

Strong plus likely makes **27 leads**, so the stop rule passes either way. All four tiers, and the 78
ideas the caps left unchecked, are in `LONGLIST.md`. Later runs use the graded rule.

## The 14 verified leads

| Country | Lead (buyer and duty) | First check / challenge | What the checks found |
|---|---|---|---|
| Brazil | Compliance suite for alarm-monitoring, remote-concierge and camera-monitoring firms entering Federal Police control (Lei 14.967/2024) | 5 / 5 | About 13,000 monitoring firms; adaptation deadline 9 Sep 2027; no compliance tool for the new regime found |
| Colombia | ICA registry and quarterly phytosanitary report back-office for Hass avocado growers and exporters (Res. 824/2022) | 5 / 5 | No private software prepares the quarterly report, GPX polygons or SISFITO uploads; the state systems only receive filings |
| Morocco | Accounts pack for co-ownership syndics: standard chart, budget and AGM annexes (decree 2.23.700) | 5 / 5 | Local syndic apps (Syndic Connect, Thaïs, K Syndic) are general tools; none shows the decree's chart and annexes |
| Armenia | Registry, contract-upload and e-invoice kit for small real estate brokers | 5 / 5 | Realtor bill passed first reading; registry from 2027; the state builds the filing platform, so the product sits on top |
| Colombia | Tuition-regime and EVI reporting service for private schools and nurseries | 5 / 4.5 | The free ministry EVI app is only the filing channel; no commercial helper found; 1,317 private schools in Bogotá alone |
| Brazil | AML compliance pack for jewellery shops (Siscoaf registration, policy, annual negative declaration) | 4 / 5 | No jeweller-specific AML software; heavy enforcement aimed at the sector |
| Zimbabwe | AML/KYC and sales-record kit for car dealers (FIU designated sector) | 5 / 4 | Sector rated highest risk; no register of dealers; only foreign or generic AML tools |
| Brazil | Customer, IMEI and origin register for used-phone repair and resale shops (municipal laws) | 4.5 / 4 | No product or portal; weak: paper registers are allowed and only some cities have the law |
| Brazil | DOF+ yard-stock reconciliation and Sinaflor tracing for small sawmills and timber yards | 4 / 4 | No commercial reconciliation software found in eight searches |
| Georgia | Waste records, annual reports and waste plans for small waste generators | 4 / 4 | Only large-project EIA consultancies; 240 plan violations in the first half of 2026 |
| Latvia | Foreign-guest declaration tool for guest houses, small hotels and short-term rentals | 4 / 4 | Paper form only; check-in vendors (Chekin and others) don't cover the Baltics |
| Hong Kong | Compliance kit for owners' corporations under the Building Management (Amendment) Ordinance 2024 | 4 / 4 | About 6,700 owners' corporations; no Hong Kong product found, only overseas HOA tools |
| Mozambique | ISPC quarterly return, invoice book and 5% withholding kit for micro-traders | 4 / 4 | Duty applies since 1 Jan 2026; certified invoicing software serves VAT firms only |
| Palestine | Sale-certificate register for gold and jewellery dealers | 4 / 4 | About 575 workshops and shops; only Saudi-oriented gold-shop software found |

## Disputed: worth a second look

Colombia: Ley Kiara pet-service registry (5 / unclear 4, found only by the medium-effort run), driving
schools (4 / 3), lodging RNT and Fontur filings (4 / 3), taxi companies under Decreto 1001/2026
(4 / 3). Hong Kong: private clinic licensing under Cap 633 (4 / 3), security company compliance
tracker (4 / unclear 4), fire-safety inspection tracker for owners' corporations (4 / 3). Armenia:
e-cash-register 2027 rollout service (4 / unclear 4, medium-effort run), AML kit for small notary
and accounting offices (4 / 3). Brazil: food-service good-practice manual and logs (4 / 3). Morocco:
co-operative annual declaration pack (4 / 3). Ghana: annual returns for churches and NGOs (4 / 3).
Zimbabwe: guest house registration and levy pack (4 / 3).

## By country

| Country | Tier | Candidates | Verified | Disputed | Left unchecked by cap | Cost |
|---|---|---|---|---|---|---|
| Brazil | large | 43 | 4 | 1 | 10 | $7.59 |
| Colombia | large | 72 | 2 | 4 | 17 | $9.44 |
| Morocco | large | 47 | 1 | 1 | 3 | $4.94 |
| Hong Kong | large | 40 | 1 | 3 | 1 | $5.75 |
| Ghana | large | 46 | 0 | 1 | 12 | $6.28 |
| Hungary | large | 64 | 0 | 0 | 2 | $6.46 |
| Austria | large | 38 | 0 | 0 | 0 | $4.56 |
| Armenia | medium | 47 | 1 | 2 | 5 | $5.77 |
| Zimbabwe | medium | 65 | 1 | 1 | 14 | $4.05 |
| Mozambique | medium | 32 | 1 | 0 | 2 | $2.90 |
| Georgia | medium | 35 | 1 | 0 | 2 | $3.50 |
| Latvia | medium | 31 | 1 | 0 | 6 | $3.00 |
| Palestine | medium | 28 | 1 | 0 | 0 | $3.16 |
| Costa Rica | medium | 32 | 0 | 0 | 3 | $3.69 |
| Suriname | medium | 29 | 0 | 0 | 1 | $3.33 |
| Palau | small | 18 | 0 | 0 | 0 | $1.26 |
| Monaco | small | 19 | 0 | 0 | 0 | $1.48 |
| Grenada | small | 22 | 0 | 0 | 0 | $1.68 |

Suriname's checks came back "unverifiable" 8 times out of 9 with working search: its rules and
registers are barely online. The three small countries produced nothing.

## Medium effort for discovery (pre-registered test)

| Country | Categories screened, high / medium | Candidates 3+, high / medium | Discovery cost, high / medium |
|---|---|---|---|
| Hungary | 35 / 36 | 8 / 8 | $1.69 / $1.35 |
| Colombia | 35 / 36 | 17 / 19 | $1.91 / $1.42 |
| Zimbabwe | 38 / 35 | 21 / 16 | $1.12 / $0.91 |
| Armenia | 34 / 38 | 8 / 8 | $1.18 / $0.93 |

Medium was about 22% cheaper and screened as many categories, but it missed 3 of the 4 verified
leads the high-effort run found (Colombia's avocado back-office, Zimbabwe's car dealers, Armenia's
brokers). By the rule fixed before the run it **fails**: keep `high` for discovery. Two runs of the
same country also find different things: the medium runs produced two disputed leads the high runs
missed. That is the skill's "one worker samples the space" point; a second independent pass adds
candidates, not just cost.

## Costs by stage (useful work)

| Stage | Cost |
|---|---|
| Discovery (Sonnet, high) | $24.79 |
| Opus first checks | $14.32 |
| Gap fill (Sonnet, high) | $9.93 |
| Adversarial challenges (Opus) | $8.53 |
| Sonnet checks | $8.21 |
| Medium-effort shadow discovery | $4.60 |
| Triage (Sonnet) | $4.20 |
| Escalations (Opus) | $3.08 |
| Critic (Sonnet) | $1.91 |
| **Useful total** | **$79.57** |

Per finished country: large $6.43, medium $3.68, small $1.47.

## What went wrong, and the fixes

1. **The per-turn web search cap.** Claude Code allows 200 WebSearch calls per turn, shared by
   every agent launched in it. The first launches ran past it; 90 of their 141 agents had most of their
   searches blocked and returned junk (about $24). The batch script (`batch_template.js`, `wave_state.py`)
   keeps each batch under 190 searches, has workers report blocked searches, stops new work when
   one does, and carries every clean result into the next batch. The skill now warns about the cap.
2. **Where the cost lands.** The runs drew on the account's included $250 cloud-session credit. I
   quoted dollar costs without checking where they would be charged; the skill now says to check
   the user's Usage page first.
3. **Coordination cost.** Running the whole job from one long session cost about $22, because every
   status turn re-read a context of several hundred thousand tokens. Run the full job from a fresh
   session.
4. **Slim checker agent.** From batch 2 the checks ran on the `web-researcher` agent (search and
   fetch only): about 6K tokens to start instead of about 48K, roughly half the sub-agent tokens per
   batch. Rubric and budgets were unchanged.
5. **Resume only reuses an unchanged prefix of calls**, so after editing the script, finished
   results were carried forward explicitly instead.

## Full-run estimate

For the remaining 154 accessible countries (45 large, 76 medium, 33 small), at this wave's measured
cost and yield per tier:

- **Agent cost: about $620.** Expected yield: **about 108 verified leads** (1.14 per large and 0.75
  per medium country). Small countries yielded nothing here, so they could get a minimal pass or
  be skipped, saving about $50. Coordination from a fresh session adds a little.
- **Time is the binding constraint.** These 18 countries took about 2,200 searches. At 190 per
  turn, the full run is about 100 batches. At about 25 minutes each, that is roughly 40 hours in
  one session, or about 8 hours across 5 sessions in parallel.
- Raising the per-country check caps would check the 78 candidates left over here (and their
  equivalents elsewhere) at about $0.25-0.40 each.
