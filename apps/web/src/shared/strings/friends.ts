// AI 친구 캐릭터 이름과 한 줄 소개. 홈·통화 화면이 함께 쓴다.
export const FRIEND_STRINGS = {
  haneul: { name: '하늘', tagline: '포근하게 끝까지 들어주는 친구' },
  doyun: { name: '도윤', tagline: '차분하게 같이 정리해주는 친구' },
} as const;

/** 받침이 있으면 withBatchim, 없으면 withoutBatchim을 붙인다. josa('하늘', '이', '') → '하늘이' */
export function josa(word: string, withBatchim: string, withoutBatchim: string): string {
  const code = word.charCodeAt(word.length - 1) - 0xac00;
  const hasBatchim = code >= 0 && code <= 11171 && code % 28 !== 0;
  return word + (hasBatchim ? withBatchim : withoutBatchim);
}
