#!/usr/bin/env python3
"""오케스트라 실행 로그. 에이전트가 매 단계마다 '누가·무엇을·왜·어떤 근거로' 했는지 남긴다.

  python3 tools/olog.py new  "실행 제목"                      -> 새 run id 생성, .omc/orchestra/runs/current 에 기록
  python3 tools/olog.py start --agent researcher --model claude-sonnet-5-5 --msg "트랙 시작"
  python3 tools/olog.py log   --agent researcher --action search --msg "대학알리미 검색" --why "SOM 분모 확정" --url https://... --wiki overview-market-demand
  python3 tools/olog.py wiki  --agent researcher overview-market-demand   -> 페이지 본문 출력 + read_wiki 이벤트 기록
  python3 tools/olog.py done  --agent researcher --msg "노트 저장" --file research_notes/x.md
  python3 tools/olog.py close --msg "실행 종료"                 -> conductor done + current 해제

action: start | think | decide | search | fetch | read_wiki | write_wiki | read_file | write_file | verify | call | done | error
--run 생략 시 OMC_RUN 환경변수 → runs/current 순으로 찾는다.
"""
import argparse, json, os, sys, time, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RUNS = os.path.join(ROOT, ".omc", "orchestra", "runs")
WIKI = os.path.join(ROOT, ".omc", "wiki")
CUR = os.path.join(RUNS, "current")
MODELS = {"conductor": "claude-opus-5-5", "critic": "gpt-6-astra", "scanner": "gemini-4-argon",
          "researcher": "claude-sonnet-5-5", "verifier": "gpt-6.1-sol"}


def current_run(explicit=None):
    r = explicit or os.environ.get("OMC_RUN")
    if r:
        return r
    if os.path.exists(CUR):
        return open(CUR, encoding="utf-8").read().strip()
    sys.exit("실행 중인 run 이 없습니다. 먼저 `olog.py new \"제목\"` 을 실행하세요.")


def emit(run, agent, action, msg, why="", evidence=None, model=None, extra=None):
    os.makedirs(RUNS, exist_ok=True)
    ev = {"ts": time.strftime("%Y-%m-%dT%H:%M:%S"), "t": round(time.time(), 3), "run": run,
          "agent": agent, "model": model or MODELS.get(agent, ""), "action": action, "msg": msg}
    if why:
        ev["why"] = why
    if evidence:
        ev["evidence"] = evidence
    if extra:
        ev.update(extra)
    with open(os.path.join(RUNS, run + ".jsonl"), "a", encoding="utf-8") as f:
        f.write(json.dumps(ev, ensure_ascii=False) + "\n")
    return ev


def evidence_from(a):
    ev = []
    for u in a.url or []:
        ev.append({"type": "url", "ref": u})
    for w in a.wiki or []:
        ev.append({"type": "wiki", "ref": re.sub(r"\.md$", "", w)})
    for fp in a.file or []:
        ev.append({"type": "file", "ref": fp})
    return ev


def main():
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)

    def common(p):
        p.add_argument("--run")
        p.add_argument("--agent", default="conductor")
        p.add_argument("--model")
        p.add_argument("--msg", default="")
        p.add_argument("--why", default="")
        p.add_argument("--url", action="append")
        p.add_argument("--wiki", action="append")
        p.add_argument("--file", action="append")
        p.add_argument("--stage", default="")

    n = sub.add_parser("new"); n.add_argument("title"); n.add_argument("--agent", default="conductor"); n.add_argument("--why", default="")
    for c in ("start", "log", "done", "close"):
        p = sub.add_parser(c); common(p)
        if c == "log":
            p.add_argument("--action", default="think")
    w = sub.add_parser("wiki"); common(w); w.add_argument("slug"); w.add_argument("--lines", type=int, default=0)
    a = ap.parse_args()

    if a.cmd == "new":
        slug = re.sub(r"[^0-9A-Za-z가-힣]+", "-", a.title).strip("-")[:40]
        run = time.strftime("%Y%m%d_%H%M%S") + "_" + slug
        os.makedirs(RUNS, exist_ok=True)
        open(CUR, "w", encoding="utf-8").write(run)
        emit(run, a.agent, "start", a.title, why=a.why, extra={"title": a.title})
        print(run)
        return
    run = current_run(a.run)
    extra = {"stage": a.stage} if a.stage else None
    if a.cmd == "wiki":
        slug = re.sub(r"\.md$", "", a.slug)
        fp = os.path.join(WIKI, slug + ".md")
        if not os.path.exists(fp):
            emit(run, a.agent, "error", f"wiki 페이지 없음: {slug}", model=a.model)
            sys.exit(f"wiki 페이지 없음: {slug}")
        text = open(fp, encoding="utf-8").read()
        emit(run, a.agent, "read_wiki", a.msg or f"Wiki 읽기: {slug}", why=a.why,
             evidence=[{"type": "wiki", "ref": slug}], model=a.model, extra=extra)
        out = text.splitlines()
        print("\n".join(out[: a.lines] if a.lines else out))
        return
    action = {"start": "start", "done": "done", "close": "done"}.get(a.cmd) or a.action
    agent = "conductor" if a.cmd == "close" else a.agent
    emit(run, agent, action, a.msg or a.cmd, why=a.why, evidence=evidence_from(a), model=a.model, extra=extra)
    if a.cmd == "close" and os.path.exists(CUR):
        os.remove(CUR)


if __name__ == "__main__":
    main()
