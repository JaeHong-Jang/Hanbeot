/** 한 획의 길이와 쓰는 방식. joined=앞 획에서 펜을 떼지 않고 이어 쓴다. speed=빠르기 배수(이음선은 빠르게). */
export type StrokeMeasure = { length: number; joined: boolean; speed: number };
export type StrokeSpan = { startMs: number; endMs: number };

/**
 * 획마다 쓰기 시작·끝 시각을 정한다.
 * 펜 속도는 일정하게(길이 ÷ 빠르기에 비례) 두고, 펜을 떼는 곳마다 liftMs만큼 쉰다.
 * 전체가 totalMs에 끝난다.
 */
export function strokeSpans(
  strokes: readonly StrokeMeasure[],
  totalMs: number,
  liftMs: number,
): StrokeSpan[] {
  const liftCount = strokes.filter((stroke, order) => order > 0 && !stroke.joined).length;
  const drawMs = Math.max(0, totalMs - liftCount * liftMs);
  const costs = strokes.map((stroke) => stroke.length / Math.max(stroke.speed, 0.01));
  const totalCost = costs.reduce((sum, cost) => sum + cost, 0);

  const spans: StrokeSpan[] = [];
  let cursorMs = 0;
  strokes.forEach((stroke, order) => {
    if (order > 0 && !stroke.joined) cursorMs += liftMs;
    const durationMs = totalCost === 0 ? 0 : ((costs[order] ?? 0) / totalCost) * drawMs;
    spans.push({ startMs: cursorMs, endMs: cursorMs + durationMs });
    cursorMs += durationMs;
  });
  return spans;
}

/** 0~1 사이로 자른 진행률. */
export function spanProgress(span: StrokeSpan, elapsedMs: number): number {
  if (span.endMs <= span.startMs) return elapsedMs >= span.endMs ? 1 : 0;
  return Math.min(1, Math.max(0, (elapsedMs - span.startMs) / (span.endMs - span.startMs)));
}
