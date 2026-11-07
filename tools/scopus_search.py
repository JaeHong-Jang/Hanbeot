#!/usr/bin/env python3
"""Scopus Search API로 논문 메타데이터·초록을 모아 JSONL/CSV로 저장한다.

사용:
  python3 tools/scopus_search.py run queries.yaml --out "research_notes/Scopus 조사/raw"
  python3 tools/scopus_search.py one 'TITLE-ABS-KEY("speech emotion recognition" AND korean)' --name ser_korean --max 200

키는 저장소 루트 .env 의 SCOPUS_API_KEY 에서 읽는다(.env 는 git 제외). 코드에 키를 쓰지 않는다.
Scopus Search API 는 메타데이터·초록만 준다. 원문 PDF 는 ScienceDirect/출판사 접근 권한이 따로 필요하다.
"""

from __future__ import annotations

import argparse
import csv
import json
import os
import sys
import time
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any
from urllib.parse import urlencode
from urllib.request import Request, urlopen

import yaml

ROOT = Path(__file__).resolve().parents[1]
API = "https://api.elsevier.com/content/search/scopus"
PAGE = 25  # COMPLETE view 최대 페이지 크기
SLEEP_S = 0.35  # 초당 9건 한도 아래


@dataclass(frozen=True)
class Paper:
    eid: str
    doi: str
    title: str
    year: str
    venue: str
    authors: str
    affiliations: str
    cited_by: int
    open_access: bool
    keywords: str
    abstract: str
    url: str
    query_name: str


def load_key() -> str:
    env = ROOT / ".env"
    if env.exists():
        for line in env.read_text(encoding="utf-8").splitlines():
            if line.startswith("SCOPUS_API_KEY="):
                return line.split("=", 1)[1].strip()
    key = os.environ.get("SCOPUS_API_KEY", "")
    if not key:
        sys.exit("SCOPUS_API_KEY 가 .env 에 없다")
    return key


def fetch_page(key: str, query: str, start: int) -> dict[str, Any]:
    params = {"query": query, "count": PAGE, "start": start, "view": "COMPLETE", "sort": "-citedby-count"}
    req = Request(f"{API}?{urlencode(params)}", headers={"X-ELS-APIKey": key, "Accept": "application/json"})
    with urlopen(req, timeout=60) as resp:
        return json.loads(resp.read().decode("utf-8"))


def to_paper(entry: dict[str, Any], query_name: str) -> Paper:
    affils = entry.get("affiliation") or []
    authors = entry.get("author") or []
    links = {link.get("@ref"): link.get("@href") for link in entry.get("link", [])}
    return Paper(
        eid=entry.get("eid", ""),
        doi=entry.get("prism:doi", "") or "",
        title=entry.get("dc:title", "") or "",
        year=(entry.get("prism:coverDate", "") or "")[:4],
        venue=entry.get("prism:publicationName", "") or "",
        authors="; ".join(a.get("authname", "") for a in authors),
        affiliations="; ".join(sorted({a.get("affilname", "") for a in affils if a.get("affilname")})),
        cited_by=int(entry.get("citedby-count", 0) or 0),
        open_access=str(entry.get("openaccess", "0")) == "1",
        keywords=entry.get("authkeywords", "") or "",
        abstract=entry.get("dc:description", "") or "",
        url=links.get("scopus", "") or "",
        query_name=query_name,
    )


def search(key: str, query: str, query_name: str, max_results: int) -> list[Paper]:
    papers: list[Paper] = []
    start = 0
    total = None
    while start < max_results:
        data = fetch_page(key, query, start)
        if "service-error" in data:
            print(f"[{query_name}] service-error: {data['service-error']}", file=sys.stderr)
            break
        results = data.get("search-results", {})
        if total is None:
            total = int(results.get("opensearch:totalResults", 0) or 0)
            print(f"[{query_name}] total={total}", file=sys.stderr)
        entries = results.get("entry", [])
        if not entries or "error" in entries[0]:
            break
        papers.extend(to_paper(e, query_name) for e in entries)
        start += PAGE
        if start >= total:
            break
        time.sleep(SLEEP_S)
    return papers


def write_outputs(papers: list[Paper], out_dir: Path, name: str) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    jsonl = out_dir / f"{name}.jsonl"
    with jsonl.open("w", encoding="utf-8") as f:
        for p in papers:
            f.write(json.dumps(asdict(p), ensure_ascii=False) + "\n")
    with (out_dir / f"{name}.csv").open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=list(Paper.__dataclass_fields__.keys()))
        writer.writeheader()
        for p in papers:
            row = asdict(p)
            row["abstract"] = row["abstract"][:500]
            writer.writerow(row)
    print(f"[{name}] saved {len(papers)} → {jsonl}", file=sys.stderr)


def dedupe(papers: list[Paper]) -> list[Paper]:
    seen: set[str] = set()
    unique: list[Paper] = []
    for p in papers:
        key = p.doi.lower() or p.eid
        if key in seen:
            continue
        seen.add(key)
        unique.append(p)
    return unique


def cmd_one(args: argparse.Namespace) -> None:
    key = load_key()
    papers = search(key, args.query, args.name, args.max)
    write_outputs(papers, Path(args.out), args.name)


def cmd_run(args: argparse.Namespace) -> None:
    key = load_key()
    spec = yaml.safe_load(Path(args.queries).read_text(encoding="utf-8"))
    out_dir = Path(args.out)
    everything: list[Paper] = []
    for item in spec["queries"]:
        name, query = item["name"], item["query"]
        max_results = int(item.get("max", spec.get("default_max", 100)))
        papers = search(key, query, name, max_results)
        write_outputs(papers, out_dir, name)
        everything.extend(papers)
        time.sleep(SLEEP_S)
    unique = dedupe(everything)
    write_outputs(unique, out_dir, "_all_dedup")
    print(f"총 {len(everything)}건, 중복 제거 {len(unique)}건", file=sys.stderr)


def main() -> None:
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)
    one = sub.add_parser("one")
    one.add_argument("query")
    one.add_argument("--name", required=True)
    one.add_argument("--max", type=int, default=100)
    one.add_argument("--out", default="research_notes/Scopus 조사/raw")
    one.set_defaults(func=cmd_one)
    run = sub.add_parser("run")
    run.add_argument("queries")
    run.add_argument("--out", default="research_notes/Scopus 조사/raw")
    run.set_defaults(func=cmd_run)
    args = ap.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
