import type { Consent } from '@/entities';

/** 설계서 5⑩-2 표 8조합의 허용 기능. 원본 음성 보관(V)은 MVP 비활성이라 기능을 늘리지 않는다. */
export const FEATURE_BASIC = [
  '통화',
  '전사',
  '요약',
  '"내가 말한 것" 기억',
  '위기 안내(텍스트)',
] as const;
export const FEATURE_SENSITIVE = [
  '목소리 감정 단서',
  '확인 질문',
  '"한벗이 느낀 것" 기억',
  '위기 로그',
] as const;

export function allowedFeatures(consent: Consent): readonly string[] {
  if (!consent.basic) return [];
  return consent.sensitive ? [...FEATURE_BASIC, ...FEATURE_SENSITIVE] : [...FEATURE_BASIC];
}

/** 필수 동의가 없으면 선택 항목은 저장하지 않는다(표 2~4행). */
export function normalizeConsent(consent: Consent): Consent {
  return consent.basic ? consent : { basic: false, voice: false, sensitive: false };
}
