# 문워크 오케스트라 팀 구조 (한벗 창업 리서치·개발)

> 목적: 리서치 → 분석 → 검증 → Wiki 적재까지를 역할이 분리된 다중 모델 팀이 반복 수행한다.
> 원칙: "작성자와 검증자는 다른 모델" / "Wiki에 없는 근거는 근거가 아니다" / "숫자는 출처·연도·표본 없이는 적지 않는다"

## 1. 계층 구조

```
┌──────────────────────── Orchestra (지휘부) ────────────────────────┐
│  Claude Code Opus 5.5  : 총괄 지휘 (계획, 작업 분배, 최종 합성, Wiki 적재)   │
│  GPT-6 Astra (codex)   : 제2 의견 (계획 비판, 논리 검토, 반대 가설)          │
│  Gemini 4 Argon        : 제3 의견 (광역 리서치 스캔, 다관점 교차 검토)       │
└──────────────┬────────────────────────────────┬──────────────────┘
               │                                │
   ┌───────────▼───────────┐        ┌───────────▼───────────┐
   │ 조사·분석 서브에이전트    │        │ 검증 서브에이전트         │
   │ Claude Sonnet 5.5     │        │ GPT-6.1 Sol (codex)    │
   │ - 딥리서치 트랙 수행     │        │ - 출처 실존·수치 대조     │
   │ - 노트 작성, 근거 수집   │        │ - 반례 탐색, 신뢰도 등급   │
   └───────────┬───────────┘        └───────────┬───────────┘
               └──────────────┬─────────────────┘
                              ▼
                    .omc/wiki (근거 그래프)  →  http://127.0.0.1:8791
```

## 2. 역할 정의

| 역할 | 모델 / 실행 경로 | 책임 | 산출물 |
|---|---|---|---|
| 지휘자(Conductor) | Claude Code Opus 5.5 (현재 세션) | 질문 분해, 트랙 배정, 결과 합성, Wiki ingest, 사용자 보고 | reports/*.md, .omc/wiki/*.md |
| 비평가(Critic) | GPT-6 Astra · `codex exec -m gpt-6-astra` | 계획·보고서의 논리 결함, 누락 가설, 과장 지적 | .omc/orchestra/reviews/*.md |
| 스캐너(Scanner) | Gemini 4 Argon · `gemini -m gemini-4-argon -p` | 광역 출처 탐색, 다른 모델이 못 본 자료 보강 | research_notes/**/gemini_*.md |
| 리서처(Researcher) ×N | Claude Sonnet 5.5 · Agent(general-purpose) | 트랙별 딥리서치, 수치·출처·URL 수집 | research_notes/<제목>/<트랙>.md |
| 검증자(Verifier) | GPT-6.1 Sol · `codex exec -m gpt-6.1-sol` | 노트의 각 주장에 대해 출처 실존, 수치 일치, 정의 일치 확인 → 신뢰도 A/B/C 부여 | research_notes/<제목>/verify_<트랙>.md |

## 3. 표준 파이프라인 (한 사이클)

