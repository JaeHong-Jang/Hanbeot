import styles from './ModeNote.module.css';
import { homeStrings as s } from './strings';

import type { CallMode } from '@/entities';

const MODES: readonly CallMode[] = ['listen', 'organize', 'advise'];

type Props = { mode: CallMode; onChange: (mode: CallMode) => void };

/** 대화 방식 세 가지를 한 줄 세그먼트로 고른다. 고른 방식의 설명이 아래에 바로 보인다. */
export function ModeNote({ mode, onChange }: Props) {
  return (
    <div className={styles.note}>
      <p className={styles.title} id="mode-title">
        {s.modeTitle}
      </p>
      <div className={styles.seg} role="radiogroup" aria-labelledby="mode-title">
        {MODES.map((m) => (
          <button
            key={m}
            type="button"
            role="radio"
            aria-checked={m === mode}
            className={styles.option}
            onClick={() => onChange(m)}
          >
            {s.modes[m].short}
          </button>
        ))}
      </div>
      <p className={styles.desc}>{s.modes[mode].desc}</p>
    </div>
  );
}
