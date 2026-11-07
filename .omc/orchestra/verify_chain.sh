#!/usr/bin/env bash
# 검증 4건 순차 실행 (동시 codex 금지). 04는 이미 실행 중이면 끝날 때까지 대기.
cd "$(dirname "$0")/../.."
F04=.omc/orchestra/reviews/20261108_040523_verify_04_dialogue_dynamics_literature.md
for i in $(seq 1 80); do s=$(stat -c %s "$F04" 2>/dev/null || echo 0); if [ "$s" -gt 1000 ]; then break; fi; sleep 15; done
echo "STEP 04 done size=$s"
.omc/orchestra/consult.sh verifier "research_notes/Scopus 조사/03_tts_humanlike_literature.md" > .omc/orchestra/verify_03.log 2>&1; echo "STEP 03 exit=$?"
.omc/orchestra/consult.sh verifier "research_notes/Scopus 조사/05_ser_sota_methods_for_paper.md" > .omc/orchestra/verify_05.log 2>&1; echo "STEP 05 exit=$?"
.omc/orchestra/consult.sh verifier "research_notes/개발자 GitHub 심층 조사/developer_repos_deep_dive.md" > .omc/orchestra/verify_dev.log 2>&1; echo "STEP dev exit=$?"
echo "CHAIN DONE"
