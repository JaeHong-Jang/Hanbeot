주요 수치는 대체로 일치하지만, **실험 조건·지표 단위·논문 버전·설계 해석은 수정이 필요합니다.** 아래는 2026-10-26 기준 검증 결과입니다. 반복되는 주장은 묶었습니다.

등급은 사용자가 제시한 기준을 적용했습니다. 수치 없는 인용·서지는 원문 일치 시 A, 근사·조건부 해석은 B, 근거 미확보는 C입니다. **벤더 원문을 확인한 A도 독립적인 성능 검증을 뜻하지는 않습니다.** 추가로 찾은 URL은 ‘메모’에 구분했습니다.

**1. VAD**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| McKinnon 등, 2026년 arXiv 논문이며 Google 소속 | [arXiv](https://arxiv.org/abs/2601.17270) | 등록 정보·본문 저자 소속 대조 | 일치 | A | 2026-01-24 제출, Google LLC 소속 확인. |
| Silero·WebRTC·RMS를 윈도우 크기별로 비교하며, Silero가 우수하고 hysteresis는 WebRTC에 유리 | [arXiv](https://arxiv.org/abs/2601.17270) | 초록·본문 결과 대조 | 일치 | A | 노트의 영문 인용과 초록이 일치. 초록에는 성능 수치 없음. |
| 위 실험의 언어는 비특정 | [arXiv](https://arxiv.org/abs/2601.17270) | 본문 III-A 데이터셋 확인 | 불일치 | C | [본문](https://arxiv.org/html/2601.17270)은 **영어 음성**, 내부 데이터 1.1시간·21개 파일이라고 명시. |
| Picovoice: FPR 5%에서 Silero TPR 87.7%, WebRTC 50% | [벤치마크](https://picovoice.ai/docs/benchmark/vad/) | 벤치마크 방법론 및 같은 벤더의 수치 서술 대조 | 일치 | A | 수치는 [공식 비교 글](https://picovoice.ai/blog/best-voice-activity-detection-vad/)에서도 직접 확인. 벤더 자체 평가. |
| 위 Picovoice 결과는 깨끗한 영어 음성 조건 | [벤치마크](https://picovoice.ai/docs/benchmark/vad/) | Speech Corpus·Noise 항목 대조 | 불일치 | C | 원음은 LibriSpeech test-clean이지만 DEMAND 잡음을 혼합. [공식 가이드](https://picovoice.ai/guide/voice-agents/on-device-voice-agents/)는 해당 수치를 **0 dB SNR** 조건으로 명시. |
| TEN VAD가 WebRTC·Silero보다 정밀도가 우수하다고 자체 주장 | [GitHub](https://github.com/TEN-framework/ten-vad) | README Introduction·평가 설명 확인 | 일치 | A | 주장 자체는 원문 확인. 공개 테스트셋과 재현 스크립트도 제공하지만, 이번 검증에서 실험을 재실행하지는 않음. |
| Silero를 직접 다룬 학술 논문은 위 1건뿐 | 별도 URL 없음 | 인용 목록·검색 범위 검토 | 확인불가 | C | “이번 조사에서 확보한 논문은 1건”으로 한정해야 함. 전체 문헌에서 유일하다는 근거는 없음. |
| Silero 선택은 Smart Turn과의 정합성상 필수·고정이 자연스럽다 | [Daily 블로그](https://www.daily.co/blog/announcing-smart-turn-v3-with-cpu-inference-in-just-12ms/) | 사용법 문구 확인 | 확인불가 | C | 원문은 Silero **같은 VAD**와 병용하라고 설명. Silero만 사용해야 한다는 뜻은 아님. |

**2. 턴 종료 감지·백채널**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Smart Turn v3: 2025년 발표, 8M 파라미터·8MB·int8 ONNX | [Daily 블로그](https://www.daily.co/blog/announcing-smart-turn-v3-with-cpu-inference-in-just-12ms/) | 발표일·Architecture 대조 | 일치 | A | 2025-09-11 발표. |
| Smart Turn v3는 한국어 포함 23개 언어 지원 | [Daily 블로그](https://www.daily.co/blog/announcing-smart-turn-v3-with-cpu-inference-in-just-12ms/) | 지원 언어 목록 확인 | 일치 | A | 한국어 명시. |
| 한국어 정확도 96.85%, 영어 94.31%·2,846샘플 | [Daily 블로그](https://www.daily.co/blog/announcing-smart-turn-v3-with-cpu-inference-in-just-12ms/) | Accuracy 표 대조 | 일치 | A | **한국어 표본은 890개**, 2,846개는 영어 표본 수. |
| CPU 12.6ms(c7a.2xlarge), 59.8ms(c8g.medium), 94.8ms(t3.medium); L40S 3.3ms | [Daily 블로그](https://www.daily.co/blog/announcing-smart-turn-v3-with-cpu-inference-in-just-12ms/) | Performance 표 대조 | 일치 | A | 원문 수치는 **오디오 전처리와 추론을 합산**한 시간. |
| Smart Turn 입력은 최대 8초이며 Silero 같은 VAD와 함께 사용 | [Daily 블로그](https://www.daily.co/blog/announcing-smart-turn-v3-with-cpu-inference-in-just-12ms/) | Standalone 설명 확인 | 일치 | A | 현재 턴의 문맥을 가능한 많이 포함하라고 설명. |
| 타 모델 정확도 비교 벤치마크는 진행 중 | [Daily 블로그](https://www.daily.co/blog/announcing-smart-turn-v3-with-cpu-inference-in-just-12ms/) | 비교 설명 확인 | 일치 | A | **발표 당시** 설명으로 인용 가능. 현재도 독립 비교가 없다는 증거는 아님. |
| Vietnamese False Positives 14.84%로 표에서 가장 높음 | [Daily 블로그](https://www.daily.co/blog/announcing-smart-turn-v3-with-cpu-inference-in-just-12ms/) | 언어별 표 전체 대조 | 일치 | A | 표의 열 이름은 ‘False Positives (%)’. |
| 한국어 조기 종료 관련 수치를 원문에서 확인할 수 없음 | [Daily 블로그](https://www.daily.co/blog/announcing-smart-turn-v3-with-cpu-inference-in-just-12ms/) | 한국어 행 확인 | 불일치 | C | 같은 표에 **False Positives 1.12%, False Negatives 2.02%**가 있음. 다만 1.12%를 곧바로 조건부 FPR로 표기하면 안 됨. |
| Smart Turn의 수십 ms 추론 시간은 TTFA에서 무시 가능 | [Daily 블로그](https://www.daily.co/blog/announcing-smart-turn-v3-with-cpu-inference-in-just-12ms/) | 측정 범위와 설계 결론 비교 | 확인불가 | C | 기기·호출 빈도·대기 정책에 따라 달라지는 설계 판단. 전체 엔드포인팅 지연을 측정한 값도 아님. |
| Smart Turn 학습 데이터는 v3.1 설명상 영어·스페인어 중심 | 특정 URL 없음 | v3.1 공식 설명 추가 확인 | 확인불가 | C | [v3.1 글](https://www.daily.co/blog/improved-accuracy-in-smart-turn-v3-1/)은 **새로 추가한 인간 음성이 영어·스페인어**라고 설명. 전체 학습 데이터의 언어별 비중은 입증하지 않음. |
| LiveKit: 14개 언어, 한국어 TPR 99.3%·TNR 94.5% | [LiveKit 문서](https://docs.livekit.io/agents/logic/turns/turn-detector/) | Text turn detector의 언어별 표 확인 | 일치 | A | 현재 페이지에는 오디오 모델도 있으므로 **텍스트 모델 결과**라고 명시해야 함. |
| 위 LiveKit 모델은 STT 텍스트 기반이며 STT 지연과 결합 | [LiveKit 문서](https://docs.livekit.io/agents/logic/turns/turn-detector/) | Text turn detector 설명 확인 | 일치 | A | 현재 LiveKit 전체 모델을 텍스트 기반으로 일반화하면 부정확. |
| TurnGPT: Ekstedt·Skantze, Findings of EMNLP 2020; 두 baseline 능가·턴 완료 투영 탐구 | [arXiv](https://arxiv.org/abs/2010.10874) | 저자·학회·초록 대조 | 일치 | A | 통사적·화용적 완결성과 대화 문맥 활용을 명시. |
| VAP: Ekstedt·Skantze, 2022; 자기지도 학습·4개 zero-shot 과제에서 기존 방법 능가 | [arXiv](https://arxiv.org/abs/2205.09812) | 초록 대조 | 일치 | A | 턴 전환과 백채널 예측 과제를 포함. |
| 위 VAP 논문은 Interspeech 2022 논문 | [arXiv](https://arxiv.org/abs/2205.09812) | 학회 표기 확인 | 확인불가 | C | 해당 arXiv 기록은 **Submitted to INTERSPEECH 2022**라고 표기. 게재 확정과 구분 필요. |
| Inoue 등, LREC-COLING 2024; 영·중·일 3개 언어 공동학습이 단일언어 모델과 동급 | [arXiv](https://arxiv.org/abs/2403.06487) | 초록·학회 정보 대조 | 일치 | A | 중국어는 Mandarin. 단일언어 모델의 타 언어 일반화 저하도 명시. |
| 위 결과가 한국어 데이터 학습 또는 다언어 학습의 필요성을 증명 | [arXiv](https://arxiv.org/abs/2403.06487) | 실험 언어와 결론 범위 비교 | 확인불가 | C | 한국어는 실험하지 않음. **한국어에서도 검토할 이유를 주는 간접 근거**로만 사용 가능. |
| Skantze 리뷰: 2021, Computer Speech & Language 67 | URL 미제시 | 출판사 서지 추가 검색 | 일치 | B | [출판사 기록](https://doi.org/10.1016/j.csl.2020.101178): 67권, 논문번호 101178. 검색 기록은 확인했으나 직접 열기는 403. |
| Park 등, Findings of EACL 2024; 한국어 +1.3%, 영어 +1.8% | [제시된 preview URL](https://preview.aclanthology.org/setup/2024.findings-eacl.118) | [정식 논문](https://aclanthology.org/2024.findings-eacl.118/) 초록·표 2 대조 | 일치 | A | 한국어 M-F1 **33.8→35.1**, 영어 W-F1 **62.9→64.7**. 인용문과 숫자는 일치하지만 보고서에서는 **+1.3%p·+1.8%p**로 표기 권장. |
| 위 Park 논문은 ETRI 계열 연구 | [논문 PDF](https://aclanthology.org/2024.findings-eacl.118.pdf) | 저자 소속 대조 | 불일치 | C | 논문에 표기된 저자 소속은 **충남대학교**. ETRI 자원 사용과 저자 소속을 구분해야 함. |
| 한국어 Namo-Turn-Detector-v1-Korean 모델 카드가 존재 | URL 미제시 | 공식 모델 카드 추가 확인 | 일치 | A | [공식 카드](https://huggingface.co/videosdk-live/Namo-Turn-Detector-v1-Korean) 확인. 한국어 전사 텍스트 기반 모델이며, 논문 존재 여부와는 별개. |

**3. 끼어들기·Full-Duplex-Bench**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Lin 등 Full-Duplex-Bench는 ASRU 2025 채택 논문 | [arXiv](https://arxiv.org/abs/2503.04721) | 등록 정보 확인 | 일치 | A | v3에 Accepted by ASRU 2025 명시. |
| 사용자 끼어들기 후 지연: Moshi 0.257초, Gemini Live 1.183초, Freeze-Omni 1.409초, dGSLM 2.531초 | [arXiv](https://arxiv.org/abs/2503.04721) | [v3 표 III](https://arxiv.org/pdf/2503.04721v3) 열·행 대조 | 일치 | A | 숫자와 열 매핑 모두 일치. **v3를 고정해 인용**해야 함. v1 값과 다름. |
| 일시정지 TOR: Gemini Live 0.255~0.310, Moshi 0.985 | [arXiv](https://arxiv.org/abs/2503.04721) | v3 표 III 대조 | 일치 | A | Gemini의 두 값은 Synthetic·Candor 결과. Moshi는 각각 **0.985·0.980**으로, 노트는 한 조건만 제시. |
| 백채널 빈도: dGSLM 0.015, 나머지 ≤0.012 | [arXiv](https://arxiv.org/abs/2503.04721) | v3 표 III Freq 열 대조 | 일치 | A | Moshi 0.001, Freeze-Omni 0.001, Gemini Live 0.012. |
| Full-Duplex-Bench는 영어 평가 | [arXiv](https://arxiv.org/abs/2503.04721) | v3 한계 절 확인 | 일치 | A | 영어에 한정됨을 명시. |
| Full-Duplex-Bench는 cascade 직접 비교가 아님 | [arXiv](https://arxiv.org/abs/2503.04721) | 평가 모델 설명 확인 | 불일치 | C | [본문](https://arxiv.org/html/2503.04721v3)은 Freeze-Omni를 **cascaded full-duplex system**으로 명시. 한벗과 동일 구성의 비교가 아니라는 제한은 타당. |
| 위 지연 수치가 “1초 이내 중단·재응답” 목표의 근거 | [arXiv](https://arxiv.org/abs/2503.04721) | 지표 정의와 목표 비교 | 확인불가 | C | 논문 지표는 끼어들기 후 **응답 지연**. TTS 재생 중단 시간과 별개이며, 1초 기준은 자체 목표. |
| Talking Turns: Arora 등, ICLR 2025; Switchboard 평가, 과도한 끼어들기·드문 백채널 보고 | [arXiv](https://arxiv.org/abs/2503.01174) | 저자·학회·초록 대조 | 일치 | A | 정성 요약과 일치. |
| Talking Turns가 한국어 “응/음”에 TTS를 끊지 않는 정책을 검증 | [arXiv](https://arxiv.org/abs/2503.01174) | 초록의 실험 범위 비교 | 확인불가 | C | 한국어 토큰별 중단 정책을 실험한 근거는 아님. 정책 설계에 참고할 간접 근거. |
| ETRI Journal에 스트리밍 백채널·ASR 공동 모델 연구가 있음 | URL 미제시 | 출판사·ETRI 기록 추가 확인 | 일치 | A | [Choi 등, 2024](https://onlinelibrary.wiley.com/doi/full/10.4218/etrij.2023-0358), ETRI Journal 46(1), 118–126. 논문과 공동 스트리밍 구조 확인. |

**4. 스트리밍 TTS**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| CosyVoice 2: Du 등, 2024 arXiv; 한국어 포함 zh/en/ja/ko | [arXiv](https://arxiv.org/abs/2412.10117) | 본문 서지·학습 언어 확인 | 일치 | A | 원문에서 확인. |
| 한국어 test-ko CER: 스트리밍 9.06%, 오프라인 7.98% | [arXiv](https://arxiv.org/abs/2412.10117) | [본문 표 9](https://arxiv.org/html/2412.10117v1) 대조 | 일치 | A | CosyVoice 2-S와 CosyVoice 2의 비교. |
| 한국어 NMOS: 스트리밍 3.60, 오프라인 3.73 | [arXiv](https://arxiv.org/abs/2412.10117) | 표 9 대조 | 일치 | A | 원문 값과 일치. |
| 한국어 학습 데이터 2,200시간 | [arXiv](https://arxiv.org/abs/2412.10117) | 표 3 대조 | 일치 | A | CosyVoice 2 학습 데이터의 한국어 분량. |
| 스트리밍 변화량 CER +1.08%p, NMOS −0.13 | [arXiv](https://arxiv.org/abs/2412.10117) | 표 9 값으로 재계산 | 일치 | A | 산술적으로 정확. |
| 위 변화가 한국어 품질 저하가 작다는 것을 입증 | [arXiv](https://arxiv.org/abs/2412.10117) | 수치와 해석 범위 비교 | 확인불가 | C | “작다”의 기준·통계적 유의성·실사용 허용 수준을 별도로 제시해야 함. |
| CosyVoice 2 본문에 첫 패킷 실측 ms 값이 없고 지연 수식만 있음 | [arXiv](https://arxiv.org/abs/2412.10117) | §2.5 및 본문 검색 | 일치 | A | 확인한 v1 §2.5는 지연 계산식 제시. **150ms 실측치의 근거로 인용할 수 없음.** |
| VoXtream: Torgashov·Henter·Skantze, 2025; GPU 초기 지연 102ms | [arXiv](https://arxiv.org/abs/2509.15969) | 초록·[v2 표 3](https://arxiv.org/html/2509.15969v2) 대조 | 일치 | A | 2025년 최초 공개. 102ms는 **A100·FP16·torch.compile** 조건이며, 미적용 값은 171ms. 현재 기록은 ICASSP 2026 채택도 명시. |
| VoXtream이 공개 스트리밍 TTS 중 최저 지연이라고 주장 | [arXiv](https://arxiv.org/abs/2509.15969) | 초록 확인 | 일치 | A | 저자의 당시 비교 주장. 모든 시스템에 대한 현재 최저 기록을 보장하지 않음. |
| VoXtream 102ms는 이론적 하한 | [arXiv](https://arxiv.org/abs/2509.15969) | 측정 정의 확인 | 불일치 | C | 특정 환경의 **실측치**이며 이론적 하한이 아님. |
| VoXtream은 영어로 추정되며 한국어 지원 불명 | [arXiv](https://arxiv.org/abs/2509.15969) | 본문 평가 데이터 확인 | 일치 | B | LibriSpeech·SEED test-en 평가 확인. 한국어 성능은 제시된 실험으로 확인 불가. |
| SpeakStream: Bai 등, Apple, 2025; 스트리밍 텍스트에서 점진 생성·SOTA 첫 토큰 지연 주장 | [arXiv](https://arxiv.org/abs/2505.19206) | 초록·본문 소속 대조 | 일치 | A | 초록에는 구체적인 지연 수치가 없음. |
| SpeakStream의 언어는 영어로 추정 | [arXiv](https://arxiv.org/abs/2505.19206) | [본문 §IV-A](https://arxiv.org/html/2505.19206v1) 확인 | 일치 | A | 추정 대신 **LJSpeech 단일 화자 영어 실험**이라고 확정해 쓸 수 있음. |
| TTS-by-TTS: 한국어 청취자 18명, MOS 3.74 | [arXiv](https://arxiv.org/abs/2010.13421) | 초록·[본문 §4.3.2](https://arxiv.org/html/2010.13421) 대조 | 일치 | A | 한국어 원어민 18명 확인. MOS 3.74는 해당 제안 시스템 결과이며 상용 TTS 일반 성능이 아님. |
| 문장 경계 청킹은 운율에, 절 단위는 지연에 유리 | URL 없음 | 인용 가능한 실험·직접 출처 확인 시도 | 확인불가 | C | 제시된 노트에는 출처가 없음. 보편적 실험 결과처럼 인용하지 말 것. |
| naive streaming MOS 3.46, 어댑터 적용 4.12 | URL 없음 | 숫자 조합·관련 논문 검색 | 확인불가 | C | 원 논문을 특정하지 못함. 노트처럼 채택 보류가 적절. |

**5. 한국어 STT**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Park·Cho·Choo, Evaluating ASR Systems for Korean Meteorological Experts, 2024 arXiv | [arXiv](https://arxiv.org/abs/2410.18444) | 서지·버전 기록 확인 | 일치 | A | 2024년 최초 제출, 현재 v3는 **2025-09-14 개정**. |
| KsponSpeech CER: tiny 32.67%, small 16.75%, medium 14.33%, large-v2 14.66% | [arXiv](https://arxiv.org/abs/2410.18444) | [v3 표 3](https://arxiv.org/html/2410.18444v3) 대조 | 일치 | A | KsponSpeech **eval-clean 3,000개** 결과. v1과 값이 다르므로 v3 인용 필요. |
| large-v2를 KsponSpeech로 미세조정하면 CER 10.48% | [arXiv](https://arxiv.org/abs/2410.18444) | v3 표 3 General 행 대조 | 일치 | A | 원문과 일치. |
| 날씨 도메인 미세조정: 날씨 CER 18.35→10.64%, KsponSpeech는 15.81%로 악화 | [arXiv](https://arxiv.org/abs/2410.18444) | v3 표 3 Weather 행 대조 | 일치 | A | **TTS로 생성한 날씨 데이터**로 미세조정한 조건. 일반 CER는 zero-shot 14.66%에서 15.81%로 증가. |
| Whisper 한국어 자유발화 CER는 약 14~15% | [arXiv](https://arxiv.org/abs/2410.18444) | 모델·평가셋 범위 대조 | 일치 | B | 해당 **medium·large-v2의 eval-clean 결과**에 한정한 근사치. 모든 Whisper·한국어 자유발화로 일반화하면 안 됨. |
| KsponSpeech: Bang 등, Applied Sciences 2020, 약 969시간·2,000명 | [MDPI](https://www.mdpi.com/2076-3417/10/19/6936) | 출판사 제공 PDF 추가 열람 | 일치 | A | 웹 페이지는 429였지만 [원 논문 PDF](https://mdpi-res.com/d_attachment/applsci/applsci-10-06936/article_deploy/applsci-10-06936.pdf) 직접 확인. |
| KsponSpeech는 간투사·반복·단편 비유창성 태그를 제공 | [MDPI](https://www.mdpi.com/2076-3417/10/19/6936) | 원 논문 초록·전사 설명 확인 | 일치 | A | filler words, repeated words, word fragments 명시. |
| Feature Space Interpolation 논문: 2021, 한국어·영어 ASR 오류와 비유창성 구분 연구 | [arXiv](https://arxiv.org/abs/2108.01812) | 서지·초록 확인 | 일치 | A | ASR **후처리 오류 탐지** 연구라는 범위를 유지해야 함. |
| 위 논문 Kspon 토큰 수준 오류율: E2E 0.06, 전통 방식 0.15 | [arXiv](https://arxiv.org/abs/2108.01812) | [본문 데이터 표](https://arxiv.org/html/2108.01812) 대조 | 일치 | A | 숫자는 일치. **입력 ASR 출력의 오류율**이며, 제안한 보간 방법의 개선 전후 값이 아님. |

**6. 인간 턴 간격·종단 지연**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Stivers 등, 2009, PNAS 106(26); 10개 언어 연구 | [DOI](https://doi.org/10.1073/pnas.0903616106) | DOI 접근 및 원 논문 사본 대조 | 일치 | A | 출판사 접근은 403. [원 논문 PDF 사본](https://cognitionandculture.net/wp-content/uploads/Stivers_2009_universals.pdf)에서 직접 확인. |
| 모든 언어에서 겹침 회피·턴 사이 침묵 최소화 경향 | [DOI](https://doi.org/10.1073/pnas.0903616106) | 원 논문 초록 확인 | 일치 | A | 노트의 정성 요약과 일치. |
| 언어별 평균 간격이 교차언어 평균의 ±250ms 범위 | [DOI](https://doi.org/10.1073/pnas.0903616106) | 초록·결과 절 확인 | 일치 | A | **원문의 서술**과 일치. 다만 본문 전체 평균 208ms·덴마크 469ms의 차이는 261ms이므로 엄밀한 상한보다 대략적 설명으로 인용하는 편이 적절. |
| 한국어는 Yoon 저자 참여를 근거로 포함 추정 | [DOI](https://doi.org/10.1073/pnas.0903616106) | 본문·그림 언어 목록 확인 | 일치 | A | 한국어 포함을 직접 확인. 저자명에 의존한 추정을 삭제해도 됨. |
| 유명한 약 200ms는 Stivers 초록에 제시된 수치가 아님 | [DOI](https://doi.org/10.1073/pnas.0903616106) | 초록·결과 절 구분 | 일치 | A | 초록에는 250ms 범위 서술, 본문에는 전체 평균 **208ms** 제시. |
| Levinson·Torreira 2015: 턴 간격 약 200ms, 언어 생성 600ms 이상, 종료 예측·선행 준비 필요 | [Frontiers](https://www.frontiersin.org/articles/10.3389/fpsyg.2015.00731/full) | 초록·본문 직접 확인 | 일치 | A | 검색 요약 수준의 B에서 A로 올릴 수 있음. |
| 위 인간 연구가 LLM speculative 생성 설계의 직접 근거 | [Frontiers](https://www.frontiersin.org/articles/10.3389/fpsyg.2015.00731/full) | 연구 대상과 설계 적용 구분 | 확인불가 | C | 인간의 예측적 준비를 설명하는 이론적 참고자료. LLM 구현의 효능을 검증한 연구는 아님. |
| 1.0초 TTFA는 인간 간격 약 5배 | 위 인간 턴 간격 논문 | 1,000÷200 계산 | 일치 | B | 약 200ms를 기준으로 한 비교 계산. 과제·측정 정의가 동일한 직접 비교는 아님. |
| 인간 간격과 비교하면 1초 TTFA는 “달성 불가 구간” | 위 인간 턴 간격 논문 | 논리적 귀결 검토 | 불일치 | C | 인간보다 느리다는 사실로 시스템 목표가 달성 불가능하다고 결론 낼 수 없음. |
| 파이프라인 1.4~1.5초는 인간 평균 간격 약 7배 | 외부 출처 없음 | 1,400~1,500÷200 계산 | 일치 | B | 정확히는 **7~7.5배**. 1.4~1.5초 자체는 노트의 예산이며 실측값으로 확인되지 않음. |
| Ok·Yoo·Lee, Speculative End-Turn Detector…, ACL 2026·OpenETD | URL 미확보 | 정식 학회 기록 추가 확인 | 일치 | A | [ACL Anthology](https://aclanthology.org/2026.acl-long.2094/)에서 제목·저자·2026년·OpenETD 모두 확인. 기존 C를 A로 수정 가능. |
| 응답 지연·자연스러움·필러를 정량적으로 다룬 사용자 연구를 찾지 못함 | URL 없음 | 관련 학술 실험 추가 검색 | 확인불가 | C | 과거 검색 수행 여부는 검증 불가. 다만 관련 연구는 존재: [Lala 등, Interspeech 2019](https://www.isca-archive.org/interspeech_2019/lala19_interspeech.html)은 필러 유무에 따른 허용 응답 시점 사용자 실험을 보고. ‘빈 곳’은 보완 필요. |
| 벤더의 “1초 이내”가 검증된 보편적 자연스러움 기준 | URL 없음 | 직접 실험 근거 확인 시도 | 확인불가 | C | 노트에도 이를 뒷받침하는 통제 실험 출처가 없음. |

**7. “없다·못 찾았다” 및 나머지 근거 공백**

‘못 찾았다’는 작성자의 조사 기록이므로 외부 사실로 검증하기 어렵습니다. 아래 항목들은 **논문이 존재하지 않는다는 결론으로 인용하면 안 됩니다.**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Silero 공식 논문·기술보고서, TEN VAD 논문, Smart Turn 학술 논문이 없음 | GitHub·벤더 블로그 | 제시된 자료 유형 및 문헌 주장 범위 검토 | 확인불가 | C | 확보한 자료가 저장소·블로그라는 사실과 학술 논문 부재는 별개. “이번 조사에서 미확보”로 표기. |
| 모바일·소음 VAD 오탐률·프레임당 지연·한국어 VAD 수치를 못 찾음 | 별도 URL 없음 | 공식 저장소의 평가 정보 확인 | 확인불가 | C | TEN 저장소에 모바일 RTF가 있지만 프레임 지연·한국어 오탐률과는 다른 지표. |
| 한국어 전용 엔드포인팅 학술 논문을 못 찾음 | URL 없음 | Namo 모델 카드와 학술 논문 구분 | 확인불가 | C | 한국어 모델 카드 존재만으로 학술 논문 존재·부재를 결론 낼 수 없음. |
| 지연과 조기 종료의 트레이드오프를 직접 보고한 논문을 못 찾음 | URL 없음 | 제시된 참고문헌·ETD 자료 범위 검토 | 확인불가 | C | 정확도·지연의 공동 평가와 임계값별 트레이드오프 곡선을 구분할 필요가 있음. |
| TTS 큐 flush·LLM 생성 취소를 다룬 학술 논문을 못 찾았으며 엔지니어링 영역으로 보임 | URL 없음 | 근거 자료 확인 | 확인불가 | C | 문헌 부재·학술 연구 대상 제외를 뒷받침하는 근거 없음. |
| 한국어 “응/음”으로 인한 false barge-in 수치가 없음 | URL 없음 | 해당 지표를 직접 보고한 출처 확인 시도 | 확인불가 | C | 백채널 예측 F1과 실제 시스템의 잘못된 TTS 중단율은 별개. |
| Typecast·ElevenLabs 상용 TTS 학술 평가 및 한국어 TTFB 측정이 없음 | URL 없음 | 제시된 근거·검색 범위 검토 | 확인불가 | C | “이번 조사에서 해당 평가를 확보하지 못함”으로 제한해야 함. |
| ReturnZero 스트리밍 지연·CER 독립 학술 검증이 없고 기존 Wiki가 유일한 근거 | 내부 식별자 `src-rtzr-2026-korean-stt-benchmark` | 외부 출처 추적 가능성 확인 | 확인불가 | C | 실제 URL·벤치마크 원문이 없어 수치·독립성·유일성 확인 불가. |
| 스트리밍 한국어 ASR 지연(ms), Whisper의 “음/어” 삭제 경향 관련 논문을 못 찾음 | URL 없음 | 직접 연결되는 인용 근거 확인 시도 | 확인불가 | C | 노트에 있는 비유창성 연구는 Whisper의 삭제 경향을 직접 검증하지 않음. |
| 문장·절 청킹 사용자 비교 연구를 못 찾음 | URL 없음 | 특정 사용자 실험 출처 확인 시도 | 확인불가 | C | 현재 노트만으로 연구 부재를 주장할 수 없음. |
| Full-Duplex-Bench v1.5·F5-TTS·Matcha-TTS·XTTS 수치는 미열람 | URL 없음 | 검증 대상 주장 유무 확인 | 확인불가 | C | 성능 주장이 아니라 조사 미완료 기록. 특히 ‘v1.5’가 논문 버전인지 벤치마크 릴리스인지 식별 필요. |

원문에 우선 반영할 수정은 **Picovoice 잡음 조건, Smart Turn 한국어 FP 수치와 분모, 백채널 개선치의 %p 단위, arXiv 버전 고정, 인간 턴 간격에서 도출한 과도한 설계 결론**입니다.
