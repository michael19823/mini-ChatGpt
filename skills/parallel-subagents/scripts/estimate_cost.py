#!/usr/bin/env python3
"""Estimate what a parallel sub-agent run will cost, before launching it.

Each worker is modelled as an agent loop: a shared prefix of P tokens (system prompt, tool
definitions, brief), then N tool calls that each add about R tokens of results, O output tokens in
total, and S billable web searches. Every turn re-reads everything before it, so cost grows faster
than N. With caching, each new block is written once and read on every later turn. Output tokens
from earlier turns are not counted as re-read input, so treat the result as a slight
underestimate; a measured pilot item is always better.

Run it once per stage (workers, judges, repairs) and add the totals.

Prices: first-party Claude API list prices in USD per million tokens, checked 2026-10-07. Re-check
them (the claude-api skill or the Anthropic pricing page) before quoting, or override with --price.

Examples:
  python3 estimate_cost.py --agents 195 --prefix 3000 --tool-calls 10 --result-tokens 5000 \\
      --output-tokens 4000 --searches 10
  python3 estimate_cost.py --agents 40 --model haiku --tool-calls 0 --prefix 2500 \\
      --output-tokens 600 --batch
"""

import argparse
import json
import sys

PRICES_CHECKED = "2026-10-07"
SEARCH_PRICE = 10.0 / 1000  # USD per web search

# inp/out/read: USD per million tokens. "long" applies to requests whose prompt exceeds threshold.
PRICES = {
    "haiku": {"id": "claude-haiku-5-5", "inp": 0.10, "out": 0.50, "read": 0.01,
              "long": {"threshold": 100_000, "inp": 0.50, "out": 2.50, "read": 0.05}},
    "sonnet": {"id": "claude-sonnet-5-5", "inp": 2.00, "out": 10.00, "read": 0.20},
    "opus": {"id": "claude-opus-5-5", "inp": 4.00, "out": 20.00, "read": 0.20},
    "fable": {"id": "claude-fable-5-1", "inp": 10.00, "out": 50.00, "read": 0.25},
}
WRITE_MULT = {"5m": 1.25, "1h": 2.0}


def tier_for(price, prompt_tokens):
    """Return the price tier that applies to a request with this many prompt tokens."""
    long = price.get("long")
    if long and prompt_tokens > long["threshold"]:
        return long
    return price


def worker_cost(price, prefix, calls, result_tokens, output_tokens, searches,
                cache=True, ttl="5m", warm_prefix=False, batch=False):
    """Cost of one worker, turn by turn. Returns (total, breakdown, peak_context, long_turns)."""
    turns = calls + 1
    out_per_turn = output_tokens / turns
    if cache and calls == 0 and not warm_prefix:
        cache = False  # a single call with an unshared prefix gains nothing from a cache write
    parts = {"cache_write": 0.0, "cache_read": 0.0, "input": 0.0, "output": 0.0, "search": 0.0}
    long_turns = 0
    for k in range(turns):
        prompt = prefix + k * result_tokens
        tier = tier_for(price, prompt)
        if tier is not price:
            long_turns += 1
        if cache:
            if k == 0:
                # With a warm shared prefix, workers after the first read it instead of writing it.
                write, read = (0, prefix) if warm_prefix else (prefix, 0)
            else:
                write, read = result_tokens, prefix + (k - 1) * result_tokens
            parts["cache_write"] += write * tier["inp"] * WRITE_MULT[ttl] / 1e6
            parts["cache_read"] += read * tier["read"] / 1e6
        else:
            parts["input"] += prompt * tier["inp"] / 1e6
        parts["output"] += out_per_turn * tier["out"] / 1e6
    if batch:
        for key in ("cache_write", "cache_read", "input", "output"):
            parts[key] *= 0.5
    parts["search"] = searches * SEARCH_PRICE
    peak = prefix + calls * result_tokens
    return sum(parts.values()), parts, peak, long_turns


def parse_price_overrides(items):
    """--price name=input,output,cache_read (USD per million tokens)."""
    for item in items or []:
        try:
            name, values = item.split("=", 1)
            inp, out, read = (float(v) for v in values.split(","))
        except ValueError:
            sys.exit(f"bad --price value {item!r}; expected name=input,output,cache_read")
        base = PRICES.get(name, {"id": name})
        # Keep any long-context tier from the built-in row; only the base prices change.
        PRICES[name] = {**base, "id": base.get("id", name), "inp": inp, "out": out, "read": read}


def money(x):
    if x >= 1:
        return f"${x:,.2f}"
    return f"${x:.3f}" if x >= 0.01 else f"${x:.5f}"


