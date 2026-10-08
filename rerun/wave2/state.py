#!/usr/bin/env python3
"""Wave 2 state: carry results between batches, sessions and containers.

Every finished, unblocked result is saved per country in state/<slug>.json, with the batch tag it
came from. Commit state/ after each batch: a new container or session then continues where the
last one stopped. Prompts, models, efforts and caps are wave 1's (rerun/wave1/batch_template.js and
workflow.js); only the country list, the input files and the date differ.

  state.py --status                print progress and whether a batch is running (also saves state)
  state.py --script PATH           also write the next batch script to PATH and print its ARGS line
  state.py --launched RUN_ID TAG   record a batch you just launched
"""
import argparse
import datetime
import glob
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(HERE))
WAVE1 = os.path.join(REPO, 'rerun', 'wave1')
STATE = os.path.join(HERE, 'state')
PROJECTS = os.path.expanduser('~/.claude/projects')
BLOCKED = 'Web search was not performed'
CAP = 190            # searches per batch; Claude Code allows 200 per turn
BATCH_ITEMS = 8      # countries offered to each batch; it works depth-first and stops at the cap
STALE_HOURS = 2      # a launched batch with no activity for this long is treated as lost
sys.path.insert(0, os.path.join(REPO, 'skills', 'parallel-subagents', 'scripts'))
from measure_usage import measure, family, PRICES  # noqa: E402

COUNTRIES = json.load(open(os.path.join(HERE, 'countries.json')))
META = {c['id']: c for c in COUNTRIES}


def load(name, default):
    path = os.path.join(STATE, name)
    return json.load(open(path)) if os.path.exists(path) else default


def save(name, obj):
    path = os.path.join(STATE, name)
    text = json.dumps(obj, indent=1, ensure_ascii=False, sort_keys=True) + '\n'
    if not os.path.exists(path) or open(path).read() != text:
        open(path, 'w').write(text)


def slug_of(label):
    bits = label.split('@')[0].split(':')
    return bits[2] if bits[0] in ('discover', 'shadow') else bits[1]


def transcript_stats(path):
    """(WebSearch calls, blocked ones, estimated output tokens) for one sub-agent transcript."""
    uses, blocked, chars, sig, seen = set(), 0, 0, 0, set()
    for line in open(path, encoding='utf-8'):
        try:
            e = json.loads(line)
        except json.JSONDecodeError:
            continue
        m = e.get('message')
        if not isinstance(m, dict) or not isinstance(m.get('content'), list):
            continue
        for b in m['content']:
            if not isinstance(b, dict):
                continue
            t = b.get('type')
            if t == 'tool_use' and b.get('name') == 'WebSearch':
                uses.add(b.get('id'))
            elif t == 'tool_result' and b.get('tool_use_id') in uses:
                c = b.get('content')
                if BLOCKED in (c if isinstance(c, str) else json.dumps(c)):
                    blocked += 1
            if m.get('role') == 'assistant':
                key = (m.get('id'), b.get('id') or (b.get('signature') or '')[:40] or (b.get('text') or '')[:40])
                if key in seen:
                    continue
                seen.add(key)
                if t == 'text':
                    chars += len(b.get('text', ''))
                elif t == 'tool_use':
                    chars += len(json.dumps(b.get('input', {}), ensure_ascii=False))
                elif t in ('thinking', 'redacted_thinking'):
                    sig += len(b.get('signature', '') or b.get('data', ''))
    return len(uses), blocked, chars / 3.5 + sig * 0.19


