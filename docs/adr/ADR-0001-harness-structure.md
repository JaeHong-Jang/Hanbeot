# ADR-0001 하네스 폴더 구조

- 상태: 채택 (2026-11-07)
- 배경: 통화 루프·SER·위기·기억을 7주 안에 만들려면 어디에 무엇을 둘지 먼저 고정해야 한다.
- 선택: apps(web·api) / packages(contracts) / ml / data / infra / docs / scripts 분리. `domain/`은 순수 함수만, 외부 서비스는 `services/` 어댑터로만.
- 규칙: ml은 apps/api를 import하지 않는다. 공유는 `data/schemas`와 지표 정의뿐.
- 미확정 값은 `app/domain/rules.yaml`로 빼고 함수 시그니처는 고정한다.
- 대안: 단일 패키지 모노레포(경계가 흐려짐), 서비스별 저장소(7주 팀 규모에 과함).
- 결과: 규칙 변경은 yaml 숫자와 domain 테스트 한 곳에서 끝난다.
- 근거: docs/harness/README.md, 코딩-규약.md
