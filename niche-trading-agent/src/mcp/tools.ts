import type { LlmBackend } from "../llm/index.ts";
import type { NewsSource } from "../news/index.ts";
import type { PriceProvider } from "../prices.ts";
import type { NewsItem } from "../types.ts";
import { Ledger } from "../ledger.ts";
import { DOMAINS, getDomain } from "../domains.ts";
import { getExpertBrief } from "../experts.ts";
import { routeNews } from "../router.ts";
import { runOnce } from "../orchestrator.ts";
import { scoreEntries, summarize } from "../scoring.ts";
import { crossDomainCount } from "../scenarios/planner.ts";
import { activeScenarios } from "../scenarios/active.ts";
import { matchScenarios } from "../scenarios/match.ts";

/** Everything the tools need; injectable so they can be tested with mocks. */
export interface ToolDeps {
  llm: LlmBackend;
  news: NewsSource;
  prices: PriceProvider;
  ledger: Ledger;
  minConfidence: number;
}

export interface ToolDef {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
}

const NONE = { type: "object", properties: {}, additionalProperties: false };

export const TOOLS: ToolDef[] = [
  {
    name: "list_experts",
    description: "List the specialist expert agents: their watchlists and catalyst taxonomies.",
    inputSchema: NONE,
  },
  {
    name: "get_expert_brief",
    description: "Get the full SKILL.md brief (persona + catalyst logic) for one expert.",
    inputSchema: {
      type: "object",
      properties: { domainId: { type: "string", description: "Expert id, e.g. 'uranium'." } },
      required: ["domainId"],
      additionalProperties: false,
    },
  },
  {
    name: "get_price",
    description: "Get the current/last price for a ticker via the configured price provider.",
    inputSchema: {
      type: "object",
      properties: { ticker: { type: "string", description: "Ticker symbol, e.g. 'CCJ'." } },
      required: ["ticker"],
      additionalProperties: false,
    },
  },
  {
    name: "get_news",
    description: "Fetch recent news from the configured source, optionally only items relevant to one expert.",
    inputSchema: {
      type: "object",
      properties: {
        limit: { type: "number", description: "Max items (default 20)." },
        domainId: { type: "string", description: "Optional expert id to filter to." },
      },
      additionalProperties: false,
    },
  },
  {
    name: "analyze_headline",
    description: "Route a headline to the relevant expert(s) and return their buy/sell/hold decisions. Does NOT record trades.",
    inputSchema: {
      type: "object",
      properties: {
        title: { type: "string", description: "The news headline." },
        summary: { type: "string", description: "Optional longer summary." },
      },
      required: ["title"],
      additionalProperties: false,
    },
  },
  {
    name: "run_pipeline",
    description: "Run one full pass (fetch news -> route -> decide -> record paper trades) and return what was recorded.",
    inputSchema: NONE,
  },
  {
    name: "score_ledger",
    description: "Score recorded paper trades against current prices: hit rate, average return, and per-domain/action breakdown.",
    inputSchema: NONE,
  },
  {
    name: "list_scenarios",
    description: "List the pre-computed foresight scenarios: hypothesized events with their causal chains (first- and cross-domain second-order effects) and playbooks.",
    inputSchema: {
      type: "object",
      properties: { domainId: { type: "string", description: "Optional expert id to filter to." } },
      additionalProperties: false,
    },
  },
  {
    name: "react_event",
    description: "Fast reaction: match a real event to pre-computed scenarios and return their playbooks (including chain effects) instantly.",
    inputSchema: {
      type: "object",
      properties: {
        title: { type: "string", description: "The event/headline." },
        summary: { type: "string", description: "Optional longer summary." },
      },
      required: ["title"],
      additionalProperties: false,
    },
  },
];

/** Dispatches a tool call. Returns a plain object serialized as the tool result. */
export async function callTool(name: string, args: Record<string, unknown>, deps: ToolDeps): Promise<unknown> {
  switch (name) {
    case "list_experts":
      return DOMAINS.map((d) => ({
        id: d.id,
        name: d.name,
        edge: d.edge,
        tickers: d.tickers,
        catalysts: d.catalysts.map((c) => ({ id: c.id, title: c.title, direction: c.direction })),
      }));

    case "get_expert_brief": {
      const d = getDomain(String(args.domainId));
      if (!d) throw new Error(`unknown expert: ${args.domainId}`);
      return { domainId: d.id, brief: getExpertBrief(d) ?? "(no SKILL.md shipped)" };
    }

    case "get_price": {
      const ticker = String(args.ticker);
      return { ticker, price: await deps.prices.getPrice(ticker), provider: deps.prices.name };
    }

    case "get_news": {
      const limit = typeof args.limit === "number" ? args.limit : 20;
      const domainId = args.domainId ? String(args.domainId) : null;
      let items = await deps.news.fetch();
      if (domainId) items = items.filter((n) => routeNews(n).some((m) => m.domain.id === domainId));
      return { source: deps.news.name, count: Math.min(items.length, limit), items: items.slice(0, limit) };
    }

    case "analyze_headline": {
      const news: NewsItem = {
        id: "adhoc",
        title: String(args.title),
        summary: args.summary ? String(args.summary) : undefined,
        publishedAt: "1970-01-01T00:00:00Z",
      };
      const matches = routeNews(news);
      const decisions = await Promise.all(matches.map((m) => deps.llm.analyze(news, m.domain)));
      return {
        routedTo: matches.map((m) => m.domain.id),
        decisions: decisions.filter((d) => d.action !== "hold"),
      };
    }

    case "run_pipeline": {
      const result = await runOnce(deps);
      return { processed: result.processed, routed: result.routed, recorded: result.recorded };
    }

    case "score_ledger": {
      const entries = await deps.ledger.all();
      const tickers = [...new Set(entries.map((e) => e.ticker))];
      const priceMap = new Map<string, number | null>();
      await Promise.all(tickers.map(async (t) => priceMap.set(t, await deps.prices.getPrice(t))));
      const { scored, skipped } = scoreEntries(entries, (t) => priceMap.get(t) ?? null);
      return { provider: deps.prices.name, summary: summarize(scored, skipped) };
    }

    case "list_scenarios": {
      const domainId = args.domainId ? String(args.domainId) : null;
      const scenarios = (await activeScenarios()).filter((s) => !domainId || s.domainId === domainId);
      return { count: scenarios.length, crossDomain: crossDomainCount(scenarios), scenarios };
    }

    case "react_event": {
      const news: NewsItem = {
        id: "adhoc",
        title: String(args.title),
        summary: args.summary ? String(args.summary) : undefined,
        publishedAt: "1970-01-01T00:00:00Z",
      };
      const matches = matchScenarios(news, await activeScenarios());
      return {
        matched: matches.length,
        playbooks: matches.map((m) => ({
          scenario: m.scenario.title,
          domainId: m.scenario.domainId,
          matchedTriggers: m.matchedTriggers,
          actions: m.scenario.playbook.filter((a) => a.action !== "hold"),
        })),
      };
    }

    default:
      throw new Error(`unknown tool: ${name}`);
  }
}
