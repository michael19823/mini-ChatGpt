#!/usr/bin/env python3
"""Carry wave 1 forward between batches.

Reads every Workflow journal and sub-agent transcript of the wave, keeps each finished result whose
searches all ran (none returned "Web search was not performed"), works out which countries are done,
and writes the next batch's script: batch_template.js with workflow.js's prompts spliced in and the
kept results embedded as PRE, so the batch only runs what is still missing.

Usage: wave_state.py --script OUT.js [--cap 190]   (prints the args for the next Workflow call)
       wave_state.py --dump results.json          (all kept results by label, for the final report)
"""
import argparse
import glob
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
SESSION = '/root/.claude/projects/-home-user-mini-ChatGpt/83ddc1dd-9006-579e-93b4-ae08dc2b4128'
RECALL_TEST = 'wf_71970cbd-27e'
ORDER = ['ghana', 'hungary', 'mozambique', 'armenia', 'austria', 'colombia', 'costa-rica', 'suriname', 'zimbabwe',
         'brazil', 'morocco', 'hong-kong', 'georgia', 'latvia', 'palestine',
         'palau', 'monaco', 'grenada', 'guinea-bissau', 'liechtenstein']
BLOCKED = 'Web search was not performed'


def slug_of(label):
    bits = label.split('@')[0].split(':')
    return bits[2] if bits[0] in ('discover', 'shadow') else bits[1]


def searches(path):
    """(WebSearch calls, how many were blocked) in one sub-agent transcript."""
    uses, blocked = set(), 0
    for line in open(path, encoding='utf-8'):
        try:
            e = json.loads(line)
        except json.JSONDecodeError:
            continue
        m = e.get('message')
        if not isinstance(m, dict) or not isinstance(m.get('content'), list):
            continue
        for b in m['content']:
            if b.get('type') == 'tool_use' and b.get('name') == 'WebSearch':
                uses.add(b.get('id'))
            elif b.get('type') == 'tool_result' and b.get('tool_use_id') in uses:
                t = b.get('content')
                if BLOCKED in (t if isinstance(t, str) else json.dumps(t)):
                    blocked += 1
    return len(uses), blocked


def collect():
    kept, batches = {}, {}
    for d in sorted(glob.glob(f'{SESSION}/subagents/workflows/wf_*'), key=os.path.getmtime):
        if os.path.basename(d) == RECALL_TEST or not os.path.exists(f'{d}/journal.jsonl'):
            continue
        order, labels, results = [], {}, {}
        for line in open(f'{d}/journal.jsonl', encoding='utf-8'):
            j = json.loads(line)
            if j.get('type') == 'started':
                labels[j['agentId']] = j['label']
                order.append(j['agentId'])
            elif j.get('type') == 'result':
                results[j['agentId']] = j.get('result')
        for aid in order:
            label, r = labels[aid], results.get(aid)
            if not isinstance(r, dict) or r.get('__skipped'):
                continue
            base, _, tag = label.partition('@')
            kind = base.split(':')[0]
            path = f'{d}/agent-{aid}.jsonl'
            n, blocked = searches(path) if os.path.exists(path) else (0, 0)
            if blocked or r.get('blocked_searches', 0):
                continue
            if not tag:   # first runs: keep only discovery passes that searched and were never blocked
                if kind not in ('discover', 'shadow') or n == 0:
                    continue
            elif kind not in ('critic', 'triage') and n == 0:
                continue  # a searching stage that never searched is not trusted
            kept[base] = r
            if tag:
                batches[tag] = d
    return kept, batches


def finished_countries():
    done = set()
    for p in glob.glob(f'{SESSION}/workflows/wf_*.json'):
        try:
            res = json.load(open(p)).get('result')
        except (json.JSONDecodeError, OSError):
            continue
        if isinstance(res, dict) and 'batch' in res:
            done |= {c['id'] for c in res.get('countries', []) if c.get('complete')}
    return done


def build_script(template, workflow, pre):
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
    slim = {}
    for k, v in pre.items():  # the script never reads queries, and the critic reads 160 characters of each finding
        v = {kk: vv for kk, vv in v.items() if kk != 'queries'}
        if 'coverage' in v:
            v['coverage'] = [{**c, 'found': (c.get('found') or '')[:300]} for c in v['coverage']]
        slim[k] = v
    return out.replace('/*__PRE__*/{}', json.dumps(slim, ensure_ascii=False))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--script')
    ap.add_argument('--cap', type=int, default=190)
    ap.add_argument('--dump')
    a = ap.parse_args()
    kept, batches = collect()
    if a.dump:
        json.dump(kept, open(a.dump, 'w'), indent=1, ensure_ascii=False)
        print(f'{len(kept)} kept results written to {a.dump}')
        return
    groups = json.load(open(os.path.join(HERE, 'groups.json')))
    meta = {it['id']: it for g in groups for it in g}
    done = finished_countries()
    remaining = [s for s in ORDER if s not in done]
    pre = {k: v for k, v in kept.items() if slug_of(k) in remaining}
    nums = [int(t[1:]) for t in batches if re.fullmatch(r'b\d+', t)]
    batch = f'b{max(nums, default=0) + 1}'
    print(f'done {len(done)}: {", ".join(sorted(done)) or "none"}')
    print(f'remaining {len(remaining)}: {", ".join(remaining)}')
    print(f'kept results: {len(kept)} total, {len(pre)} for remaining countries')
    if a.script and remaining:
        src = build_script(open(os.path.join(HERE, 'batch_template.js')).read(), open(os.path.join(HERE, 'workflow.js')).read(), pre)
        open(a.script, 'w').write(src)
        print(f'script {a.script}: {len(src):,} chars' + ('  WARNING: over 500K' if len(src) > 500_000 else ''))
        print('ARGS ' + json.dumps({'batch': batch, 'cap': a.cap, 'items': [meta[s] for s in remaining]}))


if __name__ == '__main__':
    main()
