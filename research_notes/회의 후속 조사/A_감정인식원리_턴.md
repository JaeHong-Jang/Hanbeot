# A. 음성 감정 인식은 어떻게 감정을 알아내나 · "턴"이란 무엇인가 · Whisper로 감정 인식한 조합

> 작성일 2026-11-07 · 회의 질문 3가지 답변
> - Q1. 음성 감정 인식(SER)은 어떻게 감정을 인식하나
> - Q2. "턴(turn)"이라는 단위가 뭔지
> - Q3. Whisper로 감정 인식을 한 연구들은 어떤 조합이었나
>
> 기존 노트와 겹치는 내용은 이름만 인용함: `IJ_맥락_개인화.md`(맥락 창), `BC_라벨기준_복합감정.md`(라벨 만드는 법), `H2_가중치_근거보강.md`(음성·텍스트 가중치), `DE_Whisper_스펙트로그램.md`(Whisper·스펙트로그램)
>
> 검증 표시: 🟢 원문(PDF 본문·코드·공식 모델 카드)을 열어 숫자 직접 확인 · 🟡 초록·2차 출처만 확인 · **확인 필요** = 못 찾음

---

## 한 줄 결론

> 💬 **SER은 "소리 → 숫자 특징 → 모델 → 감정별 확률" 순서로 작동함. emotion2vec+도 마지막에 9개 감정별 확률(softmax 점수)을 내놓는 분류기임**
>
> 💬 **"턴" = 한 사람이 말하기 시작해서 상대에게 넘기기 전까지의 말 한 덩어리. ERC 논문의 "w턴"은 양쪽 화자 발화를 합쳐 센 개수라서, 기존 노트의 "사용자·한벗 합쳐 6~10턴" ≈ 3~5왕복이 맞음**
>
> 💬 **Whisper 감정 인식은 대부분 "디코더 버리고 인코더만 + 위에 작은 분류기" 구조. 같은 Whisper라도 얼리는지/LoRA인지, 몇 번째 층·어떤 풀링을 쓰는지에 따라 IEMOCAP 43%~77%까지 갈림**

---

# Q1. 음성 감정 인식은 어떻게 감정을 인식하나

## 1-1. 전체 흐름 한눈에

```
[마이크 소리]
     │  16kHz로 녹음 (1초에 16,000개 숫자)
     ▼
[특징 추출]  ── 옛 방식: 사람이 정한 공식 (피치·크기·MFCC·eGeMAPS)
     │       ── 요즘 방식: 대용량 음성으로 스스로 배운 신경망 (wav2vec2·HuBERT·WavLM·emotion2vec)
     ▼
[분류기(헤드)] 작은 신경망: 특징 벡터 → 감정별 점수
     ▼
[softmax] 점수를 합이 1인 확률로 바꿈
     ▼
화남 0.05 · 기쁨 0.10 · 중립 0.55 · 슬픔 0.25 · ...  → 가장 큰 것 = "중립"
```

- 핵심: 모델은 감정을 "이해"하지 않음
  - 학습 데이터에서 **"이런 소리 패턴에 사람들이 '슬픔'이라고 붙였다"** 를 통계적으로 따라 함
  - 그래서 학습 데이터의 라벨 방식·언어·연령대가 결과를 크게 좌우함

## 1-2. 모델이 "듣는" 것: 음향 특징

| 특징 | 쉬운 뜻 | 감정과의 관계 (방향만, 기준값 없음) |
|---|---|---|
| **피치(F0)** | 목소리 높낮이. 성대가 1초에 몇 번 떨리는지(Hz) | 흥분·화남·기쁨 → 높고 변화 폭 큼 / 슬픔·지루함 → 낮고 단조로움 |
| **에너지(크기)** | 소리 세기(dB) | 화남·기쁨 → 큼 / 슬픔 → 작음 |
| **말 속도** | 1초에 몇 음절 | 흥분 → 빠름 / 슬픔 → 느림, 쉼 많음 |
| **음질: jitter·shimmer** | 성대 떨림 주기(jitter)·크기(shimmer)가 매번 얼마나 흔들리나 | 떨리는 목소리, 거친 목소리 |
| **스펙트럼 특징** | 높은 주파수 에너지 비율, 포먼트(모음 울림) | 화남 → 고주파 많아 날카로움 |
| **MFCC** | 사람 귀 특성에 맞춰 소리 색깔을 13~40개 숫자로 요약 | 옛 SER의 기본 입력 |
| **log-mel 스펙트로그램** | 시간×주파수 그림(가로 시간, 세로 음높이, 밝기=세기) | CNN·Whisper의 입력. `DE_Whisper_스펙트로그램.md` E절 참고 |

- 감정별 "방향"은 Banse & Scherer 1996 표가 표준 → `BC_라벨기준_복합감정.md` 논문 표 ③에 정리됨
- **"피치 몇 Hz 이상 = 화남" 같은 기준값은 없음** (BC 노트 결론과 같음)
  - 사람·성별·나이·문장마다 기준이 달라서임

## 1-3. 특징 만드는 두 방식

```
옛 방식 (handcrafted)                  요즘 방식 (self-supervised learning, SSL)
소리 → 공식으로 계산 → 88개 숫자          소리 → 신경망(수백만 시간 학습) → 768차원 벡터 × 프레임
       (eGeMAPS)                               (wav2vec2 · HuBERT · WavLM · emotion2vec)
사람이 "뭘 볼지" 정함                      모델이 "뭘 볼지" 스스로 배움
```

### eGeMAPS (Eyben 외, IEEE TAC 2016) 🟡

> 💬 **한 줄:** 감정·음성 연구자들이 합의한 "최소한의 표준 음향 특징 세트"

- **어떻게:** 피치·jitter·shimmer·크기·포먼트·스펙트럼 기울기 등 저수준 특징을 뽑고 → 평균·표준편차 같은 통계로 요약
- **결과:** GeMAPS 62개, 확장판 eGeMAPS **88개** 숫자 (2차 출처 확인, 원문 PDF 접속 실패 🟡)
  - openSMILE 도구로 누구나 같은 값 계산 가능
- **한벗에게:** 해석이 쉬움 ("피치가 평소보다 낮아짐")
  - → 사용자 기준선 대비 편차를 보는 **보조 신호**로 쓸 만함
  - 정확도 자체는 SSL보다 낮음 (`DE` 노트 E1: FBANK 35% vs WavLM 71%)

### 자기지도 학습(SSL) 모델: wav2vec 2.0 · HuBERT · WavLM

- **공통 아이디어:** 라벨 없는 음성 수만 시간으로 **"가려진 부분 맞히기"** 연습
  - 소리 일부를 가리고 → 주변 소리로 가려진 부분을 예측하게 함
  - 이 연습을 하다 보면 발음·화자·억양 정보를 담은 벡터를 저절로 배움
- **차이:**
  - wav2vec 2.0: 가린 부분의 "양자화된 소리 코드"를 맞힘
  - HuBERT·WavLM: 미리 군집화(K-means)한 "소리 번호"를 맞힘. WavLM은 잡음·겹친 말을 섞어 학습해 더 강건
- **감정에 쓰는 법:** 모델은 얼리고(frozen) → 위에 작은 분류기만 학습 / 또는 전체·일부 미세조정
- (emotion2vec 논문도 이 계열을 "오프라인 타깃(HuBERT·WavLM)" vs "온라인 타깃(data2vec)"으로 나눔 🟢)

