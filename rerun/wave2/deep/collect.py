#!/usr/bin/env python3
"""Save one deep-search batch's result from its task output file into deep/results/<batch>.json.
Usage: collect.py <task-output-file>
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
d = json.load(open(sys.argv[1]))
r = d.get('result', d)
r = json.loads(r) if isinstance(r, str) else r
os.makedirs(os.path.join(HERE, 'results'), exist_ok=True)
json.dump(r, open(os.path.join(HERE, 'results', f"{r['batch']}.json"), 'w'), ensure_ascii=False, indent=1)
for x in r['results']:
    print(x['slug'], x.get('verdict', 'error'), x.get('score'), x.get('searches'))
