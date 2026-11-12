import { useCallback, useState } from 'react';

/** 이 기기에만 남기는 화면 설정 키. 서버 데이터가 아니라 취향(고른 친구, 시작 모드, 부르는 이름)만 둔다. */
export const PREF_KEYS = {
  friend: 'hanbeot.pref.friend',
  mode: 'hanbeot.pref.mode',
  name: 'hanbeot.pref.name',
  /** 하늘이네 집 첫 안내를 본 적 있는지 */
  houseCoached: 'hanbeot.pref.houseCoached',
} as const;

function readPref(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null; // 사생활 보호 창 등에서 저장소를 못 쓰는 경우
  }
}

/** localStorage에 남는 문자열 설정 하나. 저장소를 못 쓰면 이번 화면에서만 유지된다. */
export function useLocalPref(
  key: string,
  fallback: string,
): { value: string; set: (next: string) => void } {
  const [value, setValue] = useState(() => readPref(key) ?? fallback);
  const set = useCallback(
    (next: string) => {
      setValue(next);
      try {
        window.localStorage.setItem(key, next);
      } catch {
        /* 무시 */
      }
    },
    [key],
  );
  return { value, set };
}
