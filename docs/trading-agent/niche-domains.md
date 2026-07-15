# Niche Expertise Domains for News-Reactive Trading Agents

> **Status:** experimental research / paper-trading only. Nothing here is investment
> advice. Tickers and ETF holdings drift over time — treat this as a starting map, not
> a live data source. Verify anything before acting on it.

## 1. The core idea (and why niche is the right bet)

You are right that you cannot out-run industrial trading systems on **speed** or on the
**mega-cap, heavily-covered names** (AAPL, NVDA, SPY). Those markets are efficient to
the millisecond. Your edge, if you have one, is different:

1. **Under-covered corners.** Sectors that a handful of specialists follow but that most
   generalist funds and headline algos ignore. Less capital watching = slower, sloppier
   price discovery = more room for a *reasoning* agent to add value on a horizon of
   minutes-to-days rather than microseconds.
2. **Discrete, parseable catalysts.** The best niches move on *events you can read in
   plain text*: a regulator's decision, a government contract award, a clinical readout,
   a weather forecast, an export ban, a canal closure. An LLM agent is genuinely good at
   reading one of these and reasoning "this is bullish for X, bearish for Y." That is a
   very different game from predicting AAPL's next tick.
3. **Concentrated, thematic tickers.** In a niche, the *entire investable universe* is
   often 5–15 stocks plus 1–2 ETFs. An agent can hold the whole map in its head.

### What makes a domain a *good* fit for a news agent

Rate every candidate domain on these axes (this doc does it per-domain below):

| Axis | Good for an agent | Bad for an agent |
|---|---|---|
| **Catalyst discreteness** | One document flips the thesis (FDA approval, export ban) | Slow macro drift, sentiment |
| **Signal-to-noise** | Few, high-impact events | Constant chatter, rumor-driven |
| **Direction legibility** | "Ban on X → good for domestic producer of X" is unambiguous | Second-order, ambiguous |
| **Universe size** | 5–15 named tickers you can enumerate | Hundreds of look-alikes |
| **Liquidity** | Tradeable ETFs + mid-caps | Micro-caps that gap on no volume |
| **Data availability** | Public regulatory/gov/weather feeds | Paywalled, proprietary |

The domains below are ordered roughly from **most agent-tractable** (clean catalysts,
clear direction) to **noisier**.

---

## 2. The niche domains

Each domain lists: why it's under-followed, the **news catalysts** to watch, the
**direction logic**, the **stocks/ETFs**, and an **agent-fit** rating.

### 2.1 Uranium & the nuclear fuel cycle  ⭐ agent-fit: HIGH

- **Why niche:** Left for dead after Fukushima (2011); only recently back in favor with
  the AI-datacenter power story. Followed by a small, almost cult-like specialist crowd.
