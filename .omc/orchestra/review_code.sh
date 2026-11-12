#!/usr/bin/env bash
# 코드 교차 리뷰: 작성자(Claude)와 다른 모델이 변경을 읽기 전용으로 리뷰한다.
# usage: .omc/orchestra/review_code.sh <이름> "<변경 목적·중점>" [범위]
#   범위 없음        → 아직 커밋 안 된 변경(새 파일 포함)
#   범위 = 브랜치    → <브랜치>...HEAD  (예: main)
#   범위 = A...B     → 그대로 (worktree 브랜치를 메인 checkout에서 리뷰할 때)
#   REVIEWERS=codex(기본) | gemini | tester | 쉼표로 여러 개 (예: codex,gemini,tester)
# 결과: .omc/orchestra/reviews/<시각>_<종류>_<이름>[_gemini].md  (규칙: docs/harness/AI-개발-분배.md)
set -euo pipefail
NAME_RAW="${1:?리뷰 이름}"; FOCUS="${2:?변경 목적·중점}"; RANGE="${3:-}"
REVIEWERS="${REVIEWERS:-codex}"
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"; cd "$ROOT"
# shellcheck source=_common.sh
source "$ROOT/.omc/orchestra/_common.sh"
# 한글 파일 이름을 escape 없이 그대로 쓴다
git() { command git -c core.quotepath=false "$@"; }

NAME="$(printf '%s' "$NAME_RAW" | tr -c 'A-Za-z0-9_-' '_')"
# 같은 초에 여러 번 돌려도 겹치지 않게 프로세스 번호를 붙인다
STAMP="$(date +%Y%m%d_%H%M%S)_$$"
OUTDIR=".omc/orchestra/reviews"
mkdir -p "$OUTDIR" .omc/state

