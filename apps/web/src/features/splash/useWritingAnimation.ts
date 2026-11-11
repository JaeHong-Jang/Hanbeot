import { useLayoutEffect, useRef, type MutableRefObject } from 'react';

import { spanProgress, strokeSpans } from '@/shared/lib/strokeTiming';
import { LETTERING, slantPoint } from '@/shared/ui';

const WRITE_MS = 2700; // "한벗"을 다 쓰는 시간. 붓은 펜보다 천천히 간다
const LIFT_MS = 90; // 붓을 뗐다 다시 대는 시간
const LINK_SPEED = 1.9; // 이음선은 힘을 빼고 빠르게 지나간다
const LIFT_HEIGHT = 7;

type Point = { x: number; y: number };

type Refs = {
  strokeRefs: MutableRefObject<(SVGGElement | null)[]>;
  penRef: MutableRefObject<SVGGElement | null>;
};

/**
 * 획 묶음(strokeRefs)을 순서대로 그려 나가고 붓(penRef)을 그 끝에 올린다.
 * 다 쓰면 onWritten을 한 번 부른다. 움직임 줄이기 설정이면 바로 완성된 글씨를 보여준다.
 */
export function useWritingAnimation(onWritten: () => void): Refs {
  const strokeRefs = useRef<(SVGGElement | null)[]>([]);
  const penRef = useRef<SVGGElement | null>(null);
  const onWrittenRef = useRef(onWritten);
  onWrittenRef.current = onWritten;

  useLayoutEffect(() => {
    const groups = strokeRefs.current.filter((g): g is SVGGElement => g !== null);
    const centers = groups
      .map((g) => g.firstElementChild)
      .filter((p): p is SVGPathElement => p instanceof SVGPathElement);
    // jsdom처럼 경로 길이를 잴 수 없는 환경에서는 애니메이션 없이 끝낸다
    const canMeasure =
      centers.length === groups.length && centers.every((p) => 'getTotalLength' in p);
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (!canMeasure || reduceMotion || groups.length === 0) {
      penRef.current?.setAttribute('visibility', 'hidden');
      onWrittenRef.current();
      return;
    }

    const lengths = centers.map((p) => p.getTotalLength());
    const spans = strokeSpans(
      LETTERING.strokes.map((stroke, order) => ({
        length: lengths[order] ?? 0,
        joined: stroke.joined,
        speed: stroke.kind === 'link' ? LINK_SPEED : 1,
      })),
      WRITE_MS,
      LIFT_MS,
    );

    groups.forEach((g, order) => {
      const dash = (lengths[order] ?? 0) + 2;
      g.style.setProperty('--len', String(dash));
      g.style.setProperty('--off', String(dash));
      g.style.opacity = '0';
    });

    const pointAt = (order: number, progress: number): Point => {
      const path = centers[order];
      if (!path) return { x: 0, y: 0 };
      const p = path.getPointAtLength((lengths[order] ?? 0) * progress);
      return slantPoint(p.x, p.y);
    };

    let frame = 0;
    let startedAt: number | null = null;
    const tick = (now: number) => {
      startedAt ??= now;
      const elapsedMs = now - startedAt;
      let pen: Point | null = null;

      for (const [order, g] of groups.entries()) {
        const span = spans[order];
        if (!span) continue;
        const progress = spanProgress(span, elapsedMs);
        g.style.setProperty('--off', String(((lengths[order] ?? 0) + 2) * (1 - progress)));
        g.style.opacity = progress > 0 ? '1' : '0';
        if (elapsedMs >= span.startMs && elapsedMs <= span.endMs) pen = pointAt(order, progress);
      }

      if (pen === null) {
        // 획 사이: 다음 획 시작점으로 살짝 들어서 옮긴다
        const nextOrder = spans.findIndex((span) => span.startMs > elapsedMs);
        if (nextOrder > 0) {
          const from = pointAt(nextOrder - 1, 1);
          const to = pointAt(nextOrder, 0);
          const previousEnd = spans[nextOrder - 1]?.endMs ?? 0;
          const k = Math.min(1, (elapsedMs - previousEnd) / LIFT_MS);
          pen = {
            x: from.x + (to.x - from.x) * k,
            y: from.y + (to.y - from.y) * k - Math.sin(k * Math.PI) * LIFT_HEIGHT,
          };
        } else {
          pen = pointAt(groups.length - 1, 1);
        }
      }
      penRef.current?.setAttribute('transform', `translate(${pen.x} ${pen.y})`);

      if (elapsedMs < WRITE_MS) frame = requestAnimationFrame(tick);
      else onWrittenRef.current();
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return { strokeRefs, penRef };
}