def main():
    ap = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--agents", type=int, required=True, help="number of workers in this stage")
    ap.add_argument("--model", action="append",
                    help="model to price (haiku, sonnet, opus, fable, or a --price name); "
                         "repeatable; default: all")
    ap.add_argument("--prefix", type=int, default=3000,
                    help="shared prefix tokens per worker: system prompt + tool definitions + brief "
                         "(default 3000; in Claude Code the system prompt and tools alone are often "
                         "several thousand)")
    ap.add_argument("--tool-calls", type=int, default=10, help="tool calls per worker (default 10)")
    ap.add_argument("--result-tokens", type=int, default=5000,
                    help="average tokens each tool result adds to the context (default 5000)")
    ap.add_argument("--output-tokens", type=int, default=4000,
                    help="output tokens per worker, thinking included (default 4000)")
    ap.add_argument("--searches", type=int, default=0,
                    help="billable web searches per worker, $0.01 each (default 0; set it for "
                         "web research)")
    ap.add_argument("--no-cache", action="store_true", help="price without prompt caching")
    ap.add_argument("--ttl", choices=["5m", "1h"], default="5m", help="cache TTL (default 5m)")
    ap.add_argument("--warm-prefix", action="store_true",
                    help="assume workers after the first read the shared prefix from cache")
    ap.add_argument("--batch", action="store_true",
                    help="apply the Batch API's 50%% token discount (tool-free calls only)")
    ap.add_argument("--price", action="append", metavar="NAME=IN,OUT,READ",
                    help="override or add a price row, USD per million tokens")
    ap.add_argument("--json", action="store_true", help="print JSON instead of a table")
    a = ap.parse_args()

    parse_price_overrides(a.price)
    models = a.model or [m for m in PRICES]
    for m in models:
        if m not in PRICES:
            sys.exit(f"unknown model {m!r}; known: {', '.join(PRICES)} (or add one with --price)")
    searches = a.searches
    if min(a.agents, a.prefix, a.tool_calls, a.result_tokens, a.output_tokens, searches) < 0:
        sys.exit("all counts must be zero or positive")
    cache = not a.no_cache

    def estimate(model, calls=a.tool_calls, n_search=searches):
        per, parts, peak, long_turns = worker_cost(
            PRICES[model], a.prefix, calls, a.result_tokens, a.output_tokens, n_search,
            cache=cache, ttl=a.ttl, warm_prefix=a.warm_prefix, batch=a.batch)
        if cache and a.warm_prefix and a.agents > 0:
            # The first worker still writes the prefix once.
            first = PRICES[model]
            extra = a.prefix * first["inp"] * WRITE_MULT[a.ttl] / 1e6 - a.prefix * first["read"] / 1e6
            if a.batch:
                extra *= 0.5
            total = per * a.agents + extra
        else:
            total = per * a.agents
        return per, total, parts, peak, long_turns

    rows = []
    for m in models:
        per, total, parts, peak, long_turns = estimate(m)
        rows.append({"model": m, "id": PRICES[m]["id"], "per_agent": per, "total": total,
                     "breakdown_per_agent": parts, "peak_context_tokens": peak,
                     "turns_over_long_context_threshold": long_turns})

    focus = (a.model or ["sonnet" if "sonnet" in PRICES else models[0]])[0]
    sensitivity = []
    if a.tool_calls > 0:
        ratio = searches / a.tool_calls
        for mult in (0.5, 1, 2, 3):
            calls = max(1, round(a.tool_calls * mult))
            sensitivity.append({"tool_calls": calls,
                                "total": estimate(focus, calls, round(calls * ratio))[1]})

    if a.json:
        print(json.dumps({"prices_checked": PRICES_CHECKED, "agents": a.agents, "rows": rows,
                          "sensitivity_model": focus, "sensitivity": sensitivity}, indent=2))
        return

    print(f"{a.agents} agents | prefix {a.prefix:,} | {a.tool_calls} tool calls x "
          f"{a.result_tokens:,} tokens | {a.output_tokens:,} output | {searches} searches | "
          f"cache {'off' if not cache else a.ttl + (', warm prefix' if a.warm_prefix else '')}"
          f"{' (unused for single calls)' if cache and a.tool_calls == 0 and not a.warm_prefix else ''}"
          f"{' | batch -50%' if a.batch else ''}")
    print(f"{'model':<8}{'id':<20}{'per agent':>11}{'total':>12}{'peak context':>15}")
    for r in rows:
        note = "  (some turns bill at the >100K rate)" if r["turns_over_long_context_threshold"] else ""
        print(f"{r['model']:<8}{r['id']:<20}{money(r['per_agent']):>11}{money(r['total']):>12}"
              f"{r['peak_context_tokens']:>15,}{note}")
    f = next(r for r in rows if r["model"] == focus) if focus in models else rows[0]
    b = f["breakdown_per_agent"]
    print(f"\nPer-agent breakdown, {f['model']}: " + ", ".join(
        f"{k.replace('_', ' ')} {money(v)}" for k, v in b.items() if v))
    if sensitivity:
        print(f"Tool-call sensitivity, {focus}, all agents: " + ", ".join(
            f"{s['tool_calls']} calls {money(s['total'])}" for s in sensitivity))
    if searches == 0 and a.tool_calls:
        print("Searches: 0. For web research, pass --searches (each search adds $0.01).")
    if a.batch and a.tool_calls:
        print("Note: the Batch API suits tool-free calls; check that your tools work in batches.")
    print(f"Prices checked {PRICES_CHECKED}; re-check before quoting. Add 20-40% for the "
          "expensive tail, and prefer a measured pilot item x N.")


if __name__ == "__main__":
    main()