## 1-4. emotion2vec · emotion2vec+는 어떻게 작동하나

### emotion2vec (Ma 외, Findings of ACL 2024, arXiv 2312.15185) 🟢

> 💬 **한 줄:** data2vec 방식(선생–학생)을 감정 음성에 다시 사전학습해 "감정에 특화된 음성 벡터"를 만든 모델

- **어떻게 (사전학습):**
  ```
  원음 → CNN 특징추출기(7층, 1초당 50프레임) ─┬→ [선생 네트워크] 가리지 않은 입력 → 상위 k층 평균 = 정답 벡터
                                            └→ [학생 네트워크] 일부 프레임을 가린 입력 + "발화 토큰" → 예측
  손실 = 프레임 손실(가린 프레임 벡터 맞히기) + 발화 손실(발화 전체 평균 벡터 맞히기)
  선생은 역전파 없이 학생 가중치의 지수이동평균(EMA)으로 천천히 따라감
  ```
  - **프레임 손실** = 순간순간의 감정 디테일 / **발화 손실** = 발화 전체의 감정 분위기
  - 발화 손실 계산 방식 3가지(token·chunk·global) 중 **chunk**가 최고 (WF1 70.33 / **71.80** / 70.18)
  - 두 손실 비율 **1:1**이 최고
  - 발화 손실만 쓰면 WF1 **13.13**으로 사실상 학습 실패 → 프레임 손실이 핵심
  - 초기값: data2vec 2.0(LibriSpeech 960시간 학습) 가중치에서 시작. 처음부터 학습(cold start)은 WF1 61.19
- **데이터:** 라벨 없는 **영어 감정 데이터 5종 262시간**
  - IEMOCAP, MELD, MEAD, CMU-MOSEI, MSP-Podcast → **모두 영어, 한국어 없음**
- **크기:** 약 **93.79M** 파라미터, 출력 **768차원**
- **결과 (IEMOCAP, 모델 얼리고 선형층만 학습, 세션 5-fold):** WA **71.79** vs WavLM-large 70.03, data2vec 2.0 68.58
  - 평가: 18개 데이터·10개 언어(영어 9 + 중국어·벵골어·프랑스어·독일어·그리스어·이탈리아어·페르시아어·러시아어·우르두어 각 1) → **한국어 없음**
- **한벗에게:** 한국어로 평가·학습된 적 없는 모델 → 한국어 성능은 **직접 재야 함**

### emotion2vec+ (seed / base / large) — GitHub·HuggingFace 모델 카드 🟢

> 💬 **한 줄:** emotion2vec 위에 "감정 라벨 붙은 데이터 + 모델이 스스로 붙인 가짜 라벨(의사 라벨)"로 반복 미세조정해 9감정 분류기로 만든 버전

- **어떻게 (데이터 반복 확장):**
  ```
  seed  : EmoBox의 학술 감정 데이터 201시간으로 미세조정
    ↓  seed 모델로 대량 음성에 의사 라벨 → 걸러서 사용
  base  : 4,788시간 (약 90M)
    ↓  반복
  large : 42,526시간 (약 300M)  ← "16만 시간 중 4만 시간" 사용
  ```
  - 의사 라벨 = 사람이 아니라 **모델이 붙인 감정 라벨**. 맞는 것만 거르는 과정이 있다고 하나 세부는 "추후 공개"라고만 적혀 있음 → **확인 필요**
- **9개 클래스 (번호 순):** 0 화남(angry) · 1 혐오(disgusted) · 2 두려움(fearful) · 3 기쁨(happy) · 4 중립(neutral) · 5 기타(other) · 6 슬픔(sad) · 7 놀람(surprised) · 8 알 수 없음(unknown)
- **출력:** `{'labels', 'scores', 'feats'}` 🟢
  - FunASR 코드: 프레임 벡터를 **시간 평균** → 선형층(logit) → **softmax** → `scores`
  - 즉 **scores = 9개 감정 확률(합 1)** 임. logit 원값이 아님
  - `extract_embedding=True`면 768차원 벡터(`feats`)도 함께 줌 → 한벗 자체 분류기 학습에 재사용 가능
- **언어:**
  - seed의 출처 EmoBox = 32개 데이터 · 14개 언어 → 목록에 **한국어 데이터 없음** 🟢
  - base·large의 의사 라벨 데이터 언어 구성은 **공개 안 됨 → 한국어 포함 여부·비율 확인 필요**
  - 모델 카드에 언어 목록·한국어 언급 없음
- **한벗에게:**
  - "9감정 확률"을 그대로 쓰되 **한국어 음성 보정**이 필요함 (온도 스케일링·클래스 묶기)
  - `other`·`unknown`은 버리거나 "불확실" 신호로 씀
  - 한벗 5감정 체계로 묶을 때: disgusted·fearful은 표본이 적고 오인식이 잦을 가능성 → 실측 후 결정

## 1-5. 범주형 vs 차원형 감정

| | 범주형 (categorical) | 차원형 (dimensional) |
|---|---|---|
| 형태 | 기쁨·슬픔·화남 중 하나 | 정서가(쾌–불쾌) · 각성(차분–흥분) · 지배성 점수 |
| 예 | "슬픔" | 정서가 2/7, 각성 2/7 |
| 장점 | 이해 쉬움 | 섞인 감정·약한 감정 표현 가능 |
| 한벗 | emotion2vec+ 9감정 | 텍스트·LLM 쪽에서 정서가 판단에 유리 |

```
          각성 높음 (흥분)
              │
   화남·두려움 │ 기쁨·놀람
 불쾌 ────────┼──────── 쾌  (정서가)
   슬픔·지루함 │ 편안·만족
              │
          각성 낮음 (차분)
```

### 왜 목소리는 각성은 잘 맞히고 정서가는 못 맞히나

- **각성 = 몸의 흥분 상태** → 크기·피치·속도에 직접 드러남 → 목소리로 잘 보임
- **정서가 = 좋다/싫다** → 같은 "높고 큰 목소리"가 기쁨일 수도, 화남일 수도 있음 → 목소리만으론 애매
- **근거:**
  - Wagner 외, IEEE TPAMI 2023 🟡(초록) / 🟢(H2 노트 H2-4에서 본문 확인): MSP-Podcast에서 트랜스포머 음성 모델이 **정서가 CCC .638**로 당시 최고
    - 그런데 그 성공은 **미세조정 중 몰래 배운 말 내용(언어 정보)** 덕분이라고 저자가 밝힘
  - Triantafyllopoulos 외 2022 (H2 노트 H2-5 🟢): 말 내용만 남긴 합성 음성으로 바꾸면
    - 각성 .745 → **.041** (말 내용으론 각성 못 맞힘)
    - 정서가 .634 → **.386** (말 내용만으로도 정서가 상당 부분 맞힘)
  - → **정서가는 "무슨 말을 했나"에 크게 기댐.** 한국어처럼 모델이 말 내용을 모르면 정서가가 더 약해질 것으로 예상 (추정)
- **한벗 적용:** 이미 `H2` 노트 결론과 같음 → 정서가는 텍스트 비중↑, 각성은 음성 비중↑

