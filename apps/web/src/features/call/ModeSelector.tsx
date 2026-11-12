import { useEffect, useRef, type KeyboardEvent } from 'react';

import styles from './ModeSelector.module.css';
import { callStrings as s } from './strings';

import type { CallMode } from '@/entities';
import { Icon } from '@/shared/ui';

const MODES: readonly CallMode[] = ['listen', 'organize', 'advise'];
const MENU_ID = 'call-mode-menu';

type Props = {
  mode: CallMode;
  open: boolean;
  onToggle: () => void;
  /** close=false면 메뉴를 연 채로 고른다(방향키 이동). */
  onChange: (mode: CallMode, close: boolean) => void;
};

/** "그냥 들어줘 ⌄" 알약 하나. 누르면 세 가지 방식이 라디오로 펼쳐진다. */
export function ModeSelector({ mode, open, onToggle, onChange }: Props) {
  const optionRefs = useRef<Partial<Record<CallMode, HTMLButtonElement | null>>>({});
  const pillRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(open);

  // 열면 고른 항목으로, 닫히면 알약으로 포커스를 돌려준다.
  useEffect(() => {
    if (open) optionRefs.current[mode]?.focus();
    else if (wasOpen.current) pillRef.current?.focus();
    wasOpen.current = open;
  }, [open, mode]);

  // 라디오 그룹 관례: 위·아래 화살표로 옮겨 다닌다.
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
    if (step === undefined) return;
    event.preventDefault();
    const current = MODES.indexOf(mode);
    const next = MODES[(current + step + MODES.length) % MODES.length] ?? mode;
    onChange(next, false);
  };

  return (
    <div className={styles.wrap}>
      {open ? (
        <div
          id={MENU_ID}
          className={styles.menu}
          role="radiogroup"
          aria-label={s.modeLabel}
          onKeyDown={onKeyDown}
        >
          {MODES.map((m) => (
            <button
              key={m}
              ref={(el) => {
                optionRefs.current[m] = el;
              }}
              type="button"
              role="radio"
              aria-checked={m === mode}
              tabIndex={m === mode ? 0 : -1}
              className={styles.option}
              onClick={() => onChange(m, true)}
            >
              {s.modes[m]}
            </button>
          ))}
        </div>
      ) : null}
      <button
        ref={pillRef}
        type="button"
        className={styles.pill}
        aria-controls={open ? MENU_ID : undefined}
        aria-expanded={open}
        aria-label={`${s.modeLabel}: ${s.modes[mode]}`}
        onClick={onToggle}
      >
        {s.modes[mode]}
        <Icon name="chevronDown" size={18} className={open ? styles.flipped : undefined} />
      </button>
    </div>
  );
}
