#!/usr/bin/env bash
# consult.sh·review_code.sh 공용 함수. source 해서 쓴다. ROOT가 먼저 정해져 있어야 한다.
export LANG=C.UTF-8 LC_ALL=C.UTF-8 PYTHONIOENCODING=utf-8

# team.json에서 역할 이름으로 모델 ID를 찾는다. 없으면 오류로 끝낸다.
model() {
  node -e "
const c = require(process.argv[1]);
const all = [...(c.orchestra || []), ...(c.subagents || []), ...(c.dev || [])];
const m = all.find((x) => x.name === process.argv[2]);
if (!m) { console.error('team.json에 역할 없음: ' + process.argv[2]); process.exit(1); }
console.log(m.model);" "$ROOT/.omc/orchestra/team.json" "$1"
}

# codex를 읽기 전용으로 부른다. 표준 입력을 막아야 비대화형 셸에서 멈추지 않는다.
# usage: codex_run <역할> <프롬프트> <출력> <오류>
codex_run() {
  (cd "$ROOT" && codex exec --skip-git-repo-check -m "$(model "$1")" --sandbox read-only "$2") \
    < /dev/null > "$3" 2> "$4"
}

# Gemini는 Antigravity CLI(agy)로 부른다. 헤드리스 모드는 명령 실행 권한을 자동 거부하므로
# 프롬프트를 git 제외 폴더(.omc/state)에 고유 이름으로 써 두고, 읽기 권한만 허용해 그 파일을 읽게 한다.
# usage: agy_run <역할> <프롬프트> <출력> <오류>
agy_run() {
  mkdir -p "$ROOT/.omc/state"
  local file=".omc/state/agy_prompt_$(date +%Y%m%d_%H%M%S)_$$.md"
  printf '%s\n' "$2" > "$ROOT/$file"
  (cd "$ROOT" && agy --model "$(model "$1")" --print-timeout 900s \
    --settings '{"permissions":{"allow":["read(*)"]}}' \
    -p "view_file 도구로 ${file} 를 읽고 그 안의 지시를 그대로 수행하라. 파일을 만들거나 고치지 마.") \
    < /dev/null > "$3" 2> "$4"
  local status=$?
  rm -f "$ROOT/$file"
  return "$status"
}

# 실패하면 빈 결과 파일을 지우고, 성공하면 빈 오류 파일을 지운다.
# usage: finish_output <종료코드> <출력> <오류>
finish_output() {
  if [ "$1" -eq 0 ] && [ -s "$2" ]; then rm -f "$3"; return 0; fi
  [ -s "$2" ] || rm -f "$2"
  return 1
}
