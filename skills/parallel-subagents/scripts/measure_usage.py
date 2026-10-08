#!/usr/bin/env python3
"""Measure what sub-agents actually used, from Claude Code transcript files (JSON Lines).

Pass one or more transcripts, optionally labelled as label=path. In Claude Code a sub-agent's
transcript is the Agent tool's output_file, or a file under
~/.claude/projects/<project>/<session>/subagents/agent-<id>.jsonl; the main session's transcript
is ~/.claude/projects/<project>/<session>.jsonl. Reading them with this script is fine; don't
open them whole in your own context.

What's exact and what isn't:
  - Input-side tokens (uncached input, cache writes, cache reads) are exact.
  - Output tokens are not: transcripts record usage when each reply starts, so output reads near
    zero. Estimate output separately (the report's length, plus thinking), or measure a pilot item
    with headless `claude -p --output-format json`, which reports total_cost_usd.
  - Web search fees ($10 per 1,000) come from the count of WebSearch tool calls.
  - Each reply is counted once (entries are deduplicated by message id).

Prices: first-party list prices checked 2026-10-07, USD per million tokens (Haiku 5.5's >100K-token
tier is not applied). Re-check before quoting.

Example:
  python3 measure_usage.py egypt=/path/agent-a3c9.jsonl gambia=/path/agent-ab0f.jsonl
"""

import argparse
import collections
import json
import sys

# input, 5-minute cache write, 1-hour cache write, cache read, output
PRICES = {
    "fable": (10.0, 12.5, 20.0, 0.25, 50.0),
    "opus": (4.0, 5.0, 8.0, 0.20, 20.0),
    "sonnet": (2.0, 2.5, 4.0, 0.20, 10.0),
    "haiku": (0.10, 0.125, 0.20, 0.01, 0.50),
}
SEARCH_PRICE = 0.01


def family(model):
    for name in PRICES:
        if name in (model or ""):
            return name
    return None


def measure(path):
    replies = {}
    tools = {}
    with open(path, encoding="utf-8") as fh:
        for line in fh:
            try:
                entry = json.loads(line)
            except json.JSONDecodeError:
                continue
            msg = entry.get("message")
            if not (isinstance(msg, dict) and msg.get("role") == "assistant" and "usage" in msg):
                continue
            mid = msg.get("id") or entry.get("uuid")
            replies[mid] = (msg["usage"], msg.get("model"))
            for block in msg.get("content") or []:
                if isinstance(block, dict) and block.get("type") == "tool_use":
                    tools[(mid, block.get("id"))] = block.get("name")
    tot = collections.Counter()
    model = None
    first = None
    peak = 0
    for usage, mdl in replies.values():
        model = mdl or model
        written = usage.get("cache_creation_input_tokens", 0) or 0
        split = usage.get("cache_creation") or {}
        one_hour = split.get("ephemeral_1h_input_tokens", 0) or 0
        tot["input"] += usage.get("input_tokens", 0) or 0
        tot["write_5m"] += written - one_hour
        tot["write_1h"] += one_hour
        tot["read"] += usage.get("cache_read_input_tokens", 0) or 0
        context = (usage.get("input_tokens", 0) or 0) + written + (usage.get("cache_read_input_tokens", 0) or 0)
        peak = max(peak, context)
        if first is None:
            first = context
    names = collections.Counter(tools.values())
    fam = family(model)
    p = PRICES.get(fam or "sonnet")
    input_cost = (tot["input"] * p[0] + tot["write_5m"] * p[1] + tot["write_1h"] * p[2]
                  + tot["read"] * p[3]) / 1e6
    searches = names.get("WebSearch", 0)
    return {
        "model": model, "priced_as": fam or "sonnet (unknown model)", "replies": len(replies),
        "first_prompt_tokens": first or 0, "cache_write_tokens": tot["write_5m"] + tot["write_1h"],
        "cache_read_tokens": tot["read"], "uncached_input_tokens": tot["input"],
        "peak_context_tokens": peak, "tool_calls": sum(names.values()), "tool_counts": dict(names),
        "web_searches": searches, "input_cost_usd": round(input_cost, 4),
        "search_fees_usd": round(searches * SEARCH_PRICE, 4),
    }


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("transcripts", nargs="+", metavar="[LABEL=]PATH")
    ap.add_argument("--json", action="store_true", help="print JSON instead of a table")
    a = ap.parse_args()

    rows = []
    for arg in a.transcripts:
        label, _, path = arg.rpartition("=") if "=" in arg else ("", "", arg)
        try:
            row = measure(path)
        except OSError as e:
            sys.exit(f"can't read {path}: {e}")
        row["label"] = label or path.rsplit("/", 1)[-1]
        rows.append(row)

    if a.json:
        print(json.dumps(rows, indent=2))
        return
    print(f"{'agent':<14}{'model':<19}{'replies':>8}{'1st prompt':>11}{'cache wr':>10}{'cache rd':>12}"
          f"{'peak ctx':>10}{'tools':>6}{'search':>7}{'input $':>9}{'search $':>9}")
    for r in rows:
        print(f"{r['label'][:13]:<14}{(r['model'] or '?')[:18]:<19}{r['replies']:>8}"
              f"{r['first_prompt_tokens']:>11,}{r['cache_write_tokens']:>10,}{r['cache_read_tokens']:>12,}"
              f"{r['peak_context_tokens']:>10,}{r['tool_calls']:>6}{r['web_searches']:>7}"
              f"{r['input_cost_usd']:>9.2f}{r['search_fees_usd']:>9.2f}")
    if len(rows) > 1:
        print(f"{'total':<14}{'':<19}{sum(r['replies'] for r in rows):>8}{'':>11}"
              f"{sum(r['cache_write_tokens'] for r in rows):>10,}{sum(r['cache_read_tokens'] for r in rows):>12,}"
              f"{'':>10}{sum(r['tool_calls'] for r in rows):>6}{sum(r['web_searches'] for r in rows):>7}"
              f"{sum(r['input_cost_usd'] for r in rows):>9.2f}{sum(r['search_fees_usd'] for r in rows):>9.2f}")
    print("Output tokens aren't recorded reliably in transcripts: add an estimate for them "
          "(report length plus thinking).")


if __name__ == "__main__":
    main()
