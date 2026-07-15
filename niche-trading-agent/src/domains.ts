import type { Domain } from "./types.ts";

/**
 * The specialist domains. Each is a self-contained "expert": a watchlist plus
 * a taxonomy of catalysts with direction logic. Adding a new expert is just a
 * new object here — the router, agents, and ledger pick it up automatically.
 *
 * See ../../docs/trading-agent/niche-domains.md (in the mini-ChatGpt repo) for
 * the research behind these choices.
 */
export const DOMAINS: Domain[] = [
  {
    id: "uranium",
    name: "Uranium & Nuclear Fuel Cycle",
    edge: "Left for dead post-Fukushima; followed by a small specialist crowd.",
    tickers: ["CCJ", "UEC", "DNN", "NXE", "UUUU", "LEU", "SMR", "OKLO", "URA", "URNM"],
    matchTerms: ["uranium", "nuclear", "reactor", "enrichment", "smr", "kazatomprom", "yellowcake", "nrc"],
    catalysts: [
      {
        id: "reactor-restart",
        title: "Reactor restart / new build approval",
        keywords: ["restart", "approval", "new build", "license", "reopen", "greenlight"],
        direction: "bullish",
        logic: "More reactors online → higher uranium demand → bullish miners.",
      },
      {
        id: "supply-cut",
        title: "Producer supply cut / disruption",
        keywords: ["supply cut", "production cut", "output cut", "disruption", "shortage", "curtail"],
        direction: "bullish",
        tickers: ["CCJ", "UEC", "DNN", "NXE", "URA", "URNM"],
        logic: "Supply cut (e.g. Kazatomprom) → tighter spot → bullish miners.",
      },
      {
        id: "enrichment-sanctions",
        title: "Russian enrichment sanctions / ban",
        keywords: ["enrichment", "sanction", "russian uranium", "import ban"],
        direction: "bullish",
        tickers: ["LEU", "CCJ"],
        logic: "Sanctions on Russian enrichment → bullish Western enrichers (LEU).",
      },
      {
        id: "smr-milestone",
        title: "SMR / advanced reactor milestone",
        keywords: ["small modular", "smr", "advanced reactor", "certification", "data center deal"],
        direction: "bullish",
        tickers: ["SMR", "OKLO", "LEU"],
        logic: "SMR progress / datacenter power deals → bullish advanced-reactor names.",
      },
    ],
  },
  {
    id: "agriculture",
    name: "Agriculture, Grains & Fertilizer",
    edge: "Weather- and policy-driven; the key data (USDA) is public and scheduled.",
    tickers: ["NTR", "MOS", "CF", "IPI", "ADM", "BG", "DE", "DBA", "MOO", "WEAT", "CORN"],
    matchTerms: ["grain", "wheat", "corn", "soybean", "fertilizer", "potash", "usda", "crop", "harvest", "drought", "farm"],
    catalysts: [
      {
        id: "drought",
        title: "Drought / crop-damaging weather",
        keywords: ["drought", "frost", "flood", "heatwave", "dry weather", "crop damage"],
        direction: "bullish",
        tickers: ["WEAT", "CORN", "DBA", "ADM", "BG"],
        logic: "Weather damage in a key exporter → lower supply → higher grain prices.",
      },
      {
        id: "export-ban",
        title: "Grain export ban / restriction",
        keywords: ["export ban", "export restriction", "halt exports", "grain corridor"],
        direction: "bullish",
        tickers: ["WEAT", "CORN", "DBA"],
        logic: "Exporter halts shipments → scarcity → bullish grains / competing exporters.",
      },
      {
        id: "fertilizer-supply",
        title: "Fertilizer / potash supply shock",
        keywords: ["potash", "phosphate", "nitrogen", "fertilizer", "belarus", "sanction"],
        direction: "bullish",
        tickers: ["NTR", "MOS", "CF", "IPI"],
        logic: "Potash/nitrogen supply cut → higher input prices → bullish producers.",
      },
      {
        id: "wasde",
        title: "USDA WASDE / crop report surprise",
        keywords: ["wasde", "usda", "crop report", "stocks report", "yield"],
        direction: "context",
        logic: "Scheduled report — trade the SURPRISE vs expectation, not the level.",
      },
    ],
  },
  {
    id: "shipping",
    name: "Shipping — Tankers, Dry Bulk, Containers",
    edge: "Low-glamour cyclical; direction is unusually legible from one headline.",
    tickers: ["ZIM", "DAC", "GSL", "GNK", "SBLK", "GOGL", "FRO", "STNG", "INSW", "DHT", "BOAT"],
    matchTerms: ["shipping", "tanker", "dry bulk", "container", "freight", "baltic", "suez", "panama canal", "red sea", "port"],
    catalysts: [
      {
        id: "canal-disruption",
        title: "Suez / Panama / Red Sea disruption",
        keywords: ["red sea", "suez", "panama canal", "attack", "reroute", "blockage", "draft restriction"],
        direction: "bullish",
        logic: "Rerouting → longer voyages → higher rates → bullish carriers.",
      },
      {
        id: "rate-spike",
        title: "Freight-rate spike",
        keywords: ["baltic dry", "freight rate", "rates surge", "rates jump", "spot rate"],
        direction: "bullish",
        logic: "Rising rates flow directly to shipping-company earnings.",
      },
      {
        id: "opec-cut",
        title: "OPEC output cut (crude tankers)",
        keywords: ["opec", "output cut", "production cut", "oil supply"],
        direction: "bearish",
        tickers: ["FRO", "STNG", "INSW", "DHT"],
        logic: "Less oil to move → lower ton-mile demand → bearish crude tankers.",
      },
    ],
  },
  {
    id: "defense",
    name: "Defense, Drones & Space (small-cap)",
    edge: "The small-cap drone/space layer moves hard on contracts and conflict.",
    tickers: ["AVAV", "KTOS", "RCAT", "RKLB", "LUNR", "ASTS", "PL", "LMT", "RTX", "ITA", "ARKX"],
    matchTerms: ["defense", "drone", "missile", "military", "pentagon", "ndaa", "satellite", "space", "launch", "munition"],
    catalysts: [
      {
        id: "contract-award",
        title: "Government contract award",
        keywords: ["contract", "award", "awarded", "deal", "order", "procurement"],
        direction: "bullish",
        logic: "A named contract award is a direct revenue signal for the awardee.",
      },
      {
        id: "conflict-escalation",
        title: "Conflict / geopolitical escalation",
        keywords: ["escalation", "strike", "invasion", "attack", "conflict", "war"],
        direction: "bullish",
        tickers: ["KTOS", "AVAV", "RCAT", "LMT", "RTX"],
        logic: "Escalation → higher munitions/drone demand expectations.",
      },
      {
        id: "launch-outcome",
        title: "Launch success / failure",
        keywords: ["launch", "liftoff", "orbit", "mission failure", "rocket"],
        direction: "context",
        tickers: ["RKLB", "LUNR", "ASTS", "PL"],
        logic: "Success bullish, failure bearish — sentiment words decide.",
      },
    ],
  },
  {
    id: "cannabis",
    name: "Cannabis (pure regulatory catalyst)",
    edge: "Almost entirely a policy trade; coiled to move on the next headline.",
    tickers: ["TLRY", "CGC", "CRON", "GTBIF", "CURLF", "TCNNF", "MSOS"],
    matchTerms: ["cannabis", "marijuana", "dea", "rescheduling", "safe banking", "schedule iii", "weed", "legalization"],
    catalysts: [
      {
        id: "rescheduling",
        title: "DEA rescheduling progress",
        keywords: ["reschedul", "schedule iii", "dea", "deschedul"],
        direction: "bullish",
        logic: "Reclassification eases tax/legal burden → bullish the whole complex.",
      },
      {
        id: "banking",
        title: "SAFE(R) Banking movement",
        keywords: ["safe banking", "safer banking", "banking act", "cannabis banking"],
        direction: "bullish",
        logic: "Banking access → normalized operations → bullish operators.",
      },
      {
        id: "legalization",
        title: "State / federal legalization vote",
        keywords: ["legaliz", "legalisation", "ballot", "referendum", "recreational"],
        direction: "bullish",
        logic: "New legal markets expand the addressable base.",
      },
    ],
  },
];

export function getDomain(id: string): Domain | undefined {
  return DOMAINS.find((d) => d.id === id);
}
