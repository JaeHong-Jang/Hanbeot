import type { CallMode } from '@/entities';

/** 홈(하늘이네 거실)이 쓰는 인사와 대화 방식 문장. */
export const greetingStrings = {
  modes: {
    listen: { label: '그냥 들어줘', short: '들어줘' },
    organize: { label: '같이 정리해', short: '정리해줘' },
    advise: { label: '솔직하게 조언해', short: '조언해줘' },
  } satisfies Record<CallMode, { label: string; short: string }>,
  /** 친구가 먼저 건네는 한마디. 지금은 정해진 문장, 나중에 기억을 보고 AI가 만든다. */
  opener: (hour: number, hasMemory: boolean): string => {
    if (hasMemory) {
      if (hour >= 5 && hour < 11) return '좋은 아침! 지난번 얘기, 그 뒤로 좀 괜찮아졌어?';
      return '지난번에 했던 얘기, 계속 마음이 쓰였어. 오늘은 어땠어?';
    }
    if (hour < 5) return '아직 안 잤구나. 잠이 안 오면 얘기하자.';
    if (hour < 11) return '좋은 아침! 오늘 하루 어떻게 시작했어?';
    if (hour < 18) return '오늘 하루 어때? 잠깐 쉬어 가도 돼.';
    return '오늘 하루 수고했어. 어떤 일이 있었는지 들려줘.';
  },
} as const;

export const CALL_MODES: readonly CallMode[] = ['listen', 'organize', 'advise'];

export const isCallMode = (value: string): value is CallMode =>
  (CALL_MODES as readonly string[]).includes(value);
