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
  available: '지금 이야기할 수 있어',
  callFriend: (friendName: string) => `${josa(friendName, '이', '')}에게 전화하기`,
  swapTo: (friendName: string) => `${josa(friendName, '이', '')}로 바꾸기`,
  swapHint: (friendName: string) => `뒤 사진을 누르면 ${josa(friendName, '이', '')}로 바뀌어`,
  modeTitle: '오늘은 어떻게 들어줄까?',
  modes: {
    listen: { label: '그냥 들어줘', desc: '질문과 조언은 줄이고, 끝까지 들어줄게' },
    organize: { label: '함께 정리해줘', desc: '상황과 감정, 바라는 점을 같이 짚어볼게' },
    advise: { label: '솔직하게 조언해줘', desc: '할 수 있는 선택과 전할 말을 같이 생각해볼게' },
  } satisfies Record<CallMode, { label: string; desc: string }>,
  startWith: (modeLabel: string) => `${modeLabel}로 시작할게`,
  lastTitle: '지난번 이야기',
  lastSeeAll: '기억 전부 보기',
  lastEmpty: '아직 기억하고 있는 이야기가 없어. 오늘 첫 이야기를 들려줘.',
  lastContinue: '이어서 이야기하기',
} as const;
