1. **[상] 비대화형(Non-TTY) 셸에서 `codex exec` 표준 입력 대기로 인한 멈춤·실패 및 실패 산출물 오염**
   - **파일:줄**: [review_code.sh](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/review_code.sh#L39-L41), [consult.sh](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/consult.sh#L32-L40), [20261112_141520_codereview_dev_harness.md.err](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/reviews/20261112_141520_codereview_dev_harness.md.err#L1)
   - **문제**: Claude Code 등 에이전트 러너나 파이프 환경에서 스크립트를 실행하면 표준 입력(stdin)이 TTY가 아니어서 `codex exec`가 `Reading additional input from stdin...`을 출력하며 EOF를 기다리거나 실패한다. 실제 이번 패치에도 이전 실패 산출물인 빈 파일(`20261112_141520_codereview_dev_harness.md`)과 `.err` 파일이 추적되지 않은 채 남아 다음 리뷰 패치(`.omc/state/review_20261112_143340.patch`)에 그대로 혼입되었다.
   - **수정 제안**: 모든 `codex exec` 및 `agy` 호출에 `< /dev/null`을 붙이고, 실패 시 빈 `$OUT` 파일을 지우도록(`rm -f "$OUT"`) 처리하라. 작업 트리에 남아 있는 `20261112_141520_codereview_dev_harness.md` 및 `.err` 파일은 삭제하고 [.gitignore](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.gitignore)에 `.omc/orchestra/reviews/*.err`를 추가하라.

2. **[상] Windows Git Bash에서 멀티라인·따옴표·특수문자가 포함된 프롬프트 CLI 인자 전달 버그**
   - **파일:줄**: [consult.sh](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/consult.sh#L16-L20), [review_code.sh](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/review_code.sh#L39-L40), [review_code.sh](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/review_code.sh#L48-L51)
   - **문제**:
     1. `consult.sh`의 `agy_run`은 `${#prompt} -gt 20000`일 때만 파일(`.omc/state/agy_prompt.md`)로 우회한다. 그러나 Windows에서 `agy`나 `codex`가 `.cmd` 래퍼를 거칠 경우, 20,000자 이하라도 `$(body)`에 개행·큰따옴표(`"`)·`& | < > ^ %`가 들어 있으면 `cmd.exe` 인자 파싱이 깨지거나 CP949 콘솔 코드페이지 환경에서 한글 인코딩이 손상된다.
     2. `.omc/state/agy_prompt.md`라는 고정 파일명을 써서 스캐너를 병렬 실행하면 파일 덮어쓰기 경쟁 조건(race condition)이 발생한다.
     3. `review_code.sh`에서도 `FOCUS`나 `BASE`에 따옴표·개행이 포함되면 `-p "..."` 인자가 깨진다.
   - **수정 제안**:
     - `consult.sh`의 `agy_run`은 길이와 무관하게 항상 고유 파일(`.omc/state/agy_prompt_${STAMP}_$$.md`)에 UTF-8로 기록한 뒤 짧은 고정 프롬프트만 `-p`로 넘기고 종료 시 정리하라.
     - 스크립트 상단에 `export LANG=C.UTF-8 LC_ALL=C.UTF-8 PYTHONIOENCODING=utf-8`을 선언해 Windows Git Bash 인코딩 깨짐을 방지하라.

3. **[상] 미추적 파일 일괄 덤프로 인한 민감 데이터·바이너리 유출 및 UTF-8 절단 위험 (P0·규약 5·6절)**
   - **파일:줄**: [review_code.sh](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/review_code.sh#L24-L28), [AI-개발-분배.md](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/docs/harness/AI-개발-분배.md#L48)
   - **문제**:
     1. [.gitignore](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.gitignore#L26-L31)에서 `data/eval/`은 `data/eval/**/audio/`만 제외되어 있어, `data/eval/v0/crisis/`(위기 시나리오)나 `data/eval/v0/turn/`의 전사·메타 파일, 또는 실수로 만든 미추적 데이터 파일이 `git ls-files --others --exclude-standard`를 통해 `$PATCH`에 합쳐져 외부 API(`codex`, `agy`)로 전송될 수 있다([AI-개발-분배.md](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/docs/harness/AI-개발-분배.md#L48)의 "원본 데이터는 해외 API에 넣지 않는다" 위반 소지).
     2. 미추적 파일이 이미지·오디오 등 바이너리일 때도 `head -c 60000`으로 `$PATCH`에 그대로 합쳐져 NUL 바이트로 패치 파일이 깨진다.
     3. `head -c 60000`은 바이트 단위 절단이라 한글 UTF-8(3바이트) 경계 중간을 잘라 잘못된 UTF-8 시퀀스를 만들 수 있고, 잘렸다는 표시도 없다.
   - **수정 제안**:
     - `data/` 하위 데이터 파일이나 바이너리 파일(`git diff --numstat` 또는 `file --mime` / 확장자 필터)은 `$PATCH` 덤프에서 제외하라.
     - 바이트 절단 대신 줄 단위(`head -n 800` 등)로 자르고, 초과 시 `\n... (truncated)` 표시를 남겨라.

4. **[중] `agy` 도구 이름 불일치(`view_file`·`grep_search`) 및 읽기 전용 강제 한계**
   - **파일:줄**: [consult.sh](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/consult.sh#L18-L20), [review_code.sh](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/review_code.sh#L48-L51), [AI-개발-분배.md](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/docs/harness/AI-개발-분배.md#L21-L24)
   - **문제**:
     1. 프롬프트에서 `view_file`과 `grep_search` 도구를 쓰라고 지시하지만, Antigravity CLI(`agy`)의 실제 파일 읽기 도구 이름은 `read_file`이며 `grep_search`는 기본 도구 목록에 없을 수 있다.
     2. `consult.sh`의 `scanner` 역할은 최신 논문·통계 URL을 웹에서 찾아야 하는데(`search_web`), `--settings '{"permissions":{"allow":["read(*)"]}}'`만 허용하면 환경에 따라 웹 검색 권한이 차단될 수 있다.
     3. `AI-개발-분배.md` 24줄은 `--settings '{"permissions":{"allow":["read(*)"]}}'`로 읽기만 허용된다고 설명하지만, 이 설정은 `read(*)` 자동 승인일 뿐 워크스페이스 내 `write_file`·`edit_file` 도구 노출 자체를 샌드박스 수준으로 막지 않는 경우가 있다.
   - **수정 제안**: 프롬프트의 도구 안내를 `read_file(또는 view_file)`로 명확히 고치고, `review_code.sh` 실행 전후로 `git status --porcelain` 또는 `git diff` 해시를 비교해 리뷰어가 파일을 수정하지 않았는지 스크립트에서 검증하라. `scanner`에서는 웹 검색(`search_web`) 동작 여부를 확인해 권한 설정을 조정하라.

5. **[중] `review_code.sh` 출력 폴더 미생성, `NAME` 경로 문자 미검증, 빈 diff 호출**
   - **파일:줄**: [review_code.sh](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/review_code.sh#L8-L28), [review_code.sh](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/review_code.sh#L36-L43)
   - **문제**:
     1. `OUTDIR=".omc/orchestra/reviews"`만 선언하고 `mkdir -p "$OUTDIR"`가 없어, 새 클론이나 worktree에서 실행 시 `> "$OUT"` 리다이렉션이 즉시 실패한다.
     2. `NAME`에 `feat/call`처럼 `/`나 공백이 들어오면 파일 경로 오류로 실패한다(`consult.sh`는 `tr`로 치환하지만 `review_code.sh`는 치환하지 않음).
     3. `codex`가 먼저 실행될 때 생성되는 `$OUT` 및 `$OUT.err` 파일이 미추적 상태이므로, `codex`가 내부에서 `git status`를 실행하면 자기 자신의 출력 파일을 변경 대상에 포함해 본다. 또한 `codex`는 직접 `git diff`를 실행하고 `gemini`는 `$PATCH`를 읽게 되어 있어 두 리뷰어가 보는 입력이 시점·구성에 따라 달라질 수 있다.
     4. 변경 사항이 전혀 없을 때(`$PATCH`가 비어 있을 때)도 외부 모델을 호출한다.
   - **수정 제안**: `mkdir -p "$OUTDIR"`를 추가하고, `SAFE_NAME="$(printf '%s' "$NAME" | tr -c 'A-Za-z0-9_-' '_')"`로 정규화하라. `$PATCH`가 비어 있으면 즉시 종료하고, `codex`와 `gemini` 모두 동일한 `$PATCH` 파일을 기준으로 리뷰하게 통일하라.

6. **[중] `consult.sh`의 `trap` 파일명·성공 판정 버그 및 에러 로그 경로 오타**
   - **파일:줄**: [consult.sh](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/consult.sh#L24-L28), [consult.sh](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/consult.sh#L38-L39)
   - **문제**:
     1. 28줄 `trap`에서 `${ROLE/verifier/verify}`만 치환하여 `ROLE=scanner`일 때 관제 로그(`olog.py`)에는 `..._scanner${BN}.md`로 기록되지만, 실제 38줄에서 저장하는 파일명은 `..._scan${BN}.md`여서 파일 링크가 깨진다.
     2. `trap ... EXIT`가 실패 종료(`exit 1`) 시에도 무조건 `olog done --msg "결과 저장: ..."`을 기록한다.
     3. 38줄에서 `agy_run` 성공 시 빈 `.err` 파일을 지우지 않으며, 39줄 실패 안내 메시지는 `$OUT/${STAMP}_scan.err`로 `${BN}`이 누락되어 실제 에러 파일 경로(`$OUT/${STAMP}_scan${BN}.err`)와 다르다.
     4. 11줄 주석에 `python3이 없는 PC가 있어 node 사용`이라고 적어 놓고 25줄 `olog()`에서는 여전히 `python3 "$OLOG"`만 호출한다.
   - **수정 제안**: 스캐너 출력 파일명을 `_scanner`로 통일하거나 `trap`에서 매핑하고, 종료 코드(`$?`)가 0일 때만 `done`, 아니면 `error`를 기록하라. 38줄 성공 시 `rm -f "$OUT/${STAMP}_scan${BN}.err"`를 추가하고 39줄에 `${BN}`을 넣어라.

7. **[중] `AI-개발-분배.md`의 규칙과 실제 실행 도구·브랜치 규약 간의 불일치**
   - **파일:줄**: [AI-개발-분배.md](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/docs/harness/AI-개발-분배.md#L15-L38), [AI-개발-분배.md](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/docs/harness/AI-개발-분배.md#L68-L78), [코딩-규약.md](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/docs/harness/코딩-규약.md#L101-L105)
   - **문제**:
     1. **테스터(`tester`) 실행 경로 부재**: `team.json`과 `AI-개발-분배.md` 18·36·44줄에서 `domain/` 변경 시 `tester`(`gpt-6.1-sol`) 반례 확인을 필수로 규정했으나, `review_code.sh`와 `consult.sh` 어느 쪽에도 `tester`를 호출하는 옵션이나 명령어가 없다.
     2. **worktree 격리 구현과 `review_code.sh` 충돌**: 구현자는 `isolation: worktree`에서 작업하는데, `review_code.sh`는 스크립트 위치 기준 `ROOT`로 `cd`한 뒤 현재 작업 트리나 `BASE...HEAD`만 비교하므로 다른 worktree 브랜치를 지정해 리뷰할 수 없고, worktree 안에서 실행하면 리뷰 기록 파일(`.omc/orchestra/reviews/...`)이 임시 worktree에 남아 소실될 수 있다.
     3. **브랜치 규약 충돌**: `AI-개발-분배.md` 33줄(`⑧ 커밋·푸시 front_develop`)은 백엔드·도메인·ML 작업을 포함한 모든 작업의 푸시 대상을 `front_develop`으로 고정하고 있어, [코딩-규약.md](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/docs/harness/코딩-규약.md#L103)의 브랜치 규칙(`feat/<p0-id>-<짧은설명>`, `fix/…`, `exp/<ml-실험>`)과 충돌한다.
   - **수정 제안**: `review_code.sh`에 `REVIEWERS=tester` 모드(또는 별도 `test_cases.sh`)와 대상 브랜치/경로 인자를 추가하고, 브랜치 규칙은 `코딩-규약.md` 7절을 따르도록 `AI-개발-분배.md` 33줄을 수정하라.

8. **[중] P0 핵심 안전·격리 모듈에 대한 제2 리뷰어(`gemini`) 필수 조건 누락**
   - **파일:줄**: [AI-개발-분배.md](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/docs/harness/AI-개발-분배.md#L17), [AI-개발-분배.md](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/docs/harness/AI-개발-분배.md#L40-L48), [구현-계획.md](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/docs/harness/구현-계획.md#L30-L36)
   - **문제**: 1절(17줄)과 `team.json`에서는 제2 리뷰어 대상을 "domain 규칙·계약·위기·동의처럼 중요한 변경"으로 정의했지만, 정작 3절 표(40~48줄)에서는 `apps/api/app/domain/`과 `packages/contracts`에만 리뷰어 2명을 필수로 두었다. P0 수용 기준에 직결되는 위기 게이트·태그 파서(`keyword_gate.py`, `risk_tag_parser.py`, `features/crisis/`), 3단 동의·철회(`api/consents.py`, `onboarding/`, `settings/`), 기억 RLS 격리·삭제 큐(`db/session.py`, `infra/db/migrations/`, `workers/deletion.py`, `ser_emotion2vec.py` 임시 WAV 즉시 삭제), AI 고지 문구(`shared/strings/disclosure.ts`)가 2인 리뷰 필수 조건에서 빠져 있으며, `infra/`·`db/`·`workers/`는 표의 영역 열에 아예 없다.
   - **수정 제안**: 3절 표에 `infra/db/migrations`·`apps/api/app/db`·`workers`를 추가하고, P0 안전·법적 요구(P0-6 위기, P0-7 동의, P0-8/9 기억 격리, P0-10 음성 즉시 폐기·24h 삭제, P0-12 AI 고지) 관련 파일 변경 시 `REVIEWERS=codex,gemini` 2인 리뷰를 필수로 명시하라.

9. **[하] `TEAM.md`·`olog.py`·`wiki_server.py`와 `team.json` 단일 진실 공급원(SSOT) 불일치**
   - **파일:줄**: [TEAM.md](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/TEAM.md#L20), [TEAM.md](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/TEAM.md#L71-L75), [team.json](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/team.json#L56-L85), [olog.py](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/tools/olog.py#L20-L21), [wiki_server.py](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/tools/wiki_server.py#L132-L146)
   - **문제**:
     1. `TEAM.md` 71줄과 `AI-개발-분배.md` 4줄은 모델 ID를 `team.json` 한 곳에서만 바꾼다고 명시했으나, `tools/olog.py` 20~21줄은 모델 사전을 하드코딩(`"scanner": "gemini-4-argon"`)하고 있고 `dev` 역할들이 없다.
     2. `tools/wiki_server.py` 132~146줄은 `team.json`의 `dev` 배열을 읽지 않고 `.omc/orchestra/reviews/` 내 `_verify_`가 아닌 모든 파일(새로 추가된 `_codereview_`, `_codereview_..._gemini`, `_scan_`)의 작성자를 `critic`으로 분류한다.
     3. `TEAM.md` 20줄은 스캐너 산출물 경로를 `research_notes/**/gemini_*.md`로 적고 있으나 `consult.sh`는 `.omc/orchestra/reviews/${STAMP}_scan${BN}.md`에 저장하며, `review_code.sh`는 `TEAM.md` 7절의 `olog.py` 관제 로그를 남기지 않는다.
   - **수정 제안**: `olog.py`와 `wiki_server.py`가 `team.json`의 `orchestra`·`subagents`·`dev`를 동적으로 읽고 파일명 접두사(`_codereview_`, `_gemini`, `_scan_`)에 따라 담당 에이전트를 매핑하도록 맞추며, `review_code.sh`에도 `olog` 호출을 추가하라.

10. **[하] `CLAUDE.md`와 `AGENTS.md` 전문 중복 및 모델检索 함수 중복(규약 1절 위반)**
    - **파일:줄**: [CLAUDE.md](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/CLAUDE.md#L1-L34), [AGENTS.md](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/AGENTS.md#L1-L34), [consult.sh](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/consult.sh#L12), [review_code.sh](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/.omc/orchestra/review_code.sh#L13)
    - **문제**:
      1. `CLAUDE.md`와 `AGENTS.md`가 34줄 전체 동일 본문으로 중복되어 있어 향후 규약 수정 시 불일치가 발생하기 쉽다. 또한 33줄의 요약문(`구현 Claude, 교차 리뷰 codex`)에 제2 리뷰어(`gemini`)와 테스터가 빠져 있다.
      2. `consult.sh`와 `review_code.sh`에 `team.json` 조회용 `model()` 함수와 `agy` 호출 로직이 서로 조금씩 다르게 중복 작성되어 있으며([코딩-규약.md](file:///C:/Users/User/Desktop/프로젝트/05_창업관련/AI_부트캠프_창업동아리/docs/harness/코딩-규약.md#L7) "두 번 쓰면 함수다" 위반), 찾는 역할명이 없을 때 `undefined.model`로 비정상 종료된다.
      3. 새로 추가된 셸 스크립트(`.omc/orchestra/*.sh`)의 문법(`bash -n`) 및 `CLAUDE.md`/`AGENTS.md` 동기화를 검증하는 테스트가 없다.
    - **수정 제안**: `.omc/orchestra/`에 공용 헬퍼(`_common.sh`)를 두어 `model()`과 `agy_run()`을 통합하고, `scripts/lint-all.sh`에 `bash -n .omc/orchestra/*.sh` 및 `cmp -s CLAUDE.md AGENTS.md` 검사를 추가하라.

확인한 것: 패치 파일(`.omc/state/review_20261112_143340.patch`) 전체 및 변경·연관 파일(`TEAM.md`, `consult.sh`, `review_code.sh`, `team.json`, `CLAUDE.md`, `AGENTS.md`, `AI-개발-분배.md`, `코딩-규약.md`, `구현-계획.md`, `docs/harness/README.md`, `.gitignore`, `tools/olog.py`, `tools/wiki_server.py`) 정적 대조 완료 / 못 한 것: 명령 실행 금지 조건에 따라 Windows Git Bash에서 `review_code.sh`·`consult.sh` 실제 실행 및 `agy`·`codex` 런타임 동작은 확인하지 못함.
