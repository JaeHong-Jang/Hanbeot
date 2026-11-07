2026-11-08 기준으로 원문·모델카드·GitHub API·소스 코드를 대조했습니다. **주요 성능 수치는 대체로 일치하지만, KEMDy19 비교값, 일부 저자 인용, 라이선스 해석에는 정정이 필요합니다.**

중복 주장은 합쳤습니다. URL이 없던 항목은 **‘미제시 → 보완’**으로 표시했습니다. A는 원출처와 일치, B는 근사치·간접 확인, C는 원주장을 확인하지 못한 경우입니다. 불일치 주장도 원주장 기준으로 C를 부여하고 반증을 메모에 적었습니다. **A는 독립 재현이나 성능 보증을 뜻하지 않습니다.**

저장소 메타데이터와 라이선스입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| emotion2vec 1,210★, 마지막 push 2024-12-23 | [저장소](https://github.com/ddlBoJack/emotion2vec) | GitHub REST API 조회 | 일치 | A | `stargazers_count=1210`, `pushed_at=2024-12-23`. |
| emotion2vec 코드는 README 배지 MIT, API 라이선스 미지정 | [저장소](https://github.com/ddlBoJack/emotion2vec) | README·API 대조 | 일치 | A | MIT **배지 확인**과 LICENSE 전문 확인은 구분해야 함. |
| SenseVoice 9,710★, push 2026-09-30, 코드 MIT | [저장소](https://github.com/QwenAudio/SenseVoice) | API·LICENSE 확인 | 일치 | A | 세 항목 모두 일치. |
| EmoBox 331★, push 2026-03-18, README MIT 배지 | [저장소](https://github.com/emo-box/EmoBox) | API·README 확인 | 일치 | A | API 라이선스 필드는 미지정. |
| SpeechBrain 11,928★, Apache-2.0 | [저장소](https://github.com/speechbrain/speechbrain) | API 조회 | 일치 | A | 조회값 일치. |
| w2v2-how-to 563★, push 2023-05-22, 코드 MIT | [저장소](https://github.com/audeering/w2v2-how-to) | API 조회 | 일치 | A | 모델 가중치 라이선스와 별개. |
| MEDUSA 10★, push 2025-06-30, MIT | [저장소](https://github.com/emopodntua/medusa) | API 조회 | 일치 | A | 조회값 일치. |
| Tzeng 저장소 2★, MIT | [저장소](https://github.com/RogerTzeng/biic_IS2025_SER_Challenge) | API 조회 | 일치 | A | 논문 자체의 라이선스와 구분. |
| alefiury 저장소 11★, 라이선스 파일 없음 | [저장소](https://github.com/alefiury/InterSpeech-SER-2025) | API·루트 파일 목록 확인 | 일치 | A | API `license=null`; 루트에 LICENSE 없음. 자유 이용 허가를 뜻하지 않음. |
| audonnx 10★, API NOASSERTION | 미제시 → [API](https://api.github.com/repos/audeering/audonnx) | API 조회 | 일치 | A | 단, 실제 [LICENSE](https://github.com/audeering/audonnx/blob/main/LICENSE)는 **MIT**. API 식별 실패와 라이선스 부재는 다름. |
| pipecat-backchannel 25★, push 2026-08-10, BSD-2 | [저장소](https://github.com/maisterr/pipecat-backchannel) | API 조회 | 일치 | A | 조회값 일치. |
| DimensionSTP/multimodal-transformer 3★, MIT | 미제시 → [저장소](https://github.com/DimensionSTP/multimodal-transformer) | API 조회 | 일치 | A | README에 KEMDy19 학습·평가 명령도 존재. |
| LoRA 저장소들은 0~9★, SER-LoRA는 MIT | 미제시 → [SER-LoRA](https://github.com/Thuctac/SER-LoRA), [Behind-the-Scenes](https://github.com/harryporry77/Behind-the-Scenes), [voice2emotion](https://github.com/amnva/voice2emotion) | 각 API 조회 | 일치 | A | 각각 0★·9★·2★. SER-LoRA의 MIT 확인. |
| emotion2vec 계열 가중치는 FunASR MODEL_LICENSE | 미제시 → [base 카드](https://huggingface.co/emotion2vec/emotion2vec_base), [plus-large 카드](https://huggingface.co/emotion2vec/emotion2vec_plus_large) | 모델카드 확인 | 일치 | A | 사용자 정의 모델 라이선스. 코드의 MIT와 다름. |
| FunASR v1.1은 사용·복사·수정·공유 허용, 출처·저자·모델명 유지 요구 | 미제시 → [MODEL_LICENSE](https://github.com/modelscope/FunASR/blob/main/MODEL_LICENSE) | §§1·2 확인 | 일치 | A | 정의에 미세조정 파생물 포함. |
| FunASR §4.2는 부당한 비방·악의적 폄훼 등에 라이선스 자동 박탈 규정 | 미제시 → [MODEL_LICENSE](https://github.com/modelscope/FunASR/blob/main/MODEL_LICENSE) | §4.2 확인 | 일치 | A | 문구는 존재. 정상적인 학술 비판까지 금지된다고 확대 해석할 근거는 없음. |
| SenseVoice #334에서 상업 이용·파생 가중치 비공개가 **최종 공식 확인됨** | 미제시 → [이슈 #334](https://github.com/QwenAudio/SenseVoice/issues/334) | 댓글 전체·상태 업데이트 확인 | **불일치** | C | 초기 긍정 답변에 **2026-09-22 ‘최종 확인 아님’**이라는 안내가 추가됨. 라이선스 소유자·핵심 유지관리자 확인 대기 상태. |
| 같은 협약이므로 emotion2vec 상업 서비스 가능성이 높음 | 미제시 → [MODEL_LICENSE](https://github.com/modelscope/FunASR/blob/main/MODEL_LICENSE) | 조항·인용 근거 확인 | 확인불가 | C | 노트의 추정. SenseVoice의 잠정 해설을 다른 모델의 확정 허가로 전용할 수 없음. |
| audEERING 가중치는 CC-BY-NC-SA-4.0, 비상업 용도 | [모델카드](https://huggingface.co/audeering/wav2vec2-large-robust-12-ft-emotion-msp-dim) | 카드·[튜토리얼](https://github.com/audeering/w2v2-how-to) 확인 | 일치 | A | 카드에는 연구용 명시. 상업용 별도 라이선스 안내 존재. |
| Qwen3-TTS 코드·가중치 Apache-2.0 | 미제시 → [코드 LICENSE](https://github.com/QwenLM/Qwen3-TTS/blob/main/LICENSE), [모델카드](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice) | 양쪽 대조 | 일치 | A | 확인한 공개 체크포인트 기준. |
| VoxCPM2 코드·가중치 Apache-2.0 | 미제시 → [README](https://github.com/OpenBMB/VoxCPM), [모델카드](https://huggingface.co/openbmb/VoxCPM2) | 양쪽 대조 | 일치 | A | 코드·가중치 모두 명시. |
| Fun-CosyVoice3-0.5B-2512 코드·가중치 Apache-2.0 | 미제시 → [코드 LICENSE](https://github.com/QwenAudio/CosyVoice/blob/main/LICENSE), [모델카드](https://huggingface.co/FunAudioLLM/Fun-CosyVoice3-0.5B-2512) | 양쪽 대조 | 일치 | A | 선행 노트 정정 내용 타당. |
| CSM-1B 코드·가중치 Apache-2.0 | 미제시 → [코드 LICENSE](https://github.com/SesameAILabs/csm/blob/main/LICENSE), [모델카드](https://huggingface.co/sesame/csm-1b) | 양쪽 대조 | 일치 | A | 모델 접근 동의·별도 이용 안내도 존재. |
| Fish 코드에는 매출 문턱을 둔 Community License 적용 | 미제시 → [코드 LICENSE](https://github.com/fishaudio/fish-speech/blob/main/LICENSE) | 전문 확인 | 일치 | A | 매출 문턱 외 Hosted Service 등 추가 조건도 있음. |
| Fish S2-Pro 가중치는 Research License | 미제시 → [모델카드](https://huggingface.co/fishaudio/s2-pro) | 카드 확인 | 일치 | A | 코드 라이선스와 구분 필요. |
| Drama 3 가중치도 Research License이므로 상업 이용 제외 | 미제시 → [모델카드](https://huggingface.co/fishaudio/drama-3), [실제 LICENSE](https://huggingface.co/fishaudio/drama-3/blob/main/LICENSE) | 메타·본문·LICENSE 대조 | **확인불가** | C | HF 메타는 Research이나 실제 LICENSE는 **Community License**. 연매출 **50만 달러 미만** 상업 이용 조항이 있어 일괄 제외 결론은 부적절. |
| Raon-Speech·SpeechChat 9B 코드 Apache-2.0, 가중치 CC-BY-NC-4.0 | 미제시 → [코드](https://github.com/krafton-ai/Raon-Speech), [Speech 카드](https://huggingface.co/KRAFTON/Raon-Speech-9B), [SpeechChat 카드](https://huggingface.co/KRAFTON/Raon-SpeechChat-9B) | README·카드 대조 | 일치 | A | 모델의 정확한 HF 식별자는 `KRAFTON/...`. |
| Audio Flamingo 3 가중치는 NVIDIA OneWay Noncommercial | 미제시 → [모델카드](https://huggingface.co/nvidia/audio-flamingo-3), [코드 안내](https://github.com/NVIDIA/audio-flamingo) | 라이선스 안내 확인 | 일치 | A | 비상업 연구용 명시. |
| Qwen3-Omni Apache-2.0 | 미제시 → [LICENSE](https://github.com/QwenLM/Qwen3-Omni/blob/main/LICENSE) | 전문 확인 | 일치 | A | 코드 LICENSE 확인. |

SER의 학습 설정·점수·인용 주장입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| emotion2vec 사전학습 데이터 262시간, 열거한 5개 코퍼스 | [논문 2312.15185](https://arxiv.org/html/2312.15185) | §4·표 1 확인 | 일치 | A | 해당 원본 사전학습 데이터는 영어. plus 계열 데이터와 구분. |
| EMA 교사 상위 8블록 평균, 발화·프레임 손실, 마스크 p=0.5·길이 5 | [논문](https://arxiv.org/html/2312.15185) | 방법·학습 설정 확인 | 일치 | A | 원본 emotion2vec 설정. |
| 4×A10, 100 epoch, Adam LR 7.5e-5, cosine·5% warm-up | [논문](https://arxiv.org/html/2312.15185) | §4.2 확인 | 일치 | A | 물리 GPU 4장; 누적 업데이트로 16장 상당을 모사. |
| 다운스트림 768→256→4, ReLU·마스크 평균 풀링 | [저장소](https://github.com/ddlBoJack/emotion2vec) | [model.py](https://github.com/ddlBoJack/emotion2vec/blob/main/iemocap_downstream/model.py) 확인 | 일치 | A | 마지막 분류층 이전에 평균 풀링. |
| 다운스트림 배치 128, 100 epoch, LR 5e-4 | [저장소](https://github.com/ddlBoJack/emotion2vec) | [설정](https://github.com/ddlBoJack/emotion2vec/blob/main/iemocap_downstream/config/default.yaml)·train.sh 확인 | 일치 | A | 코드 기본 설정과 일치. |
| IEMOCAP 4클래스, session-out 5-fold WA 71.79 | [논문](https://arxiv.org/html/2312.15185) | 표 2·각주 확인 | 일치 | A | 각 훈련 부분에서 검증셋을 별도 선정. |
| WA 74.48*는 검증·테스트 폴드 동일 설정 | [논문](https://arxiv.org/html/2312.15185) | 표 2 각주 확인 | 일치 | A | 71.79와 같은 평가 조건이 아님. |
| emotion2vec+ seed/base/large 데이터 201/4,788/42,526시간 | 미제시 → [모델카드](https://huggingface.co/emotion2vec/emotion2vec_plus_large) | 데이터 표 확인 | 일치 | A | **미세조정 데이터 시간**으로 표기. |
| seed는 EmoBox 학술 데이터, 후속 모델은 필터링 의사 라벨 데이터 | [이슈 #46](https://github.com/ddlBoJack/emotion2vec/issues/46)·[모델카드](https://huggingface.co/emotion2vec/emotion2vec_plus_large) | 저자 댓글·카드 확인 | 일치 | A | 이슈 댓글은 seed·base를 설명하고 카드는 large까지 설명. |
| 160k시간 중 약 40k 사용, 데이터 공학 상세는 추후 공개 | 미제시 → [README](https://github.com/ddlBoJack/emotion2vec) | Data Iteration 확인 | 일치 | A | 42,526시간 표와 40k 요약을 구분해야 함. 문서에 ‘추후 공개’ 문구가 남아 있음. |
| emotion2vec+ 출력은 열거한 9클래스 | 미제시 → [모델카드](https://huggingface.co/emotion2vec/emotion2vec_plus_large) | 클래스 목록 확인 | 일치 | A | unknown 포함 9개. |
| 저자가 실패 모드 3개를 직접 밝혔다 | [이슈 목록](https://github.com/ddlBoJack/emotion2vec/issues) | #41·#61의 발언자 확인 | **불일치** | C | 짧은 입력 환각·리샘플 민감도는 **사용자 보고**. 저자 답변과 혼합됨. |
| #30: 길이 고정 없음, 입력당 라벨 하나, 의미 단위 VAD 절단, 가변 길이 학습 | [#30](https://github.com/ddlBoJack/emotion2vec/issues/30) | 2024-06 저자 댓글 확인 | 일치 | A | ‘길이 제한 없음’은 무제한 메모리 처리를 보장한다는 의미가 아님. |
| #41: 페르시아어 성능 저하 및 1~2초 입력 환각 보고 | [#41](https://github.com/ddlBoJack/emotion2vec/issues/41) | 사용자 본문 확인 | 일치 | A | **보고가 존재한다는 사실** 확인. 통제 실험 결과는 아님. |
| #41: 저자가 불필요한 감정 로짓 마스킹을 권고 | [#41](https://github.com/ddlBoJack/emotion2vec/issues/41) | 저자 댓글 확인 | 일치 | A | 이전 모델과 비슷한 성능을 얻을 수 있다고 답변. |
| 한국어 4~7클래스의 ‘마스킹+재정규화’가 저자 공인 대응 | [#41](https://github.com/ddlBoJack/emotion2vec/issues/41) | 댓글 범위 확인 | **확인불가** | C | 댓글은 한국어·4~7클래스·재정규화를 특정하지 않음. 노트의 구현 제안. |
| #61: torchaudio/Sox 16kHz 변환에 따라 예측 차이, 2025-05까지 저자 답변 없음 | [#61](https://github.com/ddlBoJack/emotion2vec/issues/61) | 본문·댓글 전체 확인 | 일치 | A | 사용자 사례이며 저자의 원인 규명·일반화 결과가 아님. |
| #46: 2025-07 학습 분할 질문에 답 없음 | [#46](https://github.com/ddlBoJack/emotion2vec/issues/46) | 댓글 확인 | 일치 | A | 2025-07-04 질문 이후 답변 확인되지 않음. |
| #42: Shi 2020·2023 재현, 융합 모델 공개 계획 없음 | [#42](https://github.com/ddlBoJack/emotion2vec/issues/42) | 저자 댓글 확인 | 일치 | A | 2024-08 재현 언급, 2024-11 공개 계획 없다고 답변. |
| #39: EmoDB WA 약 34.2% 사용자 보고 | [#39](https://github.com/ddlBoJack/emotion2vec/issues/39) | 댓글 확인 | 일치 | B | 원값 34.215686…%의 반올림. 모델 공식 벤치마크 아님. |
| #39: 저자가 표현 추출에는 base가 더 나을 수 있다고 답변 | [#39](https://github.com/ddlBoJack/emotion2vec/issues/39) | 저자 댓글 확인 | 일치 | A | 원문은 **잠정적 권고**. 항상 우수하다는 검증 결과로 쓰면 안 됨. |
| base 특징 768차원, plus-large 1024차원 | 미제시 → [다운스트림 코드](https://github.com/ddlBoJack/emotion2vec/blob/main/iemocap_downstream/model.py), [large 설정](https://huggingface.co/emotion2vec/emotion2vec_plus_large/blob/main/config.yaml) | 입력 차원·embed_dim 확인 | 일치 | A | 출력 API의 granularity·형식도 함께 맞춰야 함. |
| 중국어 학습 데이터 포함을 저자가 #87에서 확인 | 미제시 → [#87](https://github.com/ddlBoJack/emotion2vec/issues/87) | 2026-01 저자 댓글 확인 | 일치 | A | plus 관련 질문에 중국어 코퍼스 포함 답변. |
| emotion2vec 계열의 한국어 공식 성능·한국어 학습량 미보고 | [저장소](https://github.com/ddlBoJack/emotion2vec)·[모델카드](https://huggingface.co/emotion2vec/emotion2vec_plus_large) | 해당 문서 범위 확인 | 일치 | A | **확인한 문서에 없음**. 한국어 데이터가 없다는 뜻은 아님. |
| EmoBox 32코퍼스·14언어·3,510화자·294.4시간 | [저장소](https://github.com/emo-box/EmoBox) | README·[논문 표 1](https://arxiv.org/html/2406.07162) 대조 | 일치 | A | MSP-Podcast 113.6시간도 일치. |
| EmoBox에 한국어 코퍼스 없음 | [논문](https://arxiv.org/html/2406.07162) | 전체 데이터·언어 목록 확인 | 일치 | A | 공개된 32개 코퍼스 구성 기준. |
| 공식 분할 존중, 화자 <4 또는 불균형이면 감정별 25% 테스트 | [논문](https://arxiv.org/html/2406.07162) | §2.2 확인 | 일치 | A | 이 경우는 **화자 종속** 분할. |
| 균형·화자 ≥4이면 4~6명은 화자 수만큼, >6명은 4-fold | [논문](https://arxiv.org/html/2406.07162) | §2.2 확인 | 일치 | A | >6명은 폴드별 여러 화자를 묶음. |
| 마지막 층·LayerNorm·선형/ReLU/풀링/분류 헤드 | [논문](https://arxiv.org/html/2406.07162) | §3.1 확인 | 일치 | A | 동결 특징 기반 벤치마크. |
| LR {1e-3,1e-4}, 은닉 {128,256}, 검증 20%, 100 epoch·warm-up 10 | [논문](https://arxiv.org/html/2406.07162) | §3.1 확인 | 일치 | A | 수치 모두 일치. |
| SpeechBrain 예제 동결 wav2vec2-base, 배치 32·LR 1e-4 | [README](https://github.com/emo-box/EmoBox) | Example Recipe 확인 | 일치 | A | 예제 명령과 일치. |
| Whisper 인코더 약 635M, 23/32 코퍼스·9/12 교차 쌍 1위 | [논문](https://arxiv.org/html/2406.07162) | §§3.1~3.3 확인 | 일치 | A | 조사한 모델·해당 벤치마크 안에서의 순위. |
| WavLM-large가 SSL 중 최고, 마지막 층만 평가한 한계 | [논문](https://arxiv.org/html/2406.07162) | 결과·한계 확인 | 일치 | A | 한국어 층 가중합 실험의 전 세계적 부재까지 증명하지는 않음. |
| EmoDataset/EmoEval, fold JSON·label_map 형식, UA/WA 정의 | [README](https://github.com/emo-box/EmoBox) | 사용 예제 확인 | 일치 | A | UA=balanced accuracy, WA=accuracy. |
| SenseVoice 연구 학습량 >40만 시간, 공개 Small은 zh/yue/en/ja/ko | [저장소](https://github.com/QwenAudio/SenseVoice) | README 확인 | 일치 | A | 연구 전체 범위와 공개 체크포인트 범위를 구분한 서술은 적절. |
| CASIA 6라벨 zero-shot UA/WA 각각 70.0 | 미제시 → [SER 평가 계약](https://github.com/QwenAudio/SenseVoice/blob/main/benchmarks/ser/README.md) | 명시된 행 확인 | 일치 | A | 공식 문서 기재 확인이며 이번에 재실행한 결과는 아님. |
| SenseVoice 감정 7태그·웃음/울음/호흡/기침 이벤트, ko 입력 지원 | [README](https://github.com/QwenAudio/SenseVoice) | 라벨·언어·데이터 형식 확인 | 일치 | A | `Breath`를 한국어 **한숨 감지 성능**과 동일시하면 안 됨. |
| 원시 태그 파싱, UA=평균 재현율·WA=정확도 | 미제시 → [평가 계약](https://github.com/QwenAudio/SenseVoice/blob/main/benchmarks/ser/README.md) | 평가 정의 확인 | 일치 | A | 후처리된 전사 텍스트에서 감정을 추론하지 말라고 명시. |
| 평가셋은 중·영, zero-shot으로 최고 SER 수준 이상이라는 공급사 주장 | [README](https://github.com/QwenAudio/SenseVoice) | 평가 설명 확인 | 일치 | A | **공급사 주장 존재** 확인. 한국어 성능 증거는 아님. |
| emo_target·event_target JSONL 및 미세조정 스크립트 제공 | [README](https://github.com/QwenAudio/SenseVoice) | 데이터 준비·Finetune 확인 | 일치 | A | KEMDy 변환 후 성공 여부는 별도 실험 필요. |
| SenseVoice가 ‘유일한 경량 경로’, 비언어 이벤트에 ‘가장 직접적’ | [저장소](https://github.com/QwenAudio/SenseVoice) | 주장 범위·비교 근거 확인 | 확인불가 | C | 대안 전수 비교·경량 기준이 없음. |
| SpeechBrain 최고 78.7·평균 77.0, 무작위 분할 | [저장소](https://github.com/speechbrain/speechbrain) | [IEMOCAP README](https://github.com/speechbrain/speechbrain/blob/develop/recipes/IEMOCAP/README.md) 확인 | 일치 | A | 화자 독립 점수로 비교하면 안 됨. |
| 헤드 LR 1e-4·백본 LR 1e-5·30 epoch·배치 4·seed 1993 | 미제시 → [학습 YAML](https://github.com/speechbrain/speechbrain/blob/develop/recipes/IEMOCAP/emotion_recognition/hparams/train_with_wav2vec2.yaml) | 설정 확인 | 일치 | A | CNN 동결·Transformer 미세조정·평균 풀링·4클래스·NewBob도 일치. |
| ‘ASR 미세조정본 대신 원본 사용 시 약 4% 개선’ 주석 | [학습 YAML](https://github.com/speechbrain/speechbrain/blob/develop/recipes/IEMOCAP/emotion_recognition/hparams/train_with_wav2vec2.yaml) | 주석 확인 | 일치 | A | 주석의 주장 확인. 백분율/퍼센트포인트·비교 조건은 상세하지 않음. |
| README가 벤치마킹 5-fold 또는 화자 독립 10-fold 권고 | [IEMOCAP README](https://github.com/speechbrain/speechbrain/blob/develop/recipes/IEMOCAP/README.md) | 분할 안내 확인 | 일치 | A | 10-fold는 test_spk_id 1~10 지정. |
| s3prl Adam 1e-4·30,000 step·누적 8·배치 4·projector 256·검증 0.2 | 미제시 → [config.yaml](https://github.com/s3prl/s3prl/blob/main/s3prl/downstream/emotion/config.yaml) | 설정 확인 | 일치 | A | MeanPooling도 일치. |
| SUPERB ER은 4클래스·5-fold, 동결 업스트림·층 가중합 방식 | 미제시 → [SUPERB 모델카드](https://huggingface.co/superb/wav2vec2-base-superb-er) | 카드·연결 레시피 대조 | 일치 | A | 학습 가능한 분류기와 동결 특징 추출기를 구분. |
| HF 이식본 session1 정확도 0.6343/0.6258 | [모델카드](https://huggingface.co/superb/wav2vec2-base-superb-er) | Eval results 확인 | 일치 | A | s3prl/transformers 순서 일치. 전체 5-fold 평균이 아님. |
| audEERING MSP-Podcast v1.7, 24→12층 가지치기, 출력 약 0~1 | [모델카드](https://huggingface.co/audeering/wav2vec2-large-robust-12-ft-emotion-msp-dim) | 모델 설명 확인 | 일치 | A | 출력 순서는 각성·지배·긍정도. |
| 평균 풀링, dropout→dense/tanh→dropout→출력, ONNX DOI 6221127 | [모델카드](https://huggingface.co/audeering/wav2vec2-large-robust-12-ft-emotion-msp-dim) | 예제 코드·링크 확인 | 일치 | A | 모델카드 구현과 일치. |
| CCC 손실·LR 1e-4·5 epoch·배치 32·CNN 동결 | [논문 2203.07378](https://arxiv.org/html/2203.07378) | §3.2 확인 | 일치 | A | 개발셋 최고 체크포인트 선택도 일치. |
| MSP CCC .745/.634/.635, IEMOCAP 교차 .663/.518/.448 | [논문](https://arxiv.org/html/2203.07378) | §4.1 확인 | 일치 | A | w2v2-L-robust의 결과. **12층 공개 체크포인트의 개별 성적이라고 바로 단정하면 안 됨.** |
| MSP 긍정도 모델별 범위 .359~.635 | [논문](https://arxiv.org/html/2203.07378) | §4.1 확인 | **불일치** | C | 본문은 HuBERT-base **.636**까지 명시. 전체 논문 최고값은 초록의 **.638**. |
| 긍정도 CCC 약 +.26 개선 | [논문](https://arxiv.org/html/2203.07378) | §4.1 문맥 확인 | 일치 | B | 수치는 존재하나 비Transformer 선행 모델 대비 설명. 단순 동결→미세조정 개선폭으로 쓰면 부정확. |
| 암묵적 언어 정보 학습을 합성 음성 실험·그림 4로 분석 | [논문](https://arxiv.org/html/2203.07378) | §4.3 확인 | 일치 | A | STT 융합이 반드시 개선된다는 결론은 아님. |
| audEERING 논문은 개별 화자 편향 미보고 | [논문](https://arxiv.org/html/2203.07378) | §4.10·초록 확인 | **불일치** | C | 개별 화자별 CCC를 분석하며 **개인 수준 공정성 문제를 명시**함. |
| firdhokk RAVDESS/SAVEE/TESS/URDU·7클래스 | 미제시 → [모델카드](https://huggingface.co/firdhokk/speech-emotion-recognition-with-openai-whisper-large-v3/blob/main/README.md) | 데이터·출력 목록 확인 | 일치 | A | calm은 학습에서 제외했다고 설명. ‘전체가 연기 낭독’이라는 묶음 표현은 부정확할 수 있음. |
| firdhokk LR 5e-5·실효 배치 10·25 epoch·warm-up 0.1·AMP | [모델카드](https://huggingface.co/firdhokk/speech-emotion-recognition-with-openai-whisper-large-v3/blob/main/README.md) | 하이퍼파라미터 확인 | 일치 | A | 백본 모든 파라미터를 학습했다는 세부는 별도 코드 확인 필요. |
| firdhokk 정확도 .9199·F1 .9198, 분할 미기재 | [모델카드](https://huggingface.co/firdhokk/speech-emotion-recognition-with-openai-whisper-large-v3/blob/main/README.md) | Metrics·평가 설명 확인 | 일치 | A | 화자 독립 일반화 성능으로 인용할 근거 없음. |
| Feng 2023 PEFT-SER에서 LoRA가 비교 방법 중 최고 | 위키만 제시 → [원논문](https://arxiv.org/abs/2306.05350) | 초록 확인 | 일치 | A | 해당 4개 테스트베드·비교 방법 범위의 결론. 코드 링크도 제공됨. |
| MEDUSA IS2025 Task 1 1위, Macro-F1 .4316·Micro-F1/Acc .4319 | [논문 2506.09556](https://arxiv.org/html/2506.09556v1) | §5.1 확인 | 일치 | A | 대회 비공개 테스트 결과. |
| MEDUSA DeepSER 2층·은닉 1024·λ1=1.5·λ2=.4 | [논문](https://arxiv.org/html/2506.09556v1) | §§3.4·4 확인 | 일치 | A | 음성·텍스트 다중 표현 융합. 텍스트 인코더는 RoBERTa/ModernBERT. |
| MEDUSA 전체→균형 부분집합→메타 분류기→모델 수프의 4단계 | [논문](https://arxiv.org/html/2506.09556v1) | §3.6 확인 | 일치 | A | 수프는 메타 분류기 가중치 평균. |
| MEDUSA 배치 16·LR 1e-5, 메타 배치 128·LR 1e-3, AdamW | [논문](https://arxiv.org/html/2506.09556v1) | §4 확인 | 일치 | A | RTX 3090 1장 명시. |
| MEDUSA MixUp p=.3, 클래스 가중 (N/(클래스 수×빈도))^.5 | [논문](https://arxiv.org/html/2506.09556v1) | §§3.8·4 확인 | 일치 | A | 클래스 가중은 S1; S2/S3는 균형 샘플링으로 균일 가중. |
| 소프트 타깃 제거 -8.23%, 후기 융합 대체 -6.31% | [논문](https://arxiv.org/html/2506.09556v1) | 표 2·§5.2 확인 | 일치 | A | 원문 기재와 일치. -8.23은 표의 반올림 평균값으로 직접 계산한 값과 차이가 있음. |
| MixUp·다중 과제·S2 제거도 평균 하락, 메타 분류기가 투표보다 우수 | [논문](https://arxiv.org/html/2506.09556v1) | 표 2·3 확인 | 일치 | A | 평균 경향. 모든 개별 모델·모든 조건에서 하락한 것은 아님. |
| Tzeng valence CCC .6953, Task 2 valence 1위 | [논문 2508.07282](https://arxiv.org/html/2508.07282v1) | 초록·표 5 확인 | 일치 | A | Task 2 **전체 종합 1위**와 구분해야 함. |
| Tzeng 1단계 배치 32·LR 1e-5·20 epoch, 2단계 동결·LR 5e-6 | [논문](https://arxiv.org/html/2508.07282v1) | §4.2 확인 | 일치 | A | 2단계는 배치 32·5 epoch. |
| Tzeng 훈련은 정답 전사, 개발·테스트는 Whisper-large-v3 | [저장소](https://github.com/RogerTzeng/biic_IS2025_SER_Challenge) | README Prepare Transcripts 확인 | 일치 | A | 논문 본문보다 저장소 README가 직접 근거. |
| WCE/균형 샘플링/focal Micro-F1 .487/.445/.592 | [논문](https://arxiv.org/html/2508.07282v1) | 표 2 확인 | 일치 | A | 표는 미세조정 WavLM+**사전학습 RoBERTa** 조건. |
| focal과 WCE의 Macro-F1은 모두 .338 | [논문](https://arxiv.org/html/2508.07282v1) | 표 2 확인 | 일치 | A | Macro-F1 개선 근거로 사용할 수 없음. |
| 논문은 focal의 개선을 +10.2%라고 서술 | [논문](https://arxiv.org/html/2508.07282v1) | §5.2·산술 대조 | 일치 | A | **인용 자체는 일치하나 계산은 모순**. .592−.487=.105, 즉 **10.5%p·상대 약 21.6%**. |
| Odyssey 2024 Task 1 1위, 7모델 다수결, Macro-F1 35.69%·Acc 37.32% | [논문 2405.20064](https://arxiv.org/html/2405.20064) | 초록·방법 확인 | 일치 | A | 8클래스 대회 결과. |
| WavLM-large·HuBERT-extra-large·Whisper-v3 최종층, RoBERTa 마지막 4층 평균 | [논문](https://arxiv.org/html/2405.20064) | §3.2 확인 | 일치 | A | 텍스트는 Whisper-large-v2 전사. |
| Odyssey 평균 풀링, focal γ=2~3 또는 가중 CE | [논문](https://arxiv.org/html/2405.20064) | 구조·표 2 확인 | 일치 | A | 평균 풀링 전 Transformer도 있음. ‘선형 헤드만’으로 축약하면 부정확. |
| alefiury 8위, Macro-F1 39.79%·검증 42.20% | [저장소](https://github.com/alefiury/InterSpeech-SER-2025)·[논문](https://arxiv.org/html/2506.02088) | README·초록 확인 | 일치 | A | 순위는 README, 점수는 논문에서 확인. |
| alefiury F0 양자화·그래프 어텐션·배치 8·20 epoch·warm-up 500·AdamW | [논문](https://arxiv.org/html/2506.02088)·[설정](https://github.com/alefiury/InterSpeech-SER-2025/blob/main/config/legacy/default_bimodal_f0.yaml) | 논문·YAML 대조 | 일치 | A | 역빈도 가중 CE·cosine도 확인. |
| 자연 대화 8클래스 Macro-F1은 대략 .36~.43 | 위 세 대회 논문 | 확인한 점수 범위 비교 | 일치 | B | **선정 사례의 범위**일 뿐 분야 전체의 성능 한계는 아님. |
| 따라서 한국어 4클래스 UA 70% 목표는 위험 | 위 세 대회 논문 | 지표·클래스·언어 비교 가능성 검토 | 확인불가 | C | 8클래스 Macro-F1과 4클래스 UA를 직접 연결할 수 없음. |
| 세 시스템 공통으로 소프트 타깃→focal/균형→앙상블 순으로 효과 | 위 세 대회 논문 | 실험 설계 비교 | 확인불가 | C | 세 논문이 같은 구성요소를 같은 조건으로 비교하지 않음. 효과 순위 일반화 불가. |
| 세 시스템은 텍스트 융합·평가 시 자동 전사 사용 | 위 세 대회 논문·Tzeng README | 전사·모달리티 확인 | 일치 | A | 다만 **훈련 전사 조건까지 모두 동일한 것은 아님**. |

한국어·보정·오디오 LLM 관련 주장입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 한국어 KEMDy 학습·평가 공개 코드가 부재 | 검색 이력만 제시 → [DimensionSTP](https://github.com/DimensionSTP/multimodal-transformer) | README 확인 | **불일치** | C | KEMDy19 음성·텍스트·멀티모달 **학습·평가 명령이 존재**. 실행 성공·재현 품질은 별도 검증 대상. |
| 기존 조사에서 의미 있는 저장소를 ‘찾지 못했다’ | 검색어·조사일만 제시 | 검색 로그 존재 여부 확인 | 확인불가 | C | 조사자의 검색 경험은 외부에서 재현할 로그가 없음. ‘코드 없음’으로 바꾸면 안 됨. |
| jungjongho 모델 정확도 .9876, 데이터 None, 1 epoch | 미제시 → [모델카드](https://huggingface.co/jungjongho/wav2vec2-xlsr-korean-speech-emotion-recognition3) | 평가·설정 확인 | 일치 | A | 수치 기재는 확인되나 데이터·분할 불명으로 한국어 일반화 성능 검증 불가. |
| HyunaZ 모델은 한국어 HuBERT 기반 7라벨·강도 회귀 헤드 | 미제시 → [모델카드](https://huggingface.co/HyunaZ/hubert_emotion) | 예제 코드 확인 | 일치 | A | KEMDy로 실제 학습했다는 사실까지 명시적으로 확인되지는 않음. |
| team-lucid/hubert-base-korean Apache-2.0 | 미제시 → [모델카드](https://huggingface.co/team-lucid/hubert-base-korean) | 메타 확인 | 일치 | A | 기반 모델 라이선스 확인. |
| **KEMDy19 HuBERT 평균 CCC .3573** | URL 미제시 → [원논문](https://openaccess.cms-conferences.org/publications/book/978-1-958651-90-2/article/978-1-958651-90-2_68) | 출판사 초록·논문 확인 | **불일치** | C | **.3573은 IEMOCAP 결과**. KEMDy19 HuBERT는 전체 감정 **.5271**, 4감정 **.5392**로 기재. R8 비교값도 수정 필요. |
| HuBERT+KoELECTRA 정확도 77.01% | URL 미제시 → [KoHMT 출판사 페이지](https://www.mdpi.com/2079-9292/13/23/4674) | 원출처 검색 색인 확인; 본문 접근 재시도 | 일치 | B | 초록에 77.01%·F1 .7703. 다만 색인된 결론에는 **73.13%**가 있어 원문 내부 불일치 확인 필요. |
| AI Hub 7감정 wav2vec2-large-robust 논문 존재 | URL·논문명 미제시 | 식별 가능한 근거 확인 | 확인불가 | C | 저자·제목·연도·DOI가 필요. |
| Sridhar–Busso: 불확실한 25% 거부 시 각성/긍정도/지배 +7.34/+13.73/+8.79% | URL 미제시 → [저자 공개 PDF](https://www.carlosbusso.com/publications/Sridhar_2020.pdf) | 초록·결론 확인 | 일치 | A | **CCC 상대 개선**, coverage 75% 조건. 정확도 퍼센트포인트가 아님. |
| Chou: ECE·다중 라벨 온도 스케일링 | URL 미제시 → [논문](https://www.isca-archive.org/interspeech_2023/chou23_interspeech.pdf) | 방법 확인 | 일치 | A | 감정별 온도 학습 방법 확인. |
| 위 Chou 연구에 ConsCal도 포함 | URL 미제시 → [동일 논문](https://www.isca-archive.org/interspeech_2023/chou23_interspeech.pdf) | 본문 검색·방법 확인 | 확인불가 | C | 해당 논문에서 ConsCal 확인되지 않음. 다른 논문이면 별도 출처 필요. |
| Jia 2503.22712는 보정 예측 집합·커버리지 보장 제안 | [논문](https://arxiv.org/abs/2503.22712) | 초록 확인 | 일치 | A | 가정·보장 범위를 갖는 통계적 주장. 모든 분포 변화에서 무조건 보장되는 것은 아님. |
| 불확실성·보정 구현 코드는 사실상 부재 | 검색 요약만 제시 → [DEER](https://github.com/W-Wu/DEER) | README 확인 | **불일치** | C | DEER에 불확실성 회귀 학습·설정·손실·평가 코드가 존재. 온도 보정·선택적 예측 코드의 범위는 별도 조사 필요. |
| w2v2-how-to는 차원 모델 사용 튜토리얼 | [저장소](https://github.com/audeering/w2v2-how-to) | README 확인 | 일치 | A | 해당 README에서 보정 방법은 확인되지 않음. |
| Qwen2-Audio MELD .553, WavLM .542, Qwen-Audio .557 | 미제시 → [README](https://github.com/QwenLM/Qwen2-Audio) | 첫 평가표 확인 | 일치 | A | 모두 accuracy. |
| Qwen2-Audio 두 번째 표는 .535이며 ‘모델 버전이 다름’ | [README](https://github.com/QwenLM/Qwen2-Audio) | 두 표 사이 설명 확인 | **불일치** | C | .535는 맞지만 차이의 설명은 **원래 학습 프레임워크→Hugging Face 변환**. 별도 모델 버전이라는 설명은 부정확. |
| AF3 IEMOCAP 63.8, Qwen2-Audio-Instruct 59.2 | URL 미제시 → [AF3 논문](https://arxiv.org/html/2507.08128) | 표 2 확인 | 일치 | A | accuracy(%) 기준. |
| Qwen3-Omni 음성 입력 18언어에 한국어 포함 | 미제시 → [README](https://github.com/QwenLM/Qwen3-Omni) | 언어 목록 확인 | 일치 | A | 출력 언어 목록과는 별개. |
| Qwen3-Omni 프롬프트 예시에 50단어 이하·감정/행동 묘사 금지 | [README](https://github.com/QwenLM/Qwen3-Omni) | 데모 시스템 프롬프트 확인 | 일치 | A | **예제 프롬프트의 지시**이며 모델의 본질적 제한은 아님. |
| 오디오 LLM SER 점수는 .55~.64대 | Qwen2-Audio·AF3 자료 | 인용값 범위 확인 | 일치 | B | .535도 있으므로 정확한 요약은 약 **.54~.64**. 서로 다른 데이터셋 점수를 같은 성능 대역으로 단정하기는 어려움. |
| Qwen3-Omni SER 수치·한국어 LoRA 레시피·SALMONN 등을 못 찾음 | 직접 URL 미제시 | 확인 범위 검토 | 확인불가 | C | 조사 범위 내 미발견 사실과 전 세계적 부재를 구분해야 함. |

TTS·대화 제어·개발자 글의 주장입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Qwen3-TTS 자연어 instruct·VoiceDesign·텍스트 의미에 따른 어조 조절 | 미제시 → [모델카드](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice) | 기능·사용 예제 확인 | 일치 | A | 기능 지원 확인이며 한국어 감정 전달 효과의 독립 검증은 아님. |
| Qwen3-TTS 첫 패킷 즉시·최저 97ms | [모델카드](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice) | 스트리밍 설명 확인 | 일치 | A | **TTS 합성 지연** 주장. 전체 STT→LLM→TTS 대화 지연이 아님. 해당 설명에 GPU 조건 없음. |
| 한국어 화자 Sohee 지원 | [모델카드](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice) | 화자표 확인 | 일치 | A | CustomVoice 화자. |
| VoxCPM2 자연어 괄호 지시·참조 오디오/전사 기반 생성 | 미제시 → [README](https://github.com/OpenBMB/VoxCPM) | 사용 예제 확인 | 일치 | A | Voice Design·Controllable Voice Cloning 기능 확인. |
| VoxCPM2 RTF 약 .3, Nano-vLLM 약 .13, RTX 4090 | [README](https://github.com/OpenBMB/VoxCPM) | 속도·모델 표 확인 | 일치 | A | 최적화 경로·환경에 따른 공급사 수치. |
| CosyVoice3 instruct로 언어·감정·속도·볼륨 제어, 양방향 스트리밍 150ms | 미제시 → [README](https://github.com/QwenAudio/CosyVoice) | 기능 설명 확인 | 일치 | A | ‘최저 150ms’ 주장. 한국어 서비스 전체 지연이 아님. |
| Fish S2-Pro 인라인 감정·웃음·휴지 태그 | 미제시 → [모델카드](https://huggingface.co/fishaudio/s2-pro) | 태그 목록 확인 | 일치 | A | 자유 형식 지시 태그 지원. |
| S2-Pro H200 1장 RTF .195·첫 오디오 약 100ms | [모델카드](https://huggingface.co/fishaudio/s2-pro) | Production Streaming 확인 | 일치 | A | 공급사 측정값. |
| Drama 3는 이전 테이크를 자연어로 수정하는 다회 편집 지원 | 미제시 → [README](https://github.com/fishaudio/fish-speech) | Drama 3 기능 확인 | 일치 | A | 기능·예제 설명 확인. |
| CSM은 텍스트·오디오 교차 입력, 0번 코드북과 나머지 코드북 분리 | [Sesame 글](https://www.sesame.com/research/crossing_the_uncanny_valley_of_voice) | 구조 설명 확인 | 일치 | A | 두 Transformer 모두 Llama 계열 구조. |
| CSM `context=[Segment...]`, 맥락 제공 시 가장 잘 들린다는 안내 | 미제시 → [README](https://github.com/SesameAILabs/csm) | 사용 예제 확인 | 일치 | A | 맥락 기능 지원과 실제 선호도 향상은 별개 주장. |
| CSM은 영어 중심, 타 언어 성능이 좋지 않음 | [README](https://github.com/SesameAILabs/csm) | FAQ 확인 | 일치 | A | 비영어 능력 일부 존재하나 성능 한계 명시. |
| Sesame 글 날짜 2025-02-27, 학습 약 100만 시간·영어 중심 | [글](https://www.sesame.com/research/crossing_the_uncanny_valley_of_voice) | 게시일·Experiments 확인 | 일치 | A | 블로그 연구 모델 전체 설명. |
| CSM 작은 디코더는 오디오 프레임의 1/16만 학습 | [글](https://www.sesame.com/research/crossing_the_uncanny_valley_of_voice) | Compute amortization 확인 | 일치 | A | 무작위 프레임 부분집합; 백본은 모든 프레임 학습. |
| CSM WER·화자 유사도 포화, 새로운 발음 문맥 평가 도입 | [글](https://www.sesame.com/research/crossing_the_uncanny_valley_of_voice) | 평가 설명 확인 | 일치 | A | `Homograph`는 **동철이음어**에 가까움. 노트의 ‘동음이의어 판별’ 번역은 부정확. |
| 맥락 없으면 인간과 50:50, 90초 맥락 제공 시 원본 선호 | [글](https://www.sesame.com/research/crossing_the_uncanny_valley_of_voice) | CMOS 설명·결과 문장 확인 | 일치 | B | 50:50은 ‘뚜렷한 선호 없음’의 요약. 평가 모델은 **CSM-Medium**이며 공개 CSM-1B 결과로 옮기면 안 됨. |
| CMOS 평가자 80명, 평균 15개 평가 | [글](https://www.sesame.com/research/crossing_the_uncanny_valley_of_voice) | Subjective metrics 확인 | 일치 | A | 맥락은 이전 90초의 오디오·텍스트. |
| Kyutai TTS 행동 스트림·lookahead l=2·지연 1.6초·최대 5화자 | [논문 2509.08753](https://arxiv.org/html/2509.08753) | §§3.3·4.1 확인 | 일치 | A | 1.6초는 모델의 스트림 지연 설정. 실측 첫 오디오 지연과 구분. |
| Kyutai CFG 증류, 영어·프랑스어 TTS | [논문](https://arxiv.org/html/2509.08753) | 방법·평가 언어 확인 | 일치 | A | 한국어에 2단어 선행을 적용하면 좋아진다는 증거는 없음. |
| DSM-ASR 기본 지연 2.5초, H100에서 400개 동시 실시간 처리 | [논문](https://arxiv.org/html/2509.08753) | §4.3 확인 | 일치 | A | TTS 처리량 수치가 아님. |
| Unmute TTS 지연 단일 L40S 약 750ms→분산 약 450ms | 미제시 → [README](https://github.com/kyutai-labs/unmute) | Deployment 설명 확인 | 일치 | A | 논문 지연 1.6초와 다른 측정·시스템 조건. |
| Typecast previous_text가 맥락 제어 경로 | 선행 노트만 참조 | 직접 출처 확인 | 확인불가 | C | 대상 노트에 API 문서 URL·버전 없음. |
| MiniMax 한국어 WER: 1.747/1.865/1.755/1.180/1.962 | 미제시 → [VoxCPM README](https://github.com/OpenBMB/VoxCPM) | MiniMax-Test 한국어 행 확인 | 일치 | A | MiniMax/ElevenLabs/Qwen3-TTS/Fish S2/VoxCPM2 순서 일치. |
| 같은 순서 한국어 화자 유사도 77.6/70.0/79.9/81.7/83.3 | [VoxCPM README](https://github.com/OpenBMB/VoxCPM) | SIM 한국어 행 확인 | 일치 | A | 공급사 표의 점수. 인간 선호도(%)와 동일하지 않음. |
| CV3-eval 한국어 CER: CosyVoice2 19.7·CV3-1.5B 5.69·Fish S2 2.76·VoxCPM2 5.69 | [VoxCPM README](https://github.com/OpenBMB/VoxCPM) | 한국어 열 확인 | 일치 | A | CV3-1.5B 결과를 공개 0.5B 모델 결과로 대체하면 안 됨. |
| 내부 30언어 한국어 CER: VoxCPM2 .95%·Fish S2-Pro .29%, Gemini 3.1 Flash Lite ASR | [VoxCPM README](https://github.com/OpenBMB/VoxCPM) | 내부 벤치 설명·한국어 행 확인 | 일치 | A | 언어당 500샘플인 자사 내부 평가. 선행 노트 정정은 타당. |
| 한국어 WER/CER이 ‘모두 1~6 이하로 포화’ | 위 평가표 | 수치·포화 근거 대조 | **불일치** | C | 같은 표에 **19.7**, **.29**, **.95** 존재. 낮은 오류율만으로 포화·변별력 부족을 입증할 수 없음. |
| Raon-SpeechChat는 116K시간 시간정렬 대화로 연속 학습 | 미제시 → [공식 README](https://github.com/krafton-ai/Raon-Speech) | Training Scale 확인 | 일치 | A | 기본 Raon-Speech 전체 학습량과 구분. |
| Raon 9B 영·한, KVoiceBench/KOpenAudioBench/KMMAU 공개 | [공식 README](https://github.com/krafton-ai/Raon-Speech) | 기능·공개 항목 확인 | 일치 | A | 벤치 공개 설명 확인. |
| RTX 6000 Pro TTFT 617ms·RTF .27, L40S 887ms·.45 | [모델카드](https://huggingface.co/KRAFTON/Raon-Speech-9B) | 속도표 확인 | 일치 | A | LibriSpeech test-clean·단일 GPU·스트리밍 TTS 평균. 한국어 실측치 아님. |
| Pipecat SENTENCE 기본, 문장당 약 200~300ms 추가; TOKEN 직송 | 미제시 → [tts_service.py](https://github.com/pipecat-ai/pipecat/blob/main/src/pipecat/services/tts_service.py) | enum·주석 확인 | 일치 | A | 주석의 대략적 설명. 모든 TTS 제공사에 대한 측정값은 아님. |
| stop_frame_timeout_s=3.0·silence_time_s=2.0·컨텍스트 재사용 옵션 | [tts_service.py](https://github.com/pipecat-ai/pipecat/blob/main/src/pipecat/services/tts_service.py) | 생성자 확인 | 일치 | A | 관련 기능을 활성화했을 때의 기본 파라미터. 모든 응답에 2초 침묵을 더한다는 뜻은 아님. |
| 인터럽션 시 집계기·필터 초기화, interruptible 컨텍스트만 폐기 | [tts_service.py](https://github.com/pipecat-ai/pipecat/blob/main/src/pipecat/services/tts_service.py) | interruption 함수 확인 | 일치 | A | uninterruptible 컨텍스트 보존·시퀀서 정리 구현 확인. |
| 인터럽션 시 단어 타임스탬프 트래커를 무조건 재설정 | [tts_service.py](https://github.com/pipecat-ai/pipecat/blob/main/src/pipecat/services/tts_service.py) | 조건문 확인 | **불일치** | C | 재생 중 컨텍스트를 인터럽트하는 조건에서 재설정. 보존되는 발화가 있으면 경로가 다름. |
| Pipecat은 실제 발화된 **단어만 항상** LLM 컨텍스트에 기록 | [tts_service.py](https://github.com/pipecat-ai/pipecat/blob/main/src/pipecat/services/tts_service.py) | 타임스탬프·대체 경로 확인 | **확인불가** | C | 단어 타임스탬프 경로는 존재하나 **타임스탬프 없는 제공사와 누락 이벤트 대체 경로도 존재**. 일괄 보장 표현은 과도함. |
| LiveKit false interruption은 전사 없는 VAD 인터럽션, 기본 재개 | 미제시 → [Turns 문서](https://docs.livekit.io/agents/logic/turns/) | False interruptions 확인 | 일치 | A | 관련 두 설정도 존재. |
| LiveKit adaptive는 오디오로 진짜 인터럽션·맞장구 구분, Cloud 인증 필요 | 미제시 → [공식 문서](https://docs.livekit.io/agents/logic/turns/adaptive-interruption-handling/) | 동작·인증 안내 확인 | 일치 | A | 자체 호스팅 에이전트에서도 Cloud 자격증명으로 사용. |
| adaptive는 모든 언어 대상이나 영어가 더 나을 수 있음 | [공식 문서](https://docs.livekit.io/agents/logic/turns/adaptive-interruption-handling/) | Language support 확인 | 일치 | A | 한국어 정확도 수치가 있다는 뜻은 아님. |
| backchannel_boundary 기본 쿨다운 1.0초 | [공식 문서](https://docs.livekit.io/agents/logic/turns/adaptive-interruption-handling/) | Turn boundary cooldown 확인 | 일치 | B | 정확한 기본값은 시작·끝 **(1.0, 1.0)**. 단일 구간으로 축약됨. |
| Pipecat expressive alpha 모듈 및 6개 열거 파일 존재 | [소스 디렉터리](https://github.com/pipecat-ai/pipecat/tree/main/src/pipecat/expressive) | 디렉터리·파일 확인 | 일치 | A | 열거 파일 6개 존재. `processors/`, `__init__.py`도 있어 ‘전체가 6개뿐’은 아님. |
| PerceptionSignal tone .86/.10·speech_rate, 최대값 병합 | [perception.py](https://github.com/pipecat-ai/pipecat/blob/main/src/pipecat/expressive/perception.py) | 타입·merge 구현 확인 | 일치 | A | .86/.10은 **설명용 예시**, 모델 성능·보정된 확률 결과가 아님. |
| 감지 신호·지원 기능을 LLM 지시문으로 전달 | [instructions.py](https://github.com/pipecat-ai/pipecat/blob/main/src/pipecat/expressive/instructions.py) | 지시문 생성 코드 확인 | 일치 | A | 프레임워크가 emotion2vec를 자동 연결해 준다는 뜻은 아님. |
| delivery·span·강조·sound·pause 태그와 제공사 마크업 변환 | [formatter.py](https://github.com/pipecat-ai/pipecat/blob/main/src/pipecat/expressive/formatter.py) | 문법·예제 확인 | 일치 | A | `pause N`의 N은 ms. 300ms는 문법 예시. |
| 지원하지 않는 표현은 TTS 요청에서 제외, 컨텍스트 표현 보존 | [formatter.py](https://github.com/pipecat-ai/pipecat/blob/main/src/pipecat/expressive/formatter.py) | 설명·처리 경로 확인 | 일치 | A | 공급사 capabilities에 의존. |
| MATCH_STYLE는 적대성에는 침착, 대부분 문장 무태그; BREATHE 최대 1회 | [policy.py](https://github.com/pipecat-ai/pipecat/blob/main/src/pipecat/expressive/policy.py) | 프리셋 문자열 확인 | 일치 | A | **LLM 지시**이지 위반 불가능한 실행 제한은 아님. |
| 열거한 9개 TTS 어댑터 존재, Typecast·RTZR 없음 | 미제시 → [어댑터 디렉터리](https://github.com/pipecat-ai/pipecat/tree/main/src/pipecat/adapters/tts/services) | 파일 목록 확인 | 일치 | A | 확인한 main 디렉터리 기준. alpha 경고도 존재. |
| backchannel 파라미터 .8·2.5초·.7초·volume .6 | [README](https://github.com/maisterr/pipecat-backchannel) | 설정 예제 확인 | 일치 | A | README 예제값. 모든 값이 생성자 기본값이라는 보장은 별도 확인 필요. |
| 자체 TTS로 첫 실행 클립 생성·캐시, 그룹당 2개 이상·구두점 억양 변주 | [README](https://github.com/maisterr/pipecat-backchannel) | 캐시·클립 안내 확인 | 일치 | A | ‘응’은 기본 영어 클립이 아니라 노트의 한국어 적용안. |
| 턴을 가져가지 않고 LLM 컨텍스트 흔적 없음, 추론 약 2배 | [README](https://github.com/maisterr/pipecat-backchannel) | 설계·한계 확인 | 일치 | A | 두 번째 VAD·턴 감지기로 인한 공급사 설명. |
| 완결 휴지에 반응, 단어 탐색 휴지·완결 질문에는 침묵 | [README](https://github.com/maisterr/pipecat-backchannel) | 동작 설명 확인 | 일치 | A | 설계 의도 확인이며 오류율이 검증된 것은 아님. |
| backchannel 영어 전용, 발화 중 VAP는 로드맵 | [README](https://github.com/maisterr/pipecat-backchannel) | Limitations·Roadmap 확인 | 일치 | A | 영어 클립·정규식 제한 명시. |
| 한국어 클립·정규식만 바꾸면 한국어판 완성 | [README](https://github.com/maisterr/pipecat-backchannel) | 검증·지원 범위 확인 | 확인불가 | C | 턴 감지·STT·타이밍·억양의 한국어 검증이 빠짐. |
| MaAI는 영·중·일, CPU·1/2채널, 턴·맞장구·고개 끄덕임 지원 | [README](https://github.com/MaAI-Kyoto/MaAI) | 지원 목록 확인 | 일치 | A | 공개 지원 목록에 한국어 없음. |
| Open-LLM-VTuber MIT, 헤드폰 없는 인터럽션·선발화·감정 표정 매핑 | 미제시 → [README](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | 기능·라이선스 안내 확인 | 일치 | A | 동봉 Live2D 자산에는 별도 약관이 있음. |
| LiveKit Qwen2.5-0.5B·7B 교사·약 1,500 step | 미제시 → [모델카드](https://huggingface.co/livekit/turn-detector) | 구조·증류 설명 확인 | 일치 | A | 이전 135M 모델과 구분 필요. |
| 최근 최대 6턴·128토큰, 마지막 종료 토큰 제거 후 종료 토큰 확률 사용 | [모델카드](https://huggingface.co/livekit/turn-detector) | How It Works 확인 | 일치 | A | 텍스트 기반 EOU 모델. |
| 언어별 임계값·INT8 ONNX CPU, 콜센터/합성/다중 STT 형식 학습 | [모델카드](https://huggingface.co/livekit/turn-detector) | 학습·추론 설명 확인 | 일치 | A | 영어에 추가한 구조화 데이터 개선의 다국어 전이도 공급사 설명에 있음. |
| 한국어 TPR 99.3%·TNR 94.5%, 14언어 중 힌디 다음 | [모델카드](https://huggingface.co/livekit/turn-detector) | 언어별 표 확인 | 일치 | A | **TNR 기준 2위**. TPR만 보면 여러 언어가 동률·상위이므로 기준 명시 필요. |
| LiveKit Model License(other) | [모델카드](https://huggingface.co/livekit/turn-detector) | 라이선스 항목 확인 | 일치 | A | 일반적인 Apache/BSD 모델로 취급하면 안 됨. |
| Smart Turn v3.2 8MB CPU·32MB GPU, 짧은 발화 오분류 40% 감소 | [Daily 글](https://www.daily.co/blog/smart-turn-v3-2-handling-noisy-environments-and-short-responses/) | 본문 확인 | 일치 | A | **오분류 빈도 상대 감소**. 정확도 +40%p가 아님. |
| Smart Turn 원시 오디오, 소음 데이터 추가·패딩 수정·가중치/데이터/학습 코드 공개 | [Daily 글](https://www.daily.co/blog/smart-turn-v3-2-handling-noisy-environments-and-short-responses/) | 본문·공개 링크 확인 | 일치 | A | 해당 글에 한국어 정확도 없음. |
| Smart Turn BSD-2, 글 게시일 2026-01-07 | [글](https://www.daily.co/blog/smart-turn-v3-2-handling-noisy-environments-and-short-responses/)·[LICENSE](https://github.com/pipecat-ai/smart-turn/blob/main/LICENSE) | 날짜·라이선스 대조 | 일치 | A | 확인한 코드 LICENSE 기준. |
| LiveKit 2024-12-20 글: 135M SmolLM v2·4턴·영어 전용 | [제시 URL](https://blog.livekit.io/using-a-transformer-to-improve-end-of-turn-detection/) → [이전된 원문](https://livekit.com/blog/using-a-transformer-to-improve-end-of-turn-detection?trk=article-ssr-frontend-pulse_little-text-block) | 원문 확인 | 일치 | A | 현재 다국어 카드와 다른 시점·모델. |
| 위 모델: 의도치 않은 인터럽션 85% 감소·미종료 오판 3% | [원문](https://livekit.com/blog/using-a-transformer-to-improve-end-of-turn-detection?trk=article-ssr-frontend-pulse_little-text-block) | 결과 문장 확인 | 일치 | A | 공급사 테스트. 한국어 성능으로 인용 불가. |
| 위 모델 추론 약 50ms·min_endpointing_delay 기본 500ms | [원문](https://livekit.com/blog/using-a-transformer-to-improve-end-of-turn-detection?trk=article-ssr-frontend-pulse_little-text-block) | 본문 확인 | 일치 | A | 두 수치는 서로 다른 지연 요소. |
| Hume EVI 3 글 2025-05-29, 단일 자기회귀 텍스트/음성·강화학습 | [글](https://www.hume.ai/blog/introducing-evi-3) | 날짜·구조 설명 확인 | 일치 | A | 공급사 기술 설명. |
| Hume 감정·스타일 30종 지시, 1~5점 평가 | [글](https://www.hume.ai/blog/introducing-evi-3) | Emotion/style modulation 확인 | 일치 | A | 요청 감정을 표현하는 능력 평가. |
| Hume 동일 질문을 9감정으로 표현, 8개에서 GPT-4o 우위 | [글](https://www.hume.ai/blog/introducing-evi-3) | Emotion understanding 확인 | 일치 | A | 참가자의 **1~5점 주관 평가**. 정답 대조 분류 정확도 실험으로 쓰면 부정확. |
| Gemini 약 1.5초·GPT-4o 약 2.6초·Sesame 약 1초·EVI 3 .9~1.4초 | [글](https://www.hume.ai/blog/introducing-evi-3) | Practical latency 표 확인 | 일치 | A | Hume 뉴욕 사무실의 당시 측정. 현재 보편적 지연 순위가 아님. |
| Cartesia Sonic Turbo 약 40ms·Sonic-3 약 90ms | 직접 URL 미제시 → [공식 용어 글](https://www.cartesia.ai/ko/blog/voice-terminology) | 공식 검색 색인 확인 | 확인불가 | C | 공식 글에는 Sonic 3 계열 **40~90ms** 범위가 나타나나, 두 모델별 값·측정 조건을 직접 확정하지 못함. |
| Cartesia 종단 지연 약 190ms | 제3자 기재라고만 서술 | 출처·측정 정의 확인 | 확인불가 | C | URL 없음. 첫 오디오 지연인지 전체 대화 지연인지도 불명. |

실험 제안의 수치와 조사 범위에 관한 주장입니다. 계획값은 실측 결과와 구분했습니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| R0 목표 WA 약 71.8 | [emotion2vec 논문](https://arxiv.org/html/2312.15185) | 원값과 반올림 비교 | 일치 | B | 원값 71.79. 실제 재현 성공을 뜻하지 않음. |
| R0 반나절·GPU 12GB 이상 | 없음, 추정 표기 | 실측·산정 근거 확인 | 확인불가 | C | 데이터량·특징 캐시·GPU 모델·처리량 근거 없음. |
| R1 특징 추출 1~2일+헤드 수 시간·24GB, 4/7클래스 | 없음, 제안 | 계획·실측 구분 | 확인불가 | C | 학습 설정은 EmoBox에 근거하지만 기간·메모리·클래스 선택은 제안값. |
| R2 상위 2개 백본·추가 1일·24GB | 없음, 제안 | 산정 근거 확인 | 확인불가 | C | 층별 특징 보관 방식에 따라 메모리·시간이 크게 달라짐. |
| R3 MixUp p=.3 | [MEDUSA 논문](https://arxiv.org/html/2506.09556v1) | 원 설정 대조 | 일치 | A | 한국어 축소판에서의 최적값이라는 근거는 없음. |
| R3 3~5일·24GB, KEMDy 평가자별 라벨 활용 가능성 | 없음, 추정 | 데이터·자원 근거 확인 | 확인불가 | C | 평가자별 원라벨 제공 여부도 이 노트에서는 미확인. |
| R4 배치 32·LR 1e-5·20 epoch→동결 LR 5e-6 | [Tzeng 논문](https://arxiv.org/html/2508.07282v1) | 원 설정 대조 | 일치 | A | KoBERT·RTZR로 바꾸는 부분은 신규 설계. |
| R4 1주·24~40GB | 없음, 추정 | 실측 근거 확인 | 확인불가 | C | 원 논문의 실험 비용을 재현한 값이 아님. |
| R5 길이 구간 <1초·1~2초·2~4초·>4초, 1일·12GB | [이슈 #41](https://github.com/ddlBoJack/emotion2vec/issues/41) 외 없음 | 인용 범위 확인 | 확인불가 | C | 이슈가 뒷받침하는 것은 1~2초 사용자 보고뿐. 구간·기간·GPU는 제안. |
| R6 표본 500개 이상·1~2일·GPU 불필요 | [이슈 #61](https://github.com/ddlBoJack/emotion2vec/issues/61) 외 없음 | 실험 범위 확인 | 확인불가 | C | 리샘플 자체는 CPU 가능하나 **SER 재추론까지 GPU 불필요**인지는 처리량 검증 필요. |
| R7 3일·CPU | 없음, 추정 | 구현·실측 근거 확인 | 확인불가 | C | 보정·곡선 계산의 계획값. |
| R8 각각 2~7일·24~80GB | 없음, 추정 | 모델별 요구량 확인 | 확인불가 | C | 모델 크기·정밀도·양자화·컨텍스트 조건이 없음. |
| 첫 2주 일정, R5·R6은 며칠 내 완료 | 없음, 제안 | 일정 산정 근거 확인 | 확인불가 | C | 검증된 납기나 성능 주장이 아님. |
| KEMDy19/20 사용에는 ETRI 라이선스 동의 필요 | 위키만 제시 → [KEMDy19](https://nanum.etri.re.kr/share/kjnoh/KEMDy19), [KEMDy20](https://nanum.etri.re.kr/share/kjnoh/KEMDy20) | 공식 페이지 접속 시도 | 확인불가 | C | 이번 검증에서도 공식 이용 조건 페이지에 접근하지 못함. |
| KEMDy20은 일반인 자유 대화 데이터 | 공식 URL 미제시 | 공식 배포 설명 확인 시도 | 확인불가 | C | 공식 페이지 접근 실패. 2차 대회 안내에는 일반인 자유발화로 소개됨. |
| 한국어 비언어 TTS 독립 평가·맞장구/필러 코드가 없음 | 검색 결과·미발견만 제시 | 부재 주장 범위 검토 | 확인불가 | C | 포괄적 부재를 입증할 검색 범위·목록·배제 기준 없음. |
| 한국어 개발자 블로그를 한국어 쿼리 3회로 찾지 못함 | 검색 로그 없음 | 조사 이력 확인 | 확인불가 | C | 쿼리·검색일·결과 기록이 필요. |
| API 비인증 한도 소진, raw 직접 열람, 모든 A 자료 직접 확인 | 자체 조사 기록 | 원 조사 로그·응답 보존 여부 확인 | 확인불가 | C | 이번의 재확인 결과가 과거 조사 행위 자체를 증명하지는 않음. |
| 선행 노트의 별·라이선스·지연 표는 그대로 유효 | 선행 파일·위키 이름만 제시 | 대상 범위 확인 | 확인불가 | C | 이 대상 문서 밖의 표 전체를 검증한 근거 없음. |
| 한국어 재현·층 가중합·보정 코드 공개 자체가 논문 기여 | 여러 자료에서 도출한 판단 | 선행연구 대비 신규성 근거 검토 | 확인불가 | C | 연구 제안으로는 가능하나, ‘선행연구 부재·SCI급 기여’를 확정할 근거는 아님. |
| 클립을 Typecast로 녹음하는 방법이 가장 저렴 | 없음 | 가격·구현비 비교 근거 확인 | 확인불가 | C | 요금·개발시간·운영비 비교가 없음. |
| 한벗이 이미 emotion2vec+·Smart Turn v3를 채택 | 내부 현황 주장 | 대상 노트의 외부 출처 확인 | 확인불가 | C | 내부 코드·설정·운영 로그가 필요한 주장. |
