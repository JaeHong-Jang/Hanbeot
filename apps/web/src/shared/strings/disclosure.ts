// AI 고지 문구(P0-12)의 유일한 출처. 온보딩·통화·위기 화면은 여기서만 가져온다.
// 근거: 설계서 2.2 P0-12, 3.1, 5⑨-2.
export const DISCLOSURE_AI_FRIEND = '한벗은 AI 친구예요.';
export const DISCLOSURE_NOT_THERAPY = '치료나 상담을 대신하지 않아요.';
export const DISCLOSURE_EMERGENCY = '위급할 땐 109 번호를 안내해요.';
export const DISCLOSURE_NO_LIVE_CONTACT = '한벗 팀은 실시간으로 연락하지 않아요.';

export const DISCLOSURE_LINES = [
  DISCLOSURE_AI_FRIEND,
  DISCLOSURE_NOT_THERAPY,
  DISCLOSURE_EMERGENCY,
  DISCLOSURE_NO_LIVE_CONTACT,
] as const;

/** 통화 화면 제목. 영상통화 시안의 "한벗 · AI 친구". */
export const DISCLOSURE_CALL_TITLE = '한벗 · AI 친구';

/** 통화 화면 상단·위기 카드에 쓰는 한 줄 고지. */
export const DISCLOSURE_SHORT = `AI 친구 · ${DISCLOSURE_NOT_THERAPY}`;
