#!/usr/bin/env python3
"""Tier 0 checks for a folder of sub-agent results, one file per item: <out_dir>/<id>.<ext>.

Reports missing, unreadable and failing results, counts statuses, merges the passing records, and
writes the IDs that need a repair pass. The item ID comes from the file name, not from the file.

JSON checks (default --ext json):
  - the file parses and holds a JSON object
  - --required keys exist; --nonempty keys exist and aren't empty
  - an "id" inside the record, if present, matches the file name
  - --expect KEY=VALUE: a top-level key has exactly this value (e.g. contract_version=contract_v1)
  - --status-key / --ok-status: the record's own status counts as passing only if listed
  - --fields-key: a dict of per-field records, each with a status (--field-status-key); counted
    per field. --required-fields lists fields that must appear there.
  - --url-keys: wherever these keys appear, values must be http(s) URLs; any object whose status
    is "found" must have a non-empty URL in one of them (a missing key counts as empty)
Text checks (any other --ext): the file has at least --min-bytes and contains each --must-contain.

Not checked: whether links resolve, whether values are plausible, or what the worker actually did.
Require a non-empty list such as queries_tried as a cheap proxy for the last one.

Use --ids (not just --expected) whenever you'll repair from --write-failing: only --ids can name
the missing items.

Exit code: 0 when everything expected is present and passes, 1 otherwise.

Examples:
  python3 check_outputs.py --dir out --ids items.txt --required id,fields --fields-key fields \\
      --url-keys source_url --write-failing repair_ids.txt --merge merged.jsonl
  python3 check_outputs.py --dir notes --ext md --expected 6 --must-contain "## Sources"
"""

import argparse
import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

URL_RE = re.compile(r"^https?://\S+$")


def csv(value):
    return [v.strip() for v in value.split(",") if v.strip()] if value else []


def key_value(value):
    if "=" not in value:
        raise argparse.ArgumentTypeError("expected KEY=VALUE")
    key, val = value.split("=", 1)
    return key.strip(), val.strip()


def read_ids(path):
    ids = []
    for line in Path(path).read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line and not line.startswith("#"):
            ids.append(line)
    return ids


def is_empty(value):
    return value is None or (isinstance(value, (str, list, dict)) and len(value) == 0)


def walk(node):
    """Yield every dict inside a JSON value, including the value itself."""
    if isinstance(node, dict):
        yield node
        for v in node.values():
            yield from walk(v)
    elif isinstance(node, list):
        for v in node:
            yield from walk(v)


def check_json(record, item_id, a):
    problems = []
    if not isinstance(record, dict):
        return [f"not a JSON object ({type(record).__name__})"]
    for key in a.required:
        if key not in record:
            problems.append(f"missing key '{key}'")
    for key in a.nonempty:
        if is_empty(record.get(key)):
            problems.append(f"empty or missing '{key}'")
    if "id" in record and str(record["id"]) != item_id:
        problems.append(f"id inside file is '{record['id']}', file name says '{item_id}'")
    for key, value in a.expect:
        if str(record.get(key)) != value:
            problems.append(f"{key}={record.get(key)!r}, expected {value!r}")
    if a.status_key and a.ok_status:
        status = record.get(a.status_key)
        if status not in a.ok_status:
            problems.append(f"{a.status_key}={status!r} not in {a.ok_status}")
    if a.fields_key:
        fields = record.get(a.fields_key)
        if not isinstance(fields, dict):
            problems.append(f"'{a.fields_key}' is not an object")
        else:
            for name in a.required_fields:
                if name not in fields:
                    problems.append(f"field '{name}' missing")
            for name, field in fields.items():
                if not isinstance(field, dict) or is_empty(field.get(a.field_status_key)):
                    problems.append(f"field '{name}' has no {a.field_status_key}")
    if a.url_keys:
        for node in walk(record):
            urls = {k: node[k] for k in a.url_keys if k in node}
            for key, value in urls.items():
                if not is_empty(value) and not (isinstance(value, str) and URL_RE.match(value)):
                    problems.append(f"'{key}' is not an http(s) URL: {str(value)[:80]}")
            if node.get(a.field_status_key) == "found" and all(is_empty(node.get(k)) for k in a.url_keys):
                problems.append("a 'found' value has no source URL")
    return problems


def field_statuses(record, a):
    if not (a.fields_key and isinstance(record, dict) and isinstance(record.get(a.fields_key), dict)):
        return {}
    return {name: (f.get(a.field_status_key) if isinstance(f, dict) else None)
            for name, f in record[a.fields_key].items()}


