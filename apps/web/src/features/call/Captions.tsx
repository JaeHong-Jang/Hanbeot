import styles from './Captions.module.css';
import { callStrings as s } from './strings';

import type { Caption } from '@/shared/voice';

const VISIBLE_COUNT = 4; // 화면에는 최근 몇 줄만. 전체는 통화 뒤 요약에서 본다.

export function Captions({ captions }: { captions: readonly Caption[] }) {
  return (
    <div className={styles.captions} aria-live="polite" aria-label={s.captions}>
      {captions.slice(-VISIBLE_COUNT).map((c) => (
        <p
          key={c.id}
          className={`${styles.bubble} ${c.speaker === 'user' ? styles.user : styles.ai}`}
        >
          <span className={styles.speaker}>{c.speaker === 'user' ? s.user : s.ai}: </span>
          {c.text}
        </p>
      ))}
    </div>
  );
}
