import type { ReactNode } from 'react';

import styles from './ModeSheet.module.css';
import { Segmented } from './Segmented';
import { houseStrings as s } from './strings';
import swipe from './swipeSheet.module.css';
import { useSwipeSheet } from './useSwipeSheet';

import type { CallMode } from '@/entities';
import { CALL_MODES, greetingStrings as g } from '@/shared/strings/greeting';
import { Icon } from '@/shared/ui';

const MODE_OPTIONS = CALL_MODES.map((mode) => ({ value: mode, label: g.modes[mode].short }));

type Props = {
  mode: CallMode;
  onModeChange: (mode: CallMode) => void;
  callLabel: string;
  onCall: () => void;
  /** 판 바로 위에 붙어서 같이 움직이는 것(친구의 말) */
  above?: ReactNode;
};

/**
 * 홈 아래 판. 위아래로 밀어 여닫고, 접히면 손잡이와 한 줄만 남는다:
 * 왼쪽에 지금 고른 방식, 오른쪽에 작은 통화 버튼. 손잡이를 눌러도 여닫힌다.
 */
export function ModeSheet({ mode, onModeChange, callLabel, onCall, above }: Props) {
  const { open, toggle, guard, bodyRef, dockProps, handlers } = useSwipeSheet();

  return (
    <div {...dockProps}>
      {above}
      <section className={swipe.sheet} aria-label={s.modeLabel} {...handlers}>
        <button
          type="button"
          className={swipe.grip}
          aria-expanded={open}
          aria-label={open ? s.sheetFold : s.sheetOpen}
          onClick={toggle}
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

        <div ref={bodyRef} className={`${swipe.body} ${styles.body}`} aria-hidden={!open}>
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
