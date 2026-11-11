/** 초 → "07:42". 음수는 0으로 본다. */
export function formatMmSs(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

const DAY_MS = 24 * 60 * 60 * 1000;

/** ISO 시각에서 now까지 지난 날 수(달력 기준이 아니라 24시간 단위). 미래거나 읽을 수 없으면 0. */
export function daysSince(iso: string, now: Date = new Date()): number {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return 0;
  return Math.max(0, Math.floor((now.getTime() - then) / DAY_MS));
}