def collect():
    """Wave 2 results and agent costs from every local journal; merged into state/ and saved."""
    kept = {c['id']: load(f"{c['id']}.json", {}) for c in COUNTRIES}
    costs = load('costs.json', {})
    tags = set(load('runs.json', {}).get('tags', []))
    for d in sorted(glob.glob(f'{PROJECTS}/*/*/subagents/workflows/wf_*'), key=os.path.getmtime):
        jp = f'{d}/journal.jsonl'
        if not os.path.exists(jp):
            continue
        order, labels, results = [], {}, {}
        for line in open(jp, encoding='utf-8'):
            j = json.loads(line)
            if j.get('type') == 'started':
                labels[j['agentId']] = j['label']
                order.append(j['agentId'])
            elif j.get('type') == 'result':
                results[j['agentId']] = j.get('result')
        for aid in order:
            base, _, tag = labels[aid].partition('@')
            if not tag.startswith('w2b') or slug_of(base) not in META:
                continue
            tags.add(tag)
            path = f'{d}/agent-{aid}.jsonl'
            n, blocked, out_tok = transcript_stats(path) if os.path.exists(path) else (0, 0, 0)
            if os.path.exists(path):
                m = measure(path)
                fam = family(m['model']) or 'sonnet'
                costs[f'{os.path.basename(d)}/{aid}'] = {
                    'tag': tag, 'label': base, 'model': fam, 'searches': n, 'blocked': blocked,
                    'cost': round(m['input_cost_usd'] + m['search_fees_usd'] + out_tok * PRICES[fam][4] / 1e6, 4)}
            r = results.get(aid)
            if not isinstance(r, dict) or r.get('__skipped') or blocked or r.get('blocked_searches', 0):
                continue
            if base.split(':')[0] not in ('critic', 'triage') and n == 0:
                continue  # a searching stage that never searched is not trusted
            kept[slug_of(base)][base] = {'tag': tag, 'result': r}
    for slug, entries in kept.items():
        if entries:
            save(f'{slug}.json', entries)
    save('costs.json', costs)
    return kept, costs, tags


def batch_rows():
    """Finished country rows from wave 2 batch outputs, merged into state/rows.json."""
    rows = load('rows.json', {})
    for p in glob.glob(f'{PROJECTS}/*/*/workflows/wf_*.json'):
        try:
            res = json.load(open(p)).get('result')
        except (json.JSONDecodeError, OSError):
            continue
        if isinstance(res, dict) and str(res.get('batch', '')).startswith('w2b'):
            for c in res.get('countries', []):
                if c.get('complete') and c['id'] in META:
                    rows[c['id']] = {**c, 'batch': res['batch']}
    save('rows.json', rows)
    return rows


def running(runs):
    """The last launched batch, if it is still running."""
    if not runs.get('launched'):
        return None
    last = runs['launched'][-1]
    if glob.glob(f"{PROJECTS}/*/*/workflows/{last['run']}.json"):
        return None  # finished
    dirs = glob.glob(f"{PROJECTS}/*/*/subagents/workflows/{last['run']}")
    if not dirs:
        return None  # lost with an old container
    newest = max(os.path.getmtime(p) for p in glob.glob(f'{dirs[0]}/*') or [dirs[0]])
    if (datetime.datetime.now().timestamp() - newest) / 3600 > STALE_HOURS:
        return None  # no activity for hours: treat as lost
    return last


