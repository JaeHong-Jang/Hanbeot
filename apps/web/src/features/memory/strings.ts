export const memoryStrings = {
  title: '기억',
  lead: '한벗이 다음 대화에서 떠올릴 이야기예요. 고치거나 지울 수 있어요.',
  stated: '내가 말한 것',
  statedHint: '통화에서 직접 말했고, 저장하겠다고 고른 것',
  inferred: '한벗이 느낀 것',
  inferredHint: '한벗이 확인 질문으로 묻고, 내가 맞다고 한 것',
  edit: '고치기',
  save: '저장',
  cancel: '취소',
  remove: '삭제',
  empty: '아직 없어요',
  loading: '불러오는 중…',
  deleteNote: '지운 기억은 앞으로 대화에 쓰이지 않아요. 원래 대화 기록은 남아 있어요.',
  state: { stated: '말함', inferred: '추정', confirmed: '맞다고 함', approved: '저장됨' },
  when: (days: number): string => {
    if (days <= 0) return '오늘';
    if (days === 1) return '어제';
    if (days < 7) return `${days}일 전`;
    if (days < 28) return `${Math.floor(days / 7)}주 전`;
    return '한 달도 더 전';
  },
} as const;
