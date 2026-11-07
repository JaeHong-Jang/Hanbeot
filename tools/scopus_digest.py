#!/usr/bin/env python3
"""Scopus 수집 결과(raw/*.jsonl)를 쿼리별 상위 목록 + 통계 Markdown 으로 요약한다.

  python3 tools/scopus_digest.py "research_notes/Scopus 조사/raw" --out "research_notes/Scopus 조사/00_digest.md" --top 20

정렬: 피인용 상위 N + 최근 2년(2025~) 상위 N 을 따로 보여준다(최근 논문은 인용이 적어서).
"""

from __future__ import annotations

import argparse
import json
from collections import Counter
from pathlib import Path
from typing import Any


def load(raw_dir: Path) -> dict[str, list[dict[str, Any]]]:
    by_query: dict[str, list[dict[str, Any]]] = {}
    for f in sorted(raw_dir.glob("*.jsonl")):
        if f.stem.startswith("_"):
            continue
        rows = [json.loads(line) for line in f.read_text(encoding="utf-8").splitlines() if line.strip()]
        by_query[f.stem] = rows
    return by_query


def row_line(p: dict[str, Any]) -> str:
    doi = f"https://doi.org/{p['doi']}" if p.get("doi") else (p.get("url") or "")
    oa = " OA" if p.get("open_access") else ""
    affil = (p.get("affiliations") or "").split(";")[0].strip()
    return f"| {p['year']} | {p['title'][:95]} | {p['venue'][:40]} | {p['cited_by']}{oa} | {affil[:30]} | {doi} |"


def section(name: str, rows: list[dict[str, Any]], top: int) -> list[str]:
    out = [f"## {name}  (수집 {len(rows)}건)", ""]
    years = Counter(r["year"] for r in rows)
    out.append("연도 분포: " + ", ".join(f"{y}:{n}" for y, n in sorted(years.items(), reverse=True)[:8]))
    venues = Counter(r["venue"] for r in rows).most_common(5)
    out.append("주요 학술지·학회: " + "; ".join(f"{v}({n})" for v, n in venues))
    oa = sum(1 for r in rows if r.get("open_access"))
    out.append(f"오픈액세스: {oa}건 ({oa * 100 // max(len(rows), 1)}%)")
    out += ["", f"### 피인용 상위 {top}", "", "| 연도 | 제목 | 게재지 | 인용 | 제1소속 | 링크 |", "|---|---|---|---|---|---|"]
    out += [row_line(p) for p in sorted(rows, key=lambda r: -r["cited_by"])[:top]]
    recent = [r for r in rows if r["year"] >= "2025"]
    out += ["", f"### 2025년 이후 상위 {top}", "", "| 연도 | 제목 | 게재지 | 인용 | 제1소속 | 링크 |", "|---|---|---|---|---|---|"]
    out += [row_line(p) for p in sorted(recent, key=lambda r: (-r["cited_by"], r["year"]))[:top]]
    out.append("")
    return out


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("raw_dir")
    ap.add_argument("--out", required=True)
    ap.add_argument("--top", type=int, default=20)
    args = ap.parse_args()
    by_query = load(Path(args.raw_dir))
    total = sum(len(v) for v in by_query.values())
    dedup_path = Path(args.raw_dir) / "_all_dedup.jsonl"
    unique = sum(1 for _ in dedup_path.open(encoding="utf-8")) if dedup_path.exists() else 0
    lines = [
        "# Scopus 수집 요약 (자동 생성)",
        "",
        f"쿼리 {len(by_query)}개, 수집 {total}건, 중복 제거 {unique}건. 원자료: `raw/*.jsonl`(초록 포함, git 제외). 쿼리 정의: `queries.yaml`.",
        "Scopus Search API 는 메타데이터·초록만 제공한다. 원문은 DOI 링크 → 출판사(기관 구독) 또는 OA 표시(OA)인 것만 바로 열 수 있다.",
        "",
    ]
    for name, rows in by_query.items():
        lines += section(name, rows, args.top)
    Path(args.out).write_text("\n".join(lines), encoding="utf-8")
    print(f"saved {args.out}: {len(by_query)} queries, {total} rows, {unique} unique")


if __name__ == "__main__":
    main()
