#!/usr/bin/env python3
"""문워크 LLM Wiki 뷰어 – .omc/wiki 마크다운을 그래프/상태 페이지와 함께 서빙한다.

실행:  python3 tools/wiki_server.py            (기본 127.0.0.1:8791)
       python3 tools/wiki_server.py --port 8790
브라우저: http://127.0.0.1:8791/#status
"""
import argparse
import json
import os
import re
import sys
import time
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote, urlparse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WIKI = os.path.join(ROOT, ".omc", "wiki")
NOTES = os.path.join(ROOT, "research_notes")
REPORTS = os.path.join(ROOT, "reports")
ORCH = os.path.join(ROOT, ".omc", "orchestra")
VIEWER = os.path.join(os.path.dirname(os.path.abspath(__file__)), "wiki_viewer.html")

FM_RE = re.compile(r"^---\n(.*?)\n---\n", re.S)
LINK_RE = re.compile(r"\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]")


def parse_frontmatter(text):
    m = FM_RE.match(text)
    meta = {}
    if not m:
        return meta, text
    for line in m.group(1).splitlines():
        if ":" not in line:
            continue
        k, v = line.split(":", 1)
        v = v.strip()
        if v.startswith("["):
            try:
                v = json.loads(v)
            except Exception:
                v = [s.strip().strip('"') for s in v.strip("[]").split(",") if s.strip()]
        else:
            v = v.strip('"')
        meta[k.strip()] = v
    return meta, text[m.end():]


def slug_of(name):
    return re.sub(r"\.md$", "", name)


_CACHE = {}


def load_pages():
    pages = {}
    if not os.path.isdir(WIKI):
        return pages
    seen = set()
    for fn in sorted(os.listdir(WIKI)):
        if not fn.endswith(".md") or fn in ("index.md", "log.md"):
            continue
        path = os.path.join(WIKI, fn)
        st = os.stat(path)
        key = (st.st_mtime, st.st_size)
        seen.add(fn)
        cached = _CACHE.get(fn)
        if cached and cached[0] == key:
            pages[cached[1]["slug"]] = cached[1]
            continue
        with open(path, encoding="utf-8") as f:
            raw = f.read()
        meta, body = parse_frontmatter(raw)
        links = sorted({slug_of(l.strip()) for l in LINK_RE.findall(body)})
        slug = slug_of(fn)
        pages[slug] = {
            "slug": slug,
            "title": meta.get("title", slug),
            "category": meta.get("category", "uncategorized"),
            "tags": meta.get("tags", []) if isinstance(meta.get("tags"), list) else [],
            "confidence": meta.get("confidence", ""),
            "sources": meta.get("sources", []) if isinstance(meta.get("sources"), list) else [],
            "created": meta.get("created", ""),
            "updated": meta.get("updated", ""),
            "links": links,
            "size": len(raw),
            "mtime": st.st_mtime,
            "body": body,
        }
        _CACHE[fn] = (key, pages[slug])
    for fn in list(_CACHE):
        if fn not in seen:
            del _CACHE[fn]
    return pages


def build_graph(pages):
    nodes, edges, missing = [], [], set()
    for p in pages.values():
        nodes.append({"id": p["slug"], "label": p["title"], "category": p["category"],
                      "confidence": p["confidence"], "size": p["size"], "tags": p["tags"]})
        for l in p["links"]:
            if l in pages:
                edges.append({"from": p["slug"], "to": l})
            else:
                missing.add(f"{p['slug']} -> {l}")
    inbound = {p: 0 for p in pages}
    for e in edges:
        inbound[e["to"]] += 1
    orphans = [s for s, n in inbound.items() if n == 0 and not pages[s]["links"]]
    return {"nodes": nodes, "edges": edges, "broken_links": sorted(missing), "orphans": sorted(orphans)}


# 실행 층: 팀원(모델) 노드 + 산출물(계획·노트·검증·비평·보고서) 노드를 Wiki 종합 페이지에 연결한다.
TRACK_PAGE = {
    "problem_definition": "overview-problem-definition",
    "market_demand": "overview-market-demand",
    "technology": "overview-technology",
    "benchmark_competitors": "overview-benchmark",
    "researcher_collaboration": "overview-researcher-collaboration",
}


