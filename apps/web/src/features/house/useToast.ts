import { useCallback, useEffect, useRef, useState } from 'react';

const TOAST_MS = 2200;

/** 방 안 물건을 눌렀을 때 잠깐 뜨는 한 줄 알림. */
export function useToast(): { text: string | null; show: (text: string) => void } {
  const [text, setText] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const show = useCallback((next: string) => {
    setText(next);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setText(null), TOAST_MS);
  }, []);
  useEffect(() => () => clearTimeout(timer.current), []);
  return { text, show };
}
