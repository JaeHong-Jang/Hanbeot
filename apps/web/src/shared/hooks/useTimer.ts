import { useEffect, useState } from 'react';

/** running이 true인 동안 1초마다 늘어나는 경과 초. false가 되면 0으로 돌아간다. */
export function useTimer(running: boolean): number {
  const [elapsedSec, setElapsedSec] = useState(0);
  useEffect(() => {
    if (!running) {
      setElapsedSec(0);
      return;
    }
    const id = window.setInterval(() => setElapsedSec((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, [running]);
  return elapsedSec;
}
