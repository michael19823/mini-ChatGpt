#!/usr/bin/env python3
"""Collect wave 2's 42 strong leads (both Opus checks 4+) into deep/leads.json for the deep-research pass.
Usage: build.py
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
W2 = os.path.dirname(HERE)
sys.path.insert(0, W2)
from report import COUNTRIES, candidates, load  # noqa: E402


def main():
    rows = load('rows.json', {})
    leads = []
    for c in COUNTRIES:
        kept = load(f"{c['id']}.json", {})
        res = lambda label: (kept.get(label) or {}).get('result')
        cands = candidates(kept, c)
        for l in (rows.get(c['id']) or {}).get('leads', []):
            if l.get('final') != 'verified_4':
                continue
            x = cands.get(l['id'], {})
            first = res(f"opus:{c['id']}:{l['id']}") or res(f"escalate:{c['id']}:{l['id']}") or {}
            ch = res(f"challenge:{c['id']}:{l['id']}") or {}
            leads.append({
                'slug': f"{c['id']}-{l['id'].lower()}", 'country': c['name'], 'name': l['name'],
                'first_score': first.get('suggested_score'), 'challenge': l.get('challenge'),
                'buyer': x.get('buyer'), 'trigger': x.get('trigger'), 'evidence': x.get('evidence'),
                'existing': x.get('existing'), 'unchecked': x.get('unchecked'),
                'first_check': {k: first.get(k) for k in ('duty', 'market', 'competitor', 'reason', 'sources')},
                'challenge_check': {k: ch.get(k) for k in ('killer', 'reason', 'sources')},
            })
    json.dump(leads, open(os.path.join(HERE, 'leads.json'), 'w'), ensure_ascii=False, indent=1)
    print(f'{len(leads)} strong leads written to deep/leads.json')


if __name__ == '__main__':
    main()