def main():
    ap = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--dir", required=True, help="folder with one result file per item")
    ap.add_argument("--ext", default="json", help="file extension to check (default json)")
    ap.add_argument("--ids", help="file with the expected IDs, one per line")
    ap.add_argument("--expected", type=int,
                    help="expected number of results, if no --ids (can't name missing items)")
    ap.add_argument("--required", type=csv, default=[], help="comma-separated required keys")
    ap.add_argument("--nonempty", type=csv, default=[], help="keys that must be non-empty")
    ap.add_argument("--expect", type=key_value, action="append", default=[], metavar="KEY=VALUE",
                    help="top-level key that must equal VALUE; repeatable")
    ap.add_argument("--status-key", default="status", help="record-level status key")
    ap.add_argument("--ok-status", type=csv, default=[],
                    help="record statuses that pass, e.g. ok,partial (default: don't check)")
    ap.add_argument("--fields-key", help="key holding a dict of per-field records")
    ap.add_argument("--field-status-key", default="status", help="status key inside each field")
    ap.add_argument("--required-fields", type=csv, default=[], help="fields that must be present")
    ap.add_argument("--url-keys", type=csv, default=[], help="keys that hold source URLs")
    ap.add_argument("--min-bytes", type=int, default=1, help="text files: minimum size")
    ap.add_argument("--must-contain", action="append", default=[], help="text files: required text")
    ap.add_argument("--write-failing", help="write missing and failing IDs here, one per line")
    ap.add_argument("--merge", help="write passing JSON records here as JSON Lines, with _id")
    ap.add_argument("--json", action="store_true", help="print the summary as JSON")
    a = ap.parse_args()

    out_dir = Path(a.dir)
    if not out_dir.is_dir():
        sys.exit(f"not a folder: {out_dir}")
    ext = a.ext.lstrip(".")
    files = {p.stem: p for p in sorted(out_dir.glob(f"*.{ext}"))}
    expected = read_ids(a.ids) if a.ids else None
    duplicates = [i for i, n in Counter(expected or []).items() if n > 1]

    failures = {}
    statuses = Counter()
    per_field = defaultdict(Counter)
    passing = []
    for item_id, path in files.items():
        if expected is not None and item_id not in expected:
            continue
        try:
            text = path.read_text(encoding="utf-8")
        except (OSError, UnicodeDecodeError) as e:
            failures[item_id] = [f"unreadable: {e}"]
            continue
        if ext == "json":
            try:
                record = json.loads(text)
            except json.JSONDecodeError as e:
                failures[item_id] = [f"invalid JSON: {e.msg} at line {e.lineno}"]
                continue
            problems = check_json(record, item_id, a)
            if isinstance(record, dict) and a.status_key in record:
                statuses[str(record[a.status_key])] += 1
            for name, st in field_statuses(record, a).items():
                per_field[name][str(st)] += 1
        else:
            record = None
            problems = []
            if len(text.encode("utf-8")) < a.min_bytes:
                problems.append(f"smaller than {a.min_bytes} bytes")
            for needle in a.must_contain:
                if needle not in text:
                    problems.append(f"doesn't contain {needle!r}")
        if problems:
            failures[item_id] = problems
        else:
            passing.append((item_id, record))

    missing = [i for i in (expected or []) if i not in files]
    unexpected = sorted(set(files) - set(expected)) if expected is not None else []
    count_problem = None
    if expected is None and a.expected is not None and len(files) != a.expected:
        count_problem = f"found {len(files)} files, expected {a.expected}"

    to_repair = list(dict.fromkeys(missing + sorted(failures)))
    if a.write_failing:
        Path(a.write_failing).write_text("".join(f"{i}\n" for i in to_repair), encoding="utf-8")
    if a.merge and ext == "json":
        with open(a.merge, "w", encoding="utf-8") as fh:
            for item_id, record in passing:
                row = dict(record) if isinstance(record, dict) else {"value": record}
                row["_id"] = item_id
                fh.write(json.dumps(row, ensure_ascii=False) + "\n")

    checked = len(passing) + len(failures)
    summary = {
        "dir": str(out_dir), "expected": len(expected) if expected is not None else a.expected,
        "files_checked": checked, "passing": len(passing), "failing": len(failures),
        "missing": missing, "unexpected_files": unexpected, "duplicate_expected_ids": duplicates,
        "count_problem": count_problem, "record_statuses": dict(statuses),
        "field_statuses": {k: dict(v) for k, v in sorted(per_field.items())},
        "failures": failures, "to_repair": to_repair,
    }
    ok = not (failures or missing or count_problem)

    if a.json:
        print(json.dumps(summary, indent=2, ensure_ascii=False))
    else:
        total = summary["expected"] if summary["expected"] is not None else checked
        print(f"{out_dir}: {len(passing)} passing, {len(failures)} failing, {len(missing)} missing"
              f" (of {total})")
        if count_problem:
            print(f"  count: {count_problem}")
        if statuses:
            print("  record statuses: " + ", ".join(f"{k} {v}" for k, v in statuses.most_common()))
        for name, counts in sorted(per_field.items()):
            print(f"  field {name}: " + ", ".join(f"{k} {v}" for k, v in counts.most_common()))
        if missing:
            print("  missing: " + ", ".join(missing[:50]) + (" ..." if len(missing) > 50 else ""))
        if unexpected:
            print("  files not in --ids: " + ", ".join(unexpected[:20]))
        if duplicates:
            print("  duplicate IDs in --ids: " + ", ".join(duplicates))
        for item_id, problems in list(sorted(failures.items()))[:50]:
            print(f"  FAIL {item_id}: " + "; ".join(problems[:4]) +
                  (f" (+{len(problems) - 4} more)" if len(problems) > 4 else ""))
        if len(failures) > 50:
            print(f"  ... {len(failures) - 50} more failing")
        if a.write_failing:
            print(f"  wrote {len(to_repair)} IDs to repair to {a.write_failing}")
        if a.merge and ext == "json":
            print(f"  merged {len(passing)} passing records into {a.merge}")
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