1. **Plan** – 지휘자가 질문을 트랙으로 분해 (`.omc/orchestra/plans/<날짜>_<주제>.md`)
2. **Critique** – 비평가(Astra)가 계획 검토 → 누락 트랙·편향 지적 → 지휘자 반영
3. **Research** – 리서처(Sonnet) N개 병렬 + 스캐너(Argon) 1개 광역 스캔
4. **Verify** – 검증자(Sol)가 트랙별 노트의 주장을 표로 대조 (주장 / 출처 / 확인결과 / 등급)
5. **Synthesize** – 지휘자가 검증 통과(A/B) 근거만으로 보고서 작성, C등급은 "미확인"으로 분리
6. **Ingest** – 보고서의 근거 단위를 Wiki 페이지로 적재 (출처 1건 = source 페이지 1개, 주제 = topic 페이지, 결론 = decision 페이지), `[[링크]]`로 연결
7. **Lint** – `wiki_lint`로 고아 페이지·깨진 링크 점검, 상태 페이지(#status) 갱신

## 4. Wiki 페이지 유형 (tupa-llm-wiki 구조를 차용)

| 유형 | 카테고리 | 파일명 규칙 | 내용 |
|---|---|---|---|
| source | reference | `src-<기관>-<연도>-<키워드>` | 출처 1건: 서지정보, URL, 핵심 수치/인용, 신뢰도, 확인일 |
| topic | pattern | `topic-<주제>` | 주제 요약 + 근거 source 링크 목록 |
| claim | decision | `claim-<번호>-<요지>` | 사업계획서에 쓸 한 문장 주장 + 뒷받침 source 링크 + 반대 근거 |
| overview | architecture | `overview-<영역>` | 영역(문제정의/시장/기술/벤치마크/협업) 종합 |
| log | session-log | 자동 | 세션별 작업 기록 |

근거 그래프: claim → source, topic → source, overview → topic/claim 링크가 그래프 간선이 된다.

## 5. 호출 방법

```bash
# 비평가 (계획/보고서 검토)
bash .omc/orchestra/consult.sh critic  "<검토할 파일 경로>"
# 스캐너 (광역 리서치)
bash .omc/orchestra/consult.sh scanner "<리서치 질문>"
# 검증자 (노트 검증)
bash .omc/orchestra/consult.sh verifier "<노트 파일 경로>"
```

Claude 리서처는 Claude Code 세션 안에서 Agent 도구로 띄운다 (deep-research 스킬 사용).

## 6. 모델 ID 설정 (`team.json`) – 실제 CLI에서 쓰는 ID. 변경 시 여기만 수정.

## 7. 실행 관제 로그 (누가·무엇을·왜·어떤 근거로)

모든 에이전트는 단계마다 `tools/olog.py` 로 이벤트를 남긴다. 뷰어의 **실행 관제(#ops)** 탭이 2초마다 읽어 실시간으로 보여주고,
**지식 별자리(#graph)** 탭은 방금 읽거나 쓴 Wiki 노드를 흰색으로 맥동시킨다. 로그는 `.omc/orchestra/runs/<run>.jsonl` 에 append-only 로 남는다.

```bash
python3 tools/olog.py new "실행 제목"                                        # 지휘자: run 시작 (runs/current 생성)
python3 tools/olog.py wiki --agent researcher overview-market-demand          # Wiki 페이지 읽기 = 본문 출력 + read_wiki 기록
python3 tools/olog.py log --agent researcher --action search --msg "대학알리미 '한남대 재적학생' 검색" \
        --why "SOM 분모가 C등급이라 1차 출처로 확정해야 함" --url "https://www.academyinfo.go.kr/..."
python3 tools/olog.py log --agent researcher --action decide --msg "2025 재적학생 n명 채택" --why "공시 원표 수치이므로 A등급" --url ...
python3 tools/olog.py done --agent researcher --msg "노트 저장" --file "research_notes/.../x.md"
python3 tools/olog.py log --agent conductor --action write_wiki --msg "src-... 생성" --wiki src-... --why "..."
python3 tools/olog.py close --msg "사이클 종료"                              # 지휘자: run 종료
```

규칙
- `--why` 는 생략하지 않는다. "왜 이 출처를/이 판단을" 이 관제 화면의 핵심이다.
- 근거는 `--wiki <slug>` / `--url <URL>` / `--file <경로>` 로 반드시 첨부한다. Wiki 에 이미 있는 출처는 `olog.py wiki` 로 읽어 재사용하고 다시 검색하지 않는다.
- action 어휘: start · think · decide · search · fetch · read_wiki · write_wiki · read_file · write_file · verify · call · done · error
- `consult.sh` (비평가·검증자·스캐너 호출) 는 start/done 을 자동으로 남긴다.
- 리서처 서브에이전트 브리핑에는 위 명령과 `--agent researcher` 를 그대로 넣는다.
