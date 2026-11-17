import { useLayoutEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';

import { nextSheetOpen } from './sheetSnap';
import css from './swipeSheet.module.css';

/** 이만큼(px) 움직이기 전에는 누른 것으로 보고 끌지 않는다. */
const DRAG_START = 6;

type Drag = { startY: number; startAt: number; base: number; active: boolean };

/**
 * 아래 판을 위아래로 밀어 여닫는 동작. 지도·음악 앱의 아래 판처럼 손가락을 따라 움직이고,
 * 놓으면 펼침/접힘 중 가까운 쪽(빠르게 밀었으면 민 쪽)에 붙는다.
 * dockProps는 움직이는 묶음에, bodyRef는 접히면 화면 밖으로 내려가는 부분에, handlers는 판에 붙인다.
 */
export function useSwipeSheet() {
  const [open, setOpen] = useState(true);
  const dockRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const drag = useRef<Drag | null>(null);
  /** 끌고 난 직후의 눌림(click)은 버튼에 전달하지 않는다. */
  const justDragged = useRef(false);

  const travel = () => bodyRef.current?.offsetHeight ?? 0;

  // 접혔을 때 내려갈 거리 = 펼쳤을 때만 보이는 부분의 높이. 내용이 바뀌면 다시 잰다.
  useLayoutEffect(() => {
    const dock = dockRef.current;
    const body = bodyRef.current;
    if (!dock || !body) return;
    const measure = () => dock.style.setProperty('--travel', `${body.offsetHeight}px`);
    measure();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(measure);
    observer.observe(body);
    return () => observer.disconnect();
  }, []);

  const shiftOf = (current: Drag, clientY: number) =>
    Math.min(travel(), Math.max(0, current.base + clientY - current.startY));

  const onPointerDown = (e: ReactPointerEvent) => {
    justDragged.current = false;
    drag.current = {
      startY: e.clientY,
      startAt: e.timeStamp,
      base: open ? 0 : travel(),
      active: false,
    };
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLElement>) => {
    const current = drag.current;
    const dock = dockRef.current;
    if (!current || !dock) return;
    if (!current.active) {
      if (Math.abs(e.clientY - current.startY) < DRAG_START) return;
      current.active = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      dock.dataset.dragging = 'true';
    }
    const distance = travel();
    dock.style.setProperty(
      '--p',
      distance > 0 ? String(shiftOf(current, e.clientY) / distance) : '0',
    );
  };

  const endDrag = (e: ReactPointerEvent) => {
    const current = drag.current;
    const dock = dockRef.current;
    drag.current = null;
    if (!current || !dock) return;
    const moved = e.clientY - current.startY;
    // 움직임 이벤트 없이 뗀 자리만 다른 경우(빠른 튕김)도 민 것으로 본다.
    if (!current.active && Math.abs(moved) < DRAG_START) return;
    justDragged.current = true;
    const distance = travel();
    delete dock.dataset.dragging;
    dock.style.removeProperty('--p');
    setOpen(
      nextSheetOpen({
        ratio: distance > 0 ? shiftOf(current, e.clientY) / distance : 0,
        velocity: moved / Math.max(1, e.timeStamp - current.startAt),
      }),
    );
  };

  /** 판 안의 버튼 동작을 감싼다: 밀다가 손을 뗀 자리가 버튼 위여도 눌리지 않게. */
  const guard = (action: () => void) => () => {
    if (justDragged.current) {
      justDragged.current = false;
      return;
    }
    action();
  };

  return {
    open,
    toggle: guard(() => setOpen((current) => !current)),
    guard,
    bodyRef,
    dockProps: { ref: dockRef, className: css.dock, 'data-open': open },
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerCancel: endDrag,
    },
  };
}