def exec_layer(pages):
    team = read_json(os.path.join(ORCH, "team.json"), {})
    nodes, edges = [], []
    members = []
    c = team.get("conductor")
    if c:
        members.append(("conductor", c))
    for m in team.get("orchestra", []) + team.get("subagents", []):
        members.append((m.get("name", "?"), m))
    for name, m in members:
        nid = "member:" + name
        nodes.append({"id": nid, "label": f"{name} · {m.get('model', '')}", "category": "member",
                      "tags": ["팀원", name], "role": m.get("role", ""), "provider": m.get("provider", "")})
        if "overview-orchestra-team" in pages:
            edges.append({"from": nid, "to": "overview-orchestra-team"})

    def owner(kind, fn):
        if kind == "reviews":
            return "verifier" if "_verify_" in fn else "critic"
        if kind == "notes":
            return "researcher"
        return "conductor"

    def track_of(fn):
        for k, v in TRACK_PAGE.items():
            if k in fn:
                return v
        return "overview-research-cycle-1"

    groups = [("plans", list_dir(os.path.join(ORCH, "plans"))), ("notes", list_dir(NOTES)),
              ("reviews", list_dir(os.path.join(ORCH, "reviews"))), ("reports", list_dir(REPORTS))]
    for kind, files in groups:
        for f in files:
            fn = os.path.basename(f["path"])
            nid = "run:" + f["path"]
            label = re.sub(r"^\d{8}_\d{6}_", "", fn).replace(".md", "").rstrip("_")
            nodes.append({"id": nid, "label": label, "category": "run", "kind": kind,
                          "path": f["path"], "size": f["size"], "mtime": f["mtime"],
                          "tags": ["실행기록", kind]})
            own = "member:" + owner(kind, fn)
            if any(n["id"] == own for n in nodes):
                edges.append({"from": own, "to": nid})
            tp = track_of(fn)
            if tp in pages:
                edges.append({"from": nid, "to": tp})
    return {"nodes": nodes, "edges": edges}


def list_dir(path, exts=(".md",)):
    out = []
    if not os.path.isdir(path):
        return out
    for dp, _, fns in os.walk(path):
        for fn in sorted(fns):
            if fn.endswith(exts):
                fp = os.path.join(dp, fn)
                out.append({"path": os.path.relpath(fp, ROOT), "size": os.path.getsize(fp),
                            "mtime": os.path.getmtime(fp)})
    return out


def read_json(path, default):
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return default


RUNS = os.path.join(ORCH, "runs")


