import { josa } from '@/shared/strings/friends';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'] as const;

export const lettersStrings = {
  label: '편지',
  /** 부르는 이름이 없으면 "오늘의 너에게" */
  dear: (name: string) => (name ? `${name}에게,` : '오늘의 너에게,'),
  /** 편지 끝 서명. 하늘 → "하늘이가", 도윤 → "도윤이가" */
  signature: (friendName: string) => josa(friendName, '이가', '가'),
  nextStep: '다음에 해볼 것',
  loadingLine: '편지를 펼치는 중…',
  back: '홈',
  pageTitle: (d: Date) =>
    `${d.getMonth() + 1}월 ${d.getDate()}일 ${WEEKDAYS[d.getDay()] ?? ''}요일 편지`,
  callLength: (minutes: number) => (minutes < 1 ? '1분 안 되게 통화' : `${minutes}분 통화`),
  notFound: '이 편지를 찾지 못했어요.',
  /** 카드 위 날짜: 오늘, 어제, n일 전, 그보다 오래면 월/일 */
  when: (d: Date, now: Date): string => {
    const startOf = (x: Date) => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime();
    const days = Math.round((startOf(now) - startOf(d)) / 86_400_000);
    if (days <= 0) return '오늘';
    if (days === 1) return '어제';
    if (days < 7) return `${days}일 전`;
    return `${d.getMonth() + 1}/${d.getDate()}`;
  },
} as const;