## 1-6. 텍스트 감정 인식은 무엇이 다른가

```
음성 SER:  소리 → "어떻게 말했나" (톤·크기·속도) → 각성에 강함
텍스트 ER: 글자 → "무엇을 말했나" (단어·문맥 의미) → 정서가에 강함
```

- **BERT·KoELECTRA 계열:** 문장을 토큰으로 쪼개 → 문맥 벡터 → 분류기 → 감정 확률 (SER과 같은 "벡터 → 헤드 → softmax" 구조)
- **LLM(Claude):** 분류기 대신 지시문으로 "이 발화의 감정을 골라라"라고 시키면 글로 답함
  - 앞뒤 대화·상식까지 반영 가능 (`IJ` 노트 ⑥ InstructERC)
- **약점:** "괜찮아"처럼 글자와 속마음이 다른 경우, 반어·체념은 놓침 → 음성이 보완
- **한벗:** RTZR 전사문 → Claude 판단 + emotion2vec+ 확률 → 결합 (가중치는 `H2` 노트)

## 1-7. 정답 라벨은 어떻게 만드나 (요약)

- 평가자 3~10명이 듣고 감정을 고름 → **다수결**로 정답 결정
- 평가자끼리 일치도 κ **0.3~0.6** 정도로 낮음 (IEMOCAP 0.27, MELD 0.43, MSP-Podcast 0.411)
- 데이터별 수집·라벨링 방법은 아래 1-11 참고
- 대부분 "말한 사람이 느낀 감정"이 아니라 **"듣는 사람이 그렇게 들은 감정"**
- 자세한 내용: `BC_라벨기준_복합감정.md` B절

## 1-8. 한계

| 한계 | 내용 | 근거 |
|---|---|---|
| 연기 vs 자연 대화 | 연기 데이터 85~99% → 실제 대화 4감정 60%대, 8감정 30%대 | 기존 `ser_limits_papers.md` |
| 화자 차이 | 원래 목소리가 낮은 사람은 늘 "슬픔"으로 나올 수 있음 | → 사용자별 기준선 필요 (`IJ` 노트 J절) |
| 언어 불일치 | emotion2vec 사전학습은 영어만, emotion2vec+ 학습 언어 미공개, 한국어 평가 없음 | 위 1-4 🟢 |
| 약한 감정 | 담담한 슬픔은 사람도 헷갈림 (RAVDESS 보통 강도 0.58) | `BC` 노트 |

## 1-9. 한벗 파이프라인에서 실제로 일어나는 일 (발화 1개 기준)

사용자가 "아… 요즘 그냥 그래. 팀플 때문에 잠도 잘 못 자." 라고 말한 경우

```
① 마이크 → 16kHz 음성 스트림
② VAD(Silero 등): "말소리 있음/없음" 0.2초 단위 판단
③ 말이 멈춤(침묵 감지) → Smart Turn v3: 마지막 최대 8초 음성을 보고
     "말 끝났나?" 확률 계산 → 0.5 넘으면 '사용자 턴 끝'      (Q2 참고)
④ RTZR STT → "아 요즘 그냥 그래 팀플 때문에 잠도 잘 못 자"
⑤ emotion2vec+ (같은 발화 음성 전체)
     → 시간 평균 → 9감정 softmax → 예: 슬픔 0.41, 중립 0.38, 기타 0.08 ...
⑥ 텍스트 감정 (Claude 또는 텍스트 분류기): "잠도 잘 못 자" → 정서가 낮음, 지침·스트레스
⑦ 결합: 정서가는 텍스트 비중↑, 각성은 음성 비중↑ (H2 가중치) + 사용자 기준선 대비 편차
⑧ Claude 프롬프트: 직전 6~10턴 대화 + 턴별 감정 추정 + 이번 결합 결과
     → 공감 응답 생성: "잠도 잘 못 잘 정도면 많이 지쳤겠어요. 팀플에서 무슨 일 있었어요?"
⑨ Typecast TTS → 음성 재생 = '한벗 턴'
```

- 포인트: emotion2vec+는 **"슬픔"이라고 판정하는 장치가 아니라 확률 신호를 하나 주는 장치**
- 최종 해석은 텍스트·맥락·기준선과 합쳐서 Claude가 함

## 1-10. 감정 인식 공식과 평가

> 💬 **인식 = 특징 → 풀링 → z = Wu + b → softmax 확률. 평가 = 혼동 행렬에서 UA·F1(분류)·CCC(점수), 반드시 화자 분리**

### 인식 공식

| 단계 | 공식 | 뜻 |
|---|---|---|
| ① 기록 | x = (x₁, …, x_T) | 1초에 16,000개 (16kHz) |
| ② 특징 | h₁ … h_N | 사전학습 모델이 20ms마다 768차원 벡터. 옛 방식은 eGeMAPS 88개 또는 log-mel(25ms 창·10ms 이동·80 mel) |
| ③ 풀링 | u = (1/N) Σ hₜ / u = Σ αₜhₜ, αₜ = softmax(wᵀhₜ) | 말 전체를 벡터 하나로. 주의 풀링은 감정이 드러난 구간에 가중치 |
| ④ 분류기 | z = W·u + b | 감정별 점수(logit) |
| ⑤ 확률 | p_k = e^{z_k} / Σⱼ e^{z_j} | softmax, 합 1 |
| 학습 | L = −log p_정답 | 교차 엔트로피. 불균형이면 드문 감정에 가중치 |
| emotion2vec 사전학습 | L = ‖학생(가린 x) − 선생(x)‖², 선생 θ ← τθ + (1−τ)θ_학생 | 라벨 없이 가린 음성으로 선생 표현 맞히기 (data2vec 방식) |
| LoRA | W′ = W + B·A (r ≪ d) | W 고정, 작은 행렬 A·B만 학습 |
| 점수형 | L = 1 − CCC | 정서가·각성 회귀 |
| 한벗 결합 (H) | p = w_글·p_글 + w_목소리·p_목소리 | 가중치는 `H2` 노트 |

### 평가 지표

| 지표 | 공식 | 뜻 |
|---|---|---|
| WA | 맞힌 수 / 전체 | 전체 정확도 |
| UA (= UAR) | (1/K) Σ recall_k, recall_k = TP_k / (TP_k + FN_k) | 감정별 정확도의 평균. 드문 감정도 공평 |
| F1 | 2PR / (P + R) | 정밀도·재현율 함께. 감정별 평균 = macro-F1 |
| CCC | 2ρσₓσᵧ / (σₓ² + σᵧ² + (μₓ − μᵧ)²) | 점수형 일치도, 1이면 완벽 |
| κ | (p_o − p_e) / (1 − p_e) | 평가자 일치도, 우연 제외 |

- **WA vs UA 예시:** 중립 70·슬픔 30에서 전부 "중립"이라 답하면 WA 70% / UA 50% → 슬픔을 하나도 못 잡은 게 UA에서만 보임
- **평가 방식 주의**
  - 화자 분리: IEMOCAP은 세션 5개 중 1개씩 빼는 5겹, LoRA 논문(W2)은 10겹
  - 연기 vs 실제: IEMOCAP 70%대 vs 팟캐스트 8감정 F1 .43
  - 감정 묶기: IEMOCAP 4감정은 보통 기쁨+흥분 합침 → 논문끼리 숫자 바로 비교 금지
