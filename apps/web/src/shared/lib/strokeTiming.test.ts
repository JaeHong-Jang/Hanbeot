import { spanProgress, strokeSpans } from './strokeTiming';

describe('strokeSpans', () => {
  it('ends exactly at the total time and keeps stroke order', () => {
    const spans = strokeSpans(
      [
        { length: 100, joined: false, speed: 1 },
        { length: 50, joined: true, speed: 1 },
        { length: 150, joined: false, speed: 1 },
      ],
      1000,
      100,
    );
    expect(spans).toHaveLength(3);
    expect(spans[0]?.startMs).toBe(0);
    expect(spans[2]?.endMs).toBeCloseTo(1000);
    // 이어 쓰는 획은 앞 획이 끝나는 순간 시작한다
    expect(spans[1]?.startMs).toBeCloseTo(spans[0]?.endMs ?? -1);
    // 펜을 떼는 획은 liftMs만큼 쉰 뒤 시작한다
    expect((spans[2]?.startMs ?? 0) - (spans[1]?.endMs ?? 0)).toBeCloseTo(100);
  });

  it('gives time in proportion to length divided by speed', () => {
    const spans = strokeSpans(
      [
        { length: 100, joined: false, speed: 1 },
        { length: 100, joined: true, speed: 2 },
      ],
      900,
      0,
    );
    const first = (spans[0]?.endMs ?? 0) - (spans[0]?.startMs ?? 0);
    const second = (spans[1]?.endMs ?? 0) - (spans[1]?.startMs ?? 0);
    expect(first).toBeCloseTo(600);
    expect(second).toBeCloseTo(300);
  });
});

describe('spanProgress', () => {
  it('clamps to 0..1', () => {
    const span = { startMs: 100, endMs: 300 };
    expect(spanProgress(span, 0)).toBe(0);
    expect(spanProgress(span, 200)).toBeCloseTo(0.5);
    expect(spanProgress(span, 999)).toBe(1);
  });
});
