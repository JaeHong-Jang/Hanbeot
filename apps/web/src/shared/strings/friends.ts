// AI 친구 캐릭터 이름과 한 줄 소개. 홈·통화 화면이 함께 쓴다.
export const FRIEND_STRINGS = {
  haneul: { name: '하늘', tagline: '포근하게 끝까지 들어주는 친구', mood: '소파에서 차 마시는 중' },
  doyun: { name: '도윤', tagline: '차분하게 같이 정리해주는 친구', mood: '창가에서 책 읽는 중' },
  jiwoo: {
    name: '지우',
    tagline: '같이 웃다 보면 가벼워지는 친구',
    mood: '주방에서 간식 만드는 중',
  },
  seoyun: {
    name: '서윤',
    tagline: '솔직하게 말해 주는 든든한 친구',
    mood: '베란다에서 바람 쐬는 중',
  },
} as const;

/** 받침이 있으면 withBatchim, 없으면 withoutBatchim을 붙인다. josa('하늘', '이', '') → '하늘이' */
export function josa(word: string, withBatchim: string, withoutBatchim: string): string {
  const code = word.charCodeAt(word.length - 1) - 0xac00;
  const hasBatchim = code >= 0 && code <= 11171 && code % 28 !== 0;
  return word + (hasBatchim ? withBatchim : withoutBatchim);
}
