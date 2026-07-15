import { createInterface } from "node:readline";
import { loadEnv, num } from "../config.ts";
import { createLlm } from "../llm/index.ts";
import { createNewsSource } from "../news/index.ts";
import { createPriceProvider } from "../prices.ts";
import { Ledger } from "../ledger.ts";
import { TOOLS, callTool, type ToolDeps } from "./tools.ts";

/**
 * A minimal, dependency-free MCP server over stdio (newline-delimited JSON-RPC
 * 2.0). It exposes the trading system's experts, news, prices, and pipeline as
 * tools so any MCP client (Claude Code, the mini-ChatGPT backend, etc.) can
 * drive it. Implements the subset of MCP needed: initialize, tools/list,
 * tools/call.
 *
 * The protocol handling is a pure function (`handleMessage`) so it can be
 * tested in-process without stdio or a network.
 */
const PROTOCOL_VERSION = "2024-11-05";

interface JsonRpcRequest {
  jsonrpc: "2.0";
  id?: string | number | null;
  method: string;
  params?: Record<string, unknown>;
}
interface JsonRpcResponse {
  jsonrpc: "2.0";
  id: string | number | null;
  result?: unknown;
  error?: { code: number; message: string };
}

export async function handleMessage(req: JsonRpcRequest, deps: ToolDeps): Promise<JsonRpcResponse | null> {
  // Notifications (no id) get no response.
  const isNotification = req.id === undefined || req.id === null;
  const id = req.id ?? null;

  try {
    switch (req.method) {
      case "initialize":
        return ok(id, {
          protocolVersion: PROTOCOL_VERSION,
          capabilities: { tools: {} },
          serverInfo: { name: "niche-trading-agent", version: "0.1.0" },
        });

      case "notifications/initialized":
        return null;

      case "ping":
        return ok(id, {});

      case "tools/list":
        return ok(id, { tools: TOOLS });

      case "tools/call": {
        const name = String(req.params?.name ?? "");
        const args = (req.params?.arguments as Record<string, unknown>) ?? {};
        const data = await callTool(name, args, deps);
        return ok(id, { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] });
      }

      default:
        if (isNotification) return null;
        return err(id, -32601, `method not found: ${req.method}`);
    }
  } catch (e) {
    // Tool errors are reported as an MCP tool result with isError, not a
    // protocol error, so clients can show the message to the model.
    if (req.method === "tools/call") {
      return ok(id, { content: [{ type: "text", text: `Error: ${(e as Error).message}` }], isError: true });
    }
    return err(id, -32603, (e as Error).message);
  }
}

function ok(id: string | number | null, result: unknown): JsonRpcResponse {
  return { jsonrpc: "2.0", id, result };
}
function err(id: string | number | null, code: number, message: string): JsonRpcResponse {
  return { jsonrpc: "2.0", id, error: { code, message } };
}

export function defaultDeps(): ToolDeps {
  return {
    llm: createLlm(),
    news: createNewsSource(),
    prices: createPriceProvider(),
    ledger: new Ledger(),
    minConfidence: num("MIN_CONFIDENCE", 0.4),
  };
}

/** stdio transport loop. Reads one JSON-RPC message per line, writes responses. */
async function main(): Promise<void> {
  loadEnv();
  const deps = defaultDeps();
  const rl = createInterface({ input: process.stdin });
  // Log to stderr only — stdout is reserved for the JSON-RPC channel.
  process.stderr.write(`niche-trading-agent MCP server ready (llm=${deps.llm.name}, news=${deps.news.name}, prices=${deps.prices.name})\n`);

  for await (const line of rl) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    let req: JsonRpcRequest;
    try {
      req = JSON.parse(trimmed) as JsonRpcRequest;
    } catch {
      process.stdout.write(JSON.stringify(err(null, -32700, "parse error")) + "\n");
      continue;
    }
    const res = await handleMessage(req, deps);
    if (res) process.stdout.write(JSON.stringify(res) + "\n");
  }
}

// Run only when executed directly (not when imported by tests).
if (import.meta.url === `file://${process.argv[1]}`) {
  await main();
}