# 1) 두 리뷰어가 같은 입력을 보도록 diff를 한 파일로 만든다(.omc/state는 git 제외).
#    data/ 아래와 바이너리는 넣지 않는다: 원본·민감 데이터를 외부 API로 보내지 않기 위해서.
PATCH=".omc/state/review_${STAMP}.patch"
EXCLUDE=(':(exclude)data/**' ':(exclude)*.wav' ':(exclude)*.mp3' ':(exclude)*.zip')
if [ -z "$RANGE" ]; then
  { git status --short -- . "${EXCLUDE[@]}"; echo
    git diff -- . "${EXCLUDE[@]}"; git diff --cached -- . "${EXCLUDE[@]}"; } > "$PATCH"
  git ls-files -z --others --exclude-standard -- . "${EXCLUDE[@]}" |
    while IFS= read -r -d '' f; do
      case "$f" in .omc/orchestra/reviews/*|.omc/state/*) continue ;; esac
      if grep -qI . -- "$f" 2>/dev/null; then
        printf '\n--- 새 파일: %s ---\n' "$f"
        head -n 800 -- "$f"
        if [ "$(wc -l < "$f")" -gt 800 ]; then printf '\n... (800줄 이후 잘림)\n'; fi
      else
        printf '\n--- 새 파일(바이너리, 내용 생략): %s ---\n' "$f"
      fi
    done >> "$PATCH"
else
  case "$RANGE" in *...*) SPAN="$RANGE" ;; *) SPAN="${RANGE}...HEAD" ;; esac
  git diff "$SPAN" -- . "${EXCLUDE[@]}" > "$PATCH"
fi
# 변경 유무는 git이 판정한다(이름·권한만 바뀐 변경도 포함)
if [ -z "$RANGE" ]; then
  HAS_CHANGE="$(git status --porcelain -- . "${EXCLUDE[@]}" ':(exclude).omc/orchestra/reviews' ':(exclude).omc/state')"
else
  HAS_CHANGE="$(git diff --name-status "$SPAN" -- . "${EXCLUDE[@]}")"
fi
if [ -z "$HAS_CHANGE" ]; then
  echo "리뷰할 변경이 없습니다." >&2; rm -f "$PATCH"; exit 0
fi

RULES="기준 문서: CLAUDE.md, docs/harness/코딩-규약.md, docs/harness/구현-계획.md의 P0 수용 기준, docs/harness/AI-개발-분배.md.
변경 목적과 중점: ${FOCUS}"
REVIEW_ASK="볼 것: (1) 버그와 경계 조건 (2) P0 요구(AI 고지, 위기·SOS, 동의, 기억 격리, 음성 폐기)가 깨지지 않았는지 (3) 접근성(이름, aria, 포커스, 44px) (4) 규약 위반 (5) 빠진 테스트.
출력: 번호 목록. 각 항목에 심각도(상/중/하), 파일:줄, 문제, 수정 제안. 마지막에 '확인한 것 / 못 한 것' 한 줄. 한국어. 코드를 고치지 말고 리뷰만."
TEST_ASK="당신은 테스터다. 바뀐 규칙(특히 apps/api/app/domain/)마다 지금 테스트가 놓친 반례·경계 입력을 찾아라.
출력: 표 | 함수 | 입력 | 기대 결과 | 근거(설계서·구현-계획 표) | 지금 테스트에 있나 |. 그다음 바로 붙여 넣을 수 있는 pytest 함수 초안. 한국어 설명. 파일은 고치지 마."
READ_PATCH="리뷰 대상 변경은 ${PATCH} 파일에 있다(git status + diff + 새 파일). 이 파일을 먼저 읽고, 필요하면 저장소의 관련 파일도 읽어라. 명령 실행은 하지 마."

# 2) 리뷰어가 작업 트리를 바꾸지 않았는지 전후로 비교한다.
#    상태 목록만이 아니라 diff 내용과 새 파일 내용까지 해시해서, 이미 바뀐 파일을 또 고친 것도 잡는다.
tree_sig() {
  local skip=(':(exclude).omc/orchestra/reviews' ':(exclude).omc/state')
  { git status --porcelain -- . "${skip[@]}"
    git diff -- . "${skip[@]}"; git diff --cached -- . "${skip[@]}"
    git ls-files -z --others --exclude-standard -- . "${skip[@]}" | xargs -0 -r md5sum 2>/dev/null
  } | md5sum
}
BEFORE="$(tree_sig)"
FAILED=0
run_one() { # <종류> <역할> <러너> <프롬프트> <출력>
  echo "$1: $3 $(model "$2") → $5"
  set +e; "$3" "$2" "$4" "$5" "$5.err"; local s=$?; set -e
  if finish_output "$s" "$5" "$5.err"; then echo "saved -> $5"
  else echo "$1 실패 (오류: $5.err)" >&2; FAILED=1; fi
}

IFS=',' read -r -a WHO <<< "$REVIEWERS"
for who in "${WHO[@]}"; do
  case "$who" in
    codex)  run_one review reviewer codex_run "당신은 코드 리뷰어다. 작성자는 다른 모델(Claude)이다. ${READ_PATCH}
${RULES}
${REVIEW_ASK}" "${OUTDIR}/${STAMP}_codereview_${NAME}.md" ;;
    gemini) run_one review2 reviewer2 agy_run "당신은 두 번째 코드 리뷰어다. 작성자는 다른 모델(Claude)이다. view_file 도구로 읽어라: ${READ_PATCH}
${RULES}
${REVIEW_ASK}" "${OUTDIR}/${STAMP}_codereview_${NAME}_gemini.md" ;;
    tester) run_one tester tester codex_run "${READ_PATCH}
${RULES}
${TEST_ASK}" "${OUTDIR}/${STAMP}_testcases_${NAME}.md" ;;
    *) echo "모르는 리뷰어: $who (codex|gemini|tester)" >&2; FAILED=1 ;;
  esac
done

if [ "$(tree_sig)" != "$BEFORE" ]; then
  echo "경고: 리뷰 중 작업 트리가 바뀌었습니다. git status로 확인하세요." >&2; FAILED=1
fi
rm -f "$PATCH"
exit "$FAILED"