- **Catalysts:** Reactor restart/approval announcements (Japan, Europe); government
  nuclear policy (loan guarantees, SMR funding); supply shocks from **Kazatomprom**
  (world's largest producer) production cuts; Russian enrichment sanctions; utility
  long-term contracting cycles; SMR design certifications (NRC).
- **Direction logic:** Supply cut or restart/new-build announcement → bullish uranium
  spot → bullish miners. Enrichment sanctions → bullish Western enrichers (LEU).
- **Tickers:**
  - Miners/producers: **CCJ** (Cameco), **UEC**, **DNN** (Denison), **NXE** (NexGen),
    **UUUU** (Energy Fuels), **URG**.
  - Enrichment/fuel: **LEU** (Centrus).
  - SMR / advanced reactors: **SMR** (NuScale), **OKLO**, **NNE** (Nano Nuclear).
  - ETFs: **URA**, **URNM**, **URNJ** (juniors), **NLR** (broad nuclear).

### 2.2 Rare earths & critical minerals  ⭐ agent-fit: HIGH

- **Why niche:** Small universe, geopolitically loaded, dominated by one country's
  supply chain (China ~85% of processing). Trades hard on trade-policy headlines.
- **Catalysts:** China export controls/quotas on rare earths, gallium, germanium,
  antimony, graphite; U.S. **DoD / DPA** funding and offtake contracts; new
  processing-facility approvals; tariff actions.
- **Direction logic:** China restricts export of mineral X → bullish any *ex-China*
  producer of X (scarcity + strategic premium).
- **Tickers:** **MP** (MP Materials — the U.S. bellwether), **TMC** (deep-sea nodules),
  **LYSDY/Lynas** (ADR, ex-China processor), **UUUU** (also rare earths), **NB**
  (NioCorp), **ARRT/USAR** (U.S. rare earth names come and go — verify current listing).
  - ETFs: **REMX** (rare earth/strategic metals), **CRIT/critical-minerals baskets**.

### 2.3 Shipping — tankers, dry bulk, containers  ⭐ agent-fit: HIGH

- **Why niche:** Cyclical, low-glamour, driven by rates that most equity investors never
  look at. Direction is unusually legible from a single headline.
- **Catalysts:** **Baltic Dry Index** moves; canal disruptions (**Suez / Red Sea**
  attacks, **Panama Canal** drought/draft restrictions); OPEC output decisions (ton-mile
  demand for crude tankers); sanctions creating "shadow fleet" / rerouting; port
  congestion; new IMO environmental rules scrapping old tonnage.
- **Direction logic:** Red Sea rerouting → longer voyages → higher rates → bullish
  tanker & container names. Panama drought → rerouting → bullish. OPEC cut → bearish
  crude tankers (less oil to move).
- **Tickers:**
  - Containers: **ZIM**, **DAC** (Danaos), **GSL**.
  - Dry bulk: **GNK** (Genco), **SBLK** (Star Bulk), **GOGL**, **EGLE**.
  - Crude/product tankers: **FRO** (Frontline), **STNG** (Scorpio Tankers), **INSW**,
    **DHT**, **TNK**, **NAT**, **TRMD**.
  - LNG/LPG carriers: **FLNG**, **GLNG**, **LPG**.
  - ETFs: **BOAT** (SonicShares Global Shipping), **SEA**.

### 2.4 Agriculture, grains & fertilizer  ⭐ agent-fit: HIGH

- **Why niche:** Weather- and policy-driven; the fundamental data (USDA reports) is
  public, scheduled, and highly market-moving — ideal for an agent.
- **Catalysts:** USDA **WASDE** and crop-progress reports (scheduled!); droughts,
  floods, frost; **export bans** (e.g., a country halting rice/wheat exports); Black Sea
  grain-corridor status; potash/phosphate supply (Belarus/Russia sanctions);
  ENSO/El Niño–La Niña forecasts; fertilizer plant outages.
- **Direction logic:** Drought in a key exporter → lower supply → higher grain futures →
  bullish grain ETFs and farm-input names. Export ban → bullish competing exporters.
- **Tickers:**
  - Fertilizer: **NTR** (Nutrien), **MOS** (Mosaic), **CF** (nitrogen), **IPI**
    (Intrepid Potash), **UAN**.
  - Ag equipment / processing: **DE**, **AGCO**, **ADM**, **BG** (Bunge).
  - Commodity ETFs: **DBA** (broad ag), **MOO** (agribusiness), **WEAT**, **CORN**,
    **SOYB**, **CANE**.

### 2.5 Biotech catalysts — FDA / clinical readouts  ⭐ agent-fit: HIGH (but risky)

- **Why niche:** Binary, calendar-driven events. Each small/mid biotech is its own
  micro-market. The *direction* on a headline is legible; the *magnitude* is violent
  (±50–80% overnight).
- **Catalysts:** **PDUFA dates** (FDA decision deadlines — scheduled), Phase 2/3 trial
  **top-line readouts**, FDA **Advisory Committee (AdCom)** votes, Complete Response
  Letters (CRL), clinical holds, breakthrough-therapy designations.
- **Direction logic:** Positive Phase 3 / approval → bullish that name (and sometimes
  peers in the same modality); CRL / trial failure → sharply bearish.
- **Sub-niches with cleaner narratives:** radiopharmaceuticals (**LNTH**, **NNOX**),
  gene/cell therapy, obesity/GLP-1 adjacencies, CNS/neuro.
- **Tickers:** individual names rotate constantly — the durable play is baskets:
  - ETFs: **XBI** (equal-weight small/mid biotech — the classic catalyst basket),
    **IBB** (larger), **LABU/LABD** (3x bull/bear — dangerous), **ARKG** (genomics).
- **⚠️ Caveat:** highest reward *and* highest risk; position-size tiny in a paper
  system and treat single-name binary bets as lottery tickets, not a strategy core.

### 2.6 Defense, drones & space  ⭐ agent-fit: HIGH

- **Why niche (the small-cap part):** Primes (LMT, RTX) are well-covered, but the
  **small-cap drone/space/autonomy** layer moves hard on contracts and conflict news
  and is under-modeled.
- **Catalysts:** Contract awards (DoD, foreign military sales); conflict escalation /
  geopolitical flashpoints; defense budget / NDAA news; export approvals; launch
  successes/failures; anti-drone (counter-UAS) mandates.
- **Direction logic:** Conflict escalation → bullish munitions/drones; big contract
  award → bullish the awardee.
- **Tickers:**
  - Drones / autonomy: **AVAV** (AeroVironment), **KTOS** (Kratos), **RCAT** (Red Cat),
    **ONDS**, **UMAC**.
  - Space / launch: **RKLB** (Rocket Lab), **LUNR** (Intuitive Machines), **ASTS**
    (AST SpaceMobile), **PL** (Planet), **RDW** (Redwire).
  - Munitions / other: **LMT**, **RTX**, **GD**, **LHX**, **HII**, **POWW**.
  - ETFs: **ITA**, **PPA** (defense), **ARKX**, **UFO** (space), **SHLD**, **DFEN** (3x).

### 2.7 Cannabis  ⭐ agent-fit: MEDIUM-HIGH (pure regulatory catalyst)

- **Why niche:** Almost entirely a *policy* trade — fundamentals matter less than the
  next regulatory headline. Beaten down, hated, and coiled to move on news.
- **Catalysts:** DEA **rescheduling** (Schedule III) progress; **SAFE(R) Banking Act**
  legislative movement; state legalization votes; federal enforcement guidance.
- **Direction logic:** Any de-scheduling / banking-access progress → sharply bullish the
  whole complex.
- **Tickers:** **TLRY**, **CGC** (Canopy), **CRON**, **GTBIF** (Green Thumb — U.S. MSO),
  **CURLF** (Curaleaf), **TCNNF** (Trulieve), **VFF**.
  - ETFs: **MSOS** (U.S. multi-state operators — the key one), **MJ**, **YOLO**.

### 2.8 Energy metals — lithium, copper, coal  ⭐ agent-fit: MEDIUM

- **Why niche:** Battery-metal names swing on EV-demand and China-policy headlines;
  metallurgical coal is an unloved, contract-driven cyclical.
- **Catalysts:** EV subsidy / tariff changes; lithium price (spodumene) moves; mine
  supply cuts (Albemarle/SQM curtailments); China stimulus (copper demand); steel
  production data (met coal).
- **Direction logic:** Lithium supply cut or EV-demand upgrade → bullish lithium miners.
  China stimulus → bullish copper.
- **Tickers:**
  - Lithium: **ALB** (Albemarle), **SQM**, **LAC** (Lithium Americas), **PLL** (Piedmont).
  - Copper: **FCX** (Freeport), **SCCO**, **TECK**, **ERO**.
  - Met/thermal coal: **BTU** (Peabody), **AMR** (Alpha Met), **HCC** (Warrior),
    **ARCH/CEIX** (verify current tickers).
  - ETFs: **LIT** (lithium/battery), **BATT**, **COPX** (copper miners), **KOL** (coal —
    check if still trading).

### 2.9 Precious & other metals miners  ⭐ agent-fit: MEDIUM

- **Why niche:** Junior/mid-tier miners are high-beta plays on the underlying metal and
  react to macro headlines faster than the metal itself.
- **Catalysts:** Fed policy / real-rate moves; geopolitical risk-off; central-bank gold
  buying; mine disruptions; silver's industrial (solar) demand.
- **Tickers:** **NEM** (Newmont), **AEM**, **GOLD** (Barrick), **WPM**, **FNV**;
  silver **PAAS**, **AG**, **HL**.
  - ETFs: **GDX** (gold miners), **GDXJ** (juniors), **SIL** (silver miners), **SILJ**.

### 2.10 Natural gas & LNG  ⭐ agent-fit: MEDIUM

- **Why niche:** Weather- and export-driven; a distinct crowd from oil traders.
- **Catalysts:** Weather forecasts (heating/cooling degree days); **EIA** storage report
  (scheduled, weekly); LNG **export-terminal approvals** (DOE permits) and outages
  (e.g., Freeport); European gas-supply/storage news.
- **Direction logic:** Cold-snap forecast or export approval → bullish gas producers.
- **Tickers:** **LNG** (Cheniere), **EQT**, **AR** (Antero), **RRC** (Range), **CTRA**,
  **EXE** (Expand Energy). ETFs: **UNG** (gas futures), **FCG** (gas producers).

### 2.11 Water  ⭐ agent-fit: MEDIUM

- **Why niche:** Slow-moving, thematic, few pure-plays — but drought/infrastructure
  headlines give occasional discrete catalysts.
- **Catalysts:** Droughts (U.S. West), water-infrastructure bills, PFAS regulation
  (drives treatment demand), utility rate cases.
- **Tickers:** **XYL** (Xylem), **AWK** (American Water), **WTRG**, **ECL** (Ecolab),
  **PNR**, **BMI**. ETFs: **PHO**, **FIW**, **CGW**.

### 2.12 Pandemic / infectious-disease surveillance  ⭐ agent-fit: MEDIUM (event-spiky)

- **Why niche:** Dormant most of the time, then violently reactive to outbreak news
  (COVID, mpox, **H5N1 bird flu**). A "sleeper" agent that wakes on outbreak headlines.
- **Catalysts:** WHO/CDC outbreak declarations; case-count escalations; vaccine/antiviral
  authorizations; government stockpile orders.
- **Direction logic:** Outbreak escalation → bullish vaccine makers, diagnostics, PPE;
  broad risk-off if severe.
- **Tickers:** **MRNA**, **BNTX**, **NVAX**, **PFE**, **GILD**; diagnostics **QDEL**,
  **DGX**, **LH**; bird-flu-specific vaccine names shift with each outbreak (verify).

### 2.13 Grid, power & electrification  ⭐ agent-fit: MEDIUM (getting crowded)

- **Why it's here:** The AI-datacenter-power story made this hot, so it's *less* niche
  than it was — but transformer/grid-equipment supply news still moves specific names.
- **Catalysts:** Datacenter power-demand announcements; utility capex plans; transformer
  shortage news; interconnection-queue reform; nuclear/SMR datacenter deals.
- **Tickers:** **GEV** (GE Vernova), **VRT** (Vertiv), **ETN**, **POWL**, **PWR**,
  **NRG**, **VST**, **CEG** (Constellation — nuclear + datacenter). ETFs: **GRID**, **XLU**.

---

## 3. Quick reference: domain → primary catalyst → core ticker(s)

| Domain | Primary news feed to watch | Cleanest single ticker | Basket ETF |
|---|---|---|---|
| Uranium / nuclear | Reactor restarts, Kazatomprom, NRC/SMR | CCJ | URA / URNM |
| Rare earths | China export controls, DoD contracts | MP | REMX |
| Shipping | Baltic Dry, Suez/Panama, OPEC | ZIM / FRO | BOAT |
| Ag & fertilizer | USDA WASDE, droughts, export bans | NTR | DBA / MOO |
| Biotech catalysts | PDUFA dates, trial readouts, AdCom | (basket) | XBI |
| Defense/drones/space | Contract awards, conflict, NDAA | KTOS / RKLB | ITA / ARKX |
| Cannabis | DEA rescheduling, SAFE Banking | GTBIF | MSOS |
| Lithium/copper/coal | EV policy, China stimulus, steel data | ALB / FCX | LIT / COPX |
| Precious miners | Fed/real rates, risk-off | NEM | GDX / GDXJ |
| Nat gas / LNG | Weather, EIA storage, export permits | LNG | UNG / FCG |
| Water | Drought, PFAS rules, infra bills | XYL | PHO / FIW |
| Pandemic/outbreak | WHO/CDC, H5N1, stockpile orders | MRNA | (none clean) |
| Grid/power | Datacenter demand, transformer supply | GEV | GRID |

---

## 4. How this maps onto your agent architecture

Each domain above becomes one **specialist agent** with:

1. **A watchlist** — the enumerated tickers for that domain.
2. **A catalyst taxonomy** — the specific event types (from "Catalysts" above), each
   with a direction rule (bullish/bearish for which tickers).
3. **A news source set** — tuned to that domain (see feasibility below).
4. **A confidence + rationale output** — the agent reads a headline, classifies it
   against its taxonomy, and emits `{ticker, action, confidence, rationale}`.

A lightweight **router/orchestrator** fans an incoming news item to whichever
specialist(s) claim relevance (by keyword/embedding match to their domain), then logs
the paper trade. This fits naturally on top of your existing LLM-adapter backend — each
"agent" is a system-prompt + tool-config specialization of the same model call.

### Data feasibility (what an experimental agent can actually get, mostly free)

- **General financial news:** free RSS from Yahoo Finance, MarketWatch, Seeking Alpha;
  NewsAPI (free tier); Finnhub / Alpha Vantage (free news+sentiment endpoints).
- **Scheduled catalysts (gold for an agent):**
  - FDA/biotech: PDUFA calendars, FDA press-announcement RSS.
  - USDA WASDE / crop reports: fixed public schedule + release feeds.
  - EIA nat-gas storage: weekly, scheduled.
  - Government contracts: **SAM.gov** / DoD contract-announcement feeds.
  - SEC filings: **EDGAR** full-text search + RSS (8-Ks carry material events).
- **Domain-specific:** Baltic Exchange (dry-bulk rates — some paywalled), NOAA/NWS
  weather (free), regulatory dockets (Federal Register API — free, great for policy).
- **Prices for paper trading:** yfinance, Alpha Vantage, Finnhub, Polygon (free tiers).

The **most agent-tractable starting point** is any domain whose catalysts are
*scheduled and structured*: biotech PDUFA dates, USDA reports, EIA storage, government
contract feeds, and the Federal Register. Those give you clean, dated, machine-readable
events instead of trying to parse ambiguous market chatter.

---

## 5. Honest caveats (read before you get excited)

- **Direction ≠ profit.** Knowing a headline is "bullish" doesn't mean you're early.
  Liquid names may have already moved before your agent finishes reasoning. The edge, if
  any, lives in *less-liquid, less-watched* names — which are also the riskiest.
- **News is often already priced.** Scheduled events (PDUFA dates, WASDE) are known in
  advance; the *surprise vs. expectation* is what moves price, not the event itself. A
  good agent models the expectation, not just the outcome.
- **Small-caps gap and are illiquid.** Great for "the agent was right" screenshots,
  terrible for realistic fills. Model slippage in paper trading or you'll fool yourself.
- **Survivorship & hindsight.** Backtests on today's ticker list are biased. Build the
  paper-trading log forward in time.
- **This is a research toy.** Treat every number as needing verification and every
  "win" as possibly luck until you have a long, honest paper-trading record.

## 6. Suggested first build (smallest useful slice)

Pick **one** domain with scheduled catalysts to prove the loop end-to-end. Recommended:
**Uranium/nuclear** (small clean watchlist, frequent legible headlines) or
**Ag/fertilizer** (USDA reports are scheduled and structured). Build:

1. A watchlist + catalyst taxonomy for that one domain.
2. A single news poller (one or two free RSS/API sources).
3. One specialist agent prompt that outputs `{ticker, action, confidence, rationale}`.
4. A paper-trade ledger (append-only) recording the decision, the triggering headline,
   and the subsequent price move for later scoring.

Get that honest and observable before adding a second agent.