- **한벗 평가 지표:** UA + 부정 감정 재현율

## 1-11. 논문 데이터는 어떻게 모았나

> 💬 **녹음은 연기·방송·실제 대화 세 갈래, 정답은 3~10명이 듣고 다수결. 사람끼리 일치도 κ 0.27~0.48. 한국어 데이터는 일치도 미공개 → 대학생 파일럿은 직접 라벨링**

| 데이터 | 언어 | 녹음 방식 | 규모 | 라벨링 | 일치도 | 출처 |
|---|---|---|---|---|---|---|
| IEMOCAP (Busso 2008) | 영어 | 배우 2인, 실험실, 대본 연기 + 즉흥 연기 | 배우 10명, 약 12h, 10,039턴 | 범주: 턴당 3명이 영상 보고 선택 → 다수결(74.6% 합의). 차원: 2명, 1~5점 | Fleiss κ 0.27(전체) / 0.48(감정 묶고 합의 턴) | [PDF](https://sail.usc.edu/publications/files/BussoLRE2008.pdf) |
| MSP-Podcast (Lotfian·Busso 2019~) | 영어 | 공개 팟캐스트에서 SER 모델로 감정 구간 선별 | 3,641명, 409h | 턴당 5명 이상(크라우드). 최다득표, 18% 합의 실패. 차원 1~7점 평균 | κ 0.411 | [arXiv 2509.09791](https://arxiv.org/html/2509.09791) |
| MELD (Poria 2019) | 영어 | 드라마 Friends | 13,708발화 | 대학원생 3명이 영상 보고 7감정 → 다수결, 불합의 제거 | κ 0.43 | [arXiv 1810.02508](https://arxiv.org/abs/1810.02508) |
| KEMDy20 (ETRI) | 한국어 | 일반인 2인이 영상 6편 보고 자유 대화 + 생체신호 | 19~39세 80명 | 외부 평가자 10명, 7감정 다수결 + 각성·정서가 평균 | 미공개 | [ETRI](https://nanum.etri.re.kr/share/kjnoh2/KEMDy20?lang=En_us) 🟡 검색 요약으로만 확인 |
| AI Hub 263 (KAIST) | 한국어 | 감성대화 앱 사용자 대화 정제·선별 | 약 4.4만 건 | 7감정, "5명이 라벨링"(발화당인지 불명) | 미공개 | [AI Hub](https://www.aihub.or.kr/aihubdata/data/view.do?dataSetSn=263) |
| AI Hub 71631 (2022) | 한국어 | 크라우드 2인이 앱으로 대본 없는 통화, 16kHz | 4,075명(40대 이상 60%), 3,000h | 7감정 + 강도 3단계. Speaker/Verify 필드 → 화자·검수자 태깅 추정 🟡 | 미공개 | [AI Hub](https://www.aihub.or.kr/aihubdata/data/view.do?dataSetSn=71631) |
| Kim·Yi·Won 2024 | 한국어 | 반려 로봇이 집에서 질문, 3개월 실제 대화 | 133명(65~96세), 6,899파일 | 대학원생 3명. 자유 감정 27종 → 6감정 → 3극성. 톤 우선, 불일치는 토의 | κ 0.70 (**27개 자유 감정 단계** 기준, 6·3분류 κ 미보고) | [DOI](https://doi.org/10.12779/dnd.2024.23.3.146) |
| AlloSat (Macary 2020) | 프랑스어 | 실제 콜센터 통화, 고객 음성만, 8kHz | 308명, 약 37h | 3명이 0.25초마다 불만 0~만족 10 연속 평가 → 평균 | R 0.83 | [ACL](https://aclanthology.org/2020.lrec-1.197) |
| ZED (Wang 2023) | 영어 | CC 라이선스 YouTube 실제 상황 | 180발화, 17분 | 전문가 5명이 구간·경계 라벨, 최다득표. 학습셋은 연기 음성 이어 붙인 합성 약 21h | 프레임 κ 0.81 | [arXiv 2306.12991](https://arxiv.org/abs/2306.12991) |
| emotion2vec 사전학습 | 영어 | IEMOCAP·MELD·CMU-MOSEI·MEAD·MSP-Podcast | 262h | 라벨 미사용(자기지도) | - | [arXiv 2312.15185](https://arxiv.org/abs/2312.15185) |
| emotion2vec+ | 미공개 | 학술 감정 데이터 201h로 seed → 모델이 의사 라벨 붙여 4,788h → 42,526h | - | 사람 아닌 모델 라벨, 거르는 기준 미공개 | - | [GitHub](https://github.com/ddlBoJack/emotion2vec) |
| AI Hub 119 신고 71768 | 한국어 | 실제 119 신고 통화 | 3,064h | 통화 단위 4종(불안 53.6%·당황 37.6%…) + 긴급도, 가공자 → 검수자 2단계 | 미공개 | [AI Hub](https://www.aihub.or.kr/aihubdata/data/view.do?dataSetSn=71768) |
| AI Hub 고객응대 71615 | 한국어 | 공공 6분야 상담. 실제 녹취인지 연기인지 미확인 | 3,300h | 8종 태그. 음성 기반인지 텍스트 기반인지 미확인 | 미공개 | [AI Hub](https://www.aihub.or.kr/aihubdata/data/view.do?dataSetSn=71615) |

- **패턴**
  - 연기 데이터는 감정을 일부러 넣은 녹음, 자연 데이터는 감정 있는 구간을 골라낸 것
  - 범주 라벨은 보통 3~5명(ETRI KEMDy만 10명), 다수결·최다득표. 차원 라벨은 평균
  - κ 0.7 이상은 계산하기 쉬운 조건(프레임 경계, 시작 구간, 자유 감정 단계)뿐
  - MELD·IEMOCAP은 영상까지 보고 붙인 라벨 → 음성만으로 못 맞히는 정답도 섞임
- **한국어가 부족한 이유:** 실제 대화의 개인정보 비용, AI Hub·ETRI의 평가자·κ 미공개, 큰 데이터는 연령(71631)·라벨 단위(119)가 한벗과 안 맞음
- **한벗 제안:** KEMDy20 + AI Hub(263·71631)로 학습·평가. 대학생 파일럿 음성은 평가자 3명 이상이 음성만 듣고 직접 라벨링, κ 기록

---

# Q2. "턴(turn)"이라는 단위가 뭔지

## 2-1. 대화 분석에서 턴의 정의

### Sacks · Schegloff · Jefferson, *Language* 50(4), 1974 🟢

> 💬 **한 줄:** "대화에서는 대체로 한 번에 한 사람만 말하고, 말할 차례(턴)가 규칙적으로 넘어간다"를 처음 체계화한 논문

- **어떻게:** 실제 대화 녹음을 관찰해 "누구나 확인할 수 있는 사실" 14개를 정리하고 → 이를 설명하는 턴 교대 규칙을 제안
- **결과 (원문 확인):**
  - "화자 교대가 반복된다" / "압도적으로, 한 번에 한 사람이 말한다"
  - "턴 순서도, **턴 길이도 정해져 있지 않고 달라진다**"
  - 턴은 **턴 구성 단위(TCU)** 로 만들어짐: 문장·절·구·**단어 하나**도 한 턴이 될 수 있음
  - 단위가 끝날 수 있는 지점 = **전환 적합 지점(TRP)**. 여기서 다음 사람이 말을 넘겨받음
- **한벗에게:**
  - "응." 한 마디도 1턴임
  - Smart Turn이 하는 일 = **TRP(말이 끝날 만한 지점)를 소리로 찾는 것**

### 용어 정리

| 용어 | 뜻 | 예 |
|---|---|---|
| **턴(turn)** | 한 화자가 말을 시작해 상대가 넘겨받기 전까지의 말 전체 | 사용자가 "아… 요즘 그냥 그래. 팀플 때문에 잠도 잘 못 자." (문장 2개여도 1턴) |
| **발화(utterance)** | 데이터셋에서 라벨을 붙이는 한 조각. 대부분 **1턴 = 1발화**로 자름 (긴 턴은 여러 발화로 나뉘기도 함) | IEMOCAP·MELD의 한 줄 |
| **왕복(exchange / round)** | 사용자 1턴 + 한벗 1턴 | 질문 하나 → 대답 하나 |
| **IPU(inter-pausal unit)** | 일정 길이 이상 침묵으로 끊은 말 조각. 턴보다 작을 수 있음 | "아…" (쉼) "요즘 그냥 그래" → IPU 2개, 턴 1개 |
| **세그먼트(VAD segment)** | VAD가 "말소리 있음"으로 잡은 구간 | IPU와 비슷 |

```
시간 →
사용자: [아…]  (0.6초 쉼)  [요즘 그냥 그래. 팀플 때문에 잠도 잘 못 자.]   (말 끝)
         IPU 1              IPU 2
        └──────────────── 턴 1 (사용자) ──────────────────┘
한벗:                                                        [많이 지쳤겠어요…]
                                                              └── 턴 2 (한벗) ──┘
        └────────────────────── 1왕복 ──────────────────────────────────────┘
```

## 2-2. ERC 데이터셋·논문은 무엇을 "턴"이라고 세나

| 데이터·논문 | 라벨 단위 | "턴"을 어떻게 세나 | 확인 |
|---|---|---|---|
| IEMOCAP | 발화 | 2인 대화. InstructERC 표에 대화당 평균 발화 **47**, 같은 논문 본문은 "평균 47턴" → **턴 = 발화** | 🟢 |
| MELD | 발화 | 다인 대화(Friends). InstructERC 표 평균 발화 **9** | 🟢 |
| EmoryNLP | 발화 | 다인 대화. 평균 발화 **11** | 🟢 |
| DailyDialog (Li 외, IJCNLP 2017) | 발화 | 13,118개 대화, **대화당 평균 화자 턴 7.9**, 발화당 평균 토큰 약 15 → 턴과 발화를 같은 단위로 씀 | 🟢 |

### InstructERC (Lei 외, arXiv 2309.11911) — 창 w는 누구의 발화를 세나 🟢

> 💬 **한 줄:** "w턴 창" = 양쪽 화자의 발화를 섞어서, **현재 발화까지 포함해** 센 개수

- **어떻게 (원문):** "historical window(w) = 현재 발화를 포함한 과거 대화의 턴 수, 화자 정보와 함께"
  - 그림 2 예시: `Speaker_0: "Guess what?"` → `Speaker_1: "what?"` → `Speaker_0: ...` 처럼 **두 화자가 번갈아 나옴**
  - → 한 사람 발화만 세는 게 아님
- **결과 (Table 8, W-F1):**

  | 창 w | IEMOCAP | MELD | EmoryNLP |
  |---|---|---|---|
  | 1 | 56.12 | 65.91 | 38.32 |
  | 5 | 68.65 | 66.97 | 40.48 |
  | 12 | **71.39** | **69.15** | **41.37** |
  | 20 | 71.01 | 68.75 | 40.56 |

  - w=1은 **현재 발화만** (맥락 0) 이라는 뜻
- **주의 (원문 내 불일치):** 본문은 MELD·EmoryNLP가 "평균 6~7턴"이라 쓰는데, 같은 논문 Table 6은 평균 발화 **9 / 11**
  - 기존 `IJ` 노트의 "MELD 평균 6~7턴"은 본문 문장 인용 → 표 기준으로는 9턴임
- **한벗에게:**
  - 기존 노트 "직전 사용자·한벗 발화 합쳐 6~10턴" = **논문 세는 방식과 일치함** ✅
  - InstructERC 기준으로 옮기면 현재 발화 포함 w≈7~11에 해당 → 표의 5와 12 사이

### 6~10턴은 왕복으로, 시간으로는?

| 턴 수 | 왕복 | 대략 시간 (추정) |
|---|---|---|
| 2턴 | 1왕복 | 5~15초 |
| 6턴 | 3왕복 | 약 20~45초 |
| 10턴 | 5왕복 | 약 35초~1분 15초 |

- **근거 있는 숫자:** Levinson & Torreira 2015 (*Frontiers in Psychology*) 🟢
  - 영어 전화 대화 Switchboard에서 턴(IPU로 근사, 180ms 이상 침묵으로 자름) 평균 **1,680ms**, 중앙값 **1,227ms**
  - 턴 사이 간격 약 **200ms**
- **추정 근거:** 사용자 턴 약 2~5초 + 한벗 응답 턴(TTS 1~3문장) 약 3~8초로 가정 → 1왕복 약 5~13초
- **한국어 대화의 턴 길이를 잰 자료는 이번에 확인 못 함 → 확인 필요**
  - 실제 한벗 로그로 재야 함 (W3 측정 항목)

## 2-3. Smart Turn v3는 어떻게 "턴이 끝났다"고 판단하나

### pipecat-ai/smart-turn (GitHub·추론 코드) 🟢

> 💬 **한 줄:** "침묵이 있다"(VAD)에 더해 "억양·말투상 말이 끝난 것 같다"를 소리만 보고 판단하는 작은 분류기

- **어떻게:**
  - 구조: **Whisper Tiny 기반 + 선형 분류층**, 약 **8M** 파라미터 (CPU용 int8 8MB / GPU용 fp32 32MB)
  - 입력: **16kHz 모노 음성만** (글자 전사 안 씀)
    - 현재 사용자 턴의 음성, **최대 8초** → 8초 넘으면 **앞부분을 잘라 마지막 8초만**, 짧으면 앞쪽을 0으로 채움
    - Whisper 특징추출기(log-mel)로 변환
    - 이전 턴은 넣지 않음
  - 출력: `{"prediction": 0/1, "probability": 0~1}` → **probability > 0.5면 "턴 끝(1)"**
  - 지원 언어 23개, **한국어 포함**
  - 속도: 일부 CPU에서 약 10ms, 대부분 클라우드에서 100ms 미만
- **VAD와의 관계 (Pipecat 코드 `base_smart_turn` 🟢):**
  ```
  말소리 감지 (VAD: Silero, 문서 권장 stop_secs = 0.2초)
     │
  짧은 침묵(0.2초) 발생 → Smart Turn 실행
     ├─ prediction = 1 → "사용자 턴 끝" → STT 결과를 LLM으로
     └─ prediction = 0 → 기다림 (사용자가 "음…" 하고 생각 중)
             └─ 침묵이 stop_secs(기본 3초) 넘게 이어지면 → 강제로 "턴 끝"
  ```
  - 기본값: `stop_secs = 3`, `pre_speech_ms = 500`, `max_duration_secs = 8` (코드 상수)
  - Pipecat 문서는 pre_speech_ms 기본값을 0으로 적은 곳이 있어 문서–코드 불일치 → 쓰는 버전에서 확인할 것 🟡
- **한벗에게:**
  - 3초 강제 종료가 한벗 사용자의 쉼 길이에 맞는지 실측 필요
  - Smart Turn은 "다음 사람이 말해도 되나"만 판단 → **감정은 판단 안 함**
  - 같은 8초 음성을 emotion2vec+에 넣는 게 아니라, **턴 전체 음성**을 넣어야 함

### Pipecat에서 사용자 턴 vs 한벗(봇) 턴 🟢(문서) / 🟡(세부)

| | 사용자 턴 | 봇(한벗) 턴 |
|---|---|---|
| 시작 신호 | `UserStartedSpeakingFrame` (VAD 또는 전사 시작 중 먼저 오는 것) | `BotStartedSpeakingFrame` (출력 장치가 TTS 재생 시작) |
| 끝 신호 | `UserStoppedSpeakingFrame` (stop 전략 = 기본 Smart Turn v3 + 전사 도착) | `BotStoppedSpeakingFrame` |
| 대화 기록 | 사용자 집계기가 턴 동안 전사를 모아 **user 메시지 1개**로 LLM 맥락에 추가 | 봇 응답이 **assistant 메시지 1개**로 추가 |
| 끼어들기 | 봇이 말하는 중 사용자가 말하면 인터럽션 발생 가능 | — |

- → Pipecat의 LLM 맥락에서 **메시지 1개 = 1턴**. "직전 10턴" = 최근 메시지 10개(user/assistant 섞임)로 그대로 구현 가능

## 2-4. 예시 대화 (사용자 ↔ 한벗)

| 턴 | 화자 | 말 | 왕복 |
|---|---|---|---|
| 1 | 사용자 | 아… 요즘 그냥 그래. 팀플 때문에 잠도 잘 못 자. | 1왕복 |
| 2 | 한벗 | 잠도 잘 못 잘 정도면 많이 지쳤겠어요. 팀플에서 무슨 일 있었어요? | 1왕복 |
| 3 | 사용자 | 조원 한 명이 또 연락이 안 돼. 바쁘겠지 뭐. | 2왕복 |
| 4 | 한벗 | 같이 하는 건데 혼자 기다리느라 답답했겠어요. | 2왕복 |
| 5 | 사용자 | 응. | 3왕복 |
| 6 | 한벗 | 오늘은 저랑 이야기 좀 더 해요. 발표는 언제예요? | 3왕복 |

- 6턴 = 3왕복 = 기존 노트 권장 창의 하한
- 턴 5 "응."처럼 **단어 하나도 1턴** (Sacks 1974의 "lexical" 단위)
- 턴 3 "바쁘겠지 뭐"는 글자는 담담하지만 앞 턴(잠 못 잠)과 이어 보면 답답함·서운함 → 맥락이 필요한 이유
- 턴 1 안의 "아…" 뒤 쉼에서 Smart Turn이 "아직 안 끝남"을 맞혀야 턴이 쪼개지지 않음

---

# Q3. Whisper로 감정 인식을 한 연구들은 어떤 조합이었나

## 3-1. Whisper를 감정 인식기로 바꾸는 법

- Whisper = OpenAI의 **받아쓰기(STT) 모델**. 인코더(소리 → 벡터) + 디코더(벡터 → 글자)
- 감정 인식에 쓰는 대표 방식 3가지:

```
(A) 인코더만:    음성 → Whisper 인코더 → [층 선택/가중합] → 풀링 → 분류기 → 감정 확률
(B) 전사문 활용:  음성 → Whisper 전사문 → BERT/RoBERTa → 텍스트 감정 ┐
                 음성 → 음향 모델(Whisper 인코더·WavLM 등) ────────┴→ 결합(late/early/attention)
(C) 오디오 LLM:  음성 → Whisper 계열 인코더 → LLM(Qwen 등) → "감정: 슬픔" 글로 답함
```

- 결과를 가르는 4가지 선택
  1. **얼리기 vs 미세조정** (전체 / LoRA = 작은 보정 행렬만 학습)
  2. **어느 층을 쓰나** (마지막 층 / 중간 층 / 여러 층 가중합)
  3. **풀링** (시간 평균 / 주의 풀링 = 감정 실린 프레임에 가중치)
  4. **평가 분할** (화자 독립인지, 같은 IEMOCAP이라도 어느 부분집합인지)

## 3-2. 비교표

> ⚠️ 서로 다른 프로토콜(분할·부분집합·지표)이라 **줄끼리 숫자를 직접 비교하면 안 됨**. 특히 emotion2vec 논문의 WA와 EmoBox의 UA는 프로토콜이 다름.

| # | 논문 | Whisper 부분 | 크기 | 얼림/미세조정 | 위 헤드 | 전사문 텍스트 가지 | 데이터·분할 | 언어 | 점수 | 확인 |
|---|---|---|---|---|---|---|---|---|---|---|
| W1 | Ma 외, **EmoBox** (Interspeech 2024, arXiv 2406.07162) | 인코더만 | large-v3 (인코더 약 635M) | **얼림**, **마지막 층만** + 층 정규화 | 선형 은닉층 + ReLU + 풀링 + 분류층 | 없음 | 32개 데이터. IEMOCAP 공식 5-fold(세션 = 화자 2명씩 분리). 화자 적은 데이터는 화자 의존 분할 | 14개 언어, 한국어 없음 | IEMOCAP **UA 73.54 / WA 72.86** (WavLM-L 69.47/69.07). 32개 중 **23개 1위**. 교차코퍼스 평균 **52.01** | 🟢 |
| W2 | Ma, Lu, Sang, Jiang, Li, **LoRA-adapted Whisper** (arXiv 2509.08454 v3, 2026) | 인코더만 (`WhisperForAudioClassification`) | tiny~large-v3 | **얼림** vs **LoRA**(r=32, 어텐션 투영에 부착) | HF 분류 헤드 (기본: 마지막 층 → 투영 → 평균 풀링 → 선형) | 없음 | IEMOCAP 4감정, **화자 독립 10-fold** | 영어 | LoRA UAR: tiny .670 · base .702 · small .728 · medium .758 · **large-v2 .774** · large-v3 .767 / 얼림 UAR: .485 · .517 · .545 · **.638** · .582 · **.433** | 🟢 |
| W3 | Shendabadi 외, **Whisper + Attentive Pooling** (arXiv 2602.06000, 2026) | 인코더만 | tiny, small (인코더 **88M**) | **얼림**, 층별 비교(small 12개 층 각각) | 다중 헤드 **QKV 풀링** / 주의 평균 풀링 → 256차원 → 분류기 | 없음 (향후 과제로 언급) | IEMOCAP **즉흥 발화만**(2,793개) 세션 5-fold / ShEMO 화자 분리 10-fold | 영어·페르시아어 | IEMOCAP small **UA 72.96 / WA 71.98** · ShEMO small **UA 83.07** (EmoBox Whisper-L-v3 80.23). 페르시아어는 **중간 층**이 더 좋음 | 🟢 |
| W4 | Li, Bell, Lai, **SER with ASR transcripts** (IEEE SLT 2024, arXiv 2406.08353) | **전사문(디코더)** 만 텍스트로 사용 | tiny~large-v2 (영어 .en) 등 ASR 11종 | — | 텍스트 RoBERTa-base + 음향 W2V960-base 중간층 | ✅ RoBERTa / 결합 6종(early·late·cross-attention·tensor·NL-gate·MISA) + 제안 모달리티 게이트 | IEMOCAP 5-fold (화자 독립 여부 미기재) / MSP-Podcast 공식 분할 | 영어 | 최선 전사(WER 12.31) Acc4 **74.66** vs 정답 전사 74.32 · MSP 최선 전사(WER 15.02) CCC **.616** vs .613 · 제안 틀 76.66 / .618 | 🟢 (어떤 ASR이 "최선"인지는 표가 그림이라 미확인) |
| W5 | Samsung 팀, **Multi-task SER in Naturalistic Conditions** (Interspeech 2025 챌린지) | 인코더 + **전사문 생성** | large-v3 (인코더 635M, 1280차원) | **얼림** (임베딩 저장) | 인코더별 **주의 통계 풀링(ASP)** → 투영 → **LSTM 2층** → 분류·회귀 동시 | ✅ Whisper-large-v3 전사 → RoBERTa-large, + WavLM-large 음향 | MSP-Podcast 공식 train/dev | 영어 | 8감정 macro-F1 dev .3995 / test **.378** (기준선 .329, 9위) · 차원 CCC 평균 .60 (2위) | 🟢 (블로그 본문) |
| W6 | **Medusa** (Interspeech 2025 챌린지 1위, arXiv 2506.09556) | 인코더 + **전사문** | "Whisper-v3" (large-v3 체크포인트) | 미기재 | 인코더별 풀링 → 계층적 **딥 퓨전(트랜스포머)** + 메타 분류기 | ✅ Whisper-v3 전사 → RoBERTa-large, ModernBERT-large, + WavLM-large·HuBERT-large | MSP-Podcast, 내부 90/10 분할 + 챌린지 시험셋 | 영어 | 챌린지 시험셋 macro-F1 **.4316** · late fusion보다 딥 퓨전이 높음 | 🟢 (HTML 본문) |
| W7 | Chu 외, **Qwen-Audio** (arXiv 2311.07919) | 인코더 (Whisper-large-v2로 초기화) + LLM | large-v2 | 다중 과제 사전학습 (인코더 학습) | **LLM(Qwen-7B)** 이 글로 답함 | LLM 자체가 언어 처리 | MELD | 영어 | MELD **ACC 0.557** (WavLM-large 0.542) | 🟢 (HTML 본문) |
| W8 | Goron 외, **Domain generalization with Whisper** (ICASSP 2024) | 인코더 | 확인 필요 | 확인 필요 | 확인 필요 | 없음 | 연기·비연기 6개 데이터 섞어 학습 | 영어 등 | 6개 평균 **UAR 74.5%** | 🟡 (초록, `DE` 노트 D4) |
| W9 | firdhokk, **HF 모델: speech-emotion-recognition-with-openai-whisper-large-v3** | 인코더 (오디오 분류 모델) | large-v3 (0.6B) | 미세조정 (방식 미기재) | 오디오 분류 헤드 | 없음 | RAVDESS·SAVEE·TESS·URDU, 분할 방법 **미기재** | 영어·우르두어 | 7감정 정확도 **0.9199**, F1 0.9198 (연기 데이터 + 분할 불명 → 실사용 근거 약함) | 🟢 (모델 카드) |
| 참고 | Ma 외, **emotion2vec** (2312.15185) | Whisper는 **감성 분석 표에만** 등장 | base | 얼림 | 마지막 4층 평균 → 선형 | — | CMU-MOSI / MOSEI 공식 분할 | 영어 | WF1: MOSI emotion2vec **69.16** vs Whisper 인코더 65.41 · MOSEI 76.56 vs 74.75 | 🟢 (조정자 확인값 재사용) |

### `DE` 노트 숫자의 출처 확인

| DE 노트 표현 | 실제 출처·조합 | 판정 |
|---|---|---|
| "IEMOCAP UA 73.5 Whisper vs 69.5 WavLM" | **W1 EmoBox**: Whisper-large-v3 인코더 **얼림 + 마지막 층** + 선형·풀링 헤드, 공식 세션 5-fold. UA 73.54 vs WavLM-large 69.47 | ✅ 맞음 |
| "그대로 붙이면 43~58%, LoRA 77%" | **W2**: `WhisperForAudioClassification`, 화자 독립 10-fold. 얼림 large-v3 **.433**, large-v2 **.582** / LoRA large-v2 **.774** | ⚠️ 일부 수정 필요: 얼림 범위는 크기 전체로 보면 **.433~.638** (medium .638이 최고). "43~58%"는 large 두 개만 본 값 |
| DE 노트 추정 "EmoBox 73%는 여러 층 가중평균 덕분(추정)" | EmoBox 원문: **마지막 층만** 사용이라고 명시 | ❌ 추정 틀림. 차이 원인은 층 가중합이 아님 → 헤드·학습 설정·분할(5-fold vs 10-fold) 차이로 보임 (**원인 확인 필요**) |

## 3-3. 표에서 읽히는 것

- **Whisper 인코더는 얼려도 쓸 만하지만, 헤드·층 선택에 매우 민감함**
  - 같은 large-v3 얼림인데 EmoBox UA 73.5 vs W2 UAR 43.3 → 30%p 차이
  - LoRA를 쓰면 크기에 비례해 안정적으로 오름 (W2)
- **작은 Whisper도 풀링만 잘하면 큰 모델에 근접** (W3: small 88M + QKV 풀링)
  - 비영어(페르시아어)에서는 **중간 층**이 더 좋았음 → 한국어도 층 비교 필요
- **실제 대화(MSP-Podcast)에선 8감정 macro-F1 0.38~0.43** 수준 (W5·W6)
  - 이것도 Whisper 인코더 + WavLM + 전사문 텍스트를 다 합친 결과
  - → "Whisper 하나로 70~80%"는 연기/대본 데이터에서만 나오는 숫자
- **Whisper 전사문을 텍스트 가지로 쓰는 건 흔한 조합** (W4~W6)
  - WER 12~15% 수준 전사문이면 정답 전사와 감정 성능 차이가 거의 없음 (W4)
- **emotion2vec+ vs Whisper를 같은 조건에서 9감정으로 비교한 연구는 못 찾음**
  - EmoBox는 emotion2vec을 벤치마크 모델로 넣지 않고 **교차코퍼스 시험셋 라벨 거르기**에만 사용함 🟢
- **한국어 Whisper 감정 인식 결과는 이번에도 못 찾음** ("없다"가 아니라 "못 찾음")

## 3-4. 한벗에 맞는 조합 (W3 실험 제안)

> 공통 조건: **KEMDy20 + AI Hub 감정 음성**, **화자 독립 분할**(같은 사람이 학습·시험에 동시에 안 들어가게), 한벗 5감정으로 묶어 **UA(macro recall) + macro-F1** 보고. 가능하면 실제 사용자(대학생) 파일럿 녹음을 별도 시험셋으로.

| 안 | 구성 | 왜 | 비용 |
|---|---|---|---|
| **① 기준선** | emotion2vec+ large 그대로 (9감정 → 5감정 묶기) + 같은 데이터로 `feats`(768차원) 위에 선형 헤드만 재학습한 버전 | 지금 쓰는 모델의 한국어 실력 측정. 재학습 헤드로 "언어 차이"를 얼마나 메울 수 있나 확인 | 낮음 (GPU 거의 불필요) |
| **② Whisper 얼림** | Whisper-small 또는 large-v3 인코더 **얼림** + **층 가중합**(또는 층별 비교) + **주의 풀링 헤드** | W1·W3 조합. 한국어 다국어 학습량이 많은 Whisper가 emotion2vec+보다 나은지 | 중간 (특징 추출 1회 후 헤드만 학습) |
| **③ Whisper LoRA** | ②와 같은 인코더 + **LoRA(r=16~32)** + 같은 헤드 | W2에서 LoRA가 얼림 대비 크게 우세. 데이터가 적으면 과적합 주의 | 높음 (GPU 필요) |

- **추가 비교(선택):** ①+② 특징을 이어 붙이기(W5식 다중 인코더) → 성능 대비 지연 증가 확인
- **결정 기준:** ②·③이 ①보다 UA **5%p 이상** 높고, 턴당 추가 지연이 허용 범위일 때만 교체 검토 (기준값은 팀 합의 필요)

### Whisper가 "공짜로" 주는 것 / 한벗에서는 아님

- Whisper를 STT로 쓰는 팀은 **전사문 + 인코더 벡터가 한 번에 나옴** → 감정 헤드만 붙이면 됨 (W5·W6 구조)
- **한벗은 STT가 RTZR** → 이 공짜 혜택이 없음
  - Whisper 감정 모델을 쓰려면 **인코더를 따로 한 번 더 돌려야 함** (small 88M ~ large-v3 635M, 추가 지연·GPU 비용)
  - 반면 전사문 텍스트 가지는 RTZR 결과로 이미 있음 → W4 결론(WER 12~15%면 텍스트 손해 작음)은 RTZR에도 적용 가능
- **이미 Whisper를 돌리는 곳이 하나 있음:** Smart Turn v3가 Whisper **Tiny** 기반 (약 8M)
  - 하지만 턴 끝 판단용으로 학습된 모델이라 감정 특징으로 재사용할 근거는 없음 → 확인 필요

---

## 확인 표시 요약

| 항목 | 표시 |
|---|---|
| emotion2vec 사전학습(선생–학생, EMA, 프레임+발화 손실, 262시간 영어 5종, 10개 언어 평가에 한국어 없음, IEMOCAP WA 71.79) | 🟢 |
| emotion2vec+ 데이터 단계(201 / 4,788 / 42,526시간), 9클래스, 출력 키, scores = softmax 확률 | 🟢 (GitHub·HF 카드·FunASR 코드) |
| EmoBox 32개 데이터·14개 언어 목록에 한국어 없음 | 🟢 |
| emotion2vec+ 의사 라벨 데이터의 언어·한국어 비율 | **확인 필요** (미공개) |
| eGeMAPS 88개 특징 | 🟡 |
| Wagner 2023 정서가 CCC .638·언어 정보 설명 | 🟡 초록 (+ H2 노트에서 본문 🟢) |
| Sacks·Schegloff·Jefferson 1974 사실 목록·TCU·TRP | 🟢 |
| InstructERC 창 정의(양쪽 화자, 현재 발화 포함)·Table 8·Table 6 | 🟢 |
| DailyDialog 대화당 평균 7.9턴 | 🟢 |
| Levinson & Torreira 2015 턴 평균 1,680ms·간격 약 200ms | 🟢 |
| 한국어 대화의 턴 길이 | **확인 필요** |
| Smart Turn v3 구조·입력 8초·출력 probability>0.5·한국어 지원 | 🟢 |
| Pipecat 기본값 stop_secs 3 / pre_speech_ms 500 / max 8초 | 🟢 (코드) · 문서와 불일치 부분 🟡 |
| Q3 W1·W2·W3·W4·W5·W6·W7·W9 | 🟢 |
| Q3 W8 (Goron 2024) | 🟡 |

## 출처

- Ma 외. emotion2vec (Findings of ACL 2024): https://arxiv.org/abs/2312.15185
- emotion2vec / emotion2vec+ GitHub: https://github.com/ddlBoJack/emotion2vec
- emotion2vec+ large 모델 카드: https://huggingface.co/emotion2vec/emotion2vec_plus_large
- FunASR emotion2vec 추론 코드: https://github.com/modelscope/FunASR/blob/main/funasr/models/emotion2vec/model.py
- Ma 외. EmoBox (Interspeech 2024): https://arxiv.org/abs/2406.07162 · 데이터 목록: https://github.com/emo-box/EmoBox
- Eyben 외. GeMAPS (IEEE TAC 2016): https://doi.org/10.1109/TAFFC.2015.2457417
- Wagner 외. Dawn of the transformer era in SER (IEEE TPAMI 2023): https://arxiv.org/abs/2203.07378
- Sacks, Schegloff, Jefferson. A simplest systematics for the organization of turn-taking for conversation (*Language* 50(4), 1974): https://www.jstor.org/stable/412243 (본문 PDF: https://conversationanalysis.org/mp-files/simplest-systematics-for-the-organization-of-turn-taking-for-conversation-language.pdf)
- Lei 외. InstructERC: https://arxiv.org/abs/2309.11911
- Li 외. DailyDialog (IJCNLP 2017): https://aclanthology.org/I17-1099
- Levinson & Torreira. Timing in turn-taking and its implications for processing models of language (*Front. Psychol.* 2015): https://doi.org/10.3389/fpsyg.2015.00731
- Smart Turn: https://github.com/pipecat-ai/smart-turn · 추론 코드: https://github.com/pipecat-ai/smart-turn/blob/main/inference.py
- Pipecat Smart Turn 기본값 코드: https://reference-server.pipecat.ai/en/latest/_modules/pipecat/audio/turn/smart_turn/base_smart_turn.html
- Pipecat 사용자 턴 전략·프레임: https://docs.pipecat.ai/server/utilities/turn-management/user-turn-strategies
- Ma, Lu, Sang, Jiang, Li. LoRA-adapted Whisper for SER: https://arxiv.org/abs/2509.08454
- Shendabadi 외. Whisper + Attentive Pooling: https://arxiv.org/abs/2602.06000
- Li, Bell, Lai. SER with ASR transcripts (SLT 2024): https://arxiv.org/abs/2406.08353
- Samsung. Multi-task Learning for SER in Naturalistic Conditions: https://research.samsung.com/blog/Multi-task-Learning-for-Speech-Emotion-Recognition-in-Naturalistic-Conditions
- Medusa (Interspeech 2025 SER Challenge): https://arxiv.org/abs/2506.09556
- Chu 외. Qwen-Audio: https://arxiv.org/abs/2311.07919
- Goron 외. Improving Domain Generalization in SER with Whisper (ICASSP 2024): https://doi.org/10.1109/ICASSP48485.2024.10446997
- HF Whisper-large-v3 감정 모델: https://huggingface.co/firdhokk/speech-emotion-recognition-with-openai-whisper-large-v3
