import {
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from 'react';

import styles from './ModeSheet.module.css';
import { Segmented } from './Segmented';
import { nextSheetOpen } from './sheetSnap';
import { houseStrings as s } from './strings';

import type { CallMode } from '@/entities';
import { CALL_MODES, greetingStrings as g } from '@/shared/strings/greeting';
import { Icon } from '@/shared/ui';

const MODE_OPTIONS = CALL_MODES.map((mode) => ({ value: mode, label: g.modes[mode].short }));
/** 이만큼(px) 움직이기 전에는 누른 것으로 보고 끌지 않는다. */
const DRAG_START = 6;

type Drag = { startY: number; startAt: number; base: number; active: boolean };

type Props = {
  mode: CallMode;
  onModeChange: (mode: CallMode) => void;
  callLabel: string;
  onCall: () => void;
  /** 판 바로 위에 붙어서 같이 움직이는 것(친구의 말) */
  above?: ReactNode;
};

/**
 * 홈 아래 판. 지도·음악 앱의 아래 판처럼 손가락을 따라 움직이고, 놓으면 펼침/접힘 중
 * 가까운 쪽(빠르게 밀었으면 민 쪽)에 붙는다. 접히면 손잡이와 한 줄만 남는다:
 * 왼쪽에 지금 고른 방식, 오른쪽에 작은 통화 버튼. 손잡이를 눌러도 여닫힌다.
 */
export function ModeSheet({ mode, onModeChange, callLabel, onCall, above }: Props) {
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
    const moved = e.clientY - current.startY;
    if (!current.active) {
      if (Math.abs(moved) < DRAG_START) return;
      current.active = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      dock.classList.add(styles.dragging ?? '');
    }
    const distance = travel();
    const shift = Math.min(distance, Math.max(0, current.base + moved));
    dock.style.setProperty('--p', distance > 0 ? String(shift / distance) : '0');
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
    const shift = Math.min(distance, Math.max(0, current.base + moved));
    dock.classList.remove(styles.dragging ?? '');
    dock.style.removeProperty('--p');
    setOpen(
      nextSheetOpen({
        ratio: distance > 0 ? shift / distance : 0,
        velocity: moved / Math.max(1, e.timeStamp - current.startAt),
      }),
    );
  };

  const guard = (action: () => void) => () => {
    if (justDragged.current) {
      justDragged.current = false;
      return;
    }
    action();
  };

  return (
    <div ref={dockRef} className={`${styles.dock} ${open ? '' : styles.closed}`}>
      {above}
      <section
        className={styles.sheet}
        aria-label={s.modeLabel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <button
          type="button"
          className={styles.grip}
          aria-expanded={open}
          aria-label={open ? s.sheetFold : s.sheetOpen}
          onClick={guard(() => setOpen(!open))}
        >
          <i />
        </button>

        <div className={styles.peek}>
          <p className={styles.heading}>
            <span className={styles.ask} aria-hidden={!open}>
              {s.modeTitle}
            </span>
            <span className={styles.now} aria-hidden={open}>
              {g.modes[mode].label}
            </span>
          </p>
          <button
            type="button"
            className={styles.pill}
            aria-hidden={open}
            tabIndex={open ? -1 : 0}
            onClick={guard(onCall)}
          >
            <Icon name="sofa" size={16} />
            {callLabel}
          </button>
        </div>

        <div ref={bodyRef} className={styles.body} aria-hidden={!open}>
          <Segmented
            label={s.modeLabel}
            options={MODE_OPTIONS}
            value={mode}
            onChange={(next) => guard(() => onModeChange(next))()}
          />
          <button type="button" className={styles.call} onClick={guard(onCall)}>
            <Icon name="sofa" size={20} />
            {callLabel}
          </button>
        </div>
      </section>
    </div>
  );
}
