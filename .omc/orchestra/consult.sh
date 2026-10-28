#!/usr/bin/env bash
# 문워크 오케스트라 – 외부 모델 호출 래퍼
# usage: consult.sh <critic|scanner|verifier> "<파일경로 또는 질문>"
set -euo pipefail
ROLE="${1:?role}"; INPUT="${2:?input}"
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
CFG="$ROOT/.omc/orchestra/team.json"
OUT="$ROOT/.omc/orchestra/reviews"; mkdir -p "$OUT"
STAMP="$(date +%Y%m%d_%H%M%S)"
if [ -f "$INPUT" ]; then BN="_$(basename "${INPUT%.*}" | tr -c "A-Za-z0-9_.\n-" "_")"; else BN=""; fi
model() { python3 -c "import json,sys;c=json.load(open(sys.argv[1]));print(next(m['model'] for m in c['orchestra']+c['subagents'] if m['name']==sys.argv[2]))" "$CFG" "$1"; }
body() { if [ -f "$INPUT" ]; then printf '\n\n----- 대상 파일: %s -----\n' "$INPUT"; cat "$INPUT"; else printf '\n\n----- 질문 -----\n%s\n' "$INPUT"; fi; }
# 실행 관제 로그 (runs/current 가 있을 때만 기록)
OLOG="$ROOT/tools/olog.py"
olog() { if [ -f "$ROOT/.omc/orchestra/runs/current" ]; then python3 "$OLOG" "$@" >/dev/null 2>&1 || true; fi; }
if [ -f "$INPUT" ]; then EVF=(--file "${INPUT#$ROOT/}"); else EVF=(); fi
olog start --agent "$ROLE" --msg "외부 모델 호출 시작 ($(model "$ROLE" 2>/dev/null || echo "$ROLE"))" --why "작성자와 다른 모델이 독립적으로 검토해야 하므로" "${EVF[@]}"
trap 'olog done --agent "$ROLE" --msg "결과 저장: reviews/${STAMP}_${ROLE}${BN}.md" --file ".omc/orchestra/reviews/${STAMP}_${ROLE/verifier/verify}${BN}.md"' EXIT
case "$ROLE" in
  critic)
    PROMPT="당신은 창업 리서치 비평가다. 아래 문서의 논리 결함, 누락된 가설, 과장된 수치, 출처 없는 주장을 번호를 붙여 지적하고, 각 항목에 '심각도(상/중/하)'와 '수정 제안'을 써라. 한국어로. 문서를 다시 쓰지 말고 비판만 하라.$(body)"
    codex exec --skip-git-repo-check -m "$(model critic)" --sandbox read-only "$PROMPT" | tee "$OUT/${STAMP}_critic${BN}.md" ;;
  verifier)
    PROMPT="당신은 사실 검증자다. 아래 리서치 노트의 모든 수치·인용 주장을 표로 정리하라: | 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |. A=원출처에서 수치 일치, B=2차 출처 또는 근사치, C=확인 불가. 가능한 경우 웹에서 직접 확인하라. 한국어로.$(body)"
    codex exec --skip-git-repo-check -m "$(model verifier)" --sandbox read-only "$PROMPT" | tee "$OUT/${STAMP}_verify${BN}.md" ;;
  scanner)
    PROMPT="당신은 광역 리서치 스캐너다. 아래 질문에 대해 2023~2026년 학술 논문, 공식 통계, 산업 보고서를 최대한 폭넓게 찾아 각 항목을 '제목 / 기관·저자 / 연도 / URL / 핵심 수치 또는 결론 한 줄'로 나열하라. 최소 15건. 확인되지 않은 항목은 (미확인)으로 표시. 한국어로.$(body)"
    if GEMINI_CLI_TRUST_WORKSPACE=true gemini -m "$(model scanner)" -p "$PROMPT" > "$OUT/${STAMP}_scan${BN}.md" 2>"$OUT/${STAMP}_scan${BN}.err"; then cat "$OUT/${STAMP}_scan${BN}.md";
    else echo "[scanner] gemini 호출 실패 → codex $(model critic) 로 대체 실행 (원인: $OUT/${STAMP}_scan.err)" >&2;
         codex exec --skip-git-repo-check -m "$(model critic)" --sandbox read-only "$PROMPT" | tee "$OUT/${STAMP}_scan${BN}.md"; fi ;;
  *) echo "unknown role: $ROLE" >&2; exit 1 ;;
esac
echo "saved -> $OUT/${STAMP}_<role>${BN}.md"
