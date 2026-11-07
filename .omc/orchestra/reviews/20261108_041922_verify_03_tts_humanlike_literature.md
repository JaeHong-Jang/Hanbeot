검증 기준일은 **2026-11-08**입니다. §0·§8·§9 등에 반복된 주장은 합쳤습니다. **핵심 성능 수치는 다수 일치하지만, 지표 해석·문헌 부재·속도 미보고 주장에는 수정이 필요합니다.**

A는 원출처와 일치, B는 근사치·조건 보완 필요 또는 2차 출처 확인, C는 해당 주장을 뒷받침하지 못한 경우입니다. 원문이 반증하는 항목은 **불일치/C**, 자체 설계 제안은 **확인불가/C**로 표시했습니다. 설계 제안의 C는 오류라는 뜻이 아닙니다.

수집 범위와 평가 방법에 관한 검증입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 8개 쿼리에서 고유 문헌 1,400편 수집 | 외부 URL 없음; 로컬 `raw2/*.jsonl` | 해당 8개 파일의 행 수·고유 EID 재계산 | 불일치 | C | **합계 1,400건, EID 기준 고유 1,288편**이다. 중복 포함 건수를 고유 문헌 수로 기재했다. |
| 한국어 쿼리는 198편 또는 200편 | 외부 URL 없음; 로컬 `raw2/tts_korean.jsonl` | 행·고유 EID·초록 유무 계산 | 불일치 | C | 저장본은 **200건·고유 200편·초록 존재 200건**이다. 198편으로 줄인 기준은 없다. |
| 초록 518편 선별, 한국어 약 70편 정독, 원문 15편 정독 | 조사자 작업 기록 | 선별 목록·판독 기록 존재 여부 확인 | 확인불가 | C | §8의 요약 항목은 15개지만 실제 판독·선별 수를 입증하지는 못한다. |
| Wiki 적재 후보 ≤25개 | 노트 §9 | 표 항목 직접 집계 | 일치 | A | 25개다. |
| Sesame는 약 100만 시간, 주로 영어로 학습 | [Sesame](https://www.sesame.com/journal/crossing-the-uncanny-valley-of-voice) | Experiments 본문 | 일치 | A | 저자 보고 학습량이다. |
| CSM은 1B~8B; 평가 모델은 8B/300M | [Sesame](https://www.sesame.com/journal/crossing-the-uncanny-valley-of-voice) | Model Sizes·Subjective metrics | 일치 | A | 백본/디코더는 1B/100M, 3B/250M, 8B/300M. 주관평가는 Medium이다. |
| Expresso, 7점 CMOS, 80명×평균 약 15개 평가, 이전 90초 맥락 | [Sesame](https://www.sesame.com/journal/crossing-the-uncanny-valley-of-voice) | Subjective metrics | 일치 | A | 80명이 평균 15개 예시를 평가했다고 명시한다. |
| Sesame: 맥락 없으면 선호 차이 없음, 맥락 있으면 원본 선호 | [Sesame](https://www.sesame.com/journal/crossing-the-uncanny-valley-of-voice) | 실험 설명·결과 서술 | 일치 | A | 정확한 승률은 그림에 제시된다. |
| 위 결과는 “문장 하나면 최신 TTS와 사람을 구분 못 한다”는 증거 | [Sesame](https://www.sesame.com/journal/crossing-the-uncanny-valley-of-voice) | 측정 질문 대조 | 불일치 | C | **선호 비교와 사람/기계 판별은 다르다.** 전체 최신 TTS로 일반화할 근거도 없다. |
| Sesame 결과 차이는 맥락 제공만의 효과 | [Sesame](https://www.sesame.com/journal/crossing-the-uncanny-valley-of-voice) | 두 실험 지시문 비교 | 불일치 | C | 질문도 ‘사람 같은 발화’에서 ‘적절한 대화 연결’로 바뀐다. 맥락만의 인과효과로 분리되지 않는다. |
| CSM은 Llama 기반, Mimi 12.5Hz, 대화 이력 조건화 | [Sesame](https://www.sesame.com/journal/crossing-the-uncanny-valley-of-voice) | 모델 설명 | 일치 | A | 텍스트와 오디오를 함께 사용한다. Typecast의 텍스트 맥락 입력과 동일한 기능은 아니다. |
| CSM은 턴테이킹·쉼·말속도 같은 대화 구조를 모델링하지 않음 | [Sesame](https://www.sesame.com/journal/crossing-the-uncanny-valley-of-voice) | Limitations | 일치 | A | 저자 명시 한계다. |
| CSM은 한국어가 약하고 Apache 공개 예정 | [Sesame](https://www.sesame.com/journal/crossing-the-uncanny-valley-of-voice) | 한계·공개 계획 | 일치 | B | 원문은 **다국어 능력이 아직 약하다**고 표현한다. 한국어 별도 평가 결과는 없다. 공개 예정은 당시 시점의 표현이다. |
| Rethinking MUSHRA: Hindi·Tamil, 492명, 246,000평가 | [원문](https://arxiv.org/html/2411.12719) | §3·표 1 | 일치 | A | 전체 수집 규모다. 개별 CMOS 실험의 인원과 구분해야 한다. |
| Hindi REF 84.18, VITS 67.65인데 CMOS는 거의 동급 | [원문](https://arxiv.org/html/2411.12719) | 표 2·3 | 일치 | A | VITS CMOS는 **−0.10±0.07**. CMOS에는 언어별 15명이 참여했다. |
| 20명 이상이면 순위 상관 >90%, 30명+30문항이면 >95% | [원문](https://arxiv.org/html/2411.12719) | §4.3 | 일치 | B | 해당 데이터의 재표집 결과다. 원문은 **30명·30문항 초과**라고 표현하며 보편적 보장값이 아니다. |
| §0의 “20명 이상이면 전체 순위 상관 95% 이상” | [원문](https://arxiv.org/html/2411.12719) | §4.3·§5 비교 | 불일치 | C | 20명 기준은 >90%다. NMR의 >95% 결과는 별도로 **20문항 또는 40명** 조건을 보고한다. |
| 적은 표본에서는 문항보다 청취자를 늘리는 편이 효과적 | [원문](https://arxiv.org/html/2411.12719) | §4.3 | 일치 | A | 청취자·문항 모두 40 미만인 상황에 관한 관찰이다. |
| DG에서 표준편차 43~53% 감소, 소요 시간 약 2배 | [원문](https://arxiv.org/html/2411.12719) | §5·표 6 | 일치 | A | 각각 Hindi 43%, Tamil 53%. 영어에서는 분산 감소가 뚜렷하지 않았다. |
| MUSHRA-NMR은 기준음을 숨기는 방식 | [원문](https://arxiv.org/html/2411.12719) | NMR 정의 | 일치 | B | 정확히는 **어느 것이 기준음인지 명시하지 않는 방식**이다. 음원을 제거한다는 뜻은 아니다. |
| 문장 단위 MOS/CMOS로는 후보 간 차이가 보이지 않는다 | 위 평가 논문·F5·NaturalSpeech 3 | 각 연구의 결과와 결론 대조 | 확인불가 | C | 천장 효과·방법 편향 우려는 타당하지만 모든 후보·문장 평가에 적용되는 결론은 아니다. |
| Audio Turing Test: 중국어, 857명, 5개 평가 차원 | [ATT 원문](https://arxiv.org/html/2505.11200) | 코퍼스·실험 절 | 일치 | A | 숫자·특수문자, 코드스위칭, 준언어·감정, 고문, 다음자다. |
| ATT 점수: Seed 0.417, MiniMax 0.387, Step 0.286, CosyVoice 0.234, GPT-4o 0.138 | [ATT 원문](https://arxiv.org/html/2505.11200) | 표 3 | 일치 | A | **GLMM 사후평균 추정치**다. 단순히 ‘사람이라고 답한 비율’로 읽으면 안 된다. |
| ATT는 사람/기계 이진 강제 선택 | [ATT 원문](https://arxiv.org/html/2505.11200) | 평가 프로토콜 | 불일치 | C | 실제는 **사람/불확실/기계 3택**, 점수 1/0.5/0이다. §5·§8의 설명은 맞는다. |
| 실패 단서는 어절별 읽기, 미세 쉼 부재, 평탄하거나 부적절한 감정 | [ATT 원문](https://arxiv.org/html/2505.11200) | §4.1.2 | 일치 | A | 청취자 서술의 질적 분석 결과다. |
| Auto-ATT F1 0.92, UTMOS v2 0.14 | [ATT 원문](https://arxiv.org/html/2505.11200) | §4.2.1 | 일치 | A | **함정 문항·판정 임계값 0.5** 조건이다. 전체 음성에 대한 일반화 성능이 아니다. |
| MOS 연구 대부분은 지시문·척도 라벨·증분 보고가 부족하며, 지시문과 증분이 점수를 바꿈 | [Stuck in the MOS pit](https://www.isca-archive.org/ssw_2023/kirkland23_ssw.html) | 저자 초록 | 일치 | A | 일부 시스템에서 실험적으로 확인했다. 원노트의 C보다 근거가 강하다. |
| ITU는 한 평가 화면의 신호를 12개 이하로 권장 | [ITU-R BS.1534-3](https://www.itu.int/dms_pubrec/itu-r/rec/bs/R-REC-BS.1534-3-201510-I!!PDF-E.pdf) | §5, PDF p.10 | 일치 | A | 기준음·앵커를 포함한 **신호 수**다. 평가 축 2개를 뜻하지 않는다. |

모델 성능·학습량·지연 수치의 검증입니다. A여도 독립 재현이 아니라 저자 보고값과 일치한다는 뜻입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Qwen3-TTS: 500만 시간 이상, 10개 언어, 3초 음성 복제 | [Qwen3-TTS](https://arxiv.org/html/2601.15621v1) | 소개·학습 절 | 일치 | A | 25Hz 단일 코드북과 실제 12.5Hz인 ‘12Hz’ 다중 코드북 계열을 구분한다. |
| 한국어 WER 1.74~2.70; ElevenLabs 1.87, MiniMax 1.75 | [Qwen3-TTS](https://arxiv.org/html/2601.15621v1) | 표 6 | 일치 | B | 정확한 Qwen 값은 **2.458/2.695/1.741/1.755**. 비교값은 1.865/1.747이다. **Base 모델** 결과다. |
| 한국어 SIM 0.80~0.82; ElevenLabs 0.70, MiniMax 0.78 | [Qwen3-TTS](https://arxiv.org/html/2601.15621v1) | 표 6 | 일치 | B | 정확한 값은 Qwen **0.824/0.814/0.812/0.799**, 비교값 0.700/0.776이다. |
| Qwen의 한국어 결과는 자체 다국어 평가셋 | [Qwen3-TTS](https://arxiv.org/html/2601.15621v1) | §4.1 평가셋 설명 | 불일치 | C | 표 6은 **MiniMax 논문에서 가져온 다국어 평가셋**을 사용한다. |
| 12Hz 첫 패킷: 동시 1건 97~101ms, 3건 179~195ms, 6건 299~333ms | [Qwen3-TTS](https://arxiv.org/html/2601.15621v1) | 표 2 | 일치 | A | 0.6B·1.7B 및 동시 요청 수에 따른 범위다. 서비스 종단 지연 보장값은 아니다. |
| 12Hz RTF 0.29~0.46 | [Qwen3-TTS](https://arxiv.org/html/2601.15621v1) | 표 2 | 일치 | B | 정확한 범위 **0.288~0.463**의 반올림이다. |
| LM TTFP 93~125ms＋디코드 4~25ms | [Qwen3-TTS](https://arxiv.org/html/2601.15621v1) | 표 2 | 일치 | B | **동시 1건의 12Hz·25Hz를 함께 묶은 범위**다. 동시 요청이 늘면 범위를 벗어난다. |
| Qwen3-TTS의 자연성 UTMOS는 4.16 | [Qwen3-TTS](https://arxiv.org/html/2601.15621v1) | 표 4의 평가 대상 확인 | 불일치 | C | 4.16은 **12Hz 토크나이저의 음성 재구성** 점수다. 생성 TTS 전체의 자연성 점수로 인용하면 안 된다. |
| 보고서에 사람 청취 MOS 없음; InstructTTSEval은 중·영만 | [Qwen3-TTS](https://arxiv.org/html/2601.15621v1) | 평가 절·표 8 | 일치 | A | MOS 부재와 주관평가 전반의 부재는 다른 주장이다. |
| 위 한국어 WER가 Sohee CustomVoice의 성능 | [Qwen3-TTS](https://arxiv.org/html/2601.15621v1) | 표 6·9 비교 | 불일치 | C | 표 6은 Base다. 표 9도 **Aiden 대상 화자 실험**으로, Sohee 결과가 아니다. |
| 25Hz는 초저지연에 불리 | [Qwen3-TTS](https://arxiv.org/html/2601.15621v1) | 토크나이저·스트리밍 설명 | 일치 | B | 미래 토큰 대기와 디코더 lookahead가 있다. 사용 불가라는 절대적 의미는 아니다. |
| CosyVoice 2: 0.5B, 청크 크기 15, 스트리밍·비스트리밍 통합 | [CosyVoice 2](https://arxiv.org/html/2412.10117) | 구조·실험 설정 | 일치 | A | FSQ 기반 토큰·LLM·청크 인식 흐름매칭 설명과 부합한다. |
| LibriSpeech NMOS: 사람 3.84, CV2 3.96 | [CosyVoice 2](https://arxiv.org/html/2412.10117) | 표 5 | 일치 | A | 자동 예측 MOS다. 사람 청취에서 인간보다 우수했다는 뜻이 아니다. |
| Seed test-zh CER: 사람 1.26, CV2 1.45 | [CosyVoice 2](https://arxiv.org/html/2412.10117) | 표 6 | 일치 | A | ASR 기반 오류율이다. |
| MOS-I 4.06 vs 3.09 | [CosyVoice 2](https://arxiv.org/html/2412.10117) | 표 10 | 일치 | A | 중문 내부 평가셋에서 CV2와 CosyVoice-Instruct 비교다. 한국어 효과가 아니다. |
| test-ko CER 7.98/9.06, SS 0.707/0.714, NMOS 3.73/3.60 | [CosyVoice 2](https://arxiv.org/html/2412.10117) | 표 9 | 일치 | A | 앞 값이 비스트리밍, 뒤가 스트리밍이다. |
| 스트리밍 시 한국어 CER +1.08%p; hard WER 6.83→8.08 | [CosyVoice 2](https://arxiv.org/html/2412.10117) | 표 6·9 및 차이 계산 | 일치 | A | 두 결과 모두 확인된다. |
| “스트리밍 손실은 한국어에서 더 크다” | [CosyVoice 2](https://arxiv.org/html/2412.10117) | 언어별 표 비교 | 불일치 | C | 일본어 CER은 **18.79→21.41, +2.62%p**다. 어떤 비교 기준인지 명시해야 한다. |
| CV2 논문에 첫 패킷 실측 수치 없음 | [CosyVoice 2](https://arxiv.org/html/2412.10117) | 지연 설명·표 확인 | 일치 | A | 논문과 후속 저장소의 지연 홍보값을 구분해야 한다. |
| CosyVoice 3: 100만 시간, 9언어, 0.5B/1.5B, DiffRO | [CosyVoice 3](https://arxiv.org/html/2505.17589) | 소개·방법 | 일치 | A | DiffRO는 후학습 방식이며 단순 오디오 후처리가 아니다. |
| CV3-Eval 한국어: CV2 19.7, 0.5B 12.8→4.02, 1.5B 5.69→4.01 | [CosyVoice 3](https://arxiv.org/html/2505.17589) | 표 5 | 일치 | A | 화살표 뒤는 DiffRO 적용 결과다. CV2 test-ko 7.98과 다른 평가셋이다. |
| 12.8→4.02는 상대 개선 68.6% | [CosyVoice 3](https://arxiv.org/html/2505.17589) | 표 5에서 계산 | 일치 | B | `(12.8−4.02)/12.8=68.59375%`의 반올림이다. |
| Expresso MOS: GT 3.65, 모델 3.54~3.56 | [CosyVoice 3](https://arxiv.org/html/2505.17589) | 부록 표 13 | 일치 | A | **3.54는 CV2**, CV3 두 크기는 모두 3.56이다. |
| 가장 어려운 셋에서는 큰 모델이 열세 | [CosyVoice 3](https://arxiv.org/html/2505.17589) | 표 6 | 일치 | B | 일부 조건에 해당한다. 예: DiffRO hard-zh 0.5B 8.26, 1.5B 9.06. 모든 hard 조건의 결과는 아니다. |
| CV3 공개 체크포인트가 DiffRO 전 버전일 수 있음 | [CosyVoice 3](https://arxiv.org/html/2505.17589) | 논문과 배포 버전 대응 여부 | 확인불가 | C | 가능성 제기일 뿐이다. 체크포인트·버전별 근거가 필요하다. |
| VoxCPM: 0.5B, 중·영 180만 시간, 16kHz | [VoxCPM](https://arxiv.org/html/2509.24650) | 학습·Audio VAE 설명 | 일치 | A | 원래 VoxCPM 보고서 기준이다. |
| VoxCPM Seed-EN WER 1.85, SIM 72.9%; ZH CER 0.93 | [VoxCPM](https://arxiv.org/html/2509.24650) | 표 3 | 일치 | A | SIM 72.9는 백분율 표기다. |
| N-MOS 4.10/4.11, S-MOS 4.11/4.18, 청취자 20명 | [VoxCPM](https://arxiv.org/html/2509.24650) | 평가 설명·표 4 | 일치 | A | 각각 중국어/영어, 5점 척도다. |
| VoxCPM RTF 0.17, RTX 4090 | [VoxCPM](https://arxiv.org/html/2509.24650) | 효율성 설명 | 일치 | A | 첫 패킷 지연과는 다른 지표다. |
| VoxCPM 논문에는 한국어 평가 없음 | [VoxCPM](https://arxiv.org/html/2509.24650) | 평가 언어·표 확인 | 일치 | A | VoxCPM2로 확대 해석하면 안 된다. |
| VoxCPM2는 30언어; CV3-Eval 한국어 5.69로 CV3-1.5B와 같음 | 선행 Wiki; [공식 저장소](https://github.com/OpenBMB/VoxCPM) | 현재 README 표 대조 | 일치 | A | 두 모델의 ko 열이 실제로 모두 5.69다. **값이 같다는 이유만으로 단순 재게시라고 단정할 수는 없다.** |
| F5-TTS: 공개 100K시간, DiT 흐름매칭·Sway Sampling | [F5-TTS](https://arxiv.org/html/2410.06885) | 소개·방법 | 일치 | A | 패딩용 filler token은 대화의 “음/어” 필러와 다르다. |
| F5 CMOS en +0.31, zh +0.21; SMOS 3.89/3.83 | [F5-TTS](https://arxiv.org/html/2410.06885) | 표 2 | 일치 | A | **32 NFE** 결과이며 GT 대비 CMOS다. |
| F5 청취 20명, −3~+3 척도 | [F5-TTS](https://arxiv.org/html/2410.06885) | 부록 C | 일치 | A | 영어·중국어 원어민 평가와 30라운드가 명시된다. |
| F5 WER en 1.83/zh 1.56 | [F5-TTS](https://arxiv.org/html/2410.06885) | 표 2 | 일치 | A | Seed-TTS의 해당 언어 시험셋 기준이다. |
| F5 RTF 0.15/0.31, RTX 3090 | [F5-TTS](https://arxiv.org/html/2410.06885) | 표 1 | 일치 | A | 각각 **16/32 NFE**, 10초 음성 추론 기준이다. |
| F5 한국어 확장은 CoreaSpeech의 LoRA; 가중치 비상업 조건 | [CoreaSpeech PDF](https://papers.neurips.cc/paper_files/paper/2025/file/5b221bc040a287a255a0f311598aec61-Paper-Datasets_and_Benchmarks_Track.pdf) | PEFT 방법·라이선스 설명 | 일치 | A | 해당 PEFT-TTS를 지칭할 때 맞다. 모든 한국어 F5 체크포인트의 조건을 대표하지 않는다. |
| MaskGCT: 100K시간＋일 2,500·한 7,400·독 6,900·불 8,200시간 | [MaskGCT](https://arxiv.org/html/2409.00750) | 부록 E | 일치 | A | 다국어 확장 실험의 추가 학습량이다. |
| MaskGCT 한국어 WER 9.417/SIM 0.732; XTTS 12.45/0.617 | [MaskGCT](https://arxiv.org/html/2409.00750) | 표 11 | 일치 | A | 노트의 9.4는 근사 표기다. |
| MaskGCT CMOS +0.10/+0.03/+0.05, SMOS 4.09~4.27 | [MaskGCT](https://arxiv.org/html/2409.00750) | 표 2 | 일치 | A | LibriSpeech/Seed-en/Seed-zh 결과다. |
| MaskGCT 청취자 수 확인 불가 | [MaskGCT](https://arxiv.org/html/2409.00750) | 주관평가 설명 확인 | 확인불가 | C | 척도는 명시되지만 이번 열람에서 명확한 청취자 수를 확보하지 못했다. |
| MaskGCT는 실제 길이를 사용하는 비제로샷 평가만 수행 | [MaskGCT](https://arxiv.org/html/2409.00750) | 표 2·길이 예측기 설명 | 불일치 | C | **GT 길이와 예측 길이 결과를 함께 보고**하며 별도 길이 예측기도 있다. |
| NaturalSpeech 3 학습량 200K시간 | [NaturalSpeech 3](https://arxiv.org/html/2403.03100) | 기본 실험·스케일링 구분 | 일치 | B | 200K시간은 확대 실험이다. 기본 500M 모델의 60K시간 실험과 구분해야 한다. |
| CMOS GT 대비 −0.08/−0.17, 청취자 12명·문장 20개 | [NaturalSpeech 3](https://arxiv.org/html/2403.03100) | §4.2.1 | 일치 | A | LibriSpeech/RAVDESS 기준. SMOS는 별도로 10개 발화를 평가했다. |
| SMOS 4.01 vs GT 3.85; 분해 제거 시 CMOS −0.25 | [NaturalSpeech 3](https://arxiv.org/html/2403.03100) | 표 1·3·9 | 일치 | A | −0.25는 완전 모델 대비 ablation이다. |
| NaturalSpeech 3 속도·지연 미보고 | [NaturalSpeech 3](https://arxiv.org/html/2403.03100) | 부록 A.5·표 10 | 불일치 | C | **V100에서 RTF 0.296**, 적은 단계 변형은 **0.067**을 보고한다. 첫 패킷 측정은 아니다. |
| Fish-Speech: 720K시간, 일본어·한국어 계열 20K시간 | [Fish-Speech](https://arxiv.org/html/2411.01156) | §5 | 일치 | A | 일·한을 합친 East Asian 계열 수치이며 언어별 양은 없다. |
| Fish WER 6.89 vs GT 9.22; MOS 4.05 vs GT 5.00 | [Fish-Speech](https://arxiv.org/html/2411.01156) | 표 1·3 | 일치 | A | 표의 전사 수치는 맞다. GT MOS 5.00을 비롯한 평가 절차의 설명은 제한적이다. |
| Fish 첫 패킷 150ms, RTX 4090에서 실시간의 약 15배 | [Fish-Speech](https://arxiv.org/html/2411.01156) | §4.2 | 일치 | A | **본문에 수치는 있다.** 다만 반복 측정·분산·입력 조건 등 근거가 부족하다는 비판은 가능하다. |
| Fish 평가는 단일언어 복제, 총 300샘플; 청취자 수 미상 | [Fish-Speech](https://arxiv.org/html/2411.01156) | §6·각주 | 일치 | A | 10명 화자×30발화. 교차언어 합성은 제외했다. |
| Fish는 연매출 USD 500K 미만이면 상업 이용 가능 | 선행 Wiki; [공식 LICENSE](https://github.com/fishaudio/fish-speech/blob/main/LICENSE), [S2-Pro 카드](https://huggingface.co/fishaudio/s2-pro) | 적용 자산·조항 대조 | 일치 | B | **Community License 적용 자산에 한정**된다. S2-Pro 가중치는 Research License로 상업 사용에 별도 라이선스가 필요하다. |
| 서로 다른 모델의 한국어 오차는 3배 이상 차이 | 위 모델 논문들 | 지표·시험셋 대조 | 확인불가 | C | 숫자 범위는 벌어지지만 **WER/CER·ASR·시험셋이 달라 성능 격차의 배수로 해석할 수 없다.** |
| RTF가 곧 응답 지연이며 NFE 증가가 직접 첫 패킷 지연 | 위 모델 논문들 | 지표 정의 비교 | 불일치 | C | RTF는 생성 시간/음성 길이다. 첫 패킷·전체 응답·네트워크 지연을 분리해야 한다. |

대화 맥락·필러·한국어 연구 인용의 검증입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Conversational End-to-End TTS는 맥락에 맞는 자연스러운 운율을 개선 | [DOI](https://doi.org/10.1109/SLT48900.2021.9383460) | IEEE 저자 초록 | 일치 | A | 발화·대화 수준 선호 개선을 서술한다. 노트에는 효과 크기가 없다. |
| GPT-Talker: NCSSD 중·영 236시간, 대화 이력 토큰화·스타일 예측 | [DOI](https://doi.org/10.1145/3664647.3681697), [PDF](https://arxiv.org/pdf/2407.21491) | 초록·방법·데이터 표 | 일치 | A | 원문의 정식 제목은 *Generative Expressive Conversational Speech Synthesis*다. |
| GPT-Talker 자연성·표현력 우위는 초록 주장만 확인 가능 | [PDF](https://arxiv.org/pdf/2407.21491) | 본문 표 3 | 불일치 | C | 현재 PDF 본문을 읽을 수 있다. DailyTalk N-DMOS **3.890**, E-DMOS **3.908** 등의 수치가 있다. |
| ECSS는 이종 그래프로 감정 맥락을 모델링해 표현을 개선 | [DOI](https://doi.org/10.1609/aaai.v38i17.29833), [저자 초록](https://arxiv.org/abs/2312.11947) | 원저자 초록 | 일치 | A | DailyTalk에 감정 범주·강도 라벨을 추가했다. |
| CONCSS도 감정 맥락 모델링 연구 | [DOI](https://doi.org/10.1109/ICASSP48485.2024.10446506), [저자 초록](https://arxiv.org/abs/2312.10358) | 연구 목표 대조 | 일치 | B | **대화 맥락에 적절한 운율·대조학습**이 중심이다. ECSS와 동일한 감정 라벨 모델로 묶으면 부정확하다. |
| STUDIES: 상대 감정 라벨＋맥락 임베딩으로 “더 맞는 말투” | [STUDIES](https://www.isca-archive.org/interspeech_2022/saito22_interspeech.html) | 초록의 비교 기준 확인 | 일치 | B | 정확한 결론은 **에이전트 자신의 감정 라벨을 사용한 합성과 동등한 자연성**이다. 무맥락 대비 우위로 단정하지 않는다. |
| 부적절한 강세가 자연스러움·생동감을 낮춤 | [DOI](https://doi.org/10.1145/3486580) | 저장된 Scopus 저자 초록 대조; 웹 원문 접근 시도 | 일치 | B | 적절한 운율과 부적절한 운율을 비교한 연구다. “사람 목소리 사용”만으로 해결되지 않았다. |
| 정보 구조에 맞춘 운율이 텍스트보다 설득력 높음, n=212 | [DOI](https://doi.org/10.1080/0144929X.2024.2420871), [저자 소속기관](https://research.tilburguniversity.edu/en/publications/examining-the-persuasiveness-of-text-and-voice-agents-prosody-ali/) | 저자 초록 | 일치 | A | 인간다움·개인화 지각의 매개 효과를 보고한다. |
| 필러·연장 빈도 제어와 상대 음향 엔트레인먼트 모델 | [ISCA 원문 초록](https://www.isca-archive.org/interspeech_2021/cong21b_interspeech.html) | 방법 설명 | 일치 | A | 명시 라벨·발생 예측·이전 음성 스타일 인코더를 사용한다. |
| SponTTS는 즉흥 스타일 모델링·전이에 유리 | [DOI](https://doi.org/10.1109/ICASSP48485.2024.10445828), [저자 자료](https://arxiv.org/abs/2311.07179) | 저자 초록 검색 대조 | 일치 | B | 신경 병목 특징을 이용한 2단계 방식이다. 노트에 효과 크기는 없다. |
| Interspeech 2024 즉흥 TTS는 운율·즉흥 행동 자연성을 개선 | [ISCA 초록](https://www.isca-archive.org/interspeech_2024/li24na_interspeech.html) | 저자 초록 | 일치 | A | 언어모델 기반 행동 라벨·세밀 운율 모델링 연구다. |
| MQTTS는 YouTube·팟캐스트 실제 음성으로 학습해 기존 시스템을 개선 | [AAAI 원문](https://ojs.aaai.org/index.php/AAAI/article/view/26488) | 저자 초록 | 일치 | A | 다중 코드 생성·단조 정렬을 사용한다. |
| 숨 삽입은 자연성·회상에 유리하나 비유창한 숨 재현은 문제 | [DOI](https://doi.org/10.1109/ICASSP40776.2020.9054107) | IEEE 저자 초록 | 일치 | B | 자연성·회상 이점은 배경 설명이다. 해당 실험의 직접 결과는 **호흡 모델링 방식 간 선호**다. |
| NVSpeech: 중국어 18종 태그, 수작업 76시간＋자동 573.4시간 | [NVSpeech](https://arxiv.org/html/2508.04195) | 데이터 구축 절 | 일치 | A | 본문 기준. 원문 일부 요약의 ‘전체 573.4시간’ 표현은 내부적으로 혼동을 일으킨다. |
| NVSpeech 선호율 CV 78.7%, CV2 75.4%, 60명 | [NVSpeech](https://arxiv.org/html/2508.04195) | Human Evaluation | 일치 | A | **미세조정 전후 모델 출력 비교**다. 태그만 추가한 효과로 분리되지 않는다. |
| 비언어 태그 삽입만으로 위 선호율이 발생 | [NVSpeech](https://arxiv.org/html/2508.04195) | 비교 조건 확인 | 불일치 | C | 학습 데이터·미세조정·태그 사용이 함께 달라진다. |
| “음질 NMOS 3.9~4.0이 거의 안 변함” | [NVSpeech](https://arxiv.org/html/2508.04195) | 지표 정의·표 5 | 불일치 | C | NMOS는 **비언어음 및 전환의 자연스러움**이다. 전체 품질은 QMOS이며, 표 5에 전후 NMOS 비교도 없다. |
| NVSpeech NMOS 3.9/4.0, 재현율 0.60/0.62 | [NVSpeech](https://arxiv.org/html/2508.04195) | 표 5 | 일치 | B | 재현율 정확한 값은 **0.604/0.619**다. |
| 라벨 일치 κ>0.85 | [NVSpeech](https://arxiv.org/html/2508.04195) | 수작업 라벨링 절 | 일치 | B | **데이터 5% 교차 주석, 주요 범주**에 한정된 Cohen’s κ다. |
| FillerSpeech: Vicuna-7B로 필러 위치 예측·스타일 제어, 고려대 연구 | [ACL](https://aclanthology.org/2025.emnlp-main.1730/), [PDF](https://aclanthology.org/2025.emnlp-main.1730.pdf) | 방법·저자 정보 | 일치 | A | 위치뿐 아니라 필러 유형·피치·길이도 다룬다. Libriheavy 기반으로 영어 추정도 타당하다. |
| FillerSpeech는 PDF여서 본문 수치 확인 불가 | [PDF](https://aclanthology.org/2025.emnlp-main.1730.pdf) | PDF 직접 파싱 | 불일치 | C | 현재 본문 표를 읽을 수 있다. 당시 도구 제약이라는 작업 기록 자체는 검증할 수 없다. |
| EmoCtrl-TTS: 27,000시간 의사라벨, 웃음·울음·시간별 감정 제어 | [IEEE](https://ieeexplore.ieee.org/abstract/document/10832181/) | 저자 초록 | 일치 | A | 정확히는 **27,000시간 이상**이다. |
| 시각장애인은 경험에 따라 0.8~3.6배속 청취 가능, n=10 | [Springer](https://link.springer.com/chapter/10.1007/978-3-319-08596-8_8) | 저자 초록 | 불일치 | C | 0.8~3.6은 **제시한 15개 시험 속도 범위**다. 참가자가 그 범위를 모두 이해했다는 결과가 아니다. 인원 10명은 맞다. |
| TaKOtron2-Pro는 한국어 쉼 오류를 개선하고 긴 OOD 문장에 안정적 | [arXiv](https://arxiv.org/abs/2404.02592), [ACL](https://aclanthology.org/2024.lrec-main.910/) | 저자 초록·PDF | 일치 | A | 구문·음향 단서를 결합한다. 본문 표도 접근 가능하다. |
| ETRI 2006: 970문장 시험, modality 도입 시 정확도 최대 25% 향상 | [ETRI 원출처](https://ksp.etri.re.kr/ksp/article/read?id=41758) | 저자 초록 | 일치 | A | 학습은 3,883발화다. 초록만으로 **25%p인지 상대 25%인지** 확정하지 말아야 한다. |
| Explaining the Wait: n=194, 지연 설명이 신뢰·사회적 존재감에 영향 | [저자 소속기관](https://repository.tudelft.nl/record/uuid%3A943b2e86-d448-4a36-a4e7-d5dd72c9407f) | 저자 초록 | 일치 | B | 즉시 응답에서는 투명성·신뢰가 개선됐지만 **동적 지연에서는 효과가 없었다.** 필러 효과를 검증한 연구는 아니다. |
| LLM2Speech는 품질을 유지하며 지연 감소 | [DOI](https://doi.org/10.1109/ICASSP48485.2024.10446214), [IBM 원출처](https://research.ibm.com/publications/speak-while-you-think-streaming-speech-synthesis-during-text-generation) | 저자 초록 | 일치 | A | LLM 은닉 임베딩과 비스트리밍 교사 모델을 사용한다. |
| InstantSpeech는 LLM 생성 중 낮은 지연·품질 유지 | [DOI](https://doi.org/10.1109/ICASSP49660.2025.10890120) | 저장된 Scopus 초록·서지 대조 | 일치 | B | 웹 본문은 확보하지 못했다. 정량 지연은 노트에도 없다. |
| 2021 pseudo-lookahead도 지연을 줄이며 품질 유지 | 구체 식별자 없음 | 인용 식별 가능성 확인 | 확인불가 | C | 저자·제목·DOI가 없어 해당 연구를 확정할 수 없다. |

한국어 데이터·평가 연구에 관한 검증입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| CoreaSpeech: NeurIPS D&B 2025, 아주대, 700시간·21,449명, 원자료 2,058시간 | [공식 저장소](https://github.com/CoreaSpeech/CoreaSpeech), [논문 PDF](https://papers.neurips.cc/paper_files/paper/2025/file/5b221bc040a287a255a0f311598aec61-Paper-Datasets_and_Benchmarks_Track.pdf) | 표지·초록·표 1 | 일치 | A | 데이터 규모가 직접 확인된다. |
| N2gk+·자모 coreset·동적 UTMOS 선별, F5 기반 PEFT-TTS | [논문 PDF](https://papers.neurips.cc/paper_files/paper/2025/file/5b221bc040a287a255a0f311598aec61-Paper-Datasets_and_Benchmarks_Track.pdf) | 방법 절 | 일치 | A | LoRA 기반 모델 확장도 확인된다. |
| Clean/Noisy/Numeric 평가셋, XTTS·CV2·Llasa·Zonos 비교 | [논문 PDF](https://papers.neurips.cc/paper_files/paper/2025/file/5b221bc040a287a255a0f311598aec61-Paper-Datasets_and_Benchmarks_Track.pdf) | 표 2·3·7 | 일치 | A | 각 평가 하위셋은 100발화다. |
| CoreaSpeech 본문에 CER/MOS가 없고 결과는 이미지뿐 | [논문 PDF](https://papers.neurips.cc/paper_files/paper/2025/file/5b221bc040a287a255a0f311598aec61-Paper-Datasets_and_Benchmarks_Track.pdf) | 본문·부록 표 직접 확인 | 불일치 | C | **표 3에 CER/WER, 부록 표 7에 nMOS/sMOS/RTF**가 있다. 한국어 청취자 20명도 명시한다. |
| KSS 12시간, Emilia-ko 213시간과 비교 | [논문 PDF](https://papers.neurips.cc/paper_files/paper/2025/file/5b221bc040a287a255a0f311598aec61-Paper-Datasets_and_Benchmarks_Track.pdf) | 표 1 | 일치 | A | 해당 논문의 표기와 같다. |
| CoreaSpeech 데이터·모델은 CC BY-NC 4.0 | [논문 PDF](https://papers.neurips.cc/paper_files/paper/2025/file/5b221bc040a287a255a0f311598aec61-Paper-Datasets_and_Benchmarks_Track.pdf) | 표 1·공개성 설명 | 일치 | A | 코드의 라이선스와 데이터·모델 조건을 구분해야 한다. |
| KOMOS: 1,000발화·29명·5,000평가, 발화당 5명 | [개발자 글](https://discuss.pytorch.kr/t/komos/12380), [논문](https://arxiv.org/html/2610.15353) | §3.2·3.3 | 일치 | A | arXiv 식별자는 실제 KOMOS 논문으로 확인된다. |
| KOMOS SRCC/LCC 0.900/0.950; UTMOS v2 0.767/0.858 | [KOMOS 논문](https://arxiv.org/html/2610.15353) | 표 1 | 일치 | A | 테스트 100발화에서의 발화 단위 상관이다. |
| 미학습 화자 34발화 SRCC 0.951 | [KOMOS 논문](https://arxiv.org/html/2610.15353) | 화자 분리 하위셋 결과 | 일치 | A | 작은 추가 하위셋 결과다. |
| Whisper-medium 미세조정·청취자 조건 구조 | [KOMOS 논문](https://arxiv.org/html/2610.15353) | §3.4 | 일치 | A | 주 분할은 **seen-system 설정**이다. |
| KOMOS는 엔진 간 미세한 차이를 판별하지 못함 | [KOMOS 논문](https://arxiv.org/html/2610.15353) | 검증 범위 확인 | 확인불가 | C | 엔진 분리 검증이 부족하다는 것과 판별 능력이 없다는 것은 다르다. “미검증”으로 수정해야 한다. |
| Hola-TTS: 중·영·일·한 제로샷 AR, VALL-E X·XTTS 상회 | [DOI](https://doi.org/10.1109/ISCSLP63861.2024.10800183) | 서지·저자 초록의 저장본 대조 | 일치 | B | 웹 원문 본문은 확보하지 못했다. 정량 크기는 미확인이다. |
| 한국어 파열음: 60개 TTS 목소리·3플랫폼, 젊은 음성 VOT 차 12ms vs 노년 21ms | [DOI](https://doi.org/10.17250/khisli.43.1.202603.004), [KCI](https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003317354) | 서지·Scopus 저자 초록 대조 | 일치 | B | **억양구 첫 위치** 결과다. 나이 지각 자체의 청취 실험은 아니다. |
| 위 VOT 결과가 상용 보이스의 나이 지각 효과를 입증 | 위 논문 | 종속변수 확인 | 확인불가 | C | 음향 분석에서 청취자의 나이 지각에 대한 인과효과로 확장했다. |
| Conformer FastSpeech2 국내 논문은 한국어 도메인 특화 연구 | [원문 PDF](https://www.e-sciencecentral.org/upload/jasc/pdf/N0660410312.pdf) | 제목·초록 | 일치 | A | 정확한 대상은 **음식 주문 문장**이다. 노년층 대상 연구로 인용하면 틀린다. |
| 2021년 이후 한국어 신경망 TTS는 CoreaSpeech·Hola·TaKO 정도 | Scopus 조사 결과 | 저장 목록과 노트 내 다른 연구 대조 | 불일치 | C | 노트 자체에도 2022년 Conformer FastSpeech2가 있다. 포괄적 문헌 현황으로 쓰기 어렵다. |
| 한국어 대화형 TTS 청취 평가 문헌·수치 0건 | 검색 결과의 부재 | 반례 원문 검색 | 불일치 | C | [KoCC-TTS 연구](https://arxiv.org/html/2509.18531)는 한국어 콜센터 대화 50개, **27명·596표의 블라인드 선호 평가**를 보고한다. 단, 대화 이력 조건화 효과 실험과는 구분해야 한다. |
| 한국어 대화 이력 조건화 효과 크기는 미확인 | 직접 출처 없음 | 제시 논문들의 평가 범위 대조 | 확인불가 | C | 이번 대조에서 해당 효과 크기는 확보하지 못했다. “연구가 없다”보다 좁은 표현이 적절하다. |
| 한국어 비언어음·필러·공감 음성 코퍼스가 없음 | 직접 출처 없음 | 검색 범위·부재 주장 점검 | 확인불가 | C | 제한된 검색에서 미발견했다는 기록만으로 존재하지 않음을 입증할 수 없다. |
| 한국어 합성 음성 신뢰·공감·존댓말 억양 연구가 없음 | 직접 출처 없음 | 인용·검색 범위 점검 | 확인불가 | C | “이번 조사에서는 확보하지 못했다”로 수정해야 한다. |

지각·신뢰·공감 연구에 관한 검증입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Kühne 2020: 95명, 7점, Watson/Sophia/사람, 범주별 5클립 | [Frontiers 원문](https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2020.593732/full) | 방법 절 | 일치 | A | **7명을 제외해 정량 분석은 88명**이다. |
| 인간다움 6.51 vs 2.72~3.00 | [원문](https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2020.593732/full) | 표 3 | 일치 | A | 음성 인간다움 척도다. |
| 호감도 5.58 vs 3.02~3.16; 기이함 1.89 vs 3.77~3.79 | [원문](https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2020.593732/full) | 표 3 | 일치 | A | 호감도는 음성, 기이함은 화자 평가 항목으로 구분된다. |
| 인간다움→기이함 β=−0.64~−0.66 | [원문](https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2020.593732/full) | 회귀분석 본문 | 일치 | A | Sophia·Watson 각각의 음성 평가 관계다. 인과효과는 아니다. |
| 호감도 예측: 쾌적함 β 0.55~0.79, 신뢰 0.28~0.44 | [원문](https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2020.593732/full) | 다중회귀 결과 | 일치 | A | 모델별 계수를 묶은 범위다. |
| “더 사람 같을수록 더 편하다”가 현대 TTS에도 성립 | 위 논문 | 설계·자극 범위 점검 | 확인불가 | C | 구형 합성 음성의 상관 결과다. 현대 모델 전체의 법칙으로 확장할 수 없다. |
| 구분 단서로 억양·소리·감정·호흡 언급 | [원문](https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2020.593732/full) | 자유응답 분석 | 일치 | A | 효과 크기가 있는 독립 실험 결과는 아니다. |
| Deviation 연구: n=50·35, 비단조 관계·유기성/생동감/마음 귀속 조절 | [저자 소속기관](https://orca.cardiff.ac.uk/id/eprint/169109/) | 저자 초록 | 일치 | A | 합성·정상·변형/병리 음성을 포함한 실험이다. |
| 위 연구는 “합성 오류가 기이함의 원인”을 입증 | [저자 초록](https://orca.cardiff.ac.uk/id/eprint/169109/) | 결론 범위 대조 | 불일치 | C | 전형적 유기 음성에서의 일탈을 다룬다. 합성 오류만으로 설명한 연구가 아니다. |
| 떨리는 AI 목소리: 3개 연구＋현장 실험, 취약성→공감→기부 의향·클릭 증가 | [IEEE 저자 초록](https://ieeexplore.ieee.org/abstract/document/10316625) | 초록 | 일치 | A | 자선 맥락 결과다. 반려 서비스에서의 효과는 별도 검증이 필요하다. |
| Trust in artificial voices: 반복 투자 게임과 첫인상·행동의 일치 효과 | [저자 PDF](https://pure.plymouth.ac.uk/ws/portalfiles/portal/39198858/a40-torre.pdf) | 초록·실험 설명 | 일치 | A | 신뢰가 단순히 목소리 인간다움에 비례한다는 결과는 아니다. |
| Voice Fidelity: 청취 n=50·의사결정 n=101, 내용과 독립적인 음성 효과 | [저자 소속기관](https://orbilu.uni.lu/handle/10993/60684) | 저자 초록 | 일치 | A | 합성 방식·속도·피치 변이와 몰입·이해 용이성 등을 다룬다. |
| Measuring perceived empathy는 대화 시스템 공감 측정을 정리 | [Springer 원문](https://link.springer.com/article/10.1007/s00146-023-01715-z) | 초록·본문 | 일치 | A | 모든 음성 서비스에 바로 적용 가능한 단일 검증 척도를 제공한다는 뜻은 아니다. |
| 2025 체계적 고찰: 음향 단서가 신뢰 지각에 영향 | [Frontiers 원문](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1495456/full) | 연구 범위·결론 | 일치 | A | 특정 음향 설정의 보편적인 신뢰 증가를 보장하지 않는다. |
| Empathic voice assistants: 공감 지각이 위임·의사결정 지원·추천 신뢰에 긍정적 | [출판사](https://www.sciencedirect.com/science/article/pii/S0148296324000705) | 저자 초록 | 일치 | A | **온라인 실험**이다. 가족 쇼핑에서는 기능적 속성의 역할이 달랐다. |
| Alexa, may I adopt you?: n=318, 공감이 태도·채택·사용 강도와 관계 | [출판사 원문](https://doi.org/10.1108/JSM-07-2023-0284) | 초록·방법 | 일치 | A | 미국 387명 수집 후 318명 분석. 설문 기반 구조방정식 연구다. |
| Anthropomorphic virtual assistants 2019: 인간 목소리가 사회적 존재감·신뢰·행동 의향 개선 | 원노트 URL 없음; [확인 DOI](https://doi.org/10.1177/2051570719829432) | 저장된 Scopus 저자 초록 | 일치 | B | 제목은 식별된다. 원노트에 DOI 추가가 필요하다. |
| Robot voices in daily life 2022: 인간다운 음성의 수용성 향상 | 원노트 URL 없음; [확인 DOI](https://doi.org/10.3389/fpsyg.2022.787499) | 저자 초록 저장본 | 일치 | B | 사회적 사용 맥락에서는 전반적 수용성이 낮다는 조건도 있다. |
| Sympathy for the digital 2022: 목소리가 공감·사회적 존재감에 영향 | 원노트 URL 없음; [확인 DOI](https://doi.org/10.1016/j.cag.2022.03.009) | 저자 초록 저장본 | 일치 | B | 효과가 실험별로 다르다. 두 번째 실험에서는 **음성 유형의 공감 반응 효과가 없었다.** |
| 공감은 “맞는 감정을 맞는 시점에”일 때만 성립 | 직접 대응 출처 없음 | 인용 논문의 검증 범위 대조 | 확인불가 | C | 설계 원칙으로는 제안할 수 있으나, ‘때만’이라는 필요조건은 입증되지 않았다. |

Typecast 기능·W4 설계·연구 공백 주장의 검증입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Typecast ssfm-v31, previous_text/next_text, 감정 7종·강도·속도 제어 | 선행 노트; [공식 API 문서](https://typecast.ai/docs/api-reference/text-to-speech/text-to-speech) | 모델·요청 필드 확인 | 일치 | A | v31과 7개 프리셋, 강도 0~2, tempo 제어가 명시된다. |
| previous_text에 직전 2~3턴을 넣으면 유효 | [공식 API 문서](https://typecast.ai/docs/api-reference/text-to-speech/text-to-speech) | 기능 설명과 정량 검증 구분 | 확인불가 | C | 맥락 입력 기능은 있지만 **2~3턴의 최적성·한국어 효과 크기**는 검증되지 않았다. |
| `<\|1s\|>`로 쉼 지정 가능 | 선행 노트; Typecast 문서 | 현재 문서·검색 확인 | 확인불가 | C | 이번 확인에서 해당 표기의 공식 근거를 확보하지 못했다. 지원 단정 전에 실제 요청 검증이 필요하다. |
| Typecast는 웃음·한숨 합성이 불가 | 선행 노트 | 공식 기능 설명 확인 | 확인불가 | C | 별도 지원 근거도, 명시적인 불가 근거도 확보하지 못했다. |
| Typecast 청크 스트리밍 지원 | [공식 문서](https://typecast.ai/docs/overview) | Streaming TTS 안내 | 일치 | A | 청크가 생성되는 대로 전달한다고 명시한다. |
| Typecast는 첫 패킷 지연 공개 수치가 없음 | [공식 API 페이지](https://typecast.ai/developers/api/) | 지연·비교 표 확인 | 불일치 | C | 현재 공식 페이지에 **TTFB 170~210ms**가 있다. 한국어 실측·동시 부하·재생 시작 시간 보장은 별개다. |
| 한국어 CER·previous_text 효과의 공개 정량 근거 없음 | Typecast 공식 자료 | 공개 평가 자료 확인 | 확인불가 | C | 이번 확인에서는 확보하지 못했다. 공개 자료 전체의 부재를 증명한 것은 아니다. |
| 상용 API에서는 운율 생성 자체를 바꿀 수 없음 | Typecast 및 모델 논문 | API 제어 범위 비교 | 불일치 | C | 문맥·감정·tempo·pitch도 출력 운율에 관여한다. **모델 학습·내부 구조 변경이 어렵다**는 표현이 정확하다. |
| 문장 내 감정·비언어음·100ms대 지연에는 반드시 자체 모델 필요 | 모델 논문·설계 판단 | 필요조건의 근거 확인 | 확인불가 | C | 특정 구현 선택이다. 상용 API 전체에 대한 불가능성이나 자체 모델의 지연 보장을 입증하지 못한다. |
| 필러 클립 삽입·문장 분할·숫자 전처리·고정 보이스 ID 사용 가능 | 시스템 설계 제안 | 구현 가능성과 효과 검증 구분 | 확인불가 | C | 가능한 구현 방향이지만 자연성·공감 개선 효과는 별도 실험 대상이다. |
| W4: 4시스템, Qwen 1.7B CustomVoice, 3단계·20~25분·전문가 5명 | 자체 제안 | 외부 근거 여부 확인 | 확인불가 | C | 설계값이다. 문헌에서 도출된 검증 결과처럼 제시하면 안 된다. |
| 층화 문항 30개 이상: 8/4/4/6/4/4/4개 | 자체 제안 | 합계 계산 | 일치 | A | 합계는 **34개**다. ‘30개 이상’과는 일치한다. |
| 청취자 목표 30명·최소 20명, 대학생 20+·전문가 5~10 | 자체 제안＋MUSHRA 논문 | 표본 근거·구성 대조 | 확인불가 | C | 참고 연구의 상관 결과가 이 실험의 검정력을 보장하지 않는다. 구성에 따라 총원이 30명 미만이 될 수도 있다. |
| 각 청취자 시스템당 12~15문항, 균형 라틴 방격 | 자체 제안 | 배정·시간 계산 자료 여부 | 확인불가 | C | 실제 배정표와 음원 길이가 없어 균형·20~25분 소요를 확인할 수 없다. |
| −23 LUFS, WAV 24kHz, 앞뒤 무음 100ms | 자체 제안 | 출처·적용 목적 확인 | 확인불가 | C | 통제 설정이다. 제시 논문들이 정한 한국어 TTS 최적값은 아니다. |
| 혼합효과 모형·부트스트랩 95% CI·Holm 보정·승률 50% 검정 | 자체 분석 계획 | 분석 대상·독립성 확인 | 확인불가 | C | 반복 청취의 군집 구조를 반영해야 한다. 모든 투표를 독립 시행으로 취급한 단순 이항검정은 재검토가 필요하다. |
| 통과선 CMOS +0.3 또는 승률 60%, 오류율 현행 이하 | 자체 제안 | 문헌 근거 여부 | 확인불가 | C | 노트가 제안값이라고 밝힌 점은 적절하다. 유의성·효과 크기 기준은 구분해야 한다. |
| A/B 강제 선택 결과를 CMOS +0.3 기준과 직접 비교 | §5 프로토콜 | 측정 척도 대조 | 불일치 | C | **이진 선호 투표로는 7점 CMOS를 계산할 수 없다.** 별도 평정 문항이 필요하다. |
| 4시스템×30문항=120클립, 30명×25분 | 자체 비용 어림 | 산술 검산 | 일치 | A | 계산은 맞다. 다만 제시한 층화안 **34문항이면 기본 136클립**이며 추가 조건은 별도다. |
| 속도 0.9가 일반 대학생에게 유리하다는 근거 없음 | 2014 시각장애인 연구 | 대상·측정 범위 대조 | 일치 | A | 해당 논문은 일반 대학생의 0.9배속 최적성을 뒷받침하지 않는다. |
| Whisper는 한국어 숫자 표기 차이를 흡수하므로 CER은 보조만 사용 | 직접 출처 없음 | 제시 문헌에서 검증 여부 확인 | 확인불가 | C | ASR·텍스트 정규화에 따른 평가 편향 가능성은 있으나, 이 구체 주장의 근거·예시가 없다. |
| 해요체 끝 억양으로 질문·서술·공감을 구분 가능 | ETRI 2006 | 논문 범위 대조 | 일치 | B | 문장말 억양·modality의 중요성은 지지한다. 제시한 세 기능의 구분 정확도를 직접 검증한 것은 아니다. |
| NVSpeech의 중국어 선호 효과를 한국어에 그대로 적용할 수 없음 | [NVSpeech](https://arxiv.org/html/2508.04195) | 언어·평가 범위 확인 | 일치 | A | 한국어 효과 크기로 인용할 근거가 없다. |
| Qwen Sohee의 사람다움은 W4에서 “처음” 측정 | 직접 출처 없음 | 최초성 입증 자료 확인 | 확인불가 | C | 팀 내부 최초라는 뜻으로 제한해야 한다. 외부 연구·서비스 평가의 부재는 입증하지 못했다. |
| VoxCPM2·Fun-CosyVoice3 공개 가중치와 논문 모델의 한국어 성능이 동일한지 불확실 | 논문·배포 자료 | 체크포인트 대응 확인 | 확인불가 | C | 모델명만으로 동일성을 가정하지 말고 버전·가중치·추론 설정을 기록해야 한다. |
| 사람의 턴 전환은 약 0.2초, 4초 초과 시 경험 저하 | 선행 노트; 직접 원출처 없음 | 이번 노트의 식별자 확인 | 확인불가 | C | 두 수치를 뒷받침할 원문이 제시되지 않았다. 서로 다른 연구·조건일 가능성도 있다. |
| Scopus에 없으므로 문헌에 없음 | Scopus 수집 범위 | 추론 타당성 검토 | 불일치 | C | 노트 §10의 경고처럼 성립하지 않는다. 제한 쿼리·수집 상한·색인 시차를 고려해야 한다. |
| 한국어 벤치마크·필러 코퍼스·공감 정책 실험이 연구 기회 | §7 자체 제안 | 사실 주장과 제안 구분 | 확인불가 | C | 연구 제안이다. 특히 **한국어 평가 문헌 ‘0건’에 기초한 최초성 주장**은 KoCC-TTS 반례를 반영해 수정해야 한다. |
