import styles from './ModeNote.module.css';
import { homeStrings as s } from './strings';

import type { CallMode } from '@/entities';

const MODES: readonly CallMode[] = ['listen', 'organize', 'advise'];

type Props = { mode: CallMode; onChange: (mode: CallMode) => void };

/** 줄노트에 적힌 대화 방식 세 가지. 고른 항목에 손으로 그린 동그라미가 쳐진다. */
export function ModeNote({ mode, onChange }: Props) {
  return (
    <section className={styles.note} aria-label={s.modeTitle}>
      <h2>{s.modeTitle}</h2>
      <div role="radiogroup" aria-label={s.modeTitle}>
        {MODES.map((m) => (
          <button
            key={m}
            type="button"
            role="radio"
            aria-checked={m === mode}
            className={styles.line}
            onClick={() => onChange(m)}
          >
            <span className={styles.label}>
              {s.modes[m].label}
              {m === mode ? (
                <svg
                  className={styles.circle}
                  viewBox="0 0 200 60"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    pathLength={1}
                    d="M18 34C14 18 62 7 112 8c46 1 80 9 78 24-2 16-50 22-96 21C46 52 8 45 10 30 12 18 44 10 76 9"
                  />
                </svg>
              ) : null}
            </span>
          </button>
        ))}
      </div>
      <p className={styles.desc}>{s.modes[mode].desc}</p>
    </section>
  );
}
