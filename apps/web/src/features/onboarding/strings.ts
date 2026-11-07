export const onboardingStrings = {
  title: '시작하기',
  next: '다음',
  consentTitle: '동의',
  basic: {
    label: '(필수) 서비스 이용·대화 기록 저장',
    desc: '대화에 건강·관계 이야기가 담길 수 있어요. 내용은 AI 응답 생성을 위해 해외 AI 서비스로 전송돼요.',
  },
  sensitive: {
    label: '(선택) 목소리 감정 단서 분석',
    desc: "끄면 확인 질문과 '한벗이 느낀 것' 기억이 없어요.",
  },
  voice: {
    label: '(선택) 원본 음성 보관 [준비 중]',
    desc: '목적과 기간이 정해지기 전에는 쓸 수 없어요.',
  },
  allowedTitle: '지금 설정으로 쓸 수 있는 기능',
  noneAllowed: '필수 동의가 없으면 이용할 수 없어요. 109 번호와 고지문만 볼 수 있어요.',
  start: '통화하러 가기',
} as const;