def build_script(pre, today):
    template = open(os.path.join(WAVE1, 'batch_template.js')).read()
    workflow = open(os.path.join(WAVE1, 'workflow.js')).read()

    def between(src, start, end):
        i = src.index(start)
        return src[i:src.index(end, i)].rstrip() + '\n'
    parts = {
        '/*__CONSTANTS__*/': between(workflow, 'const DIR = ', 'const { items } = args'),
        '/*__SCHEMAS__*/': between(workflow, 'const str = ', 'const json = (x)'),
        '/*__HELPERS__*/': between(workflow, 'const json = (x)', 'const researcher = '),
        '/*__TIER0__*/': between(workflow, '// Tier 0 in code', 'const pipelineResults'),
    }
    out = template
    for k, v in parts.items():
        out = out.replace(k, v)
    out = re.sub(r"const DIR = '[^']*'", f"const DIR = '{HERE}'", out)  # contract.md and items/ of wave 2
    out = out.replace("Today's date is 2026-10-08", f"Today's date is {today}")
    slim = {}
    for k, v in pre.items():
        v = {kk: vv for kk, vv in v.items() if kk != 'queries'}
        if 'coverage' in v:
            v['coverage'] = [{**c, 'found': (c.get('found') or '')[:300]} for c in v['coverage']]
        slim[k] = v
    return out.replace('/*__PRE__*/{}', json.dumps(slim, ensure_ascii=False))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--status', action='store_true')
    ap.add_argument('--script')
    ap.add_argument('--launched', nargs=2, metavar=('RUN_ID', 'TAG'))
    a = ap.parse_args()
    os.makedirs(STATE, exist_ok=True)
    runs = load('runs.json', {'launched': [], 'tags': []})
    if a.launched:
        runs['launched'].append({'run': a.launched[0], 'tag': a.launched[1], 'at': datetime.datetime.utcnow().isoformat(timespec='seconds')})
        runs['tags'] = sorted(set(runs.get('tags', [])) | {a.launched[1]}, key=lambda t: int(t[3:]))
        save('runs.json', runs)
        print(f'recorded {a.launched[1]} as {a.launched[0]}')
        return
    today = datetime.date.today().isoformat()
    contract = open(os.path.join(WAVE1, 'contract.md')).read().replace("Today's date is 2026-10-08", f"Today's date is {today}")
    if not os.path.exists(os.path.join(HERE, 'contract.md')) or open(os.path.join(HERE, 'contract.md')).read() != contract:
        open(os.path.join(HERE, 'contract.md'), 'w').write(contract)
    kept, costs, tags = collect()
    rows = batch_rows()
    tags |= set(runs.get('tags', []))
    runs['tags'] = sorted(tags, key=lambda t: int(t[3:]))
    save('runs.json', runs)
    skip = load('skip.json', [])  # countries moved to the end after repeated failures
    done = [c['id'] for c in COUNTRIES if c['id'] in rows]
    remaining = [c['id'] for c in COUNTRIES if c['id'] not in rows and c['id'] not in skip] + [s for s in skip if s in META and s not in rows]
    last_tag = runs['tags'][-1] if runs['tags'] else None
    added = sum(1 for e in kept.values() for v in e.values() if v['tag'] == last_tag) if last_tag else None
    leads = {'strong': 0, 'likely': 0}
    for r in rows.values():
        f = r.get('finals', {})
        leads['strong'] += f.get('verified_4', 0)
        leads['likely'] += f.get('disputed', 0)
    spent = sum(c['cost'] for c in costs.values())
    busy = running(runs)
    finished = [p for r in runs.get('launched', []) for p in glob.glob(f"{PROJECTS}/*/*/workflows/{r['run']}.json")]
    finished_at = max((os.path.getmtime(p) for p in finished), default=None)
    wait_until = finished_at + 3 * 3600 if (added == 0 and finished_at) else None
    waiting = wait_until and datetime.datetime.now().timestamp() < wait_until
    print(f'done {len(done)}/{len(COUNTRIES)}; remaining {len(remaining)}; leads strong {leads["strong"]}, likely {leads["likely"]}; '
          f'agent spend so far about ${spent:.2f}')
    print(f'last batch {last_tag}: {added if added is not None else "-"} results kept' + (' (none: limit or outage?)' if added == 0 else ''))
    print(f"running: {busy['tag'] + ' (' + busy['run'] + ')' if busy else 'no'}")
    if waiting:
        print('waiting until ' + datetime.datetime.utcfromtimestamp(wait_until).strftime('%Y-%m-%d %H:%M UTC') + ': the last batch kept nothing')
    if a.script and remaining and not busy and not waiting:
        n = max([int(t[3:]) for t in runs['tags']], default=0) + 1
        nxt = remaining[:BATCH_ITEMS]
        pre = {k: v['result'] for s in nxt for k, v in kept[s].items()}
        src = build_script(pre, today)
        open(a.script, 'w').write(src)
        print(f'script {a.script}: {len(src):,} chars, {len(pre)} reused results')
        print('ARGS ' + json.dumps({'batch': f'w2b{n}', 'cap': CAP, 'items': [META[s] for s in nxt]}))
    elif a.script and (busy or waiting):
        print('not writing a script: ' + ('a batch is still running' if busy else 'waiting after an empty batch'))


if __name__ == '__main__':
    main()