def read_events(path):
    evs = []
    try:
        with open(path, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    evs.append(json.loads(line))
                except Exception:
                    pass
    except FileNotFoundError:
        pass
    return evs


def run_summary(run_id, evs):
    agents = {}
    wiki_read, wiki_write, urls, files = {}, {}, {}, {}
    for e in evs:
        a = agents.setdefault(e.get("agent", "?"), {"model": e.get("model", ""), "n": 0, "last": "", "state": "대기",
                                                     "search": 0, "fetch": 0, "read_wiki": 0, "write_wiki": 0, "verify": 0})
        a["n"] += 1
        a["last"] = e.get("msg", "")
        a["last_ts"] = e.get("ts", "")
        act = e.get("action", "")
        if act in a:
            a[act] += 1
        if act == "start":
            a["state"] = "작업중"
        elif act == "done":
            a["state"] = "완료"
        elif act == "error":
            a["state"] = "오류"
        elif a["state"] == "대기":
            a["state"] = "작업중"
        for ev in e.get("evidence", []) or []:
            ref = ev.get("ref", "")
            if ev.get("type") == "wiki":
                (wiki_write if act == "write_wiki" else wiki_read)[ref] = (wiki_write if act == "write_wiki" else wiki_read).get(ref, 0) + 1
            elif ev.get("type") == "url":
                urls[ref] = urls.get(ref, 0) + 1
            elif ev.get("type") == "file":
                files[ref] = files.get(ref, 0) + 1
    cur = ""
    if os.path.exists(os.path.join(RUNS, "current")):
        cur = open(os.path.join(RUNS, "current"), encoding="utf-8").read().strip()
    last_t = evs[-1].get("t", 0) if evs else 0
    return {"id": run_id, "title": next((e.get("title") for e in evs if e.get("title")), run_id),
            "started": evs[0].get("ts", "") if evs else "", "last": evs[-1].get("ts", "") if evs else "",
            "n": len(evs), "active": cur == run_id, "idle_s": round(time.time() - last_t) if last_t else None,
            "agents": agents, "wiki_read": wiki_read, "wiki_write": wiki_write, "urls": urls, "files": files}


def list_runs():
    out = []
    if not os.path.isdir(RUNS):
        return out
    for fn in sorted(os.listdir(RUNS), reverse=True):
        if fn.endswith(".jsonl"):
            rid = fn[:-6]
            out.append(run_summary(rid, read_events(os.path.join(RUNS, fn))))
    return out


def status():
    pages = load_pages()
    graph = build_graph(pages)
    by_cat = {}
    for p in pages.values():
        by_cat[p["category"]] = by_cat.get(p["category"], 0) + 1
    log_tail = []
    lp = os.path.join(WIKI, "log.md")
    if os.path.exists(lp):
        with open(lp, encoding="utf-8") as f:
            log_tail = [l.rstrip() for l in f.readlines() if l.strip()][-30:]
    return {
        "generated": time.strftime("%Y-%m-%d %H:%M:%S"),
        "team": read_json(os.path.join(ORCH, "team.json"), {}),
        "wiki": {"pages": len(pages), "by_category": by_cat,
                 "broken_links": graph["broken_links"], "orphans": graph["orphans"]},
        "research_notes": list_dir(NOTES),
        "reports": list_dir(REPORTS),
        "reviews": list_dir(os.path.join(ORCH, "reviews")),
        "plans": list_dir(os.path.join(ORCH, "plans")),
        "log_tail": log_tail,
        "runs": [{k: v for k, v in r.items() if k in ("id", "title", "started", "last", "n", "active", "idle_s")} for r in list_runs()[:5]],
    }


class Handler(SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):  # quieter
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))

    def send_json(self, obj):
        data = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(data)

    def send_text(self, text, ctype="text/plain"):
        data = text.encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", f"{ctype}; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        u = urlparse(self.path)
        path = unquote(u.path)
        if path in ("/", "/index.html"):
            with open(VIEWER, encoding="utf-8") as f:
                return self.send_text(f.read(), "text/html")
        if path == "/api/status":
            return self.send_json(status())
        if path == "/api/pages":
            pages = load_pages()
            return self.send_json([{k: v for k, v in p.items() if k != "body"} for p in pages.values()])
        if path == "/api/graph":
            pages = load_pages()
            g = build_graph(pages)
            g["exec"] = exec_layer(pages)
            return self.send_json(g)
        if path == "/api/runs":
            return self.send_json(list_runs())
        if path.startswith("/api/run/"):
            rid = path[len("/api/run/"):]
            if rid == "latest":
                runs = list_runs()
                if not runs:
                    return self.send_json({"id": None, "events": [], "total": 0})
                rid = runs[0]["id"]
            if "/" in rid or ".." in rid:
                self.send_error(400)
                return
            qs = dict(p.split("=", 1) for p in u.query.split("&") if "=" in p)
            after = int(qs.get("after", 0) or 0)
            evs = read_events(os.path.join(RUNS, rid + ".jsonl"))
            s = run_summary(rid, evs)
            s["events"] = evs[after:]
            s["total"] = len(evs)
            return self.send_json(s)
        if path.startswith("/api/page/"):
            slug = slug_of(path[len("/api/page/"):])
            pages = load_pages()
            if slug in pages:
                p = pages[slug]
                backlinks = [q["slug"] for q in pages.values() if slug in q["links"]]
                return self.send_json({**p, "backlinks": backlinks})
            self.send_error(404, "page not found")
            return
        if path.startswith("/api/file/"):
            rel = path[len("/api/file/"):]
            fp = os.path.normpath(os.path.join(ROOT, rel))
            allowed = (NOTES, REPORTS, ORCH)
            if fp.startswith(allowed) and os.path.isfile(fp) and fp.endswith(".md"):
                with open(fp, encoding="utf-8", errors="replace") as f:
                    return self.send_text(f.read(), "text/markdown")
            self.send_error(403, "not allowed")
            return
        self.send_error(404)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--host", default="127.0.0.1")
    ap.add_argument("--port", type=int, default=8791)
    a = ap.parse_args()
    os.makedirs(WIKI, exist_ok=True)
    httpd = ThreadingHTTPServer((a.host, a.port), Handler)
    print(f"Wiki viewer: http://{a.host}:{a.port}/#status  (wiki={WIKI})", flush=True)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
