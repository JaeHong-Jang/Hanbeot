import type { CallMode } from '@/entities';
import { josa } from '@/shared/strings/friends';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'] as const;

export const homeStrings = {
  greetingByHour: (hour: number): string => {
    if (hour < 5) return '아직 잠이 안 와?';
    if (hour < 11) return '좋은 아침이야.';
    if (hour < 18) return '오늘 하루는 어때?';
    return '오늘 하루는 어땠어?';
  },
  callName: (name: string) => `${josa(name, '아', '야')},`,
  sub: '말하기 어려운 이야기도, 여기선 괜찮아.',
  date: (d: Date) => `${d.getMonth() + 1}월 ${d.getDate()}일 ${WEEKDAYS[d.getDay()] ?? ''}요일`,
  friendLabel: '오늘 이야기할 친구',
  fromLabel: '보낸 사람',
  postmark: (d: Date) => `${d.getMonth() + 1}.${d.getDate()}`,
  available: '지금 이야기할 수 있어',
  callFriend: (friendName: string) => `${josa(friendName, '이', '')}에게 전화하기`,
  swapTo: (friendName: string) => `${josa(friendName, '이', '')}로 바꾸기`,
  modeTitle: '오늘은 어떻게 들어줄까?',
  modes: {
    listen: {
      label: '그냥 들어줘',
      short: '들어줘',
      desc: '질문과 조언은 줄이고, 끝까지 들어줄게',
    },
    organize: {
      label: '함께 정리해줘',
      short: '정리해줘',
      desc: '상황과 감정, 바라는 점을 같이 짚어볼게',
    },
    advise: {
      label: '솔직하게 조언해줘',
      short: '조언해줘',
      desc: '할 수 있는 선택과 전할 말을 같이 생각해볼게',
    },
  } satisfies Record<CallMode, { label: string; short: string; desc: string }>,
  startWith: (modeLabel: string) => `${modeLabel}로 시작할게`,
  help: '도움 받기',
  lastLabel: '지난번',
  /** 친구가 먼저 건네는 한마디. 지금은 정해진 문장, 나중에 기억을 보고 AI가 만든다. */
  opener: (hour: number, hasMemory: boolean): string => {
    if (hasMemory) {
      if (hour < 11) return '좋은 아침! 지난번 얘기, 그 뒤로 좀 괜찮아졌어?';
      return '지난번에 했던 얘기, 계속 마음이 쓰였어. 오늘은 어땠어?';
    }
    if (hour < 5) return '아직 안 잤구나. 잠이 안 오면 얘기하자.';
    if (hour < 11) return '좋은 아침! 오늘 하루 어떻게 시작했어?';
    if (hour < 18) return '오늘 하루 어때? 잠깐 쉬어 가도 돼.';
    return '오늘 하루 수고했어. 어떤 일이 있었는지 들려줘.';
  },
  weekTitle: '이번 주',
  weekCalls: (calls: number, minutes: number) =>
    calls === 0 ? '이번 주엔 아직 이야기하지 않았어요.' : `${calls}번, ${minutes}분 이야기했어요.`,
  weekNote: (breakMinutes: number) =>
    `한 번에 ${breakMinutes}분 넘게 이야기하면 잠깐 쉬어 가자고 알려 드려요.`,
} as const;
