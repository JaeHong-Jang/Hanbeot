import { useCallback, useState } from 'react';

import { addCallLog, demoCallLog, parseCallLog, type CallLogEntry } from '@/shared/lib/callLog';

const KEY = 'hanbeot.calls';
const IS_MOCK = import.meta.env.VITE_API_MOCK === 'on';

function read(): CallLogEntry[] {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    raw = null; // 사생활 보호 창 등에서 저장소를 못 쓰는 경우
  }
  const log = parseCallLog(raw);
  // 가짜 API 모드에서 처음 열면 홈이 비어 보이지 않게 예시 기록을 보여준다(저장하지 않음).
  return log.length === 0 && IS_MOCK ? demoCallLog(new Date()) : log;
}

/** 이 기기의 통화 기록(세션 번호와 시간만). 홈의 최근 편지와 이번 주 요약이 쓴다. */
export function useCallLog(): { log: CallLogEntry[]; add: (entry: CallLogEntry) => void } {
  const [log, setLog] = useState(read);
  const add = useCallback((entry: CallLogEntry) => {
    setLog((prev) => {
      const next = addCallLog(prev, entry);
      try {
        window.localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* 저장소를 못 쓰면 이번 화면에서만 유지 */
      }
      return next;
    });
  }, []);
  return { log, add };
}
