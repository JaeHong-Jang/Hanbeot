import { josa } from '@/shared/strings/friends';

export const summaryStrings = {
  title: '통화가 끝났어요',
  lead: (friendName: string) =>
    `${josa(friendName, '이가', '가')} 오늘 이야기를 편지로 정리했어요.`,
  candidatesTitle: '기억해도 될까요?',
  candidatesHint: '저장한 것만 다음 대화에서 떠올려요.',
  stated: '내가 말한 것',
  inferred: '한벗이 느낀 것 · 내가 맞다고 함',
  approve: '저장',
  reject: '버리기',
  loading: '불러오는 중…',
  allDone: '고른 대로 정리했어요.',
  noCandidates: '이번 통화에서는 따로 기억해 둘 이야기가 없었어요.',
  goHome: '홈으로 돌아가기',
} as const;
